/**
 * TiltedCard Component
 * 
 * A high-end interactive card that tilts in 3D space based on mouse position.
 * Features:
 * - Smooth physics-based 3D rotation using framer-motion springs
 * - Dynamic tooltip that follows the cursor
 * - Optional overlay content with depth (translateZ)
 * - Configurable scale and rotation amplitude
 */

import type { SpringOptions } from 'framer-motion';
import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export interface TiltedCardProps {
  /** Source URL for the card image */
  imageSrc: string;
  /** Alt text for the image */
  altText?: string;
  /** Text shown in the floating tooltip */
  captionText?: string;
  /** Height of the outer container */
  containerHeight?: React.CSSProperties['height'];
  /** Width of the outer container */
  containerWidth?: React.CSSProperties['width'];
  /** Height of the actual image */
  imageHeight?: React.CSSProperties['height'];
  /** Width of the actual image */
  imageWidth?: React.CSSProperties['width'];
  /** Scaling factor when hovered (e.g., 1.1) */
  scaleOnHover?: number;
  /** Maximum rotation degrees (higher = more intense tilt) */
  rotateAmplitude?: number;
  /** Whether to show a warning message on mobile devices */
  showMobileWarning?: boolean;
  /** Whether to show the cursor-following tooltip */
  showTooltip?: boolean;
  /** Custom content to overlay on top of the card */
  overlayContent?: React.ReactNode;
  /** Whether to display the overlay content */
  displayOverlayContent?: boolean;
  /** Custom class name for the figure element */
  className?: string;
  /** Optional custom styling for the image */
  imageClassName?: string;
}

const springValues: SpringOptions = {
  damping: 30,
  stiffness: 100,
  mass: 2
};

export const TiltedCard = ({
  imageSrc,
  altText = 'Tilted card image',
  captionText = '',
  containerHeight = '300px',
  containerWidth = '100%',
  imageHeight = '300px',
  imageWidth = '300px',
  scaleOnHover = 1.1,
  rotateAmplitude = 14,
  showMobileWarning = false,
  showTooltip = true,
  overlayContent = null,
  displayOverlayContent = false,
  className = '',
  imageClassName = ''
}: TiltedCardProps) => {
  const ref = useRef<HTMLElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);
  const opacity = useSpring(0);
  const rotateFigcaption = useSpring(0, {
    stiffness: 350,
    damping: 30,
    mass: 1
  });
  const [lastY, setLastY] = useState(0);

  function handleMouse(e: React.MouseEvent<HTMLElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;
    
    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;
    
    rotateX.set(rotationX);
    rotateY.set(rotationY);
    
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
    
    const velocityY = offsetY - lastY;
    rotateFigcaption.set(-velocityY * 0.6);
    setLastY(offsetY);
  }

  function handleMouseEnter() {
    scale.set(scaleOnHover);
    opacity.set(1);
  }

  function handleMouseLeave() {
    opacity.set(0);
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
    rotateFigcaption.set(0);
  }

  return (
    <figure
      ref={ref}
      className={`relative w-full h-full [perspective:800px] flex flex-col items-center justify-center select-none ${className}`}
      style={{
        height: containerHeight,
        width: containerWidth
      }}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {showMobileWarning && (
        <div className="absolute top-4 text-center text-xs block sm:hidden text-black/50">
          This effect is optimized for desktop.
        </div>
      )}
      
      <motion.div
        className="relative [transform-style:preserve-3d] will-change-transform"
        style={{
          width: imageWidth,
          height: imageHeight,
          rotateX,
          rotateY,
          scale
        }}
      >
        <motion.img
          src={imageSrc}
          alt={altText}
          draggable={false}
          className={`absolute top-0 left-0 object-contain shadow-2xl pointer-events-none [image-rendering:-webkit-optimize-contrast] ${imageClassName}`}
          style={{
            width: imageWidth,
            height: imageHeight,
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
          }}
        />
        
        {displayOverlayContent && overlayContent && (
          <motion.div className="absolute top-0 left-0 z-[2] w-full h-full flex items-center justify-center will-change-transform [transform:translateZ(30px)] pointer-events-none">
            {overlayContent}
          </motion.div>
        )}
      </motion.div>

      {showTooltip && captionText && (
        <motion.figcaption
          className="pointer-events-none absolute left-0 top-0 rounded-md bg-white/90 backdrop-blur-md border border-black/10 px-2.5 py-1 text-[11px] font-medium text-[#111111] shadow-lg opacity-0 z-[3] hidden sm:block whitespace-nowrap"
          style={{
            x,
            y,
            opacity,
            rotate: rotateFigcaption
          }}
        >
          {captionText}
        </motion.figcaption>
      )}
    </figure>
  );
};

export default TiltedCard;
