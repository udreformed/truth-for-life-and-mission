globalThis.process ??= {};
globalThis.process.env ??= {};
import { n as __exportAll } from "./rolldown-runtime_Upwk45wU.mjs";
import { E as createAstro, _ as addAttribute, d as renderTemplate, h as maybeRenderHead, i as renderComponent } from "./server_DzJkc2yi.mjs";
import { t as createComponent } from "./compiler_BiDVP5L8.mjs";
import { n as isLanguage, t as copy } from "./i18n_B790PXAF.mjs";
import { t as $$SiteLayout } from "./SiteLayout_0t_mp1ud.mjs";
import { t as $$ResourceCard } from "./ResourceCard_Da_FkacN.mjs";
import { n as listPublishedResources } from "./resources_CloFJv4w.mjs";
//#region src/pages/[lang]/search.astro
var search_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Search,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://tflm.pages.dev");
var $$Search = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Search;
	const langParam = Astro.params.lang;
	if (!isLanguage(langParam)) return Astro.redirect("/th/", 302);
	const lang = langParam;
	const t = copy[lang];
	const query = Astro.url.searchParams.get("q")?.trim() ?? "";
	const resources = query ? await listPublishedResources(lang, {
		query,
		limit: 48
	}) : [];
	Astro.response.headers.set("Cache-Control", "public, max-age=30, s-maxage=60");
	return renderTemplate`${renderComponent($$result, "SiteLayout", $$SiteLayout, {
		"lang": lang,
		"current": "search",
		"title": String(t.nav.search)
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<header class="page-heading container"><p class="eyebrow">Guided Discovery</p><h1>${t.nav.search}</h1><p>${lang === "th" ? "การค้นหาเป็นส่วนหนึ่งของพันธกิจ เราต้องการช่วยให้ทุกคำถามนำไปสู่พระวจนะและก้าวต่อไปที่มีความหมาย" : lang === "ko" ? "검색은 사역입니다. 모든 질문이 말씀과 의미 있는 다음 단계로 이어지도록 돕습니다." : "Search is ministry. We want every question to lead toward Scripture and a meaningful next step."}</p></header><section class="container section" style="padding-top:0"><form class="search-form"${addAttribute(`/${lang}/search/`, "action")} method="get" role="search"><input name="q" type="search" required${addAttribute(query, "value")}${addAttribute(t.searchPlaceholder, "placeholder")}${addAttribute(t.searchPlaceholder, "aria-label")}><button class="button" type="submit">${t.searchAction}</button></form><div style="height:32px"></div>${query && resources.length > 0 ? renderTemplate`<div class="resource-grid">${resources.map((resource) => renderTemplate`${renderComponent($$result, "ResourceCard", $$ResourceCard, {
		"resource": resource,
		"lang": lang
	})}`)}</div>` : query ? renderTemplate`<div class="empty-state">${t.empty}</div>` : null}</section>` })}`;
}, "/Users/udmission/Documents/Codex/2026-08-08/new-chat-3/truth-for-life-and-mission/src/pages/[lang]/search.astro", void 0);
var $$file = "/Users/udmission/Documents/Codex/2026-08-08/new-chat-3/truth-for-life-and-mission/src/pages/[lang]/search.astro";
var $$url = "/[lang]/search";
//#endregion
//#region \0virtual:astro:page:src/pages/[lang]/search@_@astro
var page = () => search_exports;
//#endregion
export { page };
