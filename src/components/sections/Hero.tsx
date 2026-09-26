import React, { useEffect, useRef } from 'react';
import { siteConfig } from '../../config/site';
import { useLanguage } from '../../context/LanguageContext';
import { highlightBrandKeywords } from '../../utils/textHighlight';
import { trackWhatsAppClick } from '../../utils/analytics';
import { HeroVisualStage } from './hero/HeroVisualStage';

export const Hero: React.FC = () => {
  const { t, language } = useLanguage();
  const containerRef = useRef<HTMLElement | null>(null);
  const line1Ref = useRef<HTMLDivElement | null>(null);
  const line2Ref = useRef<HTMLDivElement | null>(null);
  const line3Ref = useRef<HTMLDivElement | null>(null);
  const portraitRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const l1 = line1Ref.current;
    const l2 = line2Ref.current;
    const l3 = line3Ref.current;
    const portrait = portraitRef.current;
    const container = containerRef.current;
    if (!l1 || !l2 || !l3 || !container) return;

    const isMobileOrReduced =
      window.innerWidth < 1024 ||
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isMobileOrReduced) {
      // Instant static paint on mobile: zero layout latency, immediate sub-second LCP
      return;
    }

    let isCleanedUp = false;
    let removeListeners: (() => void) | undefined;

    // Load GSAP dynamically only on desktop to keep mobile initial bundle featherlight
    import('gsap').then(({ default: gsap }) => {
      if (isCleanedUp) return;

      // Smooth subtle rise for desktop screens
      const lines = [l1, l2, l3];
      gsap.from(lines, {
        y: 24,
        duration: 0.8,
        stagger: 0.08,
        ease: 'power3.out',
      });

      if (portrait) {
        gsap.from(portrait, {
          y: 30,
          duration: 0.9,
          ease: 'power3.out',
        });
      }

      const x1 = gsap.quickTo(l1, 'x', { duration: 0.6, ease: 'power2.out' });
      const y1 = gsap.quickTo(l1, 'y', { duration: 0.6, ease: 'power2.out' });

      const x2 = gsap.quickTo(l2, 'x', { duration: 0.6, ease: 'power2.out' });
      const y2 = gsap.quickTo(l2, 'y', { duration: 0.6, ease: 'power2.out' });

      const x3 = gsap.quickTo(l3, 'x', { duration: 0.6, ease: 'power2.out' });
      const y3 = gsap.quickTo(l3, 'y', { duration: 0.6, ease: 'power2.out' });

      const xPhoto = portrait ? gsap.quickTo(portrait, 'x', { duration: 0.8, ease: 'power2.out' }) : null;
      const yPhoto = portrait ? gsap.quickTo(portrait, 'y', { duration: 0.8, ease: 'power2.out' }) : null;
      const rotY = portrait ? gsap.quickTo(portrait, 'rotationY', { duration: 0.8, ease: 'power2.out' }) : null;
      const rotX = portrait ? gsap.quickTo(portrait, 'rotationX', { duration: 0.8, ease: 'power2.out' }) : null;

      const handleMouseMove = (e: MouseEvent) => {
        const { innerWidth, innerHeight } = window;
        const normX = (e.clientX / innerWidth - 0.5) * 2;
        const normY = (e.clientY / innerHeight - 0.5) * 2;

        x1(normX * 12);
        y1(normY * 6);

        x2(normX * 22);
        y2(normY * 11);

        x3(normX * 34);
        y3(normY * 16);

        if (xPhoto && yPhoto && rotY && rotX) {
          xPhoto(normX * -16);
          yPhoto(normY * -10);
          rotY(normX * 6);
          rotX(normY * -5);
        }
      };

      const handleMouseLeave = () => {
        x1(0);
        y1(0);
        x2(0);
        y2(0);
        x3(0);
        y3(0);
        if (xPhoto && yPhoto && rotY && rotX) {
          xPhoto(0);
          yPhoto(0);
          rotY(0);
          rotX(0);
        }
      };

      window.addEventListener('mousemove', handleMouseMove, { passive: true });
      container.addEventListener('mouseleave', handleMouseLeave);

      removeListeners = () => {
        window.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
      };
    });

    return () => {
      isCleanedUp = true;
      if (removeListeners) removeListeners();
    };
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-[calc(100dvh-4.25rem)] lg:min-h-[calc(100dvh-6.5rem)] flex flex-col justify-between overflow-hidden bg-[#fafaf8]"
    >
      {/* Split Layout: Mobile is linear editorial stack, Desktop is 2-col Asymmetric */}
      <div className="w-full max-w-[1760px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 2xl:px-20 flex-1 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 sm:gap-8 pt-5 sm:pt-8 lg:pt-4 lg:pb-8 relative z-10">
        
        {/* Left Typography + Action Block (Strictly Preserved Text Size & 3-Line Structure) */}
        <div className="w-full lg:w-auto lg:max-w-[560px] xl:max-w-[620px] 2xl:max-w-[680px] flex-shrink-0 flex flex-col items-start text-left justify-center min-w-0 pr-0 lg:pr-6 relative z-10">
          <h1 
            aria-label={`${t.hero.headlineLine1.trim()} ${t.hero.headlineLine2.trim()} ${t.hero.headlineLine3.trim()} — JP Studios`}
            className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[3.1vw] xl:text-[3.5vw] font-normal tracking-tight text-black leading-[1.08] select-none m-0 text-left max-w-none"
          >
            {/* Line 1 - Strong Anchor Keyword */}
            <span ref={line1Ref} className="block will-change-transform lg:whitespace-nowrap">
              <span className="inline-block transition-transform duration-300 hover:scale-[1.01] origin-left">
                {highlightBrandKeywords(t.hero.headlineLine1.trim())}
              </span>
            </span>{' '}

            {/* Line 2 - Benefit */}
            <span ref={line2Ref} className="block will-change-transform lg:whitespace-nowrap">
              <span className="inline-block transition-transform duration-300 hover:scale-[1.01] origin-left">
                {highlightBrandKeywords(t.hero.headlineLine2.trim())}
              </span>
            </span>{' '}

            {/* Line 3 - Conversion Outcome */}
            <span ref={line3Ref} className="block will-change-transform lg:whitespace-nowrap">
              <span className="inline-block transition-transform duration-300 hover:scale-[1.01] origin-left">
                {highlightBrandKeywords(t.hero.headlineLine3.trim())}
              </span>
            </span>
          </h1>

          {/* Subtitle & Value Proposition */}
          <p className="text-base sm:text-lg lg:text-[1.125rem] text-black/75 font-sans leading-relaxed text-left max-w-xl lg:max-w-2xl pt-5 sm:pt-6 lg:pt-7">
            {t.hero.subtitle}
          </p>

          {/* Action Buttons: Primary WhatsApp + Secondary Smooth Scroll */}
          <div className="pt-5 sm:pt-6 lg:pt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full">
            <a
              href={siteConfig.profile.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick({ location: 'hero', label: 'Hero Primary WhatsApp Button' })}
              className="w-full sm:w-auto px-7 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-[#141517] hover:bg-black text-white text-sm font-medium flex items-center justify-between sm:justify-start gap-3 shadow-sm hover:shadow-md transition-all duration-300 active:scale-[0.98] group"
              data-interactive
            >
              <span>{language === 'es' ? 'Cotizar por WhatsApp' : 'Get Quote on WhatsApp'}</span>
              <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300 font-sans text-xs text-white/80 group-hover:text-white">
                ↗
              </span>
            </a>

            <a
              href="#services"
              className="w-full sm:w-auto px-6 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-black/[0.04] hover:bg-black/[0.08] text-black/80 hover:text-black text-sm font-medium flex items-center justify-between sm:justify-start gap-2 transition-all duration-300 active:scale-[0.98] border border-black/[0.06]"
              data-interactive
            >
              <span>{language === 'es' ? 'Explorar Servicios' : 'Explore Services'}</span>
              <span className="font-sans text-xs text-black/50">↓</span>
            </a>
          </div>
        </div>

        {/* Right Desktop Visual Stage (HeroVisualStage) - Substantially Enlarged */}
        <div
          ref={portraitRef}
          className="hidden lg:flex flex-1 items-center justify-end relative z-10 pointer-events-auto min-w-0"
          style={{ perspective: 1200 }}
        >
          <HeroVisualStage className="w-full max-w-[880px] xl:max-w-[1020px] 2xl:max-w-[1140px]" />
        </div>

      </div>

      {/* Mobile Photograph View (Visible on < lg) */}
      <div className="w-full relative mt-4 overflow-hidden lg:hidden z-0 px-2 sm:px-6">
        <HeroVisualStage />

        {/* Mobile Orientation Footer Matching Mockup (Cali, Colombia —— Estudio Independiente) */}
        <div className="flex items-center justify-between w-full px-4 pt-3 pb-5 text-xs font-sans text-black/75 select-none">
          <span>{siteConfig.profile.location}</span>
          <span className="h-px bg-black/20 flex-1 max-w-[120px] mx-4" aria-hidden="true" />
          <span>{t.hero.studioType}</span>
        </div>
      </div>

      {/* Clean Bottom Orientation Bar (Desktop Only) */}
      <div className="hidden lg:flex w-full max-w-[1760px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 2xl:px-20 pb-8 sm:pb-10 items-center justify-start text-xs font-sans select-none relative z-30">
        <div className="flex items-center gap-2 text-black/75">
          <span>{siteConfig.profile.location}</span>
          <span className="text-black/50">•</span>
          <span>{t.hero.studioType}</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
