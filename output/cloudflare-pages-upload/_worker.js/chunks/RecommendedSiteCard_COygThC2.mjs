globalThis.process ??= {};
globalThis.process.env ??= {};
import { E as createAstro, _ as addAttribute, a as Fragment, d as renderTemplate, h as maybeRenderHead, i as renderComponent } from "./server_DzJkc2yi.mjs";
import { t as createComponent } from "./compiler_BiDVP5L8.mjs";
//#region src/components/RecommendedSiteCard.astro
createAstro("https://tflm.pages.dev");
var $$RecommendedSiteCard = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$RecommendedSiteCard;
	const { href, title, description, meta, action, imageSrc, imageAlt = "", imageLayout = "square", iconText, titleLines, target = "_blank", showArrow = true, hideAction = false } = Astro.props;
	const hasIcon = Boolean(imageSrc || iconText);
	return renderTemplate`${maybeRenderHead($$result)}<a${addAttribute({
		"external-site-card": true,
		"clickable-site-card": true,
		"commentary-site-card": hasIcon,
		"wide-logo-site-card": hasIcon && imageLayout === "wide",
		"external-site-card-no-action": hideAction
	}, "class:list")}${addAttribute(href, "href")}${addAttribute(target, "target")}${addAttribute(target === "_blank" ? "noopener noreferrer" : void 0, "rel")}${addAttribute(hideAction ? title : `${title} — ${action}`, "aria-label")}><div class="external-site-card-copy">${imageSrc && renderTemplate`<img${addAttribute({
		"commentary-site-icon": true,
		"wide-site-logo": imageLayout === "wide"
	}, "class:list")}${addAttribute(imageSrc, "src")}${addAttribute(imageAlt, "alt")}${addAttribute(imageLayout === "wide" ? "140" : "76", "width")} height="76" loading="lazy">`}${!imageSrc && iconText && renderTemplate`<span class="commentary-site-icon emoji-site-icon" aria-hidden="true">${iconText}</span>`}<h2${addAttribute({ "two-line-site-title": Boolean(titleLines?.length) }, "class:list")}>${titleLines?.length ? titleLines.map((line) => renderTemplate`<span>${line}</span>`) : title}</h2><p>${description}</p><p class="external-site-meta">${meta}</p></div>${!hideAction && renderTemplate`<span class="button" aria-hidden="true">${action}${showArrow && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate` ↗` })}`}</span>`}</a>`;
}, "/Users/udmission/Documents/Codex/2026-08-08/new-chat-3/truth-for-life-and-mission/src/components/RecommendedSiteCard.astro", void 0);
//#endregion
export { $$RecommendedSiteCard as t };
