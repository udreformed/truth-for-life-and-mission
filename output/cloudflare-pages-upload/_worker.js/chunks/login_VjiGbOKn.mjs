globalThis.process ??= {};
globalThis.process.env ??= {};
import { n as __exportAll } from "./rolldown-runtime_Upwk45wU.mjs";
import { t as bindings } from "./cloudflare_Bi0w76aD.mjs";
import { a as findActiveUser, i as createAdminSessionToken, o as verifyAdminPassword, r as clearAdminSessionCookie, t as adminSessionCookie } from "./auth_DhbFcvSo.mjs";
import { n as json, t as error } from "./http_Bu8rzHeH.mjs";
//#region src/pages/api/admin/login.ts
var login_exports = /* @__PURE__ */ __exportAll({
	DELETE: () => DELETE,
	POST: () => POST
});
var POST = async ({ request }) => {
	let body;
	try {
		body = await request.json();
	} catch {
		return error("이메일과 비밀번호를 입력해 주세요.", 400);
	}
	const email = String(body.email ?? "").trim().toLowerCase();
	const passwordValid = await verifyAdminPassword(String(body.password ?? ""), bindings);
	const user = email ? await findActiveUser(bindings.DB, email) : null;
	if (!passwordValid || !user || user.role !== "admin") return error("이메일 또는 비밀번호가 맞지 않습니다.", 401);
	const secret = bindings.ADMIN_SESSION_SECRET;
	if (!secret) return error("관리자 로그인이 아직 설정되지 않았습니다.", 503);
	const token = await createAdminSessionToken(user.email, secret);
	return json({
		ok: true,
		user
	}, { headers: { "set-cookie": adminSessionCookie(token) } });
};
var DELETE = async () => json({ ok: true }, { headers: { "set-cookie": clearAdminSessionCookie() } });
//#endregion
//#region \0virtual:astro:page:src/pages/api/admin/login@_@ts
var page = () => login_exports;
//#endregion
export { page };
