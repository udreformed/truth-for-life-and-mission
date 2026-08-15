import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const sourceFiles = [
  { file: "database/july-devotionals-2026.sql", language: "th" },
  { file: "database/july-korean-reviewed-html.sql", language: "ko" },
  { file: "database/august-devotionals-2026.sql", language: "th" },
  { file: "database/august-korean-reviewed-html.sql", language: "ko" },
  { file: "database/september-devotionals-2026.sql", language: "th" },
  { file: "database/september-devotionals-2026.sql", language: "ko" },
  { file: "database/october-devotionals-2026.sql", language: "th" },
  { file: "database/october-devotionals-2026.sql", language: "ko" },
  { file: "database/november-devotionals-2026.sql", language: "th" },
  { file: "database/november-devotionals-2026.sql", language: "ko" },
].filter(({ file }) => fs.existsSync(path.join(root, file)));

function unescapeSqlString(value) {
  return value.replace(/''/g, "'");
}

function splitSqlStrings(input) {
  const values = [];
  let index = 0;
  while (index < input.length) {
    while (index < input.length && /[\s,]/.test(input[index])) index += 1;
    if (input[index] !== "'") break;
    index += 1;
    let value = "";
    while (index < input.length) {
      const char = input[index];
      if (char === "'" && input[index + 1] === "'") {
        value += "'";
        index += 2;
        continue;
      }
      if (char === "'") {
        index += 1;
        break;
      }
      value += char;
      index += 1;
    }
    values.push(value);
    while (index < input.length && input[index] !== ",") {
      if (input[index] === "\n" && input.slice(index, index + 2) === ");") break;
      index += 1;
    }
    if (input[index] === ",") index += 1;
  }
  return values.map(unescapeSqlString);
}

function extractDevotionals(sql, language) {
  const resources = new Map();
  const resourcePattern = /VALUES\s*\('devotional',\s*'([^']+)',\s*'published',\s*'(\d{4}-\d{2}-\d{2})',\s*(\d+)/g;
  for (const match of sql.matchAll(resourcePattern)) {
    resources.set(match[1], {
      slug: match[1],
      content_date: match[2],
      series_slot: Number(match[3]),
    });
  }

  const items = [];
  const translationPattern = /SELECT id,\s*'([^']+)',\s*([\s\S]*?)\s*,\s*CURRENT_TIMESTAMP,\s*CURRENT_TIMESTAMP FROM resources WHERE slug = '([^']+)'/g;
  for (const match of sql.matchAll(translationPattern)) {
    const statementLanguage = match[1];
    if (statementLanguage !== language) continue;
    const [title = "", summary = "", body = ""] = splitSqlStrings(match[2]);
    const resource = resources.get(match[3]) ?? {
      slug: match[3],
      content_date: match[3].match(/\d{4}-\d{2}-\d{2}/)?.[0] ?? "",
      series_slot: 1,
    };
    if (!resource.content_date || !title || !body) continue;
    items.push({
      ...resource,
      language,
      title,
      summary,
      body,
    });
  }
  return items;
}

const devotionals = [];
for (const { file, language } of sourceFiles) {
  const sql = fs.readFileSync(path.join(root, file), "utf8");
  devotionals.push(...extractDevotionals(sql, language));
}

const englishBackupFile = path.join(root, "database/english-devotionals-remote.json");
if (fs.existsSync(englishBackupFile)) {
  const englishDevotionals = JSON.parse(fs.readFileSync(englishBackupFile, "utf8"));
  devotionals.push(...englishDevotionals.map((item) => ({
    slug: item.slug,
    content_date: item.content_date,
    series_slot: Number(item.series_slot ?? 1),
    language: "en",
    title: item.title ?? "",
    summary: item.summary ?? "",
    body: item.body ?? "",
  })).filter((item) => item.slug && item.content_date && item.title && item.body));
}

devotionals.sort((a, b) =>
  a.content_date.localeCompare(b.content_date) ||
  a.language.localeCompare(b.language) ||
  a.series_slot - b.series_slot
);

const output = `import type { Language } from "./i18n";
import type { ResourceSummary } from "./resources";

export const staticGospelDevotionals = ${JSON.stringify(devotionals, null, 2)} as const;

export function listStaticGospelDevotionals(language: Language, requestedDate: string, limit = 3): ResourceSummary[] {
  const monthDay = requestedDate.slice(5, 10);
  return staticGospelDevotionals
    .filter((item) => item.language === language && item.content_date.slice(5, 10) === monthDay)
    .slice(0, limit)
    .map((item, index) => ({
      id: -5000 - index,
      type: "devotional",
      slug: item.slug,
      status: "published",
      title: item.title,
      summary: item.summary,
      body: item.body,
      language,
      content_date: item.content_date,
      series_slot: item.series_slot,
      author_email: "thaigodpleasing@naver.com",
      author_name: "Yongjin Choi",
      published_at: item.content_date + "T00:00:00.000Z",
    }));
}
`;

fs.writeFileSync(path.join(root, "src/lib/gospel-devotional-static.ts"), output);
console.log(`Generated ${devotionals.length} static Gospel devotionals.`);
