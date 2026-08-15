globalThis.process ??= {};
globalThis.process.env ??= {};
import { a as baseService } from "./assets_Cx8uHVUw.mjs";
//#region node_modules/.pnpm/@astrojs+cloudflare@14.1.3_astro@7.1.1_@emnapi+core@1.11.1_@emnapi+runtime@1.11.2_yaml@_6ad421b8f41f794bf854ce4f42281366/node_modules/@astrojs/cloudflare/dist/entrypoints/image-service-workerd.js
var image_service_workerd_default = {
	...baseService,
	async transform(inputBuffer, transform) {
		return {
			data: inputBuffer,
			format: transform.format
		};
	}
};
//#endregion
export { image_service_workerd_default as default };
