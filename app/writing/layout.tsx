"use client";

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
        <article className="prose mt-16 dark:prose-invert text-sm">
          {children}
        </article>
      </main>
      <footer className="mt-23 mb-0"></footer>
    </>
  );
}
