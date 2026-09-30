import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WhatsAppIcon } from '../ui/WhatsAppIcon';

/**
 * ProcessV2
 * 
 * Sección 05: Metodología y Plazos de Entrega (14 a 21 días).
 * Bloque 5 de conversión según la Antigravity SEO Bible.
 * 
 * - Interactive Unlockable Stepper:
 *   Las 3 tarjetas permanecen visibles simultáneamente para contexto completo,
 *   pero los pasos futuros aparecen bloqueados (borrosos y oscuros).
 *   El usuario avanza fluidamente con controles de 'Continuar' / 'Retroceder' o haciendo clic en los pasos.
 * - Paleta semántica validada:
 *   Paso 1: Sky Blue (#38bdf8) - Planificación
 *   Paso 2: Cyber Yellow (#FFCC00) - Forja y Código
 *   Paso 3: Emerald (#10b981) - QA, Google y Producción
 */
export const ProcessV2: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [easterEggActive, setEasterEggActive] = useState<boolean>(false);
  const [shakeCard3, setShakeCard3] = useState<boolean>(false);

  const steps = [
    {
      id: 1,
      phase: 'DÍAS 1 A 3',
      stageName: 'Planificación & Estructura',
      title: 'Diagnóstico y estructura',
      summary: 'Analizo tu modelo de negocio, lo que vendes y cómo buscan tus servicios en Google.',
      description: 'Defino la estructura de textos comerciales, las rutas de contacto para que los clientes potenciales te escriban o llamen y entrego una cotización formal con precio fijo, sin sorpresas ni cobros imprevistos.',
      deliverable: 'Estructura de la web aprobada y propuesta técnica clara.',
      accentHex: '#38bdf8',
      accentColor: 'text-sky-400',
      activeBorder: 'border-sky-500/40',
      glowShadow: 'shadow-[0_0_30px_rgba(56,189,248,0.12)]',
      badgeBorder: 'border-sky-500/25 bg-sky-500/10 text-sky-300',
      deliverableIconColor: 'text-sky-400',
      // Indicador Tracker
      indicatorActiveBorder: 'border-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.4)]',
      indicatorPhaseColor: 'text-sky-400',
    },
    {
      id: 2,
      phase: 'DÍAS 4 A 12',
      stageName: 'Construcción en Código',
      title: 'Desarrollo a medida en React',
      summary: 'Programo tu página desde cero con código limpio en React 19, TypeScript y Tailwind CSS.',
      description: 'Sin plantillas lentas ni plugins pesados de WordPress que ralentizan la carga y se rompen con las actualizaciones. Construyo una interfaz moderna, fiel a la identidad de tu marca y optimizada para celulares y computadores.',
      deliverable: 'Enlace privado para que pruebes la navegación e interacción en vivo.',
      accentHex: '#FFCC00',
      accentColor: 'text-[#FFCC00]',
      activeBorder: 'border-[#FFCC00]/40',
      glowShadow: 'shadow-[0_0_30px_rgba(255,204,0,0.12)]',
      badgeBorder: 'border-[#FFCC00]/25 bg-[#FFCC00]/10 text-[#FFCC00]',
      deliverableIconColor: 'text-[#FFCC00]',
      // Indicador Tracker (Amarillo #FFCC00)
      indicatorActiveBorder: 'border-[#FFCC00] shadow-[0_0_15px_rgba(255,204,0,0.4)]',
      indicatorPhaseColor: 'text-[#FFCC00]',
    },
    {
      id: 3,
      phase: 'DÍAS 13 A 21',
      stageName: 'Auditoría & Despliegue',
      title: 'Auditoría QA, SEO/GEO y despliegue',
      summary: 'Someto la web a un protocolo exhaustivo de calidad antes de abrirla al público.',
      description: 'Audito que cargue en menos de 2.5s en redes 4G con PageSpeed. Ejecuto pruebas de control de calidad (QA) en enlaces y navegación móvil, configuro Schema.org y aplico optimización GEO para que Google Maps y buscadores de IA citen y recomienden tu negocio.',
      deliverable: 'Tu web auditada, desplegada en producción y lista para facturar.',
      accentHex: '#10b981',
      accentColor: 'text-emerald-400',
      activeBorder: 'border-emerald-500/40',
      glowShadow: 'shadow-[0_0_30px_rgba(16,185,129,0.15)]',
      badgeBorder: 'border-emerald-500/25 bg-emerald-500/10 text-emerald-300',
      deliverableIconColor: 'text-emerald-400',
      // Indicador Tracker (Verde Esmeralda)
      indicatorActiveBorder: 'border-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.4)]',
      indicatorPhaseColor: 'text-emerald-400',
    },
  ];

  const isAllCompleted = activeStep > 3;

  const handleStepClick = (targetId: number) => {
    // EASTER EGG: Si intenta saltar al paso 3 desde el paso 1 sin haber pasado por el paso 2
    if (targetId === 3 && activeStep === 1) {
      setEasterEggActive(true);
      setShakeCard3(true);
      setTimeout(() => setShakeCard3(false), 600);
      return;
    }
    setActiveStep(targetId);
  };

  const handleNext = () => {
    if (activeStep <= 3) {
      setActiveStep((prev) => prev + 1);
    }
  };

  const handleReset = () => {
    setActiveStep(1);
  };

  return (
    <section 
      id="proceso" 
      data-ambient-theme="cyan"
      className="relative py-28 sm:py-36 lg:py-44 xl:py-48 bg-transparent text-slate-100"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================= */}
        {/* ENCABEZADO EDITORIAL DEL BLOQUE: METODOLOGÍA Y PLAZOS     */}
        {/* ========================================================= */}
        <div id="proceso-header" className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-mono tracking-wider text-cyan-400 uppercase mb-4">
            Metodología y Plazos
          </div>
          
          <h2 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-[-0.03em] text-white leading-[1.08]">
            Cómo trabajo:{' '}
            <span className="text-cyan-400">
              de la idea a tu web lista en 3 pasos.
            </span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Sin intermediarios, sin plantillas genéricas y sin demoras de meses. Trabajas directamente conmigo en cada etapa del proyecto, con tiempos claros y entregas garantizadas en 14 a 21 días.
          </p>
        </div>

        {/* ========================================================= */}
        {/* BARRA DE PROGRESO INTERACTIVA (STEPPER TRACKER)          */}
        {/* ========================================================= */}
        <div className="mb-10 p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-sm">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Indicadores con conectores animados */}
            <div className="flex items-center w-full sm:w-auto flex-1 max-w-xl">
              {steps.map((item, idx) => {
                const isCompleted = activeStep > item.id;
                const isCurrent = activeStep === item.id;

                return (
                  <React.Fragment key={item.id}>
                    {/* Botón Indicador */}
                    <button
                      type="button"
                      onClick={() => handleStepClick(item.id)}
                      className="group/ind flex items-center gap-2.5 focus:outline-none cursor-pointer"
                      aria-label={`Ver paso ${item.id}: ${item.title}`}
                    >
                      <div
                        className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-mono font-bold text-xs sm:text-sm transition-all duration-300 border ${
                          isCompleted
                            ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40'
                            : isCurrent
                            ? `bg-white/10 text-white ${item.indicatorActiveBorder}`
                            : 'bg-white/[0.03] text-slate-500 border-white/10 hover:border-white/20'
                        }`}
                      >
                        {isCompleted ? (
                          <svg className="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          item.id
                        )}
                      </div>
                      
                      <div className="hidden md:block text-left">
                        <div className={`text-[10px] font-mono uppercase tracking-wider ${
                          isCurrent ? `${item.indicatorPhaseColor} font-bold` : isCompleted ? 'text-emerald-400 font-semibold' : 'text-slate-500'
                        }`}>
                          {item.phase}
                        </div>
                        <div className="text-xs font-semibold text-white/90 truncate max-w-[130px]">
                          {item.title.split(' ')[0]} {item.title.split(' ')[1] || ''}
                        </div>
                      </div>
                    </button>

                    {/* Conector lineal con gradiente cromático coordinado */}
                    {idx < steps.length - 1 && (
                      <div className="relative mx-3 sm:mx-4 h-[2px] flex-1 rounded-full bg-white/10 overflow-hidden">
                        <motion.div
                          className={`absolute inset-0 origin-left ${
                            idx === 0 
                              ? 'bg-gradient-to-r from-sky-400 to-[#FFCC00]' 
                              : 'bg-gradient-to-r from-[#FFCC00] to-emerald-400'
                          }`}
                          initial={false}
                          animate={{ scaleX: activeStep > item.id ? 1 : 0 }}
                          transition={{ duration: 0.45, ease: [0.33, 1, 0.68, 1] }}
                        />
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>

            {/* Controles de navegación del stepper */}
            <div className="flex items-center shrink-0 w-full sm:w-auto justify-end border-t sm:border-t-0 pt-3 sm:pt-0 border-white/[0.06]">
              {isAllCompleted ? (
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-5 py-2 rounded-xl text-xs font-mono font-bold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <span>Reiniciar recorrido</span>
                  <span>↺</span>
                </button>
              ) : activeStep === 3 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-5 py-2 rounded-xl text-xs font-mono font-bold bg-emerald-400 hover:bg-emerald-300 text-slate-950 transition-all shadow-[0_0_18px_rgba(16,185,129,0.35)] hover:shadow-[0_0_24px_rgba(16,185,129,0.5)] cursor-pointer flex items-center gap-1.5"
                >
                  <span>Completar proceso</span>
                  <span>✓</span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-5 py-2 rounded-xl text-xs font-mono font-bold bg-cyan-400 hover:bg-cyan-300 text-slate-950 transition-all shadow-[0_0_18px_rgba(6,182,212,0.3)] hover:shadow-[0_0_24px_rgba(6,182,212,0.5)] cursor-pointer flex items-center gap-1.5"
                >
                  <span>Continuar al siguiente paso</span>
                  <span>→</span>
                </button>
              )}
            </div>

          </div>
        </div>

        {/* ========================================================= */}
        {/* GRID DE LAS 3 TARJETAS CON DESBLOQUEO PROGRESIVO          */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {steps.map((item) => {
            const isUnlocked = activeStep >= item.id;
            const isCurrent = activeStep === item.id;
            const isCompleted = activeStep > item.id;

            return (
              <motion.article 
                key={item.id}
                layout
                animate={item.id === 3 && shakeCard3 ? {
                  x: [0, -10, 10, -8, 8, -4, 4, 0],
                  borderColor: ['rgba(239,68,68,0.8)', 'rgba(239,68,68,0.4)', 'rgba(255,255,255,0.05)'],
                } : {}}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className={`relative rounded-3xl transition-all duration-500 p-7 sm:p-9 flex flex-col justify-between overflow-hidden backdrop-blur-sm ${
                  isCurrent
                    ? `bg-white/[0.035] ${item.activeBorder} ${item.glowShadow} -translate-y-1`
                    : isCompleted
                    ? 'bg-white/[0.02] border border-emerald-500/30 shadow-[0_0_25px_rgba(16,185,129,0.08)]'
                    : 'bg-[#060709]/80 border border-white/[0.05]'
                }`}
              >
                {/* Contenido principal de la tarjeta */}
                <div 
                  aria-hidden={!isUnlocked}
                  className={`transition-all duration-500 ${
                  isUnlocked 
                    ? 'opacity-100 filter-none' 
                    : 'opacity-25 filter blur-[5px] select-none pointer-events-none'
                }`}>
                  {/* Cabecera del paso: Franja de tiempo como protagonista principal */}
                  <div className="pb-6 border-b border-white/[0.06] mb-6 flex items-center justify-between">
                    <div className={`text-2xl sm:text-3xl font-black font-mono tracking-tight ${item.accentColor}`}>
                      {item.phase}
                    </div>

                    {/* Estado de la tarjeta */}
                    {isCompleted ? (
                      <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full flex items-center gap-1 font-semibold">
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Completado</span>
                      </span>
                    ) : isCurrent ? (
                      <span className="text-[11px] font-mono text-cyan-300 bg-cyan-500/10 border border-cyan-500/30 px-2.5 py-0.5 rounded-full font-semibold animate-pulse">
                        En foco
                      </span>
                    ) : null}
                  </div>

                  {/* Título y resumen */}
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-snug">
                    {item.title}
                  </h3>
                  
                  <p className="mt-3 text-sm text-slate-300 font-medium leading-relaxed">
                    {item.summary}
                  </p>

                  {/* Explicación operativa */}
                  <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Entregable garantizado del paso */}
                <div 
                  aria-hidden={!isUnlocked}
                  className={`pt-6 mt-8 border-t border-white/[0.06] transition-all duration-500 ${
                  isUnlocked 
                    ? 'opacity-100 filter-none' 
                    : 'opacity-25 filter blur-[5px] select-none pointer-events-none'
                }`}>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2">
                    Entregable del paso:
                  </div>
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <span className={`${item.deliverableIconColor} font-bold shrink-0 mt-0.5`}>
                      ✓
                    </span>
                    <span className="leading-snug">
                      {item.deliverable}
                    </span>
                  </div>
                </div>

                {/* OVERLAY BLOQUEADO (Para pasos futuros) */}
                <AnimatePresence>
                  {!isUnlocked && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center bg-black/40 backdrop-blur-[4px]"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center mb-3 shadow-xl">
                        <svg className="w-5 h-5 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                        </svg>
                      </div>

                      <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-1">
                        Paso {item.id} Bloqueado
                      </div>
                      <div className="text-sm font-bold text-white mb-4">
                        {item.phase}
                      </div>

                      <button
                        type="button"
                        onClick={() => handleStepClick(item.id)}
                        className="px-4 py-2 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] text-white border border-white/15 text-xs font-mono font-medium transition-all hover:scale-105 cursor-pointer flex items-center gap-1.5"
                      >
                        <span>Desbloquear paso</span>
                        <span>↗</span>
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>

        {/* ========================================================= */}
        {/* EASTER EGG POPUP MODAL: INTENTO DE SALTO INDEBIDO         */}
        {/* ========================================================= */}
        <AnimatePresence>
          {easterEggActive && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md"
              onClick={() => setEasterEggActive(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                onClick={(e) => e.stopPropagation()}
                className="max-w-md w-full p-6 sm:p-7 rounded-2xl bg-[#0c0d12] border border-amber-500/30 shadow-[0_0_50px_rgba(245,158,11,0.2)] text-center relative overflow-hidden"
              >
                {/* Acento superior de luz */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

                <div className="w-12 h-12 mx-auto rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mb-4 text-amber-400">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>

                <div className="text-[11px] font-mono uppercase tracking-wider text-amber-400 mb-1 font-semibold">
                  Alerta de atajo detectada
                </div>

                <h4 className="text-lg sm:text-xl font-bold text-white mb-2">
                  ¡Ey, con calma! Las cosas llevan su proceso ⏳
                </h4>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  ¿Querías saltarte directo al lanzamiento y la gloria sin pasar por la forja del código? 
                  Aquí no hago magia barata: primero estructuro, luego programo a medida y finalmente audito y despliego.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setEasterEggActive(false);
                      setActiveStep(2);
                    }}
                    className="w-full sm:flex-1 py-2.5 px-4 rounded-xl text-xs font-mono font-bold bg-[#FFCC00] hover:bg-[#ffe066] text-slate-950 transition-all cursor-pointer shadow-[0_0_15px_rgba(255,204,0,0.3)]"
                  >
                    Ver Paso 2 (La Forja) →
                  </button>

                  <button
                    type="button"
                    onClick={() => setEasterEggActive(false)}
                    className="w-full sm:w-auto py-2.5 px-4 rounded-xl text-xs font-mono text-slate-400 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 transition-all cursor-pointer"
                  >
                    Entendido 🤝
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ========================================================= */}
        {/* FRANJA DE COMPROMISO COMERCIAL DIRECTO                     */}
        {/* ========================================================= */}
        <div className="mt-12 sm:mt-16 rounded-2xl bg-white/[0.02] border border-white/[0.08] p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1">
              Garantía de Tiempo y Alcance
            </div>
            <p className="text-sm sm:text-base font-semibold text-white">
              Cronograma cerrado antes de iniciar. Si no entrego en el plazo acordado, no pagas el saldo final hasta tu completa satisfacción.
            </p>
          </div>

          <a
            href="https://wa.me/573177371301?text=Hola%20Juan%20Pablo,%20quiero%20conocer%20los%20tiempos%20y%20proceso%20para%20crear%20la%20p%C3%A1gina%20web%20de%20mi%20empresa"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto shrink-0 px-6 py-3.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] backdrop-blur-md text-white border border-white/20 hover:border-cyan-400/50 text-sm font-bold transition-all duration-200 flex items-center justify-center gap-2.5 group cursor-pointer shadow-[inset_0_1px_0_0_rgba(255,255,255,0.25),0_8px_24px_-4px_rgba(0,0,0,0.5)] hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.4),0_0_28px_rgba(6,182,212,0.3)] hover:-translate-y-0.5 active:translate-y-0"
          >
            <WhatsAppIcon className="w-4 h-4 fill-cyan-400 shrink-0 transition-transform group-hover:scale-110" />
            <span>Consultar disponibilidad de fechas</span>
            <svg className="w-4 h-4 text-cyan-400 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
};

