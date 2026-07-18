import { PROJECTS } from '@/constants/projects';
import { Section } from '@/components/layout/Section';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Chip } from '@/components/ui/Chip';

const projects = PROJECTS.filter((project) => !project.featured);

const statusText = {
  live: '검증 중',
  released: '출시',
  submitted: '심사 제출',
  completed: '완료',
};

export function Projects() {
  return (
    <Section id="projects" eyebrow="selected projects" title="앱을 넘어서 서비스 구조까지 다룬 프로젝트">
      <div className="grid gap-5 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card
            key={project.id}
            className={
              index === 0
                ? 'lg:col-span-2'
                : index === 1
                  ? 'bg-indigo/10'
                  : index === 2
                    ? 'bg-live/10'
                    : ''
            }
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="text-xl font-bold text-ink">{project.name}</h3>
                <p className="mt-2 font-mono text-xs text-steel">{project.tagline}</p>
              </div>
              <Badge variant={project.status === 'live' ? 'live' : 'default'}>
                {statusText[project.status]}
              </Badge>
            </div>
            <p className="mt-5 leading-7 text-steel">{project.description}</p>
            {index === 0 && (
              <div className="mt-6 overflow-hidden rounded-lg border border-white/10 bg-[#0A0E17] p-4">
                <div className="grid gap-3 md:grid-cols-[0.9fr_1.1fr]">
                  <div className="rounded-md bg-white/[0.04] p-4">
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-live">
                      mobile architecture
                    </p>
                    <div className="mt-5 space-y-3">
                      <div className="h-3 w-4/5 rounded bg-indigo/50" />
                      <div className="h-3 w-3/5 rounded bg-live/40" />
                      <div className="h-3 w-5/6 rounded bg-white/12" />
                    </div>
                  </div>
                  <div className="rounded-md bg-gradient-to-br from-indigo/25 via-white/[0.04] to-live/20 p-4">
                    <div className="grid h-32 grid-cols-5 items-end gap-2">
                      {[42, 70, 58, 88, 64].map((height) => (
                        <div
                          key={height}
                          className="rounded-t bg-mint/70"
                          style={{ height: `${height}%` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
            <ul className="mt-5 space-y-2 text-sm leading-6 text-steel">
              {project.highlights.map((highlight) => (
                <li key={highlight}>- {highlight}</li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <Chip key={item}>{item}</Chip>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {project.links.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-xs font-semibold text-live hover:text-ink"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
