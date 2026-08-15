from __future__ import annotations

import json
import re
import subprocess
from pathlib import Path

from PIL import Image
from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_JUSTIFY, TA_LEFT
from reportlab.lib.pagesizes import A5
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import PageBreak, Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont

PROJECT = Path(__file__).resolve().parents[1]
TMP = PROJECT / "tmp" / "gods-way-of-peace"
DOWNLOADS = PROJECT / "public" / "downloads"
IMAGES = PROJECT / "public" / "images"

KR_FONT = "/System/Library/Fonts/Supplemental/AppleGothic.ttf"
TH_FONT = "/Users/udmission/Library/Fonts/Kanit-Regular.ttf"
TH_BOLD = "/Users/udmission/Library/Fonts/Kanit-SemiBold.ttf"
TH_DISPLAY = "/Users/udmission/Library/Fonts/Mitr-SemiBold.ttf"

pdfmetrics.registerFont(TTFont("TFLM-KR", KR_FONT))
pdfmetrics.registerFont(TTFont("TFLM-TH", TH_FONT))
pdfmetrics.registerFont(TTFont("TFLM-TH-Bold", TH_BOLD))
pdfmetrics.registerFont(TTFont("TFLM-TH-Display", TH_DISPLAY))

META = {
    "ko": {
        "title": "평안에 이르는 하나님의 길",
        "subtitle": "불안한 영혼을 위한 복음의 위로 · 개정판",
        "author": "Horatius Bonar",
        "translator": "한국어 번역: 최용진",
        "source": "원문 출처: Monergism · God's Way of Peace",
        "toc": "목차",
        "font": "TFLM-KR",
        "bold": "TFLM-KR",
        "display": "TFLM-KR",
        "filename": "gods-way-of-peace-ko.pdf",
        "cover": "gods-way-of-peace-ko-cover.png",
    },
    "th": {
        "title": "ทางของพระเจ้าสู่สันติสุข",
        "subtitle": "ข่าวประเสริฐเพื่อจิตใจที่กระวนกระวาย · ฉบับปรับปรุง",
        "author": "Horatius Bonar",
        "translator": "แปลภาษาไทย: Yongjin Choi",
        "source": "แหล่งต้นฉบับ: Monergism · God's Way of Peace",
        "toc": "สารบัญ",
        "font": "TFLM-TH",
        "bold": "TFLM-TH-Bold",
        "display": "TFLM-TH-Display",
        "filename": "gods-way-of-peace-th.pdf",
        "cover": "gods-way-of-peace-th-cover.png",
    },
}


def clean_body(body: str, title: str) -> str:
    body = body.replace("하느님", "하나님")
    body = re.sub(rf"^\s*제\s*\d+\s*장\s*[-–]?\s*{re.escape(title)}\s*", "", body).strip()
    body = re.sub(rf"^\s*บทที่\s*[IVX\d]+\s*[-–]?\s*{re.escape(title)}\s*", "", body).strip()
    body = re.sub(rf"^\s*บทที่\s*[IVX\d]+\s*[-–]?\s*[^.!?。]+", "", body).strip()
    body = re.sub(r"\b([IVX]+)\s*장\s*-\s*", "", body)
    body = re.sub(r"^제\s*\d+\s*장\s*[-–]?\s*[^\\n]{0,80}", "", body).strip()
    body = re.sub(r"^บทที่\s*[IVX\\d]+\\s*[-–]?\\s*[^\\n]{0,100}", "", body).strip()
    body = re.sub(r"\n{3,}", "\n\n", body)
    return body.strip()


def make_styles(lang: str):
    meta = META[lang]
    base = meta["font"]
    bold = meta["bold"]
    display = meta["display"]
    return {
        "cover_title": ParagraphStyle(
            "cover_title", fontName=display, fontSize=24 if lang == "ko" else 28, leading=32,
            textColor=colors.HexColor("#2b2924"), alignment=TA_LEFT, spaceAfter=8
        ),
        "cover_subtitle": ParagraphStyle(
            "cover_subtitle", fontName=base, fontSize=12, leading=18,
            textColor=colors.HexColor("#7a674c"), alignment=TA_LEFT
        ),
        "cover_meta": ParagraphStyle(
            "cover_meta", fontName=base, fontSize=9.5, leading=14,
            textColor=colors.HexColor("#6f5c44"), alignment=TA_LEFT
        ),
        "toc_title": ParagraphStyle(
            "toc_title", fontName=display, fontSize=22, leading=28,
            textColor=colors.HexColor("#153f35"), alignment=TA_CENTER, spaceAfter=12
        ),
        "toc_item": ParagraphStyle(
            "toc_item", fontName=base, fontSize=10.5 if lang == "ko" else 11.5, leading=16,
            textColor=colors.HexColor("#1f4038"), leftIndent=4, spaceAfter=5
        ),
        "chapter_title": ParagraphStyle(
            "chapter_title", fontName=display, fontSize=19 if lang == "ko" else 21, leading=28,
            textColor=colors.HexColor("#153f35"), alignment=TA_LEFT, spaceAfter=12
        ),
        "body": ParagraphStyle(
            "body", fontName=base, fontSize=10.6 if lang == "ko" else 11.2, leading=17 if lang == "ko" else 18,
            textColor=colors.HexColor("#263d36"), alignment=TA_JUSTIFY if lang == "ko" else TA_LEFT, firstLineIndent=6 * mm,
            spaceAfter=5
        ),
        "small": ParagraphStyle(
            "small", fontName=base, fontSize=8.5, leading=12,
            textColor=colors.HexColor("#657a72"), alignment=TA_CENTER
        ),
    }


