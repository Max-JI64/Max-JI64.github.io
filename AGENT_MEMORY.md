# Agent Memory

> Codex-maintained project memory. Verify time-sensitive facts against the
> current workspace.

## Project snapshot

- Last updated: 2026-08-13T21:06+09:00
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

## Working conventions

## Known issues and fixes

## Current handoff

- `handoff:current`
  - Updated: 2026-08-13T21:06+09:00
  - Current state: 모든 페이지 헤더에 현재 테마와 반대되는 테마로 전환하는 버튼을 추가했고, 저장값이 없을 때는 다크 모드로 초기 렌더링한다. `astro check`와 정적 빌드가 통과했다.
  - Next step: 사용자가 실제 화면에서 전환 버튼의 문구와 배치를 확인한 뒤 필요하면 조정한다.
  - Blockers: 없음.

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

## Session archive
