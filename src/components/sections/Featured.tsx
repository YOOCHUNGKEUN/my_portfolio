import { PROJECTS } from '@/constants/projects';
import { Section } from '@/components/layout/Section';
import { Badge } from '@/components/ui/Badge';
import { Chip } from '@/components/ui/Chip';
import { ArchDiagram } from '@/components/ui/ArchDiagram';

const featured = PROJECTS.find((project) => project.featured)!;

function DashboardPreview() {
  return (
    <div className="relative min-h-[320px] overflow-hidden rounded-xl border border-white/10 bg-[#0A0E17] p-5 shadow-glow">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(66,232,212,0.22),transparent_40%),linear-gradient(135deg,rgba(168,183,255,0.12),transparent_42%)]" />
      <div className="relative rounded-lg border border-white/10 bg-[#121827]/90 p-4">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-live">
              Siksudaejang Control
            </p>
            <p className="mt-1 text-sm font-bold text-ink">QR Check-in Dashboard</p>
          </div>
          <div className="rounded-md border border-live/25 bg-live/10 px-2 py-1 font-mono text-[10px] text-live">
            TEST
          </div>
        </div>
        <div className="mt-4 grid grid-cols-[0.8fr_1.2fr] gap-4">
          <div className="space-y-3">
            {[72, 48, 86].map((width, index) => (
              <div key={width} className="rounded-md border border-white/10 bg-white/[0.04] p-3">
                <div className="h-2 rounded bg-white/12" style={{ width: `${width}%` }} />
                <div className="mt-3 h-6 rounded bg-live/10" />
                <p className="mt-2 font-mono text-[10px] text-steel">0{index + 1} · API FLOW</p>
              </div>
            ))}
          </div>
          <div className="rounded-lg border border-white/10 bg-[#080B12] p-4">
            <div className="flex h-32 items-end gap-2">
              {[38, 64, 44, 82, 58, 92, 70, 76].map((height) => (
                <div
                  key={height}
                  className="flex-1 rounded-t bg-gradient-to-t from-live/30 to-indigo/70"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-md bg-white/[0.05] p-3">
                <p className="font-mono text-[10px] text-steel">ROLE</p>
                <p className="mt-1 text-sm font-bold text-ink">Admin / Owner</p>
              </div>
              <div className="rounded-md bg-white/[0.05] p-3">
                <p className="font-mono text-[10px] text-steel">AUTH</p>
                <p className="mt-1 text-sm font-bold text-ink">QR Session</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

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
        <div className="space-y-5">
          <DashboardPreview />
          {featured.architecture && <ArchDiagram nodes={featured.architecture} />}
        </div>
      </div>
    </Section>
  );
}
