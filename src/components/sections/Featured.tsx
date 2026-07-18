import { PROJECTS } from '@/constants/projects';
import { Section } from '@/components/layout/Section';
import { Badge } from '@/components/ui/Badge';
import { Chip } from '@/components/ui/Chip';
import { ArchDiagram } from '@/components/ui/ArchDiagram';

const featured = PROJECTS.find((project) => project.featured)!;

export function Featured() {
  return (
    <Section id="featured" eyebrow="featured service" title={featured.name}>
      <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr]">
        <div className="rounded-lg border border-line bg-panel p-6 md:p-8">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="live">검증 중</Badge>
            <p className="font-mono text-xs text-steel">{featured.tagline}</p>
          </div>
          <p className="mt-6 text-lg leading-8 text-steel">{featured.description}</p>
          <ul className="mt-8 space-y-4">
            {featured.highlights.map((highlight) => (
              <li key={highlight} className="border-l-2 border-indigo pl-4 text-steel">
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
                className="rounded-lg border border-line px-4 py-2 font-mono text-xs font-semibold text-ink transition hover:border-indigo hover:text-indigo"
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
