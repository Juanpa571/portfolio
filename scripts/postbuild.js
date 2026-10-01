import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

const indexHtmlPath = path.join(distDir, 'index.html');
if (!fs.existsSync(indexHtmlPath)) {
  console.error('dist/index.html does not exist.');
  process.exit(1);
}

const baseHtml = fs.readFileSync(indexHtmlPath, 'utf-8');

// Pages to generate as physical static folders for Cloudflare Pages & instant 200 OK
const pages = [
  {
    route: 'diseno-web-cali',
    title: 'Diseño de Páginas Web en Cali | Páginas Web para Vender — JP Studios',
    description: 'Diseño de páginas web en Cali y desarrollo a medida en React 19. Sitios web ultrarrápidos concebidos para vender, convertir visitas y posicionar en buscadores.',
    canonical: 'https://jpchacon.com/diseno-web-cali',
    breadcrumbName: 'Diseño Web Cali',
    faqItems: [
      {
        question: '¿Por qué React 19 supera a WordPress en conversión?',
        answer: 'Los sitios en React no cargan bases de datos pesadas ni decenas de plugins lentos en cada visita. Entregan HTML puro pre-renderizado con transiciones instantáneas, reduciendo la fricción a cero y aumentando drásticamente la retención móvil.'
      },
      {
        question: '¿Cuánto tiempo toma desarrollar una página web completa?',
        answer: 'Los proyectos estándar se entregan habitualmente en un plazo de 14 días calendario, incluyendo arquitectura, diseño de interfaces, optimización SEO y pruebas de rendimiento en producción.'
      }
    ],
    h1: 'Diseño de Páginas Web en Cali y Desarrollo a Medida en React 19',
    mainHtml: `
      <article class="max-w-4xl mx-auto px-6 py-16 sm:py-24 text-left font-sans">
        <header class="mb-12 border-b border-black/10 pb-8">
          <a href="/" class="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-black/60 hover:text-black mb-6">
            ← Volver al inicio
          </a>
          <h1 class="text-3xl sm:text-5xl font-normal tracking-tight text-black leading-tight mb-6">
            Diseño de Páginas Web en Cali y Desarrollo a Medida en React 19
          </h1>
          <p class="text-lg text-black/80 leading-relaxed font-sans max-w-3xl">
            En JP Studios diseño sitios web corporativos y páginas de aterrizaje orientadas a la conversión comercial. Elimino los constructores visuales pesados como WordPress o Divi para construir en código limpio con React 19, TypeScript y Tailwind CSS, garantizando velocidad de carga de nivel mundial y propiedad total de tu activo digital.
          </p>
        </header>

        <section class="space-y-10 mb-16">
          <div class="p-6 rounded-2xl bg-black/[0.02] border border-black/[0.06]">
            <h2 class="text-xl font-medium text-black mb-3">Arquitectura a medida sin mensualidades ocultas</h2>
            <p class="text-sm text-black/75 leading-relaxed">
              Tu proyecto se entrega con código fuente completo, dominio a tu nombre y hospedaje en infraestructura global de Cloudflare. No cobro mensualidades forzosas ni te ato a licencias de plugins vulnerables: el sitio web es 100% de tu empresa desde el primer día.
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-black/[0.02] border border-black/[0.06]">
            <h2 class="text-xl font-medium text-black mb-3">Velocidad móvil certificada: 94/100 en PageSpeed</h2>
            <p class="text-sm text-black/75 leading-relaxed">
              Aplico compresión moderna WebP, división de código por rutas y cero bloqueo de CPU (0 ms TBT). Esto asegura una experiencia fluida e instantánea en cualquier teléfono inteligente, mejorando directamente la tasa de conversión de cada visitante en cliente potencial.
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-black/[0.02] border border-black/[0.06]">
            <h2 class="text-xl font-medium text-black mb-3">Ruta de conversión directa a WhatsApp</h2>
            <p class="text-sm text-black/75 leading-relaxed">
              En el mercado hispanohablante, la decisión de compra se concreta en canales directos. Integro botones estratégicos de mensajería instantánea con mensajes preconfigurados según el servicio de interés, eliminando formularios complejos y acelerando el cierre de contratos comerciales.
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-black/[0.02] border border-black/[0.06]">
            <h2 class="text-xl font-medium text-black mb-3">Preparación para Inteligencia Artificial (AEO & GEO)</h2>
            <p class="text-sm text-black/75 leading-relaxed">
              Estructuro manifiestos de IA (llms.txt) y marcado semántico que permiten a ChatGPT, Gemini y Perplexity extraer información precisa sobre los servicios y ventajas de tu empresa para recomendarlos a potenciales compradores.
            </p>
          </div>
        </section>

        <section class="border-t border-black/10 pt-12">
          <h2 class="text-2xl font-normal tracking-tight text-black mb-6">Preguntas Frecuentes sobre Diseño Web</h2>
          <div class="space-y-6">
            <div class="border-b border-black/10 pb-4">
              <h3 class="text-base font-medium text-black mb-2">¿Por qué React 19 supera a WordPress en conversión?</h3>
              <p class="text-sm text-black/75 leading-relaxed">
                Los sitios en React no cargan bases de datos pesadas ni decenas de plugins lentos en cada visita. Entregan HTML puro pre-renderizado con transiciones instantáneas, reduciendo la fricción a cero y aumentando drásticamente la retención móvil.
              </p>
            </div>
            <div class="border-b border-black/10 pb-4">
              <h3 class="text-base font-medium text-black mb-2">¿Cuánto tiempo toma desarrollar una página web completa?</h3>
              <p class="text-sm text-black/75 leading-relaxed">
                Los proyectos estándar se entregan habitualmente en un plazo de 14 días calendario, incluyendo arquitectura, diseño de interfaces, optimización SEO y pruebas de rendimiento en producción.
              </p>
            </div>
          </div>
        </section>

        <footer class="mt-16 pt-8 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div class="text-xs text-black/60">
            <span>JP Studios · Juan Pablo Chacón</span> · <span>Cali, Colombia</span>
          </div>
          <a href="https://wa.me/573177371301?text=Hola%20Juan%20Pablo%2C%20quiero%20cotizar%20un%20sitio%20web%20a%20medida." target="_blank" rel="noopener noreferrer" class="px-6 py-2.5 rounded-full bg-[#141517] hover:bg-black text-white text-xs font-medium inline-flex items-center gap-2">
            <span>Iniciar Proyecto por WhatsApp</span> ↗
          </a>
        </footer>
      </article>
    `,
  },
  {
    route: 'privacidad',
    title: 'Política de Privacidad | JP Studios — Juan Pablo Chacón',
    description: 'Política de privacidad y tratamiento de datos personales de JP Studios conforme a la Ley 1581 de 2012 de Colombia. Transparencia, seguridad y cero comercialización de datos.',
    canonical: 'https://jpchacon.com/privacidad',
    breadcrumbName: 'Políticas de Privacidad',
    faqItems: [],
    h1: 'Política de Privacidad y Tratamiento de Datos Personales',
    mainHtml: `
      <article class="max-w-4xl mx-auto px-6 py-16 sm:py-24 text-left font-sans">
        <header class="mb-12 border-b border-black/10 pb-8">
          <a href="/" class="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-black/60 hover:text-black mb-6">
            ← Volver al inicio
          </a>
          <h1 class="text-3xl sm:text-5xl font-normal tracking-tight text-black leading-tight mb-4">
            Política de Privacidad y Tratamiento de Información
          </h1>
          <p class="text-xs font-mono text-black/50">Última actualización: Septiembre de 2026 · Conforme a Ley 1581 de 2012 (Colombia)</p>
        </header>

        <section class="space-y-8 text-sm text-black/80 leading-relaxed">
          <div>
            <h2 class="text-lg font-medium text-black mb-2">1. Responsable del Tratamiento</h2>
            <p>
              El responsable del tratamiento de la información personal recopilada a través de este sitio web es Juan Pablo Chacón, actuando bajo el nombre comercial JP Studios, con domicilio en la ciudad de Santiago de Cali, Valle del Cauca. Correo electrónico de contacto: hola@jpchacon.com.
            </p>
          </div>

          <div>
            <h2 class="text-lg font-medium text-black mb-2">2. Finalidad del Tratamiento</h2>
            <p>
              La información suministrada voluntariamente por los usuarios a través de canales de contacto directo (WhatsApp o correo electrónico) se utiliza exclusivamente para responder consultas comerciales, elaborar propuestas de diseño y desarrollo web, y gestionar la relación contractual y técnica durante el desarrollo de los proyectos solicitados.
            </p>
          </div>

          <div>
            <h2 class="text-lg font-medium text-black mb-2">3. Compromiso de No Comercialización</h2>
            <p>
              El estudio no vende, cede, alquila ni comparte bajo ninguna circunstancia información personal o datos de contacto a terceras partes para fines publicitarios, de telemercadeo o listas masivas de correo.
            </p>
          </div>

          <div>
            <h2 class="text-lg font-medium text-black mb-2">4. Derechos del Titular (Habeas Data)</h2>
            <p>
              De acuerdo con la legislación vigente en Colombia, el titular de los registros tiene derecho en todo momento a conocer, actualizar, rectificar y solicitar la supresión de sus datos de las bases de contacto enviando una solicitud formal a hola@jpchacon.com.
            </p>
          </div>

          <div>
            <h2 class="text-lg font-medium text-black mb-2">5. Medidas de Seguridad y Cifrado</h2>
            <p>
              Se implementan protocolos modernos de protección técnica en tránsito mediante certificados SSL/TLS y cabeceras de seguridad estrictas en la infraestructura de Cloudflare, evitando accesos no autorizados o interceptaciones indebidas.
            </p>
          </div>

          <div>
            <h2 class="text-lg font-medium text-black mb-2">6. Periodo de Conservación</h2>
            <p>
              Las comunicaciones comerciales se conservan únicamente durante el tiempo estrictamente necesario para cumplir las finalidades del servicio acordado o los requerimientos legales y contables aplicables.
            </p>
          </div>
        </section>

        <footer class="mt-16 pt-8 border-t border-black/10 text-xs text-black/60">
          <span>Juan Pablo Chacón · Santiago de Cali</span> · <span>hola@jpchacon.com</span>
        </footer>
      </article>
    `,
  },
  {
    route: 'terminos',
    title: 'Términos del Servicio | JP Studios — Juan Pablo Chacón',
    description: 'Términos y condiciones de contratación y uso de los servicios de diseño web, desarrollo en React 19 y posicionamiento SEO de JP Studios. Acuerdos claros sin letra pequeña.',
    canonical: 'https://jpchacon.com/terminos',
    breadcrumbName: 'Términos del Servicio',
    faqItems: [],
    h1: 'Términos y Condiciones del Servicio',
    mainHtml: `
      <article class="max-w-4xl mx-auto px-6 py-16 sm:py-24 text-left font-sans">
        <header class="mb-12 border-b border-black/10 pb-8">
          <a href="/" class="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-black/60 hover:text-black mb-6">
            ← Volver al inicio
          </a>
          <h1 class="text-3xl sm:text-5xl font-normal tracking-tight text-black leading-tight mb-4">
            Términos y Condiciones del Servicio
          </h1>
          <p class="text-xs font-mono text-black/50">Última actualización: Septiembre de 2026 · Acuerdos transparentes sin letra pequeña</p>
        </header>

        <section class="space-y-8 text-sm text-black/80 leading-relaxed">
          <div>
            <h2 class="text-lg font-medium text-black mb-2">1. Alcance de los Servicios</h2>
            <p>
              JP Studios ofrece servicios profesionales de diseño de interfaces web, desarrollo frontend a medida en React 19, optimización de velocidad Core Web Vitals, estructuración para motores de búsqueda (SEO) y visibilidad en modelos de inteligencia artificial (GEO/AEO). Cada proyecto se rige por una cotización detallada previa que define entregables, especificaciones técnicas y plazos acordados.
            </p>
          </div>

          <div>
            <h2 class="text-lg font-medium text-black mb-2">2. Propiedad Intelectual y Código Fuente</h2>
            <p>
              Una vez completado el pago total pactado en la cotización, todos los derechos sobre el diseño final, contenidos personalizados y código fuente desarrollado se transfieren íntegramente al cliente. El cliente tiene plena libertad para alojar, modificar o migrar su plataforma digital sin restricciones.
            </p>
          </div>

          <div>
            <h2 class="text-lg font-medium text-black mb-2">3. Esquema de Pagos y Entregas</h2>
            <p>
              Los proyectos se ejecutan habitualmente bajo un esquema de 50% de anticipo para iniciar la arquitectura y desarrollo técnico, y el 50% restante contra entrega final y publicación en producción tras aprobación del cliente.
            </p>
          </div>

          <div>
            <h2 class="text-lg font-medium text-black mb-2">4. Garantía Técnica</h2>
            <p>
              Todos los proyectos desarrollados cuentan con 30 días calendario de soporte post-lanzamiento para corregir fallos técnicos o inconsistencias respecto a lo pactado en la propuesta inicial, garantizando que el sitio web opere con total estabilidad.
            </p>
          </div>
        </section>

        <footer class="mt-16 pt-8 border-t border-black/10 text-xs text-black/60">
          <span>JP Studios · Santiago de Cali, Colombia</span> · <span>hola@jpchacon.com</span>
        </footer>
      </article>
    `,
  },
  {
    route: 'auditar-posicionamiento',
    title: 'Auditor de Visibilidad en Google | Diagnóstico de Posicionamiento — JP Studios',
    description: 'Herramienta de auditoría empírica para comprobar si tu página web está indexada en Google, figura en los primeros resultados locales o es invisible para tus clientes.',
    canonical: 'https://jpchacon.com/auditar-posicionamiento',
    breadcrumbName: 'Auditoría en Google',
    faqItems: [
      {
        question: '¿Cómo sé si mi página web está indexada en Google?',
        answer: 'Realizando una búsqueda con el operador site:tuempresa.com en Google. Si Google no arroja resultados, el sitio no está en el índice y ningún cliente podrá encontrarte de forma orgánica.'
      },
      {
        question: '¿Por qué mi empresa no aparece en los primeros lugares de Google Maps?',
        answer: 'Generalmente se debe a falta de marcado semántico Schema.org (LocalBusiness), inconsistencias en el perfil de Google Business (NAP) o bajas métricas de rendimiento en Core Web Vitals.'
      }
    ],
    h1: 'Auditor de Visibilidad en Google y Diagnóstico de Posicionamiento Local',
    mainHtml: `
      <article class="max-w-4xl mx-auto px-6 py-16 sm:py-24 text-left font-sans">
        <header class="mb-12 border-b border-black/10 pb-8">
          <a href="/" class="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-black/60 hover:text-black mb-6">
            ← Volver al inicio
          </a>
          <h1 class="text-3xl sm:text-5xl font-normal tracking-tight text-black leading-tight mb-4">
            Auditor de Visibilidad en Google & Diagnóstico Web
          </h1>
          <p class="text-sm font-mono text-black/70">Herramienta empírica oficial para evaluar indexación, competencia local en Cali y Core Web Vitals</p>
        </header>

        <section class="space-y-8 text-sm text-black/80 leading-relaxed">
          <div>
            <h2 class="text-lg font-medium text-black mb-2">1. Prueba de Existencia en Googlebot (site:)</h2>
            <p>
              Comprueba de forma directa si el motor de búsqueda de Google tiene rastreada e indexada tu URL principal y páginas internas. Sin indexación activa, el tráfico orgánico es cero.
            </p>
          </div>
          <div>
            <h2 class="text-lg font-medium text-black mb-2">2. Competencia en Google Maps y Búsqueda Local</h2>
            <p>
              Evalúa si tu negocio compite en el paquete de 3 resultados destacados de Google Maps en Cali o si la cuota de mercado la capturan competidores con mejor marcado.
            </p>
          </div>
          <div>
            <h2 class="text-lg font-medium text-black mb-2">3. Marcado de Datos Estructurados (Schema.org)</h2>
            <p>
              Verifica si tu sitio provee entidades ricas a motores de búsqueda y asistentes de Inteligencia Artificial (ChatGPT, Gemini, Perplexity).
            </p>
          </div>
          <div>
            <h2 class="text-lg font-medium text-black mb-2">4. Velocidad Móvil en Google PageSpeed</h2>
            <p>
              Mide el First Contentful Paint y la interactividad en dispositivos móviles para evitar pérdidas de conversión por tiempos de carga lentos.
            </p>
          </div>
        </section>

        <footer class="mt-16 pt-8 border-t border-black/10 text-xs text-black/60">
          <span>JP Studios · Santiago de Cali, Colombia</span> · <span>hola@jpchacon.com</span>
        </footer>
      </article>
    `,
  },
  {
    route: 'cuanto-cuesta-una-pagina-web-en-colombia',
    title: '¿Cuánto Cuesta una Página Web en Colombia? Precios Reales 2026 — JP Studios',
    description: 'Tarifas 2026 sobre cuánto cuesta una página web en Colombia. Precios de dominio, hosting y desarrollo a medida, sin costos ocultos ni mensualidades forzadas.',
    canonical: 'https://jpchacon.com/cuanto-cuesta-una-pagina-web-en-colombia',
    breadcrumbName: 'Precios Páginas Web Colombia',
    faqItems: [
      {
        question: '¿Cuánto cobran por hacer una página web en Colombia?',
        answer: 'En Colombia, el costo promedio de una página web profesional oscila entre $1.500.000 y $4.000.000 COP para desarrollos a la medida optimizados para convertir y posicionar en Google. Existen plantillas básicas desde $400.000 COP y plataformas empresariales complejas que superan los $10.000.000 COP.'
      },
      {
        question: '¿Cuánto vale el hosting y el dominio en Colombia al año?',
        answer: 'Un dominio comercial (.com o .co) cuesta entre $60.000 y $120.000 COP anuales. El hosting tradicional para WordPress ronda entre $250.000 y $700.000 COP al año. En JP Studios, al construir en React 19 serverless en Cloudflare, el costo de hospedaje es de $0 COP al mes.'
      },
      {
        question: '¿Es obligatorio pagar mensualidades para que mi página web funcione?',
        answer: 'No. En JP Studios tu página web se entrega con código limpio y arquitectura autosuficiente: es 100% de tu empresa y no requiere pagos mensuales obligatorios para seguir activa. No cobramos tarifas forzadas de permanencia técnica ni licencias recurrentes.'
      },
      {
        question: '¿Qué incluye el servicio de mantenimiento y optimización mensual?',
        answer: 'Ofrecemos un plan opcional de crecimiento continuo para empresas que buscan un aliado técnico permanente. Incluye monitoreo continuo en Google Search Console y Maps, creación de nuevas secciones comerciales, optimizaciones de velocidad y soporte prioritario directo por WhatsApp.'
      },
      {
        question: '¿Por qué hay páginas de $400.000 y otras de más de $3.000.000?',
        answer: 'La diferencia reside en la tecnología y el retorno comercial. Una web económica de $400.000 COP suele ser una plantilla prefabricada que tarda más de 5 segundos en celulares y no posiciona en Google. Una web a medida de más de $2.000.000 COP carga en menos de 2 segundos, tiene marcado Schema.org local y convierte visitas en clientes reales.'
      }
    ],
    h1: '¿Cuánto cuesta una página web en Colombia? Precios reales y guía completa 2026.',
    mainHtml: `
      <article class="max-w-4xl mx-auto px-6 py-16 sm:py-24 text-left font-sans">
        <header class="mb-12 border-b border-black/10 pb-8">
          <a href="/" class="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-black/60 hover:text-black mb-6">
            ← Volver al inicio
          </a>
          <h1 class="text-3xl sm:text-5xl font-extrabold tracking-tight text-black leading-tight mb-4">
            ¿Cuánto cuesta una página web en Colombia? Precios reales y guía completa 2026.
          </h1>
          <p class="text-base sm:text-lg text-black/75 leading-relaxed">
            Guía financiera y técnica actualizada para empresarios y profesionales independientes. Analizamos tarifas de mercado, costos de infraestructura y cómo evitar sobrecostos recurrentes al contratar desarrollo web.
          </p>
          <div class="mt-4 pt-4 border-t border-black/10 text-xs font-mono text-black/60 flex flex-wrap gap-4">
            <span>Por Juan Pablo Chacón</span>
            <span>•</span>
            <span>Actualizado: 2026</span>
            <span>•</span>
            <span>Lectura técnica: 8 min</span>
          </div>
        </header>

        <section class="space-y-12 text-sm sm:text-base text-black/80 leading-relaxed">
          <div>
            <h2 class="text-2xl font-bold text-black mb-4">¿Qué factores determinan el costo de una página web?</h2>
            <p class="mb-4">
              El presupuesto de un sitio web profesional no se define al azar ni por metros cuadrados digitales; responde a cinco componentes técnicos esenciales que determinan la velocidad de carga, la seguridad de las transacciones y la visibilidad orgánica en buscadores:
            </p>
            <div class="space-y-4">
              <h3 class="text-lg font-semibold text-black">1. Nombre de dominio (.com o .co)</h3>
              <p>La dirección exclusiva de tu empresa en internet. Un dominio comercial internacional (.com) o territorial (.co) tiene una inversión estándar de $60.000 a $120.000 COP anuales. Es fundamental que el registro quede siempre a nombre del titular de la empresa y no de la agencia intermediaria.</p>

              <h3 class="text-lg font-semibold text-black">2. Servidor de alojamiento (Hosting)</h3>
              <p>La infraestructura física donde residen los archivos. Mientras un hosting compartido tradicional en cPanel oscila entre $250.000 y $700.000 COP al año y suele saturarse ante picos de tráfico, las arquitecturas serverless modernas alojadas en redes perimetrales globales permiten servir sitios ultrarrápidos con costo de hospedaje mensual de $0 COP.</p>

              <h3 class="text-lg font-semibold text-black">3. Certificado de seguridad SSL (HTTPS)</h3>
              <p>Protocolo indispensable para encriptar los datos transmitidos entre el navegador del visitante y el servidor. Garantiza el candado de seguridad obligatorio para no ser penalizado por los navegadores modernos y proteger la privacidad de los formularios.</p>

              <h3 class="text-lg font-semibold text-black">4. Diseño de interfaz (UI/UX) y Programación</h3>
              <p>El núcleo del desarrollo. La diferencia entre adaptar una plantilla prefabricada con decenas de scripts innecesarios y programar código limpio a medida en React 19 optimizado para cumplir con los estándares de rendimiento establecidos por <a href="https://pagespeed.web.dev/" target="_blank" rel="noopener noreferrer" class="underline text-black font-medium">Google PageSpeed Insights</a>.</p>
            </div>
          </div>

          <div>
            <h2 class="text-2xl font-bold text-black mb-4">Precios del mercado por tipo de página web (2026)</h2>
            <p class="mb-4">
              En el mercado actual existen rangos tarifarios claramente diferenciados según el propósito comercial y la tecnología empleada:
            </p>
            <div class="overflow-x-auto my-6 border border-black/10 rounded-xl">
              <table class="w-full text-left text-sm">
                <thead class="bg-black/5 font-semibold text-black border-b border-black/10">
                  <tr>
                    <th class="p-3">Tipo de Sitio Web</th>
                    <th class="p-3">Rango de Inversión</th>
                    <th class="p-3">Tiempo de Entrega</th>
                    <th class="p-3">Perfil Recomendado</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-black/10">
                  <tr>
                    <td class="p-3 font-medium">Plantilla básica WordPress / Creadores</td>
                    <td class="p-3">$400.000 – $900.000 COP</td>
                    <td class="p-3">5 a 10 días</td>
                    <td class="p-3">Proyectos personales con presupuesto muy limitado.</td>
                  </tr>
                  <tr>
                    <td class="p-3 font-medium">Landing Page One-Page de Alta Conversión</td>
                    <td class="p-3">$1.200.000 – $1.800.000 COP</td>
                    <td class="p-3">10 a 14 días</td>
                    <td class="p-3">Campañas publicitarias, servicios específicos y venta directa.</td>
                  </tr>
                  <tr>
                    <td class="p-3 font-medium">Sitio Web Corporativo Multi-Página</td>
                    <td class="p-3">$2.200.000 – $3.800.000 COP</td>
                    <td class="p-3">14 a 21 días</td>
                    <td class="p-3">Empresas consolidadas que requieren posicionamiento local en Google.</td>
                  </tr>
                  <tr>
                    <td class="p-3 font-medium">Catálogo Interactivo / Plataforma a Medida</td>
                    <td class="p-3">$4.000.000 a más de $8.000.000 COP</td>
                    <td class="p-3">21 a 45 días</td>
                    <td class="p-3">Empresas con amplio inventario o integraciones complejas.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 class="text-2xl font-bold text-black mb-4">Costos recurrentes que debes prever en tu presupuesto anual</h2>
            <p class="mb-4">
              Un error frecuente al contratar desarrollo web es evaluar únicamente el costo inicial de lanzamiento sin proyectar los gastos de mantenimiento técnico que exige la operación en el tiempo:
            </p>
            <div class="space-y-3">
              <p><strong>• Renovación de Dominio y Hospedaje:</strong> Entre $60.000 y $800.000 COP anuales según el proveedor y el tipo de servidor contratado.</p>
              <p><strong>• Soporte Preventivo y Seguridad:</strong> Actualización periódica de dependencias, copias de seguridad de respaldo y monitoreo de disponibilidad.</p>
              <p><strong>• Licenciamiento de Herramientas:</strong> Constructores visuales y plugins comerciales que cobran suscripciones anuales en dólares para mantener sus parches de seguridad activos.</p>
            </div>
          </div>

          <div>
            <h2 class="text-2xl font-bold text-black mb-4">Checklist: 5 preguntas clave antes de contratar un diseñador o agencia</h2>
            <p class="mb-4">Antes de realizar cualquier anticipo o firmar un contrato comercial, valida estos cinco criterios indispensables de transparencia:</p>
            <ol class="list-decimal pl-5 space-y-2">
              <li><strong>¿El dominio y el hosting quedarán registrados a nombre de mi empresa?</strong> Exige ser el titular legal exclusivo de tus credenciales de acceso.</li>
              <li><strong>¿Cuánto tardará la página web en cargar en celulares con conexión móvil 4G?</strong> Debe certificar tiempos inferiores a 2.5 segundos según métricas Core Web Vitals.</li>
              <li><strong>¿El proyecto incluye marcado estructurado Schema.org para Google Maps?</strong> Clave para aparecer en el paquete local y ser citado por motores de IA.</li>
              <li><strong>¿Existen mensualidades obligatorias forzadas para que la web siga activa?</strong> Asegúrate de no quedar atrapado en contratos de permanencia no deseados.</li>
              <li><strong>¿Me entregarán el código fuente completo al finalizar el desarrollo?</strong> El activo digital debe pertenecer 100% a tu negocio desde el día de entrega.</li>
            </ol>
          </div>

          <div>
            <h2 class="text-2xl font-bold text-black mb-4">Tarifas y planes claros en JP Studios</h2>
            <p class="mb-4">
              En JP Studios trabajamos bajo un esquema de presupuesto cerrado llave en mano, garantizando entrega en 14 a 21 días sin mensualidades forzadas:
            </p>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
              <div class="p-5 border border-black/10 rounded-xl bg-black/[0.02]">
                <h3 class="font-bold text-black text-lg mb-1">Web One-Page Pro</h3>
                <div class="text-2xl font-extrabold text-black mb-2">$ 1.500.000 <span class="text-xs font-normal">COP</span></div>
                <p class="text-xs text-black/70">Diseño directo para captar clientes en celulares con alta velocidad de conversión.</p>
              </div>
              <div class="p-5 border border-black/20 rounded-xl bg-black/[0.04]">
                <h3 class="font-bold text-black text-lg mb-1">Web Corporativa SEO</h3>
                <div class="text-2xl font-extrabold text-black mb-2">$ 2.500.000 <span class="text-xs font-normal">COP</span></div>
                <p class="text-xs text-black/70">Múltiples secciones, marcado Schema.org local y optimización para liderar en Google.</p>
              </div>
              <div class="p-5 border border-black/10 rounded-xl bg-black/[0.02]">
                <h3 class="font-bold text-black text-lg mb-1">Catálogo Comercial</h3>
                <div class="text-2xl font-extrabold text-black mb-2">$ 3.500.000 <span class="text-xs font-normal">COP</span></div>
                <p class="text-xs text-black/70">Filtro instantáneo de productos y rutas de cotización directa por WhatsApp y correo.</p>
              </div>
            </div>
          </div>
        </section>

        <footer class="mt-16 pt-8 border-t border-black/10 text-xs text-black/60 flex flex-col sm:flex-row justify-between gap-4">
          <span>JP Studios · Juan Pablo Chacón · Santiago de Cali</span>
          <span>hola@jpchacon.com · WhatsApp: +57 317 737 1301</span>
        </footer>
      </article>
    `,
  },
];

