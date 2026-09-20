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
      className="relative min-h-[calc(100vh-6.5rem)] min-h-[calc(100dvh-6.5rem)] flex flex-col justify-between overflow-hidden"
    >
      {/* Asymmetric Split Layout: Left Typography + Right Laptop on Rock */}
      <div className="w-full max-w-[1760px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 2xl:px-20 flex-1 flex flex-col lg:flex-row items-center justify-between gap-8 py-6 sm:py-10 lg:py-12 relative z-10">
        
        {/* Left: Monumental Typographic Statement */}
        <div className="w-full lg:w-[56%] xl:w-[54%] 2xl:w-[52%] flex flex-col justify-center min-w-0 pr-0 lg:pr-6 relative z-10">
          <h1 
            aria-label={`${t.hero.headlineLine1} ${t.hero.headlineLine2} ${t.hero.headlineLine3} — JP Studios`}
            className="space-y-2.5 sm:space-y-3.5 lg:space-y-4 select-none m-0 font-normal"
          >
            {/* Line 1 */}
            <span className="block">
              <span
                ref={line1Ref}
                className="inline-block text-4xl sm:text-6xl md:text-7xl lg:text-[3.2vw] xl:text-[3.5vw] 2xl:text-[3.8vw] font-normal font-display tracking-[-0.025em] text-[#111111] leading-[1.08] sm:leading-[1.10] lg:whitespace-nowrap cursor-default will-change-transform"
                data-interactive
              >
                <span className="inline-block transition-transform duration-300 hover:scale-[1.01] origin-left">
                  {t.hero.headlineLine1}
                </span>
              </span>
            </span>

            {/* Line 2: Flush left matching reference */}
            <span className="block">
              <span
                ref={line2Ref}
                className="inline-block text-4xl sm:text-6xl md:text-7xl lg:text-[3.2vw] xl:text-[3.5vw] 2xl:text-[3.8vw] font-normal font-display tracking-[-0.025em] text-[#111111] leading-[1.08] sm:leading-[1.10] lg:whitespace-nowrap cursor-default will-change-transform"
                data-interactive
              >
                <span className="inline-block transition-transform duration-300 hover:scale-[1.01] origin-left">
                  {t.hero.headlineLine2}
                </span>
              </span>
            </span>

            {/* Line 3 */}
            <span className="block">
              <span
                ref={line3Ref}
                className="inline-block text-4xl sm:text-6xl md:text-7xl lg:text-[3.2vw] xl:text-[3.5vw] 2xl:text-[3.8vw] font-normal font-display tracking-[-0.025em] text-[#111111] leading-[1.08] sm:leading-[1.10] lg:whitespace-nowrap cursor-default will-change-transform"
                data-interactive
              >
                <span className="inline-block transition-transform duration-300 hover:scale-[1.01] origin-left">
                  {t.hero.headlineLine3}
                </span>
              </span>
            </span>
          </h1>

          {/* Subtitle & Value Proposition */}
          <p className="text-sm sm:text-base lg:text-[1.1rem] text-black/60 font-sans leading-relaxed max-w-xl pt-6 sm:pt-8">
            {t.hero.subtitle}
          </p>

          {/* Action & Author Signature Lockup */}
          <div className="pt-7 sm:pt-9 flex flex-wrap items-center gap-4 sm:gap-6">
            <a
              href={siteConfig.profile.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-full bg-[#141517] hover:bg-black text-white text-xs sm:text-sm font-sans font-medium flex items-center gap-2 shadow-xs transition-all duration-200 active:scale-95 group"
              data-interactive
            >
              <span>{t.intro.startOnWhatsApp}</span>
              <span className="text-xs transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                ↗
              </span>
            </a>

            <div className="text-xs sm:text-sm font-sans text-black/55 font-medium flex items-center gap-2">
              <span className="text-black/30">•</span>
              <span>{t.hero.signature}</span>
            </div>
          </div>

          {/* Mobile Photograph View (Visible on < lg) */}
          <div className="w-full relative mt-8 sm:mt-10 overflow-hidden lg:hidden flex justify-center z-0">
            <div className="relative w-full max-w-[540px] rounded-2xl overflow-hidden shadow-sm">
              <picture className="w-full">
                <source type="image/webp" srcSet="/laptop-sobre-roca.webp" />
                <img
                  src="/laptop-sobre-roca.png"
                  alt="JP Studios — Páginas Web Cali"
                  className="w-full h-auto object-cover"
                  width={1536}
                  height={1024}
                  loading="eager"
                  decoding="async"
                />
              </picture>
            </div>
          </div>
        </div>

        {/* Right Desktop Spacer Column (Content rendered in absolute layer below) */}
        <div className="hidden lg:block lg:w-[44%] xl:w-[46%] 2xl:w-[48%]" aria-hidden="true" />

      </div>

      {/* Right: Desktop Natural Photographic Layer (Laptop on Rock with Soft Edge Feathers) */}
      <div 
        ref={portraitRef}
        className="hidden lg:flex absolute right-0 bottom-0 top-0 w-[56%] xl:w-[54%] 2xl:w-[52%] pointer-events-none z-0 items-end justify-end overflow-hidden select-none"
      >
        <div className="relative w-full h-full flex items-end justify-end">
          <picture className="w-full h-full flex items-end justify-end">
            <source type="image/webp" srcSet="/laptop-sobre-roca.webp" />
            <img
              src="/laptop-sobre-roca.png"
              alt="JP Studios — Páginas Web Cali"
              className="w-full h-full object-cover object-[right_bottom] [mask-image:linear-gradient(to_right,transparent_0%,rgba(0,0,0,0.15)_3%,rgba(0,0,0,0.75)_8%,black_14%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,rgba(0,0,0,0.15)_3%,rgba(0,0,0,0.75)_8%,black_14%)] select-none"
              width={1536}
              height={1024}
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </picture>

          {/* Top subtle feather where image meets the sticky bar */}
          <div className="absolute inset-x-0 top-0 h-14 sm:h-18 bg-gradient-to-b from-[#fafaf8] via-[#fafaf8]/50 to-transparent pointer-events-none z-10" />
        </div>
      </div>

      {/* Clean Bottom Orientation Bar */}
      <div className="w-full max-w-[1760px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 2xl:px-20 pb-8 sm:pb-10 flex items-center justify-between text-xs font-sans select-none relative z-30">
        <div className="flex items-center gap-2 text-black/60">
          <span>{siteConfig.profile.location}</span>
          <span className="text-black/30">•</span>
          <span>{t.hero.studioType}</span>
        </div>
        <div className="text-black/60 lg:text-white/85 font-sans text-xs font-medium transition-colors duration-300">
          {t.hero.role}
        </div>
      </div>
    </section>
  );
};

export default Hero;
