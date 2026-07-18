import type { SkillGroup } from '@/types';

export const SKILLS: SkillGroup[] = [
  {
    category: 'Mobile',
    items: [
      { name: 'Kotlin / Android', note: '상용 서비스 9년 8개월' },
      { name: 'Java to Kotlin Migration', note: '대형 레거시 100% 전환' },
      { name: 'Flutter', note: '실서비스 앱 2종 운영' },
      { name: 'Clean Architecture / BLoC / MVVM' },
      { name: 'Google Play / App Store 운영 대응' },
    ],
  },
  {
    category: 'Backend / Web',
    items: [
      { name: 'FastAPI', note: 'B2B SaaS 백엔드 구축' },
      { name: 'React + TypeScript', note: '운영 어드민 웹 개발' },
      { name: 'MariaDB', note: '서비스 스키마 설계' },
      { name: 'Docker', note: '배포 안정화' },
      { name: 'Google Apps Script / Telegram Bot', note: '업무 자동화' },
    ],
  },
  {
    category: 'AI / LLM',
    items: [
      { name: 'RAG Pipeline', note: 'bge-m3 · ChromaDB' },
      { name: 'LoRA / QLoRA Fine-tuning', note: 'Qwen2.5 · Azure H100' },
      { name: 'Judge LLM 검증', note: 'crash · accuracy · safety' },
      { name: 'LangChain / Azure AI / Vertex AI' },
      { name: 'Codex / Claude Code', note: 'AI 기반 개발 워크플로 활용' },
    ],
  },
];
