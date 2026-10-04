import React from 'react';
import { WhatsAppIcon } from '../ui/WhatsAppIcon';

export const RevisionCotizacionCard: React.FC = () => {
  const whatsappUrl = `https://wa.me/573177371301?text=${encodeURIComponent(
    'Hola Juan Pablo, leí tu guía de precios. Tengo una cotización de otra agencia sobre la mesa y me gustaría tu segunda opinión técnica antes de pagar un anticipo.'
  )}`;

  return (
    <div className="my-10 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-amber-500/[0.05] via-white/[0.02] to-transparent border border-amber-500/20 shadow-[0_4px_30px_rgba(0,0,0,0.4)] font-sans">
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-white/[0.08] pb-4">
          <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-tight font-['Plus_Jakarta_Sans',sans-serif]">
            ¿Ya te pasaron una cotización de otra agencia o diseñador?
          </h3>
          <span className="text-xs font-sans text-slate-400 shrink-0 font-medium">
            100% Confidencial
          </span>
        </div>

        <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
          No arriesgues tu capital pagando por una plantilla reciclada que tarde 5 segundos en abrir o que te amarre a mensualidades forzadas de hosting. Reenvíame el PDF, el presupuesto o el mensaje que te enviaron por WhatsApp.
        </p>

        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
          Te daré una revisión técnica sincera: te diré si el precio es justo para lo que prometen entregar, si la infraestructura que te ofrecen es moderna y qué cláusulas específicas debes exigirles antes de transferir el primer anticipo.
        </p>

        {/* 3 Puntos de Verificación en Geist Sans puro */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-white/[0.06] text-xs text-slate-300 font-sans font-normal">
          <div className="flex items-start gap-2">
            <span className="text-amber-400 font-bold shrink-0">✓</span>
            <span>Verifico si el hosting debería costar $0</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-amber-400 font-bold shrink-0">✓</span>
            <span>Detecto si usan plantillas viejas de WordPress</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-amber-400 font-bold shrink-0">✓</span>
            <span>Reviso la propiedad del dominio y del código</span>
          </div>
        </div>

        {/* CTA Directo a WhatsApp */}
        <div className="pt-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs font-sans tracking-wide transition-all duration-150 shadow-md active:scale-[0.98] cursor-pointer"
          >
            <WhatsAppIcon className="w-4 h-4 fill-slate-950 shrink-0" />
            <span>Revisar mi cotización con Juan Pablo (+57 317 737 1301)</span>
            <span>↗</span>
          </a>
          <span className="block sm:inline-block sm:ml-4 mt-2 sm:mt-0 text-xs text-slate-400 font-sans">
            * Puedes ocultar o tachar el nombre de la otra empresa si lo prefieres.
          </span>
        </div>
      </div>
    </div>
  );
};
