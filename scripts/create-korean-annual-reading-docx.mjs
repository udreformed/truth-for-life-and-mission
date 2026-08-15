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

const sourceUrl = new URL("../src/data/annual-bible-reading.json", import.meta.url);
const outputUrl = new URL("../output/365일-성경읽기-한국어-본문설명-수정본.docx", import.meta.url);
const days = JSON.parse(await readFile(sourceUrl, "utf8"));

const font = "Apple SD Gothic Neo";
const children = [
  new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 280 },
    children: [new TextRun({ text: "365일 성경읽기 본문 설명", bold: true, size: 38, font })]
  }),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 520 },
    children: [new TextRun({ text: "성경을 읽기 전에 살펴보는 구약·신약 핵심 내용", size: 23, color: "52665F", font })]
  })
];

let previousMonth = 0;
for (const day of days) {
  if (day.month !== previousMonth) {
    if (previousMonth !== 0) children.push(new Paragraph({ children: [new PageBreak()] }));
    children.push(new Paragraph({
      heading: HeadingLevel.HEADING_1,
      spacing: { before: 120, after: 300 },
      children: [new TextRun({ text: `${day.month}월`, bold: true, size: 34, color: "174D40", font })]
    }));
    previousMonth = day.month;
  }

  children.push(new Paragraph({
    heading: HeadingLevel.HEADING_2,
    keepNext: true,
    spacing: { before: 300, after: 150 },
    children: [new TextRun({ text: `${day.month}월 ${day.day}일`, bold: true, size: 28, color: "173F36", font })]
  }));
  children.push(new Paragraph({
    keepNext: true,
    spacing: { after: 90 },
    children: [new TextRun({ text: `구약  ${day.oldTestament}`, bold: true, size: 22, color: "A26D22", font })]
  }));
  children.push(new Paragraph({
    spacing: { after: 190, line: 370 },
    children: [new TextRun({ text: day.firstSummary, size: 21, font })]
  }));
  children.push(new Paragraph({
    keepNext: true,
    spacing: { after: 90 },
    children: [new TextRun({ text: `신약  ${day.newTestament}`, bold: true, size: 22, color: "A26D22", font })]
  }));
  children.push(new Paragraph({
    spacing: { after: 260, line: 370 },
    children: [new TextRun({ text: day.secondSummary, size: 21, font })]
  }));
}

const doc = new Document({
  styles: {
    default: {
      document: { run: { font, size: 21 }, paragraph: { spacing: { line: 350 } } }
    }
  },
  sections: [{
    properties: {
      page: {
        margin: { top: 1080, right: 1080, bottom: 1080, left: 1080 }
      }
    },
    children
  }]
});

await writeFile(outputUrl, await Packer.toBuffer(doc));
console.log(outputUrl.pathname);
