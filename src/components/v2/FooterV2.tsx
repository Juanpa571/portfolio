import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { WhatsAppIcon } from '../ui/WhatsAppIcon';

interface FooterV2Props {
  onNavigateHome?: () => void;
}

export const FooterV2: React.FC<FooterV2Props> = ({ onNavigateHome }) => {
  const isSubpage = typeof window !== 'undefined' && window.location.pathname !== '/';
  const getHashHref = (hash: string) => isSubpage ? `/${hash}` : hash;

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative z-10 border-t border-white/10 bg-gradient-to-b from-[#070709]/95 via-[#070709] to-[#070709] backdrop-blur-xl text-slate-300 pt-20 pb-12 font-sans overflow-hidden">
      {/* Difuminado suave de luz ambiental que conecta con la sección anterior */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[120px] bg-gradient-to-b from-white/[0.03] to-transparent blur-2xl pointer-events-none -z-0" 
        aria-hidden="true" 
      />

      {/* Luz ambiental sutil inferior */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-white/[0.015] blur-[120px] pointer-events-none -z-0" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* BLOQUE PRINCIPAL */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/[0.08]">
          
          {/* COLUMNA 1: MARCA Y PROPÓSITO (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <a 
              href="/" 
              onClick={(e) => {
                if (onNavigateHome) {
                  e.preventDefault();
                  onNavigateHome();
                }
              }}
              className="inline-block transition-transform hover:scale-[1.02]"
              aria-label="JP Studios Inicio"
            >
              <img 
                src="/logo-horizontal-white.webp"
                alt="JP Studios"
                width="134"
                height="28"
                className="h-7 w-auto object-contain filter drop-shadow-[0_2px_10px_rgba(255,255,255,0.08)]"
                loading="lazy"
                decoding="async"
              />
            </a>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Estudio independiente de desarrollo y diseño web en Cali, Colombia. Sitios web a la medida construidos en React 19 optimizados para captar clientes en Google y motores de IA.
            </p>

            {/* Estado de disponibilidad técnica */}
            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Disponible para nuevos proyectos en Colombia y el exterior</span>
            </div>

            {/* Redes Sociales Oficiales */}
            <div className="pt-3">
              <span className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5">
                Redes & Comunidad
              </span>
              <div className="flex items-center gap-2.5">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/juanpa_571"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/30 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shadow-sm hover:shadow-[0_0_16px_rgba(255,255,255,0.06)] group cursor-pointer"
                  aria-label="Instagram de Juan Pablo Chacón"
                  title="Instagram (@juanpa_571)"
                >
                  <svg className="w-4.5 h-4.5 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
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
                  className="w-10 h-10 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/30 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shadow-sm hover:shadow-[0_0_16px_rgba(255,255,255,0.06)] group cursor-pointer"
                  aria-label="LinkedIn de Juan Pablo Chacón"
                  title="LinkedIn (Juan Pablo Chacón)"
                >
                  <svg className="w-4.5 h-4.5 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
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
                  className="w-10 h-10 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/30 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shadow-sm hover:shadow-[0_0_16px_rgba(255,255,255,0.06)] group cursor-pointer"
                  aria-label="TikTok de Juan Pablo Chacón"
                  title="TikTok (@juanpa.571)"
                >
                  <svg className="w-4.5 h-4.5 fill-current transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                  </svg>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/Juanpa571"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/30 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shadow-sm hover:shadow-[0_0_16px_rgba(255,255,255,0.06)] group cursor-pointer"
                  aria-label="GitHub de Juan Pablo Chacón"
                  title="GitHub (Juanpa571)"
                >
                  <svg className="w-4.5 h-4.5 fill-current transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* COLUMNA 2: NAVEGACIÓN (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <p className="text-xs font-mono uppercase tracking-wider text-slate-200 font-semibold">
              Navegación
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <a href={getHashHref('#servicios')} className="text-slate-400 hover:text-white transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href={getHashHref('#proyectos')} className="text-slate-400 hover:text-white transition-colors">
                  Proyectos
                </a>
              </li>
              <li>
                <a href={getHashHref('#proceso')} className="text-slate-400 hover:text-white transition-colors">
                  Metodología
                </a>
              </li>
              <li>
                <a href={getHashHref('#faq')} className="text-slate-400 hover:text-white transition-colors">
                  Preguntas Frecuentes
                </a>
              </li>
              <li>
                <a href={getHashHref('#contacto')} className="text-slate-400 hover:text-white transition-colors">
                  Cotizador Interactivo
                </a>
              </li>
              <li>
                <a href="/cuanto-cuesta-una-pagina-web-en-colombia" className="text-slate-400 hover:text-white transition-colors">
                  Guía de Precios 2026
                </a>
              </li>
              <li>
                <a href="/auditar-posicionamiento" className="text-slate-400 hover:text-white transition-colors">
                  Auditoría Google
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMNA 3: LEGAL (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <p className="text-xs font-mono uppercase tracking-wider text-slate-200 font-semibold">
              Legal
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/privacidad" className="text-slate-400 hover:text-white transition-colors">
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a href="/terminos" className="text-slate-400 hover:text-white transition-colors">
                  Términos del Servicio
                </a>
              </li>
              <li>
                <span className="text-xs text-slate-400 font-mono block pt-1">
                  Habeas Data • Ley 1581 de 2012
                </span>
              </li>
            </ul>
          </div>

          {/* COLUMNA 4: CONTACTO DIRECTO (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-mono uppercase tracking-wider text-slate-200 font-semibold">
              Contacto Directo
            </p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a 
                  href="https://wa.me/573177371301?text=Hola%20Juan%20Pablo,%20quisiera%20consultar%20sobre%20un%20proyecto%20web"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors group"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-slate-300 group-hover:fill-white transition-colors shrink-0" />
                  <span>+57 317 737 1301</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:hola@jpchacon.com"
                  className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors group"
                >
                  <Mail className="w-4 h-4 text-slate-300 group-hover:text-white transition-colors shrink-0" />
                  <span>hola@jpchacon.com</span>
                </a>
              </li>
              <li className="text-xs text-slate-400 pt-1 font-mono">
                Cali, Valle del Cauca, Colombia
              </li>
            </ul>
          </div>

        </div>

        {/* BARRA INFERIOR (COPYRIGHT + CRÉDITOS + VOLVER ARRIBA) */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-mono">
          <p className="text-slate-400">
            © 2026 JP Studios — Juan Pablo Chacón. Todos los derechos reservados.
          </p>

          <div className="flex items-center gap-6">
            <span className="hidden md:inline text-slate-400">
              React 19 • Tailwind CSS • Rendimiento 100/100
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer group"
              aria-label="Arriba - volver al inicio de la página"
            >
              <span>Arriba</span>
              <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
