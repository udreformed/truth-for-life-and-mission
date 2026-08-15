globalThis.process ??= {};
globalThis.process.env ??= {};
import { n as __exportAll } from "./rolldown-runtime_Upwk45wU.mjs";
import { E as createAstro, _ as addAttribute, a as Fragment, d as renderTemplate, h as maybeRenderHead, i as renderComponent } from "./server_DzJkc2yi.mjs";
import { t as createComponent } from "./compiler_BiDVP5L8.mjs";
import { t as $$SiteLayout } from "./SiteLayout_Gc4_WH87.mjs";
import { t as $$ShareButtons } from "./ShareButtons_C5mVJSyH.mjs";
import { a as shiftDateKey, i as parseDateKey, n as getAnnualReadingDay, r as getBangkokDateKey, t as formatDateKey } from "./annual-bible-reading_CAapI2Zc.mjs";
//#region src/pages/ko/bible-reading/365.astro
var _365_exports = /* @__PURE__ */ __exportAll({
	default: () => $$365,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://tflm.pages.dev");
var $$365 = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$365;
	const todayKey = getBangkokDateKey();
	const requestedKey = Astro.url.searchParams.get("date") ?? todayKey;
	const today = parseDateKey(todayKey);
	const requested = parseDateKey(requestedKey);
	const minDate = parseDateKey(shiftDateKey(todayKey, -7));
	const maxDate = parseDateKey(shiftDateKey(todayKey, 7));
	const selectedDate = requested && requested >= minDate && requested <= maxDate ? requested : today;
	const selectedKey = formatDateKey(selectedDate);
	const year = selectedDate.getUTCFullYear();
	const month = selectedDate.getUTCMonth() + 1;
	const day = selectedDate.getUTCDate();
	const reading = getAnnualReadingDay(year, month, day);
	if (!reading) return Astro.redirect(`/ko/bible-reading/365/?date=${todayKey}`);
	const dateLabel = `${year}년 ${month}월 ${day}일 ${new Intl.DateTimeFormat("ko-KR", {
		weekday: "long",
		timeZone: "UTC"
	}).format(selectedDate).replace("일요일", "주일")}`;
	const activeReading = {
		dateKey: selectedKey,
		dateLabel,
		reading,
		videoEmbed: reading.videoId ? `https://www.youtube-nocookie.com/embed/${reading.videoId}?rel=0` : null
	};
	const previousKey = shiftDateKey(selectedKey, -1);
	const nextKey = shiftDateKey(selectedKey, 1);
	const canGoPrevious = selectedDate > minDate;
	const canGoNext = selectedDate < maxDate;
	const shareUrl = `/ko/bible-reading/365/?date=${selectedKey}`;
	const shareTitle = `365일 성경통독 · ${dateLabel}`;
	const shareDescription = `오늘 본문: 구약 ${reading.oldTestament}, 신약 ${reading.newTestament}`;
	return renderTemplate`${renderComponent($$result, "SiteLayout", $$SiteLayout, {
		"lang": "ko",
		"current": "bibleReading",
		"title": "365일 성경읽기",
		"description": "365일 매일 약 15분 분량의 구약과 신약 본문을 읽으며 1년에 성경전체를 통독하도록 계획된 성경읽기표입니다.",
		"data-astro-cid-kkkfwxgs": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<header class="page-heading container annual-heading" data-astro-cid-kkkfwxgs><p class="eyebrow" data-astro-cid-kkkfwxgs>날짜에 맞춰 읽는 1년 1독</p><h1 data-astro-cid-kkkfwxgs>365일 성경읽기</h1></header><div class="container section annual-reading-page" style="padding-top:0" data-astro-cid-kkkfwxgs><section class="reading-today-panel annual-today-panel" aria-labelledby="annual-date-heading" data-astro-cid-kkkfwxgs><div class="annual-title-row" data-astro-cid-kkkfwxgs><div class="annual-share-cluster" aria-label="365일 성경통독 공유" data-astro-cid-kkkfwxgs><img class="annual-share-logo" src="/images/annual-bible-reading-365-logo.png" alt="365 성경통독" loading="lazy" data-astro-cid-kkkfwxgs>${renderComponent($$result, "ShareButtons", $$ShareButtons, {
		"lang": "ko",
		"url": shareUrl,
		"title": shareTitle,
		"description": shareDescription,
		"data-astro-cid-kkkfwxgs": true
	})}</div><div data-astro-cid-kkkfwxgs><h2 id="annual-date-heading" data-astro-cid-kkkfwxgs>${activeReading.dateLabel}</h2></div></div><div class="reading-day-navigation annual-navigation" data-astro-cid-kkkfwxgs>${canGoPrevious ? renderTemplate`<a class="button secondary"${addAttribute(`/ko/bible-reading/365/?date=${previousKey}`, "href")} data-astro-cid-kkkfwxgs>← 전날</a>` : renderTemplate`<span class="button secondary disabled" aria-disabled="true" data-astro-cid-kkkfwxgs>← 전날</span>`}${canGoNext ? renderTemplate`<a class="button secondary"${addAttribute(`/ko/bible-reading/365/?date=${nextKey}`, "href")} data-astro-cid-kkkfwxgs>다음날 →</a>` : renderTemplate`<span class="button secondary disabled" aria-disabled="true" data-astro-cid-kkkfwxgs>다음날 →</span>`}</div><article class="reading-video-card annual-video-card" data-astro-cid-kkkfwxgs><h3 data-astro-cid-kkkfwxgs>오늘의 성경읽기 영상</h3>${activeReading.videoEmbed ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<div class="video-frame" data-astro-cid-kkkfwxgs><iframe${addAttribute(activeReading.videoEmbed, "src")}${addAttribute(`${activeReading.dateLabel} 성경읽기 영상`, "title")} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen data-astro-cid-kkkfwxgs></iframe></div>` })}` : renderTemplate`<div class="reading-video-placeholder" data-astro-cid-kkkfwxgs><strong data-astro-cid-kkkfwxgs>이 날짜의 영상은 준비 중입니다.</strong><p data-astro-cid-kkkfwxgs>영상이 재생목록에 올라오면 날짜에 맞춰 이 자리에 연결됩니다.</p></div>`}</article><article class="reading-summary-card annual-summary-card" data-astro-cid-kkkfwxgs><h3 data-astro-cid-kkkfwxgs>읽기 전에 살펴보는 핵심 내용</h3><div class="annual-summary-list" data-astro-cid-kkkfwxgs><section class="annual-summary-section" data-astro-cid-kkkfwxgs><p class="annual-summary-label" data-astro-cid-kkkfwxgs>구약 · ${activeReading.reading.oldTestament}</p><p data-astro-cid-kkkfwxgs>${activeReading.reading.firstSummary}</p></section><section class="annual-summary-section" data-astro-cid-kkkfwxgs><p class="annual-summary-label" data-astro-cid-kkkfwxgs>신약 · ${activeReading.reading.newTestament}</p><p data-astro-cid-kkkfwxgs>${activeReading.reading.secondSummary}</p></section></div></article><aside class="reading-plan-tools annual-downloads" aria-labelledby="annual-download-title" data-astro-cid-kkkfwxgs><h3 id="annual-download-title" data-astro-cid-kkkfwxgs>365일 성경읽기 진도표</h3><p data-astro-cid-kkkfwxgs>진도표를 내려받아 매일 읽은 날짜를 표시하며 사용할 수 있습니다.</p><div class="schedule-actions schedule-plan-actions" data-astro-cid-kkkfwxgs><a class="button download-button" href="/downloads/bible-reading-365-schedule-ko.pdf" data-pdf-preview data-pdf-preview-title="한국어 365일 진도표" download="bible-reading-365-schedule-ko.pdf" data-astro-cid-kkkfwxgs>한국어 진도표</a><a class="button secondary download-button" href="/downloads/bible-reading-365-schedule-th.pdf" data-pdf-preview data-pdf-preview-title="태국어 365일 진도표" download="bible-reading-365-schedule-th.pdf" data-astro-cid-kkkfwxgs>태국어 진도표</a></div></aside></section><p class="annual-back-link" data-astro-cid-kkkfwxgs><a href="/ko/bible-reading/" data-astro-cid-kkkfwxgs>← 성경통독 메뉴로 돌아가기</a></p></div>` })}`;
}, "/Users/udmission/Documents/Codex/2026-08-08/new-chat-3/truth-for-life-and-mission/src/pages/ko/bible-reading/365.astro", void 0);
var $$file = "/Users/udmission/Documents/Codex/2026-08-08/new-chat-3/truth-for-life-and-mission/src/pages/ko/bible-reading/365.astro";
var $$url = "/ko/bible-reading/365";
//#endregion
//#region \0virtual:astro:page:src/pages/ko/bible-reading/365@_@astro
var page = () => _365_exports;
//#endregion
export { page };
