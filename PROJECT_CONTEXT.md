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
- **Despliegue:** GitHub (main) sincronizado con Netlify en https://jpchacon.com/

---

## 3. Decisiones de Diseño y Reglas Inamovibles (Aprobadas por el Usuario)
1. **La Cinta (VelocityTicker.tsx):**
   - El usuario aprobó explícitamente mantener la cinta de velocidad tal como está. **NO BORRAR NI SIMPLIFICAR**. Tiene personalidad y encaja con la web.
2. **El Ampersand (&) en cursiva en el Hero:**
   - El contraste tipográfico del & en cursiva en el Hero está expresamente aprobado. **MANTENERLO**.
3. **Problema de fuentes cortadas al 100% de zoom:**
   - **PROHIBIDO GASTAR TIEMPO O TOKENS INTENTANDO ARREGLARLO.** El usuario dio la orden explícita de dejarlo así y no tocarlo más.
4. **Cero etiquetas decorativas de IA:**
   - Se eliminaron todas las etiquetas con barras diagonales (tipo // SELECTED WORKS), sellos vacíos (● 100% INDEPENDENT) y pastillas de 'REQUERIDO' en el formulario de contacto. Mantener el diseño limpio, editorial y sin adornos vacíos.
5. **Tipografía y Jerarquía:**
   - Títulos grandes en pesos ligeros (font-light / font-normal), nunca mayúsculas sostenidas forzadas. Usar Title Case o Sentence Case natural.
   - Fondos en colores sólidos oscuros elegantes (ej. #141517 / #1C1D20), sin grano ni ruido artificial SVG.

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
