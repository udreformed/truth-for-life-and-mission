globalThis.process ??= {};
globalThis.process.env ??= {};
import { n as __exportAll } from "./rolldown-runtime_Upwk45wU.mjs";
import { E as createAstro, _ as addAttribute, d as renderTemplate, h as maybeRenderHead, i as renderComponent } from "./server_DzJkc2yi.mjs";
import { t as createComponent } from "./compiler_BiDVP5L8.mjs";
import { n as isLanguage } from "./i18n_B790PXAF.mjs";
import { t as $$SiteLayout } from "./SiteLayout_Gc4_WH87.mjs";
//#region src/pages/[lang]/about.astro
var about_exports = /* @__PURE__ */ __exportAll({
	default: () => $$About,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://tflm.pages.dev");
var $$About = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$About;
	const { lang } = Astro.params;
	if (!isLanguage(lang)) return Astro.redirect("/th/about/");
	const c = {
		th: {
			title: "เกี่ยวกับเรา",
			introBrand: "Truth for Life and Mission",
			introRest: "เป็นพันธกิจสื่อคริสเตียนที่จัดทำขึ้นเพื่อช่วยให้ผู้อ่านรู้จักพระคริสต์ผ่านพระคัมภีร์ และนำความจริงไปใช้ในชีวิต คริสตจักร และพันธกิจ",
			personTitle: "ผู้จัดทำ",
			person: "มิชชันนารี Yongjin Choi (อาจารย์แดน) และ Kim Sunhee ได้รับการส่งออกเป็นมิชชันนารีเพื่อพันธกิจคริสตจักรพหุวัฒนธรรมในปี 2010 หลังจากรับใช้แรงงานข้ามชาติและบุกเบิกคริสตจักร God-Pleasing ในประเทศเกาหลี ปัจจุบันรับใช้ในจังหวัดอุดรธานี ภาคตะวันออกเฉียงเหนือของประเทศไทย ผ่านการสอนพระคัมภีร์ การแปล การเขียน และการพัฒนาสื่อดิจิทัล",
			contactTitle: "ติดต่อและชุมชน",
			facebook: "ชุมชน Facebook",
			line: "ติดต่อทาง LINE",
			email: "อีเมล",
			supportTitle: "ร่วมสนับสนุนพันธกิจ",
			support: "เงินสนับสนุนจะใช้สำหรับค่าใช้จ่ายในการดำเนินเว็บไซต์ การแปล และการพัฒนาสื่อพระคัมภีร์และศาสนศาสตร์ การสนับสนุนเป็นไปโดยสมัครใจและไม่ใช่เงื่อนไขในการเข้าถึงเนื้อหา",
			qrAlt: "คิวอาร์โค้ด PromptPay สำหรับสนับสนุนพันธกิจ",
			saveSupportQr: "บันทึกรูป QR สำหรับการสนับสนุน",
			lineId: "LINE ID: sunnyyongjin",
			communityLabel: "ชุมชน Facebook สาธารณะ",
			communityTitle: "ชุมชน Truth for Life and Mission",
			communityBody: "พื้นที่สำหรับผู้ใช้ภาษาไทย ภาษาเกาหลี และภาษาอังกฤษ เพื่อแบ่งปันสื่อคริสเตียน ถามคำถาม และมีสามัคคีธรรมร่วมกัน",
			youtubeLabel: "ช่อง YouTube ที่ดำเนินการ",
			youtubeTitle: "UDmission",
			youtubeBody: "รวมคำสอนพระคัมภีร์ การอ่านพระคัมภีร์ เพลงนมัสการภาษาไทย หนังสือเสียง และเรื่องราวพันธกิจในประเทศไทย"
		},
		ko: {
			title: "우리 소개",
			introBrand: "Truth for Life and Mission",
			introRest: "은 성경을 통해 그리스도를 알고, 그 진리를 삶과 교회와 선교에 적용하도록 돕는 기독교 콘텐츠 사역입니다.",
			personTitle: "운영자 소개",
			person: "최용진·김선희 선교사는 2010년 예장합동 성남노회와 서광교회에서 이주민 사역을 위한 다민족교회 선교사로 파송받았습니다. 국내 이주민 사역과 광주 갓플리징교회 개척을 거쳐 현재 GMS 소속으로 태국 동북부 우돈타니에서 성경 교육, 번역, 집필과 디지털 자료 개발로 섬기고 있습니다.",
			contactTitle: "연락 및 커뮤니티",
			facebook: "Facebook 사용자 모임",
			line: "LINE으로 문의",
			email: "이메일",
			supportTitle: "사역 후원",
			support: "후원금은 사이트 운영, 번역, 성경·신학 자료 개발에 사용됩니다. 후원은 자발적이며 사이트의 무료 콘텐츠 이용 조건이 아닙니다.",
			qrAlt: "사역 후원을 위한 PromptPay QR 코드",
			saveSupportQr: "후원 QR 그림 저장",
			lineId: "LINE ID: sunnyyongjin",
			communityLabel: "공개 Facebook 그룹",
			communityTitle: "Truth for Life and Mission 사용자 모임",
			communityBody: "태국어, 한국어, 영어 사용자가 기독교 자료를 나누고 질문하며 함께 교제하는 공개 모임입니다.",
			youtubeLabel: "운영 YouTube 채널",
			youtubeTitle: "UDmission",
			youtubeBody: "성경 강의와 통독, 태국어 찬양, 오디오북, 태국 선교 이야기를 나누는 최용진·김선희 선교사의 채널입니다."
		},
		en: {
			title: "About us",
			introBrand: "Truth for Life and Mission",
			introRest: "is a Christian media ministry that helps readers know Christ through Scripture and apply biblical truth to life, the church, and mission.",
			personTitle: "About the publisher",
			person: "Missionaries Yongjin Choi (Ajarn Dan) and Kim Sunhee were sent in 2010 for multicultural church ministry among migrants. After serving migrant communities and planting God-Pleasing Church in Korea, they now serve with GMS in Udon Thani, northeastern Thailand, through Bible teaching, translation, writing, and digital resource development.",
			contactTitle: "Contact and community",
			facebook: "Facebook community",
			line: "Contact on LINE",
			email: "Email",
			supportTitle: "Support the ministry",
			support: "Support is used for website operation, translation, and the development of biblical and theological resources. Giving is voluntary and is never required to access the site's free content.",
			qrAlt: "PromptPay QR code for ministry support",
			saveSupportQr: "Save support QR image",
			lineId: "LINE ID: sunnyyongjin",
			communityLabel: "Public Facebook group",
			communityTitle: "Truth for Life and Mission Community",
			communityBody: "A public community for Thai, Korean, and English-speaking users to share Christian resources, ask questions, and enjoy fellowship.",
			youtubeLabel: "YouTube channel",
			youtubeTitle: "UDmission",
			youtubeBody: "The ministry channel of Yongjin Choi and Kim Sunhee, featuring Bible teaching and reading, Thai worship, audiobooks, and stories from mission in Thailand."
		}
	}[lang];
	const pageDescription = `${c.introBrand}${lang === "ko" ? "" : " "}${c.introRest}`;
	return renderTemplate`${renderComponent($$result, "SiteLayout", $$SiteLayout, {
		"lang": lang,
		"title": c.title,
		"description": pageDescription
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<article class="policy-page container"><header class="policy-page-heading about-page-heading"><div class="about-page-title-row"><img class="about-page-logo" src="/site-logo-home-transparent.png" alt="" width="150" height="150" loading="eager"><h1>${c.title}</h1></div><p><strong>${c.introBrand}</strong>${lang === "ko" ? "" : " "}${c.introRest}</p></header><section><h2>${c.personTitle}</h2><p>${c.person}</p></section><section><h2>${c.contactTitle}</h2><div class="compact-contact-grid about-contact-card-grid"><a class="compact-contact-card facebook-contact-card" href="https://www.facebook.com/groups/1083797127953659" target="_blank" rel="noopener noreferrer"${addAttribute(c.communityTitle, "aria-label")}><span class="compact-facebook-icon" aria-hidden="true">f</span><span class="compact-contact-copy"><small>${c.communityLabel}</small><strong>${c.communityTitle}</strong><span>${c.communityBody}</span></span><span class="compact-contact-arrow" aria-hidden="true">↗</span></a><a class="compact-contact-card line-contact-card" href="https://line.me/ti/p/~sunnyyongjin" target="_blank" rel="noopener noreferrer"${addAttribute(`${c.lineId} — ${c.line}`, "aria-label")}><span class="line-chat-icon" aria-hidden="true">LINE</span><span class="compact-contact-copy"><small>${c.line}</small><strong>${c.lineId}</strong></span><span class="compact-contact-arrow" aria-hidden="true">↗</span></a><a class="compact-contact-card youtube-contact-card" href="https://www.youtube.com/@UDmission" target="_blank" rel="noopener noreferrer"${addAttribute(c.youtubeTitle, "aria-label")}><span class="compact-youtube-icon" aria-hidden="true">▶</span><span class="compact-contact-copy"><small>${c.youtubeLabel}</small><strong>${c.youtubeTitle}</strong><span>${c.youtubeBody}</span></span><span class="compact-contact-arrow" aria-hidden="true">↗</span></a><button class="compact-contact-card support-contact-card" type="button" data-support-dialog-open${addAttribute(c.supportTitle, "aria-label")}><img class="compact-support-image" src="/promptpay-support.jpg" alt="" loading="lazy"><span class="compact-contact-copy"><small>${c.supportTitle}</small><strong>${c.support}</strong></span><span class="compact-contact-arrow" aria-hidden="true">›</span></button></div><p class="about-email-contact"><a href="mailto:thaigodpleasing@naver.com">${c.email}: thaigodpleasing@naver.com</a></p></section></article><dialog class="line-qr-dialog support-qr-dialog" data-support-dialog${addAttribute(c.supportTitle, "aria-label")}><button class="line-qr-close" type="button" data-support-dialog-close aria-label="Close">×</button><img src="/promptpay-support.jpg"${addAttribute(c.qrAlt, "alt")}><strong>${c.supportTitle}</strong><a class="button download-button qr-download-button" href="/promptpay-support.jpg" download="truth-for-life-and-mission-support-qr.jpg">${c.saveSupportQr}</a></dialog><script>
    (() => {
      const dialog = document.querySelector("[data-support-dialog]");
      const openButton = document.querySelector("[data-support-dialog-open]");
      const closeButton = document.querySelector("[data-support-dialog-close]");
      if (!(dialog instanceof HTMLDialogElement) || !(openButton instanceof HTMLButtonElement)) return;
      openButton.addEventListener("click", () => dialog.showModal());
      closeButton?.addEventListener("click", () => dialog.close());
      dialog.addEventListener("click", (event) => { if (event.target === dialog) dialog.close(); });
    })();
  <\/script>` })}`;
}, "/Users/udmission/Documents/Codex/2026-08-08/new-chat-3/truth-for-life-and-mission/src/pages/[lang]/about.astro", void 0);
var $$file = "/Users/udmission/Documents/Codex/2026-08-08/new-chat-3/truth-for-life-and-mission/src/pages/[lang]/about.astro";
var $$url = "/[lang]/about";
//#endregion
//#region \0virtual:astro:page:src/pages/[lang]/about@_@astro
var page = () => about_exports;
//#endregion
export { page };
