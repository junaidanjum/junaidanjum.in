"use client";

import { Figure } from "./Figure";

export interface ContentCardProps {
  title: string | React.ReactNode;
  subtitle?: string;
  description?: string | React.ReactNode;
  label?: string;
  href?: string;
  image?: {
    src: string;
    alt: string;
    aspectRatio?: string;
  };
}

export function ContentCard({
  title,
  subtitle,
  description,
  href,
  image,
}: ContentCardProps) {
  return (
    <>
      {image && (
        <Figure
          src={image.src}
          alt={image.alt}
          aspectRatio={image.aspectRatio || "484 / 273"}
          href={href}
        />
      )}
      {href ? (
        <hgroup>
          <h3>
            <a href={href}>{title}</a>
          </h3>
          {subtitle && <p className="subtitle-text">{subtitle}</p>}
        </hgroup>
      ) : (
        <hgroup>
          <h3>{title}</h3>
          {subtitle && <p className="subtitle-text">{subtitle}</p>}
        </hgroup>
      )}
      {description && <p className="description-text">{description}</p>}
    </>
  );
}
