import React, { useState } from 'react';
import { siteConfig } from '../../config/site';

export const Footer: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(siteConfig.profile.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <footer id="contact" className="bg-[#f4f4f1] border-t border-black/[0.08] text-black overflow-hidden">
      
      {/* Main Asymmetric Contact Module */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 py-24 sm:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Monumental Asymmetric Headline & Manifesto (Col 1-7) */}
          <div className="lg:col-span-7 space-y-8">
            <h2 className="text-5xl sm:text-7xl lg:text-8xl font-bold font-display tracking-tighter text-black leading-[0.88] uppercase">
              Let’s build<br />
              <span className="sm:pl-16 lg:pl-28 inline-block text-black/55 hover:text-black transition-colors duration-500">
                something real.
              </span>
            </h2>

            <p className="text-lg sm:text-xl text-black/80 max-w-xl font-normal leading-relaxed">
              Whether you are launching a new vision from scratch or refining an existing product, I'm here to build alongside you with clarity, honesty, and craft.
            </p>

            <div className="pt-2 text-xs font-mono text-black/75 flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-900 border border-emerald-300 font-semibold">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Accepting select builds for Q2</span>
              </div>
              <span className="text-black/40">•</span>
              <span>Cali, Colombia (UTC-5)</span>
            </div>
          </div>

          {/* Right Column: Direct Asymmetric Action Cards & Telemetry (Col 8-12) */}
          <div className="lg:col-span-5 space-y-4 lg:-translate-y-4">
            
            {/* WhatsApp Direct Action (Obsidian Monolith) */}
            <a
              href={siteConfig.profile.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 rounded-3xl bg-[#0c0d12] text-white block border border-white/10 shadow-2xl hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.4)] hover:-translate-y-1 active:scale-[0.99] transition-all duration-300"
              data-interactive
            >
              <div className="flex justify-end items-start mb-6">
                <span className="text-white/70 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 text-lg">↗</span>
              </div>
              <div className="text-2xl sm:text-3xl font-bold font-display tracking-tight mb-2">
                Chat on WhatsApp
              </div>
              <div className="text-xs font-mono text-white/70 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>+61 405667961 — Direct line</span>
              </div>
            </a>

            {/* Email Copy Card with tactile state */}
            <div
              className="p-8 rounded-3xl bg-white border border-black/[0.08] shadow-xs hover:shadow-xl hover:border-black/20 transition-all duration-300 flex flex-col justify-between space-y-5"
              data-interactive
            >
              <div className="flex justify-between items-start">
                <span className="text-xs font-mono text-black/60 uppercase tracking-wider font-semibold">EMAIL</span>
                <button
                  type="button"
                  onClick={copyEmail}
                  className={`text-xs font-mono px-3.5 py-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    copied
                      ? 'bg-emerald-600 text-white font-semibold scale-105 shadow-sm'
                      : 'bg-black/5 hover:bg-black/10 text-black/80 active:scale-95'
                  }`}
                  data-interactive
                >
                  {copied ? 'Copied to clipboard ✓' : 'Copy'}
                </button>
              </div>
              <a
                href={`mailto:${siteConfig.profile.contact.email}`}
                className="text-lg sm:text-xl font-display font-bold text-black hover:text-black/75 transition-colors block break-all"
                data-interactive
              >
                {siteConfig.profile.contact.email}
              </a>
            </div>


          </div>

        </div>

        {/* Bottom Colophon with Asymmetric Brandmark */}
        <div className="pt-20 mt-16 border-t border-black/[0.08] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 text-xs font-mono text-black/70">
          <div className="space-y-1">
            <div className="font-bold text-black text-sm tracking-tight font-display">JP STUDIOS</div>
            <div>Designed & engineered by Juan Pablo Chacón.</div>
          </div>
          <div className="flex items-center gap-4 text-black/80 font-mono text-[11px]">
            <span>Cali, Colombia</span>
            <span className="text-black/30">•</span>
            <span>Remote worldwide</span>
            <span className="text-black/30">•</span>
            <span>© 2026</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
