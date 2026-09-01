# Agent Memory

> Codex-maintained project memory. Verify time-sensitive facts against the
> current workspace.

## Project snapshot

- Last updated: 2026-09-01T22:52+09:00
- Purpose: 날씨 빅데이터, 금융 AI, 업스테이지 하네스 엔지니어링, MOLIP과 성남시 공공데이터 공모전을 포함하는 개인 프로젝트 아카이브.
- Important paths: `src/content/projects/`, `src/pages/index.astro`, `AGENT_MEMORY.md`.

## Durable decisions

- `decision:home-project-carousel-discoverability`
  - Created: 2026-09-01T19:43+09:00
  - Updated: 2026-09-01T22:30+09:00
  - Status: active
  - Content: 홈 프로젝트, 경험·자격증과 학습 노트 영역은 전체 개수와 현재 표시 범위를 항상 표시하고 카드·목록 밖의 방향 버튼을 hover 없이 노출한다. 프로젝트는 가로, 경험·자격증과 학습 노트는 세로 방향을 따르며 한 번 클릭할 때 한 항목만 이동한다. 경험 카드의 기간 글자는 프로젝트 카드 기간과 같은 12px·750 굵기를 사용한다. 대표 프로젝트를 제외한 다른 프로젝트는 프로젝트 기간 종료일 내림차순으로 정렬하고, 동률이면 글 발행일 최신순을 따른다.
  - Evidence: `src/pages/index.astro`, `src/styles/global.css`; 경험 기간 글자 통일은 공백 오류만 확인하고 사용자 직접 시각 검증에 남김.

- `decision:project-archive-list-layout`
  - Created: 2026-09-01T20:27+09:00
  - Updated: 2026-09-01T22:28+09:00
  - Status: active
  - Content: 프로젝트 전체 목록은 경험·자격증 페이지와 같은 `썸네일 | 핵심 설명 | 기간·역할·수상 정보` 행형 목록을 사용한다. 수상 트로피는 오른쪽 정보 칸 안에 작게 배치하되, 오른쪽 수상 정보의 높이가 가운데 제목 위치를 아래로 밀지 않도록 핵심 설명은 행 안에서 독립적으로 가운데 정렬한다. 모바일에서는 한 열로 접고 목록은 프로젝트 기간 종료일 내림차순이며 동률이면 글 발행일 최신순이다.
  - Evidence: `src/pages/projects/index.astro`, `src/components/AwardTrophy.astro`, `src/styles/global.css`; 제목 정렬 수정은 공백 오류만 확인하고 사용자 직접 시각 검증에 남김.

- `decision:global-prose-table-ui`
  - Created: 2026-09-01T20:37+09:00
  - Updated: 2026-09-01T20:37+09:00
  - Status: active
  - Content: 프로젝트·경험·학습 노트 상세 본문의 모든 `.prose` 표는 외곽선과 셀 구분선, 포인트색 헤더, 교차 행 배경과 첫 열 강조를 공통으로 사용한다. 데스크톱에서는 본문 너비를 채우고 560px 이하에서는 표 내부 가로 스크롤로 전환해 페이지 전체의 가로 넘침을 막는다.
  - Evidence: `src/styles/global.css`; `npm run check`, `npm run build`, AI TOP 100 상세의 다크·라이트·390px 모바일과 날씨 빅데이터 상세의 표 8개에 대한 브라우저 검사 통과.

- `decision:header-primary-navigation`
  - Created: 2026-09-01T22:18+09:00
  - Updated: 2026-09-01T22:18+09:00
  - Status: active
  - Content: 공통 헤더의 데스크톱·모바일 주요 메뉴는 `홈`, `프로젝트`, `경험`, `학습 노트` 순서로 표시한다. About은 상단 주요 메뉴에서 제외하되 `/about/` 경로 자체는 유지한다.
  - Evidence: `src/components/Header.astro`; 사용자 직접 검증 원칙에 따라 코드와 공백 오류만 확인하고 브라우저·빌드는 수행하지 않음.

- `decision:public-experience-reflection-disclosures`
  - Created: 2026-09-01T22:44+09:00
  - Updated: 2026-09-01T22:44+09:00
  - Status: active
  - Content: 자기소개서 경험은행 원문은 공개하지 않고, 기존 프로젝트 본문과 중복되지 않는 판단·실패·전환 사례만 `판단과 시행착오` 기본 접힘 토글로 공개한다. 버팀AI 3개, 업스테이지 1개, 날씨 2개, MOLIP 2개, 성남시 1개를 선별하고 이미 네 사례를 충분히 설명하는 AI TOP 100은 추가하지 않는다. 자기소개서 문항 태그, 사실 확인 메모와 내부 경로는 노출하지 않는다.
  - Evidence: `자기소개서 경험 소재 정리.md`, `src/content/projects/{2026-finance-ai-challenge-buteomai,upstage-harness-engineering-skillthon,2026-weather-big-data-contest,molip-ai-daily-planner,2025-seongnam-public-data-contest}.md`, `src/styles/global.css`; 토글 5개·사례 9개와 article 태그 균형, `git diff --check` 통과. 브라우저·전체 빌드는 수행하지 않음.

