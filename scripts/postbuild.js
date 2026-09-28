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
    route: 'posicionar-web-en-google',
    title: 'Posicionar Web en Google: Cómo Aparecer de Primero — JP Studios',
    description: 'Guía estratégica y servicios profesionales para hacer que tu empresa aparezca en los primeros resultados orgánicos de Google y Google Maps en Colombia.',
    canonical: 'https://jpchacon.com/posicionar-web-en-google',
    breadcrumbName: 'Posicionar Web en Google',
    faqItems: [
      {
        question: '¿Cuánto cuesta posicionar una página web en Colombia?',
        answer: 'El costo varía según la escala del proyecto y la competencia del mercado. Una estructuración profesional para pequeñas y medianas empresas oscila habitualmente entre $1.500.000 y $4.000.000 COP, creando un activo comercial propio que genera prospectos permanentes a diferencia de la publicidad de pago.'
      },
      {
        question: '¿Cómo aparecer de forma orgánica sin pagar publicidad?',
        answer: 'El posicionamiento orgánico se consigue verificando el perfil en el mapa comercial, asegurando la indexación correcta en Google Search Console y publicando información útil que resuelva las necesidades de búsqueda de tu audiencia objetivo.'
      },
      {
        question: '¿Cuánto tiempo tarda un sitio en llegar a la primera página?',
        answer: 'Las optimizaciones técnicas locales suelen mostrar resultados palpables entre 30 y 60 días. Para términos de alta competencia regional o nacional, consolidar posiciones dominantes requiere habitualmente entre 3 y 6 meses de trabajo estructurado.'
      }
    ],
    h1: 'Posicionar Web en Google: Cómo Aparecer de Primero en Buscadores',
    mainHtml: `
      <article class="max-w-4xl mx-auto px-6 py-16 sm:py-24 text-left font-sans">
        <header class="mb-12 border-b border-black/10 pb-8">
          <a href="/" class="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-black/60 hover:text-black mb-6">
            ← Volver al inicio
          </a>
          <h1 class="text-3xl sm:text-5xl font-normal tracking-tight text-black leading-tight mb-6">
            Posicionar Web en Google: Cómo Aparecer de Primero en Buscadores
          </h1>
          <p class="text-lg text-black/80 leading-relaxed font-sans max-w-3xl">
            Aparecer en las primeras posiciones orgánicas de los motores de búsqueda no es cuestión de trucos temporales ni de saturar textos con palabras repetidas. En el ecosistema digital actual, Googlebot y los sistemas de inteligencia artificial premian a las plataformas construidas con código limpio, velocidad móvil insuperable y respuestas directas que resuelven con exactitud la intención del usuario.
          </p>
        </header>

        <section class="space-y-10 mb-16">
          <div class="p-6 rounded-2xl bg-black/[0.02] border border-black/[0.06]">
            <h2 class="text-xl font-medium text-black mb-3">1. Cimentar una base técnica impecable y Core Web Vitals</h2>
            <p class="text-sm text-black/75 leading-relaxed">
              Antes de competir por posicionamiento de marca, la arquitectura técnica de tu sitio debe ser intachable. Los algoritmos de búsqueda priorizan páginas que cargan en menos de dos segundos en redes móviles, no sufren saltos visuales durante la lectura y cuentan con datos estructurados Schema.org que describen la entidad comercial con total claridad para los algoritmos de indexación.
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-black/[0.02] border border-black/[0.06]">
            <h2 class="text-xl font-medium text-black mb-3">2. Estructurar contenidos para la intención de búsqueda real</h2>
            <p class="text-sm text-black/75 leading-relaxed">
              El algoritmo descarta las páginas redactadas de manera genérica. Investigamos qué dudas específicas tienen tus compradores antes de contratar y organizamos la información en respuestas directas, tablas comparativas y argumentos sólidos que retienen la atención del visitante y aumentan el tiempo de permanencia calificado.
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-black/[0.02] border border-black/[0.06]">
            <h2 class="text-xl font-medium text-black mb-3">3. Consolidar la autoridad local en Google Maps</h2>
            <p class="text-sm text-black/75 leading-relaxed">
              Para captar clientes en tu ciudad y área metropolitana, optimizamos tu ficha comercial en Google Business Profile con datos de contacto verificados, catálogo de servicios actualizado y gestión sistemática de reseñas reales. Esta es la vía más rápida para generar consultas directas por teléfono y WhatsApp sin pagar anuncios continuos.
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-black/[0.02] border border-black/[0.06]">
            <h2 class="text-xl font-medium text-black mb-3">4. Preparación para Motores de Inteligencia Artificial (AEO & GEO)</h2>
            <p class="text-sm text-black/75 leading-relaxed">
              Los nuevos hábitos de búsqueda integran asistentes conversacionales como ChatGPT, Perplexity y Gemini. Diseñamos la presencia digital de tu empresa con formatos indexables, archivos llms.txt y esquemas de confianza que facilitan que estos sistemas citen tu sitio web como fuente de referencia en su sector.
            </p>
          </div>
        </section>

        <section class="border-t border-black/10 pt-12">
          <h2 class="text-2xl font-normal tracking-tight text-black mb-6">Preguntas Frecuentes sobre Posicionamiento Web</h2>
          <div class="space-y-6">
            <div class="border-b border-black/10 pb-4">
              <h3 class="text-base font-medium text-black mb-2">¿Cuánto cuesta posicionar una página web en Colombia?</h3>
              <p class="text-sm text-black/75 leading-relaxed">
                El costo varía según la escala del proyecto y la competencia del mercado. Una estructuración profesional para pequeñas y medianas empresas oscila habitualmente entre $1.500.000 y $4.000.000 COP, creando un activo comercial propio que genera prospectos permanentes a diferencia de la publicidad de pago.
              </p>
            </div>
            <div class="border-b border-black/10 pb-4">
              <h3 class="text-base font-medium text-black mb-2">¿Cómo aparecer de forma orgánica sin pagar publicidad?</h3>
              <p class="text-sm text-black/75 leading-relaxed">
                El posicionamiento orgánico se consigue verificando el perfil en el mapa comercial, asegurando la indexación correcta en Google Search Console y publicando información útil que resuelva las necesidades de búsqueda de tu audiencia objetivo.
              </p>
            </div>
            <div class="border-b border-black/10 pb-4">
              <h3 class="text-base font-medium text-black mb-2">¿Cuánto tiempo tarda un sitio en llegar a la primera página?</h3>
              <p class="text-sm text-black/75 leading-relaxed">
                Las optimizaciones técnicas locales suelen mostrar resultados palpables entre 30 y 60 días. Para términos de alta competencia regional o nacional, consolidar posiciones dominantes requiere habitualmente entre 3 y 6 meses de trabajo estructurado.
              </p>
            </div>
          </div>
        </section>

        <footer class="mt-16 pt-8 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div class="text-xs text-black/60">
            <span>JP Studios · Juan Pablo Chacón</span> · <span>hola@jpchacon.com</span>
          </div>
          <a href="https://wa.me/573177371301?text=Hola%20Juan%20Pablo%2C%20quiero%20consultar%20sobre%20posicionamiento%20web." target="_blank" rel="noopener noreferrer" class="px-6 py-2.5 rounded-full bg-[#141517] hover:bg-black text-white text-xs font-medium inline-flex items-center gap-2">
            <span>Consultar por WhatsApp</span> ↗
          </a>
        </footer>
      </article>
    `,
  },
  {
    route: 'posicionamiento-web-cali',
    title: 'Posicionamiento Web en Cali: Cómo Aparecer de Primero en Google — JP Studios',
    description: 'Estrategias de SEO local y posicionamiento orgánico en Cali y el Valle del Cauca para liderar en Google Maps y captar clientes calificados para tu empresa.',
    canonical: 'https://jpchacon.com/posicionamiento-web-cali',
    breadcrumbName: 'Posicionamiento Web Cali',
    faqItems: [
      {
        question: '¿Por qué el SEO local es más rentable que pagar anuncios?',
        answer: 'El tráfico pagado desaparece en el momento exacto en que detienes la inversión publicitaria. El SEO local posiciona a tu negocio en el paquete de Google Maps de forma orgánica y permanente, atrayendo prospectos con alta intención de compra sin costo por clic.'
      },
      {
        question: '¿Cuánto tiempo tarda en posicionar una empresa en Cali?',
        answer: 'En mercados locales, las optimizaciones de ficha comercial y código estructurado suelen generar llamadas y solicitudes entre las primeras 4 y 8 semanas. Nichos altamente competidos toman entre 3 y 6 meses de trabajo sostenido.'
      },
      {
        question: '¿Cómo compite una empresa local contra grandes marcas?',
        answer: 'Google Maps prioriza la proximidad geográfica, la relevancia categórica y la autenticidad de las opiniones locales por encima del presupuesto publicitario. Una ficha perfectamente alineada supera a corporaciones nacionales en búsquedas de barrio y ciudad.'
      }
    ],
    h1: 'Posicionamiento Web en Cali: Cómo Aparecer de Primero en el Buscador',
    mainHtml: `
      <article class="max-w-4xl mx-auto px-6 py-16 sm:py-24 text-left font-sans">
        <header class="mb-12 border-b border-black/10 pb-8">
          <a href="/" class="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-black/60 hover:text-black mb-6">
            ← Volver al inicio
          </a>
          <h1 class="text-3xl sm:text-5xl font-normal tracking-tight text-black leading-tight mb-6">
            Posicionamiento Web en Cali: Cómo Aparecer de Primero en el Buscador
          </h1>
          <p class="text-lg text-black/80 leading-relaxed font-sans max-w-3xl">
            Para las empresas y profesionales en Santiago de Cali y el Valle del Cauca, la visibilidad en búsquedas geolocalizadas marca la diferencia entre recibir llamadas diarias de clientes o depender exclusivamente de recomendaciones tradicionales. Diseñamos plataformas web concebidas para dominar el mapa regional y los resultados orgánicos de mayor rentabilidad.
          </p>
        </header>

        <section class="space-y-10 mb-16">
          <div class="p-6 rounded-2xl bg-black/[0.02] border border-black/[0.06]">
            <h2 class="text-xl font-medium text-black mb-3">SEO Local y Google Business Profile en el Valle del Cauca</h2>
            <p class="text-sm text-black/75 leading-relaxed">
              Optimizamos cada detalle de tu ficha comercial con coordenadas exactas, horarios de atención, fotografías corporativas y citas consistentes en directorios empresariales. Cuando un usuario busca soluciones en la ciudad, Yumbo o Palmira, tu marca se posiciona en el paquete local de 3 negocios destacados.
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-black/[0.02] border border-black/[0.06]">
            <h2 class="text-xl font-medium text-black mb-3">Rendimiento móvil adaptado al usuario local</h2>
            <p class="text-sm text-black/75 leading-relaxed">
              Más del 80% de las consultas locales en Colombia se realizan desde dispositivos móviles en conexiones 4G. Desarrollamos sitios ultrarrápidos con React 19 y Tailwind CSS que cargan en fracciones de segundo, garantizando que el usuario no abandone la página por lentitud y realice el contacto inmediato por WhatsApp.
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-black/[0.02] border border-black/[0.06]">
            <h2 class="text-xl font-medium text-black mb-3">Marcado de datos Schema.org para negocios de la región</h2>
            <p class="text-sm text-black/75 leading-relaxed">
              Implementamos esquemas estructurados de LocalBusiness y ProfessionalService con geolocalización precisa, catálogo de servicios y métodos de pago aceptados. Esto permite que tanto los algoritmos tradicionales como los agentes de inteligencia artificial comprendan con exactitud tu oferta de valor.
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-black/[0.02] border border-black/[0.06]">
            <h2 class="text-xl font-medium text-black mb-3">Estrategia de autoridad y reseñas verificadas</h2>
            <p class="text-sm text-black/75 leading-relaxed">
              El algoritmo de Google Maps otorga una ponderación crítica a la autenticidad y recurrencia de las opiniones de clientes. Estructuramos protocolos simples para recolectar valoraciones positivas y enlaces locales en directorios de la región que consolidan tu reputación frente a la competencia.
            </p>
          </div>
        </section>

        <section class="border-t border-black/10 pt-12">
          <h2 class="text-2xl font-normal tracking-tight text-black mb-6">Preguntas Frecuentes sobre Posicionamiento Local</h2>
          <div class="space-y-6">
            <div class="border-b border-black/10 pb-4">
              <h3 class="text-base font-medium text-black mb-2">¿Cómo competir contra negocios establecidos en la ciudad?</h3>
              <p class="text-sm text-black/75 leading-relaxed">
                La mayoría de sitios tradicionales en el mercado local sufren de lentitud, falta de marcado Schema y perfiles desactualizados. Una plataforma moderna con Core Web Vitals perfectos y fichas verificadas supera a competidores antiguos en velocidad y relevancia geográfica.
              </p>
            </div>
            <div class="border-b border-black/10 pb-4">
              <h3 class="text-base font-medium text-black mb-2">¿En qué ciudades del departamento aplica este servicio?</h3>
              <p class="text-sm text-black/75 leading-relaxed">
                Optimizamos empresas ubicadas en Santiago de Cali, Yumbo, Palmira, Jamundí y toda el área metropolitana del Valle del Cauca, adaptando las palabras clave a las zonas comerciales de influencia directa.
              </p>
            </div>
          </div>
        </section>

        <footer class="mt-16 pt-8 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div class="text-xs text-black/60">
            <span>JP Studios · Sede en Santiago de Cali</span> · <span>+57 317 737 1301</span>
          </div>
          <a href="https://wa.me/573177371301?text=Hola%20Juan%20Pablo%2C%20quiero%20cotizar%20posicionamiento%20en%20Cali." target="_blank" rel="noopener noreferrer" class="px-6 py-2.5 rounded-full bg-[#141517] hover:bg-black text-white text-xs font-medium inline-flex items-center gap-2">
            <span>Contactar por WhatsApp</span> ↗
          </a>
        </footer>
      </article>
    `,
  },
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
        answer: 'Nuestros proyectos estándar se entregan habitualmente en un plazo de 14 días calendario, incluyendo arquitectura, diseño de interfaces, optimización SEO y pruebas de rendimiento en producción.'
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
            En JP Studios diseñamos sitios web corporativos y páginas de aterrizaje orientadas a la conversión comercial. Eliminamos los constructores visuales pesados como WordPress o Divi para construir en código limpio con React 19, TypeScript y Tailwind CSS, garantizando velocidad de carga de nivel mundial y propiedad total de tu activo digital.
          </p>
        </header>

        <section class="space-y-10 mb-16">
          <div class="p-6 rounded-2xl bg-black/[0.02] border border-black/[0.06]">
            <h2 class="text-xl font-medium text-black mb-3">Arquitectura a medida sin mensualidades ocultas</h2>
            <p class="text-sm text-black/75 leading-relaxed">
              Tu proyecto se entrega con código fuente completo, dominio a tu nombre y hospedaje en infraestructura global de Cloudflare. No cobramos mensualidades forzosas ni te atamos a licencias de plugins vulnerables: el sitio web es 100% de tu empresa desde el primer día.
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-black/[0.02] border border-black/[0.06]">
            <h2 class="text-xl font-medium text-black mb-3">Velocidad móvil certificada: 94/100 en PageSpeed</h2>
            <p class="text-sm text-black/75 leading-relaxed">
              Aplicamos compresión moderna WebP, división de código por rutas y cero bloqueo de CPU (0 ms TBT). Esto asegura una experiencia fluida e instantánea en cualquier teléfono inteligente, mejorando directamente la tasa de conversión de cada visitante en cliente potencial.
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-black/[0.02] border border-black/[0.06]">
            <h2 class="text-xl font-medium text-black mb-3">Ruta de conversión directa a WhatsApp</h2>
            <p class="text-sm text-black/75 leading-relaxed">
              En el mercado hispanohablante, la decisión de compra se concreta en canales directos. Integramos botones estratégicos de mensajería instantánea con mensajes preconfigurados según el servicio de interés, eliminando formularios complejos y acelerando el cierre de contratos comerciales.
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-black/[0.02] border border-black/[0.06]">
            <h2 class="text-xl font-medium text-black mb-3">Preparación para Inteligencia Artificial (AEO & GEO)</h2>
            <p class="text-sm text-black/75 leading-relaxed">
              Estructuramos manifiestos de IA (llms.txt) y marcado semántico que permiten a ChatGPT, Gemini y Perplexity extraer información precisa sobre los servicios y ventajas de tu empresa para recomendarlos a potenciales compradores.
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
                Nuestros proyectos estándar se entregan habitualmente en un plazo de 14 días calendario, incluyendo arquitectura, diseño de interfaces, optimización SEO y pruebas de rendimiento en producción.
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
              Nuestra empresa no vende, cede, alquila ni comparte bajo ninguna circunstancia información personal o datos de contacto a terceras partes para fines publicitarios, de telemercadeo o listas masivas de correo.
            </p>
          </div>

          <div>
            <h2 class="text-lg font-medium text-black mb-2">4. Derechos del Titular (Habeas Data)</h2>
            <p>
              De acuerdo con la legislación vigente en Colombia, el titular de los registros tiene derecho en todo momento a conocer, actualizar, rectificar y solicitar la supresión de sus datos de nuestras bases de contacto enviando una solicitud formal a hola@jpchacon.com.
            </p>
          </div>

          <div>
            <h2 class="text-lg font-medium text-black mb-2">5. Medidas de Seguridad y Cifrado</h2>
            <p>
              Implementamos protocolos modernos de protección técnica en tránsito mediante certificados SSL/TLS y cabeceras de seguridad estrictas en nuestra infraestructura de Cloudflare, evitando accesos no autorizados o interceptaciones indebidas.
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
      html = html.replace('<div id="root"></div>', `<div id="root"><main>${page.mainHtml}</main></div>`);
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
      "image": "https://jpchacon.com/og-image.png",
      "description": "Diseño de páginas web en Cali y desarrollo a medida en React 19. Sitios web ultrarrápidos para liderar en Google y convertir visitas en clientes reales.",
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
