# Architecture

## 요청 흐름

```text
Visitor
  -> Cloudflare static assets / Worker cache
  -> Astro public route
  -> D1 published resources only

Administrator
  -> Cloudflare Access
  -> Astro admin page
  -> protected /api/admin routes
  -> D1 metadata + R2 files
```

## 핵심 결정

- 공개 읽기와 관리자 쓰기를 분리합니다.
- 방문자에게 인증 기능을 노출하지 않습니다.
- 모든 관리자 쓰기 권한은 서버에서 재검증합니다.
- 다국어 번역을 자료 본체와 분리하여 태국어를 우선하면서 같은 자료 ID를 공유합니다.
- 카테고리보다 관계를 우선할 수 있도록 태그, 성경 구절, 관련 자료 연결을 별도 테이블로 둡니다.
- AI가 실패하거나 한도를 소진해도 일반 검색과 자료 열람은 정상 동작합니다.
