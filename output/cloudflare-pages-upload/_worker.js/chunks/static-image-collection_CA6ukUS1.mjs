globalThis.process ??= {};
globalThis.process.env ??= {};
import { d as joinPaths, f as prependForwardSlash, p as removeBase } from "./remote_xkgpp7ZP.mjs";
import { c as isESMImportedImage, n as propsToFilename, t as hashTransform } from "./assets_Cx8uHVUw.mjs";
//#region node_modules/.pnpm/@astrojs+cloudflare@14.1.3_astro@7.1.1_@emnapi+core@1.11.1_@emnapi+runtime@1.11.2_yaml@_6ad421b8f41f794bf854ce4f42281366/node_modules/@astrojs/cloudflare/dist/utils/static-image-collection.js
function installAddStaticImage(config) {
	if (globalThis.astroAsset?.addStaticImage) return;
	if (!globalThis.astroAsset) globalThis.astroAsset = { referencedImages: /* @__PURE__ */ new Set() };
	globalThis.astroAsset.addStaticImage = (options, hashProperties, _originalFSPath) => {
		if (!globalThis.astroAsset.staticImages) globalThis.astroAsset.staticImages = /* @__PURE__ */ new Map();
		const finalOriginalPath = removeBase(removeBase(isESMImportedImage(options.src) ? options.src.src : options.src, config.base), config.assetsPrefix ?? "");
		const hash = hashTransform(options, config.imageServiceEntrypoint, hashProperties);
		let finalFilePath;
		let transformsForPath = globalThis.astroAsset.staticImages.get(finalOriginalPath);
		const transformForHash = transformsForPath?.transforms.get(hash);
		if (transformsForPath && transformForHash) finalFilePath = transformForHash.finalPath;
		else {
			finalFilePath = prependForwardSlash(joinPaths(isESMImportedImage(options.src) ? "" : config.buildAssets, prependForwardSlash(propsToFilename(finalOriginalPath, options, hash))));
			if (!transformsForPath) {
				globalThis.astroAsset.staticImages.set(finalOriginalPath, {
					originalSrcPath: _originalFSPath,
					transforms: /* @__PURE__ */ new Map()
				});
				transformsForPath = globalThis.astroAsset.staticImages.get(finalOriginalPath);
			}
			transformsForPath.transforms.set(hash, {
				finalPath: finalFilePath,
				transform: options
			});
		}
		if (config.assetsPrefix) return encodeURI(joinPaths(config.assetsPrefix, finalFilePath));
		return encodeURI(prependForwardSlash(joinPaths(config.base, finalFilePath)));
	};
}
//#endregion
export { installAddStaticImage };
