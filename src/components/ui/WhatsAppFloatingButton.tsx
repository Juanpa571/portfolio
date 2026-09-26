import React, { useState, useEffect } from 'react';
import { siteConfig } from '../../config/site';
import { useLanguage } from '../../context/LanguageContext';
import { trackWhatsAppClick } from '../../utils/analytics';

export const WhatsAppFloatingButton: React.FC = () => {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Reveal button after user scrolls past top fold threshold (80px)
      if (window.scrollY > 80) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isSpanish = language === 'es';
  const whatsappUrl = isSpanish
    ? siteConfig.profile.contact.whatsapp
    : 'https://wa.me/573177371301?text=Hello%20Juan%20Pablo,%20I%20would%20like%20to%20request%20a%20quote%20for%20a%20project';

  const labelText = isSpanish ? 'Cotizar por WhatsApp' : 'Quote on WhatsApp';
  const statusText = isSpanish ? 'En línea' : 'Online';

  return (
    <aside
      aria-label="Contacto directo por WhatsApp"
      className={`fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50 transition-all duration-400 ease-out select-none ${
        isVisible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() =>
          trackWhatsAppClick({
            location: 'floating_cta',
            label: 'Floating WhatsApp CTA Button',
            subject: 'Cotizacion Directa Flotante',
          })
        }
        className="group flex items-center gap-3 p-3 sm:px-4 sm:py-3 rounded-2xl bg-[#141517] hover:bg-black text-white border border-white/15 hover:border-white/30 shadow-[0_12px_36px_rgba(0,0,0,0.3)] hover:shadow-[0_16px_44px_rgba(0,0,0,0.42)] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]"
        aria-label={`${labelText} — ${statusText}`}
        data-interactive
      >
        {/* WhatsApp Icon with Status Ping (clean, no tinted square background) */}
        <div className="relative flex items-center justify-center text-[#25D366] shrink-0">
          <svg
            className="w-6 h-6 sm:w-5 sm:h-5 fill-current"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>

          {/* Micro status ping */}
          <span
            className="absolute -top-1 -right-1 flex h-2 w-2"
            aria-hidden="true"
          >
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#25D366]" />
          </span>
        </div>

        {/* Text Container: Hidden on ultra-compact mobile, visible on sm+ */}
        <div className="hidden sm:flex flex-col items-start text-left leading-tight pr-1">
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-medium text-white tracking-normal group-hover:text-white transition-colors">
              {labelText}
            </span>
            <span
              className="text-[11px] text-white/70 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
              aria-hidden="true"
            >
              ↗
            </span>
          </div>
          <span className="text-[10px] text-white/50 font-sans tracking-wide">
            {isSpanish ? 'Respuesta en < 2h' : 'Quick response'}
          </span>
        </div>
      </a>
    </aside>
  );
};

export default WhatsAppFloatingButton;
