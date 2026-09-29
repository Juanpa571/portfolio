import React, { useState, useEffect } from 'react';
import { WhatsAppIcon } from '../ui/WhatsAppIcon';

interface HeaderV2Props {
  onNavigateHome?: () => void;
}

export const HeaderV2: React.FC<HeaderV2Props> = ({ onNavigateHome }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('hero');

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
    const sectionIds = ['hero', 'servicios', 'proyectos', 'proceso', 'faq'];
    let observer: IntersectionObserver | null = null;

    if ('IntersectionObserver' in window) {
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
  }, []);

  const navLinks = [
    { href: '#servicios', id: 'servicios', label: 'Servicios' },
    { href: '#proyectos', id: 'proyectos', label: 'Proyectos' },
    { href: '#proceso', id: 'proceso', label: 'Proceso' },
    { href: '#faq', id: 'faq', label: 'Preguntas' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled 
          ? 'bg-[#08090C]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)]' 
          : 'bg-transparent border-b border-transparent backdrop-blur-none'
      }`}
    >
      <div className={`mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between transition-all duration-500 ease-out ${
        isScrolled 
          ? 'max-w-7xl h-16' 
          : 'max-w-[1680px] h-20'
      }`}>
        
        {/* Brand Logo Horizontal Oficial */}
        <a 
          href="/" 
          onClick={(e) => {
            if (onNavigateHome) {
              e.preventDefault();
              onNavigateHome();
            }
          }}
          className="group flex items-center transition-transform duration-200 hover:scale-[1.02]"
          aria-label="JP Studios Inicio"
        >
          <img 
            src="/logo-horizontal.png"
            alt="JP Studios"
            width={145}
            height={32}
            className="h-7 sm:h-8 w-auto object-contain filter drop-shadow-[0_2px_12px_rgba(6,182,212,0.18)] transition-all"
            loading="eager"
            fetchPriority="high"
          />
        </a>

        {/* Minimal Adaptive Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            const targetHref = typeof window !== 'undefined' && window.location.pathname !== '/'
              ? `/${link.href}`
              : link.href;

            return (
              <a 
                key={link.id}
                href={targetHref} 
                className={`relative py-1 transition-colors ${
                  isActive ? 'text-cyan-400 font-semibold' : 'text-slate-300 hover:text-white'
                }`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-cyan-400 rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Direct Action Button (Geometría técnica, no píldora) */}
        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/573177371301?text=Hola%20Juan%20Pablo,%20quiero%20cotizar%20un%20sitio%20web%20para%20mi%20negocio"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs sm:text-sm tracking-wide transition-all shadow-md shadow-cyan-500/15 flex items-center gap-2 group"
          >
            <WhatsAppIcon className="w-3.5 h-3.5 fill-current shrink-0" />
            <span>Hablemos</span>
            <svg className="w-3 h-3 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

      </div>
    </header>
  );
};
