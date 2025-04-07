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
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-gray-200 text-gray-800 text-xs font-medium px-2 py-1 rounded"
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
            className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 transition"
          >
            <i className="fab fa-github"></i> Code
          </Link>
          <Link
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
          >
            <i className="fas fa-external-link-alt"></i> Demo
          </Link>
        </div>
      </div>
    </Card>
  );
}

