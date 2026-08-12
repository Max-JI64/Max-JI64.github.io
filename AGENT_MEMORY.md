# Agent Memory

> Codex-maintained project memory. Verify time-sensitive facts against the
> current workspace.

## Project snapshot

- Last updated: 2026-08-13T02:00+09:00
- Purpose: GitHub Pages personal site for Max-JI64.github.io.
- Important paths: `astro.config.mjs`, `src/content.config.ts`, `src/content/notes/`, `src/content/projects/`, `src/pages/`, `.github/workflows/deploy.yml`, `README.md`.

## Durable decisions

- `decision:jekyll-html-css-rebuild`
  - Created: 2026-08-12T17:28+09:00
  - Updated: 2026-08-12T17:31+09:00
  - Status: superseded
  - Content: Replaced by `decision:astro-content-archive` after the user selected Astro.
  - Evidence: User request and `SITE_REBUILD_PLAN.md`.

- `decision:topic-note-structure`
  - Created: 2026-08-12T17:30+09:00
  - Updated: 2026-08-12T17:30+09:00
  - Status: superseded
  - Content: Replaced by `decision:standard-jekyll-posts` after the user specified the standard Jekyll blog architecture.
  - Evidence: User-specified topic hierarchy and `SITE_REBUILD_PLAN.md`.

- `decision:standard-jekyll-posts`
  - Created: 2026-08-12T17:31+09:00
  - Updated: 2026-08-12T17:31+09:00
  - Status: superseded
  - Content: Replaced by `decision:astro-content-archive` after the user selected Astro.
  - Evidence: User-specified architecture and `SITE_REBUILD_PLAN.md`.

- `decision:replace-config-not-delete`
  - Created: 2026-08-12T17:33+09:00
  - Updated: 2026-08-12T17:33+09:00
  - Status: superseded
  - Content: Jekyll configuration is no longer required after the Astro technology decision.
  - Evidence: User asked whether it should be deleted when starting the custom frontend.

- `decision:astro-content-archive`
  - Created: 2026-08-12T17:37+09:00
  - Updated: 2026-08-12T17:37+09:00
  - Status: active
  - Content: Build an Astro site titled "지승우의 빅데이터 프로젝트 아카이브" with separate Markdown content collections for learning notes and project portfolio entries, then deploy the static build to GitHub Pages.
  - Evidence: User technology, content, and site-title decisions; `SITE_REBUILD_PLAN.md`.

- `decision:design-comparison-before-implementation`
  - Created: 2026-08-12T17:37+09:00
  - Updated: 2026-08-12T17:37+09:00
  - Status: superseded
  - Content: Replaced by `decision:responsive-web-design-comparison` after the user excluded frontend-slides from this website task.
  - Evidence: User direction and `SITE_REBUILD_PLAN.md`.

- `decision:responsive-web-design-comparison`
  - Created: 2026-08-12T17:56+09:00
  - Updated: 2026-08-12T17:56+09:00
  - Status: active
  - Content: Use design-taste-frontend to create three directly comparable responsive web directions, then implement the selected direction in Astro without frontend-slides.
  - Evidence: User instruction and `SITE_REBUILD_PLAN.md`.

- `decision:reference-home-direction`
  - Created: 2026-08-12T18:38+09:00
  - Updated: 2026-08-12T18:38+09:00
  - Status: proposed
  - Content: The reviewed reference supports a restrained blue-accent personal archive with equal study-note and project visibility, but should reduce product-like controls and duplicated mobile navigation.
  - Evidence: User-provided Home-page screenshot and design-taste-frontend review.

- `decision:home-preview-implementation`
  - Created: 2026-08-12T18:44+09:00
  - Updated: 2026-08-12T18:44+09:00
  - Status: superseded
  - Content: Replaced by the Astro implementation after its layout was converted into dynamic collection-driven pages.
  - Evidence: `home-preview.html` and user direction to avoid screenshot analysis.

