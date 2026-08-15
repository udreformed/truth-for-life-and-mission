globalThis.process ??= {};
globalThis.process.env ??= {};
//#region src/lib/devotional-text.ts
var englishOnlyPattern = /^[“"']?[A-Za-z0-9\s,.;:'"!?()[\]/\-–—]+[”"']?$/;
var removableKoreanDevotionalLabels = [
	/^(?:영어\s*)?(?:원문\s*)?(?:짧은\s*)?(?:인용문|인용|발췌|quote|quotation|source excerpt|english quote)/i,
	/^(?:한국어\s*)?(?:의미\s*)?(?:자동\s*)?(?:번역|번역문|translation|translated)/i,
	/^AI\s*(?:한국어\s*)?(?:의미\s*)?(?:번역|요약)/i,
	/^(?:원문\s*)?(?:직역|의역)\s*:/i
];
function isMostlyEnglishOnly(text) {
	const compact = text.replace(/\s+/g, " ").trim();
	if (!compact || /[가-힣ㄱ-ㅎㅏ-ㅣ]/.test(compact)) return false;
	return (compact.match(/[A-Za-z]/g)?.length ?? 0) >= 8 && englishOnlyPattern.test(compact);
}
function isLikelyTranslatedQuote(text) {
	const compact = text.replace(/\s+/g, " ").trim();
	if (!/[가-힣ㄱ-ㅎㅏ-ㅣ]/.test(compact)) return false;
	if (compact.length > 260) return false;
	if (/^기도\b/.test(compact)) return false;
	return /^[“"']/.test(compact) || /[”"']$/.test(compact) || compact.includes(".”");
}
function isInlineEnglishQuoteWithTranslation(text) {
	const compact = text.replace(/\s+/g, " ").trim();
	if (compact.length > 700) return false;
	if ((compact.match(/[A-Za-z]/g)?.length ?? 0) < 45) return false;
	if (!/[가-힣ㄱ-ㅎㅏ-ㅣก-๙]/.test(compact)) return false;
	return /[“”"']/.test(compact) || /[—–-]\s*[A-Za-z]/.test(compact);
}
function stripKoreanGospelDevotionalExtras(body) {
	if (!body) return "";
	const cleanedBlocks = [];
	let skipNextTranslatedQuote = false;
	const blocks = body.replace(/\r\n?/g, "\n").split(/\n{2,}/).map((block) => block.trim());
	for (const block of blocks) {
		if (!block) continue;
		const compact = block.replace(/\s+/g, " ").trim();
		const isRemovableLabel = removableKoreanDevotionalLabels.some((pattern) => pattern.test(compact));
		const isEnglishQuote = isMostlyEnglishOnly(compact);
		if (isRemovableLabel || isEnglishQuote || isInlineEnglishQuoteWithTranslation(compact)) {
			skipNextTranslatedQuote = true;
			continue;
		}
		if (skipNextTranslatedQuote && isLikelyTranslatedQuote(compact)) {
			skipNextTranslatedQuote = false;
			continue;
		}
		skipNextTranslatedQuote = false;
		cleanedBlocks.push(block);
	}
	return cleanedBlocks.join("\n\n").replace(/\n{3,}/g, "\n\n").trim();
}
function localizedGospelDevotionalBody(lang, body) {
	return lang === "ko" ? stripKoreanGospelDevotionalExtras(body) : body ?? "";
}
//#endregion
export { localizedGospelDevotionalBody as t };
