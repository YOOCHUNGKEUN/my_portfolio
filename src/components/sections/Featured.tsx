import { PROJECTS } from '@/constants/projects';
import { Section } from '@/components/layout/Section';
import { Badge } from '@/components/ui/Badge';
import { Chip } from '@/components/ui/Chip';
import { ArchDiagram } from '@/components/ui/ArchDiagram';

const featured = PROJECTS.find((project) => project.featured)!;

export function Featured() {
  return (
    <Section id="featured" eyebrow="case study" title="식수대장: 기업 급식 솔루션의 구조 설계">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="live">검증 중</Badge>
            <p className="font-mono text-xs text-steel">{featured.tagline}</p>
          </div>
          <p className="mt-6 text-lg leading-8 text-steel">{featured.description}</p>
          <ul className="mt-8 space-y-4">
            {featured.highlights.map((highlight) => (
              <li key={highlight} className="border-l-2 border-live pl-4 text-sm leading-7 text-steel">
                {highlight}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-2">
            {featured.stack.map((item) => (
              <Chip key={item}>{item}</Chip>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {featured.links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-white/12 px-4 py-2 font-mono text-xs font-semibold text-ink transition hover:border-live hover:text-live"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        {featured.architecture && <ArchDiagram nodes={featured.architecture} />}
      </div>
    </Section>
  );
}
