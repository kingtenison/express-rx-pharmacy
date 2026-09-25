# SEO & AEO/AIO Audit — Express Pharmacy & DME

**Site audited:** `https://expressrxdme.com` (production, served via Hostinger CDN — `server: hcdn`)
**Also audited:** local working tree (`master` + uncommitted changes), production build on `next start`
**Date:** 2026-09-25
**Method:** Crawler of all 14 routes (metadata, headings, JSON-LD, images, link graph, headers), direct status/redirect probes, Lighthouse (local build), E-E-A-T scoring via the AEO auditor (`--industry healthcare`), source review.

> **Note on scope:** production and your local code have diverged. The live site does **not** include your uncommitted work (`src/app/storefront/`, `src/components/CategorySection.tsx`, richer service/blog pages are all untracked or modified). Findings are split into **A. Live site (what Google indexes today)** and **B. Local build (what ships next)**.

---

## Executive Summary

1. **Every unknown URL returns HTTP 200 with the homepage.** `/definitely-not-a-page-9x7`, `/privacy`, `/hipaa`, `/accessibility`, `/services/specialty` all return `200` + homepage HTML. This is a soft-404 epidemic: Google will index duplicate homepages under arbitrary URLs and waste crawl budget.
2. **9 of 10 blog posts are dead on production.** Only `/blog/choose-long-term-care-pharmacy/` renders real content; the other nine return the homepage with `200`. Your best long-form SEO/AEO assets are invisible.
3. **No `robots.txt`, no `sitemap.xml`** — both return HTML with `200`. No structured data (0 JSON-LD blocks) anywhere on production. No `rel=canonical` on any page. `www.expressrxdme.com` and apex both serve `200` with no canonical → duplicate-host risk.
4. **Metadata is broken sitewide:** 6 pages share the identical title `Express Pharmacy & DME`; service pages double-brand up to **75 characters** (`Compounding Pharmacy | Express Pharmacy & DME | Express Pharmacy & DME`); every page shares the same 36-character meta description (`Beyond Prescriptions. Complete Care.`).
5. **AEO readiness is well below the healthcare bar: 61/100 (blog) and 60/100 (FAQ) vs. threshold 85** — zero primary-source citations, no author/reviewer credentials surfaced, no Article/FAQPage schema, no first-person experience signals.

**Quick wins (≤1 day):** fix the broken `/images/dme.png` reference (DME card on `/services` is a 400/404 image); unique titles + descriptions per page; `metadataBase` + canonical; `sitemap.ts`/`robots.ts`; fix the 4 footer links to nonexistent pages; fix hardcoded `expressrx.com` share URLs; swap `Learn More` anchors for descriptive text.

---

## A. Live Site Findings (production)

### Technical SEO

