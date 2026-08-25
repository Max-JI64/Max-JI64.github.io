# Agent Memory

> Codex-maintained project memory. Verify time-sensitive facts against the
> current workspace.

## Project snapshot

- Last updated: 2026-08-25T15:49+09:00
- Purpose: 2026 날씨 빅데이터 콘테스트와 업스테이지 하네스 엔지니어링 스킬톤 기록을 포함하는 개인 프로젝트 아카이브.
- Important paths: `src/content/projects/`, `src/pages/index.astro`, `AGENT_MEMORY.md`.

## Durable decisions

- `decision:2026-weather-big-data-contest-base`
  - Created: 2026-08-13T14:59+09:00
  - Updated: 2026-08-13T16:36+09:00
  - Status: active
  - Content: 2026 날씨 빅데이터 콘테스트는 2026년 5월 1일부터 8월 5일까지 진행한 `우수상(기상청장상)` 수상 대표 프로젝트로 유지하고, 세부 분석 내용은 추후 보강한다.
  - Evidence: `src/content/projects/2026-weather-big-data-contest.md`.

- `decision:recent-content-by-publication`
  - Created: 2026-08-13T15:08+09:00
  - Updated: 2026-08-13T16:41+09:00
  - Status: active
  - Content: 홈 문구는 최근 업로드로 유지하되, 실제 표시는 프로젝트, 경험 및 자격증, 학습 노트를 통합해 `updatedAt` 최신순으로 하나만 선택하고 수정일은 화면에 표시하지 않는다. `updatedAt`이 없으면 `publishedAt`을 사용한다.
  - Evidence: `src/pages/index.astro`, `src/content.config.ts`, `src/layouts/NoteLayout.astro`.

- `decision:optional-project-metadata`
  - Created: 2026-08-13T15:14+09:00
  - Updated: 2026-08-13T15:16+09:00
  - Status: active
  - Content: 프로젝트의 설명, 분류, 역할, 결과는 선택 항목이며, 제공되지 않은 항목은 카드와 상세 페이지에 표시하지 않는다.
  - Evidence: `src/content.config.ts`, `src/layouts/ProjectLayout.astro`.

- `decision:award-project-visual`
  - Created: 2026-08-13T16:09+09:00
  - Updated: 2026-08-13T20:58+09:00
  - Status: active
  - Content: 수상 프로젝트는 `수상작` 명판이 포함된 똑바로 선 투명 트로피를 표시하고 수상명은 기간 옆 16px 굵은 금색 태그로 강조한다. 홈 대표 카드는 `썸네일 | 본문 | 트로피`의 독립 그리드 구역을 사용해 본문과 트로피가 서로 침범하지 않으며, 좁은 화면에서도 본문과 트로피를 별도 열로 유지한다.
  - Evidence: `src/components/AwardTrophy.astro`, `src/pages/index.astro`, `src/pages/projects/index.astro`, `src/styles/global.css`, `public/images/projects/award-trophy.png`.

- `decision:weather-portfolio-embedding`
  - Created: 2026-08-13T19:05+09:00
  - Updated: 2026-08-13T19:23+09:00
  - Status: active
  - Content: 날씨 콘테스트의 이미지·PDF·독립 HTML은 `public/projects/2026-weather-big-data-contest/`에 복사해 원본 준비 폴더 없이도 동작하게 하고, PDF와 대시보드는 상세 페이지 내부 iframe으로 표시한다. 모든 `ContentThumbnail` 이미지는 카드가 정한 프레임 크기를 바꾸지 않으며 `object-fit: cover`로 프레임을 채우고 넘치는 부분을 중앙 기준으로 자른다. 홈 대표 카드의 데스크톱 높이는 274px로 고정한다.
  - Evidence: `src/content/projects/2026-weather-big-data-contest.md`, `src/layouts/ProjectLayout.astro`, `src/styles/global.css`, `public/projects/2026-weather-big-data-contest/`.

