import React, { useState } from 'react';
import { MetaTags } from '../components/seo/MetaTags';
import { HeaderV2 } from '../components/v2/HeaderV2';
import { FooterV2 } from '../components/v2/FooterV2';
import { AuditoriaBackground } from '../components/v2/AuditoriaBackground';
import { WhatsAppIcon } from '../components/ui/WhatsAppIcon';

interface CuantoCuestaPaginaWebColombiaPageProps {
  onNavigateHome?: () => void;
}

export const CuantoCuestaPaginaWebColombiaPage: React.FC<CuantoCuestaPaginaWebColombiaPageProps> = ({ onNavigateHome }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqList = [
    {
      question: '¿Cuánto cobran por hacer una página web en Colombia en 2026?',
      answer: 'En Colombia, el costo promedio de una página web profesional para una empresa oscila entre $1.500.000 y $4.000.000 COP para desarrollos a la medida optimizados para Google. Existen opciones de entrada con plantillas prefabricadas desde $400.000 COP (con limitaciones severas de velocidad y posicionamiento) y plataformas corporativas o tiendas avanzadas que superan los $6.000.000 COP.'
    },
    {
      question: '¿Cuánto vale un hosting y un dominio en Colombia al año?',
      answer: 'Un dominio comercial (.com o .co) cuesta entre $60.000 y $130.000 COP al año en registradores como Mi.com.co o GoDaddy. El hosting compartido tradicional oscila entre $150.000 y $350.000 COP anuales. En JP Studios, al construir con React 19 y arquitectura serverless en Cloudflare, el costo de hospedaje es de $0 COP mensuales, eliminando ese gasto recurrente.'
    },
    {
      question: '¿Es obligatorio pagar mensualidades para que la página siga activa?',
      answer: 'No debería serlo. En desarrollos con código limpio y arquitectura serverless, la página es 100% tuya y no requiere mensualidades forzadas para continuar funcionando. Los pagos recurrentes solo se justifican si contratas un servicio voluntario de actualización de contenidos, campañas de marketing o posicionamiento SEO continuo.'
    },
    {
      question: '¿Por qué hay tanta diferencia entre una web de $400.000 y una de $3.000.000?',
      answer: 'La diferencia reside en tres factores: personalización, velocidad de carga y retorno de inversión. Una página de $400.000 COP suele ser una plantilla clonada que tarda más de 4 segundos en abrir en celulares y no tiene estrategia de conversión. Una web de $2.000.000 a $3.500.000 COP se diseña desde cero, carga en menos de 2 segundos, incluye marcado Schema.org para aparecer en Google Maps y está pensada para captar clientes reales.'
    },
    {
      question: '¿Qué formas de pago e integraciones locales se usan en Colombia?',
      answer: 'Para captar clientes directos, la integración principal es el botón de WhatsApp Business con mensaje contextual precargado. Para tiendas y cobros online, las pasarelas estándar en Colombia son Wompi (Bancolombia), Bold, ePayco y pagos seguros vía PSE o tarjetas de crédito con comisiones que rondan el 2.5% a 3% por transacción.'
    }
  ];

  const tableOfContents = [
    { id: 'factores-costo', label: 'Factores que determinan el precio de una página web' },
    { id: 'tabla-precios', label: 'Precios del mercado en Colombia (Tabla comparativa 2026)' },
    { id: 'costos-recurrentes', label: 'Costos recurrentes que debes prever en tu presupuesto anual' },
    { id: 'checklist-contratacion', label: 'Checklist: 5 preguntas clave antes de contratar un diseñador o agencia' },
    { id: 'tarifas-jp', label: 'Tarifas y planes claros en JP Studios' },
    { id: 'faq', label: 'Preguntas frecuentes sobre precios de páginas web' },
  ];

  return (
    <>
      <MetaTags
        title="¿Cuánto Cuesta una Página Web en Colombia? Precios Reales 2026 — JP Studios"
        description="Tarifas 2026 sobre cuánto cuesta una página web en Colombia. Precios de dominio, hosting y desarrollo a medida, sin costos ocultos ni mensualidades forzadas."
        canonicalUrl="https://jpchacon.com/cuanto-cuesta-una-pagina-web-en-colombia"
      />

      {/* Marcado Estructurado Schema.org (Article + FAQPage) para Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Article",
                "headline": "¿Cuánto cuesta una página web en Colombia? Precios reales 2026",
                "description": "Análisis exhaustivo de tarifas, costos de dominio, hosting, plataformas y desarrollo web profesional en Colombia para el año 2026.",
                "author": {
                  "@type": "Person",
                  "name": "Juan Pablo Chacón",
                  "url": "https://jpchacon.com",
                  "jobTitle": "Fundador & Diseñador Web en JP Studios"
                },
                "publisher": {
                  "@type": "Organization",
                  "name": "JP Studios",
                  "url": "https://jpchacon.com"
                },
                "datePublished": "2026-01-15",
                "dateModified": "2026-03-30",
                "mainEntityOfPage": "https://jpchacon.com/cuanto-cuesta-una-pagina-web-en-colombia"
              },
              {
                "@type": "FAQPage",
                "mainEntity": faqList.map((faq) => ({
                  "@type": "Question",
                  "name": faq.question,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer
                  }
                }))
              }
            ]
          })
        }}
      />

      <HeaderV2 
        onNavigateHome={onNavigateHome}
        maxWidth="5xl"
        navLinks={[
          { href: '#tabla-precios', id: 'tabla-precios', label: 'Precios 2026' },
          { href: '#costos-recurrentes', id: 'costos-recurrentes', label: 'Costos Anuales' },
          { href: '#checklist-contratacion', id: 'checklist-contratacion', label: 'Checklist' },
          { href: '#tarifas-jp', id: 'tarifas-jp', label: 'Tarifas JP' },
        ]}
        ctaText="Cotizar Web"
        ctaHref="https://wa.me/573177371301?text=Hola%20Juan%20Pablo,%20le%C3%AD%20tu%20gu%C3%ADa%20de%20precios%20y%20quiero%20cotizar%20un%20sitio%20web%20para%20mi%20negocio"
      />

      <main className="relative min-h-screen bg-[#070709] text-slate-100 overflow-hidden font-sans">
        <AuditoriaBackground variant="platinum" />

        {/* ========================================================= */}
        {/* MASTHEAD EDITORIAL / CABECERA DEL ARTÍCULO                */}
        {/* Ancho calibrado a 680px (~70-80 caracteres por línea)     */}
        {/* ========================================================= */}
        <header className="relative z-10 pt-32 pb-12 sm:pt-40 sm:pb-16 max-w-[680px] mx-auto px-4 sm:px-6">
          
          {/* Breadcrumb accesible */}
          <nav aria-label="Miga de pan" className="mb-6 flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400">
            <a href="/" onClick={(e) => { if (onNavigateHome) { e.preventDefault(); onNavigateHome(); } }} className="hover:text-white transition-colors">
              Inicio
            </a>
            <span className="text-slate-600">/</span>
            <span className="text-slate-200 font-semibold">Precios Web Colombia 2026</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-[-0.035em] text-white leading-[1.12] mb-6">
            ¿Cuánto cuesta una página web en Colombia? Precios reales y guía completa 2026.
          </h1>

          {/* Byline / Metadatos de autoría y lectura */}
          <div className="pt-4 pb-6 border-y border-white/[0.08] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-3">
              <img
                src="/juan-pablo-chacon.jpg"
                alt="Juan Pablo Chacón"
                width={36}
                height={36}
                className="w-9 h-9 rounded-full object-cover border border-white/20 shrink-0"
              />
              <div>
                <div className="text-white font-medium text-xs">Por Juan Pablo Chacón</div>
                <div className="text-xs text-slate-400">Fundador &amp; Diseñador Web en JP Studios</div>
              </div>
            </div>

            <div className="flex items-center gap-3 text-slate-400 text-xs">
              <span>Actualizado: 2026</span>
              <span className="text-slate-600">•</span>
              <span>8 min de lectura</span>
            </div>
          </div>

          {/* Introducción Narrativa Continua */}
          <div className="pt-8 space-y-5 text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-prose">
            <p>
              Si estás buscando crear una página web para tu empresa en Colombia, es muy probable que te hayas encontrado con un panorama confuso: mientras un diseñador independiente te ofrece una web por $400.000 COP en tres días, una agencia de publicidad te cotiza la misma solicitud en $8.000.000 COP con un plazo de dos meses.
            </p>
            <p>
              ¿A qué se debe semejante disparidad de precios? ¿Por qué los presupuestos varían tanto y qué estás pagando realmente en cada caso?
            </p>
            <p>
              La respuesta corta es que en el mercado digital no existe un único producto llamado &ldquo;página web&rdquo;. Comprar una plantilla prefabricada que tarda 5 segundos en abrir en celulares y que nadie encuentra en Google no es lo mismo que encargar una herramienta de ventas a la medida, diseñada para posicionar de primero en tu ciudad y recibir contactos directos en WhatsApp todos los días.
            </p>

            {/* Cita Destacada / Regla de Oro Editorial */}
            <div className="my-6 pl-5 border-l-2 border-slate-600 text-slate-200 text-sm sm:text-base italic leading-relaxed">
              &ldquo;Para el 90% de las empresas y profesionales en Colombia, pagar más de $4.000.000 COP por un sitio informativo es un sobrecosto innecesario, pero pagar menos de $1.000.000 COP suele ser una pérdida de dinero en un folleto digital invisible que nadie encontrará.&rdquo;
            </div>

            <p>
              En esta guía práctica analizamos componente por componente cuánto vale realmente el dominio, el hosting, el diseño y el mantenimiento técnico para 2026, con tarifas transparentes y sin sorpresas de última hora.
            </p>
          </div>

          {/* Caja de Tabla de Contenidos (Índice del Artículo) */}
          <nav aria-label="Tabla de contenidos del artículo" className="mt-10 p-6 sm:p-7 rounded-2xl bg-white/[0.015] border border-white/[0.08]">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold mb-5 flex items-center justify-between">
              <span>En este artículo</span>
              <span className="text-[11px] font-normal text-slate-400">{tableOfContents.length} secciones</span>
            </div>
            <ol className="flex flex-col gap-3 text-xs sm:text-sm font-mono text-slate-300">
              {tableOfContents.map((item, index) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="hover:text-white transition-colors flex items-start gap-3 group"
                  >
                    <span className="text-slate-400 group-hover:text-white transition-colors font-semibold shrink-0">
                      {index + 1}.
                    </span>
                    <span className="underline underline-offset-4 decoration-white/10 group-hover:decoration-white/40 leading-relaxed">
                      {item.label}
                    </span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>

        </header>

        {/* ========================================================= */}
        {/* CAPÍTULO 1: FACTORES QUE DETERMINAN EL PRECIO             */}
        {/* Ancho calibrado a 680px (~70-80 caracteres por línea)     */}
        {/* ========================================================= */}
        <section id="factores-costo" className="relative z-10 py-14 sm:py-16 border-t border-white/[0.08] max-w-[680px] mx-auto px-4 sm:px-6">
          
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
              ¿Qué factores determinan el costo de una página web?
            </h2>
          </div>

          <div className="space-y-6 text-base text-slate-300 leading-relaxed font-normal max-w-prose">
            <p>
              El precio de un sitio web no se define al azar. Depende de cinco factores técnicos y estratégicos que toda empresa debe evaluar con claridad antes de firmar cualquier contrato o pagar un anticipo:
            </p>

            {/* Factor 1: Dominio */}
            <div className="pt-4 space-y-3">
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight border-b border-white/[0.06] pb-2">
                1. Nombre de dominio (.com o .co)
              </h3>
              <p>
                El dominio es la dirección digital exclusiva de tu negocio en internet (por ejemplo, <code className="text-xs font-mono text-slate-200 bg-white/[0.05] px-1.5 py-0.5 rounded">tuempresa.com</code> o <code className="text-xs font-mono text-slate-200 bg-white/[0.05] px-1.5 py-0.5 rounded">tuempresa.co</code>). En Colombia, los proveedores oficiales más utilizados son Mi.com.co, GoDaddy y Namecheap, donde la tarifa de registro anual suele oscilar entre <strong>$60.000 y $130.000 COP al año</strong> y se cancela cada 12 meses.
              </p>
              <p>
                El dominio con terminación <code className="text-xs font-mono text-slate-200">.co</code> o <code className="text-xs font-mono text-slate-200">.com.co</code> suele costar entre $80.000 y $130.000 COP anuales, mientras que el clásico <code className="text-xs font-mono text-slate-200">.com</code> ronda los $60.000 a $90.000 COP. Aunque el dominio local colombiano es ligeramente más costoso, envía una señal geográfica directa a Google para priorizar tu página en búsquedas realizadas dentro de Colombia.
              </p>
              <div className="pl-4 border-l-2 border-slate-600 max-w-[560px] py-1 my-4">
                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  <strong className="text-white font-medium">Consejo clave de gobernanza:</strong> el dominio siempre debe quedar registrado a nombre de tu propia empresa y con tu correo personal, nunca a nombre del diseñador o agencia que contrates.
                </p>
              </div>
            </div>

            {/* Factor 2: Hosting */}
            <div className="pt-6 space-y-3">
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight border-b border-white/[0.06] pb-2">
                2. Servidor de alojamiento (Hosting)
              </h3>
              <p>
                El hosting es el computador en la nube donde residen las imágenes, los textos y el código de tu sitio para que cualquiera pueda visitarlo 24/7. En el mercado colombiano existen tres modalidades principales:
              </p>
              <p>
                La primera opción es el <strong>hosting compartido tradicional</strong> ($150.000 a $350.000 COP al año en proveedores como Hostinger o Mi.com.co). Es la alternativa más común para páginas iniciales, pero tiene un trade-off: tu web comparte procesador y memoria RAM con cientos de otros sitios, lo que con frecuencia provoca que en celulares la página tarde más de 3 segundos en responder.
              </p>
              <p>
                La segunda opción es un <strong>servidor VPS o dedicado</strong> ($600.000 a $1.200.000 COP al año), necesario si operas una tienda virtual con miles de productos o sistemas que procesan muchos datos simultáneamente.
              </p>
              <p>
                La tercera opción, y la que utilizamos en JP Studios, es la <strong>arquitectura serverless global (Cloudflare Pages)</strong>. Al programar la web en React 19 desacoplado sin bases de datos tradicionales, los archivos estáticos se distribuyen en cientos de centros de datos de todo el mundo. Esto reduce el costo de servidor a <strong>$0 COP mensuales</strong> de forma permanente en su plan inicial, ofreciendo velocidad instantánea sin facturas recurrentes de hospedaje.
              </p>
            </div>

            {/* Factor 3: Certificado SSL */}
            <div className="pt-6 space-y-3">
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight border-b border-white/[0.06] pb-2">
                3. Certificado de seguridad SSL (HTTPS)
              </h3>
              <p>
                El certificado SSL es el candado verde o gris que aparece junto a la dirección web en el navegador. Es obligatorio para que Google no muestre una advertencia de &ldquo;Sitio web no seguro&rdquo; que espanta al 95% de los visitantes.
              </p>
              <p>
                Hoy en día, todas las redes modernas de infraestructura ofrecen certificados SSL automatizados y <strong>completamente gratuitos</strong> a través de entidades como Let&apos;s Encrypt o Cloudflare. Si una cotización en Colombia te cobra sumas anuales elevadas exclusivamente por el concepto de SSL, es un cobro artificial innecesario.
              </p>
            </div>

            {/* Factor 4: Diseño UI/UX y Programación */}
            <div className="pt-6 space-y-3">
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight border-b border-white/[0.06] pb-2">
                4. Diseño de interfaz (UI/UX) y Programación
              </h3>
              <p>
                Aquí es donde se produce la mayor variación de precios. Por un lado, están las <strong>plantillas prediseñadas</strong> de $40 o $60 USD donde el desarrollador simplemente sustituye los textos y las imágenes por las de tu empresa. Es un método económico que permite cobrar entre $400.000 y $900.000 COP, pero que produce sitios pesados, difíciles de personalizar y muy lentos en teléfonos móviles.
              </p>
              <p>
                Por otro lado, el <strong>desarrollo a la medida</strong> implica diseñar la jerarquía de la página desde cero, redactar textos orientados a la conversión comercial, optimizar cada imagen para pantallas Retina y escribir código limpio en React que garantice una navegación fluida en menos de 2 segundos. Esta inversión suele oscilar entre los $1.500.000 y $3.500.000 COP.
              </p>
            </div>

            {/* Factor 5: Pasarelas de Pago e Integraciones */}
            <div className="pt-6 space-y-3">
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight border-b border-white/[0.06] pb-2">
                5. Pasarelas de pago colombianas (E-commerce)
              </h3>
              <p>
                Si tu objetivo es vender productos en línea, tu página web necesitará conectarse a pasarelas de cobro locales para procesar transferencias por PSE, Nequi, Daviplata o tarjetas de crédito.
              </p>
              <p>
                Las plataformas líderes en Colombia, como Wompi (de Bancolombia), Bold o ePayco, no cobran costos fijos de afiliación mensual, sino una tarifa por transacción que oscila entre el 2.5% y el 3.2% más IVA. La integración técnica de estos botones de cobro en tu web suele incluirse dentro del presupuesto inicial de desarrollo de la tienda virtual.
              </p>
            </div>

          </div>

        </section>

        {/* ========================================================= */}
        {/* CAPÍTULO 2: TABLA COMPARATIVA DE PRECIOS 2026             */}
        {/* Ancho de tabla extendido para lectura tabular fluida      */}
        {/* ========================================================= */}
        <section id="tabla-precios" className="relative z-10 py-14 sm:py-16 border-t border-white/[0.08] max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-[680px] mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
              Precios del mercado en Colombia por tipo de página web (2026).
            </h2>
            <p className="mt-4 text-base text-slate-300 leading-relaxed font-normal">
              Para tener un punto de referencia claro al momento de evaluar cotizaciones, a continuación se presentan los cuatro rangos habituales de inversión en Colombia según el alcance y el objetivo de cada proyecto:
            </p>
          </div>

          {/* Tabla Desktop Editorial Dark Platinum */}
          <div className="hidden md:block overflow-x-auto my-8">
            <table className="w-full text-left border-collapse text-xs lg:text-sm">
              <thead>
                <tr className="border-t border-b border-white/15 bg-white/[0.02] text-slate-300 font-mono uppercase text-xs tracking-wider">
                  <th className="py-4 lg:py-5 px-4 lg:px-5 w-[24%]">Tipo de Proyecto</th>
                  <th className="py-4 lg:py-5 px-4 lg:px-5 w-[22%]">Inversión Estimada</th>
                  <th className="py-4 lg:py-5 px-4 lg:px-5 w-[42%]">Alcance y Objetivo Real</th>
                  <th className="py-4 lg:py-5 px-4 lg:px-5 w-[12%] text-right">Entrega</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06] border-b border-white/15 text-slate-300">
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-5 lg:py-6 px-4 lg:px-5">
                    <div className="text-sm font-bold text-white">Plantilla Básica / CMS</div>
                    <div className="text-xs font-mono text-slate-400 mt-1">Wix / WordPress estándar</div>
                  </td>
                  <td className="py-5 lg:py-6 px-4 lg:px-5 font-mono text-white font-semibold whitespace-nowrap">
                    $400.000 – $900.000
                  </td>
                  <td className="py-5 lg:py-6 px-4 lg:px-5 text-slate-300 leading-relaxed text-xs lg:text-sm">
                    Tema prediseñado con textos reemplazados. Para presencia básica de contacto sin requerir velocidad móvil ni posicionamiento SEO.
                  </td>
                  <td className="py-5 lg:py-6 px-4 lg:px-5 font-mono text-slate-400 text-right whitespace-nowrap">
                    5 – 10 días
                  </td>
                </tr>

                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-5 lg:py-6 px-4 lg:px-5">
                    <div className="text-sm font-bold text-white">Landing Page de Conversión</div>
                    <div className="text-xs font-mono text-slate-400 mt-1">One-page orientada a ventas</div>
                  </td>
                  <td className="py-5 lg:py-6 px-4 lg:px-5 font-mono text-white font-semibold whitespace-nowrap">
                    $1.000.000 – $1.800.000
                  </td>
                  <td className="py-5 lg:py-6 px-4 lg:px-5 text-slate-300 leading-relaxed text-xs lg:text-sm">
                    Página única orientada 100% a ventas, botón directo a WhatsApp, carga rápida (&lt;2s) y hosting serverless $0/mes. Ideal para pauta publicitaria.
                  </td>
                  <td className="py-5 lg:py-6 px-4 lg:px-5 font-mono text-slate-400 text-right whitespace-nowrap">
                    10 – 14 días
                  </td>
                </tr>

                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-5 lg:py-6 px-4 lg:px-5">
                    <div className="text-sm font-bold text-white">Web Corporativa &amp; Catálogo</div>
                    <div className="text-xs font-mono text-slate-400 mt-1">Multi-página para empresas</div>
                  </td>
                  <td className="py-5 lg:py-6 px-4 lg:px-5 font-mono text-white font-semibold whitespace-nowrap">
                    $2.000.000 – $4.000.000
                  </td>
                  <td className="py-5 lg:py-6 px-4 lg:px-5 text-slate-300 leading-relaxed text-xs lg:text-sm">
                    Inicio, Servicios, Casos, FAQ, marcado estructurado Schema.org para Google Maps, código React y cero dependencias de plugins. Para liderar en tu sector.
                  </td>
                  <td className="py-5 lg:py-6 px-4 lg:px-5 font-mono text-slate-400 text-right whitespace-nowrap">
                    14 – 21 días
                  </td>
                </tr>

                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-5 lg:py-6 px-4 lg:px-5">
                    <div className="text-sm font-bold text-white">Tienda Virtual / Software a Medida</div>
                    <div className="text-xs font-mono text-slate-400 mt-1">E-commerce avanzado</div>
                  </td>
                  <td className="py-5 lg:py-6 px-4 lg:px-5 font-mono text-white font-semibold whitespace-nowrap">
                    $5.000.000 – $15.000.000+
                  </td>
                  <td className="py-5 lg:py-6 px-4 lg:px-5 text-slate-300 leading-relaxed text-xs lg:text-sm">
                    Pasarelas de pago automáticas (Wompi, Bold), cotizadores dinámicos, gestión de inventario o integración con sistemas de facturación.
                  </td>
                  <td className="py-5 lg:py-6 px-4 lg:px-5 font-mono text-slate-400 text-right whitespace-nowrap">
                    30 – 60 días
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Fichas Móviles Nativas */}
          <div className="md:hidden space-y-4 mb-6">
            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.08] space-y-3">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <div className="text-sm font-bold text-white">Plantilla Básica / CMS</div>
                  <div className="text-xs font-mono text-slate-400 mt-0.5">Wix / WordPress estándar</div>
                </div>
                <div className="text-xs font-mono text-slate-400 shrink-0">5 – 10 días</div>
              </div>
              <div className="text-xl font-bold font-mono text-white">
                $400.000 – $900.000 <span className="text-xs font-normal text-slate-400">COP</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Tema prediseñado con textos reemplazados. Para presencia básica de contacto sin requerir velocidad móvil ni posicionamiento SEO.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.08] space-y-3">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <div className="text-sm font-bold text-white">Landing Page de Conversión</div>
                  <div className="text-xs font-mono text-slate-400 mt-0.5">One-page orientada a ventas</div>
                </div>
                <div className="text-xs font-mono text-slate-400 shrink-0">10 – 14 días</div>
              </div>
              <div className="text-xl font-bold font-mono text-white">
                $1.000.000 – $1.800.000 <span className="text-xs font-normal text-slate-400">COP</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Página única orientada 100% a ventas, botón directo a WhatsApp, carga rápida (&lt;2s) y hosting serverless $0/mes.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.08] space-y-3">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <div className="text-sm font-bold text-white">Web Corporativa &amp; Catálogo</div>
                  <div className="text-xs font-mono text-slate-400 mt-0.5">Multi-página para empresas</div>
                </div>
                <div className="text-xs font-mono text-slate-400 shrink-0">14 – 21 días</div>
              </div>
              <div className="text-xl font-bold font-mono text-white">
                $2.000.000 – $4.000.000 <span className="text-xs font-normal text-slate-400">COP</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Inicio, Servicios, Casos, FAQ, marcado Schema.org para Google Maps, código React y cero dependencias de plugins.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.08] space-y-3">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <div className="text-sm font-bold text-white">Tienda Virtual / Software a Medida</div>
                  <div className="text-xs font-mono text-slate-400 mt-0.5">E-commerce avanzado</div>
                </div>
                <div className="text-xs font-mono text-slate-400 shrink-0">30 – 60 días</div>
              </div>
              <div className="text-xl font-bold font-mono text-white">
                $5.000.000 – $15.000.000+ <span className="text-xs font-normal text-slate-400">COP</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Pasarelas de pago automáticas (Wompi, Bold), cotizadores dinámicos, gestión de inventario o integraciones personalizadas.
              </p>
            </div>
          </div>

        </section>

        {/* ========================================================= */}
        {/* CAPÍTULO 3: COSTOS RECURRENTES Y MANTENIMIENTO ANUAL      */}
        {/* Ancho calibrado a 680px (~70-80 caracteres por línea)     */}
        {/* ========================================================= */}
        <section id="costos-recurrentes" className="relative z-10 py-14 sm:py-16 border-t border-white/[0.08] max-w-[680px] mx-auto px-4 sm:px-6">
          
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
              Costos recurrentes que debes prever en tu presupuesto anual.
            </h2>
          </div>

          <div className="space-y-6 text-base text-slate-300 leading-relaxed font-normal max-w-prose">
            <p>
              Uno de los errores más frecuentes al cotizar una página web es considerar únicamente el pago inicial de desarrollo. Toda solución en internet genera gastos operativos periódicos para mantenerse activa, protegida y visible en Google.
            </p>
            <p>
              Para planificar tu flujo de caja con anticipación, estos son los tres costos recurrentes que debes tener en cuenta año tras año:
            </p>

            {/* Recurrente 1: Dominio y Hosting */}
            <div className="pt-4 space-y-3">
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight border-b border-white/[0.06] pb-2">
                Renovación anual de dominio y hospedaje
              </h3>
              <p>
                El derecho de uso de tu dirección digital (.com o .co) vence cada 12 meses. Su renovación en registradores autorizados suele costar entre $60.000 y $130.000 COP al año. Si dejas vencer esta fecha sin pagar, tu sitio web se desconecta de inmediato y tu marca corre el riesgo de perder el nombre de dominio.
              </p>
              <p>
                A esto se suma la renovación del servidor de hosting compartido tradicional, que oscila entre los $150.000 y $350.000 COP anuales. En total, una empresa que opere sobre infraestructura tradicional debe apartar anualmente entre <strong>$210.000 y $480.000 COP</strong> en renovación de servicios básicos.
              </p>
            </div>

            {/* Recurrente 2: Mantenimiento Técnico */}
            <div className="pt-6 space-y-3">
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight border-b border-white/[0.06] pb-2">
                Soporte técnico preventivo y copias de seguridad
              </h3>
              <p>
                Los gestores de contenido tradicionales que dependen de múltiples plugins externos requieren mantenimiento mensual constante: actualizar versiones de PHP, parchar brechas de seguridad y verificar que una actualización no rompa el diseño de la página. En agencias de software, este soporte preventivo suele cobrarse entre <strong>$100.000 y $300.000 COP mensuales</strong>.
              </p>
              <p>
                En cambio, en arquitecturas modernas con código nativo en React 19 y despliegue serverless, la página no cuenta con bases de datos expuestas ni plugins vulnerables. Esto significa que el sitio funciona de manera autosuficiente sin requerir pagos mensuales obligatorios para seguir en línea.
              </p>
            </div>

            {/* Recurrente 3: Licencias de constructores */}
            <div className="pt-6 space-y-3">
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight border-b border-white/[0.06] pb-2">
                Licenciamiento anual de herramientas visuales
              </h3>
              <p>
                Muchas agencias construyen sitios web utilizando constructores comerciales como Elementor Pro o Divi, o complementos premium de formularios y seguridad. Estas herramientas cobran suscripciones anuales en dólares que oscilan entre <strong>$50 y $199 USD al año</strong>.
              </p>
              <p>
                Al cotizar, asegúrate de aclarar si esas licencias quedan incluidas a perpetuidad o si tu empresa tendrá que renovarlas cada año para seguir recibiendo soporte y actualizaciones técnicas.
              </p>
            </div>

          </div>

        </section>

        {/* ========================================================= */}
        {/* CAPÍTULO 4: CHECKLIST DE CONTRATACIÓN (VALOR EDITORIAL)   */}
        {/* Ancho calibrado a 680px (~70-80 caracteres por línea)     */}
        {/* ========================================================= */}
        <section id="checklist-contratacion" className="relative z-10 py-14 sm:py-16 border-t border-white/[0.08] max-w-[680px] mx-auto px-4 sm:px-6">
          
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
              Checklist: 5 preguntas clave antes de contratar un diseñador o agencia.
            </h2>
          </div>

          <div className="space-y-6 text-base text-slate-300 leading-relaxed font-normal max-w-prose">
            <p>
              Para proteger tu inversión y evitar sorpresas desagradables a mitad de camino, te recomendamos formular estas cinco preguntas a cualquier proveedor antes de realizar el primer anticipo:
            </p>

            {/* Pregunta 1 */}
            <div className="pt-4 space-y-2">
              <h3 className="text-lg font-bold text-white tracking-tight flex items-baseline gap-2">
                <span className="text-slate-400 font-mono text-sm font-bold">01.</span>
                <span>¿El dominio y el hosting quedarán a nombre de mi empresa?</span>
              </h3>
              <p className="pl-6 text-sm sm:text-base">
                Exige siempre que el registro del dominio y la cuenta de infraestructura se creen con tu correo corporativo. Si la agencia registra el dominio bajo su propia cuenta, quedarás atado a ellos y podrías enfrentar trabas o cobros injustificados en caso de querer cambiar de proveedor en el futuro.
              </p>
            </div>

            {/* Pregunta 2 */}
            <div className="pt-4 space-y-2">
              <h3 className="text-lg font-bold text-white tracking-tight flex items-baseline gap-2">
                <span className="text-slate-400 font-mono text-sm font-bold">02.</span>
                <span>¿Cuánto tardará la página web en cargar en celulares con conexión 4G?</span>
              </h3>
              <p className="pl-6 text-sm sm:text-base">
                Más del 75% del tráfico en Colombia navega desde dispositivos móviles. Una página que tarde más de 3 segundos en abrir genera abandono inmediato y encarece tu costo por cliente potencial si inviertes en publicidad digital. Pide que te garanticen una puntuación verde en Google PageSpeed.
              </p>
            </div>

            {/* Pregunta 3 */}
            <div className="pt-4 space-y-2">
              <h3 className="text-lg font-bold text-white tracking-tight flex items-baseline gap-2">
                <span className="text-slate-400 font-mono text-sm font-bold">03.</span>
                <span>¿El proyecto incluye marcado estructurado Schema.org para Google Maps?</span>
              </h3>
              <p className="pl-6 text-sm sm:text-base">
                El posicionamiento local en Google no consiste simplemente en colocar palabras clave en los textos. Debe incluir datos estructurados de <code className="text-xs font-mono text-slate-200">LocalBusiness</code> para que Google y los motores de IA (ChatGPT, Gemini) comprendan exactamente tu dirección física, número telefónico, horario comercial y ubicación geográfica en el mapa.
              </p>
            </div>

            {/* Pregunta 4 */}
            <div className="pt-4 space-y-2">
              <h3 className="text-lg font-bold text-white tracking-tight flex items-baseline gap-2">
                <span className="text-slate-400 font-mono text-sm font-bold">04.</span>
                <span>¿Existen mensualidades forzadas para que la página siga activa?</span>
              </h3>
              <p className="pl-6 text-sm sm:text-base">
                Es fundamental diferenciar con claridad entre un contrato voluntario de marketing, pauta o actualización de contenidos, y una tarifa obligatoria de permanencia técnica sin la cual te desconecten el sitio. Tu presencia digital debe ser un activo patrimonial propio, no un alquiler perpetuo.
              </p>
            </div>

            {/* Pregunta 5 */}
            <div className="pt-4 space-y-2">
              <h3 className="text-lg font-bold text-white tracking-tight flex items-baseline gap-2">
                <span className="text-slate-400 font-mono text-sm font-bold">05.</span>
                <span>¿Me entregarán el código fuente completo al finalizar el desarrollo?</span>
              </h3>
              <p className="pl-6 text-sm sm:text-base">
                Una vez liquidado el pago acordado, el código fuente y todos los archivos del sitio web deben entregarse a tu empresa con acceso total a su repositorio, sin cláusulas de retención de software.
              </p>
            </div>

          </div>

        </section>

        {/* ========================================================= */}
        {/* CAPÍTULO 5: TARIFAS TRANSPARENTES JP STUDIOS              */}
        {/* ========================================================= */}
        <section id="tarifas-jp" className="relative z-10 py-14 sm:py-16 border-t border-white/[0.08] max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-[680px] mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
              Tarifas y planes claros en JP Studios.
            </h2>
            <p className="mt-4 text-base text-slate-300 leading-relaxed font-normal">
              Para quienes buscan una solución profesional sin intermediarios: presupuestos cerrados desde el primer día, código a la medida en React 19, hosting serverless con $0 COP mensuales y entrega garantizada en 14 a 21 días.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            
            {/* Plan 1 */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white/[0.02] border border-white/[0.08] flex flex-col justify-between">
              <div>
                <div className="text-xl font-bold text-white mb-2">Landing Page</div>
                <div className="text-2xl font-extrabold font-mono text-white mb-4">
                  $1.500.000 <span className="text-xs text-slate-400 font-normal">COP</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  Ideal para campañas de pauta en Meta o Google Ads, venta rápida de un producto o servicio específico y contacto directo a WhatsApp.
                </p>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-slate-300 font-bold shrink-0">✓</span>
                    <span>Carga en menos de 2 segundos en celulares</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-300 font-bold shrink-0">✓</span>
                    <span>Estructura orientada a la conversión CRO</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-300 font-bold shrink-0">✓</span>
                    <span>Entrega en 10 a 14 días</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-300 font-bold shrink-0">✓</span>
                    <span>Hospedaje Cloudflare $0/mes</span>
                  </li>
                </ul>
              </div>
              <div className="pt-6 mt-6 border-t border-white/[0.08]">
                <a
                  href="https://wa.me/573177371301?text=Hola%20Juan%20Pablo,%20quiero%20cotizar%20una%20Landing%20Page%20para%20mi%20negocio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-white font-semibold text-xs font-mono transition-all flex items-center justify-center gap-2"
                >
                  <span>Cotizar Landing Page</span>
                  <span>→</span>
                </a>
              </div>
            </div>

            {/* Plan 2: Principal */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white/[0.035] border border-white/25 shadow-[0_0_35px_rgba(255,255,255,0.03)] flex flex-col justify-between">
              <div>
                <div className="text-xl font-bold text-white mb-2">Web Corporativa &amp; Catálogo</div>
                <div className="text-2xl font-extrabold font-mono text-white mb-4">
                  $2.500.000 <span className="text-xs text-slate-400 font-normal">a $3.500.000 COP</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  Para empresas que buscan liderar búsquedas en Google, aparecer con ficha destacada en Google Maps y motores de IA (ChatGPT, Gemini).
                </p>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-white font-bold shrink-0">✓</span>
                    <span>Inicio, Servicios, Casos de Éxito y FAQ</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white font-bold shrink-0">✓</span>
                    <span>Marcado Schema.org LocalBusiness</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white font-bold shrink-0">✓</span>
                    <span>Catálogo interactivo de servicios o productos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white font-bold shrink-0">✓</span>
                    <span>Entrega garantizada en 14 a 21 días</span>
                  </li>
                </ul>
              </div>
              <div className="pt-6 mt-6 border-t border-white/[0.08]">
                <a
                  href="https://wa.me/573177371301?text=Hola%20Juan%20Pablo,%20quiero%20cotizar%20una%20Web%20Corporativa%20para%20mi%20empresa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-white hover:bg-slate-200 text-slate-950 font-bold text-xs tracking-wide transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 fill-slate-950 shrink-0" />
                  <span>Hablar con Juan Pablo</span>
                  <span>↗</span>
                </a>
              </div>
            </div>

            {/* Plan 3 */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white/[0.02] border border-white/[0.08] flex flex-col justify-between">
              <div>
                <div className="text-xl font-bold text-white mb-2">Plataforma a Medida</div>
                <div className="text-2xl font-extrabold font-mono text-white mb-4">
                  Desde $4.000.000 <span className="text-xs text-slate-400 font-normal">COP</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  Para modelos con cotizadores dinámicos, pasarelas de pago colombianas (Wompi, Bold), múltiples sedes o integración con ERP.
                </p>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-slate-300 font-bold shrink-0">✓</span>
                    <span>Arquitectura de software personalizada</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-300 font-bold shrink-0">✓</span>
                    <span>Integración con pasarelas de pago locales</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-300 font-bold shrink-0">✓</span>
                    <span>Optimización técnica para cientos de URLs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-300 font-bold shrink-0">✓</span>
                    <span>Soporte de ingeniería prioritario</span>
                  </li>
                </ul>
              </div>
              <div className="pt-6 mt-6 border-t border-white/[0.08]">
                <a
                  href="https://wa.me/573177371301?text=Hola%20Juan%20Pablo,%20tengo%20un%20proyecto%20a%20medida%20complejo%20y%20quiero%20asesorarme"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-white font-semibold text-xs font-mono transition-all flex items-center justify-center gap-2"
                >
                  <span>Consultar Viabilidad</span>
                  <span>→</span>
                </a>
              </div>
            </div>

          </div>

        </section>

        {/* ========================================================= */}
        {/* CAPÍTULO 6: PREGUNTAS FRECUENTES (FAQ)                    */}
        {/* ========================================================= */}
        <section id="faq" className="relative z-10 py-14 sm:py-16 border-t border-white/[0.08] max-w-[680px] mx-auto px-4 sm:px-6">
          
          <div className="mb-8 text-center max-w-xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
              Preguntas frecuentes sobre precios de páginas web en Colombia.
            </h2>
            <p className="mt-4 text-xs sm:text-sm text-slate-400">
              Respuestas directas a las consultas más habituales de empresarios y emprendedores al cotizar su presencia digital.
            </p>
          </div>

          <div className="space-y-3">
            {faqList.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={faq.question}
                  className={`rounded-2xl transition-all duration-200 border overflow-hidden ${
                    isOpen
                      ? 'bg-white/[0.04] border-white/20'
                      : 'bg-white/[0.015] border-white/[0.08] hover:border-white/15'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  >
                    <h3 className={`text-sm sm:text-base font-bold transition-colors ${isOpen ? 'text-white' : 'text-slate-200 hover:text-white'}`}>
                      {faq.question}
                    </h3>
                    <span className="text-sm font-mono text-slate-300 shrink-0 font-bold">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/[0.04] pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </section>

        {/* ========================================================= */}
        {/* CONCLUSIÓN EDITORIAL (COMPONENTE 10 DE LA GUÍA)           */}
        {/* ========================================================= */}
        <section className="relative z-10 py-12 border-t border-white/[0.08] max-w-[680px] mx-auto px-4 sm:px-6">
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-snug">
              ¿Cuánto deberías invertir realmente en la web de tu empresa?
            </h2>
            <p className="text-base text-slate-300 leading-relaxed font-normal">
              En el mercado digital colombiano, el costo de una página web no debe medirse únicamente por lo que pagas al inicio, sino por el retorno comercial que genera. Una página web de bajo costo ($400.000 COP) que tarda más de 4 segundos en abrir o que no aparece en Google resulta mucho más costosa a largo plazo por las oportunidades de venta que deja escapar cada día.
            </p>
            <p className="text-base text-slate-300 leading-relaxed font-normal">
              Para el 90% de las empresas y profesionales en Colombia, el rango óptimo de inversión se sitúa entre <strong className="text-white font-semibold">$1.500.000 y $3.500.000 COP</strong>: un desarrollo profesional a la medida que garantice carga ultrarrápida en celulares, marcado estructurado para Google Maps, propiedad patrimonial 100% propia del código y del dominio, y cero mensualidades obligatorias de permanencia.
            </p>
          </div>
        </section>

        {/* ========================================================= */}
        {/* BIO DEL AUTOR (AUTHOR BOX DE BLOG)                        */}
        {/* ========================================================= */}
        <section className="relative z-10 py-12 border-t border-white/[0.08] max-w-[680px] mx-auto px-4 sm:px-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <img
              src="/juan-pablo-chacon.jpg"
              alt="Juan Pablo Chacón"
              width={80}
              height={80}
              className="w-20 h-20 rounded-2xl object-cover border border-white/15 shrink-0 shadow-lg"
            />
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-3">
                <div className="text-base font-bold text-white">Juan Pablo Chacón</div>
                <span className="text-xs font-mono text-slate-400">Fundador &amp; Diseñador Web en JP Studios</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Fundador de JP Studios y diseñador web especializado en sitios de alto rendimiento, optimización de velocidad de carga y posicionamiento SEO local en Colombia. Diseña y programa sitios web modernos en React 19 para empresas y profesionales que buscan convertir visitantes en clientes reales sin intermediarios ni costos mensuales forzados.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
                <a
                  href="https://wa.me/573177371301?text=Hola%20Juan%20Pablo,%20le%C3%AD%20tu%20gu%C3%ADa%20de%20precios%20y%20quiero%20hacerte%20una%20consulta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:underline flex items-center gap-1.5"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 fill-current shrink-0" />
                  <span>WhatsApp: +57 317 737 1301</span>
                </a>
                <span>•</span>
                <a href="mailto:hola@jpchacon.com" className="hover:text-white transition-colors">
                  hola@jpchacon.com
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* BLOQUE CTA FINAL EDITORIAL                                */}
        {/* ========================================================= */}
        <section className="relative z-10 py-16 sm:py-20 border-t border-white/[0.08] max-w-[680px] mx-auto px-4 sm:px-6 text-center">
          
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/10 space-y-5">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white max-w-md mx-auto leading-tight">
              ¿Quieres saber cuánto costaría la web exacta de tu negocio?
            </h2>

            <p className="text-sm sm:text-base text-slate-300 max-w-sm mx-auto leading-relaxed font-normal">
              Escríbeme por WhatsApp con una breve descripción de tu actividad comercial o tu sitio actual. Te daré una recomendación técnica sincera y una cotización cerrada sin compromiso.
            </p>

            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/573177371301?text=Hola%20Juan%20Pablo,%20le%C3%AD%20tu%20gu%C3%ADa%20de%20precios%20y%20quiero%20cotizar%20un%20sitio%20web%20para%20mi%20negocio"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white hover:bg-slate-200 text-slate-950 font-bold text-xs font-mono tracking-wide transition-all shadow-lg flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current shrink-0" />
                <span>Hablar por WhatsApp (+57 317 737 1301)</span>
              </a>

              <a
                href="/auditar-posicionamiento"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-white font-semibold text-xs font-mono border border-white/15 transition-all flex items-center justify-center gap-2"
              >
                <span>Auditar Mi Web Actual en Google</span>
                <span>→</span>
              </a>
            </div>
          </div>

        </section>

      </main>

      <FooterV2 onNavigateHome={onNavigateHome} />
    </>
  );
};