- `decision:astro-markdown-collection-routes`
  - Created: 2026-08-12T23:08+09:00
  - Updated: 2026-08-12T23:16+09:00
  - Status: active
  - Content: Notes, projects, and experiences use Astro build-time collections; every non-draft Markdown entry appears on relevant home/archive pages and generates a static detail route from its folder path.
  - Evidence: `src/content.config.ts`, `src/pages/notes/[...slug].astro`, `src/pages/projects/[...slug].astro`, `src/pages/experiences/[...slug].astro`.

- `decision:portfolio-home-hierarchy`
  - Created: 2026-08-12T23:16+09:00
  - Updated: 2026-08-12T23:16+09:00
  - Status: active
  - Content: The Home page uses a personal portfolio note in place of Archive index, prioritizes projects first, then places experience and topic-based learning notes in a balanced lower section; it has no recent-note list.
  - Evidence: User direction and `src/pages/index.astro`.

- `decision:content-preview-and-card-treatment`
  - Created: 2026-08-12T23:26+09:00
  - Updated: 2026-08-13T01:43+09:00
  - Status: active
  - Content: The Home Hero uses the final data-node network with independent drifting nodes, downward English data-label streams, the restored cool blue, white-blue, and contrast-point palette, and a 32% large-node cap. Nodes and streams are uniformly random across the full Hero; broad copy/card masks and rectangular title avoidance are removed, while a tight canvas-colored text shadow protects only the H1 glyph edges.
  - Evidence: `HERO_BACKGROUND_CANDIDATES.md`, `src/pages/index.astro`, `src/components/HeroDataNetworkCandidate2.astro`, `src/styles/global.css`.

## Working conventions

- `convention:preserve-repository-control-files`
  - Created: 2026-08-12T17:28+09:00
  - Updated: 2026-08-12T17:28+09:00
  - Status: active
  - Content: During the planned site-content cleanup, preserve `.git/` and `.agents/`.

- `convention:global-personal-skills`
  - Created: 2026-08-12T17:50+09:00
  - Updated: 2026-08-12T17:50+09:00
  - Status: active
  - Content: Shared Codex skills are installed as copied directories under `C:\\Users\\swoo6\\.agents\\skills`, never in a project `.agents/skills` directory unless explicitly requested.
  - Evidence: Verified global Codex registry entries for `design-taste-frontend` and `full-output-enforcement` from `Leonxlnx/taste-skill`.

- `convention:complete-site-deliverables`
  - Created: 2026-08-12T17:56+09:00
  - Updated: 2026-08-12T17:56+09:00
  - Status: active
  - Content: Apply full-output-enforcement to all requested site files so implementation contains no omitted sections, placeholders, or incomplete code paths.

## Known issues and fixes

- `issue:generated-home-mockup-mismatch`
  - Created: 2026-08-12T18:23+09:00
  - Updated: 2026-08-12T18:23+09:00
  - Status: open
  - Symptom: The user rejected the three generated Home-page image concepts and asked to stop at three.
  - Cause: The concepts imposed strong editorial, technical, and portfolio-journal aesthetics before the user's concrete visual preference was established.
  - Fix: Before making another visual direction, obtain a reference or identify the specific qualities to retain and avoid; do not treat any generated mockup as a selected direction.
  - Evidence: User feedback in the 2026-08-12 site-rebuild session.

- `issue:hero-animation-bfcache-restore`
  - Created: 2026-08-13T01:39+09:00
  - Updated: 2026-08-13T01:43+09:00
  - Status: resolved
  - Symptom: Returning to Home with the browser Back button restored a stopped Hero animation, although a full reload worked.
  - Cause: `pagehide` stopped the animation and disconnected observers/listeners, while BFCache restoration did not rerun the component script.
  - Fix: Split lifecycle work into idempotent mount/unmount functions and handle `pageshow` by clearing nodes and streams, resetting density/timing state, remounting observers/listeners, and generating a new random scene.
  - Evidence: `src/components/HeroDataNetworkCandidate2.astro`; user confirmed Back-button behavior works; `npm run check` and `npm run build` passed on 2026-08-13.

