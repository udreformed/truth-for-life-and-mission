globalThis.process ??= {};
globalThis.process.env ??= {};
import { n as __exportAll } from "./rolldown-runtime_Upwk45wU.mjs";
import { t as bindings } from "./cloudflare_Bi0w76aD.mjs";
//#region src/pages/media/[...key].ts
var ____key__exports = /* @__PURE__ */ __exportAll({ GET: () => GET });
var GET = async ({ params, request }) => {
	const key = params.key;
	if (!key) return new Response("Not found", { status: 404 });
	if (!await bindings.DB.prepare(`
    SELECT id FROM resources
    WHERE status = 'published' AND (featured_image_key = ? OR pdf_key = ?)
    LIMIT 1
  `).bind(key, key).first()) return new Response("Not found", { status: 404 });
	const object = await bindings.MEDIA.get(key);
	if (!object) return new Response("Not found", { status: 404 });
	const headers = new Headers();
	object.writeHttpMetadata(headers);
	headers.set("etag", object.httpEtag);
	headers.set("cache-control", "public, max-age=86400, s-maxage=604800, immutable");
	headers.set("x-content-type-options", "nosniff");
	if (new URL(request.url).searchParams.get("download") === "1") {
		const filename = key.split("/").pop() ?? "resource.pdf";
		headers.set("content-disposition", `attachment; filename="${filename.replaceAll("\"", "")}"`);
	}
	return new Response(object.body, { headers });
};
//#endregion
//#region \0virtual:astro:page:src/pages/media/[...key]@_@ts
var page = () => ____key__exports;
//#endregion
export { page };
