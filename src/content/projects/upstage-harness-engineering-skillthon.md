---
title: "2026 제1회 Upstage X BDAI Harness Engineering Skillthon"
description: "사용자의 분석 질문을 승인 가능한 계획으로 바꾸고, 검증된 근거를 보고서와 대시보드로 연결한 데이터 분석 Agent 프로젝트입니다."
publishedAt: 2026-07-28
category: "Upstage X BDAI 스킬톤"
period: "2026. 07. 28. - 2026. 07. 29."
role: "주제 정의, 데이터 준비, Skill 설계·구현, Timely 실행 및 검증"
stack: ["Python", "Pandas", "Timely", "Solar Open 2", "Plotly", "ReportLab"]
outcome: "4개의 분석 Skill과 사용자 승인 게이트를 구현하고, 검증된 근거에서 보고서·PDF·오프라인 대시보드를 생성했습니다."
keywords: ["AI Agent", "Harness Engineering", "Data Analysis", "Timely", "Evidence", "Python"]
thumbnail: "/projects/upstage-harness-engineering-skillthon/images/project-cover.png"
heroImage: "/projects/upstage-harness-engineering-skillthon/images/competition-poster.png"
heroImageAlt: "2026 제1회 Upstage X BDAI Harness Engineering Skillthon 모집 포스터"
featured: false
homeRecent: false
draft: false
---

## 프로젝트 한눈에 보기

데이터 분석 Agent가 차트를 많이 만드는 것만으로는 결과를 다시 사용하기 어렵다고 봤습니다. 실행할 때마다 분석 범위가 달라지거나, 질문과 결과의 연결이 끊기거나, 수치가 어떤 계산에서 나왔는지 확인하기 어렵다면 자동화의 의미가 작아지기 때문입니다.

이 프로젝트에서는 사용자가 제공한 표 데이터를 읽고 <strong>분석 계획을 먼저 제시한 뒤, 승인 전에는 계산을 시작하지 않는 Agent</strong>를 만들었습니다. 승인 뒤에는 데이터 준비, 탐색적 분석, 근거 검증, 산출물 제작을 네 개의 Skill이 차례로 수행합니다. 언어 모델은 질문과 변수의 의미를 해석하고, Python 프로그램은 수치 계산과 파일·단계 검증을 맡도록 역할을 나눴습니다.

지역 청년 정착 여건 데이터를 첫 적용 사례로 삼아 Timely에서 전체 흐름을 실행했습니다. 391행×35열 패널에서 인사이트 후보 23건을 만들고, 21건을 `validated`, 2건을 `qualified`로 분류했습니다. 같은 근거를 사용해 Markdown 보고서, 6쪽 PDF, 차트 7개와 단일 파일 오프라인 대시보드를 생성했습니다.

<figure style="width: min(100%, 650px); margin-inline: auto; text-align: center;">
  <img
    src="/projects/upstage-harness-engineering-skillthon/images/project-poster.png"
    alt="근거 기반 인사이트 발굴 Agent의 문제, 네 Skill, 분석 결과와 검증 상태를 정리한 포스터"
    width="3720"
    height="5262"
    loading="eager"
    style="display: block; width: 100%; height: auto; max-height: none; margin-inline: auto; object-fit: contain;"
  />
  <figcaption>프로젝트의 문제, 실행 구조, 결과와 검증 범위를 한 장에 정리한 포스터입니다.</figcaption>
</figure>

### 담당 역할

- 공개데이터 분석 주제와 핵심 질문 정의
- 국가데이터처 KOSIS, 한국부동산원, 행정안전부 자료 6종 수집 및 연간 패널 전처리
- 분석 계획, 데이터 준비, EDA, 산출물 제작의 4개 Skill 설계와 구현
- 사용자 승인 게이트, evidence 상태, 실행 ID·해시·manifest 추적 구조 설계
- Python 기반 결정론적 검사와 회귀·통합 테스트 작성
- Timely Agent 등록, 실제 종단간 실행, 산출물 다운로드와 QA
- 발표자료, 원페이지 포스터, 데모 영상과 질의응답 자료 제작

