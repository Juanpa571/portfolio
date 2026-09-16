import React, { useState } from 'react';
import {
  PalmIcon,
  SnorkelIcon,
  FishIcon,
  SunIcon,
  LeavesIcon,
  ShellIcon,
} from './sai/SaiDrawings';

export const SaiSevenDemo: React.FC = () => {
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);

  const handleActionClick = (actionName: string) => {
    setFeedbackMessage(`Simulación interactiva: "${actionName}" activado. En producción conecta con el canal de reserva directa de SAI.`);
    setTimeout(() => {
      setFeedbackMessage(null);
    }, 3800);
  };

  return (
    <div className="w-full bg-[#FAF9F6] text-[#0B2532] font-sans antialiased text-sm select-none relative">
      {/* Interactive Micro-Toast Feedback Banner */}
      {feedbackMessage && (
        <div className="fixed sm:absolute top-16 left-1/2 -translate-x-1/2 z-50 px-5 py-2.5 rounded-full bg-[#0B2532] text-white text-xs font-sans tracking-wide shadow-2xl border border-white/20 transition-all duration-300 flex items-center gap-2.5 animate-in fade-in slide-in-from-top-2">
          <span className="w-2 h-2 rounded-full bg-[#38C7D8] animate-pulse" />
          <span>{feedbackMessage}</span>
        </div>
      )}

      {/* 1. Translucent Oceanic Sticky Header (Directly from Boceto) */}
      <header className="px-6 sm:px-10 py-3.5 bg-[#0B2532]/85 backdrop-blur-md border-b border-white/10 flex items-center justify-between sticky top-0 z-30">
        {/* Brand Logo with Branching Coral/Tree Emblem */}
        <div
          onClick={() => handleActionClick('Inicio')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <img
            src="/projects/sai-logo-white.png"
            alt="SAI San Andrés Island"
            className="h-8 sm:h-9 w-auto object-contain group-hover:opacity-90 transition-opacity"
          />
        </div>

        {/* Center Navigation Links (Exact from Boceto) */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-sans text-white/85 tracking-normal">
          <button
            type="button"
            onClick={() => handleActionClick('Inicio')}
            className="hover:text-white transition-colors cursor-pointer font-medium text-white"
          >
            Inicio
          </button>
          <button
            type="button"
            onClick={() => handleActionClick('Habitaciones')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Habitaciones
          </button>
          <button
            type="button"
            onClick={() => handleActionClick('Experiencias')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Experiencias
          </button>
          <button
            type="button"
            onClick={() => handleActionClick('Gastronomía')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Gastronomía
          </button>
          <button
            type="button"
            onClick={() => handleActionClick('Sobre SAI')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Sobre SAI
          </button>
          <button
            type="button"
            onClick={() => handleActionClick('Contacto')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Contacto
          </button>
        </nav>

        {/* Right Action & Language Selector (Exact from Boceto) */}
        <div className="flex items-center gap-5">
          <span className="hidden sm:inline text-xs font-sans text-white/70 tracking-wider">
            ES | EN
          </span>

          <button
            type="button"
            onClick={() => handleActionClick('Reservar')}
            className="px-5 py-2 rounded-full bg-white text-[#0B2532] text-xs font-sans font-medium hover:bg-white/90 active:scale-[0.98] transition-all shadow-sm cursor-pointer"
          >
            Reservar
          </button>
        </div>
      </header>

      {/* 2. Hero Section (Extracted from Boceto) */}
      <div className="relative w-full min-h-[500px] sm:min-h-[560px] lg:min-h-[620px] flex flex-col justify-between overflow-hidden">
        {/* Caribbean Turquoise Ocean Background Photograph */}
        <img
          src="/projects/arrecife-hero.jpg"
          alt="Paraíso real en San Andrés Island"
          className="absolute inset-0 w-full h-full object-cover object-center scale-[1.02]"
        />

        {/* Cinematic Ocean Vignette Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B2532]/90 via-[#0B2532]/30 to-[#0B2532]/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B2532]/85 via-[#0B2532]/35 to-transparent" />

        {/* Hero Foreground Content (Exact Copy and Typography from Boceto) */}
        <div className="relative z-10 p-6 sm:p-12 lg:p-16 max-w-3xl space-y-4 my-auto">
          {/* Subtitle in Delicate Italic Serif */}
          <span className="font-serif italic text-white/95 text-base sm:text-lg tracking-wide block">
            Más que un destino
          </span>

          {/* Monumental Classical Serif Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-white leading-[1.04] tracking-tight">
            Un paraíso
            <span className="block font-serif">real</span>
          </h1>

          {/* Category Spaced Text */}
          <p className="text-[11px] sm:text-xs font-sans tracking-[0.22em] uppercase text-white/85 pt-1">
            HOSPEDAJE • NATURALEZA • CULTURA • CARIBE
          </p>

          {/* Pill Button with Circle Arrow (Exact from Boceto) */}
          <div className="pt-3">
            <button
              type="button"
              onClick={() => handleActionClick('Descubre SAI')}
              className="group inline-flex items-center gap-3 px-6 sm:px-7 py-3 rounded-full bg-white text-[#0B2532] text-xs font-sans font-medium tracking-wide hover:bg-white/95 active:scale-[0.98] transition-all shadow-xl cursor-pointer"
            >
              <span>Descubre SAI</span>
              <span className="w-5 h-5 rounded-full bg-[#0B2532] text-white flex items-center justify-center text-[10px] group-hover:translate-x-0.5 transition-transform">
                →
              </span>
            </button>
          </div>
        </div>

        {/* Bottom Right Hand-Script Signature (Exact from Boceto) */}
        <div className="relative z-10 self-end p-6 sm:p-10 text-right select-none">
          <span className="font-serif italic text-3xl sm:text-4xl text-white/90 block leading-tight font-light drop-shadow-sm">
            San Andrés
          </span>
          <span className="text-[9px] font-sans tracking-[0.28em] text-white/70 uppercase">
            Colombia —
          </span>
        </div>
      </div>

      {/* 3. The 6 Micro-Drawings Ribbon (Dibujitos Line-Art Strip - Exact from Boceto) */}
      <div className="bg-[#FAF9F6] border-y border-black/[0.08] py-6 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center text-center">
          {/* 1. Playas de ensueño */}
          <div
            onClick={() => handleActionClick('Playas de ensueño')}
            className="group flex flex-col items-center gap-2 cursor-pointer hover:-translate-y-0.5 transition-transform"
          >
            <PalmIcon className="w-7 h-7 text-[#0B2532] group-hover:text-[#17A2B8] transition-colors" />
            <span className="text-xs font-sans text-black/75 font-normal tracking-tight">
              Playas de ensueño
            </span>
          </div>

          {/* 2. Arrecifes de coral */}
          <div
            onClick={() => handleActionClick('Arrecifes de coral')}
            className="group flex flex-col items-center gap-2 cursor-pointer hover:-translate-y-0.5 transition-transform"
          >
            <SnorkelIcon className="w-7 h-7 text-[#0B2532] group-hover:text-[#17A2B8] transition-colors" />
            <span className="text-xs font-sans text-black/75 font-normal tracking-tight">
              Arrecifes de coral
            </span>
          </div>

          {/* 3. Vida marina única */}
          <div
            onClick={() => handleActionClick('Vida marina única')}
            className="group flex flex-col items-center gap-2 cursor-pointer hover:-translate-y-0.5 transition-transform"
          >
            <FishIcon className="w-7 h-7 text-[#0B2532] group-hover:text-[#17A2B8] transition-colors" />
            <span className="text-xs font-sans text-black/75 font-normal tracking-tight">
              Vida marina única
            </span>
          </div>

          {/* 4. Clima todo el año */}
          <div
            onClick={() => handleActionClick('Clima todo el año')}
            className="group flex flex-col items-center gap-2 cursor-pointer hover:-translate-y-0.5 transition-transform"
          >
            <SunIcon className="w-7 h-7 text-[#0B2532] group-hover:text-[#17A2B8] transition-colors" />
            <span className="text-xs font-sans text-black/75 font-normal tracking-tight">
              Clima todo el año
            </span>
          </div>

          {/* 5. Cultura isleña */}
          <div
            onClick={() => handleActionClick('Cultura isleña')}
            className="group flex flex-col items-center gap-2 cursor-pointer hover:-translate-y-0.5 transition-transform"
          >
            <LeavesIcon className="w-7 h-7 text-[#0B2532] group-hover:text-[#17A2B8] transition-colors" />
            <span className="text-xs font-sans text-black/75 font-normal tracking-tight">
              Cultura isleña
            </span>
          </div>

          {/* 6. Relájate y desconecta */}
          <div
            onClick={() => handleActionClick('Relájate y desconecta')}
            className="group flex flex-col items-center gap-2 cursor-pointer hover:-translate-y-0.5 transition-transform"
          >
            <ShellIcon className="w-7 h-7 text-[#0B2532] group-hover:text-[#17A2B8] transition-colors" />
            <span className="text-xs font-sans text-black/75 font-normal tracking-tight">
              Relájate y desconecta
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
