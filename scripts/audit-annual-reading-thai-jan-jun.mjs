import { readFile } from "node:fs/promises";

const input = new URL("../work/annual-bible-reading-thai-jan-jun-reviewed.json", import.meta.url);
const days = JSON.parse(await readFile(input, "utf8"));
const checks = [
  ["언약", /พันธสัญญา/],
  ["은혜", /พระคุณ/],
  ["회개", /กลับใจ/],
  ["성령", /พระวิญญาณบริสุทธิ์/],
  ["부활", /(คืนพระชนม์|ฟื้นคืน)/],
  ["섭리", /(การทรงจัดเตรียม|แผนการของพระเจ้า)/],
  ["의롭", /(ชอบธรรม|ความชอบธรรม)/],
  ["구원", /(ความรอด|ช่วยให้รอด|ช่วย.*พ้น)/]
];

const failures = [];
for (const day of days) {
  for (const side of ["first", "second"]) {
    const ko = day[`${side}SummaryKo`];
    const th = day[`${side}SummaryTh`];
    for (const [term, expected] of checks) {
      if (ko.includes(term) && !expected.test(th)) failures.push({ dateKey: day.dateKey, side, term, ko, th });
    }
  }
}

console.log(JSON.stringify(failures, null, 2));
console.error(`failures=${failures.length}`);
