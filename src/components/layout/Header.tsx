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
    <header className="sticky top-0 z-50 border-b border-white/10 bg-paper/82 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 md:px-6">
        <a href="#top" className="font-mono text-sm font-bold text-ink">
          {PROFILE.name}
        </a>
        <div className="hidden items-center gap-6 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`border-b py-1 font-mono text-[11px] transition ${
                activeId === item.id
                  ? 'border-live text-ink'
                  : 'border-transparent text-steel hover:text-ink'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
