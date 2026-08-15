import type { APIRoute } from "astro";
import { isLanguage } from "../../lib/i18n";
import { getLocalizedReadingSummary } from "../../lib/reading-summaries";

export const GET: APIRoute = async ({ url }) => {
  const langParam = url.searchParams.get("lang");
  const week = Number(url.searchParams.get("week"));
  const day = Number(url.searchParams.get("day"));

  if (!langParam || !isLanguage(langParam) || !Number.isInteger(week) || week < 1 || week > 45 || !Number.isInteger(day) || day < 0 || day > 6) {
    return new Response(JSON.stringify({ error: "Invalid request" }), {
      status: 400,
      headers: { "content-type": "application/json; charset=utf-8" }
    });
  }

  const summary = await getLocalizedReadingSummary(langParam, week, day);

  return new Response(JSON.stringify({ summary }), {
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "public, max-age=60, s-maxage=300, stale-while-revalidate=86400"
    }
  });
};
