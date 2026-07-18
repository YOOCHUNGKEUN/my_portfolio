import { PROJECTS } from '@/constants/projects';
import { Section } from '@/components/layout/Section';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Chip } from '@/components/ui/Chip';

const projects = PROJECTS.filter((project) => !project.featured);

const statusText = {
  live: '운영 중',
  released: '출시',
  submitted: '심사 제출',
  completed: '완료',
};

export function Projects() {
  return (
    <Section id="projects" eyebrow="selected projects" title="앱을 넘어서 서비스 구조까지 다룬 프로젝트">
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.id}>
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
                  className="font-mono text-xs font-semibold text-indigo hover:text-ink"
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
