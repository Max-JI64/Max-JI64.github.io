---
title: "MOLIP - AI 데일리 플래너"
description: "LLM은 작업을 해석하고 후보를 만들며, 결정론적 알고리즘은 시간 수용량과 작업 순서를 검증하는 AI 데일리 플래너입니다."
publishedAt: 2026-09-01
category: "AI 서비스"
period: "2025. 12. 22. - 2026. 03. 26."
role: "팀 프로젝트 · AI 서비스 엔지니어링"
stack: ["Python 3.11", "FastAPI", "Gemini", "PostgreSQL", "Supabase", "pgvector", "Logfire", "Langfuse", "FastMCP"]
outcome: "5단계 일정 생성 파이프라인과 EMA 개인화, 주간 레포트, 벡터 검색, SSE 채팅 및 모델 장애 대응을 구현했습니다."
keywords: ["MOLIP", "카카오테크 부트캠프", "AI 플래너", "Gemini", "FastAPI", "개인화", "pgvector", "LLM 관측성"]
thumbnail: "/projects/molip-ai-daily-planner/molip-cover.jpg"
heroImage: "/projects/molip-ai-daily-planner/molip-cover.jpg"
heroImageAlt: "MOLIP 로고와 모바일 데일리 플래너 서비스 화면"
featured: false
homeRecent: false
draft: false
---

## 프로젝트 한눈에 보기

MOLIP은 할 일을 입력하면 가용 시간과 선호 집중 시간대를 고려해 하루 일정을 만드는 AI 데일리 플래너다. 사용자가 AI 초안을 수정하면 그 행동을 다음 일정 추천의 개인화 신호로 반영한다.

이 프로젝트에서 맡은 역할은 <strong>AI 서비스 엔지니어링</strong>이다. 작업 분석, 일정 후보 생성, 최종 시간 배정과 개인화를 하나의 FastAPI 파이프라인으로 연결했다. 주간 레포트, 과거 일정 벡터 검색, 스트리밍 채팅과 모델 호출 관측 기능도 함께 구현했다.

| 구분 | 내용 |
| --- | --- |
| 교육 과정 | 카카오테크 부트캠프 판교 3기 AI 실무 개발 과정 |
| 프로젝트 기간 | 2025. 12. 22. - 2026. 03. 26. |
| 참여 형태 | 풀스택, AI, 클라우드 직군 협업 |
| 담당 | AI 서비스 엔지니어링 |
| 핵심 구현 | 5단계 스케줄링, EMA 개인화, 주간 레포트, 벡터 검색, SSE 채팅, 관측성과 오류 처리 |

## 해결하려던 문제

자연어로 적은 할 일을 일정으로 바꾸려면 서로 다른 두 종류의 판단이 필요하다. 작업의 의미와 인지 부하를 읽는 일에는 LLM이 유리하지만, 가용 시간과 작업 순서, 분할 가능 여부를 지키며 정확한 시각을 계산하는 일은 코드가 더 안정적이다.

개인화에도 제약이 있었다. 짧은 프로젝트 기간 안에 강화학습이나 별도 모델 재학습을 운영하기보다, 사용자가 AI 초안을 어떻게 고쳤는지 직접 관찰할 수 있는 구조가 필요했다.

그래서 LLM의 역할을 작업 분석과 후보 생성으로 제한했다. 최종 시간 배정은 결정론적 알고리즘이 맡고, 사용자 수정 행동은 규칙 기반 신호와 EMA 가중치로 바꿨다.

## 담당 역할

- FastAPI 기반 5단계 스케줄링 파이프라인 설계 및 구현
- LLM 출력 형식 검증, 지수 백오프와 규칙 기반 대체 경로 구현
- 작업 의존성, 시간 수용량, 피로도와 조건부 분할 규칙 구현
- `AI_DRAFT`와 `USER_FINAL` 비교 기반 EMA 개인화 구현
- 과거 4주 기록을 이용한 주간 레포트 배치 API와 모델 평가 설계
- FastMCP 조회 및 벡터 검색 도구, 임베딩 적재 배치 구현
- Gemini 기반 SSE 스트리밍 채팅과 취소 및 오류 이벤트 처리
- Logfire와 Langfuse 기반 모델 호출 및 파이프라인 관측

## LLM과 알고리즘을 나눈 5단계 일정 생성

FastAPI 엔드포인트가 Node 1부터 5까지 직접 순서대로 호출한다. 모든 단계는 Pydantic 상태 모델을 공유하고, 현재 실행 코드는 LangChain이나 LangGraph를 사용하지 않는다.

