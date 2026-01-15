"use client";

import { ReactNode } from "react";

interface FigureProps {
  src?: string;
  alt?: string;
  aspectRatio?: string;
  children?: ReactNode;
  href?: string;
  isVideo?: boolean;
  videoSrc?: string;
  poster?: string;
  className?: string;
}

export function Figure({
  src,
  alt = "",
  aspectRatio,
  children,
  href,
  isVideo = false,
  videoSrc,
  poster,
  className = "",
}: FigureProps) {
  const figureClass = `w-auto h-auto rounded-[20px] overflow-hidden relative isolate bg-[var(--secondaryBackgroundColor)] shadow-[0px_2px_8px_rgba(0,0,0,0.1)] after:content-[''] after:block after:rounded-[inherit] after:border-[1.5px] after:border-white/100 after:mix-blend-plus-lighter after:absolute after:top-[-0.5px] after:right-[-0.5px] after:bottom-[-0.5px] after:left-[-0.5px] after:pointer-events-none after:opacity-15 after:z-10 ${className}`;

  const content =
    isVideo && videoSrc ? (
      <video
        autoPlay
        muted
        loop
        playsInline
        poster={poster}
        className="w-full h-full object-cover"
      >
        <source src={videoSrc} />
      </video>
    ) : src ? (
      <img
        src={src}
        alt={alt}
        className="w-auto max-w-full h-auto align-bottom"
        loading="lazy"
      />
    ) : null;

  return (
    <figure
      className={figureClass}
      style={aspectRatio ? { aspectRatio } : undefined}
    >
      {href ? <a href={href}>{content}</a> : content}
      {children}
    </figure>
  );
}
