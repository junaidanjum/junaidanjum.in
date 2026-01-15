"use client";

import { AnimatedElement } from "@/components/AnimatedElement";

export function Header() {
  return (
    <header
      className="grid grid-cols-[44px_1fr] gap-3 font-[450]"
      style={{ paddingTop: "68px", paddingBottom: "24px" }}
    >
      <AnimatedElement delay={2.4}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          id="avatar"
          className="w-11 h-11 transition-transform duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:scale-110"
          src="/img/avatar.png"
          width={44}
          height={44}
          alt="My Avatar"
        />
      </AnimatedElement>
      <div className="col-start-2">
        <AnimatedElement delay={0}>
          <h1 className="fn">Junaid Anjum</h1>
        </AnimatedElement>
        <AnimatedElement delay={1}>
          <p>
            <span className="title">Frontend Product Engineer</span> based in{" "}
            <span className="locality">Srinagar</span>,{" "}
            <span className="country-name">Kashmir</span>.
          </p>
        </AnimatedElement>
      </div>
    </header>
  );
}