| # | Issue | Impact | Evidence | Fix | Priority |
|---|---|---|---|---|---|
| L1 | **Soft 404s — every unknown path returns `200` + homepage** | Critical | `GET /definitely-not-a-page-9x7` → `200 text/html`; `/privacy/`, `/hipaa/`, `/accessibility/`, `/services/specialty/` → `200` homepage (621 words, title `Express Pharmacy & DME`) | Configure host (Hostinger) to return a real `404` status instead of the SPA fallback; deploy `not-found.tsx` | 1 |
| L2 | **`robots.txt` returns HTML, not robots** | Critical | `GET /robots.txt` → `200 text/html` starting `<!DOCTYPE html>` | Serve a real `robots.txt` with `Sitemap:` line (Next `app/robots.ts`) | 1 |
| L3 | **`sitemap.xml` missing** | Critical | `GET /sitemap.xml` → `200 text/html` | Next `app/sitemap.ts` listing all routes; reference from robots.txt; submit in GSC | 1 |
| L4 | **No `rel=canonical` on any page; www + apex both `200`** | High | Canonical scan = 0 matches across 14 URLs; `https://www.expressrxdme.com/` → `200` (no redirect to apex) | Pick one host (apex), 301 www→apex, emit self-referencing canonicals | 1 |
| L5 | **9/10 blog posts render the homepage** | High | Only `/blog/choose-long-term-care-pharmacy/` has content (5,621 words); the other nine return 621-word homepage HTML with `200` | Redeploy current codebase; verify each post URL after deploy | 1 |
| L6 | **No Open Graph / Twitter cards** | High | `property="og:*"` = 0, `name="twitter:*"` = 0 on every live page | Add `openGraph` + `twitter` + `metadataBase` in root layout | 2 |
| L7 | **Homepage image payload ≈ 7 MB** | High | 4 PNGs at 1,157–1,550 KB (`compounding.png`, `dme.png`, `long-term-care.png`, `for-providers.png`), logo `262 KB`; total 6.97 MB over 8 images | Convert to WebP/AVIF ≤150 KB, correct `sizes`, keep `fetchPriority="high"` on the LCP image only | 2 |
| L8 | **Security/caching headers absent** | Medium | Homepage headers: only `server: hcdn`, `etag`. No `strict-transport-security`, `x-content-type-options`, `cache-control` | Enable HSTS + `X-Content-Type-Options: nosniff` + HTML cache headers at CDN | 3 |
| L9 | **TTFB 773 ms (unoptimized HTML)** | Medium | Measured `GET https://expressrxdme.com/` = 773 ms to first byte | Cache HTML at CDN edge; confirm gzip/brotli (response served uncompressed in test) | 3 |
| L10 | **Trailing-slash canonicalization exists but unclaimed** | Low | `/services` → `301` → `/services/`; internal links already use trailing slash | Declare `trailingSlash: true` in `next.config.mjs` and keep it consistent | 4 |

### On-Page SEO

| # | Issue | Impact | Evidence | Fix | Priority |
|---|---|---|---|---|---|
| L11 | **Duplicate titles across pages** | High | `/`, `/storefront`, `/faq`, `/contact`, and 9 blog posts all render title `Express Pharmacy & DME` (22 chars) | Unique `<title>` per route, keyword first, ≤60 chars | 1 |
| L12 | **Brand stacked twice in titles (up to 75 chars)** | High | `Durable Medical Equipment \| Express Pharmacy & DME \| Express Pharmacy & DME` (75) | Remove brand from page-level titles; let the layout template append it once | 2 |
| L13 | **Identical 36-char meta description on every page** | High | 13/14 pages: `Beyond Prescriptions. Complete Care.` Only `/blog/choose-long-term-care-pharmacy/` has a unique 158-char description | Write a unique 140–160 char description per route | 1 |
| L14 | **Thin content on service pages** | High | `/services/compounding` 186 words, `/services/dme` 190, `/services/long-term-care` 191, `/services/for-providers` 193, `/faq` 169, `/contact` 163 | Ship your local rewrite (≈700 words/page) and add FAQs per service | 2 |
| L15 | **Non-descriptive anchor text** | Medium | Lighthouse SEO **0.80**: six `Learn More` anchors flagged (`/services/compounding`, `/dme`, `/long-term-care`, `/for-providers`, `/specialty`) | `Learn more about compounding` etc. | 3 |
| L16 | **Footer links to nonexistent pages** | Medium | Footer links to `/privacy/`, `/hipaa/`, `/accessibility/`, `/services/specialty/` — all soft-404 | Create the three legal pages (HIPAA + privacy are table stakes for a pharmacy) or remove links; create/remove `/services/specialty` | 2 |

### Local Business / Trust

| # | Issue | Impact | Evidence | Fix | Priority |
|---|---|---|---|---|---|
| L17 | **Incomplete NAP (no street address)** | High | Address field = `Columus, Ohio` only; phone/fax/email/hours present as plain text | Add full street address + `openingHoursSpecification` + `PostalAddress` in schema; match Google Business Profile exactly | 2 |
| L18 | **No `LocalBusiness`/`Pharmacy` schema** | High | 0 JSON-LD blocks live | `Pharmacy` (subtype of `HealthAndBeautyBusiness`) with NAP, hours, geo, `areaServed: Ohio`, priceRange | 2 |
| L19 | **No reviews/ratings/credentials surfaced** | Medium | No `aggregateRating`, no licensure numbers, no accreditation badges | Add license/PCAB/state-board credentials + real patient reviews with `Review` schema | 3 |

