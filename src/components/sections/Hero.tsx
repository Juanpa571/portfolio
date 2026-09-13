import React from 'react';
import { siteConfig } from '../../config/site';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-10 pb-24 lg:pt-14 lg:pb-36 border-b border-black/[0.08] overflow-hidden">
      
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
        
        {/* Monumental Asymmetric Typographic Statement */}
        <div className="pt-8 sm:pt-12 pb-16 sm:pb-24 space-y-2 sm:space-y-4 select-none">
          
          {/* Line 1: Bold Left Anchor */}
          <div
            className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.2vw] font-bold font-display tracking-tight text-black leading-[0.9] uppercase cursor-default group transition-transform duration-300 hover:translate-x-1"
            data-interactive
          >
            <span className="inline-block transition-transform duration-300 group-hover:scale-[1.01] origin-left">
              Design
            </span>{' '}
            <span className="font-light italic text-black/45 normal-case group-hover:text-black/70 transition-colors duration-300">
              meets
            </span>
          </div>

          {/* Line 2: Balanced Subtle Architectural Indent with Badge */}
          <div
            className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.2vw] font-bold font-display tracking-tight text-black leading-[0.9] uppercase sm:pl-8 md:pl-12 lg:pl-14 flex flex-wrap items-baseline gap-3.5 sm:gap-5 cursor-default group transition-transform duration-300 hover:translate-x-1"
            data-interactive
          >
            <span className="inline-block transition-transform duration-300 group-hover:scale-[1.01] origin-left">
              Production
            </span>
            <a
              href="#services"
              className="text-xs sm:text-sm font-mono tracking-normal uppercase bg-black text-white px-3.5 py-1.5 sm:px-4.5 sm:py-2 rounded-full align-middle hover:bg-black/85 hover:scale-105 active:scale-95 transition-all duration-300 shadow-md cursor-pointer inline-flex items-center gap-2"
              data-interactive
              title="See our direct model"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span>Zero handoffs</span>
              <span className="text-xs">↓</span>
            </a>
          </div>

          {/* Line 3: Clean Contrast Line */}
          <div
            className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.2vw] font-bold font-display tracking-tight text-black/55 hover:text-black leading-[0.9] uppercase cursor-default transition-all duration-500 hover:translate-x-1"
            data-interactive
          >
            <span className="inline-block hover:scale-[1.01] origin-left transition-transform duration-300">
              Code & Architecture.
            </span>
          </div>
        </div>

        {/* Asymmetric 2-Column Editorial Thesis & Direct Action */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 pt-12 border-t border-black/[0.08] items-center">
          
          {/* Left Column: Direct Human Statement (Col 1-7) */}
          <div className="lg:col-span-7">
            <p className="text-xl sm:text-2xl text-black font-sans leading-relaxed tracking-tight">
              I build web products from creative direction to production cloud infrastructure. No account executives. No junior delegation. You talk directly with the engineer shaping your software.
            </p>
          </div>

          {/* Right Column: Direct Actions (Col 8-12) */}
          <div className="lg:col-span-5 flex flex-col gap-3.5">
            <a
              href={siteConfig.profile.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full px-7 py-4 sm:py-5 rounded-2xl bg-black text-white text-sm font-semibold hover:bg-black/85 hover:shadow-xl hover:shadow-black/15 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 text-center flex items-center justify-between group"
              data-interactive
            >
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Start on WhatsApp</span>
              </span>
              <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 font-mono text-xs">↗</span>
            </a>

            <a
              href={`mailto:${siteConfig.profile.contact.email}`}
              className="w-full px-7 py-4 sm:py-5 rounded-2xl bg-white border border-black/15 text-black text-xs sm:text-sm font-mono hover:bg-black/5 hover:border-black/30 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 flex items-center justify-between group"
              data-interactive
            >
              <span className="truncate">{siteConfig.profile.contact.email}</span>
              <span className="text-black/40 group-hover:text-black group-hover:translate-x-0.5 transition-all text-xs">Direct ↗</span>
            </a>
          </div>

        </div>

      </div>

    </section>
  );
};