- `decision:2026-weather-big-data-contest-base`
  - Created: 2026-08-13T14:59+09:00
  - Updated: 2026-08-13T16:36+09:00
  - Status: active
  - Content: 2026 날씨 빅데이터 콘테스트는 2026년 5월 1일부터 8월 5일까지 진행한 `우수상(기상청장상)` 수상 대표 프로젝트로 유지하고, 세부 분석 내용은 추후 보강한다.
  - Evidence: `src/content/projects/2026-weather-big-data-contest.md`.

- `decision:weather-presentation-qa-appendix`
  - Created: 2026-09-01T18:56+09:00
  - Updated: 2026-09-01T19:07+09:00
  - Status: active
  - Content: 본선 발표 질의응답 정리의 질문 5개와 핵심 한계를 날씨 콘테스트 페이지 마지막에 공개한다. 질문과 답변은 각각 Q/A 블록으로 표시하고 기존 하늘색 포인트 안에서 구분하며, 사용자가 실제 적용 상태를 확인했다.
  - Evidence: `26.08.05 기상데이터 공모전 - 질의응답_정리.md`, `src/content/projects/2026-weather-big-data-contest.md`, `src/styles/global.css`.

- `decision:ai-top-100-experience-record`
  - Created: 2026-09-01T19:15+09:00
  - Updated: 2026-09-01T20:42+09:00
  - Status: active
  - Content: AI TOP 100 CAMPUS 활동은 2026년 3월 14일부터 4월 4일까지다. 시작일·종료일은 콘텐츠 frontmatter를 단일 원본으로 사용하고 홈·전체 목록·상세 메타데이터에서 `YYYY. MM. DD.` 형식으로 표시한다. 경험 페이지는 계획 수립·문제 실행 프롬프트의 파일 계약, 수치형 중단 기준, 도구 책임과 수능 경향 분석 적용 예시를 중심으로 공개하며 미검증 성과는 주장하지 않는다.
  - Evidence: `src/content/experiences/ai-top-100-campus-finalist.md`, `src/utils/formatDate.ts`, `src/pages/index.astro`, `src/pages/experiences/index.astro`, `src/layouts/ExperienceLayout.astro`; 날짜 연동 수정은 사용자 요청에 따라 코드만 반영하고 화면 검증은 수행하지 않음.

- `decision:ai-top-100-prompt-disclosures`
  - Created: 2026-09-01T22:24+09:00
  - Updated: 2026-09-01T22:52+09:00
  - Status: active
  - Content: AI TOP 100 경험 페이지의 계획 수립 프롬프트와 문제 풀이 지시 프롬프트 전문은 각 설명 바로 아래의 기본 접힘 토글로 제공한다. 배포가 준비 폴더의 존재 여부에 의존하지 않도록 복원된 원본 Markdown을 `src/data/experiences/ai-top-100-campus-finalist/`에 바이트 동일 사본으로 보관하고 페이지는 그 저장소 내부 사본을 읽는다. 수능 경향 분석 적용 예시는 실제 적용 근거로 유지한다.
  - Evidence: `AI TOP 100 대회 본선 진출/AI TOP 100 분석 계획 수립 프롬프트.md`, `AI TOP 100 대회 본선 진출/AI TOP 100 문제 풀이 지시 프롬프트.md`, `src/data/experiences/ai-top-100-campus-finalist/`, `src/content/experiences/ai-top-100-campus-finalist.md`, `src/pages/experiences/ai-top-100-campus-finalist/prompts/[kind].astro`, `src/styles/global.css`; 원본과 사본 SHA-256은 각각 `7F58E914932A5255DB8705DDFE0CED640126958C71D13E1D175C936A43563406`, `66097AAFC232395DC084AC0CA4256B332A3925BE8C0801EE0844B383F25561F8`로 일치하며 `git diff --check` 통과. 브라우저·전체 빌드는 수행하지 않음.

- `decision:molip-project-record`
  - Created: 2026-09-01T19:24+09:00
  - Updated: 2026-09-01T19:33+09:00
  - Status: active
  - Content: MOLIP은 5단계 LLM·결정론적 일정 생성, EMA 개인화, 주간 레포트, 벡터 검색, SSE 채팅과 관측성을 직접 구현한 AI 서비스 프로젝트로 공개한다. 채팅·MCP 자동 호출, 강화학습, LangChain·LangGraph 사용과 현재 서비스 운영은 확인된 범위 밖이므로 주장하지 않는다.
  - Evidence: `카카오테크 부트캠프 - MOLIP/자소서·포트폴리오용 프로젝트 요약.md`, `src/content/projects/molip-ai-daily-planner.md`, `public/projects/molip-ai-daily-planner/`; `npm run check`, `npm run build`, 데스크톱 다크·라이트와 375px 모바일 브라우저 점검 통과.

- `decision:seongnam-public-data-project-record`
  - Created: 2026-09-01T19:35+09:00
  - Updated: 2026-09-01T19:48+09:00
  - Status: active
  - Content: 성남시 공공데이터 공모전은 분당구 33개 상권의 29개 변수를 5개 요인과 4개 군집으로 구조화해 전통시장 4곳을 고른 데이터 분석 프로젝트로 공개한다. 정책 시행·효과 검증은 주장하지 않으며, 공개 보고서는 개인정보가 있는 앞 4페이지를 제거하고 대표 사진은 사용자가 직접 얼굴을 비식별 처리한 사본을 쓴다.
  - Evidence: `2025년 성남시 공공데이터 활용분석 아이디어 공모전/자소서·포트폴리오용 프로젝트 요약.md`, PDF·발표 스크립트 교차 확인, `src/content/projects/2025-seongnam-public-data-contest.md`, `public/projects/2025-seongnam-public-data-contest/`; 공개 보고서 13페이지 중 앞 4페이지를 제거한 9페이지 사본, 민감 문자열 검사 0건, `npm run check`, `npm run build` 통과.

