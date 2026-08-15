globalThis.process ??= {};
globalThis.process.env ??= {};
import { env } from "cloudflare:workers";
//#region src/lib/cloudflare.ts
var bindings = env;
//#endregion
export { bindings as t };
