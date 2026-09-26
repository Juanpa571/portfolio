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
    description: 'Aprende cómo hacer que tu empresa aparezca en Google y Google Maps. Servicios de SEO para empresas y posicionamiento web para captar clientes en Colombia.',
    canonical: 'https://jpchacon.com/posicionar-web-en-google',
  },
  {
    route: 'posicionamiento-web-cali',
    title: 'Posicionamiento Web en Cali: Cómo Aparecer de Primero en Google — JP Studios',
    description: 'Aprende cómo hacer que tu empresa aparezca en Google y Google Maps. Servicios de SEO para empresas y posicionamiento web para captar clientes en Colombia.',
    canonical: 'https://jpchacon.com/posicionamiento-web-cali',
  },
  {
    route: 'diseno-web-cali',
    title: 'Diseño de Páginas Web en Cali | Páginas Web para Vender — JP Studios',
    description: 'Diseño de páginas web en Cali y desarrollo a medida en React 19. Sitios web ultrarrápidos para liderar en Google y convertir visitas en clientes reales.',
    canonical: 'https://jpchacon.com/diseno-web-cali',
  },
  {
    route: 'privacidad',
    title: 'Política de Privacidad | JP Studios — Juan Pablo Chacón',
    description: 'Política de privacidad y tratamiento de datos personales de JP Studios conforme a la Ley 1581 de 2012 de Colombia. Transparencia, seguridad y cero comercialización de datos.',
    canonical: 'https://jpchacon.com/privacidad',
  },
  {
    route: 'terminos',
    title: 'Términos del Servicio | JP Studios — Juan Pablo Chacón',
    description: 'Términos y condiciones de contratación y uso de los servicios de diseño web, desarrollo en React 19 y posicionamiento SEO de JP Studios. Acuerdos claros sin letra pequeña.',
    canonical: 'https://jpchacon.com/terminos',
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