## Current handoff

- `handoff:current`
  - Updated: 2026-08-13T02:00+09:00
  - Current state: The final Home Hero uses a full-width Canvas data-node network: 75-135 nodes and 16-36 data streams on desktop, restored cool blue, white-blue, and contrast-point palette, with independent node-size bands of 32% large (2.7-4.1px), 15% small (1.15-1.55px), and 53% medium (1.65-2.65px); tablet/mobile use 60-90/10-20 and 36-60/6-12 respectively. The 35% upper limit applies only to large nodes. Initial nodes have staggered ages, but a regenerated node always starts at age zero and fades in for 1.2 seconds. Connections use both endpoint fades and an alpha of zero at the proximity threshold, so they appear and disappear smoothly. Data labels use English analytical terms only. Nodes and streams are uniformly random across the full Hero with no broad CSS mask or rectangular copy-avoidance zone; only a tight canvas-colored H1 text shadow protects the actual title glyph edges. Back-button BFCache restoration now remounts the lifecycle and generates a fresh random scene, confirmed by the user. The obsolete signal-stream component and its CSS were removed. The final component supports DPR resize, reduced motion, viewport pausing, and lifecycle cleanup. The site name is "Max.JI의 빅데이터 프로젝트 아카이브" across source text and metadata. The Home project heading and its "모든 프로젝트" link share one row, including on mobile. The main experience area and its `/experiences/` archive are labelled "경험 & 자격증" while retaining the existing `experiences` collection and routes. Text in titles and descriptions uses word-preserving Korean line breaks, start alignment, balanced headings, and prettier body wrapping to prevent mid-word splitting. Date semantics are fixed throughout the site: projects and experiences display only their period; learning notes display only their authored date in `YYYY년 MM월 DD일` form. Home and all archive pages currently show their empty states until a non-draft Markdown record is added. The carousels and detail routes activate automatically once content is published. Detail pages use a 1120px maximum content width.
  - Content state: All sample notes, projects, and experiences have been removed. Only `src/content/notes/TEMPLATE.md`, `src/content/projects/TEMPLATE.md`, and `src/content/experiences/TEMPLATE.md` remain; each is `draft: true` and therefore excluded from generated pages. Copy the relevant template, rename it, and change `draft` to `false` to publish.
  - SEO state: Each content schema accepts 0-8 accurate `keywords`, which are emitted only as matching JSON-LD semantic metadata rather than visible hashtags or `meta keywords`. `src/pages/sitemap.xml.ts` generates a sitemap from all non-draft content at build time, `public/robots.txt` advertises it, and `CONTENT_AUTHORING_GUIDE.md` documents authoring, AI keyword generation, and Google Search Console setup.
  - Next step: Add genuine Markdown records by copying the relevant collection template; no agent browser inspection was performed by request.
  - Blockers: The GitHub Pages source still needs to be set to GitHub Actions in repository settings before the first remote deployment.

## Session log

- `session:20260813-0200`
  - Started: 2026-08-13T01:53+09:00
  - Last activity: 2026-08-13T02:00+09:00
  - Focus: Add template authoring guidance and non-intrusive SEO foundations.
  - Updated keys: `handoff:current`.
  - Summary: Added the Korean content authoring and AI keyword guide, optional keyword front matter, accurate JSON-LD metadata, a generated sitemap route, and robots.txt. Did not add hidden body hashtags or meta keywords because they are not a safe Google-ranking mechanism. Astro check passed with zero diagnostics and the 5-page static build produced sitemap.xml and robots.txt.

