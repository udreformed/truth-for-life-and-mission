globalThis.process ??= {};
globalThis.process.env ??= {};
import { n as __exportAll } from "./rolldown-runtime_Upwk45wU.mjs";
import { E as createAstro, _ as addAttribute, a as Fragment, d as renderTemplate, h as maybeRenderHead, i as renderComponent, v as defineScriptVars } from "./server_DzJkc2yi.mjs";
import { t as createComponent } from "./compiler_BiDVP5L8.mjs";
import { n as isLanguage } from "./i18n_B790PXAF.mjs";
import { t as $$SiteLayout } from "./SiteLayout_Da7s1Mbi.mjs";
import { t as $$ShareButtons } from "./ShareButtons_Ci5R3-kv.mjs";
import { a as shiftDateKey, i as parseDateKey, n as getAnnualReadingDay, t as formatDateKey } from "./annual-bible-reading_DVswH1NQ.mjs";
import { t as getLocalizedReadingSummary } from "./reading-summaries_BzbQjcxt.mjs";
//#region src/components/AnnualBibleReadingPanel.astro
createAstro("https://tflm.pages.dev");
var $$AnnualBibleReadingPanel = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$AnnualBibleReadingPanel;
	const { requestedKey, todayKey } = Astro.props;
	const today = parseDateKey(todayKey);
	const requested = parseDateKey(requestedKey);
	const minDate = parseDateKey(shiftDateKey(todayKey, -7));
	const maxDate = parseDateKey(shiftDateKey(todayKey, 7));
	const selectedDate = requested && requested >= minDate && requested <= maxDate ? requested : today;
	const selectedKey = formatDateKey(selectedDate);
	const year = selectedDate.getUTCFullYear();
	const month = selectedDate.getUTCMonth() + 1;
	const day = selectedDate.getUTCDate();
	const reading = getAnnualReadingDay(year, month, day) ?? getAnnualReadingDay(today.getUTCFullYear(), today.getUTCMonth() + 1, today.getUTCDate());
	const dateLabel = `${year}년 ${month}월 ${day}일 ${new Intl.DateTimeFormat("ko-KR", {
		weekday: "long",
		timeZone: "UTC"
	}).format(selectedDate).replace("일요일", "주일")}`;
	const previousKey = shiftDateKey(selectedKey, -1);
	const nextKey = shiftDateKey(selectedKey, 1);
	const canGoPrevious = selectedDate > minDate;
	const canGoNext = selectedDate < maxDate;
	const videoEmbed = reading.videoId ? `https://www.youtube-nocookie.com/embed/${reading.videoId}?rel=0` : null;
	const shareUrl = `/ko/bible-reading/?plan=365&date=${selectedKey}&useDate=1`;
	const shareTitle = `365일 성경통독 · ${dateLabel}`;
	const shareDescription = `오늘 본문: 구약 ${reading.oldTestament}, 신약 ${reading.newTestament}`;
	return renderTemplate`${maybeRenderHead($$result)}<section class="reading-today-panel annual-today-panel" aria-labelledby="annual-date-heading" data-astro-cid-canlanos><div class="annual-title-row" data-astro-cid-canlanos><div class="annual-share-cluster" aria-label="365일 성경통독 공유" data-astro-cid-canlanos><img class="annual-share-logo" src="/images/annual-bible-reading-365-logo-ui.png" alt="365 성경통독" loading="lazy" decoding="async" data-astro-cid-canlanos>${renderComponent($$result, "ShareButtons", $$ShareButtons, {
		"lang": "ko",
		"url": shareUrl,
		"title": shareTitle,
		"description": shareDescription,
		"data-astro-cid-canlanos": true
	})}</div><div data-astro-cid-canlanos><h2 id="annual-date-heading" data-astro-cid-canlanos>${dateLabel}</h2></div></div><div class="reading-day-navigation annual-navigation" data-astro-cid-canlanos>${canGoPrevious ? renderTemplate`<a class="button secondary"${addAttribute(`/ko/bible-reading/?plan=365&date=${previousKey}&useDate=1`, "href")} data-annual-date-nav data-astro-cid-canlanos>← 전날</a>` : renderTemplate`<span class="button secondary disabled" aria-disabled="true" data-astro-cid-canlanos>← 전날</span>`}${canGoNext ? renderTemplate`<a class="button secondary"${addAttribute(`/ko/bible-reading/?plan=365&date=${nextKey}&useDate=1`, "href")} data-annual-date-nav data-astro-cid-canlanos>다음날 →</a>` : renderTemplate`<span class="button secondary disabled" aria-disabled="true" data-astro-cid-canlanos>다음날 →</span>`}</div><article class="annual-video-card" data-astro-cid-canlanos><h3 data-astro-cid-canlanos>오늘의 성경읽기 영상</h3>${videoEmbed ? renderTemplate`<div class="video-frame" data-astro-cid-canlanos><iframe${addAttribute(videoEmbed, "src")}${addAttribute(`${dateLabel} 성경읽기 영상`, "title")} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen data-astro-cid-canlanos></iframe></div>` : renderTemplate`<div class="reading-video-placeholder" data-astro-cid-canlanos><strong data-astro-cid-canlanos>이 날짜의 영상은 준비 중입니다.</strong><p data-astro-cid-canlanos>영상이 재생목록에 올라오면 날짜에 맞춰 이 자리에 연결됩니다.</p></div>`}</article><article class="reading-summary-card annual-summary-card" data-astro-cid-canlanos><h3 data-astro-cid-canlanos>읽기 전에 살펴보는 핵심 내용</h3><div class="annual-summary-list" data-astro-cid-canlanos><section class="annual-summary-section" data-astro-cid-canlanos><p class="annual-summary-label" data-astro-cid-canlanos>구약 · ${reading.oldTestament}</p><p data-astro-cid-canlanos>${reading.firstSummary}</p></section><section class="annual-summary-section" data-astro-cid-canlanos><p class="annual-summary-label" data-astro-cid-canlanos>신약 · ${reading.newTestament}</p><p data-astro-cid-canlanos>${reading.secondSummary}</p></section></div></article><aside class="reading-plan-tools annual-downloads" aria-labelledby="annual-download-title" data-astro-cid-canlanos><h3 id="annual-download-title" data-astro-cid-canlanos>365일 성경읽기 진도표</h3><div class="schedule-actions schedule-plan-actions annual-schedule-actions" data-astro-cid-canlanos><a class="button download-button" href="/downloads/bible-reading-365-schedule-ko.pdf" data-pdf-preview data-pdf-preview-title="한국어 365일 진도표" download="bible-reading-365-schedule-ko.pdf" data-astro-cid-canlanos>한국어 진도표</a><a class="button secondary download-button" href="/downloads/bible-reading-365-schedule-th.pdf" data-pdf-preview data-pdf-preview-title="태국어 365일 진도표" download="bible-reading-365-schedule-th.pdf" data-astro-cid-canlanos>태국어 진도표</a></div></aside></section>`;
}, "/Users/udmission/Documents/Codex/2026-08-08/new-chat-3/truth-for-life-and-mission/src/components/AnnualBibleReadingPanel.astro", void 0);
//#endregion
//#region src/lib/bible-reading-videos.ts
var thaiWeekdayReadingVideoIds = [
	[
		"f0ujCX9n0s0",
		"nanb3eQa1FU",
		"OhJyVm2hA3c",
		"F_VLQu6ymFc",
		"t4j2mxHXBt4",
		"OF_tsmMHONQ"
	],
	[
		"OU66SB32Dcs",
		"swq_XjukuMQ",
		"osPQs14DamM",
		"GlUZmC6Awzg",
		"qfExFdnDW34",
		"21qi-J7WsCg"
	],
	[
		"MQ2LW6f-XVg",
		"wJvmTL6m4zk",
		"VTQ6jky8LVw",
		"6WcG2J5FaUs",
		"62c5Zkseqy4",
		"IM0Zbr5P8Dk"
	],
	[
		"L355Hw5hsbI",
		"BzwLR18wBMc",
		"_5Du4SSVzQk",
		"P-q8wixm31c",
		"tGlpTPbJcMg",
		"jxxv1myl-Fw"
	],
	[
		"DGCg_FfB4sw",
		"amge1PLkFkY",
		"DATe1Sz1pSw",
		"Mp629k9VTPQ",
		"RvriYoK1CKY",
		"SZ39X0WaYVc"
	],
	[
		"0o8bqZJsRxw",
		"UWGzUMfaIro",
		"mrdNvjXAcK0",
		"itGxR1wra0w",
		"BMvX6UtFPYI",
		"hJ-_l05CzKM"
	],
	[
		"RB-M9ZVBiEA",
		"WswWgLLcRIk",
		"JmBQShMrP4g",
		"zcwxtcEorJU",
		"z2P08myl56Q",
		"nIKOgppBMS0"
	],
	[
		"7pk1aZClYpk",
		"W2CBouATE0o",
		"VmwLhvbrHPc",
		"KSmPbodb5XE",
		"TTXll26tkP8",
		"ULI5OoS3eoc"
	],
	[
		"Gto__RS-kXE",
		"PWNg9eBG8jc",
		"orOafHk3eLk",
		"HpJAH6dayYY",
		"gLOm9SGGD2s",
		"uI6xzwWCMeI"
	],
	[
		"EWYsyugLZS8",
		"uxZiZf1T7x8",
		"h_U28iSHnew",
		"DtGrmQThytk",
		"Zd0Nc3Plrvc",
		"PdNSarofpiw"
	],
	[
		"Qq-odENoVQA",
		"pzMa-P6a9bE",
		"S5M9qxzHEYg",
		"JqKdfOl6wMU",
		"9MgMe7VOiaE",
		"C-gEGvQBvxw"
	],
	[
		"mdFHtQyhlrQ",
		"-pqRmx1zQ2w",
		"-3uF5mi0a3g",
		"URf-cLTOMWo",
		"zfF3JIoZ7c8",
		"1JOzlJQ4zyA"
	],
	[
		"PEKJqDM5tGw",
		"FQyOErQaNWE",
		"A0Il-kTEDXQ",
		"H3H7r3nK1cU",
		"Lcpyuw-kDOA",
		"lcFbPbp2R2s"
	],
	[
		"-9yuQma4dPw",
		"-bQvU_J1g0w",
		"3ygsK6Z2ZyU",
		"uGVmGMKt1Zo",
		"evrBjXo74oQ",
		"cTVsRyITCIQ"
	],
	[
		"x0Dl13rKbkE",
		"kI0s2hqzQcw",
		"MohkouP3P00",
		"y7BhtXhBjoc",
		"ZnfRboVotJU",
		"Vcinm03wgoQ"
	],
	[
		"5d6k3O-Wcgc",
		"JWpK35Fq6i8",
		"rwkJNTyKmnM",
		"cqzWyNF2Gj8",
		"k7vXg7uw6zc",
		"C7N72JLTTi4"
	],
	[
		"PE1U0WgSF9I",
		"WOLroKr7jXM",
		"LlIw3l9jJRg",
		"cKnRSKvTRF8",
		"GXZBYI0iGrk",
		"haqfgdjsRJI"
	],
	[
		"YefNQrqsQKU",
		"_sAiztRoqGg",
		"T3LhMs5-Q9U",
		"_qtCmGuwaQ8",
		"Y5dB7WOyrv8",
		"vXTnsmzBTI8"
	],
	[
		"C3AY5C5s_7M",
		"GwP0pRe15ho",
		"82RYiC-lQvI",
		"lIL9zXiq-ZI",
		"-J_5MIMi4Fo",
		"_zwXdECIaN4"
	],
	[
		"6sRnG0q9OBo",
		"7Depj1NJQ20",
		"Dw0UKildicc",
		"-FRSSLl5my4",
		"9GEE2kciKh0",
		"-xh1QDfO7ag"
	],
	[
		"3_-3WNRrH8E",
		"EXppmSGwLw0",
		"sWItJXD086E",
		"us6IBMjeCWU",
		"oTiQQ0i2cFQ",
		"exn6VNqZ8VM"
	],
	[
		"U1sF5M9a27o",
		"nC8nI8AF6lw",
		"DxcMzYTX_uc",
		"IXTBmD669Gs",
		"P1IvycZ8WmM",
		"mrzuirxS3pk"
	],
	[
		"mhMaCYeVLac",
		"6bSgIVozgpQ",
		"bFM3aW1DJuM",
		"rShgUZES9SI",
		"Ad_P4JhtwO0",
		"EHdpxsbOhnA"
	],
	[
		"qbRBsl04f6M",
		"7bt8QvQrR2w",
		"nMk6v0ALdfc",
		"b2PXR9h86Cw",
		"DLNxH6CHURk",
		"UdRl3OoeVkU"
	],
	[
		"MSKKWmpa9_8",
		"FlUH659ArXQ",
		"97de053BTCU",
		"08iN6PlT4RA",
		"mswRWHXuqII",
		"U8oRI7B7qAo"
	],
	[
		"iDVPU3RdxH8",
		"CqTBM0M3wqI",
		"Co6vFVyEzhw",
		"J4R_M_joQCg",
		"pS1fIjLICmA",
		"sMrXSWSmhF0"
	],
	[
		"ppgcX-LK0do",
		"XTzZaww6nhs",
		"GKWHwP-P4-0",
		"Ogygfr87fAw",
		"XBqoRB8Iul4",
		"q68iRsz7_pY"
	],
	[
		"cC6tAh5cySk",
		"PMGKrnBbVwg",
		"uTR6rFZOEP8",
		"Q-ci827zWYA",
		"WWHPCQi2Xks",
		"e8HZWkwxpT0"
	],
	[
		"5Elsc95Or2k",
		"t0AOmfhvV70",
		"ALHzMvAVpw8",
		"Y6WTd4jtRJI",
		"-9Ou0NAacxA",
		"lskcwgcDlqQ"
	],
	[
		"2gXd5sX8X5E",
		"_-9DdPTooh4",
		"tVydRoGPbeA",
		"RGZ_8QwOySA",
		"Gp2VgilIDNM",
		"-yJG1GA_ZmU"
	],
	[
		"sSE6M_Q_xSc",
		"M_83oYanq4w",
		"JpKU_Cjubmg",
		"tv0D8CxROQI",
		"AOjQVYtjCY8",
		"wqnkFv12hHo"
	],
	[
		"dxYy6jmEs-c",
		"-qMp9_QSF2s",
		"GZGasqLvwT4",
		"rKznTNMT4c0",
		"nzb8b0WZ3Hk",
		"4-SSwvf-LSw"
	],
	[
		"3DsqLMNk6Pw",
		"IC7x-MLFsBY",
		"nyv_UfR2W40",
		"SamnqAh_qqg",
		"5CGXFnJh2F4",
		"xZHg4IgpC_w"
	],
	[
		"X47Jdvo9mOE",
		"yoERbHYHp6Q",
		"baERWMqyuKM",
		"06l-y5_CZOI",
		"Y87ejJ09jkc",
		"6eZzn39Ojo4"
	],
	[
		"n5IfgJ0bRD0",
		"ANDZzX46Zzs",
		"jnHAS7li7LU",
		"AhuHRgFSeo4",
		"69nf_dZg37k",
		"ZdM_v7TInSY"
	],
	[
		"awWLgW-ZnlU",
		"n4rcoWXV1uU",
		"Z8tIZSaFTM0",
		"wXkL2PZSCdg",
		"sAH2fJNZ-5Y",
		"kyhrE5XyExE"
	],
	[
		"RC_O7SVIXco",
		"aN-2ZM_49vI",
		"-QQKwyrp7Eg",
		"qFupkWnL7AM",
		"SKQOEwW-gWc",
		"JJ54DfxCxvI"
	],
	[
		"i_txapJN_fU",
		"igc_mJ70RhU",
		"n4aMJPwGmx0",
		"F6xDusCVx4k",
		"ZzGMc2NW5z4",
		"6NYo_6TSWKs"
	],
	[
		"8qnIkEJF4Fo",
		"kBFmzSRH_Ik",
		"-fQZJqi-XH8",
		"3wNbgwDWIrU",
		"NFfcmq7sVKk",
		"CuzbYWJOKqo"
	],
	[
		"-JN4ligXyT4",
		"U7rf1XU-EfE",
		"4R-XDoHJRP8",
		"Ch3FjRLIsaQ",
		"6gXCX9dnFHk",
		"X1qHDs-_OxU"
	],
	[
		"R73MrnO1klE",
		"NvpjfzIvI8Q",
		"D2C9xOUPZV0",
		"DQTYbZjpyuU",
		"BsvFHjgX7Zs",
		"0a0YpmNAJkY"
	],
	[
		"grHfqNDp4wA",
		"GNpGYOiimus",
		"CTucy7c4doE",
		"ZzRITOfov1k",
		"1dgAzjreBas",
		"1SRYjCPbi4M"
	],
	[
		"eJss9plt1Uc",
		"ncXzki3RIiQ",
		"RPE75TldtDQ",
		"GJ4Eal-w394",
		"WvoWCWWqRLI",
		"Hufw9MqdFVM"
	],
	[
		"04dHuKGb-ss",
		"m02fxzxiCvI",
		"6kAIA8-DntA",
		"1AyWw4FBwn4",
		"tVvgDf4a9ds",
		"2BN5EdI91lk"
	],
	[
		"SXC87bhfbkc",
		"vQQ_4sssy4I",
		"QlDmYqjiBf0",
		"N6BRfld5dbo",
		"Kr2JmJHIQYE",
		"MVOf5BJgtTk"
	]
];
var weekdayReadingVideoIds = {
	th: thaiWeekdayReadingVideoIds,
	ko: [
		[
			"NltIsAd_XAE",
			"XhH88pVmh2U",
			"cAHojRJZU70",
			"3ojYCmSURlE",
			"U1K24F4BF3U",
			"V5G7Hdd-Wks"
		],
		[
			"cCLQa0egh6s",
			"yNvFYp0FG10",
			"Hw6oyEi-dT8",
			"lEq4_stQ650",
			"tDydUQPChuA",
			"aW9mIzeCn70"
		],
		[
			"TNxFioFiF1U",
			"OVi6QPrENFU",
			"G4xqBhPA2pM",
			"4DLg0CBE-8I",
			"qkpymk_KYKg",
			"cuJxx6rauUY"
		],
		[
			"8VKVmGx9YEQ",
			"4o_7y4jfeUA",
			"HE5QUVpN5Mw",
			"TTFahwPkRls",
			"u0c1fmnCk7w",
			"MyFuQjQH9eo"
		],
		[
			"6D-jBdQBydM",
			"3uI8qKnbmg8",
			"nhDw7QcfCHE",
			"atLuJpAcduc",
			"PScI0vYMUuM",
			"0QMkSE2s9c8"
		],
		[
			"126bVx3YEvs",
			"mL5hLVYAgok",
			"vihfV7twgZI",
			"TMqrCV8UROQ",
			"SqzG1RHkblQ",
			"uCE0jXC0SU4"
		],
		[
			"QEqWZyVx77U",
			"w4N84X-ZPl0",
			"OyNgVr4U8u4",
			"_7vly0oZriE",
			"Z1aByJ8Xf-8",
			"7QMzGoe8vik"
		],
		[
			"nJA86s-tODw",
			"5ARMFWy0WlA",
			"xOoSoJThUZY",
			"fcnzP-9261s",
			"QNetdvxRyHc",
			"n6nYkyQMHx4"
		],
		[
			"cmS9gfX73c8",
			"T6NKgks-q-8",
			"JEdNKoxIa_0",
			"o_DEa4N4iEw",
			"bOqsJVHoJg4",
			"X9eTrucx02M"
		],
		[
			"rXa3nWDym2k",
			"6zhNK96EglM",
			"b99qXz6QFn8",
			"UzbQBgAfogo",
			"5KmA8f_7MxE",
			"Nlp911PjzGg"
		],
		[
			"IJbzW1uO0GU",
			"RUzvYrYImbc",
			"FLVTAeQFKvs",
			"1fmFM7fI3qI",
			"05pTVeSepEY",
			"0zBcSpS0OWA"
		],
		[
			"oYe6NYPr1hs",
			"gQ6jdus-9GQ",
			"FRy3ydFwiDw",
			"PidbZi4ueTA",
			"Pm2HO1j8o7M",
			"TiXXDr_yuig"
		],
		[
			"EYCvo2GzXmE",
			"IydhDvDTlIs",
			"SBhrvIlZ8R0",
			"eAhyK70LwCY",
			"TqTaRx2W33A",
			"PYkoGSRiOPk"
		],
		[
			"FkJEEhg5rVE",
			"bq30H4BwqL8",
			"ZcRJTkHeaw4",
			"ZZyasIGIDME",
			"cBRI4imhZWQ",
			"C87S2NMrGOg"
		],
		[
			"yg6iubiQQ1U",
			"o3h9SwSMM6s",
			"Wtv6zvrctL0",
			"yNhDEmHcXKM",
			"IgFwyqUu69c",
			"8ZMho0auRIA"
		],
		[
			"SSmv0tD9MjY",
			"n8QQMK26gbU",
			"z48N6fz28dc",
			"AXNug8qU13w",
			"Wf_DbknYNpM",
			"dOpq9nnNteU"
		],
		[
			"NRP61Vy1NTI",
			"m_zuVXsKiRI",
			"HKbV0kSroDs",
			"I9U4hVk1_8Y",
			"rlVWzhp1hco",
			"kP2NCf7TNik"
		],
		[
			"dDlM1aplluA",
			"1lGFf3AWNr4",
			"kGkVW08cXNc",
			"ZAUVivmwW78",
			"gzrcrCL1B4k",
			"PLYRPtpPCgE"
		],
		[
			"cukl9H6t5yk",
			"9Mb2XoHeYUg",
			"vR2X0YCYxAs",
			"oyYsh2ZncKM",
			"AGoEzgSy5UA",
			"GJpBn-V09rk"
		],
		[
			"LkjNf0_FJxo",
			"wTatK-EIdVA",
			"RJCfr3coYyM",
			"-F8woO3FG4k",
			"iLBNUDtaG9I",
			"R3RK6xPdNGA"
		],
		[
			"XmatwQZFO7E",
			"bv7Y1BMqOiI",
			"NrXGOg08aHw",
			"n62Wvm8vsOM",
			"X9KF9-QYqlI",
			"maiTYvx1y9c"
		],
		[
			"Zo5Fe5sjIrs",
			"5R6Q4dKSF0k",
			"vkJNNJ-i0i0",
			"yNj6VNmPCzE",
			"PcHpC35kiN8",
			"7HLZ2USkLWY"
		],
		[
			"mJoILXTcgHE",
			"HQabd_lVdBs",
			"-PO_iVWa42I",
			"C4gwwGjyWrI",
			"eYQTi2hVzNc",
			"epmeIHV36vc"
		],
		[
			"s8T601aTgzk",
			"N4RPpodNFc4",
			"KDeMRAwFZ7w",
			"YHgSQanvoPM",
			"LAWwkh2U1ls",
			"ikQt9o3vMN8"
		],
		[
			"qZBANGZnjEM",
			"_4twtT88qNo",
			"tKMQIx_-tNQ",
			"k04u04KVpZ8",
			"vJOKqEhWTPY",
			"ZmvOH_1JCY4"
		],
		[
			"h9--QErYAJ0",
			"vwEO-KrB8dU",
			"Wt6cj0jyUNM",
			"eb7BsyQGURA",
			"DdACiNexyko",
			"GpQLCORrZLs"
		],
		[
			"smjL2Q0AW6A",
			"ht-T3orEOVI",
			"K6UwWKquJOQ",
			"7w72j6JpX8o",
			"ekkMRMXtOZk",
			"bZCDK3-Dveg"
		],
		[
			"GGVuFBh5kLA",
			"Vht8fecAsBU",
			"CZ4jVr2BowE",
			"eDQ_tNJigM0",
			"payQ-nWSLoA",
			"Ez1G8PEQEXw"
		],
		[
			"KEFfMpXskBM",
			"RpDZ_G7vXiI",
			"gGNxWUvQy7c",
			"qm0CpM7Oz9c",
			"KlP-n678qQ4",
			"ZNJaAh6IjQg"
		],
		[
			"FrLONz2Yqq8",
			"57PebI9bEAk",
			"e_ptBZ_PIj8",
			"8i9_0-7gSOY",
			"7tY34Df3qVY",
			"k_3rHusy8Fc"
		],
		[
			"BygoDA_5TdQ",
			"0ftvhmgd0QU",
			"tMgdvzZ_5tA",
			"fnG6Oaqq-LA",
			"tZPWWhIsyaw",
			"WU9NrsHN_ho"
		],
		[
			"DLNGEcypnb8",
			"oe6eChY3sA8",
			"27q5IXY15Ds",
			"J7Nc-h2xiyE",
			"YvYiJD9RmNQ",
			"9W3tE1GpqUI"
		],
		[
			"ABIKyb8_HYU",
			"WPM0oQGMAck",
			"_n9fiPyBlvg",
			"Kd6Ub7BdJVw",
			"9C38aqOw2lI",
			"qXZlSCPcXXc"
		],
		[
			"rNQO_JKiwPo",
			"s9tDTsEv-DM",
			"JBqGRVUF9gQ",
			"GPwmPcITE9A",
			"NHSXrEt1_AI",
			"EZRPSIjKno0"
		],
		[
			"p_lJlt2lZuE",
			"xMeKKNhp7L0",
			"l1FaAk9bNPc",
			"1KYRXdhpE-U",
			"84iR68JRIm8",
			"KNgmddvSIaM"
		],
		[
			"GsLwZTpe9qw",
			"S2i5Do_PwxI",
			"8xdA0LnW2iQ",
			"QMwyhMI0bnM",
			"OKFv7N9V_y4",
			"d-YJpLlcups"
		],
		[
			"j9qLb0Ly2ww",
			"VcvtKQ1H08s",
			"CXhm8T2jOqc",
			"jiOTAdAsc8Q",
			"enNjBw7BKpg",
			"xWozmy-zfX0"
		],
		[
			"XeDp8zJ-Fw0",
			"llBPrX-usnc",
			"EF4wulWH4S8",
			"ZHSPA9di5cA",
			"Y2_q2fUZ8hI",
			"MGH85KTl_Hw"
		],
		[
			"klMGE4X7baA",
			"lkvOmF5bFa0",
			"sInrl9f2Pu0",
			"h5ZCr7-cYbw",
			"1dOjX7WPCbY",
			"jm6v9aG2aEk"
		],
		[
			"feYF6hUBuwU",
			"wpmrrxotbY8",
			"994IcIHjX3Q",
			"NAGyn91ueSg",
			"hv9LnlWtUeE",
			"QDm1ZYS9Mgk"
		],
		[
			"t79UDz40lUI",
			"3XmujyFReM4",
			"35sIXy4bDhI",
			"wyOSF-mW1Lo",
			"N-eeemR-gF8",
			"Qc7jFQO4Ea8"
		],
		[
			"vOgiIpnQYtc",
			"hVaNs9yxo-E",
			"BcTP-4O22ak",
			"W7bSFLYTNII",
			"5Yae7xO8UhM",
			"geRIGTatvac"
		],
		[
			"NSGOtnvxgrs",
			"zoi2rW6y2Cc",
			"-3wq0Q2YUeM",
			"iA8nRvc4lj8",
			"ll6QDZO-xIw",
			"uf38L2Uhwoo"
		],
		[
			"603ZqEPTVL8",
			"I1FO0As2R3s",
			"jxeOv5gokUQ",
			"IwYcA8JbK9A",
			"JF_ez4kXdZw",
			"9a6GRXofiPU"
		],
		[
			"Bee2zqAL63k",
			"1OPU5LwzcbU",
			"Hq0AHDj2U1E",
			"vXl0eQ73-6Y",
			"q_nCzQSETmM",
			"zYA9PPzid_g"
		]
	],
	en: thaiWeekdayReadingVideoIds
};
var getWeekdayReadingVideoId = (lang, week, day) => {
	if (!Number.isInteger(week) || week < 1 || week > 45 || !Number.isInteger(day) || day < 1 || day > 6) return "";
	return weekdayReadingVideoIds[lang][week - 1]?.[day - 1] ?? "";
};
//#endregion
//#region src/pages/[lang]/bible-reading/index.astro
var bible_reading_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://tflm.pages.dev");
var $$Index = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Index;
	const langParam = Astro.params.lang;
	if (!isLanguage(langParam)) return Astro.redirect("/th/bible-reading/");
	const lang = langParam;
	const c = {
		th: {
			eyebrow: "45 สัปดาห์ · อ่านพระคัมภีร์ทั้งเล่ม",
			title: "อ่านพระคัมภีร์",
			description: "เริ่มต้นสัปดาห์ในวันอาทิตย์ด้วยวิดีโอแนะนำ แล้วอ่านพระคัมภีร์วันจันทร์ถึงวันเสาร์ตามแผน 45 สัปดาห์",
			weekLabel: "สัปดาห์ที่",
			dayLabel: "วัน",
			chooseWeek: "เลือกสัปดาห์เริ่มต้น",
			saveWeek: "บันทึก",
			savedWeek: "บันทึกแล้ว",
			previousDay: "วันก่อนหน้า",
			nextDay: "วันถัดไป",
			sundayTitle: "วิดีโอแนะนำพระคัมภีร์ประจำสัปดาห์",
			sundayPlaceholder: "เมื่อส่งลิงก์เพลย์ลิสต์สำหรับวันอาทิตย์มาแล้ว วิดีโอแนะนำของสัปดาห์นั้นจะแสดงตรงนี้โดยอัตโนมัติ",
			readingTitle: "อ่านพระคัมภีร์ให้จบใน 45 สัปดาห์",
			readingVideoPreparing: "กำลังเตรียมวิดีโอของวันนี้",
			readingVideoPreparingDescription: "วิดีโอสำหรับสัปดาห์และวันนี้ยังไม่ได้เชื่อมต่อ เมื่ออัปโหลดและเชื่อมต่อแล้วจะแสดงที่นี่โดยอัตโนมัติ",
			sundaySummaryTitle: "สรุปการอ่านพระคัมภีร์ประจำสัปดาห์",
			summaryTitle: "สรุปพระคัมภีร์สำหรับวันนี้",
			summaryLoading: "กำลังเปลี่ยนสรุป...",
			summaryPlaceholder: "กำลังเตรียมสรุปภาษาไทยสำหรับสัปดาห์และวันนี้ เมื่ออัปโหลดไฟล์สรุปแล้ว ระบบจะแสดงตามวันที่โดยอัตโนมัติ",
			translationNotice: "",
			translationFallbackNotice: "",
			scheduleTitle: "ตารางอ่านพระคัมภีร์ 45 สัปดาห์",
			scheduleDescription: "ตารางแบบย่อสำหรับอ่านพระคัมภีร์ให้ครบตามแผน 45 สัปดาห์",
			scheduleDownload: "ดาวน์โหลดตารางภาษาไทย PDF",
			scheduleKoreanDownload: "ดาวน์โหลดตารางภาษาเกาหลี PDF",
			scheduleSource: "ที่มาของโปรแกรมอ่านพระคัมภีร์ วิดีโอ และสรุปเนื้อหา: https://www.wtskorea.org",
			overviewHeading: "สำรวจเนื้อหาพระคัมภีร์ทั้งเล่ม",
			overviewDescription: "อธิบายเนื้อหาของพระคัมภีร์เดิมและพระคัมภีร์ใหม่แต่ละเล่มและแต่ละบทด้วยภาพเคลื่อนไหว",
			playlistOpen: "ดูเพลย์ลิสต์",
			wholeBibleTitle: "ภาพใหญ่ของพระคัมภีร์ (ปฐมกาลถึงวิวรณ์)",
			genreIntro: "",
			days: [
				"วันอาทิตย์",
				"วันจันทร์",
				"วันอังคาร",
				"วันพุธ",
				"วันพฤหัสบดี",
				"วันศุกร์",
				"วันเสาร์"
			],
			shortDays: [
				"อา.",
				"จ.",
				"อ.",
				"พ.",
				"พฤ.",
				"ศ.",
				"ส."
			],
			weekOptionLabels: [
				"สัปดาห์ที่ 1 ปฐมกาล (1)",
				"สัปดาห์ที่ 2 ปฐมกาล (2)",
				"สัปดาห์ที่ 3 อพยพ",
				"สัปดาห์ที่ 4 เลวีนิติ",
				"สัปดาห์ที่ 5 กันดารวิถี",
				"สัปดาห์ที่ 6 เฉลยธรรมบัญญัติ",
				"สัปดาห์ที่ 7 โยชูวา",
				"สัปดาห์ที่ 8 ผู้วินิจฉัย",
				"สัปดาห์ที่ 9 ซามูเอล (1)",
				"สัปดาห์ที่ 10 ซามูเอล (2)",
				"สัปดาห์ที่ 11 พงศ์กษัตริย์ (1)",
				"สัปดาห์ที่ 12 พงศ์กษัตริย์ (2)",
				"สัปดาห์ที่ 13 พงศาวดาร",
				"สัปดาห์ที่ 14 ช่วงการเป็นเชลย",
				"สัปดาห์ที่ 15 เอสรา·เนหะมีย์·เอสเธอร์",
				"สัปดาห์ที่ 16 โยบ",
				"สัปดาห์ที่ 17 สดุดี (1)",
				"สัปดาห์ที่ 18 สดุดี (2)",
				"สัปดาห์ที่ 19 สดุดี (3)",
				"สัปดาห์ที่ 20 สดุดี (4)",
				"สัปดาห์ที่ 21 สุภาษิต",
				"สัปดาห์ที่ 22 ปัญญาจารย์·เพลงซาโลมอน",
				"สัปดาห์ที่ 23 อิสยาห์ (1)",
				"สัปดาห์ที่ 24 อิสยาห์ (2)",
				"สัปดาห์ที่ 25 เยเรมีย์ (1)",
				"สัปดาห์ที่ 26 เยเรมีย์ (2)",
				"สัปดาห์ที่ 27 เอเสเคียล (1)",
				"สัปดาห์ที่ 28 เอเสเคียล (2)",
				"สัปดาห์ที่ 29 ดาเนียล",
				"สัปดาห์ที่ 30 ผู้เผยพระวจนะเล็ก (1)",
				"สัปดาห์ที่ 31 ผู้เผยพระวจนะเล็ก (2)",
				"สัปดาห์ที่ 32 พระกิตติคุณ (1)",
				"สัปดาห์ที่ 33 พระกิตติคุณ (2)",
				"สัปดาห์ที่ 34 พระกิตติคุณ (3)",
				"สัปดาห์ที่ 35 พระกิตติคุณ (4)",
				"สัปดาห์ที่ 36 กิจการ (1)",
				"สัปดาห์ที่ 37 กิจการ (2)",
				"สัปดาห์ที่ 38 โรม",
				"สัปดาห์ที่ 39 จดหมายของเปาโล (1)",
				"สัปดาห์ที่ 40 จดหมายของเปาโล (2)",
				"สัปดาห์ที่ 41 จดหมายของเปาโล (3)",
				"สัปดาห์ที่ 42 จดหมายทั่วไป (1)",
				"สัปดาห์ที่ 43 จดหมายทั่วไป (2)",
				"สัปดาห์ที่ 44 วิวรณ์ (1)",
				"สัปดาห์ที่ 45 วิวรณ์ (2)"
			]
		},
		ko: {
			eyebrow: "READ THE WHOLE BIBLE",
			title: "성경통독",
			description: "주일에는 그 주간 본문 설명 영상을 먼저 보고, 월요일부터 토요일까지 45주 통독표에 따라 성경을 읽습니다. 태국어로 통독하려면 언어를 태국어로 선택하세요.",
			weekLabel: "주차",
			dayLabel: "요일",
			chooseWeek: "시작 주차 선택",
			saveWeek: "저장",
			savedWeek: "저장됨",
			previousDay: "이전 날짜",
			nextDay: "다음 날짜",
			sundayTitle: "이번 주 성경본문 설명 영상",
			sundayPlaceholder: "주일 설명 영상 재생목록을 연결하면, 해당 주차의 안내 영상이 여기에 자동으로 표시됩니다.",
			readingTitle: "45주 성경 통독하기",
			readingVideoPreparing: "오늘 읽을 본문 영상 준비 중",
			readingVideoPreparingDescription: "이 주차·요일 영상은 아직 사이트에 직접 연결되지 않았습니다. 영상이 연결되면 이 자리에 표시됩니다.",
			sundaySummaryTitle: "이번 주 통독 안내",
			summaryTitle: "오늘 읽을 본문 요약",
			summaryLoading: "요약을 바꾸는 중입니다...",
			summaryPlaceholder: "이 주차·요일의 본문 안내를 불러오지 못했습니다. 페이지를 새로고침해 주세요.",
			translationNotice: "",
			translationFallbackNotice: "",
			scheduleTitle: "45주 성경통독 일정표",
			scheduleDescription: "45주 동안 성경을 순서대로 읽을 수 있도록 정리한 태국어 간편 일정표입니다.",
			scheduleDownload: "태국어 통독표",
			scheduleKoreanDownload: "한국어 통독표",
			scheduleSource: "영상과 본문 내용 요약 등 원본 출처: https://www.wtskorea.org",
			overviewHeading: "성경전체 내용 살피기",
			overviewDescription: "구약과 신약의 각 권과 각 장의 내용을 애니메이션으로 설명합니다.",
			playlistOpen: "재생목록 보기",
			wholeBibleTitle: "성경 전체의 개요 (창세기부터 요한계시록까지)",
			genreIntro: "성경의 장르에 따라 읽는 방법",
			days: [
				"주일",
				"월요일",
				"화요일",
				"수요일",
				"목요일",
				"금요일",
				"토요일"
			],
			shortDays: [
				"주일",
				"월",
				"화",
				"수",
				"목",
				"금",
				"토"
			],
			weekOptionLabels: [
				"1주차 창세기(1)",
				"2주차 창세기(2)",
				"3주차 출애굽기",
				"4주차 레위기",
				"5주차 민수기",
				"6주차 신명기",
				"7주차 여호수아",
				"8주차 사사기",
				"9주차 사무엘상·하(1)",
				"10주차 사무엘상·하(2)",
				"11주차 열왕기상·하(1)",
				"12주차 열왕기상·하(2)",
				"13주차 역대상·하",
				"14주차 유배기",
				"15주차 에스라·느헤미야·에스더",
				"16주차 욥기",
				"17주차 시편(1)",
				"18주차 시편(2)",
				"19주차 시편(3)",
				"20주차 시편(4)",
				"21주차 잠언",
				"22주차 전도서·아가",
				"23주차 이사야(1)",
				"24주차 이사야(2)",
				"25주차 예레미야(1)",
				"26주차 예레미야(2)",
				"27주차 에스겔(1)",
				"28주차 에스겔(2)",
				"29주차 다니엘",
				"30주차 소선지서(1)",
				"31주차 소선지서(2)",
				"32주차 복음서(1)",
				"33주차 복음서(2)",
				"34주차 복음서(3)",
				"35주차 복음서(4)",
				"36주차 사도행전(1)",
				"37주차 사도행전(2)",
				"38주차 로마서",
				"39주차 바울 서신(1)",
				"40주차 바울 서신(2)",
				"41주차 바울 서신(3)",
				"42주차 일반 서신(1)",
				"43주차 일반 서신(2)",
				"44주차 요한계시록(1)",
				"45주차 요한계시록(2)"
			]
		},
		en: {
			eyebrow: "45 weeks · Read the whole Bible",
			title: "Bible Reading",
			description: "Begin each week on Sunday with an overview video, then read Scripture from Monday through Saturday according to the 45-week plan.",
			weekLabel: "Week",
			dayLabel: "Day",
			chooseWeek: "Choose starting week",
			saveWeek: "Save",
			savedWeek: "Saved",
			previousDay: "Previous day",
			nextDay: "Next day",
			sundayTitle: "This week’s Bible-passage overview video",
			sundayPlaceholder: "When the Sunday overview playlist is connected, the video for this week will appear here automatically.",
			readingTitle: "Read the Bible in 45 Weeks",
			readingVideoPreparing: "Today’s reading video is being prepared",
			readingVideoPreparingDescription: "The video for this week and day has not been connected yet. Once it is connected, it will appear here.",
			sundaySummaryTitle: "This Week’s Reading Guide",
			summaryTitle: "Today’s reading summary",
			summaryLoading: "Updating the summary...",
			summaryPlaceholder: "The reading guide for this week and day could not be loaded. Please refresh the page.",
			translationNotice: "",
			translationFallbackNotice: "",
			scheduleTitle: "45-week Bible-reading schedule",
			scheduleDescription: "A concise Thai schedule for completing the Bible-reading plan in 45 weeks.",
			scheduleDownload: "Download Thai schedule PDF",
			scheduleKoreanDownload: "Download Korean schedule PDF",
			scheduleSource: "Original source for the Bible-reading program, videos, and passage summaries: https://www.wtskorea.org",
			overviewHeading: "Explore the Whole Bible",
			overviewDescription: "Animated explanations of the books and chapters of the Old and New Testaments.",
			playlistOpen: "View playlist",
			wholeBibleTitle: "Overview of the Whole Bible (Genesis to Revelation)",
			genreIntro: "",
			days: [
				"Sunday",
				"Monday",
				"Tuesday",
				"Wednesday",
				"Thursday",
				"Friday",
				"Saturday"
			],
			shortDays: [
				"Sun",
				"Mon",
				"Tue",
				"Wed",
				"Thu",
				"Fri",
				"Sat"
			],
			weekOptionLabels: [
				"Week 1 Genesis (1)",
				"Week 2 Genesis (2)",
				"Week 3 Exodus",
				"Week 4 Leviticus",
				"Week 5 Numbers",
				"Week 6 Deuteronomy",
				"Week 7 Joshua",
				"Week 8 Judges",
				"Week 9 Samuel (1)",
				"Week 10 Samuel (2)",
				"Week 11 Kings (1)",
				"Week 12 Kings (2)",
				"Week 13 Chronicles",
				"Week 14 Exile",
				"Week 15 Ezra·Nehemiah·Esther",
				"Week 16 Job",
				"Week 17 Psalms (1)",
				"Week 18 Psalms (2)",
				"Week 19 Psalms (3)",
				"Week 20 Psalms (4)",
				"Week 21 Proverbs",
				"Week 22 Ecclesiastes·Song of Songs",
				"Week 23 Isaiah (1)",
				"Week 24 Isaiah (2)",
				"Week 25 Jeremiah (1)",
				"Week 26 Jeremiah (2)",
				"Week 27 Ezekiel (1)",
				"Week 28 Ezekiel (2)",
				"Week 29 Daniel",
				"Week 30 Minor Prophets (1)",
				"Week 31 Minor Prophets (2)",
				"Week 32 Gospels (1)",
				"Week 33 Gospels (2)",
				"Week 34 Gospels (3)",
				"Week 35 Gospels (4)",
				"Week 36 Acts (1)",
				"Week 37 Acts (2)",
				"Week 38 Romans",
				"Week 39 Pauline Letters (1)",
				"Week 40 Pauline Letters (2)",
				"Week 41 Pauline Letters (3)",
				"Week 42 General Letters (1)",
				"Week 43 General Letters (2)",
				"Week 44 Revelation (1)",
				"Week 45 Revelation (2)"
			]
		}
	}[lang];
	const planCopy = {
		th: {
			heading: "เลือกแผนอ่านพระคัมภีร์",
			fortyFiveTitle: "อ่านพระคัมภีร์ 45 สัปดาห์",
			fortyFiveDescription: "อ่านพระคัมภีร์ตามแผนรายสัปดาห์ พร้อมวิดีโอแนะนำและสรุปเนื้อหา",
			fortyFiveAction: "เปิดแผน 45 สัปดาห์",
			annualTitle: "อ่านพระคัมภีร์ 365 วัน",
			annualDescription: "ตารางนี้วางแผนให้อ่านพระคัมภีร์เดิมและพระคัมภีร์ใหม่วันละประมาณ 15 นาที เพื่ออ่านพระคัมภีร์ครบทั้งเล่มภายในหนึ่งปี โดยอ่านตามวันที่กำหนด",
			annualAction: "เปิดการอ่านตามวันที่",
			thaiDownload: "ดาวน์โหลดตารางภาษาไทย",
			koreanDownload: "ดาวน์โหลดตารางภาษาเกาหลี"
		},
		ko: {
			heading: "성경통독 방법 선택",
			fortyFiveTitle: "45주 성경통독",
			fortyFiveDescription: "주간 본문 안내 영상과 요약을 따라 45주 동안 성경 전체를 읽습니다.",
			fortyFiveAction: "45주 통독 보기",
			annualTitle: "365일 성경읽기",
			annualDescription: "365일 매일 약 15분 분량의 구약과 신약 본문을 읽으며 1년에 성경전체를 통독하도록 계획된 성경읽기표입니다.",
			annualAction: "오늘 본문 영상으로 읽기",
			thaiDownload: "태국어 진도표",
			koreanDownload: "한국어 진도표"
		},
		en: {
			heading: "Choose a Bible-reading plan",
			fortyFiveTitle: "Read the Bible in 45 Weeks",
			fortyFiveDescription: "Read the whole Bible in 45 weeks with weekly overview videos and passage summaries.",
			fortyFiveAction: "Open the 45-week plan",
			annualTitle: "365-Day Bible Reading",
			annualDescription: "This schedule is designed to take you through the whole Bible in one year by reading about 15 minutes of Old and New Testament passages each day, following the calendar date.",
			annualAction: "Open daily reading",
			thaiDownload: "Download Thai schedule",
			koreanDownload: "Download Korean schedule"
		}
	}[lang];
	const readingPlaylistId = lang === "ko" ? "PLqie1n1CWRFiN-DQTeZE_v6szPJrye9qH" : "PLT7MyT0j5723CA6aYOLxezU0LIgYnfkCb";
	const thaiSundayOverviewPlaylistId = "PLc7s0MuVw064";
	const koreanSundayOverviewPlaylistId = "PLOo_wK9k0voc";
	const sundayReadingLectureIndexes = [
		1,
		2,
		3,
		4,
		5,
		6,
		7,
		8,
		9,
		10,
		11,
		11,
		12,
		13,
		14,
		15,
		16,
		17,
		18,
		19,
		20,
		21,
		22,
		22,
		23,
		23,
		24,
		24,
		25,
		26,
		26,
		27,
		28,
		29,
		30,
		31,
		32,
		33,
		34,
		35,
		36,
		37,
		38,
		39,
		40
	];
	const thaiSundayOverviewVideoIds = [
		"X2lWd_O5QqM",
		"o3C0W8aFJUU",
		"WHSNy6niWnc",
		"-h-ueibSPyI",
		"MOeP01mXEyk",
		"M8HbqnKM_vc",
		"64-cJRdZLa4",
		"ZH_V8Esm4jo",
		"PiZIAywaRJk",
		"sXM3CoYYZbA",
		"e7uC-1h7ehA",
		"e7uC-1h7ehA",
		"LfhFPqKlKTg",
		"xQEDCUsskKc",
		"CwYrK6Lu2vQ",
		"p0TU4ICMs_0",
		"n_PjzPs3kvs",
		"3gFbIytzKGg",
		"7wHLDM-fgqI",
		"kFVeREmqMl0",
		"aqn5LwCuvyA",
		"10PchM1CQpU",
		"32w7TT3xqcQ",
		"32w7TT3xqcQ",
		"fZBKVFqLuxM",
		"fZBKVFqLuxM",
		"jQjrdSlMT7M",
		"jQjrdSlMT7M",
		"Phft36toiqs",
		"VCcCbcvpT4s",
		"VCcCbcvpT4s",
		"XOqf0CxQsFk",
		"k7WUapq50S4",
		"HB4M00fbI0A",
		"y367RKySUiw",
		"thKN9vqY-04",
		"FS5F0G-57lA",
		"CXNTZyVDo-c",
		"p80SBg_XYMo",
		"nbpuLpQS5Us",
		"akQTbJOhWaY",
		"BCRDFpBuNJ8",
		"dfxezuyAdYg",
		"1R9WY74ykbs",
		"1cEmK4VycYA"
	];
	const koreanSundayOverviewVideoIds = [
		"LLu2xB_rIT4",
		"yUeqd5_MsFY",
		"nuumvEm2D9M",
		"4Ttqlz3qR8Q",
		"ODkCppuCsAA",
		"nrGJvJz9WHI",
		"Eb6jCXeDHCg",
		"A4BVjXOnJXY",
		"YLuWUTeCltc",
		"MVQgiGHrMec",
		"OFxFwWNMEjw",
		"OFxFwWNMEjw",
		"DATMW23HVm4",
		"BxFFHUtlaSM",
		"MIZFwFNaFkk",
		"py_S7ICqOyQ",
		"dDzzD_vu0JI",
		"3js4uGzvsJY",
		"HlB72y13ork",
		"bDPOFSHgkQA",
		"l8uNGDL9T0w",
		"QIATHwMWS-I",
		"kRhEyqzxqUs",
		"kRhEyqzxqUs",
		"MBoaA_5sid0",
		"MBoaA_5sid0",
		"t7MwSpxihPk",
		"t7MwSpxihPk",
		"ytn1zktdYzM",
		"4jdhnOw9rLw",
		"4jdhnOw9rLw",
		"aV-7QO8KdnY",
		"1AuD1F7RaDw",
		"9j9RhkVMoKw",
		"7AlFvpeVHXI",
		"ovYiJ_q0aMg",
		"heD3yyHR77c",
		"cUYgRHn7lOk",
		"w6Zsa0LU7AE",
		"aP08iEL7vdQ",
		"IvcfBnhTAGE",
		"9coXCovH_Kc",
		"yxTmK4m2ekM",
		"imWjNPHxDyc",
		"7hQSOYCETPE"
	];
	const sundayOverviewPlaylistId = lang === "ko" ? koreanSundayOverviewPlaylistId : thaiSundayOverviewPlaylistId;
	const sundayOverviewVideoIds = lang === "ko" ? koreanSundayOverviewVideoIds : thaiSundayOverviewVideoIds;
	const overviewPlaylists = lang === "ko" ? [{
		title: "구약 개요 - Old Testament Overviews",
		list: "PLdjM8wRcBQnmm-CLscqgP_T4dRwWqh9iZ",
		videos: [],
		randomCount: 39
	}, {
		title: "신약 개요 - New Testament Overviews",
		list: "PLdjM8wRcBQnnTA1EG0T0Yem-QPvNpe99k",
		videos: [],
		randomCount: 27
	}] : lang === "en" ? [{
		title: "Old Testament Overviews",
		list: "PLH0Szn1yYNeeVFodkI9J_WEATHQCwRZ0u",
		videos: [],
		randomCount: 39
	}, {
		title: "New Testament Overviews",
		list: "PLH0Szn1yYNecanpQqdixWAm3zHdhY2kPR",
		videos: [],
		randomCount: 27
	}] : [{
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
	}, {
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
	}];
	const genreReadingPlaylist = {
		title: lang === "ko" ? "성경을 어떻게 읽을 것인가" : lang === "en" ? "" : "อ่านพระคัมภีร์อย่างไร",
		list: lang === "ko" ? "PLdjM8wRcBQnmqI9vhJYD4UUySu4P36oTH" : lang === "en" ? "PLH0Szn1yYNedn4FbBMMtOlGN-BPLQ54IH" : "PLZl6JGhBKq-534rqCGskY4Bl73lvZ7pTD",
		videos: [],
		randomCount: lang === "th" ? 6 : 19,
		introduction: c.genreIntro || (lang === "th" ? "วิธีอ่านพระคัมภีร์ตามประเภทวรรณกรรม" : "How to read the Bible according to its literary genres")
	};
	const todayParts = new Intl.DateTimeFormat("en-CA", {
		timeZone: "Asia/Bangkok",
		year: "numeric",
		month: "2-digit",
		day: "2-digit"
	}).formatToParts(/* @__PURE__ */ new Date());
	const part = (type) => todayParts.find((item) => item.type === type)?.value ?? "";
	const todayKey = `${part("year")}-${part("month")}-${part("day")}`;
	const isDateKey = (value) => !!value && /^\d{4}-\d{2}-\d{2}$/.test(value) && !Number.isNaN(Date.parse(`${value}T00:00:00Z`));
	const requestPlan = Astro.url.searchParams.get("plan");
	const requestedDate = Astro.url.searchParams.get("date");
	const dateKey = requestPlan === "365" && Astro.url.searchParams.get("useDate") === "1" && isDateKey(requestedDate) ? requestedDate : todayKey;
	const shiftDate = (value, offset) => {
		const shifted = /* @__PURE__ */ new Date(`${value}T00:00:00Z`);
		shifted.setUTCDate(shifted.getUTCDate() + offset);
		return shifted.toISOString().slice(0, 10);
	};
	const dateToUTC = (value) => /* @__PURE__ */ new Date(`${value}T00:00:00Z`);
	const dayDifference = (a, b) => Math.floor((dateToUTC(a).getTime() - dateToUTC(b).getTime()) / 864e5);
	const getSundayKey = (value) => shiftDate(value, -dateToUTC(value).getUTCDay());
	const wrapWeek = (value) => ((value - 1) % 45 + 45) % 45 + 1;
	const parsedWeek = Number(Astro.url.searchParams.get("week"));
	const defaultWeek = wrapWeek(Math.floor(dayDifference(dateKey, "2026-07-26") / 7) + 1);
	const hasCustomBaseWeek = Number.isInteger(parsedWeek) && parsedWeek >= 1 && parsedWeek <= 45;
	const activeWeek = hasCustomBaseWeek ? parsedWeek : defaultWeek;
	const activeWeekParam = hasCustomBaseWeek ? `&week=${activeWeek}` : "";
	const selectedDate = dateToUTC(dateKey);
	const activeDay = selectedDate.getUTCDay();
	const selectedLabel = new Intl.DateTimeFormat(lang === "ko" ? "ko-KR" : lang === "th" ? "th-TH" : "en-US", {
		timeZone: "UTC",
		year: "numeric",
		month: "long",
		day: "numeric"
	}).format(selectedDate);
	const weekStartKey = getSundayKey(dateKey);
	const dayLinks = Array.from({ length: 7 }, (_, index) => ({
		index,
		href: `/${lang}/bible-reading/?date=${shiftDate(weekStartKey, index)}${activeWeekParam}`,
		label: c.shortDays[index],
		full: c.days[index]
	}));
	const readingVideoIds = weekdayReadingVideoIds[lang];
	const activeReadingVideoId = getWeekdayReadingVideoId(lang, activeWeek, activeDay);
	const activeReadingEmbed = activeReadingVideoId ? `https://www.youtube-nocookie.com/embed/${activeReadingVideoId}?rel=0` : "";
	const activeSundayVideoIndex = sundayReadingLectureIndexes[activeWeek - 1] ?? activeWeek;
	const activeSundayVideoId = sundayOverviewVideoIds[activeWeek - 1] ?? "";
	const activeSundayEmbed = activeSundayVideoId ? `https://www.youtube-nocookie.com/embed/${activeSundayVideoId}?rel=0` : `https://www.youtube-nocookie.com/embed/videoseries?list=${sundayOverviewPlaylistId}&index=${activeSundayVideoIndex}&rel=0`;
	const activeReadingSummary = await getLocalizedReadingSummary(lang === "en" ? "th" : lang, activeWeek, activeDay);
	const selectedPlan = lang === "ko" && requestPlan === "365" ? "365" : "45";
	Astro.response.headers.set("Cache-Control", "public, max-age=60, s-maxage=300, stale-while-revalidate=86400");
	return renderTemplate`${renderComponent($$result, "SiteLayout", $$SiteLayout, {
		"lang": lang,
		"current": "bibleReading",
		"title": c.title,
		"description": c.description
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<header${addAttribute({
		"page-heading": true,
		container: true,
		"bible-reading-page-heading": true,
		"compact-reading-heading": lang === "ko"
	}, "class:list")}><p class="eyebrow">${c.eyebrow}</p>${lang !== "ko" && renderTemplate`<h1>${c.title}</h1>`}${lang !== "ko" && renderTemplate`<p>${c.description}</p>`}</header><section class="container section bible-reading-page" style="padding-top:0">${lang === "ko" && renderTemplate`<nav class="reading-plan-tabs" aria-label="성경통독 방법 선택" data-reading-plan-tabs><a${addAttribute({ active: selectedPlan === "45" }, "class:list")} href="/ko/bible-reading/?plan=45" data-reading-plan-button="45"${addAttribute(selectedPlan === "45", "aria-pressed")}>45주 성경통독</a><a${addAttribute({ active: selectedPlan === "365" }, "class:list")} href="/ko/bible-reading/?plan=365" data-reading-plan-button="365"${addAttribute(selectedPlan === "365", "aria-pressed")}>365일 성경통독</a></nav>`}<div data-reading-plan-panel="45"${addAttribute(lang === "ko" && selectedPlan !== "45", "hidden")}><section class="reading-today-panel" id="reading-45-week" aria-labelledby="reading-today-title"><div class="reading-today-header"><div><h2 id="reading-today-title">${selectedLabel}</h2><p class="schedule-source reading-source-note"><a href="https://www.wtskorea.org" target="_blank" rel="noopener noreferrer">${c.scheduleSource} ↗</a></p></div><form class="week-selector" method="get"${addAttribute(`/${lang}/bible-reading/`, "action")} data-week-selector-form><input type="hidden" name="date"${addAttribute(dateKey, "value")}><label for="week-select">${c.chooseWeek}</label><div><select id="week-select" name="week" data-auto-submit-week>${Array.from({ length: 45 }, (_, index) => index + 1).map((week, index) => renderTemplate`<option${addAttribute(week, "value")}${addAttribute(week === activeWeek, "selected")}>${c.weekOptionLabels[index]}</option>`)}</select><button class="button compact-button save-week-button" type="button" data-save-reading-week>${c.saveWeek}</button></div></form></div><nav class="reading-day-strip"${addAttribute(c.dayLabel, "aria-label")}>${dayLinks.map((day) => renderTemplate`<a${addAttribute({ active: day.index === activeDay }, "class:list")}${addAttribute(day.href, "href")}${addAttribute(day.full, "aria-label")} data-reading-date-link${addAttribute(shiftDate(weekStartKey, day.index), "data-date-key")}><span>${day.label}</span></a>`)}</nav>${activeDay === 0 ? renderTemplate`<article class="reading-video-card sunday-reading-card"><p class="reading-video-subtitle">${c.sundayTitle}</p><div class="video-frame"><iframe data-active-reading-frame${addAttribute(activeSundayEmbed, "src")}${addAttribute(`${c.sundayTitle} · ${c.weekLabel} ${activeWeek}`, "title")} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div></article>` : renderTemplate`<article class="reading-video-card"${addAttribute(readingPlaylistId, "id")}><div class="reading-video-slot" data-active-reading-slot><div class="video-frame"><iframe data-active-reading-frame${addAttribute(activeWeek, "data-reading-week")}${addAttribute(activeDay, "data-reading-day")}${addAttribute(activeReadingVideoId, "data-reading-video-id")}${addAttribute(activeReadingEmbed, "src")}${addAttribute(`${c.readingTitle} · ${c.weekLabel} ${activeWeek} · ${c.days[activeDay]}`, "title")} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div></div></article>`}<article class="reading-summary-card" data-reading-summary-card>${activeDay !== 0 && renderTemplate`<h3 data-summary-heading>${c.summaryTitle}</h3>`}${activeReadingSummary ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<h4 data-summary-title>${activeReadingSummary.title}</h4><p${addAttribute({
		"translation-note": true,
		hidden: !(lang === "en" && activeReadingSummary.translated)
	}, "class:list")} data-translation-note>${c.translationNotice}</p><p${addAttribute({
		"translation-note": true,
		hidden: !(lang === "en" && activeReadingSummary.translated === false)
	}, "class:list")} data-translation-fallback-note>${c.translationFallbackNotice}</p><div class="reading-summary-body" data-summary-body>${activeReadingSummary.body}</div><p class="hidden" data-summary-placeholder>${c.summaryPlaceholder}</p>` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<h4 class="hidden" data-summary-title></h4><p class="translation-note hidden" data-translation-note>${c.translationNotice}</p><p class="translation-note hidden" data-translation-fallback-note>${c.translationFallbackNotice}</p><div class="reading-summary-body hidden" data-summary-body></div><p data-summary-placeholder>${c.summaryPlaceholder}</p>` })}`}</article><div class="reading-plan-tools" aria-labelledby="reading-schedule-title"><h3 id="reading-schedule-title">${c.scheduleTitle}</h3><div class="schedule-actions schedule-plan-actions"><a class="button download-button" href="/downloads/bible-reading-45-week-schedule-th.pdf" data-pdf-preview${addAttribute(c.scheduleDownload, "data-pdf-preview-title")} download="bible-reading-45-week-schedule-th.pdf">${c.scheduleDownload}</a>${lang === "ko" && renderTemplate`<a class="button secondary download-button" href="/downloads/bible-reading-45-week-schedule-ko.pdf" data-pdf-preview${addAttribute(c.scheduleKoreanDownload, "data-pdf-preview-title")} download="bible-reading-45-week-schedule-ko.pdf">${c.scheduleKoreanDownload}</a>`}</div></div></section></div>${lang === "ko" ? renderTemplate`<div data-reading-plan-panel="365"${addAttribute(selectedPlan !== "365", "hidden")}>${renderComponent($$result, "AnnualBibleReadingPanel", $$AnnualBibleReadingPanel, {
		"requestedKey": dateKey,
		"todayKey": todayKey
	})}</div>` : renderTemplate`<section class="annual-plan-card" id="annual-reading" aria-labelledby="annual-reading-title"><div class="annual-plan-card-copy"><p class="eyebrow">365 DAY</p><h2 id="annual-reading-title">${planCopy.annualTitle}</h2><p>${planCopy.annualDescription}</p></div><div class="annual-plan-card-actions"><div class="annual-plan-download-row"><a class="button secondary download-button" href="/downloads/bible-reading-365-schedule-ko.pdf" data-pdf-preview${addAttribute(planCopy.koreanDownload, "data-pdf-preview-title")} download="bible-reading-365-schedule-ko.pdf">${planCopy.koreanDownload}</a><a class="button secondary download-button" href="/downloads/bible-reading-365-schedule-th.pdf" data-pdf-preview${addAttribute(planCopy.thaiDownload, "data-pdf-preview-title")} download="bible-reading-365-schedule-th.pdf">${planCopy.thaiDownload}</a></div></div></section>`}<section class="bible-reading-feature standalone-overview-feature" aria-labelledby="bible-overview-heading"><header class="bible-reading-copy bible-overview-heading"><h2 id="bible-overview-heading">${c.overviewHeading}</h2><p>${c.overviewDescription}</p></header><div class="bible-reading-playlist-grid additional-playlists">${overviewPlaylists.map((playlist) => renderTemplate`<article${addAttribute(playlist.list, "id")}><h3>${playlist.title}</h3><div class="video-frame">${playlist.videos.length ? renderTemplate`<iframe${addAttribute(`https://www.youtube-nocookie.com/embed/${playlist.videos[0]}?list=${playlist.list}&index=1&rel=0`, "src")}${addAttribute(playlist.title, "title")} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen${addAttribute(playlist.list, "data-random-playlist")}${addAttribute(playlist.videos.join(","), "data-video-ids")}></iframe>` : renderTemplate`<iframe${addAttribute(`https://www.youtube.com/embed/videoseries?list=${playlist.list}&rel=0`, "src")}${addAttribute(playlist.title, "title")} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen${addAttribute(playlist.list, "data-random-playlist")}${addAttribute("randomCount" in playlist ? playlist.randomCount : playlist.videos.length, "data-random-count")}></iframe>`}</div><div class="video-action-row"><a class="button secondary playlist-link-button playlist-open-button"${addAttribute(playlist.videos.length ? `https://www.youtube.com/watch?v=${playlist.videos[0]}&list=${playlist.list}&index=1` : `https://www.youtube.com/playlist?list=${playlist.list}`, "href")} target="_blank" rel="noopener noreferrer"${addAttribute(playlist.videos.length ? true : void 0, "data-playlist-open")}>${c.playlistOpen} <span class="playlist-external-mark" aria-hidden="true">↗</span></a></div></article>`)}<article class="featured bible-overview-video" id="whole-bible-overview"><h3>${c.wholeBibleTitle}</h3><div class="video-frame"><iframe src="https://www.youtube.com/embed/SQ0c5aEzYkw?rel=0&list=PLxUrp4sYoRfQKfC_5HTqzn7yvYdQdcXoP"${addAttribute(c.wholeBibleTitle, "title")} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div><div class="video-action-row"><a class="button secondary playlist-link-button playlist-open-button" href="https://www.youtube.com/playlist?list=PLxUrp4sYoRfQKfC_5HTqzn7yvYdQdcXoP" target="_blank" rel="noopener noreferrer">${c.playlistOpen} <span class="playlist-external-mark" aria-hidden="true">↗</span></a></div></article></div></section><section class="genre-reading-feature" aria-labelledby="genre-reading-heading"><div class="genre-reading-copy"><p class="eyebrow">Bible Reading Guide</p>${genreReadingPlaylist.introduction && renderTemplate`<p class="playlist-introduction">${genreReadingPlaylist.introduction}</p>`}${genreReadingPlaylist.title && renderTemplate`<h2 id="genre-reading-heading">${genreReadingPlaylist.title}</h2>`}</div><div class="video-frame"><iframe${addAttribute(`https://www.youtube.com/embed/videoseries?list=${genreReadingPlaylist.list}&rel=0`, "src")}${addAttribute(genreReadingPlaylist.title || genreReadingPlaylist.introduction || "Bible reading video", "title")} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen${addAttribute(genreReadingPlaylist.list, "data-random-playlist")}${addAttribute(genreReadingPlaylist.randomCount, "data-random-count")}></iframe></div><div class="video-action-row"><a class="button secondary playlist-link-button playlist-open-button"${addAttribute(`https://www.youtube.com/playlist?list=${genreReadingPlaylist.list}`, "href")} target="_blank" rel="noopener noreferrer">${c.playlistOpen} <span class="playlist-external-mark" aria-hidden="true">↗</span></a></div></section></section><script>(function(){${defineScriptVars({
		lang,
		dateKey,
		todayKey,
		activeDay,
		readingPlaylistId,
		readingVideoIds,
		sundayOverviewPlaylistId,
		sundayOverviewVideoIds,
		sundayReadingLectureIndexes,
		weekLabel: c.weekLabel,
		days: c.days,
		sundaySummaryTitle: c.sundaySummaryTitle,
		summaryTitle: c.summaryTitle,
		summaryLoading: c.summaryLoading,
		summaryPlaceholder: c.summaryPlaceholder,
		translationNotice: c.translationNotice,
		translationFallbackNotice: c.translationFallbackNotice,
		readingTitle: c.readingTitle,
		sundayTitle: c.sundayTitle,
		readingVideoPreparing: c.readingVideoPreparing,
		readingVideoPreparingDescription: c.readingVideoPreparingDescription,
		saveWeekLabel: c.saveWeek,
		savedWeekLabel: c.savedWeek,
		hasCustomBaseWeek,
		selectedPlan
	})}
    const readingPlanStorageKey = "truthForLifeMissionReadingPlan:ko";
    const annualDateNavStorageKey = "truthForLifeMissionAnnualDateNav:ko";
    if (lang === "ko") {
      const currentUrl = new URL(window.location.href);
      const isAnnualPlan = currentUrl.searchParams.get("plan") === "365";
      const dateParam = currentUrl.searchParams.get("date");
      const cameFromAnnualDateNav = sessionStorage.getItem(annualDateNavStorageKey) === "1";
      sessionStorage.removeItem(annualDateNavStorageKey);
      if (isAnnualPlan && dateParam && dateParam !== todayKey && !cameFromAnnualDateNav) {
        currentUrl.searchParams.delete("date");
        currentUrl.searchParams.delete("week");
        window.location.replace(currentUrl.toString());
      }
    }
    const activateReadingPlan = (plan, updateUrl = false) => {
      if (lang !== "ko" || (plan !== "45" && plan !== "365")) return;
      document.querySelectorAll("[data-reading-plan-panel]").forEach((panel) => {
        if (!(panel instanceof HTMLElement)) return;
        panel.hidden = panel.dataset.readingPlanPanel !== plan;
      });
      document.querySelectorAll("[data-reading-plan-button]").forEach((button) => {
        const active = button.dataset.readingPlanButton === plan;
        button.classList.toggle("active", active);
        button.setAttribute("aria-pressed", String(active));
      });
      localStorage.setItem(readingPlanStorageKey, plan);
      if (updateUrl) {
        const url = new URL(window.location.href);
        url.searchParams.set("plan", plan);
        if (plan === "365") {
          url.searchParams.delete("date");
          url.searchParams.delete("week");
          window.location.assign(url.toString());
          return;
        }
        window.history.replaceState({}, "", url);
      }
    };

    document.querySelectorAll("[data-annual-date-nav]").forEach((link) => {
      link.addEventListener("click", () => {
        sessionStorage.setItem(annualDateNavStorageKey, "1");
      });
    });

    document.querySelectorAll("[data-reading-plan-button]").forEach((button) => {
      button.addEventListener("click", (event) => {
        const plan = button.dataset.readingPlanButton;
        if (plan !== "45" && plan !== "365") return;
        event.preventDefault();
        activateReadingPlan(plan, true);
      });
    });

    if (lang === "ko") {
      const hasPlanInUrl = new URL(window.location.href).searchParams.has("plan");
      const savedPlan = localStorage.getItem(readingPlanStorageKey);
      activateReadingPlan(!hasPlanInUrl && (savedPlan === "45" || savedPlan === "365") ? savedPlan : selectedPlan);
    }

    const savedWeekStorageKey = \`truthForLifeMissionBibleReadingBaseWeek:\${lang}\`;
    const dateToUTC = (value) => new Date(\`\${value}T00:00:00Z\`);
    const shiftDate = (value, offset) => {
      const shifted = dateToUTC(value);
      shifted.setUTCDate(shifted.getUTCDate() + offset);
      return shifted.toISOString().slice(0, 10);
    };
    const dayDifference = (a, b) => Math.floor((dateToUTC(a).getTime() - dateToUTC(b).getTime()) / 86400000);
    const getSundayKey = (value) => shiftDate(value, -dateToUTC(value).getUTCDay());
    const wrapWeek = (value) => ((value - 1) % 45 + 45) % 45 + 1;
    const weekDeltaFromToday = Math.floor(dayDifference(getSundayKey(dateKey), getSundayKey(todayKey)) / 7);
    document.querySelectorAll("[data-auto-submit-week]").forEach((element) => {
      if (!(element instanceof HTMLSelectElement)) return;
      element.addEventListener("change", () => {
        const selectedWeek = Number(element.value);
        if (!Number.isInteger(selectedWeek) || selectedWeek < 1 || selectedWeek > 45) return;
        window.location.assign(\`/\${lang}/bible-reading/?date=\${dateKey}&week=\${selectedWeek}\`);
      });
    });

    document.querySelectorAll("[data-save-reading-week]").forEach((button) => {
      if (!(button instanceof HTMLButtonElement)) return;
      button.addEventListener("click", () => {
        const select = document.querySelector("[data-auto-submit-week]");
        if (!(select instanceof HTMLSelectElement)) return;
        const selectedWeek = Number(select.value);
        if (!Number.isInteger(selectedWeek) || selectedWeek < 1 || selectedWeek > 45) return;
        const baseWeekForToday = wrapWeek(selectedWeek - weekDeltaFromToday);
        localStorage.setItem(savedWeekStorageKey, String(baseWeekForToday));
        button.textContent = savedWeekLabel;
        window.setTimeout(() => {
          button.textContent = saveWeekLabel;
        }, 1400);
      });
    });

    if (!hasCustomBaseWeek) {
      const savedWeek = Number(localStorage.getItem(savedWeekStorageKey));
      const select = document.querySelector("[data-auto-submit-week]");
      if (select instanceof HTMLSelectElement && Number.isInteger(savedWeek) && savedWeek >= 1 && savedWeek <= 45) {
        const selectedWeek = wrapWeek(savedWeek + weekDeltaFromToday);
        window.location.replace(\`/\${lang}/bible-reading/?date=\${dateKey}&week=\${selectedWeek}\`);
      }
    }

    document.querySelectorAll("[data-random-playlist]").forEach((element) => {
      if (!(element instanceof HTMLIFrameElement)) return;
      const playlistId = element.dataset.randomPlaylist;
      const videoIds = element.dataset.videoIds?.split(",").filter(Boolean) ?? [];
      const randomCount = Number(element.dataset.randomCount || videoIds.length || 0);
      if (!playlistId || !Number.isFinite(randomCount) || randomCount < 1) return;
      const randomIndex = Math.floor(Math.random() * randomCount);
      const videoId = videoIds[randomIndex];
      element.src = videoId
        ? \`https://www.youtube-nocookie.com/embed/\${videoId}?list=\${playlistId}&index=\${randomIndex + 1}&rel=0\`
        : \`https://www.youtube-nocookie.com/embed/videoseries?list=\${playlistId}&index=\${randomIndex + 1}&rel=0\`;
      const openLink = element.closest("article")?.querySelector("[data-playlist-open]");
      if (openLink instanceof HTMLAnchorElement) {
        openLink.href = videoId
          ? \`https://www.youtube.com/watch?v=\${videoId}&list=\${playlistId}&index=\${randomIndex + 1}\`
          : \`https://www.youtube.com/playlist?list=\${playlistId}&index=\${randomIndex + 1}\`;
      }
    });
  })();<\/script>` })}`;
}, "/Users/udmission/Documents/Codex/2026-08-08/new-chat-3/truth-for-life-and-mission/src/pages/[lang]/bible-reading/index.astro", void 0);
var $$file = "/Users/udmission/Documents/Codex/2026-08-08/new-chat-3/truth-for-life-and-mission/src/pages/[lang]/bible-reading/index.astro";
var $$url = "/[lang]/bible-reading";
//#endregion
//#region \0virtual:astro:page:src/pages/[lang]/bible-reading/index@_@astro
var page = () => bible_reading_exports;
//#endregion
export { page };
