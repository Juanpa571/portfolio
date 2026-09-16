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
      ref={containerRef}
      className="relative min-h-[calc(100vh-5.5rem)] min-h-[calc(100dvh-5.5rem)] flex flex-col justify-between border-b border-black/[0.08] overflow-hidden"
    >
      {/* Asymmetric Split Layout */}
      <div className="max-w-[1400px] w-full mx-auto px-6 sm:px-12 flex-1 flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-6 sm:gap-8 lg:gap-14 py-6 sm:py-10 lg:py-12">
        
        {/* Left: Monumental Typographic Statement */}
        <div className="flex-1 w-full flex flex-col justify-center min-w-0 text-center lg:text-left">
          <h1 className="space-y-1.5 sm:space-y-3 lg:space-y-4 select-none m-0 font-normal">
            
            {/* Line 1: First Name */}
            <span className="block">
              <span
                ref={line1Ref}
                className="inline-block text-4xl sm:text-6xl md:text-7xl lg:text-[5vw] xl:text-[5.5vw] 2xl:text-[5.8vw] font-normal font-display tracking-[-0.01em] text-black leading-[1.05] sm:leading-[1.08] pb-1 cursor-default will-change-transform opacity-0"
                data-interactive
              >
                <span className="inline-block transition-transform duration-300 hover:scale-[1.01] origin-center lg:origin-left">
                  Juan Pablo
                </span>
              </span>
            </span>

            {/* Line 2: Last Name with Indent */}
            <span className="block lg:pl-10 xl:pl-16">
              <span
                ref={line2Ref}
                className="inline-block text-4xl sm:text-6xl md:text-7xl lg:text-[5vw] xl:text-[5.5vw] 2xl:text-[5.8vw] font-normal font-display tracking-[-0.01em] text-black leading-[1.05] sm:leading-[1.08] pb-1 cursor-default will-change-transform opacity-0"
                data-interactive
              >
                <span className="inline-block transition-transform duration-300 hover:scale-[1.01] origin-center lg:origin-left">
                  Chacón.
                </span>
              </span>
            </span>

            {/* Line 3: Discipline */}
            <span className="block pt-1.5 sm:pt-3 lg:pt-4 sm:pl-2">
              <span
                ref={line3Ref}
                className="inline-block text-xl sm:text-3xl md:text-4xl lg:text-[2.6vw] xl:text-[2.8vw] font-light font-display tracking-[-0.01em] text-black/65 hover:text-black/90 leading-[1.08] sm:leading-[1.14] pb-1 cursor-default will-change-transform opacity-0 transition-colors duration-500"
                data-interactive
              >
                <span className="inline-block transition-transform duration-300 hover:scale-[1.01] origin-center lg:origin-left">
                  {t.hero.disciplineLine1} <span className="italic font-light text-black/35">{t.hero.disciplineAnd}</span> {t.hero.disciplineLine2}
                </span>
              </span>
            </span>
          </h1>
        </div>

        {/* Right: Sculpted Architectural Portrait (Sweet-Spot Scale) */}
        <div
          ref={portraitRef}
          className="w-full max-w-[220px] sm:max-w-[260px] md:max-w-[300px] lg:max-w-[370px] xl:max-w-[430px] 2xl:max-w-[460px] shrink-0 opacity-0 will-change-transform [perspective:1000px]"
        >
          <div className="relative group transition-transform duration-500 ease-out">
            {/* Ambient Lighting Shadow Layer */}
            <div className="absolute -inset-1.5 sm:-inset-2 bg-gradient-to-b from-black/[0.03] to-black/[0.1] rounded-[2.2rem] sm:rounded-[2.8rem] blur-xl opacity-60 group-hover:opacity-90 transition-opacity duration-700 pointer-events-none" />

            {/* Sculpted Card Bezel Frame */}
            <div className="relative p-2 sm:p-2.5 lg:p-3 bg-white/75 backdrop-blur-md rounded-[2rem] sm:rounded-[2.5rem] border border-black/[0.07] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.12)]">
              <div className="relative aspect-[3/4] rounded-[1.6rem] sm:rounded-[2rem] overflow-hidden bg-[#141517]">
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
                <div className="pointer-events-none absolute inset-0 rounded-[1.6rem] sm:rounded-[2rem] ring-1 ring-inset ring-white/10" />
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
    </section>
  );
};

export default Hero;
