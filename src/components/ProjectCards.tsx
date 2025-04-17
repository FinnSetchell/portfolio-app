import Link from "next/link";
import Image from "next/image";
import { Card } from "./ui/Card";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image?: string; // Made optional
  githubUrl?: string; // Made optional
  demoUrl?: string; // Made optional
}

export function ProjectCard({
  title,
  description,
  tags,
  image = "/placeholder.svg", // Default placeholder image
  githubUrl,
  demoUrl,
}: ProjectCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col h-full" hoverEffect>
      <div className="aspect-video overflow-hidden">
        <Image
          src={image}
          alt={"Project image"}
          width={500}
          height={300}
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
          {githubUrl && (
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
          )}
          {demoUrl && (
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
          )}
        </div>
      </div>
    </Card>
  );
}

