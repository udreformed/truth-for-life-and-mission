import { bindings } from "./cloudflare";

export type ExternalDevotionalSource = "solid-joys" | "banner-of-truth";

export interface ExternalDevotional {
  source: ExternalDevotionalSource;
  content_date: string;
  source_url: string;
  title_en: string;
  excerpt_en: string;
  summary_en: string;
  title_th: string;
  summary_th: string;
  title_ko: string;
  summary_ko: string;
}

interface GeneratedLocalization {
  summary_en: string;
  title_th: string;
  summary_th: string;
  title_ko: string;
  summary_ko: string;
}

interface TextGenerationResult {
  response?: GeneratedLocalization | string;
}

const TEXT_MODEL = "@cf/meta/llama-3.3-70b-instruct-fp8-fast" as const;
const refreshes = new Map<string, Promise<ExternalDevotional[]>>();

export function needsExternalDevotionalRefresh(item: ExternalDevotional): boolean {
  return !item.excerpt_en
    || wordCount(item.excerpt_en) > 20
    || sentenceCount(item.summary_en) < 3
    || cleanText(item.summary_th).length < 100
    || cleanText(item.summary_ko).length < 80
    || /page not found|error 404|that page can't be found/i.test(`${item.title_en} ${item.excerpt_en}`)
    || /\b(?:spiritually|practically|central truth)\b/i.test(item.summary_th)
    || containsUnexpectedScript(item.title_th)
    || containsUnexpectedScript(item.summary_th)
    || containsUnexpectedKoreanScript(item.title_ko)
    || containsUnexpectedKoreanScript(item.summary_ko);
}

export async function getCachedDailyExternalDevotionals(contentDate: string): Promise<ExternalDevotional[]> {
  const cached = await bindings.DB.prepare(`
    SELECT source, content_date, source_url, title_en, excerpt_en, summary_en,
      title_th, summary_th, title_ko, summary_ko
    FROM external_devotional_cache
    WHERE content_date = ?
    ORDER BY source
  `).bind(contentDate).all<ExternalDevotional>();
  return cached.results;
}

export function refreshDailyExternalDevotionals(
  contentDate: string,
  monthName: string,
  dayNumber: string
): Promise<ExternalDevotional[]> {
  const existing = refreshes.get(contentDate);
  if (existing) return existing;
  const refresh = getDailyExternalDevotionals(contentDate, monthName, dayNumber)
    .finally(() => refreshes.delete(contentDate));
  refreshes.set(contentDate, refresh);
  return refresh;
}

export async function getDailyExternalDevotionals(
  contentDate: string,
  monthName: string,
  dayNumber: string
): Promise<ExternalDevotional[]> {
  const cached = await getCachedDailyExternalDevotionals(contentDate);
  const found = new Map(cached.map((item) => [item.source, item]));
  const missing = (["solid-joys", "banner-of-truth"] as const).filter((source) => {
    const item = found.get(source);
    return !item || needsExternalDevotionalRefresh(item);
  });
  if (!missing.length) return cached;

  const generated = await Promise.all(missing.map(async (source): Promise<ExternalDevotional | null> => {
    try {
      return source === "solid-joys"
        ? await buildSolidJoys(contentDate)
        : await buildBannerOfTruth(contentDate, monthName, dayNumber);
    } catch (error) {
      console.error(`Failed to prepare ${source} daily summary`, error);
      return null;
    }
  }));

  const completed = generated.filter((item): item is ExternalDevotional => Boolean(item));
  if (completed.length) {
    await bindings.DB.batch(completed.map((item) => bindings.DB.prepare(`
      INSERT INTO external_devotional_cache (
        source, content_date, source_url, title_en, excerpt_en, summary_en,
        title_th, summary_th, title_ko, summary_ko, created_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      ON CONFLICT(source, content_date) DO UPDATE SET
        source_url = excluded.source_url,
        title_en = excluded.title_en,
        excerpt_en = excluded.excerpt_en,
        summary_en = excluded.summary_en,
        title_th = excluded.title_th,
        summary_th = excluded.summary_th,
        title_ko = excluded.title_ko,
        summary_ko = excluded.summary_ko
    `).bind(
      item.source, item.content_date, item.source_url, item.title_en, item.excerpt_en, item.summary_en,
      item.title_th, item.summary_th, item.title_ko, item.summary_ko, new Date().toISOString()
    )));
    completed.forEach((item) => found.set(item.source, item));
  }

  return Array.from(found.values());
}

