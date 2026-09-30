import React from 'react';

interface PlaceholderImageProps {
  id: string;
  title: string;
  recommendedAspect: string;
  dimensions?: string;
  className?: string;
  src?: string;
}

export const PlaceholderImage: React.FC<PlaceholderImageProps> = ({
  id,
  title,
  recommendedAspect,
  dimensions = '1920x1200 px',
  className = '',
  src,
}) => {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-xl flex flex-col items-center justify-center text-center ${className}`}
      style={{ aspectRatio: recommendedAspect }}
    >
      {src ? (
        <img
          src={src}
          alt={title}
          className="absolute inset-0 w-full h-full object-contain rounded-xl"
          decoding="async"
          loading="lazy"
        />
      ) : (
        <>
          <div className="absolute top-3 left-3 text-[10px] font-sans text-black/25">
            [{id.toUpperCase()}]
          </div>
          <div className="absolute top-3 right-3 text-[10px] font-sans text-black/25">
            {recommendedAspect}
          </div>
          <div className="absolute bottom-3 right-3 text-[10px] font-sans text-black/25">
            {dimensions}
          </div>

          <div className="z-10 flex flex-col items-center gap-1.5 max-w-[90%] p-6">
            <span className="text-xs font-medium text-black/60">{title}</span>
            <span className="text-[10px] font-sans text-black/30">
              Photographic Specimen Frame
            </span>
          </div>
        </>
      )}
    </div>
  );
};
