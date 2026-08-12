# Max.JI의 빅데이터 프로젝트 아카이브 - Astro 재구축 계획서

## 1. 확정된 방향

- 사이트 이름: **Max.JI의 빅데이터 프로젝트 아카이브**
- 기술: **Astro**
- 콘텐츠: Markdown 기반의 **주제별 학습 노트**와 **경험·프로젝트 포트폴리오**
- 디자인: 외부 테마 없이 직접 구현한다.
- 배포: GitHub Pages에 Astro의 정적 빌드 결과물을 배포한다.

Astro에서는 Jekyll의 `_config.yml`, `_layouts/`, `_posts/`를 사용하지 않는다. Astro 프로젝트를 만든 뒤, 기존 Jekyll 전용 파일은 새 구조가 동작하는 것을 확인한 후 정리한다.

## 2. 먼저 만들어야 할 우선순위

### 1순위 - 콘텐츠의 두 축과 정보 구조 확정

이 사이트는 어느 한쪽의 부속 기능이 아니라, 아래 두 축을 동등하게 보여준다.

| 축 | 목적 | 방문자가 얻는 것 |
| --- | --- | --- |
| 학습 노트 | ADP·Python·SQL 개념과 학습 과정을 축적 | 필요한 개념을 주제별로 빠르게 탐색 |
| 경험·프로젝트 | 문제 정의부터 결과와 회고까지 기록 | 실제로 수행한 분석과 역량을 확인 |

초기 전역 메뉴는 `Home`, `Notes`, `Projects`, `About`으로 둔다. 홈에서는 최신 학습 노트와 대표 프로젝트를 같은 비중으로 노출한다.

### 2순위 - 콘텐츠 작성 규칙과 폴더 구조 확정

Astro Content Collections로 학습 노트와 프로젝트를 분리한다. 각 Markdown 파일은 데이터와 내용이 함께 있는 독립 문서가 된다.

```text
src/content/
├── notes/
│   ├── adp/
│   │   ├── regression/
│   │   ├── machine-learning/
│   │   └── statistics/
│   ├── python/
│   │   ├── pandas/
│   │   └── data-preprocessing/
│   └── sql/
└── projects/
    ├── wildfire-prediction/
    └── data-analysis/
```

학습 노트는 `title`, `description`, `publishedAt`, `section`, `topic`, `tags`, `draft`를 공통 정보로 사용한다. 프로젝트는 여기에 `period`, `role`, `stack`, `outcome`, `thumbnail`, `links`를 추가한다. Astro의 콘텐츠 스키마에서 이 항목을 검사해 누락된 메타데이터를 빌드 전에 발견한다.

### 3순위 - 화면별 역할 정의

| 화면 | 역할 | 핵심 내용 |
| --- | --- | --- |
| Home | 사이트의 첫인상과 두 콘텐츠 축 소개 | 한 줄 소개, 주제 탐색, 대표 프로젝트, 최신 기록 |
| Notes | 학습 지식 아카이브 | ADP·Python·SQL의 대분류, 소주제, 최신 노트 |
| Note detail | 하나의 학습 문서 읽기 | Markdown 본문, 태그, 이전·다음 글 또는 관련 노트 |
| Projects | 포트폴리오 목록 | 프로젝트 카드, 주제·기술·기간 요약 |
| Project detail | 경험의 근거와 결과 | 문제, 역할, 데이터, 분석 과정, 결과, 회고, 링크 |
| About | 사람과 사이트의 맥락 | 소개, 관심 분야, 연락처·GitHub 링크 |

글 탐색 방식은 디자인 시안을 보기 전에는 고정하지 않는다. 단, 첫 버전에는 최소한 대분류 탐색과 최신순 목록을 제공한다. 검색·복잡한 필터·태그 클라우드는 실제 글 수가 쌓인 뒤 필요성을 판단한다.

### 4순위 - 실제 웹 화면으로 시각 디자인 비교 및 선택

선택 전에 `design-taste-frontend` 기준으로 서로 다른 세 개의 **반응형 웹 시안**을 만든다. PowerPoint나 슬라이드 자료는 사용하지 않으며, 각 시안은 Astro에서 실제로 구현 가능한 Home 화면으로 비교한다.

