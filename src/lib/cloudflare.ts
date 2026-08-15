import { env } from "cloudflare:workers";

export const bindings = env as unknown as CloudflareEnv;
