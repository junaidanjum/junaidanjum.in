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

const hgroupPStyle = {
  color: "#4D595B",
  fontSize: "13px",
  letterSpacing: "0.03ch",
  marginTop: 0,
};

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
          {subtitle && <p style={hgroupPStyle}>{subtitle}</p>}
        </hgroup>
      ) : (
        <hgroup>
          <h3 className="text-[#02040a] dark:text-[#fafbff]">{title}</h3>
          {subtitle && <p style={hgroupPStyle}>{subtitle}</p>}
        </hgroup>
      )}
      {description && <p>{description}</p>}
    </>
  );
}
