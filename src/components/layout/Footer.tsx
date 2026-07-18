import { PROFILE } from '@/constants/profile';
import { LINKS } from '@/constants/routes';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#090c14]">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-steel md:flex-row md:items-center md:justify-between md:px-6">
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
