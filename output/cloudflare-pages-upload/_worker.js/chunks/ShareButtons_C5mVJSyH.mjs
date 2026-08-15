globalThis.process ??= {};
globalThis.process.env ??= {};
import { E as createAstro, _ as addAttribute, d as renderTemplate, h as maybeRenderHead } from "./server_DzJkc2yi.mjs";
import { t as createComponent } from "./compiler_BiDVP5L8.mjs";
//#region src/components/ShareButtons.astro
createAstro("https://tflm.pages.dev");
var $$ShareButtons = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ShareButtons;
	const { lang, url = Astro.url.pathname + Astro.url.search + Astro.url.hash, title = "", description = "" } = Astro.props;
	const labels = {
		th: {
			heading: "แบ่งปันหน้านี้",
			facebook: "FB",
			line: "LINE",
			copy: "คัดลอก",
			copied: "คัดลอกแล้ว"
		},
		ko: {
			heading: "이 자료 공유하기",
			facebook: "FB",
			line: "LINE",
			copy: "링크복사",
			copied: "복사됨"
		},
		en: {
			heading: "Share this page",
			facebook: "FB",
			line: "LINE",
			copy: "Copy",
			copied: "Copied"
		}
	};
	const absoluteUrl = new URL(url, Astro.url.origin).toString();
	const shareTitle = title || String(Astro.props.title ?? "");
	const shareDescription = description || "";
	const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(absoluteUrl)}`;
	const lineText = [shareTitle, shareDescription].filter(Boolean).join("\n\n");
	const lineUrl = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(absoluteUrl)}${lineText ? `&text=${encodeURIComponent(lineText)}` : ""}`;
	const l = labels[lang];
	return renderTemplate`${maybeRenderHead($$result)}<div class="share-buttons"${addAttribute(absoluteUrl, "data-share-url")}${addAttribute(shareTitle, "data-share-title")}${addAttribute(shareDescription, "data-share-description")}${addAttribute(l.copied, "data-copied-label")}><button class="share-button copy-share-button" type="button" data-copy-share${addAttribute(`${l.heading} — ${l.copy}`, "aria-label")}><span>${l.copy}</span></button><a class="share-button facebook-share-button"${addAttribute(facebookUrl, "href")} target="_blank" rel="noopener noreferrer"${addAttribute(`${l.heading} — ${l.facebook}`, "aria-label")}><span aria-hidden="true">f</span><span>${l.facebook}</span></a><a class="share-button line-share-button"${addAttribute(lineUrl, "href")} target="_blank" rel="noopener noreferrer"${addAttribute(`${l.heading} — ${l.line}`, "aria-label")}><span aria-hidden="true">LINE</span></a></div>`;
}, "/Users/udmission/Documents/Codex/2026-08-08/new-chat-3/truth-for-life-and-mission/src/components/ShareButtons.astro", void 0);
//#endregion
export { $$ShareButtons as t };
