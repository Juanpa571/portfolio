import React, { useState, useEffect, useRef } from 'react';
import { siteConfig, type ProjectItem } from '../../config/site';
import { PlaceholderImage } from '../ui/PlaceholderImage';
import { Magnetic } from '../ui/Magnetic';

export const ProjectList: React.FC = () => {
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);
  const [displayedProject, setDisplayedProject] = useState<ProjectItem | null>(null);
  const [isHoveringSection, setIsHoveringSection] = useState(false);
  const [expandedMobileId, setExpandedMobileId] = useState<string | null>(null);

  const mousePos = useRef({ x: -200, y: -200 });
  const currentPos = useRef({ x: -200, y: -200 });
  const floatingCardRef = useRef<HTMLDivElement>(null);
  const animFrameId = useRef<number | null>(null);

  useEffect(() => {
    if (activeProject) {
      setDisplayedProject(activeProject);
    }
  }, [activeProject]);

  useEffect(() => {
    // Only track fine pointer movements (mouse/trackpad)
    if (typeof window === 'undefined' || !window.matchMedia('(pointer: fine)').matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const handleScroll = () => {
      setActiveProject(null);
      setIsHoveringSection(false);
    };

    const handleDocLeave = (e: MouseEvent) => {
      if (!e.relatedTarget) {
        setActiveProject(null);
        setIsHoveringSection(false);
      }
    };

    const handleBlur = () => {
      setActiveProject(null);
      setIsHoveringSection(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('blur', handleBlur);
    document.addEventListener('mouseleave', handleDocLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('blur', handleBlur);
      document.removeEventListener('mouseleave', handleDocLeave);
    };
  }, []);

  // Run the floating preview lerp loop strictly when hovering or active
  useEffect(() => {
    if (!isHoveringSection && !activeProject) {
      if (animFrameId.current) {
        cancelAnimationFrame(animFrameId.current);
        animFrameId.current = null;
      }
      return;
    }

    if (typeof window === 'undefined' || !window.matchMedia('(pointer: fine)').matches) {
      return;
    }

    const loop = () => {
      const ease = 0.16;
      currentPos.current.x += (mousePos.current.x - currentPos.current.x) * ease;
      currentPos.current.y += (mousePos.current.y - currentPos.current.y) * ease;

      if (floatingCardRef.current) {
        floatingCardRef.current.style.transform = `translate3d(${currentPos.current.x + 35}px, ${currentPos.current.y - 140}px, 0) rotate(1.5deg)`;
      }

      animFrameId.current = requestAnimationFrame(loop);
    };

    animFrameId.current = requestAnimationFrame(loop);

    return () => {
      if (animFrameId.current) {
        cancelAnimationFrame(animFrameId.current);
        animFrameId.current = null;
      }
    };
  }, [isHoveringSection, activeProject]);

  const toggleMobile = (id: string) => {
    setExpandedMobileId(expandedMobileId === id ? null : id);
  };

  // Asymmetric indentation classes per project index for deliberate diagonal tension
  const getAsymmetricIndent = (index: number) => {
    switch (index) {
      case 0:
        return 'lg:pl-0'; // Anchored hard left (monumental flagship)
      case 1:
        return 'lg:pl-36'; // Pushed aggressively right
      case 2:
        return 'lg:pl-12'; // Counter-balance center-left
      case 3:
        return 'lg:pl-44'; // Pushed far right
      default:
        return 'lg:pl-0';
    }
  };

  return (
    <section
      id="work"
      className="py-24 lg:py-36 relative overflow-hidden"
      onMouseEnter={() => setIsHoveringSection(true)}
      onMouseLeave={() => {
        setIsHoveringSection(false);
        setActiveProject(null);
      }}
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
        
        {/* Asymmetric Section Header with Monumental Scale Contrast */}
        <div
          className="mb-16 pb-8 border-b border-black/10"
          onMouseEnter={() => setActiveProject(null)}
        >
          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-normal font-display text-black tracking-[-0.01em] leading-[1.06] sm:leading-[1.1] pb-1">
            Selected<br />
            <span className="sm:pl-16 lg:pl-24 inline-block text-black/55 hover:text-black transition-colors duration-500">
              Works.
            </span>
          </h2>
          <div className="pt-4 flex items-center gap-2.5 text-xs font-mono text-black/65 select-none">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Curated case studies currently in production • Releasing Soon</span>
          </div>
        </div>

        {/* Asymmetric Diagonal Project List with strict hover boundary & Focus Dimming */}
        <div
          className="divide-y divide-black/10 border-b border-black/10"
          onMouseLeave={() => setActiveProject(null)}
        >
          {siteConfig.projects.map((project, idx) => {
            const isCurrentActive = activeProject?.id === project.id;
            const isMobileOpen = expandedMobileId === project.id;
            const indentClass = getAsymmetricIndent(idx);

            return (
              <div
                key={project.id}
                onMouseEnter={() => {
                  setIsHoveringSection(true);
                  setActiveProject(project);
                }}
                onClick={() => toggleMobile(project.id)}
                className={`py-12 sm:py-16 transition-all duration-300 group cursor-pointer relative px-4 sm:px-6 -mx-4 sm:-mx-6 rounded-3xl ${
                  isCurrentActive
                    ? 'bg-black/[0.02] opacity-100'
                    : activeProject
                      ? 'opacity-25 blur-[0.2px]'
                      : 'opacity-100'
                }`}
                data-interactive
              >
                {/* Subtle Background Watermark Number */}
                <div className="absolute top-4 right-8 text-7xl sm:text-9xl font-display font-bold text-black/[0.03] group-hover:text-black/[0.07] transition-colors pointer-events-none select-none">
                  {project.number}
                </div>

                <div className={`grid grid-cols-1 md:grid-cols-12 gap-6 items-center ${indentClass} transition-all duration-500`}>
                  
                  {/* Client Identifier & Meta Badges (Col 1-3) */}
                  <div className="md:col-span-3 space-y-1.5 z-10">
                    <div className="flex items-center gap-2.5">
                      <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-black/5 text-black font-bold tracking-wider group-hover:bg-black group-hover:text-white transition-colors duration-300">
                        {project.clientTag}
                      </span>
                      <span className="text-xs font-mono text-black/60 font-semibold">
                        {project.number}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-[11px] font-mono text-black/70 pt-0.5 font-medium">
                      <span>{project.category}</span>
                      <span>•</span>
                      <span>{project.location}</span>
                    </div>
                  </div>

                  {/* Monumental Asymmetric Project Title (Col 4-11) */}
                  <div className="md:col-span-8 z-10">
                    <h3 className={`font-normal font-display tracking-tight text-black transition-all duration-300 ${
                      idx === 0
                        ? 'text-4xl sm:text-5xl lg:text-6xl'
                        : 'text-3xl sm:text-4xl lg:text-5xl'
                    } ${isCurrentActive ? 'translate-x-4 sm:translate-x-6' : ''}`}>
                      {project.title}
                    </h3>
                  </div>

                  {/* Right Action Circle with Magnetic Physics (Col 12) */}
                  <div className="md:col-span-1 flex justify-start md:justify-end z-10">
                    <Magnetic strength={0.45} radius={60}>
                      <div className="w-12 h-12 rounded-full border border-black/15 flex items-center justify-center text-sm font-mono text-black group-hover:bg-black group-hover:text-white group-hover:border-black group-hover:scale-105 transition-all duration-300 shadow-xs">
                        <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">
                          ↗
                        </span>
                      </div>
                    </Magnetic>
                  </div>

                </div>

                {/* Inline Mobile Fallback Preview (Shown on Tap for Phones/Touch Devices) */}
                <div className={`md:hidden overflow-hidden transition-all duration-300 ${isMobileOpen ? 'max-h-[420px] mt-6 pt-4 border-t border-black/10' : 'max-h-0'}`}>
                  <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm space-y-3">
                    <PlaceholderImage
                      id={project.id}
                      title={project.title}
                      recommendedAspect={project.aspectRatio}
                      dimensions={project.dimensions}
                    />
                    <div className="text-xs font-mono text-black/75 flex items-center justify-between pt-2 border-t border-black/5">
                      <span>{project.tech}</span>
                      <span className="text-black font-semibold flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        <span>In Development // Soon</span>
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Floating Projected Image Preview Card (Snellenberg Style Cursor Follower) */}
      <div
        ref={floatingCardRef}
        className={`hidden md:block pointer-events-none fixed z-[9999] top-0 left-0 will-change-transform transition-all duration-300 ease-out ${
          isHoveringSection && activeProject ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'
        }`}
      >
        {displayedProject && (
          <div className="relative">
            <div className="w-[380px] rounded-3xl bg-white/95 backdrop-blur-xl border border-black/10 shadow-[0_30px_90px_-15px_rgba(0,0,0,0.35)] p-4 overflow-hidden space-y-3 animate-in fade-in duration-200">
              {/* Card Meta Header */}
              <div className="flex items-center justify-between text-xs font-mono pb-1.5 border-b border-black/5">
                <span className="px-2 py-0.5 rounded-full bg-black/5 text-black font-semibold text-[10px]">
                  {displayedProject.category}
                </span>
                <span className="text-black/50 text-[10px] font-mono">
                  {displayedProject.clientTag} • {displayedProject.number}
                </span>
              </div>

              {/* High-Craft Image Container */}
              <div className="overflow-hidden rounded-2xl bg-[#f8f8f6] border border-black/5">
                <PlaceholderImage
                  id={displayedProject.id}
                  title={displayedProject.title}
                  recommendedAspect={displayedProject.aspectRatio}
                  dimensions={displayedProject.dimensions}
                  className="transform hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card Footer */}
              <div className="flex items-center justify-between text-[11px] font-mono text-black/75 pt-0.5">
                <span className="truncate max-w-[200px]">{displayedProject.tech}</span>
                <span className="text-black font-semibold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>In Development</span>
                </span>
              </div>
            </div>

            {/* Floating Snellenberg View Badge */}
            <div className="absolute -bottom-3 -right-3 w-16 h-16 rounded-full bg-[#1C1D20] text-white flex items-center justify-center text-xs font-mono font-medium shadow-2xl border border-white/20 animate-in zoom-in-75 duration-300">
              <span>Soon...</span>
            </div>
          </div>
        )}
      </div>

    </section>
  );
};
