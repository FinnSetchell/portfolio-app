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
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-header">
          Projects
        </h2>
        <p className="mx-auto max-w-[700px] md:text-xl text-secondary">
          A showcase of my work and contributions.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          title="Word Game"
          description="A WPF app with customizable grids where users swap letters to form words with minimal swaps. Earned an A* in my Computer Science A-Level practical."
          tags={["C#", "WPF", "Game Development"]}
          image="projects/wordgame.png"
          githubUrl="https://github.com/FinnSetchell/WordGameWpfApp"
          demoUrl="https://github.com/FinnSetchell/WordGameWpfApp/releases/tag/wpf"
        />
        <ProjectCard
          title="JSON Generator"
          description="A Python script that uses a template to ask the user questions and generates JSON files for structure mods. My first experience with Python."
          tags={["Python", "JSON", "Automation"]}
          githubUrl="https://github.com/FinnSetchell/JSON_Generator"
          demoUrl="https://github.com/FinnSetchell/JSON_Generator"
        />
        <ProjectCard
          title="Datapack Generator"
          description="A Python project that fetches data from a structure mod repository using a URL and branch name, then converts it into a vanilla-compatible datapack."
          tags={["Python", "Datapacks", "Automation"]}
          githubUrl="https://github.com/FinnSetchell/datapack-generator"
          demoUrl="https://github.com/FinnSetchell/datapack-generator"
        />
        <ProjectCard
          title="Galaxy Strike"
          description="A Unity rail shooter game where I learned about timelines, animations, and more to create an engaging gameplay experience."
          tags={["Unity", "Game Development", "Animations"]}
        />
        <ProjectCard
          title="Rocket Boost"
          description="My first real introduction to Unity. A leveling game where the player controls a rocket through different obstacles using multiple scenes."
          tags={["Unity", "Game Development", "Level Design"]}
        />
      </div>
    </section>
  );
}
