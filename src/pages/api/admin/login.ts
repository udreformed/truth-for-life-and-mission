import type { APIRoute } from "astro";
import {
  adminSessionCookie,
  clearAdminSessionCookie,
  createAdminSessionToken,
  findActiveUser,
  verifyAdminPassword
} from "../../../lib/auth";
import { bindings } from "../../../lib/cloudflare";
import { error, json } from "../../../lib/http";

export const POST: APIRoute = async ({ request }) => {
  let body: { email?: unknown; password?: unknown };
  try {
    body = await request.json();
  } catch {
    return error("이메일과 비밀번호를 입력해 주세요.", 400);
  }

  const email = String(body.email ?? "").trim().toLowerCase();
  const password = String(body.password ?? "");
  const passwordValid = await verifyAdminPassword(password, bindings);
  const user = email ? await findActiveUser(bindings.DB, email) : null;
  if (!passwordValid || !user || user.role !== "admin") return error("이메일 또는 비밀번호가 맞지 않습니다.", 401);

  const secret = bindings.ADMIN_SESSION_SECRET;
  if (!secret) return error("관리자 로그인이 아직 설정되지 않았습니다.", 503);
  const token = await createAdminSessionToken(user.email, secret);
  return json(
    { ok: true, user },
    { headers: { "set-cookie": adminSessionCookie(token) } }
  );
};

export const DELETE: APIRoute = async () => json(
  { ok: true },
  { headers: { "set-cookie": clearAdminSessionCookie() } }
);