- `decision:recent-content-by-publication`
  - Created: 2026-08-13T15:08+09:00
  - Updated: 2026-09-01T19:48+09:00
  - Status: active
  - Content: 홈 문구는 최근 업로드로 유지하고 `updatedAt ?? publishedAt` 최신순으로 하나를 선택하되, 프로젝트와 경험은 `homeRecent: false`로 후보에서 제외할 수 있다. AI TOP 100 경험, MOLIP과 성남시 프로젝트는 제외하고 날씨 빅데이터 콘테스트를 계속 표시한다.
  - Evidence: `src/pages/index.astro`, `src/content.config.ts`, `src/content/experiences/TEMPLATE.md`, 빌드된 `dist/index.html`.

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
  - Updated: 2026-08-25T16:08+09:00
  - Status: superseded
  - Content: LaTeX 연동은 폐기하고 `convention:content-mathml-formulas`로 대체했다. 별도 npm 패키지 없이 브라우저 기본 MathML을 사용한다.
  - Evidence: `package.json`, `package-lock.json`, `astro.config.mjs`, `src/layouts/BaseLayout.astro`, `src/content/projects/2026-weather-big-data-contest.md`.

- `decision:upstage-draft-home-preservation`
  - Created: 2026-08-31T14:32+09:00
  - Updated: 2026-08-31T15:07+09:00
  - Status: active
  - Content: 업스테이지 하네스 엔지니어링 스킬톤은 준비된 Markdown 근거를 사용한 상세 비교 시안으로 공개하되 확정본으로 간주하지 않는다. `updatedAt`을 두지 않고 `featured: false`, `homeRecent: false`를 유지해 홈 최근 업로드와 대표 프로젝트가 날씨 빅데이터에서 바뀌지 않게 한다.
  - Evidence: `src/content/projects/upstage-harness-engineering-skillthon.md`, `public/projects/upstage-harness-engineering-skillthon/`, `dist/index.html`; `npm run check`, `npm run build`, 정적 홈 노출 검사 통과.

- `decision:upstage-official-title-and-hero-poster`
  - Created: 2026-08-31T17:00+09:00
  - Updated: 2026-08-31T17:00+09:00
  - Status: active
  - Content: 업스테이지 상세 페이지의 메인 제목은 공식 대회명 `2026 제1회 Upstage X BDAI Harness Engineering Skillthon`을 사용하고, 메인 이미지는 사용자가 지정한 원본 대회 모집 포스터를 사용한다. 내부 결과 포스터는 본문 산출물로만 유지한다.
  - Evidence: `업스테이지 하네스 엔지니어링 스킬톤/업스테이지 하네스 엔지니어링 스킬톤 포스터.png`, `public/projects/upstage-harness-engineering-skillthon/images/competition-poster.png`, `src/content/projects/upstage-harness-engineering-skillthon.md`.

- `decision:upstage-video-chapters`
  - Created: 2026-09-01T19:14+09:00
  - Updated: 2026-09-01T19:23+09:00
  - Status: active
  - Content: 업스테이지 실행 영상과 4개 챕터 타임라인은 기본 접힘 토글 안에 두고, 데스크톱 영상은 본문 내부 너비의 50%, 모바일은 100%로 표시한다. 챕터 이동·현재 위치 강조를 유지하며 토글을 닫으면 재생을 자동 정지한다.
  - Evidence: `src/content/projects/upstage-harness-engineering-skillthon.md`, `src/styles/global.css`, `public/scripts/video-chapters.js`; `npm run check`, `npm run build`, 브라우저 기본 접힘·50% 폭·89초 재생·닫기 후 정지 확인.

- `decision:upstage-dashboard-toggle`
  - Created: 2026-09-01T19:27+09:00
  - Updated: 2026-09-01T19:27+09:00
  - Status: active
  - Content: 업스테이지 오프라인 대시보드는 제목을 요약으로 사용하는 기본 접힘 토글 안에 설명, 새 창 링크와 iframe을 함께 두며 모바일에서는 iframe 최소 높이를 낮춘다.
  - Evidence: `src/content/projects/upstage-harness-engineering-skillthon.md`, `src/styles/global.css`; `npm run check`, `npm run build`, 정적 HTML 기본 접힘·iframe 내부 배치와 로컬 HTTP 200 확인.

- `decision:finance-official-title-and-hero-poster`
  - Created: 2026-08-31T17:06+09:00
  - Updated: 2026-08-31T17:06+09:00
  - Status: active
  - Content: 금융 AI 상세 페이지의 메인 제목은 공식 대회명 `2026 금융 AI Challenge`를 사용하고, 메인 이미지는 사용자가 지정한 원본 대회 모집 포스터를 사용한다. 버팀AI 서비스 화면은 본문 프로젝트 자료로 유지한다.
  - Evidence: `2026 금융 AI Challenge - 버팀AI/2026 금융 AI Challenge 포스터.jpg`, `public/projects/2026-finance-ai-challenge/images/competition-poster.jpg`, `src/content/projects/2026-finance-ai-challenge-buteomai.md`.

