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
    }, headerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" className="py-16 lg:py-24 border-b border-black/[0.08] relative overflow-hidden">
      
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
        
        {/* Asymmetric Section Header with Refokus-Style Kinetic Morph */}
        <div ref={headerRef} className="relative mb-12 lg:mb-16 pb-6">
          <div className="space-y-3 max-w-4xl">
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-normal font-display tracking-[-0.01em] leading-[1.12] sm:leading-[1.15]">
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
              <div className="relative inline-block sm:pl-12 lg:pl-20 pb-1">
                <span className="text-transparent [-webkit-text-stroke:1.2px_rgba(0,0,0,0.3)] sm:[-webkit-text-stroke:1.5px_rgba(0,0,0,0.35)] select-none">
                  {t.services.headerLine2}
                </span>
                <span
                  ref={line2FillRef}
                  className="absolute inset-0 sm:pl-12 lg:pl-20 text-black select-none will-change-transform"
                  style={{ clipPath: 'inset(0 100% 0 0)' }}
                >
                  {t.services.headerLine2}
                </span>
              </div>
            </h2>
          </div>

          {/* Animated Ruler Line drawn on scroll */}
          <div
            ref={rulerRef}
            className="w-full h-[1px] bg-black/[0.08] mt-8 origin-left will-change-transform"
          />
        </div>

        {/* Asymmetric Bento Architecture with Organic Masonry Stagger */}
        <div className="space-y-5 lg:space-y-7">
          {/* Row 1: Cards 001 and 002 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 lg:gap-7 items-stretch">
            {/* Card 001: UI/UX Design (7 cols) */}
            <div className="md:col-span-12 lg:col-span-7">
              <TiltCard
                maxTilt={3}
                scale={1.01}
                className="p-7 sm:p-9 rounded-[2rem] bg-white border border-black/[0.08] shadow-xs hover:shadow-xl hover:border-black/20 transition-all duration-500 flex flex-col justify-center h-full group cursor-pointer"
                data-interactive
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 my-auto">
                  <div className="space-y-1.5 max-w-sm">
                    <h3 className="text-2xl sm:text-3xl font-normal font-display text-black tracking-tight group-hover:translate-x-1.5 transition-transform duration-300">
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

            {/* Card 002: Frontend Craft — Inverted Dark Monolith (5 cols) */}
            <div className="md:col-span-12 lg:col-span-5">
              <TiltCard
                maxTilt={3.5}
                scale={1.01}
                className="p-7 sm:p-9 rounded-[2rem] bg-[#1C1D20] text-white border border-white/10 shadow-xl hover:shadow-2xl hover:border-white/25 transition-all duration-500 flex flex-col justify-center h-full group cursor-pointer relative overflow-hidden"
                data-interactive
              >
                <div className="flex items-center justify-between gap-6 my-auto">
                  <div className="space-y-1.5 max-w-[65%]">
                    <h3 className="text-2xl sm:text-3xl font-normal font-display text-white tracking-tight group-hover:translate-x-1.5 transition-transform duration-300">
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
          </div>

          {/* Row 2: Cards 003 and 004 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 lg:gap-7 items-stretch">
            {/* Card 003: Turnkey Launch — Compact Engine (5 cols) */}
            <div className="md:col-span-12 lg:col-span-5">
              <TiltCard
                maxTilt={3}
                scale={1.01}
                className="p-7 sm:p-9 rounded-[2rem] bg-white border border-black/[0.08] shadow-xs hover:shadow-xl hover:border-black/20 transition-all duration-500 flex flex-col justify-center h-full group cursor-pointer"
                data-interactive
              >
                <div className="flex items-center justify-between gap-6 my-auto">
                  <div className="space-y-1.5 max-w-[55%]">
                    <h3 className="text-2xl sm:text-3xl font-normal font-display text-black tracking-tight group-hover:translate-x-1.5 transition-transform duration-300">
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

            {/* Card 004: Ongoing Support — Panoramic Sanctuary (7 cols) */}
            <div className="md:col-span-12 lg:col-span-7">
              <TiltCard
                maxTilt={3}
                scale={1.01}
                className="p-7 sm:p-9 rounded-[2rem] bg-white border border-black/[0.08] shadow-xs hover:shadow-xl hover:border-black/20 transition-all duration-500 flex flex-col justify-center h-full group cursor-pointer relative"
                data-interactive
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-8 my-auto">
                  <div className="space-y-1.5 max-w-sm">
                    <h3 className="text-3xl sm:text-4xl font-normal font-display text-black tracking-tight group-hover:translate-x-1.5 transition-transform duration-300">
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

      </div>

    </section>
  );
};
