globalThis.process ??= {};
globalThis.process.env ??= {};
import { n as __exportAll } from "./rolldown-runtime_Upwk45wU.mjs";
import { E as createAstro, _ as addAttribute, a as Fragment, d as renderTemplate, h as maybeRenderHead, i as renderComponent, v as defineScriptVars } from "./server_DzJkc2yi.mjs";
import { t as createComponent } from "./compiler_BiDVP5L8.mjs";
import { t as renderScript } from "./script_BZVrP_O2.mjs";
import { n as isLanguage, t as copy } from "./i18n_B790PXAF.mjs";
import { t as $$SiteLayout } from "./SiteLayout_CgxsFlnQ.mjs";
import { t as $$ShareButtons } from "./ShareButtons_C5mVJSyH.mjs";
import { t as $$ResourceCard } from "./ResourceCard_D6Gf4t_z.mjs";
import { n as listPublishedResources } from "./resources_CloFJv4w.mjs";
import { t as $$RecommendedSiteCard } from "./RecommendedSiteCard_COygThC2.mjs";
//#region src/pages/[lang]/library/index.astro
var library_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://tflm.pages.dev");
var $$Index = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Index;
	const langParam = Astro.params.lang;
	if (!isLanguage(langParam)) return Astro.redirect("/th/", 302);
	const lang = langParam;
	const t = copy[lang];
	const requestedType = Astro.url.searchParams.get("type") ?? "book";
	if (requestedType === "movie") return Astro.redirect(`/${lang}/library/?type=video`, 302);
	if (requestedType === "bible-reading") return Astro.redirect(`/${lang}/bible-reading/`, 302);
	if (requestedType === "devotional") {
		const dateParam = Astro.url.searchParams.get("date");
		const prayerParam = Astro.url.searchParams.get("prayer");
		const redirectParams = new URLSearchParams();
		if (dateParam) redirectParams.set("date", dateParam);
		if (prayerParam) redirectParams.set("prayer", prayerParam);
		return Astro.redirect(`/${lang}/${redirectParams.size ? `?${redirectParams.toString()}` : ""}#daily-devotional`, 302);
	}
	const type = requestedType;
	const date = Astro.url.searchParams.get("date") ?? "";
	const isBibleArchive = type === "bible-reading";
	const resources = await listPublishedResources(lang, {
		type: isBibleArchive ? "video" : type || void 0,
		audience: isBibleArchive ? "bible-reading" : void 0,
		date: date || void 0,
		limit: 100
	});
	const a = {
		th: {
			reading: "อ่านพระคัมภีร์",
			books: "หนังสือฟรี",
			movies: "ภาพยนตร์พระคัมภีร์",
			pdf: "เอกสาร PDF",
			video: "สื่อวิดีโอ",
			audiobook: "หนังสือเสียง",
			article: "บทความ",
			choose: "เลือกวันที่",
			show: "แสดง",
			clear: "ดูทั้งหมด"
		},
		ko: {
			reading: "성경통독",
			books: "무료도서",
			movies: "성경영화",
			pdf: "PDF 자료",
			video: "영상자료",
			audiobook: "오디오북",
			article: "에세이",
			choose: "날짜 선택",
			show: "보기",
			clear: "전체 보기"
		},
		en: {
			reading: "Bible reading",
			books: "Free books",
			movies: "Bible Movies",
			pdf: "PDF resources",
			video: "Video Resources",
			audiobook: "Audiobooks",
			article: "Articles",
			choose: "Choose a date",
			show: "Show",
			clear: "View all"
		}
	}[lang];
	const bookSites = {
		th: {
			graceMeta: "เว็บไซต์ภายนอก · หนังสือคริสเตียนฟรี",
			monergismTitle: "Monergism — หนังสือ E-book ฟรีกว่า 1,500 เล่ม",
			monergismDescription: "คลังหนังสืออิเล็กทรอนิกส์ภาษาอังกฤษฟรี เรียงตามชื่อผู้เขียน โดยเน้นหนังสือตามแนวความเชื่อปฏิรูป หลังเปิดหน้าเว็บให้เลือก “แปลเป็นภาษาไทย” จากเมนูของเบราว์เซอร์",
			monergismMeta: "หนังสือภาษาอังกฤษ · แนวความเชื่อปฏิรูป · ใช้เมนูแปลภาษาไทยของเบราว์เซอร์",
			monergismAction: "เปิดเว็บไซต์ภาษาอังกฤษ"
		},
		ko: {
			graceMeta: "외부 사이트 · 기독교 무료도서",
			monergismTitle: "Monergism — 1,500권 이상의 무료 E-books",
			monergismDescription: "저자별로 정리된 1,500권 이상의 영어 무료 전자책 모음입니다. 개혁주의 노선의 도서를 중심으로 제공하며, 수록된 도서는 영어로 되어 있습니다.",
			monergismMeta: "영어 도서 · 개혁주의 신학 · 외부 사이트",
			monergismAction: "영어 무료도서 사이트 열기"
		},
		en: {
			graceMeta: "External site · Free Christian books",
			monergismTitle: "Monergism — 1,500+ Free E-books",
			monergismDescription: "A collection of more than 1,500 free English-language e-books listed by author, with a strong focus on books in the Reformed tradition. All books on this page are in English.",
			monergismMeta: "English books · Reformed theology · External site",
			monergismAction: "Open the free English e-book library"
		}
	}[lang];
	const monergismUrl = "https://www.monergism.com/1100-free-ebooks-listed-alphabetically-author";
	const bonarSeries = {
		th: {
			eyebrow: "Horatius Bonar · Kelso Tracts",
			title: "ชุดหนังสือเล่มเล็กของ Horatius Bonar",
			intro: "Horatius Bonar เป็นศิษยาภิบาลและนักเขียนชาวสกอตแลนด์ในศตวรรษที่ 19 ผู้เป็นที่รู้จักจากงานเขียนประกาศข่าวประเสริฐที่ชัดเจน อบอุ่น และจริงจัง ชุดนี้รวบรวมข้อเขียนสั้น ๆ ที่กล่าวถึงข่าวประเสริฐ ความเชื่อ ความชอบธรรมในพระคริสต์ การกลับใจ ความหวัง และชีวิตคริสเตียน",
			author: "ผู้เขียน: Horatius Bonar"
		},
		ko: {
			eyebrow: "Horatius Bonar · Kelso Tracts",
			title: "호라티우스 보나르의 소책자 시리즈",
			intro: "Horatius Bonar는 19세기 스코틀랜드의 목회자이자 복음적 저술가로, 분명하고 따뜻하면서도 엄숙한 복음 설교와 소책자로 잘 알려져 있습니다. 이 시리즈는 복음, 믿음, 그리스도 안의 의, 회개, 소망, 그리스도인의 삶을 다루는 짧은 글을 번호 순서로 정리했습니다.",
			author: ""
		},
		en: {
			eyebrow: "Horatius Bonar · Kelso Tracts",
			title: "Horatius Bonar Tract Series",
			intro: "Horatius Bonar was a nineteenth-century Scottish pastor and evangelical writer known for clear, warm, and earnest Gospel preaching. This series gathers short writings on the Gospel, faith, Christ's righteousness, repentance, hope, and the Christian life.",
			author: "Author: Horatius Bonar"
		}
	}[lang];
	const bonarTracts = [
		{
			no: 2,
			part: 1,
			en: "The Door of Salvation Opened",
			ko: "열린 구원의 문",
			th: "ประตูแห่งความรอดที่เปิดออก",
			subEn: "Christ still knocks at the sinner's heart with mercy, forgiveness, and salvation.",
			subKo: "그리스도께서는 죄인의 마음 문 앞에서 긍휼과 용서와 구원으로 부르십니다.",
			subTh: "พระคริสต์ยังทรงเคาะประตูใจคนบาปด้วยพระเมตตา การอภัย และความรอด"
		},
		{
			no: 3,
			part: 1,
			en: "The Faithful Saying",
			ko: "미쁘다 이 말이여",
			th: "ถ้อยคำที่เชื่อถือได้",
			subEn: "John 3:16 reveals the Father's free love in giving his Son for sinners.",
			subKo: "요한복음 3장 16절은 죄인을 위해 아들을 주신 아버지의 값없는 사랑을 보여 줍니다.",
			subTh: "ยอห์น 3:16 เปิดเผยความรักอันเสรีของพระบิดาที่ประทานพระบุตรเพื่อคนบาป"
		},
		{
			no: 4,
			part: 1,
			en: "The Well of Living Water",
			ko: "생수의 우물",
			th: "บ่อน้ำแห่งชีวิต",
			subEn: "God invites every thirsty soul to receive grace freely, without money and without price.",
			subKo: "하나님은 목마른 모든 영혼을 값없이 은혜의 물가로 초대하십니다.",
			subTh: "พระเจ้าทรงเชิญทุกจิตวิญญาณที่กระหายให้มารับพระคุณโดยไม่ต้องมีเงินและไม่ต้องจ่ายราคา"
		},
		{
			no: 5,
			part: 1,
			en: "Jehovah our Righteousness",
			ko: "여호와 우리의 의",
			th: "พระยาห์เวห์ทรงเป็นความชอบธรรมของเรา",
			subEn: "The believer's confidence rests not in personal goodness but in Christ our righteousness.",
			subKo: "성도의 확신은 자기 의가 아니라 우리의 의가 되신 그리스도께 있습니다.",
			subTh: "ความมั่นใจของผู้เชื่อไม่ได้อยู่ที่ความดีของตนเอง แต่อยู่ที่พระคริสต์ผู้ทรงเป็นความชอบธรรมของเรา"
		},
		{
			no: 6,
			part: 1,
			en: "Believe and Live",
			ko: "믿고 살라",
			th: "จงเชื่อและมีชีวิต",
			subEn: "Saving faith receives God's testimony about Christ as true and rests in him for life.",
			subKo: "구원하는 믿음은 그리스도에 대한 하나님의 증언을 참으로 받아들이고 그분 안에 생명을 얻는 것입니다.",
			subTh: "ความเชื่อที่ช่วยให้รอดคือการรับคำพยานของพระเจ้าเรื่องพระคริสต์ว่าเป็นความจริงและพักพิงในพระองค์เพื่อชีวิต"
		},
		{
			no: 7,
			part: 1,
			en: "Sin put away by Christ",
			ko: "그리스도께서 제거하신 죄",
			th: "บาปที่พระคริสต์ทรงกำจัดออกไป",
			subEn: "Christ has dealt with sin at the cross and calls sinners to rest in his finished work.",
			subKo: "그리스도께서 십자가에서 죄를 담당하셨으므로 죄인은 완성된 구속 사역 안에 안식해야 합니다.",
			subTh: "พระคริสต์ทรงจัดการกับบาปที่กางเขนแล้ว และทรงเรียกคนบาปให้พักพิงในพระราชกิจที่สำเร็จแล้วของพระองค์"
		},
		{
			no: 8,
			part: 1,
			en: "Words of Warning",
			ko: "경고의 말씀",
			th: "ถ้อยคำแห่งการเตือน",
			subEn: "The gracious call of the Gospel must not be delayed, for unbelief still leads to ruin.",
			subKo: "복음의 은혜로운 부르심을 미루지 말아야 합니다. 불신앙은 여전히 멸망으로 이끕니다.",
			subTh: "อย่าผัดผ่อนคำเชิญอันเปี่ยมด้วยพระคุณของข่าวประเสริฐ เพราะความไม่เชื่อยังนำไปสู่ความพินาศ"
		},
		{
			no: 9,
			part: 1,
			en: "Electing Love",
			ko: "택하시는 사랑",
			th: "ความรักที่ทรงเลือก",
			subEn: "God's electing love humbles pride and comforts the weak by tracing salvation to grace alone.",
			subKo: "하나님의 택하시는 사랑은 교만을 낮추고 연약한 자를 위로하며 구원이 은혜에서 시작됨을 보여 줍니다.",
			subTh: "ความรักที่ทรงเลือกของพระเจ้าทำให้ความหยิ่งถ่อมลงและปลอบใจผู้ที่อ่อนแอ เพราะความรอดเริ่มต้นจากพระคุณเท่านั้น"
		},
		{
			no: 10,
			part: 1,
			en: "The Works of the Holy Spirit, as recorded in the Old Testament. Part I",
			ko: "구약에 기록된 성령의 사역 1부",
			th: "พระราชกิจของพระวิญญาณบริสุทธิ์ในพันธสัญญาเดิม ภาค 1",
			subEn: "The Spirit was already giving life, light, holiness, and strength to God's people in the Old Testament.",
			subKo: "성령께서는 구약 시대에도 하나님의 백성에게 생명과 빛과 거룩함과 힘을 주셨습니다.",
			subTh: "พระวิญญาณทรงประทานชีวิต ความสว่าง ความบริสุทธิ์ และกำลังแก่ประชากรของพระเจ้าตั้งแต่สมัยพันธสัญญาเดิม"
		},
		{
			no: 11,
			part: 1,
			en: "Now",
			ko: "지금",
			th: "บัดนี้",
			subEn: "The Gospel presses the urgency of today: now is the time to hear, believe, and return to God.",
			subKo: "복음은 오늘의 긴급성을 말합니다. 지금이 듣고 믿고 하나님께 돌아갈 때입니다.",
			subTh: "ข่าวประเสริฐย้ำความเร่งด่วนของวันนี้ บัดนี้คือเวลาที่ต้องฟัง เชื่อ และกลับมาหาพระเจ้า"
		},
		{
			no: 12,
			part: 1,
			en: "To the Unconverted",
			ko: "회심하지 않은 이들에게",
			th: "ถึงผู้ที่ยังไม่กลับใจ",
			subEn: "Those still outside Christ are urged to examine their condition and flee to the Savior.",
			subKo: "아직 그리스도 밖에 있는 이들은 자신의 상태를 살피고 구주께 피하라는 권면을 듣습니다.",
			subTh: "ผู้ที่ยังอยู่นอกพระคริสต์ได้รับคำวิงวอนให้พิจารณาสภาพของตนและรีบหนีไปหาพระผู้ช่วยให้รอด"
		},
		{
			no: 13,
			part: 1,
			en: "The White Robes",
			ko: "흰 옷",
			th: "เสื้อคลุมสีขาว",
			subEn: "The white robe points to cleansing, acceptance, and righteousness given through Christ.",
			subKo: "흰 옷은 그리스도 안에서 주어지는 씻음과 받아들여짐과 의를 보여 줍니다.",
			subTh: "เสื้อคลุมสีขาวชี้ถึงการชำระ การทรงรับไว้ และความชอบธรรมที่ประทานผ่านพระคริสต์"
		},
		{
			no: 14,
			part: 1,
			en: "The Works of the Holy Spirit, as recorded in the New Testament. Part II",
			ko: "신약에 기록된 성령의 사역 2부",
			th: "พระราชกิจของพระวิญญาณบริสุทธิ์ในพันธสัญญาใหม่ ภาค 2",
			subEn: "The Spirit applies Christ's redemption through new birth, faith, holiness, and witness.",
			subKo: "성령께서는 거듭남과 믿음과 거룩함과 증언을 통해 그리스도의 구속을 적용하십니다.",
			subTh: "พระวิญญาณทรงนำการไถ่ของพระคริสต์มาใช้กับเรา ผ่านการบังเกิดใหม่ ความเชื่อ ความบริสุทธิ์ และการเป็นพยาน"
		},
		{
			no: 15,
			part: 1,
			en: "Luther's Conversion",
			ko: "루터의 회심",
			th: "การกลับใจของลูเธอร์",
			subEn: "Luther found freedom when he saw righteousness received by faith in Christ.",
			subKo: "루터는 그리스도를 믿음으로 받는 의를 보았을 때 참 자유를 얻었습니다.",
			subTh: "ลูเธอร์พบเสรีภาพเมื่อได้เห็นความชอบธรรมที่รับได้โดยความเชื่อในพระคริสต์"
		},
		{
			no: 16,
			part: 1,
			en: "Sin our Enemy, and God our Friend",
			ko: "우리의 원수인 죄와 우리의 친구이신 하나님",
			th: "บาปคือศัตรูของเรา และพระเจ้าคือมิตรของเรา",
			subEn: "Sin deceives and destroys, but God in Christ comes near as the true friend of sinners.",
			subKo: "죄는 속이고 파괴하지만 하나님은 그리스도 안에서 죄인의 참된 친구로 가까이 오십니다.",
			subTh: "บาปหลอกลวงและทำลาย แต่พระเจ้าในพระคริสต์เสด็จมาใกล้ในฐานะมิตรแท้ของคนบาป"
		},
		{
			no: 17,
			part: 1,
			en: "The Lord's Supper",
			ko: "주의 만찬",
			th: "อาหารมื้อขององค์พระผู้เป็นเจ้า",
			subEn: "The table of the Lord leads believers to remember Christ's death and receive him by faith.",
			subKo: "주의 식탁은 성도에게 그리스도의 죽음을 기억하고 믿음으로 그분을 받도록 이끕니다.",
			subTh: "โต๊ะขององค์พระผู้เป็นเจ้าช่วยให้ผู้เชื่อระลึกถึงการสิ้นพระชนม์ของพระคริสต์และรับพระองค์ด้วยความเชื่อ"
		},
		{
			no: 18,
			part: 1,
			en: "The Anchor of the Soul",
			ko: "영혼의 닻",
			th: "สมอแห่งจิตวิญญาณ",
			subEn: "Hope in Christ holds the soul steady amid fear, guilt, temptation, and death.",
			subKo: "그리스도 안의 소망은 두려움과 죄책과 시험과 죽음 속에서도 영혼을 붙듭니다.",
			subTh: "ความหวังในพระคริสต์ยึดจิตวิญญาณไว้มั่นคงท่ามกลางความกลัว ความผิด การทดลอง และความตาย"
		},
		{
			no: 19,
			part: 1,
			en: "Do you go to the Prayer-Meeting?",
			ko: "기도회에 나가십니까?",
			th: "ท่านไปประชุมอธิษฐานหรือไม่?",
			subEn: "Corporate prayer is a gift for weakness, fellowship, and the advance of the Gospel.",
			subKo: "공동 기도는 연약함과 교제와 복음의 전진을 위해 주신 선물입니다.",
			subTh: "การอธิษฐานร่วมกันเป็นของประทานสำหรับความอ่อนแอ สามัคคีธรรม และความก้าวหน้าของข่าวประเสริฐ"
		},
		{
			no: 20,
			part: 2,
			en: "The City of Refuge",
			ko: "피난성",
			th: "เมืองลี้ภัย",
			subEn: "Christ is the true refuge to whom guilty sinners must flee without delay.",
			subKo: "그리스도는 죄책 있는 죄인이 지체하지 않고 피해야 할 참된 피난처입니다.",
			subTh: "พระคริสต์ทรงเป็นที่ลี้ภัยแท้จริงที่คนบาปผู้มีความผิดต้องรีบหนีเข้าไปหาโดยไม่ชักช้า"
		},
		{
			no: 21,
			part: 2,
			en: "Night, Day-Break, and Clear Day",
			ko: "밤, 새벽, 밝은 낮",
			th: "กลางคืน รุ่งอรุณ และกลางวันที่แจ่มใส",
			subEn: "God leads his people from darkness to dawn and finally to the clear day of redemption.",
			subKo: "하나님은 자기 백성을 어둠에서 새벽으로, 마침내 구속의 밝은 낮으로 인도하십니다.",
			subTh: "พระเจ้าทรงนำประชากรของพระองค์จากความมืดสู่รุ่งอรุณ และในที่สุดสู่กลางวันที่แจ่มใสแห่งการไถ่"
		},
		{
			no: 22,
			part: 2,
			en: "Behold he cometh with Clouds",
			ko: "보라 그가 구름을 타고 오시리라",
			th: "ดูเถิด พระองค์เสด็จมาพร้อมเมฆ",
			subEn: "Christ's return comforts believers and soberly warns those who refuse him.",
			subKo: "그리스도의 재림은 성도에게 위로이며 그분을 거부하는 자에게는 엄숙한 경고입니다.",
			subTh: "การเสด็จกลับมาของพระคริสต์เป็นการปลอบใจผู้เชื่อและเป็นคำเตือนจริงจังต่อผู้ที่ปฏิเสธพระองค์"
		},
		{
			no: 23,
			part: 2,
			en: "God's Unspeakable Gift",
			ko: "말로 다할 수 없는 하나님의 선물",
			th: "ของประทานอันเกินบรรยายของพระเจ้า",
			subEn: "Christ is God's immeasurable gift, calling forth wonder, gratitude, and faith.",
			subKo: "그리스도는 측량할 수 없는 하나님의 선물이시며 경탄과 감사와 믿음을 불러일으키십니다.",
			subTh: "พระคริสต์คือของประทานอันหาประมาณมิได้ของพระเจ้า ซึ่งเรียกให้เราประหลาดใจ ขอบพระคุณ และเชื่อวางใจ"
		},
		{
			no: 24,
			part: 2,
			en: "Salvation to the Uttermost",
			ko: "끝까지 이루시는 구원",
			th: "ความรอดอย่างสมบูรณ์ที่สุด",
			subEn: "Christ saves completely all who come to God through him because he ever lives to intercede.",
			subKo: "그리스도는 항상 살아 중보하시기에 그를 통해 하나님께 나아오는 자들을 끝까지 구원하십니다.",
			subTh: "พระคริสต์ทรงช่วยทุกคนที่มาหาพระเจ้าทางพระองค์ให้รอดอย่างสมบูรณ์ เพราะพระองค์ทรงพระชนม์อยู่เพื่อทูลขอแทนเสมอ"
		},
		{
			no: 25,
			part: 2,
			en: "The Love of the Spirit",
			ko: "성령의 사랑",
			th: "ความรักของพระวิญญาณ",
			subEn: "The Spirit's work is holy love drawing sinners to Christ and forming Christ in believers.",
			subKo: "성령의 사역은 죄인을 그리스도께 이끌고 성도 안에 그리스도의 형상을 이루는 거룩한 사랑입니다.",
			subTh: "พระราชกิจของพระวิญญาณคือความรักบริสุทธิ์ที่นำคนบาปมาหาพระคริสต์และก่อรูปพระคริสต์ในผู้เชื่อ"
		},
		{
			no: 26,
			part: 2,
			en: "Who shall dwell with the Devouring Fire!",
			ko: "누가 삼키는 불과 함께 거하리요?",
			th: "ใครจะอาศัยอยู่กับไฟที่เผาผลาญได้?",
			subEn: "God's holiness exposes every false refuge and drives sinners to seek safety in Christ alone.",
			subKo: "하나님의 거룩하심은 모든 거짓 피난처를 드러내고 죄인으로 오직 그리스도 안에서 안전을 찾게 합니다.",
			subTh: "ความบริสุทธิ์ของพระเจ้าเปิดโปงที่ลี้ภัยเทียมทั้งปวง และผลักดันคนบาปให้พบความปลอดภัยในพระคริสต์เท่านั้น"
		},
		{
			no: 27,
			part: 2,
			en: "Righteous Reconciliation",
			ko: "의로운 화목",
			th: "การคืนดีอันชอบธรรม",
			subEn: "God reconciles sinners without compromising righteousness because Christ has satisfied justice.",
			subKo: "그리스도께서 공의를 만족시키셨기에 하나님은 의를 손상시키지 않고 죄인을 화목하게 하십니다.",
			subTh: "พระเจ้าทรงคืนดีกับคนบาปโดยไม่ลดทอนความชอบธรรม เพราะพระคริสต์ทรงทำให้ความยุติธรรมสำเร็จแล้ว"
		},
		{
			no: 28,
			part: 2,
			en: "The Throne of Grace",
			ko: "은혜의 보좌",
			th: "พระที่นั่งแห่งพระคุณ",
			subEn: "Because Christ is our priest, sinners may come boldly to receive mercy and timely grace.",
			subKo: "그리스도께서 우리의 제사장이시므로 죄인은 담대히 나아가 긍휼과 때를 따른 은혜를 받을 수 있습니다.",
			subTh: "เพราะพระคริสต์ทรงเป็นมหาปุโรหิตของเรา คนบาปจึงเข้ามารับพระเมตตาและพระคุณที่ช่วยทันเวลาได้อย่างกล้าหาญ"
		},
		{
			no: 29,
			part: 2,
			en: "The True Heart",
			ko: "참된 마음",
			th: "หัวใจที่แท้จริง",
			subEn: "God calls for a sincere heart that comes to him through Christ without hypocrisy.",
			subKo: "하나님은 외식 없이 그리스도를 통해 자신께 나아오는 진실한 마음을 찾으십니다.",
			subTh: "พระเจ้าทรงเรียกหาหัวใจจริงใจที่เข้ามาหาพระองค์ทางพระคริสต์โดยปราศจากความหน้าซื่อใจคด"
		},
		{
			no: 30,
			part: 2,
			en: "Without God",
			ko: "하나님 없이",
			th: "ปราศจากพระเจ้า",
			subEn: "Life without God may appear busy, but it is empty, exposed, and without true hope.",
			subKo: "하나님 없는 삶은 분주해 보일 수 있으나 비어 있고 드러나 있으며 참된 소망이 없습니다.",
			subTh: "ชีวิตที่ปราศจากพระเจ้าอาจดูยุ่งและเต็มไปด้วยสิ่งต่าง ๆ แต่แท้จริงแล้วว่างเปล่า เปราะบาง และไร้ความหวังแท้"
		},
		{
			no: 31,
			part: 2,
			en: "The False Peace and the True",
			ko: "거짓 평안과 참 평안",
			th: "สันติสุขเทียมและสันติสุขแท้",
			subEn: "False peace quiets the conscience for a moment, but true peace rests on Christ's blood.",
			subKo: "거짓 평안은 양심을 잠시 잠잠하게 하지만 참 평안은 그리스도의 피 위에 세워집니다.",
			subTh: "สันติสุขเทียมทำให้มโนธรรมสงบเพียงชั่วคราว แต่สันติสุขแท้ตั้งอยู่บนพระโลหิตของพระคริสต์"
		},
		{
			no: 32,
			part: 2,
			en: "God's Purpose of Grace",
			ko: "하나님의 은혜의 목적",
			th: "พระประสงค์แห่งพระคุณของพระเจ้า",
			subEn: "God's gracious purpose assures believers that salvation begins, continues, and ends in his mercy.",
			subKo: "하나님의 은혜의 목적은 구원이 그분의 긍휼 안에서 시작되고 계속되며 완성됨을 확신하게 합니다.",
			subTh: "พระประสงค์แห่งพระคุณของพระเจ้าทำให้ผู้เชื่อมั่นใจว่า ความรอดเริ่มต้น ดำเนินต่อ และสำเร็จในพระเมตตาของพระองค์"
		},
		{
			no: 33,
			part: 2,
			en: "The Chosen One",
			ko: "택하신 이",
			th: "ผู้ที่ทรงเลือก",
			subEn: "God's chosen one is secure because the Lord's love and purpose do not fail.",
			subKo: "하나님께서 택하신 이는 주님의 사랑과 뜻이 실패하지 않기에 안전합니다.",
			subTh: "ผู้ที่พระเจ้าทรงเลือกย่อมมั่นคง เพราะความรักและพระประสงค์ขององค์พระผู้เป็นเจ้าไม่ล้มเหลว"
		},
		{
			no: 34,
			part: 2,
			en: "The Last Time",
			ko: "마지막 때",
			th: "วาระสุดท้าย",
			subEn: "The last days call believers to sobriety, watchfulness, and steady hope in Christ.",
			subKo: "마지막 때는 성도에게 깨어 있음과 절제와 그리스도 안의 흔들림 없는 소망을 요구합니다.",
			subTh: "วาระสุดท้ายเรียกผู้เชื่อให้ดำเนินอย่างมีสติ เฝ้าระวัง และยึดมั่นในความหวังในพระคริสต์"
		},
		{
			no: 35,
			part: 2,
			en: "The Sin-Bearer",
			ko: "죄를 짊어지신 분",
			th: "พระผู้ทรงแบกรับบาป",
			subEn: "Christ bore sin in the sinner's place so that the guilty might receive pardon and peace.",
			subKo: "그리스도께서 죄인의 자리에서 죄를 짊어지셨기에 죄인은 용서와 평안을 받을 수 있습니다.",
			subTh: "พระคริสต์ทรงแบกรับบาปแทนคนบาป เพื่อผู้มีความผิดจะได้รับการอภัยและสันติสุข"
		},
		{
			no: 36,
			part: 2,
			en: "The Power of the Gospel",
			ko: "복음의 능력",
			th: "ฤทธิ์เดชของข่าวประเสริฐ",
			subEn: "The Gospel is God's power to save, change, and sustain sinners through Christ.",
			subKo: "복음은 그리스도를 통해 죄인을 구원하고 변화시키며 붙드시는 하나님의 능력입니다.",
			subTh: "ข่าวประเสริฐคือฤทธิ์เดชของพระเจ้าที่ช่วยคนบาปให้รอด เปลี่ยนแปลงเขา และประคับประคองเขาในพระคริสต์"
		},
		{
			no: 37,
			part: 2,
			en: "Tribulation",
			ko: "환난",
			th: "ความทุกข์ยาก",
			subEn: "Tribulation cannot separate believers from Christ; God uses it to refine faith and deepen hope.",
			subKo: "환난은 성도를 그리스도에게서 끊을 수 없으며 하나님은 그것을 통해 믿음을 단련하고 소망을 깊게 하십니다.",
			subTh: "ความทุกข์ยากไม่อาจแยกผู้เชื่อออกจากพระคริสต์ได้ พระเจ้าทรงใช้มันเพื่อหล่อหลอมความเชื่อและทำให้ความหวังลึกขึ้น"
		},
		{
			no: 38,
			part: 2,
			en: "Grace and Glory",
			ko: "은혜와 영광",
			th: "พระคุณและพระสิริ",
			subEn: "The God who gives grace now will bring his people into glory and withhold no true good.",
			subKo: "지금 은혜를 주시는 하나님은 자기 백성을 영광으로 이끄시며 참으로 좋은 것을 아끼지 않으십니다.",
			subTh: "พระเจ้าผู้ประทานพระคุณในเวลานี้ จะทรงนำประชากรของพระองค์เข้าสู่พระสิริและไม่ทรงหวงสิ่งดีแท้ใดจากพวกเขา"
		}
	];
	const bonarTitleFor = (tract) => lang === "th" ? tract.th : lang === "ko" ? tract.ko : tract.en;
	const bonarSubtitleFor = (tract) => "subTh" in tract && "subKo" in tract && "subEn" in tract ? lang === "th" ? tract.subTh : lang === "ko" ? tract.subKo : tract.subEn : "";
	const bonarArticleSlugs = {
		2: "bonar-door-of-salvation-opened",
		3: "bonar-faithful-saying",
		4: "bonar-well-of-living-water",
		5: "bonar-jehovah-our-righteousness",
		6: "bonar-believe-and-live",
		7: "bonar-sin-put-away-by-christ",
		8: "bonar-words-of-warning",
		9: "bonar-electing-love",
		10: "bonar-holy-spirit-old-testament",
		11: "bonar-now",
		12: "bonar-to-the-unconverted",
		13: "bonar-white-robes",
		14: "bonar-holy-spirit-new-testament",
		15: "bonar-luthers-conversion",
		16: "bonar-sin-our-enemy-god-our-friend",
		17: "bonar-lords-supper",
		18: "bonar-anchor-of-the-soul",
		19: "bonar-prayer-meeting",
		20: "bonar-city-of-refuge",
		21: "bonar-night-daybreak-clear-day",
		22: "bonar-behold-he-cometh-with-clouds",
		23: "bonar-gods-unspeakable-gift",
		24: "bonar-salvation-to-the-uttermost",
		25: "bonar-love-of-the-spirit",
		26: "bonar-devouring-fire",
		27: "bonar-righteous-reconciliation",
		28: "bonar-throne-of-grace",
		29: "bonar-true-heart",
		30: "bonar-without-god",
		31: "bonar-false-peace-and-true",
		32: "bonar-gods-purpose-of-grace",
		33: "bonar-chosen-one",
		34: "bonar-last-time",
		35: "bonar-sin-bearer",
		36: "bonar-power-of-the-gospel",
		37: "bonar-tribulation",
		38: "bonar-grace-and-glory"
	};
	const bonarArticleSlugSet = new Set(Object.values(bonarArticleSlugs));
	const visibleResources = type === "article" ? resources.filter((resource) => !bonarArticleSlugSet.has(resource.slug)) : resources;
	const missionaryBook = lang === "th" ? {
		badge: "หนังสือภาษาไทย · ดาวน์โหลดฟรี",
		title: "มิชชันนารีผู้มองไปยังพระสิริของพระเจ้า",
		description: "หนังสือโดย Yongjin Choi สำหรับผู้ที่กำลังใคร่ครวญเรื่องพันธกิจภายในกรอบความเชื่อปฏิรูป เพื่อหนุนใจมิชชันนารีให้มองไปยังพระสิริของพระเจ้าและรับใช้เพื่อถวายพระเกียรติแด่พระองค์",
		author: "ผู้เขียน: Yongjin Choi",
		downloads: [{
			label: "PDF ภาษาไทย",
			href: "/downloads/missionary-glory-th.pdf"
		}, {
			label: "EPUB ภาษาไทย",
			href: "/downloads/missionary-glory-th.epub"
		}]
	} : lang === "en" ? {
		badge: "English book · Free download",
		title: "A Missionary Who Beholds the Glory of God",
		description: "A pastoral reflection by Yongjin Choi for those considering mission within the Reformed faith, calling missionaries to behold God's glory and serve for his praise. English edition translated with AI assistance.",
		author: "Author: Yongjin Choi",
		downloads: [{
			label: "English PDF",
			href: "/downloads/missionary-glory-en.pdf"
		}, {
			label: "English EPUB",
			href: "/downloads/missionary-glory-en.epub"
		}]
	} : {
		badge: "한국어 도서 · 무료 다운로드",
		title: "하나님의 영광을 바라보는 선교사",
		description: "개혁신앙 안에서 선교를 고민하는 이들을 위한 최용진 선교사의 목회적 성찰입니다. 선교사가 하나님의 영광을 바라보며 하나님의 영광을 위해 섬기도록 격려합니다.",
		author: "저자: 최용진 선교사",
		purchaseLabel: "종이책 구매",
		purchaseHref: "https://bookk.co.kr/bookStore/6a6826682fbe7ebc622b4848",
		downloads: [{
			label: "한국어 PDF",
			href: "/downloads/missionary-glory-ko.pdf"
		}, {
			label: "한국어 EPUB",
			href: "/downloads/missionary-glory-ko.epub"
		}]
	};
	const gospelPointingBook = lang === "th" ? {
		badge: "หนังสือภาษาไทย · ดาวน์โหลดฟรี",
		title: "ข่าวประเสริฐที่ชี้ไปยังพระบุคคลของพระคริสต์",
		description: "หนังสือเล่มสั้นที่ช่วยให้เห็นว่าข่าวประเสริฐไม่ได้เป็นเพียงแนวคิดหรือหลักคำสอนทั่วไป แต่ชี้เราไปยังพระเยซูคริสต์ พระผู้ช่วยให้รอด ผู้ทรงเป็นศูนย์กลางของความรอดและความหวังของคริสเตียน",
		author: "ผู้เขียน: Andrew Bonar · แปล: Yongjin Choi",
		cover: "/images/gospel-pointing-to-christ-th-cover-card.jpg?v=20260812",
		downloads: [{
			label: "PDF ภาษาไทย",
			href: "/downloads/gospel-pointing-to-christ-th.pdf?v=20260812",
			external: false
		}],
		notice: ""
	} : lang === "ko" ? {
		badge: "한국어 도서 · 무료 다운로드",
		title: "그리스도의 인격을 가리키는 복음",
		description: "복음이 단순한 개념이나 일반적인 교훈이 아니라, 구원과 소망의 중심이신 예수 그리스도 그분 자신을 가리킨다는 사실을 분명하게 설명하는 짧은 책입니다.",
		author: "저자: Andrew Bonar · 최용진역",
		cover: "/images/gospel-pointing-to-christ-ko-cover-card.jpg?v=20260812",
		downloads: [{
			label: "한국어 PDF",
			href: "/downloads/gospel-pointing-to-christ-ko.pdf?v=20260812",
			external: false
		}],
		notice: ""
	} : {
		badge: "Thai edition · Free download",
		title: "The Gospel Pointing to the Person of Christ",
		description: "A short book that helps readers see that the Gospel is not merely an idea or a general doctrine, but points us to Jesus Christ himself, the Savior and the center of Christian salvation and hope.",
		author: "Author: Andrew Bonar",
		cover: "/images/gospel-pointing-to-christ-th-cover-card.jpg?v=20260812",
		downloads: [{
			label: "Thai PDF",
			href: "/downloads/gospel-pointing-to-christ-th.pdf?v=20260812",
			external: false
		}],
		sourceLink: {
			label: "English at Monergism",
			href: "https://www.monergism.com/gospel-pointing-person-christ-ebook"
		},
		notice: ""
	};
	const happinessBook = lang === "th" ? {
		badge: "หนังสือภาษาไทย · ดาวน์โหลดฟรี",
		title: "ความสุข",
		description: "หนังสือเล่มสั้นของ J. C. Ryle ที่ชวนผู้อ่านพิจารณาว่าความสุขแท้ไม่ได้อยู่ที่ทรัพย์สิน ความสำเร็จ หรือความพึงพอใจชั่วคราว แต่อยู่ในการรู้จักพระเจ้า การกลับใจ และการไว้วางใจในพระเยซูคริสต์",
		author: "ผู้เขียน: J. C. Ryle · แปล: Yongjin Choi",
		cover: "/images/happiness-jc-ryle-th-cover-card.jpg?v=20260812",
		downloads: [{
			label: "PDF ภาษาไทย",
			href: "/downloads/happiness-jc-ryle-th.pdf?v=20260812",
			external: false
		}],
		notice: ""
	} : lang === "ko" ? {
		badge: "한국어 도서 · 무료 다운로드",
		title: "행복",
		description: "J. C. 라일의 짧은 글로, 참된 행복이 재물이나 성공이나 잠깐의 만족에 있지 않고 하나님을 알고 회개하며 예수 그리스도를 믿는 데 있음을 분명하게 전합니다.",
		author: "저자: J. C. 라일 · 최용진역",
		cover: "/images/happiness-jc-ryle-ko-cover-card.jpg?v=20260812",
		downloads: [{
			label: "한국어 PDF",
			href: "/downloads/happiness-jc-ryle-ko.pdf?v=20260812",
			external: false
		}],
		notice: ""
	} : {
		badge: "Thai edition · Free download",
		title: "Happiness",
		description: "A short work by J. C. Ryle that points readers away from passing satisfaction and toward true happiness in knowing God, repentance, and faith in Jesus Christ.",
		author: "Author: J. C. Ryle",
		cover: "/images/happiness-jc-ryle-th-cover-card.jpg?v=20260812",
		downloads: [{
			label: "Thai PDF",
			href: "/downloads/happiness-jc-ryle-th.pdf?v=20260812",
			external: false
		}],
		sourceLink: {
			label: "English at Monergism",
			href: "https://www.monergism.com/happiness-ebook"
		},
		notice: ""
	};
	const godsWayOfPeaceBook = lang === "th" ? {
		badge: "หนังสือภาษาไทย · ดาวน์โหลดฟรี",
		title: "ทางของพระเจ้าสู่สันติสุข",
		description: "หนังสือคลาสสิกของ Horatius Bonar ที่ชี้คนที่หนักใจ กระวนกระวาย หรือไม่มั่นใจเรื่องความรอด ให้มองไปยังพระคริสต์ พระโลหิต และข่าวประเสริฐซึ่งเป็นรากฐานแท้ของสันติสุขกับพระเจ้า",
		author: "ผู้เขียน: Horatius Bonar · แปล: Yongjin Choi",
		cover: "/images/gods-way-of-peace-th-cover-card.jpg?v=20260812",
		downloads: [{
			label: "PDF ภาษาไทย",
			href: "/downloads/gods-way-of-peace-th.pdf?v=20260812",
			external: false
		}],
		notice: ""
	} : lang === "ko" ? {
		badge: "한국어 도서 · 무료 다운로드",
		title: "평안에 이르는 하나님의 길",
		description: "Horatius Bonar의 복음적 고전으로, 죄와 양심의 불안, 구원의 확신 문제로 고민하는 사람들에게 그리스도 안에서 하나님과 화목하는 길을 분명하게 보여 줍니다.",
		author: "저자: Horatius Bonar · 최용진역",
		cover: "/images/gods-way-of-peace-ko-cover-card.jpg?v=20260812",
		downloads: [{
			label: "한국어 PDF",
			href: "/downloads/gods-way-of-peace-ko.pdf?v=20260812",
			external: false
		}],
		notice: ""
	} : {
		badge: "Thai edition · Free download",
		title: "God's Way of Peace",
		description: "A classic Gospel work by Horatius Bonar that directs anxious souls away from self-made peace and toward Christ, his blood, and the good news of reconciliation with God.",
		author: "Author: Horatius Bonar",
		cover: "/images/gods-way-of-peace-th-cover-card.jpg?v=20260812",
		downloads: [{
			label: "Thai PDF",
			href: "/downloads/gods-way-of-peace-th.pdf?v=20260812",
			external: false
		}],
		sourceLink: {
			label: "English at Monergism",
			href: "https://www.monergism.com/gods-way-peace-ebook"
		},
		notice: ""
	};
	const whatIsTheGospelBook = lang === "th" ? {
		badge: "ชุดหนังสือเล่มเล็กภาษาไทย · ดาวน์โหลดฟรี",
		title: "ข่าวประเสริฐคืออะไร",
		description: "นี่คือชุดหนังสือเล่มเล็ก “God-Pleasing” รวม 7 เล่มสำหรับเรียนรู้พื้นฐานของข่าวประเสริฐและชีวิตคริสเตียนอย่างเป็นขั้นตอน เหมาะสำหรับผู้เชื่อใหม่ การสอนพื้นฐานความเชื่อ และการแนะนำข่าวประเสริฐแก่ผู้อื่น",
		author: "ผู้เขียน: Yongjin Choi",
		cover: "/images/what-is-the-gospel-booklet-series-th-cover.png",
		downloads: [{
			label: "PDF ภาษาไทย",
			href: "/downloads/what-is-the-gospel-booklet-series-th.pdf",
			external: false
		}],
		notice: ""
	} : lang === "ko" ? {
		badge: "한국어 소책자 시리즈 · 무료 다운로드",
		title: "복음이란 무엇인가",
		description: "\"갓플리징\" 소책자 시리즈입니다. 복음과 기독교 신앙생활의 기초를 일곱 가지 주제로 정리했습니다. 새신자 교육, 전도, 기초 신앙 안내에 활용하기 좋습니다.",
		author: "저자: 최용진",
		cover: "/images/what-is-the-gospel-booklet-series-ko-cover.png",
		downloads: [{
			label: "한국어 PDF",
			href: "/downloads/what-is-the-gospel-booklet-series-ko.pdf",
			external: false
		}],
		notice: ""
	} : {
		badge: "Thai and Korean booklet series · Free download",
		title: "What Is the Gospel?",
		description: "This is the “God-Pleasing” booklet series. It introduces the Gospel and the basics of Christian faith and life in seven short booklets, useful for new believers, basic discipleship, and sharing the Gospel with others.",
		author: "Author: Yongjin Choi",
		cover: "/images/what-is-the-gospel-booklet-series-th-cover.png",
		downloads: [{
			label: "Thai PDF",
			href: "/downloads/what-is-the-gospel-booklet-series-th.pdf",
			external: false
		}],
		notice: ""
	};
	const doctrinesOfGracePdfCard = lang === "th" ? {
		badge: "หนังสือภาษาไทย · ดาวน์โหลดฟรี",
		title: "หลักคำสอนแห่งพระคุณ",
		description: "คู่มือศึกษาพระคัมภีร์เรื่อง “หลักคำสอนแห่งพระคุณ” ที่ช่วยให้เข้าใจว่าความรอดตั้งแต่ต้นจนจบเป็นพระคุณของพระเจ้า เหมาะสำหรับการเรียนส่วนตัวและกลุ่มศึกษาพระคัมภีร์",
		cover: "/images/doctrines-of-grace-th-cover.png?v=20260815a",
		downloads: [{
			action: "PDF ภาษาไทย",
			href: "/downloads/doctrines-of-grace-th.pdf"
		}]
	} : lang === "ko" ? {
		badge: "한국어 도서 · 무료 다운로드",
		title: "은혜의 교리",
		description: "칼빈주의 5대 교리로 알려진 “은혜의 교리”를 성경공부 교재 형식으로 정리한 자료입니다. 구원이 처음부터 끝까지 하나님의 은혜임을 차분히 배우도록 돕습니다.",
		cover: "/images/doctrines-of-grace-ko-cover.png?v=20260815a",
		downloads: [{
			action: "한국어 PDF",
			href: "/downloads/doctrines-of-grace-ko.pdf"
		}]
	} : {
		badge: "Thai edition · Free download",
		title: "Doctrines of Grace",
		description: "A Bible-study guide to the “Doctrines of Grace,” commonly known as the five points of Calvinism. It helps readers see that salvation is God's grace from beginning to end.",
		cover: "/images/doctrines-of-grace-th-cover.png?v=20260815a",
		downloads: [{
			action: "Thai PDF",
			href: "/downloads/doctrines-of-grace-th.pdf"
		}]
	};
	const bibleOverviewBook = lang === "th" ? {
		badge: "หนังสือภาษาไทย · ดาวน์โหลดฟรี",
		title: "ภาพรวมพระคัมภีร์พันธสัญญาเดิมและพันธสัญญาใหม่",
		description: "หนังสือเล่มนี้ช่วยให้เห็นภาพรวมและสาระสำคัญของพระคัมภีร์ทั้ง 66 เล่ม โดยจัดลำดับโครงสร้างใหญ่ของพระคัมภีร์ก่อน แล้วจึงพาผู้อ่านเข้าใจเนื้อหาหลักและความเชื่อมโยงของแต่ละเล่มอย่างเป็นระบบ",
		author: "ผู้เขียน: Yongjin Choi",
		cover: "/images/bible-overview-th-cover.jpg?v=20260815a",
		downloads: [{
			label: "PDF ภาษาไทย",
			href: "/downloads/bible-overview-th.pdf",
			external: false
		}],
		notice: ""
	} : lang === "ko" ? {
		badge: "한국어 도서 · 무료 다운로드",
		title: "신구약 성경 개론",
		description: "성경 66권의 흐름과 핵심을 한 권에 정리한 성경 개관서입니다. 구약과 신약의 큰 구조를 먼저 살피고, 각 책의 중심 내용과 연결을 따라가며 성경 전체를 이해하도록 돕습니다.",
		author: "저자: 최용진",
		cover: "/images/bible-overview-ko-cover.jpg?v=20260815a",
		downloads: [{
			label: "한국어 PDF",
			href: "/downloads/bible-overview-ko.pdf",
			external: false
		}],
		notice: ""
	} : {
		badge: "Thai edition · Free download",
		title: "Overview of the Old and New Testaments",
		description: "A book that presents the main flow and key themes of all 66 books of the Bible. It first maps the larger structure of the Old and New Testaments, then helps readers follow the core message of each book in context.",
		author: "Author: Yongjin Choi",
		cover: "/images/bible-overview-th-cover.jpg?v=20260815a",
		downloads: [{
			label: "Thai PDF",
			href: "/downloads/bible-overview-th.pdf",
			external: false
		}],
		notice: ""
	};
	const faithBasicsBook = lang === "th" ? {
		badge: "หนังสือเรียน · ไทย + เกาหลี",
		title: "พื้นฐานความเชื่อคริสเตียน | 36 บทเรียน",
		description: "หนังสือเรียน 36 บทสำหรับวางรากฐานความเชื่อคริสเตียนอย่างเป็นขั้นตอน เหมาะสำหรับผู้เชื่อใหม่ ชั้นเรียนสมาชิก การสอนพื้นฐานความเชื่อ และการเตรียมผู้รับใช้ โดยมีฉบับนักเรียนและฉบับครูผู้สอนพร้อมคำแปลตรงภาษาเกาหลี",
		author: "ผู้เขียน: Yongjin Choi",
		cover: "/images/faith-basics-36-cover.png",
		downloads: [{
			label: "ฉบับนักเรียน",
			href: "/downloads/faith-basics-student-th-ko.pdf",
			external: false
		}, {
			label: "ฉบับครู",
			href: "/downloads/faith-basics-teacher-th-ko.pdf",
			external: false
		}],
		notice: ""
	} : lang === "ko" ? {
		badge: "태국어+한국어 직역 교재 · 무료 다운로드",
		title: "기독교 신앙의 기초 | 36강좌",
		description: "기독교 신앙의 기초를 36과로 차근차근 배우도록 만든 성경공부 교재입니다. 초신자 교육, 교회 등록반, 기초 교리 교육, 양육 사역에 활용할 수 있으며 학생용과 교사용 자료를 함께 제공합니다.",
		author: "저자: 최용진",
		cover: "/images/faith-basics-36-cover.png",
		downloads: [{
			label: "학생용 PDF",
			href: "/downloads/faith-basics-student-th-ko.pdf",
			external: false
		}, {
			label: "교사용 PDF",
			href: "/downloads/faith-basics-teacher-th-ko.pdf",
			external: false
		}],
		notice: ""
	} : {
		badge: "Thai + Korean study textbook · Free download",
		title: "Foundations of the Christian Faith | 36 Lessons",
		description: "A 36-lesson study textbook designed to help readers learn the basics of the Christian faith step by step. It can be used for new believers, church membership classes, foundational doctrine study, and discipleship training. Student and teacher editions are provided.",
		author: "Author: Yongjin Choi",
		cover: "/images/faith-basics-36-cover.png",
		downloads: [{
			label: "Student's PDF in Thai",
			href: "/downloads/faith-basics-student-th-ko.pdf",
			external: false
		}, {
			label: "Teacher's PDF in Thai",
			href: "/downloads/faith-basics-teacher-th-ko.pdf",
			external: false
		}],
		notice: ""
	};
	const bible66Book = lang === "th" ? {
		badge: "หนังสืออธิบายพระคัมภีร์ภาษาไทย · แจกฟรี",
		title: "คำอธิบายพระคัมภีร์ 66 เล่ม",
		description: "คำอธิบายพระคัมภีร์ครบทั้ง 66 เล่มฉบับภาษาไทย จัดทำสำหรับอ่าน ค้นคว้า และศึกษาพระคัมภีร์ โดยเรียบเรียงเนื้อหาจากเว็บไซต์ Bible 66 Commentary",
		author: "เรียบเรียงฉบับภาษาไทย: Yongjin Choi",
		notice: "",
		download: "PDF 1,705 หน้า",
		href: "/downloads/bible-66-commentary-th.pdf",
		online: "ค้นหาและอ่านบนเว็บไซต์",
		originalRequest: ""
	} : lang === "ko" ? {
		badge: "태국어 성경 해설 · 무료 다운로드",
		title: "성경 66권 해설 태국어판",
		description: "성경 66권 전체의 해설 내용을 태국어로 번역하고 정리한 책입니다. 태국어로 성경을 읽고 연구하거나 가르칠 때 활용할 수 있습니다.",
		author: "태국어판 편집: 최용진",
		notice: "",
		download: "태국어 PDF (1,705쪽)",
		href: "/downloads/bible-66-commentary-th.pdf",
		online: "온라인 해설 사이트 보기",
		originalRequest: ""
	} : {
		badge: "Thai Bible commentary · Free download",
		title: "Bible 66 Commentary — Thai Edition",
		description: "A full Thai edition of Bible commentary covering all 66 books of the Bible. It is prepared for reading, study, teaching, and Bible research, based on the Bible 66 Commentary website.",
		author: "Thai edition edited by Yongjin Choi",
		notice: "",
		download: "Thai PDF (1,705 pages)",
		href: "/downloads/bible-66-commentary-th.pdf",
		online: "Read and search online",
		originalRequest: ""
	};
	const revelationCommentaryBook = lang === "th" ? {
		badge: "หนังสืออธิบายพระคัมภีร์ภาษาไทย · แจกฟรี",
		title: "คำอธิบายหนังสือวิวรณ์",
		description: "หนังสือเล่มนี้ช่วยให้ผู้อ่านอ่านพระธรรมวิวรณ์ด้วยความหวัง ไม่ใช่ด้วยความกลัวหรือการคาดเดาอนาคตอย่างเลื่อนลอย โดยอธิบายบริบทของคริสตจักรทั้งเจ็ด พื้นหลังพันธสัญญาเดิม ภาพสัญลักษณ์สำคัญ แนวทางตีความหลัก และสารหลักที่พระคริสต์ทรงมอบแก่คริสตจักรทุกยุค",
		author: "ผู้เขียน: Yongjin Choi",
		cover: "/images/revelation-commentary-th-cover-card.jpg?v=20260814b",
		downloads: [{
			label: "PDF ภาษาไทย",
			href: "/downloads/revelation-commentary-th.pdf",
			external: false
		}],
		notice: ""
	} : lang === "ko" ? {
		badge: "요한계시록 해설 · 무료 다운로드",
		title: "요한계시록 해설",
		description: "요한계시록을 두려움의 책이나 미래 암호풀이가 아니라, 교회를 위한 소망의 책으로 읽도록 돕는 해설서입니다. 일곱 교회가 처했던 상황과 모든 시대 교회에 주시는 말씀을 함께 살피며, 구약 배경과 상징, 주요 해석 방향, 본문의 큰 구조를 따라 차분하게 이해하도록 안내합니다.",
		author: "저자: 최용진",
		cover: "/images/revelation-commentary-ko-cover-card.jpg?v=20260814b",
		downloads: [{
			label: "한국어 PDF",
			href: "/downloads/revelation-commentary-ko.pdf",
			external: false
		}],
		notice: ""
	} : {
		badge: "Thai Bible commentary · Free download",
		title: "Revelation Commentary — Thai Edition",
		description: "A Thai commentary that helps readers approach Revelation with hope rather than fear or speculative code-breaking. It introduces the setting of the seven churches, the Old Testament background, major symbols, key interpretive approaches, and the book's central message for the church in every age.",
		author: "Author: Yongjin Choi",
		cover: "/images/revelation-commentary-th-cover-card.jpg?v=20260814b",
		downloads: [{
			label: "Thai PDF",
			href: "/downloads/revelation-commentary-th.pdf",
			external: false
		}],
		notice: ""
	};
	const uploadedPdf = {
		th: {
			badge: "คำสอนคริสเตียน · PDF",
			title: "คำสอนคริสเตียนแบบถามตอบฉบับนครใหม่",
			description: "คำสอนคริสเตียนแบบถามตอบสำหรับคนยุคใหม่ จัดทำโดย Redeemer Presbyterian Church ในนิวยอร์ก ซึ่งก่อตั้งโดยศิษยาภิบาล Tim Keller",
			copyright: "เอกสารนี้มีลิขสิทธิ์ ห้ามนำไปใช้เพื่อการค้า",
			downloads: [{
				action: "ฉบับภาษาไทย",
				href: "/downloads/new-city-catechism-th.pdf"
			}]
		},
		ko: {
			badge: "교리문답 · PDF",
			title: "뉴시티 교리문답",
			description: "팀 켈러가 세운 뉴욕 리디머 장로교회에서 만든 현대인을 위한 기독교 교리문답입니다.",
			copyright: "저작권이 있는 자료로 상업적 용도로 사용할 수 없습니다.",
			downloads: [{
				action: "태국어판",
				href: "/downloads/new-city-catechism-th.pdf"
			}, {
				action: "한국어판",
				href: "/downloads/new-city-catechism-ko.pdf"
			}]
		},
		en: {
			badge: "Catechism · PDF",
			title: "New City Catechism",
			description: "A catechism for modern people created by Redeemer Presbyterian Church in New York City, founded by Timothy Keller.",
			copyright: "This material is copyrighted and may not be used for commercial purposes.",
			downloads: [{
				action: "Thai edition",
				href: "/downloads/new-city-catechism-th.pdf"
			}, {
				action: "English edition",
				href: "/downloads/new-city-catechism-en.pdf"
			}]
		}
	}[lang];
	const scriptureMemoryPdf = {
		th: {
			badge: "เอกสารมีลิขสิทธิ์ · PDF ภาษาไทย",
			title: "Best 365 Time — ท่องจำข้อพระคัมภีร์ 365 วัน",
			description: "หนังสือเล่มเล็กภาษาไทยสำหรับช่วยท่องจำและใคร่ครวญพระวจนะตลอดปี เหมาะสำหรับการใช้ส่วนตัว ครอบครัว กลุ่มเล็ก และการหนุนใจในคริสตจักร",
			copyright: "เอกสารนี้มีลิขสิทธิ์โดยเจ้าของผลงาน อนุญาตให้อ่านและดาวน์โหลดได้จากเว็บไซต์นี้ แต่ไม่อนุญาตให้พิมพ์หรือจำหน่ายต่อ หากต้องการสอบถามเรื่องฉบับพิมพ์หรือการสั่งซื้อ กรุณาติดต่อ LINE ID: cgntv-thai",
			download: "PDF ภาษาไทย",
			contact: "สอบถามทาง LINE"
		},
		ko: {
			badge: "저작권 허락 자료 · 태국어 PDF",
			title: "Best 365 Time — 성구암송 365 태국어판",
			description: "태국어 성구 암송과 말씀 묵상을 돕는 소책자입니다. 개인 경건, 가정, 소그룹, 교회 사역 현장에서 말씀을 가까이하도록 권하기 좋은 자료입니다.",
			copyright: "저작권은 저작권자에게 있습니다. 허락을 받아 이 사이트에서 열람 및 다운로드할 수 있으나, 인쇄 및 재판매는 허용되지 않습니다. 인쇄/구입 문의는 LINE ID cgntv-thai 로 연락해 주세요.",
			download: "태국어 PDF",
			contact: "LINE으로 문의"
		},
		en: {
			badge: "Copyrighted resource · Thai PDF",
			title: "Best 365 Time — Scripture Memory 365",
			description: "A Thai booklet for Scripture memory and meditation throughout the year. It is useful for personal devotion, families, small groups, and church ministry settings.",
			copyright: "Copyright belongs to the rights holder. With permission, this site provides online access and download, but printing and resale are not permitted. For print copies or purchase inquiries, please contact LINE ID cgntv-thai.",
			download: "Thai PDF",
			contact: "Contact on LINE"
		}
	}[lang];
	const cambridgeDeclaration = {
		th: {
			badge: "คำประกาศความเชื่อ · PDF",
			title: "แถลงการณ์เคมบริดจ์",
			description: "คำประกาศปี 1996 ที่เรียกคริสตจักรให้กลับมายืนอยู่บนความจริงหลักของการปฏิรูปศาสนา คือ พระคัมภีร์เท่านั้น พระคริสต์เท่านั้น พระคุณเท่านั้น ความเชื่อเท่านั้น และพระเกียรติสิริแด่พระเจ้าเท่านั้น",
			attribution: "ต้นฉบับ: Alliance of Confessing Evangelicals · อนุญาตให้นำไปทำซ้ำได้เมื่อระบุแหล่งที่มา",
			preview: "ดูตัวอย่างทั้งเล่ม",
			download: "ฉบับภาษาไทย",
			source: "อ่านต้นฉบับภาษาอังกฤษ",
			pdf: "/downloads/cambridge-declaration-th.pdf"
		},
		ko: {
			badge: "신앙 선언문 · PDF",
			title: "캠브리지 선언",
			description: "1996년에 발표된 선언문으로, 종교개혁의 핵심 진리인 오직 성경, 오직 그리스도, 오직 은혜, 오직 믿음, 오직 하나님께 영광을 따라 오늘의 교회가 회개와 개혁으로 돌아가도록 부릅니다.",
			attribution: "원문 출처: Alliance of Confessing Evangelicals · 출처 표기 시 재생산 허락",
			preview: "전체내용 미리보기",
			download: "한국어 번역본",
			source: "영어 원문 보기",
			pdf: "/downloads/cambridge-declaration-ko.pdf"
		},
		en: {
			badge: "Confessional declaration · PDF",
			title: "The Cambridge Declaration",
			description: "A 1996 evangelical declaration calling the church back to the central truths of the Reformation: Scripture alone, Christ alone, grace alone, faith alone, and glory to God alone.",
			attribution: "Source: Alliance of Confessing Evangelicals · Reproduction permitted with source credit",
			preview: "Preview PDF",
			download: "English PDF",
			source: "Read the original source",
			pdf: "/downloads/cambridge-declaration-en.pdf"
		}
	}[lang];
	const chicagoStatement = {
		th: {
			badge: "เอกสารหลักคำสอน · PDF",
			title: "คำแถลงชิคาโกว่าด้วยความไร้ข้อผิดพลาดของพระคัมภีร์",
			description: "คำแถลงปี 1978 ที่อธิบายอย่างเป็นระบบถึงการดลใจ สิทธิอำนาจ ความจริง และความไร้ข้อผิดพลาดของพระคัมภีร์ โดยยืนยันว่าพระคัมภีร์ซึ่งพระเจ้าประทานนั้นเป็นพระวจนะที่เชื่อถือได้และเป็นจริงในต้นฉบับ",
			attribution: "The Chicago Statement on Biblical Inerrancy · 1978",
			preview: "ดูตัวอย่างและดาวน์โหลด",
			pdf: "/downloads/chicago-statement-biblical-inerrancy-th.pdf",
			cover: "/images/chicago-statement-cover-th.jpg"
		},
		ko: {
			badge: "교리 문서 · PDF",
			title: "성경 무오에 대한 시카고 선언",
			description: "1978년 복음주의 신학자와 목회자들이 성경의 영감·권위·진실성과 무오성을 분명히 밝힌 신앙 선언문입니다. 성경이 하나님이 주신 말씀으로서 원문에서 참되고 신뢰할 수 있음을 조항별로 설명합니다.",
			attribution: "The Chicago Statement on Biblical Inerrancy · 1978",
			preview: "미리보기 및 다운로드",
			pdf: "/downloads/chicago-statement-biblical-inerrancy-ko.pdf",
			cover: "/images/chicago-statement-cover-ko.jpg"
		},
		en: {
			badge: "Doctrine document · PDF",
			title: "The Chicago Statement on Biblical Inerrancy · 1978",
			description: "A 1978 evangelical statement explaining the inspiration, authority, truthfulness, and inerrancy of Scripture through a summary, articles of affirmation and denial, and exposition.",
			attribution: "Chicago Summit · 1978",
			preview: "Preview and download",
			pdf: "/downloads/chicago-statement-biblical-inerrancy-en.pdf",
			cover: "/images/chicago-statement-cover-en.jpg"
		}
	}[lang];
	const quest = {
		th: {
			badge: "ภาษาไทย · แผ่นพับประกาศ · สำหรับพิมพ์",
			title: "แสวงหาความชื่นชมยินดี (Quest for Joy)",
			author: "โดย John Piper",
			description: "แผ่นพับประกาศข่าวประเสริฐภาษาไทยที่นำเสนอความชื่นชมยินดีแท้ในพระเจ้าและข่าวประเสริฐของพระเยซูคริสต์เป็น 6 ขั้นตอน เหมาะสำหรับพิมพ์สองหน้า พับ และแจกจ่าย",
			source: "แหล่งที่มา: Desiring God",
			download: "PDF สำหรับพิมพ์",
			preview: "แตะภาพเพื่อดูขนาดใหญ่",
			page: "หน้า",
			previous: "หน้าก่อน",
			next: "หน้าถัดไป",
			close: "ปิดตัวอย่าง"
		},
		ko: {
			badge: "태국어 · 전도지 · 인쇄용",
			title: "기쁨을 찾는 여정 (Quest for Joy)",
			author: "존 파이퍼",
			description: "하나님 안에서 누리는 참된 기쁨과 예수 그리스도의 복음을 여섯 단계로 소개하는 태국어 전도지입니다. A4 양면 인쇄 후 접어서 배포할 수 있습니다.",
			source: "출처: Desiring God",
			download: "인쇄용 PDF",
			preview: "이미지를 누르면 크게 볼 수 있습니다",
			page: "페이지",
			previous: "이전 장",
			next: "다음 장",
			close: "미리보기 닫기"
		},
		en: {
			badge: "Thai · Gospel tract · Print edition",
			title: "Quest for Joy",
			author: "John Piper",
			description: "A Thai Gospel tract presenting true joy in God and the good news of Jesus Christ in six steps. It is designed for double-sided A4 printing, folding, and distribution.",
			source: "Source: Desiring God",
			download: "Print-ready PDF",
			preview: "Select an image to enlarge it",
			page: "Page",
			previous: "Previous page",
			next: "Next page",
			close: "Close preview"
		}
	}[lang];
	const graceBooks = {
		th: [
			{
				title: "ชีวิตที่มีไม้กางเขนเป็นศูนย์กลาง",
				author: "ซี. เจ. มาเฮนนีย์ (C. J. Mahaney)",
				description: "หนังสือภาษาไทยที่ช่วยให้ข่าวประเสริฐและไม้กางเขนเป็นศูนย์กลางของชีวิตคริสเตียนทุกวัน",
				cover: "/images/cross-centered-life-th-cover-card.jpg"
			},
			{
				title: "พระกิตติคุณของพระเยซูคริสต์",
				author: "พอล วอชเชอร์ (Paul Washer)",
				description: "หนังสือภาษาไทยที่อธิบายข่าวประเสริฐผ่านความบริสุทธิ์ของพระเจ้า ความบาปของมนุษย์ และการไถ่ในพระเยซูคริสต์",
				cover: "/images/gospel-of-jesus-christ-th-cover-card.jpg"
			},
			{
				title: "ห้าประเด็น",
				author: "จอห์น ไพเพอร์ (John Piper)",
				description: "หนังสือภาษาไทยที่นำเสนอหลักคำสอนแห่งพระคุณห้าประการและชี้ให้เห็นพระสิริแห่งพระคุณของพระเจ้า",
				cover: "/images/five-points-th-cover-card.jpg"
			},
			{
				title: "คริสต์ศาสนาแบบเวรกรรม",
				author: "อี. ดี. เบิร์นส์ (E. D. Burns)",
				description: "ชี้ให้เห็นว่าสันติสุขที่มั่นคงไม่ได้มาจากการพยายามทำดีเพื่อควบคุมชีวิต แต่มาจากการพักพิงในพระคริสต์และความรักของพระเจ้า",
				cover: "/images/karmic-christianity-th-cover-card.jpg"
			}
		],
		ko: [
			{
				title: "십자가 중심의 삶 (태국어판)",
				author: "C. J. 메허니",
				description: "복음과 십자가를 매일의 그리스도인 삶의 중심에 두도록 돕는 태국어 도서입니다.",
				cover: "/images/cross-centered-life-th-cover-card.jpg"
			},
			{
				title: "예수 그리스도의 복음 (태국어판)",
				author: "폴 워셔",
				description: "하나님의 거룩하심과 인간의 죄, 예수 그리스도의 구속을 통해 복음을 설명하는 태국어 도서입니다.",
				cover: "/images/gospel-of-jesus-christ-th-cover-card.jpg"
			},
			{
				title: "다섯 가지 핵심 교리 (태국어판)",
				author: "존 파이퍼",
				description: "은혜의 다섯 교리를 성경적으로 설명하며 하나님의 은혜와 영광을 바라보게 하는 태국어 도서입니다.",
				cover: "/images/five-points-th-cover-card.jpg"
			},
			{
				title: "업보적 기독교 (태국어판)",
				author: "E. D. 번스",
				description: "더 잘해야 복을 얻는다는 두려움의 순환에서 벗어나, 그리스도께서 이루신 평안과 하나님의 완전한 사랑 안에서 쉬도록 안내합니다.",
				cover: "/images/karmic-christianity-th-cover-card.jpg"
			}
		],
		en: [
			{
				title: "The Cross Centered Life — Thai Edition",
				author: "C. J. Mahaney",
				description: "A Thai book encouraging Christians to keep the Gospel and the cross at the center of daily life.",
				cover: "/images/cross-centered-life-th-cover-card.jpg"
			},
			{
				title: "The Gospel of Jesus Christ — Thai Edition",
				author: "Paul Washer",
				description: "A Thai presentation of the Gospel through God's holiness, human sin, and redemption in Jesus Christ.",
				cover: "/images/gospel-of-jesus-christ-th-cover-card.jpg"
			},
			{
				title: "Five Points — Thai Edition",
				author: "John Piper",
				description: "A Thai introduction to the five doctrines of grace and the glory of God's sovereign grace.",
				cover: "/images/five-points-th-cover-card.jpg"
			},
			{
				title: "Karmic Christianity — Thai Edition",
				author: "E. D. Burns",
				description: "A guide out of the fearful cycle of trying to earn blessing, pointing readers to the lasting peace secured by Christ and God's perfect love.",
				cover: "/images/karmic-christianity-th-cover-card.jpg"
			}
		]
	}[lang];
	const graceEbooksUrl = lang === "en" ? "https://www.gracebannasan.com/en/ebooks" : "https://www.gracebannasan.com/ebooks";
	const graceCollectionCopy = lang === "th" ? {
		eyebrow: "หนังสือแนะนำ · ภาษาไทย",
		title: "หนังสืออีบุ๊กภาษาไทยแนะนำ 4 เล่มจาก Grace Bannasan",
		instruction: "เว็บไซต์นี้แนะนำหนังสือเท่านั้นและไม่ได้ให้ดาวน์โหลดไฟล์โดยตรง กรุณาไปที่หน้าอีบุ๊กของ Grace Bannasan สมัครสมาชิกหรือเข้าสู่ระบบ แล้วเลือกหนังสือเพื่อดาวน์โหลด",
		action: "สมัครสมาชิกและดาวน์โหลดที่หน้าอีบุ๊ก"
	} : lang === "ko" ? {
		eyebrow: "추천도서 · 태국어",
		title: "Grace Bannasan 추천 태국어 전자책 4선",
		instruction: "이 사이트에서는 도서를 추천·소개만 하며 PDF를 직접 제공하지 않습니다. Grace Bannasan 전자책 페이지에서 회원가입 또는 로그인한 뒤 원하는 책을 선택하여 내려받으세요.",
		action: "전자책 페이지에서 가입·다운로드"
	} : {
		eyebrow: "Recommended books · Thai",
		title: "Four Recommended Thai E-books from Grace Bannasan",
		instruction: "This site recommends and introduces these books but does not provide the PDF files directly. Visit the Grace Bannasan e-book page, create an account or sign in, and select each book to download it.",
		action: "Sign up and download on the e-book page"
	};
	const yongjinBooksTitle = lang === "th" ? "หนังสือของมิชชันนารี Yongjin Choi" : lang === "ko" ? "최용진 선교사의 책" : "Books by Missionary Yongjin Choi";
	const playlistOpenLabel = lang === "th" ? "ดูเพลย์ลิสต์" : lang === "ko" ? "재생목록 보기" : "View playlist";
	const playlists = {
		th: {
			heading: "หลักสูตรวิดีโอแนะนำ",
			source: "คริสตจักรปฏิรูปอุดรธานี · YouTube",
			action: "เริ่มเรียนบน YouTube",
			courses: [{
				title: "พื้นฐานความเชื่อคริสเตียน | 36 บทเรียน",
				description: "หลักสูตร 36 บทเรียนสำหรับวางรากฐานความเชื่อคริสเตียนอย่างเป็นขั้นตอน",
				url: "https://youtube.com/playlist?list=PLO59yy2hsXhs&si=PVH2MQsZoWqQRtx6"
			}, {
				title: "พระกิตติคุณผ่านหนังสือเล่มเล็ก",
				description: "เรียนรู้เนื้อหาสำคัญของพระกิตติคุณผ่านชุดวิดีโอจากหนังสือเล่มเล็ก",
				url: "https://youtube.com/playlist?list=PLBIU2IwY7RrE&si=GOzwXbd9PdnNZY0e"
			}]
		},
		ko: {
			heading: "추천 영상 강좌",
			source: "우돈타니 개혁교회 · YouTube",
			action: "YouTube에서 강좌 시작",
			courses: [{
				title: "기독교 신앙의 기초 | 36과",
				description: "기독교 신앙의 토대를 단계적으로 세울 수 있도록 구성된 36개 태국어 강의입니다.",
				url: "https://youtube.com/playlist?list=PLO59yy2hsXhs&si=PVH2MQsZoWqQRtx6"
			}, {
				title: "작은 책을 통해 배우는 복음",
				description: "소책자의 흐름을 따라 복음의 핵심 내용을 배우는 태국어 영상 강좌입니다.",
				url: "https://youtube.com/playlist?list=PLBIU2IwY7RrE&si=GOzwXbd9PdnNZY0e"
			}]
		},
		en: {
			heading: "Recommended video courses",
			source: "Udon Thani Reformed Church · YouTube",
			action: "Start course on YouTube",
			courses: [{
				title: "Foundations of the Christian Faith | 36 Lessons",
				description: "A 36-lesson Thai course designed to build a step-by-step foundation in the Christian faith.",
				url: "https://youtube.com/playlist?list=PLO59yy2hsXhs&si=PVH2MQsZoWqQRtx6"
			}, {
				title: "The Gospel through a Small Book",
				description: "A Thai video course exploring the heart of the Gospel by following the structure of a short booklet.",
				url: "https://youtube.com/playlist?list=PLBIU2IwY7RrE&si=GOzwXbd9PdnNZY0e"
			}]
		}
	}[lang];
	const daily = {
		th: {
			note: "ระบบจะตรวจสอบเนื้อหาของวันนี้ตามเวลาในประเทศไทยโดยอัตโนมัติ และแสดงชื่อเรื่อง ข้อความสั้นที่ได้รับอนุญาต และบทสรุปภาษาไทยที่สร้างโดย AI ส่วนเนื้อหาฉบับเต็มยังคงอยู่ที่เว็บไซต์ต้นทาง",
			sectionLabel: "บทใคร่ครวญและคำอธิษฐานประจำวัน",
			solidFixedTitle: "พระวจนะสำหรับใคร่ครวญวันนี้",
			solidTitle: "ความชื่นชมยินดีที่มั่นคง (Solid Joys)",
			solidDescription: "บทใคร่ครวญสั้นแต่ลึกซึ้งประจำวันโดย John Piper เพื่อช่วยให้ชื่นชมยินดีในพระเยซู",
			bannerFixedTitle: "คำอธิษฐานของชาวเพียวริตัน",
			bannerTitle: "คำอธิษฐานของชาวเพียวริตัน",
			bannerDescription: "บทอธิษฐานและบทใคร่ครวญประจำวันจาก The Valley of Vision โดย Banner of Truth",
			excerpt: "ข้อความสั้นจากต้นฉบับ",
			summary: "คำแปลความหมายและบทสรุปภาษาไทยโดย AI (3 ประโยค)",
			translationRights: "แสดงข้อความต้นฉบับภาษาอังกฤษเพียงสั้น ๆ พร้อมคำแปลความหมายและบทสรุปที่เรียบเรียงใหม่ ส่วนเนื้อหาฉบับเต็มอ่านได้ที่เว็บไซต์ต้นทาง",
			bannerRights: "แสดงข้อความต้นฉบับภาษาอังกฤษเพียงสั้น ๆ พร้อมคำแปลความหมายและบทสรุปที่เรียบเรียงใหม่ ส่วนเนื้อหาฉบับเต็มอ่านได้ที่เว็บไซต์ต้นทาง",
			action: "อ่านจากเว็บไซต์ต้นทาง",
			gospelMeditation: "ใคร่ครวญพระกิตติคุณ 365 วัน",
			previousDay: "วันก่อนหน้า",
			nextDay: "วันถัดไป",
			today: "วันนี้",
			noGospelMeditation: "ยังไม่มีบทใคร่ครวญพระกิตติคุณสำหรับวันที่เลือก",
			readingHeading: "อ่านพระคัมภีร์",
			readingDescription: "วิดีโอที่ช่วยให้อ่านและเข้าใจเนื้อหาพระคัมภีร์ทั้งเล่ม",
			overviewHeading: "สำรวจเนื้อหาพระคัมภีร์ทั้งเล่ม",
			overviewDescription: "อธิบายเนื้อหาของพระคัมภีร์เดิมและพระคัมภีร์ใหม่แต่ละเล่มและแต่ละบทด้วยภาพเคลื่อนไหว",
			scheduleTitle: "ตารางอ่านพระคัมภีร์ 45 สัปดาห์",
			scheduleDescription: "ตารางแบบย่อสำหรับอ่านพระคัมภีร์ให้ครบตามแผน 45 สัปดาห์",
			scheduleDownload: "ตารางไทย PDF",
			scheduleKoreanDownload: "ตารางเกาหลี PDF",
			scheduleSource: "ที่มา: https://www.wtskorea.org/contents/bible-reading-plan"
		},
		ko: {
			note: "방콕 날짜를 기준으로 오늘 자료를 자동 확인하여 제목, 허용된 짧은 발췌문, AI 한국어 요약을 표시합니다. 전문은 원문 출판사 사이트에서 읽습니다.",
			sectionLabel: "오늘의 묵상과 기도",
			solidFixedTitle: "오늘의 말씀묵상",
			solidTitle: "견고한 기쁨 (Solid Joys)",
			solidDescription: "존 파이퍼의 짧고 깊이 있는 매일 묵상을 공식 한국어 페이지에서 읽습니다.",
			bannerFixedTitle: "청교도의 기도",
			bannerTitle: "청교도의 기도",
			bannerDescription: "Banner of Truth가 제공하는 오늘의 묵상을 한국어 자동번역으로 읽습니다.",
			excerpt: "영어 원문 짧은 발췌",
			summary: "AI 한국어 의미 번역·3문장 요약",
			translationRights: "영어 원문은 아주 짧게 인용하고, 새로 작성한 한국어 의미 번역·요약을 함께 제공합니다. 전문은 원문 사이트에서 읽습니다.",
			bannerRights: "영어 원문은 아주 짧게 인용하고, 새로 작성한 한국어 의미 번역·요약을 함께 제공합니다. 전문은 원문 사이트에서 읽습니다.",
			action: "원문 사이트에서 읽기",
			gospelMeditation: "365일 복음 묵상",
			previousDay: "이전 날짜",
			nextDay: "다음 날짜",
			today: "오늘",
			noGospelMeditation: "선택한 날짜에 등록된 복음 묵상이 없습니다.",
			readingHeading: "성경통독",
			readingDescription: "성경 전체를 읽고 이해하는 데에 도움을 주는 영상들입니다.",
			overviewHeading: "성경전체 내용 살피기",
			overviewDescription: "구약과 신약의 각 권과 각 장의 내용을 애니메이션으로 설명합니다.",
			scheduleTitle: "45주 성경통독 일정표",
			scheduleDescription: "45주 동안 성경을 순서대로 읽을 수 있도록 정리한 태국어 간편 일정표입니다.",
			scheduleDownload: "태국어 통독표",
			scheduleKoreanDownload: "한국어 통독표",
			scheduleSource: "출처: https://www.wtskorea.org/contents/bible-reading-plan"
		},
		en: {
			note: "The site checks today's resources automatically using the Bangkok date and displays the title, a permitted short excerpt, and an AI summary. Full texts remain on the publishers' websites.",
			sectionLabel: "Today's devotional and prayer",
			solidFixedTitle: "Today's Scripture Meditation",
			solidTitle: "Solid Joys",
			solidDescription: "A short, substantive daily devotional by John Piper on the official source website.",
			bannerFixedTitle: "Puritan Prayer",
			bannerTitle: "Puritan Prayer",
			bannerDescription: "Read today's devotional from Banner of Truth on the official source website.",
			excerpt: "Short English source excerpt",
			summary: "Three-sentence AI meaning summary",
			translationRights: "Only a very short English excerpt is shown with a newly written meaning summary. Read the full text on the source website.",
			bannerRights: "Only a very short English excerpt is shown with a newly written meaning summary. Read the full text on the source website.",
			action: "Read on the source website",
			gospelMeditation: "365-Day Gospel Devotional",
			previousDay: "Previous day",
			nextDay: "Next day",
			today: "Today",
			noGospelMeditation: "No Gospel devotional is available for the selected date.",
			readingHeading: "Bible Reading",
			readingDescription: "Videos that help you read and understand the whole Bible.",
			overviewHeading: "Explore the Whole Bible",
			overviewDescription: "Animated explanations of the books and chapters of the Old and New Testaments.",
			scheduleTitle: "45-week Bible-reading schedule",
			scheduleDescription: "A concise Thai schedule for completing the Bible-reading plan in 45 weeks.",
			scheduleDownload: "Thai schedule",
			scheduleKoreanDownload: "Korean schedule",
			scheduleSource: "Source: https://www.wtskorea.org/contents/bible-reading-plan"
		}
	}[lang];
	const biblePlaylists = [
		{
			title: lang === "th" ? "อ่านพระคัมภีร์ให้จบใน 45 สัปดาห์" : lang === "ko" ? "45주 성경 통독하기" : "Read the Bible in 45 Weeks",
			list: "PLT7MyT0j5723CA6aYOLxezU0LIgYnfkCb",
			videos: [
				"f0ujCX9n0s0",
				"nanb3eQa1FU",
				"OhJyVm2hA3c",
				"F_VLQu6ymFc",
				"t4j2mxHXBt4",
				"OF_tsmMHONQ",
				"OU66SB32Dcs",
				"swq_XjukuMQ",
				"osPQs14DamM",
				"GlUZmC6Awzg",
				"qfExFdnDW34",
				"21qi-J7WsCg",
				"MQ2LW6f-XVg",
				"wJvmTL6m4zk",
				"VTQ6jky8LVw",
				"6WcG2J5FaUs",
				"62c5Zkseqy4",
				"IM0Zbr5P8Dk",
				"L355Hw5hsbI",
				"BzwLR18wBMc",
				"_5Du4SSVzQk",
				"P-q8wixm31c",
				"tGlpTPbJcMg",
				"jxxv1myl-Fw",
				"DGCg_FfB4sw",
				"amge1PLkFkY",
				"DATe1Sz1pSw",
				"Mp629k9VTPQ",
				"RvriYoK1CKY",
				"SZ39X0WaYVc",
				"0o8bqZJsRxw",
				"UWGzUMfaIro",
				"mrdNvjXAcK0",
				"itGxR1wra0w",
				"BMvX6UtFPYI",
				"hJ-_l05CzKM",
				"RB-M9ZVBiEA",
				"WswWgLLcRIk",
				"JmBQShMrP4g",
				"zcwxtcEorJU",
				"z2P08myl56Q",
				"nIKOgppBMS0",
				"7pk1aZClYpk",
				"W2CBouATE0o",
				"VmwLhvbrHPc",
				"KSmPbodb5XE",
				"TTXll26tkP8",
				"ULI5OoS3eoc",
				"Gto__RS-kXE",
				"PWNg9eBG8jc",
				"orOafHk3eLk",
				"HpJAH6dayYY",
				"gLOm9SGGD2s",
				"uI6xzwWCMeI",
				"EWYsyugLZS8",
				"uxZiZf1T7x8",
				"h_U28iSHnew",
				"DtGrmQThytk",
				"Zd0Nc3Plrvc",
				"PdNSarofpiw",
				"Qq-odENoVQA",
				"pzMa-P6a9bE",
				"S5M9qxzHEYg",
				"JqKdfOl6wMU",
				"9MgMe7VOiaE",
				"C-gEGvQBvxw",
				"mdFHtQyhlrQ",
				"-pqRmx1zQ2w",
				"-3uF5mi0a3g",
				"URf-cLTOMWo",
				"zfF3JIoZ7c8",
				"1JOzlJQ4zyA",
				"PEKJqDM5tGw",
				"FQyOErQaNWE",
				"A0Il-kTEDXQ",
				"H3H7r3nK1cU",
				"Lcpyuw-kDOA",
				"lcFbPbp2R2s",
				"-9yuQma4dPw",
				"-bQvU_J1g0w",
				"3ygsK6Z2ZyU",
				"uGVmGMKt1Zo",
				"evrBjXo74oQ",
				"cTVsRyITCIQ",
				"x0Dl13rKbkE",
				"kI0s2hqzQcw",
				"MohkouP3P00",
				"y7BhtXhBjoc",
				"ZnfRboVotJU",
				"Vcinm03wgoQ",
				"5d6k3O-Wcgc",
				"JWpK35Fq6i8",
				"rwkJNTyKmnM",
				"cqzWyNF2Gj8",
				"k7vXg7uw6zc",
				"C7N72JLTTi4",
				"PE1U0WgSF9I",
				"WOLroKr7jXM",
				"LlIw3l9jJRg",
				"cKnRSKvTRF8"
			]
		},
		{
			title: "ภาพรวม: พันธสัญญาเดิม - Old Testament Overviews",
			list: "PLZl6JGhBKq-7geeg61UvmssfOWm7-WCSe",
			videos: [
				"O1-gHfN4IKM",
				"kOiGyv4YWy8",
				"Y9nWZ89eYEs",
				"8d2w8ltOBkk",
				"Gz80NEh1FiI",
				"_iwP0wAWqJQ",
				"rEfU20wTjdA",
				"NSIi6Bqh-vE",
				"o9Tpy_rpsp8",
				"9gm_bmlhzHE",
				"xZUfnJi4XM0",
				"VYdlVw9wdZg",
				"is2h-vnS3ds",
				"qo1CAilfL7c",
				"89YiW4SpDfA",
				"uC6fQL4RyUo",
				"lUTStn9DXQ0",
				"a_FeH9TmqU8",
				"E9pUer7RR98",
				"HT-3ht0U6JQ",
				"VJZ1QplYP_w",
				"clNZuij-x94",
				"9Y4IZowT1S8",
				"zdtW6-bedIA",
				"wCuXVoWRk8A",
				"YijEZ_APwbk",
				"rUEcEAoy-6M",
				"M2diLHzF_UQ",
				"BN8UeWS1fXc",
				"IbUC5ENFjcs",
				"PsPG5ldq5xg",
				"mZLmiSKEdDY",
				"IQgo30EE2d8",
				"FaRZMwRs5pY",
				"YcTdhYtr3Po",
				"nKLdQnXO1yM",
				"ph7J13hUDzI",
				"TDVlCtbvYvI",
				"hJNOcq3yIw8",
				"jZDCR50bHo0",
				"1B5EoLyssu8"
			]
		},
		{
			title: "ภาพรวม: พันธสัญญาใหม่ - New Testament Overviews",
			list: "PLZl6JGhBKq-4QtXfhnttL9j5epeaP8xBE",
			videos: [
				"VzrUY-tyUSw",
				"YJmpA-LHabc",
				"6gxiPPnHgT8",
				"iXcYZtJhHLQ",
				"qZmPyvXIo7Q",
				"DzlliFTGdjw",
				"GKZF417Pbmc",
				"TkHAkQF0J_w",
				"_6TMDDrX0oY",
				"teh_A2gIP8M",
				"9fdkToBi-wI",
				"hH5fDUXGb7s",
				"U9JTp74ssGs",
				"bUgqNYk2Ujs",
				"SFQuV0OrVmc",
				"6SExoMxIfBQ",
				"70kROyeAUvk",
				"acdz_U9YdkA",
				"MWCwTvq0Whk",
				"4V0viP4Hz4g",
				"bAufPmab0RA",
				"WT4NXEvRVLE",
				"bdAfUCrqkfc",
				"vT3FCOOFF1Y",
				"_KRGU_EFoTM",
				"byvhGguLH-E",
				"npvqt1GiRko",
				"XE8NrvWeSNU",
				"h3fNhvgpMOw",
				"zA8OvH4J1cg",
				"mN0kKlEY3s4",
				"OibEyRt7dqw"
			]
		},
		{
			title: "อ่านพระคัมภีร์อย่างไร - How to Read the Bible Series",
			list: "PLZl6JGhBKq-534rqCGskY4Bl73lvZ7pTD",
			introduction: lang === "ko" ? "성경의 장르에 따라 읽는 방법" : ""
		}
	];
	const wholeBibleOverviewTitle = lang === "th" ? "ภาพใหญ่ของพระคัมภีร์ (ปฐมกาลถึงวิวรณ์)" : lang === "ko" ? "성경 전체의 개요 (창세기부터 요한계시록까지)" : "Overview of the Whole Bible (Genesis to Revelation)";
	const videoPlaylistAction = lang === "th" ? "ดูเพลย์ลิสต์" : lang === "ko" ? "재생목록 보기" : "View playlist";
	const videoPlaylists = [
		{
			id: "way-to-hope-khao-dee",
			list: "PLUwCwl5yqVYs",
			title: lang === "th" ? "หนทางสู่ความหวัง" : lang === "ko" ? "소망으로 가는 길 · หนทางสู่ความหวัง" : "The Way to Hope · หนทางสู่ความหวัง",
			description: lang === "th" ? "เพลย์ลิสต์จากช่อง ข่าวดี Khao Dee ที่นำเสนอข่าวประเสริฐและความหวังแท้ในพระเยซูคริสต์ เหมาะสำหรับผู้ที่กำลังแสวงหาความหมาย ความหวัง และคำตอบของชีวิต" : lang === "ko" ? "Khao Dee 채널의 태국어 영상 재생목록입니다. 예수 그리스도 안에 있는 복음과 참된 소망을 소개하며, 삶의 의미와 소망을 찾는 분들에게 연결하기 좋은 영상자료입니다." : "A Thai video playlist from Khao Dee introducing the Gospel and true hope in Jesus Christ. It is helpful for people who are searching for meaning, hope, and answers for life.",
			actionLabel: videoPlaylistAction
		},
		{
			id: "creation-to-christ-story",
			list: lang === "en" ? "PLU_q1xGbvJwZAg_TTLqWP-xK6nNn3NeBZ" : "PLYRPCI36F7Ig",
			video: lang === "ko" ? "x5P7dwWfhgU" : "",
			showPlaylistFirst: lang === "th" || lang === "en",
			hidePrimaryAction: lang === "ko",
			title: lang === "th" ? "Creation To Christ Story" : lang === "ko" ? "Creation To Christ Story · 창조에서 그리스도까지" : "Creation To Christ Story",
			description: lang === "th" ? "เพลย์ลิสต์วิดีโอที่เล่าเรื่องราวใหญ่ของพระคัมภีร์ตั้งแต่การทรงสร้าง การตกในบาป พระสัญญาของพระเจ้า จนถึงความหวังและความรอดที่สำเร็จในพระเยซูคริสต์ เหมาะสำหรับผู้ที่อยากเข้าใจข่าวประเสริฐอย่างเป็นลำดับ" : lang === "ko" ? "성경의 큰 이야기를 창조, 타락, 하나님의 약속, 그리고 예수 그리스도 안에서 성취된 구원까지 이어서 설명하는 영상 재생목록입니다. 복음을 처음 듣는 분들이 전체 흐름을 이해하기 좋습니다." : "A video playlist that tells the big story of the Bible from creation and the fall to God’s promise and the salvation fulfilled in Jesus Christ. It is helpful for understanding the Gospel in order.",
			actionLabel: videoPlaylistAction,
			extraLinks: lang === "ko" ? [{
				label: "한국어로 시청하기",
				href: "https://youtube.com/playlist?list=PLq2vjuployDNOdOJYBvnu2pIJNxGBK6Bt&si=JP7lnj8brBdMM973"
			}] : []
		},
		{
			id: "john-piper-thai",
			list: "PL0CU1smVnz92c0rnCiwHk3WvF6fpiURmg",
			title: lang === "th" ? "คำเทศนาของ John Piper พร้อมคำบรรยายภาษาไทย" : lang === "ko" ? "존 파이퍼 설교 · 태국어 자막" : "John Piper Sermons with Thai Subtitles",
			description: lang === "th" ? "เพลย์ลิสต์คำเทศนาของศิษยาภิบาล John Piper พร้อมคำบรรยายภาษาไทย" : lang === "ko" ? "존 파이퍼 목사의 설교를 태국어 자막과 함께 시청할 수 있는 재생목록입니다." : "A playlist of John Piper sermons with Thai subtitles.",
			actionLabel: videoPlaylistAction
		},
		{
			id: "bible-movies",
			list: "PLY5vZ_BOgkDI",
			title: lang === "th" ? "ภาพยนตร์พระคัมภีร์" : lang === "ko" ? "성경영화" : "Bible Movies",
			description: lang === "th" ? "เพลย์ลิสต์ภาพยนตร์ภาษาไทยที่นำเสนอเรื่องราวจากพระคัมภีร์" : lang === "ko" ? "성경 이야기를 영화로 시청할 수 있는 태국어 영상 재생목록입니다." : "A Thai-language playlist of films presenting stories from the Bible.",
			actionLabel: videoPlaylistAction
		},
		{
			id: "bible-stories-for-children",
			list: "PLRvyaVl1_wvyuXA5f9EAs3-SC3GQHZZSQ",
			title: lang === "th" ? "เรื่องราวพระคัมภีร์สำหรับเด็ก" : lang === "ko" ? "어린이를 위한 성경 이야기" : "Bible Stories for Children",
			description: lang === "th" ? "เพลย์ลิสต์วิดีโอที่ช่วยให้เด็ก ๆ เข้าใจเรื่องราวสำคัญในพระคัมภีร์ได้อย่างง่ายและน่าสนใจ" : lang === "ko" ? "어린이들이 성경의 주요 이야기를 쉽고 재미있게 이해하도록 돕는 영상 재생목록입니다." : "A video playlist that helps children understand major Bible stories in a clear and engaging way.",
			actionLabel: videoPlaylistAction
		}
	];
	const audiobookPlaylists = [
		{
			id: "god-pleasing-booklet-series-thai-audio",
			list: lang === "ko" ? "PLOxu6Deed_oE" : "PLAEhdCEehItA",
			showLatest: false,
			title: lang === "th" ? "ชุดหนังสือเล่มเล็ก God-Pleasing โดย Yongjin Choi" : lang === "ko" ? "갓플리징 소책자 시리즈 오디오북" : "God-Pleasing Booklet Series in Thai",
			description: lang === "th" ? "อ่านหนังสือเล่มเล็ก 7 เล่ม: 1) ข่าวประเสริฐคืออะไร, 2) พระเจ้าทรงมีอยู่จริงหรือ, 3) การทรงนับว่าเป็นผู้ชอบธรรมและการบังเกิดใหม่, 4) สำหรับผู้ที่มาโบสถ์เป็นครั้งแรก, 5) ความเชื่อปฏิรูปคืออะไร, 6) การชำระให้บริสุทธิ์และการประหารบาป, 7) พันธกิจและมิชชันนารี" : lang === "ko" ? "7권의 소책자를 낭독합니다. 1) 복음이란 무엇인가, 2) 하나님은 정말로 있나요, 3) 칭의와 거듭남, 4) 교회에 처음 나오신 분들을 위하여, 5) 개혁신앙이란 무엇인가, 6) 성화와 죄 죽임, 7) 선교와 선교사." : "Audio readings of seven booklets: 1) What Is the Gospel?, 2) Does God Really Exist?, 3) Justification and the New Birth, 4) For Those Coming to Church for the First Time, 5) What Is Reformed Faith?, 6) Sanctification and the Mortification of Sin, 7) Mission and Missionaries.",
			actionLabel: videoPlaylistAction
		},
		{
			id: "psalms-proverbs-reading-audio",
			list: "PLHc03emoVU7M",
			showLatest: false,
			title: lang === "th" ? "สดุดีและสุภาษิต · เสียงอ่าน" : lang === "ko" ? "시편과 잠언 낭독" : "Psalms and Proverbs Audio Reading",
			description: lang === "th" ? "เพลย์ลิสต์นี้รวบรวมเสียงอ่าน AI ของหนังสือสดุดีและสุภาษิต โดยอ้างอิงจากคำแปลแบบถอดความที่ผู้จัดทำแปลขึ้นเองอย่างใกล้ชิดกับต้นฉบับภาษาฮีบรู เพื่อช่วยให้ผู้ฟังติดตามคำอธิษฐาน การสรรเสริญ และถ้อยคำแห่งปัญญาได้ชัดเจน จะทยอยอัปโหลดตอนใหม่เพิ่มอย่างต่อเนื่อง" : lang === "ko" ? "히브리어 원문에 충실하게 직접 번역(사역)한 내용을 바탕으로 AI가 낭독한 시편·잠언 재생목록입니다. 시편의 기도와 찬양, 잠언의 지혜 말씀을 차분히 들을 수 있도록 구성했으며, 앞으로도 한 편씩 계속 올릴 예정입니다." : "An audio set for Psalms and Proverbs read by AI, based on direct renderings personally translated with close attention to the Hebrew text. It is arranged for reflective listening to the prayers and praises of the Psalms and the wisdom sayings of Proverbs, and new readings will continue to be added one by one.",
			actionLabel: lang === "th" ? "เปิดเพลย์ลิสต์สุภาษิต" : lang === "ko" ? "잠언 재생목록 보기" : "Open Proverbs playlist",
			extraLinks: [{
				href: "https://www.youtube.com/playlist?list=PLAqg3Fekq2yc",
				label: lang === "th" ? "สดุดี 재생목록" : lang === "ko" ? "시편 재생목록" : "Psalms playlist"
			}],
			hideShareButtons: true
		},
		{
			id: "daily-gospel-devotional-thai-audio",
			list: "PLUN8JL8D21Qg",
			showLatest: false,
			title: lang === "th" ? "ใคร่ครวญข่าวประเสริฐ 365 วัน" : lang === "ko" ? "365일 복음 묵상 · 태국어 오디오" : "365 Daily Gospel Devotional in Thai",
			description: lang === "th" ? "เพลย์ลิสต์นี้รวบรวมคำใคร่ครวญข่าวประเสริฐประจำวันจากเว็บไซต์ Truth for Life and Mission เพื่อช่วยให้ผู้ฟังเริ่มต้นวันด้วยพระคุณของพระเจ้า ความจริงของข่าวประเสริฐ และการหนุนใจจากพระวจนะ" : lang === "ko" ? "우리 홈페이지의 365일 복음 묵상 내용을 태국어로 매일 올리는 재생목록입니다. 하나님의 은혜와 복음의 진리를 매일 짧게 듣고 묵상할 수 있도록 구성했습니다." : "A daily Thai audio playlist based on the 365 Daily Gospel Devotional from Truth for Life and Mission. It helps listeners begin each day with God’s grace, the truth of the Gospel, and encouragement from Scripture.",
			actionLabel: videoPlaylistAction
		},
		{
			id: "paul-washer-gospel-thai-audio",
			list: "PLGbIUHbe4fjg",
			showLatest: false,
			title: lang === "th" ? "ข่าวประเสริฐของพระเยซูคริสต์ โดย Paul Washer" : lang === "ko" ? "폴 워셔의 『예수 그리스도의 복음』 태국어 낭독" : "Paul Washer’s The Gospel of Jesus Christ in Thai",
			description: lang === "th" ? "หนังสือเล่มนี้อธิบายข่าวประเสริฐอย่างตรงไปตรงมา โดยชี้ให้เห็นความบริสุทธิ์ของพระเจ้า ความจริงเรื่องบาป ความจำเป็นของการกลับใจและความเชื่อ และความรอดที่มีอยู่ในพระเยซูคริสต์เท่านั้น (ผู้อ่านเสียง: Thanatip Sanguansak)" : lang === "ko" ? "이 책은 하나님의 거룩하심, 인간의 죄, 회개와 믿음의 필요성, 그리고 예수 그리스도 안에만 있는 구원을 분명하게 설명합니다. 복음의 핵심을 다시 듣고 정리하기 좋은 태국어 낭독 자료입니다. (낭독자: Thanatip Sanguansak)" : "This book clearly explains the holiness of God, the reality of human sin, the need for repentance and faith, and the salvation found only in Jesus Christ. This is a Thai audio reading of the book. (Reader: Thanatip Sanguansak)",
			actionLabel: videoPlaylistAction
		},
		{
			id: "is-god-really-sovereign-thai-audio",
			list: "PLHTWwbVCVxok",
			showLatest: false,
			title: lang === "th" ? "พระเจ้าทรงอำนาจอธิปไตยสูงสุดจริงหรือ? โดย Conrad Mbewe" : lang === "ko" ? "『하나님은 정말 주권자이신가?』 태국어 낭독" : "Is God Really Sovereign? in Thai",
			description: lang === "th" ? "หนังสือของ Conrad Mbewe เล่มนี้ช่วยให้ผู้อ่านมองเห็นว่าพระเจ้าทรงครอบครองเหนือทุกสิ่งจริง แม้ในเวลาที่ชีวิตเต็มไปด้วยคำถาม ความเจ็บปวด หรือเหตุการณ์ที่เราไม่เข้าใจ ความจริงเรื่องอธิปไตยของพระเจ้าจึงเป็นทั้งรากฐานของความเชื่อและแหล่งปลอบใจของผู้เชื่อ" : lang === "ko" ? "Conrad Mbewe의 책으로, 이해하기 어려운 고난과 질문 속에서도 하나님께서 모든 것을 주권적으로 다스리신다는 성경의 가르침을 다룹니다. 하나님의 주권이 신자의 믿음과 위로의 기초가 됨을 보여주는 태국어 낭독 자료입니다." : "In this book, Conrad Mbewe explains the biblical teaching that God truly rules over all things, even when life is full of pain, questions, and events we cannot understand. It presents God’s sovereignty as a foundation for faith and comfort.",
			actionLabel: videoPlaylistAction
		}
	];
	const whyJesusPdf = {
		th: {
			badge: "หนังสือแจกจ่าย · ภาษาไทย",
			title: "ทำไมต้องเป็นพระเยซูคริสต์เพียงผู้เดียว?",
			description: "หนังสือเล่มเล็กที่เรียบเรียงให้เหมาะกับบริบทของคนไทย อธิบายอย่างกระชับว่าเหตุใดพระเยซูคริสต์จึงทรงเป็นผู้ช่วยให้รอดที่มนุษย์ต้องการ เหมาะสำหรับมอบให้ผู้ที่กำลังเริ่มต้นสนใจข่าวประเสริฐ",
			preview: "แตะปกเพื่อดูตัวอย่าง",
			downloads: [{
				action: "ต้นฉบับไทย",
				href: "/downloads/why-jesus-th.pdf"
			}],
			previewPages: [
				"/previews/why-jesus/th/page-01.png",
				"/previews/why-jesus/th/page-02.png",
				"/previews/why-jesus/th/page-03.png",
				"/previews/why-jesus/th/page-04.png"
			]
		},
		ko: {
			badge: "전도책자 · 태국어 원본 포함",
			title: "왜 예수 그리스도만이어야 하는가? (전도책자)",
			description: "태국 상황에 맞게 작성된 전도지로, 예수 그리스도께서 왜 꼭 필요한 구주이신지를 짧고 분명하게 소개합니다. 복음에 관심을 보이는 분에게 읽어 보시라고 권하기 좋은 자료입니다.",
			preview: "표지를 누르면 미리 볼 수 있습니다",
			downloads: [{
				action: "태국어 원본",
				href: "/downloads/why-jesus-th.pdf"
			}, {
				action: "한국어 직역본",
				href: "/downloads/why-jesus-ko-literal.pdf"
			}],
			note: "한국어 파일은 태국어 원본을 바탕으로 한 직역본입니다.",
			previewPages: [
				"/previews/why-jesus/ko/page-01.png",
				"/previews/why-jesus/ko/page-02.png",
				"/previews/why-jesus/ko/page-03.png",
				"/previews/why-jesus/ko/page-04.png"
			]
		},
		en: {
			badge: "Gospel booklet · Includes Thai original",
			title: "ทำไมต้องเป็นพระเยซูคริสต์เพียงผู้เดียว? (Why Jesus Christ Alone?)",
			description: "A short evangelistic booklet written for the Thai context, explaining clearly why Jesus Christ is the Savior people need. It is well suited for sharing with someone beginning to take an interest in the Gospel.",
			preview: "Select the cover to preview it",
			downloads: [{
				action: "Thai original",
				href: "/downloads/why-jesus-th.pdf"
			}, {
				action: "English literal",
				href: "/downloads/why-jesus-en-literal.pdf"
			}],
			note: "The English file is a literal translation of the Thai original.",
			previewPages: [
				"/previews/why-jesus/en/page-01.png",
				"/previews/why-jesus/en/page-02.png",
				"/previews/why-jesus/en/page-03.png",
				"/previews/why-jesus/en/page-04.png"
			]
		}
	}[lang];
	const whyJesusCoverThumb = whyJesusPdf.previewPages[0].replace("/page-01.png", "/thumbs/page-01.jpg");
	const emptyPreviewImage = "data:image/gif;base64,R0lGODlhAQABAAAAACw=";
	const trueHappinessTract = {
		th: {
			badge: "หนังสือแจกจ่าย · ภาษาไทย",
			title: "ความสุขที่แท้จริง — ทำไมมนุษย์จึงยังว่างเปล่า แม้มีทุกสิ่ง? (หนังสือแจกจ่าย)",
			description: "หนังสือแจกจ่ายสั้น ๆ ที่จัดทำขึ้นจากเนื้อหาของ J. C. Ryle เพื่อช่วยแนะนำผู้สนใจข่าวประเสริฐให้คิดอย่างจริงจังว่า ความสุขแท้ไม่ได้อยู่ที่สิ่งชั่วคราว แต่อยู่ในการรู้จักพระเจ้า การกลับใจ และความเชื่อในพระเยซูคริสต์",
			note: "",
			downloads: [{
				action: "ต้นฉบับไทย",
				href: "/downloads/true-happiness-tract-th.pdf"
			}]
		},
		ko: {
			badge: "전도책자 · 태국어 원본 포함",
			title: "참된 행복 — 왜 인간은 모든 것을 가져도 여전히 공허한가? (전도책자)",
			description: "J. C. 라일의 글을 바탕으로 전도 대상자에게 읽어 보라고 권하기 좋게 만든 짧은 전도책자입니다. 참된 행복이 재물이나 성공이나 잠깐의 만족에 있지 않고, 하나님을 알고 회개하며 예수 그리스도를 믿는 데 있음을 소개합니다.",
			note: "한국어 파일은 태국어 원본에 대한 직역본입니다.",
			downloads: [{
				action: "태국어 원본",
				href: "/downloads/true-happiness-tract-th.pdf"
			}, {
				action: "한국어 직역본",
				href: "/downloads/true-happiness-tract-ko-literal.pdf"
			}]
		},
		en: {
			badge: "Gospel tract · Includes Thai original",
			title: "True Happiness — Why Are We Still Empty Even When We Have Everything? (Gospel Tract)",
			description: "A short evangelistic tract prepared from material by J. C. Ryle, designed to be shared with people who are beginning to consider the Gospel. It points readers to true happiness in knowing God, repentance, and faith in Jesus Christ.",
			note: "The English file is a literal translation of the Thai original.",
			downloads: [{
				action: "Thai original",
				href: "/downloads/true-happiness-tract-th.pdf"
			}, {
				action: "English literal",
				href: "/downloads/true-happiness-tract-en-literal.pdf"
			}]
		}
	}[lang];
	const childrenGospelTract = {
		th: {
			badge: "กิจกรรมเด็ก · หนังสือแจกจ่าย",
			title: "ทำหนังสือเล่มเล็กข่าวประเสริฐสำหรับเด็ก",
			action: "ดูวิธีทำ",
			coverAlt: "ตัวอย่างหนังสือเล่มเล็กข่าวประเสริฐสำหรับเด็ก"
		},
		ko: {
			badge: "어린이 활동 · 전도책자",
			title: "어린이 복음전도지 책자 만들기",
			action: "만드는 방법 보기",
			coverAlt: "어린이 복음전도지 책자 샘플"
		},
		en: {
			badge: "Children’s activity · Gospel booklet",
			title: "Make a Children’s Gospel Tract Booklet",
			action: "See how to make it",
			coverAlt: "Children’s Gospel tract booklet sample"
		}
	}[lang];
	const coverageVisionToolkitUrl = "https://waypoint-neon-five.vercel.app/toolkit";
	const coverageVisionDetailUrl = "https://waypoint-neon-five.vercel.app/toolkit/3d4d08ee-d3ac-4729-bb44-515bc193eefd";
	const coverageVisionResource = {
		th: {
			badge: "แหล่งฝึกอบรม · เว็บไซต์ภายนอก",
			title: "Jesus' Coverage Vision Training Textbook",
			description: "สื่อจากเว็บไซต์ Waypoint ซึ่งมีทรัพยากรฝึกอบรมและสื่อประกาศอื่น ๆ ด้วย บทเรียนนี้จัดทำขึ้นสำหรับการอบรมสาวกให้เป็นผู้บุกเบิกคริสตจักรและผู้ร่วมงานพันธกิจโลก หากสนใจเพิ่มเติม กรุณาติดต่อผู้ประสานงานแต่ละพื้นที่ตามข้อมูลที่อยู่ในหน้าสุดท้ายของคู่มือ",
			open: "ดู/ดาวน์โหลด",
			toolkit: "ดู Toolkit ทั้งหมด"
		},
		ko: {
			badge: "훈련자료 · 외부 사이트",
			title: "Jesus' Coverage Vision Training Textbook",
			description: "훈련자료와 전도자료 등이 함께 제공되는 Waypoint 사이트의 자료입니다. 본 교재는 제자들이 교회 개척자와 세계선교 동역자로 세워지도록 훈련하기 위한 교재입니다. 더 관심이 있는 분은 교재의 마지막 페이지에 나오는 각 지역 연락처로 문의하시기 바랍니다.",
			open: "미리보기·다운로드",
			toolkit: "Toolkit 전체 보기"
		},
		en: {
			badge: "Training resource · External site",
			title: "Jesus' Coverage Vision Training Textbook",
			description: "A resource from the Waypoint site, which also provides other training and evangelism materials. This textbook is designed to train disciples to become church planters and co-workers in global mission. If you would like to learn more, please contact the regional contacts listed on the final page of the textbook.",
			open: "Preview/download",
			toolkit: "Browse the full Toolkit"
		}
	}[lang];
	const pdfGroups = {
		th: {
			tracts: "หนังสือแจกจ่าย / หนังสือเล่มเล็ก",
			training: "การฝึกอบรม",
			doctrine: "คำสอนถามตอบ / คำสารภาพความเชื่อ",
			planned: "ฉบับภาษาไทยกำลังเตรียม",
			doctrinesBadge: "หนังสือศึกษา · แสดงปกก่อน",
			doctrinesTitle: "หลักคำสอนแห่งพระคุณ — คู่มือศึกษาหลักคำสอนคาลวิน 5 ประการ",
			doctrinesAuthor: "ผู้เขียน: Yongjin Choi",
			doctrinesDescription: "คู่มือศึกษาพระคัมภีร์เรื่อง “หลักคำสอนแห่งพระคุณ” ที่ช่วยให้เข้าใจว่าความรอดตั้งแต่ต้นจนจบเป็นพระคุณของพระเจ้า เหมาะสำหรับการเรียนส่วนตัวและกลุ่มศึกษาพระคัมภีร์",
			doctrinesDownload: "PDF",
			confessionTitle: "คำสารภาพความเชื่อเวสต์มินสเตอร์ / คำถามคำตอบใหญ่ / คำถามคำตอบสั้น",
			confessionDescription: "ลิงก์สำหรับศึกษาคำสารภาพความเชื่อและคำสอนถามตอบตามแนวปฏิรูป จะจัดเตรียมไว้ที่นี่ในภายหลัง",
			confessionAction: "ลิงก์เว็บไซต์กำลังเตรียม"
		},
		ko: {
			tracts: "전도지 / 소책자",
			training: "훈련",
			doctrine: "교리문답 / 신앙고백",
			planned: "예정 자료",
			doctrinesBadge: "한국어 공부교재 · PDF",
			doctrinesTitle: "은혜의 교리 — 칼빈주의 5대 교리 공부교재",
			doctrinesAuthor: "저자: 최용진",
			doctrinesDescription: "칼빈주의 5대 교리로 알려진 “은혜의 교리”를 성경공부 교재 형식으로 정리한 자료입니다. 구원이 처음부터 끝까지 하나님의 은혜임을 차분히 배우도록 돕습니다.",
			doctrinesDownload: "한국어 PDF",
			confessionTitle: "웨스트민스터 신앙고백서 / 대요리문답 / 소요리문답",
			confessionDescription: "개혁주의 신앙고백서를 공부할 수 있는 사이트 링크 바를 이곳에 배치할 예정입니다.",
			confessionAction: "사이트 링크 준비 중"
		},
		en: {
			tracts: "Gospel Tracts / Booklets",
			training: "Training",
			doctrine: "Catechism / Confession",
			planned: "Thai translation coming later",
			doctrinesBadge: "Korean study guide · Cover preview",
			doctrinesTitle: "Doctrines of Grace — A Study Guide to the Five Points of Calvinism",
			doctrinesAuthor: "Author: Yongjin Choi",
			doctrinesDescription: "A Bible-study guide to the “Doctrines of Grace,” commonly known as the five points of Calvinism. It helps readers see that salvation is God's grace from beginning to end.",
			doctrinesDownload: "PDF",
			confessionTitle: "Westminster Confession of Faith / Larger Catechism / Shorter Catechism",
			confessionDescription: "A link bar for studying Reformed confessions and catechisms will be placed here.",
			confessionAction: "Site link coming soon"
		}
	}[lang];
	const reformedConfessionsPdfLink = {
		th: {
			label: "Reformed Confessions",
			description: "เว็บไซต์ที่รวบรวมคำสารภาพความเชื่อและคำสอนถามตอบตามแนวปฏิรูป",
			action: "เปิดเว็บไซต์"
		},
		ko: {
			label: "Reformed Confessions",
			description: "개혁주의 신앙고백서들을 모아둔 사이트입니다.",
			action: "사이트 열기"
		},
		en: {
			label: "Reformed Confessions",
			description: "A site that gathers historic Reformed confessions and catechisms.",
			action: "Open site"
		}
	}[lang];
	const westminster = {
		th: {
			badge: "เอกสารหลักความเชื่อปฏิรูป · แปลไทยโดย God-Pleasing Books",
			title: "เอกสารมาตรฐานเวสต์มินสเตอร์",
			intro: "เอกสารเวสต์มินสเตอร์เกิดจากการประชุมสมัชชาเวสต์มินสเตอร์ในคริสต์ศตวรรษที่ 17 และกลายเป็นเอกสารสำคัญของคริสตจักรปฏิรูปและเพรสไบทีเรียนทั่วโลก ช่วยสรุปคำสอนสำคัญของพระคัมภีร์อย่างเป็นระบบ ทั้งเรื่องพระเจ้า พระคัมภีร์ ความรอด คริสตจักร และชีวิตคริสเตียน",
			translationNote: "แปลภาษาไทย: God-Pleasing Books · ฉบับเกาหลีเป็นคำแปลตรงจากภาษาไทย",
			thaiDownload: "PDF ภาษาไทย",
			koLiteralDownload: "ไทย-เกาหลี",
			source: "ต้นฉบับภาษาอังกฤษ: Orthodox Presbyterian Church (OPC)",
			opcAction: "เปิดต้นฉบับภาษาอังกฤษที่ OPC",
			docs: {
				confession: "คำสารภาพความเชื่อเวสต์มินสเตอร์",
				larger: "คำสอนถามตอบเวสต์มินสเตอร์ฉบับใหญ่",
				shorter: "คำสอนถามตอบเวสต์มินสเตอร์ฉบับย่อ"
			}
		},
		ko: {
			badge: "개혁주의 신앙고백 문서 · 태국어/한국어",
			title: "웨스트민스터 표준문서",
			intro: "웨스트민스터 신앙고백서와 대·소요리문답은 17세기 웨스트민스터 총회에서 정리된 대표적인 개혁주의 신앙고백 문서입니다. 성경, 하나님, 구원, 교회, 성례, 그리스도인의 삶을 체계적으로 설명하며, 장로교회와 개혁교회가 성경의 핵심 교리를 배우고 가르치는 데 오랫동안 사용해 온 중요한 자료입니다.",
			translationNote: "태국어 번역: 갓플리징 북스 · 한국어 자료는 태국어 본문을 한국어로 직역한 자료입니다.",
			thaiDownload: "태국어 PDF",
			koLiteralDownload: "태-한 직역본",
			source: "영어 원본: Orthodox Presbyterian Church (OPC)",
			opcAction: "OPC 영어 원본 보기",
			docs: {
				confession: "웨스트민스터 신앙고백서",
				larger: "웨스트민스터 대요리문답",
				shorter: "웨스트민스터 소요리문답"
			}
		},
		en: {
			badge: "Reformed confessional documents",
			title: "Westminster Standards",
			intro: "The Westminster Confession of Faith and the Larger and Shorter Catechisms were produced by the seventeenth-century Westminster Assembly and became central confessional documents for Presbyterian and Reformed churches. They summarize biblical teaching on Scripture, God, salvation, the church, sacraments, and the Christian life in a systematic way.",
			translationNote: "Thai translation: God-Pleasing Books. Korean files are literal translations from Thai.",
			thaiDownload: "Thai PDF",
			koLiteralDownload: "Thai–Korean",
			source: "For the English originals, please download directly from the Orthodox Presbyterian Church (OPC) page.",
			opcAction: "English originals at OPC",
			docs: {
				confession: "Westminster Confession of Faith",
				larger: "Westminster Larger Catechism",
				shorter: "Westminster Shorter Catechism"
			}
		}
	}[lang];
	const westminsterShareUrl = `/${lang}/library/?type=pdf#westminster-standards`;
	const westminsterDocs = [
		{
			key: "confession",
			title: westminster.docs.confession,
			cover: "/images/westminster-confession-th-cover.png",
			thaiHref: "/downloads/westminster-confession-th.pdf",
			koHref: "/downloads/westminster-confession-th-ko-literal.pdf"
		},
		{
			key: "larger-catechism",
			title: westminster.docs.larger,
			cover: "/images/westminster-larger-catechism-th-cover.png",
			thaiHref: "/downloads/westminster-larger-catechism-th.pdf",
			koHref: "/downloads/westminster-larger-catechism-th-ko-literal.pdf"
		},
		{
			key: "shorter-catechism",
			title: westminster.docs.shorter,
			cover: "/images/westminster-shorter-catechism-th-cover.png",
			thaiHref: "/downloads/westminster-shorter-catechism-th.pdf",
			koHref: "/downloads/westminster-shorter-catechism-th-ko-literal.pdf"
		}
	];
	Astro.response.headers.set("Cache-Control", "public, max-age=60, s-maxage=300, stale-while-revalidate=86400");
	return renderTemplate`${renderComponent($$result, "SiteLayout", $$SiteLayout, {
		"lang": lang,
		"current": "library",
		"title": String(t.nav.library)
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<header class="page-heading container"><p class="eyebrow">Digital Library</p>${lang !== "ko" && renderTemplate`<h1>${t.nav.library}</h1>`}</header><section class="container section" style="padding-top:0"><nav class="filter-row library-filter-row" aria-label="Resource types" data-library-filter-row><a${addAttribute({ active: type === "audiobook" }, "class:list")}${addAttribute(`/${lang}/library/?type=audiobook`, "href")}>${a.audiobook}</a><a${addAttribute({ active: type === "book" }, "class:list")}${addAttribute(`/${lang}/library/?type=book`, "href")}>${a.books}</a><a${addAttribute({ active: type === "pdf" }, "class:list")}${addAttribute(`/${lang}/library/?type=pdf`, "href")}>${a.pdf}</a><a${addAttribute({ active: type === "video" }, "class:list")}${addAttribute(`/${lang}/library/?type=video`, "href")}>${a.video}</a><a${addAttribute({ active: type === "article" }, "class:list")}${addAttribute(`/${lang}/library/?type=article`, "href")}>${a.article}</a><a${addAttribute(`/${lang}/useful-sites/`, "href")}>${t.nav.usefulLinks}</a></nav><style>
      .library-filter-row > a {
        position: relative;
      }
      .library-filter-row > a:not(:last-child)::after {
        content: "";
        position: absolute;
        top: 50%;
        right: -6px;
        width: 1px;
        height: 18px;
        border-radius: 999px;
        background: rgba(23, 63, 53, 0.24);
        transform: translateY(-50%);
        pointer-events: none;
      }
      @media (max-width: 768px) {
        .library-filter-row > a::after {
          display: none;
        }
      }
    </style><script>
      (() => {
        const stickyStateKey = "tflm-library-filter-sticky";
        const filterRow = document.querySelector("[data-library-filter-row]");
        if (!(filterRow instanceof HTMLElement)) return;

        const getHeaderHeight = () => {
          const header = document.querySelector(".site-header");
          if (header instanceof HTMLElement) {
            const measured = header.getBoundingClientRect().height;
            if (measured > 0) return Math.ceil(measured);
          }
          const raw = getComputedStyle(document.documentElement).getPropertyValue("--site-header-height");
          const parsed = Number.parseFloat(raw);
          return Number.isFinite(parsed) ? Math.ceil(parsed) : 62;
        };

        const updateLibraryFilterTop = () => {
          const headerHeight = getHeaderHeight();
          document.documentElement.style.setProperty("--library-filter-top", \`\${Math.ceil(headerHeight)}px\`);
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

        const getStickyOffset = () => {
          const headerHeight = updateLibraryFilterTop();
          const filterHeight = filterRow.offsetHeight || 0;
          return headerHeight + filterHeight + 18;
        };

        const scrollHashTargetIntoView = () => {
          if (!window.location.hash) return;
          const targetId = decodeURIComponent(window.location.hash.slice(1));
          if (!targetId) return;
          const target = document.getElementById(targetId);
          if (!(target instanceof HTMLElement)) return;
          const targetTop = target.getBoundingClientRect().top + window.scrollY - getStickyOffset();
          window.scrollTo({ top: Math.max(0, Math.round(targetTop)), behavior: "auto" });
        };

        const scheduleHashScroll = () => {
          requestAnimationFrame(() => requestAnimationFrame(scrollHashTargetIntoView));
          window.setTimeout(scrollHashTargetIntoView, 120);
          window.setTimeout(scrollHashTargetIntoView, 420);
          window.setTimeout(scrollHashTargetIntoView, 900);
        };

        if (window.location.hash) {
          scheduleHashScroll();
        }

        window.addEventListener("hashchange", scheduleHashScroll);
      })();
    <\/script>${isBibleArchive && renderTemplate`<section class="bible-reading-feature" aria-labelledby="bible-reading-heading"><div class="bible-reading-copy"><p class="eyebrow">YouTube Playlist</p><h2 id="bible-reading-heading">${daily.readingHeading}</h2><p>${daily.readingDescription}</p></div><div class="bible-reading-playlist-grid"><article class="featured"${addAttribute(biblePlaylists[0].list, "id")}><h3>${biblePlaylists[0].title}</h3><div class="video-frame"><iframe${addAttribute(`https://www.youtube-nocookie.com/embed/${biblePlaylists[0].videos?.[0]}?list=${biblePlaylists[0].list}&index=1&rel=0`, "src")}${addAttribute(biblePlaylists[0].title, "title")} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen${addAttribute(biblePlaylists[0].list, "data-random-playlist")}${addAttribute(biblePlaylists[0].videos?.join(","), "data-video-ids")}></iframe></div><div class="video-action-row"><a class="button secondary playlist-link-button playlist-open-button"${addAttribute(`https://www.youtube.com/watch?v=${biblePlaylists[0].videos?.[0]}&list=${biblePlaylists[0].list}&index=1`, "href")} target="_blank" rel="noopener noreferrer" data-playlist-open>${playlistOpenLabel} <span class="playlist-external-mark" aria-hidden="true">↗</span></a>${renderComponent($$result, "ShareButtons", $$ShareButtons, {
		"lang": lang,
		"url": `https://www.youtube.com/playlist?list=${biblePlaylists[0].list}`,
		"title": biblePlaylists[0].title
	})}</div></article></div><section class="reading-schedule" aria-labelledby="reading-schedule-title"><div><h3 id="reading-schedule-title">${daily.scheduleTitle}</h3><p>${daily.scheduleDescription}</p><div class="schedule-actions"><a class="button download-button" href="/downloads/bible-reading-45-week-schedule-th.pdf" data-pdf-preview${addAttribute(daily.scheduleDownload, "data-pdf-preview-title")} download="bible-reading-45-week-schedule-th.pdf">${daily.scheduleDownload}</a>${lang === "ko" && renderTemplate`<a class="button secondary download-button" href="/downloads/bible-reading-45-week-schedule-ko.pdf" data-pdf-preview${addAttribute(daily.scheduleKoreanDownload, "data-pdf-preview-title")} download="bible-reading-45-week-schedule-ko.pdf">${daily.scheduleKoreanDownload}</a>`}</div><p class="schedule-source"><a href="https://www.wtskorea.org/contents/bible-reading-plan" target="_blank" rel="noopener noreferrer">${daily.scheduleSource} ↗</a></p></div><a href="/downloads/bible-reading-45-week-schedule-th.pdf"${addAttribute(daily.scheduleDownload, "aria-label")}><img src="/bible-reading-45-week-schedule-th.png"${addAttribute(daily.scheduleTitle, "alt")} loading="lazy"></a></section><header class="bible-reading-copy bible-overview-heading"><h2>${daily.overviewHeading}</h2><p>${daily.overviewDescription}</p></header><div class="bible-reading-playlist-grid additional-playlists">${biblePlaylists.slice(1).map((playlist) => renderTemplate`<article${addAttribute(playlist.list, "id")}>${playlist.introduction && renderTemplate`<p class="playlist-introduction">${playlist.introduction}</p>`}<h3>${playlist.title}</h3><div class="video-frame">${playlist.videos?.length ? renderTemplate`<iframe${addAttribute(`https://www.youtube-nocookie.com/embed/${playlist.videos[0]}?list=${playlist.list}&index=1&rel=0`, "src")}${addAttribute(playlist.title, "title")} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen${addAttribute(playlist.list, "data-random-playlist")}${addAttribute(playlist.videos.join(","), "data-video-ids")}></iframe>` : renderTemplate`<iframe${addAttribute(`https://www.youtube.com/embed/videoseries?list=${playlist.list}&rel=0`, "src")}${addAttribute(playlist.title, "title")} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`}</div><div class="video-action-row"><a class="button secondary playlist-link-button playlist-open-button"${addAttribute(playlist.videos?.length ? `https://www.youtube.com/watch?v=${playlist.videos[0]}&list=${playlist.list}&index=1` : `https://www.youtube.com/playlist?list=${playlist.list}`, "href")} target="_blank" rel="noopener noreferrer"${addAttribute(playlist.videos?.length ? true : void 0, "data-playlist-open")}>${playlistOpenLabel} <span class="playlist-external-mark" aria-hidden="true">↗</span></a>${renderComponent($$result, "ShareButtons", $$ShareButtons, {
		"lang": lang,
		"url": `https://www.youtube.com/playlist?list=${playlist.list}`,
		"title": playlist.title
	})}</div></article>`)}<article class="featured bible-overview-video" id="whole-bible-overview"><h3>${wholeBibleOverviewTitle}</h3><div class="video-frame"><iframe src="https://www.youtube.com/embed/SQ0c5aEzYkw?rel=0&list=PLxUrp4sYoRfQKfC_5HTqzn7yvYdQdcXoP"${addAttribute(wholeBibleOverviewTitle, "title")} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div><div class="video-action-row"><a class="button secondary playlist-link-button playlist-open-button" href="https://www.youtube.com/playlist?list=PLxUrp4sYoRfQKfC_5HTqzn7yvYdQdcXoP" target="_blank" rel="noopener noreferrer">${playlistOpenLabel} <span class="playlist-external-mark" aria-hidden="true">↗</span></a>${renderComponent($$result, "ShareButtons", $$ShareButtons, {
		"lang": lang,
		"url": "https://www.youtube.com/playlist?list=PLxUrp4sYoRfQKfC_5HTqzn7yvYdQdcXoP",
		"title": wholeBibleOverviewTitle
	})}</div></article></div></section>`}${type === "book" && renderTemplate`<section class="free-book-section" aria-labelledby="free-book-heading"><article class="grace-ebook-collection-card" id="grace-bannasan-recommended-ebooks"><header class="grace-ebook-collection-heading"><p class="type-pill">${graceCollectionCopy.eyebrow}</p><h2 id="free-book-heading">${graceCollectionCopy.title}</h2><p>${graceCollectionCopy.instruction}</p></header><div class="grace-ebook-list">${graceBooks.map((book) => renderTemplate`<section class="grace-ebook-item"><a${addAttribute(graceEbooksUrl, "href")} target="_blank" rel="noopener noreferrer"${addAttribute(`${book.title} · ${graceCollectionCopy.action}`, "aria-label")}><img class="grace-ebook-cover"${addAttribute(book.cover, "src")}${addAttribute(book.title, "alt")} loading="lazy"></a><div><h3>${book.title}</h3><p class="book-author">${lang === "th" ? "ผู้เขียน" : lang === "ko" ? "저자" : "Author"}: ${book.author}</p><p>${book.description}</p></div></section>`)}</div><a class="button grace-ebook-page-link"${addAttribute(graceEbooksUrl, "href")} target="_blank" rel="noopener noreferrer">${graceCollectionCopy.action} <span aria-hidden="true">↗</span></a></article><div class="free-book-recommendations free-book-recommendations-after-grace">${renderComponent($$result, "RecommendedSiteCard", $$RecommendedSiteCard, {
		"href": monergismUrl,
		"title": bookSites.monergismTitle,
		"description": bookSites.monergismDescription,
		"meta": bookSites.monergismMeta,
		"action": bookSites.monergismAction,
		"target": lang === "th" ? "_self" : "_blank",
		"showArrow": lang !== "th"
	})}</div><div class="classic-ebook-stack">${gospelPointingBook && renderTemplate`<article class="korean-book-card gospel-pointing-book-card classic-ebook-card" id="gospel-pointing-book"><div class="ebook-cover-column"><img class="korean-book-cover"${addAttribute(gospelPointingBook.cover, "src")}${addAttribute(gospelPointingBook.title, "alt")} loading="lazy"><div${addAttribute(["resource-action-row", { "book-inline-action-row": lang !== "en" }], "class:list")}><div class="book-downloads">${gospelPointingBook.downloads.map((download, index) => renderTemplate`<a${addAttribute(["button", {
		"download-button": !download.external,
		secondary: index > 0 || download.external
	}], "class:list")}${addAttribute(download.href, "href")}${addAttribute(download.external ? "_blank" : void 0, "target")}${addAttribute(download.external ? "noopener noreferrer" : void 0, "rel")}${addAttribute(download.external ? void 0 : true, "download")}>${download.label}${download.external ? " ↗" : ""}</a>`)}</div></div></div><div class="korean-book-copy"><p class="type-pill">${gospelPointingBook.badge}</p><h2>${gospelPointingBook.title}</h2><p class="korean-book-author">${gospelPointingBook.author}</p><p>${gospelPointingBook.description}</p>${gospelPointingBook.sourceLink && renderTemplate`<p class="book-text-source-link"><a${addAttribute(gospelPointingBook.sourceLink.href, "href")} target="_blank" rel="noopener noreferrer">${gospelPointingBook.sourceLink.label} <span aria-hidden="true">↗</span></a></p>`}${gospelPointingBook.notice && renderTemplate`<p class="book-distribution-notice">${gospelPointingBook.notice}</p>`}</div></article>`}${happinessBook && renderTemplate`<article class="korean-book-card gospel-pointing-book-card happiness-book-card classic-ebook-card" id="happiness-jc-ryle-book"><div class="ebook-cover-column"><img class="korean-book-cover"${addAttribute(happinessBook.cover, "src")}${addAttribute(happinessBook.title, "alt")} loading="lazy"><div${addAttribute(["resource-action-row", { "book-inline-action-row": lang !== "en" }], "class:list")}><div class="book-downloads">${happinessBook.downloads.map((download, index) => renderTemplate`<a${addAttribute(["button", {
		"download-button": !download.external,
		secondary: index > 0 || download.external
	}], "class:list")}${addAttribute(download.href, "href")}${addAttribute(download.external ? "_blank" : void 0, "target")}${addAttribute(download.external ? "noopener noreferrer" : void 0, "rel")}${addAttribute(download.external ? void 0 : true, "download")}>${download.label}${download.external ? " ↗" : ""}</a>`)}</div></div></div><div class="korean-book-copy"><p class="type-pill">${happinessBook.badge}</p><h2>${happinessBook.title}</h2><p class="korean-book-author">${happinessBook.author}</p><p>${happinessBook.description}</p>${happinessBook.sourceLink && renderTemplate`<p class="book-text-source-link"><a${addAttribute(happinessBook.sourceLink.href, "href")} target="_blank" rel="noopener noreferrer">${happinessBook.sourceLink.label} <span aria-hidden="true">↗</span></a></p>`}${happinessBook.notice && renderTemplate`<p class="book-distribution-notice">${happinessBook.notice}</p>`}</div></article>`}${godsWayOfPeaceBook && renderTemplate`<article class="korean-book-card gospel-pointing-book-card gods-way-of-peace-book-card classic-ebook-card" id="gods-way-of-peace-book"><div class="ebook-cover-column"><img class="korean-book-cover"${addAttribute(godsWayOfPeaceBook.cover, "src")}${addAttribute(godsWayOfPeaceBook.title, "alt")} loading="lazy"><div${addAttribute(["resource-action-row", { "book-inline-action-row": lang !== "en" }], "class:list")}><div class="book-downloads">${godsWayOfPeaceBook.downloads.map((download, index) => renderTemplate`<a${addAttribute(["button", {
		"download-button": !download.external,
		secondary: index > 0 || download.external
	}], "class:list")}${addAttribute(download.href, "href")}${addAttribute(download.external ? "_blank" : void 0, "target")}${addAttribute(download.external ? "noopener noreferrer" : void 0, "rel")}${addAttribute(download.external ? void 0 : true, "download")}>${download.label}${download.external ? " ↗" : ""}</a>`)}</div></div></div><div class="korean-book-copy"><p class="type-pill">${godsWayOfPeaceBook.badge}</p><h2>${godsWayOfPeaceBook.title}</h2><p class="korean-book-author">${godsWayOfPeaceBook.author}</p><p>${godsWayOfPeaceBook.description}</p>${godsWayOfPeaceBook.sourceLink && renderTemplate`<p class="book-text-source-link"><a${addAttribute(godsWayOfPeaceBook.sourceLink.href, "href")} target="_blank" rel="noopener noreferrer">${godsWayOfPeaceBook.sourceLink.label} <span aria-hidden="true">↗</span></a></p>`}${godsWayOfPeaceBook.notice && renderTemplate`<p class="book-distribution-notice">${godsWayOfPeaceBook.notice}</p>`}</div></article>`}</div><section class="yongjin-books-collection" id="yongjin-books" aria-labelledby="yongjin-books-heading"><div class="yongjin-books-heading"><div class="yongjin-books-title-copy"><p class="type-pill">${lang === "th" ? "God-Pleasing Books" : lang === "ko" ? "God-Pleasing Books" : "God-Pleasing Books"}</p><h2 id="yongjin-books-heading">${yongjinBooksTitle}</h2></div>${renderComponent($$result, "ShareButtons", $$ShareButtons, {
		"lang": lang,
		"url": `/${lang}/library/?type=book#yongjin-books`,
		"title": yongjinBooksTitle
	})}</div></section><div class="yongjin-book-list" aria-labelledby="yongjin-books-heading">${bible66Book && renderTemplate`<article class="korean-book-card bible-66-book-card" id="bible-66-book"><div class="ebook-cover-column"><img class="korean-book-cover" src="/images/bible-66-commentary-book-cover-card.jpg?v=20260812"${addAttribute(bible66Book.title, "alt")} loading="lazy"><div class="resource-action-row"><div class="book-downloads"><a class="button download-button bible-66-book-download"${addAttribute(bible66Book.href ?? "/downloads/bible-66-commentary-th.pdf", "href")} download>${lang === "th" ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`PDF <span class="download-page-count">(1,705 หน้า)</span>` })}` : bible66Book.download}</a><a class="button secondary"${addAttribute(lang === "ko" ? "https://bible-66-commentary.pages.dev" : "https://bible-66-commentary.pages.dev/?lang=th", "href")} target="_blank" rel="noopener noreferrer">${bible66Book.online} ↗</a></div></div></div><div class="korean-book-copy"><p class="type-pill">${bible66Book.badge}</p><h2>${bible66Book.title}</h2><p class="korean-book-author">${bible66Book.author}</p><p>${bible66Book.description}</p>${bible66Book.notice && renderTemplate`<p class="book-distribution-notice">${bible66Book.notice}</p>`}${bible66Book.originalRequest && renderTemplate`<p class="book-original-request">${bible66Book.originalRequest}</p>`}</div></article>`}${revelationCommentaryBook && renderTemplate`<article class="korean-book-card bible-66-book-card" id="revelation-commentary-book"><div class="ebook-cover-column"><img class="korean-book-cover"${addAttribute(revelationCommentaryBook.cover, "src")}${addAttribute(revelationCommentaryBook.title, "alt")} loading="lazy"><div class="resource-action-row"><div class="book-downloads">${revelationCommentaryBook.downloads.map((download, index) => renderTemplate`<a${addAttribute(["button", {
		"download-button": !download.external,
		secondary: index > 0 || download.external
	}], "class:list")}${addAttribute(download.href, "href")}${addAttribute(download.external ? "_blank" : void 0, "target")}${addAttribute(download.external ? "noopener noreferrer" : void 0, "rel")}${addAttribute(download.external ? void 0 : true, "download")}>${download.label}${download.external ? " ↗" : ""}</a>`)}</div></div></div><div class="korean-book-copy"><p class="type-pill">${revelationCommentaryBook.badge}</p><h2>${revelationCommentaryBook.title}</h2><p class="korean-book-author">${revelationCommentaryBook.author}</p><p>${revelationCommentaryBook.description}</p>${revelationCommentaryBook.notice && renderTemplate`<p class="book-distribution-notice">${revelationCommentaryBook.notice}</p>`}</div></article>`}<div class="yongjin-book-trio">${bibleOverviewBook && renderTemplate`<article class="korean-book-card gospel-pointing-book-card booklet-series-book-card classic-ebook-card full-width-ebook-card" id="bible-overview-book"><div class="ebook-cover-column"><img class="korean-book-cover"${addAttribute(bibleOverviewBook.cover, "src")}${addAttribute(bibleOverviewBook.title, "alt")} loading="lazy"><div class="resource-action-row book-inline-action-row"><div class="book-downloads">${bibleOverviewBook.downloads.map((download, index) => renderTemplate`<a${addAttribute(["button", {
		"download-button": !download.external,
		secondary: index > 0 || download.external
	}], "class:list")}${addAttribute(download.href, "href")}${addAttribute(download.external ? "_blank" : void 0, "target")}${addAttribute(download.external ? "noopener noreferrer" : void 0, "rel")}${addAttribute(download.external ? void 0 : true, "download")}>${download.label}${download.external ? " ↗" : ""}</a>`)}</div></div></div><div class="korean-book-copy"><p class="type-pill">${bibleOverviewBook.badge}</p><h2>${bibleOverviewBook.title}</h2><p class="korean-book-author">${bibleOverviewBook.author}</p><p>${bibleOverviewBook.description}</p>${bibleOverviewBook.notice && renderTemplate`<p class="book-distribution-notice">${bibleOverviewBook.notice}</p>`}</div></article>`}${whatIsTheGospelBook && renderTemplate`<article class="korean-book-card gospel-pointing-book-card booklet-series-book-card classic-ebook-card full-width-ebook-card" id="what-is-the-gospel-booklet-series"><div class="ebook-cover-column"><img class="korean-book-cover"${addAttribute(whatIsTheGospelBook.cover, "src")}${addAttribute(whatIsTheGospelBook.title, "alt")} loading="lazy"><div class="resource-action-row book-inline-action-row"><div class="book-downloads">${whatIsTheGospelBook.downloads.map((download, index) => renderTemplate`<a${addAttribute(["button", {
		"download-button": !download.external,
		secondary: index > 0 || download.external
	}], "class:list")}${addAttribute(download.href, "href")}${addAttribute(download.external ? "_blank" : void 0, "target")}${addAttribute(download.external ? "noopener noreferrer" : void 0, "rel")}${addAttribute(download.external ? void 0 : true, "download")}>${download.label}${download.external ? " ↗" : ""}</a>`)}</div></div></div><div class="korean-book-copy"><p class="type-pill">${whatIsTheGospelBook.badge}</p><h2>${whatIsTheGospelBook.title}</h2><p class="korean-book-author">${whatIsTheGospelBook.author}</p><p>${whatIsTheGospelBook.description}</p>${whatIsTheGospelBook.notice && renderTemplate`<p class="book-distribution-notice">${whatIsTheGospelBook.notice}</p>`}</div></article>`}${faithBasicsBook && renderTemplate`<article class="korean-book-card gospel-pointing-book-card faith-basics-book-card classic-ebook-card full-width-ebook-card" id="faith-basics-36-book"><div class="ebook-cover-column"><img class="korean-book-cover"${addAttribute(faithBasicsBook.cover, "src")}${addAttribute(faithBasicsBook.title, "alt")} loading="lazy"><div class="resource-action-row"><div class="book-downloads">${faithBasicsBook.downloads.map((download, index) => renderTemplate`<a${addAttribute(["button", {
		"download-button": !download.external,
		secondary: index > 0 || download.external
	}], "class:list")}${addAttribute(download.href, "href")}${addAttribute(download.external ? "_blank" : void 0, "target")}${addAttribute(download.external ? "noopener noreferrer" : void 0, "rel")}${addAttribute(download.external ? void 0 : true, "download")}>${download.label}${download.external ? " ↗" : ""}</a>`)}</div></div></div><div class="korean-book-copy"><p class="type-pill">${faithBasicsBook.badge}</p><h2>${faithBasicsBook.title}</h2><p class="korean-book-author">${faithBasicsBook.author}</p><p>${faithBasicsBook.description}</p>${faithBasicsBook.notice && renderTemplate`<p class="book-distribution-notice">${faithBasicsBook.notice}</p>`}</div></article>`}</div>${missionaryBook && renderTemplate`<article class="korean-book-card" id="missionary-book"><div class="ebook-cover-column"><img class="korean-book-cover" src="/images/missionary-glory-book-3d-card.jpg?v=20260812"${addAttribute(missionaryBook.title, "alt")} loading="lazy"><div class="resource-action-row"><div class="book-downloads missionary-book-actions">${missionaryBook.downloads.map((download, index) => renderTemplate`<a${addAttribute([
		"button",
		"download-button",
		{ secondary: index > 0 }
	], "class:list")}${addAttribute(download.href, "href")} download>${download.label}</a>`)}</div></div></div><div class="korean-book-copy"><p class="type-pill">${missionaryBook.badge}</p><h2 id="missionary-book-heading">${missionaryBook.title}</h2><p class="korean-book-author">${missionaryBook.author}</p><p>${missionaryBook.description}</p>${missionaryBook.purchaseHref && renderTemplate`<p class="book-text-purchase-link"><a${addAttribute(missionaryBook.purchaseHref, "href")} target="_blank" rel="noopener noreferrer">${missionaryBook.purchaseLabel} <span aria-hidden="true">↗</span></a></p>`}</div></article>`}</div></section>`}${type === "pdf" && renderTemplate`<section class="uploaded-pdf-section"${addAttribute(a.pdf, "aria-label")}><div class="pdf-resource-group pdf-resource-group-tracts"><header class="pdf-resource-group-heading"><h2>${pdfGroups.tracts}</h2></header><article class="tract-preview-card" id="quest-for-joy" aria-labelledby="quest-for-joy-title"><div class="tract-preview-copy"><p class="type-pill">${quest.badge}</p><h2 id="quest-for-joy-title">${quest.title}</h2><p class="tract-author">${quest.author}</p><p>${quest.description}</p><div class="resource-action-row"><div class="tract-actions"><a class="button download-button" href="/downloads/quest-for-joy-th.pdf" download>${quest.download}</a>${lang !== "th" && renderTemplate`<a class="button secondary" href="https://www.desiringgod.org/articles/quest-for-joy?lang=th" target="_blank" rel="noopener noreferrer">${quest.source} ↗</a>`}</div>${renderComponent($$result, "ShareButtons", $$ShareButtons, {
		"lang": lang,
		"url": "https://www.desiringgod.org/articles/quest-for-joy?lang=th",
		"title": quest.title
	})}</div></div><div class="tract-thumbnail-area"><p>${quest.preview}</p><div class="tract-thumbnails">${[1, 2].map((pageNumber) => renderTemplate`<button class="tract-thumbnail" type="button"${addAttribute(pageNumber - 1, "data-tract-page")}${addAttribute(`${quest.page} ${pageNumber}`, "aria-label")}><img${addAttribute(`/previews/quest-for-joy/thumbs/page-${pageNumber}.jpg`, "src")}${addAttribute(`${quest.title} — ${quest.page} ${pageNumber}`, "alt")} loading="lazy" decoding="async"><span>${quest.page} ${pageNumber}</span></button>`)}</div></div></article><dialog class="pdf-preview-dialog" data-pdf-preview${addAttribute(quest.title, "aria-label")}><button class="pdf-preview-close" type="button" data-pdf-close${addAttribute(quest.close, "aria-label")}>×</button><div class="pdf-preview-stage"><img data-pdf-preview-image${addAttribute(emptyPreviewImage, "src")}${addAttribute(`${quest.title} — ${quest.page} 1`, "alt")} loading="lazy" decoding="async"></div><div class="pdf-preview-controls"><button class="button secondary" type="button" data-pdf-previous>← ${quest.previous}</button><strong data-pdf-page-label>${quest.page} 1 / 2</strong><button class="button secondary" type="button" data-pdf-next>${quest.next} →</button></div></dialog><script>(function(){${defineScriptVars({
		questTitle: quest.title,
		pageLabel: quest.page
	})}
          (() => {
            const dialog = document.querySelector("[data-pdf-preview]");
            const image = document.querySelector("[data-pdf-preview-image]");
            const label = document.querySelector("[data-pdf-page-label]");
            const pages = [
              "/previews/quest-for-joy/page-1.png",
              "/previews/quest-for-joy/page-2.png"
            ];
            if (!(dialog instanceof HTMLDialogElement) || !(image instanceof HTMLImageElement)) return;
            let currentPage = 0;
            const showPage = (page) => {
              currentPage = (page + pages.length) % pages.length;
              image.src = pages[currentPage];
              image.alt = \`\${questTitle} — \${pageLabel} \${currentPage + 1}\`;
              if (label) label.textContent = \`\${pageLabel} \${currentPage + 1} / \${pages.length}\`;
            };
            document.querySelectorAll("[data-tract-page]").forEach((button) => {
              button.addEventListener("click", () => {
                showPage(Number(button.getAttribute("data-tract-page") || 0));
                dialog.showModal();
              });
            });
            document.querySelector("[data-pdf-previous]")?.addEventListener("click", () => showPage(currentPage - 1));
            document.querySelector("[data-pdf-next]")?.addEventListener("click", () => showPage(currentPage + 1));
            document.querySelector("[data-pdf-close]")?.addEventListener("click", () => dialog.close());
            dialog.addEventListener("click", (event) => {
              if (event.target === dialog) dialog.close();
            });
            dialog.addEventListener("keydown", (event) => {
              if (event.key === "ArrowLeft") showPage(currentPage - 1);
              if (event.key === "ArrowRight") showPage(currentPage + 1);
            });
          })();
        })();<\/script><div class="uploaded-pdf-grid"><article class="uploaded-pdf-card true-happiness-tract-card" id="true-happiness-tract"><p class="type-pill">${trueHappinessTract.badge}</p><h2>${trueHappinessTract.title}</h2><img class="uploaded-pdf-cover" src="/images/true-happiness-tract-cover.png"${addAttribute(trueHappinessTract.title, "alt")} loading="lazy"><p>${trueHappinessTract.description}</p>${trueHappinessTract.note && renderTemplate`<p class="remote-pdf-meta">${trueHappinessTract.note}</p>`}<div class="resource-action-row"><div class="uploaded-pdf-actions">${trueHappinessTract.downloads.map((download) => renderTemplate`<a class="button download-button"${addAttribute(download.href, "href")} download>${download.action}</a>`)}</div>${renderComponent($$result, "ShareButtons", $$ShareButtons, {
		"lang": lang,
		"url": trueHappinessTract.downloads[0]?.href ?? `/${lang}/library/?type=pdf#true-happiness-tract`,
		"title": trueHappinessTract.title
	})}</div></article><article class="uploaded-pdf-card why-jesus-card" id="why-jesus"><p class="type-pill">${whyJesusPdf.badge}</p><h2>${whyJesusPdf.title}</h2><button class="pdf-cover-thumb why-jesus-cover-thumb" type="button" data-why-jesus-page="0"${addAttribute(`${whyJesusPdf.title} ${quest.preview}`, "aria-label")}><img${addAttribute(whyJesusCoverThumb, "src")}${addAttribute(`${whyJesusPdf.title} cover`, "alt")} loading="lazy" decoding="async"></button><p class="why-jesus-preview-hint">${whyJesusPdf.preview}</p><p>${whyJesusPdf.description}</p>${"note" in whyJesusPdf && whyJesusPdf.note && renderTemplate`<p class="remote-pdf-meta">${whyJesusPdf.note}</p>`}<div class="resource-action-row"><div class="uploaded-pdf-actions">${whyJesusPdf.downloads.map((download) => renderTemplate`<a class="button download-button"${addAttribute(download.href, "href")} download>${download.action}</a>`)}</div>${renderComponent($$result, "ShareButtons", $$ShareButtons, {
		"lang": lang,
		"url": whyJesusPdf.downloads[0]?.href ?? `/${lang}/library/?type=pdf#why-jesus`,
		"title": whyJesusPdf.title
	})}</div></article><article class="uploaded-pdf-card children-gospel-tract-card" id="children-gospel-tract"><p class="type-pill">${childrenGospelTract.badge}</p><h2>${childrenGospelTract.title}</h2><a class="children-gospel-card-link"${addAttribute(`/${lang}/library/children-gospel-tract/`, "href")}${addAttribute(`${childrenGospelTract.title} — ${childrenGospelTract.action}`, "aria-label")}><img class="uploaded-pdf-cover children-gospel-cover" src="/previews/children-gospel-tract/web/page-01.jpg"${addAttribute(childrenGospelTract.coverAlt, "alt")} loading="lazy" decoding="async"></a><a class="button secondary children-gospel-action"${addAttribute(`/${lang}/library/children-gospel-tract/`, "href")}>${childrenGospelTract.action} ↗</a></article></div></div><div class="pdf-resource-group pdf-resource-group-training"><header class="pdf-resource-group-heading"><h2>${pdfGroups.training}</h2></header><div class="uploaded-pdf-grid"><article class="uploaded-pdf-card scripture-memory-card" id="scripture-memory-365"><p class="type-pill">${scriptureMemoryPdf.badge}</p><h2>${scriptureMemoryPdf.title}</h2><img class="uploaded-pdf-cover" src="/images/scripture-memory-365-th-cover-001.png"${addAttribute(scriptureMemoryPdf.title, "alt")} loading="lazy"><p>${scriptureMemoryPdf.description}</p><p class="copyright-warning">${scriptureMemoryPdf.copyright}</p><div class="resource-action-row"><div class="uploaded-pdf-actions"><a class="button download-button" href="/downloads/scripture-memory-365-th.pdf" download>${scriptureMemoryPdf.download}</a><a class="button secondary scripture-memory-line-button" href="https://line.me/ti/p/~cgntv-thai" target="_blank" rel="noopener noreferrer">${scriptureMemoryPdf.contact} ↗</a></div>${renderComponent($$result, "ShareButtons", $$ShareButtons, {
		"lang": lang,
		"url": "/downloads/scripture-memory-365-th.pdf",
		"title": scriptureMemoryPdf.title
	})}</div></article><article class="uploaded-pdf-card coverage-vision-card" id="jesus-coverage-vision-training"><p class="type-pill">${coverageVisionResource.badge}</p><h2>${coverageVisionResource.title}</h2><a class="pdf-cover-thumb external-pdf-cover-link"${addAttribute(coverageVisionDetailUrl, "href")} target="_blank" rel="noopener noreferrer"${addAttribute(`${coverageVisionResource.title} ${coverageVisionResource.open}`, "aria-label")}><img src="/images/jesus-coverage-vision-training-cover.png"${addAttribute(`${coverageVisionResource.title} cover`, "alt")} loading="lazy"></a><p>${coverageVisionResource.description}</p><div class="resource-action-row"><div class="uploaded-pdf-actions"><a class="button secondary"${addAttribute(coverageVisionDetailUrl, "href")} target="_blank" rel="noopener noreferrer">${coverageVisionResource.open} ↗</a><a class="button secondary"${addAttribute(coverageVisionToolkitUrl, "href")} target="_blank" rel="noopener noreferrer">${coverageVisionResource.toolkit} ↗</a></div>${renderComponent($$result, "ShareButtons", $$ShareButtons, {
		"lang": lang,
		"url": coverageVisionDetailUrl,
		"title": coverageVisionResource.title
	})}</div></article></div></div><div class="pdf-resource-group pdf-resource-group-doctrine"><header class="pdf-resource-group-heading"><h2>${pdfGroups.doctrine}</h2></header><div class="uploaded-pdf-grid"><article class="uploaded-pdf-card cambridge-declaration-card" id="cambridge-declaration"><p class="type-pill">${cambridgeDeclaration.badge}</p><h2>${cambridgeDeclaration.title}</h2><p>${cambridgeDeclaration.description}</p><p class="source-attribution">${cambridgeDeclaration.attribution}</p><div class="resource-action-row"><div class="uploaded-pdf-actions"><a class="button secondary"${addAttribute(cambridgeDeclaration.pdf, "href")} data-pdf-preview${addAttribute(cambridgeDeclaration.title, "data-pdf-preview-title")}${addAttribute(cambridgeDeclaration.pdf.split("/").pop(), "download")}>${cambridgeDeclaration.preview} ↗</a></div>${renderComponent($$result, "ShareButtons", $$ShareButtons, {
		"lang": lang,
		"url": cambridgeDeclaration.pdf,
		"title": cambridgeDeclaration.title
	})}</div></article><article class="uploaded-pdf-card new-city-catechism-card" id="new-city-catechism"><p class="type-pill">${uploadedPdf.badge}</p><h2>${uploadedPdf.title}</h2><p>${uploadedPdf.description}</p><p class="copyright-warning">${uploadedPdf.copyright}</p><div class="resource-action-row"><div class="uploaded-pdf-actions">${uploadedPdf.downloads.map((download) => renderTemplate`<a class="button download-button"${addAttribute(download.href, "href")} download>${download.action}</a>`)}</div>${renderComponent($$result, "ShareButtons", $$ShareButtons, {
		"lang": lang,
		"url": uploadedPdf.downloads[0]?.href ?? `/${lang}/library/?type=pdf#new-city-catechism`,
		"title": uploadedPdf.title
	})}</div></article><article class="uploaded-pdf-card chicago-statement-card" id="chicago-statement"><p class="type-pill">${chicagoStatement.badge}</p><img class="uploaded-pdf-cover"${addAttribute(chicagoStatement.cover, "src")}${addAttribute(chicagoStatement.title, "alt")} loading="lazy" decoding="async"><h2>${chicagoStatement.title}</h2><p>${chicagoStatement.description}</p><p class="source-attribution">${chicagoStatement.attribution}</p><div class="resource-action-row"><div class="uploaded-pdf-actions"><a class="button secondary"${addAttribute(chicagoStatement.pdf, "href")} data-pdf-preview${addAttribute(chicagoStatement.title, "data-pdf-preview-title")}${addAttribute(chicagoStatement.pdf.split("/").pop(), "download")}>${chicagoStatement.preview} ↗</a></div>${renderComponent($$result, "ShareButtons", $$ShareButtons, {
		"lang": lang,
		"url": chicagoStatement.pdf,
		"title": chicagoStatement.title
	})}</div></article><article class="uploaded-pdf-card doctrines-of-grace-pdf-card" id="doctrines-of-grace-pdf"><p class="type-pill">${doctrinesOfGracePdfCard.badge}</p><h2>${doctrinesOfGracePdfCard.title}</h2><img class="uploaded-pdf-cover"${addAttribute(doctrinesOfGracePdfCard.cover, "src")}${addAttribute(doctrinesOfGracePdfCard.title, "alt")} loading="lazy"><p>${doctrinesOfGracePdfCard.description}</p><div class="resource-action-row"><div class="uploaded-pdf-actions">${doctrinesOfGracePdfCard.downloads.map((download) => renderTemplate`<a class="button download-button"${addAttribute(download.href, "href")} download>${download.action}</a>`)}</div>${renderComponent($$result, "ShareButtons", $$ShareButtons, {
		"lang": lang,
		"url": doctrinesOfGracePdfCard.downloads[0]?.href ?? `/${lang}/library/?type=pdf#doctrines-of-grace-pdf`,
		"title": doctrinesOfGracePdfCard.title
	})}</div></article><article class="uploaded-pdf-card westminster-standards-card" id="westminster-standards"><p class="type-pill">${westminster.badge}</p><h2>${westminster.title}</h2><p>${westminster.intro}</p><p class="source-attribution">${westminster.translationNote}</p>${lang === "en" ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<p class="remote-site-note">${westminster.source}</p><div class="resource-action-row"><div class="uploaded-pdf-actions"><a class="button secondary" href="https://mail.opc.org/confessions.html" target="_blank" rel="noopener noreferrer">${westminster.opcAction} ↗</a></div>${renderComponent($$result, "ShareButtons", $$ShareButtons, {
		"lang": lang,
		"url": westminsterShareUrl,
		"title": westminster.title
	})}</div>` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<div class="westminster-doc-grid">${westminsterDocs.map((doc) => renderTemplate`<div class="westminster-doc-card"${addAttribute(`westminster-${doc.key}`, "id")}><img class="uploaded-pdf-cover"${addAttribute(doc.cover, "src")}${addAttribute(doc.title, "alt")} loading="lazy"><h3>${doc.title}</h3><div class="uploaded-pdf-actions"><a class="button download-button"${addAttribute(doc.thaiHref, "href")} download>${westminster.thaiDownload}</a><a class="button secondary download-button"${addAttribute(doc.koHref, "href")} download>${westminster.koLiteralDownload}</a></div></div>`)}</div><div class="resource-action-row westminster-share-row">${renderComponent($$result, "ShareButtons", $$ShareButtons, {
		"lang": lang,
		"url": westminsterShareUrl,
		"title": westminster.title
	})}</div><p class="source-attribution"><a href="https://mail.opc.org/confessions.html" target="_blank" rel="noopener noreferrer">${westminster.source} ↗</a></p>` })}`}</article></div></div><a class="pdf-site-link-card" href="https://re-confessions.pages.dev/" target="_blank" rel="noopener noreferrer"${addAttribute(reformedConfessionsPdfLink.label, "aria-label")}><div><p class="type-pill">${lang === "ko" ? "추천 사이트 새창으로 열기 ↗" : lang === "th" ? "เปิดเว็บไซต์แนะนำในหน้าต่างใหม่ ↗" : "Open recommended site in a new tab ↗"}</p><h2>${reformedConfessionsPdfLink.label}</h2><p>${reformedConfessionsPdfLink.description}</p></div></a><dialog class="pdf-preview-dialog" data-why-jesus-preview${addAttribute(whyJesusPdf.title, "aria-label")}><button class="pdf-preview-close" type="button" data-why-jesus-close${addAttribute(quest.close, "aria-label")}>×</button><div class="pdf-preview-stage"><img data-why-jesus-preview-image${addAttribute(emptyPreviewImage, "src")}${addAttribute(`${whyJesusPdf.title} — ${quest.page} 1`, "alt")} loading="lazy" decoding="async"></div><div class="pdf-preview-controls"><button class="button secondary" type="button" data-why-jesus-previous>← ${quest.previous}</button><strong data-why-jesus-page-label>${quest.page} 1 / ${whyJesusPdf.previewPages.length}</strong><button class="button secondary" type="button" data-why-jesus-next>${quest.next} →</button></div></dialog><script>(function(){${defineScriptVars({
		whyJesusTitle: whyJesusPdf.title,
		whyJesusPages: whyJesusPdf.previewPages,
		pageLabel: quest.page
	})}
          (() => {
            const dialog = document.querySelector("[data-why-jesus-preview]");
            const image = document.querySelector("[data-why-jesus-preview-image]");
            const label = document.querySelector("[data-why-jesus-page-label]");
            const pages = whyJesusPages;
            if (!(dialog instanceof HTMLDialogElement) || !(image instanceof HTMLImageElement) || !Array.isArray(pages) || !pages.length) return;
            let currentPage = 0;
            const showPage = (page) => {
              currentPage = (page + pages.length) % pages.length;
              image.src = pages[currentPage];
              image.alt = \`\${whyJesusTitle} — \${pageLabel} \${currentPage + 1}\`;
              if (label) label.textContent = \`\${pageLabel} \${currentPage + 1} / \${pages.length}\`;
            };
            document.querySelectorAll("[data-why-jesus-page]").forEach((button) => {
              button.addEventListener("click", () => {
                showPage(Number(button.getAttribute("data-why-jesus-page") || 0));
                dialog.showModal();
              });
            });
            document.querySelector("[data-why-jesus-previous]")?.addEventListener("click", () => showPage(currentPage - 1));
            document.querySelector("[data-why-jesus-next]")?.addEventListener("click", () => showPage(currentPage + 1));
            document.querySelector("[data-why-jesus-close]")?.addEventListener("click", () => dialog.close());
            dialog.addEventListener("click", (event) => {
              if (event.target === dialog) dialog.close();
            });
            dialog.addEventListener("keydown", (event) => {
              if (event.key === "ArrowLeft") showPage(currentPage - 1);
              if (event.key === "ArrowRight") showPage(currentPage + 1);
            });
          })();
        })();<\/script></section>`}${type === "course" && renderTemplate`<section class="course-playlist-section" aria-labelledby="course-playlist-heading"><h2 id="course-playlist-heading">${playlists.heading}</h2><div class="course-playlist-grid">${playlists.courses.map((course, index) => renderTemplate`<article class="course-playlist-card"${addAttribute(`library-course-${index + 1}`, "id")}><p class="type-pill">${playlists.source}</p><h3>${course.title}</h3><p>${course.description}</p><a class="button"${addAttribute(course.url, "href")} target="_blank" rel="noopener noreferrer">${playlists.action} <span aria-hidden="true">↗</span></a>${renderComponent($$result, "ShareButtons", $$ShareButtons, {
		"lang": lang,
		"url": course.url,
		"title": course.title
	})}</article>`)}</div></section>`}${type !== "devotional" && type !== "video" && type !== "audiobook" && visibleResources.length > 0 && renderTemplate`<div class="resource-grid">${visibleResources.map((resource) => renderTemplate`${renderComponent($$result, "ResourceCard", $$ResourceCard, {
		"resource": resource,
		"lang": lang
	})}`)}</div>`}${type === "article" && renderTemplate`<section class="bonar-series-section" id="horatius-bonar-tracts" aria-labelledby="bonar-series-heading"><div class="bonar-series-header"><p class="type-pill">${bonarSeries.eyebrow}</p><h2 id="bonar-series-heading">${bonarSeries.title}</h2><p>${bonarSeries.intro}</p>${bonarSeries.author && renderTemplate`<p class="bonar-series-author">${bonarSeries.author}</p>`}</div><article class="bonar-part-card bonar-single-list-card"><ol class="bonar-tract-list">${bonarTracts.map((tract) => renderTemplate`<li><span class="bonar-tract-number">${tract.no - 1}</span><span>${bonarArticleSlugs[tract.no] ? renderTemplate`<a class="bonar-tract-link"${addAttribute(`/${lang}/library/${bonarArticleSlugs[tract.no]}/`, "href")}><strong>${bonarTitleFor(tract)}</strong></a>` : renderTemplate`<strong>${bonarTitleFor(tract)}</strong>`}${bonarSubtitleFor(tract) && renderTemplate`<small>${bonarSubtitleFor(tract)}</small>`}</span></li>`)}</ol></article></section>`}${type === "video" && renderTemplate`<section class="video-playlist-hub"${addAttribute(a.video, "aria-label")}><div class="video-playlist-list">${videoPlaylists.map((playlist, index) => {
		const featuredVideoId = "video" in playlist ? playlist.video : "";
		const showPlaylistFirst = "showPlaylistFirst" in playlist && playlist.showPlaylistFirst;
		const hidePrimaryAction = "hidePrimaryAction" in playlist && playlist.hidePrimaryAction;
		const youtubeUrl = featuredVideoId && !showPlaylistFirst ? `https://www.youtube.com/watch?v=${featuredVideoId}` : `https://www.youtube.com/playlist?list=${playlist.list}`;
		const embedUrl = showPlaylistFirst ? `https://www.youtube-nocookie.com/embed/videoseries?list=${playlist.list}&rel=0` : featuredVideoId ? `https://www.youtube-nocookie.com/embed/${featuredVideoId}?rel=0` : `https://www.youtube.com/embed?listType=playlist&list=${playlist.list}&enablejsapi=1&origin=${encodeURIComponent(Astro.url.origin)}`;
		return renderTemplate`<article class="video-playlist-card"${addAttribute(playlist.id, "id")}><div class="video-playlist-heading"><p class="type-pill">YouTube Playlist</p><h2>${playlist.title}</h2><p>${playlist.description}</p></div><div class="video-frame"><iframe${addAttribute(`video-playlist-${playlist.id}`, "id")}${addAttribute({ "random-video-resource-player": !featuredVideoId && !showPlaylistFirst }, "class:list")}${addAttribute(!featuredVideoId && !showPlaylistFirst ? playlist.list : void 0, "data-playlist")}${addAttribute(embedUrl, "src")}${addAttribute(playlist.title, "title")}${addAttribute(index === 0 ? "eager" : "lazy", "loading")} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div><div class="video-action-row">${!hidePrimaryAction && renderTemplate`<a class="button secondary playlist-link-button video-playlist-open"${addAttribute(youtubeUrl, "href")} target="_blank" rel="noopener noreferrer"${addAttribute(!featuredVideoId ? true : void 0, "data-video-playlist-open")}>${playlist.actionLabel ?? videoPlaylistAction} <span class="playlist-external-mark" aria-hidden="true">↗</span></a>`}${"extraLinks" in playlist && playlist.extraLinks?.map((link) => renderTemplate`<a class="button secondary playlist-link-button"${addAttribute(link.href, "href")} target="_blank" rel="noopener noreferrer">${link.label} <span class="playlist-external-mark" aria-hidden="true">↗</span></a>`)}${renderComponent($$result, "ShareButtons", $$ShareButtons, {
			"lang": lang,
			"url": youtubeUrl,
			"title": playlist.title
		})}</div></article>`;
	})}</div></section>`}${type === "audiobook" && renderTemplate`<section class="video-playlist-hub audiobook-playlist-hub"${addAttribute(a.audiobook, "aria-label")}><div class="video-playlist-list">${audiobookPlaylists.map((playlist, index) => renderTemplate`<article class="video-playlist-card audiobook-playlist-card"${addAttribute(playlist.id, "id")}><div class="video-playlist-heading"><p class="type-pill">YouTube Audiobook</p><h2>${playlist.title}</h2><p>${playlist.description}</p></div><div class="video-frame"><iframe${addAttribute(`audiobook-playlist-${playlist.id}`, "id")}${addAttribute({ "random-video-resource-player": !playlist.showLatest }, "class:list")}${addAttribute(playlist.list, "data-playlist")}${addAttribute(`https://www.youtube.com/embed?listType=playlist&list=${playlist.list}&enablejsapi=1&origin=${encodeURIComponent(Astro.url.origin)}`, "src")}${addAttribute(playlist.title, "title")}${addAttribute(index === 0 ? "eager" : "lazy", "loading")} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div><div class="video-action-row"><a class="button secondary playlist-link-button video-playlist-open"${addAttribute(`https://www.youtube.com/playlist?list=${playlist.list}`, "href")} target="_blank" rel="noopener noreferrer" data-video-playlist-open>${playlist.actionLabel} <span class="playlist-external-mark" aria-hidden="true">↗</span></a>${"extraLinks" in playlist && playlist.extraLinks?.map((link) => renderTemplate`<a class="button secondary playlist-link-button"${addAttribute(link.href, "href")} target="_blank" rel="noopener noreferrer">${link.label} <span class="playlist-external-mark" aria-hidden="true">↗</span></a>`)}${lang === "ko" && playlist.id === "god-pleasing-booklet-series-thai-audio" && renderTemplate`<a class="button secondary playlist-link-button" href="/th/library/?type=audiobook#god-pleasing-booklet-series-thai-audio">태국어로 듣기</a>`}${!("hideShareButtons" in playlist && playlist.hideShareButtons) && renderTemplate`${renderComponent($$result, "ShareButtons", $$ShareButtons, {
		"lang": lang,
		"url": `https://www.youtube.com/playlist?list=${playlist.list}`,
		"title": playlist.title
	})}`}</div></article>`)}</div></section>`}</section>${(type === "video" || type === "audiobook") && renderTemplate`<script>
      (() => {
        const frames = Array.from(document.querySelectorAll(".random-video-resource-player[data-playlist]"));
        if (!frames.length) return;

        const randomizePlaylist = (player, playlistId, attempt = 0) => {
          const videos = player.getPlaylist?.() ?? [];
          if (videos.length) {
            const randomIndex = Math.floor(Math.random() * videos.length);
            player.cuePlaylist({ list: playlistId, listType: "playlist", index: randomIndex, startSeconds: 0 });
            const selectedVideoId = videos[randomIndex];
            const openLink = player.getIframe?.()?.closest("article")?.querySelector("[data-video-playlist-open]");
            if (openLink instanceof HTMLAnchorElement && selectedVideoId) {
              openLink.href = \`https://www.youtube.com/watch?v=\${selectedVideoId}&list=\${playlistId}&index=\${randomIndex + 1}\`;
            }
            return;
          }
          if (attempt < 12) window.setTimeout(() => randomizePlaylist(player, playlistId, attempt + 1), 250);
        };

        const initializePlayers = () => {
          frames.forEach((frame) => {
            if (!(frame instanceof HTMLIFrameElement) || frame.dataset.randomized === "true") return;
            frame.dataset.randomized = "true";
            const playlistId = frame.dataset.playlist;
            if (!playlistId) return;
            new window.YT.Player(frame, { events: { onReady: (event) => randomizePlaylist(event.target, playlistId) } });
          });
        };

        if (window.YT?.Player) initializePlayers();
        else {
          const previousReady = window.onYouTubeIframeAPIReady;
          window.onYouTubeIframeAPIReady = () => {
            if (typeof previousReady === "function") previousReady();
            initializePlayers();
          };
          if (!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) {
            const apiScript = document.createElement("script");
            apiScript.src = "https://www.youtube.com/iframe_api";
            document.head.appendChild(apiScript);
          }
        }
      })();
    <\/script>`}${isBibleArchive && renderTemplate`${renderScript($$result, "/Users/udmission/Documents/Codex/2026-08-08/new-chat-3/truth-for-life-and-mission/src/pages/[lang]/library/index.astro?astro&type=script&index=0&lang.ts")}`}` })}`;
}, "/Users/udmission/Documents/Codex/2026-08-08/new-chat-3/truth-for-life-and-mission/src/pages/[lang]/library/index.astro", void 0);
var $$file = "/Users/udmission/Documents/Codex/2026-08-08/new-chat-3/truth-for-life-and-mission/src/pages/[lang]/library/index.astro";
var $$url = "/[lang]/library";
//#endregion
//#region \0virtual:astro:page:src/pages/[lang]/library/index@_@astro
var page = () => library_exports;
//#endregion
export { page };