- `session:20260813-0153`
  - Started: 2026-08-13T01:50+09:00
  - Last activity: 2026-08-13T01:53+09:00
  - Focus: Remove sample content and leave only non-published authoring templates.
  - Updated keys: `handoff:current`.
  - Summary: Deleted 12 sample notes, 4 sample projects, and 7 sample experience entries. Added one `draft: true` Markdown template for each collection and confirmed only five static non-content routes build. Astro check passed with zero diagnostics and the 5-page build passed.

- `session:20260813-0148`
  - Started: 2026-08-13T01:43+09:00
  - Last activity: 2026-08-13T01:48+09:00
  - Focus: Preserve whole Korean words during wrapping and show a date on every content card.
  - Updated keys: `handoff:current`.
  - Summary: Applied shared word-preserving line breaks, start alignment, balanced headings, and prettier body wrapping to content cards and detail views. Standardized date semantics: projects and experiences show only their period, while notes show only their authored date; removed the project published date and note modified date from detail views. Astro check passed with zero diagnostics and the 27-page build passed.

- `session:20260813-0139`
  - Started: 2026-08-13T01:39+09:00
  - Last activity: 2026-08-13T01:43+09:00
  - Focus: Repair Home Hero animation restoration and narrow its readability protection to the title glyphs.
  - Updated keys: `decision:content-preview-and-card-treatment`, `issue:hero-animation-bfcache-restore`, `handoff:current`.
  - Summary: Added idempotent Hero mount/unmount lifecycle handling and fresh random scene generation on BFCache `pageshow`; the user confirmed Back-button behavior. Removed the broad desktop/mobile overlay masks and rectangular copy-avoidance logic, then added a short canvas-colored shadow around only the H1 glyphs. Astro check passed with zero diagnostics and the 27-page build passed; browser inspection was left to the user.

- `session:20260813-0035`
  - Started: 2026-08-13T00:35+09:00
  - Last activity: 2026-08-13T01:38+09:00
  - Focus: Add a subtle realtime data-stream background to the Home Hero without modifying its content layout.
  - Updated keys: `decision:content-preview-and-card-treatment`, `handoff:current`.
  - Summary: Added Candidate 1's signal stream to a candidate register, then added a full-width Canvas data network with responsive density, reduced-motion static output, viewport/visibility pausing, and cleanup. Increased network node density, enlarged nodes and connection lines, standardized colors, then raised node, connection, and label opacity plus motion ceilings after visual review. The user rejected later black-hole and elliptical-orbit experiments, so the network was restored to drifting-node and downward-stream behavior. The final implementation uses a 32% large, 15% small, and 53% medium size distribution, staggered fade-and-regenerate nodes, smooth links, English labels, and cool blue palette values. The user selected it as final; the obsolete signal-stream component, styles, and candidate entry were deleted. `npm run check` and the 27-page static build passed; no agent-generated screenshot inspection was performed by request.

- `session:20260813-0030`
  - Started: 2026-08-13T00:25+09:00
  - Last activity: 2026-08-13T00:30+09:00
  - Focus: Align Home project controls, rename the site, and standardize learning-note dates.
  - Updated keys: `handoff:current`.
  - Summary: Put the Home project title and all-projects link into one responsive row, renamed public source text and metadata to Max.JI, and standardized note dates in Home, archive, and detail views to YYYY년 MM월 DD일. Astro check and the 27-page static build passed.

- `session:20260813-0025`
  - Started: 2026-08-13T00:23+09:00
  - Last activity: 2026-08-13T00:25+09:00
  - Focus: Rename the experience area and simplify the Home project heading.
  - Updated keys: `handoff:current`.
  - Summary: Renamed the Home and archive experience surface to "경험 & 자격증", updated its detail back link and README authoring guidance without changing the collection route, and removed the Home project heading's supplementary copy. Astro check and the 27-page static build passed.