for (const page of pages) {
  const targetDir = path.join(distDir, page.route);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  let html = baseHtml;
  // Replace Title
  html = html.replace(/<title>[^<]*<\/title>/i, `<title>${page.title}</title>`);

  // Replace meta description
  html = html.replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="description" content="${page.description}" />`
  );

  // Replace og:title & twitter:title
  html = html.replace(
    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:title" content="${page.title}" />`
  );
  html = html.replace(
    /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="twitter:title" content="${page.title}" />`
  );

  // Replace og:description & twitter:description
  html = html.replace(
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:description" content="${page.description}" />`
  );
  html = html.replace(
    /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="twitter:description" content="${page.description}" />`
  );

  // Replace canonical & og:url
  html = html.replace(
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/i,
    `<link rel="canonical" href="${page.canonical}" />`
  );
  html = html.replace(
    /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:url" content="${page.canonical}" />`
  );

  // Inject or replace dedicated semantic static content for this subpage
  if (page.mainHtml) {
    if (html.includes('<main>')) {
      html = html.replace(/<main>[\s\S]*?<\/main>/i, `<main>${page.mainHtml}</main>`);
    } else {
      html = html.replace(/<div id="root">[\s\S]*?<\/div>/i, `<div id="root"><main>${page.mainHtml}</main></div>`);
    }
  }

  // Generate page-specific Schema.org JSON-LD (WebPage + tailored FAQPage matching visible content)
  const schemaGraph = [
    {
      "@type": "WebSite",
      "@id": "https://jpchacon.com/#website",
      "url": "https://jpchacon.com/",
      "name": "JP Studios",
      "alternateName": ["Juan Pablo Chacón", "Páginas Web Cali", "JP Studios Web Design", "jpchacon"],
      "description": "Estudio de diseño y desarrollo de páginas web en Cali. Sitios web ultrarrápidos para vender, aparecer en Google Maps y motores de Inteligencia Artificial (AEO & GEO).",
      "dateModified": "2026-09-26",
      "publisher": {
        "@id": "https://jpchacon.com/#organization"
      },
      "inLanguage": ["es-CO", "es", "en"]
    },
    {
      "@type": ["LocalBusiness", "ProfessionalService", "Organization"],
      "@id": "https://jpchacon.com/#organization",
      "name": "JP Studios",
      "legalName": "JP Studios",
      "alternateName": [
        "Páginas Web Cali - JP Studios",
        "Juan Pablo Chacón Studio",
        "JP Studios Colombia",
        "JP Studios Diseño Web"
      ],
      "url": "https://jpchacon.com/",
      "logo": "https://jpchacon.com/logo-horizontal.png",
      "image": "https://jpchacon.com/og-image-v3.png",
      "description": "Diseño de páginas web en Cali y desarrollo a medida en React 19. Sitios ultrarrápidos para liderar en Google y multiplicar tus ventas.",
      "telephone": "+573177371301",
      "email": "hola@jpchacon.com",
      "priceRange": "$1.500.000 - $5.000.000 COP",
      "currenciesAccepted": "COP, USD",
      "paymentAccepted": "Cash, Credit Card, Bank Transfer, Nequi, Bancolombia",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Cali, Valle del Cauca",
        "addressLocality": "Cali",
        "addressRegion": "Valle del Cauca",
        "postalCode": "760001",
        "addressCountry": "CO"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 3.4516,
        "longitude": -76.5320
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Cali",
          "sameAs": "https://es.wikipedia.org/wiki/Cali"
        },
        {
          "@type": "Country",
          "name": "Colombia"
        }
      ],
      "sameAs": [
        "https://www.wikidata.org/wiki/Q51103",
        "https://es.wikipedia.org/wiki/Cali",
        "https://www.linkedin.com/in/jpchaconm/",
        "https://github.com/juanpablochacon"
      ]
    },
    {
      "@type": "WebPage",
      "@id": `${page.canonical}#webpage`,
      "url": page.canonical,
      "name": page.title,
      "description": page.description,
      "isPartOf": {
        "@id": "https://jpchacon.com/#website"
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Inicio",
            "item": "https://jpchacon.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": page.breadcrumbName || page.title,
            "item": page.canonical
          }
        ]
      }
    }
  ];

  if (page.faqItems && page.faqItems.length > 0) {
    schemaGraph.push({
      "@type": "FAQPage",
      "@id": `${page.canonical}#faq`,
      "mainEntity": page.faqItems.map((item) => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer
        }
      }))
    });
  }

  const customJsonLd = `<script type="application/ld+json">\n${JSON.stringify({
    "@context": "https://schema.org",
    "@graph": schemaGraph
  }, null, 2)}\n    </script>`;

  html = html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/i, customJsonLd);

  const targetFile = path.join(targetDir, 'index.html');
  fs.writeFileSync(targetFile, html, 'utf-8');
  console.log(`Generated: ${page.route}/index.html`);

  const flatTargetFile = path.join(distDir, `${page.route}.html`);
  fs.writeFileSync(flatTargetFile, html, 'utf-8');
  console.log(`Generated: ${page.route}.html`);
}

// Ensure .well-known/ai-catalog.json, ard.json and ai-catalog.json are present in dist
const publicDir = path.resolve(__dirname, '../public');
const wellKnownDistDir = path.join(distDir, '.well-known');
if (!fs.existsSync(wellKnownDistDir)) {
  fs.mkdirSync(wellKnownDistDir, { recursive: true });
}

for (const name of ['ai-catalog.json', 'ard.json']) {
  const srcWellKnown = path.join(publicDir, '.well-known', name);
  if (fs.existsSync(srcWellKnown)) {
    fs.copyFileSync(srcWellKnown, path.join(wellKnownDistDir, name));
    console.log(`Copied: dist/.well-known/${name}`);
  }

  const srcRoot = path.join(publicDir, name);
  if (fs.existsSync(srcRoot)) {
    fs.copyFileSync(srcRoot, path.join(distDir, name));
    console.log(`Copied: dist/${name}`);
  }
}
