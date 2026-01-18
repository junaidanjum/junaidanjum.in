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
}: SectionProps) {
  return (
    <section className={`${className} mt-16`}>
      <AnimatedElement delay={delay}>
        <h2 id={id} className="mb-6 scroll-m-10">
          {title}
        </h2>
      </AnimatedElement>
      <div className="grid grid-cols-1 gap-10">{children}</div>
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
    <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] md:gap-x-12 gap-4 md:gap-10">
      {label && (
        <AnimatedElement delay={delay}>
          <div className="md:col-start-1 label-text">{label}</div>
        </AnimatedElement>
      )}
      <AnimatedElement
        delay={delay}
        className="md:col-start-2 flex flex-col gap-2"
      >
        {children}
      </AnimatedElement>
    </div>
  );
}