시안 제작 전에 다음 디자인 판단을 문장으로 명시한다.

- Design Read: 학습 아카이브와 데이터 프로젝트 포트폴리오를 함께 탐색하는 방문자를 위한 개인 아카이브 사이트로 해석한다.
- 디자인 다이얼: `DESIGN_VARIANCE`, `MOTION_INTENSITY`, `VISUAL_DENSITY`를 각 시안의 성격에 맞게 정한다.
- 공통 원칙: AI 보라색 그라데이션, 동일한 카드 세 개, 가짜 대시보드, 장식용 문구를 사용하지 않는다.

1. **편집형 아카이브**: 긴 글 읽기와 학습 노트의 가독성을 강조
2. **기술 기록실**: 주제 체계와 데이터·코드 분위기를 강조
3. **포트폴리오 저널**: 프로젝트 성과와 개인 경험의 서사를 강조

시안 비교 때는 분위기뿐 아니라 다음 기준을 확인한다.

- 학습 노트와 프로젝트가 한쪽에 묻히지 않는가
- 한국어 제목과 긴 본문이 편하게 읽히는가
- 모바일 화면에서도 정보 위계가 유지되는가
- 카드·태그·목록이 실제 콘텐츠가 늘어나도 과밀해지지 않는가

선택한 시안의 색상, 타이포그래피, 여백, 카드 규칙을 Astro의 공통 CSS와 컴포넌트로 확정한다. 모든 구현 파일은 `full-output-enforcement` 기준으로 완전하게 작성한다. 동작하지 않는 뼈대, 생략 기호, 자리 표시용 코드로 마무리하지 않는다.

### 5순위 - Astro 뼈대와 배포 기반 만들기

```text
.
├── src/
│   ├── components/              # Header, Footer, NoteCard, ProjectCard 등
│   ├── content/                 # Markdown 콘텐츠 컬렉션
│   ├── layouts/                 # BaseLayout, NoteLayout, ProjectLayout
│   ├── pages/                   # 파일 기반 페이지와 동적 상세 경로
│   └── styles/global.css        # 직접 작성하는 공통 디자인 토큰과 스타일
├── public/                      # 정적 이미지·파비콘
├── astro.config.mjs             # Astro 및 GitHub Pages 배포 설정
├── package.json
└── .github/workflows/deploy.yml # GitHub Pages 빌드·배포 자동화
```

Astro는 기본적으로 정적 사이트를 생성한다. 콘텐츠 컬렉션에서 Markdown을 읽어 목록과 상세 경로를 만들고, GitHub Actions가 빌드된 `dist/` 결과를 GitHub Pages에 배포한다.

## 3. 구현 순서

1. Astro 프로젝트를 초기화하고 GitHub Pages용 배포 워크플로를 구성한다.
2. 콘텐츠 컬렉션과 학습 노트·프로젝트용 front matter 스키마를 만든다.
3. Notes, Projects, 상세 페이지의 빈 구조를 먼저 구현한다.
4. `design-taste-frontend` 기준의 세 가지 반응형 웹 시안을 만들고 하나를 선택한다.
5. 선택된 디자인 시스템으로 Home과 공통 레이아웃을 구현한다.
6. 노트 목록·상세와 프로젝트 목록·상세를 연결한다.
7. 예시 학습 노트와 예시 프로젝트를 각각 1개 이상 넣어 실제 콘텐츠 흐름을 검증한다.
8. 모바일·데스크톱에서 레이아웃, 링크, 메타데이터, GitHub Pages 배포를 검증한다.
9. 새 글과 프로젝트를 추가하는 방법을 README에 기록한다.

## 4. 완료 기준

- “Max.JI의 빅데이터 프로젝트 아카이브”라는 정체성이 메인 화면에 명확히 드러난다.
- 학습 노트와 프로젝트가 각각 독립된 목록·상세 경로를 가지며, 홈에서 균형 있게 소개된다.
- 새 Markdown 문서를 정해진 폴더에 추가하면 빌드에서 자동 검증되고 사이트에 반영된다.
- 외부 Jekyll 테마나 Jekyll 파일에 의존하지 않는다.
- 선택한 디자인 시안의 원칙이 데스크톱과 모바일 화면에 일관되게 적용된다.
