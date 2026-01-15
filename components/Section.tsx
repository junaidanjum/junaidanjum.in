"use client";

import { ReactNode } from "react";
import { AnimatedElement } from "./AnimatedElement";

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  delay?: number;
  className?: string;
  gap?: string;
}

export function Section({
  id,
  title,
  children,
  delay = 4,
  className = "",
  gap = "32px",
}: SectionProps) {
  return (
    <section className={`${className} `} style={{ marginTop: "64px" }}>
      <AnimatedElement delay={delay}>
        <h2 id={id} style={{ marginBottom: "24px" }}>
          {title}
        </h2>
      </AnimatedElement>
      <div
        className="grid grid-cols-[1fr_3fr] md:gap-x-12"
        style={{ gap: "24px 24px", rowGap: gap }}
      >
        {children}
      </div>
    </section>
  );
}

export interface ContentItemProps {
  label?: string | ReactNode;
  children: ReactNode;
  delay?: number;
}

export function ContentItem({ label, children, delay }: ContentItemProps) {
  return (
    <>
      {label && (
        <AnimatedElement delay={delay}>
          <div
            className="col-start-1"
            style={{
              color: "#a2acaa",
              fontVariantNumeric: "tabular-nums",
              fontSize: "13px",
              letterSpacing: "0.03ch",
              lineHeight: "1.55",
            }}
          >
            {label}
          </div>
        </AnimatedElement>
      )}
      <AnimatedElement
        delay={delay}
        className="col-start-2 flex flex-col gap-2"
      >
        {children}
      </AnimatedElement>
    </>
  );
}