- `decision:finance-home-thumbnail`
  - Created: 2026-08-31T17:08+09:00
  - Updated: 2026-08-31T17:08+09:00
  - Status: active
  - Content: 금융 AI 프로젝트의 홈 및 프로젝트 목록 썸네일은 사용자가 지정한 `13주 현금 비교` 그래프를 사용한다.
  - Evidence: `public/projects/2026-finance-ai-challenge/images/05-cashflow-comparison.png`, `src/content/projects/2026-finance-ai-challenge-buteomai.md`; 홈 HTML 경로와 이미지 HTTP 200 확인.

- `decision:finance-offline-demo`
  - Created: 2026-08-31T18:34+09:00
  - Updated: 2026-08-31T18:34+09:00
  - Status: active
  - Content: 금융 AI 포트폴리오의 실제 서비스 링크는 제거하고 사용자가 제공한 단일 HTML 오프라인 데모를 새 창 링크와 iframe으로 제공한다. 데모는 저장된 고정 데이터만 사용하며 모델 실행, 외부 AI, API와 외부 네트워크 연결이 없음을 명시한다.
  - Evidence: `2026 금융 AI Challenge - 버팀AI/index.html`, `public/projects/2026-finance-ai-challenge/demo/index.html`, `src/content/projects/2026-finance-ai-challenge-buteomai.md`; 원본·공개·빌드 SHA-256 일치, `connect-src 'none'`, 로컬 페이지와 `/demo/index.html` HTTP 200 확인.

- `decision:finance-draft-home-preservation`
  - Created: 2026-08-31T14:34+09:00
  - Updated: 2026-08-31T15:09+09:00
  - Status: active
  - Content: 버팀AI 금융 AI 프로젝트는 준비된 Markdown 근거만 사용한 상세 비교 시안으로 공개하되 확정본으로 간주하지 않는다. `featured: false`, `homeRecent: false`로 두어 홈 최근 업로드와 대표 프로젝트를 날씨 빅데이터로 유지한다.
  - Evidence: `src/content/projects/2026-finance-ai-challenge-buteomai.md`, `public/projects/2026-finance-ai-challenge/`, `src/content.config.ts`, `src/pages/index.astro`, `dist/index.html`; `npm run check`, `npm run build`, 정적 홈 노출 검사 통과.

- `decision:resume-portfolio-learning-note`
  - Created: 2026-09-01T20:30+09:00
  - Updated: 2026-09-01T20:30+09:00
  - Status: active
  - Content: 루트의 `자소서·포트폴리오 작성 강의 통합 정리.md`는 원본으로 보존하고, 공개 학습 노트는 `src/content/notes/resume-portfolio-writing-guide.md`에 별도로 둔다. 원본의 `15. 핵심 자료별 반영 내용`과 로컬 파일명·경로·링크는 공개 페이지에 포함하지 않는다.
  - Evidence: 원본 776줄 유지, 공개 노트 746줄·로컬 자료 문자열 0건, `npm run check`, `npm run build`, 로컬 HTTP 200 확인.

## Working conventions

- `convention:user-owned-browser-validation`
  - Created: 2026-09-01T20:42+09:00
  - Updated: 2026-09-01T20:42+09:00
  - Status: active
  - Content: 사용자가 직접 확인하겠다고 한 블로그 UI 작업에서는 Codex가 브라우저·스크린샷·다크/라이트·모바일 시각 검증이나 전체 빌드를 임의로 수행하지 않는다. 요청된 코드 수정과 최소 정적 오류 확인까지만 하고 실제 화면 검증은 사용자에게 남긴다.

- `convention:media-analysis-on-demand`
  - Created: 2026-08-31T14:32+09:00
  - Updated: 2026-08-31T14:32+09:00
  - Status: active
  - Content: Codex 사용량을 아끼기 위해 포트폴리오 작업의 이미지·PDF 내용 분석과 브라우저 스크린샷 검사는 꼭 필요한 경우에만 수행하고, 가능한 경우 코드·정적 빌드·파일 존재 검사를 우선한다.

- `convention:content-mathml-formulas`
  - Created: 2026-08-25T16:08+09:00
  - Updated: 2026-08-25T16:08+09:00
  - Status: active
  - Content: 프로젝트·학습 노트·경험 Markdown의 수식은 LaTeX 패키지 대신 브라우저 기본 MathML로 작성하며, 블록 수식은 `<math display="block" style="font-size: 1.5rem;">` 형식을 사용한다.
  - Evidence: `CONTENT_AUTHORING_GUIDE.md`, `src/content/projects/TEMPLATE.md`, `src/content/notes/TEMPLATE.md`, `src/content/experiences/TEMPLATE.md`, `src/content/projects/2026-weather-big-data-contest.md`.

- `convention:weather-page-complete`
  - Created: 2026-08-25T16:08+09:00
  - Updated: 2026-08-25T16:08+09:00
  - Status: active
  - Content: `src/content/projects/2026-weather-big-data-contest.md`의 발표·보고서 기반 내용 수정과 수식·이미지 표시 조정을 완료했으며, 사용자가 이 상태에서 페이지 작업을 마무리하기로 확정했다.

- `convention:content-figure-sizing`
  - Created: 2026-08-25T16:01+09:00
  - Updated: 2026-08-25T16:01+09:00
  - Status: active
  - Content: 프로젝트·학습 노트·경험 Markdown의 본문 이미지는 `<figure>`에 `style="width: 80%; margin-inline: auto; text-align: center;"`를 적용하고, 이미지 크기는 figure의 width 비율로 조절한다.
  - Evidence: `CONTENT_AUTHORING_GUIDE.md`, `src/content/projects/TEMPLATE.md`, `src/content/notes/TEMPLATE.md`, `src/content/experiences/TEMPLATE.md`.

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

