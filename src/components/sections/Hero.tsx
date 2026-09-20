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
  const portraitRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const l1 = line1Ref.current;
    const l2 = line2Ref.current;
    const l3 = line3Ref.current;
    const portrait = portraitRef.current;
    const container = containerRef.current;
    if (!l1 || !l2 || !l3 || !container) return;

    // Split-line text entrance
    const lines = [l1, l2, l3];
    gsap.fromTo(
      lines,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.1,
        stagger: 0.12,
        ease: 'power4.out',
        delay: 0.1,
      }
    );

    if (portrait) {
      gsap.fromTo(
        portrait,
        { y: 50, opacity: 0, scale: 0.96 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: 'power4.out',
          delay: 0.25,
        }
      );
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || 'ontouchstart' in window) {
      return;
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

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-[calc(100vh-6.5rem)] min-h-[calc(100dvh-6.5rem)] flex flex-col justify-between border-b border-black/[0.08] overflow-hidden"
    >
      {/* Immersive Right-Bleed MacBook Device & Volcanic Rock Specimen */}
      <div
        ref={portraitRef}
        className="absolute right-0 top-0 bottom-0 w-full sm:w-[85%] md:w-[75%] lg:w-[64%] xl:w-[58%] 2xl:w-[54%] pointer-events-none select-none overflow-hidden z-0"
        aria-hidden="true"
      >
        <img
          src="/hero-device.webp"
          alt="Diseño y desarrollo web en Cali — JP Studios en MacBook"
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover object-[right_bottom] [mask-image:linear-gradient(to_right,transparent_0%,rgba(0,0,0,0.05)_10%,black_28%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,rgba(0,0,0,0.05)_10%,black_28%)]"
        />
      </div>

      {/* Editorial Content Container */}
      <div className="relative z-10 max-w-[1400px] w-full mx-auto px-6 sm:px-12 flex-1 flex flex-col justify-center py-8 sm:py-12 lg:py-14">
        
        {/* Left Column: Monumental Value & Commercial Proposition */}
        <div className="w-full max-w-xl lg:max-w-2xl xl:max-w-3xl flex flex-col justify-center min-w-0">
          <h1 
            aria-label="Páginas web en Cali para liderar Google y multiplicar tus ventas — JP Studios"
            className="space-y-1 sm:space-y-2 lg:space-y-2.5 select-none m-0 font-medium tracking-[-0.03em] text-black"
          >
            {/* Line 1: Páginas web en Cali, */}
            <span className="block">
              <span
                ref={line1Ref}
                className="inline-block text-3xl sm:text-5xl md:text-6xl lg:text-[3.5vw] xl:text-[3.8vw] 2xl:text-[3.85rem] font-medium font-display leading-[1.04] sm:leading-[1.06] cursor-default will-change-transform whitespace-nowrap"
                data-interactive
              >
                <span className="inline-block transition-transform duration-300 hover:scale-[1.01] origin-left">
                  {t.hero.headlineLine1}
                </span>
              </span>
            </span>

            {/* Line 2 with asymmetric indent: para liderar Google */}
            <span className="block pl-[1.85em]">
              <span
                ref={line2Ref}
                className="inline-block text-3xl sm:text-5xl md:text-6xl lg:text-[3.5vw] xl:text-[3.8vw] 2xl:text-[3.85rem] font-medium font-display leading-[1.04] sm:leading-[1.06] cursor-default will-change-transform whitespace-nowrap"
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
                className="inline-block text-3xl sm:text-5xl md:text-6xl lg:text-[3.5vw] xl:text-[3.8vw] 2xl:text-[3.85rem] font-medium font-display leading-[1.04] sm:leading-[1.06] cursor-default will-change-transform whitespace-nowrap"
                data-interactive
              >
                <span className="inline-block transition-transform duration-300 hover:scale-[1.01] origin-left">
                  {t.hero.headlineLine3}
                </span>
              </span>
            </span>
          </h1>

          {/* Subtitle & Value Proposition */}
          <p className="text-sm sm:text-base md:text-[1.05rem] text-black/75 font-sans leading-relaxed max-w-md pt-8 sm:pt-10">
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
              <span className="w-1.5 h-1.5 rounded-full bg-black/35" />
              <span>{t.hero.signature}</span>
            </div>
          </div>
        </div>

      </div>

      {/* Clean Bottom Orientation Bar */}
      <div className="relative z-10 max-w-[1400px] w-full mx-auto px-6 sm:px-12 pb-8 sm:pb-10 flex items-center justify-between text-xs font-sans select-none">
        <div className="flex items-center gap-2 text-black/55">
          <span>{siteConfig.profile.location}</span>
          <span className="text-black/30">•</span>
          <span>{t.hero.studioType}</span>
        </div>
        <div className="font-sans text-xs text-black/55 lg:text-white/80 transition-colors drop-shadow-xs">
          {t.hero.role}
        </div>
      </div>
    </section>
  );
};

export default Hero;
