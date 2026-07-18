import { PROFILE } from '@/constants/profile';
import { LINKS } from '@/constants/routes';
import { Section } from '@/components/layout/Section';

export function Contact() {
  return (
    <Section id="contact" eyebrow="contact" title="함께 일할 팀을 찾고 있습니다">
      <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-panel via-[#111827] to-[#0A0E17] p-8 text-white shadow-glow md:p-10">
        <p className="max-w-3xl text-lg leading-8 text-white/78">
          Android/Kotlin 깊이와 Flutter, FastAPI, React, AI/LLM 확장 경험을 함께 가져갈 수 있는
          역할을 찾고 있습니다. 서비스 전체를 조망하며, 필요한 빈칸을 주도적으로 메우는 개발자로
          기여하겠습니다.
        </p>
        <p className="mt-5 max-w-3xl text-sm leading-7 text-white/58">
          업무 및 일부 개인 프로젝트는 비공개 저장소로 관리하고 있어, 공개 가능한 구현 과정과
          구조 중심으로 포트폴리오와 Velog에 정리했습니다. 필요 시 코드 구조 설명이나 일부
          샘플은 별도로 공유드릴 수 있습니다.
        </p>
        <a
          href={LINKS.email}
          className="mt-8 inline-block break-all font-mono text-2xl font-bold text-white transition hover:text-mint md:text-4xl"
        >
          {PROFILE.email}
        </a>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={LINKS.velog}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-white/20 bg-white/[0.04] px-4 py-2 font-mono text-xs font-semibold transition hover:border-mint hover:text-mint"
          >
            Velog 구현 기록
          </a>
        </div>
      </div>
    </Section>
  );
}
