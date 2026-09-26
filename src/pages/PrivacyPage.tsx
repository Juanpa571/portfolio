import React from 'react';
import { ShieldCheck, Lock, Eye, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { MetaTags } from '../components/seo/MetaTags';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { useLanguage } from '../context/LanguageContext';

const easeTransition = [0.16, 1, 0.3, 1] as const;

interface PrivacyPageProps {
  onNavigateHome: () => void;
}

export const PrivacyPage: React.FC<PrivacyPageProps> = ({ onNavigateHome }) => {
  const { language } = useLanguage();
  const isSpanish = language === 'es';

  return (
    <div className="min-h-screen bg-[#fafaf8] text-[#111111] font-sans antialiased selection:bg-black selection:text-white flex flex-col justify-between">
      <MetaTags
        title={
          isSpanish
            ? 'Política de Privacidad | JP Studios — Juan Pablo Chacón'
            : 'Privacy Policy | JP Studios — Juan Pablo Chacón'
        }
        description={
          isSpanish
            ? 'Política de privacidad y tratamiento de datos personales de JP Studios conforme a la Ley 1581 de 2012 de Colombia. Transparencia, seguridad y cero comercialización de datos.'
            : 'Privacy policy and personal data processing of JP Studios. Transparency, security, and zero data selling.'
        }
        canonicalUrl="https://jpchacon.com/privacidad"
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
              {isSpanish ? 'Política de Privacidad' : 'Privacy Policy'}
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
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>{isSpanish ? 'Habeas Data • Ley 1581 de 2012' : 'Data Privacy Standards'}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-black tracking-tight leading-[1.12] mb-4">
            {isSpanish ? 'Política de Privacidad y Tratamiento de Datos' : 'Privacy Policy and Data Protection'}
          </h1>
          <p className="text-base sm:text-lg text-neutral-700 font-sans leading-relaxed max-w-3xl">
            {isSpanish
              ? 'En JP Studios respetamos tu privacidad y protegemos tus datos personales con honestidad, seguridad y estricto apego a la legislación colombiana (Ley Estatutaria 1581 de 2012 y Decreto 1377 de 2013). Cero spam y cero comercialización de información.'
              : 'At JP Studios, we respect your privacy and protect your personal information with strict security and transparency. Zero spam and zero data reselling.'}
          </p>
          <div className="pt-4 flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-500">
            <span>{isSpanish ? 'Última actualización: Septiembre de 2026' : 'Last updated: September 2026'}</span>
            <span>•</span>
            <span>{isSpanish ? 'Responsable: Juan Pablo Chacón — JP Studios' : 'Responsible: Juan Pablo Chacón — JP Studios'}</span>
          </div>
        </motion.header>

        {/* Document Body */}
        <div className="max-w-[1040px] mx-auto px-6 sm:px-10 lg:px-12 pt-10 sm:pt-14 space-y-12 text-sm sm:text-base leading-relaxed text-neutral-800">
          
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-display font-medium text-black tracking-tight">
              1. Identificación del Responsable del Tratamiento
            </h2>
            <p>
              El responsable del tratamiento de los datos personales recopilados a través del sitio web{' '}
              <a href="https://jpchacon.com" className="font-medium text-black underline underline-offset-4">
                https://jpchacon.com
              </a>{' '}
              es:
            </p>
            <div className="bg-white rounded-2xl p-6 border border-black/[0.06] shadow-sm space-y-2 text-xs sm:text-sm font-sans">
              <p><strong className="text-black font-semibold">Titular:</strong> Juan Pablo Chacón</p>
              <p><strong className="text-black font-semibold">Marca comercial:</strong> JP Studios (Estudio de Diseño y Desarrollo Web)</p>
              <p><strong className="text-black font-semibold">Ubicación y domicilio:</strong> Cali, Valle del Cauca, Colombia</p>
              <p><strong className="text-black font-semibold">Correo electrónico oficial:</strong>{' '}
                <a href="mailto:hola@jpchacon.com" className="text-black underline underline-offset-2">hola@jpchacon.com</a>
              </p>
              <p><strong className="text-black font-semibold">Línea de contacto oficial / WhatsApp:</strong> +57 317 737 1301</p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-display font-medium text-black tracking-tight">
              2. Datos Personales que Recopilamos
            </h2>
            <p>
              Recopilamos únicamente los datos necesarios para brindar asesoría técnica y presupuestos de desarrollo web:
            </p>
            <ul className="space-y-2 pl-4 list-disc text-neutral-700">
              <li>
                <strong className="text-black">Datos de contacto voluntario:</strong> Nombre, dirección de correo electrónico, número de teléfono/WhatsApp, sector económico y características del proyecto solicitadas al completar el formulario de diagnóstico comercial o al iniciar comunicación directa por WhatsApp.
              </li>
              <li>
                <strong className="text-black">Datos técnicos y métricas de navegación:</strong> Dirección IP seudonimizada, tipo de navegador, sistema operativo, resolución de pantalla, páginas consultadas y tiempos de carga. Estos datos se procesan de manera agregada y anónima con fines analíticos y de rendimiento.
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-display font-medium text-black tracking-tight">
              3. Finalidad del Tratamiento de los Datos
            </h2>
            <p>Los datos personales facilitados por el titular son utilizados exclusivamente para:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-white border border-black/[0.06] space-y-2">
                <div className="flex items-center gap-2 text-black font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Cotización y Diagnóstico Web</span>
                </div>
                <p className="text-xs text-neutral-600">
                  Elaborar presupuestos a medida, analizar la presencia digital del cliente y responder consultas comerciales en menos de 24 horas.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-black/[0.06] space-y-2">
                <div className="flex items-center gap-2 text-black font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Gestión del Proyecto</span>
                </div>
                <p className="text-xs text-neutral-600">
                  Mantener la comunicación operativa durante las fases de diseño, desarrollo en React 19, integración SEO y entrega en 14 días.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-black/[0.06] space-y-2">
                <div className="flex items-center gap-2 text-black font-medium">
                  <Lock className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Cero Spam y Cero Reventa</span>
                </div>
                <p className="text-xs text-neutral-600">
                  Nunca vendemos, alquilamos ni cedemos tus datos a bases de datos de terceros ni agencias de publicidad masiva.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-black/[0.06] space-y-2">
                <div className="flex items-center gap-2 text-black font-medium">
                  <Eye className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Telemetría y Rendimiento</span>
                </div>
                <p className="text-xs text-neutral-600">
                  Medir velocidad de carga real (Core Web Vitals) para mantener la experiencia de usuario ultrarrápida.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-display font-medium text-black tracking-tight">
              4. Derechos del Titular (Habeas Data)
            </h2>
            <p>
              De conformidad con el artículo 8 de la Ley 1581 de 2012, como titular de los datos personales tienes derecho a:
            </p>
            <ol className="space-y-2 pl-4 list-decimal text-neutral-700">
              <li>Conocer, actualizar y rectificar tus datos personales frente al responsable del tratamiento.</li>
              <li>Solicitar prueba de la autorización otorgada para el tratamiento de tus datos.</li>
              <li>Ser informado sobre el uso que se ha dado a tu información.</li>
              <li>Revocar la autorización o solicitar la supresión de tus datos en cualquier momento cuando consideres que no se respetan los principios legales.</li>
              <li>Acceder de forma gratuita a tus datos personales recolectados.</li>
            </ol>
            <p className="pt-2">
              Para ejercer cualquiera de estos derechos, basta con enviar una solicitud indicando tu nombre completo y requerimiento al correo electrónico{' '}
              <a href="mailto:hola@jpchacon.com" className="font-semibold text-black underline underline-offset-2">
                hola@jpchacon.com
              </a>. Atenderemos tu petición en un plazo máximo de cinco (5) días hábiles.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-display font-medium text-black tracking-tight">
              5. Seguridad y Almacenamiento Seguro
            </h2>
            <p>
              Implementamos medidas de seguridad técnicas y administrativas para evitar la pérdida, alteración o acceso no autorizado a los datos:
            </p>
            <ul className="space-y-2 pl-4 list-disc text-neutral-700">
              <li>Cifrado de extremo a extremo mediante protocolo HTTPS / TLS en toda la plataforma a través de la red global de Cloudflare.</li>
              <li>Almacenamiento seguro de credenciales y variables de entorno conforme a estándares de ingeniería sin exponer datos en el cliente.</li>
              <li>Protección y firewall perimetral contra ataques de denegación de servicio (DDoS) y bots maliciosos.</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-display font-medium text-black tracking-tight">
              6. Cookies y Herramientas Analíticas de Terceros
            </h2>
            <p>
              Este sitio utiliza herramientas de telemetría y análisis de uso para mejorar continuamente el diseño y la velocidad:
            </p>
            <ul className="space-y-2 pl-4 list-disc text-neutral-700">
              <li>
                <strong className="text-black">Google Analytics 4 (GA4):</strong> Mide métricas agregadas de tráfico, fuentes de referencia y conversiones de contacto. Las direcciones IP se anonimizan automáticamente.
              </li>
              <li>
                <strong className="text-black">Microsoft Clarity:</strong> Registra mapas de calor y patrones anónimos de interacción para identificar fricciones visuales o problemas de usabilidad.
              </li>
            </ul>
            <p className="pt-2">
              Puedes configurar tu navegador web para rechazar o eliminar cookies en cualquier momento sin afectar las funciones esenciales del sitio web.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3 pb-8">
            <h2 className="text-xl sm:text-2xl font-display font-medium text-black tracking-tight">
              7. Actualizaciones de la Política de Privacidad
            </h2>
            <p>
              JP Studios se reserva el derecho de modificar esta política en cualquier momento para adaptarla a modificaciones legislativas o mejoras técnicas en la plataforma. La versión vigente siempre estará accesible públicamente a través de esta dirección web ({' '}
              <a href="https://jpchacon.com/privacidad" className="text-black underline underline-offset-2">
                https://jpchacon.com/privacidad
              </a>
              ).
            </p>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPage;
