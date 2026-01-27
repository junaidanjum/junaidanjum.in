import React from "react";
import { ContentCard } from "@/components/ContentCard";

export interface SectionData {
  id: string;
  title: string;
  content: Array<{
    label?: string | React.ReactNode;
    children: React.ReactNode;
  }>;
  gap?: string;
}

export const sectionsData: SectionData[] = [
  {
    id: "about",
    title: "About",
    content: [
      {
        children: (
          <p>
            I build meaningful products end-to-end, focused on clarity,
            structure, and systems that age well. I aim to create software that
            feels intentional, not noisy. I enjoy owning ideas through
            implementation and refinement.
          </p>
        ),
      },
    ],
  },
  {
    id: "projects",
    title: "Projects",
    content: [
      {
        label: "2024",
        children: (
          <ContentCard
            title="Sapiens"
            subtitle="Curated Collection Platform"
            description="A curated collection of unique individuals across the internet, showcasing creativity and innovation."
            href="https://sapiens.website/"
            image={{
              src: "https://ph-files.imgix.net/00d19f47-3db2-4a3a-ba7a-4c17426e395a.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&fm=pjpg&w=1100&h=642&fit=max&frame=1&dpr=2",
              alt: "Sapiens Project",
              aspectRatio: "484 / 273",
            }}
          />
        ),
      },
      {
        label: "2024",
        children: (
          <ContentCard
            title="Webrew"
            subtitle="Coffee Brewing Timer"
            description="A no-frills brewing timer app, built purely for the love of coffee and simple, focused user experiences."
            href="https://webrew.vercel.app/"
            image={{
              src: "https://ph-files.imgix.net/21eb4456-4fa4-4def-955d-babcd5551dff.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=929&h=720&fit=max&frame=1&dpr=2",
              alt: "Webrew Project",
              aspectRatio: "484 / 273",
            }}
          />
        ),
      },
    ],
  },
  {
    id: "work",
    title: "Work",
    content: [
      {
        label: "2021 – Now",
        children: (
          <ContentCard
            title={
              <>
                Lead Software Architect at{" "}
                <a className="company" href="https://bell-energy.com/">
                  Bell Energy
                </a>
              </>
            }
            subtitle="Abu Dhabi, UAE"
            description="Leading the architecture and development of scalable energy management solutions, focusing on modern web technologies and user-centric design."
          />
        ),
      },
      {
        label: "2021 – Now",
        children: (
          <ContentCard
            title={
              <>
                Design Engineer at{" "}
                <a className="company" href="https://bellimmersive.com/">
                  Bell Immersive
                </a>
              </>
            }
            subtitle="Abu Dhabi, UAE"
            description="Crafting immersive digital experiences with a focus on interaction design and frontend engineering excellence."
          />
        ),
      },
      {
        label: "2020 – 2021",
        children: (
          <ContentCard
            title={
              <>
                Front End Developer at{" "}
                <a className="company" href="https://graphicweave.com/">
                  GraphicWeave
                </a>
              </>
            }
            subtitle="Srinagar, Kashmir"
            description="Developed responsive web applications with modern JavaScript frameworks and design systems."
          />
        ),
      },
    ],
  },
  {
    id: "experiments",
    title: "Experiments",
    content: [
      {
        children: <p className="text-gray-500">Coming soon.</p>,
      },
    ],
  },
  {
    id: "side-projects",
    title: "Side Projects",
    content: [
      {
        label: "2023 – Now",
        children: (
          <ContentCard
            title="BetterLife"
            description="A curated collection of articles, videos, and tools for health, productivity, and wisdom. Updated weekly."
            href="https://betterlifecollections.vercel.app"
          />
        ),
      },
      {
        label: "2022 – Now",
        children: (
          <ContentCard
            title="useTextHightlight()"
            description="A lightweight React component that wraps the browser-native CSS Custom Highlight API for performant text highlighting without DOM manipulation."
            href="https://github.com/junaidanjum/text-highlight"
          />
        ),
      },
      {
        label: "2022 – Now",
        children: (
          <ContentCard
            title="FumaDocs"
            description="The powerful framework for building documentation sites in Next.js."
            href="https://github.com/junaidanjum/fumadocs"
          />
        ),
      },
    ],
  },
  {
    id: "writing",
    title: "Writing",
    content: [
      {
        label: "2025",
        children: (
          <ContentCard
            title="Now"
            subtitle="Current Work & Projects"
            description="A brief overview of my current work and projects, updated regularly to reflect what I'm focusing on."
            href="/writing/now"
          />
        ),
      },

      {
        label: "2024",
        children: (
          <ContentCard
            title="The endless loop of app development"
            subtitle="Development Insights"
            description="How a simple app grows legs and arms and becomes a monster - lessons learned from the development trenches."
            href="/writing/endless-loop"
          />
        ),
      },
    ],
  },
  {
    id: "education",
    title: "Education",
    content: [
      {
        children: (
          <p>
            Self-taught developer with a passion for continuous learning and
            staying current with modern web technologies.
          </p>
        ),
      },
    ],
  },
  {
    id: "colophon",
    title: "Colophon",
    gap: "48px",
    content: [
      {
        label: "Frontend",
        children: (
          <>
            <p>
              This portfolio is built with Next.js and Tailwind CSS, featuring
              smooth animations powered by Motion. No complex frameworks or
              build systems, just modern web technologies.
            </p>
            <p>
              <a href="https://github.com/junaidanjum/junaidanjum.in">
                View Source
              </a>
            </p>
          </>
        ),
      },
      {
        label: "Typography",
        children: <p>Optimized for SF Pro Rounded.</p>,
      },

      {
        label: "Inspiration",
        children: (
          <>
            <p>
              This website is a Next.js version of{" "}
              <a href="https://robb.is">Robb Bonke</a>
              &apos;s portfolio. I thank Robb for the inspiration and design
              choices.
            </p>
            <p>
              As Robb would say, you have reached the end of the page. It is now
              safe to turn off your computer.
            </p>
          </>
        ),
      },
    ],
  },
];
