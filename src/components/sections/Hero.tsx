import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { siteConfig } from '../../config/site';
import { useLanguage } from '../../context/LanguageContext';

export const Hero: React.FC = () => {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLElement | null>(null);
  const line1Ref = useRef<HTMLDivElement | null>(null);
  const line2Ref = useRef<HTMLDivElement | null>(null);
  const line3Ref = useRef<HTMLDivElement | null>(null);
  const laptopRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const l1 = line1Ref.current;
    const l2 = line2Ref.current;
    const l3 = line3Ref.current;
    const laptop = laptopRef.current;
    const container = containerRef.current;
    if (!container) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    // Subtle split-line text entrance
    const lines = [l1, l2, l3].filter(Boolean);
    if (lines.length > 0) {
      gsap.fromTo(
        lines,
        { y: 32, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.0,
          stagger: 0.1,
          ease: 'power3.out',
          delay: 0.08,
        }
      );
    }

    // Gentle fade-in for laptop composition
    if (laptop) {
      gsap.fromTo(
        laptop,
        { opacity: 0, scale: 0.985 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: 'power3.out',
          delay: 0.2,
        }
      );
    }
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-[calc(100vh-5.5rem)] min-h-[calc(100dvh-5.5rem)] flex flex-col justify-between border-b border-black/[0.08] overflow-hidden bg-[#fafaf8]"
    >
      {/* Desktop Laptop Visual Layer (Anchored to Right / Bottom like Reference) */}
      <div
        ref={laptopRef}
        aria-hidden="true"
        className="hidden lg:block absolute right-[-2%] xl:right-0 bottom-0 pointer-events-none select-none z-0 w-[57vw] xl:w-[55vw] 2xl:w-[53vw] max-w-[1300px] min-w-[750px] h-[92%] xl:h-[95%] overflow-hidden flex items-end justify-end"
      >
        <img
          src="/laptop-sobre-roca.png"
          alt=""
          className="w-full h-full object-cover object-left-bottom xl:object-contain xl:object-right-bottom pointer-events-none [mask-image:linear-gradient(to_right,transparent_0%,black_14%,black_100%)]"
          loading="eager"
          decoding="async"
        />
      </div>

      {/* Editorial Content Container */}
      <div className="max-w-[1400px] w-full mx-auto px-6 sm:px-12 flex-1 flex flex-col justify-center py-10 sm:py-14 lg:py-16 relative z-10">
        
        {/* Left Editorial Zone (Occupies ~46-48% on Desktop) */}
        <div className="w-full lg:w-[48%] xl:w-[46%] 2xl:w-[45%] flex flex-col justify-center min-w-0">
          <h1
            aria-label="Páginas web en Cali para liderar Google y multiplicar tus ventas — JP Studios"
            className="space-y-1 sm:space-y-2 lg:space-y-2 select-none m-0 font-normal tracking-[-0.03em] text-black"
          >
            {/* Line 1: Páginas web en Cali, */}
            <span className="block">
              <span
                ref={line1Ref}
                className="inline-block text-[2.5rem] sm:text-[3.5rem] md:text-[4.2rem] lg:text-[3.35vw] xl:text-[3.65vw] 2xl:text-[3.9rem] font-normal font-display leading-[1.03] cursor-default whitespace-nowrap"
                data-interactive
              >
                <span className="inline-block transition-transform duration-300 hover:scale-[1.01] origin-left">
                  {t.hero.headlineLine1}
                </span>
              </span>
            </span>

            {/* Line 2: para liderar Google */}
            <span className="block">
              <span
                ref={line2Ref}
                className="inline-block text-[2.5rem] sm:text-[3.5rem] md:text-[4.2rem] lg:text-[3.35vw] xl:text-[3.65vw] 2xl:text-[3.9rem] font-normal font-display leading-[1.03] cursor-default whitespace-nowrap"
                data-interactive
              >
                <span className="inline-block transition-transform duration-300 hover:scale-[1.01] origin-left">
                  {t.hero.headlineLine2}
                </span>
              </span>
            </span>

            {/* Line 3: y multiplicar tus ventas. */}
            <span className="block">
              <span
                ref={line3Ref}
                className="inline-block text-[2.5rem] sm:text-[3.5rem] md:text-[4.2rem] lg:text-[3.35vw] xl:text-[3.65vw] 2xl:text-[3.9rem] font-normal font-display leading-[1.03] cursor-default whitespace-nowrap"
                data-interactive
              >
                <span className="inline-block transition-transform duration-300 hover:scale-[1.01] origin-left">
                  {t.hero.headlineLine3}
                </span>
              </span>
            </span>
          </h1>

          {/* Subtitle & Value Proposition (Exact 500-550px width, breaks cleanly into 2 lines) */}
          <p className="text-sm sm:text-base md:text-[1.05rem] text-black/70 font-sans leading-relaxed max-w-[540px] pt-8 sm:pt-9 lg:pt-10">
            {t.hero.subtitle}
          </p>

          {/* Action & Author Signature Lockup */}
          <div className="pt-6 sm:pt-8 flex flex-wrap items-center gap-4 sm:gap-5">
            <a
              href={siteConfig.profile.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 sm:px-7 py-3 rounded-full bg-[#141517] hover:bg-black text-white text-xs sm:text-sm font-sans font-medium flex items-center gap-2 shadow-xs transition-all duration-200 active:scale-95 group"
              data-interactive
            >
              <span>{t.intro.startOnWhatsApp}</span>
              <span className="text-xs transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                ↗
              </span>
            </a>

            <div className="text-xs sm:text-sm font-sans text-black/55 font-medium flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-black/30" />
              <span>{t.hero.signature}</span>
            </div>
          </div>
        </div>

        {/* Mobile / Tablet Image Layer (Appears sequentially after CTA before bottom microcopy) */}
        <div className="block lg:hidden w-full pt-8 sm:pt-10 overflow-hidden">
          <div className="relative w-full max-w-lg mx-auto aspect-[16/11] sm:aspect-[16/10] overflow-hidden rounded-xl shadow-xs">
            <img
              src="/laptop-sobre-roca.png"
              alt="Páginas web en Cali diseñadas para liderar Google — JP Studios"
              className="w-full h-full object-cover object-center"
              loading="eager"
            />
          </div>
        </div>

      </div>

      {/* Clean Bottom Orientation / Micro-information Bar */}
      <div className="max-w-[1400px] w-full mx-auto px-6 sm:px-12 pb-8 sm:pb-9 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 sm:gap-4 text-xs font-sans select-none relative z-20">
        <div className="text-black/60 font-normal flex items-center gap-2">
          <span>{siteConfig.profile.location}</span>
          <span className="text-black/30">·</span>
          <span>{t.hero.studioType}</span>
        </div>
        <div className="text-black/70 lg:text-white/95 font-medium tracking-tight">
          {t.hero.role}
        </div>
      </div>
    </section>
  );
};

export default Hero;