- `issue:ai-top-prompt-source-import`
  - Created: 2026-09-01T22:52+09:00
  - Updated: 2026-09-01T22:52+09:00
  - Status: resolved
  - Symptom: GitHub Actions 빌드가 저장소 루트의 `AI TOP 100 대회 본선 진출` 폴더를 가리키는 프롬프트 Markdown import를 찾지 못해 실패했다.
  - Cause: Astro 페이지가 삭제되거나 Git에 포함되지 않을 수 있는 준비 원본 경로를 직접 import해 CI 배포가 로컬 준비 폴더에 의존했다.
  - Fix: 사용자가 복원한 두 원본을 `src/data/experiences/ai-top-100-campus-finalist/`에 그대로 복사하고 `[kind].astro`가 저장소 내부 사본만 import하도록 변경했다.
  - Evidence: 두 원본과 사본의 SHA-256 동일 확인, `src/pages/experiences/ai-top-100-campus-finalist/prompts/[kind].astro`, `git diff --check` 통과. 사용자 지시에 따라 빌드와 브라우저 검증은 수행하지 않음.

- `issue:finance-content-depth`
  - Created: 2026-08-31T14:42+09:00
  - Updated: 2026-08-31T15:09+09:00
  - Status: resolved
  - Symptom: 버팀AI 초안은 문제와 서비스 흐름이 명확하지만 날씨 콘테스트 페이지와 비교하면 문제 근거, 금융 계산 설계, 고정 가상 사례의 수치 해석, 상세 역할과 모델 검증 근거가 충분히 이어지지 않는다.
  - Cause: 첫 작성 범위를 간략한 초안으로 제한하며 준비된 메인 원고 224줄과 계산·안전장치 상세 원고를 116줄로 축약했기 때문이다.
  - Fix: 준비 원고의 역할, 문제 근거, 금융 계산 설계, 고정 가상 사례, 서비스 흐름, 9종 데이터, 모델 경계, AI 안전장치와 실패 대응을 역피라미드 순서로 복원해 10개 대단락·18개 세부 단락의 상세 비교 시안으로 확장했다. 근거가 없는 모델 성능 수치는 검증 한계로 명시했다.
  - Evidence: `src/content/projects/2026-finance-ai-challenge-buteomai.md`, `src/layouts/ProjectLayout.astro`, `src/styles/global.css`; 7개 figure·89개 표 행·공개 에셋 누락 0건, `npm run check`, `npm run build`, 홈 노출 정적 검사 통과. 이미지·PDF 내용 분석은 수행하지 않음.

- `issue:upstage-content-depth`
  - Created: 2026-08-31T14:41+09:00
  - Updated: 2026-08-31T15:07+09:00
  - Status: resolved
  - Symptom: 업스테이지 프로젝트 초안은 문제, 4개 Skill, 실행 수치, 산출물과 회고의 기본 흐름은 갖췄지만 날씨 콘테스트 페이지와 비교하면 담당 역할, 핵심 질문, 데이터 설계, 실제 분석 결과, 설계 판단과 한계가 충분히 연결되지 않는다.
  - Cause: 첫 작성 범위를 간략한 공개 초안으로 제한하며 준비된 302줄 장문 원고에서 82줄만 추렸기 때문이다.
  - Fix: 준비 원고의 `담당 역할`, `대회 정보`, `최종 산출물`, `핵심 질문`, `Solar와 Python 역할 분리`, `승인 게이트`, `데이터 설계`, `분석 결과`, `기술적 성공과 질문 충족도 분리`를 역피라미드 순서로 선별 복원하고 10개 대단락·11개 세부 단락의 상세 비교 시안으로 확장했다.
  - Evidence: `src/content/projects/upstage-harness-engineering-skillthon.md`, `src/layouts/ProjectLayout.astro`, `src/styles/global.css`; 7개 figure·10개 표·공개 에셋 누락 0건, `npm run check`, `npm run build`, 홈 노출 정적 검사 통과. 이미지·PDF 내용 분석은 수행하지 않음.

- `issue:markdown-latex-npm-lock`
  - Created: 2026-08-25T15:49+09:00
  - Updated: 2026-08-25T16:08+09:00
  - Status: resolved
  - Symptom: GitHub Actions의 `npm ci`가 package.json과 package-lock.json 불일치로 실패하며 `@emnapi/runtime@1.11.3`과 `@emnapi/core@1.11.3` 누락을 보고했다.
  - Cause: 확정하지 못했다. LaTeX 의존성을 추가하며 갱신된 잠금 파일에 Linux CI가 요구한 선택적 `@emnapi` 의존성이 기록되지 않은 상태였다.
  - Fix: LaTeX 관련 패키지·Astro 설정·KaTeX CSS를 제거하고 package.json과 package-lock.json을 도입 이전 상태로 복원했다. 수식은 npm 의존성이 없는 MathML로 대체해 배포와 표시를 확인했다.
  - Evidence: GitHub Actions `npm ci` 로그, `package.json`, `package-lock.json`.

