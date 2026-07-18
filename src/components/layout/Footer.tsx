import { PROFILE } from '@/constants/profile';
import { LINKS } from '@/constants/routes';

export function Footer() {
  return (
    <footer className="border-t border-line bg-panel">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-steel md:flex-row md:items-center md:justify-between">
        <p className="font-mono">© {new Date().getFullYear()} {PROFILE.name}</p>
        <div className="flex gap-4 font-mono text-xs">
          <a className="hover:text-indigo" href={LINKS.email}>
            Email
          </a>
          <a className="hover:text-indigo" href={LINKS.velog} target="_blank" rel="noreferrer">
            Velog
          </a>
        </div>
      </div>
    </footer>
  );
}
