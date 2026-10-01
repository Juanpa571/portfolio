import React, { Suspense, lazy } from 'react';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import { useRouter } from './hooks/useRouter';
import { ErrorBoundary } from './components/ui/ErrorBoundary';
import { V2HomePage } from './pages/V2HomePage';

// Subpáginas con carga diferida (lazy) para mantener el bundle ligero
const PrivacyPage = lazy(() =>
  import('./pages/PrivacyPage').then((m) => ({ default: m.PrivacyPage }))
);

const TermsPage = lazy(() =>
  import('./pages/TermsPage').then((m) => ({ default: m.TermsPage }))
);

const NotFoundPage = lazy(() =>
  import('./pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage }))
);

const AuditoriaGooglePage = lazy(() =>
  import('./pages/AuditoriaGooglePage').then((m) => ({ default: m.AuditoriaGooglePage }))
);

const CuantoCuestaPaginaWebColombiaPage = lazy(() =>
  import('./pages/CuantoCuestaPaginaWebColombiaPage').then((m) => ({ default: m.CuantoCuestaPaginaWebColombiaPage }))
);

export const App: React.FC = () => {
  useSmoothScroll();
  const { currentPath, navigate } = useRouter();

  // Normalizar ruta (eliminar barra inclinada final si no es raíz)
  const normalizedPath = currentPath.length > 1 && currentPath.endsWith('/')
    ? currentPath.slice(0, -1)
    : currentPath;

  const isPrivacy =
    normalizedPath === '/privacidad' || normalizedPath === '/politica-de-privacidad';

  const isTerms =
    normalizedPath === '/terminos' ||
    normalizedPath === '/terminos-del-servicio' ||
    normalizedPath === '/terminos-y-condiciones';

  const isAuditoria =
    normalizedPath === '/auditar-posicionamiento' ||
    normalizedPath === '/auditoria' ||
    normalizedPath === '/auditar-empresa';

  const isPrecios =
    normalizedPath === '/cuanto-cuesta-una-pagina-web-en-colombia' ||
    normalizedPath === '/precios-paginas-web-colombia' ||
    normalizedPath === '/precios';

  const isHome =
    normalizedPath === '/' ||
    normalizedPath === '' ||
    normalizedPath === '/v2' ||
    normalizedPath === '/diseno-web-cali';

  const isNotFound = !isHome && !isPrivacy && !isTerms && !isAuditoria && !isPrecios;

  return (
    <ErrorBoundary>
      <div 
        id="top" 
        className="min-h-screen bg-[#070709] text-slate-100 selection:bg-cyan-500 selection:text-black font-sans antialiased relative"
      >
        {isNotFound ? (
          <Suspense fallback={<div className="min-h-screen bg-[#070709]" />}>
            <NotFoundPage onNavigateHome={() => navigate('/')} />
          </Suspense>
        ) : isPrecios ? (
          <Suspense fallback={<div className="min-h-screen bg-[#070709]" />}>
            <CuantoCuestaPaginaWebColombiaPage onNavigateHome={() => navigate('/')} />
          </Suspense>
        ) : isAuditoria ? (
          <Suspense fallback={<div className="min-h-screen bg-[#070709]" />}>
            <AuditoriaGooglePage onNavigateHome={() => navigate('/')} />
          </Suspense>
        ) : isPrivacy ? (
          <Suspense fallback={<div className="min-h-screen bg-[#070709]" />}>
            <PrivacyPage onNavigateHome={() => navigate('/')} />
          </Suspense>
        ) : isTerms ? (
          <Suspense fallback={<div className="min-h-screen bg-[#070709]" />}>
            <TermsPage onNavigateHome={() => navigate('/')} />
          </Suspense>
        ) : (
          /* Home Page V2 (Renderizado directo instantáneo sin saltos) */
          <V2HomePage />
        )}
      </div>
    </ErrorBoundary>
  );
};

export default App;
