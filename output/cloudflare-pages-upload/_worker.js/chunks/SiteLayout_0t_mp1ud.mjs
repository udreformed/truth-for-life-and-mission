globalThis.process ??= {};
globalThis.process.env ??= {};
import { E as createAstro, _ as addAttribute, c as renderSlot, d as renderTemplate, g as renderHead } from "./server_DzJkc2yi.mjs";
import { t as createComponent } from "./compiler_BiDVP5L8.mjs";
/* empty css                 */
import { t as copy } from "./i18n_B790PXAF.mjs";
//#region src/layouts/SiteLayout.astro
createAstro("https://tflm.pages.dev");
var $$SiteLayout = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$SiteLayout;
	const { lang, current, title, description, socialImage = true } = Astro.props;
	const t = copy[lang];
	const pageTitle = title ? `${title} · ${t.shortName}` : String(t.siteName);
	const pageDescription = description ?? String(t.heroBody);
	const canonical = new URL(Astro.url.pathname, Astro.url.origin);
	const ogImage = new URL("/social-preview-20260810-logo.png", Astro.url.origin);
	const languageNames = {
		th: "ไทย",
		ko: "한국어",
		en: "English"
	};
	const languageFlags = {
		th: "https://flagcdn.com/w40/th.png",
		ko: "https://flagcdn.com/w40/kr.png",
		en: "https://flagcdn.com/w40/us.png"
	};
	const languageButtonLabel = {
		th: "한 / En",
		ko: "ไทย / En",
		en: "한 / ไทย"
	};
	const copyrightCopy = {
		th: `© ${(/* @__PURE__ */ new Date()).getFullYear()} Yongjin Choi (อาจารย์แดน) สงวนลิขสิทธิ์ เนื้อหา วิดีโอ และเอกสารจากภายนอกเป็นลิขสิทธิ์ของเจ้าของแต่ละราย`,
		ko: `© ${(/* @__PURE__ */ new Date()).getFullYear()} 최용진(Yongjin Choi). 모든 권리 보유. 외부 영상과 자료의 저작권은 각 원저작자에게 있습니다.`,
		en: `© ${(/* @__PURE__ */ new Date()).getFullYear()} Yongjin Choi (Ajarn Dan). All rights reserved. External videos and materials remain the property of their respective copyright holders.`
	};
	const contactLabel = {
		th: "ติดต่อ",
		ko: "문의",
		en: "Contact"
	};
	const facebookGroupLabel = {
		th: "ชุมชน Facebook",
		ko: "Facebook 사용자 모임",
		en: "Facebook community"
	};
	const lineContactLabel = {
		th: "ติดต่อทาง LINE: sunnyyongjin",
		ko: "LINE 문의: sunnyyongjin",
		en: "Contact via LINE: sunnyyongjin"
	};
	const backToTopLabel = {
		th: "กลับขึ้นด้านบน",
		ko: "위로 올라가기",
		en: "Back to top"
	};
	const mobileQrCopy = {
		th: {
			title: "เปิดบนโทรศัพท์",
			description: "สแกนเพื่อเปิดเว็บไซต์ภาษาไทย"
		},
		ko: {
			title: "휴대폰으로 접속",
			description: "스캔하면 한국어 화면이 열립니다"
		},
		en: {
			title: "Open on your phone",
			description: "Scan to open the English site"
		}
	};
	const footerInfoCopy = {
		th: {
			about: "เกี่ยวกับเรา",
			privacy: "นโยบายความเป็นส่วนตัว",
			terms: "ข้อกำหนดและเงื่อนไข"
		},
		ko: {
			about: "우리 소개",
			privacy: "개인정보 처리방침",
			terms: "이용약관"
		},
		en: {
			about: "About us",
			privacy: "Privacy policy",
			terms: "Terms of use"
		}
	};
	const pdfPreviewCopy = {
		th: {
			title: "ตัวอย่างไฟล์ PDF",
			download: "ดาวน์โหลด",
			close: "ปิด",
			fallback: "หากไม่เห็นตัวอย่าง PDF ให้กดดาวน์โหลด"
		},
		ko: {
			title: "PDF 미리보기",
			download: "다운로드",
			close: "닫기",
			fallback: "PDF 미리보기가 보이지 않으면 다운로드를 눌러 주세요."
		},
		en: {
			title: "PDF Preview",
			download: "Download",
			close: "Close",
			fallback: "If the PDF preview does not appear, use the download button."
		}
	};
	const languageHref = (code) => {
		return `${Astro.url.pathname.replace(/^\/(th|ko|en)(?=\/|$)/, `/${code}`)}${Astro.url.search}`;
	};
	return renderTemplate`<html${addAttribute(lang, "lang")}><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="description"${addAttribute(pageDescription, "content")}><meta name="theme-color" content="#173f35"><meta property="og:type" content="website"><meta property="og:title"${addAttribute(pageTitle, "content")}><meta property="og:description"${addAttribute(pageDescription, "content")}><meta property="og:url"${addAttribute(canonical, "content")}>${socialImage && renderTemplate`<meta property="og:image"${addAttribute(ogImage, "content")}>`}${socialImage && renderTemplate`<meta property="og:image:secure_url"${addAttribute(ogImage, "content")}>`}${socialImage && renderTemplate`<meta property="og:image:type" content="image/png">`}${socialImage && renderTemplate`<meta property="og:image:width" content="1200">`}${socialImage && renderTemplate`<meta property="og:image:height" content="630">`}${socialImage && renderTemplate`<meta property="og:image:alt"${addAttribute(String(t.siteName), "content")}>`}<meta name="twitter:card"${addAttribute(socialImage ? "summary_large_image" : "summary", "content")}><meta name="twitter:title"${addAttribute(pageTitle, "content")}><meta name="twitter:description"${addAttribute(pageDescription, "content")}>${socialImage && renderTemplate`<meta name="twitter:image"${addAttribute(ogImage, "content")}>`}<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Chonburi&family=Kanit:wght@400;500;600;700;800&family=Mitr:wght@400;500;600;700&family=Noto+Serif+KR:wght@600;700&family=Playfair+Display:ital,wght@0,600;1,600&family=Sarabun:wght@400;500;600;700&display=swap" rel="stylesheet"><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32-20260815.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16-20260815.png"><link rel="shortcut icon" href="/favicon-20260815.ico"><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-20260815.png"><link rel="manifest" href="/site-20260815.webmanifest"><link rel="canonical"${addAttribute(canonical, "href")}><title>${pageTitle}</title>${renderHead($$result)}</head><body><a class="skip-link" href="#main">Skip to content</a><header class="site-header"><div class="header-inner"><a${addAttribute({
		brand: true,
		active: current === "home"
	}, "class:list")}${addAttribute(`/${lang}/`, "href")}${addAttribute(String(t.nav.home), "aria-label")}${addAttribute(String(t.nav.home), "title")}><span class="brand-logo-stack"><img class="brand-logo brand-logo-default" src="/site-logo-home-ui.png" alt="" width="66" height="66" loading="eager" decoding="async"><img class="brand-logo brand-logo-active" src="/site-logo-home-ui.png" alt="" width="66" height="66" loading="eager" decoding="async"></span></a><nav class="main-nav" aria-label="Main navigation"><a${addAttribute({ active: current === "courses" }, "class:list")}${addAttribute(`/${lang}/courses/`, "href")}>${t.nav.courses}</a><a${addAttribute({
		active: current === "bibleReading",
		"bible-reading-nav-link": true
	}, "class:list")}${addAttribute(`/${lang}/bible-reading/`, "href")}>${t.nav.bibleReading}</a><a${addAttribute({ active: current === "library" }, "class:list")}${addAttribute(`/${lang}/library/`, "href")}>${t.nav.library}</a></nav><div class="language-switch" aria-label="Language" data-language-menu><button class="language-toggle" type="button" aria-haspopup="true" aria-expanded="false" data-language-toggle><span>${languageButtonLabel[lang]}</span></button><div class="language-popover" data-language-popover hidden>${[
		"th",
		"ko",
		"en"
	].map((code) => renderTemplate`<a${addAttribute({ active: code === lang }, "class:list")}${addAttribute(languageHref(code), "href")}${addAttribute(code, "lang")}${addAttribute(languageNames[code], "aria-label")}${addAttribute(languageNames[code], "title")}><img${addAttribute(languageFlags[code], "src")} alt="" width="32" height="21" loading="eager"><span>${languageNames[code]}</span></a>`)}</div></div></div></header><main id="main">${renderSlot($$result, $$slots["default"])}</main><footer class="site-footer"><div><strong>${t.shortName}</strong><p>Soli Deo Gloria</p><p class="copyright-notice">${copyrightCopy[lang]}<span class="footer-contact">${contactLabel[lang]}: <a href="mailto:thaigodpleasing@naver.com">thaigodpleasing@naver.com</a></span></p></div><div class="footer-links"><a class="footer-about-link"${addAttribute(`/${lang}/about/`, "href")}>${footerInfoCopy[lang].about}</a><a${addAttribute(`/${lang}/privacy/`, "href")}>${footerInfoCopy[lang].privacy}</a><a${addAttribute(`/${lang}/terms/`, "href")}>${footerInfoCopy[lang].terms}</a><span class="footer-social-links"><a class="footer-facebook-link" href="https://www.facebook.com/groups/1083797127953659" target="_blank" rel="noopener noreferrer"${addAttribute(facebookGroupLabel[lang], "aria-label")}${addAttribute(facebookGroupLabel[lang], "title")}><span aria-hidden="true">f</span></a><a class="footer-line-link" href="https://line.me/ti/p/~sunnyyongjin" target="_blank" rel="noopener noreferrer"${addAttribute(lineContactLabel[lang], "aria-label")}${addAttribute(lineContactLabel[lang], "title")}><span aria-hidden="true">LINE</span></a></span></div><div class="footer-qr-row"><a class="desktop-mobile-qr"${addAttribute(`/${lang}/`, "href")}${addAttribute(mobileQrCopy[lang].description, "aria-label")}><img${addAttribute(`/mobile-${lang}-qr.svg`, "src")}${addAttribute(mobileQrCopy[lang].description, "alt")} width="120" height="120" loading="lazy"><span><strong>${mobileQrCopy[lang].title}</strong><small>${mobileQrCopy[lang].description}</small></span></a></div></footer><div class="pdf-preview-modal" data-pdf-preview-modal hidden><div class="pdf-preview-backdrop" data-pdf-preview-close></div><section class="pdf-preview-panel" role="dialog" aria-modal="true" aria-labelledby="pdf-preview-title"><header class="pdf-preview-header"><h2 id="pdf-preview-title">${pdfPreviewCopy[lang].title}</h2><button class="pdf-preview-close" type="button" data-pdf-preview-close${addAttribute(pdfPreviewCopy[lang].close, "aria-label")}>×</button></header><iframe class="pdf-preview-frame" src="about:blank"${addAttribute(pdfPreviewCopy[lang].title, "title")}></iframe><p class="pdf-preview-fallback">${pdfPreviewCopy[lang].fallback}</p><footer class="pdf-preview-actions"><a class="button download-button" href="#" download data-pdf-preview-download>${pdfPreviewCopy[lang].download}</a><button class="button secondary" type="button" data-pdf-preview-close>${pdfPreviewCopy[lang].close}</button></footer></section></div><button class="back-to-top-button" type="button" data-back-to-top${addAttribute(backToTopLabel[lang], "aria-label")}${addAttribute(backToTopLabel[lang], "title")} hidden><span aria-hidden="true">↑</span></button><script>
      (() => {
        const header = document.querySelector(".site-header");
        if (header) {
          const updateHeaderHeight = () => {
            const measuredHeight = Math.ceil(header.getBoundingClientRect().height);
            document.documentElement.style.setProperty(
              "--site-header-height",
              \`\${measuredHeight}px\`
            );
            if (!document.documentElement.style.getPropertyValue("--site-header-space")) {
              document.documentElement.style.setProperty("--site-header-space", \`\${measuredHeight}px\`);
            }
          };
          updateHeaderHeight();
          if ("ResizeObserver" in window) {
            new ResizeObserver(updateHeaderHeight).observe(header);
          } else {
            window.addEventListener("resize", updateHeaderHeight, { passive: true });
          }

          let previousScrollY = window.scrollY;
          let headerScrollTicking = false;
          const updateCompactHeader = () => {
            const currentScrollY = Math.max(0, window.scrollY);
            const scrollDifference = currentScrollY - previousScrollY;
            if (currentScrollY <= 24 || scrollDifference < -4) {
              header.classList.remove("is-compact");
            } else if (currentScrollY > 72 && scrollDifference > 4) {
              header.classList.add("is-compact");
            }
            previousScrollY = currentScrollY;
            headerScrollTicking = false;
          };
          window.addEventListener("scroll", () => {
            if (headerScrollTicking) return;
            headerScrollTicking = true;
            window.requestAnimationFrame(updateCompactHeader);
          }, { passive: true });
        }

        const languageMenu = document.querySelector("[data-language-menu]");
        const languageToggle = document.querySelector("[data-language-toggle]");
        const languagePopover = document.querySelector("[data-language-popover]");
        const isLanguageMenuReady =
          languageMenu instanceof HTMLElement &&
          languageToggle instanceof HTMLButtonElement &&
          languagePopover instanceof HTMLElement;
        let languageMenuIsOpen = false;
        let languageMenuCloseTimer = 0;
        const setLanguageMenuOpen = (open) => {
          if (!isLanguageMenuReady) return;
          languageMenuIsOpen = open;
          languagePopover.hidden = !open;
          languageToggle.setAttribute("aria-expanded", String(open));
        };
        const openLanguageMenu = () => setLanguageMenuOpen(true);
        const closeLanguageMenu = () => setLanguageMenuOpen(false);
        const cancelLanguageMenuClose = () => {
          window.clearTimeout(languageMenuCloseTimer);
        };
        const scheduleLanguageMenuClose = () => {
          cancelLanguageMenuClose();
          languageMenuCloseTimer = window.setTimeout(closeLanguageMenu, 120);
        };
        if (isLanguageMenuReady) {
          languagePopover.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
              closeLanguageMenu();
              languageToggle.blur();
            });
          });
          const supportsLanguageHover = window.matchMedia?.("(hover: hover) and (pointer: fine)")?.matches;
          if (supportsLanguageHover) {
            languageMenu.addEventListener("mouseenter", () => {
              cancelLanguageMenuClose();
              openLanguageMenu();
            });
            languageMenu.addEventListener("mouseleave", scheduleLanguageMenuClose);
            languageMenu.addEventListener("focusin", openLanguageMenu);
            languageMenu.addEventListener("focusout", (event) => {
              if (event.relatedTarget instanceof Node && languageMenu.contains(event.relatedTarget)) return;
              scheduleLanguageMenuClose();
            });
          }
        }

        document.addEventListener("click", async (event) => {
          if (isLanguageMenuReady) {
            const clickedToggle = event.target instanceof Element ? event.target.closest("[data-language-toggle]") : null;
            const clickedLanguageOption = event.target instanceof Element ? event.target.closest("[data-language-popover] a") : null;
            const clickedInsideLanguage = event.target instanceof Element ? event.target.closest("[data-language-menu]") : null;
            if (clickedToggle) {
              cancelLanguageMenuClose();
              const supportsLanguageHover = window.matchMedia?.("(hover: hover) and (pointer: fine)")?.matches;
              if (supportsLanguageHover && languageMenuIsOpen) {
                openLanguageMenu();
                return;
              }
              setLanguageMenuOpen(!languageMenuIsOpen);
              return;
            }
            if (clickedLanguageOption) {
              closeLanguageMenu();
              return;
            }
            if (!clickedInsideLanguage && !languagePopover.hidden) {
              closeLanguageMenu();
            }
          }

          const libraryStickyStateKey = "tflm-library-filter-sticky";
          const clickedNavigationLink = event.target instanceof Element ? event.target.closest(".brand, .main-nav a") : null;
          if (clickedNavigationLink instanceof HTMLAnchorElement) {
            const href = clickedNavigationLink.getAttribute("href") || "";
            const staysInLibraryArea = href.includes("/library/") || href.includes("/useful-sites/");
            if (!staysInLibraryArea) {
              sessionStorage.removeItem(libraryStickyStateKey);
            }
          }

          const pdfPreviewLink = event.target instanceof Element ? event.target.closest("[data-pdf-preview]") : null;
          if (pdfPreviewLink instanceof HTMLAnchorElement) {
            const modal = document.querySelector("[data-pdf-preview-modal]");
            const frame = modal?.querySelector(".pdf-preview-frame");
            const downloadLink = modal?.querySelector("[data-pdf-preview-download]");
            const title = modal?.querySelector("#pdf-preview-title");
            if (modal instanceof HTMLElement && frame instanceof HTMLIFrameElement && downloadLink instanceof HTMLAnchorElement && title) {
              event.preventDefault();
              const pdfUrl = pdfPreviewLink.href;
              frame.src = pdfUrl;
              downloadLink.href = pdfUrl;
              const downloadName = pdfPreviewLink.getAttribute("download");
              if (downloadName) downloadLink.setAttribute("download", downloadName);
              else downloadLink.setAttribute("download", "");
              title.textContent = pdfPreviewLink.dataset.pdfPreviewTitle || title.textContent || "";
              modal.hidden = false;
              document.documentElement.classList.add("modal-open");
              return;
            }
          }

          const closePdfPreview = event.target instanceof Element ? event.target.closest("[data-pdf-preview-close]") : null;
          if (closePdfPreview) {
            const modal = document.querySelector("[data-pdf-preview-modal]");
            const frame = modal?.querySelector(".pdf-preview-frame");
            if (modal instanceof HTMLElement) modal.hidden = true;
            if (frame instanceof HTMLIFrameElement) frame.src = "about:blank";
            document.documentElement.classList.remove("modal-open");
            return;
          }

          const button = event.target instanceof Element ? event.target.closest("[data-copy-share]") : null;
          if (!(button instanceof HTMLButtonElement)) return;
          const shareBox = button.closest("[data-share-url]");
          if (!(shareBox instanceof HTMLElement)) return;
          const url = shareBox.dataset.shareUrl;
          if (!url) return;
          const shareTitle = shareBox.dataset.shareTitle?.trim() ?? "";
          const shareDescription = shareBox.dataset.shareDescription?.trim() ?? "";
          const shareUrlLabel = shareBox.dataset.shareUrlLabel?.trim() ?? "";
          const shareUrlLine = shareUrlLabel ? \`\${shareUrlLabel} \${url}\` : url;
          const shareText = [shareTitle, shareDescription, shareUrlLine].filter(Boolean).join("\\n\\n");
          const originalText = button.textContent ?? "";
          const copiedLabel = shareBox.dataset.copiedLabel || "Copied";
          try {
            await navigator.clipboard.writeText(shareText);
            button.textContent = copiedLabel;
            window.setTimeout(() => { button.textContent = originalText; }, 1600);
          } catch {
            button.textContent = shareText;
            window.setTimeout(() => { button.textContent = originalText; }, 1600);
          }
        });

        const backToTopButton = document.querySelector("[data-back-to-top]");
        if (backToTopButton instanceof HTMLButtonElement) {
          let ticking = false;
          let handledTouchScrollAt = 0;
          const updateBackToTop = () => {
            backToTopButton.hidden = window.scrollY < 520;
            ticking = false;
          };
          const scrollToPageTop = () => {
            const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
            window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
          };
          updateBackToTop();
          window.addEventListener("scroll", () => {
            if (ticking) return;
            ticking = true;
            window.requestAnimationFrame(updateBackToTop);
          }, { passive: true });
          backToTopButton.addEventListener("pointerup", (event) => {
            if (event.pointerType !== "touch" && event.pointerType !== "pen") return;
            event.preventDefault();
            handledTouchScrollAt = Date.now();
            scrollToPageTop();
          });
          backToTopButton.addEventListener("click", () => {
            if (Date.now() - handledTouchScrollAt < 700) return;
            scrollToPageTop();
          });
        }

        document.addEventListener("keydown", (event) => {
          if (event.key !== "Escape") return;
          if (isLanguageMenuReady && !languagePopover.hidden) {
            closeLanguageMenu();
          }
          const modal = document.querySelector("[data-pdf-preview-modal]");
          const frame = modal?.querySelector(".pdf-preview-frame");
          if (modal instanceof HTMLElement && !modal.hidden) {
            modal.hidden = true;
            if (frame instanceof HTMLIFrameElement) frame.src = "about:blank";
            document.documentElement.classList.remove("modal-open");
          }
        });
      })();
    <\/script></body></html>`;
}, "/Users/udmission/Documents/Codex/2026-08-08/new-chat-3/truth-for-life-and-mission/src/layouts/SiteLayout.astro", void 0);
//#endregion
export { $$SiteLayout as t };
