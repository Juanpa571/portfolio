import React, { useState } from 'react';

export const HabitatDemo: React.FC = () => {
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);

  const handleActionClick = (actionName: string) => {
    setFeedbackMessage(`Simulación interactiva: "${actionName}" activado. En producción conecta con la central telefónica o canal directo de urgencias.`);
    setTimeout(() => {
      setFeedbackMessage(null);
    }, 3800);
  };

  return (
    <div className="w-full bg-[#fafaf8] text-[#1a1a1e] font-sans antialiased text-sm select-none relative">
      {/* Interactive Micro-Toast Feedback Banner */}
      {feedbackMessage && (
        <div className="fixed sm:absolute top-16 left-1/2 -translate-x-1/2 z-50 px-5 py-2.5 rounded-full bg-[#0e382b] text-white text-xs font-sans tracking-wide shadow-xl border border-white/20 transition-all duration-300 flex items-center gap-2.5 animate-in fade-in slide-in-from-top-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>{feedbackMessage}</span>
        </div>
      )}

      {/* 1. Modern Translucent Sticky Navigation Bar */}
      <header className="px-6 sm:px-10 py-3.5 bg-white/90 backdrop-blur-xl border-b border-black/[0.08] flex items-center justify-between sticky top-0 z-30">
        {/* Brand & Monogram */}
        <div className="flex items-center gap-3">
          <img
            src="/projects/habitat-emblem.png"
            alt="Isotipo y emblema clínico de Hábitat Hospital Veterinario — Caso de estudio JP Studios"
            className="w-7 h-7 object-contain"
          />
          <div className="flex items-baseline gap-2">
            <span className="font-display font-medium text-[#0e382b] text-base tracking-[0.08em] uppercase">
              HÁBITAT
            </span>
            <span className="hidden md:inline text-xs text-black/40">Hospital Clínico</span>
          </div>
        </div>

        {/* Center & Right Navigation */}
        <div className="flex items-center gap-6 sm:gap-8">
          <nav className="hidden lg:flex items-center gap-6 text-[11px] font-sans tracking-wider uppercase text-black/60">
            <button
              type="button"
              onClick={() => handleActionClick('Sistemas Clínicos')}
              className="hover:text-black transition-colors cursor-pointer"
            >
              Sistemas Clínicos
            </button>
            <button
              type="button"
              onClick={() => handleActionClick('Cuidados Críticos')}
              className="hover:text-black transition-colors cursor-pointer"
            >
              Cuidados Críticos
            </button>
            <button
              type="button"
              onClick={() => handleActionClick('Diagnóstico In-Situ')}
              className="hover:text-black transition-colors cursor-pointer"
            >
              Diagnóstico In-Situ
            </button>
          </nav>

          {/* Standout Primary Action Button */}
          <button
            type="button"
            onClick={() => handleActionClick('Llamada Urgencias 24h')}
            className="px-4 sm:px-5 py-2 rounded-md bg-[#0e382b] text-white text-[11px] sm:text-xs font-sans font-medium tracking-wider uppercase hover:bg-[#08241b] active:scale-[0.98] transition-all shadow-xs flex items-center gap-2 cursor-pointer"
          >
            <span>Urgencias 24h</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse hidden sm:inline-block" />
          </button>

          {/* Region Telemetry */}
          <span className="hidden xl:inline text-[11px] font-sans text-black/40">
            CO ES ▾
          </span>
        </div>
      </header>

      {/* 2. Full-Bleed Daytime Architectural Hero */}
      <div className="relative w-full min-h-[520px] sm:min-h-[580px] lg:min-h-[640px] flex items-end overflow-hidden">
        {/* Daytime Architectural Facade Photograph */}
        <img
          src="/projects/habitat-hero-day.png"
          alt="Fachada arquitectónica de la clínica veterinaria Hábitat 24 Horas en Cali — Caso de posicionamiento local en Google Maps"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Luminous Gradient Overlays for Pure Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#fafaf8] via-[#fafaf8]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#fafaf8]/95 via-[#fafaf8]/60 to-transparent" />

        {/* Hero Foreground Content */}
        <div className="relative z-10 p-6 sm:p-12 lg:p-16 max-w-4xl space-y-6">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-light text-[#0e382b] leading-[1.1] tracking-[-0.01em] max-w-2xl">
            Atención médica y quirúrgica de urgencias 24 horas
          </h1>

          <p className="text-sm sm:text-base text-black/75 max-w-xl font-sans font-normal leading-relaxed">
            Cirujanos y anestesistas en guardia permanente, quirófanos estériles y laboratorio in-situ para respuesta crítica inmediata.
          </p>

          {/* Typographic Action Links */}
          <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10">
            {/* Primary Action Link */}
            <button
              type="button"
              onClick={() => handleActionClick('Llamada directa de urgencia 24 horas')}
              className="group inline-flex items-center gap-3 text-base sm:text-lg font-normal text-[#0e382b] hover:text-black transition-colors cursor-pointer text-left"
            >
              <span className="border-b border-[#0e382b]/40 pb-0.5 group-hover:border-black transition-colors">
                Llamada directa de urgencia 24 horas
              </span>
              <span className="group-hover:translate-x-1.5 transition-transform duration-300 font-sans text-xl">
                →
              </span>
            </button>

            {/* Secondary Action Link */}
            <button
              type="button"
              onClick={() => handleActionClick('Consultar por WhatsApp')}
              className="group inline-flex items-center gap-3 text-sm sm:text-base font-normal text-black/60 hover:text-black transition-colors cursor-pointer text-left"
            >
              <span className="border-b border-black/20 pb-0.5 group-hover:border-black transition-colors">
                Consultar por WhatsApp
              </span>
              <span className="group-hover:translate-x-1.5 transition-transform duration-300 font-sans text-lg">
                →
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* 3. Subtle Architectural Status & Location Anchor Strip */}
      <div className="border-t border-black/[0.08] bg-white/80 backdrop-blur-md px-6 sm:px-12 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-black/60">
        <div className="flex items-center gap-2.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0e382b]" />
          <span>Avenida Cañasgordas 122-40, Cali, Colombia</span>
        </div>
        <div className="flex items-center gap-6 text-black/50">
          <span>Guardia presencial permanente</span>
          <span className="font-medium text-[#0e382b]">Admisión directa sin cita previa</span>
        </div>
      </div>
    </div>
  );
};
