import type { Language } from "./i18n";
import { bindings } from "./cloudflare";
import { readingSummaryData, type ReadingSummaryText } from "./reading-summary-data";

const READING_SUMMARY_MODEL = "@cf/meta/llama-3.3-70b-instruct-fp8-fast" as const;
const summariesByWeek = readingSummaryData as Record<number, Record<number, Record<"th" | "ko", ReadingSummaryText>>>;

interface AiTranslationResult {
  response?: { title?: string; body?: string } | string;
}

export interface LocalizedReadingSummary extends ReadingSummaryText {
  translated?: boolean;
}

export async function getLocalizedReadingSummary(
  language: Language,
  week: number,
  day: number
): Promise<LocalizedReadingSummary | undefined> {
  if (day < 0 || day > 6) return undefined;
  const weekEntries = summariesByWeek[week];
  const entry = weekEntries?.[day] ?? (day === 0 ? buildWeeklyOverview(language === "th" ? "th" : "ko", week, weekEntries) : undefined);
  if (!entry) return undefined;
  if (day === 0 && !("th" in entry)) return entry;
  if (language === "th" || language === "ko") return entry[language];
  const cached = await getCachedEnglishReadingSummary(week, day);
  if (cached) return { ...cached, translated: true };
  const translated = await translateKoreanReadingSummaryToEnglish(entry.ko);
  if (translated) {
    await saveEnglishReadingSummary(week, day, translated);
    return { ...translated, translated: true };
  }
  return { ...entry.ko, translated: false };
}

function buildWeeklyOverview(
  language: "th" | "ko",
  week: number,
  entries: Record<number, Record<"th" | "ko", ReadingSummaryText>> | undefined
): ReadingSummaryText | undefined {
  if (!entries) return undefined;
  const dailyTitles = [1, 2, 3, 4, 5, 6]
    .map((day) => entries[day]?.[language]?.title?.trim())
    .filter((title): title is string => Boolean(title));
  if (!dailyTitles.length) return undefined;

  if (language === "th") {
    return {
      title: `สรุปการอ่านพระคัมภีร์ สัปดาห์ที่ ${week}`,
      body: `สัปดาห์นี้จะอ่านพระคัมภีร์ตามลำดับดังนี้: ${dailyTitles.join("; ")} เริ่มต้นด้วยวิดีโอแนะนำในวันอาทิตย์เพื่อมองเห็นภาพรวม แล้วอ่านพระคัมภีร์ตามเนื้อหาที่กำหนดตั้งแต่วันจันทร์ถึงวันเสาร์`
    };
  }

  return {
    title: `${week}주차 통독 안내`,
    body: `이번 주에는 다음 본문을 차례로 읽습니다: ${dailyTitles.join("; ")}. 주일 설명 영상으로 전체 흐름을 먼저 살펴본 뒤, 월요일부터 토요일까지 정해진 본문을 읽으세요.`
  };
}

async function getCachedEnglishReadingSummary(week: number, day: number): Promise<ReadingSummaryText | undefined> {
  if (!bindings.DB) return undefined;
  try {
    await ensureReadingSummaryCacheTable();
    const row = await bindings.DB.prepare(`
      SELECT title, body
      FROM reading_summary_cache
      WHERE week = ? AND day = ? AND language = 'en'
      LIMIT 1
    `).bind(week, day).first<{ title: string; body: string }>();
    if (!row?.title?.trim() || !row.body?.trim()) return undefined;
    return { title: row.title, body: row.body };
  } catch (error) {
    console.error("Bible-reading summary cache lookup failed", error);
    return undefined;
  }
}

async function saveEnglishReadingSummary(week: number, day: number, summary: ReadingSummaryText): Promise<void> {
  if (!bindings.DB) return;
  try {
    await ensureReadingSummaryCacheTable();
    await bindings.DB.prepare(`
      INSERT INTO reading_summary_cache (week, day, language, title, body, updated_at)
      VALUES (?, ?, 'en', ?, ?, ?)
      ON CONFLICT(week, day, language) DO UPDATE SET
        title = excluded.title,
        body = excluded.body,
        updated_at = excluded.updated_at
    `).bind(week, day, summary.title, summary.body, new Date().toISOString()).run();
  } catch (error) {
    console.error("Bible-reading summary cache save failed", error);
  }
}

async function ensureReadingSummaryCacheTable(): Promise<void> {
  if (!bindings.DB) return;
  await bindings.DB.prepare(`
    CREATE TABLE IF NOT EXISTS reading_summary_cache (
      week INTEGER NOT NULL,
      day INTEGER NOT NULL,
      language TEXT NOT NULL,
      title TEXT NOT NULL,
      body TEXT NOT NULL,
      updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
      PRIMARY KEY (week, day, language)
    )
  `).run();
}

async function translateKoreanReadingSummaryToEnglish(source: ReadingSummaryText): Promise<ReadingSummaryText | undefined> {
  if (!bindings.AI || bindings.AI_ENABLED !== "true") return undefined;
  try {
    const result = await bindings.AI.run(READING_SUMMARY_MODEL, {
      messages: [
        {
          role: "system",
          content: "Translate the supplied Korean Bible-reading summary into natural, polished English for Protestant Christian readers. Preserve the title and the full meaning of the body. Do not summarize, shorten, expand, add commentary, or invent details. Use standard biblical and Reformed Protestant terminology. Return only JSON with title and body."
        },
        {
          role: "user",
          content: `Title:\n${source.title}\n\nBody:\n${source.body}`
        }
      ],
      response_format: {
        type: "json_schema",
        json_schema: {
          type: "object",
          properties: {
            title: { type: "string" },
            body: { type: "string" }
          },
          required: ["title", "body"]
        }
      },
      max_tokens: 1800,
      temperature: 0.1
    }) as AiTranslationResult;
    const parsed = typeof result.response === "string" ? parseTranslationJson(result.response) : result.response;
    const title = parsed?.title?.trim() ?? "";
    const body = parsed?.body?.trim() ?? "";
    if (!title || !body || /[가-힣]/u.test(`${title} ${body}`) || body.length < source.body.length * 0.35) {
      throw new Error("Incomplete English Bible-reading summary translation");
    }
    return { title, body };
  } catch (error) {
    console.error("Bible-reading summary English translation failed", error);
    return undefined;
  }
}

function parseTranslationJson(value: string): { title?: string; body?: string } | undefined {
  try {
    return JSON.parse(value.replace(/^```(?:json)?\s*|\s*```$/gi, "").trim()) as { title?: string; body?: string };
  } catch {
    return undefined;
  }
}
