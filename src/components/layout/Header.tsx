import { LINKS } from '@/constants/routes';
import { PROFILE } from '@/constants/profile';
import { useActiveSection } from '@/hooks/useActiveSection';

const NAV_ITEMS = [
  { id: 'featured', label: 'Service' },
  { id: 'career', label: 'Career' },
  { id: 'projects', label: 'Projects' },
  { id: 'ai', label: 'AI' },
  { id: 'contact', label: 'Contact' },
];

export function Header() {
  const activeId = useActiveSection(NAV_ITEMS.map((item) => item.id));

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-paper/88 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <a href="#top" className="font-mono text-sm font-bold text-ink">
          {PROFILE.name}
        </a>
        <div className="hidden items-center gap-5 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`font-mono text-xs transition ${
                activeId === item.id ? 'text-indigo' : 'text-steel hover:text-ink'
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href={LINKS.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-ink px-4 py-2 font-mono text-xs font-semibold text-ink transition hover:bg-ink hover:text-white"
          >
            GitHub
          </a>
        </div>
      </nav>
    </header>
  );
}
