globalThis.process ??= {};
globalThis.process.env ??= {};
import { n as __exportAll } from "./rolldown-runtime_Upwk45wU.mjs";
import { t as bindings } from "./cloudflare_Bi0w76aD.mjs";
import { n as json, t as error } from "./http_Bu8rzHeH.mjs";
//#region src/pages/api/ai/suggest.ts
var suggest_exports = /* @__PURE__ */ __exportAll({ POST: () => POST });
var POST = async ({ request }) => {
	if (bindings.AI_ENABLED !== "true" || !bindings.AI) return json({
		mode: "standard",
		suggestions: standardSuggestions(await readQuery(request))
	});
	const query = await readQuery(request);
	if (!query) return error("A query is required");
	const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
	const limit = Math.max(1, Math.min(Number(bindings.AI_DAILY_LIMIT) || 20, 100));
	await bindings.DB.prepare(`
    INSERT INTO ai_daily_usage (usage_date, request_count) VALUES (?, 1)
    ON CONFLICT(usage_date) DO UPDATE SET request_count = request_count + 1
  `).bind(today).run();
	const usage = await bindings.DB.prepare("SELECT request_count FROM ai_daily_usage WHERE usage_date = ?").bind(today).first();
	if (!usage || usage.request_count > limit) return json({
		mode: "standard",
		limited: true,
		suggestions: standardSuggestions(query)
	});
	const result = await bindings.AI.run("@cf/meta/llama-3.2-3b-instruct", {
		messages: [{
			role: "system",
			content: "You assist search for a Thai-first Reformed Christian library. Return only three short Thai search phrases. Do not claim theological authority and do not answer the question."
		}, {
			role: "user",
			content: query
		}],
		max_tokens: 80,
		temperature: .2
	});
	const suggestions = ("response" in result && typeof result.response === "string" ? result.response : "").split(/\n+/).map((item) => item.replace(/^[-\d.\s]+/, "").trim()).filter(Boolean).slice(0, 3);
	return json({
		mode: "ai",
		suggestions: suggestions.length ? suggestions : standardSuggestions(query)
	});
};
async function readQuery(request) {
	try {
		const body = await request.json();
		return String(body.query ?? "").trim().slice(0, 200);
	} catch {
		return "";
	}
}
function standardSuggestions(query) {
	const normalized = query.toLowerCase();
	if (/กลัว|fear|두려/.test(normalized)) return [
		"ความไว้วางใจในพระเจ้า",
		"สดุดีเรื่องความกลัว",
		"ความหวังในพระคริสต์"
	];
	if (/รอด|salvation|구원/.test(normalized)) return [
		"ข่าวประเสริฐ",
		"ความชอบธรรมโดยความเชื่อ",
		"พระคุณ"
	];
	if (/อธิษฐาน|prayer|기도/.test(normalized)) return [
		"คำอธิษฐานของพระเยซู",
		"สดุดีสำหรับการอธิษฐาน",
		"ชีวิตแห่งการอธิษฐาน"
	];
	return [
		query,
		`${query} พระคัมภีร์`,
		`${query} หลักคำสอน`
	].filter(Boolean);
}
//#endregion
//#region \0virtual:astro:page:src/pages/api/ai/suggest@_@ts
var page = () => suggest_exports;
//#endregion
export { page };
