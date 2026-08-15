globalThis.process ??= {};
globalThis.process.env ??= {};
//#region src/lib/http.ts
function json(data, init = {}) {
	const headers = new Headers(init.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	headers.set("cache-control", "no-store");
	return new Response(JSON.stringify(data), {
		...init,
		headers
	});
}
function error(message, status = 400) {
	return json({ error: message }, { status });
}
//#endregion
export { json as n, error as t };
