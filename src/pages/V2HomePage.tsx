import React, { Suspense, lazy } from 'react';
import { MetaTags } from '../components/seo/MetaTags';
import { HeaderV2 } from '../components/v2/HeaderV2';
import { HeroV2 } from '../components/v2/HeroV2';
import { KineticBackgroundV2 } from '../components/v2/KineticBackgroundV2';

// Importaciones dinámicas (Code Splitting) para componentes Below-the-Fold (Optimización TBT & LCP)
const PainDiagnosisV2 = lazy(() =>
  import('../components/v2/PainDiagnosisV2').then((m) => ({ default: m.PainDiagnosisV2 }))
);
const ServicesV2 = lazy(() =>
  import('../components/v2/ServicesV2').then((m) => ({ default: m.ServicesV2 }))
);
const ProjectsV2 = lazy(() =>
  import('../components/v2/ProjectsV2').then((m) => ({ default: m.ProjectsV2 }))
);
const ProcessV2 = lazy(() =>
  import('../components/v2/ProcessV2').then((m) => ({ default: m.ProcessV2 }))
);
const FaqV2 = lazy(() =>
  import('../components/v2/FaqV2').then((m) => ({ default: m.FaqV2 }))
);
const ContactV2 = lazy(() =>
  import('../components/v2/ContactV2').then((m) => ({ default: m.ContactV2 }))
);
const FooterV2 = lazy(() =>
  import('../components/v2/FooterV2').then((m) => ({ default: m.FooterV2 }))
);

export const V2HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-transparent text-slate-100 font-sans antialiased selection:bg-cyan-500 selection:text-black relative">
      <MetaTags
        title="Diseño Web Cali & Páginas Web para Vender | JP Studios"
        description="Estudio de diseño web en Cali y páginas para vender. Sitios web y catálogos de alta velocidad optimizados para posicionar en Google y captar clientes."
        canonicalUrl="https://jpchacon.com/"
      />
      
      {/* Fondo Cinético Vivo (Above the Fold) */}
      <KineticBackgroundV2 />

      {/* Header Fijo (Above the Fold) */}
      <HeaderV2 />

      <main className="relative z-10 overflow-x-hidden">
        {/* Bloque 1: Hero Section (Above the Fold - Carga estática síncrona para LCP inmediato) */}
        <HeroV2 />

        {/* Componentes Below-the-Fold envueltos en Suspense */}
        <Suspense fallback={<div className="min-h-screen bg-transparent" />}>
          {/* Divisor Minimalista */}
          <div className="w-full border-t border-white/[0.08]" aria-hidden="true" />

          {/* Bloque 2: Diagnóstico y Agitación del Dolor Comercial */}
          <PainDiagnosisV2 />

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
      </main>
    </div>
  );
};
