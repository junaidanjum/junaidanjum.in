"use client";

import { AnimatedElement } from "@/components/AnimatedElement";
import { sectionsData } from "@/lib/data";

const navLinks = sectionsData.map((section, index) => ({
  href: `#${section.id}`,
  label: section.title,
  delay: 1 + index * 0.2,
}));

const socialLinks = [
  { href: "https://github.com/junaidanjum", label: "GitHub", delay: 3.8 },
  {
    href: "https://bsky.app/profile/winterstack.bsky.social",
    label: "Bluesky",
    delay: 3.6,
  },
  { href: "mailto:junaidanjum@live.com", label: "Mail", delay: 4 },
];

export function AsideNavigation() {
  return (
    <aside className="w-24 fixed top-24 left-12 hidden lg:block">
      <nav className="flex flex-col items-start" style={{ gap: "0" }}>
        {navLinks.map((link) => (
          <AnimatedElement key={link.href} delay={link.delay}>
            <a href={link.href} style={{ whiteSpace: "nowrap" }}>
              {link.label}
            </a>
          </AnimatedElement>
        ))}
      </nav>
      <AnimatedElement delay={3}>
        <hr
          style={{
            display: "block",
            border: "none",
            margin: "32px 0",
            height: "1px",
            backgroundColor: "#a2acaa",
          }}
        />
      </AnimatedElement>
      <nav
        aria-label="Social"
        className="flex flex-col items-start"
        style={{ gap: "0" }}
      >
        {socialLinks.map((link) => (
          <AnimatedElement key={link.href} delay={link.delay}>
            <a href={link.href}>{link.label}</a>
          </AnimatedElement>
        ))}
      </nav>
    </aside>
  );
}

export function MainNavigation() {
  return (
    <div className="mb-8 space-y-4 lg:hidden">
      <AnimatedElement delay={1.5}>
        <nav>
          Here:{" "}
          {navLinks.map((link, index) => (
            <span key={link.href}>
              <a href={link.href}>{link.label}</a>
              {index < navLinks.length - 1 ? ", " : "."}
            </span>
          ))}
        </nav>
      </AnimatedElement>
      <AnimatedElement delay={1.8}>
        <nav aria-label="Social">
          Elsewhere:{" "}
          {socialLinks.map((link, index) => (
            <span key={link.href}>
              <a href={link.href}>{link.label}</a>
              {index < socialLinks.length - 1 ? ", " : "."}
            </span>
          ))}
        </nav>
      </AnimatedElement>
    </div>
  );
}
