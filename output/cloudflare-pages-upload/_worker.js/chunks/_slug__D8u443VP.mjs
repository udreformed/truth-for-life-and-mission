globalThis.process ??= {};
globalThis.process.env ??= {};
import { n as __exportAll } from "./rolldown-runtime_Upwk45wU.mjs";
import { E as createAstro, _ as addAttribute, d as renderTemplate, h as maybeRenderHead, i as renderComponent } from "./server_DzJkc2yi.mjs";
import { t as createComponent } from "./compiler_BiDVP5L8.mjs";
import { n as isLanguage, r as typeLabels } from "./i18n_B790PXAF.mjs";
import { t as $$SiteLayout } from "./SiteLayout_0t_mp1ud.mjs";
import { t as $$ShareButtons } from "./ShareButtons_Ci5R3-kv.mjs";
import { n as listPublishedResources, t as getPublishedResource } from "./resources_CloFJv4w.mjs";
import { t as localizedGospelDevotionalBody } from "./devotional-text_CMnN6j2p.mjs";
import { t as youtubeEmbedUrl } from "./youtube_BWYuiuwP.mjs";
//#region src/pages/[lang]/library/[slug].astro
var _slug__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Slug,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://tflm.pages.dev");
var $$Slug = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Slug;
	const langParam = Astro.params.lang;
	const slug = Astro.params.slug ?? "";
	if (!isLanguage(langParam)) return Astro.redirect("/th/", 302);
	const lang = langParam;
	const resource = await getPublishedResource(lang, slug);
	if (!resource) return new Response("Not found", { status: 404 });
	const embedUrl = youtubeEmbedUrl(resource.youtube_url);
	const mediaUrl = resource.pdf_key ? `/media/${encodeURIComponent(resource.pdf_key)}` : null;
	const bodyParagraphs = (resource.type === "devotional" ? localizedGospelDevotionalBody(lang, resource.body) : resource.body ?? "").split(/\n{2,}/).map((paragraph) => paragraph.trim()).filter(Boolean);
	const styledLongArticleSlugs = /* @__PURE__ */ new Set([
		"reformation-five-pillars",
		"limited-atonement-evangelism",
		"five-ways-prosperity-gospel",
		"article-what-is-the-gospel",
		"article-justification-and-regeneration",
		"article-what-is-reformed-faith",
		"article-sanctification-and-mortification",
		"article-mission-and-missionary"
	]);
	const isStyledLongArticle = resource.type === "article" && styledLongArticleSlugs.has(resource.slug);
	const bookletArticleSlugs = /* @__PURE__ */ new Set([
		"article-what-is-the-gospel",
		"article-justification-and-regeneration",
		"article-what-is-reformed-faith",
		"article-sanctification-and-mortification",
		"article-mission-and-missionary"
	]);
	const exactBookletSectionHeadings = {
		"article-justification-and-regeneration": {
			ko: ["우리의 죄가 그리스도께, 그리스도의 의가 우리에게"],
			th: ["บาปของเราถูกนับไว้กับพระคริสต์ และความชอบธรรมของพระคริสต์ถูกนับเป็นของเรา"]
		},
		"article-what-is-reformed-faith": {
			ko: [
				"들어가는 말",
				"오직 성경",
				"오직 은혜",
				"오직 믿음",
				"오직 그리스도",
				"오직 하나님께 영광",
				"창조와 인간의 책임",
				"은혜언약의 약속",
				"그리스도 안에서 성취된 새 언약",
				"말씀에 따라 사십시오",
				"은혜 안에서 겸손하십시오",
				"교회를 사랑하십시오",
				"소명을 따라 충성하십시오",
				"고난 속에서 섭리를 신뢰하십시오",
				"복음을 전하십시오",
				"교리적 교만을 경계하십시오",
				"이 글의 핵심"
			],
			th: [
				"คำนำ: ความเชื่อที่กลับสู่พระคัมภีร์",
				"พระคัมภีร์เท่านั้น",
				"พระคุณเท่านั้น",
				"ความเชื่อเท่านั้น",
				"พระคริสต์เท่านั้น",
				"พระสิริแด่พระเจ้าเท่านั้น",
				"การทรงสร้างและความรับผิดชอบของมนุษย์",
				"พระสัญญาแห่งพันธสัญญาพระคุณ",
				"พันธสัญญาใหม่สำเร็จในพระคริสต์",
				"ดำเนินตามพระวจนะ",
				"ถ่อมใจในพระคุณ",
				"รักคริสตจักร",
				"สัตย์ซื่อตามการทรงเรียก",
				"ไว้วางใจพระ providence ของพระเจ้าในความทุกข์",
				"ประกาศข่าวประเสริฐ",
				"ระวังความหยิ่งทางหลักคำสอน",
				"สาระสำคัญ"
			]
		},
		"article-sanctification-and-mortification": {
			ko: ["들어가는 말", "이 글의 핵심"],
			th: ["คำนำ", "สาระสำคัญ"]
		},
		"article-mission-and-missionary": { th: [
			"พันธกิจเป็นงานของใคร",
			"ประกาศข่าวประเสริฐ สร้างสาวก และสร้างคริสตจักร",
			"ประกาศแก่ครอบครัว เพื่อนบ้าน และชุมชน",
			"คริสตจักรเล็กก็มีส่วนในพันธกิจได้",
			"อธิษฐาน ประกาศ ถวาย ต้อนรับ และส่งคนออกไป",
			"1. ประกาศแก่คนใกล้ตัว",
			"2. อธิษฐานอย่างเจาะจง",
			"3. ถวายอย่างสม่ำเสมอ",
			"4. รู้จักและดูแลมิชชันนารี",
			"5. ใช้อาชีพและความสามารถ",
			"6. ต้อนรับคนจากชนชาติอื่น",
			"7. เปิดใจต่อการทรงเรียก",
			"หากพระเจ้าทรงเรียกฉันให้เป็นมิชชันนารี",
			"จากประเทศไทยไปสู่ประเทศเพื่อนบ้านและชนทุกชาติ",
			"จากคริสตจักรที่ได้รับ ไปสู่คริสตจักรที่ส่งออกไป"
		] }
	};
	const exactBookletMajorHeadings = {
		"article-justification-and-regeneration": {
			ko: [
				"들어가는 말",
				"구원이란 무엇인가?",
				"사랑의 하나님께서 죄인들을 그냥 용서해 주시면 안 되는가?",
				"그렇다면 하나님 앞에서 용서받고 구원받는 일이 어떻게 가능한가?",
				"예수님께서 십자가에서 죽으신 것은 무엇을 의미하는가?",
				"칭의: 하나님께서 죄인을 의롭다고 선언하심",
				"“오직 믿음으로 구원받는다”는 것은 무슨 뜻인가?",
				"구원하는 믿음: 예수님을 믿는다는 것은 무슨 뜻인가?",
				"믿음과 행위는 어떤 관계인가?",
				"거듭남: 위로부터 새롭게 태어남",
				"칭의와 거듭남은 어떻게 다른가?",
				"거듭난 사람에게는 어떤 변화가 나타나는가?",
				"거듭남과 삶의 열매",
				"구원의 모든 영광은 하나님께",
				"이 글의 핵심"
			],
			th: [
				"คำนำ",
				"ความรอดคืออะไร?",
				"ถ้าพระเจ้าทรงรัก ทำไมพระองค์ไม่ทรงยกโทษให้ทุกคนเสียเลย?",
				"แล้วคนบาปจะได้รับการยกโทษได้อย่างไร?",
				"การสิ้นพระชนม์ของพระเยซูบนกางเขนหมายความว่าอะไร?",
				"การทรงนับว่าเป็นผู้ชอบธรรมคืออะไร?",
				"“รอดโดยความเชื่อเท่านั้น” หมายความว่าอะไร?",
				"ความเชื่อที่ช่วยให้รอดคืออะไร?",
				"ความเชื่อและการประพฤติเกี่ยวข้องกันอย่างไร?",
				"การบังเกิดใหม่คืออะไร?",
				"การทรงนับว่าเป็นผู้ชอบธรรมกับการบังเกิดใหม่ต่างกันอย่างไร?",
				"ผู้ที่บังเกิดใหม่มีการเปลี่ยนแปลงอย่างไร?",
				"ผลของชีวิตใหม่",
				"พระสิริแห่งความรอดเป็นของพระเจ้า",
				"สาระสำคัญ"
			]
		},
		"article-mission-and-missionary": { th: [
			"คำนำ",
			"1. พระเจ้าทรงมอบพันธกิจไว้กับคริสตจักร",
			"2. พันธกิจเริ่มต้นจากที่ที่เราอยู่",
			"3. คริสตจักรไทยก็เป็นคริสตจักรที่ส่งคนออกไปได้",
			"4. ผู้เชื่อทุกคนมีส่วนในพันธกิจได้",
			"5. ชนชาติต่าง ๆ อยู่ใกล้เราแล้ว",
			"บทส่งท้าย",
			"สาระสำคัญ"
		] }
	};
	const isArticleSolaHeading = (paragraph) => /^(Sola Scriptura|Solus Christus|Sola Gratia|Sola Fide|Soli Deo Gloria)$/.test(paragraph);
	const cleanArticleParagraph = (paragraph) => paragraph.replace(/^#{2,3}\s+/u, "").trim();
	const isBookletMajorHeading = (normalized) => {
		if (!!normalized.includes("\n") || normalized.length > (lang === "th" ? 120 : 90)) return false;
		const exactMajorHeadings = exactBookletMajorHeadings[resource.slug]?.[lang] ?? [];
		if (resource.slug === "article-mission-and-missionary" && exactMajorHeadings.length > 0) return exactMajorHeadings.includes(normalized);
		if (exactMajorHeadings.includes(normalized)) return true;
		return /^\(\d+\)\s+\S/.test(normalized) || /^[①②③④⑤⑥⑦⑧⑨⑩]\s*\S/.test(normalized) || /^\d+장[.)]?\s+\S/.test(normalized) || /^บทที่\s*\d+\s+\S/.test(normalized) || /^(들어가는 말|คำนำ|Introduction)(\s*[:：].*)?$/.test(normalized) || /^(칭의|거듭남|성화|죄 죽임|회개|Justification|Regeneration|Sanctification|Mortification|Repentance)\s*[:：].+$/.test(normalized) || /^(이 글의 핵심|สาระสำคัญ|Key Points)$/.test(normalized);
	};
	const isArticleSubsectionHeading = (paragraph) => {
		if (!isStyledLongArticle) return false;
		if (/^###\s+/u.test(paragraph)) return true;
		const normalized = cleanArticleParagraph(paragraph);
		if (!bookletArticleSlugs.has(resource.slug)) return false;
		if (!!normalized.includes("\n") || normalized.length > (lang === "th" ? 120 : 90)) return false;
		if (/^\d+[.)]\s+\S/.test(normalized)) return true;
		return (exactBookletSectionHeadings[resource.slug]?.[lang] ?? []).includes(normalized) && !isBookletMajorHeading(normalized);
	};
	const isArticleSectionHeading = (paragraph) => {
		if (!isStyledLongArticle) return false;
		if (/^##\s+/u.test(paragraph)) return true;
		const normalized = cleanArticleParagraph(paragraph);
		if (isArticleSolaHeading(normalized)) return true;
		if (bookletArticleSlugs.has(resource.slug)) return isBookletMajorHeading(normalized);
		if (/^[1-5]\.\s/.test(normalized)) return true;
		if (/^\d+[.)]\s+\S/.test(normalized) && normalized.length <= 90) return true;
		if (/^(들어가는 말|คำนำ|Introduction)\s*[:：]/.test(normalized)) return true;
		return [
			"การไถ่บาปอย่างจำกัดสนับสนุนการประกาศข่าวประเสริฐ",
			"การไถ่บาปที่สำเร็จจริง",
			"พระคริสต์ทรงสิ้นพระชนม์และทรงอธิษฐานเพื่อประชากรของพระองค์",
			"เราจะรู้ได้อย่างไรว่าเราเป็นแกะของพระคริสต์?",
			"ความรอดเป็นแผนการนิรันดร์ของพระเจ้า",
			"ที่มา",
			"บทสรุป",
			"제한속죄는 복음 전도를 뒷받침한다",
			"실제로 성취된 속죄",
			"그리스도께서는 자기 백성을 위해 죽으시고 기도하신다",
			"우리가 그리스도의 양인지 어떻게 알 수 있는가?",
			"구원은 하나님의 영원한 계획이다",
			"출처",
			"Limited Atonement and Evangelism"
		].includes(normalized);
	};
	const authorLabel = lang === "th" ? "ผู้เขียน" : lang === "ko" ? "글쓴이" : "Author";
	const articleNav = {
		th: {
			back: "กลับไปที่รายการบทความ",
			bonarBack: "กลับไปที่สารบัญ Horatius Bonar",
			other: "บทความอื่น ๆ",
			bonar: "สารบัญ Horatius Bonar"
		},
		ko: {
			back: "글 목록으로 돌아가기",
			bonarBack: "Horatius Bonar 목차로 돌아가기",
			other: "다른 글 목록",
			bonar: "Horatius Bonar 목차"
		},
		en: {
			back: "Back to all articles",
			bonarBack: "Back to the Horatius Bonar table of contents",
			other: "Other articles",
			bonar: "Horatius Bonar Contents"
		}
	}[lang];
	const bonarToc = [
		{
			slug: "bonar-door-of-salvation-opened",
			th: "ประตูแห่งความรอดที่เปิดออก",
			ko: "열린 구원의 문",
			en: "The Door of Salvation Opened"
		},
		{
			slug: "bonar-faithful-saying",
			th: "ถ้อยคำที่เชื่อถือได้",
			ko: "미쁘다 이 말이여",
			en: "The Faithful Saying"
		},
		{
			slug: "bonar-well-of-living-water",
			th: "บ่อน้ำแห่งชีวิต",
			ko: "생수의 우물",
			en: "The Well of Living Water"
		},
		{
			slug: "bonar-jehovah-our-righteousness",
			th: "พระยาห์เวห์ทรงเป็นความชอบธรรมของเรา",
			ko: "여호와 우리의 의",
			en: "Jehovah our Righteousness"
		},
		{
			slug: "bonar-believe-and-live",
			th: "จงเชื่อและมีชีวิต",
			ko: "믿고 살라",
			en: "Believe and Live"
		},
		{
			slug: "bonar-sin-put-away-by-christ",
			th: "บาปที่พระคริสต์ทรงกำจัดออกไป",
			ko: "그리스도께서 제거하신 죄",
			en: "Sin Put Away by Christ"
		},
		{
			slug: "bonar-words-of-warning",
			th: "ถ้อยคำแห่งการเตือน",
			ko: "경고의 말씀",
			en: "Words of Warning"
		},
		{
			slug: "bonar-electing-love",
			th: "ความรักที่ทรงเลือก",
			ko: "택하시는 사랑",
			en: "Electing Love"
		},
		{
			slug: "bonar-holy-spirit-old-testament",
			th: "พระราชกิจของพระวิญญาณบริสุทธิ์ในพันธสัญญาเดิม",
			ko: "구약에 기록된 성령의 사역",
			en: "The Works of the Holy Spirit in the Old Testament"
		},
		{
			slug: "bonar-now",
			th: "บัดนี้",
			ko: "지금",
			en: "Now"
		},
		{
			slug: "bonar-to-the-unconverted",
			th: "ถึงผู้ที่ยังไม่กลับใจ",
			ko: "회심하지 않은 이들에게",
			en: "To the Unconverted"
		},
		{
			slug: "bonar-white-robes",
			th: "เสื้อคลุมสีขาว",
			ko: "흰 옷",
			en: "The White Robes"
		},
		{
			slug: "bonar-holy-spirit-new-testament",
			th: "พระราชกิจของพระวิญญาณบริสุทธิ์ในพันธสัญญาใหม่",
			ko: "신약에 기록된 성령의 사역",
			en: "The Works of the Holy Spirit in the New Testament"
		},
		{
			slug: "bonar-luthers-conversion",
			th: "การกลับใจของลูเธอร์",
			ko: "루터의 회심",
			en: "Luther's Conversion"
		},
		{
			slug: "bonar-sin-our-enemy-god-our-friend",
			th: "บาปคือศัตรูของเรา และพระเจ้าคือมิตรของเรา",
			ko: "우리의 원수인 죄와 우리의 친구이신 하나님",
			en: "Sin our Enemy, and God our Friend"
		},
		{
			slug: "bonar-lords-supper",
			th: "อาหารมื้อขององค์พระผู้เป็นเจ้า",
			ko: "주의 만찬",
			en: "The Lord's Supper"
		},
		{
			slug: "bonar-anchor-of-the-soul",
			th: "สมอแห่งจิตวิญญาณ",
			ko: "영혼의 닻",
			en: "The Anchor of the Soul"
		},
		{
			slug: "bonar-prayer-meeting",
			th: "ท่านไปประชุมอธิษฐานหรือไม่?",
			ko: "기도회에 나가십니까?",
			en: "Do You Go to the Prayer-Meeting?"
		},
		{
			slug: "bonar-city-of-refuge",
			th: "เมืองลี้ภัย",
			ko: "피난성",
			en: "The City of Refuge"
		},
		{
			slug: "bonar-night-daybreak-clear-day",
			th: "กลางคืน รุ่งอรุณ และกลางวันที่แจ่มใส",
			ko: "밤, 새벽, 밝은 낮",
			en: "Night, Day-Break, and Clear Day"
		},
		{
			slug: "bonar-behold-he-cometh-with-clouds",
			th: "ดูเถิด พระองค์เสด็จมาพร้อมเมฆ",
			ko: "보라 그가 구름을 타고 오시리라",
			en: "Behold, He Cometh with Clouds"
		},
		{
			slug: "bonar-gods-unspeakable-gift",
			th: "ของประทานอันเกินบรรยายของพระเจ้า",
			ko: "말로 다할 수 없는 하나님의 선물",
			en: "God's Unspeakable Gift"
		},
		{
			slug: "bonar-salvation-to-the-uttermost",
			th: "ความรอดอย่างสมบูรณ์ที่สุด",
			ko: "끝까지 이루시는 구원",
			en: "Salvation to the Uttermost"
		},
		{
			slug: "bonar-love-of-the-spirit",
			th: "ความรักของพระวิญญาณ",
			ko: "성령의 사랑",
			en: "The Love of the Spirit"
		},
		{
			slug: "bonar-devouring-fire",
			th: "ใครจะอาศัยอยู่กับไฟที่เผาผลาญได้?",
			ko: "누가 삼키는 불과 함께 거하리요?",
			en: "Who Shall Dwell with the Devouring Fire?"
		},
		{
			slug: "bonar-righteous-reconciliation",
			th: "การคืนดีอันชอบธรรม",
			ko: "의로운 화목",
			en: "Righteous Reconciliation"
		},
		{
			slug: "bonar-throne-of-grace",
			th: "พระที่นั่งแห่งพระคุณ",
			ko: "은혜의 보좌",
			en: "The Throne of Grace"
		},
		{
			slug: "bonar-true-heart",
			th: "หัวใจที่แท้จริง",
			ko: "참된 마음",
			en: "The True Heart"
		},
		{
			slug: "bonar-without-god",
			th: "ปราศจากพระเจ้า",
			ko: "하나님 없이",
			en: "Without God"
		},
		{
			slug: "bonar-false-peace-and-true",
			th: "สันติสุขเทียมและสันติสุขแท้",
			ko: "거짓 평안과 참 평안",
			en: "The False Peace and the True"
		},
		{
			slug: "bonar-gods-purpose-of-grace",
			th: "พระประสงค์แห่งพระคุณของพระเจ้า",
			ko: "하나님의 은혜의 목적",
			en: "God's Purpose of Grace"
		},
		{
			slug: "bonar-chosen-one",
			th: "ผู้ที่ทรงเลือก",
			ko: "택하신 이",
			en: "The Chosen One"
		},
		{
			slug: "bonar-last-time",
			th: "วาระสุดท้าย",
			ko: "마지막 때",
			en: "The Last Time"
		},
		{
			slug: "bonar-sin-bearer",
			th: "พระผู้ทรงแบกรับบาป",
			ko: "죄를 짊어지신 분",
			en: "The Sin-Bearer"
		},
		{
			slug: "bonar-power-of-the-gospel",
			th: "ฤทธิ์เดชของข่าวประเสริฐ",
			ko: "복음의 능력",
			en: "The Power of the Gospel"
		},
		{
			slug: "bonar-tribulation",
			th: "ความทุกข์ยาก",
			ko: "환난",
			en: "Tribulation"
		},
		{
			slug: "bonar-grace-and-glory",
			th: "พระคุณและพระสิริ",
			ko: "은혜와 영광",
			en: "Grace and Glory"
		}
	];
	const bonarSlugSet = new Set(bonarToc.map((item) => item.slug));
	const isBonarArticle = resource.type === "article" && bonarSlugSet.has(resource.slug);
	const articleBackHref = isBonarArticle ? `/${lang}/library/?type=article#horatius-bonar-tracts` : `/${lang}/library/?type=article`;
	const articleBackLabel = isBonarArticle ? articleNav.bonarBack : articleNav.back;
	const bonarTitle = (item) => lang === "th" ? item.th : lang === "ko" ? item.ko : item.en;
	const sideArticles = resource.type === "article" ? isBonarArticle ? bonarToc : (await listPublishedResources(lang, {
		type: "article",
		limit: 50
	})).filter((item) => item.slug !== resource.slug && !bonarSlugSet.has(item.slug)) : [];
	const sideHeading = isBonarArticle ? articleNav.bonar : articleNav.other;
	const sideTitle = (item) => isBonarArticle ? bonarTitle(item) : item.title;
	Astro.response.headers.set("Cache-Control", "public, max-age=60, s-maxage=300, stale-while-revalidate=86400");
	return renderTemplate`${renderComponent($$result, "SiteLayout", $$SiteLayout, {
		"lang": lang,
		"current": "library",
		"title": resource.title,
		"description": resource.summary
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div${addAttribute({
		"article-detail-layout": resource.type === "article",
		container: resource.type === "article"
	}, "class:list")}><article${addAttribute({ "devotional-detail": resource.type === "devotional" }, "class:list")}>${resource.type === "article" && renderTemplate`<div class="article-back-row"><a class="button secondary"${addAttribute(articleBackHref, "href")}>← ${articleBackLabel}</a></div>`}<header class="article-heading narrow"><p class="eyebrow">${typeLabels[lang][resource.type] ?? resource.type}</p>${resource.type === "devotional" && lang === "ko" && renderTemplate`<p class="machine-translation-note">AI 자동 번역본</p>`}${resource.translation_notice && !(resource.type === "devotional" && lang === "en") && renderTemplate`<p class="machine-translation-note">${resource.translation_notice}</p>`}<h1>${resource.title}</h1>${resource.type !== "article" && renderTemplate`<p class="summary">${resource.summary}</p>`}${resource.type === "article" && resource.author_name && renderTemplate`<p class="article-author">${authorLabel}: ${resource.author_name}</p>`}${renderComponent($$result, "ShareButtons", $$ShareButtons, {
		"lang": lang,
		"url": resource.external_url || Astro.url.pathname,
		"title": resource.title
	})}</header><div class="article-body narrow">${embedUrl && renderTemplate`<div class="video-frame article-video"><iframe${addAttribute(embedUrl, "src")}${addAttribute(resource.title, "title")} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>`}${bodyParagraphs.length > 0 && renderTemplate`<div${addAttribute({
		"article-prose": true,
		"long-article-prose": isStyledLongArticle
	}, "class:list")}>${bodyParagraphs.map((paragraph) => renderTemplate`<p${addAttribute({
		"article-section-heading": isArticleSectionHeading(paragraph),
		"article-subsection-heading": isArticleSubsectionHeading(paragraph),
		"article-sola-heading": isArticleSolaHeading(paragraph)
	}, "class:list")}>${cleanArticleParagraph(paragraph)}</p>`)}</div>`}${resource.external_url && renderTemplate`<p class="article-external-link-row"><a class="button secondary"${addAttribute(resource.external_url, "href")} target="_blank" rel="noopener noreferrer">${resource.external_label ?? "Read source"} ↗</a></p>`}${mediaUrl && renderTemplate`<section class="document-panel"><h2>PDF</h2><iframe${addAttribute(mediaUrl, "src")}${addAttribute(`${resource.title} PDF`, "title")}></iframe><a class="button download-button"${addAttribute(`${mediaUrl}?download=1`, "href")}>Download PDF</a></section>`}${resource.type === "article" && renderTemplate`<div class="article-bottom-back-row"><a class="button secondary"${addAttribute(articleBackHref, "href")}>← ${articleBackLabel}</a></div>`}</div></article>${resource.type === "article" && renderTemplate`<aside class="other-articles-panel" aria-labelledby="other-articles-heading"><h2 id="other-articles-heading">${sideHeading}</h2><nav>${sideArticles.map((item) => item.slug === resource.slug ? renderTemplate`<span class="current-article-link"><span>${sideTitle(item)}</span></span>` : renderTemplate`<a${addAttribute(`/${lang}/library/${item.slug}/`, "href")}><span>${sideTitle(item)}</span><span aria-hidden="true">→</span></a>`)}</nav><a class="text-link"${addAttribute(articleBackHref, "href")}>${articleBackLabel} →</a></aside>`}</div>` })}`;
}, "/Users/udmission/Documents/Codex/2026-08-08/new-chat-3/truth-for-life-and-mission/src/pages/[lang]/library/[slug].astro", void 0);
var $$file = "/Users/udmission/Documents/Codex/2026-08-08/new-chat-3/truth-for-life-and-mission/src/pages/[lang]/library/[slug].astro";
var $$url = "/[lang]/library/[slug]";
//#endregion
//#region \0virtual:astro:page:src/pages/[lang]/library/[slug]@_@astro
var page = () => _slug__exports;
//#endregion
export { page };
