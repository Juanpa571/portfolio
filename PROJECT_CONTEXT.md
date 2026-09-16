# JP Studios — Contexto y Estado del Proyecto

Documento de referencia para el agente de IA. Leer este archivo al iniciar cualquier sesión de trabajo para sincronizar contexto de inmediato.

---

## 1. Identidad, Marca y Negocio
- **Nombre de Marca:** JP Studios
- **Fundador:** Juan Pablo Chacón (Creative Web Designer & Producer)
- **Dominio Oficial:** https://jpchacon.com
- **Ubicación Base:** Cali, Valle del Cauca, Colombia
- **Enfoque:** Estudio de diseño y producción web de alto impacto. Interfaces contemporáneas, fluidez de movimiento y desarrollo llave en mano para marcas y empresas.

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
4. **Cero etiquetas decorativas de IA:**
   - Se eliminaron todas las etiquetas con barras diagonales (tipo // SELECTED WORKS), sellos vacíos (● 100% INDEPENDENT) y pastillas de 'REQUERIDO' en el formulario de contacto. Mantener el diseño limpio, editorial y sin adornos vacíos.
5. **Tipografía y Jerarquía:**
   - Títulos grandes en pesos ligeros (font-light / font-normal), nunca mayúsculas sostenidas forzadas. Usar Title Case o Sentence Case natural.
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
