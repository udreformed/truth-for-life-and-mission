import { createRemoteJWKSet, jwtVerify } from "jose";

const ADMIN_COOKIE = "tflm_admin_session";
const SESSION_LIFETIME_SECONDS = 60 * 60 * 12;

export interface AuthenticatedUser {
  email: string;
  role: "admin" | "author";
}

export async function authenticateRequest(
  request: Request,
  bindings: CloudflareEnv
): Promise<AuthenticatedUser | null> {
  const url = new URL(request.url);

  if (url.hostname === "localhost" || url.hostname === "127.0.0.1") {
    const email = request.headers.get("x-local-admin-email")?.trim().toLowerCase();
    if (!email) return null;
    return findActiveUser(bindings.DB, email);
  }

  const token = request.headers.get("cf-access-jwt-assertion");
  const teamDomain = bindings.ACCESS_TEAM_DOMAIN;
  const audience = bindings.ACCESS_AUD;
  if (token && teamDomain && audience && !teamDomain.startsWith("REPLACE_") && !audience.startsWith("REPLACE_")) {
    try {
      const issuer = `https://${teamDomain}`;
      const jwks = createRemoteJWKSet(new URL(`${issuer}/cdn-cgi/access/certs`));
      const { payload } = await jwtVerify(token, jwks, { issuer, audience });
      const email = typeof payload.email === "string" ? payload.email.toLowerCase() : "";
      if (email) return findActiveUser(bindings.DB, email);
    } catch {
      // Fall through to the site's own single-administrator session.
    }
  }

  const session = readCookie(request, ADMIN_COOKIE);
  const sessionSecret = bindings.ADMIN_SESSION_SECRET;
  if (!session || !sessionSecret) return null;
  const email = await verifySessionToken(session, sessionSecret);
  return email ? findActiveUser(bindings.DB, email) : null;
}

export async function findActiveUser(db: D1Database, email: string): Promise<AuthenticatedUser | null> {
  const user = await db.prepare(
    "SELECT email, role FROM users WHERE email = ? COLLATE NOCASE AND active = 1 LIMIT 1"
  ).bind(email).first<AuthenticatedUser>();
  return user ?? null;
}

export async function verifyAdminPassword(candidate: string, bindings: CloudflareEnv): Promise<boolean> {
  const expected = bindings.ADMIN_PASSWORD;
  if (!candidate || !expected) return false;
  const encoder = new TextEncoder();
  const left = encoder.encode(candidate);
  const right = encoder.encode(expected);
  if (left.length !== right.length) return false;
  let difference = 0;
  for (let index = 0; index < left.length; index += 1) difference |= left[index] ^ right[index];
  return difference === 0;
}

export async function createAdminSessionToken(email: string, secret: string): Promise<string> {
  const payload = toBase64Url(new TextEncoder().encode(JSON.stringify({
    email: email.toLowerCase(),
    exp: Math.floor(Date.now() / 1000) + SESSION_LIFETIME_SECONDS
  })));
  const signature = await sign(payload, secret);
  return `${payload}.${signature}`;
}

export function adminSessionCookie(token: string): string {
  return `${ADMIN_COOKIE}=${token}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=${SESSION_LIFETIME_SECONDS}`;
}

export function clearAdminSessionCookie(): string {
  return `${ADMIN_COOKIE}=; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=0`;
}

async function verifySessionToken(token: string, secret: string): Promise<string | null> {
  const [payload, signature] = token.split(".");
  if (!payload || !signature) return null;
  const expected = await sign(payload, secret);
  if (!constantTimeStringEqual(signature, expected)) return null;
  try {
    const parsed = JSON.parse(new TextDecoder().decode(fromBase64Url(payload))) as { email?: unknown; exp?: unknown };
    if (typeof parsed.email !== "string" || typeof parsed.exp !== "number") return null;
    if (parsed.exp < Math.floor(Date.now() / 1000)) return null;
    return parsed.email.toLowerCase();
  } catch {
    return null;
  }
}

async function sign(payload: string, secret: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const signature = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(payload));
  return toBase64Url(new Uint8Array(signature));
}

function readCookie(request: Request, name: string): string | null {
  const cookies = request.headers.get("cookie") ?? "";
  for (const part of cookies.split(";")) {
    const [key, ...value] = part.trim().split("=");
    if (key === name) return value.join("=");
  }
  return null;
}

function toBase64Url(bytes: Uint8Array): string {
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

function fromBase64Url(value: string): Uint8Array {
  const normalized = value.replace(/-/g, "+").replace(/_/g, "/");
  const padded = normalized.padEnd(Math.ceil(normalized.length / 4) * 4, "=");
  const binary = atob(padded);
  return Uint8Array.from(binary, (character) => character.charCodeAt(0));
}

function constantTimeStringEqual(left: string, right: string): boolean {
  if (left.length !== right.length) return false;
  let difference = 0;
  for (let index = 0; index < left.length; index += 1) difference |= left.charCodeAt(index) ^ right.charCodeAt(index);
  return difference === 0;
}
