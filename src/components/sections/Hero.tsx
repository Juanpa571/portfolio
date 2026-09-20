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
      {/* Asymmetric Split Layout with Open Right Column */}
      <div className="max-w-[1400px] w-full mx-auto px-6 sm:px-12 flex-1 flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10 lg:gap-14 py-8 sm:py-12 lg:py-16">
        
        {/* Left: Monumental Business & Ranking Proposition (Option 1) */}
        <div className="w-full lg:max-w-[68%] flex flex-col justify-center min-w-0 pr-0 lg:pr-6">
          <h1 
            aria-label="Páginas web en Cali para liderar Google y multiplicar tus ventas — JP Studios"
            className="space-y-2 sm:space-y-3 lg:space-y-4 select-none m-0 font-normal"
          >
            {/* Line 1 */}
            <span className="block">
              <span
                ref={line1Ref}
                className="inline-block text-4xl sm:text-6xl md:text-7xl lg:text-[4.6vw] xl:text-[5vw] font-normal font-display tracking-[-0.02em] text-black leading-[1.04] sm:leading-[1.07] cursor-default will-change-transform"
                data-interactive
              >
                <span className="inline-block transition-transform duration-300 hover:scale-[1.01] origin-left">
                  {t.hero.headlineLine1}
                </span>
              </span>
            </span>

            {/* Line 2 with intentional asymmetrical indent */}
            <span className="block pl-4 sm:pl-8 lg:pl-12 xl:pl-16">
              <span
                ref={line2Ref}
                className="inline-block text-4xl sm:text-6xl md:text-7xl lg:text-[4.6vw] xl:text-[5vw] font-normal font-display tracking-[-0.02em] text-black leading-[1.04] sm:leading-[1.07] cursor-default will-change-transform"
                data-interactive
              >
                <span className="inline-block transition-transform duration-300 hover:scale-[1.01] origin-left">
                  {t.hero.headlineLine2}
                </span>
              </span>
            </span>

            {/* Line 3: Google impact phrase */}
            <span className="block">
              <span
                ref={line3Ref}
                className="inline-block text-4xl sm:text-6xl md:text-7xl lg:text-[4.6vw] xl:text-[5vw] font-normal font-display tracking-[-0.02em] text-black leading-[1.04] sm:leading-[1.07] cursor-default will-change-transform"
                data-interactive
              >
                <span className="inline-block transition-transform duration-300 hover:scale-[1.01] origin-left">
                  {t.hero.headlineLine3}
                </span>
              </span>
            </span>
          </h1>

          {/* Subtitle & Value Proposition */}
          <p className="text-base sm:text-lg lg:text-xl text-black/75 font-sans leading-relaxed max-w-2xl pt-6 sm:pt-8">
            {t.hero.subtitle}
          </p>

          {/* Action & Author Signature Lockup */}
          <div className="pt-8 sm:pt-10 flex flex-wrap items-center gap-4 sm:gap-6">
            <a
              href={siteConfig.profile.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 sm:px-7 py-3.5 rounded-full bg-[#141517] hover:bg-black text-white text-xs sm:text-sm font-sans font-medium flex items-center gap-2.5 shadow-xs transition-all duration-200 active:scale-95 group"
              data-interactive
            >
              <span>{t.intro.startOnWhatsApp}</span>
              <span className="text-xs transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                ↗
              </span>
            </a>

            <div className="text-xs sm:text-sm font-sans text-black/55 font-medium flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-black/25" />
              <span>{t.hero.signature}</span>
            </div>
          </div>
        </div>

        {/* Right: Reserved Clean Open Space (Awaiting user concept) */}
        <div className="hidden lg:block lg:w-[32%]" aria-hidden="true" />

      </div>

      {/* Clean Bottom Orientation Bar */}
      <div className="max-w-[1400px] w-full mx-auto px-6 sm:px-12 pb-8 sm:pb-10 flex items-center justify-between text-xs font-sans text-black/70 select-none">
        <div className="flex items-center gap-2">
          <span>{siteConfig.profile.location}</span>
          <span className="text-black/30">•</span>
          <span className="text-black/70">{t.hero.studioType}</span>
        </div>
        <div className="text-black/70 font-sans text-xs">
          {t.hero.role}
        </div>
      </div>
    </section>
  );
};

export default Hero;
