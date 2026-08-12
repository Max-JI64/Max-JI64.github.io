# Max.JI의 빅데이터 프로젝트 아카이브

콘텐츠 작성과 검색 노출 설정은 [CONTENT_AUTHORING_GUIDE.md](CONTENT_AUTHORING_GUIDE.md)를 참고합니다.

Astro와 Markdown 콘텐츠 컬렉션으로 만드는 개인 학습 노트 및 데이터 프로젝트 포트폴리오입니다.

## 로컬 실행

```powershell
npm install
npm run dev
```

브라우저에서 표시된 로컬 주소를 엽니다. 배포용 정적 파일은 아래 명령으로 만듭니다.

```powershell
npm run build
```

## 학습 노트 추가

`src/content/notes/` 아래의 알맞은 주제 폴더에 Markdown 파일을 추가합니다.

```text
src/content/notes/
├── adp/
│   ├── regression/
│   ├── machine-learning/
│   └── statistics/
├── python/
│   ├── pandas/
│   └── data-preprocessing/
└── sql/
```

파일 예시:

```md
---
title: "선형 회귀분석"
description: "선형 회귀의 핵심 가정과 해석 방법"
publishedAt: 2026-08-12
section: "ADP"
cover: "/images/notes/linear-regression.jpg"
draft: false
---

## 핵심 개념

본문을 Markdown으로 작성합니다.
```

`section`은 `ADP`, `Python`, `SQL` 중 하나여야 합니다. `draft: true`인 글은 목록과 정적 배포에서 제외됩니다.

## 프로젝트 추가

`src/content/projects/` 아래에 프로젝트별 폴더와 Markdown 파일을 추가합니다.

```md
---
title: "프로젝트 제목"
description: "프로젝트를 한 문장으로 설명합니다."
publishedAt: 2026-08-12
category: "데이터 분석"
period: "2026년 8월"
role: "분석과 모델링"
stack: ["Python", "Pandas"]
outcome: "핵심 결과"
thumbnail: "/images/projects/project-name.jpg"
featured: false
draft: false
repository: "https://github.com/Max-JI64"
---

## 문제 정의

프로젝트의 문제를 작성합니다.
```

`featured: true`로 설정한 가장 최근 프로젝트가 홈의 대표 프로젝트로 표시됩니다.

## 경험 및 자격증 추가

활동, 인턴, 교육, 협업 경험과 자격증은 `src/content/experiences/` 아래에 Markdown 파일로 추가합니다. 홈의 **경험 & 자격증** 영역과 `/experiences/` 목록에 자동으로 표시됩니다.

```md
---
title: "경험 제목"
description: "어떤 맥락에서 어떤 역할을 맡았는지 한 문장으로 작성합니다."
organization: "기관 또는 활동명"
kind: "교육"
startedAt: 2026-08-01
endedAt: 2026-08-31
roles: ["데이터 분석", "협업"]
thumbnail: "/images/experiences/experience-name.jpg"
draft: false
---

## 맡은 역할

경험에서 한 일과 배운 점을 Markdown으로 작성합니다.
```

`endedAt`을 생략하면 현재 진행 중인 경험으로 표시됩니다.

## 썸네일과 대표 이미지

이미지는 `public/images/` 아래에 저장하고, Markdown front matter에는 `/images/`부터 시작하는 경로를 적습니다.

- 노트의 `cover`: 홈의 최근 노트와 노트 상세 상단에 사용합니다.
- 프로젝트의 `thumbnail`: 홈과 프로젝트 목록 및 상세 상단에 사용합니다.
- 경험의 `thumbnail`: 홈과 경험 목록 및 상세 상단에 사용합니다.

예를 들어 `public/images/projects/wildfire.jpg` 파일은 `thumbnail: "/images/projects/wildfire.jpg"`로 연결합니다. 이미지가 없을 때도 레이아웃은 유지되며, 해당 콘텐츠의 분류명이 표시됩니다.

## 배포

`main` 브랜치에 push하면 `.github/workflows/deploy.yml`이 Astro 정적 사이트를 빌드해 GitHub Pages에 배포합니다.

1. [GitHub Pages 설정](https://github.com/Max-JI64/Max-JI64.github.io/settings/pages)을 엽니다. 상단에 `Settings` 탭이 보이지 않으면 메뉴 드롭다운에서 `Settings`를 선택합니다.
2. 왼쪽 사이드바의 **Code and automation > Pages**를 선택합니다.
3. **Build and deployment > Source**를 **GitHub Actions**로 변경합니다.
4. 다음 push 뒤 [Actions](https://github.com/Max-JI64/Max-JI64.github.io/actions)의 `Deploy Astro site to GitHub Pages` 실행이 초록색 완료인지 확인합니다.

`Jekyll` 로그가 보이면 아직 브랜치 기반 배포가 선택된 것입니다. **GitHub Actions**로 바꾼 뒤 다시 push하거나 Actions 화면에서 `Run workflow`를 실행합니다.
