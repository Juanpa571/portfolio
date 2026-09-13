import React from 'react';
import { siteConfig } from '../../config/site';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-10 pb-24 lg:pt-14 lg:pb-36 border-b border-black/[0.08] overflow-hidden">
      
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
        
        {/* Asymmetric Top Meta Track with Studio Telemetry */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-12 sm:pb-16 text-xs font-mono text-black/70 border-b border-black/[0.05]">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-black font-semibold uppercase tracking-wider">Available for select client builds</span>
            <span className="text-black/30">/</span>
            <span>Cali, Colombia (UTC-5)</span>
          </div>
          <div className="flex items-center gap-4 text-right tracking-tight font-medium text-black/70">
            <span>JP Studios</span>
            <span className="text-black/30">•</span>
            <span>Design & Full-Stack Engineering</span>
          </div>
        </div>

        {/* Monumental Asymmetric Typographic Statement */}
        <div className="pt-12 sm:pt-16 pb-16 sm:pb-24 space-y-3 sm:space-y-5 select-none">
          
          {/* Line 1: Bold Left Anchor */}
          <div
            className="text-6xl sm:text-8xl md:text-9xl lg:text-[8.5vw] font-bold font-display tracking-tighter text-black leading-[0.88] uppercase cursor-default group transition-transform duration-300 hover:translate-x-2"
            data-interactive
          >
            <span className="inline-block transition-transform duration-300 group-hover:scale-[1.01] origin-left">
              Design
            </span>{' '}
            <span className="font-light italic text-black/45 normal-case group-hover:text-black/70 transition-colors duration-300">
              meets
            </span>
          </div>

          {/* Line 2: Deep Asymmetric Indentation with Off-Axis Floating Badge */}
          <div
            className="text-6xl sm:text-8xl md:text-9xl lg:text-[8.5vw] font-bold font-display tracking-tighter text-black leading-[0.88] uppercase sm:pl-20 md:pl-36 lg:pl-48 flex flex-wrap items-baseline gap-4 sm:gap-6 cursor-default group transition-transform duration-300 hover:translate-x-2"
            data-interactive
          >
            <span className="inline-block transition-transform duration-300 group-hover:scale-[1.01] origin-left">
              Production
            </span>
            <a
              href="#services"
              className="text-xs sm:text-sm font-mono tracking-normal uppercase bg-black text-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-full align-middle hover:bg-black/85 hover:scale-105 active:scale-95 transition-all duration-300 shadow-md cursor-pointer inline-flex items-center gap-2"
              data-interactive
              title="See our direct model"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span>Zero handoffs</span>
              <span className="text-xs">↓</span>
            </a>
          </div>

          {/* Line 3: Muted Offset Contrast */}
          <div
            className="text-6xl sm:text-8xl md:text-9xl lg:text-[8.5vw] font-bold font-display tracking-tighter text-black/50 hover:text-black leading-[0.88] uppercase sm:pl-10 md:pl-16 lg:pl-24 cursor-default transition-all duration-500 hover:translate-x-2"
            data-interactive
          >
            <span className="inline-block hover:scale-[1.01] origin-left transition-transform duration-300">
              Code & Architecture.
            </span>
          </div>
        </div>

        {/* Asymmetric 3-Part Editorial Grid (Tension & Broken Symmetry) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 pt-12 border-t border-black/[0.06] items-start">
          
          {/* Column 1: Studio Architectural Metrics (Col 1-4) */}
          <div className="lg:col-span-4 space-y-4 font-mono text-xs text-black/70 border-b lg:border-b-0 lg:border-r border-black/[0.06] pb-8 lg:pb-0 lg:pr-8">
            <div className="text-[11px] uppercase tracking-widest text-black/60 font-semibold">
              Studio Operating Model
            </div>
            <div className="space-y-2.5 pt-1 text-black/80">
              <div className="flex justify-between items-center py-1 border-b border-black/[0.04]">
                <span className="text-black/60 font-medium">DISCIPLINE</span>
                <span className="text-black font-semibold">Design + Full-Stack Code</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-black/[0.04]">
                <span className="text-black/60 font-medium">HIERARCHY</span>
                <span className="text-black font-semibold">1:1 Direct With Engineer</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-black/[0.04]">
                <span className="text-black/60 font-medium">SPRINT CADENCE</span>
                <span className="text-black font-semibold">Rapid Iteration via WhatsApp</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-black/60 font-medium">LIFECYCLE</span>
                <span className="text-black font-semibold">Figma to Deployed Cloud</span>
              </div>
            </div>
          </div>

          {/* Column 2: Unfiltered Human Thesis (Col 5-8) */}
          <div className="lg:col-span-4 space-y-4 lg:pt-1">
            <div className="text-[11px] font-mono uppercase tracking-widest text-black/60 font-semibold">
              Thesis
            </div>
            <p className="text-lg sm:text-xl text-black/80 font-normal leading-relaxed">
              I build web products from creative direction to production cloud infrastructure. No account executives. No junior delegation. You talk directly with the engineer shaping your software.
            </p>
          </div>

          {/* Column 3: Asymmetric Direct Actions (Col 9-12) */}
          <div className="lg:col-span-4 flex flex-col gap-3.5 lg:pl-4">
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
