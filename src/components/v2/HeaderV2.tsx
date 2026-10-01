import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { WhatsAppIcon } from '../ui/WhatsAppIcon';

export interface HeaderNavLink {
  href: string;
  id: string;
  label: string;
}

export interface HeaderV2Props {
  onNavigateHome?: () => void;
  navLinks?: HeaderNavLink[];
  maxWidth?: '7xl' | '5xl';
  ctaText?: string;
  ctaHref?: string;
}

export const HeaderV2: React.FC<HeaderV2Props> = ({ 
  onNavigateHome,
  navLinks: customNavLinks,
  maxWidth = '7xl',
  ctaText = 'Hablemos',
  ctaHref = 'https://wa.me/573177371301?text=Hola%20Juan%20Pablo,%20quiero%20cotizar%20un%20sitio%20web%20para%20mi%20negocio'
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const defaultNavLinks: HeaderNavLink[] = [
    { href: '#servicios', id: 'servicios', label: 'Servicios' },
    { href: '#proyectos', id: 'proyectos', label: 'Proyectos' },
    { href: '#proceso', id: 'proceso', label: 'Proceso' },
    { href: '/cuanto-cuesta-una-pagina-web-en-colombia', id: 'precios', label: 'Precios 2026' },
    { href: '#faq', id: 'faq', label: 'Preguntas' },
  ];

  const links = customNavLinks || defaultNavLinks;

  useEffect(() => {
    setMounted(true);
    if (links.length > 0) {
      setActiveSection(links[0].id);
    }
  }, [links]);

  useEffect(() => {
    let rAFId: number;

    const handleScroll = () => {
      if (rAFId) return;
      rAFId = requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 20);
        rAFId = 0;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // IntersectionObserver asíncrono para detectar sección activa sin reflows síncronos
    const sectionIds = links.map(l => l.id);
    let observer: IntersectionObserver | null = null;

    if ('IntersectionObserver' in window && sectionIds.length > 0) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
          });
        },
        { rootMargin: '-20% 0px -60% 0px', threshold: 0.1 }
      );

      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer?.observe(el);
      });
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rAFId) cancelAnimationFrame(rAFId);
      if (observer) observer.disconnect();
    };
  }, [links]);

  // Bloqueo de scroll cuando el panel móvil está abierto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Cierre con tecla Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
          isScrolled
            ? 'bg-[#070709]/92 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)]' 
            : 'bg-transparent border-b border-transparent backdrop-blur-none'
        }`}
      >
        <div className={`mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between transition-all duration-300 ease-out ${
          maxWidth === '5xl'
            ? (isScrolled ? 'max-w-5xl h-16' : 'max-w-5xl h-20')
            : (isScrolled ? 'max-w-7xl h-16' : 'max-w-[1680px] h-20')
        }`}>
          
          {/* Brand Logo Horizontal Oficial */}
          <a 
            href="/" 
            onClick={(e) => {
              setIsMobileMenuOpen(false);
              if (onNavigateHome) {
                e.preventDefault();
                onNavigateHome();
              }
            }}
            className="group flex items-center transition-transform duration-200 hover:scale-[1.02]"
            aria-label="JP Studios Inicio"
          >
            <picture>
              <source type="image/webp" srcSet="/logo-horizontal-white.webp" />
              <img 
                src="/logo-horizontal-white.webp"
                alt="JP Studios"
                width="134"
                height="28"
                className="h-7 sm:h-8 w-auto object-contain filter drop-shadow-[0_2px_12px_rgba(255,255,255,0.08)] transition-all"
                loading="eager"
                decoding="async"
              />
            </picture>
          </a>

          {/* Minimal Adaptive Navigation (Desktop) */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-8 text-sm font-medium text-slate-300">
            {links.map((link) => {
              const isActive = activeSection === link.id;
              const isAnchor = link.href.startsWith('#');
              const targetHref = (!isAnchor && typeof window !== 'undefined' && window.location.pathname !== '/')
                ? (link.href.startsWith('/') ? link.href : `/${link.href}`)
                : link.href;

              return (
                <a 
                  key={link.id}
                  href={targetHref} 
                  onClick={(e) => {
                    if (isAnchor) {
                      const el = document.getElementById(link.id);
                      if (el) {
                        e.preventDefault();
                        el.scrollIntoView({ behavior: 'smooth' });
                      }
                    }
                  }}
                  className={`relative py-1 text-xs lg:text-sm font-mono tracking-tight transition-colors ${
                    isActive ? 'text-white font-semibold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-slate-200 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Botón de Acción Directa + Disparador Hamburguesa */}
          <div className="flex items-center gap-3">
            <a
              href={ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 sm:px-4 py-2 rounded-lg bg-white hover:bg-slate-200 text-slate-950 font-bold text-xs sm:text-sm tracking-wide transition-all shadow-sm shadow-black/30 hover:shadow-md flex items-center gap-2 group cursor-pointer"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 fill-current shrink-0" />
              <span className="hidden sm:inline">{ctaText}</span>
              <svg className="w-3 h-3 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>

            {/* Botón Hamburguesa Móvil */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2.5 rounded-lg text-slate-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 transition-colors focus:outline-none focus:border-slate-400 cursor-pointer"
              aria-expanded={isMobileMenuOpen}
              aria-label="Abrir menú de navegación"
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span className="h-0.5 w-full bg-current rounded-full" />
                <span className="h-0.5 w-full bg-current rounded-full" />
                <span className="h-0.5 w-full bg-current rounded-full" />
              </div>
            </button>
          </div>

        </div>
      </header>

      {/* Menú Móvil Full-Screen Takeover (Montado en Body vía Portal) */}
      {mounted && isMobileMenuOpen && createPortal(
        <div
          id="mobile-navigation-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menú de navegación"
          style={{ backgroundColor: '#070709' }}
          className="md:hidden fixed inset-0 z-[9999] w-full h-[100dvh] flex flex-col justify-between overflow-hidden"
        >
          {/* Top Bar con Logo y Botón de Cerrar [X] */}
          <div className="flex items-center justify-between px-5 sm:px-6 h-16 sm:h-20 border-b border-white/[0.08] shrink-0">
            <a 
              href="/" 
              onClick={(e) => {
                setIsMobileMenuOpen(false);
                if (onNavigateHome) {
                  e.preventDefault();
                  onNavigateHome();
                }
              }}
              className="flex items-center"
              aria-label="JP Studios Inicio"
            >
              <picture>
                <source type="image/webp" srcSet="/logo-horizontal-white.webp" />
                <img 
                  src="/logo-horizontal-white.webp"
                  alt="JP Studios"
                  width="134"
                  height="28"
                  className="h-7 w-auto object-contain filter drop-shadow-[0_2px_12px_rgba(255,255,255,0.08)]"
                  loading="eager"
                  decoding="async"
                />
              </picture>
            </a>
            
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2.5 rounded-lg text-slate-300 hover:text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 transition-colors focus:outline-none focus:border-slate-400 cursor-pointer flex items-center justify-center"
              aria-label="Cerrar menú"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Enlaces de Navegación centrados / cómodos */}
          <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col justify-center">
            <div className="text-[11px] font-mono uppercase tracking-widest text-slate-400 mb-4">
              Navegación
            </div>
            <nav className="flex flex-col space-y-1">
              {links.map((link) => {
                const isActive = activeSection === link.id;
                const isAnchor = link.href.startsWith('#');
                const targetHref = (!isAnchor && typeof window !== 'undefined' && window.location.pathname !== '/')
                  ? (link.href.startsWith('/') ? link.href : `/${link.href}`)
                  : link.href;

                return (
                  <a
                    key={link.id}
                    href={targetHref}
                    onClick={(e) => {
                      setIsMobileMenuOpen(false);
                      if (isAnchor) {
                        const el = document.getElementById(link.id);
                        if (el) {
                          e.preventDefault();
                          el.scrollIntoView({ behavior: 'smooth' });
                        }
                      } else if (link.href === '/' && onNavigateHome) {
                        e.preventDefault();
                        onNavigateHome();
                      }
                    }}
                    className={`text-2xl font-bold tracking-tight transition-colors py-3.5 flex items-center justify-between border-b border-white/[0.06] ${
                      isActive ? 'text-white' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    <span>{link.label}</span>
                    <span className="text-sm font-mono text-slate-400">→</span>
                  </a>
                );
              })}

              {/* Acceso a Inicio si estamos en artículo */}
              {customNavLinks && (
                <a
                  href="/"
                  onClick={(e) => {
                    setIsMobileMenuOpen(false);
                    if (onNavigateHome) {
                      e.preventDefault();
                      onNavigateHome();
                    }
                  }}
                  className="text-lg font-mono text-slate-400 hover:text-white transition-colors py-3 flex items-center justify-between border-b border-white/[0.06]"
                >
                  <span>← Volver al Inicio</span>
                </a>
              )}

              {/* Acceso a Herramienta de Auditoría */}
              <a
                href="/auditar-posicionamiento"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-bold tracking-tight text-white hover:text-slate-200 transition-colors py-3.5 flex items-center justify-between border-b border-white/[0.06]"
              >
                <span>Auditoría en Google</span>
                <span className="text-xs font-mono text-slate-300">Herramienta ↗</span>
              </a>
            </nav>
          </div>

          {/* Panel Inferior con CTA Directo a WhatsApp */}
          <div className="p-6 border-t border-white/[0.08] space-y-4 shrink-0">
            <a
              href={ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full py-4 px-4 rounded-xl bg-white hover:bg-slate-200 text-slate-950 font-bold text-sm tracking-wide transition-all shadow-md flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4 fill-current shrink-0" />
              <span>{ctaText} (+57 317 737 1301)</span>
            </a>

            <div className="flex items-center justify-between text-xs font-mono text-slate-400">
              <span>hola@jpchacon.com</span>
              <span>Cali, Colombia</span>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};
