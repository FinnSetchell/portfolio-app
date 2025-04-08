import Link from "next/link";
import { Card } from "./ui/Card";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  githubUrl: string;
  demoUrl: string;
}

export function ProjectCard({
  title,
  description,
  tags,
  image,
  githubUrl,
  demoUrl,
}: ProjectCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col h-full" hoverEffect>
      <div className="aspect-video overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={"Project image"}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold" style={{ color: "var(--headerText)" }}>
          {title}
        </h3>
        <p className="text-sm mb-4" style={{ color: "var(--secondaryText)" }}>
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              style={{
                backgroundColor: "var(--secondary)",
                color: "var(--text)",
              }}
              className="text-xs font-medium px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          <Link
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border rounded hover:bg-gray-100 transition"
            style={{
              borderColor: "var(--border)",
              color: "var(--text)",
            }}
          >
            <i className="fab fa-github"></i> Code
          </Link>
          <Link
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded hover:bg-gray-800 transition"
            style={{
              backgroundColor: "var(--blackButton)",
              color: "var(--blackButtonText)",
            }}
          >
            <i className="fas fa-external-link-alt"></i> Demo
          </Link>
        </div>
      </div>
    </Card>
  );
}

