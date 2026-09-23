import React, { Suspense, lazy } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { Intro } from './components/sections/Intro';
import { Services } from './components/sections/Services';
import { PricingGuide } from './components/sections/PricingGuide';
import { Process } from './components/sections/Process';
// import { ProjectList } from './components/sections/ProjectList';
import { Faq } from './components/sections/Faq';
import { ContactForm } from './components/sections/ContactForm';
import { Footer } from './components/layout/Footer';
import { CustomCursor } from './components/ui/CustomCursor';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import { useRouter } from './hooks/useRouter';
import { MetaTags } from './components/seo/MetaTags';

const PosicionarWebGooglePage = lazy(() =>
  import('./pages/PosicionarWebGooglePage').then((m) => ({ default: m.PosicionarWebGooglePage }))
);

const NotFoundPage = lazy(() =>
  import('./pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage }))
);

export const App: React.FC = () => {
  useSmoothScroll();
  const { currentPath, navigate } = useRouter();

  // Normalize path (strip trailing slash if not root)
  const normalizedPath = currentPath.length > 1 && currentPath.endsWith('/')
    ? currentPath.slice(0, -1)
    : currentPath;

  const isPosicionarWeb =
    normalizedPath === '/posicionar-web-en-google' || normalizedPath === '/posicionamiento-web-cali';

  const isDisenoWebCali = normalizedPath === '/diseno-web-cali';

  const isHome = normalizedPath === '/' || normalizedPath === '';

  const isNotFound = !isHome && !isDisenoWebCali && !isPosicionarWeb;

  return (
    <LanguageProvider>
      <div id="top" className="min-h-screen bg-[#fafaf8] text-[#1a1a1e] font-sans antialiased selection:bg-black selection:text-white relative">
        <CustomCursor />
        {isNotFound ? (
          <Suspense fallback={<div className="min-h-screen bg-[#fafaf8]" />}>
            <NotFoundPage onNavigateHome={() => navigate('/')} />
          </Suspense>
        ) : isPosicionarWeb ? (
          <Suspense fallback={<div className="min-h-screen bg-[#fafaf8]" />}>
            <PosicionarWebGooglePage onNavigateHome={() => navigate('/')} />
          </Suspense>
        ) : (
          <>
            <MetaTags
              title={
                isDisenoWebCali
                  ? "Diseño Web Cali | Páginas Web para Vender — JP Studios"
                  : "Diseño de Páginas Web en Cali | Páginas Web para Vender — JP Studios"
              }
              description="Diseño de páginas web en Cali y desarrollo a medida en React 19. Sitios web ultrarrápidos para liderar en Google y convertir visitas en clientes reales."
              canonicalUrl={
                isDisenoWebCali
                  ? "https://jpchacon.com/diseno-web-cali"
                  : "https://jpchacon.com/"
              }
            />
            <Header />
            <main>
              <Hero />
              <Intro />
              <Services />
              <PricingGuide />
              <Process />
              {/* ProjectList temporalmente oculto hasta integrar casos de estudio reales */}
              <Faq />
              <ContactForm />
            </main>
            <Footer />
          </>
        )}
      </div>
    </LanguageProvider>
  );
};

export default App;
