import assert from "node:assert/strict";
import { getWeekdayReadingVideoId, weekdayReadingVideoIds } from "../src/lib/bible-reading-videos.ts";

for (const lang of ["th", "ko", "en"]) {
  const weeks = weekdayReadingVideoIds[lang];
  assert.equal(weeks.length, 45, `${lang}: expected 45 weeks`);
  weeks.forEach((days, index) => {
    assert.equal(days.length, 6, `${lang}: week ${index + 1} must have Monday–Saturday`);
    days.forEach((videoId) => assert.match(videoId, /^[A-Za-z0-9_-]{11}$/));
  });
}

assert.equal(getWeekdayReadingVideoId("th", 1, 1), "f0ujCX9n0s0");
assert.equal(getWeekdayReadingVideoId("th", 45, 6), "MVOf5BJgtTk");
assert.equal(getWeekdayReadingVideoId("ko", 1, 1), "NltIsAd_XAE");
assert.equal(getWeekdayReadingVideoId("ko", 45, 6), "zYA9PPzid_g");
assert.equal(getWeekdayReadingVideoId("en", 1, 1), getWeekdayReadingVideoId("th", 1, 1));
assert.equal(getWeekdayReadingVideoId("ko", 0, 1), "");
assert.equal(getWeekdayReadingVideoId("ko", 46, 1), "");
assert.equal(getWeekdayReadingVideoId("ko", 1, 0), "");
assert.equal(getWeekdayReadingVideoId("ko", 1, 7), "");

console.log("Bible-reading video map: 45 weeks × 6 days verified for th, ko, and en.");
