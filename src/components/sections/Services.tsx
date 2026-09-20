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
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const descRef = useRef<HTMLParagraphElement | null>(null);
  const rulerRef = useRef<HTMLDivElement | null>(null);
  const cardsContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!headerRef.current) return;

    const ctx = gsap.context(() => {
      // Clean minimalist fade-and-rise animation for title
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: headerRef.current,
              start: 'top 85%',
              once: true,
            },
          }
        );
      }

      // Fade-and-rise entrance for SEO description
      if (descRef.current) {
        gsap.fromTo(
          descRef.current,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            delay: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: headerRef.current,
              start: 'top 85%',
              once: true,
            },
          }
        );
      }

      // Hairline ruler drawing across
      if (rulerRef.current) {
        gsap.fromTo(
          rulerRef.current,
          { scaleX: 0, transformOrigin: 'left center' },
          {
            scaleX: 1,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: headerRef.current,
              start: 'top 85%',
              once: true,
            },
          }
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
        
        {/* Clean Editorial Section Header */}
        <div ref={headerRef} className="relative mb-12 lg:mb-16 pb-6">
          {/* Editorial Category Label above Title (Clean Text, No Capsule) */}
          <div className="mb-3 sm:mb-4">
            <span className="text-xs sm:text-sm font-sans font-medium text-black/50 tracking-wide select-none">
              {t.services.tag}
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-12">
            <div className="max-w-3xl">
              <h2
                ref={titleRef}
                className="text-3xl sm:text-5xl lg:text-6xl font-normal font-display tracking-[-0.02em] text-[#111111] leading-[1.12] sm:leading-[1.16] select-none"
              >
                <span className="block">{t.services.headerLine1}</span>
                <span className="block sm:pl-10 lg:pl-16 text-black/60">{t.services.headerLine2}</span>
              </h2>
            </div>

            {/* SEO Description to the right */}
            <div className="lg:max-w-md pb-1">
              <p
                ref={descRef}
                className="text-sm sm:text-base text-black/65 font-sans font-normal leading-relaxed"
              >
                {t.services.seoDescription}
              </p>
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
                <div className="space-y-2 max-w-[65%]">
                  <span className="block text-xs font-mono font-medium text-black/40 tracking-wider select-none">
                    {t.services.items[0].number}
                  </span>
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
                <div className="space-y-2 max-w-[65%]">
                  <span className="block text-xs font-mono font-medium text-white/40 tracking-wider select-none">
                    {t.services.items[1].number}
                  </span>
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
                <div className="space-y-2 max-w-[65%]">
                  <span className="block text-xs font-mono font-medium text-black/40 tracking-wider select-none">
                    {t.services.items[2].number}
                  </span>
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
                <div className="space-y-2 max-w-[65%]">
                  <span className="block text-xs font-mono font-medium text-black/40 tracking-wider select-none">
                    {t.services.items[3].number}
                  </span>
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
