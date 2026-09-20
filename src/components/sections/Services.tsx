import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { TiltCard } from '../ui/TiltCard';
import { UiUxArtwork } from './services/UiUxArtwork';
import { FrontendCraftArtwork } from './services/FrontendCraftArtwork';
import { FullStackArtwork } from './services/FullStackArtwork';
import { SupportArtwork } from './services/SupportArtwork';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Services: React.FC = () => {
  const { t } = useLanguage();
  const headerRef = useRef<HTMLDivElement | null>(null);
  const line1FillRef = useRef<HTMLSpanElement | null>(null);
  const line2FillRef = useRef<HTMLSpanElement | null>(null);
  const rulerRef = useRef<HTMLDivElement | null>(null);
  const cardsContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!headerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 88%',
          end: 'top 32%',
          scrub: 0.7,
        },
      });

      // Hairline ruler drawing across
      if (rulerRef.current) {
        tl.fromTo(
          rulerRef.current,
          { scaleX: 0, transformOrigin: 'left center' },
          { scaleX: 1, ease: 'none', duration: 1 },
          0
        );
      }

      // Line 1 ink fill sweep
      if (line1FillRef.current) {
        tl.fromTo(
          line1FillRef.current,
          { clipPath: 'inset(0 100% 0 0)', scale: 1.04, y: 8 },
          { clipPath: 'inset(0 0% 0 0)', scale: 1, y: 0, ease: 'power2.out', duration: 0.9 },
          0.05
        );
      }

      // Line 2 ink fill sweep staggered
      if (line2FillRef.current) {
        tl.fromTo(
          line2FillRef.current,
          { clipPath: 'inset(0 100% 0 0)', scale: 1.04, x: -12 },
          { clipPath: 'inset(0 0% 0 0)', scale: 1, x: 0, ease: 'power2.out', duration: 0.9 },
          0.2
        );
      }

      // Bento cards staggered entrance on scroll
      if (cardsContainerRef.current) {
        const cards = cardsContainerRef.current.querySelectorAll('.service-card-item');
        gsap.fromTo(
          cards,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.08,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cardsContainerRef.current,
              start: 'top 90%',
              once: true,
            },
          }
        );
      }
    }, headerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" className="py-16 lg:py-24 border-b border-black/[0.08] relative overflow-hidden">
      
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
        
        {/* Asymmetric Section Header with Refokus-Style Kinetic Morph */}
        <div ref={headerRef} className="relative mb-12 lg:mb-16 pb-6">
          <div className="space-y-3 max-w-5xl">
            {/* H2 Semántico Limpio para SEO y Lectores de Pantalla */}
            <h2 className="sr-only">
              {t.services.headerLine1} {t.services.headerLine2}
            </h2>

            {/* Presentación Visual Cinética */}
            <div aria-hidden="true" className="text-3xl sm:text-5xl lg:text-6xl font-normal font-display tracking-[-0.01em] leading-[1.14] sm:leading-[1.18]">
              {/* Line 1: Built on trust. */}
              <div className="relative inline-block pb-1">
                <span className="text-transparent [-webkit-text-stroke:1.2px_rgba(0,0,0,0.3)] sm:[-webkit-text-stroke:1.5px_rgba(0,0,0,0.35)] select-none">
                  {t.services.headerLine1}
                </span>
                <span
                  ref={line1FillRef}
                  className="absolute inset-0 text-black select-none will-change-transform"
                  style={{ clipPath: 'inset(0 100% 0 0)' }}
                >
                  {t.services.headerLine1}
                </span>
              </div>
              <br />
              {/* Line 2: Shaped by craft. (Asymmetric indent) */}
              <div className="relative inline-block sm:pl-10 lg:pl-16 pb-1">
                <span className="text-transparent [-webkit-text-stroke:1.2px_rgba(0,0,0,0.3)] sm:[-webkit-text-stroke:1.5px_rgba(0,0,0,0.35)] select-none">
                  {t.services.headerLine2}
                </span>
                <span
                  ref={line2FillRef}
                  className="absolute inset-0 sm:pl-10 lg:pl-16 text-black select-none will-change-transform"
                  style={{ clipPath: 'inset(0 100% 0 0)' }}
                >
                  {t.services.headerLine2}
                </span>
              </div>
            </div>
          </div>

          {/* Animated Ruler Line drawn on scroll */}
          <div
            ref={rulerRef}
            className="w-full h-[1px] bg-black/[0.08] mt-8 origin-left will-change-transform"
          />
        </div>

        {/* Symmetric 2x2 Bento Architecture */}
        <div ref={cardsContainerRef} className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-7 items-stretch">
          {/* Card 001: Web de Alto Rendimiento */}
          <div className="service-card-item will-change-[transform,opacity] h-full">
            <TiltCard
              maxTilt={3}
              scale={1.01}
              className="p-7 sm:p-9 rounded-[2rem] bg-white border border-black/[0.08] shadow-xs hover:shadow-xl hover:border-black/20 transition-all duration-500 flex flex-col justify-center h-full group cursor-default"
            >
              <div className="flex items-center justify-between gap-6 my-auto">
                <div className="space-y-1.5 max-w-[65%]">
                  <h3 className="text-2xl sm:text-3xl font-normal font-display text-black tracking-tight">
                    {t.services.items[0].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-black/65 font-sans leading-relaxed">
                    {t.services.items[0].subtitle}
                  </p>
                </div>

                <UiUxArtwork />
              </div>
            </TiltCard>
          </div>

          {/* Card 002: Posicionamiento Web y Google Maps — Inverted Dark Monolith */}
          <div className="service-card-item will-change-[transform,opacity] h-full">
            <TiltCard
              maxTilt={3.5}
              scale={1.01}
              className="p-7 sm:p-9 rounded-[2rem] bg-[#1C1D20] text-white border border-white/10 shadow-xl hover:shadow-2xl hover:border-white/25 transition-all duration-500 flex flex-col justify-center h-full group cursor-default relative overflow-hidden"
            >
              <div className="flex items-center justify-between gap-6 my-auto">
                <div className="space-y-1.5 max-w-[65%]">
                  <h3 className="text-2xl sm:text-3xl font-normal font-display text-white tracking-tight">
                    {t.services.items[1].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed">
                    {t.services.items[1].subtitle}
                  </p>
                </div>

                <FrontendCraftArtwork />
              </div>
            </TiltCard>
          </div>

          {/* Card 003: Páginas Web para Vender (Landing Pages) */}
          <div className="service-card-item will-change-[transform,opacity] h-full">
            <TiltCard
              maxTilt={3}
              scale={1.01}
              className="p-7 sm:p-9 rounded-[2rem] bg-white border border-black/[0.08] shadow-xs hover:shadow-xl hover:border-black/20 transition-all duration-500 flex flex-col justify-center h-full group cursor-default"
            >
              <div className="flex items-center justify-between gap-6 my-auto">
                <div className="space-y-1.5 max-w-[65%]">
                  <h3 className="text-2xl sm:text-3xl font-normal font-display text-black tracking-tight">
                    {t.services.items[2].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-black/65 font-sans leading-relaxed">
                    {t.services.items[2].subtitle}
                  </p>
                </div>

                <FullStackArtwork />
              </div>
            </TiltCard>
          </div>

          {/* Card 004: Hosting Cloud y Soporte Opcional */}
          <div className="service-card-item will-change-[transform,opacity] h-full">
            <TiltCard
              maxTilt={3}
              scale={1.01}
              className="p-7 sm:p-9 rounded-[2rem] bg-white border border-black/[0.08] shadow-xs hover:shadow-xl hover:border-black/20 transition-all duration-500 flex flex-col justify-center h-full group cursor-default relative"
            >
              <div className="flex items-center justify-between gap-6 my-auto">
                <div className="space-y-1.5 max-w-[65%]">
                  <h3 className="text-2xl sm:text-3xl font-normal font-display text-black tracking-tight">
                    {t.services.items[3].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-black/65 font-sans leading-relaxed">
                    {t.services.items[3].subtitle}
                  </p>
                </div>

                <SupportArtwork />
              </div>
            </TiltCard>
          </div>
        </div>

      </div>

    </section>
  );
};
