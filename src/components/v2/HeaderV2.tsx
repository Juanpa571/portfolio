import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
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

interface SectionTheme {
  accentColor: string;
  glowColor: string;
  badgeBg: string;
  headerBorder: string;
}

const SECTION_THEMES: Record<string, SectionTheme> = {
  servicios: {
    accentColor: '#34d399', // Emerald 400
    glowColor: 'rgba(52, 211, 153, 0.55)',
    badgeBg: 'rgba(52, 211, 153, 0.1)',
    headerBorder: 'linear-gradient(90deg, transparent 0%, rgba(52, 211, 153, 0.35) 50%, transparent 100%)',
  },
  proyectos: {
    accentColor: '#38bdf8', // Cyan / Sky 400
    glowColor: 'rgba(56, 189, 248, 0.55)',
    badgeBg: 'rgba(56, 189, 248, 0.1)',
    headerBorder: 'linear-gradient(90deg, transparent 0%, rgba(56, 189, 248, 0.35) 50%, transparent 100%)',
  },
  proceso: {
    accentColor: '#c084fc', // Purple 400
    glowColor: 'rgba(192, 132, 252, 0.55)',
    badgeBg: 'rgba(192, 132, 252, 0.1)',
    headerBorder: 'linear-gradient(90deg, transparent 0%, rgba(192, 132, 252, 0.35) 50%, transparent 100%)',
  },
  precios: {
    accentColor: '#fbbf24', // Amber 400
    glowColor: 'rgba(251, 191, 36, 0.55)',
    badgeBg: 'rgba(251, 191, 36, 0.1)',
    headerBorder: 'linear-gradient(90deg, transparent 0%, rgba(251, 191, 36, 0.35) 50%, transparent 100%)',
  },
  faq: {
    accentColor: '#38bdf8', // Sky 400
    glowColor: 'rgba(56, 189, 248, 0.55)',
    badgeBg: 'rgba(56, 189, 248, 0.1)',
    headerBorder: 'linear-gradient(90deg, transparent 0%, rgba(56, 189, 248, 0.35) 50%, transparent 100%)',
  },
  // Subpágina Guía de Precios
  'tabla-precios': {
    accentColor: '#fbbf24',
    glowColor: 'rgba(251, 191, 36, 0.55)',
    badgeBg: 'rgba(251, 191, 36, 0.1)',
    headerBorder: 'linear-gradient(90deg, transparent 0%, rgba(251, 191, 36, 0.35) 50%, transparent 100%)',
  },
  'costos-recurrentes': {
    accentColor: '#34d399',
    glowColor: 'rgba(52, 211, 153, 0.55)',
    badgeBg: 'rgba(52, 211, 153, 0.1)',
    headerBorder: 'linear-gradient(90deg, transparent 0%, rgba(52, 211, 153, 0.35) 50%, transparent 100%)',
  },
  'checklist-contratacion': {
    accentColor: '#38bdf8',
    glowColor: 'rgba(56, 189, 248, 0.55)',
    badgeBg: 'rgba(56, 189, 248, 0.1)',
    headerBorder: 'linear-gradient(90deg, transparent 0%, rgba(56, 189, 248, 0.35) 50%, transparent 100%)',
  },
  'tarifas-jp': {
    accentColor: '#c084fc',
    glowColor: 'rgba(192, 132, 252, 0.55)',
    badgeBg: 'rgba(192, 132, 252, 0.1)',
    headerBorder: 'linear-gradient(90deg, transparent 0%, rgba(192, 132, 252, 0.35) 50%, transparent 100%)',
  },
};

const DEFAULT_THEME: SectionTheme = {
  accentColor: '#f8fafc',
  glowColor: 'rgba(255, 255, 255, 0.5)',
  badgeBg: 'rgba(255, 255, 255, 0.08)',
  headerBorder: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.25) 50%, transparent 100%)',
};

