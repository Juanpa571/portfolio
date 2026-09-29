import React from 'react';
import { MetaTags } from '../components/seo/MetaTags';
import { HeaderV2 } from '../components/v2/HeaderV2';
import { HeroV2 } from '../components/v2/HeroV2';
import { PainDiagnosisV2 } from '../components/v2/PainDiagnosisV2';
import { KineticBackgroundV2 } from '../components/v2/KineticBackgroundV2';
import { ServicesV2 } from '../components/v2/ServicesV2';
import { ProjectsV2 } from '../components/v2/ProjectsV2';
import { ProcessV2 } from '../components/v2/ProcessV2';
import { FaqV2 } from '../components/v2/FaqV2';
import { ContactV2 } from '../components/v2/ContactV2';
import { FooterV2 } from '../components/v2/FooterV2';

export const V2HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-transparent text-slate-100 font-sans antialiased selection:bg-cyan-500 selection:text-black relative">
      <MetaTags
        title="Diseño Web Cali & Páginas Web para Vender | JP Studios"
        description="Estudio de diseño web en Cali y desarrollo a la medida en React. Sitios web y catálogos optimizados para posicionamiento en Google y motores de IA."
        canonicalUrl="https://jpchacon.com/"
      />
      
      {/* Fondo Cinético Vivo */}
      <KineticBackgroundV2 />

      <HeaderV2 />

      <main className="relative z-10">
        {/* Bloque 1: Hero Section */}
        <HeroV2 />

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
      </main>
    </div>
  );
};

