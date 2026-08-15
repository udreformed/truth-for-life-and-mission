import annualReadingData from "../data/annual-bible-reading.json";

export type AnnualReadingDay = {
  dayOfYear: number;
  month: number;
  day: number;
  dateKey: string;
  oldTestament: string;
  newTestament: string;
  firstSummary: string;
  secondSummary: string;
  videoId: string | null;
  playlistId: string | null;
};

const days = annualReadingData as AnnualReadingDay[];

const daysByDateKey = new Map(days.map((item) => [item.dateKey, item]));

const COMMON_YEAR_FEBRUARY_28_KEY = "02-28";
const LEAP_YEAR_FEBRUARY_28_KEY = "02-28";
const LEAP_YEAR_FEBRUARY_29_KEY = "02-29";

const leapYearFebruary28Reading: AnnualReadingDay = {
  dayOfYear: 59,
  month: 2,
  day: 28,
  dateKey: LEAP_YEAR_FEBRUARY_28_KEY,
  oldTestament: "레 9",
  newTestament: "눅 14",
  firstSummary: "아론은 자신과 백성을 위한 속죄제와 번제와 화목제를 드리고, 하나님에게서 나온 불이 제물을 사르자 백성이 엎드려 경배합니다. 제사장 직분의 시작을 통해 거룩하신 하나님께 나아가는 길은 하나님이 정하신 속죄와 말씀에 따른 예배에 있음을 보여 줍니다.",
  secondSummary: "예수님은 안식일의 식탁에서 병자를 고치시고, 자기를 높이는 자는 낮아지며 갚을 수 없는 사람을 초대하라고 가르치십니다. 큰 잔치 비유와 제자도의 대가는 은혜의 초청을 가볍게 여기지 말고 모든 것보다 주님을 앞세워 끝까지 따르라고 촉구합니다.",
  videoId: "3ZTOGd89xXE",
  playlistId: "PLqie1n1CWRFi4CIo6yEoSU1kb8Ys6mSW9"
};

export const isLeapYear = (year: number) => year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);

export function getAnnualReadingDateKey(year: number, month: number, day: number): string | null {
  const paddedDateKey = `${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
  if (month === 2 && day === 29 && !isLeapYear(year)) return null;
  return paddedDateKey;
}

export function getAnnualReadingDay(year: number, month: number, day: number): AnnualReadingDay | undefined {
  if (month === 2 && day === 28) {
    return isLeapYear(year)
      ? leapYearFebruary28Reading
      : daysByDateKey.get(COMMON_YEAR_FEBRUARY_28_KEY);
  }
  if (month === 2 && day === 29) {
    return isLeapYear(year) ? daysByDateKey.get(LEAP_YEAR_FEBRUARY_29_KEY) : undefined;
  }
  const dateKey = getAnnualReadingDateKey(year, month, day);
  return dateKey ? daysByDateKey.get(dateKey) : undefined;
}

export function getBangkokDateKey(date = new Date()): string {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Bangkok",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).formatToParts(date);
  const value = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return `${value.year}-${value.month}-${value.day}`;
}

export function parseDateKey(value: string): Date | null {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return null;
  const [year, month, day] = value.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));
  return date.getUTCFullYear() === year && date.getUTCMonth() === month - 1 && date.getUTCDate() === day ? date : null;
}

export function formatDateKey(date: Date): string {
  return date.toISOString().slice(0, 10);
}

export function shiftDateKey(dateKey: string, amount: number): string {
  const date = parseDateKey(dateKey);
  if (!date) return dateKey;
  date.setUTCDate(date.getUTCDate() + amount);
  return formatDateKey(date);
}
