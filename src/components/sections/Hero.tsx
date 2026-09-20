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
      {/* Asymmetric Split Layout */}
      <div className="max-w-[1400px] w-full mx-auto px-6 sm:px-12 flex-1 flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 sm:gap-10 lg:gap-14 py-8 sm:py-10 lg:py-12">
        
        {/* Left: Monumental Business & Ranking Proposition */}
        <div className="flex-1 w-full flex flex-col justify-center min-w-0 pr-0 lg:pr-6">
          <h1 
            aria-label="Tu negocio puede ocupar los primeros resultados de Google — Páginas Web Cali & Diseño para Vender | JP Studios"
            className="space-y-1.5 sm:space-y-2 lg:space-y-3 select-none m-0 font-normal"
          >
            {/* Line 1 */}
            <span className="block">
              <span
                ref={line1Ref}
                className="inline-block text-4xl sm:text-5xl md:text-6xl lg:text-[3.9vw] xl:text-[4.3vw] font-normal font-display tracking-[-0.02em] text-black leading-[1.05] sm:leading-[1.08] cursor-default will-change-transform"
                data-interactive
              >
                <span className="inline-block transition-transform duration-300 hover:scale-[1.01] origin-left">
                  {t.hero.headlineLine1}
                </span>
              </span>
            </span>

            {/* Line 2 with intentional asymmetrical indent */}
            <span className="block pl-4 sm:pl-8 lg:pl-10 xl:pl-12">
              <span
                ref={line2Ref}
                className="inline-block text-4xl sm:text-5xl md:text-6xl lg:text-[3.9vw] xl:text-[4.3vw] font-normal font-display tracking-[-0.02em] text-black leading-[1.05] sm:leading-[1.08] cursor-default will-change-transform"
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
                className="inline-block text-4xl sm:text-5xl md:text-6xl lg:text-[3.9vw] xl:text-[4.3vw] font-normal font-display tracking-[-0.02em] text-black leading-[1.05] sm:leading-[1.08] cursor-default will-change-transform"
                data-interactive
              >
                <span className="inline-block transition-transform duration-300 hover:scale-[1.01] origin-left">
                  {t.hero.headlineLine3}
                </span>
              </span>
            </span>
          </h1>

          {/* Subtitle & Value Proposition */}
          <p className="text-sm sm:text-base lg:text-lg text-black/75 font-sans leading-relaxed max-w-xl pt-5 sm:pt-6">
            {t.hero.subtitle}
          </p>

          {/* Action & Author Signature Lockup */}
          <div className="pt-6 sm:pt-8 flex flex-wrap items-center gap-4 sm:gap-6">
            <a
              href={siteConfig.profile.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-[#141517] hover:bg-black text-white text-xs sm:text-sm font-sans font-medium flex items-center gap-2 shadow-xs transition-all duration-200 active:scale-95 group"
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

        {/* Right: Interactive Proof of Work — Google SERP #1 & Speed Telemetry Card */}
        <div
          ref={portraitRef}
          className="w-full max-w-[380px] sm:max-w-[440px] lg:max-w-[470px] xl:max-w-[500px] shrink-0 will-change-transform [perspective:1000px] my-4 lg:my-0 select-none"
        >
          <div className="relative group transition-transform duration-500 ease-out">
            {/* Ambient Lighting Shadow Layer */}
            <div className="absolute -inset-2 bg-gradient-to-b from-black/[0.02] to-black/[0.08] rounded-[2.6rem] blur-xl opacity-60 group-hover:opacity-90 transition-opacity duration-700 pointer-events-none" />

            {/* Sculpted Bezel Frame */}
            <div className="relative p-5 sm:p-7 bg-white/90 backdrop-blur-md rounded-[2.2rem] sm:rounded-[2.5rem] border border-black/[0.08] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.08)] space-y-4">
              
              {/* Simulated Search Header */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-black/[0.03] border border-black/[0.06] text-xs font-sans text-black/80">
                  <svg className="w-3.5 h-3.5 text-black/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <span className="font-medium text-black">paginas web en cali</span>
                  <span className="ml-auto text-[10px] text-emerald-700 font-semibold uppercase tracking-wider bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    #1 Orgánico
                  </span>
                </div>
                <div className="text-[10px] font-sans text-black/40 px-1">
                  Cerca de 482,000 resultados (0.34 segundos)
                </div>
              </div>

              {/* SERP Result #1 Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-black/[0.02] border border-black/[0.06] space-y-2.5">
                {/* Breadcrumb & Domain */}
                <div className="flex items-center gap-2 text-xs font-sans text-black/60">
                  <img
                    src="/favicon.png"
                    alt="JP Studios"
                    className="w-4 h-4 rounded-full object-contain"
                    width={16}
                    height={16}
                  />
                  <div className="flex flex-col leading-none">
                    <span className="text-[11px] font-semibold text-black">JP Studios</span>
                    <span className="text-[9.5px] text-black/45 truncate">https://jpchacon.com › cali</span>
                  </div>
                </div>

                {/* SERP Title */}
                <div className="text-base sm:text-[1.08rem] font-medium font-sans text-[#1a0dab] leading-snug">
                  Páginas Web Cali & Diseño para Vender — JP Studios
                </div>

                {/* Rating & Social Proof */}
                <div className="flex items-center gap-1.5 text-xs font-sans">
                  <span className="text-amber-500 text-xs">★★★★★</span>
                  <span className="font-semibold text-black/80">5.0</span>
                  <span className="text-black/40">• Ficha Verificada en Google Maps</span>
                </div>

                {/* Snippet Description */}
                <p className="text-xs font-sans text-black/70 leading-relaxed">
                  Ingeniería web de alta conversión y carga sub-segundo (0.4s). Sitios web a medida en React 19 optimizados para aparecer en Google Search y Maps en Cali.
                </p>

                {/* Rich Sitelinks */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <a
                    href="#services"
                    className="px-3 py-1.5 rounded-lg bg-white border border-black/[0.07] text-[11px] font-sans font-medium text-black/80 hover:text-black hover:border-black/20 transition-all flex items-center justify-between"
                  >
                    <span>Servicios Web</span>
                    <span className="text-black/35 text-[10px]">↗</span>
                  </a>
                  <a
                    href="#process"
                    className="px-3 py-1.5 rounded-lg bg-white border border-black/[0.07] text-[11px] font-sans font-medium text-black/80 hover:text-black hover:border-black/20 transition-all flex items-center justify-between"
                  >
                    <span>Proceso</span>
                    <span className="text-black/35 text-[10px]">↗</span>
                  </a>
                </div>
              </div>

              {/* Live Core Web Vitals Benchmark Bar */}
              <div className="pt-1 flex items-center justify-between text-[10.5px] font-sans font-medium text-black/65 px-1 border-t border-black/[0.06]">
                <div className="flex items-center gap-1 text-emerald-600 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>0.38s LCP</span>
                </div>
                <div>99/100 Velocidad</div>
                <div className="text-black/45">React 19 & TypeScript</div>
              </div>

            </div>
          </div>
        </div>

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
