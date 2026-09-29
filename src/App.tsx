import React, { Suspense, lazy } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import { useRouter } from './hooks/useRouter';

// Páginas de la plataforma
const V2HomePage = lazy(() =>
  import('./pages/V2HomePage').then((m) => ({ default: m.V2HomePage }))
);

const PosicionarWebGooglePage = lazy(() =>
  import('./pages/PosicionarWebGooglePage').then((m) => ({ default: m.PosicionarWebGooglePage }))
);

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

export const App: React.FC = () => {
  useSmoothScroll();
  const { currentPath, navigate } = useRouter();

  // Normalize path (strip trailing slash if not root)
  const normalizedPath = currentPath.length > 1 && currentPath.endsWith('/')
    ? currentPath.slice(0, -1)
    : currentPath;

  const isV2 = normalizedPath === '/v2';

  const isAuditoriaGoogle =
    normalizedPath === '/auditar-posicionamiento' || normalizedPath === '/auditoria-google';

  const isPosicionarWeb =
    normalizedPath === '/posicionar-web-en-google' || normalizedPath === '/posicionamiento-web-cali';

  const isDisenoWebCali = normalizedPath === '/diseno-web-cali';

  const isPrivacy =
    normalizedPath === '/privacidad' || normalizedPath === '/politica-de-privacidad';

  const isTerms =
    normalizedPath === '/terminos' ||
    normalizedPath === '/terminos-del-servicio' ||
    normalizedPath === '/terminos-y-condiciones';

  const isHome = normalizedPath === '/' || normalizedPath === '';

  const isNotFound = !isHome && !isDisenoWebCali && !isPosicionarWeb && !isPrivacy && !isTerms && !isV2 && !isAuditoriaGoogle;

  return (
    <LanguageProvider>
      <div 
        id="top" 
        className="min-h-screen bg-[#070709] text-slate-100 selection:bg-cyan-500 selection:text-black font-sans antialiased relative"
      >
        {isNotFound ? (
          <Suspense fallback={<div className="min-h-screen bg-[#070709]" />}>
            <NotFoundPage onNavigateHome={() => navigate('/')} />
          </Suspense>
        ) : isPrivacy ? (
          <Suspense fallback={<div className="min-h-screen bg-[#070709]" />}>
            <PrivacyPage onNavigateHome={() => navigate('/')} />
          </Suspense>
        ) : isTerms ? (
          <Suspense fallback={<div className="min-h-screen bg-[#070709]" />}>
            <TermsPage onNavigateHome={() => navigate('/')} />
          </Suspense>
        ) : isAuditoriaGoogle ? (
          <Suspense fallback={<div className="min-h-screen bg-[#08090C]" />}>
            <AuditoriaGooglePage />
          </Suspense>
        ) : isPosicionarWeb ? (
          <Suspense fallback={<div className="min-h-screen bg-[#070709]" />}>
            <PosicionarWebGooglePage onNavigateHome={() => navigate('/')} />
          </Suspense>
        ) : (
          <Suspense fallback={<div className="min-h-screen bg-[#070709]" />}>
            <V2HomePage />
          </Suspense>
        )}
      </div>
    </LanguageProvider>
  );
};

export default App;
