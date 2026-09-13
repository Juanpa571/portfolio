import React, { useState, useEffect } from 'react';
import { siteConfig } from '../../config/site';
import { useLiveTime } from '../../hooks/useLiveTime';

export const Header: React.FC = () => {
  const liveTime = useLiveTime(siteConfig.profile.timezone);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copiedTime, setCopiedTime] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOverDark, setIsOverDark] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;

      setIsScrolled(currentScroll > 30);

      if (totalScroll > 0) {
        const progress = (currentScroll / totalScroll) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      }

      // Check if sticky header is currently overlapping the dark contact section
      const contactEl = document.getElementById('contact');
      if (contactEl) {
        const rect = contactEl.getBoundingClientRect();
        // Header sits at ~16px-70px from viewport top
        setIsOverDark(rect.top <= 65 && rect.bottom >= 65);
      } else {
        setIsOverDark(false);
      }

      // Accurate active section scrollspy
      const sectionIds = ['services', 'work', 'contact'];
      const scrollPosition = currentScroll + 250;

      let current = '';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTimeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (liveTime) {
      navigator.clipboard.writeText(`${liveTime} (${siteConfig.profile.location})`);
      setCopiedTime(true);
      setTimeout(() => setCopiedTime(false), 2000);
    }
  };

  return (
    <div className="sticky top-4 sm:top-6 z-50 w-full px-4 sm:px-8 pointer-events-none flex justify-center">
      <header
        className={`pointer-events-auto relative max-w-6xl w-full flex items-center justify-between gap-3 sm:gap-6 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border transition-all duration-500 ease-out overflow-hidden ${
          isOverDark
            ? 'bg-[#0c0d12]/85 backdrop-blur-2xl border-white/15 text-white shadow-[0_20px_50px_rgba(0,0,0,0.8)] scale-[0.99]'
            : isScrolled
            ? 'bg-[#fafaf8]/90 backdrop-blur-2xl border-black/[0.12] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.12)] scale-[0.99] text-black'
            : 'bg-[#fafaf8]/70 backdrop-blur-lg border-black/[0.07] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] text-black'
        }`}
      >
        {/* Left Lockup: Brand & Telemetry Capsule */}
        <div className="flex items-center gap-3 sm:gap-4">
          <a
            href="#"
            className={`group flex items-center gap-2.5 font-display font-bold text-sm tracking-tight transition-colors duration-300 ${
              isOverDark ? 'text-white' : 'text-black'
            }`}
            data-interactive
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="group-hover:tracking-wider transition-all duration-300">
              {siteConfig.profile.brandName}
            </span>
          </a>

          <div className={`hidden md:block w-px h-3.5 transition-colors duration-300 ${isOverDark ? 'bg-white/20' : 'bg-black/15'}`} />

          {/* Interactive Live Time Pill */}
          <button
            type="button"
            onClick={handleTimeClick}
            className={`hidden md:flex items-center gap-2 px-2.5 py-1 rounded-full border text-[11px] font-mono transition-all cursor-pointer group ${
              isOverDark
                ? 'bg-white/[0.07] hover:bg-white/[0.14] border-white/10 text-white/70 hover:text-white'
                : 'bg-black/[0.03] hover:bg-black/[0.07] border-black/[0.04] text-black/70 hover:text-black'
            }`}
            title="Click to copy local COT time"
            data-interactive
          >
            <span>Cali</span>
            <span className={isOverDark ? 'text-white/40' : 'text-black/40'}>•</span>
            <span className={`font-semibold ${isOverDark ? 'text-white' : 'text-black/90'}`}>
              {copiedTime ? 'Copied ✓' : (liveTime || '14:07 COT')}
            </span>
          </button>
        </div>

        {/* Center / Right Nav Items with Scrollspy Active State */}
        <nav className="flex items-center gap-1 sm:gap-2 text-xs font-mono">
          <a
            href="#services"
            className={`px-3 py-1.5 rounded-full transition-all duration-300 ${
              activeSection === 'services'
                ? isOverDark
                  ? 'bg-white text-black font-semibold shadow-xs'
                  : 'bg-black text-white font-medium shadow-xs'
                : isOverDark
                ? 'text-white/70 hover:text-white hover:bg-white/10'
                : 'text-black/70 hover:text-black hover:bg-black/[0.04]'
            }`}
            data-interactive
          >
            Capabilities
          </a>
          <a
            href="#work"
            className={`px-3 py-1.5 rounded-full transition-all duration-300 ${
              activeSection === 'work'
                ? isOverDark
                  ? 'bg-white text-black font-semibold shadow-xs'
                  : 'bg-black text-white font-medium shadow-xs'
                : isOverDark
                ? 'text-white/70 hover:text-white hover:bg-white/10'
                : 'text-black/70 hover:text-black hover:bg-black/[0.04]'
            }`}
            data-interactive
          >
            Works
          </a>
          <a
            href="#contact"
            className={`hidden sm:inline-block px-3 py-1.5 rounded-full transition-all duration-300 ${
              activeSection === 'contact'
                ? isOverDark
                  ? 'bg-white text-black font-semibold shadow-xs'
                  : 'bg-black text-white font-medium shadow-xs'
                : isOverDark
                ? 'text-white/70 hover:text-white hover:bg-white/10'
                : 'text-black/70 hover:text-black hover:bg-black/[0.04]'
            }`}
            data-interactive
          >
            Contact
          </a>

          {/* Reading Gauge / Micro Progress Counter */}
          <div className={`hidden lg:flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-mono border-l ml-2 transition-colors duration-300 ${
            isOverDark ? 'text-white/40 border-white/15' : 'text-black/40 border-black/10'
          }`}>
            <span className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${isOverDark ? 'bg-white/30' : 'bg-black/20'}`}></span>
            <span>{Math.round(scrollProgress)}%</span>
          </div>

          {/* Direct WhatsApp Callout Action */}
          <a
            href={siteConfig.profile.contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className={`ml-1 sm:ml-2 px-4 py-1.5 sm:py-2 rounded-full text-xs font-sans font-semibold active:scale-95 transition-all flex items-center gap-1.5 group shadow-sm ${
              isOverDark
                ? 'bg-white text-black hover:bg-white/90 font-bold'
                : 'bg-black text-white hover:bg-black/80'
            }`}
            data-interactive
          >
            <span>Chat</span>
            <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">↗</span>
          </a>
        </nav>

        {/* Integrated Capsule Scroll Indicator */}
        <div className={`absolute bottom-0 left-0 right-0 h-[2px] transition-colors duration-300 ${isOverDark ? 'bg-white/10' : 'bg-black/[0.04]'}`}>
          <div
            className={`h-full transition-[width] duration-150 ease-out ${isOverDark ? 'bg-white/90' : 'bg-black/80'}`}
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </header>
    </div>
  );
};
