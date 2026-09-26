import React from 'react';
import { FileCode, Award, Clock, DollarSign, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { MetaTags } from '../components/seo/MetaTags';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { useLanguage } from '../context/LanguageContext';

const easeTransition = [0.16, 1, 0.3, 1] as const;

interface TermsPageProps {
  onNavigateHome: () => void;
}

export const TermsPage: React.FC<TermsPageProps> = ({ onNavigateHome }) => {
  const { language } = useLanguage();
  const isSpanish = language === 'es';

  return (
    <div className="min-h-screen bg-[#fafaf8] text-[#111111] font-sans antialiased selection:bg-black selection:text-white flex flex-col justify-between">
      <MetaTags
        title={
          isSpanish
            ? 'Términos del Servicio | JP Studios — Juan Pablo Chacón'
            : 'Terms of Service | JP Studios — Juan Pablo Chacón'
        }
        description={
          isSpanish
            ? 'Términos y condiciones de contratación y uso de los servicios de diseño web, desarrollo en React 19 y posicionamiento SEO de JP Studios. Acuerdos claros sin letra pequeña.'
            : 'Terms and conditions for web design, React 19 development, and SEO services by JP Studios. Clear terms without fine print.'
        }
        canonicalUrl="https://jpchacon.com/terminos"
      />

      <Header />

      <main className="flex-1 pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20">
        {/* Breadcrumb Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: easeTransition }}
          className="max-w-[1040px] mx-auto px-6 sm:px-10 lg:px-12 mb-8"
        >
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs sm:text-sm text-neutral-700">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                onNavigateHome();
              }}
              className="text-neutral-700 hover:text-black font-medium transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 rounded-sm"
            >
              {isSpanish ? 'Inicio' : 'Home'}
            </a>
            <span className="text-neutral-400" aria-hidden="true">/</span>
            <span className="text-[#111111] font-semibold" aria-current="page">
              {isSpanish ? 'Términos del Servicio' : 'Terms of Service'}
            </span>
          </nav>
        </motion.div>

        {/* Editorial Header */}
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easeTransition }}
          className="max-w-[1040px] mx-auto px-6 sm:px-10 lg:px-12 pb-10 border-b border-black/[0.08]"
        >
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.08em] text-neutral-500 mb-3">
            <Award className="w-4 h-4 text-neutral-800" />
            <span>{isSpanish ? 'Transparencia Contractual • Sin Letra Pequeña' : 'Service Agreements'}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-black tracking-tight leading-[1.12] mb-4">
            {isSpanish ? 'Términos y Condiciones del Servicio' : 'Terms and Conditions of Service'}
          </h1>
          <p className="text-base sm:text-lg text-neutral-700 font-sans leading-relaxed max-w-3xl">
            {isSpanish
              ? 'En JP Studios trabajamos bajo una regla fundamental: total claridad y honestidad técnica. Aquí establecemos las bases transparentes que rigen la contratación de nuestros servicios de diseño web, desarrollo a medida y posicionamiento en Google.'
              : 'At JP Studios, we operate on a fundamental principle: complete clarity and technical honesty. Here we establish the terms governing our web design, custom development, and Google SEO services.'}
          </p>
          <div className="pt-4 flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-500">
            <span>{isSpanish ? 'Última actualización: Septiembre de 2026' : 'Last updated: September 2026'}</span>
            <span>•</span>
            <span>{isSpanish ? 'Estudio: JP Studios — Cali, Colombia' : 'Studio: JP Studios — Cali, Colombia'}</span>
          </div>
        </motion.header>

        {/* Document Body */}
        <div className="max-w-[1040px] mx-auto px-6 sm:px-10 lg:px-12 pt-10 sm:pt-14 space-y-12 text-sm sm:text-base leading-relaxed text-neutral-800">
          
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-display font-medium text-black tracking-tight">
              1. Ámbito de Aplicación y Objeto
            </h2>
            <p>
              Los presentes Términos regulan el acceso a{' '}
              <a href="https://jpchacon.com" className="font-medium text-black underline underline-offset-4">
                https://jpchacon.com
              </a>{' '}
              y la prestación de servicios profesionales de desarrollo web y consultoría digital por parte de JP Studios (liderado por Juan Pablo Chacón), con domicilio en Cali, Colombia.
            </p>
            <p>
              Nuestros servicios abarcan:
            </p>
            <ul className="space-y-2 pl-4 list-disc text-neutral-700">
              <li><strong className="text-black">Diseño UI/UX y Dirección de Arte:</strong> Prototipado, jerarquía visual y arquitectura de conversión orientada a la venta.</li>
              <li><strong className="text-black">Desarrollo Frontend & Fullstack:</strong> Programación a medida en React 19, TypeScript y Tailwind CSS, sin plantillas lentas ni constructores visuales obsoletos.</li>
              <li><strong className="text-black">Posicionamiento en Google (SEO, AEO & GEO):</strong> Datos estructurados Schema.org JSON-LD, optimización de velocidad de carga e indexación para Google Maps y motores de búsqueda con IA.</li>
              <li><strong className="text-black">Despliegue Llave en Mano:</strong> Configuración de dominio, DNS, certificados SSL y hosting en la red de borde de Cloudflare.</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-display font-medium text-black tracking-tight">
              2. Propiedad Intelectual: El Código es 100% Tuyo
            </h2>
            <div className="bg-white rounded-2xl p-6 border border-black/[0.06] shadow-sm space-y-3 font-sans">
              <div className="flex items-center gap-2 text-black font-semibold text-base">
                <FileCode className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Cero Dependencias Cautivas</span>
              </div>
              <p className="text-sm text-neutral-700">
                Una vez liquidado el valor total pactado en la propuesta comercial, <strong className="text-black">el cliente es el dueño absoluto y exclusivo de su sitio web</strong>, incluyendo el código fuente, diseño, textos entregados e imágenes de marca.
              </p>
              <p className="text-xs text-neutral-600">
                En JP Studios no secuestramos dominios, no cobramos tarifas de rescate ni forzamos contratos de mantenimiento obligatorios. Eres libre de alojar tu proyecto donde prefieras y transferir la administración técnica cuando lo desees.
              </p>
            </div>
            <p className="text-xs text-neutral-600 pt-1">
              * La marca comercial JP Studios, logotipos, metodologías de trabajo y código del sitio corporativo jpchacon.com permanecen bajo la titularidad exclusiva de Juan Pablo Chacón.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-display font-medium text-black tracking-tight">
              3. Tarifas, Cotizaciones y Esquema de Pagos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-white border border-black/[0.06] space-y-2">
                <div className="flex items-center gap-2 text-black font-medium">
                  <DollarSign className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Precios Transparentes</span>
                </div>
                <p className="text-xs text-neutral-600">
                  Las tarifas mostradas en la sección de precios son valores de referencia claros en COP (o equivalente en USD para el exterior). No existen cobros sorpresa.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-black/[0.06] space-y-2">
                <div className="flex items-center gap-2 text-black font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Esquema 50 / 50</span>
                </div>
                <p className="text-xs text-neutral-600">
                  Los proyectos estándar se inician con un anticipo del 50% para reserva de cronograma y el 50% restante contra entrega final y satisfacción del cliente.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-black/[0.06] space-y-2">
                <div className="flex items-center gap-2 text-black font-medium">
                  <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Entrega en 14 Días</span>
                </div>
                <p className="text-xs text-neutral-600">
                  El plazo estándar de entrega es de 14 días hábiles contados a partir de la recepción completa de insumos aprobados por parte del cliente.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-display font-medium text-black tracking-tight">
              4. Garantías de Rendimiento y Soporte
            </h2>
            <p>
              Respaldamos nuestro trabajo con estándares técnicos de nivel mundial:
            </p>
            <ul className="space-y-2 pl-4 list-disc text-neutral-700">
              <li>
                <strong className="text-black">Optimización PageSpeed:</strong> Entregamos páginas con arquitectura ligera que superan 90 puntos en Google PageSpeed Insights para asegurar tiempos de carga en menos de 1 segundo.
              </li>
              <li>
                <strong className="text-black">Soporte Correctivo Post-Lanzamiento:</strong> Todos los proyectos incluyen 30 días calendario de garantía técnica para solventar cualquier inconveniente técnico o ajuste atribuible al desarrollo original sin costo adicional.
              </li>
              <li>
                <strong className="text-black">Compatibilidad Cross-Browser:</strong> Verificación rigurosa en Chrome, Safari, Edge, Firefox y dispositivos móviles (iOS y Android).
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-display font-medium text-black tracking-tight">
              5. Obligaciones y Responsabilidades del Cliente
            </h2>
            <p>
              Para cumplir los tiempos de entrega acordados, el cliente se compromete a:
            </p>
            <ol className="space-y-2 pl-4 list-decimal text-neutral-700">
              <li>Suministrar oportunamente la información institucional, fotos, logotipos y requerimientos solicitados para la construcción del sitio.</li>
              <li>Garantizar que posee los derechos de uso sobre todos los contenidos, textos e imágenes suministrados a JP Studios.</li>
              <li>Realizar las revisiones y aprobaciones dentro de los plazos coordinados para no retrasar el cronograma de producción.</li>
            </ol>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-display font-medium text-black tracking-tight">
              6. Limitaciones de Responsabilidad
            </h2>
            <div className="p-5 rounded-2xl bg-neutral-100/70 border border-black/[0.06] space-y-2 text-xs sm:text-sm text-neutral-700">
              <div className="flex items-center gap-2 text-neutral-900 font-semibold">
                <ShieldAlert className="w-4 h-4 text-neutral-700 shrink-0" />
                <span>Servicios y Proveedores de Terceros</span>
              </div>
              <p>
                JP Studios no se hace responsable por interrupciones, pérdidas de acceso o fallos originados por proveedores externos ajenos a nuestro control (ej. caídas globales de servidores de Google o Meta/WhatsApp, bloqueos de registradores de dominios privados del cliente o manipulaciones indebidas de código efectuadas por terceros luego de la entrega).
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section className="space-y-3 pb-8">
            <h2 className="text-xl sm:text-2xl font-display font-medium text-black tracking-tight">
              7. Ley Aplicable y Solución de Controversias
            </h2>
            <p>
              Estos Términos y cualquier relación contractual derivada se rigen e interpretan conforme a las leyes vigentes de la República de Colombia. Cualquier diferencia o desacuerdo se resolverá primordialmente mediante concertación directa y amigable. En caso de requerirse, las partes acuerdan acudir a los centros de conciliación de la ciudad de Cali, Valle del Cauca.
            </p>
            <p className="pt-2">
              Para cualquier consulta sobre estos términos o aclaraciones contractuales, puedes escribirnos en cualquier momento a{' '}
              <a href="mailto:hola@jpchacon.com" className="font-semibold text-black underline underline-offset-2">
                hola@jpchacon.com
              </a>{' '}
              o contactar directamente por WhatsApp al <strong className="text-black">+57 317 737 1301</strong>.
            </p>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsPage;
