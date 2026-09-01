globalThis.process ??= {};
globalThis.process.env ??= {};
import { n as __exportAll } from "./rolldown-runtime_Upwk45wU.mjs";
import { E as createAstro, _ as addAttribute, d as renderTemplate, h as maybeRenderHead, i as renderComponent, v as defineScriptVars } from "./server_DzJkc2yi.mjs";
import { t as createComponent } from "./compiler_BiDVP5L8.mjs";
import { n as isLanguage } from "./i18n_B790PXAF.mjs";
import { t as $$SiteLayout } from "./SiteLayout_Da7s1Mbi.mjs";
import { t as $$ShareButtons } from "./ShareButtons_Ci5R3-kv.mjs";
import { t as youtubeEmbedUrl } from "./youtube_BWYuiuwP.mjs";
//#region src/pages/[lang]/library/children-gospel-tract.astro
var children_gospel_tract_exports = /* @__PURE__ */ __exportAll({
	default: () => $$ChildrenGospelTract,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://tflm.pages.dev");
var $$ChildrenGospelTract = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ChildrenGospelTract;
	const langParam = Astro.params.lang;
	if (!isLanguage(langParam)) return Astro.redirect("/th/", 302);
	const lang = langParam;
	const embedUrl = youtubeEmbedUrl("https://youtu.be/h0UNAnJgxKo");
	const listenEmbedUrl = youtubeEmbedUrl("https://youtu.be/bEekxKUnJnc");
	const pdfUrl = "/downloads/children-gospel-tract-th-print-2026.pdf";
	const sampleImages = Array.from({ length: 8 }, (_, index) => `/previews/children-gospel-tract/web/page-${String(index + 1).padStart(2, "0")}.jpg`);
	const c = {
		th: {
			metaTitle: "ทำหนังสือเล่มเล็กข่าวประเสริฐสำหรับเด็ก",
			title: "ทำหนังสือเล่มเล็กข่าวประเสริฐสำหรับเด็ก",
			badge: "กิจกรรมเด็ก · หนังสือแจกจ่าย",
			description: "ดาวน์โหลดเอกสาร แล้วตัดและพับตามวิธีในวิดีโอ ก็จะได้หนังสือเล่มเล็กข่าวประเสริฐสำหรับเด็ก เหมาะสำหรับกิจกรรมเด็ก ชั้นเรียนรวีวารศึกษา กิจกรรมครอบครัว หรือการประกาศกับเด็ก",
			download: "ดาวน์โหลด PDF สำหรับพิมพ์",
			videoTitle: "วิดีโอวิธีทำ",
			sampleTitle: "ดูตัวอย่างภาพ",
			sampleHelp: "กดปุ่มซ้าย–ขวา หรือปัดหน้าจอเพื่อดูภาพตัวอย่าง",
			listenTitle: "ท่องจำข่าวประเสริฐ 7 ประโยค",
			previous: "ก่อนหน้า",
			next: "ถัดไป",
			page: "หน้า",
			back: "กลับไปหน้าเอกสาร PDF"
		},
		ko: {
			metaTitle: "어린이 복음전도지 책자 만들기",
			title: "어린이 복음전도지 책자 만들기",
			badge: "어린이 활동 · 전도책자",
			description: "자료를 다운로드한 후 영상에 나온 것처럼 자르고 접으면 작은 복음전도지 책자가 됩니다. 어린이 예배, 주일학교, 가정 활동, 전도 활동에 활용해도 좋습니다.",
			download: "인쇄용 PDF 다운로드",
			videoTitle: "만드는 방법 영상",
			sampleTitle: "그림 샘플 보기",
			sampleHelp: "좌우 버튼을 누르거나 화면을 옆으로 밀어서 샘플을 볼 수 있습니다.",
			listenTitle: "태국어로 들어보기",
			previous: "이전",
			next: "다음",
			page: "페이지",
			back: "PDF 자료로 돌아가기"
		},
		en: {
			metaTitle: "Make a Children’s Gospel Tract Booklet",
			title: "Make a Children’s Gospel Tract Booklet",
			badge: "Children’s activity · Gospel booklet",
			description: "Download the printable file, then cut and fold it as shown in the video to make a small Gospel tract booklet. It can be used for children’s ministry, Sunday school, family activities, or outreach.",
			download: "Download printable PDF",
			videoTitle: "How-to video",
			sampleTitle: "Sample pages",
			sampleHelp: "Use the left and right buttons, or swipe sideways, to view the sample pages.",
			listenTitle: "Listen in Thai",
			previous: "Previous",
			next: "Next",
			page: "Page",
			back: "Back to PDF resources"
		}
	}[lang];
	return renderTemplate`${renderComponent($$result, "SiteLayout", $$SiteLayout, {
		"lang": lang,
		"current": "library",
		"title": c.metaTitle,
		"description": c.description
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<main class="page detail-page children-gospel-page" id="main"><section class="detail-shell"><a class="back-link"${addAttribute(`/${lang}/library/?type=pdf#children-gospel-tract`, "href")}>← ${c.back}</a><article class="children-gospel-hero"><div class="children-gospel-copy"><p class="type-pill">${c.badge}</p><h1>${c.title}</h1><p>${c.description}</p><div class="resource-action-row children-gospel-main-actions"><a class="button download-button"${addAttribute(pdfUrl, "href")} download>${c.download}</a>${renderComponent($$result, "ShareButtons", $$ShareButtons, {
		"lang": lang,
		"url": Astro.url.pathname,
		"title": c.title
	})}</div></div></article><section class="children-gospel-section" aria-labelledby="children-gospel-video-title"><h2 id="children-gospel-video-title">${c.videoTitle}</h2>${embedUrl && renderTemplate`<div class="video-frame"><iframe${addAttribute(embedUrl, "src")}${addAttribute(c.videoTitle, "title")} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>`}</section><section class="children-gospel-section" aria-labelledby="children-gospel-samples-title"><div class="children-gospel-section-heading"><div><h2 id="children-gospel-samples-title">${c.sampleTitle}</h2><p>${c.sampleHelp}</p></div></div><figure class="children-gospel-single-viewer" data-children-gospel-viewer tabindex="0"${addAttribute(c.sampleTitle, "aria-label")}><button class="children-gospel-edge-arrow children-gospel-edge-arrow-prev" type="button" data-children-gospel-prev${addAttribute(c.previous, "aria-label")}>‹</button><img data-children-gospel-image${addAttribute(sampleImages[0], "src")}${addAttribute(`${c.sampleTitle} 1`, "alt")} loading="eager" decoding="async"><button class="children-gospel-edge-arrow children-gospel-edge-arrow-next" type="button" data-children-gospel-next${addAttribute(c.next, "aria-label")}>›</button><figcaption data-children-gospel-label>${c.page} 1 / ${sampleImages.length}</figcaption></figure></section><section class="children-gospel-section" aria-labelledby="children-gospel-listen-title"><h2 id="children-gospel-listen-title">${c.listenTitle}</h2>${listenEmbedUrl && renderTemplate`<div class="video-frame"><iframe${addAttribute(listenEmbedUrl, "src")}${addAttribute(c.listenTitle, "title")} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>`}</section></section></main><script>(function(){${defineScriptVars({
		sampleImages,
		sampleTitle: c.sampleTitle,
		pageLabel: c.page
	})}
    (() => {
      const viewer = document.querySelector("[data-children-gospel-viewer]");
      const image = document.querySelector("[data-children-gospel-image]");
      const label = document.querySelector("[data-children-gospel-label]");
      if (!(viewer instanceof HTMLElement) || !(image instanceof HTMLImageElement) || !Array.isArray(sampleImages)) return;
      let current = 0;
      let touchStartX = null;
      const show = (index) => {
        current = (index + sampleImages.length) % sampleImages.length;
        image.src = sampleImages[current];
        image.alt = \`\${sampleTitle} \${current + 1}\`;
        if (label) label.textContent = \`\${pageLabel} \${current + 1} / \${sampleImages.length}\`;
      };
      document.querySelector("[data-children-gospel-prev]")?.addEventListener("click", () => {
        show(current - 1);
      });
      document.querySelector("[data-children-gospel-next]")?.addEventListener("click", () => {
        show(current + 1);
      });
      viewer.addEventListener("keydown", (event) => {
        if (event.key === "ArrowLeft") show(current - 1);
        if (event.key === "ArrowRight") show(current + 1);
      });
      viewer.addEventListener("touchstart", (event) => {
        touchStartX = event.touches[0]?.clientX ?? null;
      }, { passive: true });
      viewer.addEventListener("touchend", (event) => {
        if (touchStartX === null) return;
        const touchEndX = event.changedTouches[0]?.clientX ?? touchStartX;
        const delta = touchEndX - touchStartX;
        if (Math.abs(delta) > 45) show(current + (delta < 0 ? 1 : -1));
        touchStartX = null;
      });
    })();
  })();<\/script>` })}`;
}, "/Users/udmission/Documents/Codex/2026-08-08/new-chat-3/truth-for-life-and-mission/src/pages/[lang]/library/children-gospel-tract.astro", void 0);
var $$file = "/Users/udmission/Documents/Codex/2026-08-08/new-chat-3/truth-for-life-and-mission/src/pages/[lang]/library/children-gospel-tract.astro";
var $$url = "/[lang]/library/children-gospel-tract";
//#endregion
//#region \0virtual:astro:page:src/pages/[lang]/library/children-gospel-tract@_@astro
var page = () => children_gospel_tract_exports;
//#endregion
export { page };
