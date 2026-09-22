# JP Studios — Contexto y Estado del Proyecto

Documento de referencia para el agente de IA. Leer este archivo al iniciar cualquier sesión de trabajo para sincronizar contexto de inmediato.

---

## 1. Identidad, Marca y Negocio
- **Nombre de Marca:** JP Studios
- **Fundador:** Juan Pablo Chacón (Product Engineer & Conversion Web Developer)
- **Dominio Oficial:** https://jpchacon.com
- **Ubicación Base:** Cali, Valle del Cauca, Colombia
- **Enfoque Principal:** Estudio Web de Alto Rendimiento, Conversión y Visibilidad en Motores de Búsqueda e IA (AEO, GEO y Local SEO).
- **Documento Rector del Modelo de Negocio:** Ver [BUSINESS_MANIFESTO.md](file:///d:/projects/docs/BUSINESS_MANIFESTO.md) para el desglose íntegro de la tesis comercial, los 3 pilares de servicio, estructura de precios (Setup inicial + Retenedor mensual MRR) y compromisos éticos anti-humo.
- **Pivote Estratégico (Septiembre 2026):** Se descarta conscientemente el término "diseño de autor". No nos vendemos como artistas gráficos, sino como un estudio técnico enfocado en resultados comerciales tangibles: captación de clientes cualificados, tiempos de carga instantáneos (React 19 + Tailwind) y datos estructurados (Schema.org JSON-LD + Answer Engine Optimization) para que negocios locales y empresas sean citados y recomendados por Google Maps, ChatGPT, Gemini y Perplexity.

---

## 2. Stack Técnico y Arquitectura
- **Framework:** React 19 + TypeScript + Vite
- **Estilos:** Tailwind CSS v4 + variables de tema personalizadas
- **Animaciones:** motion/react (Framer Motion)
- **Despliegue:** GitHub (main) sincronizado con Cloudflare Pages en https://jpchacon.com/

---

## 3. Decisiones de Diseño y Reglas Inamovibles (Aprobadas por el Usuario)
1. **La Cinta (VelocityTicker.tsx):**
   - El usuario aprobó explícitamente mantener la cinta de velocidad tal como está. **NO BORRAR NI SIMPLIFICAR**. Tiene personalidad y encaja con la web.
2. **El Ampersand (&) en cursiva en el Hero:**
   - El contraste tipográfico del & en cursiva en el Hero está expresamente aprobado. **MANTENERLO**.
3. **Baneo Total de Neue Montreal y Estandarización de Geist Sans (Aprobado por el Usuario):**
   - Se eliminó y baneó por completo `Neue Montreal` en toda la página web (cabeceras, títulos monumentales, subtítulos, preguntas de FAQ, servicios y cuerpo de texto).
   - La tipografía oficial y definitiva de todo el sitio web es **Geist Sans** (`--font-display` y `--font-sans`), respaldada por **Inter** y **Geist Mono** para datos técnicos.
   - Esto erradica al 100% el aplanado y corte superior de letras minúsculas (`o`, `e`, `a`, `c`, `s`, `n`, etc.) en Windows DirectWrite / 96 DPI, conservando una estética suiza contemporánea de máxima nitidez y precisión técnica.
4. **Etiquetas Funcionales y Cero Relleno Inútil:**
   - Se eliminaron las etiquetas decorativas absurdas con barras diagonales (tipo `// SELECTED WORKS`) o sellos vacíos (`● 100% INDEPENDENT`). Se permiten y fomentan micro-etiquetas funcionales en Geist Mono o Geist Sans que aporten contexto semántico a los motores de búsqueda e IA (AEO).
5. **Tipografía, Jerarquía y Conversión:**
   - La tipografía base es **Geist Sans** (`--font-display` y `--font-sans`).
   - Mantener Title Case o Sentence Case natural (evitar mayúsculas sostenidas forzadas tipo ALL CAPS).
   - Libertad para utilizar pesos tipográficos con propósito de jerarquía y conversión (`font-normal` 400, `font-medium` 500, `font-semibold` 600) para destacar palabras clave de búsqueda y guiar la vista hacia los llamados a la acción, manteniendo un estilo tipográfico sobrio, limpio y minimalista.
   - Fondos en colores sólidos oscuros elegantes (ej. #141517 / #1C1D20), sin grano ni ruido artificial SVG.
6. **Retrato del Hero (`hero-portrait.webp`):**
   - El Hero utiliza el diseño de **Bisel Flotante 3D (Concepto 1)** con marco biselado esculpido de cristal esmerilado suave, viñeteado inferior para fundir la base nocturna y paralaje reactivo 3D con GSAP en desktop. En móvil, escala con presencia a 320px manteniendo la identidad asimétrica. Expresamente aprobado por el usuario.
7. **Protocolo Estricto de Desarrollo y Despliegue (Staging Local Primero):**
   - **PROHIBIDO subir cambios directamente a `main` o desplegar a producción sin aprobación previa del usuario.**
   - Todo cambio, nueva sección, ajuste visual o refactor debe desarrollarse siempre en una rama local aislada (ej. `dev` o `feature/...`) y revisarse primero en el servidor de desarrollo local (`http://localhost:5173/`).
   - Únicamente tras recibir el **visto bueno y aprobación explícita del usuario**, se hace merge a `main` y push a GitHub para lanzar a Netlify/Cloudflare.
8. **Estructura de Proyectos en Portafolio:**
   - **01 Hábitat:** Caso de estudio principal interactivo con demo/modal.
   - **02 Soon...:** Espacio reservado para el proyecto del cliente (`Tu Proyecto Aquí` / `Your Project Here`). Fila intencionalmente **no interactiva** (cursor default, sin hover preview flotante, sin clic y sin abrir modal/panel) para actuar como una invitación sutil y elegante a trabajar juntos.

---

## 4. Estado de SEO y Google (Completado)
- **Google Search Console:** Verificado mediante la etiqueta <meta name="google-site-verification" content="51pXW0ExW6iZxgUQePccQ8ofTHNYuOOHvFMlKh31fYA" />.
- **Sitemap & Robots:** public/sitemap.xml activo y public/robots.txt apuntando a https://jpchacon.com/sitemap.xml.
- **Datos Estructurados:** JSON-LD Schema.org completo en index.html con entidades WebSite, ProfessionalService y Person (Juan Pablo Chacón).
- **Google Business Profile:** Ficha creada y verificada para JP Studios como Website designer en Cali, Colombia y áreas de servicio internacionales, con logo oficial google-business-logo.png (800x800 px) y enlace a https://jpchacon.com.
- **Indexación:** Solicitud de rastreo enviada a Googlebot para refrescar los textos en caché de la SERP.

---

## 5. Estructura de Componentes Clave (src/components/)
- Hero.tsx: Pantalla principal de impacto editorial.
- VelocityTicker.tsx: Cinta tipográfica en movimiento.
- Intro.tsx: Declaración de intenciones y presentación del estudio.
- ProjectList.tsx & ProjectModal.tsx: Galería de casos de estudio y vista en detalle modal.
- Services.tsx: Bloques de servicios y arquitectura de entrega.
- ContactForm.tsx: Formulario de contacto directo sin micro-labels.
- Footer.tsx: Cierre con enlaces y créditos de autoría.
- LanguageToggle.tsx: Alternador de idiomas (ES / EN).
