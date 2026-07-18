import { useState } from 'react';
import { CAREERS, OTHER_CAREERS } from '@/constants/career';
import type { Career } from '@/types';
import { Section } from '@/components/layout/Section';
import { Badge } from '@/components/ui/Badge';
import { Chip } from '@/components/ui/Chip';

function CareerItem({ career }: { career: Career }) {
  const period = `${career.period.start} - ${career.period.end ?? '현재'}`;

  return (
    <article className="rounded-xl border border-white/10 bg-panel/80 p-5">
      <p className="font-mono text-[11px] text-live">{period}</p>
      <div className="mt-2 flex flex-wrap items-center gap-3">
        <h3 className="text-lg font-bold text-ink">{career.company}</h3>
        <Badge>{career.domain}</Badge>
      </div>
      <p className="mt-1 font-mono text-[11px] text-steel">{career.role}</p>
      <p className="mt-4 text-sm leading-7 text-steel">{career.summary}</p>
      <ul className="mt-4 space-y-2 text-xs leading-6 text-steel">
        {career.highlights.slice(0, 3).map((highlight) => (
          <li key={highlight}>- {highlight}</li>
        ))}
      </ul>
      <div className="mt-5 flex flex-wrap gap-2">
        {career.stack.slice(0, 5).map((item) => (
          <Chip key={item}>{item}</Chip>
        ))}
      </div>
    </article>
  );
}

export function CareerTimeline() {
  const [showOther, setShowOther] = useState(false);
  const careers = showOther ? [...CAREERS, ...OTHER_CAREERS] : CAREERS;

  return (
    <Section id="career" eyebrow="professional journey" title="보안과 안정성이 중요한 도메인에서 쌓은 모바일 경력">
      <div className="relative mx-auto max-w-4xl">
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-indigo/20 via-live/70 to-rose/20 md:left-1/2" />
        <div className="space-y-8">
          {careers.map((career, index) => (
            <div
              key={career.id}
              className={`relative pl-12 md:grid md:grid-cols-2 md:gap-12 md:pl-0 ${
                index % 2 === 0 ? '' : 'md:[&>article]:col-start-2'
              }`}
            >
              <span className="absolute left-[11px] top-7 h-3 w-3 rounded-full border border-paper bg-live md:left-[calc(50%-6px)]" />
              <CareerItem career={career} />
            </div>
          ))}
        </div>
      </div>
      <button
        type="button"
        onClick={() => setShowOther((value) => !value)}
        className="mt-10 rounded-lg border border-white/12 bg-white/[0.04] px-5 py-3 font-mono text-xs font-semibold text-ink transition hover:border-live hover:text-live"
      >
        {showOther ? '그 외 경력 접기' : `그 외 경력 ${OTHER_CAREERS.length}개사 보기`}
      </button>
    </Section>
  );
}