| 단계 | 담당 | 처리 내용 |
| --- | --- | --- |
| Node 1 | LLM | 작업 카테고리와 인지 부하를 추정하고 출력 형식을 검증 |
| Node 2 | 알고리즘 | 개인화 가중치로 중요도와 피로도 비용 계산 |
| Node 3 | LLM | 가용 시간과 집중 시간대를 반영한 서로 다른 후보 2개 생성 |
| Node 4 | 알고리즘 | 작업 순서, 수용량, 오버플로우와 피로도 페널티로 후보 평가 |
| Node 5 | 알고리즘 | 10분 단위 시간 배정, 조건부 작업 분할과 휴식 삽입 |

<figure style="width: 80%; margin-inline: auto; text-align: center;">
  <img src="/projects/molip-ai-daily-planner/scheduling-pipeline.png" alt="백엔드 서버 요청을 받아 LLM과 로컬 계산을 거치는 MOLIP 5단계 일정 생성 흐름" width="1075" height="639" loading="lazy" />
  <figcaption>LLM은 Node 1과 3을 맡고, 중요도 계산과 후보 평가 및 최종 시간 배정은 코드가 처리한다.</figcaption>
</figure>

### 최종 시간은 코드가 결정한다

Node 4와 5는 후보 일정이 실제 제약을 지키는지 검사한다. 작업 간 선후 의존성을 강제하고, 가용 시간을 넘거나 피로도 한계를 초과한 후보에는 페널티를 준다.

세션 시작 시각은 다음 10분 단위로 올리고 남은 시간은 10분 단위로 내린다. 남은 시간이 최소 작업 조각보다 작지 않을 때만 작업을 나누며, 분할된 작업은 다음 가용 세션에 우선 배정한다. 같은 세션에서 다른 작업을 이어갈 수 있으면 사이에 10분 휴식을 넣는다.

### 모델이 응답하지 않아도 일정을 만든다

Node 1은 재시도 가능한 오류에 최초 호출을 포함해 최대 4회, Node 3은 최대 5회 지수 백오프를 적용한다. 모든 호출이 실패하면 각 노드 안에서 규칙 기반 결과를 생성한다.

Node 1은 예상 소요 시간을 이용해 작업 특성을 만들고, Node 3은 중요도와 집중 시간대 및 시간대별 수용량의 120% 한도로 후보를 구성한다. LLM의 JSON 형식, task ID, 카테고리와 인지 부하도 코드가 다시 확인한다. 외부 모델 오류가 전체 일정 생성 실패로 바로 이어지지 않도록 만든 장치다.

## 사용자 수정 행동을 개인화 신호로 바꾸기

AI가 만든 `AI_DRAFT`와 사용자가 확정한 `USER_FINAL`을 7일 단위로 비교했다. 태스크 포함과 제외, 집중 시간대 이동, 실제 배정 시간 차이, 카테고리 및 긴급 작업 유지율, 전체 가동률 변화를 신호로 사용했다.

기본 설정에서는 기존 가중치 70%와 새 신호 30%를 결합한다. 값은 0.1부터 5.0 사이로 제한하고 갱신할 때마다 버전을 올려 PostgreSQL에 저장한다. 최신 가중치는 Node 2와 4의 점수식에 반영되며, 정규화한 중요도는 Node 3의 입력으로 전달된다.

<figure style="width: 80%; margin-inline: auto; text-align: center;">
  <img src="/projects/molip-ai-daily-planner/ema-personalization.png" alt="AI 초안과 사용자 확정 일정을 비교해 개인화 가중치를 갱신하는 흐름" width="1067" height="433" loading="lazy" />
  <figcaption>사용자의 명시적인 수정 행동을 다음 일정 생성에 쓰는 가중치로 변환한다.</figcaption>
</figure>

이 개인화는 강화학습이나 모델 재학습이 아니다. 규칙으로 추출한 신호를 EMA로 누적하는 방식이며, 그림에 표현된 일정의 순서 변경 분석은 현재 코드에 포함되지 않았다.

## 주간 레포트와 과거 일정 검색

사용자의 지난 4주 플래너 기록을 Markdown 주간 레포트로 만드는 배치 API를 구현했다. 요청은 10명 단위로 나누고 청크 사이에 1초 간격을 뒀다. 정량, 정성과 비즈니스 관점으로 후보 모델을 비교하고, 정성 평가에는 10개 차원의 루브릭을 사용했다. 이 평가는 스케줄링 모델이 아니라 <strong>주간 레포트 생성 모델</strong>을 고르기 위한 평가다.

과거 일정 검색은 두 FastMCP 도구로 나눴다. 하나는 지정한 기간의 완료 일정인 `USER_FINAL`을 조회하고, 다른 하나는 자연어 질의를 `gemini-embedding-001`로 768차원 벡터화해 Supabase pgvector에서 의미가 가까운 일정을 찾는다. 매주 월요일 오전 4시에는 최근 8일 기록 중 임베딩이 없는 완료 작업 제목을 비동기로 적재한다.

