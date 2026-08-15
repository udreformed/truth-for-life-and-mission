globalThis.process ??= {};
globalThis.process.env ??= {};
import { n as __exportAll } from "./rolldown-runtime_Upwk45wU.mjs";
import { E as createAstro, d as renderTemplate, h as maybeRenderHead, i as renderComponent } from "./server_DzJkc2yi.mjs";
import { t as createComponent } from "./compiler_BiDVP5L8.mjs";
import { n as isLanguage } from "./i18n_B790PXAF.mjs";
import { t as $$SiteLayout } from "./SiteLayout_jCvr0Ls5.mjs";
//#region src/pages/[lang]/privacy.astro
var privacy_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Privacy,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://tflm.pages.dev");
var $$Privacy = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Privacy;
	const { lang } = Astro.params;
	if (!isLanguage(lang)) return Astro.redirect("/th/privacy/");
	const c = {
		th: {
			title: "นโยบายความเป็นส่วนตัว",
			intro: "เว็บไซต์นี้เก็บข้อมูลเท่าที่จำเป็นต่อการให้บริการและการรักษาความปลอดภัยเท่านั้น",
			updated: "ปรับปรุงล่าสุด: 8 สิงหาคม 2026",
			sections: [
				["ข้อมูลที่เราเก็บ", "ผู้ใช้งานทั่วไปไม่ต้องสมัครสมาชิก เว็บไซต์และผู้ให้บริการโฮสติ้งอาจบันทึกข้อมูลทางเทคนิคพื้นฐาน เช่น ที่อยู่ IP ประเภทเบราว์เซอร์ หน้าที่เข้าชม และเวลาที่เข้าถึง เพื่อความปลอดภัยและการทำงานของระบบ"],
				["การติดต่อ", "หากคุณติดต่อเราทางอีเมล Facebook หรือ LINE เราจะใช้ข้อมูลที่คุณส่งมาเพื่อตอบคำถามเท่านั้น และจะไม่ขายข้อมูลส่วนบุคคล"],
				["บริการภายนอก", "เว็บไซต์มีวิดีโอ YouTube ปุ่มแชร์ และลิงก์ไปยังเว็บไซต์ภายนอก บริการเหล่านี้อาจใช้คุกกี้หรือเก็บข้อมูลตามนโยบายของตนเอง"],
				["การเก็บรักษาและสิทธิของคุณ", "ข้อมูลการติดต่อจะเก็บไว้เท่าที่จำเป็นต่อการสนทนาและการดำเนินงาน คุณสามารถขอให้แก้ไขหรือลบข้อมูลที่ส่งมาได้โดยติดต่อเรา"],
				["ติดต่อ", "คำถามเกี่ยวกับความเป็นส่วนตัวส่งได้ที่ thaigodpleasing@naver.com"]
			]
		},
		ko: {
			title: "개인정보 처리방침",
			intro: "이 사이트는 서비스 제공과 보안에 필요한 최소한의 정보만 처리합니다.",
			updated: "최종 수정: 2026년 8월 8일",
			sections: [
				["수집하는 정보", "일반 이용자는 회원가입이 필요하지 않습니다. 사이트와 호스팅 제공자는 보안과 정상 작동을 위해 IP 주소, 브라우저 종류, 방문 페이지와 접속 시간 등 기본 기술 정보를 기록할 수 있습니다."],
				["연락 정보", "이메일, Facebook 또는 LINE으로 연락하면 보내주신 정보는 문의에 답변하는 용도로만 사용하며 개인정보를 판매하지 않습니다."],
				["외부 서비스", "사이트에는 YouTube 영상, 공유 버튼과 외부 사이트 링크가 포함됩니다. 이러한 서비스는 자체 정책에 따라 쿠키를 사용하거나 정보를 처리할 수 있습니다."],
				["보관 및 이용자 권리", "연락 정보는 대화와 운영에 필요한 기간만 보관합니다. 사용자는 자신이 제공한 정보의 수정이나 삭제를 요청할 수 있습니다."],
				["문의", "개인정보 관련 문의: thaigodpleasing@naver.com"]
			]
		},
		en: {
			title: "Privacy policy",
			intro: "This site processes only the information reasonably needed to provide and secure the service.",
			updated: "Last updated: August 8, 2026",
			sections: [
				["Information we process", "General visitors do not need an account. The site and its hosting provider may log basic technical information such as IP address, browser type, pages visited, and access time for security and reliable operation."],
				["Contact information", "If you contact us by email, Facebook, or LINE, we use the information you provide only to respond to your message. We do not sell personal information."],
				["Third-party services", "The site includes YouTube videos, sharing tools, and links to external websites. Those services may use cookies or process information under their own policies."],
				["Retention and your choices", "Contact information is retained only as long as reasonably needed for the conversation and ministry operation. You may request correction or deletion of information you provided."],
				["Contact", "Privacy questions may be sent to thaigodpleasing@naver.com."]
			]
		}
	}[lang];
	return renderTemplate`${renderComponent($$result, "SiteLayout", $$SiteLayout, {
		"lang": lang,
		"title": c.title,
		"description": c.intro
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<article class="policy-page container"><header class="policy-page-heading"><p class="eyebrow">TRUTH FOR LIFE AND MISSION</p><h1>${c.title}</h1><p>${c.intro}</p><small>${c.updated}</small></header>${c.sections.map(([heading, body]) => renderTemplate`<section><h2>${heading}</h2><p>${body}</p></section>`)}</article>` })}`;
}, "/Users/udmission/Documents/Codex/2026-08-08/new-chat-3/truth-for-life-and-mission/src/pages/[lang]/privacy.astro", void 0);
var $$file = "/Users/udmission/Documents/Codex/2026-08-08/new-chat-3/truth-for-life-and-mission/src/pages/[lang]/privacy.astro";
var $$url = "/[lang]/privacy";
//#endregion
//#region \0virtual:astro:page:src/pages/[lang]/privacy@_@astro
var page = () => privacy_exports;
//#endregion
export { page };
