import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

(window as any).__BUILD_ID__ = '2026-09-29T17:28:00';

const rootElement = document.getElementById('root')!;

// Si existe contenido estático pre-renderizado, hidratar para preservar nodos del DOM y fijar LCP < 2.5s
if (rootElement.hasChildNodes() && !rootElement.querySelector('svg[aria-label="Cargando JP Studios"]')) {
  hydrateRoot(
    rootElement,
    <StrictMode>
      <App />
    </StrictMode>,
  );
} else {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
