---
title: "2026년 제6회 K-인공지능 제조데이터 분석 경진대회"
description: "전력 관측과 시간 최대값 예측, 지속 상승·하락 경고를 재생하며 살펴보는 발표용 대시보드입니다."
publishedAt: 2026-10-06
period: "2026년"
featured: false
homeRecent: false
draft: false
demo: "https://max-ji64.github.io/projects/2026-k-ai-manufacturing-data-contest/dashboard/"
---

## 발표용 대시보드

2026년 제6회 K-인공지능 제조데이터 분석 경진대회 발표에 사용하는 대시보드다. 15분 단위 전력 관측과 시간 최대값 예측을 함께 보여주며, 지속 상승 경고가 발생했을 때 예측을 선택적으로 보완하는 과정을 확인할 수 있다.

<div class="action-row content-actions">
  <a class="button button-primary" href="/projects/2026-k-ai-manufacturing-data-contest/dashboard/" target="_blank" rel="noopener noreferrer">발표용 대시보드 열기 ↗</a>
</div>

<section class="weather-dashboard-viewer" aria-labelledby="manufacturing-dashboard-title">
  <div class="weather-dashboard-heading">
    <h3 id="manufacturing-dashboard-title">전력 흐름 대시보드</h3>
    <p>재생, 날짜 이동, 사례 선택과 전체 화면 기능을 사용할 수 있다.</p>
  </div>
  <div class="weather-embed-frame weather-dashboard-frame">
    <iframe src="/projects/2026-k-ai-manufacturing-data-contest/dashboard/" title="2026년 제6회 K-인공지능 제조데이터 분석 경진대회 발표용 전력 흐름 대시보드" loading="lazy" sandbox="allow-scripts allow-same-origin" allow="fullscreen" allowfullscreen></iframe>
  </div>
</section>

## 시연 방법

- <strong>재생 시작</strong>으로 전력 흐름을 재생하고, <strong>15분 이동</strong>으로 관측을 한 단계씩 확인한다.
- 날짜 입력, 하단 사례 버튼과 이동 막대로 원하는 시점을 선택한다.
- 재생 속도와 그래프 범위를 바꿔 전력 변화와 예측을 살펴본다.
- 발표할 때는 위의 <strong>발표용 대시보드 열기</strong>로 이동한 뒤 <strong>전체 화면</strong>을 누른다.

## 데이터와 예측 범위

대시보드는 HTML에 저장된 관측값과 예측 결과를 재생한다. 화면을 열 때 서버나 모델을 실행하지 않는다. 화면의 KPI는 기존 7~8월 평가 결과이며, 1~6월의 예측은 이후 학습한 모델을 과거에 적용한 시연이다. 지속 하락 경고는 실험적 개발 모델의 출력이다.

예측구간과 추가 시연 구간의 해석은 대시보드 하단 <strong>시연 방식과 예측 범위</strong>에서 확인할 수 있다.
