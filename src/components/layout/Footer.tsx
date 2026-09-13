import React, { useEffect, useRef } from 'react';
import { siteConfig } from '../../config/site';
import { useLiveTime } from '../../hooks/useLiveTime';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Footer: React.FC = () => {
  const liveTime = useLiveTime(siteConfig.profile.timezone);
  const footerRef = useRef<HTMLElement | null>(null);
  const curveRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    if (!curveRef.current || !footerRef.current) return;

    const ctx = gsap.context(() => {
      // Dennis Snellenberg dynamic curved transition:
      // When entering the viewport, the white rounded shape arches down into the dark section.
      // As the user scrolls down, the white curve shrinks from 130px to 0px, flattening out completely.
      gsap.to(curveRef.current, {
        height: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top bottom',
          end: 'top 15%',
          scrub: true,
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  // Snellenberg Magnetic Hover on Circular Action Button
  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    buttonRef.current.style.transform = `translate3d(${x * 0.32}px, ${y * 0.32}px, 0) scale(1.05)`;
  };

  const handleMouseLeave = () => {
    if (!buttonRef.current) return;
    buttonRef.current.style.transform = `translate3d(0px, 0px, 0) scale(1)`;
  };

  return (
    <footer
      id="contact"
      ref={footerRef}
      className="relative bg-[#1c1d20] text-white min-h-screen flex flex-col justify-between overflow-hidden select-none"
    >
      {/* 1. Dennis Snellenberg Dynamic White Curve Transition */}
      <div className="relative w-full overflow-hidden bg-[#1c1d20] pointer-events-none z-10">
        <div
          ref={curveRef}
          className="w-[150%] -left-[25%] relative bg-[#fafaf8] rounded-b-[50%] shadow-[0_35px_50px_rgba(0,0,0,0.22)] will-change-[height]"
          style={{ height: '130px' }}
        />
      </div>

      {/* 2. Full-Viewport Immersive Section */}
      <div className="max-w-[1500px] w-full mx-auto px-6 sm:px-14 lg:px-20 pt-10 sm:pt-16 lg:pt-24 pb-10 sm:pb-14 flex-1 flex flex-col justify-between">
        
        {/* Top: Avatar + "Let's work together" Headline */}
        <div className="flex justify-between items-start pt-2">
          <div className="space-y-3 sm:space-y-5">
            <div className="flex items-center gap-4 sm:gap-7 lg:gap-8">
              
              {/* Circular Avatar / Headshot container */}
              <div
                className="w-16 h-16 sm:w-22 sm:h-22 lg:w-26 lg:h-26 rounded-full overflow-hidden bg-[#2a2b30] border border-white/20 shrink-0 relative flex items-center justify-center text-white/90 font-display font-medium text-xl sm:text-2xl shadow-xl group cursor-pointer"
                title="Juan Pablo Chacón"
                data-interactive
              >
                <span>JP</span>
                {/* Solitary Vitality Beacon */}
                <span className="absolute bottom-1 right-1 sm:bottom-1.5 sm:right-1.5 flex h-3.5 w-3.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-[#1c1d20]"></span>
                </span>
              </div>

              <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-[6.8vw] font-normal font-sans text-white tracking-tight leading-[0.92]">
                Let’s work
              </h2>
            </div>

            <div className="text-5xl sm:text-7xl md:text-8xl lg:text-[6.8vw] font-normal font-sans text-white tracking-tight leading-[0.92]">
              together
            </div>
          </div>

          {/* Elegant Corner Arrow */}
          <div className="hidden sm:block text-4xl sm:text-5xl lg:text-6xl font-light text-white/30 font-mono select-none pt-2">
            ↙
          </div>
        </div>

        {/* Middle: Horizontal Divider Line & Dennis Snellenberg Magnetic Blue Circle Button */}
        <div className="relative my-16 sm:my-24 lg:my-28">
          <div className="w-full h-px bg-white/15" />

          {/* Floating Magnetic Blue Action Button */}
          <div className="absolute right-4 sm:right-14 lg:right-28 top-1/2 -translate-y-1/2 z-20">
            <a
              ref={buttonRef}
              href={siteConfig.profile.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="w-36 h-36 sm:w-44 sm:h-44 lg:w-48 lg:h-48 rounded-full bg-[#455ce9] text-white font-sans text-base sm:text-lg font-medium flex items-center justify-center shadow-[0_20px_50px_rgba(69,92,233,0.35)] active:scale-95 transition-transform duration-300 group cursor-pointer text-center select-none"
              style={{ transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)' }}
              data-interactive
            >
              <span className="group-hover:scale-105 transition-transform duration-200">
                Get in touch
              </span>
            </a>
          </div>
        </div>

        {/* Direct Action Contact Pills */}
        <div className="flex flex-wrap items-center gap-3.5 sm:gap-5">
          <a
            href={`mailto:${siteConfig.profile.contact.email}`}
            className="px-7 sm:px-9 py-4 sm:py-5 rounded-full border border-white/20 text-white font-sans text-sm sm:text-base hover:bg-white hover:text-black hover:border-white transition-all duration-300 flex items-center justify-center cursor-pointer shadow-xs active:scale-95"
            data-interactive
          >
            <span>{siteConfig.profile.contact.email}</span>
          </a>

          <a
            href={siteConfig.profile.contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 sm:px-9 py-4 sm:py-5 rounded-full border border-white/20 text-white font-sans text-sm sm:text-base hover:bg-white hover:text-black hover:border-white transition-all duration-300 flex items-center justify-center cursor-pointer shadow-xs active:scale-95"
            data-interactive
          >
            <span>+61 405667961</span>
          </a>
        </div>

        {/* Bottom Colophon: Version, Local Time, Socials */}
        <div className="pt-16 sm:pt-24 mt-10 border-t border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-8 text-xs font-sans text-white/50">
          <div className="flex items-center gap-10 sm:gap-16">
            <div>
              <span className="text-white/35 block text-[10px] uppercase tracking-wider mb-1 font-mono">VERSION</span>
              <span className="text-white font-medium">2026 © Edition</span>
            </div>
            <div>
              <span className="text-white/35 block text-[10px] uppercase tracking-wider mb-1 font-mono">LOCAL TIME</span>
              <span className="text-white font-medium">{liveTime || '14:25 COT'} • Cali, Colombia</span>
            </div>
          </div>

          <div>
            <span className="text-white/35 block text-[10px] uppercase tracking-wider mb-1 font-mono sm:text-right">SOCIALS</span>
            <div className="flex items-center gap-6 sm:gap-7 text-white font-medium text-xs sm:text-sm">
              <a
                href={siteConfig.profile.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/70 transition-colors"
                data-interactive
              >
                WhatsApp
              </a>
              <a
                href={`mailto:${siteConfig.profile.contact.email}`}
                className="hover:text-white/70 transition-colors"
                data-interactive
              >
                Email
              </a>
              <span className="text-white/25">•</span>
              <span className="text-white/50 font-normal">Remote Worldwide</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
