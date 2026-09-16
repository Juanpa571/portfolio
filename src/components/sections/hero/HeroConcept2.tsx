import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { siteConfig } from '../../../config/site';
import { useLanguage } from '../../../context/LanguageContext';

export const HeroConcept2: React.FC = () => {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLElement | null>(null);
  const titleGroupRef = useRef<HTMLDivElement | null>(null);
  const line1Ref = useRef<HTMLSpanElement | null>(null);
  const line2Ref = useRef<HTMLSpanElement | null>(null);
  const line3Ref = useRef<HTMLSpanElement | null>(null);
  const archPortraitRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const l1 = line1Ref.current;
    const l2 = line2Ref.current;
    const l3 = line3Ref.current;
    const portrait = archPortraitRef.current;
    const container = containerRef.current;
    if (!l1 || !l2 || !l3 || !portrait || !container) return;

    // Entrance timeline
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

    tl.fromTo(
      portrait,
      { y: 70, opacity: 0, scale: 0.94 },
      { y: 0, opacity: 1, scale: 1, duration: 1.3, delay: 0.1 }
    ).fromTo(
      [l1, l2, l3],
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.1, stagger: 0.12 },
      '-=0.9'
    );

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || 'ontouchstart' in window) {
      return;
    }

    // Parallax QuickTo
    const xText = gsap.quickTo(titleGroupRef.current, 'x', { duration: 0.7, ease: 'power2.out' });
    const yText = gsap.quickTo(titleGroupRef.current, 'y', { duration: 0.7, ease: 'power2.out' });

    const xPhoto = gsap.quickTo(portrait, 'x', { duration: 0.85, ease: 'power2.out' });
    const yPhoto = gsap.quickTo(portrait, 'y', { duration: 0.85, ease: 'power2.out' });
    const rotPhoto = gsap.quickTo(portrait, 'rotationY', { duration: 0.85, ease: 'power2.out' });

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const normX = (e.clientX / innerWidth - 0.5) * 2;
      const normY = (e.clientY / innerHeight - 0.5) * 2;

      // Text moves forward
      xText(normX * 18);
      yText(normY * 10);

      // Photo drifts behind in opposition
      xPhoto(normX * -14);
      yPhoto(normY * -8);
      rotPhoto(normX * 4);
    };

    const handleMouseLeave = () => {
      xText(0);
      yText(0);
      xPhoto(0);
      yPhoto(0);
      rotPhoto(0);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      tl.kill();
    };
  }, []);

  return (
    <div ref={containerRef as any} className="w-full flex-1 flex flex-col justify-between overflow-hidden">
      {/* Editorial Overlap Main Stage */}
      <div className="max-w-[1440px] w-full mx-auto px-6 sm:px-12 flex-1 flex flex-col justify-center py-8 sm:py-12 relative">
        
        <div className="relative w-full flex flex-col lg:flex-row items-center lg:items-end justify-between min-h-[460px] sm:min-h-[540px] lg:min-h-[600px]">
          
          {/* Monumental Layered Masthead (Text) */}
          <div
            ref={titleGroupRef}
            className="w-full lg:flex-1 z-20 select-none will-change-transform"
          >
            <h1 className="m-0 font-normal tracking-[-0.02em]">
              
              {/* Line 1: Giant First Name */}
              <span className="block overflow-hidden pb-2">
                <span
                  ref={line1Ref}
                  className="inline-block text-6xl sm:text-8xl md:text-9xl lg:text-[8.4vw] xl:text-[8.8vw] font-normal font-display text-black leading-[0.92] sm:leading-[0.95]"
                >
                  Juan Pablo
                </span>
              </span>

              {/* Line 2: Intersecting Last Name */}
              <span className="block overflow-hidden pb-3 sm:pl-12 md:pl-20 lg:pl-24">
                <span
                  ref={line2Ref}
                  className="inline-block text-6xl sm:text-8xl md:text-9xl lg:text-[8.4vw] xl:text-[8.8vw] font-normal font-display text-black leading-[0.92] sm:leading-[0.95]"
                >
                  Chacón.
                </span>
              </span>

              {/* Line 3: Discipline Pill/Row floating beside */}
              <span className="block pt-3 sm:pt-6 sm:pl-3">
                <span
                  ref={line3Ref}
                  className="inline-block text-xl sm:text-3xl md:text-4xl lg:text-[2.6vw] font-light font-display text-black/60 tracking-[-0.01em]"
                >
                  {t.hero.disciplineLine1} <span className="italic font-light text-black/35">{t.hero.disciplineAnd}</span> {t.hero.disciplineLine2}
                </span>
              </span>

            </h1>
          </div>

          {/* Architectural Arch Portrait Layer (Gallery Silhouette) */}
          <div
            ref={archPortraitRef}
            className="mt-8 lg:mt-0 lg:absolute lg:right-4 lg:bottom-4 w-full max-w-[290px] sm:max-w-[340px] lg:max-w-[390px] xl:max-w-[430px] z-10 will-change-transform [perspective:1000px]"
          >
            <div className="relative group">
              {/* Soft Ambient Blur Base */}
              <div className="absolute -inset-2 bg-gradient-to-t from-black/15 to-transparent rounded-t-[14rem] rounded-b-[2.5rem] blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-700 pointer-events-none" />

              {/* Gallery Arch Frame */}
              <div className="relative p-2.5 sm:p-3 bg-white/80 backdrop-blur-md rounded-t-[14rem] rounded-b-[2.5rem] border border-black/[0.08] shadow-[0_30px_70px_-15px_rgba(0,0,0,0.16)] transition-all duration-700 group-hover:shadow-[0_40px_90px_-20px_rgba(0,0,0,0.22)]">
                
                {/* Architectural Arch Mask */}
                <div className="relative aspect-[3/4.2] rounded-t-[13rem] rounded-b-[2rem] overflow-hidden bg-[#121214]">
                  <img
                    src="/hero-portrait.webp"
                    alt="Juan Pablo Chacón"
                    className="w-full h-full object-cover object-[center_20%] transition-transform duration-1000 ease-out group-hover:scale-[1.04]"
                    loading="eager"
                    decoding="async"
                  />

                  {/* Editorial Gradation Vignette */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-80" />

                  {/* Ultra-subtle Arch Inner Ring */}
                  <div className="pointer-events-none absolute inset-0 rounded-t-[13rem] rounded-b-[2rem] ring-1 ring-inset ring-white/15" />
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Clean Bottom Orientation Bar */}
      <div className="max-w-[1440px] w-full mx-auto px-6 sm:px-12 pb-8 sm:pb-10 flex items-center justify-between text-xs font-sans text-black/60 select-none z-30">
        <div className="flex items-center gap-2">
          <span>{siteConfig.profile.location}</span>
          <span className="text-black/25">•</span>
          <span className="text-black/45">{t.hero.studioType}</span>
        </div>
        <div className="text-black/50 font-sans text-xs">
          {t.hero.role}
        </div>
      </div>
    </div>
  );
};