def cover_story(lang: str, styles):
    meta = META[lang]
    story = []
    story.append(Spacer(1, 111 * mm))
    box = Table([
        [Paragraph(meta["author"].upper() if lang == "ko" else meta["author"], styles["cover_meta"])],
        [Paragraph(meta["title"], styles["cover_title"])],
        [Paragraph(meta["subtitle"], styles["cover_subtitle"])],
    ], colWidths=[118 * mm])
    box.setStyle(TableStyle([
        ("INNERPADDING", (0, 0), (-1, -1), 0),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 7),
    ]))
    story.append(box)
    story.append(Spacer(1, 16 * mm))
    story.append(Table([[Paragraph(meta["translator"], styles["cover_meta"])]], colWidths=[118 * mm], style=[
        ("LINEABOVE", (0, 0), (-1, 0), .7, colors.HexColor("#c6ad8b")),
        ("TOPPADDING", (0, 0), (-1, 0), 13),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
    ]))
    story.append(Spacer(1, 5 * mm))
    story.append(Paragraph(meta["source"], styles["small"]))
    story.append(PageBreak())
    return story


def add_page_decoration(canvas, doc, lang):
    canvas.saveState()
    width, height = A5
    if doc.page == 1:
        canvas.setFillColor(colors.HexColor("#f7f3ea"))
        canvas.rect(0, 0, width, height, fill=1, stroke=0)
        canvas.setStrokeColor(colors.HexColor("#9a7652"))
        canvas.setLineWidth(.75)
        canvas.rect(14 * mm, 14 * mm, width - 28 * mm, height - 28 * mm, stroke=1, fill=0)
        canvas.setStrokeColor(colors.HexColor("#a98145"))
        canvas.setLineWidth(1.6)
        cx = width / 2
        top = height - 58 * mm
        # minimal open-book and peace-line icon, matching the ivory book series style
        canvas.line(cx - 6 * mm, top + 13 * mm, cx + 6 * mm, top + 13 * mm)
        canvas.line(cx, top + 19 * mm, cx, top + 7 * mm)
        canvas.arc(cx - 30 * mm, top - 8 * mm, cx, top + 20 * mm, startAng=18, extent=62)
        canvas.arc(cx, top - 8 * mm, cx + 30 * mm, top + 20 * mm, startAng=100, extent=62)
        canvas.line(cx, top - 5 * mm, cx - 16 * mm, top + 8 * mm)
        canvas.line(cx, top - 5 * mm, cx + 16 * mm, top + 8 * mm)
    else:
        canvas.setStrokeColor(colors.HexColor("#d7e1dc"))
        canvas.setLineWidth(.5)
        canvas.line(18 * mm, 13 * mm, width - 18 * mm, 13 * mm)
        canvas.setFont(META[lang]["font"], 8)
        canvas.setFillColor(colors.HexColor("#7c8f87"))
        canvas.drawCentredString(width / 2, 8.2 * mm, str(doc.page - 1))
    canvas.restoreState()


def build_pdf(lang: str) -> Path:
    data = json.loads((TMP / f"gods-way-of-peace-{lang}.json").read_text())
    out = DOWNLOADS / META[lang]["filename"]
    styles = make_styles(lang)
    doc = SimpleDocTemplate(
        str(out), pagesize=A5,
        rightMargin=17 * mm, leftMargin=17 * mm,
        topMargin=18 * mm, bottomMargin=17 * mm,
        title=META[lang]["title"], author="Horatius Bonar"
    )
    story = cover_story(lang, styles)
    story.append(Paragraph(META[lang]["toc"], styles["toc_title"]))
    for index, chapter in enumerate(data, 1):
        story.append(Paragraph(f"{index}. {chapter['title']}", styles["toc_item"]))
    story.append(PageBreak())
    for index, chapter in enumerate(data, 1):
        story.append(Paragraph(f"{index}. {chapter['title']}", styles["chapter_title"]))
        body = clean_body(chapter["body"], chapter["title"])
        for para in body.split("\n\n"):
            para = para.strip()
            if not para:
                continue
            story.append(Paragraph(para.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;"), styles["body"]))
        if index != len(data):
            story.append(PageBreak())
    doc.build(story, onFirstPage=lambda c, d: add_page_decoration(c, d, lang), onLaterPages=lambda c, d: add_page_decoration(c, d, lang))
    return out


def render_cover(pdf: Path, image_name: str) -> None:
    prefix = TMP / f"render-{pdf.stem}"
    subprocess.run([
        "/Users/udmission/.cache/codex-runtimes/codex-primary-runtime/dependencies/bin/override/pdftoppm",
        "-png", "-f", "1", "-singlefile", str(pdf), str(prefix)
    ], check=True)
    img = Image.open(f"{prefix}.png")
    img.thumbnail((900, 1280), Image.LANCZOS)
    img.save(IMAGES / image_name, optimize=True)


def main() -> None:
    DOWNLOADS.mkdir(parents=True, exist_ok=True)
    IMAGES.mkdir(parents=True, exist_ok=True)
    for lang in ("ko", "th"):
        pdf = build_pdf(lang)
        render_cover(pdf, META[lang]["cover"])
        print(pdf, pdf.stat().st_size)
        print(IMAGES / META[lang]["cover"])


if __name__ == "__main__":
    main()
