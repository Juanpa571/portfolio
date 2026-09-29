import React, { Suspense, lazy, useState, useEffect } from 'react';
import { MetaTags } from '../components/seo/MetaTags';
import { HeaderV2 } from '../components/v2/HeaderV2';
import { HeroV2 } from '../components/v2/HeroV2';
import { PainDiagnosisV2 } from '../components/v2/PainDiagnosisV2';
import { KineticBackgroundV2 } from '../components/v2/KineticBackgroundV2';

// Carga diferida de secciones below-the-fold para máxima velocidad de carga inicial
const ServicesV2 = lazy(() => import('../components/v2/ServicesV2').then(m => ({ default: m.ServicesV2 })));
const ProjectsV2 = lazy(() => import('../components/v2/ProjectsV2').then(m => ({ default: m.ProjectsV2 })));
const ProcessV2 = lazy(() => import('../components/v2/ProcessV2').then(m => ({ default: m.ProcessV2 })));
const FaqV2 = lazy(() => import('../components/v2/FaqV2').then(m => ({ default: m.FaqV2 })));
const ContactV2 = lazy(() => import('../components/v2/ContactV2').then(m => ({ default: m.ContactV2 })));
const FooterV2 = lazy(() => import('../components/v2/FooterV2').then(m => ({ default: m.FooterV2 })));

export const V2HomePage: React.FC = () => {
  const [showBelowFold, setShowBelowFold] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const enableBelowFold = () => {
      setShowBelowFold(true);
    };

    const events = ['scroll', 'touchstart', 'pointerdown', 'keydown'];
    const onAction = () => {
      enableBelowFold();
      events.forEach((ev) => window.removeEventListener(ev, onAction));
    };

    events.forEach((ev) => {
      window.addEventListener(ev, onAction, { once: true, passive: true });
    });

    // Fallback: montar tras 2.5s de inactividad
    const timer = setTimeout(enableBelowFold, 2500);

    return () => {
      clearTimeout(timer);
      events.forEach((ev) => window.removeEventListener(ev, onAction));
    };
  }, []);

  return (
    <div className="min-h-screen bg-transparent text-slate-100 font-sans antialiased selection:bg-cyan-500 selection:text-black relative">
      <MetaTags
        title="Diseño Web Cali & Páginas Web para Vender | JP Studios"
        description="Estudio de diseño web en Cali y desarrollo a la medida en React. Sitios web y catálogos optimizados para posicionamiento en Google y motores de IA."
        canonicalUrl="https://jpchacon.com/"
      />
      
      {/* Fondo Cinético Vivo (Inspirado en Creativeans + Haoqi.design) */}
      <KineticBackgroundV2 />

      <HeaderV2 />

      <main className="relative z-10">
        {/* Bloque 1: Hero Section (Renderizado prioritario inmediato) */}
        <HeroV2 />

        {/* Divisor Minimalista */}
        <div className="w-full border-t border-white/[0.08]" aria-hidden="true" />

        {/* Bloque 2: Diagnóstico y Agitación del Dolor Comercial */}
        <PainDiagnosisV2 />

        {showBelowFold && (
          <Suspense fallback={null}>
            {/* Divisor Minimalista */}
            <div className="w-full border-t border-white/[0.08]" aria-hidden="true" />

            {/* Bloque 3: Solución y Pilares del Servicio */}
            <ServicesV2 />

            {/* Divisor Minimalista */}
            <div className="w-full border-t border-white/[0.08]" aria-hidden="true" />

            {/* Bloque 4: Casos de Estudio & Prueba Empírica */}
            <ProjectsV2 />

            {/* Divisor Minimalista */}
            <div className="w-full border-t border-white/[0.08]" aria-hidden="true" />

            {/* Bloque 5: Metodología y Plazos de Entrega */}
            <ProcessV2 />

            {/* Divisor Minimalista */}
            <div className="w-full border-t border-white/[0.08]" aria-hidden="true" />

            {/* Bloque 6: Preguntas Frecuentes, Inversión & AEO */}
            <FaqV2 />

            {/* Divisor Minimalista */}
            <div className="w-full border-t border-white/[0.08]" aria-hidden="true" />

            {/* Bloque 7: Cotizador Interactivo de Cero Fricción & Cierre */}
            <ContactV2 />

            <FooterV2 />
          </Suspense>
        )}
      </main>
    </div>
  );
};
