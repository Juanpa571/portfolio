import React from 'react';
import { siteConfig } from '../../config/site';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[calc(100vh-5.5rem)] min-h-[calc(100dvh-5.5rem)] flex flex-col justify-between border-b border-black/[0.08] overflow-hidden">
      
      {/* Centered Monumental Content Area */}
      <div className="max-w-[1400px] w-full mx-auto px-6 sm:px-12 flex-1 flex flex-col justify-center py-8 sm:py-12">
        
        {/* Monumental Asymmetric Typographic Statement */}
        <div className="space-y-2 sm:space-y-4 select-none">
          
          {/* Line 1: Bold Left Anchor */}
          <div
            className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.2vw] font-normal font-display tracking-[-0.01em] text-black leading-[1.06] sm:leading-[1.1] pb-1 cursor-default group transition-transform duration-300 hover:translate-x-1"
            data-interactive
          >
            <span className="inline-block transition-transform duration-300 group-hover:scale-[1.01] origin-left">
              Design
            </span>{' '}
            <span className="font-light italic text-black/45 normal-case group-hover:text-black/70 transition-colors duration-300">
              meets
            </span>
          </div>

          {/* Line 2: Balanced Subtle Architectural Indent */}
          <div
            className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.2vw] font-normal font-display tracking-[-0.01em] text-black leading-[1.06] sm:leading-[1.1] pb-1 sm:pl-8 md:pl-12 lg:pl-14 cursor-default group transition-transform duration-300 hover:translate-x-1"
            data-interactive
          >
            <span className="inline-block transition-transform duration-300 group-hover:scale-[1.01] origin-left">
              Production
            </span>
          </div>

          {/* Line 3: Clean Contrast Line */}
          <div
            className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.2vw] font-normal font-display tracking-[-0.01em] text-black/55 hover:text-black leading-[1.06] sm:leading-[1.1] pb-1 cursor-default transition-all duration-500 hover:translate-x-1"
            data-interactive
          >
            <span className="inline-block hover:scale-[1.01] origin-left transition-transform duration-300">
              Code & Architecture.
            </span>
          </div>
        </div>

      </div>

      {/* Clean Bottom Orientation Bar (Within the viewport, above the fold) */}
      <div className="max-w-[1400px] w-full mx-auto px-6 sm:px-12 pb-8 sm:pb-10 flex items-center justify-between text-xs font-mono text-black/60 select-none">
        <div className="flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          <span>{siteConfig.profile.location}</span>
        </div>
        <div className="flex items-center gap-2 text-black/40 hover:text-black transition-colors cursor-default">
          <span>Scroll to explore</span>
          <span>↓</span>
        </div>
      </div>

    </section>
  );
};
