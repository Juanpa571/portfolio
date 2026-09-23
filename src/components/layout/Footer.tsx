import React from 'react';
import { Mail, MessageCircle, MapPin, Globe } from 'lucide-react';
import { siteConfig } from '../../config/site';
import { useLanguage } from '../../context/LanguageContext';

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
      {/* Expanded Container with reduced side margins to give monumental breathing room */}
      <div className="w-full max-w-[1760px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 2xl:px-20 pt-16 sm:pt-20 lg:pt-24 pb-8 flex flex-col justify-between relative z-10">
        
        {/* ========================================================
            PART 1: HERO ZONE (Split: Left Copy + Right Night City)
            ======================================================== */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 lg:gap-8 pb-14 sm:pb-18 lg:pb-20 relative">
          
          {/* Left: Eyebrow + Monumental Question + Subtitle + Action Pills */}
          <div className="w-full lg:w-[48%] xl:w-[46%] 2xl:w-[45%] flex flex-col items-start justify-center space-y-6 sm:space-y-7 z-10">
            
            {/* Eyebrow */}
            <span className="text-xs font-sans tracking-[0.25em] text-white/50 uppercase font-medium">
              {t.footer.eyebrow}
            </span>

            {/* Headline */}
            <h2 className="text-3xl sm:text-5xl lg:text-[3.75rem] xl:text-[4.25rem] 2xl:text-[4.6rem] font-display font-medium text-white tracking-tight leading-[1.06] m-0">
              {t.footer.headlineLine1}
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
                className="w-full sm:w-auto px-6 py-3.5 rounded-full border border-white/20 hover:border-white bg-white/[0.03] hover:bg-white/10 text-white text-xs sm:text-sm font-sans font-medium transition-all duration-300 flex items-center justify-center gap-2.5 active:scale-[0.98] group"
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
                className="w-full sm:w-auto px-6 py-3.5 rounded-full border border-white/20 hover:border-white bg-white/[0.03] hover:bg-white/10 text-white text-xs sm:text-sm font-sans font-medium transition-all duration-300 flex items-center justify-center gap-2.5 active:scale-[0.98] group"
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
              <span className="w-2 h-2 rounded-full bg-[#00C988] shadow-[0_0_8px_rgba(0,201,136,0.8)] animate-pulse" />
              <span>{t.footer.responseBadge}</span>
            </div>
          </div>

          {/* Right: Cristo Rey & Cali Nocturnal Panorama + Orientation Line */}
          <div className="w-full lg:w-[52%] xl:w-[54%] 2xl:w-[55%] relative flex flex-col justify-end min-h-[280px] sm:min-h-[360px] lg:min-h-[440px] xl:min-h-[480px] 2xl:min-h-[520px] overflow-hidden rounded-2xl lg:rounded-none">
            
            {/* High-Resolution B&W Night Photograph Matching GPT 100% with Soft Seamless Masking */}
            <picture className="absolute inset-0 w-full h-full">
              <source type="image/webp" srcSet="/cristo-rey-cali-night.webp" />
              <img
                src="/cristo-rey-cali-night.jpg"
                alt="Cristo Rey y panorámica nocturna de Cali, Colombia — JP Studios"
                className="w-full h-full object-cover object-[center_35%] select-none pointer-events-none [mask-image:linear-gradient(to_right,transparent_0%,rgba(0,0,0,0.25)_10%,rgba(0,0,0,0.85)_26%,black_45%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,rgba(0,0,0,0.25)_10%,rgba(0,0,0,0.85)_26%,black_45%)]"
                loading="lazy"
                decoding="async"
                width={1376}
                height={768}
              />
            </picture>

            {/* Top and Bottom soft feathers ensuring 100% seamless blend with #111111 */}
            <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#111111] via-[#111111]/50 to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#111111] via-[#111111]/80 to-transparent pointer-events-none" />

            {/* Orientation Line Lockup Matching Mockup Baseline */}
            <div className="relative z-10 flex items-center justify-between sm:justify-end gap-3.5 px-2 pb-2 text-xs font-sans text-white/70 select-none">
              <div className="flex items-center gap-1.5 shrink-0 text-white/80">
                <MapPin className="w-3.5 h-3.5 text-white/60" />
                <span className="font-medium text-[11px] sm:text-xs">Cali, Colombia</span>
              </div>
              <span className="h-px bg-white/20 flex-1 max-w-[140px] sm:max-w-[200px]" aria-hidden="true" />
              <span className="text-[9.5px] sm:text-[10px] tracking-[0.16em] uppercase text-white/45 font-sans whitespace-nowrap">
                {t.footer.slogan}
              </span>
            </div>
          </div>

        </div>

        {/* ========================================================
            PART 2: DIRECTORY GRID (5 COLUMNS BALANCED)
            ======================================================== */}
        <div className="border-t border-white/[0.08] pt-12 sm:pt-16 pb-12 sm:pb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 xl:gap-12">
          
          {/* Column 1: Brand & Socials */}
          <div className="sm:col-span-2 lg:col-span-1 space-y-4">
            <a
              href="#top"
              onClick={(e) => handleNavClick(e, '#top')}
              className="inline-block"
              aria-label="JP Studios Home"
              data-interactive
            >
              <img
                src="/logo-horizontal-white.webp"
                alt="JP Studios"
                className="h-7 w-auto object-contain"
                width={335}
                height={81}
              />
            </a>

            <p className="text-xs text-white/60 font-sans leading-relaxed max-w-[260px]">
              {t.footer.brandDescription}
            </p>

            {/* Social Icons (Instagram, LinkedIn, YouTube, X) */}
            <div className="flex items-center gap-4 pt-2 text-white/60">
              {/* Instagram */}
              <a
                href="https://instagram.com"
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
                href="https://linkedin.com/in/juan-pablo-chacon"
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

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-200"
                aria-label="YouTube"
                data-interactive
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                  <polygon points="10 15 15 12 10 9 10 15" fill="currentColor" />
                </svg>
              </a>

              {/* X / Twitter */}
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-200"
                aria-label="X"
                data-interactive
              >
                <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Navegación */}
          <div className="space-y-3.5">
            <h3 className="text-xs font-semibold uppercase tracking-[0.08em] text-white">
              {t.footer.navTitle}
            </h3>
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
          </div>

          {/* Column 3: Servicios */}
          <div className="space-y-3.5">
            <h3 className="text-xs font-semibold uppercase tracking-[0.08em] text-white">
              {t.footer.servicesTitle}
            </h3>
            <ul className="space-y-2.5 text-xs text-white/60 font-sans">
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleNavClick(e, '#services')}
                  className="hover:text-white transition-colors duration-200"
                  data-interactive
                >
                  {isSpanish ? 'Diseño de páginas web' : 'Website Design'}
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleNavClick(e, '#services')}
                  className="hover:text-white transition-colors duration-200"
                  data-interactive
                >
                  {isSpanish ? 'SEO en Google' : 'Google SEO'}
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleNavClick(e, '#services')}
                  className="hover:text-white transition-colors duration-200"
                  data-interactive
                >
                  {isSpanish ? 'Google Maps (SEO Local)' : 'Google Maps (Local SEO)'}
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleNavClick(e, '#services')}
                  className="hover:text-white transition-colors duration-200"
                  data-interactive
                >
                  {isSpanish ? 'Inteligencia Artificial (AEO & GEO)' : 'AI (AEO & GEO)'}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Recursos */}
          <div className="space-y-3.5">
            <h3 className="text-xs font-semibold uppercase tracking-[0.08em] text-white">
              {t.footer.resourcesTitle}
            </h3>
            <ul className="space-y-2.5 text-xs text-white/60 font-sans">
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleNavClick(e, '#services')}
                  className="hover:text-white transition-colors duration-200"
                  data-interactive
                >
                  {isSpanish ? 'Blog' : 'Blog'}
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleNavClick(e, '#services')}
                  className="hover:text-white transition-colors duration-200"
                  data-interactive
                >
                  {isSpanish ? 'Casos de éxito' : 'Case Studies'}
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleNavClick(e, '#services')}
                  className="hover:text-white transition-colors duration-200"
                  data-interactive
                >
                  {isSpanish ? 'Guías' : 'Guides'}
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleNavClick(e, '#services')}
                  className="hover:text-white transition-colors duration-200"
                  data-interactive
                >
                  {isSpanish ? 'Plantillas' : 'Templates'}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5: Ubicación */}
          <div className="space-y-3.5">
            <h3 className="text-xs font-semibold uppercase tracking-[0.08em] text-white">
              {t.footer.locationTitle}
            </h3>
            
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