- `decision:weather-overview-metrics`
  - Created: 2026-08-13T20:29+09:00
  - Updated: 2026-08-13T20:31+09:00
  - Status: active
  - Content: 프로젝트 한눈에 보기에서는 KPI 카드 영역을 사용하지 않는다. AUPRC를 포함한 성능·운영 수치는 관련 본문 섹션에서 맥락과 함께 설명한다.
  - Evidence: `src/content/projects/2026-weather-big-data-contest.md`, `src/styles/global.css`.

- `decision:weather-source-content-preservation`
  - Created: 2026-08-13T20:36+09:00
  - Updated: 2026-08-13T20:40+09:00
  - Status: active
  - Content: 날씨 콘테스트 상세 페이지는 준비 원고의 핵심 근거와 분석 흐름을 축약해 누락하지 않는다. 대회 공식 URL은 링크 이름으로 감추지 않고 원문 주소 `https://bd.kma.go.kr/contest/`가 그대로 보이게 하며, 선행연구의 결과·한계에서 출발해 6개 FWI 지수, 92개 기상셀, 공간정보, 전신주 점검으로 확장한 논리를 본문에 명시한다.
  - Evidence: `2026 날씨 빅데이터 콘테스트 포트폴리오/포트폴리오_작성.md`, `src/content/projects/2026-weather-big-data-contest.md`.

- `decision:content-toc-remote`
  - Created: 2026-08-13T20:56+09:00
  - Updated: 2026-08-13T21:00+09:00
  - Status: active
  - Content: 날씨 콘테스트 상세 페이지와 모든 학습 노트 상세 페이지는 데스크톱 우측에 현재 위치를 강조하는 고정 목차 리모컨을 표시한다. 목차에는 Markdown `##` 2단계 제목만 포함하고, 본문의 `##` 제목은 라이트 모드 `#087fc4`, 다크 모드 `#72d7ff`로 강조하며 `###` 이하는 기본 글자색을 유지한다. 작은 화면에서는 목차를 숨긴다.
  - Evidence: `src/components/ContentToc.astro`, `src/layouts/ProjectLayout.astro`, `src/layouts/NoteLayout.astro`, `src/pages/projects/[...slug].astro`, `src/pages/notes/[...slug].astro`, `src/styles/global.css`.

- `decision:site-theme-default`
  - Created: 2026-08-13T21:05+09:00
  - Updated: 2026-08-13T21:06+09:00
  - Status: active
  - Content: 사이트 기본 테마는 다크 모드이며, 상단의 라이트/다크 전환 버튼으로 바꾼 선택은 브라우저 `localStorage`에 저장해 다음 방문에도 유지한다.
  - Evidence: `src/layouts/BaseLayout.astro`, `src/components/Header.astro`, `src/styles/global.css`; `npm run check`, `npm run build` 통과.

- `decision:ga4-basic-measurement`
  - Created: 2026-08-14T18:40+09:00
  - Updated: 2026-08-14T18:40+09:00
  - Status: active
  - Content: 기본 방문자 분석은 측정 ID `G-61F69Q2Z25`의 GA4 전역 태그로 수행한다. 태그는 공통 `BaseLayout.astro`에 두어 이후 콘텐츠 발행에도 자동 적용하며, 현 단계에서는 별도 사용자 식별 또는 DB를 추가하지 않는다.
  - Evidence: `src/layouts/BaseLayout.astro`; `npm run check`, `npm run build`, `rg -F "G-61F69Q2Z25" dist/index.html` 통과.

- `decision:search-console-html-verification`
  - Created: 2026-08-14T18:47+09:00
  - Updated: 2026-08-14T18:47+09:00
  - Status: active
  - Content: GitHub Pages 하위 도메인의 Search Console URL 접두어 소유권 확인은 공통 레이아웃의 HTML 메타 태그로 수행한다. 태그는 배포 후에도 유지한다.
  - Evidence: `src/layouts/BaseLayout.astro`; `npm run check`, `npm run build`, 빌드 산출물의 확인 태그 검증 통과.

- `decision:markdown-latex-rendering`
  - Created: 2026-08-25T15:26+09:00
  - Updated: 2026-08-25T15:49+09:00
  - Status: superseded
  - Content: LaTeX 연동은 `issue:markdown-latex-npm-lock` 해결 전까지 제거한다. F2 Score 수식은 기존 HTML 아래첨자·위첨자 표기로 복원했다.
  - Evidence: `package.json`, `package-lock.json`, `astro.config.mjs`, `src/layouts/BaseLayout.astro`, `src/content/projects/2026-weather-big-data-contest.md`.