- `session:20260813-0023`
  - Started: 2026-08-13T00:15+09:00
  - Last activity: 2026-08-13T00:23+09:00
  - Focus: Compact the Home latest-note preview and separate its heading.
  - Updated keys: `handoff:current`.
  - Summary: Moved the latest-note heading above the Home preview card, removed the card thumbnail, changed its note title to the section-subordinate heading, and reduced the desktop card height to 258px. Astro check and the 27-page static build passed.

- `session:20260813-0015`
  - Started: 2026-08-13T00:13+09:00
  - Last activity: 2026-08-13T00:15+09:00
  - Focus: Scale horizontal semicircle navigation to its corresponding content area.
  - Updated keys: `handoff:current`.
  - Summary: Replaced fixed horizontal control dimensions with carousel-relative sizing and separate size caps. Home project and experience controls scale between 150px and 242px high; Notes archive controls scale between 132px and 190px high, with matching aspect ratio, hit area, and smaller icon. Astro check and the 27-page static build passed.

- `session:20260813-0013`
  - Started: 2026-08-13T00:10+09:00
  - Last activity: 2026-08-13T00:13+09:00
  - Focus: Restrict horizontal control visibility to the requested semicircle region.
  - Updated keys: `handoff:current`.
  - Summary: Added clipped, transparent left and right hover zones matching each horizontal semicircle for Home projects, Home experiences, and Notes archive carousels. Arrows now persist only while the pointer remains on the matching zone or visible arrow and disappear immediately over inner content. Astro check and the 27-page static build passed.

- `session:20260813-0010`
  - Started: 2026-08-13T00:04+09:00
  - Last activity: 2026-08-13T00:10+09:00
  - Focus: Refine hover-arrow behavior and restore initial Notes archive carousel navigation.
  - Updated keys: `handoff:current`.
  - Summary: Enlarged and lightened horizontal semicircle controls with a glass-like blur, removed persistent focus-based visibility so they disappear immediately on pointer exit, preserved vertical-arrow positioning during press, and deferred Notes archive overflow checks until rendering and page load. Astro check and the 27-page static build passed.

- `session:20260813-0004`
  - Started: 2026-08-13T00:01+09:00
  - Last activity: 2026-08-13T00:04+09:00
  - Focus: Make horizontal hover navigation more identifiable and verify experience navigation.
  - Updated keys: `handoff:current`.
  - Summary: Enlarged left and right hover controls into translucent gray edge semicircles for Home and the Notes archive, retained compact vertical note controls, added two published experience examples to create six total, and verified the Home experience carousel now has a next direction. Astro check and the 27-page static build passed.

- `session:20260813-0001`
  - Started: 2026-08-12T23:58+09:00
  - Last activity: 2026-08-13T00:01+09:00
  - Focus: Match list-navigation controls to their scrolling direction and remove persistent button rows.
  - Updated keys: `handoff:current`.
  - Summary: Replaced the standalone Home navigation-button rows with edge-overlay controls revealed on hover or keyboard focus, assigned left and right controls to horizontal project and experience lists, assigned up and down controls to the vertical note list, and applied the same hover-overlay treatment to note-archive carousel controls. Astro check and the 25-page static build passed.

- `session:20260812-2358`
  - Started: 2026-08-12T23:52+09:00
  - Last activity: 2026-08-12T23:58+09:00
  - Focus: Correct Home-page arrows from page links to list-navigation controls.
  - Updated keys: `handoff:current`.
  - Summary: Removed arrows inside experience cards and learning-note rows, added project-style previous and next controls to experience and note lists, retained four visible experiences, configured five visible note rows, and set note controls to move by one item. Astro check and the 25-page static build passed.

- `session:20260812-2352`
  - Started: 2026-08-12T23:50+09:00
  - Last activity: 2026-08-12T23:52+09:00
  - Focus: Complete Home-page item visibility and arrows.
  - Updated keys: `handoff:current`.
  - Summary: Increased Home experience cards from three to four, changed the non-featured project row into a two-card scroll-snap line with previous and next buttons, and added navigation arrows to experience and vertical learning-note entries. Astro check and the 25-page static build passed.