- `issue:astro-dev-startup`
  - Created: 2026-08-25T15:39+09:00
  - Updated: 2026-08-25T15:53+09:00
  - Status: resolved
  - Symptom: `npm run dev -- --host 127.0.0.1 --port 4321 --strictPort`가 `Dev server process exited before becoming ready.`를 출력하고 4321 포트를 열지 못한다.
  - Cause: LaTeX 의존성과 Astro Markdown 설정을 추가한 상태에서 발생했다. 정확한 내부 원인은 확인하지 못했다.
  - Fix: LaTeX 관련 변경을 이전 상태로 복원한 뒤 같은 명령으로 서버를 다시 실행하자 정상적으로 시작됐다.
  - Evidence: `%TEMP%/max-ji64-astro-dev.stdout.log`, `http://127.0.0.1:4321/projects/2026-weather-big-data-contest/` HTTP 200 확인.

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

- `issue:thumbnail-circle-overlay`
  - Created: 2026-08-31T16:42+09:00
  - Updated: 2026-08-31T16:54+09:00
  - Status: resolved
  - Symptom: 홈의 버팀AI와 업스테이지 프로젝트 카드 썸네일 실제 이미지 위에 큰 반투명 원 두 개가 겹쳐 보인다.
  - Cause: 공통 `.content-thumbnail::before`와 `::after` 원형 장식이 실제 `<img>`가 있는 썸네일에도 조건 없이 렌더링된다.
  - Fix: 실제 이미지가 있으면 `content-thumbnail--has-image` 클래스를 붙이고 원형 의사 요소 선택자에서 제외해, 장식을 이미지 없는 fallback에만 유지했다.
  - Evidence: `src/components/ContentThumbnail.astro`, `src/styles/global.css`; `npm run check`, `npm run build`, 개발 서버 HTTP 200과 생성 HTML·CSS 선택자 확인 통과. 최종 시각 확인은 사용자 소유.

- `issue:astro-dev-persistence`
  - Created: 2026-08-31T16:46+09:00
  - Updated: 2026-08-31T16:46+09:00
  - Status: resolved
  - Symptom: HTTP 200을 확인했던 편집용 Astro 서버가 다음 요청 시 종료되어 4321 연결이 거부됐다.
  - Cause: Astro 7.2.1이 Codex 에이전트 환경을 감지해 개발 서버를 자동 백그라운드화했고, 해당 프로세스가 작업 수명 동안 유지되지 않았다.
  - Fix: `ASTRO_DEV_BACKGROUND`를 비어 있지 않은 값으로 설정해 자동 감지를 끄고 `npm run dev -- --host 127.0.0.1 --port 4321 --strictPort`를 지속 실행 세션에서 전경 실행한다.
  - Evidence: `node_modules/astro/dist/cli/dev/index.js:86-117`; 전경 서버의 `watching for file changes`, 로컬 `/` HTTP 200 확인.

- `issue:upstage-poster-viewport-scale`
  - Created: 2026-09-01T19:02+09:00
  - Updated: 2026-09-01T19:06+09:00
  - Status: resolved
  - Symptom: 업스테이지 프로젝트 본문의 일곱 figure 이미지가 반응형 본문에서 지나치게 커지거나 원본 비율과 다르게 늘어나 보였다.
  - Cause: 이미지 너비는 `max-width: 100%`로 줄였지만 HTML의 고정 width·height 속성에 대응하는 `height: auto`와 화면 높이 제한이 모든 figure에 적용되지 않았다.
  - Fix: 첫 포스터는 사용자가 조절 가능한 인라인 크기 규칙을 유지하고, 나머지 여섯 figure에는 공통 클래스를 적용해 `height: auto`, `object-fit: contain`, `max-height: min(78dvh, 760px)`로 비율과 크기를 보정했다.
  - Evidence: `src/content/projects/upstage-harness-engineering-skillthon.md`, `src/styles/global.css`; 공통 클래스 6개, `git diff --check`, 로컬 상세 페이지 HTTP 200 확인. 이미지 분석은 수행하지 않았고 시각 점검은 사용자 소유.

## Current handoff

- `handoff:current`
  - Updated: 2026-09-01T22:52+09:00
  - Current state: 편집용 Astro 서버가 `http://127.0.0.1:4321/`에서 실행 중이다. 다섯 프로젝트 상세 페이지의 `판단과 시행착오` 토글을 유지하며, 복원된 AI TOP 100 프롬프트 원본 두 개를 저장소 내부 `src/data`에 복사하고 배포 import를 해당 사본으로 전환했다.
  - Next step: 새 `src/data/experiences/ai-top-100-campus-finalist/` 파일 두 개와 `[kind].astro` 변경을 커밋·푸시한 뒤 사용자가 CI 빌드를 확인한다. 요청에 따라 브라우저·시각 검증과 전체 빌드는 수행하지 않았다.
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

- `session:20260814-1815`
  - Started: 2026-08-14T18:15+09:00
  - Last activity: 2026-08-14T18:54+09:00
  - Focus: 개인 아카이브의 방문자 분석 도구 선택과 GA4 연결 범위 안내.
  - Updated keys: `decision:ga4-basic-measurement`, `decision:search-console-html-verification`, `issue:search-console-sitemap-read`, `handoff:current`.
  - Summary: 현재 Astro 정적 GitHub Pages 구조를 확인해 기본 방문·유입·콘텐츠 소비 분석에는 GA4를 권장했다. GA4와 Search Console 태그의 공개 반영 및 유효한 공개 사이트맵을 확인했으며, Search Console의 최초 사이트맵 읽기 오류는 하루 뒤 재확인하기로 했다.

