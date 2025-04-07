import { ProjectCard } from "./ProjectCards";

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4"
    >
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          title="E-Commerce Platform"
          description="A full-stack e-commerce solution with payment processing, user authentication, and inventory management."
          tags={["React", "Next.js", "Tailwind"]}
          image=""
          githubUrl="https://github.com/FinnSetchell/project1"
          demoUrl="https://project1-demo.com"
        />
        <ProjectCard
          title="Task Management App"
          description="A productivity application for managing tasks, projects, and team collaboration with real-time updates."
          tags={["JavaScript", "API"]}
          image=""
          githubUrl="https://github.com/FinnSetchell/project2"
          demoUrl="https://project2-demo.com"
        />
        <ProjectCard
          title="Weather Dashboard"
          description="A weather application that provides real-time forecasts, historical data, and location-based weather information."
          tags={["TypeScript", "GraphQL"]}
          image=""
          githubUrl="https://github.com/FinnSetchell/project3"
          demoUrl="https://project3-demo.com"
        />
      </div>
    </section>
  );
}
