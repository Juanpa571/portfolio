import React, { useState, useEffect } from 'react';
import { siteConfig } from '../../config/site';
import { useLiveTime } from '../../hooks/useLiveTime';

export const Header: React.FC = () => {
  const liveTime = useLiveTime(siteConfig.profile.timezone);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [copiedTime, setCopiedTime] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger floating corner menu button once scrolled past hero header (140px)
      setIsScrolled(window.scrollY > 140);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('keydown', handleKeyDown);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Lock body scroll when off-canvas drawer is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const handleTimeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (liveTime) {
      navigator.clipboard.writeText(`${liveTime} (${siteConfig.profile.location})`);
      setCopiedTime(true);
      setTimeout(() => setCopiedTime(false), 2000);
    }
  };

  const navLinks = [
    { label: 'Capabilities', href: '#services', num: '01' },
    { label: 'Works', href: '#work', num: '02' },
    { label: 'Contact', href: '#contact', num: '03' },
  ];

  return (
    <>
      {/* 1. Unboxed Editorial Top Header (Completely integrated into page, zero pill/box/shadow) */}
      <header className="relative w-full max-w-[1400px] mx-auto px-6 sm:px-12 pt-8 sm:pt-10 pb-4 flex items-center justify-between z-30 select-none">
        {/* Left: Brand Identity & Telemetry */}
        <div className="flex items-center gap-3 sm:gap-5">
          <a
            href="#"
            className="group flex items-center gap-2.5 text-black font-display font-bold text-sm sm:text-base tracking-tight"
            data-interactive
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="group-hover:tracking-wider transition-all duration-300">
              © {siteConfig.profile.brandName}
            </span>
          </a>

          <div className="hidden sm:block w-px h-3.5 bg-black/15"></div>

          {/* Interactive Live Time Pill */}
          <button
            type="button"
            onClick={handleTimeClick}
            className="hidden sm:flex items-center gap-2 px-2.5 py-1 rounded-full bg-black/[0.03] hover:bg-black/[0.06] text-[11px] font-mono text-black/70 hover:text-black transition-all cursor-pointer group"
            title="Click to copy local COT time"
            data-interactive
          >
            <span>Cali</span>
            <span className="text-black/30">•</span>
            <span className="font-semibold text-black/90">
              {copiedTime ? 'Copied ✓' : (liveTime || '14:07 COT')}
            </span>
          </button>
        </div>

        {/* Right: Clean Editorial Links (Dennis Snellenberg Style) */}
        <nav className="flex items-center gap-6 sm:gap-8 text-sm font-sans font-medium text-black">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hidden md:inline-block relative py-1 text-black/75 hover:text-black transition-colors group"
              data-interactive
            >
              <span>{link.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-black transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}

          {/* WhatsApp Direct Action */}
          <a
            href={siteConfig.profile.contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1.5 rounded-full bg-black text-white text-xs font-sans font-semibold hover:bg-black/80 active:scale-95 transition-all flex items-center gap-1.5 shadow-sm group"
            data-interactive
          >
            <span>Chat</span>
            <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">↗</span>
          </a>
        </nav>
      </header>

      {/* 2. Floating Corner Menu Trigger Button (Appears only on scroll, sits comfortably in top-right corner) */}
      <div
        className={`fixed top-6 right-6 sm:top-8 sm:right-8 z-50 transition-all duration-500 ease-out ${
          isScrolled
            ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 scale-75 -translate-y-3 pointer-events-none'
        }`}
      >
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-full flex flex-col items-center justify-center gap-1.5 cursor-pointer shadow-2xl transition-all duration-300 group ${
            isMenuOpen
              ? 'bg-white text-black hover:scale-105'
              : 'bg-[#0c0d12]/95 backdrop-blur-xl border border-white/20 text-white hover:scale-110 hover:border-white/40'
          }`}
          aria-label={isMenuOpen ? 'Close Menu' : 'Open Navigation Menu'}
          data-interactive
        >
          {/* Animated Hamburger / Close Morphing Lines */}
          <span
            className={`w-5 sm:w-6 h-[2px] rounded-full transition-all duration-300 ${
              isMenuOpen
                ? 'bg-black rotate-45 translate-y-[4px]'
                : 'bg-white group-hover:w-6'
            }`}
          />
          <span
            className={`w-5 sm:w-6 h-[2px] rounded-full transition-all duration-300 ${
              isMenuOpen
                ? 'bg-black -rotate-45 -translate-y-[4px]'
                : 'bg-white group-hover:w-4'
            }`}
          />
        </button>
      </div>

      {/* 3. Off-Canvas Cinematic Drawer Navigation Menu */}
      {/* Backdrop */}
      <div
        onClick={() => setIsMenuOpen(false)}
        className={`fixed inset-0 bg-black/60 backdrop-blur-xs z-40 transition-opacity duration-500 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[480px] lg:w-[520px] bg-[#0e0f14] text-white z-45 shadow-[-30px_0_80px_rgba(0,0,0,0.85)] border-l border-white/10 flex flex-col justify-between p-8 sm:p-12 lg:p-14 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between pt-2 border-b border-white/10 pb-6">
          <div className="flex items-center gap-2 text-xs font-mono text-white/50 tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>JP Studios // Navigation</span>
          </div>
        </div>

        {/* Drawer Monumental Nav Links */}
        <nav className="my-auto py-8 space-y-4 sm:space-y-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="group flex items-center justify-between py-3 border-b border-white/5 hover:border-white/20 transition-colors"
              data-interactive
            >
              <div className="flex items-baseline gap-4">
                <span className="text-xs font-mono text-white/40 group-hover:text-white transition-colors">
                  {link.num}
                </span>
                <span className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-white/80 group-hover:text-white group-hover:translate-x-2 transition-all duration-300">
                  {link.label}
                </span>
              </div>
              <span className="text-xl sm:text-2xl text-white/30 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                ↗
              </span>
            </a>
          ))}
        </nav>

        {/* Drawer Bottom Telemetry & Direct Actions */}
        <div className="pt-6 border-t border-white/10 space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono text-white/60">
            <div>Cali, Colombia ({liveTime || 'COT'})</div>
            <div className="text-emerald-400 font-semibold">Available for select Q2 builds</div>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <a
              href={siteConfig.profile.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 px-4 rounded-2xl bg-white text-black text-center font-sans font-bold text-xs sm:text-sm hover:bg-white/90 active:scale-98 transition-all"
              data-interactive
            >
              Chat on WhatsApp ↗
            </a>
            <a
              href={`mailto:${siteConfig.profile.contact.email}`}
              className="py-3 px-4 rounded-2xl bg-white/10 border border-white/15 text-white text-center font-mono text-xs hover:bg-white/20 transition-all"
              data-interactive
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
