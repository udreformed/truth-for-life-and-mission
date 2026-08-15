# Cloudflare 운영 설정

## 1. 관리자 인증

관리자 로그인은 애플리케이션이 비밀번호를 저장하지 않고 Cloudflare Access가 담당합니다.

1. 대표 관리자 1명이 Cloudflare 계정을 만들고 두 관리자를 같은 계정의 멤버로 초대합니다.
2. 세 명 모두 각자 Cloudflare 계정으로 가입하고 MFA를 켭니다.
3. Cloudflare Zero Trust에서 Access Application을 생성합니다.
4. 보호 경로를 `example.org/admin/*`, `example.org/api/admin/*`로 지정합니다.
5. 로그인 공급자는 새 Zero Trust 조직의 기본값인 Cloudflare를 사용합니다.
6. Allow 정책에는 관리자 세 명의 정확한 이메일 주소만 등록합니다.

공용 비밀번호는 만들지 않습니다. 각 관리자는 자신의 Cloudflare 계정으로 로그인하며, 필요하면 One-time PIN을 보조 방식으로 추가할 수 있습니다. OTP를 쓰는 경우에는 별도 가입 없이 허용된 이메일로 받은 1회용 코드를 입력합니다.

Worker는 Access가 서명한 JWT를 검증한 후 이메일을 읽습니다. 관리자 화면이 보이는 것만으로 권한을 인정하지 않으며 모든 쓰기 API에서 다시 확인합니다.

## 2. 역할

- `admin`: 모든 자료 작성, 수정, 삭제, 게시 및 사용자 관리
- `author`: 자신의 자료 작성, 수정, 삭제 및 게시

현재 운영자는 세 명 모두 `admin`으로 등록합니다.

```sql
INSERT INTO users (email, display_name, role) VALUES
  ('admin1@example.com', 'Administrator 1', 'admin'),
  ('admin2@example.com', 'Administrator 2', 'admin'),
  ('admin3@example.com', 'Administrator 3', 'admin');
```

실제 이메일로 바꾼 다음 D1 콘솔이나 Wrangler에서 한 번 실행합니다.

## 3. D1과 R2

D1에는 글과 관계형 메타데이터만 저장합니다. 이미지와 PDF 원본은 R2에 저장하고 D1에는 객체 키만 보관합니다. 동영상은 업로드하지 않고 YouTube URL만 저장합니다.

R2 객체는 기본적으로 공개하지 않습니다. 공개된 자료에 연결된 파일만 Worker가 전달하도록 구성합니다.

## 4. AI 무료 한도

- 기본값은 `AI_ENABLED=false`입니다.
- 시험 운영을 시작할 때 `wrangler.jsonc`에 `"ai": { "binding": "AI" }`를 추가합니다.
- 활성화 시 하루 애플리케이션 한도는 20회입니다.
- D1의 `ai_daily_usage`에서 서버가 사용량을 원자적으로 증가시킵니다.
- 한도에 도달하면 일반 키워드 추천으로 돌아가며 외부 유료 API를 호출하지 않습니다.
- Cloudflare Workers AI 유료 플랜이나 외부 AI 키는 연결하지 않습니다.

## 5. 비용 방어

- Workers Free 플랜 유지
- R2 Standard 스토리지 사용
- 영상 파일 업로드 금지
- 이미지 5MB, PDF 25MB 애플리케이션 제한
- 공개 응답에 캐시 헤더 적용
- 관리자 API는 Access로 제한
- AI 기능은 환경 변수와 일일 한도로 이중 차단
