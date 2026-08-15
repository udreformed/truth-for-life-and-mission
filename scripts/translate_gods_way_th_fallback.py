from __future__ import annotations

import json
import re
import textwrap
import time
import urllib.parse
import urllib.request
from pathlib import Path

from translate_gods_way_of_peace import PROJECT, TMP, TITLE_TRANSLATIONS, extract_chapters, split_chunk


def google_translate(text: str, target: str = "th") -> str:
    params = urllib.parse.urlencode({
        "client": "gtx",
        "sl": "en",
        "tl": target,
        "dt": "t",
        "q": text,
    })
    url = f"https://translate.googleapis.com/translate_a/single?{params}"
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=80) as response:
        data = json.loads(response.read())
    translated = "".join(part[0] for part in data[0] if part and part[0])
    return translated.strip()


def polish_thai(text: str) -> str:
    replacements = {
        "พระเจ้า": "พระเจ้า",
        "พระคริสต์": "พระคริสต์",
        "พระเยซู": "พระเยซู",
        "ข่าวประเสริฐ": "ข่าวประเสริฐ",
        "ความชอบธรรม": "ความชอบธรรม",
        "พระคุณ": "พระคุณ",
        "ศรัทธา": "ความเชื่อ",
        "ผู้ทดแทน": "ผู้แทน",
        "ผู้แทนที่": "ผู้แทน",
        "บันทึก": "คำพยาน",
        "ความสงบสุข": "สันติสุข",
    }
    for old, new in replacements.items():
        text = text.replace(old, new)
    text = re.sub(r"\s+([,.;:!?])", r"\1", text)
    text = re.sub(r"\n{3,}", "\n\n", text)
    return text.strip()


def main() -> None:
    TMP.mkdir(parents=True, exist_ok=True)
    chapters = extract_chapters()
    translated_chapters = []
    for chapter_index, chapter in enumerate(chapters, start=1):
        title = TITLE_TRANSLATIONS["th"]["chapters"][chapter_index - 1]
        chunks = split_chunk(chapter, max_chars=1800)
        translated_chunks = []
        print(f"fallback th chapter {chapter_index}/12: {title} ({len(chunks)} chunks)", flush=True)
        for chunk_index, chunk in enumerate(chunks, start=1):
            cache = TMP / f"th-fallback-{chapter_index:02d}-{chunk_index:02d}.txt"
            if cache.exists():
                translated = cache.read_text()
            else:
                paragraphs = chunk.split("\n\n")
                translated_paragraphs = []
                for paragraph in paragraphs:
                    wrapped = textwrap.wrap(paragraph, width=1300, break_long_words=False, replace_whitespace=False) or [paragraph]
                    translated_paragraphs.append(" ".join(google_translate(piece, "th") for piece in wrapped))
                    time.sleep(0.15)
                translated = polish_thai("\n\n".join(translated_paragraphs))
                cache.write_text(translated)
                time.sleep(0.5)
            translated_chunks.append(translated)
            print(f"  chunk {chunk_index}/{len(chunks)} ok", flush=True)
        translated_chapters.append({"title": title, "body": "\n\n".join(translated_chunks).strip()})
    out = TMP / "gods-way-of-peace-th.json"
    out.write_text(json.dumps(translated_chapters, ensure_ascii=False, indent=2))
    print(f"wrote {out}", flush=True)


if __name__ == "__main__":
    main()
