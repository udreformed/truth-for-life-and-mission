globalThis.process ??= {};
globalThis.process.env ??= {};
import { n as __exportAll } from "./rolldown-runtime_Upwk45wU.mjs";
import { d as renderTemplate, h as maybeRenderHead, i as renderComponent } from "./server_DzJkc2yi.mjs";
import { t as createComponent } from "./compiler_BiDVP5L8.mjs";
import { t as $$SiteLayout } from "./SiteLayout_Gc4_WH87.mjs";
//#region src/pages/404.astro
var _404_exports = /* @__PURE__ */ __exportAll({
	default: () => $$404,
	file: () => $$file,
	url: () => $$url
});
var $$404 = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "SiteLayout", $$SiteLayout, {
		"lang": "th",
		"title": "ไม่พบหน้า"
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="narrow page-heading"><p class="eyebrow">404</p><h1>ไม่พบหน้านี้</h1><p>หน้าที่คุณกำลังค้นหาอาจถูกย้ายหรือยังไม่ได้เผยแพร่</p><p><a class="button" href="/th/">กลับหน้าหลัก</a></p></section>` })}`;
}, "/Users/udmission/Documents/Codex/2026-08-08/new-chat-3/truth-for-life-and-mission/src/pages/404.astro", void 0);
var $$file = "/Users/udmission/Documents/Codex/2026-08-08/new-chat-3/truth-for-life-and-mission/src/pages/404.astro";
var $$url = "/404";
//#endregion
//#region \0virtual:astro:page:src/pages/404@_@astro
var page = () => _404_exports;
//#endregion
export { page };