### 대회 정보

| 구분 | 내용 |
| --- | --- |
| 대회명 | 2026 제1회 Upstage X BDAI Harness Engineering Skillthon |
| 주최 | Upstage·BDAI |
| 프로젝트 수행 | 2026. 07. 28. - 2026. 07. 29. |
| 팀명 | DATA TADA |
| 주제 | 공개데이터 분석 워크플로우를 재현 가능한 Skill과 AI Agent로 구현 |
| 첫 적용 사례 | 지역별 청년 순이동과 고용·실업·주거 여건 분석 |

## 최종 산출물

최종 발표자료와 포스터뿐 아니라 Timely가 실제로 생성한 보고서, 대시보드와 전체 실행 영상도 함께 정리했습니다. 네 Skill은 하나의 패키지로 내려받아 구조를 확인할 수 있습니다.

- [4개 분석 Skill 패키지 내려받기](/projects/upstage-harness-engineering-skillthon/data-analysis-skills.zip)

<div class="weather-artifact-list">
  <details class="weather-artifact-viewer">
    <summary><span>최종 발표자료</span><small>PDF 20쪽</small></summary>
    <div class="weather-embed-frame weather-pdf-frame"><iframe src="/projects/upstage-harness-engineering-skillthon/presentation.pdf#view=FitH&amp;toolbar=1&amp;navpanes=0" title="근거 기반 인사이트 발굴 Agent 발표자료" loading="lazy"></iframe></div>
  </details>
  <details class="weather-artifact-viewer">
    <summary><span>원페이지 포스터</span><small>PDF 1쪽</small></summary>
    <div class="weather-embed-frame weather-pdf-frame"><iframe src="/projects/upstage-harness-engineering-skillthon/poster.pdf#view=FitH&amp;toolbar=1&amp;navpanes=0" title="근거 기반 인사이트 발굴 Agent 원페이지 포스터" loading="lazy"></iframe></div>
  </details>
  <details class="weather-artifact-viewer">
    <summary><span>Timely 생성 분석보고서</span><small>PDF 6쪽</small></summary>
    <div class="weather-embed-frame weather-pdf-frame"><iframe src="/projects/upstage-harness-engineering-skillthon/timely-report.pdf#view=FitH&amp;toolbar=1&amp;navpanes=0" title="Timely Agent가 생성한 지역 청년 정착 여건 분석보고서" loading="lazy"></iframe></div>
  </details>
</div>

### 실제 실행 영상

영상에는 네 Skill 활성화, 세 입력 파일 업로드, 계획 완료 뒤 승인 전 중단, 사용자 승인, 분석 실행과 최종 산출물 확인까지의 순서가 담겨 있습니다.

<details class="video-demo-disclosure" data-video-demo="upstage-timely-demo">
  <summary><span>데모 영상과 타임라인</span><small>5분 40초</small></summary>
  <div class="video-demo-content">
    <video id="upstage-timely-demo" class="video-demo-player" controls preload="metadata" poster="/projects/upstage-harness-engineering-skillthon/images/timely-execution.png">
      <source src="/projects/upstage-harness-engineering-skillthon/timely-demo.mp4" type="video/mp4" />
      브라우저가 동영상 재생을 지원하지 않습니다. <a href="/projects/upstage-harness-engineering-skillthon/timely-demo.mp4">데모 영상을 내려받아 확인할 수 있습니다.</a>
    </video>
    <nav class="video-chapters" data-video-chapters="upstage-timely-demo" aria-label="데모 영상 타임라인">
      <div class="video-chapters-heading">
        <strong>영상 타임라인</strong>
        <span>항목을 누르면 해당 시점부터 재생합니다.</span>
      </div>
      <div class="video-chapter-list">
        <button class="video-chapter-button" type="button" data-video-time="0">
          <span class="video-chapter-time">00:00-00:50</span>
          <span>네 Skill 확인, 세 파일 업로드, 프롬프트 입력</span>
        </button>
        <button class="video-chapter-button" type="button" data-video-time="89">
          <span class="video-chapter-time">01:29</span>
          <span>계획 완료, 자동 검사 통과, 승인 전 중단</span>
        </button>
        <button class="video-chapter-button" type="button" data-video-time="143">
          <span class="video-chapter-time">02:23</span>
          <span>질문 q1 선택, Blueprint 승인</span>
        </button>
        <button class="video-chapter-button" type="button" data-video-time="211">
          <span class="video-chapter-time">03:31-05:40</span>
          <span>준비, EDA, 검증 완료, 산출물 확인</span>
        </button>
      </div>
    </nav>
  </div>
