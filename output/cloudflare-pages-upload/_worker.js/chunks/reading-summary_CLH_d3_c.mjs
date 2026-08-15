globalThis.process ??= {};
globalThis.process.env ??= {};
import { n as __exportAll } from "./rolldown-runtime_Upwk45wU.mjs";
import { n as isLanguage } from "./i18n_B790PXAF.mjs";
import { t as getLocalizedReadingSummary } from "./reading-summaries_BzbQjcxt.mjs";
//#region src/pages/api/reading-summary.ts
var reading_summary_exports = /* @__PURE__ */ __exportAll({ GET: () => GET });
var GET = async ({ url }) => {
	const langParam = url.searchParams.get("lang");
	const week = Number(url.searchParams.get("week"));
	const day = Number(url.searchParams.get("day"));
	if (!langParam || !isLanguage(langParam) || !Number.isInteger(week) || week < 1 || week > 45 || !Number.isInteger(day) || day < 0 || day > 6) return new Response(JSON.stringify({ error: "Invalid request" }), {
		status: 400,
		headers: { "content-type": "application/json; charset=utf-8" }
	});
	const summary = await getLocalizedReadingSummary(langParam, week, day);
	return new Response(JSON.stringify({ summary }), { headers: {
		"content-type": "application/json; charset=utf-8",
		"cache-control": "public, max-age=60, s-maxage=300, stale-while-revalidate=86400"
	} });
};
//#endregion
//#region \0virtual:astro:page:src/pages/api/reading-summary@_@ts
var page = () => reading_summary_exports;
//#endregion
export { page };
