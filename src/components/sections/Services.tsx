import React, { useEffect, useRef } from 'react';
import { siteConfig } from '../../config/site';
import { TiltCard } from '../ui/TiltCard';
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
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-display tracking-tight leading-[0.95] uppercase">
              {/* Line 1: No committees. */}
              <div className="relative inline-block overflow-hidden">
                <span className="text-transparent [-webkit-text-stroke:1.2px_rgba(0,0,0,0.3)] sm:[-webkit-text-stroke:1.5px_rgba(0,0,0,0.35)] select-none">
                  No committees.
                </span>
                <span
                  ref={line1FillRef}
                  className="absolute inset-0 text-black select-none will-change-transform"
                  style={{ clipPath: 'inset(0 100% 0 0)' }}
                >
                  No committees.
                </span>
              </div>
              <br />
              {/* Line 2: Direct craft. (Asymmetric indent) */}
              <div className="relative inline-block sm:pl-12 lg:pl-20 overflow-hidden">
                <span className="text-transparent [-webkit-text-stroke:1.2px_rgba(0,0,0,0.3)] sm:[-webkit-text-stroke:1.5px_rgba(0,0,0,0.35)] select-none">
                  Direct craft.
                </span>
                <span
                  ref={line2FillRef}
                  className="absolute inset-0 sm:pl-12 lg:pl-20 text-black select-none will-change-transform"
                  style={{ clipPath: 'inset(0 100% 0 0)' }}
                >
                  Direct craft.
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

        {/* Compact Asymmetric Bento Grid (7/5 and 5/7 Proportions, Lean & Focused) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 lg:gap-6 items-stretch">
          
          {/* Card 001: UI/UX Design (Panoramic 7 cols) */}
          <div className="md:col-span-12 lg:col-span-7">
            <TiltCard
              maxTilt={3}
              scale={1.01}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-black/[0.08] shadow-xs hover:shadow-xl hover:border-black/20 transition-all duration-300 flex flex-col justify-between h-full group cursor-pointer"
              data-interactive
            >
              <div className="flex justify-between items-center mb-6">
                <span className="text-xs font-mono text-black/60 group-hover:text-black transition-colors font-semibold">
                  001
                </span>
              </div>

              <div className="flex items-center justify-between gap-6 my-auto">
                <div className="space-y-1.5">
                  <h3 className="text-2xl sm:text-3xl font-bold font-display text-black tracking-tight group-hover:translate-x-1 transition-transform">
                    {siteConfig.services[0].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-black/75 font-sans">
                    {siteConfig.services[0].subtitle}
                  </p>
                </div>

                {/* Bespoke Editorial Viewport Aperture */}
                <div className="shrink-0 w-16 h-16 flex items-center justify-center relative overflow-visible">
                  <svg
                    viewBox="0 0 100 100"
                    className="w-16 h-16 stroke-current text-black/80 overflow-visible transition-transform duration-500 ease-out group-hover:scale-110"
                    fill="none"
                    strokeWidth="1.2"
                  >
                    <path d="M 34 42 L 34 34 L 42 34" className="text-black/50 group-hover:text-black transition-colors duration-300" />
                    <path d="M 58 34 L 66 34 L 66 42" className="text-black/50 group-hover:text-black transition-colors duration-300" />
                    <path d="M 34 58 L 34 66 L 42 66" className="text-black/50 group-hover:text-black transition-colors duration-300" />
                    <path d="M 58 66 L 66 66 L 66 58" className="text-black/50 group-hover:text-black transition-colors duration-300" />
                    <line x1="38" y1="50" x2="44" y2="50" className="text-black/40 group-hover:text-black/70 transition-colors" />
                    <line x1="56" y1="50" x2="62" y2="50" className="text-black/40 group-hover:text-black/70 transition-colors" />
                    <line x1="50" y1="38" x2="50" y2="44" className="text-black/40 group-hover:text-black/70 transition-colors" />
                    <line x1="50" y1="56" x2="50" y2="62" className="text-black/40 group-hover:text-black/70 transition-colors" />
                    <circle cx="50" cy="50" r="12" className="text-black/60 group-hover:text-black transition-all duration-300 origin-center" />
                    <circle cx="50" cy="50" r="2.5" fill="currentColor" className="text-black group-hover:scale-125 transition-transform origin-center" />
                  </svg>
                </div>
              </div>
            </TiltCard>
          </div>

          {/* Card 002: Frontend Craft (STARK INVERTED DARK CARD - 5 cols) */}
          <div className="md:col-span-12 lg:col-span-5">
            <TiltCard
              maxTilt={3}
              scale={1.01}
              className="p-6 sm:p-8 rounded-3xl bg-[#0c0d12] text-white border border-white/10 shadow-xl hover:shadow-2xl hover:border-white/25 transition-all duration-300 flex flex-col justify-between h-full group cursor-pointer"
              data-interactive
            >
              <div className="flex justify-between items-center mb-6">
                <span className="text-xs font-mono text-white/60 group-hover:text-white transition-colors font-semibold">
                  002
                </span>
              </div>

              <div className="flex items-center justify-between gap-6 my-auto">
                <div className="space-y-1.5">
                  <h3 className="text-2xl sm:text-3xl font-bold font-display text-white tracking-tight group-hover:translate-x-1 transition-transform">
                    {siteConfig.services[1].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/80 font-sans">
                    {siteConfig.services[1].subtitle}
                  </p>
                </div>

                {/* Precision Isometric Polyhedron in Crisp White Line */}
                <div className="shrink-0 w-16 h-16 flex items-center justify-center relative overflow-visible">
                  <svg
                    viewBox="0 0 100 100"
                    className="w-16 h-16 stroke-current text-white/80 overflow-visible transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-6 origin-center"
                    fill="none"
                    strokeWidth="1.2"
                  >
                    <path
                      d="M 50 26 L 71 38 L 71 62 L 50 74 L 29 62 L 29 38 Z"
                      className="text-white/50 group-hover:text-white/80 transition-colors duration-300"
                    />
                    <line x1="50" y1="26" x2="50" y2="50" className="text-white/70 group-hover:text-white transition-colors" />
                    <line x1="71" y1="62" x2="50" y2="50" className="text-white/70 group-hover:text-white transition-colors" />
                    <line x1="29" y1="62" x2="50" y2="50" className="text-white/70 group-hover:text-white transition-colors" />
                    <path
                      d="M 50 26 L 71 38 L 50 50 L 29 38 Z"
                      className="fill-white/[0.04] group-hover:fill-white/[0.12] transition-colors duration-300"
                    />
                    <circle cx="50" cy="50" r="2.5" fill="currentColor" className="text-white group-hover:scale-125 transition-transform origin-center" />
                  </svg>
                </div>
              </div>
            </TiltCard>
          </div>

          {/* Card 003: Full-Stack & APIs (Compact 5 cols) */}
          <div className="md:col-span-12 lg:col-span-5">
            <TiltCard
              maxTilt={3}
              scale={1.01}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-black/[0.08] shadow-xs hover:shadow-xl hover:border-black/20 transition-all duration-300 flex flex-col justify-between h-full group cursor-pointer"
              data-interactive
            >
              <div className="flex justify-between items-center mb-6">
                <span className="text-xs font-mono text-black/60 group-hover:text-black transition-colors font-semibold">
                  003
                </span>
              </div>

              <div className="flex items-center justify-between gap-6 my-auto">
                <div className="space-y-1.5">
                  <h3 className="text-2xl sm:text-3xl font-bold font-display text-black tracking-tight group-hover:translate-x-1 transition-transform">
                    {siteConfig.services[2].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-black/75 font-sans">
                    {siteConfig.services[2].subtitle}
                  </p>
                </div>

                <div className="shrink-0 w-16 h-16 flex items-center justify-center relative overflow-visible">
                  <svg
                    viewBox="0 0 100 100"
                    className="w-16 h-16 stroke-current text-black/80 overflow-visible transition-transform duration-500 ease-out group-hover:scale-110 origin-center"
                    fill="none"
                    strokeWidth="1.2"
                  >
                    <circle cx="50" cy="30" r="8.5" strokeDasharray="2.5 2.5" className="text-black/35 group-hover:text-black/70 group-hover:rotate-45 transition-all duration-500 origin-[50px_30px]" />
                    <circle cx="50" cy="30" r="4" className="text-black group-hover:fill-black/20 transition-colors" />
                    <path d="M 50 34.5 L 50 49" className="text-black/50 group-hover:text-black transition-colors" />
                    <path d="M 34 49 L 66 49" className="text-black/50 group-hover:text-black transition-colors" />
                    <path d="M 34 49 L 34 63.5" className="text-black/50 group-hover:text-black transition-colors" />
                    <path d="M 66 49 L 66 63.5" className="text-black/50 group-hover:text-black transition-colors" />
                    <circle cx="34" cy="68" r="4" className="text-black/70 group-hover:text-black group-hover:fill-black/20 transition-colors" />
                    <circle cx="66" cy="68" r="4" className="text-black/70 group-hover:text-black group-hover:fill-black/20 transition-colors" />
                    <circle cx="50" cy="49" r="2" fill="currentColor" className="text-black group-hover:scale-150 transition-transform origin-center" />
                  </svg>
                </div>
              </div>
            </TiltCard>
          </div>

          {/* Card 004: Ongoing Support (Panoramic 7 cols) */}
          <div className="md:col-span-12 lg:col-span-7">
            <TiltCard
              maxTilt={3}
              scale={1.01}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-black/[0.08] shadow-xs hover:shadow-xl hover:border-black/20 transition-all duration-300 flex flex-col justify-between h-full group cursor-pointer"
              data-interactive
            >
              <div className="flex justify-between items-center mb-6">
                <span className="text-xs font-mono text-black/60 group-hover:text-black transition-colors font-semibold">
                  004
                </span>
                <span className="text-[11px] font-mono px-3 py-0.5 rounded-full bg-emerald-50 text-emerald-900 border border-emerald-300 font-semibold flex items-center gap-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  Active Retainer
                </span>
              </div>

              <div className="flex items-center justify-between gap-6 my-auto">
                <div className="space-y-1.5">
                  <h3 className="text-2xl sm:text-3xl font-bold font-display text-black tracking-tight group-hover:translate-x-1 transition-transform">
                    {siteConfig.services[3].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-black/75 font-sans">
                    {siteConfig.services[3].subtitle}
                  </p>
                </div>

                {/* Harmonic Orbital Gyroscope Emblem */}
                <div className="shrink-0 w-16 h-16 flex items-center justify-center relative overflow-visible">
                  <svg
                    viewBox="0 0 100 100"
                    className="w-16 h-16 stroke-current text-black/80 overflow-visible transition-transform duration-500 ease-out group-hover:scale-110 origin-center"
                    fill="none"
                    strokeWidth="1.2"
                  >
                    <circle cx="50" cy="50" r="24" strokeDasharray="3 3" className="text-black/35 group-hover:text-black/60 transition-colors" />
                    <ellipse cx="50" cy="50" rx="22" ry="9.5" transform="rotate(-28 50 50)" className="text-black/55 group-hover:text-black transition-colors" />
                    <ellipse cx="50" cy="50" rx="22" ry="9.5" transform="rotate(28 50 50)" className="text-black/55 group-hover:text-black transition-colors" />
                    <circle cx="50" cy="50" r="3" fill="currentColor" className="text-black group-hover:scale-125 transition-transform origin-center" />
                    <circle cx="34" cy="42" r="1.5" fill="currentColor" className="text-black/50 group-hover:text-black transition-colors" />
                    <circle cx="66" cy="58" r="1.5" fill="currentColor" className="text-black/50 group-hover:text-black transition-colors" />
                  </svg>
                </div>
              </div>
            </TiltCard>
          </div>

        </div>

      </div>

    </section>
  );
};
