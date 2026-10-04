import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WhatsAppIcon } from '../ui/WhatsAppIcon';

/**
 * FaqV2
 * 
 * Sección 06: Preguntas Frecuentes, Eliminación de Objeciones y Optimización AEO/GEO.
 * Bloque 6 de conversión según la Antigravity SEO Bible y el manual JP Studios.
 * 
 * - Marcado de microdatos estructurados Schema.org `FAQPage` integrado para Google Rich Results.
 * - Total seleccionabilidad de texto (anti-`select-none`), garantizando accesibilidad y rastreo de IA.
 * - Acordeones fluidos con Framer Motion, diseño sobrio de autor y estética de obsidiana/carbón.
 * - Cero cápsulas flotantes ni clichés decorativos de IA.
 */
export const FaqV2: React.FC = () => {
  // Acordeones cerrados por defecto
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      id: 'precios-colombia',
      question: '¿Cuánto cobran por hacer una página web en Colombia?',
      shortAnswer: 'El precio oscila entre $1.500.000 COP y $4.500.000 COP con cotización cerrada llave en mano, según el alcance de tu empresa.',
      content: (
        <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
          <p>
            En Colombia, el valor de una página web profesional desarrollada por JP Studios se calcula con <strong className="text-white font-semibold">precio fijo cerrado</strong>, sin costos imprevistos ni tarifas sorpresa según el alcance:
          </p>
          <ul className="space-y-2.5 pt-1">
            <li className="flex items-start gap-2.5">
              <span className="text-slate-300 font-bold shrink-0 mt-0.5 font-mono">01.</span>
              <span>
                <strong className="text-white font-semibold">Landing Page de venta directa (Desde $1.500.000 COP):</strong> Estructura One-Page de alta velocidad para campañas publicitarias y captación rápida en celulares.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-slate-300 font-bold shrink-0 mt-0.5 font-mono">02.</span>
              <span>
                <strong className="text-white font-semibold">Sitio Corporativo con Posicionamiento en Google (Desde $2.500.000 COP):</strong> Múltiples secciones, optimización para Google Maps y estructura lista para captar clientes en tu ciudad.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-slate-300 font-bold shrink-0 mt-0.5 font-mono">03.</span>
              <span>
                <strong className="text-white font-semibold">Plataformas a medida y Catálogos Comerciales (Desde $4.500.000 COP):</strong> Para empresas que requieren catálogos extensos, filtrado de productos o pedidos directos por WhatsApp para su equipo comercial.
              </span>
            </li>
          </ul>
          <div className="text-xs sm:text-sm text-slate-400 pt-2 border-t border-white/[0.06] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <span>Antes de iniciar recibes una propuesta técnica formal con alcance exacto y garantía de cumplimiento en 14 a 21 días.</span>
            <a href="/cuanto-cuesta-una-pagina-web-en-colombia" className="text-cyan-400 hover:underline font-mono text-xs inline-flex items-center gap-1 shrink-0">
              <span>Ver desglose completo de precios 2026</span>
              <span>↗</span>
            </a>
          </div>
        </div>
      ),
    },
    {
      id: 'hosting-dominio-mensualidades',
      question: '¿Cuánto vale el hosting y el dominio en Colombia y hay que pagar mensualidades?',
      shortAnswer: 'Un dominio cuesta entre $60.000 y $120.000 COP al año. No cobro mensualidades forzadas; el código y el dominio son 100% de tu empresa.',
      content: (
        <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
          <p>
            En Colombia, el registro anual de un dominio comercial (<code className="text-slate-200 font-mono text-xs px-1.5 py-0.5 rounded bg-white/[0.05]">.com</code> o <code className="text-slate-200 font-mono text-xs px-1.5 py-0.5 rounded bg-white/[0.05]">.com.co</code>) cuesta entre <strong className="text-white font-semibold">$60.000 y $120.000 COP al año</strong>, y lo pagas directamente a registradores oficiales a tu propio nombre.
          </p>
          <p>
            En JP Studios alojo tu página web en <strong className="text-white font-semibold">servidores de máxima velocidad y seguridad</strong> con certificado SSL incluido. <strong className="text-cyan-400 font-semibold">No cobro mensualidades obligatorias de mantenimiento ni alquiler de código.</strong>
          </p>
          <p className="text-xs sm:text-sm text-slate-400 pt-2 border-t border-white/[0.06]">
            Los archivos de tu web, los accesos del servidor y la propiedad del dominio son 100% tuyos desde el día de la entrega. Sin letras pequeñas ni contratos de retención.
          </p>
        </div>
      ),
    },
    {
      id: 'posicionamiento-google-maps',
      question: '¿Cómo hacer para que mi página web aparezca de primera en Google y Google Maps?',
      shortAnswer: 'Combinando velocidad real de carga (< 2s), configuración técnica para Google y optimización del perfil local de Google Maps.',
      content: (
        <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
          <p>
            Aparecer en las primeras posiciones de Google no se logra con trucos mágicos ni palabras clave amontonadas. Se basa en tres pilares que Google premia rigurosamente:
          </p>
          <ul className="space-y-2.5 pt-1">
            <li className="flex items-start gap-2.5">
              <span className="text-slate-300 font-bold shrink-0 mt-0.5">✓</span>
              <span>
                <strong className="text-white font-semibold">Velocidad de carga inmediata:</strong> Google penaliza los sitios lentos de WordPress que tardan más de 3 segundos en abrir. Construyo tu página para que cargue en menos de 2 segundos en el celular del cliente y apruebe las pruebas oficiales de Google con nota verde (90-100).
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-slate-300 font-bold shrink-0 mt-0.5">✓</span>
              <span>
                <strong className="text-white font-semibold">Configuración para Google y motores de IA:</strong> Registro la información exacta de tu empresa (dirección en Cali, servicios que ofreces, teléfonos y horarios) para que tanto Google como asistentes como ChatGPT entiendan a qué te dedicas y te recomienden a clientes locales.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-slate-300 font-bold shrink-0 mt-0.5">✓</span>
              <span>
                <strong className="text-white font-semibold">Vinculación y optimización de Google Maps:</strong> Conecto tu web oficial a tu perfil de Google Business para que aparezcas en el paquete de 3 mapas locales cuando clientes de tu ciudad busquen lo que vendes.
              </span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 'requisitos-empresa',
      question: '¿Qué requisitos se necesitan para crear una página web para una empresa?',
      shortAnswer: 'Solo necesitas completar un cuestionario breve (Brief) de tu negocio y subir tus logos o fotos a una carpeta privada de Google Drive.',
      content: (
        <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
          <p>
            El proceso de JP Studios está diseñado para que no pierdas horas en reuniones innecesarias ni te compliques con aspectos técnicos. Para iniciar solo seguimos 2 pasos de onboarding:
          </p>
          <ul className="space-y-2.5 pt-1">
            <li className="flex items-start gap-2.5">
              <span className="text-slate-300 font-bold shrink-0 mt-0.5 font-mono">1.</span>
              <span>
                <strong className="text-white font-semibold">Completar un formulario guiado (Brief):</strong> Un cuestionario corto donde defines tus servicios principales, tu cliente ideal y tus ventajas comerciales.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-slate-300 font-bold shrink-0 mt-0.5 font-mono">2.</span>
              <span>
                <strong className="text-white font-semibold">Cargar tu material a Google Drive:</strong> Subir tu logotipo en buena resolución, fotos de tus proyectos o productos (si cuentas con ellas) y tus números de contacto oficiales.
              </span>
            </li>
          </ul>
          <p className="text-xs sm:text-sm text-slate-400 pt-2 border-t border-white/[0.06]">
            Con esa información base, yo me encargo de todo el trabajo pesado: redactar los textos comerciales persuasivos, estructurar la arquitectura SEO y programar la página completa.
          </p>
        </div>
      ),
    },
    {
      id: 'pagina-web-vs-instagram',
      question: '¿Por qué necesito una página web para vender si ya tengo Instagram o WhatsApp?',
      shortAnswer: 'Porque las redes sociales son terreno alquilado que distrae al usuario. Quien busca en Google tiene dinero en mano e intención de compra inmediata.',
      content: (
        <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
          <p>
            Instagram y WhatsApp son canales excelentes de comunicación, pero no reemplazan a una página web profesional por dos motivos comerciales fundamentales:
          </p>
          <ul className="space-y-2.5 pt-1">
            <li className="flex items-start gap-2.5">
              <span className="text-slate-300 font-bold shrink-0 mt-0.5 font-mono">•</span>
              <span>
                <strong className="text-white font-semibold">Intención de compra vs. entretenimiento:</strong> En Instagram la gente navega para distraerse y la plataforma le muestra publicaciones de tu competencia al lado de las tuyas. En Google, el cliente escribe voluntariamente porque necesita contratar ya y tiene presupuesto listo.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-slate-300 font-bold shrink-0 mt-0.5 font-mono">•</span>
              <span>
                <strong className="text-white font-semibold">Autoridad y filtro de prospectos:</strong> Tu web propia responde dudas frecuentes, muestra casos reales, proyecta seriedad empresarial y lleva a los clientes a tu WhatsApp con la decisión de compra prácticamente tomada, ahorrándote horas respondiendo lo mismo por mensaje.
              </span>
            </li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <section 
      id="faq" 
      data-ambient-theme="platinum"
      itemScope
      itemType="https://schema.org/FAQPage"
      className="relative py-28 sm:py-36 lg:py-44 xl:py-48 bg-transparent text-slate-100"
    >
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================= */}
        {/* ENCABEZADO EDITORIAL DEL BLOQUE: DUDAS FRECUENTES         */}
        {/* ========================================================= */}
        <div id="faq-header" className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-sans font-medium tracking-wider text-slate-300 uppercase mb-4">
            Preguntas Frecuentes & Inversión
          </div>
          
          <h2 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-[-0.03em] text-white leading-[1.08]">
            Precios, tiempos{' '}
            <span className="text-slate-200">
              y funcionamiento.
            </span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Sin evasivas ni tecnicismos confusos. Todo lo que necesitas saber antes de iniciar el desarrollo de la página web de tu negocio.
          </p>
        </div>

        {/* ========================================================= */}
        {/* LISTADO DE ACORDEONES FLUIDOS                             */}
        {/* ========================================================= */}
        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.id}
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
                className={`rounded-2xl transition-all duration-300 border overflow-hidden ${
                  isOpen
                    ? 'bg-white/[0.04] border-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.4)]'
                    : 'bg-white/[0.015] border-white/[0.08] hover:border-white/15'
                }`}
              >
                {/* Botón de Encabezado / Pregunta */}
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-5 sm:p-7 flex items-center justify-between gap-3 sm:gap-4 cursor-pointer focus:outline-none"
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <span className="text-xs font-mono text-slate-400 pt-1 shrink-0 font-bold">
                      0{index + 1}
                    </span>
                    <h3 
                      itemProp="name" 
                      className={`text-base sm:text-lg lg:text-xl font-bold tracking-tight transition-colors ${
                        isOpen ? 'text-white' : 'text-slate-200 hover:text-white'
                      }`}
                    >
                      {item.question}
                    </h3>
                  </div>

                  {/* Icono de expansión minimalista */}
                  <div className={`w-8 h-8 rounded-xl shrink-0 flex items-center justify-center transition-all duration-300 border ${
                    isOpen 
                      ? 'bg-white text-slate-950 border-white rotate-45 shadow-[0_0_15px_rgba(255,255,255,0.4)]' 
                      : 'bg-white/[0.04] text-slate-400 border-white/10 group-hover:text-white'
                  }`}>
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                </button>

                {/* Contenido / Respuesta Desplegable */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div 
                        itemScope
                        itemProp="acceptedAnswer"
                        itemType="https://schema.org/Answer"
                        className="px-5 pb-6 sm:px-7 sm:pb-8 pt-3 pl-11 sm:pl-16 border-t border-white/[0.04]"
                      >
                        <div itemProp="text">
                          {item.content}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* ========================================================= */}
        {/* BANNER DE DUDA NO RESUELTA (CONTACTO RÁPIDO)              */}
        {/* ========================================================= */}
        <div className="mt-12 sm:mt-16 rounded-2xl bg-white/[0.02] border border-white/[0.08] p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="max-w-xl">
            <div className="text-xs font-sans font-medium uppercase tracking-wider text-slate-400 mb-1">
              ¿Tienes una pregunta específica sobre tu proyecto?
            </div>
            <p className="text-sm sm:text-base font-semibold text-white">
              Escríbeme directamente por WhatsApp. Te respondo personalmente sin rodeos ni compromisos de compra.
            </p>
          </div>

          <a
            href="https://wa.me/573177371301?text=Hola%20Juan%20Pablo,%20tengo%20una%20pregunta%20sobre%20el%20dise%C3%B1o%20web%20para%20mi%20empresa"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto shrink-0 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-200 active:scale-[0.97] text-slate-950 text-sm font-bold transition-all duration-150 flex items-center justify-center gap-2.5 group cursor-pointer shadow-[0_0_24px_rgba(255,255,255,0.2)] hover:shadow-[0_0_32px_rgba(255,255,255,0.35)] hover:-translate-y-0.5 active:translate-y-0"
          >
            <WhatsAppIcon className="w-4 h-4 fill-current shrink-0" />
            <span>Hacer una pregunta por WhatsApp</span>
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </a>
        </div>

      </div>
    </section>
  );
};