</details>

<script src="/scripts/video-chapters.js" defer></script>

<details class="video-demo-disclosure upstage-dashboard-disclosure">
  <summary><h3 id="오프라인-대시보드">오프라인 대시보드</h3><small>단일 HTML</small></summary>
  <div class="upstage-dashboard-content">
    <p>대시보드는 외부 서버나 CDN 없이 실행할 수 있도록 Plotly와 데이터를 단일 HTML 파일 안에 포함했습니다. 아래 화면에서 직접 확인하거나 <a href="/projects/upstage-harness-engineering-skillthon/timely-dashboard.html" target="_blank" rel="noopener noreferrer">새 창에서 열 수 있습니다.</a></p>
    <iframe src="/projects/upstage-harness-engineering-skillthon/timely-dashboard.html" title="지역 청년 정착 여건 오프라인 대시보드" loading="lazy" sandbox="allow-scripts allow-same-origin"></iframe>
  </div>
</details>

## 해결하려던 문제

기존 분석 자동화에서는 다음 문제가 반복될 수 있었습니다.

- 같은 데이터와 질문을 넣어도 분석 범위와 방법이 달라집니다.
- 사용자가 무엇을 승인했는지 확인하기 전에 계산과 파일 생성이 시작됩니다.
- 최종 문장과 차트가 어떤 계산 결과에서 나왔는지 추적하기 어렵습니다.
- 한 단계의 실패가 전체 결과를 무효로 만들거나, 반대로 실패가 숨겨집니다.
- 보고서와 대시보드를 따로 만들면서 수치가 달라질 수 있습니다.

그래서 목표를 분석을 대신하는 챗봇이 아니라 <strong>사용자의 질문을 검증 가능한 근거와 산출물로 바꾸는 실행 과정</strong>으로 정했습니다.

### 핵심 질문

> 공개 데이터를 입력하면 분석 계획부터 사용자 승인, 근거 검증과 최종 산출물 제작까지 반복 가능하게 수행할 수 있는가?

기능 검증에는 다음 분석 질문을 사용했습니다.

> 어떤 지역이 장기간 청년 순유출을 겪고 있으며, 해당 지역의 청년 고용·실업·주거 여건은 다른 지역과 어떤 관측 패턴을 보이는가?

이 분석은 지역 단위의 관측 패턴을 설명합니다. 개인의 이동 원인, 정책 효과나 미래 상황을 예측하지 않습니다.

## 네 Skill로 나눈 실행 구조

하나의 긴 프롬프트에 계획, 분석, 검증과 보고를 모두 맡기지 않았습니다. 각 단계의 입력과 출력이 분명하도록 네 Skill로 나눴습니다.

<figure class="upstage-poster-figure">
  <img src="/projects/upstage-harness-engineering-skillthon/images/agent-workflow.png" alt="분석 계획, 사용자 승인, 데이터 준비, 발견 검증, 산출물 제작으로 이어지는 Agent 흐름" width="2880" height="1620" loading="lazy" />
  <figcaption>사용자 승인 전에는 데이터 준비와 분석을 실행하지 않습니다.</figcaption>
