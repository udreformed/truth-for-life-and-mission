import { readFile, writeFile } from "node:fs/promises";
import {
  AlignmentType,
  Document,
  HeadingLevel,
  Packer,
  PageBreak,
  Paragraph,
  TextRun
} from "/Users/udmission/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/docx/dist/index.mjs";

const sourceUrl = new URL("../work/annual-bible-reading-thai-integrated-reviewed.json", import.meta.url);
const outputUrl = new URL("../output/คำอธิบายพระคัมภีร์-แผนอ่าน-365-วัน-ภาษาไทย.docx", import.meta.url);
const days = JSON.parse(await readFile(sourceUrl, "utf8"));

const months = [
  "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน",
  "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"
];
const font = "Sarabun";
const children = [
  new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 280 },
    children: [new TextRun({ text: "คำอธิบายพระคัมภีร์สำหรับแผนอ่าน 365 วัน", bold: true, size: 38, font })]
  }),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 520 },
    children: [new TextRun({ text: "สาระสำคัญของพระคัมภีร์เดิมและพระคัมภีร์ใหม่ก่อนอ่านในแต่ละวัน", size: 23, color: "52665F", font })]
  })
];

let previousMonth = 0;
for (const day of days) {
  if (day.month !== previousMonth) {
    if (previousMonth !== 0) children.push(new Paragraph({ children: [new PageBreak()] }));
    children.push(new Paragraph({
      heading: HeadingLevel.HEADING_1,
      spacing: { before: 120, after: 300 },
      children: [new TextRun({ text: months[day.month - 1], bold: true, size: 34, color: "174D40", font })]
    }));
    previousMonth = day.month;
  }

  children.push(new Paragraph({
    heading: HeadingLevel.HEADING_2,
    keepNext: true,
    spacing: { before: 300, after: 150 },
    children: [new TextRun({ text: `${day.day} ${months[day.month - 1]}`, bold: true, size: 28, color: "173F36", font })]
  }));
  children.push(new Paragraph({
    keepNext: true,
    spacing: { after: 90 },
    children: [new TextRun({ text: `พระคัมภีร์เดิม  ${day.oldTestamentTh}`, bold: true, size: 22, color: "A26D22", font })]
  }));
  children.push(new Paragraph({
    spacing: { after: 190, line: 370 },
    children: [new TextRun({ text: day.firstSummaryTh, size: 21, font })]
  }));
  children.push(new Paragraph({
    keepNext: true,
    spacing: { after: 90 },
    children: [new TextRun({ text: `พระคัมภีร์ใหม่  ${day.newTestamentTh}`, bold: true, size: 22, color: "A26D22", font })]
  }));
  children.push(new Paragraph({
    spacing: { after: 260, line: 370 },
    children: [new TextRun({ text: day.secondSummaryTh, size: 21, font })]
  }));
}

const doc = new Document({
  creator: "Truth for Life and Mission",
  title: "คำอธิบายพระคัมภีร์สำหรับแผนอ่าน 365 วัน",
  description: "คำอธิบายเนื้อหาพระคัมภีร์รายวัน ภาษาไทย",
  styles: {
    default: {
      document: { run: { font, size: 21 }, paragraph: { spacing: { line: 350 } } }
    }
  },
  sections: [{
    properties: {
      page: { margin: { top: 1080, right: 1080, bottom: 1080, left: 1080 } }
    },
    children
  }]
});

await writeFile(outputUrl, await Packer.toBuffer(doc));
console.log(outputUrl.pathname);
