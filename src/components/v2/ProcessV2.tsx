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
      stageName: 'Construcción Ágil & Rápida',
      title: 'Desarrollo web de alta velocidad',
      summary: 'Construyo tu página desde cero con tecnología moderna ultrarrápida, garantizando una web ligera que nunca se cuelga ni se desconfigura.',
      description: 'Sin plantillas lentas ni plugins pesados de WordPress que ralentizan la carga y se rompen con las actualizaciones. Construyo una plataforma moderna, fiel a la imagen de tu marca y optimizada para vender en celulares y computadores.',
      deliverable: 'Enlace privado para que pruebes la navegación e interacción en vivo.',
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
      id: 3,
      phase: 'DÍAS 13 A 21',
      stageName: 'Pruebas & Lanzamiento',
      title: 'Pruebas de calidad, Google y lanzamiento',
      summary: 'Someto la web a un riguroso control de calidad antes de abrirla a tus clientes.',
      description: 'Compruebo que la web abra en menos de 2 segundos en celulares. Reviso cada botón, enlace y formulario para que no haya fugas de clientes, y configuro la conexión con Google Maps y motores de búsqueda para que empieces a recibir visitas.',
      deliverable: 'Tu web auditada, desplegada en producción y lista para facturar.',
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
  ];

  const [direction, setDirection] = useState<number>(0);

  const stepVariants = {
    enter: (dir: number) => ({
      x: dir >= 0 ? 35 : -35,
      opacity: 0,
      filter: 'blur(4px)',
    }),
    center: {
      x: 0,
      opacity: 1,
      filter: 'blur(0px)',
    },
    exit: (dir: number) => ({
      x: dir >= 0 ? -35 : 35,
      opacity: 0,
      filter: 'blur(4px)',
    }),
  };

  const isAllCompleted = activeStep > 3;

  const handleStepClick = (targetId: number) => {
    setDirection(targetId > activeStep ? 1 : -1);
    setActiveStep(targetId);
  };

  const handleNext = () => {
    if (activeStep <= 3) {
      setDirection(1);
      setActiveStep((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (activeStep > 1) {
      setDirection(-1);
      setActiveStep((prev) => prev - 1);
    }
  };

  const handleReset = () => {
    setDirection(-1);
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
          <div className="text-xs font-['Geist',sans-serif] font-medium tracking-wider text-cyan-400 uppercase mb-4">
            Metodología y Plazos
          </div>
          
          <h2 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-[-0.03em] text-white leading-[1.08]">
            De la idea a tu web lista{' '}
            <span className="text-cyan-400">
              en 3 pasos.
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
                    {/* Botón Indicador con Touch Target Accesible y Reactividad Táctil */}
                    <button
                      type="button"
                      onClick={() => handleStepClick(item.id)}
                      className="group/ind flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 active:scale-[0.96] rounded-xl p-1.5 cursor-pointer min-h-[44px] min-w-[44px] transition-transform duration-150"
                      aria-label={`Ver paso ${item.id}: ${item.title}`}
                      aria-current={isCurrent ? 'step' : undefined}
                    >
                      <div
                        className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center font-sans font-bold text-xs sm:text-sm transition-all duration-300 border ${
                          isCompleted
                            ? 'bg-sky-500/20 text-sky-400 border-sky-500/40'
                            : isCurrent
                            ? `bg-white/10 text-white ${item.indicatorActiveBorder}`
                            : 'bg-white/[0.03] text-slate-400 border-white/10 hover:border-white/20'
                        }`}
                      >
                        {isCompleted ? (
                          <svg className="w-4 h-4 text-sky-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          item.id
                        )}
                      </div>
                      
                      <div className="hidden md:block text-left">
                        <div className={`text-[10px] font-sans uppercase tracking-wider ${
                          isCurrent ? `${item.indicatorPhaseColor} font-bold` : isCompleted ? 'text-sky-400 font-semibold' : 'text-slate-500'
                        }`}>
                          {item.phase}
                        </div>
                        <div className="text-xs font-sans font-semibold text-white/90 truncate max-w-[130px]">
                          {item.title.split(' ')[0]} {item.title.split(' ')[1] || ''}
                        </div>
                      </div>
                    </button>

                    {/* Conector lineal unificado en Cian Técnico */}
                    {idx < steps.length - 1 && (
                      <div className="relative mx-3 sm:mx-4 h-[2px] flex-1 rounded-full bg-white/10 overflow-hidden">
                        <motion.div
                          className="absolute inset-0 origin-left bg-sky-400"
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

            {/* Controles de navegación del stepper con Touch Target de 44px y respuesta física */}
            <div className="flex items-center shrink-0 w-full sm:w-auto justify-end border-t sm:border-t-0 pt-3 sm:pt-0 border-white/[0.06] gap-2">
              {isAllCompleted ? (
                <button
                  type="button"
                  onClick={handleReset}
                  className="min-h-[44px] px-5 py-2.5 rounded-xl text-xs font-sans font-semibold bg-white/10 hover:bg-white/20 active:scale-[0.97] text-white border border-white/20 transition-all duration-150 cursor-pointer flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  <span>Reiniciar recorrido</span>
                  <span>↺</span>
                </button>
              ) : activeStep === 3 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="min-h-[44px] px-5 py-2.5 rounded-xl text-xs font-sans font-semibold bg-emerald-400 hover:bg-emerald-300 active:scale-[0.97] text-slate-950 transition-all duration-150 shadow-[0_0_18px_rgba(16,185,129,0.35)] hover:shadow-[0_0_24px_rgba(16,185,129,0.5)] cursor-pointer flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                >
                  <span>Finalizar recorrido</span>
                  <span>✓</span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleNext}
                  className="min-h-[44px] px-5 py-2.5 rounded-xl text-xs font-sans font-semibold bg-cyan-400 hover:bg-cyan-300 active:scale-[0.97] text-slate-950 transition-all duration-150 shadow-[0_0_18px_rgba(6,182,212,0.3)] hover:shadow-[0_0_24px_rgba(6,182,212,0.5)] cursor-pointer flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  <span>Continuar al paso {activeStep + 1}</span>
                  <span>→</span>
                </button>
              )}
            </div>

          </div>
        </div>

        {/* ========================================================= */}
        {/* ANIMATED STEPPER PARA MÓVIL (SUPERDESIGN INSPIRATION)      */}
        {/* ========================================================= */}
        <div className="md:hidden mb-8">
          <div className="relative rounded-3xl overflow-hidden bg-white/[0.03] border border-white/[0.08] backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
            <div className="p-6">
              <AnimatePresence mode="wait" custom={direction}>
                {isAllCompleted ? (
                  <motion.div
                    key="completed"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="py-4 text-center space-y-4"
                  >
                    <div className="w-14 h-14 mx-auto rounded-2xl bg-sky-500/10 border border-sky-500/30 text-sky-400 flex items-center justify-center font-bold text-2xl shadow-[0_0_20px_rgba(56,189,248,0.2)]">
                      ✓
                    </div>
                    <div className="space-y-1">
                      <div className="text-[11px] font-sans uppercase tracking-widest text-sky-400 font-semibold">
                        Recorrido Completado
                      </div>
                      <p className="text-xl font-extrabold text-white tracking-tight">
                        Metodología clara de 14 a 21 días
                      </p>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed max-w-xs mx-auto">
                      Cada etapa cuenta con entregable garantizado antes de avanzar. Sin sorpresas, intermediarios ni pagos imprevistos.
                    </p>
                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={handleReset}
                        className="min-h-[44px] px-5 py-3 rounded-xl text-xs font-sans font-bold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all cursor-pointer inline-flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                      >
                        <span>Reiniciar recorrido</span>
                        <span>↺</span>
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  steps
                    .filter((step) => step.id === activeStep)
                    .map((item) => (
                      <motion.div
                        key={item.id}
                        custom={direction}
                        variants={stepVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                          x: { type: 'spring', stiffness: 300, damping: 30 },
                          opacity: { duration: 0.2 },
                        }}
                        className="w-full flex flex-col justify-between"
                      >
                        {/* Cabecera del paso */}
                        <div className="pb-5 border-b border-white/[0.06] mb-5 flex items-center justify-between">
                          <div className={`text-2xl font-extrabold font-sans tracking-tight ${item.accentColor}`}>
                            {item.phase}
                          </div>
                          <span className="text-[11px] font-sans text-slate-400 font-semibold uppercase tracking-widest">
                            Paso {item.id} de 3
                          </span>
                        </div>

                        {/* Título y textos */}
                        <p className="text-xl font-extrabold text-white tracking-tight leading-snug">
                          {item.title}
                        </p>

                        <p className="mt-3 text-sm text-slate-300 font-medium leading-relaxed">
                          {item.summary}
                        </p>

                        <p className="mt-3 text-xs text-slate-400 leading-relaxed">
                          {item.description}
                        </p>

                        {/* Entregable garantizado */}
                        <div className="pt-5 mt-6 border-t border-white/[0.06]">
                          <div className="text-[11px] font-sans uppercase tracking-widest text-slate-400 mb-1.5 font-semibold">
                            Entregable garantizado:
                          </div>
                          <div className="flex items-start gap-2.5 text-xs text-slate-200">
                            <span className={`${item.deliverableIconColor} font-bold shrink-0 mt-0.5`}>
                              ✓
                            </span>
                            <span className="leading-snug">
                              {item.deliverable}
                            </span>
                          </div>
                        </div>

                        {/* Controles integrados en el pie de la tarjeta móvil con 44px touch targets */}
                        <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center justify-between gap-3">
                          {activeStep > 1 ? (
                            <button
                              type="button"
                              onClick={handlePrev}
                              className="min-h-[44px] px-4 py-3 rounded-xl text-xs font-sans font-medium text-slate-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 transition-all cursor-pointer flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                            >
                              <span>← Anterior</span>
                            </button>
                          ) : (
                            <div />
                          )}

                          {activeStep === 3 ? (
                            <button
                              type="button"
                              onClick={handleNext}
                              className="min-h-[44px] px-5 py-3 rounded-xl text-xs font-sans font-bold bg-emerald-400 hover:bg-emerald-300 text-slate-950 transition-all shadow-[0_0_18px_rgba(16,185,129,0.35)] cursor-pointer flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                            >
                              <span>Finalizar recorrido</span>
                              <span>✓</span>
                            </button>
                          ) : (
                            <button
                              type="button"
                              onClick={handleNext}
                              className="min-h-[44px] px-5 py-3 rounded-xl text-xs font-sans font-bold bg-cyan-400 hover:bg-cyan-300 text-slate-950 transition-all shadow-[0_0_18px_rgba(6,182,212,0.3)] cursor-pointer flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                            >
                              <span>Continuar al Paso {activeStep + 1}</span>
                              <span>→</span>
                            </button>
                          )}
                        </div>
                      </motion.div>
                    ))
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* GRID DE LAS 3 TARJETAS CON DESBLOQUEO PROGRESIVO (DESKTOP)*/}
        {/* ========================================================= */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {steps.map((item) => {
            const isUnlocked = activeStep >= item.id;
            const isCurrent = activeStep === item.id;
            const isCompleted = activeStep > item.id;

            return (
              <motion.article 
                key={item.id}
                layout
                onClick={() => handleStepClick(item.id)}
                className={`relative rounded-3xl transition-all duration-300 p-7 sm:p-9 flex flex-col justify-between overflow-hidden backdrop-blur-sm cursor-pointer group ${
                  isCurrent
                    ? `bg-white/[0.04] ${item.activeBorder} ${item.glowShadow} -translate-y-1`
                    : isCompleted
                    ? 'bg-white/[0.02] border border-emerald-500/30 shadow-[0_0_25px_rgba(16,185,129,0.08)]'
                    : 'bg-[#060709]/80 border border-white/[0.05]'
                }`}
              >
                {/* Contenido principal de la tarjeta */}
                <div className={`transition-all duration-500 ${
                  isUnlocked 
                    ? 'opacity-100 filter-none' 
                    : 'opacity-25 filter blur-[4px] pointer-events-none'
                }`}>
                  {/* Cabecera del paso: Franja de tiempo + Estado tipográfico sobrio (Sin cápsulas) */}
                  <div className="pb-6 border-b border-white/[0.06] mb-6 flex items-center justify-between">
                    <div className={`text-2xl sm:text-3xl font-extrabold font-sans tracking-tight ${item.accentColor}`}>
                      {item.phase}
                    </div>

                    {/* Estado tipográfico limpio */}
                    {isCompleted ? (
                      <span className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-400">
                        ✓ Completado
                      </span>
                    ) : isCurrent ? (
                      <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400">
                        En Foco
                      </span>
                    ) : (
                      <span className="text-xs font-mono font-medium uppercase tracking-wider text-slate-500">
                        Bloqueado
                      </span>
                    )}
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
                <div className={`pt-6 mt-8 border-t border-white/[0.06] transition-all duration-500 ${
                  isUnlocked ? 'opacity-100' : 'opacity-25 filter blur-[4px]'
                }`}>
                  <div className="text-[11px] font-sans uppercase tracking-widest text-slate-400 mb-2 font-semibold">
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

                {/* Overlay de Bloqueo Progresivo (Con Touch Target de 44px) */}
                <AnimatePresence>
                  {!isUnlocked && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      onClick={() => handleStepClick(item.id)}
                      className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center bg-black/50 backdrop-blur-[2px] cursor-pointer group/lock"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-white/[0.06] border border-white/10 flex items-center justify-center mb-3 shadow-xl group-hover/lock:scale-105 group-hover/lock:border-cyan-400/40 transition-all">
                        <svg className="w-5 h-5 text-slate-400 group-hover/lock:text-cyan-400 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                        </svg>
                      </div>

                      <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-1">
                        Paso 0{item.id} Bloqueado
                      </div>
                      <div className="text-sm font-bold text-white mb-4">
                        {item.phase}
                      </div>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleStepClick(item.id);
                        }}
                        className="min-h-[44px] px-4 py-2.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.15] active:scale-[0.96] text-white border border-white/15 hover:border-cyan-400/40 text-xs font-mono font-medium transition-all duration-150 group-hover/lock:scale-105 cursor-pointer flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                      >
                        <span>Desbloquear paso</span>
                        <span>→</span>
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>

        {/* ========================================================= */}
        {/* FRANJA DE COMPROMISO COMERCIAL DIRECTO                     */}
        {/* ========================================================= */}
        <div className="mt-12 sm:mt-16 rounded-2xl bg-white/[0.02] border border-white/[0.08] p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-sans uppercase tracking-widest text-slate-400 mb-1">
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
            className="w-full sm:w-auto shrink-0 min-h-[44px] px-6 py-3.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] active:scale-[0.97] backdrop-blur-md text-white border border-white/20 hover:border-cyan-400/50 text-sm font-bold transition-all duration-150 flex items-center justify-center gap-2.5 group cursor-pointer shadow-[inset_0_1px_0_0_rgba(255,255,255,0.25),0_8px_24px_-4px_rgba(0,0,0,0.5)] hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.4),0_0_28px_rgba(6,182,212,0.3)] hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
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

