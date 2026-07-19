import type { Project } from '@/types';
import { LINKS } from './routes';

export const PROJECTS: Project[] = [
  {
    id: 'siksudaejang',
    name: '식수대장',
    tagline: '식당과 회사를 잇는 QR 기반 B2B 식수 관리 SaaS 구조',
    status: 'live',
    description:
      '기획, 앱 2종, 웹 어드민, API 서버, DB, 배포까지 이어지는 제품 구조를 주도적으로 설계하고 검증 중인 서비스입니다. 파트너 앱으로 QR을 검표하고, 본사와 담당자가 식수 데이터를 관리합니다.',
    highlights: [
      'Flutter 사용자 앱 + 파트너 앱, React 어드민, FastAPI 서버까지 총 4개 제품 구조 구축',
      'QR 인증 기반 실시간 자동 식수 기록으로 현장 수기 업무 시간을 50% 이상 단축',
      'BLoC, Clean Architecture, Docker 배포를 적용해 운영 가능한 구조로 재구축',
    ],
    stack: ['Flutter', 'FastAPI', 'React', 'TypeScript', 'MariaDB', 'Docker', 'BLoC'],
    links: [
      { label: 'Live', url: LINKS.siksu },
      { label: 'velog link', url: LINKS.velog_siksu_web },
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
    id: 'ttukttak',
    name: '뚝딱위치',
    tagline: '연락처 기반 현재 위치 문자 전송 앱',
    status: 'completed',
    description:
      '등록된 연락처에 현재 위치를 문자로 전송하고, 대상 선택, 전송 이력, 연락처 관리를 제공하는 Android 위치 공유 앱입니다.',
    highlights: [
      '현재 위치 기반 문자 전송 흐름 구성',
      '연락처 등록, 대상 선택, 전송 이력 화면 구성',
      '긴급 문자 전송과 일반 전송을 분리한 UX 설계',
    ],
    stack: ['Android', 'Kotlin', 'Location', 'SMS', 'Contacts'],
    screenshot: {
      src: 'assets/screenshots/ttukttak_01.webp',
      alt: '뚝딱위치 위치 전송 앱 주요 화면',
    },
    links: [{ label: 'velog link', url: LINKS.velog_ttuktak }],
    featured: false,
  },
  {
    id: 'pulgo',
    name: '풀고켜고',
    tagline: '자녀 앱 사용을 수학 문제로 제어하는 Android 앱',
    status: 'completed',
    description:
      '선택한 앱 실행 시 수학 문제를 표시하고, 부모 설정에서 차단 앱과 허용 시간을 관리하는 앱 사용 제어 프로젝트입니다.',
    highlights: [
      '화면 위 표시, 사용 기록 접근, 알림 권한 등 Android 권한 흐름 설계',
      '차단 앱 목록 선택과 부모 설정 화면 구성',
      '문제 풀이 후 허용 시간 설정 UX 구현',
    ],
    stack: ['Android', 'Kotlin', 'Accessibility', 'Usage Stats', 'Overlay'],
    screenshot: {
      src: 'assets/screenshots/pulgo_01.webp',
      alt: '풀고켜고 앱 사용 제어 및 부모 설정 화면',
    },
    links: [{ label: 'velog link', url: LINKS.velog_pulgo }],
    featured: false,
  },
  {
    id: 'passbox',
    name: '패스박스',
    tagline: '로컬 중심 비밀번호 관리 앱',
    status: 'completed',
    description:
      '비밀번호 정보를 로컬 기기 안에서 관리하고, 검색, 상세 보기, 백업, 생체 인증 설정을 제공하는 개인 보안 도구입니다.',
    highlights: [
      '계정 정보 검색과 상세 보기 모달 UX 구성',
      '마스터 비밀번호, 생체 인증, 백업 ZIP 비밀번호 흐름 설계',
      'Excel 백업/복원 흐름을 고려한 설정 화면 구성',
    ],
    stack: ['Flutter', 'Riverpod', 'Local Storage', 'Biometrics', 'Backup'],
    screenshot: {
      src: 'assets/screenshots/passbox_01.webp',
      alt: '패스박스 비밀번호 관리 앱 주요 화면',
    },
    links: [{ label: 'velog link', url: LINKS.velog_passbox }],
    featured: false,
  },
  {
    id: 'emergencymom',
    name: '응급맘',
    tagline: '소아 응급 상황 안내 모바일 앱',
    status: 'completed',
    description:
      '아이 증상을 입력하면 응급 처치 가이드와 주변 응급실 정보를 확인할 수 있도록 구성한 소아 응급 안내 앱입니다.',
    highlights: [
      '증상 분석 채팅, 증상 이력, 긴급 처치 가이드 화면 구성',
      '주변 응급실 목록과 전화/지도 보기 흐름 설계',
      '아이 프로필 관리와 기본 상담 대상 지정 UX 구현',
    ],
    stack: ['Android', 'Kotlin', 'Healthcare UX', 'Location', 'LLM/RAG'],
    screenshot: {
      src: 'assets/screenshots/emergencymom_01.webp',
      alt: '응급맘 소아 응급 안내 앱 주요 화면',
    },
    links: [{ label: 'velog link', url: LINKS.velog_idoc }],
    featured: false,
  },
  {
    id: 'blogdraftai',
    name: 'BlogDraftAI',
    tagline: 'GitHub 코드를 기술 블로그 초안으로 정리하는 AI 도구',
    status: 'completed',
    description:
      'GitHub 저장소 주소와 토큰을 입력하면 FastAPI 서버가 코드를 수집하고 Claude에 전달해 한국어 기술 글 초안을 생성하는 웹 도구입니다.',
    highlights: [
      '저장소 URL, 토큰, 브랜치, 포스트 유형 입력 흐름 구성',
      'FastAPI 서버와 Claude API를 연결한 초안 생성 파이프라인 설계',
      'Private 저장소 분석을 고려한 토큰 입력 안내 UX 구성',
    ],
    stack: ['FastAPI', 'Claude API', 'React', 'GitHub API', 'Prompt Engineering'],
    screenshot: {
      src: 'assets/screenshots/blogdraftai_01.webp',
      alt: 'BlogDraftAI GitHub 코드 기반 블로그 초안 생성 화면',
    },
    links: [{ label: 'velog link', url: LINKS.velog_blogdraft }],
    featured: false,
  },
  {
    id: 'aifalldown',
    name: 'aiFallDownDetector',
    tagline: 'YOLO 기반 실시간 낙상 감지 PoC',
    status: 'completed',
    description:
      '카메라 화면에서 사람의 자세를 감지하고 정상/낙상 상태를 시각적으로 구분하는 컴퓨터 비전 검증 프로젝트입니다.',
    highlights: [
      '사람 검출 박스와 포즈 라인을 활용한 낙상 상태 시각화',
      '정상 상태와 낙상 상태를 분리해 감지 결과를 표시',
      '실시간 카메라 입력 기반 PoC로 적용 가능성 검증',
    ],
    stack: ['YOLO', 'Computer Vision', 'Android', 'Vertex AI', 'PoC'],
    screenshot: {
      src: 'assets/screenshots/aifalldown_01.webp',
      alt: 'aiFallDownDetector 정상 자세와 낙상 감지 화면',
    },
    links: [{ label: 'velog link', url: LINKS.velog_aifalldown }],
    featured: false,
  },
  {
    id: 'wordpang',
    name: '단어팡',
    tagline: '단어 조합과 도감 수집을 결합한 모바일 게임',
    status: 'completed',
    description:
      '기초 단어 카드를 조합해 새로운 단어를 발견하고, 도감 진행률을 채우는 캐주얼 단어 조합 게임입니다.',
    highlights: [
      '카드 드래그/조합 흐름과 단어 정보 모달 구성',
      '힌트, 도감, 발견률을 활용한 게임 진행 구조 설계',
      '밝은 색상과 큰 터치 타깃 중심의 모바일 게임 UX 구현',
    ],
    stack: ['Flutter', 'BLoC', 'Game UI', 'State Management', 'Mobile UX'],
    screenshot: {
      src: 'assets/screenshots/wordpang_main.webp',
      alt: '단어팡 단어 조합 게임과 도감 화면',
    },
    links: [{ label: 'velog link', url: LINKS.velog_wordpang }],
    featured: false,
  },
];
