"use client";

import { AnimatedElement } from "@/components/AnimatedElement";
import { Header } from "@/components/Header";
import { AsideNavigation, MainNavigation } from "@/components/Navigation";

export default function LayoutBlogPost({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <AsideNavigation />
      <main>
        <MainNavigation />
        <AnimatedElement delay={1.3}>
          <article className="prose mt-16 dark:prose-invert text-sm">
            {children}
          </article>
        </AnimatedElement>
      </main>
      <footer className="mt-23 mb-0"></footer>
    </>
  );
}