---

## B. Local Build Findings (your uncommitted work)

**Already good (do not regress):** one `h1` per page; `<h2>` per section, `<h3>` per card; every `<img>` has descriptive `alt`; local `/nonexistent` correctly returns **404**; static prerender (all 23 pages) so content is in the HTML; unique blog titles + descriptions + OG tags; homepage `ItemList` JSON-LD; internal link graph has no orphan pages; `next/image` with `sizes` + lazy loading.

| # | Issue | Impact | Evidence | Fix | Priority |
|---|---|---|---|---|---|
| B1 | **Nothing is committed or deployed** | Critical | `git status`: `?? src/app/storefront/`, `?? src/components/CategorySection.tsx`, `?? public/images/storefront/`, `M src/app/page.tsx`, `M src/lib/data.ts`, `M src/components/Header.tsx`, `M src/app/about/page.tsx` | Commit + deploy, otherwise none of this exists for search engines | 1 |
| B2 | **No `metadataBase` → absolute URLs become `localhost:3000`** | Critical | Blog OG image renders `http://localhost:3000/images/blog-compounding.jpg`; Next build warns `metadataBase ... using http://localhost:3000` | `metadataBase: new URL("https://expressrxdme.com")` in `src/app/layout.tsx` | 1 |
| B3 | **No `app/sitemap.ts`, no `app/robots.ts`** | Critical | Files absent; local `/sitemap.xml` and `/robots.txt` → 404 | Add both (Next generates them from route list) | 1 |
| B4 | **No canonical anywhere** | High | Crawler: `canonical: None` on all 14 routes | Self-referencing canonical per page via metadata | 1 |
| B5 | **No metadata on 6 key routes** | High | `/`, `/about`, `/faq`, `/contact`, `/storefront` all fall back to the default 22-char title + 36-char description | Add `title` + `description` (+ OG) to each `page.tsx` | 1 |
| B6 | **Only 1 of 12 page types has structured data** | High | JSON-LD = `ItemList` (homepage) only; no `LocalBusiness`, `FAQPage`, `Article`, `BreadcrumbList` | See schema plan below | 2 |
| B7 | **5 of 12 FAQ answers are not server-rendered** | High (AEO) | `/faq` HTML contains the 7 patient Q&As; the 5 provider Q&As (`faqProviderQuestions`) render only after clicking the *Providers* tab | Render both tab panels in HTML (hide with CSS) or list all Q&As statically | 2 |
| B8 | **Blog share buttons hardcode the wrong domain** | Medium | `src/app/blog/[slug]/page.tsx:110-112` share URLs → `https://expressrx.com/blog/...` (site is `expressrxdme.com`) | Use canonical URL from metadata/`siteConfig` | 2 |
| B9 | **Titles double-brand on `/services` and `/blog`** | Medium | `/services` = 58 chars `Our Services \| ExpressRX Pharmacy \| Express Pharmacy & DME`; `/blog` = 74 chars | Drop brand from page-level titles | 3 |
| B10 | **Heading hierarchy issues** | Low | `/blog/choose-long-term-care-pharmacy` has **0 `<h2>`** (H1→H3 skip); footer `<h3>Sitemap/Services/Contact</h3>` appear on every page; H1s extract as `Beyond Prescriptions.Complete Care.` (missing space) | Add `<h2>`s to that post; use `<p>`/`<div>` for footer column headings; add whitespace between heading spans | 3 |
| B11 | **50.7 MB of source images in `public/`** | Medium | Largest: `performance-recovery.jpg` 3.6 MB, `home.png` 2.4 MB, several 1.1–2.3 MB PNGs | Compress/resize at source; `next/image` mitigates delivery but build/deploy bloat and fallback risk remain | 3 |
| B12 | **Heading text concatenated in extraction** | Low | `Care byCategory`, `Our PremiumServices` in crawler output | Cosmetic; add a space/newline before the accent `<span>` | 4 |
| B13 | **Broken image on `/services` — DME card returns 400** | High | `src/app/services/page.tsx:12` → `src: "/images/dme.png"`; disk file is `DME.png`. Raw fetch `/images/dme.png` → **404**; `/_next/image?url=%2Fimages%2Fdme.png` → **400 `The requested resource isn't a valid image.`** (server logs: `isn't a valid image for /images/dme.png received null`). The `<img>` is server-rendered in `/services` HTML | Change to `src: "/images/DME.png"` (or rename the file) | 1 |
| B14 | **4 images are the wrong format for their extension** | Medium | Magic bytes: `compounding.png` = JPEG, `for-providers.png` = JPEG, `DME.png` = WebP, `long-term-care.png` = WebP. Raw serve therefore sends `Content-Type: image/png` for non-PNG bytes; `about.png` is a 1.6 MB PNG | Re-encode each file to real PNG/WebP (keep extension in sync) — validators, CDNs and strict clients reject mismatched types | 2 |
| B15 | **Heavy source assets in `public/`** | Medium | Homepage/about assets in raw form: `about.png` 1.6 MB, `long-term-care.png` 470 KB, `logo-nav.png` 350 KB (opted down to ~20 KB only after `next/image` re-encodes) | Re-encode at reasonable dimensions; `next/image` masks delivery but raw URLs still serve full size | 3 |

