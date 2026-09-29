import React, { useEffect, useRef } from 'react';

export const FrontendCraftArtwork: React.FC = () => {
  const frontBeadRef = useRef<SVGCircleElement | null>(null);
  const backBeadRef = useRef<SVGCircleElement | null>(null);
  const animFrameId = useRef<number | null>(null);
  const angleRef = useRef<number>(0);
  const isHoveredRef = useRef<boolean>(false);

  useEffect(() => {
    const cx = 72;
    const cy = 50;
    const rx = 54;
    const ry = 15;
    // Orbital inclination of -12 degrees for dynamic cosmic asymmetry
    const theta = -12 * (Math.PI / 180);
    const cosTheta = Math.cos(theta);
    const sinTheta = Math.sin(theta);

    const animate = () => {
      const targetSpeed = isHoveredRef.current ? 0.028 : 0.012;
      angleRef.current = (angleRef.current + targetSpeed) % (Math.PI * 2);

      const angle = angleRef.current;
      const u = rx * Math.cos(angle);
      const v = ry * Math.sin(angle);

      // Rotated coordinates in inclined 3D plane
      const x = cx + u * cosTheta - v * sinTheta;
      const y = cy + u * sinTheta + v * cosTheta;

      const sinVal = Math.sin(angle);
      const depthFactor = (sinVal + 1) / 2; // 0 (back) to 1 (front)
      const r = 2.4 + depthFactor * 1.4;

      if (sinVal < 0) {
        // Back half: hidden behind window
        if (backBeadRef.current) {
          backBeadRef.current.style.display = 'block';
          backBeadRef.current.setAttribute('cx', x.toFixed(2));
          backBeadRef.current.setAttribute('cy', y.toFixed(2));
          backBeadRef.current.setAttribute('r', r.toFixed(2));
          backBeadRef.current.setAttribute('opacity', (0.4 + depthFactor * 0.4).toFixed(2));
        }
        if (frontBeadRef.current) {
          frontBeadRef.current.style.display = 'none';
        }
      } else {
        // Front half: visible crossing foreground
        if (frontBeadRef.current) {
          frontBeadRef.current.style.display = 'block';
          frontBeadRef.current.setAttribute('cx', x.toFixed(2));
          frontBeadRef.current.setAttribute('cy', y.toFixed(2));
          frontBeadRef.current.setAttribute('r', r.toFixed(2));
          frontBeadRef.current.setAttribute('opacity', (0.8 + depthFactor * 0.2).toFixed(2));
        }
        if (backBeadRef.current) {
          backBeadRef.current.style.display = 'none';
        }
      }

      animFrameId.current = requestAnimationFrame(animate);
    };

    animFrameId.current = requestAnimationFrame(animate);

    return () => {
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, []);

  return (
    <div
      className="w-32 h-24 sm:w-40 sm:h-28 shrink-0 flex items-center justify-center relative select-none"
      onMouseEnter={() => { isHoveredRef.current = true; }}
      onMouseLeave={() => { isHoveredRef.current = false; }}
    >
      <svg
        viewBox="0 0 144 96"
        className="w-full h-full overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Inclined 3D Orbital Perspective Ring (-12deg inclination) */}
        <ellipse
          cx="72"
          cy="50"
          rx="54"
          ry="15"
          transform="rotate(-12 72 50)"
          className="stroke-white/35 transition-colors duration-500 group-hover:stroke-white/60"
          strokeWidth="1.2"
        />

        {/* Back Bead Layer (Occluded behind window body) */}
        <circle
          ref={backBeadRef}
          cx="72"
          cy="36"
          r="2.5"
          fill="white"
          style={{ display: 'none' }}
        />

        {/* Central Browser Window Wireframe (Subtly angled with organic poise) */}
        <g className="transition-transform duration-500 ease-out group-hover:rotate-0 group-hover:scale-[1.03] origin-[72px_44px] rotate-[-1.5deg]">
          {/* Browser Window Body (Opaque #1C1D20 cleanly masks back orbit) */}
          <rect
            x="38"
            y="18"
            width="68"
            height="48"
            rx="8"
            className="stroke-white/80 fill-[#1C1D20] shadow-2xl transition-colors duration-300 group-hover:stroke-white"
            strokeWidth="1.2"
          />

          {/* Header Bar Divider */}
          <line
            x1="38"
            y1="30"
            x2="106"
            y2="30"
            className="stroke-white/20 transition-colors duration-300 group-hover:stroke-white/35"
            strokeWidth="1.1"
          />

          {/* 3 Window Control Dots */}
          <circle cx="45" cy="24" r="1.4" className="fill-white/80" />
          <circle cx="50" cy="24" r="1.4" className="fill-white/80" />
          <circle cx="55" cy="24" r="1.4" className="fill-white/80" />

          {/* Centered Code Symbol < / > */}
          <g className="transition-transform duration-300">
            {/* Left Bracket < */}
            <path
              d="M 59 44 L 53 49 L 59 54"
              stroke="white"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300 group-hover:-translate-x-0.5"
            />
            {/* Center Slash / */}
            <path
              d="M 69 43 L 65 55"
              stroke="white"
              strokeWidth="1.6"
              strokeLinecap="round"
              className="text-white/70 group-hover:text-white transition-colors duration-300"
            />
            {/* Right Bracket > */}
            <path
              d="M 75 44 L 81 49 L 75 54"
              stroke="white"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </g>
        </g>

        {/* Front Bead Layer (Crossing foreground in full 3D) */}
        <circle
          ref={frontBeadRef}
          cx="124"
          cy="50"
          r="3.6"
          fill="white"
          className="shadow-sm filter drop-shadow-[0_0_5px_rgba(255,255,255,0.75)]"
        />
      </svg>
    </div>
  );
};
