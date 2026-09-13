import React, { useEffect, useRef } from 'react';

export const FrontendCraftArtwork: React.FC = () => {
  const frontBeadRef = useRef<SVGCircleElement | null>(null);
  const backBeadRef = useRef<SVGCircleElement | null>(null);
  const animFrameId = useRef<number | null>(null);
  const angleRef = useRef<number>(0); // Starts at right vertex (3 o'clock)
  const isHoveredRef = useRef<boolean>(false);

  useEffect(() => {
    const cx = 70;
    const cy = 52;
    const rx = 52;
    const ry = 14;

    const animate = () => {
      // Smooth continuous angular progression; accelerates gently on hover
      const targetSpeed = isHoveredRef.current ? 0.028 : 0.012;
      angleRef.current = (angleRef.current + targetSpeed) % (Math.PI * 2);

      const angle = angleRef.current;
      const x = cx + rx * Math.cos(angle);
      const y = cy + ry * Math.sin(angle);

      // In perspective: sin(angle) < 0 is back (y < cy), sin(angle) >= 0 is front (y >= cy)
      const sinVal = Math.sin(angle);
      const depthFactor = (sinVal + 1) / 2; // 0 (deepest back) to 1 (forefront)
      const r = 2.4 + depthFactor * 1.3;

      if (sinVal < 0) {
        // Bead is in back half: show back bead, hide front bead
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
        // Bead is in front half: show front bead, hide back bead
        if (frontBeadRef.current) {
          frontBeadRef.current.style.display = 'block';
          frontBeadRef.current.setAttribute('cx', x.toFixed(2));
          frontBeadRef.current.setAttribute('cy', y.toFixed(2));
          frontBeadRef.current.setAttribute('r', r.toFixed(2));
          frontBeadRef.current.setAttribute('opacity', (0.75 + depthFactor * 0.25).toFixed(2));
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
      className="w-28 h-20 sm:w-36 sm:h-24 shrink-0 flex items-center justify-center relative select-none"
      onMouseEnter={() => { isHoveredRef.current = true; }}
      onMouseLeave={() => { isHoveredRef.current = false; }}
    >
      <svg
        viewBox="0 0 140 90"
        className="w-full h-full overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Orbital Perspective Ring (Back Half & Full Track) */}
        <ellipse
          cx="70"
          cy="52"
          rx="52"
          ry="14"
          className="stroke-white/35 transition-colors duration-500 group-hover:stroke-white/60"
          strokeWidth="1.2"
        />

        {/* Back Bead Layer (Rendered physically BEHIND window for true 3D occlusion) */}
        <circle
          ref={backBeadRef}
          cx="70"
          cy="38"
          r="2.5"
          fill="white"
          style={{ display: 'none' }}
        />

        {/* Central Browser Window Wireframe (Opaque background cleanly occludes the back orbit) */}
        <g className="transition-transform duration-500 ease-out group-hover:scale-[1.03] origin-[70px_42px]">
          {/* Browser Window Body */}
          <rect
            x="36"
            y="18"
            width="68"
            height="48"
            rx="7"
            className="stroke-white/80 fill-[#1C1D20] shadow-2xl transition-colors duration-300 group-hover:stroke-white"
            strokeWidth="1.2"
          />

          {/* Browser Header Bar Divider */}
          <line
            x1="36"
            y1="30"
            x2="104"
            y2="30"
            className="stroke-white/20 transition-colors duration-300 group-hover:stroke-white/35"
            strokeWidth="1.1"
          />

          {/* 3 Window Control Dots */}
          <circle cx="43" cy="24" r="1.4" className="fill-white/80" />
          <circle cx="48" cy="24" r="1.4" className="fill-white/80" />
          <circle cx="53" cy="24" r="1.4" className="fill-white/80" />

          {/* Centered Code Symbol < / > */}
          <g className="transition-transform duration-300">
            {/* Left Bracket < */}
            <path
              d="M 57 44 L 51 49 L 57 54"
              stroke="white"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300 group-hover:-translate-x-0.5"
            />
            {/* Center Slash / */}
            <path
              d="M 67 43 L 63 55"
              stroke="white"
              strokeWidth="1.6"
              strokeLinecap="round"
              className="text-white/70 group-hover:text-white transition-colors duration-300"
            />
            {/* Right Bracket > */}
            <path
              d="M 73 44 L 79 49 L 73 54"
              stroke="white"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </g>
        </g>

        {/* Front Bead Layer (Rendered physically IN FRONT of window) */}
        <circle
          ref={frontBeadRef}
          cx="122"
          cy="52"
          r="3.5"
          fill="white"
          className="shadow-sm filter drop-shadow-[0_0_4px_rgba(255,255,255,0.7)]"
        />
      </svg>
    </div>
  );
};
