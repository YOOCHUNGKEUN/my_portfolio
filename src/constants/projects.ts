import type { Project } from '@/types';
import { LINKS } from './routes';

export const PROJECTS: Project[] = [
  {
    id: 'siksudaejang',
    name: '식수대장',
    tagline: '식당과 회사를 잇는 QR 기반 B2B 식수 관리 SaaS',
    status: 'live',
    description:
      '기획, 앱 2종, 웹 어드민, API 서버, DB, 배포까지 혼자 만든 실서비스입니다. 파트너 앱으로 QR을 검표하고, 본사와 담당자가 식수 데이터를 관리합니다.',
    highlights: [
      'Flutter 사용자 앱 + 파트너 앱, React 어드민, FastAPI 서버까지 총 4개 제품 단독 구축',
      'QR 인증 기반 실시간 자동 식수 기록으로 현장 수기 업무 시간을 50% 이상 단축',
      'BLoC, Clean Architecture, Docker 배포를 적용해 운영 가능한 구조로 재구축',
    ],
    stack: ['Flutter', 'FastAPI', 'React', 'TypeScript', 'MariaDB', 'Docker', 'BLoC'],
    links: [
      { label: 'Live', url: LINKS.siksu },
      { label: 'Portfolio Series', url: LINKS.velog },
    ],
    architecture: [
      { label: 'Flutter 사용자 앱', detail: 'Flutter · BLoC · Clean Architecture', mine: true },
      { label: '파트너 앱', detail: 'Flutter · QR check-in flow', mine: true },
      { label: 'React 웹 어드민', detail: 'React · TypeScript', mine: true },
      { label: 'FastAPI 서버', detail: 'Python · role-based API', mine: true },
      { label: 'MariaDB · Docker', detail: 'schema design · container deploy', mine: true },
    ],
    featured: true,
  },
  {
    id: 'moonshot-buzzbit',
    name: 'MoonShot / Buzzbit',
    tagline: '신규 Android 앱 2종의 네이티브 아키텍처 설계와 론칭',
    status: 'released',
    description:
      'MVVM과 LiveData를 기반으로 신규 앱의 메인 구조를 잡고 Google Play 론칭까지 총괄했습니다.',
    highlights: [
      '신규 서비스 Android 아키텍처 설계',
      'Google Play 론칭 프로세스 대응',
      '운영 중 CS 자동화를 위한 Telegram Bot API 연동',
    ],
    stack: ['Kotlin', 'Android', 'MVVM', 'LiveData', 'Telegram Bot API'],
    links: [{ label: 'Portfolio Series', url: LINKS.velog }],
    featured: false,
  },
  {
    id: 'ai-assistant',
    name: 'AI 업무 비서 / 소아응급 챗봇',
    tagline: 'RAG, 파인튜닝, Judge LLM 검증을 적용한 AI 실무 프로젝트',
    status: 'completed',
    description:
      '부트캠프와 개인 학습을 통해 RAG 검색 품질 개선, 임베딩 모델 교체, Qwen2.5 LoRA 파인튜닝, Judge LLM 검증 파이프라인을 경험했습니다.',
    highlights: [
      'bge-m3와 ChromaDB 기반 RAG 검색 파이프라인 구성',
      'Azure H100 환경에서 Qwen2.5 계열 모델 파인튜닝 실습',
      'crash, accuracy, safety 관점의 LLM 응답 검증 흐름 설계',
    ],
    stack: ['FastAPI', 'React', 'LangChain', 'ChromaDB', 'bge-m3', 'Qwen2.5', 'Azure AI'],
    links: [{ label: 'Portfolio Series', url: LINKS.velog }],
    featured: false,
  },
  {
    id: 'legacy-native',
    name: 'Hybrid to Native Order App',
    tagline: '하이브리드 오더 앱을 Kotlin Native 앱으로 100% 전환',
    status: 'completed',
    description:
      '기존 하이브리드 앱의 성능과 유지보수 문제를 해결하기 위해 Kotlin 기반 Native 구조로 재구축했습니다.',
    highlights: [
      '5개월 내 Android Native 전환 완료',
      'Google Maps API와 OCR 모듈 탑재',
      '레거시 리팩토링으로 앱 안정성 개선',
    ],
    stack: ['Kotlin', 'Android Native', 'Google Maps API', 'OCR'],
    links: [{ label: 'Portfolio Series', url: LINKS.velog }],
    featured: false,
  },
  {
    id: 'exchange',
    name: 'Digital Asset Exchange App',
    tagline: '거래소 앱 Java 레거시를 Kotlin으로 전환하고 금융 인증을 고도화',
    status: 'completed',
    description:
      '디지털 자산 거래소 Android 앱을 Kotlin 기반으로 전환하고 인증, 푸시, iOS 유지보수까지 담당했습니다.',
    highlights: [
      'Java 대형 레거시 프로젝트 Kotlin 100% 전환',
      'FaceID와 OAuth 기반 금융 인증 보안 기능 적용',
      'FCM 기반 실시간 매수/매도 푸시 알림 고도화',
    ],
    stack: ['Kotlin', 'Java', 'Swift', 'OAuth', 'FaceID', 'FCM'],
    links: [{ label: 'Portfolio Series', url: LINKS.velog }],
    featured: false,
  },
];
