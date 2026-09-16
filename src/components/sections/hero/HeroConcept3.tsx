import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { siteConfig } from '../../../config/site';
import { useLanguage } from '../../../context/LanguageContext';

export const HeroConcept3: React.FC = () => {
  const { t, language } = useLanguage();
  const containerRef = useRef<HTMLElement | null>(null);
  const leftColRef = useRef<HTMLDivElement | null>(null);
  const portalRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Real-time clock for Cali, Colombia (UTC-5)
  const [caliTime, setCaliTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString('es-CO', {
        timeZone: 'America/Bogota',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      });
      setCaliTime(timeStr);
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const leftCol = leftColRef.current;
    const portal = portalRef.current;
    const container = containerRef.current;
    if (!leftCol || !portal || !container) return;

    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

    tl.fromTo(
      leftCol,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.1, delay: 0.1 }
    ).fromTo(
      portal,
      { clipPath: 'inset(10% 0% 10% 0% round 2.5rem)', opacity: 0, scale: 0.96 },
      { clipPath: 'inset(0% 0% 0% 0% round 2rem)', opacity: 1, scale: 1, duration: 1.3 },
      '-=0.8'
    );

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || 'ontouchstart' in window) {
      return;
    }

    const xPhoto = gsap.quickTo(portal, 'x', { duration: 0.9, ease: 'power2.out' });
    const yPhoto = gsap.quickTo(portal, 'y', { duration: 0.9, ease: 'power2.out' });

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const normX = (e.clientX / innerWidth - 0.5) * 2;
      const normY = (e.clientY / innerHeight - 0.5) * 2;

      xPhoto(normX * -12);
      yPhoto(normY * -8);
    };

    const handleMouseLeave = () => {
      xPhoto(0);
      yPhoto(0);
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
    <div ref={containerRef as any} className="w-full flex-1 flex flex-col justify-between">
      {/* Cinematic Horizon Split Stage */}
      <div className="max-w-[1400px] w-full mx-auto px-6 sm:px-12 flex-1 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 py-10 sm:py-14">
        
        {/* Left Column: Structured Editorial Typography & Philosophy */}
        <div ref={leftColRef} className="flex-1 w-full max-w-2xl flex flex-col justify-center">
          
          <div className="space-y-4 sm:space-y-6">
            <h1 className="text-5xl sm:text-7xl lg:text-[5.4vw] xl:text-[5.8vw] font-normal font-display tracking-[-0.02em] text-black leading-[1.02] sm:leading-[1.05] m-0">
              Juan Pablo Chacón.
            </h1>

            <p className="text-2.5xl sm:text-3xl md:text-4xl lg:text-[2.5vw] font-light font-display text-black/75 tracking-[-0.01em] leading-tight m-0">
              {t.hero.disciplineLine1} <span className="italic font-light text-black/35">{t.hero.disciplineAnd}</span> {t.hero.disciplineLine2}
            </p>

            <p className="text-sm sm:text-base font-sans text-black/60 font-normal leading-relaxed max-w-lg pt-2 m-0">
              {language === 'es'
                ? 'Estudio de diseño y desarrollo web contemporáneo. Construimos identidades digitales memorables con código de alto rendimiento y dirección de arte pura.'
                : 'Contemporary web design and development studio. Building memorable digital identities through high-performance code and uncompromising art direction.'}
            </p>

            {/* Direct Inquire Action Link */}
            <div className="pt-2 sm:pt-4 flex items-center gap-6">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black text-white text-xs font-sans font-medium tracking-wide hover:bg-black/85 transition-colors duration-300"
              >
                <span>{language === 'es' ? 'Iniciar proyecto' : 'Start a project'}</span>
                <span className="text-white/60">→</span>
              </a>

              <a
                href="#projects"
                className="inline-flex items-center text-xs font-sans text-black/70 hover:text-black transition-colors duration-300 underline underline-offset-4"
              >
                {language === 'es' ? 'Explorar obras' : 'View selected work'}
              </a>
            </div>
          </div>

        </div>

        {/* Right Column: Cinematic Tall Portal with Live Telemetry */}
        <div
          ref={portalRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[420px] xl:max-w-[460px] shrink-0 will-change-transform"
        >
          <div className="relative group cursor-pointer">
            {/* Ambient Lighting Spill */}
            <div
              className={`absolute -inset-3 rounded-[2.8rem] blur-2xl transition-opacity duration-1000 pointer-events-none ${
                isHovered
                  ? 'bg-gradient-to-b from-amber-500/20 via-emerald-500/15 to-black/30 opacity-90'
                  : 'bg-black/10 opacity-40'
              }`}
            />

            {/* Cinematic Tall Portal Frame */}
            <div className="relative rounded-[2.2rem] p-2 sm:p-2.5 bg-black/[0.04] border border-black/[0.08] shadow-[0_30px_70px_-15px_rgba(0,0,0,0.16)] transition-all duration-700">
              
              <div className="relative aspect-[3/4] rounded-[1.8rem] overflow-hidden bg-[#121214]">
                <img
                  src="/hero-portrait.webp"
                  alt="Juan Pablo Chacón"
                  className={`w-full h-full object-cover object-[center_20%] transition-all duration-700 ease-out ${
                    isHovered
                      ? 'scale-[1.04] grayscale-0 contrast-[105%]'
                      : 'scale-100 grayscale-[25%] contrast-[102%]'
                  }`}
                  loading="eager"
                  decoding="async"
                />

                {/* Lighting Vignette Gradient */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/15 opacity-80" />

                {/* Floating Status Bar at Base of Portal */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between px-3.5 py-2.5 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white select-none">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[11px] font-sans font-light tracking-wide text-white/90">
                      Cali, CO {caliTime && `· ${caliTime}`}
                    </span>
                  </div>
                  <span className="text-[10px] font-sans text-white/60 tracking-wider">
                    {language === 'es' ? 'DISPONIBLE' : 'AVAILABLE'}
                  </span>
                </div>

                {/* Hairline Inner Bevel */}
                <div className="pointer-events-none absolute inset-0 rounded-[1.8rem] ring-1 ring-inset ring-white/15" />
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
