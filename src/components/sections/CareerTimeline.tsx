import { useState } from 'react';
import { CAREERS, OTHER_CAREERS } from '@/constants/career';
import type { Career } from '@/types';
import { Section } from '@/components/layout/Section';
import { Badge } from '@/components/ui/Badge';
import { Chip } from '@/components/ui/Chip';

function CareerItem({ career }: { career: Career }) {
  const period = `${career.period.start} - ${career.period.end ?? '현재'}`;

  return (
    <article className="relative border-l border-line pl-6">
      <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-indigo" />
      <p className="font-mono text-xs text-steel">{period}</p>
      <div className="mt-2 flex flex-wrap items-center gap-3">
        <h3 className="text-xl font-bold text-ink">{career.company}</h3>
        <Badge>{career.domain}</Badge>
      </div>
      <p className="mt-1 font-mono text-xs text-steel">{career.role}</p>
      <p className="mt-4 leading-7 text-steel">{career.summary}</p>
      <ul className="mt-4 space-y-2 text-sm leading-6 text-steel">
        {career.highlights.map((highlight) => (
          <li key={highlight}>- {highlight}</li>
        ))}
      </ul>
      <div className="mt-5 flex flex-wrap gap-2">
        {career.stack.map((item) => (
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
    <Section id="career" eyebrow="career timeline" title="보안과 안정성이 중요한 도메인에서 쌓은 모바일 경력">
      <div className="space-y-10">
        {careers.map((career) => (
          <CareerItem key={career.id} career={career} />
        ))}
      </div>
      <button
        type="button"
        onClick={() => setShowOther((value) => !value)}
        className="mt-10 rounded-lg border border-line bg-panel px-5 py-3 font-mono text-xs font-semibold text-ink transition hover:border-indigo hover:text-indigo"
      >
        {showOther ? '그 외 경력 접기' : `그 외 경력 ${OTHER_CAREERS.length}개사 보기`}
      </button>
    </Section>
  );
}
