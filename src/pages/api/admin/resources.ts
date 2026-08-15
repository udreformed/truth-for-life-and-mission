import type { APIRoute } from "astro";
import { authenticateRequest } from "../../../lib/auth";
import { bindings } from "../../../lib/cloudflare";
import { error, json } from "../../../lib/http";
import { saveAutomaticArticleEnglishTranslation, saveAutomaticDevotionalTranslations } from "../../../lib/translate";

const allowedTypes = new Set(["article", "book", "video", "pdf", "course", "devotional", "sermon", "sunday_school"]);
const allowedLanguages = new Set(["th", "ko", "en"]);

async function requireUser(request: Request) {
  return authenticateRequest(request, bindings);
}

export const GET: APIRoute = async ({ request }) => {
  const user = await requireUser(request);
  if (!user) return error("Unauthorized", 401);

  const requestedLanguage = new URL(request.url).searchParams.get("language") || "";
  const languageFilter = allowedLanguages.has(requestedLanguage) ? requestedLanguage : "";
  const filters: string[] = [];
  const values: string[] = [];
  if (user.role === "author") {
    filters.push("r.author_email = ? COLLATE NOCASE");
    values.push(user.email);
  }
  if (languageFilter) {
    filters.push("t.language = ?");
    values.push(languageFilter);
  }
  const whereClause = filters.length ? `WHERE ${filters.join(" AND ")}` : "";
  const statement = bindings.DB.prepare(`
    SELECT r.id, r.type, r.slug, r.status, r.youtube_url, r.content_date, r.series_slot, r.pdf_key,
      r.featured_image_key, r.audience, r.difficulty, r.author_email,
      r.published_at, r.created_at, r.updated_at,
      t.language, t.title, t.summary, t.body
    FROM resources r
    INNER JOIN resource_translations t ON t.resource_id = r.id
    ${whereClause}
    ORDER BY r.updated_at DESC, t.language ASC
    LIMIT 300
  `);
  const result = values.length ? await statement.bind(...values).all() : await statement.all();
  return json({ user, resources: result.results });
};

export const POST: APIRoute = async ({ request }) => {
  const user = await requireUser(request);
  if (!user) return error("Unauthorized", 401);

  const payload = await parsePayload(request);
  if (payload instanceof Response) return payload;

  const now = new Date().toISOString();
  const insert = await bindings.DB.prepare(`
    INSERT INTO resources (
      type, slug, status, youtube_url, content_date, series_slot, audience, difficulty, author_email,
      published_at, created_at, updated_at
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `).bind(
    payload.type,
    payload.slug,
    payload.status,
    payload.youtubeUrl || null,
    payload.contentDate || null,
    payload.seriesSlot || null,
    payload.audience || null,
    payload.difficulty || null,
    user.email,
    payload.status === "published" ? now : null,
    now,
    now
  ).run();

  const id = Number(insert.meta.last_row_id);
  try {
    await bindings.DB.prepare(`
      INSERT INTO resource_translations (
        resource_id, language, title, summary, body, created_at, updated_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?)
    `).bind(id, payload.language, payload.title, payload.summary, payload.body, now, now).run();
  } catch (cause) {
    await bindings.DB.prepare("DELETE FROM resources WHERE id = ?").bind(id).run();
    throw cause;
  }

  const autoTranslated = payload.language === "th"
    ? payload.type === "devotional"
      ? await saveAutomaticDevotionalTranslations(id, payload, now)
      : payload.type === "article"
        ? await saveAutomaticArticleEnglishTranslation(id, payload, now)
        : false
    : false;
  return json({ ok: true, id, autoTranslated }, { status: 201 });
};