## Working conventions

- `convention:weather-no-automatic-astro-validation`
  - Created: 2026-08-25T15:26+09:00
  - Updated: 2026-08-25T15:26+09:00
  - Status: active
  - Content: 날씨 콘테스트 Markdown을 수정할 때 사용자가 별도로 요청하지 않으면 Astro 검사, 빌드, 업로드 또는 서버 확인을 실행하지 않는다.

- `convention:content-strong-emphasis`
  - Created: 2026-08-25T11:40+09:00
  - Updated: 2026-08-25T11:40+09:00
  - Status: active
  - Content: 프로젝트·학습 노트·경험을 포함한 모든 Markdown 콘텐츠 본문에서 굵은 강조는 `**텍스트**` 대신 `<strong>텍스트</strong>`을 사용한다. 표와 HTML 블록에도 동일하게 적용하며, 색상 등 추가 스타일은 페이지에 정의된 클래스를 `<strong>`에 붙여 사용한다.
  - Evidence: `CONTENT_AUTHORING_GUIDE.md`, `src/content/projects/TEMPLATE.md`, `src/content/notes/TEMPLATE.md`, `src/content/experiences/TEMPLATE.md`.

- `convention:weather-presentation-bounded-rewrite`
  - Created: 2026-08-25T10:08+09:00
  - Updated: 2026-08-25T10:43+09:00
  - Status: active
  - Content: 날씨 콘테스트 페이지는 `날씨 빅데이터 자료/발표스크립트.md`와 최종 분석보고서 HWPX를 근거로 상세하게 작성하며, 보고서에만 있는 내용도 사용할 수 있다. 두 자료에 없는 주장은 넣지 않고, 데이터 누수 설명은 제외하며, 기상셀은 기존 전용 단락에서만 설명하고 이미지는 Codex가 분석하지 않는다.

- `convention:weather-prose-humanizer`
  - Created: 2026-08-25T10:43+09:00
  - Updated: 2026-08-25T10:43+09:00
  - Status: active
  - Content: 날씨 콘테스트 페이지 전체의 설명·전환·해석 문장은 `humanizer` 기준으로 자연스럽게 다듬되, frontmatter, 공식 수치, 표, 출처, 기술 명칭처럼 평서적으로 전달해야 하는 정보는 사실과 형식을 우선해 보존한다.

- `convention:weather-presentation-order-approval`
  - Created: 2026-08-25T10:08+09:00
  - Updated: 2026-08-25T10:08+09:00
  - Status: active
  - Content: 날씨 콘테스트 페이지의 발표 흐름은 필요하면 재배열할 수 있지만, Codex는 변경 이유와 대안 순서를 먼저 제시하고 사용자 허락을 받은 뒤에만 순서를 바꾼다.

## Known issues and fixes

- `issue:markdown-latex-npm-lock`
  - Created: 2026-08-25T15:49+09:00
  - Updated: 2026-08-25T15:49+09:00
  - Status: open
  - Symptom: GitHub Actions의 `npm ci`가 package.json과 package-lock.json 불일치로 실패하며 `@emnapi/runtime@1.11.3`과 `@emnapi/core@1.11.3` 누락을 보고했다.
  - Cause: 확정하지 못했다. LaTeX 의존성을 추가하며 갱신된 잠금 파일에 Linux CI가 요구한 선택적 `@emnapi` 의존성이 기록되지 않은 상태였다.
  - Fix: LaTeX 관련 패키지·Astro 설정·KaTeX CSS를 제거하고 package.json과 package-lock.json을 도입 이전 상태로 복원했다. LaTeX를 다시 적용하려면 Linux CI와 호환되는 잠금 파일 생성 방식을 먼저 검증해야 한다.
  - Evidence: GitHub Actions `npm ci` 로그, `package.json`, `package-lock.json`.

