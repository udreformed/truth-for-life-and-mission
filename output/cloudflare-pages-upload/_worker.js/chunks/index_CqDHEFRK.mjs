globalThis.process ??= {};
globalThis.process.env ??= {};
import { n as __exportAll } from "./rolldown-runtime_Upwk45wU.mjs";
import { E as createAstro, _ as addAttribute, d as renderTemplate, h as maybeRenderHead, i as renderComponent } from "./server_DzJkc2yi.mjs";
import { t as createComponent } from "./compiler_BiDVP5L8.mjs";
import { n as isLanguage, t as copy } from "./i18n_B790PXAF.mjs";
import { t as $$SiteLayout } from "./SiteLayout_Da7s1Mbi.mjs";
import { t as $$ShareButtons } from "./ShareButtons_Ci5R3-kv.mjs";
import { t as $$RecommendedSiteCard } from "./RecommendedSiteCard_COygThC2.mjs";
//#region src/pages/[lang]/useful-sites/index.astro
var useful_sites_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://tflm.pages.dev");
var $$Index = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Index;
	const { lang } = Astro.params;
	if (!isLanguage(lang)) return Astro.redirect("/th/useful-sites/");
	const pageCopy = {
		th: {
			title: "เว็บไซต์ที่เป็นประโยชน์",
			description: "เว็บไซต์แหล่งข้อมูลคริสเตียนที่คัดสรรไว้แล้ว คลิกที่การ์ดหรือชื่อเว็บไซต์เพื่อเปิดเว็บไซต์ต้นทางในหน้าต่างใหม่",
			note: "ไฟล์และเนื้อหาเป็นของเว็บไซต์ต้นทาง โปรดตรวจสอบเงื่อนไขการใช้งานของแต่ละเว็บไซต์ก่อนนำไปเผยแพร่ต่อ",
			visit: "ไปยังเว็บไซต์",
			commentaryKind: "คำอธิบายพระคัมภีร์ · พระคัมภีร์ 66 เล่ม",
			commentaryDescription: "สามารถค้นหาบทและข้อของพระคัมภีร์แต่ละเล่ม และอ่านคำอธิบายกับบทวิเคราะห์แยกตามแต่ละตอน",
			commentaryTitle: "คำอธิบายพระคัมภีร์ 66 เล่ม",
			commentaryDownload: "ดาวน์โหลดหนังสือคำอธิบายพระคัมภีร์ครบทั้ง 66 เล่ม",
			graceBannasanTitle: "Grace Bannasan (เกรซบรรณสาร)",
			graceBannasanDescription: "สำนักพิมพ์และแหล่งข้อมูลคริสเตียนสำหรับผู้อ่านชาวไทย มีหนังสือคริสเตียน อีบุ๊กฟรี หนังสือเสียง บทความ และสื่อด้านพระคัมภีร์กับศาสนศาสตร์",
			graceBannasanKind: "หนังสือคริสเตียน · อีบุ๊ก · หนังสือเสียง · บทความ",
			thirdmillTitle: "บทเรียนพระคัมภีร์และศาสนศาสตร์ภาษาเงินฟรี — Thirdmill",
			thirdmillDescription: "หลักสูตรพระคัมภีร์และศาสนศาสตร์ภาษาไทยสำหรับศิษยาภิบาล ผู้นำคริสตจักร และผู้เรียนทั่วไป มีวิดีโอ เสียง และเอกสาร PDF ให้เรียนและดาวน์โหลดฟรี",
			thirdmillKind: "หลักสูตรภาษาไทย · วิดีโอ · เสียง · PDF",
			thaiChurchesTitle: "ThaiChurches.org",
			thaiChurchesDescription: "เว็บไซต์สำหรับค้นหาและดูข้อมูลคริสตจักรในประเทศไทย ช่วยให้ผู้สนใจสามารถสำรวจคริสตจักรและข้อมูลที่เกี่ยวข้องได้ง่ายขึ้น",
			thaiChurchesKind: "ค้นหาคริสตจักร · ประเทศไทย",
			saphanTitle: "สะพานสยาม (Saphan Siam)",
			saphanDescription: "แหล่งรวมบทความและทรัพยากรคริสเตียนภาษาไทย ครอบคลุมพระคัมภีร์ ศาสนศาสตร์ คริสตจักร และชีวิตคริสเตียน พร้อมร้านหนังสือคริสเตียน",
			saphanKind: "บทความภาษาไทย · ศาสนศาสตร์ · ร้านหนังสือ",
			youversionTitle: "แอปพระคัมภีร์ YouVersion",
			youversionDescription: "แอปพระคัมภีร์ฟรี 100% ไม่มีโฆษณาหรือค่าใช้จ่าย มีพระคัมภีร์หลายฉบับ เสียง แผนการอ่าน ข้อพระคัมภีร์ประจำวัน การค้นหา ไฮไลต์ และบันทึกส่วนตัว เหมาะสำหรับอ่านและฟังพระวจนะทุกวัน",
			youversionKind: "แอปพระคัมภีร์ · เสียง · แผนการอ่าน",
			odbmTitle: "พันธกิจมานาประจำวัน ประเทศไทย",
			odbmDescription: "เว็บไซต์ภาษาไทยที่มีบทความเฝ้าเดี่ยวประจำวัน คลังบทความย้อนหลัง แผนการอ่าน พระคัมภีร์ เสียง และสื่อหนุนใจหลากหลาย เหมาะสำหรับผู้ที่ต้องการอ่านพระวจนะและใคร่ครวญกับพระเจ้าอย่างสม่ำเสมอ",
			odbmKind: "เฝ้าเดี่ยวประจำวัน · บทความ · เสียง · แผนการอ่าน",
			reformedConfessionsTitle: "Reformed Confessions",
			reformedConfessionsDescription: "เว็บไซต์ที่รวบรวมเอกสารคำสารภาพความเชื่อสำคัญในประวัติศาสตร์คริสตจักร เช่น คำสารภาพความเชื่อเวสต์มินสเตอร์ คำถามคำตอบใหญ่และคำถามคำตอบสั้น คำสารภาพความเชื่อเบลจิก หลักข้อเชื่อแห่งดอร์ท และคำสอนถามตอบไฮเดลเบิร์ก เพื่อให้อ่าน ค้นหา ศึกษา และดาวน์โหลดเอกสารได้สะดวก",
			reformedConfessionsKind: "คำสารภาพความเชื่อ · คำสอนถามตอบ · เอกสารประวัติศาสตร์"
		},
		ko: {
			title: "유용한 사이트",
			description: "엄선한 기독교 자료 사이트입니다. 카드/타이틀을 클릭하면 새창으로 원본 사이트로 이동합니다.",
			note: "파일과 콘텐츠의 권리는 원본 사이트에 있습니다. 재배포하기 전에 각 사이트의 이용 조건을 확인해 주세요.",
			visit: "사이트 바로가기",
			commentaryKind: "성경 주석 · 성경 66권",
			commentaryDescription: "성경 각 권의 장, 절을 검색하여 단락별로 그 주해와 해설을 볼 수 있습니다.",
			commentaryTitle: "성경 66권 해설",
			graceBannasanTitle: "Grace Bannasan (그레이스 반나산)",
			graceBannasanDescription: "태국 그리스도인을 위한 기독교 출판·자료 사이트입니다. 태국어 기독교 도서와 무료 전자책, 오디오북, 신앙·성경 관련 글을 살펴볼 수 있습니다.",
			graceBannasanKind: "태국어 기독교 도서 · 전자책 · 오디오북 · 글",
			thirdmillTitle: "Thirdmill 태국어 무료 신학교육",
			thirdmillDescription: "목회자와 교회 지도자, 일반 성도를 위한 태국어 성경·신학 강좌입니다. 영상, 음성 및 PDF 교재를 무료로 공부하고 다운로드할 수 있습니다.",
			thirdmillKind: "태국어 강좌 · 영상 · 음성 · PDF",
			thaiChurchesTitle: "ThaiChurches.org",
			thaiChurchesDescription: "태국 내 교회 정보를 찾아볼 수 있는 사이트입니다. 태국 교회와 관련 정보를 확인하고, 필요한 경우 태국어 화면에서 교회 정보를 살펴볼 수 있습니다.",
			thaiChurchesKind: "태국 교회 검색 · 태국어 사이트",
			saphanTitle: "사판 시암 (Saphan Siam)",
			saphanDescription: "태국인을 위해 성경, 신학, 교회, 그리스도인의 삶을 다루는 태국어 기독교 글과 자료를 제공합니다. 태국어 기독교 도서도 살펴볼 수 있습니다.",
			saphanKind: "태국어 글 · 신학 자료 · 기독교 도서",
			youversionTitle: "YouVersion 성경 앱",
			youversionDescription: "무료로 사용할 수 있는 성경 앱입니다. 여러 성경 번역, 오디오 성경, 오늘의 말씀, 읽기 계획, 검색, 하이라이트와 노트 기능을 통해 매일 성경을 읽고 듣도록 돕습니다.",
			youversionKind: "성경 앱 · 오디오 · 읽기 계획",
			odbmTitle: "Our Daily Bread Ministries 태국어 묵상",
			odbmDescription: "태국어로 제공되는 오늘의 양식 묵상 사이트입니다. 매일 묵상, 지난 묵상 자료, 성경 읽기 계획, 오디오와 다양한 신앙 자료를 통해 태국 성도들이 말씀을 묵상하고 일상 속에서 적용하도록 돕습니다.",
			odbmKind: "태국어 매일 묵상 · 오디오 · 읽기 계획",
			reformedConfessionsTitle: "Reformed Confessions",
			reformedConfessionsDescription: "교회가 오랜 시간 성경의 진리를 고백하고 가르치기 위해 사용해 온 역사적 신앙고백 문서들을 한곳에 모은 사이트입니다. 웨스트민스터 신앙고백서, 대·소요리문답, 벨직 신앙고백서, 도르트 신조, 하이델베르크 요리문답 등을 읽고 검색하며 필요한 자료를 내려받을 수 있습니다.",
			reformedConfessionsKind: "신앙고백서 · 요리문답 · 역사적 문서"
		},
		en: {
			title: "Useful sites",
			description: "A curated list of Christian resource sites. Click a card or title to open the original website in a new tab.",
			note: "Files and content belong to their original websites. Please review each site's terms before redistributing anything.",
			visit: "Visit website",
			commentaryKind: "Bible commentary · all 66 books",
			commentaryDescription: "Search chapters and verses in each book of the Bible and read commentary and explanation arranged by passage.",
			commentaryTitle: "Bible 66 Commentary",
			graceBannasanTitle: "Grace Bannasan",
			graceBannasanDescription: "A Christian publishing and resource ministry for Thai readers, offering books, free e-books, audiobooks, articles, and biblical and theological resources.",
			graceBannasanKind: "Thai Christian books · E-books · Audiobooks · Articles",
			thirdmillTitle: "Thirdmill — Free Thai Biblical Education",
			thirdmillDescription: "Free Thai-language Bible and theology courses for pastors, church leaders, and individual learners, with video, audio, and downloadable PDF study materials.",
			thirdmillKind: "Thai courses · video · audio · PDF",
			thaiChurchesTitle: "ThaiChurches.org",
			thaiChurchesDescription: "A website for finding churches and church-related information in Thailand, useful for exploring local congregations and related resources.",
			thaiChurchesKind: "Church search · Thailand",
			saphanTitle: "Saphan Siam",
			saphanDescription: "A Thai-language Christian resource hub offering articles on the Bible, theology, the church, and Christian living, along with a Christian bookstore for Thai readers.",
			saphanKind: "Thai articles · theology resources · bookstore",
			youversionTitle: "YouVersion Bible App",
			youversionDescription: "A free Bible app with no ads or purchases, offering Bible versions, audio, daily Scripture, reading plans, search, highlights, notes, and tools for reading and listening to Scripture every day.",
			youversionKind: "Bible app · audio · reading plans",
			odbmTitle: "Our Daily Bread Ministries Thailand",
			odbmDescription: "A Thai-language devotional resource with daily reflections, an archive of past devotionals, Bible reading plans, audio, Scripture resources, and other materials for steady personal meditation and Christian encouragement.",
			odbmKind: "Thai daily devotional · audio · reading plans",
			reformedConfessionsTitle: "Reformed Confessions",
			reformedConfessionsDescription: "A collection of historic confessional documents the church has used to confess and teach biblical truth, including the Westminster Confession of Faith, the Larger and Shorter Catechisms, the Belgic Confession, the Canons of Dort, and the Heidelberg Catechism, with tools for reading, searching, and downloading resources.",
			reformedConfessionsKind: "Confessions · catechisms · historic documents"
		}
	};
	const t = pageCopy[lang];
	const nav = copy[lang].nav;
	const subnav = {
		th: {
			books: "หนังสือฟรี",
			pdf: "เอกสาร PDF",
			video: "สื่อวิดีโอ",
			audiobook: "หนังสือเสียง",
			article: "บทความ"
		},
		ko: {
			books: "무료도서",
			pdf: "PDF 자료",
			video: "영상자료",
			audiobook: "오디오북",
			article: "에세이"
		},
		en: {
			books: "Free books",
			pdf: "PDF resources",
			video: "Video Resources",
			audiobook: "Audiobooks",
			article: "Articles"
		}
	}[lang];
	const commentaryUrl = lang === "ko" ? "https://bible-66-commentary.pages.dev" : "https://bible-66-commentary.pages.dev/?lang=th";
	const thaiChurchesUrl = "https://thaichurches.org/";
	const youversionUrl = lang === "th" ? "https://www.bible.com/th/app" : lang === "ko" ? "https://www.bible.com/ko/app" : "https://www.bible.com/app";
	const odbmUrl = "https://www.odbm.org/th/today/";
	const reformedConfessionsUrl = "https://re-confessions.pages.dev/";
	const graceBannasanUrl = lang === "en" ? "https://www.gracebannasan.com/en/" : "https://www.gracebannasan.com/";
	return renderTemplate`${renderComponent($$result, "SiteLayout", $$SiteLayout, {
		"lang": lang,
		"title": t.title,
		"description": t.description,
		"current": "library"
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<header class="page-heading container"><p class="eyebrow">${lang === "ko" || lang === "th" ? "RECOMMEND SITE" : "Truth for Life and Mission"}</p>${lang !== "ko" && renderTemplate`<h1>${t.title}</h1>`}</header><section class="container"><nav class="filter-row library-filter-row" aria-label="Resource types" data-library-filter-row><a${addAttribute(`/${lang}/library/?type=audiobook`, "href")}>${subnav.audiobook}</a><a${addAttribute(`/${lang}/library/?type=book`, "href")}>${subnav.books}</a><a${addAttribute(`/${lang}/library/?type=pdf`, "href")}>${subnav.pdf}</a><a${addAttribute(`/${lang}/library/?type=video`, "href")}>${subnav.video}</a><a${addAttribute(`/${lang}/library/?type=article`, "href")}>${subnav.article}</a><a class="active"${addAttribute(`/${lang}/useful-sites/`, "href")}>${nav.usefulLinks}</a></nav><script>
      (() => {
        const stickyStateKey = "tflm-library-filter-sticky";
        const filterRow = document.querySelector("[data-library-filter-row]");
        if (!(filterRow instanceof HTMLElement)) return;

        const updateLibraryFilterTop = () => {
          const header = document.querySelector(".site-header");
          if (header instanceof HTMLElement) {
            const measured = header.getBoundingClientRect().height;
            if (measured > 0) {
              const headerHeight = Math.ceil(measured);
              document.documentElement.style.setProperty("--library-filter-top", \`\${headerHeight}px\`);
              return headerHeight;
            }
          }
          const raw = getComputedStyle(document.documentElement).getPropertyValue("--site-header-height");
          const parsed = Number.parseFloat(raw);
          const headerHeight = Number.isFinite(parsed) ? Math.ceil(parsed) : 62;
          document.documentElement.style.setProperty("--library-filter-top", \`\${headerHeight}px\`);
          return headerHeight;
        };

        const scrollFilterToStickyPosition = () => {
          const headerHeight = updateLibraryFilterTop();
          const targetTop = filterRow.getBoundingClientRect().top + window.scrollY - headerHeight;
          window.scrollTo({ top: Math.max(0, Math.round(targetTop)), behavior: "auto" });
        };

        const keepStickyStateWhenReached = () => {
          const headerHeight = updateLibraryFilterTop();
          if (filterRow.getBoundingClientRect().top <= headerHeight + 2) {
            sessionStorage.setItem(stickyStateKey, "1");
          }
        };

        updateLibraryFilterTop();
        window.addEventListener("resize", updateLibraryFilterTop, { passive: true });
        window.addEventListener("scroll", keepStickyStateWhenReached, { passive: true });

        if (sessionStorage.getItem(stickyStateKey) === "1") {
          requestAnimationFrame(() => requestAnimationFrame(scrollFilterToStickyPosition));
          window.setTimeout(scrollFilterToStickyPosition, 120);
          window.setTimeout(scrollFilterToStickyPosition, 420);
        }

        filterRow.querySelectorAll("a").forEach((link) => {
          link.addEventListener("click", () => {
            sessionStorage.setItem(stickyStateKey, "1");
          });
        });
      })();
    <\/script><div class="external-site-list"><p class="useful-sites-intro">${t.description}</p><div class="commentary-recommendation" id="bible-66-commentary">${renderComponent($$result, "RecommendedSiteCard", $$RecommendedSiteCard, {
		"href": commentaryUrl,
		"title": t.commentaryTitle,
		"titleLines": lang === "en" ? ["Bible 66", "Commentary"] : void 0,
		"description": t.commentaryDescription,
		"meta": t.commentaryKind,
		"action": t.visit,
		"imageSrc": "/bible-66-commentary-icon.png?v=20260812",
		"imageAlt": "Bible 66 Commentary",
		"showArrow": lang !== "th",
		"hideAction": true
	})}${lang === "th" && renderTemplate`<a class="button secondary download-button commentary-pdf-download" href="/th/library/?type=book#bible-66-book">${pageCopy.th.commentaryDownload}</a>`}${renderComponent($$result, "ShareButtons", $$ShareButtons, {
		"lang": lang,
		"url": commentaryUrl,
		"title": t.commentaryTitle
	})}</div><article class="recommendation-share-card" id="grace-bannasan">${renderComponent($$result, "RecommendedSiteCard", $$RecommendedSiteCard, {
		"href": graceBannasanUrl,
		"title": t.graceBannasanTitle,
		"description": t.graceBannasanDescription,
		"meta": t.graceBannasanKind,
		"action": t.visit,
		"imageSrc": "/grace-bannasan-logo.png",
		"imageAlt": "Grace Bannasan",
		"showArrow": lang !== "th",
		"hideAction": true
	})}${renderComponent($$result, "ShareButtons", $$ShareButtons, {
		"lang": lang,
		"url": graceBannasanUrl,
		"title": t.graceBannasanTitle
	})}</article><article class="recommendation-share-card" id="saphan-siam">${renderComponent($$result, "RecommendedSiteCard", $$RecommendedSiteCard, {
		"href": "https://saphansiam.org/",
		"title": t.saphanTitle,
		"description": t.saphanDescription,
		"meta": t.saphanKind,
		"action": t.visit,
		"imageSrc": "/saphan-siam-logo.svg",
		"imageAlt": "Saphan Siam",
		"showArrow": lang !== "th",
		"hideAction": true
	})}${renderComponent($$result, "ShareButtons", $$ShareButtons, {
		"lang": lang,
		"url": "https://saphansiam.org/",
		"title": t.saphanTitle
	})}</article><article class="recommendation-share-card" id="youversion-bible-app">${renderComponent($$result, "RecommendedSiteCard", $$RecommendedSiteCard, {
		"href": youversionUrl,
		"title": t.youversionTitle,
		"description": t.youversionDescription,
		"meta": t.youversionKind,
		"action": t.visit,
		"imageSrc": "/youversion-app-icon.png",
		"imageAlt": "YouVersion Bible App",
		"showArrow": lang !== "th",
		"hideAction": true
	})}${renderComponent($$result, "ShareButtons", $$ShareButtons, {
		"lang": lang,
		"url": youversionUrl,
		"title": t.youversionTitle
	})}</article><article class="recommendation-share-card" id="our-daily-bread-thailand">${renderComponent($$result, "RecommendedSiteCard", $$RecommendedSiteCard, {
		"href": odbmUrl,
		"title": t.odbmTitle,
		"description": t.odbmDescription,
		"meta": t.odbmKind,
		"action": t.visit,
		"imageSrc": "/odbm-logo.png",
		"imageAlt": "Our Daily Bread Ministries",
		"showArrow": lang !== "th",
		"hideAction": true
	})}${renderComponent($$result, "ShareButtons", $$ShareButtons, {
		"lang": lang,
		"url": odbmUrl,
		"title": t.odbmTitle
	})}</article><article class="recommendation-share-card" id="reformed-confessions">${renderComponent($$result, "RecommendedSiteCard", $$RecommendedSiteCard, {
		"href": reformedConfessionsUrl,
		"title": t.reformedConfessionsTitle,
		"description": t.reformedConfessionsDescription,
		"meta": t.reformedConfessionsKind,
		"action": t.visit,
		"imageSrc": "/reformed-confessions-logo.png",
		"imageAlt": "Reformed Confessions",
		"showArrow": lang !== "th",
		"hideAction": true
	})}${renderComponent($$result, "ShareButtons", $$ShareButtons, {
		"lang": lang,
		"url": reformedConfessionsUrl,
		"title": t.reformedConfessionsTitle
	})}</article><article class="recommendation-share-card" id="thai-churches">${renderComponent($$result, "RecommendedSiteCard", $$RecommendedSiteCard, {
		"href": thaiChurchesUrl,
		"title": t.thaiChurchesTitle,
		"description": t.thaiChurchesDescription,
		"meta": t.thaiChurchesKind,
		"action": t.visit,
		"imageSrc": "/thai-churches-logo.jpg",
		"imageAlt": "ThaiChurches.org",
		"showArrow": lang !== "th",
		"hideAction": true
	})}${renderComponent($$result, "ShareButtons", $$ShareButtons, {
		"lang": lang,
		"url": thaiChurchesUrl,
		"title": t.thaiChurchesTitle
	})}</article><article class="recommendation-share-card" id="thirdmill-thai">${renderComponent($$result, "RecommendedSiteCard", $$RecommendedSiteCard, {
		"href": "https://thai.thirdmill.org/",
		"title": t.thirdmillTitle,
		"description": t.thirdmillDescription,
		"meta": t.thirdmillKind,
		"action": t.visit,
		"imageSrc": "/thirdmill-logo-cropped.svg",
		"imageAlt": "Thirdmill",
		"imageLayout": "wide",
		"showArrow": lang !== "th",
		"hideAction": true
	})}${renderComponent($$result, "ShareButtons", $$ShareButtons, {
		"lang": lang,
		"url": "https://thai.thirdmill.org/",
		"title": t.thirdmillTitle
	})}</article></div></section>` })}`;
}, "/Users/udmission/Documents/Codex/2026-08-08/new-chat-3/truth-for-life-and-mission/src/pages/[lang]/useful-sites/index.astro", void 0);
var $$file = "/Users/udmission/Documents/Codex/2026-08-08/new-chat-3/truth-for-life-and-mission/src/pages/[lang]/useful-sites/index.astro";
var $$url = "/[lang]/useful-sites";
//#endregion
//#region \0virtual:astro:page:src/pages/[lang]/useful-sites/index@_@astro
var page = () => useful_sites_exports;
//#endregion
export { page };