export const PUT: APIRoute = async ({ request }) => {
  const user = await requireUser(request);
  if (!user) return error("Unauthorized", 401);

  const payload = await parsePayload(request, true);
  if (payload instanceof Response) return payload;
  const id = payload.id;
  const existing = await bindings.DB.prepare(
    "SELECT author_email, status, published_at FROM resources WHERE id = ? LIMIT 1"
  ).bind(id).first<{ author_email: string; status: string; published_at: string | null }>();
  if (!existing) return error("Resource not found", 404);
  if (user.role !== "admin" && existing.author_email.toLowerCase() !== user.email) return error("Forbidden", 403);

  const now = new Date().toISOString();
  const publishedAt = payload.status === "published" ? existing.published_at ?? now : null;
  await bindings.DB.batch([
    bindings.DB.prepare(`
      UPDATE resources SET type = ?, slug = ?, status = ?, youtube_url = ?, content_date = ?, series_slot = ?,
        audience = ?, difficulty = ?, published_at = ?, updated_at = ?
      WHERE id = ?
    `).bind(
      payload.type, payload.slug, payload.status, payload.youtubeUrl || null, payload.contentDate || null, payload.seriesSlot || null,
      payload.audience || null, payload.difficulty || null, publishedAt, now, id
    ),
    bindings.DB.prepare(`
      INSERT INTO resource_translations (
        resource_id, language, title, summary, body, created_at, updated_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?)
      ON CONFLICT(resource_id, language) DO UPDATE SET
        title = excluded.title,
        summary = excluded.summary,
        body = excluded.body,
        updated_at = excluded.updated_at
    `).bind(id, payload.language, payload.title, payload.summary, payload.body, now, now)
  ]);

  const autoTranslated = payload.language === "th"
    ? payload.type === "devotional"
      ? await saveAutomaticDevotionalTranslations(id, payload, now)
      : payload.type === "article"
        ? await saveAutomaticArticleEnglishTranslation(id, payload, now)
        : false
    : false;
  return json({ ok: true, id, autoTranslated });
};

export const DELETE: APIRoute = async ({ request }) => {
  const user = await requireUser(request);
  if (!user) return error("Unauthorized", 401);
  const id = Number(new URL(request.url).searchParams.get("id"));
  if (!Number.isInteger(id) || id < 1) return error("A valid id is required");

  const existing = await bindings.DB.prepare(
    "SELECT author_email, featured_image_key, pdf_key FROM resources WHERE id = ? LIMIT 1"
  ).bind(id).first<{ author_email: string; featured_image_key: string | null; pdf_key: string | null }>();
  if (!existing) return error("Resource not found", 404);
  if (user.role !== "admin" && existing.author_email.toLowerCase() !== user.email) return error("Forbidden", 403);

  await bindings.DB.prepare("DELETE FROM resources WHERE id = ?").bind(id).run();
  if (existing.featured_image_key) await bindings.MEDIA.delete(existing.featured_image_key);
  if (existing.pdf_key) await bindings.MEDIA.delete(existing.pdf_key);
  return json({ ok: true });
};

interface Payload {
  id: number;
  type: string;
  slug: string;
  status: "draft" | "published";
  language: "th" | "ko" | "en";
  title: string;
  summary: string;
  body: string;
  youtubeUrl: string;
  contentDate: string;
  seriesSlot: number;
  audience: string;
  difficulty: string;
}

async function parsePayload(request: Request, requireId = false): Promise<Payload | Response> {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return error("Invalid JSON");
  }

  const id = Number(body.id ?? 0);
  const type = String(body.type ?? "");
  const slug = String(body.slug ?? "").trim().toLowerCase();
  const status = body.status === "published" ? "published" : "draft";
  const language = String(body.language ?? "th");
  const title = String(body.title ?? "").trim();
  const summary = String(body.summary ?? "").trim();
  const contentBody = String(body.body ?? "").trim();
  const youtubeUrl = String(body.youtubeUrl ?? "").trim();
  const contentDate = String(body.contentDate ?? "").trim();
  const seriesSlot = Number(body.seriesSlot ?? 0);

  if (requireId && (!Number.isInteger(id) || id < 1)) return error("A valid id is required");
  if (!allowedTypes.has(type)) return error("Invalid resource type");
  if (!allowedLanguages.has(language)) return error("Invalid language");
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) return error("Slug must use lowercase letters, numbers, and hyphens");
  if (title.length < 2 || title.length > 180) return error("Title must be between 2 and 180 characters");
  if (summary.length > 600) return error("Summary is too long");
  if (youtubeUrl && !/^https:\/\/(www\.)?(youtube\.com|youtu\.be)\//i.test(youtubeUrl)) return error("Only YouTube URLs are allowed");
  if (contentDate && !/^\d{4}-\d{2}-\d{2}$/.test(contentDate)) return error("Date must use YYYY-MM-DD");
  if (seriesSlot && ![1, 2, 3].includes(seriesSlot)) return error("Series slot must be 1, 2, or 3");

  return {
    id,
    type,
    slug,
    status,
    language: language as Payload["language"],
    title,
    summary,
    body: contentBody,
    youtubeUrl,
    contentDate,
    seriesSlot,
    audience: String(body.audience ?? "").trim(),
    difficulty: String(body.difficulty ?? "").trim()
  };
}