- `session:20260825-1008`
  - Started: 2026-08-25T10:08+09:00
  - Last activity: 2026-08-25T16:08+09:00
  - Focus: 날씨 콘테스트 페이지의 `## 핵심 EDA` 이하를 실제 발표 내용에 맞춰 재구성하기 위한 범위와 순서 설계.
  - Updated keys: `decision:markdown-latex-rendering`, `convention:weather-no-automatic-astro-validation`, `convention:weather-presentation-bounded-rewrite`, `convention:weather-presentation-order-approval`, `convention:weather-prose-humanizer`, `convention:content-strong-emphasis`, `convention:content-figure-sizing`, `convention:content-mathml-formulas`, `convention:weather-page-complete`, `issue:weather-bold-marker-rendering`, `issue:astro-dev-startup`, `issue:markdown-latex-npm-lock`, `handoff:current`.
  - Summary: 날씨 콘테스트 포트폴리오의 EDA·모델 결과·이미지 표시를 보강했다. LaTeX 연동은 npm 잠금 파일 문제로 폐기하고 배포가 확인된 MathML로 대체했으며, 공통 작성 규칙에 반영한 뒤 사용자의 확인에 따라 페이지 수정을 완료했다.

- `session:20260831-1426`
  - Started: 2026-08-31T14:26+09:00
  - Last activity: 2026-08-31T15:09+09:00
  - Focus: 버팀AI 금융 AI 프로젝트 페이지의 초안 작성, 날씨 페이지 기준 검토와 상세 비교 시안 확장.
  - Updated keys: `decision:finance-draft-home-preservation`, `issue:finance-content-depth`, `handoff:current`.
  - Summary: 준비된 세 Markdown에서 역할, 문제 근거, 무대응 기준선, 정책 사건 변환, 고정 사례 수치, 서비스 흐름, 데이터·모델 경계, AI 안전장치와 한계를 복원해 상세 비교 시안으로 확장했다. 근거 없는 모델 성능은 추가하지 않았고 이미지·PDF 내용 분석 없이 에셋, Astro 검사·빌드와 홈 노출을 확인했다. 시안은 사용자 미확정 상태다.

- `session:20260831-1432`
  - Started: 2026-08-31T14:32+09:00
  - Last activity: 2026-08-31T15:07+09:00
  - Focus: 업스테이지 프로젝트의 간략한 초안 작성, 날씨 페이지 기준 검토와 상세 비교 시안 확장.
  - Updated keys: `decision:upstage-draft-home-preservation`, `convention:media-analysis-on-demand`, `issue:upstage-content-depth`, `handoff:current`.
  - Summary: 준비된 장문 Markdown의 역할, 산출물, 핵심 질문, Skill 설계 판단, 데이터 구성, Timely QA, 실제 분석 결과와 성공·한계를 역피라미드 순서로 복원해 상세 비교 시안으로 확장했다. `humanizer` 기준으로 홍보성 문장을 줄였고 이미지·PDF 내용 분석 없이 공개 에셋, Astro 검사·빌드와 홈 노출을 확인했다. 시안은 사용자 미확정 상태다.

- `session:20260831-1637`
  - Started: 2026-08-31T16:37+09:00
  - Last activity: 2026-08-31T18:34+09:00
  - Focus: 블로그 이미지·제목 정리와 금융 AI 오프라인 데모 연결.
  - Updated keys: `decision:upstage-official-title-and-hero-poster`, `decision:finance-official-title-and-hero-poster`, `decision:finance-home-thumbnail`, `decision:finance-offline-demo`, `issue:thumbnail-circle-overlay`, `issue:astro-dev-persistence`, `handoff:current`.
  - Summary: 두 프로젝트의 공식 제목과 포스터, 금융 썸네일을 정리하고 서버를 복구했다. 금융 AI 실제 서비스 URL은 제거하고 원본 HTML을 그대로 복사한 오프라인 데모를 링크와 iframe으로 연결했으며, 무모델·무외부 AI·무네트워크 범위와 검사·빌드·HTTP 응답을 확인했다. 최종 시각 확인은 사용자에게 남겼다.

- `session:20260901-1855`
  - Started: 2026-09-01T18:55+09:00
  - Last activity: 2026-09-01T22:52+09:00
  - Focus: 블로그 편집용 서버와 UI 개선, 공개 프로젝트 페이지에 자기소개서 경험 소재를 선별 반영.
  - Updated keys: `handoff:current`, `issue:upstage-poster-viewport-scale`, `issue:ai-top-prompt-source-import`, `decision:upstage-video-chapters`, `decision:upstage-dashboard-toggle`, `decision:home-project-carousel-discoverability`, `decision:ai-top-100-experience-record`, `decision:ai-top-100-prompt-disclosures`, `decision:project-archive-list-layout`, `decision:global-prose-table-ui`, `decision:header-primary-navigation`, `decision:public-experience-reflection-disclosures`, `convention:user-owned-browser-validation`.
  - Summary: 동일 작업공간의 병행 작업을 보존하며 업스테이지 미디어, 홈 탐색·정렬, 전체 프로젝트 목록과 전역 표 UI를 수정했다. 헤더·홈 경험 날짜·AI TOP 100 프롬프트 토글까지 정리한 뒤, 경험은행의 36개 카드를 현재 공개된 여섯 활동 페이지와 대조했다. 자기소개서용 메타데이터와 중복 설명은 제외하고 다섯 프로젝트 페이지에 총 9개의 판단·실패·전환 사례를 기본 접힘 토글로 추가했다. 이후 사용자가 복원한 AI TOP 100 프롬프트 두 원본을 저장소 내부 `src/data`에 동일 복사하고 import를 전환해 CI가 준비 폴더에 의존하던 문제를 수정했다. 최근 변경은 사용자 지시에 따라 정적 검사만 수행하고 브라우저·시각 검증과 전체 빌드를 생략했다.

