import type { APIRoute } from "astro";
import { authenticateRequest } from "../../../lib/auth";
import { bindings } from "../../../lib/cloudflare";
import { error, json } from "../../../lib/http";

const imageTypes = new Set(["image/jpeg", "image/png", "image/webp", "image/avif"]);

export const POST: APIRoute = async ({ request }) => {
  const user = await authenticateRequest(request, bindings);
  if (!user) return error("Unauthorized", 401);

  const form = await request.formData();
  const file = form.get("file");
  const resourceId = Number(form.get("resourceId"));
  const kind = form.get("kind") === "pdf" ? "pdf" : "image";
  if (!(file instanceof File)) return error("A file is required");
  if (!Number.isInteger(resourceId) || resourceId < 1) return error("A valid resourceId is required");

  const resource = await bindings.DB.prepare(
    "SELECT author_email FROM resources WHERE id = ? LIMIT 1"
  ).bind(resourceId).first<{ author_email: string }>();
  if (!resource) return error("Resource not found", 404);
  if (user.role !== "admin" && resource.author_email.toLowerCase() !== user.email) return error("Forbidden", 403);

  if (kind === "image" && (!imageTypes.has(file.type) || file.size > 5 * 1024 * 1024)) {
    return error("Images must be JPEG, PNG, WebP, or AVIF and no larger than 5 MB");
  }
  if (kind === "pdf" && (file.type !== "application/pdf" || file.size > 25 * 1024 * 1024)) {
    return error("PDF files must be no larger than 25 MB");
  }

  const extension = safeExtension(file.name, kind);
  const key = `${kind}s/${new Date().toISOString().slice(0, 10)}/${crypto.randomUUID()}.${extension}`;
  await bindings.MEDIA.put(key, file.stream(), {
    httpMetadata: { contentType: file.type },
    customMetadata: { uploadedBy: user.email, resourceId: String(resourceId) }
  });

  const column = kind === "pdf" ? "pdf_key" : "featured_image_key";
  await bindings.DB.prepare(`UPDATE resources SET ${column} = ?, updated_at = ? WHERE id = ?`)
    .bind(key, new Date().toISOString(), resourceId).run();

  return json({ ok: true, key, url: `/media/${encodeURIComponent(key)}` }, { status: 201 });
};

function safeExtension(name: string, kind: "image" | "pdf"): string {
  if (kind === "pdf") return "pdf";
  const extension = name.split(".").pop()?.toLowerCase();
  return extension && ["jpg", "jpeg", "png", "webp", "avif"].includes(extension) ? extension : "jpg";
}
