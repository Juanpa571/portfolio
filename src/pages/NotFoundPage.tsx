import React from 'react';
import { ArrowLeft, ArrowUpRight, MessageCircle, Compass } from 'lucide-react';
import { siteConfig } from '../config/site';
import { useLanguage } from '../context/LanguageContext';
import { MetaTags } from '../components/seo/MetaTags';
import { highlightBrandKeywords } from '../utils/textHighlight';
import { trackWhatsAppClick } from '../utils/analytics';

interface NotFoundPageProps {
  onNavigateHome: () => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigateHome }) => {
  const { language } = useLanguage();
  const isSpanish = language === 'es';

  return (
    <div className="min-h-screen bg-[#fafaf8] text-[#1a1a1e] font-sans antialiased selection:bg-black selection:text-white flex flex-col justify-between relative overflow-x-hidden">
      <MetaTags
        title={
          isSpanish
            ? '404: Página no encontrada — JP Studios Cali'
            : '404: Page Not Found — JP Studios Cali'
        }
        description={
          isSpanish
            ? 'La página que buscas no existe o ha sido reubicada. Regresa al inicio de JP Studios.'
            : 'The page you are looking for does not exist or has been relocated.'
        }
        canonicalUrl="https://jpchacon.com/404"
        noIndex={true}
      />

      {/* Top Header Bar */}
      <header className="w-full border-b border-black/[0.06] bg-[#fafaf8]/90 backdrop-blur-md sticky top-0 z-30 py-4 sm:py-5">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 flex items-center justify-between">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onNavigateHome();
            }}
            className="flex items-center gap-3 group"
            aria-label="JP Studios Home"
          >
            <img
              src="/logo-horizontal.webp"
              alt="JP Studios — Logotipo oficial de diseño y desarrollo web en Cali"
              className="h-7 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              width={335}
              height={81}
            />
          </a>

          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onNavigateHome();
            }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 hover:border-black text-xs font-sans font-medium text-black/80 hover:text-black transition-all cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{isSpanish ? 'Volver al Inicio' : 'Back to Home'}</span>
          </a>
        </div>
      </header>

      {/* Main Monumental 404 Hero */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 sm:px-12 py-16 sm:py-24 max-w-4xl mx-auto text-center">
        {/* Telemetry Label */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/[0.04] text-black/60 text-xs font-sans font-medium mb-6">
          <span className="w-2 h-2 rounded-full bg-amber-500" />
          <span>{isSpanish ? 'Ruta no localizada (HTTP 404)' : 'Route Not Located (HTTP 404)'}</span>
        </div>

        {/* Large Clean Number */}
        <div className="text-8xl sm:text-[10rem] md:text-[12rem] font-display font-light text-[#111111]/85 tracking-tighter leading-none select-none">
          404
        </div>

        {/* Core Headline */}
        <h1 className="text-2xl sm:text-4xl lg:text-[2.6rem] font-semibold font-display tracking-tight text-[#111111] leading-tight mt-4 sm:mt-6 mb-4 max-w-2xl">
          {isSpanish
            ? 'Esta página no existe o ha sido reubicada.'
            : 'This page does not exist or has been relocated.'}
        </h1>

        {/* Descriptive Recovery Copy */}
        <p className="text-sm sm:text-base text-black/65 font-sans leading-relaxed max-w-xl mb-10">
          {isSpanish
            ? 'La dirección que ingresaste no corresponde a ninguna sección activa del estudio. Hemos reestructurado el sitio para optimizar la velocidad y la experiencia móvil.'
            : 'The URL you entered does not match any active section of the studio. We recently reorganized the site to enhance mobile speed and navigation.'}
        </p>

        {/* Primary Action Hub */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-lg mb-12">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onNavigateHome();
            }}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#111111] text-white hover:bg-black text-sm font-sans font-medium transition-all active:scale-[0.98] shadow-sm flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{isSpanish ? 'Ir a la Página Principal' : 'Go to Homepage'}</span>
          </a>

          <a
            href="/posicionar-web-en-google"
            className="w-full sm:w-auto px-7 py-3.5 rounded-full border border-black/15 hover:border-black text-sm font-sans font-medium text-black/80 hover:text-black transition-all active:scale-[0.98] flex items-center justify-center gap-2"
          >
            <span>{isSpanish ? 'Ver Servicios SEO' : 'View SEO Services'}</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Recommended Direct Paths */}
        <div className="w-full max-w-2xl pt-8 border-t border-black/[0.08] text-left">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.08em] text-black/50 mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>{isSpanish ? 'Rutas directas recomendadas:' : 'Recommended routes:'}</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <a
              href="/diseno-web-cali"
              className="p-4 rounded-xl bg-white border border-black/[0.08] hover:border-black/30 transition-all group"
            >
              <p className="text-xs font-display font-semibold text-[#111111] group-hover:text-black flex items-center justify-between">
                <span>{isSpanish ? 'Diseño Web Cali' : 'Web Design Cali'}</span>
                <span className="text-black/40 group-hover:translate-x-0.5 transition-transform">→</span>
              </p>
              <p className="text-[11px] text-black/55 font-sans mt-1 leading-snug">
                {highlightBrandKeywords(isSpanish ? 'Sitios web para vender y convertir visitas.' : 'High-converting business websites.')}
              </p>
            </a>

            <a
              href="/posicionar-web-en-google"
              className="p-4 rounded-xl bg-white border border-black/[0.08] hover:border-black/30 transition-all group"
            >
              <p className="text-xs font-display font-semibold text-[#111111] group-hover:text-black flex items-center justify-between">
                <span>{highlightBrandKeywords(isSpanish ? 'Posicionar en Google' : 'Rank on Google')}</span>
                <span className="text-black/40 group-hover:translate-x-0.5 transition-transform">→</span>
              </p>
              <p className="text-[11px] text-black/55 font-sans mt-1 leading-snug">
                {isSpanish ? 'Estrategia SEO técnico y AEO para IA.' : 'Technical SEO and AI visibility.'}
              </p>
            </a>

            <a
              href={siteConfig.profile.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick({ location: 'not_found', label: '404 Page WhatsApp Card' })}
              className="p-4 rounded-xl bg-white border border-black/[0.08] hover:border-black/30 transition-all group"
            >
              <p className="text-xs font-display font-semibold text-[#111111] group-hover:text-black flex items-center justify-between">
                <span>WhatsApp Directo</span>
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
              </p>
              <p className="text-[11px] text-black/55 font-sans mt-1 leading-snug">
                {isSpanish ? 'Respuesta el mismo día con Juan Pablo.' : 'Same-day direct response.'}
              </p>
            </a>
          </div>
        </div>
      </main>

      {/* Subtle Footer */}
      <footer className="w-full border-t border-black/[0.06] py-6 text-center text-xs font-sans text-black/50">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} JP Studios — Cali, Colombia</p>
          <p>{siteConfig.profile.contact.whatsappDisplay}</p>
        </div>
      </footer>
    </div>
  );
};

export default NotFoundPage;
