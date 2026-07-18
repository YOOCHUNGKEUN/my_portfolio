# Portfolio — 유충근

Android/Kotlin 기반 9년 8개월 경력의 시니어 모바일 개발자 포트폴리오입니다.

핵심 메시지: **모바일에서 서버까지, 제품이 되는 흐름을 설계하고 연결합니다.**

## 작업 완료 내용

- GitHub Pages 배포용 React + TypeScript + Vite 프로젝트 구성
- TailwindCSS 기반의 다크 제품형 포트폴리오 디자인 적용
- 이력서 내용을 바탕으로 프로필, 경력, 프로젝트, AI 역량 콘텐츠 정리
- 식수대장 B2B SaaS를 대표 서비스 구조 섹션으로 배치
- 대시보드 프리뷰와 주도 개발 범위를 보여주는 아키텍처 다이어그램 구현
- 통일된 톤의 프로젝트 카드, 스크린샷 확대 모달, 중앙형 경력 타임라인, AI 역량, Contact 섹션 구성
- 비공개 저장소가 있는 프로젝트를 고려해 공개 가능한 구현 과정과 구조 중심으로 안내
- GitHub Actions 기반 Pages 자동 배포 워크플로 추가
- 작업 기록용 `HISTORY.md` 생성

## 주요 섹션

| 섹션 | 내용 |
|---|---|
| Hero | 이름, 핵심 메시지, 포트폴리오 CTA |
| Stats | 모바일 경력, 제품 구성 경험, 도메인 경험 |
| Featured | 식수대장 서비스 구조, 대시보드 프리뷰, 아키텍처 다이어그램 |
| Career | 중앙형 경력 타임라인과 기타 경력 토글 |
| Projects | 실제 스크린샷이 포함된 프로젝트 카드와 이미지 확대 모달 |
| AI Capability | RAG, 파인튜닝, Judge LLM 등 AI 실무 역량 |
| Contact | 이메일, Velog 구현 기록 링크 |

## 기술 스택

| 영역 | 사용 |
|---|---|
| Framework | React 18 + TypeScript |
| Build | Vite |
| Styling | TailwindCSS |
| Deploy | GitHub Actions + GitHub Pages |

## 프로젝트 구조

```text
src/
├── components/
│   ├── layout/       # Header, Footer, Section
│   ├── sections/     # Hero, Stats, Featured, Career, Projects, AI, Contact
│   └── ui/           # Badge, Card, Chip, ArchDiagram
├── constants/        # 프로필, 경력, 프로젝트, 기술 스택, 링크 데이터
├── hooks/            # 활성 섹션, 스크롤 reveal 훅
├── styles/           # Tailwind 전역 스타일
└── types/            # 포트폴리오 데이터 타입
```

## 콘텐츠 수정 위치

| 수정할 내용 | 파일 |
|---|---|
| 이름, 헤드라인, 이메일, 스탯 | `src/constants/profile.ts` |
| Velog, 이메일 링크 | `src/constants/routes.ts` |
| 경력 타임라인 | `src/constants/career.ts` |
| 식수대장 및 프로젝트 | `src/constants/projects.ts` |
| 프로젝트 스크린샷 | `public/assets/screenshots/`의 최적화된 webp 이미지 |
| 기술 스택, AI 역량 | `src/constants/skills.ts` |
| 색상, 폰트 토큰 | `tailwind.config.js`, `src/styles/index.css` |

## 로컬 실행

```bash
npm install
npm run dev
npm run build
```

## 검증

```bash
npm run build
```

현재 빌드 검증은 완료되었고, Vite 프로덕션 빌드가 정상 생성됩니다.

## 배포

GitHub 저장소 Settings → Pages에서 Source를 **GitHub Actions**로 설정한 뒤,
`main` 브랜치에 push하면 `.github/workflows/deploy.yml`이 자동으로 빌드하고 Pages에 배포합니다.