</figure>

| 단계 | Skill | 역할 | 핵심 출력 |
| --- | --- | --- | --- |
| 1 | `plan-multi-source-analysis` | 질문·변수·분석 방법과 검증 기준 설계 | 사용자가 검토할 Blueprint |
| 2 | `prepare-multi-source-data` | 열·형식·중복·결측을 검사하고 승인 범위만 준비 | 분석 데이터·품질 기록 |
| 3 | `run-exploratory-analysis` | 시간 변화·지역 차이·변수 관계를 계산하고 안정성 검사 | candidate·evidence·validation |
| 4 | `render-analysis-deliverables` | 검증된 근거만 선별해 사람이 읽을 산출물 생성 | Markdown·PDF·오프라인 HTML |

### Solar와 Python의 역할 분리

| Solar Open 2 | 결정론적 Python 프로그램 |
| --- | --- |
| 사용자의 질문과 변수 의미 파악 | 행·열·중복·결측과 파일 지문 검사 |
| 분석 계획 설명과 승인 대화 | 평균·비율·증감과 변수 조합 계산 |
| 검증된 결과의 의미와 한계 설명 | coverage·denominator·안정성 검사 |
| 필요한 후속 질문 제안 | 단계별 manifest와 실행 ID 검증 |

언어 모델은 질문과 변수의 의미를 해석하고 결과를 설명합니다. 하나의 답이 있어야 하는 계산, 매핑과 검증은 Python이 맡습니다. 모델 응답이 조금 달라져도 숫자와 실행 경계를 같은 규칙으로 유지하기 위한 선택이었습니다.

### 승인 게이트와 evidence 생명주기

Planner가 Blueprint를 만들고 자동 검사를 통과해도 바로 분석하지 않습니다. 사용자가 사용할 데이터, 핵심 질문, 변수, 비교 범위와 주장 한계를 확인하고 승인한 뒤에만 다음 단계로 넘어갑니다.

분석 결과는 바로 보고서 문장이 되지 않습니다. 먼저 후보(`candidate`)를 만들고 coverage와 안정성 검사를 거쳐 다음 상태를 부여합니다.

| 상태 | 의미 | 보고서 사용 원칙 |
| --- | --- | --- |
| `validated` | 정해진 검증 기준을 통과 | 핵심 근거로 사용 가능 |
| `qualified` | 사용할 수 있지만 주의나 한계가 있음 | 한계를 함께 표시 |
| `rejected` | 기준 미달 또는 해석 불가 | 최종 주장에 사용하지 않음 |

## 분석 데이터 설계

Agent가 서로 다른 단위의 원자료를 실행 중에 임의로 결합하지 않도록 공식 공개데이터 6종을 먼저 <strong>17개 시도×2003~2025년</strong>의 연간 패널로 정리했습니다.

| 원본 데이터 | 제공기관·식별자 |
| --- | --- |
| 청년순이동률 | 국가데이터처 KOSIS `DT_1YL20642` |
| 청년고용률 | 국가데이터처 KOSIS `INH_1DA7015S` |
| 청년실업률 | 국가데이터처 KOSIS `DT_1YL20531E` |
| 지역별 아파트 전세가격지수 | 한국부동산원 공공데이터 |
| 성·연령별 주민등록 인구수 | 행정안전부 `admmSexdAgePpltn` API |
| 성·연령별 주민등록 1인세대수 | 행정안전부 `admmSexdAgeOneHh` API |

전국을 제외한 17개 시도×2003~2025년 기준 격자를 만들고 지역명을 최신 명칭과 고정 `region_id`로 맞췄습니다. 분기 고용·실업률과 월별 전세가격지수, 주민등록인구, 1인세대수는 연간 단순평균으로 집계했습니다. 결측은 0으로 대체하지 않았습니다.

### 세 입력 파일의 역할

