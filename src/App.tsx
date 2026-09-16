import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { Intro } from './components/sections/Intro';
import { VelocityTicker } from './components/sections/VelocityTicker';
import { Services } from './components/sections/Services';
import { Process } from './components/sections/Process';
import { ProjectList } from './components/sections/ProjectList';
import { Faq } from './components/sections/Faq';
import { ContactForm } from './components/sections/ContactForm';
import { Footer } from './components/layout/Footer';
import { CustomCursor } from './components/ui/CustomCursor';
import { Preloader } from './components/ui/Preloader';
import { useSmoothScroll } from './hooks/useSmoothScroll';

export const App: React.FC = () => {
  useSmoothScroll();

  return (
    <LanguageProvider>
      <div id="top" className="min-h-screen bg-[#fafaf8] text-[#1a1a1e] font-sans antialiased selection:bg-black selection:text-white relative">
        <Preloader />
        <CustomCursor />
        <Header />
        <main>
          <Hero />
          <Intro />
          <VelocityTicker />
          <Services />
          <Process />
          <ProjectList />
          <Faq />
          <ContactForm />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;