Gemini 응답을 Server-Sent Events로 전송하는 채팅 서비스도 구현했다. 메시지마다 비동기 Queue와 Task를 분리하고, 응답 생성 취소와 오류 이벤트를 처리했다.

### 구현한 기능과 실제 연결 범위

FastMCP 검색 도구와 Gemini 채팅 서비스는 각각 구현했지만, 현재 채팅 호출에는 MCP 도구가 등록되어 있지 않다. 따라서 챗봇이 상황에 따라 검색 도구를 자동 호출하는 에이전트 구조로 설명하지 않는다. 채팅은 주간 레포트 기반 대화를 제공하고, 과거 일정 검색은 별도 도구로 남아 있다.

## 관측성과 모델 전환 판단

FastAPI 요청, Node별 입출력, 프롬프트, 응답과 토큰 사용량은 Logfire span으로 추적했다. Gemini와 RunPod 생성 함수에는 Langfuse generation trace를 적용했다.

OpenAI 호환 RunPod 클라이언트와 Gemini 대체 경로를 구현하고 Qwen2.5-72B와 GPT-OSS-120B를 시험했다. GPT-OSS-120B는 Node 3 응답에 40초에서 50초가 걸려 실제 사용 흐름에 맞지 않았다. 최종 플래너, 레포트와 채팅 경로는 Gemini로 되돌렸으며 RunPod 클라이언트만 저장소에 남겼다.

## 협업 병목을 줄인 실행 방식

초기에는 예외를 모두 미리 설계하려는 접근과 파트별 진행 상황의 비동기화 때문에 API 명세 전달이 늦어졌다. 이후 작동하는 최소 단위를 먼저 만들고 사람의 검증을 거쳐 다음 구현을 정하는 일주일 단위 스프린트로 전환했다.

스프린트 백로그와 칸반보드에 작업을 Todo, Progress, Done으로 나눠 공유했다. 매일 15분 스크럼에서는 전날 진행, 막힌 문제와 당일 계획을 확인했다. PM 미팅에서는 백엔드, 클라우드, AI 파트의 일정과 의존성을 맞췄고, PL 미팅에서는 AI 구현 방향을 멘토와 검토했다. 스프린트가 끝난 뒤에는 KPT 회고로 다음 시도에 반영할 내용을 정리했다.

<figure style="width: 80%; margin-inline: auto; text-align: center;">
  <img src="/projects/molip-ai-daily-planner/kanban-board.png" alt="MOLIP 팀의 Epic과 스프린트 작업 상태를 구분한 칸반보드" width="1432" height="855" loading="lazy" />
  <figcaption>직군별 작업과 진행 상태를 같은 보드에서 확인해 API 및 일정 의존성을 조정했다.</figcaption>
</figure>

<figure style="width: 80%; margin-inline: auto; text-align: center;">
  <img src="/projects/molip-ai-daily-planner/kpt-retrospective.jpg" alt="팀원이 화이트보드에 작성한 MOLIP 프로젝트 KPT 회고" width="4032" height="2268" loading="lazy" />
  <figcaption>스프린트 종료 뒤 Keep, Problem, Try를 함께 기록한 회고 현장.</figcaption>
</figure>

## 구현 결과와 확인된 한계

- LLM과 결정론적 알고리즘을 결합한 5단계 일정 생성 파이프라인을 구현했다.
- 작업 의존성, 가용 시간, 피로도, 10분 단위 배정과 조건부 분할을 코드로 처리했다.
- 사용자 수정 행동을 EMA 가중치로 바꿔 다음 일정 추천에 반영했다.
- 주간 레포트 배치 API, 벡터 검색용 FastMCP 도구와 SSE 채팅을 구현했다.
- Logfire와 Langfuse로 모델 호출과 단계별 실행을 추적하고, 지연이 큰 모델을 실제 호출 경로에서 제외했다.

팀이 만든 서비스 전체와 직접 구현한 AI 범위는 구분해서 기록했다. 현재 파이프라인은 자체 선형 호출 구조이며 LangChain이나 LangGraph를 사용하지 않는다. 개인화에는 일정 순서 변경 분석이 없고, 채팅과 MCP 검색 도구도 자동 호출 방식으로 연결되어 있지 않다. 원문에 기록된 서비스 URL의 현재 운영 상태는 이번 작성에서 확인하지 않았으므로 데모 링크로 제공하지 않는다.

## 관련 자료

- [MOLIP 소개 자료 PDF](/projects/molip-ai-daily-planner/molip-presentation.pdf)

