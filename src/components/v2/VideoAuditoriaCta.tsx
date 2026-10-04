import React from 'react';
import { WhatsAppIcon } from '../ui/WhatsAppIcon';

export const VideoAuditoriaCta: React.FC = () => {
  const whatsappUrl = `https://wa.me/573177371301?text=${encodeURIComponent(
    'Hola Juan Pablo, leí tu guía de precios. Mi empresa tiene su sitio web actual en [Escribe aquí tu enlace o dominio] y me gustaría recibir la auditoría rápida en video de 3 minutos.'
  )}`;

  return (
    <section className="relative z-10 py-16 sm:py-20 border-t border-white/[0.08] max-w-[680px] mx-auto px-4 sm:px-6 font-sans">
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-white/[0.04] to-white/[0.015] border border-white/15 shadow-[0_4px_40px_rgba(0,0,0,0.6)] space-y-6 text-left">
        {/* Titular */}
        <div className="space-y-3 border-b border-white/[0.08] pb-5">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight font-['Plus_Jakarta_Sans',sans-serif]">
            ¿Tu empresa ya tiene una página web y sientes que no genera ventas?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            Si tu sitio actual tarda en abrir en celulares, no figura en Google o las visitas rebotan sin escribirte al WhatsApp, déjame la dirección web de tu negocio.
          </p>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
            Grabo mi pantalla en un video privado de 3 minutos analizándola en vivo: te muestro exactamente qué le está frenando la velocidad en Core Web Vitals, qué errores de indexación tiene y si realmente necesitas un rediseño completo o solo optimizar aspectos clave de conversión.
          </p>
        </div>

        {/* Bullets de Valor del Video en Geist Sans puro */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs text-slate-300 font-sans font-normal">
          <div className="flex items-start gap-2">
            <span className="text-emerald-400 font-bold shrink-0">✓</span>
            <span>Test real de velocidad 4G en tu web</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-emerald-400 font-bold shrink-0">✓</span>
            <span>Revisión de indexación en Google Maps</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-emerald-400 font-bold shrink-0">✓</span>
            <span>Rutas de contacto y fricción móvil</span>
          </div>
        </div>

        {/* Acciones principales */}
        <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3.5 px-6 rounded-xl bg-white hover:bg-slate-200 text-slate-950 font-bold text-xs font-sans tracking-wide transition-all duration-150 shadow-lg flex items-center justify-center gap-2.5 cursor-pointer active:scale-[0.98]"
          >
            <WhatsAppIcon className="w-4 h-4 fill-slate-950 shrink-0" />
            <span>Pedir video-auditoría por WhatsApp (+57 317 737 1301)</span>
          </a>

          <a
            href="/auditar-posicionamiento"
            className="py-3.5 px-5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white font-medium text-xs font-sans border border-white/10 hover:border-white/20 transition-all duration-150 flex items-center justify-center gap-2 active:scale-[0.98]"
          >
            <span>Herramienta Automática</span>
            <span>→</span>
          </a>
        </div>

        <p className="text-xs text-slate-400 font-sans text-center sm:text-left max-w-lg">
          * Recibes el enlace privado del video en tu WhatsApp en menos de 24 horas hábiles.
        </p>
      </div>
    </section>
  );
};
