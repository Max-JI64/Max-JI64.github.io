# 콘텐츠 작성 및 검색 노출 가이드

이 사이트의 내용은 Markdown 파일 하나가 곧 하나의 공개 페이지가 되는 구조입니다. 먼저 아래 템플릿을 복사하고 파일명과 내용을 바꿉니다.

- 학습 노트: `src/content/notes/TEMPLATE.md`
- 프로젝트: `src/content/projects/TEMPLATE.md`
- 경험 및 자격증: `src/content/experiences/TEMPLATE.md`

## 게시 순서

1. 템플릿을 해당 컬렉션 폴더 안으로 복사합니다.
2. 파일명을 영문 소문자와 하이픈으로 정합니다. 예: `linear-regression.md`, `wildfire-analysis.md`
3. front matter의 제목, 설명, 기간 또는 작성일, 키워드를 작성합니다.
4. `draft: true`를 `draft: false`로 변경하면 다음 빌드부터 목록과 상세 페이지에 표시됩니다.

`TEMPLATE.md` 자체는 작성 참고용이므로 수정하지 않고 남겨 둡니다.

## 날짜 기준

- 프로젝트: `period`에 실제 진행 기간을 작성합니다.
- 경험 및 자격증: `startedAt`, `endedAt`에 실제 기간을 작성합니다. 진행 중이면 `endedAt`을 생략합니다.
- 학습 노트, 프로젝트, 경험 및 자격증: `publishedAt`에 최초 게시일을 작성합니다.
- 기존 글을 수정했다면 `updatedAt`에 실제 수정일을 작성합니다.

홈의 **최근 업로드**는 실제로 `updatedAt`이 가장 최신인 공개 페이지를 표시합니다. `updatedAt`이 없는 글은 `publishedAt`을 기준으로 합니다. 두 날짜 모두 화면에는 표시하지 않습니다. 프로젝트와 경험 및 자격증의 활동 기간은 각 콘텐츠의 맥락 정보로 표시됩니다.

## 제목과 설명 작성법

`title`은 페이지 제목입니다. 핵심 주제와 행동 또는 결론이 함께 드러나게 씁니다.

```yaml
title: "선형 회귀분석에서 결정계수 해석하기"
description: "회귀모형의 설명력과 계수 해석을 분석 문장으로 연결하는 기준을 정리합니다."
```

- 제목은 검색할 사람이 실제로 입력할 개념을 포함합니다.
- 설명은 제목을 반복하지 말고, 이 글에서 해결하는 질문이나 얻을 수 있는 결과를 1~2문장으로 씁니다.
- 본문 첫 번째 `##` 제목도 핵심 질문이나 분석 주제를 직접 말하도록 씁니다.
- 단어를 나열하지 않고, 실제 사례·기준·결과를 본문에 충분히 작성합니다.

## 본문 강조 작성법

- 프로젝트를 비롯한 모든 Markdown 콘텐츠에서 굵게 강조할 때는 `**텍스트**` 대신 `<strong>텍스트</strong>`을 사용합니다.
- 표, `<details>` 요소, 그 밖의 HTML 블록 안에서도 같은 방식을 사용합니다.
- 색상처럼 추가 스타일이 필요한 강조는 해당 페이지에 정의된 클래스를 `<strong>`에 붙입니다. 일반적인 굵은 강조에는 별도 클래스를 사용하지 않습니다.

## 본문 이미지 작성법

- 프로젝트·학습 노트·경험 페이지에 이미지를 삽입할 때는 `<figure>` 요소에 `style="width: 80%; margin-inline: auto; text-align: center;"`를 적용합니다.
- 이미지 크기는 `<img>`의 원본 `width`와 `height` 값을 바꾸는 대신 `<figure>`의 `width` 비율로 조절합니다. 이미지 비율은 원본 비율에 맞춰 함께 줄어듭니다.
- `margin-inline: auto`로 이미지 영역을 가운데에 배치하고, `text-align: center`로 `<figcaption>`을 가운데 정렬합니다.

```html
<figure class="weather-wide-figure" style="width: 80%; margin-inline: auto; text-align: center;">
  <img src="/images/example.png" alt="이미지 설명" width="1600" height="900" loading="lazy" />
  <figcaption>이미지 캡션.</figcaption>
</figure>
```

## 키워드 작성 규칙

각 템플릿에는 `keywords`가 있습니다. 화면에 해시태그로 표시되지 않으며, 페이지의 JSON-LD 구조화 데이터에 해당 글을 설명하는 보조 정보로 사용됩니다.

```yaml
keywords: ["회귀분석", "결정계수", "선형 회귀", "모형 해석"]
```

- 3~8개를 작성합니다.
- `#` 기호는 넣지 않습니다.
- 한 개는 글의 큰 주제, 나머지는 분석 방법·도구·데이터·문제 유형을 씁니다.
- 제목, 설명, 소제목, 본문 중 적어도 하나에 실제로 등장하는 표현만 씁니다.
- 지역명·데이터셋명·라이브러리명은 글의 핵심일 때만 넣습니다.
- 같은 뜻의 단어 반복, 무관한 인기 검색어, 사람 이름의 과도한 반복은 넣지 않습니다.

## AI에게 키워드 생성을 요청하는 문장

아래 문장을 내용 초안 뒤에 붙여 사용합니다.

```text
아래 Markdown 글의 title, description, 소제목, 본문에 실제로 나타나는 표현만 근거로
검색 키워드 3~8개를 YAML 배열로 작성해줘.
규칙: # 기호 없이, 중복 없이, 큰 주제 1개와 방법·도구·데이터·문제 유형을 균형 있게 포함하고,
본문에 없는 인기 키워드나 과장된 표현은 추가하지 마.
출력 형식: keywords: ["키워드1", "키워드2", "키워드3"]
```

## 검색 노출을 위해 이미 적용한 항목

- 페이지별 고유한 `title`, `description`, canonical URL
- 각 콘텐츠의 유형·제목·설명·기간 또는 작성일을 담은 JSON-LD 구조화 데이터
- 공개된 모든 정적 페이지를 담는 `sitemap.xml`
- 검색 엔진에 사이트맵 위치를 알리는 `robots.txt`

보이지 않는 글자나 투명 해시태그를 본문에 넣지는 않습니다. Google은 `meta keywords`를 순위에 사용하지 않으며, 독자에게 보이지 않는 내용을 구조화 데이터로 표시하는 방식도 권장하지 않습니다. 대신 실제 페이지의 제목·설명·본문과 일치하는 키워드만 위 메타데이터에 사용합니다.

## 배포 후 할 일

1. GitHub Pages가 공개된 뒤 [Google Search Console](https://search.google.com/search-console/)에 `https://max-ji64.github.io/`를 등록합니다.
2. `https://max-ji64.github.io/sitemap.xml`을 사이트맵으로 제출합니다.
3. 새 글을 게시한 뒤 URL 검사 도구에서 색인 생성 요청을 합니다.
4. 구조화 데이터는 [Rich Results Test](https://search.google.com/test/rich-results)에서 확인합니다.
