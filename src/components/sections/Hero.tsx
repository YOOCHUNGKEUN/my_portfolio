import { PROFILE } from '@/constants/profile';
import { LINKS } from '@/constants/routes';

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-5 pb-16 pt-24 md:px-6 md:pb-24 md:pt-32">
      <div className="max-w-5xl">
        <p className="inline-flex rounded-md border border-indigo/20 bg-indigo/10 px-3 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo">
          {PROFILE.title}
        </p>
        <h1 className="mt-6 max-w-4xl text-[42px] font-black leading-[0.98] text-ink md:text-7xl">
          모바일에서 서버까지,
          <br />
          <span className="text-mint">제품이 되는 흐름</span>을
          <br />
          설계하고 연결합니다.
        </h1>
        <p className="mt-7 max-w-3xl text-base leading-8 text-steel md:text-lg">
          {PROFILE.subline}
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href="#featured"
            className="inline-flex justify-center rounded-lg bg-indigo px-5 py-3 text-sm font-bold text-paper transition hover:bg-mint"
          >
            대표 서비스 구조 보기
          </a>
          <a
            href={LINKS.velog}
            target="_blank"
            rel="noreferrer"
            className="inline-flex justify-center rounded-lg border border-white/12 bg-white/[0.04] px-5 py-3 text-sm font-bold text-ink transition hover:border-mint hover:text-mint"
          >
            포트폴리오 시리즈
          </a>
        </div>
      </div>
    </section>
  );
}
