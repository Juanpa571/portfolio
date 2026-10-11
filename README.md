# JP Studios — Portfolio & Commercial Engine

Sitio web oficial y motor de conversión comercial de **Juan Pablo Chacón** ([jpchacon.com](https://jpchacon.com)).
Especializado en diseño de páginas web corporativas de alto rendimiento, optimización de velocidad (<2.5s) y posicionamiento en Google Search, Google Maps y motores de Inteligencia Artificial (AEO / GEO).

---

## 🛠️ Stack Tecnológico

- **Frontend:** React 19 + TypeScript + Vite 8
- **Estilos:** Tailwind CSS v4 (Compilador Oxide)
- **Física & Animaciones:** Motion (`motion/react`)
- **Tipografía:** Plus Jakarta Sans & Geist Sans (Self-hosted, WOFF2 con display: optional)
- **Despliegue & CDN:** Cloudflare Pages (conectado al repositorio de GitHub)
- **Pre-renderizado Estático:** Pipeline personalizado en `scripts/postbuild.js` que genera HTML físico para cada ruta SEO (`/diseno-web-cali`, `/cuanto-cuesta-una-pagina-web-en-colombia`, etc.).

---

## 📁 Estructura del Repositorio

```text
portfolio/
├── public/                 # Activos estáticos públicos (favicons, WebP, robots, sitemap, llms.txt)
│   ├── .well-known/        # Manifiestos AI/ARD
│   ├── fonts/              # Fuentes WOFF2 locales de alta velocidad
│   └── projects/           # Mockups y capturas de casos de estudio
├── scripts/                # Herramientas de build (postbuild.js para generación estática SSG)
├── src/
│   ├── components/
│   │   ├── seo/            # MetaTags dinámicos y Schema JSON-LD
│   │   ├── ui/             # Componentes base desacoplados (ErrorBoundary, Tilt, GlowingEdge)
│   │   └── v2/             # Secciones de conversión de la arquitectura V2
│   ├── config/             # Configuración central del sitio (site.ts)
│   ├── hooks/              # Hooks personalizados (useRouter, useSmoothScroll)
│   ├── pages/              # Vistas principales y páginas de aterrizaje SEO
│   ├── utils/              # Funciones auxiliares de analytics y resaltado de texto
│   ├── App.tsx             # Enrutador cliente y shell de la aplicación
│   └── main.tsx            # Punto de entrada con hidratación y observadores
├── index.html              # Shell HTML con CSS crítico y Schema.org estructurado
├── vite.config.ts          # Configuración de empaquetado de producción
└── package.json
```

---

## 🚀 Comandos de Desarrollo

```bash
# Servidor de desarrollo local
npm run dev

# Verificación de tipos TypeScript
npx tsc --noEmit

# Compilación de producción + SSG postbuild
npm run build

# Vista previa de la build de producción
npm run preview
```

---

## 🔒 Directrices de Despliegue

1. Todos los cambios se desarrollan y verifican localmente antes de desplegar.
2. La compilación debe pasar limpiamente (`npm run build`).
3. El despliegue a producción en Cloudflare Pages se dispara exclusivamente al hacer push a la rama `main` en GitHub con autorización previa.