- `session:20260812-2350`
  - Started: 2026-08-12T23:37+09:00
  - Last activity: 2026-08-12T23:50+09:00
  - Focus: Simplify note metadata and browse notes by primary section and newest date.
  - Updated keys: `decision:content-preview-and-card-treatment`, `handoff:current`.
  - Summary: Removed topic and tag front matter from all note entries and the schema, rebuilt the notes archive as a 3-card scroll-snap carousel per primary section with controls and an expand-all button, changed Home to show the three newest note pages without thumbnails, and widened content detail pages. Astro check and the 25-page static build passed.

- `session:20260812-2337`
  - Started: 2026-08-12T23:33+09:00
  - Last activity: 2026-08-12T23:37+09:00
  - Focus: Correct Home project-thumbnail clipping and populate visual-review content.
  - Updated keys: `decision:content-preview-and-card-treatment`, `handoff:current`.
  - Summary: Added clipping to the non-featured Home project card, then added two project examples, four experience examples, and eight note examples so Projects and Experiences each have four items and ADP, Python, SQL each have four notes. Astro check and the 25-page static build passed.

- `session:20260812-2333`
  - Started: 2026-08-12T23:26+09:00
  - Last activity: 2026-08-12T23:33+09:00
  - Focus: Match ordinary Home project-thumbnail proportion to the supplied wide-card direction.
  - Updated keys: `decision:content-preview-and-card-treatment`, `handoff:current`.
  - Summary: Changed non-featured Home project thumbnails to a responsive 2.4:1 ratio and retained the representative-project layout; verified the 11-page static build.

- `session:20260812-2326`
  - Started: 2026-08-12T23:16+09:00
  - Last activity: 2026-08-12T23:26+09:00
  - Focus: Replace the Home identity panel with a latest-note preview and strengthen content-card presentation.
  - Updated keys: `decision:content-preview-and-card-treatment`, `handoff:current`.
  - Summary: Replaced the Home portfolio note with the newest note preview, clarified featured-project fallback behavior, added optional note/project/experience images, redesigned note archives and detail pages as distinct surfaces, and verified Astro check plus an 11-page static build.

- `session:20260812-2316`
  - Started: 2026-08-12T23:13+09:00
  - Last activity: 2026-08-12T23:16+09:00
  - Focus: Reorder the Home page for a portfolio-first hierarchy and add Markdown-driven experiences.
  - Updated keys: `decision:astro-markdown-collection-routes`, `decision:portfolio-home-hierarchy`, `handoff:current`.
  - Summary: Replaced Archive index with a personal record-principle panel, promoted projects, removed recent learning records, added balanced Experience and Learning Notes sections, and verified type checking plus the 11-page static build.

- `session:20260812-2308`
  - Started: 2026-08-12T22:57+09:00
  - Last activity: 2026-08-12T23:08+09:00
  - Focus: Convert the Home preview into a dynamic Astro Markdown archive.
  - Updated keys: `decision:home-preview-implementation`, `decision:astro-markdown-collection-routes`, `handoff:current`.
  - Summary: Installed Astro and type-check tooling, replaced Jekyll files, created content collections and static routes, added sample notes/projects, and verified `npm run check` plus `npm run build` with 10 generated pages.

- `session:20260812-1844`
  - Started: 2026-08-12T18:44+09:00
  - Last activity: 2026-08-12T18:44+09:00
  - Focus: Create a complete standalone Home-page HTML preview.
  - Updated keys: `decision:home-preview-implementation`, `handoff:current`.
  - Summary: Created `home-preview.html` using the requested frontend skills, without image analysis or rendering, and verified no empty links, ellipses, TODO markers, or em/en dashes remain.