- `issue:astro-dev-startup`
  - Created: 2026-08-25T15:39+09:00
  - Updated: 2026-08-25T15:39+09:00
  - Status: open
  - Symptom: `npm run dev -- --host 127.0.0.1 --port 4321 --strictPort`가 `Dev server process exited before becoming ready.`를 출력하고 4321 포트를 열지 못한다.
  - Cause: 미확인. Astro 관리 명령으로 기존 서버를 중지하고 동일한 초기 실행 방식으로 재시도해도 같은 증상이 발생했다.
  - Fix: 사용자가 서버 작업을 나중으로 미뤘다. 다음 세션에서 개발 서버 프로세스의 실제 종료 원인을 먼저 확인한다.
  - Evidence: `%TEMP%/max-ji64-astro-dev.stderr.log`, `astro dev status`, 4321 포트 리스너 확인.

- `issue:weather-bold-marker-rendering`
  - Created: 2026-08-25T11:36+09:00
  - Updated: 2026-08-25T11:36+09:00
  - Status: resolved
  - Symptom: 사용자가 날씨 콘테스트 페이지의 일부 `**` 강조 표기가 문자 그대로 보인다고 확인했다.
  - Cause: 현재 정적 빌드에서는 재현되지 않아 이전 개발 서버 출력이나 raw HTML 문맥과 Markdown 강조가 섞인 시점의 렌더링으로 추정한다.
  - Fix: 페이지의 Markdown 강조를 모두 명시적 `<strong>` 요소로 바꾸고, 모델별 최고 점수에는 테마 대응 `weather-best-score` 강조색을 적용했다.
  - Evidence: `npm run check`, `npm run build`, 빌드 HTML의 `**` 0건과 `weather-best-score` 5개 확인, 로컬 HTTP 200 확인.

- `issue:search-console-sitemap-read`
  - Created: 2026-08-14T18:54+09:00
  - Updated: 2026-08-14T18:54+09:00
  - Status: open
  - Symptom: Search Console의 `/sitemap.xml` 세부 화면이 발견된 페이지 0개와 `사이트맵을 읽을 수 없음`을 표시했다.
  - Cause: 공개 사이트맵은 HTTP 200, `application/xml`, 유효한 urlset이고 robots.txt도 허용하므로 현재 확인된 범위에서는 코드·호스팅 문제가 아니다. Search Console의 최초 수집 또는 일시적 처리 실패로 판단된다.
  - Fix: 24시간 후 상태를 재확인하고 같은 오류가 지속될 때만 사이트맵을 삭제 후 `sitemap.xml`으로 다시 제출한다.
  - Evidence: 2026-08-14 공개 `https://max-ji64.github.io/sitemap.xml` 및 Googlebot User-Agent 요청이 HTTP 200과 XML urlset을 반환했고, `robots.txt`가 동일 사이트맵을 선언했다.

## Current handoff

- `handoff:current`
  - Updated: 2026-08-25T15:49+09:00
  - Current state: 포트폴리오 내용 보강은 유지하고 LaTeX 도입에 따른 패키지·설정·수식 변경만 이전 상태로 복원했다.
  - Next step: LaTeX 재도입 전 Linux GitHub Actions에서도 일관된 package-lock.json을 생성하는 방법과 Astro 개발 서버 종료 원인을 확인한다.
  - Blockers: LaTeX 의존성 추가 후 Linux CI의 `npm ci`가 선택적 `@emnapi` 의존성 누락으로 실패했으며, 로컬 Astro 개발 서버도 준비 전에 종료된다.

## Session log

- `session:20260813-1459`
  - Started: 2026-08-13T14:59+09:00
  - Last activity: 2026-08-13T20:58+09:00
  - Focus: 프로젝트 기본 기록과 홈 수상 프로젝트 카드 시각 구성.
  - Updated keys: `decision:2026-weather-big-data-contest-base`, `decision:recent-content-by-publication`, `decision:optional-project-metadata`, `decision:award-project-visual`, `handoff:current`.
  - Summary: 기존 Agent Memory를 모두 제거한 뒤 두 프로젝트를 기본 기록으로 등록했다. 홈 문구는 최근 업로드로 유지하면서 실제 선택 기준은 `updatedAt` 최신순으로 바꿨고, `수상작` 트로피와 16px 수상 태그를 추가했다. 대표 카드의 썸네일, 본문, 트로피를 독립 그리드 구역으로 분리해 겹침을 방지했으며 미검증 상태다.