---

## C. AEO / AIO Findings (answer-engine readiness)

**Scores (auditor, `--industry healthcare`, threshold 85):**

| Page | Composite | Experience | Expertise | Authoritativeness | Trustworthiness | Structure |
|---|---|---|---|---|---|---|
| `/blog/what-is-compounded-medication` | **61/100 (C)** | 0 | 92 | 89 | 84 | 40 |
| `/faq` | **60/100 (C)** | 0 | 92 | 93 | 77 | 40 |

| # | Issue | Impact | Evidence | Fix | Priority |
|---|---|---|---|---|---|
| A1 | **Zero citations to authoritative sources** | Critical (AEO) | Blog posts contain exactly 3 external links each — all Twitter/Facebook/LinkedIn share buttons. **No `.gov`/NIH/CDC/FDA/Mayo links in any health article** | Cite primary sources (FDA, CDC, NIH, ASHP, state board) inline; aim ≥2 per article | 2 |
| A2 | **No `Article`/`BlogPosting`/`Author` JSON-LD** | Critical (AEO) | 0 JSON-LD on blog posts; no `datePublished`, no `dateModified`, no `author.url` | Add `BlogPosting` with `author` (Dr. Daniel Kwali Amoh, MD, RPh / Dr. Lee Bowman, DO), `datePublished`, `dateModified`, `publisher` | 2 |
| A3 | **No `FAQPage` schema despite having 12 Q&As** | High | FAQ content exists in `src/lib/data.ts` but is unmarked-up and half-hidden (B7) | `FAQPage` JSON-LD with all 12 Q&As — the single highest-leverage AEO move for a pharmacy | 2 |
| A4 | **No first-hand experience signals** | High | Auditor: `Experience 0/100` — no "we dispensed X", case studies, dated outcomes, or original data | Add practitioner voice: "In our Columbus compounding lab…", real patient scenarios, dates | 3 |
| A5 | **No medical reviewer / credentials byline** | High | Blog bylines = `ExpressRx Clinical Team` / `ExpressRx Team` — anonymous to both Google and LLMs | Named byline + credentials + "Medically reviewed by Dr. …, MD, RPh" with a linked author page | 2 |
| A6 | **No corrections/privacy/medical-disclaimer policy** | Medium | No corrections policy, no footer legal pages (L16) | Add "Editorial & corrections policy" + medication disclaimer; link from every article | 3 |
| A7 | **Facts not machine-readable** | Medium | Hours, phone, hours-of-operation, "10,000+ patients", "95% of calls answered in 30 seconds" exist only as display text | Expose as schema (`openingHoursSpecification`, `numberOfEmployees`, etc.) and in a plain "At a glance" fact block | 3 |
| A8 | **No `llms.txt`** | Low | `GET /llms.txt` → 200 HTML fallback | Add `/llms.txt` summarizing key pages + canonical URLs | 4 |
| A9 | **Broken citable content** | Critical (AEO) | 9/10 posts unreachable on production (L5) — AI engines and crawlers see nothing | Fix hosting/deploy first; AEO work is wasted otherwise | 1 |

