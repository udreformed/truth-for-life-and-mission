globalThis.process ??= {};
globalThis.process.env ??= {};
import { n as __exportAll } from "./rolldown-runtime_Upwk45wU.mjs";
import { E as createAstro, d as renderTemplate, h as maybeRenderHead, i as renderComponent } from "./server_DzJkc2yi.mjs";
import { t as createComponent } from "./compiler_BiDVP5L8.mjs";
import { n as isLanguage } from "./i18n_B790PXAF.mjs";
import { t as $$SiteLayout } from "./SiteLayout_Da7s1Mbi.mjs";
//#region src/pages/[lang]/terms.astro
var terms_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Terms,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://tflm.pages.dev");
var $$Terms = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Terms;
	const { lang } = Astro.params;
	if (!isLanguage(lang)) return Astro.redirect("/th/terms/");
	const c = {
		th: {
			title: "ข้อกำหนดและเงื่อนไข",
			intro: "การใช้เว็บไซต์นี้ถือว่าคุณยอมรับข้อกำหนดพื้นฐานต่อไปนี้",
			updated: "ปรับปรุงล่าสุด: 8 สิงหาคม 2026",
			sections: [
				["วัตถุประสงค์", "เนื้อหาจัดทำเพื่อการศึกษาพระคัมภีร์ การเสริมสร้างความเชื่อ และพันธกิจคริสเตียน ไม่ใช่คำปรึกษาทางกฎหมาย การแพทย์ หรือการเงิน"],
				["ลิขสิทธิ์และการใช้เนื้อหา", "เนื้อหาที่จัดทำโดยเว็บไซต์เป็นลิขสิทธิ์ของผู้จัดทำ เว้นแต่ระบุไว้เป็นอย่างอื่น สื่อจากภายนอกเป็นลิขสิทธิ์ของเจ้าของเดิม โปรดปฏิบัติตามคำอนุญาตและข้อจำกัดที่ระบุไว้ในแต่ละรายการ"],
				["ไฟล์ดาวน์โหลด", "ไฟล์ฟรีสามารถใช้เพื่อการอ่าน การศึกษา และงานรับใช้ที่ไม่แสวงหากำไรตามเงื่อนไขของแต่ละไฟล์ ห้ามขาย ดัดแปลง หรือนำไปเผยแพร่ต่อเมื่อไม่ได้รับอนุญาต"],
				["ลิงก์ภายนอก", "เราไม่ควบคุมเนื้อหา ความพร้อมใช้งาน หรือนโยบายของเว็บไซต์ภายนอก การเชื่อมโยงไม่ได้หมายความว่าเรารับรองทุกเนื้อหาในเว็บไซต์นั้น"],
				["การเปลี่ยนแปลงและติดต่อ", "เราอาจปรับปรุงเนื้อหาและข้อกำหนดตามความจำเป็น หากมีคำถาม โปรดติดต่อ thaigodpleasing@naver.com"]
			]
		},
		ko: {
			title: "이용약관",
			intro: "이 사이트를 이용하면 다음의 기본 조건에 동의하는 것으로 봅니다.",
			updated: "최종 수정: 2026년 8월 8일",
			sections: [
				["사이트의 목적", "콘텐츠는 성경 교육, 신앙 성장과 기독교 사역을 위해 제공됩니다. 법률·의료·재정 분야의 전문 조언을 대신하지 않습니다."],
				["저작권과 콘텐츠 이용", "별도 표시가 없는 자체 콘텐츠의 권리는 제작자에게 있습니다. 외부 자료의 권리는 원저작자에게 있으며 각 자료에 표시된 허용 범위와 제한을 따라야 합니다."],
				["다운로드 자료", "무료 파일은 각 파일의 조건에 따라 개인 독서, 교육과 비영리 사역에 사용할 수 있습니다. 허락 없이 판매·변형·재배포할 수 없습니다."],
				["외부 링크", "외부 사이트의 내용, 이용 가능성, 개인정보 정책은 해당 운영자가 관리합니다. 링크 제공이 그 사이트의 모든 내용을 보증한다는 뜻은 아닙니다."],
				["변경 및 문의", "필요한 경우 콘텐츠와 약관을 변경할 수 있습니다. 문의: thaigodpleasing@naver.com"]
			]
		},
		en: {
			title: "Terms of use",
			intro: "By using this site, you agree to the following basic terms.",
			updated: "Last updated: August 8, 2026",
			sections: [
				["Purpose", "Content is provided for Bible education, Christian growth, and ministry. It is not a substitute for professional legal, medical, or financial advice."],
				["Copyright and permitted use", "Unless otherwise stated, original site content belongs to its creator. External materials remain the property of their respective rights holders. Follow the permissions and restrictions shown with each resource."],
				["Downloads", "Free files may be used for personal reading, education, and non-commercial ministry as allowed by the terms accompanying each file. Do not sell, alter, or redistribute materials without permission."],
				["External links", "We do not control the content, availability, or policies of external websites. A link does not mean that every statement or resource on that site is endorsed."],
				["Changes and contact", "Content and these terms may be updated when necessary. Questions may be sent to thaigodpleasing@naver.com."]
			]
		}
	}[lang];
	return renderTemplate`${renderComponent($$result, "SiteLayout", $$SiteLayout, {
		"lang": lang,
		"title": c.title,
		"description": c.intro
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<article class="policy-page container"><header class="policy-page-heading"><p class="eyebrow">TRUTH FOR LIFE AND MISSION</p><h1>${c.title}</h1><p>${c.intro}</p><small>${c.updated}</small></header>${c.sections.map(([heading, body]) => renderTemplate`<section><h2>${heading}</h2><p>${body}</p></section>`)}</article>` })}`;
}, "/Users/udmission/Documents/Codex/2026-08-08/new-chat-3/truth-for-life-and-mission/src/pages/[lang]/terms.astro", void 0);
var $$file = "/Users/udmission/Documents/Codex/2026-08-08/new-chat-3/truth-for-life-and-mission/src/pages/[lang]/terms.astro";
var $$url = "/[lang]/terms";
//#endregion
//#region \0virtual:astro:page:src/pages/[lang]/terms@_@astro
var page = () => terms_exports;
//#endregion
export { page };
