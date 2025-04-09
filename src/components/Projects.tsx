"use client";

import { ProjectCard } from "./ProjectCards";

export default function Projects() {
  return (
    <section
      id="projects"
      style={{ backgroundColor: "var(--secondary)", color: "var(--text)" }}
      className="min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="flex flex-col items-center justify-center gap-4 text-center mb-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl" style={{ color: "var(--headerText)" }}>
          Projects
        </h2>
        <p className="mx-auto max-w-[700px] md:text-xl" style={{ color: "var(--secondaryText)" }}>
          A showcase of my work and contributions.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          title="E-Commerce Platform"
          description="A full-stack e-commerce solution with payment processing, user authentication, and inventory management."
          tags={["React", "Next.js", "Tailwind"]}
          image="projects/ecommerce.png"
          githubUrl="https://github.com/FinnSetchell/project1"
          demoUrl="https://project1-demo.com"
        />
        <ProjectCard
          title="Word Game"
          description="A WPF app with customizable grids where users swap letters to form words with minimal swaps. Earned an A* in my Computer Science A-Level practical."
          tags={["C#", "WPF", "Game Development"]}
          image="projects/wordgame.png"
          githubUrl="https://github.com/FinnSetchell/WordGameWpfApp"
          demoUrl="https://github.com/FinnSetchell/WordGameWpfApp/releases/tag/wpf"
        />
      </div>
    </section>
  );
}
