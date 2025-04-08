"use client";

import { ReactNode } from "react";
import { Card } from "./ui/Card";

interface SkillCardProps {
  name: string;
  description: string;
  icon?: ReactNode;
}

export function SkillCard({ name, description, icon }: SkillCardProps) {
  return (
    <Card className="flex flex-col items-center justify-start relative" hoverEffect>
      <div
        className="flex items-center justify-center text-4xl mb-2"
        style={{ color: "var(--headerText)" }}
      >
        {icon || <span>{name[0]}</span>} {/* Show icon or first letter */}
      </div>
      <h3 className="text-lg font-bold" style={{ color: "var(--headerText)" }}>
        {name}
      </h3>
      <div
        className={`transition-all duration-300 overflow-hidden ${
          description ? "max-h-40 mt-2" : "max-h-0"
        }`}
      >
        <p
          className="text-sm text-center"
          style={{ color: "var(--secondaryText)" }}
        >
          {description}
        </p>
      </div>
    </Card>
  );
}
