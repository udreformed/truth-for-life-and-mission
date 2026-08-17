globalThis.process ??= {};
globalThis.process.env ??= {};
import { E as createAstro, _ as addAttribute, d as renderTemplate, h as maybeRenderHead, i as renderComponent } from "./server_DzJkc2yi.mjs";
import { t as createComponent } from "./compiler_BiDVP5L8.mjs";
import { r as typeLabels, t as copy } from "./i18n_B790PXAF.mjs";
import { t as $$ShareButtons } from "./ShareButtons_Ci5R3-kv.mjs";
//#region src/components/ResourceCard.astro
createAstro("https://tflm.pages.dev");
var $$ResourceCard = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ResourceCard;
	const { resource, lang } = Astro.props;
	const t = copy[lang];
	const href = resource.external_url ?? `/${lang}/library/${resource.slug}/`;
	const isExternal = Boolean(resource.external_url);
	const actionLabel = resource.external_label ?? t.read;
	const bodyPreviewSlugs = /* @__PURE__ */ new Set([
		"reformation-five-pillars",
		"limited-atonement-evangelism",
		"five-ways-prosperity-gospel"
	]);
	const bodyPreview = resource.type === "article" && lang !== "en" && bodyPreviewSlugs.has(resource.slug) && Boolean(resource.body) ? `${(resource.body ?? "").replace(/\s+/g, " ").trim().slice(0, lang === "th" ? 260 : 210)}…` : resource.summary;
	const showTranslationNotice = Boolean(resource.translation_notice) && !(lang === "en" && resource.type === "devotional");
	return renderTemplate`${maybeRenderHead($$result)}<article class="resource-card"><div class="resource-card-top"><span class="type-pill">${typeLabels[lang][resource.type] ?? resource.type}</span>${resource.youtube_url && renderTemplate`<span class="media-hint">YouTube</span>`}${showTranslationNotice && renderTemplate`<span class="machine-translation-note">${resource.translation_notice}</span>`}</div><h3><a${addAttribute(href, "href")}${addAttribute(isExternal ? "_blank" : void 0, "target")}${addAttribute(isExternal ? "noopener noreferrer" : void 0, "rel")}>${resource.title}</a></h3><p>${bodyPreview}</p><a class="text-link"${addAttribute(href, "href")}${addAttribute(isExternal ? "_blank" : void 0, "target")}${addAttribute(isExternal ? "noopener noreferrer" : void 0, "rel")}>${actionLabel} <span aria-hidden="true">${isExternal ? "↗" : "→"}</span></a>${resource.type !== "article" && renderTemplate`${renderComponent($$result, "ShareButtons", $$ShareButtons, {
		"lang": lang,
		"url": href,
		"title": resource.title
	})}`}</article>`;
}, "/Users/udmission/Documents/Codex/2026-08-08/new-chat-3/truth-for-life-and-mission/src/components/ResourceCard.astro", void 0);
//#endregion
export { $$ResourceCard as t };
