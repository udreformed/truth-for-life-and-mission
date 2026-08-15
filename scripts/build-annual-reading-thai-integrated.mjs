import { readFile, writeFile } from "node:fs/promises";

const names = ["jan-jun", "july", "august", "september", "october", "november", "december"];
const reviewedByDate = new Map();
for (const name of names) {
  const rows = JSON.parse(await readFile(new URL(`../work/annual-bible-reading-thai-${name}-reviewed.json`, import.meta.url), "utf8"));
  for (const row of rows) reviewedByDate.set(row.dateKey, row);
}
const source = JSON.parse(await readFile(new URL("../src/data/annual-bible-reading.json", import.meta.url), "utf8"));
const books = new Map(Object.entries({
  창: "ปฐมกาล", 출: "อพยพ", 레: "เลวีนิติ", 민: "กันดารวิถี", 신: "เฉลยธรรมบัญญัติ",
  수: "โยชูวา", 삿: "ผู้วินิจฉัย", 룻: "นางรูธ", 삼상: "1 ซามูเอล", 삼하: "2 ซามูเอล",
  왕상: "1 พงศ์กษัตริย์", 왕하: "2 พงศ์กษัตริย์", 대상: "1 พงศาวดาร", 대하: "2 พงศาวดาร",
  스: "เอสรา", 느: "เนหะมีย์", 에: "เอสเธอร์", 욥: "โยบ", 시: "สดุดี", 잠: "สุภาษิต",
  전: "ปัญญาจารย์", 아: "เพลงซาโลมอน", 사: "อิสยาห์", 렘: "เยเรมีย์", 애: "เพลงคร่ำครวญ",
  겔: "เอเสเคียล", 단: "ดาเนียล", 호: "โฮเชยา", 욜: "โยเอล", 암: "อาโมส", 오: "โอบาดีห์",
  욘: "โยนาห์", 미: "มีคาห์", 나: "นาฮูม", 합: "ฮาบากุก", 습: "เศฟันยาห์", 학: "ฮักกัย",
  슥: "เศคาริยาห์", 말: "มาลาคี", 마: "มัทธิว", 막: "มาระโก", 눅: "ลูกา", 요: "ยอห์น",
  행: "กิจการ", 롬: "โรม", 고전: "1 โครินธ์", 고후: "2 โครินธ์", 갈: "กาลาเทีย",
  엡: "เอเฟซัส", 빌: "ฟีลิปปี", 골: "โคโลสี", 살전: "1 เธสะโลนิกา", 살후: "2 เธสะโลนิกา",
  딤전: "1 ทิโมธี", 딤후: "2 ทิโมธี", 딛: "ทิตัส", 몬: "ฟีเลโมน", 히: "ฮีบรู",
  약: "ยากอบ", 벧전: "1 เปโตร", 벧후: "2 เปโตร", 요일: "1 ยอห์น", 요이: "2 ยอห์น",
  요삼: "3 ยอห์น", 유: "ยูดา", 계: "วิวรณ์"
}));

function translateReference(value, previousCode) {
  if (value === "암 9,오1") return { text: "อาโมส 9; โอบาดีห์ 1", code: "오" };
  const match = value.match(/^(\S+)\s+(.+)$/);
  const code = match ? match[1] : previousCode;
  const chapters = (match ? match[2] : value).replaceAll("~", "–");
  return { text: `${books.get(code) ?? code} ${chapters}`, code };
}

let previousOldCode;
let previousNewCode;
const integrated = source.map((day) => {
  const reviewed = reviewedByDate.get(day.dateKey);
  if (!reviewed) throw new Error(`Missing reviewed day ${day.dateKey}`);
  const oldRef = translateReference(day.oldTestament, previousOldCode);
  const newRef = translateReference(day.newTestament, previousNewCode);
  previousOldCode = oldRef.code;
  previousNewCode = newRef.code;
  return {
    dayOfYear: day.dayOfYear,
    month: day.month,
    day: day.day,
    dateKey: day.dateKey,
    oldTestamentKo: day.oldTestament,
    newTestamentKo: day.newTestament,
    oldTestamentTh: oldRef.text,
    newTestamentTh: newRef.text,
    firstSummaryKo: day.firstSummary,
    secondSummaryKo: day.secondSummary,
    firstSummaryTh: reviewed.firstSummaryTh,
    secondSummaryTh: reviewed.secondSummaryTh
  };
});

const output = new URL("../work/annual-bible-reading-thai-integrated-reviewed.json", import.meta.url);
await writeFile(output, `${JSON.stringify(integrated, null, 2)}\n`);
console.log(`${integrated.length} days`);
console.log(output.pathname);
