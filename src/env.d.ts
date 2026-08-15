/// <reference types="astro/client" />

type Role = "admin" | "author";

interface CloudflareEnv {
  ASSETS: Fetcher;
  DB: D1Database;
  MEDIA: R2Bucket;
  AI?: Ai;
  AI_ENABLED: string;
  AI_DAILY_LIMIT: string;
  SITE_URL: string;
  ACCESS_TEAM_DOMAIN: string;
  ACCESS_AUD: string;
  ADMIN_PASSWORD?: string;
  ADMIN_SESSION_SECRET?: string;
}