async function buildSolidJoys(contentDate: string): Promise<ExternalDevotional> {
  const response = await fetch("https://feed.desiringgod.org/solid-joys-audio.rss", {
    headers: { "User-Agent": "Truth for Life and Mission daily reader" }
  });
  if (!response.ok) throw new Error(`Solid Joys RSS returned ${response.status}`);
  const xml = await response.text();
  const items = Array.from(xml.matchAll(/<item>([\s\S]*?)<\/item>/gi)).map((match) => match[1]);
  const selected = items.find((item) => {
    const published = tagValue(item, "pubDate");
    return published && bangkokDateKey(new Date(published)) === contentDate;
  }) ?? items[0];
  if (!selected) throw new Error("Solid Joys RSS has no episodes");

  const title = tagValue(selected, "title");
  const excerpt = cleanText(tagValue(selected, "description")).slice(0, 520);
  const sourceUrl = tagValue(selected, "link") || "https://www.desiringgod.org/solid-joys";
  if (!title || !excerpt) throw new Error("Solid Joys episode metadata is incomplete");
  return localize("solid-joys", contentDate, sourceUrl, title, excerpt);
}

async function buildBannerOfTruth(
  contentDate: string,
  _monthName: string,
  _dayNumber: string
): Promise<ExternalDevotional> {
  const sourceUrl = "https://banneroftruth.org/us/valley/";
  const textResponse = await fetch("https://r.jina.ai/http://banneroftruth.org/us/valley/", {
    headers: { "User-Agent": "Truth for Life and Mission daily reader" }
  });
  if (!textResponse.ok) throw new Error(`Banner daily devotional returned ${textResponse.status}`);
  const text = await textResponse.text();
  const title = cleanText(text.match(/^Title:\s*(.+)$/m)?.[1] ?? "");
  const devotionalText = (text.split("Markdown Content:")[1] ?? "").split("* * *")[0];
  const sourceExcerpt = cleanText(devotionalText).slice(0, 520);
  if (!title || !sourceExcerpt) throw new Error("Banner devotional metadata is incomplete");
  return localize("banner-of-truth", contentDate, sourceUrl, title, sourceExcerpt);
}

async function localize(
  source: ExternalDevotionalSource,
  contentDate: string,
  sourceUrl: string,
  titleEn: string,
  sourceText: string
): Promise<ExternalDevotional> {
  const localized = await generateLocalization(titleEn, sourceText);
  return {
    source,
    content_date: contentDate,
    source_url: sourceUrl,
    title_en: titleEn,
    excerpt_en: makeShortExcerpt(sourceText),
    summary_en: localized.summary_en,
    title_th: localized.title_th,
    summary_th: localized.summary_th,
    title_ko: localized.title_ko,
    summary_ko: localized.summary_ko
  };
}