**What already helps AEO:** specific numbers ("24/7", "10,000+ patients"), Ohio/Columbus geo-modifiers in titles, listicle structure with numbered `<h3>` steps, founder credentials (MD, RPh, DO) named on the homepage/about page, and 800–1,600-word posts.

---

## D. Prioritized Action Plan

### 🔴 Critical — blocks indexing (do first)
1. **Fix 404 handling on Hostinger** so unknown URLs return `404`, not `200` + homepage (L1).
2. **Redeploy the current codebase** (commit + push), then verify all 10 blog posts and `/storefront` return real content (B1, L5).
3. **Fix the broken DME card image**: `src/app/services/page.tsx:12` → `"/images/dme.png"`, disk file is `DME.png` → 404 raw / 400 via `next/image` (B13).
4. **Add `app/robots.ts` + `app/sitemap.ts`** and confirm `https://expressrxdme.com/robots.txt` returns text with a `Sitemap:` line (L2, L3, B3).
5. **Set `metadataBase`, unique titles/descriptions, and self-referencing canonicals**; force `www` → apex 301 (B2, B4, L4, L11, L13).

### 🟠 High impact
6. **Structured data pack:** `Pharmacy`/`LocalBusiness` (NAP + hours) → `FAQPage` (12 Q&As) → `BlogPosting` + `BreadcrumbList` (L18, A2, A3).
7. **Ship the richer local content** (≈700-word service pages, full FAQ) and render the provider FAQ tab server-side (L14, B7).
8. **Recompress the 4 heavy homepage PNGs** to WebP/AVIF — target LCP image ≤200 KB (L7).
9. **Add OG/Twitter metadata sitewide** with a real share image (L6).
10. **Create privacy/HIPAA/accessibility pages** (or drop the links) (L16, A6).
11. **Fix `expressrx.com` share URLs** (B8).
12. **Re-encode the 4 mislabelled images** (JPEG/WebP bytes in `.png` files) so raw `Content-Type` matches content (B14).

### 🟡 Quick wins (same day)
13. Replace `Learn More` anchors with descriptive text (L15).
14. Named author bylines + "Medically reviewed by" on blog posts (A5).
15. Add 2+ authoritative citations per health article (A1).
16. Add `<h2>`s to the long-term-care post; de-heading the footer columns (B10).

### 🔵 Longer term
17. Full street address + Google Business Profile alignment (L17).
18. `llms.txt`, author/topic pages, internal topical clusters (A8).
19. Measure Core Web Vitals on the live URL (PageSpeed Insights / GSC) — PSI API was rate-limited during this audit (L7, L9).
20. Set up Search Console + Bing Webmaster Tools: submit sitemap, monitor soft-404 coverage, track `site:expressrxdme.com` index bloat.

---

## E. What this audit could not cover

- **Google Search Console / analytics** — no access: real queries, impressions, index coverage, CWV field data, and backlink profile are unknown.
- **Core Web Vitals field data** — PageSpeed Insights returned HTTP 429; lab-side only (image weight + TTFB measured manually).
- **Keyword/ranking benchmarking** — no rank-tracking tool connected; competitor gap analysis not run.
- **Indexation check** — `site:` search unavailable from this environment; verify manually in GSC.

## Audit trail
- 14 production routes + 7 site-path probes crawled (metadata, headings, JSON-LD, images, anchors, headers)
- 19 URL status/redirect probes (http/https, www/apex, trailing slash, robots, sitemap, legal pages)
- 10 live blog-post render checks; 8 live homepage image weight checks
- Local image integrity: 30 `public/` files magic-byte vs extension scan; 8 raw + `next/image` optimizer probes (1× 404, 1× 400)
- 2 E-E-A-T/AEO audits (healthcare profile); 2 Lighthouse runs (dev + local production build)
- Local build re-crawled for comparison: 14 routes, link-graph + in-degree analysis

---

## Update — September 25, 2026