| 입력 | 역할 | 설계 이유 |
| --- | --- | --- |
| 분석용 CSV | Agent가 실제로 계산하는 391행×35열 수치 데이터 | 실행 중 추가 결합 없이 분석 단위를 고정 |
| 변수표 Markdown | 변수의 뜻·단위·연령 기준·공식 출처 | 비슷한 변수명과 지수의 오해 방지 |
| 품질보고서 JSON | 행 수·기간·중복·결측·원본 해시 | 분석 전 품질과 출처를 기계적으로 확인 |

`region_id + year`를 기본키로 사용해 중복 0건을 확인했습니다. 핵심 3자료가 모두 존재하는 행은 377건, 핵심 3자료가 모두 있는 완전연도 행은 361건입니다.

청년순이동률은 19~39세, 고용·실업률은 15~29세처럼 원자료의 연령 정의가 다릅니다. 따라서 같은 모집단으로 해석하지 않았습니다. 주민등록 자료는 10세 단위만 제공돼 20~39세로 재현했습니다. 전세가격지수도 실제 전셋값이나 증감률이 아니라 <strong>2026년 1월=100</strong>인 상대 지수라고 문서와 검증 규칙에 고정했습니다.

## 실제 Timely 실행과 검증

실제 Timely 세션에서는 다음 순서를 확인했습니다.

1. 네 Skill을 등록하고 활성화했습니다.
2. CSV, 변수표와 품질보고서를 업로드했습니다.
3. Planner만 실행해 Blueprint와 validator 결과를 만들었습니다.
4. 사용자 승인 전 멈춘 상태를 확인했습니다.
5. 질문 `q1`과 다섯 인사이트 범위를 승인했습니다.
6. Preparation → EDA·검증 → Rendering을 실행했습니다.
7. 보고서, PDF, 오프라인 대시보드와 실행 기록을 내려받아 검수했습니다.

<figure class="upstage-poster-figure">
  <img src="/projects/upstage-harness-engineering-skillthon/images/timely-execution.png" alt="Timely에 등록된 네 Skill과 승인 전 중단 및 승인 후 실행 시점" width="2880" height="1620" loading="lazy" />
  <figcaption>계획이 끝난 뒤 사용자 승인 전 멈추고, 승인 후 다음 Skill을 실행하는 흐름입니다.</figcaption>
</figure>

<figure class="upstage-poster-figure">
  <img src="/projects/upstage-harness-engineering-skillthon/images/timely-deliverables.png" alt="Timely가 생성한 PDF 보고서와 오프라인 HTML 대시보드" width="2880" height="1620" loading="lazy" />
  <figcaption>같은 evidence에서 생성한 PDF 보고서와 단일 파일 오프라인 대시보드입니다.</figcaption>
</figure>

### 산출물 QA

| 검증 항목 | 결과 |
| --- | ---: |
| 전체 다운로드 파일 | 54개 |
| 정상 파싱한 JSON | 23개 |
| 준비 데이터 | 391행×35열, 키 중복 0 |
| candidate·evidence·validation | 각각 23건, 일대일 연결 |
| evidence 상태 | validated 21, qualified 2, rejected 0 |
| Top evidence | 8건 |
| 분석 차트 | 7개 |
| 실행→준비→EDA→산출물 해시 연결 | 모두 일치 |
| 로컬 회귀·통합 테스트 | 22/22 통과 |

## 분석 결과와 해석 범위

### Timely 실제 실행에서 확인한 결과

Timely가 생성한 evidence에서는 청년순이동률과 세 비교 지표 사이에 강한 단일 관계가 나타나지 않았습니다.

| 비교 지표 | Pearson | Spearman | 해석 |
| --- | ---: | ---: | --- |
| 청년고용률 | +0.20 | +0.40 | 세 지표 중 가장 크지만 강한 관계는 아님 |
| 청년실업률 | -0.15 | -0.16 | 약한 음의 관측 연관 |
| 전세가격지수 | -0.08 | -0.15 | 매우 약한 관측 연관 |

