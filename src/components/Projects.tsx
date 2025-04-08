import { ProjectCard } from "./ProjectCards";

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4"
    >
      <div className="flex flex-col items-center justify-center gap-4 text-center mb-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Projects
        </h2>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
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
        <ProjectCard
          title="Portfolio Website"
          description="A personal portfolio website showcasing my projects, skills, and experience."
          tags={["Next.js", "Tailwind", "TypeScript"]}
          image=""
          githubUrl="https://github.com/FinnSetchell/portfolio"
          demoUrl="https://portfolio-demo.com"
        />
        <ProjectCard
          title="Chat Application"
          description="A real-time chat application with WebSocket support for seamless communication."
          tags={["Node.js", "Socket.IO", "React"]}
          image=""
          githubUrl="https://github.com/FinnSetchell/chat-app"
          demoUrl="https://chat-app-demo.com"
        />
        <ProjectCard
          title="Fitness Tracker"
          description="A fitness tracking app to monitor workouts, progress, and goals."
          tags={["React Native", "Firebase"]}
          image=""
          githubUrl="https://github.com/FinnSetchell/fitness-tracker"
          demoUrl="https://fitness-tracker-demo.com"
        />
      </div>
    </section>
  );
}
