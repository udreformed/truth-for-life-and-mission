globalThis.process ??= {};
globalThis.process.env ??= {};
import { n as __exportAll } from "./rolldown-runtime_Upwk45wU.mjs";
import { E as createAstro, _ as addAttribute, d as renderTemplate, g as renderHead } from "./server_DzJkc2yi.mjs";
import { t as createComponent } from "./compiler_BiDVP5L8.mjs";
//#region src/pages/index.astro
var pages_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => ""
});
createAstro("https://tflm.pages.dev");
var $$Index = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Index;
	const origin = Astro.url.origin;
	const title = "Truth for Life and Mission";
	const description = "Gospel, devotional, and course resources for Thai church and mission.";
	const ogImage = `${origin}/social-preview-20260810-logo.png`;
	return renderTemplate`<html lang="en" data-astro-cid-lcdefpme><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="description"${addAttribute(description, "content")}><meta name="theme-color" content="#173f35"><meta property="og:type" content="website"><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:url"${addAttribute(`${origin}/`, "content")}><meta property="og:image"${addAttribute(ogImage, "content")}><meta property="og:image:secure_url"${addAttribute(ogImage, "content")}><meta property="og:image:type" content="image/png"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:image:alt"${addAttribute(title, "content")}><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"${addAttribute(title, "content")}><meta name="twitter:description"${addAttribute(description, "content")}><meta name="twitter:image"${addAttribute(ogImage, "content")}><link rel="icon" href="/favicon-20260810.ico" sizes="32x32"><link rel="icon" type="image/png" href="/icon-192-20260810.png" sizes="192x192"><link rel="apple-touch-icon" href="/apple-touch-icon-20260810.png"><link rel="manifest" href="/site-20260810.webmanifest"><link rel="canonical"${addAttribute(`${origin}/`, "href")}><title>${title}</title><script>
      const language = (navigator.language || "").toLowerCase();
      const path = language.startsWith("th") ? "/th/" : language.startsWith("ko") ? "/ko/" : "/en/";
      window.location.replace(path);
    <\/script>${renderHead($$result)}</head><body data-astro-cid-lcdefpme><main data-astro-cid-lcdefpme><img src="/site-logo.png" alt="" width="96" height="96" data-astro-cid-lcdefpme><h1 data-astro-cid-lcdefpme>${title}</h1><p data-astro-cid-lcdefpme>${description}</p><nav aria-label="Choose language" data-astro-cid-lcdefpme><a href="/th/" data-astro-cid-lcdefpme>ไทย</a><a href="/ko/" data-astro-cid-lcdefpme>한국어</a><a href="/en/" data-astro-cid-lcdefpme>English</a></nav></main></body></html>`;
}, "/Users/udmission/Documents/Codex/2026-08-08/new-chat-3/truth-for-life-and-mission/src/pages/index.astro", void 0);
var $$file = "/Users/udmission/Documents/Codex/2026-08-08/new-chat-3/truth-for-life-and-mission/src/pages/index.astro";
//#endregion
//#region \0virtual:astro:page:src/pages/index@_@astro
var page = () => pages_exports;
//#endregion
export { page };
