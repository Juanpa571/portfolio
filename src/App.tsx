import React from 'react';
import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { Intro } from './components/sections/Intro';
import { VelocityTicker } from './components/sections/VelocityTicker';
import { Services } from './components/sections/Services';
import { ProjectList } from './components/sections/ProjectList';
import { Footer } from './components/layout/Footer';
import { CustomCursor } from './components/ui/CustomCursor';
import { Preloader } from './components/ui/Preloader';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const App: React.FC = () => {
  useSmoothScroll();

  return (
    <div className="min-h-screen bg-[#fafaf8] text-[#1a1a1e] font-sans antialiased selection:bg-black selection:text-white relative">
      <Preloader onComplete={() => ScrollTrigger.refresh()} />
      <CustomCursor />
      <Header />
      <main>
        <Hero />
        <Intro />
        <VelocityTicker />
        <Services />
        <ProjectList />
      </main>
      <Footer />
    </div>
  );
};

export default App;