- `session:20260813-1800`
  - Started: 2026-08-13T18:00+09:00
  - Last activity: 2026-08-13T21:00+09:00
  - Focus: 2026 날씨 빅데이터 콘테스트 포트폴리오 첫 시안과 홈 대표 카드 이미지 크롭 수정.
  - Updated keys: `decision:weather-portfolio-embedding`, `decision:weather-overview-metrics`, `decision:weather-source-content-preservation`, `decision:content-toc-remote`, `handoff:current`.
  - Summary: 준비 폴더의 상세 원고와 이미지·PDF·HTML을 사이트 내부 전용 경로로 복사하고 상세 페이지와 내부 뷰어를 구성했다. 공통 썸네일은 고정 프레임의 cover 크롭으로 통일했고 대시보드는 내부 프레임에 전체 화면이 들어오도록 비례 축소했다. 한눈에 보기 KPI 카드는 제거했으며, 원문과 대조해 공식 URL, 선행연구의 한계에서 출발한 확장 논리와 상세 분석 내용을 복원했다. 이후 날씨 프로젝트와 모든 학습 노트에 `##` 제목만 표시하는 공통 우측 목차 리모컨을 추가하고, 본문의 `##` 제목은 밝은 파랑과 하늘색 계열로 통일했다.

- `session:20260813-2103`
  - Started: 2026-08-13T21:03+09:00
  - Last activity: 2026-08-13T21:06+09:00
  - Focus: 전역 라이트/다크 테마 전환과 기본 다크 모드 설정.
  - Updated keys: `decision:site-theme-default`, `handoff:current`.
  - Summary: 헤더에 접근 가능한 테마 전환 버튼을 추가하고, 저장된 선택이 없으면 다크 모드로 초기 렌더링하도록 변경했다. 선택은 브라우저에 저장되며 타입 검사와 정적 빌드를 통과했다.

- `session:20260814-1815`
  - Started: 2026-08-14T18:15+09:00
  - Last activity: 2026-08-14T18:54+09:00
  - Focus: 개인 아카이브의 방문자 분석 도구 선택과 GA4 연결 범위 안내.
  - Updated keys: `decision:ga4-basic-measurement`, `decision:search-console-html-verification`, `issue:search-console-sitemap-read`, `handoff:current`.
  - Summary: 현재 Astro 정적 GitHub Pages 구조를 확인해 기본 방문·유입·콘텐츠 소비 분석에는 GA4를 권장했다. GA4와 Search Console 태그의 공개 반영 및 유효한 공개 사이트맵을 확인했으며, Search Console의 최초 사이트맵 읽기 오류는 하루 뒤 재확인하기로 했다.

- `session:20260825-1008`
  - Started: 2026-08-25T10:08+09:00
  - Last activity: 2026-08-25T15:49+09:00
  - Focus: 날씨 콘테스트 페이지의 `## 핵심 EDA` 이하를 실제 발표 내용에 맞춰 재구성하기 위한 범위와 순서 설계.
  - Updated keys: `decision:markdown-latex-rendering`, `convention:weather-no-automatic-astro-validation`, `convention:weather-presentation-bounded-rewrite`, `convention:weather-presentation-order-approval`, `convention:weather-prose-humanizer`, `convention:content-strong-emphasis`, `issue:weather-bold-marker-rendering`, `issue:astro-dev-startup`, `issue:markdown-latex-npm-lock`, `handoff:current`.
  - Summary: 상세 포트폴리오의 EDA와 모델 결과를 보강하고 강조 문법을 `<strong>`으로 통일했다. LaTeX 연동 후 Linux CI의 `npm ci`가 잠금 파일 불일치로 실패해 관련 패키지·설정·수식을 도입 이전 상태로 복원했으며, 재도입 전 잠금 파일 문제를 해결하도록 기록했다.

## Session archive