### Production domain correction (supersedes lines 3, 16, 33, 38, 114, 117, 139)

**The site does not use `expressrxdme.com`** (owner-confirmed, Sept 25 2026). Production is the Vercel deployment at **`https://express-rx-pharmacy.vercel.app`**. `expressrxdme.com` — the Hostinger-hosted copy this audit crawled — is a stale, unused host; its findings remain a valid record of that copy but were never the production surface. All URL-generating settings now derive from `siteConfig.url`: canonicals, `og:url`, JSON-LD `url`/`@id`, the `robots.txt` sitemap line, `sitemap.xml`, and `public/llms.txt` all emit `https://express-rx-pharmacy.vercel.app`.

**Recommended (not blocking):** attach a custom domain to the Vercel project (*Settings → Domains*), update `siteConfig.url` in `src/lib/data.ts`, and redeploy — a branded domain is strongly preferable to a `*.vercel.app` host for a pharmacy site's SEO and trust signals. Until then the `.vercel.app` URL is canonical.

### Implemented in code since this audit

**Core SEO**
- `metadataBase`, keyworded titles + `title.template`, self-referencing canonicals on every page; `src/lib/seo.tsx` centralizes `buildMetadata`, `absoluteUrl`, and all schema builders.
- JSON-LD site-wide: `Pharmacy` (local business) + `WebSite` in root layout; `FAQPage` on `/faq` (all answers server-rendered in HTML); `BlogPosting` + `BreadcrumbList` + per-post `FAQPage` on every blog post; `WebSite`/`Organization` on the homepage.
- `src/app/robots.ts` and `src/app/sitemap.ts` (18 blog posts + all service, legal, and static routes); `public/llms.txt` for AI crawlers.
- Per-route metadata for previously client-only pages (`/about`, `/faq`, `/contact`, `/storefront`, `/services` + 6 subpages) via layout files; blog index and post `generateMetadata` (canonical, keywords, OG article tags with published/modified time, Twitter card); share buttons fixed off the wrong domain.
- Breadcrumbs (visible + schema) on blog posts.

**Content**
- 3 legal pages created: `/privacy`, `/hipaa`, `/accessibility` — **marked for attorney review before relying on them**.
- `/services/specialty` created (was a soft 404); specialty service wired through `data.ts` navigation/insights/workflow/benefits.
- **8 new SEO blog posts** (~1,200–1,470 words each, researched with citations, internal linking, visible FAQ + FAQPage JSON-LD): insurance coverage for compounds, compounded-medication cost, prior authorization, medication synchronization, affording specialty medications, questions for a compounding pharmacy, travel refills, mail-order vs. local.
- **`choose-long-term-care-pharmacy` post body written** — it was published with metadata but no content (empty article); now ~1,140 words with FAQs and sources.

**Bug fixes found during implementation**
- `/services/specialty` soft-404 and broken `/services/${id}` links (footer, `ServicesList`); `/images/DME.png` casing in `services/page.tsx`; blog share URLs hardcoded to `expressrx.com`; FAQ tab refactor so all answers exist in HTML for crawlers.

### Still open

- [ ] (Recommended, not blocking) Attach a custom domain to the Vercel project and update `siteConfig.url` — canonical is currently `https://express-rx-pharmacy.vercel.app`.
- [ ] Submit sitemap to Google Search Console + Bing; request indexing of key pages; confirm soft-404 coverage clears after cutover.
- [ ] Attorney review of `/privacy`, `/hipaa`, `/accessibility`.
- [ ] 9 legacy blog posts remain thin (186–311 words) — recommend expanding to ~1,200+ with FAQs and citations for full topic coverage: `transfer-prescription-to-express-rx`, `compounding-for-pets`, `how-express-rx-supports-nursing-facilities`, `durable-medical-equipment-guide`, `why-24-7-pharmacist-access-matters`, `signs-your-pharmacy-is-letting-you-down`, `medication-adherence-tips-chronic-conditions`, `understanding-your-insurance-prescription-coverage`, `what-is-compounded-medication`.
- [ ] Post-cutover live verification: crawl, JSON-LD validation (Rich Results Test), Lighthouse SEO on production.
