import React from 'react';
import { Mail, MessageCircle, MapPin, Globe } from 'lucide-react';
import { siteConfig } from '../../config/site';
import { useLanguage } from '../../context/LanguageContext';
import { trackWhatsAppClick } from '../../utils/analytics';

export const Footer: React.FC = () => {
  const { t, language } = useLanguage();
  const isSpanish = language === 'es';

  // Smooth back-to-top handler using Lenis when available
  const handleBackToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    const lenis = (window as any).__lenis;
    if (lenis) {
      lenis.scrollTo(0, {
        duration: 1.4,
        easing: (x: number) => (x < 0.5 ? 16 * x * x * x * x * x : 1 + 16 * --x * x * x * x * x),
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.replace('#', '');
      const lenis = (window as any).__lenis;

      if (targetId === 'top' || targetId === '') {
        handleBackToTop(e);
        return;
      }

      const targetEl = document.getElementById(targetId);
      if (!targetEl && typeof window !== 'undefined' && window.location.pathname !== '/') {
        window.location.href = '/' + href;
        return;
      }

      if (targetEl) {
        if (lenis) {
          lenis.scrollTo(targetEl, {
            offset: -80,
            duration: 1.2,
            easing: (x: number) => (x < 0.5 ? 16 * x * x * x * x * x : 1 + 16 * --x * x * x * x * x),
          });
        } else {
          targetEl.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <footer
      id="footer"
      data-theme="dark"
      className="relative bg-[#111111] text-white w-full overflow-hidden select-none"
    >
      {/* Expanded Container with margins aligned to the header and body content */}
      <div className="w-full max-w-[1760px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 2xl:px-20 pt-20 sm:pt-24 lg:pt-28 pb-8 flex flex-col justify-between relative z-10">
        
        {/* ========================================================
            PART 1: HERO ZONE (Split: Left Copy + Right Panoramic Night City)
            ======================================================== */}
        <div className="relative flex flex-col justify-between pt-4 sm:pt-6 lg:pt-8 pb-8 sm:pb-10 lg:pb-12 min-h-[460px] lg:min-h-[500px] xl:min-h-[520px]">

          {/* Desktop Panoramic City Layer — Nested inside container to preserve right margin and shift photo left */}
          <div className="hidden lg:block absolute right-0 top-0 bottom-4 w-[58%] xl:w-[62%] 2xl:w-[65%] pointer-events-none select-none overflow-hidden z-0">
            <picture className="w-full h-full block">
              <source type="image/webp" srcSet="/cristo-rey-cali-night.webp" />
              <img
                src="/cristo-rey-cali-night.jpg"
                alt="Panorámica nocturna de Cali desde Cristo Rey — Sede de JP Studios diseño y desarrollo web"
                className="w-full h-full object-cover object-right-bottom opacity-90 transition-transform duration-1000 ease-out hover:scale-[1.01]"
                width={1376}
                height={768}
                loading="lazy"
                decoding="async"
              />
            </picture>
            {/* Soft edge overlays ensuring 100% seamless genuine blending into solid #111111 */}
            <div className="absolute inset-y-0 left-0 w-36 xl:w-48 bg-gradient-to-r from-[#111111] via-[#111111]/85 to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#111111] to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#111111] to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#111111] to-transparent pointer-events-none" />
          </div>

          {/* Upper Content Row: Left Hero Copy */}
          <div className="relative z-10 w-full lg:w-[48%] xl:w-[46%] 2xl:w-[44%] flex flex-col items-start justify-center space-y-6 sm:space-y-7 pt-4 sm:pt-6 lg:pt-8">
            
            {/* Headline */}
            <h2 className="text-3xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] 2xl:text-[4.4rem] font-display font-medium text-white tracking-tight leading-[1.06] m-0">
              {t.footer.headlineLine1.trim()}{' '}
              <br />
              {t.footer.headlineLine2}
            </h2>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-white/70 font-sans leading-relaxed max-w-xl">
              {t.footer.subtitle}
            </p>

            {/* Action Buttons Row */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto">
              {/* Email Pill */}
              <a
                href={`mailto:${t.footer.email}`}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full border border-white/20 hover:border-white/60 bg-white/[0.03] hover:bg-white/[0.08] text-white text-xs sm:text-sm font-sans font-medium transition-all duration-300 flex items-center justify-center gap-2.5 active:scale-[0.98] group"
                data-interactive
              >
                <Mail className="w-4 h-4 text-white/70 group-hover:text-white transition-colors" />
                <span>{t.footer.email}</span>
              </a>

              {/* WhatsApp Pill */}
              <a
                href={siteConfig.profile.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick({ location: 'footer', label: 'Footer WhatsApp Button' })}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full border border-white/20 hover:border-white/60 bg-white/[0.03] hover:bg-white/[0.08] text-white text-xs sm:text-sm font-sans font-medium transition-all duration-300 flex items-center justify-center gap-2.5 active:scale-[0.98] group"
                data-interactive
              >
                <MessageCircle className="w-4 h-4 text-white/70 group-hover:text-white transition-colors" />
                <span>{t.footer.whatsapp}</span>
                <span className="text-xs group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">
                  ↗
                </span>
              </a>
            </div>

            {/* Response Status Badge */}
            <div className="flex items-center gap-2 pt-1 text-xs text-white/60 font-sans">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{t.footer.responseBadge}</span>
            </div>
          </div>

          {/* Mobile/Tablet Fallback Photo Layer */}
          <div className="block lg:hidden w-full relative min-h-[260px] sm:min-h-[320px] rounded-xl overflow-hidden mt-8 mb-2">
            <picture className="w-full h-full block">
              <source type="image/webp" srcSet="/cristo-rey-cali-night.webp" />
              <img
                src="/cristo-rey-cali-night.jpg"
                alt="Panorámica nocturna de Cali desde Cristo Rey — Sede de JP Studios diseño y desarrollo web"
                className="w-full h-full object-cover object-center"
                width={1376}
                height={768}
                loading="lazy"
                decoding="async"
              />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Baseline Row: Orientation Line Lockup Matching Mockup Baseline */}
          <div className="relative z-10 w-full flex items-center justify-between lg:justify-end gap-3.5 pt-6 sm:pt-8 lg:pt-8 text-xs font-sans text-white/70 select-none">
            <div className="flex items-center gap-1.5 shrink-0 text-white/80">
              <MapPin className="w-3.5 h-3.5 text-white/60" />
              <span className="font-medium text-[11px] sm:text-xs">Cali, Colombia</span>
            </div>
            <span className="h-px bg-white/20 w-16 sm:w-28 lg:w-40" aria-hidden="true" />
            <span className="text-[11px] tracking-wide text-white/60 font-sans whitespace-nowrap">
              {t.footer.slogan}
            </span>
          </div>

        </div>

        {/* ========================================================
            PART 2: DIRECTORY GRID (4 COLUMNS BALANCED)
            ======================================================== */}
        <div className="border-t border-white/[0.08] pt-12 sm:pt-16 pb-12 sm:pb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 xl:gap-16">
          
          {/* Column 1: Brand & Socials */}
          <div className="space-y-4">
            <a
              href="/"
              onClick={(e) => {
                if (typeof window !== 'undefined' && window.location.pathname === '/') {
                  handleNavClick(e, '#top');
                }
              }}
              className="inline-block"
              aria-label="JP Studios Home"
              data-interactive
            >
              <img
                src="/logo-horizontal-white.webp"
                alt="JP Studios — Logotipo oficial en blanco para pie de página"
                className="h-7 w-auto object-contain"
                width={335}
                height={81}
              />
            </a>

            <p className="text-xs text-white/60 font-sans leading-relaxed max-w-[280px]">
              {t.footer.brandDescription}
            </p>

            {/* Social Icons (Instagram, LinkedIn, TikTok, GitHub) */}
            <div className="flex items-center gap-4 pt-2 text-white/60">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/juanpa_571"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-200"
                aria-label="Instagram"
                data-interactive
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/juan-pablo-chacon-034457283/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-200"
                aria-label="LinkedIn"
                data-interactive
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@juanpa.571"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-200"
                aria-label="TikTok"
                data-interactive
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Juanpa571"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-200"
                aria-label="GitHub"
                data-interactive
              >
                <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Navegación */}
          <nav aria-label={t.footer.navTitle} className="space-y-3.5">
            <span className="block text-xs font-semibold uppercase tracking-[0.08em] text-white">
              {t.footer.navTitle}
            </span>
            <ul className="space-y-2.5 text-xs text-white/60 font-sans">
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleNavClick(e, '#services')}
                  className="hover:text-white transition-colors duration-200"
                  data-interactive
                >
                  {isSpanish ? 'Servicios' : 'Services'}
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  onClick={(e) => handleNavClick(e, '#pricing')}
                  className="hover:text-white transition-colors duration-200"
                  data-interactive
                >
                  {isSpanish ? 'Precios' : 'Pricing'}
                </a>
              </li>
              <li>
                <a
                  href="#process"
                  onClick={(e) => handleNavClick(e, '#process')}
                  className="hover:text-white transition-colors duration-200"
                  data-interactive
                >
                  {isSpanish ? 'Proceso' : 'Process'}
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  onClick={(e) => handleNavClick(e, '#faq')}
                  className="hover:text-white transition-colors duration-200"
                  data-interactive
                >
                  {isSpanish ? 'Preguntas' : 'FAQ'}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="hover:text-white transition-colors duration-200"
                  data-interactive
                >
                  {isSpanish ? 'Contacto' : 'Contact'}
                </a>
              </li>
            </ul>
          </nav>

          {/* Column 3: Servicios */}
          <nav aria-label={t.footer.servicesTitle} className="space-y-3.5">
            <span className="block text-xs font-semibold uppercase tracking-[0.08em] text-white">
              {t.footer.servicesTitle}
            </span>
            <ul className="space-y-2.5 text-xs text-white/60 font-sans">
              <li>
                <a
                  href="/diseno-web-cali"
                  className="hover:text-white transition-colors duration-200"
                  data-interactive
                >
                  {isSpanish ? 'Diseño de páginas web en Cali' : 'Website Design in Cali'}
                </a>
              </li>
              <li>
                <a
                  href="/posicionar-web-en-google"
                  className="hover:text-white transition-colors duration-200"
                  data-interactive
                >
                  {isSpanish ? 'Posicionar web en Google' : 'Google SEO Ranking'}
                </a>
              </li>
              <li>
                <a
                  href="/posicionamiento-web-cali"
                  className="hover:text-white transition-colors duration-200"
                  data-interactive
                >
                  {isSpanish ? 'Google Maps (SEO Local Cali)' : 'Google Maps (Local SEO)'}
                </a>
              </li>
              <li>
                <a
                  href="/posicionar-web-en-google#aeo-geo"
                  className="hover:text-white transition-colors duration-200"
                  data-interactive
                >
                  {isSpanish ? 'Inteligencia Artificial (AEO & GEO)' : 'AI (AEO & GEO)'}
                </a>
              </li>
            </ul>
          </nav>

          {/* Column 4: Ubicación */}
          <div className="space-y-3.5">
            <span className="block text-xs font-semibold uppercase tracking-[0.08em] text-white">
              {t.footer.locationTitle}
            </span>
            
            <div className="space-y-3">
              <div className="flex items-start gap-2.5 text-xs">
                <MapPin className="w-4 h-4 text-white/70 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <span className="font-medium text-white block">
                    {t.footer.locationName}
                  </span>
                  <span className="text-white/50 text-[11px] block leading-snug">
                    {t.footer.locationSubtitle}
                  </span>
                </div>
              </div>

              <div className="h-px bg-white/[0.08] w-full" aria-hidden="true" />

              <div className="flex items-center gap-2.5 text-xs text-white/70">
                <Globe className="w-4 h-4 text-white/60 shrink-0" />
                <span className="font-medium text-white/80">{t.footer.remoteGlobal}</span>
              </div>
            </div>
          </div>

        </div>

        {/* ========================================================
            PART 3: BOTTOM BAR (COPYRIGHT & ATTRIBUTION)
            ======================================================== */}
        <div className="border-t border-white/[0.08] pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-white/50">
          <p className="text-center sm:text-left m-0">
            {t.footer.copyright}
          </p>

          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-6 text-xs text-white/60">
            <span>{t.footer.craftedBy}</span>
            <button
              onClick={handleBackToTop}
              className="inline-flex items-center gap-1.5 text-white hover:text-white/80 transition-colors duration-200 cursor-pointer group select-none"
              data-interactive
              aria-label="Volver arriba"
            >
              <span className="group-hover:-translate-y-0.5 transition-transform duration-200">
                ↑
              </span>
              <span>{t.footer.backToTop}</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
