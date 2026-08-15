import { bindings } from "./cloudflare";

interface DevotionalText {
  title: string;
  summary: string;
  body: string;
}

interface ArticleTranslationResult {
  response?: { title?: string; summary?: string } | string;
}

interface ArticleSegmentResult {
  response?: string;
}

const ARTICLE_MODEL = "@cf/meta/llama-3.3-70b-instruct-fp8-fast" as const;
const DEVOTIONAL_MODEL = "@cf/meta/llama-3.1-8b-instruct-fp8" as const;

export async function saveAutomaticDevotionalTranslations(
  resourceId: number,
  source: DevotionalText,
  updatedAt: string
): Promise<boolean> {
  if (!bindings.AI || bindings.AI_ENABLED !== "true") return false;

  try {
    const en = await translateDevotional(source, "en");
    await translationStatement(resourceId, "en", en, updatedAt).run();
    return true;
  } catch (error) {
    console.error("Automatic devotional translation failed", error);
    return false;
  }
}

export async function translateDevotionalToEnglish(source: DevotionalText): Promise<DevotionalText> {
  if (!bindings.AI || bindings.AI_ENABLED !== "true") throw new Error("AI translation is disabled");
  return translateDevotional(source, "en");
}

export async function saveAutomaticArticleEnglishTranslation(
  resourceId: number,
  source: DevotionalText,
  updatedAt: string,
  sourceLanguage: "th" | "ko" = "th"
): Promise<boolean> {
  if (!bindings.AI || bindings.AI_ENABLED !== "true") return false;

  try {
    await saveAutomaticArticleEnglishHeader(resourceId, source, updatedAt, sourceLanguage);
    const parts = splitArticleBodyForTranslation(source.body);
    for (let index = 0; index < parts.length; index += 1) {
      await appendAutomaticArticleEnglishBodyPart(resourceId, parts[index], updatedAt, sourceLanguage, index === 0);
    }
    return true;
  } catch (error) {
    console.error("Automatic article translation failed", error);
    return false;
  }
}

export async function saveAutomaticArticleEnglishHeader(
  resourceId: number,
  source: DevotionalText,
  updatedAt: string,
  sourceLanguage: "th" | "ko" = "th"
): Promise<void> {
  if (!bindings.AI || bindings.AI_ENABLED !== "true") throw new Error("AI translation is disabled");
  const languageName = sourceLanguage === "th" ? "Thai" : "Korean";
  const headerResult = await bindings.AI.run(ARTICLE_MODEL, {
      messages: [
        {
          role: "system",
          content: `Translate the supplied ${languageName} Protestant Christian title and summary into natural, faithful English. Do not summarize, shorten, expand, explain, or add content. Use standard Reformed Protestant terminology. Return only the requested JSON fields.`
        },
        {
          role: "user",
          content: `Title:\n${source.title}\n\nSummary:\n${source.summary}`
        }
      ],
      response_format: {
        type: "json_schema",
        json_schema: {
          type: "object",
          properties: {
            title: { type: "string" },
            summary: { type: "string" }
          },
          required: ["title", "summary"]
        }
      },
      max_tokens: 320,
      temperature: 0
    }) as ArticleTranslationResult;
  const header = typeof headerResult.response === "string"
    ? parseArticleJson(headerResult.response)
    : headerResult.response;
  if (!header?.title?.trim() || !header.summary?.trim()) {
    throw new Error("Incomplete English article header translation");
  }
  await translationStatement(resourceId, "en", {
    title: header.title.trim(),
    summary: header.summary.trim(),
    body: ""
  }, updatedAt).run();
}

export async function appendAutomaticArticleEnglishBodyPart(
  resourceId: number,
  sourcePart: string,
  updatedAt: string,
  sourceLanguage: "th" | "ko" = "th",
  resetBody = false
): Promise<void> {
  if (!bindings.AI || bindings.AI_ENABLED !== "true") throw new Error("AI translation is disabled");
  const languageName = sourceLanguage === "th" ? "Thai" : "Korean";
  const translated = await translateArticleSegment(sourcePart, languageName);
  await bindings.DB.prepare(`
    UPDATE resource_translations
    SET body = CASE
      WHEN ? = 1 OR body = '' THEN ?
      ELSE body || char(10) || char(10) || ?
    END,
    updated_at = ?
    WHERE resource_id = ? AND language = 'en'
  `).bind(resetBody ? 1 : 0, translated, translated, updatedAt, resourceId).run();
}

function parseArticleJson(value: string): { title?: string; summary?: string } | undefined {
  try {
    return JSON.parse(value.replace(/^```(?:json)?\s*|\s*```$/gi, "").trim()) as { title?: string; summary?: string };
  } catch {
    return undefined;
  }
}

export function splitArticleBodyForTranslation(body: string, maxChars = 2500): string[] {
  const paragraphs = body.split(/\n{2,}/).map((paragraph) => paragraph.trim()).filter(Boolean);
  const chunks: string[] = [];
  let current = "";
  for (const paragraph of paragraphs) {
    if (paragraph.length > maxChars) {
      if (current) chunks.push(current);
      for (let start = 0; start < paragraph.length; start += maxChars) {
        chunks.push(paragraph.slice(start, start + maxChars));
      }
      current = "";
      continue;
    }
    const next = current ? `${current}\n\n${paragraph}` : paragraph;
    if (next.length > maxChars) {
      chunks.push(current);
      current = paragraph;
    } else {
      current = next;
    }
  }
  if (current) chunks.push(current);
  return chunks;
}

