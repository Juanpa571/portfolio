import React, { useEffect, useRef } from 'react';
import { siteConfig } from '../../config/site';
import { useLiveTime } from '../../hooks/useLiveTime';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Footer: React.FC = () => {
  const liveTime = useLiveTime(siteConfig.profile.timezone);
  const containerRef = useRef<HTMLElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Dennis Snellenberg dynamic curved horizon morph
      if (pathRef.current) {
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'top 25%',
          scrub: true,
          onUpdate: (self) => {
            // self.progress goes from 0 to 1
            // at progress 0: curve arches upwards with peak at 0
            // at progress 1: curve flattens completely to 120
            const curveY = 120 * (1 - self.progress);
            pathRef.current?.setAttribute(
              'd',
              `M0,120 Q720,${curveY.toFixed(1)} 1440,120 L1440,120 L0,120 Z`
            );
          },
        });
      }

      // Parallax lift for the inner content
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current,
          { y: 70, opacity: 0.85 },
          {
            y: 0,
            opacity: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 90%',
              end: 'top 20%',
              scrub: 0.6,
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Snellenberg-Style Magnetic Hover for the big circular CTA button
  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    buttonRef.current.style.transform = `translate3d(${x * 0.28}px, ${y * 0.28}px, 0) scale(1.04)`;
  };

  const handleMouseLeave = () => {
    if (!buttonRef.current) return;
    buttonRef.current.style.transform = `translate3d(0px, 0px, 0) scale(1)`;
  };

  return (
    <footer
      id="contact"
      ref={containerRef}
      className="relative bg-[#0c0d12] text-white overflow-hidden min-h-screen flex flex-col justify-between select-none"
    >
      {/* 1. Dennis Snellenberg Signature Curved Horizon Bridge */}
      <div className="relative w-full overflow-hidden leading-none -mt-px pointer-events-none bg-[#fafaf8]">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          preserveAspectRatio="none"
          className="w-full h-16 sm:h-24 md:h-32 lg:h-36 text-[#0c0d12] fill-current block"
        >
          <path
            ref={pathRef}
            d="M0,120 Q720,0 1440,120 L1440,120 L0,120 Z"
          />
        </svg>
      </div>

      {/* 2. Full-Viewport Monumental Workspace */}
      <div
        ref={contentRef}
        className="max-w-[1400px] w-full mx-auto px-6 sm:px-12 lg:px-16 pt-8 sm:pt-14 lg:pt-20 pb-8 sm:pb-12 flex-1 flex flex-col justify-between will-change-transform"
      >
        {/* Top Header: Avatar + Monumental Headline */}
        <div className="space-y-4 sm:space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 sm:gap-7 lg:gap-9 flex-wrap">
              
              {/* Circular Avatar Container (Portrait Structural Placeholder) */}
              <div
                className="w-16 h-16 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden bg-[#1a1b23] border-2 border-white/20 shrink-0 relative flex items-center justify-center font-display font-bold text-xl sm:text-2xl text-white/90 shadow-2xl group cursor-pointer"
                title="Juan Pablo Chacón — Creative Engineer"
                data-interactive
              >
                <span className="tracking-tight">JP</span>
                {/* Solitary Emerald Vitality Beacon */}
                <span className="absolute bottom-1 right-1 sm:bottom-1.5 sm:right-1.5 flex h-3.5 w-3.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-[#0c0d12]"></span>
                </span>
              </div>

              <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.5vw] font-bold font-display tracking-tight text-white leading-none uppercase">
                Let’s work
              </h2>
            </div>

            {/* Subtle Directional Corner Arrow */}
            <span className="hidden md:block text-5xl lg:text-7xl font-light text-white/25 font-mono leading-none select-none">
              ↘
            </span>
          </div>

          <div className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.5vw] font-bold font-display tracking-tight text-white leading-none uppercase">
            together.
          </div>
        </div>

        {/* Middle Section: Full-Width Divider Line & Floating Magnetic Action Button */}
        <div className="relative my-14 sm:my-20 lg:my-24">
          <div className="w-full h-px bg-white/15" />

          {/* Magnetic Floating Circular Action Button (Dennis Snellenberg Style) */}
          <div className="absolute right-4 sm:right-10 lg:right-20 top-1/2 -translate-y-1/2 z-20">
            <a
              ref={buttonRef}
              href={siteConfig.profile.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="w-36 h-36 sm:w-44 sm:h-44 lg:w-52 lg:h-52 rounded-full bg-white text-[#0c0d12] font-display font-bold text-base sm:text-lg flex flex-col items-center justify-center shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] active:scale-95 transition-transform duration-300 group cursor-pointer text-center p-4 border-4 border-white/10 select-none"
              style={{ transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)' }}
              data-interactive
            >
              <span className="text-lg sm:text-xl font-bold tracking-tight">Get in touch</span>
              <span className="text-xs font-mono text-black/60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200 mt-1 flex items-center gap-1 font-medium">
                <span>WhatsApp</span>
                <span>↗</span>
              </span>
            </a>
          </div>
        </div>

        {/* Direct Action Pills (Email & Direct Phone) */}
        <div className="space-y-8">
          <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 max-w-2xl">
            {/* Email Pill */}
            <a
              href={`mailto:${siteConfig.profile.contact.email}`}
              className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-full border border-white/20 text-white font-mono text-xs sm:text-sm hover:bg-white hover:text-black hover:border-white transition-all duration-300 flex items-center gap-3 cursor-pointer group shadow-sm active:scale-95"
              data-interactive
            >
              <span className="text-white/40 group-hover:text-black/50 text-xs">EMAIL</span>
              <span className="font-medium truncate">{siteConfig.profile.contact.email}</span>
              <span className="text-white/40 group-hover:text-black group-hover:translate-x-0.5 transition-all">↗</span>
            </a>

            {/* Direct Phone / WhatsApp Pill */}
            <a
              href={siteConfig.profile.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-full border border-white/20 text-white font-mono text-xs sm:text-sm hover:bg-white hover:text-black hover:border-white transition-all duration-300 flex items-center gap-3 cursor-pointer group shadow-sm active:scale-95"
              data-interactive
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span className="font-medium">+61 405667961</span>
              <span className="text-white/40 group-hover:text-black group-hover:translate-x-0.5 transition-all">↗</span>
            </a>
          </div>

          {/* Availability Telemetry Pill */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-white/70">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Accepting select builds for Q2 • Direct collaboration</span>
          </div>
        </div>

        {/* Bottom Colophon & Global Telemetry */}
        <div className="pt-12 sm:pt-16 mt-12 sm:mt-16 border-t border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 text-xs font-mono text-white/40">
          <div className="flex flex-wrap items-center gap-6 sm:gap-8">
            <div>
              <span className="text-white/25 block text-[10px] uppercase font-semibold">VERSION</span>
              <span className="text-white/80 font-medium">2026 © Edition</span>
            </div>
            <div>
              <span className="text-white/25 block text-[10px] uppercase font-semibold">LOCAL TIME</span>
              <span className="text-white/80 font-medium">{liveTime || '14:20 COT'} • Cali, Colombia</span>
            </div>
          </div>

          <div className="flex items-center gap-5 sm:gap-6 text-white/60 text-[11px]">
            <a
              href={siteConfig.profile.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              data-interactive
            >
              WhatsApp ↗
            </a>
            <a
              href={`mailto:${siteConfig.profile.contact.email}`}
              className="hover:text-white transition-colors"
              data-interactive
            >
              Email ↗
            </a>
            <span className="text-white/20">•</span>
            <span className="text-white/50">Remote Worldwide</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
