"use client";

import { Header } from "@/components/Header";
import { AsideNavigation, MainNavigation } from "@/components/Navigation";
import { Section, ContentItem } from "@/components/Section";
import { sectionsData } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Header />
      <AsideNavigation />
      <main>
        <MainNavigation />
        {sectionsData.map((section, sectionIndex) => (
          <Section
            key={section.id}
            id={section.id}
            title={section.title}
            delay={sectionIndex}
            gap={section.gap}
          >
            {section.content.map((item, itemIndex) => (
              <ContentItem
                key={itemIndex}
                label={item.label}
                delay={sectionIndex + itemIndex * 0.5}
              >
                {item.children}
              </ContentItem>
            ))}
          </Section>
        ))}
      </main>
      <footer className="mt-23 mb-0"></footer>
    </>
  );
}
