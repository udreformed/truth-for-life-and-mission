# Truth for Life and Mission

태국어 사용자를 우선으로 섬기는 개혁주의 신학 자료실과 제자훈련 플랫폼입니다.

## 현재 정보 구조

- 홈: 복음 소개, 검색, 오늘의 묵상, 오늘의 성경통독, 운영자 소개와 후원
- 강좌: YouTube 재생목록을 사이트 안에서 재생하고 강의 자료 연결
- 자료실: 365일 묵상·성경통독 날짜 검색, PDF와 일반 자료
- 추천 사이트: 외부 기독교 자료 사이트와 매일 갱신되는 추천 재생목록

관리자가 묵상이나 성경통독 자료에 미래 날짜를 지정하면 태국 시간 기준으로 해당 날짜에 홈에 자동 표시됩니다.

## 확정된 기술 구성

- Astro + TypeScript
- Cloudflare Workers
- Cloudflare D1: 콘텐츠와 관계형 메타데이터
- Cloudflare R2: 이미지와 PDF
- Cloudflare Access: 관리자 3명의 개별 로그인
- Cloudflare Workers AI: 무료 할당량 내에서만 선택적으로 사용
- YouTube: 동영상 원본 호스팅

## 로컬 시작

```bash
pnpm install
pnpm db:local
pnpm dev
```

공개 화면은 로컬 예시 콘텐츠로도 열립니다. 관리자 쓰기 기능과 업로드는 `wrangler dev`로 실행하면 실제 Cloudflare 로컬 바인딩을 사용합니다.

## Cloudflare 준비

1. `wrangler d1 create truth-for-life-and-mission`
2. 반환된 ID를 `wrangler.jsonc`의 `database_id`에 입력
3. `wrangler r2 bucket create truth-for-life-and-mission-media`
4. `pnpm db:remote`
5. Cloudflare Access에서 `/admin/*`과 `/api/admin/*`을 보호
6. 허용 정책에 관리자 세 명의 이메일을 각각 등록
7. `pnpm deploy`

자세한 설정은 `docs/CLOUDFLARE_SETUP.md`를 참고하세요.
