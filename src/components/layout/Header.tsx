import React, { useState, useEffect } from 'react';
import { siteConfig } from '../../config/site';
import { useLiveTime } from '../../hooks/useLiveTime';
import { useLanguage } from '../../context/LanguageContext';
import { LanguageToggle } from '../ui/LanguageToggle';

export const Header: React.FC = () => {
  const { t } = useLanguage();
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

  // Lock body scroll and pause Lenis when off-canvas drawer is open
  useEffect(() => {
    const lenis = (window as any).__lenis;
    if (isMenuOpen) {
      lenis?.stop();
      document.body.style.overflow = 'hidden';
    } else {
      lenis?.start();
      document.body.style.overflow = '';
    }
    return () => {
      lenis?.start();
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
    { label: t.nav.capabilities, href: '#services' },
    { label: t.nav.process, href: '#process' },
    { label: t.nav.works, href: '#work' },
    { label: t.nav.faq, href: '#faq' },
    { label: t.nav.contact, href: '#contact' },
  ];

  return (
    <>
      {/* 1. Unboxed Editorial Top Header (Completely integrated into page, zero pill/box/shadow) */}
      <header className="relative w-full max-w-[1400px] mx-auto px-6 sm:px-12 pt-8 sm:pt-10 pb-4 flex items-center justify-between z-30 select-none">
        {/* Left: Brand Identity & Telemetry */}
        <div className="flex items-center gap-3 sm:gap-5">
          <a
            href="#"
            className="group flex items-center"
            data-interactive
            aria-label={`${siteConfig.profile.brandName} Home`}
          >
            <img
              src="/logo-horizontal.png"
              alt={siteConfig.profile.brandName}
              className="h-7 sm:h-[34px] w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              width={335}
              height={81}
            />
          </a>

          <div className="hidden sm:block w-px h-4 bg-black/15"></div>

          {/* Interactive Live Time */}
          <button
            type="button"
            onClick={handleTimeClick}
            aria-label={copiedTime ? t.nav.copied : `${t.nav.timeLabel}: ${liveTime || '14:07 COT'}`}
            className="hidden sm:flex items-center gap-2 px-2.5 py-1 rounded-full bg-black/[0.03] hover:bg-black/[0.06] text-xs font-sans text-black/70 hover:text-black transition-all cursor-pointer group"
            title={t.nav.timeLabel}
            data-interactive
          >
            <span>Cali</span>
            <span className="text-black/30">•</span>
            <span className="font-medium text-black">
              {copiedTime ? t.nav.copied : (liveTime || '14:07 COT')}
            </span>
          </button>
        </div>

        {/* Right: Clean Editorial Links, Language Switcher & WhatsApp Direct Action */}
        <nav className="flex items-center gap-4 sm:gap-6 lg:gap-8 text-sm font-sans font-medium text-black">
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

          {/* Minimalist Language Switcher Pill */}
          <LanguageToggle theme="light" />

          {/* WhatsApp Direct Action */}
          <a
            href={siteConfig.profile.contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1.5 rounded-full bg-black text-white text-xs font-sans font-semibold hover:bg-black/80 active:scale-95 transition-all flex items-center gap-1.5 shadow-sm group"
            data-interactive
          >
            <span>{t.nav.chat}</span>
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
              : 'bg-[#1C1D20] border border-white/20 text-white hover:scale-110 hover:border-white/40'
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
        data-lenis-prevent
        onWheel={(e) => e.stopPropagation()}
        onClick={() => setIsMenuOpen(false)}
        className={`fixed inset-0 bg-black/60 backdrop-blur-xs z-40 transition-opacity duration-500 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto visible' : 'opacity-0 pointer-events-none invisible'
        }`}
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Navigation Menu"
        data-lenis-prevent
        onWheel={(e) => e.stopPropagation()}
        className={`fixed top-0 right-0 h-full w-full sm:w-[480px] lg:w-[520px] bg-[#1C1D20] text-white z-45 border-l border-white/10 flex flex-col justify-between p-8 sm:p-12 lg:p-14 overflow-y-auto overscroll-contain transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
          isMenuOpen
            ? 'translate-x-0 shadow-2xl opacity-100 visible pointer-events-auto'
            : 'translate-x-full shadow-none opacity-0 invisible pointer-events-none'
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between pt-2 border-b border-white/10 pb-6">
          <img
            src="/logo-horizontal-white.png"
            alt={siteConfig.profile.brandName}
            className="h-6 sm:h-7 w-auto object-contain"
            width={335}
            height={81}
          />
          <div className="flex items-center gap-4">
            <LanguageToggle theme="dark" />
            <span className="hidden sm:inline text-xs font-sans text-white/60">
              Cali, Colombia
            </span>
          </div>
        </div>

        {/* Drawer Editorial Nav Links */}
        <nav className="my-auto py-8 space-y-2 sm:space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="group flex items-center justify-between py-4 border-b border-white/[0.08] hover:border-white/30 transition-all duration-300"
              data-interactive
            >
              <span className="text-3xl sm:text-4xl lg:text-5xl font-normal font-display tracking-[-0.01em] text-white/80 group-hover:text-white group-hover:translate-x-3 transition-all duration-300">
                {link.label}
              </span>
              <span className="text-lg sm:text-xl text-white/40 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                ↗
              </span>
            </a>
          ))}
        </nav>

        {/* Drawer Bottom Telemetry & Direct Actions */}
        <div className="pt-6 border-t border-white/10 space-y-4 font-sans">
          <div className="flex items-center justify-between text-xs text-white/70">
            <div>COT ({liveTime || 'UTC-5'})</div>
            <div className="text-emerald-400 font-medium">{t.nav.availableWorldwide}</div>
          </div>

          <div className="flex items-center gap-3 pt-1">
            <a
              href={siteConfig.profile.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3.5 px-5 rounded-full bg-white text-black text-center font-sans font-medium text-xs sm:text-sm hover:bg-white/90 active:scale-[0.98] transition-all"
              data-interactive
            >
              {t.nav.chatOnWhatsApp} ↗
            </a>
            <a
              href={`mailto:${siteConfig.profile.contact.email}`}
              className="py-3.5 px-6 rounded-full border border-white/20 hover:border-white text-white text-center font-sans font-medium text-xs sm:text-sm hover:bg-white hover:text-black active:scale-[0.98] transition-all"
              data-interactive
            >
              {t.nav.email}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
