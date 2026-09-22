import React, { useState, useEffect, useRef } from 'react';
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
  const [mobileActiveIndex, setMobileActiveIndex] = useState(0);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const descRef = useRef<HTMLParagraphElement | null>(null);
  const rulerRef = useRef<HTMLDivElement | null>(null);
  const cardsContainerRef = useRef<HTMLDivElement | null>(null);

  const handleMobileScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const cardWidth = el.scrollWidth / 4;
    if (cardWidth > 0) {
      const index = Math.round(el.scrollLeft / cardWidth);
      setMobileActiveIndex(Math.min(3, Math.max(0, index)));
    }
  };

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
    <section id="services" className="py-10 sm:py-16 lg:py-24 border-b border-black/[0.08] relative overflow-hidden scroll-mt-24">
      
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
        
        {/* Clean Editorial Section Header */}
        <div ref={headerRef} className="relative mb-6 sm:mb-12 lg:mb-16 pb-3 sm:pb-6">
          {/* Editorial Category Label above Title (Clean Text, No Capsule) */}
          <div className="mb-2 sm:mb-4">
            <span className="text-xs sm:text-sm font-sans font-medium text-black/50 tracking-wide select-none">
              {t.services.tag}
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 sm:gap-6 lg:gap-12">
            <div className="max-w-3xl">
              <h2
                ref={titleRef}
                className="text-[2.55rem] sm:text-5xl lg:text-6xl font-bold sm:font-normal font-display tracking-tight sm:tracking-[-0.02em] text-[#111111] leading-[1.06] sm:leading-[1.16] select-none"
              >
                <span className="block">{t.services.headerLine1}</span>
                <span className="block sm:pl-10 lg:pl-16 text-black/60">{t.services.headerLine2}</span>
              </h2>
            </div>

            {/* SEO Description to the right */}
            <div className="lg:max-w-md pb-1">
              <p
                ref={descRef}
                className="text-sm md:text-base text-black/75 font-sans font-normal leading-relaxed pt-1 sm:pt-0"
              >
                {t.services.seoDescription}
              </p>
            </div>
          </div>

          {/* Animated Ruler Line drawn on scroll */}
          <div
            ref={rulerRef}
            className="w-full h-[1px] bg-black/[0.08] mt-4 sm:mt-8 origin-left will-change-transform"
          />
        </div>

        {/* Responsive Bento Grid (Desktop 2x2 intact, Mobile native horizontal carousel) */}
        <div
          ref={cardsContainerRef}
          onScroll={handleMobileScroll}
          data-lenis-prevent
          className="flex md:grid md:grid-cols-2 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory md:snap-none no-scrollbar gap-3.5 sm:gap-5 lg:gap-7 items-stretch -mx-6 px-6 md:mx-0 md:px-0 pb-2 md:pb-0"
        >
          {/* Card 001: Web de Alto Rendimiento */}
          <div className="service-card-item will-change-[transform,opacity] h-full shrink-0 w-[84vw] sm:w-[75vw] md:w-auto md:shrink snap-center md:snap-align-none">
            <TiltCard
              maxTilt={3}
              scale={1.01}
              className="p-6 sm:p-7 md:p-9 rounded-2xl md:rounded-[2rem] bg-white border border-black/[0.08] shadow-xs hover:shadow-xl hover:border-black/20 transition-all duration-500 flex flex-col justify-between md:justify-center h-full group cursor-default"
            >
              {/* Mobile Layout: Vertical Editorial Flow */}
              <div className="flex flex-col justify-between h-full md:hidden">
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="text-xs font-mono font-semibold tracking-widest text-black/50 select-none">
                    {t.services.items[0].number}
                  </span>
                  <div className="scale-75 origin-right shrink-0 -my-2">
                    <UiUxArtwork />
                  </div>
                </div>
                <div className="space-y-2 mt-auto">
                  <h3 className="text-[1.45rem] font-bold font-display text-black tracking-tight leading-[1.14]">
                    {t.services.items[0].title}
                  </h3>
                  <p className="text-sm text-black/75 font-sans leading-relaxed">
                    {t.services.items[0].subtitle}
                  </p>
                </div>
              </div>

              {/* Desktop Layout: Classic Bento Side-by-Side (Untouched) */}
              <div className="hidden md:flex items-center justify-between gap-3 sm:gap-4 md:gap-6 my-auto">
                <div className="space-y-1.5 md:space-y-2 flex-1 min-w-0 pr-1 md:pr-0 md:max-w-[65%]">
                  <span className="block text-xs font-mono font-medium text-black/40 tracking-wider select-none">
                    {t.services.items[0].number}
                  </span>
                  <h3 className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-semibold md:font-normal font-display text-black tracking-tight leading-snug md:leading-normal">
                    {t.services.items[0].title}
                  </h3>
                  <p className="text-xs md:text-sm text-black/65 font-sans leading-relaxed">
                    {t.services.items[0].subtitle}
                  </p>
                </div>

                <div className="scale-75 sm:scale-90 md:scale-100 origin-right shrink-0">
                  <UiUxArtwork />
                </div>
              </div>
            </TiltCard>
          </div>

          {/* Card 002: Posicionamiento Web y Google Maps — Inverted Dark Monolith */}
          <div className="service-card-item will-change-[transform,opacity] h-full shrink-0 w-[84vw] sm:w-[75vw] md:w-auto md:shrink snap-center md:snap-align-none">
            <TiltCard
              maxTilt={3.5}
              scale={1.01}
              className="p-6 sm:p-7 md:p-9 rounded-2xl md:rounded-[2rem] bg-[#1C1D20] text-white border border-white/10 shadow-xl hover:shadow-2xl hover:border-white/25 transition-all duration-500 flex flex-col justify-between md:justify-center h-full group cursor-default relative overflow-hidden"
            >
              {/* Mobile Layout: Vertical Editorial Flow */}
              <div className="flex flex-col justify-between h-full md:hidden">
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="text-xs font-mono font-semibold tracking-widest text-white/50 select-none">
                    {t.services.items[1].number}
                  </span>
                  <div className="scale-75 origin-right shrink-0 -my-2">
                    <FrontendCraftArtwork />
                  </div>
                </div>
                <div className="space-y-2 mt-auto">
                  <h3 className="text-[1.45rem] font-bold font-display text-white tracking-tight leading-[1.14]">
                    {t.services.items[1].title}
                  </h3>
                  <p className="text-sm text-white/75 font-sans leading-relaxed">
                    {t.services.items[1].subtitle}
                  </p>
                </div>
              </div>

              {/* Desktop Layout: Classic Bento Side-by-Side (Untouched) */}
              <div className="hidden md:flex items-center justify-between gap-3 sm:gap-4 md:gap-6 my-auto">
                <div className="space-y-1.5 md:space-y-2 flex-1 min-w-0 pr-1 md:pr-0 md:max-w-[65%]">
                  <span className="block text-xs font-mono font-medium text-white/40 tracking-wider select-none">
                    {t.services.items[1].number}
                  </span>
                  <h3 className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-semibold md:font-normal font-display text-white tracking-tight leading-snug md:leading-normal">
                    {t.services.items[1].title}
                  </h3>
                  <p className="text-xs md:text-sm text-white/70 font-sans leading-relaxed">
                    {t.services.items[1].subtitle}
                  </p>
                </div>

                <div className="scale-75 sm:scale-90 md:scale-100 origin-right shrink-0">
                  <FrontendCraftArtwork />
                </div>
              </div>
            </TiltCard>
          </div>

          {/* Card 003: Páginas Web para Vender (Landing Pages) */}
          <div className="service-card-item will-change-[transform,opacity] h-full shrink-0 w-[84vw] sm:w-[75vw] md:w-auto md:shrink snap-center md:snap-align-none">
            <TiltCard
              maxTilt={3}
              scale={1.01}
              className="p-6 sm:p-7 md:p-9 rounded-2xl md:rounded-[2rem] bg-white border border-black/[0.08] shadow-xs hover:shadow-xl hover:border-black/20 transition-all duration-500 flex flex-col justify-between md:justify-center h-full group cursor-default"
            >
              {/* Mobile Layout: Vertical Editorial Flow */}
              <div className="flex flex-col justify-between h-full md:hidden">
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="text-xs font-mono font-semibold tracking-widest text-black/50 select-none">
                    {t.services.items[2].number}
                  </span>
                  <div className="scale-75 origin-right shrink-0 -my-2">
                    <FullStackArtwork />
                  </div>
                </div>
                <div className="space-y-2 mt-auto">
                  <h3 className="text-[1.45rem] font-bold font-display text-black tracking-tight leading-[1.14]">
                    {t.services.items[2].title}
                  </h3>
                  <p className="text-sm text-black/75 font-sans leading-relaxed">
                    {t.services.items[2].subtitle}
                  </p>
                </div>
              </div>

              {/* Desktop Layout: Classic Bento Side-by-Side (Untouched) */}
              <div className="hidden md:flex items-center justify-between gap-3 sm:gap-4 md:gap-6 my-auto">
                <div className="space-y-1.5 md:space-y-2 flex-1 min-w-0 pr-1 md:pr-0 md:max-w-[65%]">
                  <span className="block text-xs font-mono font-medium text-black/40 tracking-wider select-none">
                    {t.services.items[2].number}
                  </span>
                  <h3 className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-semibold md:font-normal font-display text-black tracking-tight leading-snug md:leading-normal">
                    {t.services.items[2].title}
                  </h3>
                  <p className="text-xs md:text-sm text-black/65 font-sans leading-relaxed">
                    {t.services.items[2].subtitle}
                  </p>
                </div>

                <div className="scale-75 sm:scale-90 md:scale-100 origin-right shrink-0">
                  <FullStackArtwork />
                </div>
              </div>
            </TiltCard>
          </div>

          {/* Card 004: Hosting Cloud y Soporte Opcional */}
          <div className="service-card-item will-change-[transform,opacity] h-full shrink-0 w-[84vw] sm:w-[75vw] md:w-auto md:shrink snap-center md:snap-align-none">
            <TiltCard
              maxTilt={3}
              scale={1.01}
              className="p-6 sm:p-7 md:p-9 rounded-2xl md:rounded-[2rem] bg-white border border-black/[0.08] shadow-xs hover:shadow-xl hover:border-black/20 transition-all duration-500 flex flex-col justify-between md:justify-center h-full group cursor-default relative"
            >
              {/* Mobile Layout: Vertical Editorial Flow */}
              <div className="flex flex-col justify-between h-full md:hidden">
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="text-xs font-mono font-semibold tracking-widest text-black/50 select-none">
                    {t.services.items[3].number}
                  </span>
                  <div className="scale-75 origin-right shrink-0 -my-2">
                    <SupportArtwork />
                  </div>
                </div>
                <div className="space-y-2 mt-auto">
                  <h3 className="text-[1.45rem] font-bold font-display text-black tracking-tight leading-[1.14]">
                    {t.services.items[3].title}
                  </h3>
                  <p className="text-sm text-black/75 font-sans leading-relaxed">
                    {t.services.items[3].subtitle}
                  </p>
                </div>
              </div>

              {/* Desktop Layout: Classic Bento Side-by-Side (Untouched) */}
              <div className="hidden md:flex items-center justify-between gap-3 sm:gap-4 md:gap-6 my-auto">
                <div className="space-y-1.5 md:space-y-2 flex-1 min-w-0 pr-1 md:pr-0 md:max-w-[65%]">
                  <span className="block text-xs font-mono font-medium text-black/40 tracking-wider select-none">
                    {t.services.items[3].number}
                  </span>
                  <h3 className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-semibold md:font-normal font-display text-black tracking-tight leading-snug md:leading-normal">
                    {t.services.items[3].title}
                  </h3>
                  <p className="text-xs md:text-sm text-black/65 font-sans leading-relaxed">
                    {t.services.items[3].subtitle}
                  </p>
                </div>

                <div className="scale-75 sm:scale-90 md:scale-100 origin-right shrink-0">
                  <SupportArtwork />
                </div>
              </div>
            </TiltCard>
          </div>
        </div>

        {/* Mobile Swipe Pagination Indicator */}
        <div className="flex md:hidden items-center justify-center gap-1.5 pt-4">
          {[0, 1, 2, 3].map((idx) => (
            <span
              key={idx}
              className={`h-1 rounded-full transition-all duration-300 ${
                mobileActiveIndex === idx ? 'w-5 bg-black' : 'w-1.5 bg-black/20'
              }`}
            />
          ))}
        </div>

      </div>

    </section>
  );
};