export const HeaderV2: React.FC<HeaderV2Props> = ({ 
  onNavigateHome,
  navLinks: customNavLinks,
  maxWidth = '7xl',
  ctaText = 'Hablemos',
  ctaHref = 'https://wa.me/573177371301?text=Hola%20Juan%20Pablo,%20quiero%20cotizar%20un%20sitio%20web%20para%20mi%20negocio'
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const defaultNavLinks: HeaderNavLink[] = [
    { href: '#servicios', id: 'servicios', label: 'Servicios' },
    { href: '#proyectos', id: 'proyectos', label: 'Proyectos' },
    { href: '#proceso', id: 'proceso', label: 'Proceso' },
    { href: '#faq', id: 'faq', label: 'Preguntas' },
    { href: '/cuanto-cuesta-una-pagina-web-en-colombia', id: 'precios', label: 'Precios 2026' },
  ];

  const links = customNavLinks || defaultNavLinks;

  useEffect(() => {
    setMounted(true);
    // Si la URL ya trae un hash directo, inicializarlo
    if (typeof window !== 'undefined' && window.location.hash) {
      const hashId = window.location.hash.replace('#', '');
      if (links.some(l => l.id === hashId)) {
        setActiveSection(hashId);
      }
    }
  }, [links]);

  // Scroll Spy desacoplado vía requestAnimationFrame (Regla 12: Cero Layout Thrashing)
  useEffect(() => {
    let rAFId: number;

    const updateActiveSection = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const scrollHeight = document.documentElement.scrollHeight;

      setIsScrolled(scrollY > 20);

      // 1. Si está al final de la página (Footer / Contacto), activar la última sección con elemento en el DOM
      if (scrollY + viewportHeight >= scrollHeight - 80) {
        for (let i = links.length - 1; i >= 0; i--) {
          const el = document.getElementById(links[i].id);
          if (el) {
            setActiveSection(links[i].id);
            return;
          }
        }
      }

      // 2. Si estamos en el Hero (antes de la primera sección visible)
      const firstSection = links.find(l => document.getElementById(l.id));
      const firstEl = firstSection ? document.getElementById(firstSection.id) : null;
      if (firstEl && scrollY < firstEl.offsetTop - 220) {
        setActiveSection('');
        return;
      }

      // 3. Línea focal de lectura natural (35% superior de la pantalla)
      const focalLine = scrollY + Math.min(260, viewportHeight * 0.35);

      let bestSectionId = '';
      let closestDistance = Infinity;

      for (const link of links) {
        const el = document.getElementById(link.id);
        if (!el) continue;

        const top = el.offsetTop;
        const bottom = top + el.offsetHeight;

        // Si la línea focal está dentro del contenedor de la sección
        if (focalLine >= top && focalLine <= bottom) {
          bestSectionId = link.id;
          break;
        }

        // Si está cerca del borde superior
        const distance = Math.abs(top - focalLine);
        if (distance < closestDistance) {
          closestDistance = distance;
          bestSectionId = link.id;
        }
      }

      if (bestSectionId) {
        setActiveSection(bestSectionId);
      }
    };

    const handleScroll = () => {
      if (rAFId) return;
      rAFId = requestAnimationFrame(() => {
        updateActiveSection();
        rAFId = 0;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    // Ejecución inicial y diferida para esperar la hidratación de bloques lazy-loaded
    handleScroll();
    const timer = setTimeout(handleScroll, 350);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      clearTimeout(timer);
      if (rAFId) cancelAnimationFrame(rAFId);
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

  const activeTheme = SECTION_THEMES[activeSection] || DEFAULT_THEME;

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
          isScrolled
            ? 'bg-[#070709]/92 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)]' 
            : 'bg-transparent border-b border-transparent backdrop-blur-none'
        }`}
      >
        {/* Hairline de resplandor ambiental reactivo según la sección activa */}
        <AnimatePresence>
          {isScrolled && activeSection && (
            <motion.div
              key={activeSection}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute bottom-0 left-0 right-0 h-[1px] pointer-events-none"
              style={{
                background: activeTheme.headerBorder,
              }}
            />
          )}
        </AnimatePresence>

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

          {/* Minimal Adaptive Navigation (Desktop) con animación dinámica Framer Motion */}
          <nav 
            className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-slate-300 relative py-1"
            onMouseLeave={() => setHoveredId(null)}
          >
            {links.map((link) => {
              const isActive = activeSection === link.id;
              const isHovered = hoveredId === link.id;
              const isAnchor = link.href.startsWith('#');
              const targetHref = (!isAnchor && typeof window !== 'undefined' && window.location.pathname !== '/')
                ? (link.href.startsWith('/') ? link.href : `/${link.href}`)
                : link.href;

              const theme = SECTION_THEMES[link.id] || DEFAULT_THEME;

              return (
                <a 
                  key={link.id}
                  href={targetHref}
                  onMouseEnter={() => setHoveredId(link.id)}
                  onClick={(e) => {
                    if (isAnchor) {
                      const el = document.getElementById(link.id);
                      if (el) {
                        e.preventDefault();
                        setActiveSection(link.id);
                        el.scrollIntoView({ behavior: 'smooth' });
                      }
                    }
                  }}
                  className={`relative px-2 py-1 text-xs lg:text-sm font-sans tracking-tight transition-colors duration-200 cursor-pointer ${
                    isActive 
                      ? 'text-white font-semibold' 
                      : 'text-slate-400 hover:text-slate-100'
                  }`}
                >
                  {/* Micro-Highlight Pill al pasar el cursor */}
                  {isHovered && !isActive && (
                    <motion.span
                      layoutId="navHoverPill"
                      className="absolute inset-0 rounded-lg bg-white/[0.05] pointer-events-none -z-10"
                      transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                    />
                  )}

                  {/* Indicador Activo Dinámico (Se desliza suavemente entre enlaces con resplandor) */}
                  {isActive && (
                    <>
                      {/* Aura sutil de fondo detrás del texto */}
                      <motion.span
                        layoutId="activeNavBackground"
                        className="absolute inset-0 rounded-lg pointer-events-none -z-10"
                        style={{ backgroundColor: theme.badgeBg }}
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                      {/* Barra subrayada con física Spring y resplandor acorde a la sección */}
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute -bottom-1 left-1.5 right-1.5 h-[2px] rounded-full pointer-events-none"
                        style={{
                          backgroundColor: theme.accentColor,
                          boxShadow: `0 0 10px ${theme.glowColor}, 0 0 2px ${theme.accentColor}`,
                        }}
                        transition={{
                          type: 'spring',
                          stiffness: 380,
                          damping: 32,
                        }}
                      />
                    </>
                  )}

                  <span className="relative z-10 transition-colors duration-200">
                    {link.label}
                  </span>
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
              aria-label={`${ctaText} por WhatsApp`}
              title={`${ctaText} por WhatsApp`}
              className="px-3.5 sm:px-4 py-2 rounded-lg bg-white hover:bg-slate-200 text-slate-950 font-bold text-xs sm:text-sm tracking-wide transition-all shadow-sm shadow-black/30 hover:shadow-md flex items-center gap-2 group cursor-pointer"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 fill-current shrink-0" aria-hidden="true" />
              <span className="sr-only">{ctaText} por WhatsApp</span>
              <span className="hidden sm:inline" aria-hidden="true">{ctaText}</span>
              <svg className="w-3 h-3 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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

          {/* Enlaces de Navegación Móvil */}
          <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col justify-center">
            <div className="text-[11px] font-mono uppercase tracking-widest text-slate-400 mb-4">
              Navegación
            </div>
            <nav className="flex flex-col space-y-1.5">
              {links.map((link) => {
                const isActive = activeSection === link.id;
                const isAnchor = link.href.startsWith('#');
                const targetHref = (!isAnchor && typeof window !== 'undefined' && window.location.pathname !== '/')
                  ? (link.href.startsWith('/') ? link.href : `/${link.href}`)
                  : link.href;

                const theme = SECTION_THEMES[link.id] || DEFAULT_THEME;

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
                          setActiveSection(link.id);
                          el.scrollIntoView({ behavior: 'smooth' });
                        }
                      } else if (link.href === '/' && onNavigateHome) {
                        e.preventDefault();
                        onNavigateHome();
                      }
                    }}
                    className={`text-xl sm:text-2xl font-bold tracking-tight transition-all py-3 px-3.5 -mx-3.5 rounded-xl flex items-center justify-between border-b border-white/[0.06] ${
                      isActive 
                        ? 'text-white bg-white/[0.06]' 
                        : 'text-slate-300 hover:text-white hover:bg-white/[0.03]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {isActive && (
                        <span 
                          className="w-1.5 h-5 rounded-full" 
                          style={{ 
                            backgroundColor: theme.accentColor,
                            boxShadow: `0 0 8px ${theme.glowColor}`,
                          }} 
                        />
                      )}
                      <span>{link.label}</span>
                    </div>
                    <span 
                      className="text-sm font-mono transition-colors"
                      style={{ color: isActive ? theme.accentColor : 'rgba(255,255,255,0.4)' }}
                    >
                      →
                    </span>
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
                  className="text-base font-mono text-slate-400 hover:text-white transition-colors py-3 flex items-center justify-between border-b border-white/[0.06]"
                >
                  <span>← Volver al Inicio</span>
                </a>
              )}

              {/* Acceso a Herramienta de Auditoría */}
              <a
                href="/auditar-posicionamiento"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xl sm:text-2xl font-bold tracking-tight text-white hover:text-slate-200 transition-colors py-3 px-3.5 -mx-3.5 rounded-xl flex items-center justify-between border-b border-white/[0.06]"
              >
                <span>Auditoría en Google</span>
                <span className="text-xs font-mono text-cyan-400">Herramienta ↗</span>
              </a>
            </nav>
          </div>

          {/* Panel Inferior con CTA Directo a WhatsApp */}
          <div className="p-6 border-t border-white/[0.08] space-y-4 shrink-0">
            <a
              href={ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${ctaText} por WhatsApp (+57 317 737 1301)`}
              title={`${ctaText} por WhatsApp`}
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full py-4 px-4 rounded-xl bg-white hover:bg-slate-200 text-slate-950 font-bold text-sm tracking-wide transition-all shadow-md flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4 fill-current shrink-0" aria-hidden="true" />
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