- `session:20260812-1838`
  - Started: 2026-08-12T18:38+09:00
  - Last activity: 2026-08-12T18:38+09:00
  - Focus: Assess a user-created Home-page visual reference.
  - Updated keys: `decision:reference-home-direction`, `handoff:current`.
  - Summary: Found the reference aligned with the two-axis archive goal, while recommending removal of product-like controls, mobile-navigation duplication, and placeholder-style metrics.

- `session:20260812-1823`
  - Started: 2026-08-12T18:23+09:00
  - Last activity: 2026-08-12T18:23+09:00
  - Focus: Generate and assess Home-page visual concepts for the Astro archive.
  - Updated keys: `issue:generated-home-mockup-mismatch`, `handoff:current`.
  - Summary: Generated three distinct image-based Home concepts; the user rejected all three and stopped the comparison, so the next design pass needs explicit preference evidence.

- `session:20260812-1756`
  - Started: 2026-08-12T17:56+09:00
  - Last activity: 2026-08-12T17:56+09:00
  - Focus: Replace presentation-oriented design comparison with frontend-specific design and output rules.
  - Updated keys: `decision:design-comparison-before-implementation`, `decision:responsive-web-design-comparison`, `convention:complete-site-deliverables`, `handoff:current`.
  - Summary: Removed frontend-slides from the site plan and adopted design-taste-frontend for responsive web comparisons plus full-output-enforcement for complete implementation files.

- `session:20260812-1750`
  - Started: 2026-08-12T17:50+09:00
  - Last activity: 2026-08-12T17:50+09:00
  - Focus: Install the requested reusable design and complete-output skills in the global Personal Skills location.
  - Updated keys: `convention:global-personal-skills`.
  - Summary: Installed copied global Codex skills `design-taste-frontend` and `full-output-enforcement` from the latest Taste Skill repository; both passed frontmatter and registry verification.

- `session:20260812-1737`
  - Started: 2026-08-12T17:37+09:00
  - Last activity: 2026-08-12T17:37+09:00
  - Focus: Replace the Jekyll rebuild plan with an Astro-first content archive plan.
  - Updated keys: `decision:jekyll-html-css-rebuild`, `decision:standard-jekyll-posts`, `decision:replace-config-not-delete`, `decision:astro-content-archive`, `decision:design-comparison-before-implementation`, `handoff:current`.
  - Summary: Rewrote the plan for Astro, specified the site identity and two equal content axes, and scheduled three frontend-slides visual comparisons before design selection.

- `session:20260812-1733`
  - Started: 2026-08-12T17:33+09:00
  - Last activity: 2026-08-12T17:33+09:00
  - Focus: Remove the obsolete dashboard and prepare the frontend design stage.
  - Updated keys: `decision:replace-config-not-delete`, `handoff:current`.
  - Summary: Deleted `wildfire-dashboard.html`; retained `_config.yml` for replacement rather than deletion and identified design decisions for the next stage.

- `session:20260812-1730`
  - Started: 2026-08-12T17:30+09:00
  - Last activity: 2026-08-12T17:31+09:00
  - Focus: Define standard Jekyll Markdown management and custom page design.
  - Updated keys: `decision:jekyll-html-css-rebuild`, `decision:topic-note-structure`, `decision:standard-jekyll-posts`, `handoff:current`.
  - Summary: Corrected the rebuild plan to use standard `_posts` and fully custom HTML/CSS layouts, grouping requested topics through post front matter.

- `session:20260812-1728`
  - Started: 2026-08-12T17:28+09:00
  - Last activity: 2026-08-12T17:28+09:00
  - Focus: Create a plan for rebuilding the GitHub Pages site from scratch.
  - Updated keys: `decision:jekyll-html-css-rebuild`, `convention:preserve-repository-control-files`, `handoff:current`.
  - Summary: Inspected the current Jekyll site and added a Korean rebuild plan without modifying existing site content.

## Session archive