async function generateLocalization(title: string, sourceText: string): Promise<GeneratedLocalization> {
  const fallback: GeneratedLocalization = {
    summary_en: sourceText.slice(0, 220),
    title_th: title,
    summary_th: sourceText.slice(0, 220),
    title_ko: title,
    summary_ko: sourceText.slice(0, 220)
  };
  if (!bindings.AI || bindings.AI_ENABLED !== "true") return fallback;
  const result = await bindings.AI.run(TEXT_MODEL, {
    messages: [
      {
        role: "system",
        content: "Create a faithful devotional meaning-summary from only the supplied English title and source excerpt. Do not quote the source and do not invent Bible verses, quotations, names, or facts. Write exactly three complete sentences in each language. Each summary should explain the central truth, its spiritual significance, and one practical response; keep each sentence concise. The English, Thai, and Korean summaries must carry the same meaning. Translate the title naturally into Thai and Korean for Protestant Christian readers. Korean must use 하나님, never 하느님, and use Hangul only, with no Chinese or Hanja characters. Translate discouragement as 낙심 or 낙담, not 우울증 unless the source explicitly means clinical depression. Thai must use standard Protestant Christian vocabulary and contain no Korean Hangul or untranslated English words."
      },
      { role: "user", content: `English title: ${title}\nEnglish source excerpt: ${sourceText}` }
    ],
    response_format: {
      type: "json_schema",
      json_schema: {
        type: "object",
        properties: {
          summary_en: { type: "string" },
          title_th: { type: "string" },
          summary_th: { type: "string" },
          title_ko: { type: "string" },
          summary_ko: { type: "string" }
        },
        required: ["summary_en", "title_th", "summary_th", "title_ko", "summary_ko"]
      }
    },
    max_tokens: 620,
    temperature: 0.1
  }) as TextGenerationResult;
  const response = typeof result.response === "string"
    ? parseGeneratedJson(result.response)
    : result.response;
  if (!isGeneratedLocalization(response)) throw new Error("AI returned incomplete devotional localization");
  const cleaned = {
    summary_en: cleanText(response.summary_en),
    title_th: cleanThaiLocalization(response.title_th),
    summary_th: cleanThaiLocalization(response.summary_th),
    title_ko: cleanKoreanLocalization(response.title_ko),
    summary_ko: cleanKoreanLocalization(response.summary_ko)
  };
  return containsUnexpectedScript(cleaned.title_th) || containsUnexpectedScript(cleaned.summary_th)
    || containsUnexpectedKoreanScript(cleaned.title_ko) || containsUnexpectedKoreanScript(cleaned.summary_ko)
    ? await repairLocalization(cleaned, title, sourceText)
    : cleaned;
}

async function repairLocalization(
  localization: GeneratedLocalization,
  title: string,
  sourceText: string
): Promise<GeneratedLocalization> {
  if (!bindings.AI) return localization;
  const result = await bindings.AI.run(TEXT_MODEL, {
    messages: [
      {
        role: "system",
        content: "Correct the Thai and Korean title and summary. Thai must contain only natural Thai wording with no Korean Hangul, Chinese characters, or untranslated English words, and use standard Protestant Christian vocabulary. Korean must use natural modern Hangul only with no Chinese or Hanja characters, and use 하나님, never 하느님. Translate discouragement as 낙심 or 낙담, not 우울증 unless the source explicitly means clinical depression. Remain faithful to the supplied English text and do not add Bible verses or facts."
      },
      {
        role: "user",
        content: `English title: ${title}\nEnglish source excerpt: ${sourceText}\nThai title to correct: ${localization.title_th}\nThai summary to correct: ${localization.summary_th}\nKorean title to correct: ${localization.title_ko}\nKorean summary to correct: ${localization.summary_ko}`
      }
    ],
    response_format: {
      type: "json_schema",
      json_schema: {
        type: "object",
        properties: {
          title_th: { type: "string" },
          summary_th: { type: "string" },
          title_ko: { type: "string" },
          summary_ko: { type: "string" }
        },
        required: ["title_th", "summary_th", "title_ko", "summary_ko"]
      }
    },
    max_tokens: 260,
    temperature: 0
  }) as { response?: { title_ko?: string; summary_ko?: string } | string };
  const parsed = typeof result.response === "string"
    ? parseGeneratedJson(result.response)
    : result.response;
  const corrected = parsed && typeof parsed === "object"
    ? parsed as Record<string, unknown>
    : {};
  const titleTh = typeof corrected.title_th === "string" ? cleanText(corrected.title_th) : localization.title_th;
  const summaryTh = typeof corrected.summary_th === "string" ? cleanText(corrected.summary_th) : localization.summary_th;
  const titleKo = typeof corrected.title_ko === "string" ? cleanText(corrected.title_ko) : localization.title_ko;
  const summaryKo = typeof corrected.summary_ko === "string" ? cleanText(corrected.summary_ko) : localization.summary_ko;
  return {
    ...localization,
    title_th: cleanThaiLocalization(titleTh),
    summary_th: cleanThaiLocalization(summaryTh),
    title_ko: cleanKoreanLocalization(titleKo),
    summary_ko: cleanKoreanLocalization(summaryKo)
  };
}

