import { HERO_CONTENT } from "../constants/data";

export default function Hero() {
  return (
    <section id="hero" className="py-12 md:py-20 flex flex-col justify-center items-start gap-8 min-h-[calc(100vh-80px)]">
      <div className="brutalist-border bg-background dark:bg-[#181818] p-8 md:p-12 w-full brutalist-shadow relative overflow-hidden">
        {/* Section Number Watermark */}
        <div
          className="absolute top-0 right-0 p-4 font-label font-bold text-6xl opacity-10 select-none"
          aria-hidden="true"
        >
          {HERO_CONTENT.sectionNumber}
        </div>

        {/* Headline */}
        <h1 className="font-headline font-black text-5xl md:text-7xl lg:text-8xl leading-[1.1] uppercase tracking-tighter mb-6 max-w-5xl">
          {HERO_CONTENT.headlinePre}{" "}
          <span className="bg-primary-container text-black px-2">
            {HERO_CONTENT.headlineHighlight}
          </span>
          <br className="hidden md:block" />
          {" "}{HERO_CONTENT.headlinePost}
        </h1>

        {/* Description */}
        <p className="font-body text-lg md:text-xl max-w-4xl text-on-surface-variant dark:text-gray-400 mb-10 leading-relaxed">
          {HERO_CONTENT.description}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-6">
          <a
            href="#internal-projects"
            className="bg-primary-container text-black font-headline font-bold text-xl uppercase px-10 py-5 brutalist-border brutalist-shadow brutalist-shadow-hover brutalist-shadow-active transition-all flex items-center gap-3"
          >
            {HERO_CONTENT.ctaPrimary}
            <span className="material-symbols-outlined" aria-hidden="true">
              arrow_forward
            </span>
          </a>
          <a
            href="#contact"
            className="bg-background dark:bg-[#181818] text-black dark:text-white font-headline font-bold text-xl uppercase px-10 py-5 brutalist-border border-secondary dark:!border-[#fff] brutalist-shadow brutalist-shadow-hover transition-all"
          >
            {HERO_CONTENT.ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  );
}
