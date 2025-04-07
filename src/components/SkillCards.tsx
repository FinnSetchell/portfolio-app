"use client";

import { ReactNode, useState } from "react";

interface SkillCardProps {
  name: string;
  description: string;
  icon?: ReactNode; // Optional icon
}

export function SkillCard({ name, description, icon }: SkillCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex flex-col items-center justify-start p-4 border rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-center text-4xl mb-2">
        {icon || <span>{name[0]}</span>} {/* Show icon or first letter */}
      </div>
      <h3 className="text-lg font-bold">{name}</h3>
      <div
        className={`transition-all duration-300 overflow-hidden ${
          isHovered ? "max-h-40 mt-2" : "max-h-0"
        }`}
      >
        <p className="text-sm text-gray-600 text-center">{description}</p>
      </div>
    </div>
  );
}
