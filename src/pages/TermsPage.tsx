import React from 'react';
import { FileCode, Award, Clock, DollarSign, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { MetaTags } from '../components/seo/MetaTags';
import { HeaderV2 } from '../components/v2/HeaderV2';
import { FooterV2 } from '../components/v2/FooterV2';

const easeTransition = [0.16, 1, 0.3, 1] as const;

interface TermsPageProps {
  onNavigateHome: () => void;
}

export const TermsPage: React.FC<TermsPageProps> = ({ onNavigateHome }) => {
  return (
    <div className="min-h-screen bg-[#070709] text-slate-100 font-sans antialiased selection:bg-cyan-500 selection:text-black flex flex-col justify-between">
      <MetaTags
        title="Términos del Servicio | JP Studios — Juan Pablo Chacón"
        description="Términos y condiciones de contratación y uso de los servicios de diseño web, desarrollo en React 19 y posicionamiento SEO de JP Studios. Acuerdos claros sin letra pequeña."
        canonicalUrl="https://jpchacon.com/terminos"
      />

      <HeaderV2 onNavigateHome={onNavigateHome} />

      <main className="flex-1 pt-28 sm:pt-32 lg:pt-36 pb-20 sm:pb-24">
        {/* Navegación Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: easeTransition }}
          className="max-w-[1040px] mx-auto px-6 sm:px-10 lg:px-12 mb-8"
        >
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs sm:text-sm text-slate-400">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                onNavigateHome();
              }}
              className="text-slate-400 hover:text-white font-medium transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-sm"
            >
              Inicio
            </a>
            <span className="text-slate-600" aria-hidden="true">/</span>
            <span className="text-cyan-400 font-semibold" aria-current="page">
              Términos del Servicio
            </span>
          </nav>
        </motion.div>

        {/* Encabezado Editorial */}
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easeTransition }}
          className="max-w-[1040px] mx-auto px-6 sm:px-10 lg:px-12 pb-10 border-b border-white/[0.08]"
        >
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.08em] text-slate-400 mb-3">
            <Award className="w-4 h-4 text-cyan-400" />
            <span>Transparencia Contractual • Sin Letra Pequeña</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.12] mb-4">
            Términos y Condiciones del Servicio
          </h1>
          <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed max-w-3xl">
            En JP Studios opero bajo una regla fundamental: total claridad y honestidad técnica. Aquí establezco las bases transparentes que rigen la contratación de mis servicios de diseño web, desarrollo a medida y posicionamiento en Google.
          </p>
          <div className="pt-4 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500">
            <span>Última actualización: Septiembre de 2026</span>
            <span>•</span>
            <span>Estudio: JP Studios — Cali, Colombia</span>
          </div>
        </motion.header>

        {/* Cuerpo del Documento Legal */}
        <div className="max-w-[1040px] mx-auto px-6 sm:px-10 lg:px-12 pt-10 sm:pt-14 space-y-12 text-sm sm:text-base leading-relaxed text-slate-300">
          
          {/* Sección 1 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              1. Ámbito de Aplicación y Objeto
            </h2>
            <p>
              Los presentes Términos regulan el acceso a{' '}
              <a href="https://jpchacon.com" className="font-medium text-cyan-400 hover:text-cyan-300 underline underline-offset-4">
                https://jpchacon.com
              </a>{' '}
              y la prestación de servicios profesionales de desarrollo web y consultoría digital por parte de JP Studios (liderado por Juan Pablo Chacón), con domicilio en Cali, Colombia.
            </p>
            <p>
              Los servicios profesionales abarcan:
            </p>
            <ul className="space-y-2 pl-4 list-disc text-slate-300">
              <li><strong className="text-white">Diseño UI/UX y Dirección de Arte:</strong> Prototipado, jerarquía visual y arquitectura de conversión orientada a la venta.</li>
              <li><strong className="text-white">Desarrollo Frontend & Fullstack:</strong> Programación a medida en React 19, TypeScript y Tailwind CSS, sin plantillas lentas ni constructores visuales obsoletos.</li>
              <li><strong className="text-white">Posicionamiento en Google (SEO, AEO & GEO):</strong> Datos estructurados Schema.org JSON-LD, optimización de velocidad de carga e indexación para Google Maps y motores de búsqueda con IA.</li>
              <li><strong className="text-white">Despliegue Llave en Mano:</strong> Configuración de dominio, DNS, certificados SSL y hosting en la red de borde de Cloudflare.</li>
            </ul>
          </section>

          {/* Sección 2 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              2. Propiedad Intelectual: El Código es 100% Tuyo
            </h2>
            <div className="bg-white/[0.025] rounded-2xl p-6 border border-white/[0.08] shadow-sm space-y-3 font-sans">
              <div className="flex items-center gap-2 text-white font-semibold text-base">
                <FileCode className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Cero Dependencias Cautivas</span>
              </div>
              <p className="text-sm text-slate-300">
                Una vez liquidado el valor total pactado en la propuesta comercial, <strong className="text-white">el cliente es el dueño absoluto y exclusivo de su sitio web</strong>, incluyendo el código fuente, diseño, textos entregados e imágenes de marca.
              </p>
              <p className="text-xs text-slate-400">
                En JP Studios no secuestramos dominios, no cobramos tarifas de rescate ni forzamos contratos de mantenimiento obligatorios. Eres libre de alojar tu proyecto donde prefieras y transferir la administración técnica cuando lo desees.
              </p>
            </div>
            <p className="text-xs text-slate-500 pt-1">
              * La marca comercial JP Studios, logotipos, metodologías de trabajo y código del sitio corporativo jpchacon.com permanecen bajo la titularidad exclusiva de Juan Pablo Chacón.
            </p>
          </section>

          {/* Sección 3 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              3. Tarifas, Cotizaciones y Esquema de Pagos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-white/[0.025] border border-white/[0.08] space-y-2">
                <div className="flex items-center gap-2 text-white font-medium">
                  <DollarSign className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Precios Transparentes</span>
                </div>
                <p className="text-xs text-slate-400">
                  Las tarifas mostradas en la sección de precios son valores de referencia claros en COP (o equivalente en USD para el exterior). No existen cobros sorpresa.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.025] border border-white/[0.08] space-y-2">
                <div className="flex items-center gap-2 text-white font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Esquema 50 / 50</span>
                </div>
                <p className="text-xs text-slate-400">
                  Los proyectos estándar se inician con un anticipo del 50% para reserva de cronograma y el 50% restante contra entrega final y satisfacción del cliente.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.025] border border-white/[0.08] space-y-2">
                <div className="flex items-center gap-2 text-white font-medium">
                  <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Entrega en 14 Días</span>
                </div>
                <p className="text-xs text-slate-400">
                  El plazo estándar de entrega es de 14 días hábiles contados a partir de la recepción completa de insumos aprobados por parte del cliente.
                </p>
              </div>
            </div>
          </section>

          {/* Sección 4 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              4. Garantías de Rendimiento y Soporte
            </h2>
            <p>
              Respaldo cada desarrollo con estándares técnicos de nivel mundial:
            </p>
            <ul className="space-y-2 pl-4 list-disc text-slate-300">
              <li>
                <strong className="text-white">Optimización PageSpeed:</strong> Entregamos páginas con arquitectura ligera que superan 90 puntos en Google PageSpeed Insights para asegurar tiempos de carga en menos de 1 segundo.
              </li>
              <li>
                <strong className="text-white">Soporte Correctivo Post-Lanzamiento:</strong> Todos los proyectos incluyen 30 días calendario de garantía técnica para solventar cualquier inconveniente técnico o ajuste atribuible al desarrollo original sin costo adicional.
              </li>
              <li>
                <strong className="text-white">Compatibilidad Cross-Browser:</strong> Verificación rigurosa en Chrome, Safari, Edge, Firefox y dispositivos móviles (iOS y Android).
              </li>
            </ul>
          </section>

          {/* Sección 5 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              5. Obligaciones y Responsabilidades del Cliente
            </h2>
            <p>
              Para cumplir los tiempos de entrega acordados, el cliente se compromete a:
            </p>
            <ol className="space-y-2 pl-4 list-decimal text-slate-300">
              <li>Suministrar oportunamente la información institucional, fotos, logotipos y requerimientos solicitados para la construcción del sitio.</li>
              <li>Garantizar que posee los derechos de uso sobre todos los contenidos, textos e imágenes suministrados a JP Studios.</li>
              <li>Realizar las revisiones y aprobaciones dentro de los plazos coordinados para no retrasar el cronograma de producción.</li>
            </ol>
          </section>

          {/* Sección 6 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              6. Limitaciones de Responsabilidad
            </h2>
            <div className="p-5 rounded-2xl bg-white/[0.025] border border-white/[0.08] space-y-2 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2 text-slate-200 font-semibold">
                <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Servicios y Proveedores de Terceros</span>
              </div>
              <p className="text-slate-400">
                JP Studios no se hace responsable por interrupciones, pérdidas de acceso o fallos originados por proveedores externos ajenos a mi control (ej. caídas globales de servidores de Google o Meta/WhatsApp, bloqueos de registradores de dominios privados del cliente o manipulaciones indebidas de código efectuadas por terceros luego de la entrega).
              </p>
            </div>
          </section>

          {/* Sección 7 */}
          <section className="space-y-3 pb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              7. Ley Aplicable y Solución de Controversias
            </h2>
            <p>
              Estos Términos y cualquier relación contractual derivada se rigen e interpretan conforme a las leyes vigentes de la República de Colombia. Cualquier diferencia o desacuerdo se resolverá primordialmente mediante concertación directa y amigable. En caso de requerirse, las partes acuerdan acudir a los centros de conciliación de la ciudad de Cali, Valle del Cauca.
            </p>
            <p className="pt-2">
              Para cualquier consulta sobre estos términos o aclaraciones contractuales, puedes contactarme en cualquier momento a{' '}
              <a href="mailto:hola@jpchacon.com" className="font-semibold text-cyan-400 hover:text-cyan-300 underline underline-offset-2">
                hola@jpchacon.com
              </a>{' '}
              o contactar directamente por WhatsApp al <strong className="text-white">+57 317 737 1301</strong>.
            </p>
          </section>

        </div>
      </main>

      <FooterV2 onNavigateHome={onNavigateHome} />
    </div>
  );
};

export default TermsPage;