<figure class="upstage-poster-figure">
  <img src="/projects/upstage-harness-engineering-skillthon/images/timely-association-employment.png" alt="청년순이동률과 청년고용률의 관측 연관을 보여주는 Timely 생성 차트" width="1166" height="580" loading="lazy" />
  <figcaption>청년고용률과 순이동률의 관측 연관입니다. 인과관계를 뜻하지 않습니다.</figcaption>
</figure>

세 관계가 모두 약하다는 결과를 그대로 기록했습니다. coverage와 계산 기준, 한계를 함께 확인했기 때문에 한 지표만으로 청년 순유출을 설명하기 어렵다는 판단도 다음 분석 범위를 정하는 근거로 사용할 수 있었습니다.

### 동일 Skill의 로컬 기준 실행

Timely 실행 전에는 동일한 최종 Skill과 입력을 로컬 `run-004`에서 검증했습니다. 이 실행에서는 2003~2025년 관측기간 내내 청년순이동률이 0보다 낮았던 지역 6곳을 찾고, 최근 3년의 방향과 나머지 지역군과의 차이, 연령 정의 민감도를 계산했습니다.

<figure class="upstage-poster-figure">
  <img src="/projects/upstage-harness-engineering-skillthon/images/local-reference-persistent-outflow.png" alt="지속 순유출 지역 6곳과 최근 3년 변화 방향" width="2562" height="1358" loading="lazy" />
  <figcaption>동일 최종 Skill의 로컬 기준 실행 결과입니다. Timely가 생성한 evidence와 구분해 기록했습니다.</figcaption>
</figure>

| 로컬 기준 실행 결과 | 값 |
| --- | ---: |
| 전 기간 지속 순유출 지역 | 부산·대구·강원·경북·전북·전남, 6곳 |
| 6개 지역과 나머지 지역의 청년고용률 중앙값 차이 | -2.49%p |
| 청년실업률 중앙값 차이 | +0.43%p |
| 전세가격지수 중앙값 차이 | +6.49 |
| 19~39세와 19~34세 지역 순위 유사도 | 97.5% |
| 순유입·순유출 분류 일치율 | 92.9% |

## 기술적 성공과 질문 충족도의 분리

전체 파이프라인은 계획, 승인, 준비, 분석, 검증, PDF·HTML 생성까지 연결됐습니다. 그러나 Timely 최종 보고서에는 사용자가 승인한 다섯 범위 중 지속 순유출 지역 선별, 지역별 최근 3년과 이전 3년 비교, 선정 지역과 나머지 지역 비교가 빠졌습니다. 연령 정의 민감도도 일부 검사만 수행됐습니다.

<figure class="upstage-poster-figure">
  <img src="/projects/upstage-harness-engineering-skillthon/images/scope-review.png" alt="기술적 실행 PASS와 승인한 인사이트 범위 PARTIAL을 구분한 검토 결과" width="2880" height="1620" loading="lazy" />
  <figcaption>종단간 기술 실행은 PASS, 승인한 질문의 답변 완성도는 PARTIAL로 구분했습니다.</figcaption>
</figure>

| 판정 | 확인한 내용 |
| --- | --- |
| 기술적 실행 `PASS` | 승인 게이트, 4단계 실행, 23건 근거 검증, PDF·대시보드 생성 |
| 질문 답변 완성도 `PARTIAL` | 승인한 세부 분석 중 3개가 범용 분석으로 대체되거나 누락 |
| 추적성 한계 | 실패 뒤 성공한 재실행 로그와 상위 상태 갱신이 완전하지 않음 |
| 다음 개선 | 승인 범위와 실제 evidence를 자동 대조하고 빠진 모듈만 재실행 |

