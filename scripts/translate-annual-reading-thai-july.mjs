import { readFile, writeFile } from "node:fs/promises";

const sourceUrl = new URL("../src/data/annual-bible-reading.json", import.meta.url);
const outputUrl = new URL("../work/annual-bible-reading-thai-july-draft.json", import.meta.url);
const source = JSON.parse(await readFile(sourceUrl, "utf8")).filter((day) => day.month === 7);

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function translate(text, attempt = 0) {
  const url = new URL("https://translate.googleapis.com/translate_a/single");
  url.searchParams.set("client", "gtx");
  url.searchParams.set("sl", "ko");
  url.searchParams.set("tl", "th");
  url.searchParams.set("dt", "t");
  url.searchParams.set("q", text);
  try {
    const response = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    return data[0].map((part) => part[0]).join("");
  } catch (error) {
    if (attempt >= 5) throw error;
    await sleep(800 * (attempt + 1));
    return translate(text, attempt + 1);
  }
}

const results = new Array(source.length);
let cursor = 0;
let completed = 0;

async function worker() {
  while (true) {
    const index = cursor++;
    if (index >= source.length) return;
    const day = source[index];
    const [firstSummaryTh, secondSummaryTh] = await Promise.all([
      translate(day.firstSummary),
      translate(day.secondSummary)
    ]);
    results[index] = {
      dayOfYear: day.dayOfYear,
      month: day.month,
      day: day.day,
      dateKey: day.dateKey,
      oldTestamentKo: day.oldTestament,
      newTestamentKo: day.newTestament,
      firstSummaryKo: day.firstSummary,
      secondSummaryKo: day.secondSummary,
      firstSummaryTh,
      secondSummaryTh
    };
    completed += 1;
    if (completed % 10 === 0 || completed === source.length) console.log(`${completed}/${source.length}`);
  }
}

await Promise.all(Array.from({ length: 8 }, () => worker()));
await writeFile(outputUrl, `${JSON.stringify(results, null, 2)}\n`);
console.log(outputUrl.pathname);