- `session:20260901-1856`
  - Started: 2026-09-01T18:56+09:00
  - Last activity: 2026-09-01T19:07+09:00
  - Focus: 본선 발표 질의응답을 날씨 빅데이터 콘테스트 프로젝트 페이지에 통합하고 Q/A 시각 구분을 보강.
  - Updated keys: `decision:weather-presentation-qa-appendix`, `handoff:current`.
  - Summary: 원문 질문 5개와 활용 한계를 페이지 끝에 옮기고 모든 질문·답변을 Q/A 블록으로 전환했다. 질문은 하늘색, 답변은 회청색으로 구분하고 모바일 규칙을 추가했으며 13개 블록 구조 검사 후 사용자가 실제 적용 상태를 확인했다.

- `session:20260901-1915`
  - Started: 2026-09-01T19:15+09:00
  - Last activity: 2026-09-01T19:15+09:00
  - Focus: AI TOP 100 CAMPUS 본선 진출 경험 페이지 작성과 홈 최근 업로드 보존.
  - Updated keys: `decision:ai-top-100-experience-record`, `decision:recent-content-by-publication`, `handoff:current`.
  - Summary: 근거 Markdown에서 역할, 계획·실행 분리, 도구 책임, 5단계 검증, 시간 제약과 한계를 선별해 경험 페이지를 작성했다. 지정 사진은 SHA-256 동일 사본으로 공개하고, 경험 `homeRecent` 계약을 추가해 빌드 홈의 최근 업로드가 날씨 콘테스트로 유지됨을 확인했다.

- `session:20260901-1924`
  - Started: 2026-09-01T19:24+09:00
  - Last activity: 2026-09-01T19:33+09:00
  - Focus: 카카오테크 부트캠프 MOLIP 프로젝트 페이지 작성과 홈 최근 업로드 보존.
  - Updated keys: `decision:molip-project-record`, `decision:recent-content-by-publication`, `handoff:current`.
  - Summary: 원고에서 직접 구현한 5단계 스케줄링, EMA 개인화, 주간 레포트, 벡터 검색, SSE 채팅과 관측성을 선별해 상세 프로젝트 페이지로 구성했다. 서비스 화면을 대표 이미지로 쓰고 구현 범위가 다른 MCP 자동 호출은 주장하지 않았으며, `homeRecent: false`, Astro 검사·빌드와 데스크톱 양 테마 및 모바일 가로 넘침 검증을 통과했다.

- `session:20260901-1935`
  - Started: 2026-09-01T19:35+09:00
  - Last activity: 2026-09-01T19:48+09:00
  - Focus: 성남시 공공데이터 공모전 프로젝트 페이지 작성, 공개 PDF 개인정보 제거와 비식별 대표 사진 적용.
  - Updated keys: `decision:seongnam-public-data-project-record`, `decision:recent-content-by-publication`, `handoff:current`.
  - Summary: 원고·발표·분석보고서에서 데이터 수집, EFA, K-means++, 시장 선별 규칙과 정책 범위를 교차 확인해 상세 페이지를 작성했다. 원본은 보존하고 공개 보고서의 앞 4페이지를 제거했으며 사용자가 모자이크한 시상식 사진을 대표 이미지로 적용했다. Astro 검사·빌드와 최근 업로드 고정을 확인했고 브라우저 시각 검증은 사용량 제한으로 수행하지 못했다.

- `session:20260901-2016`
  - Started: 2026-09-01T20:16+09:00
  - Last activity: 2026-09-01T20:22+09:00
  - Focus: AI TOP 100 CAMPUS 경험 페이지를 원문 프롬프트와 적용 예시 중심으로 전면 재작성.
  - Updated keys: `decision:ai-top-100-experience-record`, `handoff:current`.
  - Summary: 계획 수립과 문제 실행 프롬프트의 파일 계약, 입력별 전처리, 3분·5분·30초 중단 기준, 세션 전환과 수능 네 문항 적용 예시를 복원했다. 미검증 정확도·서비스 구현 주장은 제외하고 `humanizer` 기준으로 문장을 정리했으며 Astro 검사·빌드를 통과했다.

- `session:20260901-2027`
  - Started: 2026-09-01T20:27+09:00
  - Last activity: 2026-09-01T20:30+09:00
  - Focus: 자소서·포트폴리오 통합 강의 원고를 공개 학습 노트 페이지로 구성.
  - Updated keys: `decision:resume-portfolio-learning-note`, `handoff:current`.
  - Summary: 원본의 직무 분석, 경험 DB, 작성 프레임, AI 검증, 포트폴리오·면접 연결, 실행안과 체크리스트를 보존해 공개 노트를 만들었다. 사용자의 지시에 따라 로컬 자료 목록과 경로는 모두 제외했으며 Astro 검사·빌드와 HTTP 200을 확인했다.

## Session archive
