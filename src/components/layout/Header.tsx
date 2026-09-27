import React, { useState, useEffect, useRef } from 'react';
import { siteConfig } from '../../config/site';
import { useLiveTime } from '../../hooks/useLiveTime';
import { useLanguage } from '../../context/LanguageContext';
import { trackWhatsAppClick } from '../../utils/analytics';

export const Header: React.FC = () => {
  const { t } = useLanguage();
  const liveTime = useLiveTime(siteConfig.profile.timezone);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPastHero, setIsPastHero] = useState(false);
  const [isOverFooter, setIsOverFooter] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [pillStyle, setPillStyle] = useState<{ left: number; width: number; opacity: number }>({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const navRef = useRef<HTMLElement | null>(null);
  const linkRefs = useRef<{ [key: string]: HTMLAnchorElement | null }>({});

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled((prev) => (prev ? scrollY > 15 : scrollY > 25));

      const heroEl = document.getElementById('hero');
      if (heroEl) {
        const rect = heroEl.getBoundingClientRect();
        setIsPastHero(rect.bottom <= 100);
      } else {
        setIsPastHero(scrollY > 400);
      }

      // Detect if sticky bar is entering or over the footer area
      const footerEl = document.getElementById('footer');
      if (footerEl) {
        const fRect = footerEl.getBoundingClientRect();
        setIsOverFooter(fRect.top <= 85);
      } else {
        setIsOverFooter(false);
      }

      // Check if sticky bar is currently overlapping any section marked data-theme="dark"
      const darkSections = document.querySelectorAll<HTMLElement>('[data-theme="dark"]');
      let overDark = false;
      const headerCheckY = 40;
      darkSections.forEach((sec) => {
        const rect = sec.getBoundingClientRect();
        if (rect.top <= headerCheckY && rect.bottom >= headerCheckY) {
          overDark = true;
        }
      });
      setIsDark(overDark);

      // Active section detection for sliding magnetic indicator
      const sectionIds = ['services', 'work', 'pricing', 'process', 'faq', 'contact'];
      let currentActive: string | null = null;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Header sits at top: 0, height ~75px. When section is in active view:
          if (rect.top <= 220 && rect.bottom >= 120) {
            currentActive = id;
          }
        }
      }
      setActiveSection(currentActive);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // Measure and animate pill indicator position
  useEffect(() => {
    if (!activeSection || !linkRefs.current[activeSection] || !navRef.current) {
      setPillStyle((prev) => (prev.opacity === 0 ? prev : { ...prev, opacity: 0 }));
      return;
    }
    const linkEl = linkRefs.current[activeSection];
    const navEl = navRef.current;
    if (linkEl && navEl) {
      const linkRect = linkEl.getBoundingClientRect();
      const navRect = navEl.getBoundingClientRect();
      setPillStyle({
        left: linkRect.left - navRect.left,
        width: linkRect.width,
        opacity: 1,
      });
    }
  }, [activeSection, isScrolled]);

  useEffect(() => {
    const handleResize = () => {
      if (activeSection && linkRefs.current[activeSection] && navRef.current) {
        const linkRect = linkRefs.current[activeSection]!.getBoundingClientRect();
        const navRect = navRef.current.getBoundingClientRect();
        setPillStyle({
          left: linkRect.left - navRect.left,
          width: linkRect.width,
          opacity: 1,
        });
      }
    };
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, [activeSection]);

  // Lock body scroll, pause Lenis, and listen for Escape when off-canvas drawer is open on mobile
  useEffect(() => {
    const lenis = (window as any).__lenis;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      lenis?.stop();
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      lenis?.start();
      document.body.style.overflow = '';
    }
    return () => {
      lenis?.start();
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen]);

  const navLinks = [
    { id: 'services', label: t.nav.services, href: '#services' },
    { id: 'work', label: t.nav.work, href: '#work' },
    { id: 'pricing', label: t.nav.pricing, href: '#pricing' },
    { id: 'process', label: t.nav.process, href: '#process' },
    { id: 'faq', label: t.nav.faq, href: '#faq' },
    { id: 'contact', label: t.nav.contact, href: '#contact' },
  ];

  // Cinematic easeInOutQuintic curve: ultra-silky acceleration and floating deceleration
  const easeInOutQuint = (t: number) =>
    t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    e.stopPropagation();
    setIsMenuOpen(false);

    const lenis = (window as any).__lenis;
    if (lenis) {
      lenis.start();
    }

    if (href === '#' || href === '#top') {
      setActiveSection(null);
      if (lenis) {
        lenis.scrollTo(0, {
          duration: 1.45,
          easing: easeInOutQuint,
        });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    const targetId = href.replace('#', '');
    const targetEl = document.getElementById(targetId);
    if (!targetEl && typeof window !== 'undefined' && window.location.pathname !== '/') {
      window.location.href = '/' + href;
      return;
    }
    if (targetEl) {
      setActiveSection(targetId);
      if (lenis) {
        // Offset 0 lands the section cleanly at the top of the viewport
        lenis.scrollTo(targetEl, {
          offset: 0,
          duration: 1.45,
          easing: easeInOutQuint,
        });
      } else {
        const headerOffset = 0;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <>
      {/* Static In-Flow Placeholder: Guarantees 100% constant layout height, eliminating layout shift and scroll oscillation */}
      <div className="h-[4.25rem] lg:h-[6.5rem] w-full shrink-0 pointer-events-none" aria-hidden="true" />

      {/* Bespoke Navigation Bar (Fixed to prevent document flow mutation on padding change) */}
      <header
        className={`fixed top-0 left-0 z-40 w-full select-none transition-all duration-500 ease-out ${
          isScrolled
            ? isOverFooter
              ? 'bg-[#111111]/85 backdrop-blur-md border-b border-transparent shadow-none py-3 sm:py-3.5'
              : isDark
                ? 'bg-[#111111]/92 backdrop-blur-md border-b border-white/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.5)] py-3 sm:py-3.5'
                : 'bg-[#fafaf8]/95 backdrop-blur-md border-b border-black/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.03)] py-3 sm:py-3.5'
            : 'bg-transparent border-b border-transparent shadow-none py-6 sm:py-8 lg:py-9'
        }`}
      >
        <div
          className={`w-full mx-auto flex items-center justify-between gap-4 transition-all duration-500 ${
            isPastHero && !isOverFooter
              ? 'max-w-[1400px] px-4 sm:px-8 lg:px-12'
              : 'max-w-[1760px] px-6 sm:px-10 lg:px-14 xl:px-16 2xl:px-20'
          }`}
        >
          
          {/* Left: Brand Identity + Vertical Separator + Location Lockup */}
          <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
            <a
              href="/"
              onClick={(e) => {
                if (typeof window !== 'undefined' && window.location.pathname === '/') {
                  handleNavClick(e, '#top');
                }
              }}
              className="group flex items-center"
              data-interactive
              aria-label={`${siteConfig.profile.brandName} Home`}
            >
              <img
                src={isDark ? '/logo-horizontal-white.webp' : '/logo-horizontal.webp'}
                alt="JP Studios — Logotipo oficial de diseño y desarrollo web"
                className={`w-auto object-contain transition-all duration-500 group-hover:scale-[1.02] ${
                  isScrolled ? 'h-6 sm:h-[28px]' : 'h-7 sm:h-[34px]'
                }`}
                width={335}
                height={81}
              />
            </a>

            <span
              className={`hidden sm:block w-px transition-colors duration-500 ${
                isDark ? 'bg-white/20' : 'bg-black/15'
              } ${
                isScrolled ? 'h-5 mx-0.5' : 'h-7 mx-1 sm:mx-1.5'
              }`}
              aria-hidden="true"
            />

            <div className="hidden sm:flex flex-col text-left leading-tight transition-colors duration-500">
              <span
                className={`font-semibold tracking-[0.08em] uppercase font-sans transition-colors duration-500 text-[11px] sm:text-xs ${
                  isDark ? 'text-white' : 'text-[#141517]'
                }`}
              >
                {t.nav.location}
              </span>
              <span
                className={`font-normal tracking-[0.08em] uppercase font-sans transition-colors duration-500 text-[11px] ${
                  isDark ? 'text-white/50' : 'text-black/50'
                }`}
              >
                {t.nav.studio}
              </span>
            </div>
          </div>

          {/* Center: Primary Navigation Links with Floating Active Pill */}
          <nav
            ref={navRef}
            className="relative hidden lg:flex items-center text-sm font-sans transition-colors duration-500 gap-1 xl:gap-2 py-1"
          >
            {/* Sliding Magnetic Pill Indicator (Only on Active Item) */}
            <div
              className={`absolute top-1/2 -translate-y-1/2 h-[38px] rounded-full pointer-events-none transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isDark ? 'bg-white/[0.14] shadow-xs' : 'bg-black/[0.06] shadow-2xs'
              }`}
              style={{
                transform: `translateX(${pillStyle.left}px)`,
                width: `${pillStyle.width}px`,
                opacity: pillStyle.opacity,
              }}
            />

            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  ref={(el) => {
                    linkRefs.current[link.id] = el;
                  }}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative z-10 px-5 py-2 rounded-full text-sm font-sans tracking-tight transition-colors duration-300 select-none cursor-pointer ${
                    isActive
                      ? isDark
                        ? 'text-white font-medium'
                        : 'text-[#111111] font-medium'
                      : isDark
                        ? 'text-white/60 hover:text-white font-normal'
                        : 'text-black/65 hover:text-black font-normal'
                  }`}
                  data-interactive
                >
                  <span>{link.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Right: WhatsApp CTA Button */}
          <div className="flex items-center gap-2 sm:gap-3.5 flex-shrink-0">
            <a
              href={siteConfig.profile.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick({ location: 'header', label: 'Header WhatsApp Button' })}
              className={`flex items-center gap-1.5 sm:gap-2 rounded-full font-sans font-medium shadow-xs transition-all duration-300 active:scale-95 group ${
                isDark
                  ? 'bg-white hover:bg-neutral-200 text-[#141517]'
                  : 'bg-[#141517] hover:bg-black text-white'
              } ${
                isScrolled
                  ? 'px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm'
                  : 'px-3.5 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm'
              }`}
              data-interactive
              aria-label="WhatsApp"
            >
              <svg
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#25D366] shrink-0 transition-transform duration-300 group-hover:scale-110"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              <span>WhatsApp</span>
              <span className="text-xs transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 opacity-70 group-hover:opacity-100">
                ↗
              </span>
            </a>

            {/* Mobile Hamburger Drawer Trigger (Visible on < lg) */}
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 rounded-full transition-colors cursor-pointer ${
                isDark ? 'text-white hover:bg-white/10' : 'text-black hover:bg-black/[0.05]'
              }`}
              aria-label={isMenuOpen ? 'Close Menu' : 'Open Navigation Menu'}
              data-interactive
            >
              <div className="w-5 h-4 flex flex-col justify-between items-center">
                <span
                  className={`w-5 h-[1.5px] rounded-full transition-all duration-300 ${
                    isDark ? 'bg-white' : 'bg-black'
                  } ${
                    isMenuOpen ? 'rotate-45 translate-y-[7px]' : ''
                  }`}
                />
                <span
                  className={`w-5 h-[1.5px] rounded-full transition-all duration-300 ${
                    isDark ? 'bg-white' : 'bg-black'
                  } ${
                    isMenuOpen ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`w-5 h-[1.5px] rounded-full transition-all duration-300 ${
                    isDark ? 'bg-white' : 'bg-black'
                  } ${
                    isMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''
                  }`}
                />
              </div>
            </button>
          </div>

        </div>
      </header>

      {/* Off-Canvas Mobile Navigation Drawer */}
      {/* Backdrop */}
      <div
        data-lenis-prevent
        onWheel={(e) => e.stopPropagation()}
        onClick={() => setIsMenuOpen(false)}
        className={`fixed inset-0 bg-black/60 backdrop-blur-xs z-50 transition-opacity duration-500 lg:hidden ${
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
        className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-[#1C1D20] text-white z-55 border-l border-white/10 flex flex-col justify-between p-8 sm:p-10 overflow-y-auto overscroll-contain transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] lg:hidden ${
          isMenuOpen
            ? 'translate-x-0 shadow-2xl opacity-100 visible pointer-events-auto'
            : 'translate-x-full shadow-none opacity-0 invisible pointer-events-none'
        }`}
      >
        {/* Drawer Top */}
        <div className="flex items-center justify-between pt-2 border-b border-white/10 pb-5">
          <img
            src="/logo-horizontal-white.webp"
            alt="JP Studios — Menú de navegación móvil para diseño web en Cali"
            className="h-6 w-auto object-contain"
            width={335}
            height={81}
            loading="lazy"
            decoding="async"
          />
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsMenuOpen(false)}
              className="p-2 text-white/70 hover:text-white transition-colors cursor-pointer"
              aria-label="Close menu"
              data-interactive
            >
              ✕
            </button>
          </div>
        </div>

        {/* Drawer Editorial Nav Links */}
        <nav className="my-auto py-6 space-y-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`group flex items-center justify-between py-3.5 border-b border-white/[0.08] hover:border-white/30 transition-all duration-300 ${
                  isActive ? 'text-white font-medium' : 'text-white/70'
                }`}
                data-interactive
              >
                <div className="flex items-center gap-3">
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-white" />
                  )}
                  <span className="text-2xl sm:text-3xl font-normal font-display tracking-[-0.01em] group-hover:translate-x-2 transition-all duration-300">
                    {link.label}
                  </span>
                </div>
                <span className="text-base text-white/80 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                  ↗
                </span>
              </a>
            );
          })}
        </nav>

        {/* Drawer Bottom Telemetry & Actions */}
        <div className="pt-5 border-t border-white/10 space-y-4 font-sans">
          <div className="flex items-center justify-between text-xs text-white/70">
            <div>COT ({liveTime || 'UTC-5'})</div>
            <div className="text-white/80 font-medium">{t.nav.availableWorldwide}</div>
          </div>

          <div className="flex items-center gap-3 pt-1">
            <a
              href={siteConfig.profile.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick({ location: 'header_drawer', label: 'Mobile Drawer WhatsApp Button' })}
              className="flex-1 py-3 px-4 rounded-full bg-white text-black text-center font-sans font-medium text-xs sm:text-sm hover:bg-white/90 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              data-interactive
            >
              <svg
                className="w-4 h-4 fill-[#25D366] shrink-0"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              <span>WhatsApp</span>
              <span>↗</span>
            </a>
            <a
              href={`mailto:${siteConfig.profile.contact.email}`}
              className="py-3 px-5 rounded-full border border-white/20 hover:border-white text-white text-center font-sans font-medium text-xs sm:text-sm hover:bg-white hover:text-black active:scale-[0.98] transition-all"
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
