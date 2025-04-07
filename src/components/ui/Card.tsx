import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean; // Optional hover effect
}

export function Card({ children, className = "", hoverEffect = false }: CardProps) {
  return (
    <div
      className={`border rounded-lg shadow-md p-6 bg-white ${className} ${
        hoverEffect ? "transition-transform duration-300 hover:scale-105 hover:shadow-lg" : ""
      }`}
    >
      {children}
    </div>
  );
}
