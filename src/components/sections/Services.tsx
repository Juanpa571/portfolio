import React, { useEffect, useRef } from 'react';
import { siteConfig } from '../../config/site';
import { TiltCard } from '../ui/TiltCard';
import { UiUxArtwork } from './services/UiUxArtwork';
import { FrontendCraftArtwork } from './services/FrontendCraftArtwork';
import { FullStackArtwork } from './services/FullStackArtwork';
import { SupportArtwork } from './services/SupportArtwork';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Services: React.FC = () => {
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
                  Built on trust.
                </span>
                <span
                  ref={line1FillRef}
                  className="absolute inset-0 text-black select-none will-change-transform"
                  style={{ clipPath: 'inset(0 100% 0 0)' }}
                >
                  Built on trust.
                </span>
              </div>
              <br />
              {/* Line 2: Shaped by craft. (Asymmetric indent) */}
              <div className="relative inline-block sm:pl-12 lg:pl-20 pb-1">
                <span className="text-transparent [-webkit-text-stroke:1.2px_rgba(0,0,0,0.3)] sm:[-webkit-text-stroke:1.5px_rgba(0,0,0,0.35)] select-none">
                  Shaped by craft.
                </span>
                <span
                  ref={line2FillRef}
                  className="absolute inset-0 sm:pl-12 lg:pl-20 text-black select-none will-change-transform"
                  style={{ clipPath: 'inset(0 100% 0 0)' }}
                >
                  Shaped by craft.
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

        {/* Balanced 2x2 Bento Grid with Bespoke Interactive Artworks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 items-stretch">
          
          {/* Card 001: UI/UX Design */}
          <div>
            <TiltCard
              maxTilt={3}
              scale={1.01}
              className="p-6 sm:p-9 rounded-3xl bg-white border border-black/[0.08] shadow-xs hover:shadow-xl hover:border-black/20 transition-all duration-300 flex flex-col justify-center h-full group cursor-pointer"
              data-interactive
            >
              <div className="flex items-center justify-between gap-6 my-auto">
                <div className="space-y-1.5 max-w-[58%]">
                  <h3 className="text-2xl sm:text-3xl font-normal sm:font-medium font-display text-black tracking-tight group-hover:translate-x-1 transition-transform">
                    {siteConfig.services[0].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-black/75 font-sans">
                    {siteConfig.services[0].subtitle}
                  </p>
                </div>

                <UiUxArtwork />
              </div>
            </TiltCard>
          </div>

          {/* Card 002: Frontend Craft (Stark Inverted Dark Card) */}
          <div>
            <TiltCard
              maxTilt={3}
              scale={1.01}
              className="p-6 sm:p-9 rounded-3xl bg-[#1C1D20] text-white border border-white/10 shadow-xl hover:shadow-2xl hover:border-white/25 transition-all duration-300 flex flex-col justify-center h-full group cursor-pointer"
              data-interactive
            >
              <div className="flex items-center justify-between gap-6 my-auto">
                <div className="space-y-1.5 max-w-[58%]">
                  <h3 className="text-2xl sm:text-3xl font-normal sm:font-medium font-display text-white tracking-tight group-hover:translate-x-1 transition-transform">
                    {siteConfig.services[1].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/80 font-sans">
                    {siteConfig.services[1].subtitle}
                  </p>
                </div>

                <FrontendCraftArtwork />
              </div>
            </TiltCard>
          </div>

          {/* Card 003: Full-Stack & APIs */}
          <div>
            <TiltCard
              maxTilt={3}
              scale={1.01}
              className="p-6 sm:p-9 rounded-3xl bg-white border border-black/[0.08] shadow-xs hover:shadow-xl hover:border-black/20 transition-all duration-300 flex flex-col justify-center h-full group cursor-pointer"
              data-interactive
            >
              <div className="flex items-center justify-between gap-6 my-auto">
                <div className="space-y-1.5 max-w-[58%]">
                  <h3 className="text-2xl sm:text-3xl font-normal sm:font-medium font-display text-black tracking-tight group-hover:translate-x-1 transition-transform">
                    {siteConfig.services[2].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-black/75 font-sans">
                    {siteConfig.services[2].subtitle}
                  </p>
                </div>

                <FullStackArtwork />
              </div>
            </TiltCard>
          </div>

          {/* Card 004: Ongoing Support */}
          <div>
            <TiltCard
              maxTilt={3}
              scale={1.01}
              className="p-6 sm:p-9 rounded-3xl bg-white border border-black/[0.08] shadow-xs hover:shadow-xl hover:border-black/20 transition-all duration-300 flex flex-col justify-center h-full group cursor-pointer relative"
              data-interactive
            >
              <div className="flex items-center justify-between gap-6 my-auto">
                <div className="space-y-1.5 max-w-[58%]">
                  <h3 className="text-2xl sm:text-3xl font-normal sm:font-medium font-display text-black tracking-tight group-hover:translate-x-1 transition-transform">
                    {siteConfig.services[3].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-black/75 font-sans">
                    {siteConfig.services[3].subtitle}
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
