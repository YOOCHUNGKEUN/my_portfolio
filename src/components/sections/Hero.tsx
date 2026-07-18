import { PROFILE } from '@/constants/profile';
import { LINKS } from '@/constants/routes';

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-6 pb-16 pt-20 md:pb-24 md:pt-28">
      <div className="max-w-4xl">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-indigo">
          {PROFILE.title}
        </p>
        <h1 className="mt-6 text-4xl font-bold leading-tight text-ink md:text-6xl">
          {PROFILE.headline}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-steel md:text-xl">{PROFILE.subline}</p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href="#featured"
            className="inline-flex justify-center rounded-lg bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo"
          >
            운영 중인 서비스 보기
          </a>
          <a
            href={LINKS.velog}
            target="_blank"
            rel="noreferrer"
            className="inline-flex justify-center rounded-lg border border-line bg-panel px-5 py-3 text-sm font-semibold text-ink transition hover:border-indigo hover:text-indigo"
          >
            포트폴리오 시리즈
          </a>
        </div>
      </div>
    </section>
  );
}
