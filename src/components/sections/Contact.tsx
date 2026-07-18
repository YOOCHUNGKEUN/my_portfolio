import { PROFILE } from '@/constants/profile';
import { LINKS } from '@/constants/routes';
import { Section } from '@/components/layout/Section';

export function Contact() {
  return (
    <Section id="contact" eyebrow="contact" title="함께 일할 팀을 찾고 있습니다">
      <div className="rounded-lg border border-line bg-ink p-8 text-white md:p-10">
        <p className="max-w-3xl text-lg leading-8 text-white/78">
          Android/Kotlin 깊이와 Flutter, FastAPI, React, AI/LLM 확장 경험을 함께 가져갈 수 있는
          역할을 찾고 있습니다. 서비스 전체를 조망하며, 필요한 빈칸을 직접 메우는 개발자로
          기여하겠습니다.
        </p>
        <a
          href={LINKS.email}
          className="mt-8 inline-block break-all font-mono text-2xl font-bold text-white transition hover:text-indigo md:text-4xl"
        >
          {PROFILE.email}
        </a>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={LINKS.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-white/20 px-4 py-2 font-mono text-xs font-semibold transition hover:border-white"
          >
            GitHub
          </a>
          <a
            href={LINKS.velog}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-white/20 px-4 py-2 font-mono text-xs font-semibold transition hover:border-white"
          >
            Velog
          </a>
        </div>
      </div>
    </Section>
  );
}