이 검수에서 "프로그램이 끝까지 실행됐다"와 "사용자의 질문에 모두 답했다"는 서로 다른 검증 대상이라는 점을 확인했습니다. Blueprint의 승인 항목마다 대응 evidence를 요구하고, 누락 시 렌더링 전에 차단하거나 해당 분석만 다시 실행하는 보완이 필요합니다.

## 결과와 배운 점

- 분석 Agent를 하나의 대화 프롬프트가 아니라 명확한 입출력을 가진 네 Skill의 실행 과정으로 구현했습니다.
- 사용자 승인 전 계산을 멈추는 게이트를 두어 분석 범위와 책임 경계를 분명히 했습니다.
- 언어 모델의 해석과 Python의 결정론적 계산을 분리해 숫자와 검증 기준의 재현성을 높였습니다.
- 후보→검증→상태 부여→선별 과정을 두어 약한 결과와 제외할 결과도 그대로 기록했습니다.
- Markdown, PDF와 HTML이 같은 evidence를 사용하도록 구성하고 ID, 해시와 manifest로 단계 간 연결을 검사했습니다.
- 실제 Timely 실행과 로컬 기준 실행을 구분해 플랫폼이 만들지 않은 결과를 성공 사례로 과장하지 않았습니다.
- 기술적 완주와 질문 충족도를 따로 평가해 다음 버전에서 보완할 지점을 찾았습니다.

지역 청년 정착은 Agent를 검증하기 위한 첫 적용 사례입니다. 같은 구조의 지역×연도 데이터라면 인구, 고용, 주거와 복지처럼 다른 주제에도 네 Skill과 승인·검증 구조를 다시 사용할 수 있습니다.

## 판단과 시행착오

<details class="decision-log-disclosure">
  <summary><span>의사결정 기록 보기</span><small>1개 사례</small></summary>
  <div class="decision-log-list">
    <article class="decision-log-item" data-step="01">
      <p class="decision-log-eyebrow">제한 시간 안의 범위 조정</p>
      <h3>단일 Skill을 네 단계로 확장한 뒤, 마감 직전에는 다시 좁혔다</h3>
      <p><strong>상황</strong> 표 데이터를 살펴보는 단일 EDA Skill로 시작했지만 안정적인 실행을 위해 계획·데이터 준비·EDA·산출물 제작의 네 Skill로 확장했다. 이후 마감 전날 Timely의 High 추론 실행이 토큰 한도를 초과해 중단됐다.</p>
      <p><strong>판단과 행동</strong> 같은 방식의 재실행보다 완주 가능성을 우선했다. 계획 요청과 승인 후 실행을 분리하고 추론 강도를 Medium으로 낮췄으며, 긴 결과는 artifact로 저장하고 반복 계산은 Python에 맡겼다. Document AI와 지도 분석, 누락된 세부 인사이트를 채우기 위한 위험한 재실행도 현재 범위에서 제외했다.</p>
      <p><strong>결과와 한계</strong> 약 28시간 안에 네 Skill, 실제 실행 영상, PDF·대시보드, 발표자료와 포스터를 만들고 마감 2시간 20분 전에 제출 패키지를 완성했다. 종단간 기술 실행은 완료했지만 승인한 세부 분석 일부가 빠져 질문 충족도는 부분 달성으로 구분했다.</p>
    </article>
  </div>
</details>

## 관련 자료

- [최종 발표자료 PDF](/projects/upstage-harness-engineering-skillthon/presentation.pdf)
- [원페이지 포스터 PDF](/projects/upstage-harness-engineering-skillthon/poster.pdf)
- [4개 분석 Skill 패키지](/projects/upstage-harness-engineering-skillthon/data-analysis-skills.zip)
- [Timely 생성 보고서 PDF](/projects/upstage-harness-engineering-skillthon/timely-report.pdf)
- [Timely 실제 실행 영상](/projects/upstage-harness-engineering-skillthon/timely-demo.mp4)
- [오프라인 대시보드](/projects/upstage-harness-engineering-skillthon/timely-dashboard.html)