async function translateArticleSegment(text: string, sourceLanguage: string): Promise<string> {
  const result = await bindings.AI!.run(ARTICLE_MODEL, {
    messages: [
      {
        role: "system",
        content: `Translate this ${sourceLanguage} Protestant Christian article segment into natural, faithful English. Preserve every paragraph, heading, number, Scripture reference, quotation, and theological distinction. Do not summarize, shorten, expand, explain, or add content. Use standard Reformed Protestant terminology. Return only the English translation.`
      },
      { role: "user", content: text }
    ],
    max_tokens: 3500,
    temperature: 0
  }) as ArticleSegmentResult;
  const translated = result.response?.trim() ?? "";
  if (!translated || translated.length < Math.max(80, text.length * 0.3)) {
    throw new Error("Incomplete English article segment translation");
  }
  return translated;
}

async function translateDevotional(source: DevotionalText, targetLanguage: "ko" | "en"): Promise<DevotionalText> {
  const languageName = targetLanguage === "ko" ? "Korean" : "English";
  const terminology = targetLanguage === "ko"
    ? "Use natural Korean Protestant devotional language and standard Reformed terminology. Always translate พระเจ้า as 하나님, never 하느님."
    : "Use natural English Protestant devotional language and standard Reformed terminology.";
  const paragraphs = source.body.split(/\n{2,}/).map((paragraph) => paragraph.trim()).filter(Boolean);
  const [title, ...translatedParagraphs] = await Promise.all([
    translateDevotionalSegment(source.title, languageName, terminology, "title"),
    ...paragraphs.map((paragraph) => translateDevotionalSegment(paragraph, languageName, terminology, "paragraph"))
  ]);
  const body = translatedParagraphs.join("\n\n").trim();
  const minimumLength = source.body.length * 0.3;
  const maximumLength = targetLanguage === "ko" ? source.body.length * 0.9 + 80 : source.body.length * 1.5 + 120;
  if (!title || body.length < minimumLength || body.length > maximumLength || translatedParagraphs.length !== paragraphs.length) {
    throw new Error(`Incomplete ${targetLanguage} devotional translation`);
  }
  return { title, summary: "", body };
}

async function translateDevotionalSegment(
  text: string,
  languageName: string,
  terminology: string,
  kind: "title" | "paragraph"
): Promise<string> {
  let translated = await runDevotionalSegment(text, languageName, terminology, kind, false);
  if (needsDevotionalRetry(translated, text, languageName)) {
    translated = await runDevotionalSegment(text, languageName, terminology, kind, true);
  }
  if (!translated || needsDevotionalRetry(translated, text, languageName)) {
    throw new Error(`Invalid ${languageName} devotional ${kind} translation`);
  }
  return translated;
}

function needsDevotionalRetry(translated: string, source: string, languageName: string): boolean {
  const maximumLength = languageName === "Korean" ? source.length * 1.25 + 100 : source.length * 2 + 120;
  const wrongScript = languageName === "Korean"
    ? /[A-Za-zÀ-žぁ-ゟ゠-ヿ一-龯]/u.test(translated)
    : /[가-힣ぁ-ゟ゠-ヿ一-龯]/u.test(translated);
  return /[ก-๙]/u.test(translated) || wrongScript || translated.length > maximumLength;
}

async function runDevotionalSegment(
  text: string,
  languageName: string,
  terminology: string,
  kind: "title" | "paragraph",
  strict: boolean
): Promise<string> {
  const result = await bindings.AI!.run(strict ? ARTICLE_MODEL : DEVOTIONAL_MODEL, {
    messages: [
      {
        role: "system",
        content: `Translate this Thai Gospel devotional ${kind} faithfully into ${languageName}. ${terminology} Preserve every sentence and the full meaning. Do not summarize, shorten, expand, explain, or add content. Return only the translation.${strict ? ` The output must be entirely in ${languageName} and must contain zero Thai characters.` : ""}`
      },
      { role: "user", content: text }
    ],
    max_tokens: kind === "title" ? 120 : strict ? 600 : 350,
    temperature: 0,
    repetition_penalty: 1.15,
    frequency_penalty: 0.2
  }) as ArticleSegmentResult;
  const translated = result.response?.trim() ?? "";
  if (!translated) throw new Error(`Empty ${languageName} devotional ${kind}`);
  return translated;
}

function translationStatement(
  resourceId: number,
  language: "ko" | "en",
  translation: DevotionalText,
  updatedAt: string
) {
  return bindings.DB.prepare(`
    INSERT INTO resource_translations (
      resource_id, language, title, summary, body, created_at, updated_at
    ) VALUES (?, ?, ?, ?, ?, ?, ?)
    ON CONFLICT(resource_id, language) DO UPDATE SET
      title = excluded.title,
      summary = excluded.summary,
      body = excluded.body,
      updated_at = excluded.updated_at
  `).bind(
    resourceId,
    language,
    translation.title,
    translation.summary,
    translation.body,
    updatedAt,
    updatedAt
  );
}
