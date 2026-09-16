import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { siteConfig } from '../../../config/site';
import { useLanguage } from '../../../context/LanguageContext';

export const HeroConcept1: React.FC = () => {
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
    <div ref={containerRef as any} className="w-full flex-1 flex flex-col justify-between">
      {/* Asymmetric Split Layout */}
      <div className="max-w-[1400px] w-full mx-auto px-6 sm:px-12 flex-1 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16 py-10 sm:py-14">
        
        {/* Left: Monumental Typographic Statement */}
        <div className="flex-1 w-full flex flex-col justify-center min-w-0">
          <h1 className="space-y-2 sm:space-y-4 select-none m-0 font-normal">
            
            {/* Line 1: First Name */}
            <span className="block">
              <span
                ref={line1Ref}
                className="inline-block text-5xl sm:text-7xl md:text-8xl lg:text-[4.8vw] xl:text-[5.4vw] 2xl:text-[5.8vw] font-normal font-display tracking-[-0.01em] text-black leading-[1.06] sm:leading-[1.1] pb-1 cursor-default will-change-transform opacity-0"
                data-interactive
              >
                <span className="inline-block transition-transform duration-300 hover:scale-[1.01] origin-left">
                  Juan Pablo
                </span>
              </span>
            </span>

            {/* Line 2: Last Name with Indent */}
            <span className="block sm:pl-8 md:pl-12 lg:pl-14 xl:pl-18">
              <span
                ref={line2Ref}
                className="inline-block text-5xl sm:text-7xl md:text-8xl lg:text-[4.8vw] xl:text-[5.4vw] 2xl:text-[5.8vw] font-normal font-display tracking-[-0.01em] text-black leading-[1.06] sm:leading-[1.1] pb-1 cursor-default will-change-transform opacity-0"
                data-interactive
              >
                <span className="inline-block transition-transform duration-300 hover:scale-[1.01] origin-left">
                  Chacón.
                </span>
              </span>
            </span>

            {/* Line 3: Discipline */}
            <span className="block pt-2 sm:pt-4 sm:pl-2">
              <span
                ref={line3Ref}
                className="inline-block text-2.5xl sm:text-4xl md:text-5xl lg:text-[2.6vw] xl:text-[2.9vw] 2xl:text-[3.1vw] font-light font-display tracking-[-0.01em] text-black/65 hover:text-black/90 leading-[1.08] sm:leading-[1.14] pb-1 cursor-default will-change-transform opacity-0 transition-colors duration-500"
                data-interactive
              >
                <span className="inline-block transition-transform duration-300 hover:scale-[1.01] origin-left">
                  {t.hero.disciplineLine1} <span className="italic font-light text-black/35">{t.hero.disciplineAnd}</span> {t.hero.disciplineLine2}
                </span>
              </span>
            </span>
          </h1>
        </div>

        {/* Right: Sculpted Architectural Portrait (Bezel 3D) */}
        <div
          ref={portraitRef}
          className="w-full max-w-[320px] sm:max-w-[380px] md:max-w-[420px] lg:max-w-[440px] xl:max-w-[480px] 2xl:max-w-[520px] shrink-0 opacity-0 will-change-transform [perspective:1000px]"
        >
          <div className="relative group transition-transform duration-500 ease-out">
            {/* Ambient Lighting Shadow Layer */}
            <div className="absolute -inset-2 bg-gradient-to-b from-black/[0.03] to-black/[0.1] rounded-[2.8rem] blur-xl opacity-60 group-hover:opacity-90 transition-opacity duration-700 pointer-events-none" />

            {/* Sculpted Card Bezel Frame */}
            <div className="relative p-2.5 sm:p-3 bg-white/75 backdrop-blur-md rounded-[2.5rem] border border-black/[0.07] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.12)]">
              <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden bg-[#141517]">
                <img
                  src="/hero-portrait.webp"
                  alt="Juan Pablo Chacón"
                  className="w-full h-full object-cover object-[center_22%] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  loading="eager"
                  decoding="async"
                />

                {/* Subtle Cinematic Lighting Vignette */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-80" />
                
                {/* Hairline Inner Border Accent */}
                <div className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/10" />
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Clean Bottom Orientation Bar */}
      <div className="max-w-[1400px] w-full mx-auto px-6 sm:px-12 pb-8 sm:pb-10 flex items-center justify-between text-xs font-sans text-black/60 select-none">
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
