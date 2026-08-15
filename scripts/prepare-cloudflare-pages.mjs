import { cp, mkdir, rename, rm } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const clientDir = resolve(root, "dist/client");
const serverDir = resolve(root, "dist/server");
const pagesDir = resolve(root, "output/cloudflare-pages-upload");
const workerDir = resolve(pagesDir, "_worker.js");

await rm(pagesDir, { recursive: true, force: true });
await mkdir(pagesDir, { recursive: true });

// Cloudflare Pages serves static files from the output root.
await cp(clientDir, pagesDir, { recursive: true });

// Pages advanced mode accepts a Worker directory named `_worker.js`.
await cp(serverDir, workerDir, { recursive: true });
await rename(resolve(workerDir, "entry.mjs"), resolve(workerDir, "index.js"));

console.log(`Prepared Cloudflare Pages output: ${pagesDir}`);
