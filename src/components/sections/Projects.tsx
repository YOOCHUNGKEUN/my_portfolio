import { useEffect, useState } from 'react';
import { PROJECTS } from '@/constants/projects';
import { Section } from '@/components/layout/Section';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Chip } from '@/components/ui/Chip';
import type { Project } from '@/types';

const projects = PROJECTS.filter((project) => !project.featured);

const statusText = {
  live: '검증 중',
  released: '출시',
  submitted: '심사 제출',
  completed: '완료',
};

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (!selectedProject) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedProject(null);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <Section id="projects" eyebrow="selected projects" title="앱을 넘어서 서비스 구조까지 다룬 프로젝트">
      <div className="grid gap-5 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card
            key={project.id}
            className={index === 0 ? 'lg:col-span-2' : ''}
          >
            {project.screenshot && (
              <button
                type="button"
                onClick={() => setSelectedProject(project)}
                className="group mb-6 block w-full cursor-zoom-in overflow-hidden rounded-lg border border-white/10 bg-[#080B12] text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-live"
                aria-label={`${project.name} 스크린샷 크게 보기`}
              >
                <img
                  src={`${import.meta.env.BASE_URL}${project.screenshot.src}`}
                  alt={project.screenshot.alt}
                  className="h-56 w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <span className="block border-t border-white/10 bg-white/[0.03] px-3 py-2 font-mono text-[10px] uppercase tracking-[0.14em] text-steel">
                  Click to enlarge
                </span>
              </button>
            )}
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
            {index === 0 && !project.screenshot && (
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
      {selectedProject?.screenshot && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/82 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedProject.name} 스크린샷 확대 보기`}
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="max-h-[92vh] w-full max-w-6xl overflow-hidden rounded-2xl border border-white/12 bg-panel shadow-lift"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-3">
              <div>
                <p className="text-sm font-bold text-ink">{selectedProject.name}</p>
                <p className="mt-1 font-mono text-[11px] text-steel">
                  {selectedProject.screenshot.alt}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="rounded-lg border border-white/12 px-3 py-2 font-mono text-xs font-semibold text-ink transition hover:border-live hover:text-live"
              >
                Close
              </button>
            </div>
            <div className="max-h-[82vh] overflow-auto bg-[#080B12] p-3">
              <img
                src={`${import.meta.env.BASE_URL}${selectedProject.screenshot.src}`}
                alt={selectedProject.screenshot.alt}
                className="mx-auto h-auto w-full rounded-lg object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </Section>
  );
}