function containsUnexpectedKoreanScript(value: string): boolean {
  return /[\u0400-\u04ff\u0900-\u0dff\u0e00-\u0e7f\u3400-\u9fff]/u.test(value);
}

function containsUnexpectedScript(value: string): boolean {
  return /[\u0400-\u04ff\u0900-\u0dff\u3400-\u9fff\uac00-\ud7af]/u.test(value);
}

function cleanThaiLocalization(value: string): string {
  return replaceCommonCjk(value)
    .replace(/낙심|낙담/g, "ความท้อแท้")
    .replace(/[\uac00-\ud7af]/gu, "")
    .replace(/\s+/g, " ")
    .trim();
}

function cleanKoreanLocalization(value: string): string {
  return replaceCommonCjk(value)
    .replace(/духов적인|духовный/giu, "영적인")
    .replace(/[\u0400-\u04ff\u0900-\u0dff\u0e00-\u0e7f]/gu, "")
    .replace(/\s+/g, " ")
    .trim();
}

function replaceCommonCjk(value: string): string {
  return value
    .replace(/พระวचन/g, "พระวจนะ")
    .replace(/力量/g, "힘")
    .replace(/克服/g, "เอาชนะ")
    .replace(/[\u0900-\u0dff]/gu, "")
    .replace(/[\u3400-\u9fff]/gu, "")
    .replace(/\s+/g, " ")
    .trim();
}

function parseGeneratedJson(value: string): unknown {
  try {
    return JSON.parse(value.replace(/^```(?:json)?\s*|\s*```$/gi, "").trim());
  } catch {
    return null;
  }
}

function isGeneratedLocalization(value: unknown): value is GeneratedLocalization {
  if (!value || typeof value !== "object") return false;
  const candidate = value as Record<string, unknown>;
  return ["summary_en", "title_th", "summary_th", "title_ko", "summary_ko"]
    .every((key) => typeof candidate[key] === "string" && Boolean((candidate[key] as string).trim()));
}

function tagValue(fragment: string, tag: string): string {
  const match = fragment.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "i"));
  return cleanText(match?.[1] ?? "");
}

function cleanText(value: string): string {
  return decodeEntities(value
    .replace(/<!\[CDATA\[|\]\]>/g, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim());
}

function decodeEntities(value: string): string {
  const named: Record<string, string> = { amp: "&", quot: '"', apos: "'", lt: "<", gt: ">", nbsp: " " };
  return value
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCodePoint(parseInt(code, 16)))
    .replace(/&([a-z]+);/gi, (entity, name) => named[name.toLowerCase()] ?? entity);
}

function bangkokDateKey(date: Date): string {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Bangkok", year: "numeric", month: "2-digit", day: "2-digit"
  }).formatToParts(date);
  const value = (type: Intl.DateTimeFormatPartTypes) => parts.find((part) => part.type === type)?.value ?? "";
  return `${value("year")}-${value("month")}-${value("day")}`;
}

function makeShortExcerpt(value: string): string {
  const words = cleanText(value).split(/\s+/).filter(Boolean);
  if (words.length <= 20) return words.join(" ");
  return `${words.slice(0, 20).join(" ")}…`;
}

function wordCount(value: string): number {
  return cleanText(value).split(/\s+/).filter(Boolean).length;
}

function sentenceCount(value: string): number {
  return cleanText(value)
    .split(/(?<=[.!?。！？])\s*|\n+/u)
    .map((part) => part.trim())
    .filter(Boolean).length;
}
