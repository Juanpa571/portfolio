import React from 'react';
import { siteConfig } from '../../config/site';
import { Magnetic } from '../ui/Magnetic';

export const Intro: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 lg:py-36 border-b border-black/[0.08] bg-[#fafaf8]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Direct Human Statement (Col 1-7) */}
          <div className="lg:col-span-7">
            <p className="text-2xl sm:text-3xl lg:text-4xl text-black font-sans font-normal leading-snug tracking-tight">
              I partner with founders, studios, and modern brands to design and deliver high-craft web experiences. Honest communication, fast turnaround, and personal dedication to launching digital presences that stand out.
            </p>
          </div>

          {/* Right Column: Direct Actions with Magnetic Physics (Col 8-12) */}
          <div className="lg:col-span-5 flex flex-col gap-3.5">
            <Magnetic strength={0.3} radius={100} className="w-full">
              <a
                href={siteConfig.profile.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-7 py-4 sm:py-5 rounded-2xl bg-[#1C1D20] text-white text-sm font-medium hover:bg-black hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.35)] active:scale-[0.98] transition-all duration-300 text-center flex items-center justify-between group border border-white/10"
                data-interactive
              >
                <span className="flex items-center gap-2.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span>Start on WhatsApp</span>
                </span>
                <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 font-mono text-xs">↗</span>
              </a>
            </Magnetic>

            <Magnetic strength={0.25} radius={90} className="w-full">
              <a
                href={`mailto:${siteConfig.profile.contact.email}`}
                className="w-full px-7 py-4 sm:py-5 rounded-2xl bg-white border border-black/15 text-black text-xs sm:text-sm font-mono hover:bg-[#1C1D20] hover:text-white hover:border-[#1C1D20] hover:shadow-xl active:scale-[0.98] transition-all duration-300 flex items-center justify-between group"
                data-interactive
              >
                <span className="truncate">{siteConfig.profile.contact.email}</span>
                <span className="text-black/40 group-hover:text-white group-hover:translate-x-0.5 transition-all text-xs">Direct ↗</span>
              </a>
            </Magnetic>
          </div>

        </div>
      </div>
    </section>
  );
};
