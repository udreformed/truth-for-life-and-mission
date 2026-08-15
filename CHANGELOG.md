# CHANGELOG

## [0.2.0] - 2026-07-21

### Added

- 복음 소개 영상과 예수님을 더 알아가는 재생목록을 중심으로 홈 화면 개편
- 태국 시간 기준 날짜별 묵상·성경통독 자동 노출
- 관리자 날짜 예약과 묵상 시리즈 지정 기능
- 독립 강좌 메뉴와 사이트 내 YouTube 재생목록 재생
- 자료실의 365일 묵상·성경통독 날짜별 아카이브
- CGN THAI Living Life 2026 재생목록 추천 영역
- 운영자 소개, PromptPay 후원 QR, LINE 연락 QR
- 사이트 안 PDF 미리보기와 직접 다운로드

## [0.1.1] - 2026-07-21

### Added

- 태국어·한국어·영어 `유용한 사이트` 페이지
- Grace Bannasan 전자책 원본 사이트 바로가기
- 자료실 PDF 필터에 Grace Bannasan E-books 소개 및 다운로드 바로가기 버튼
- 유용한 사이트 페이지에 Bible 66 Commentary 링크 추가
- 자료실 강좌 필터에 우돈타니 개혁교회 YouTube 재생목록 2개 연결

## [0.1.0] - 2026-07-21

### Added

- Astro와 Cloudflare Workers 기반 프로젝트 구조
- D1 콘텐츠 스키마와 R2 미디어 설계
- Cloudflare Access 관리자 3인 인증 구조
- 태국어 우선 다국어 정보 구조
- 무료 범위 AI 사용 정책
- YouTube 링크 기반 영상 정책

### Changed

- 초기 Blueprint의 Supabase 구성을 장기 무료 운영에 적합한 Cloudflare 단일 스택으로 변경

### Fixed

- 정적 공개 콘텐츠와 관리자 즉시 게시 흐름 사이의 충돌을 Worker 캐시 전략으로 정리
