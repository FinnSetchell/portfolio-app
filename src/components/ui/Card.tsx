import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export function Card({ children, className = "", hoverEffect = false }: CardProps) {
  return (
    <div
      className={`border rounded-lg p-6 ${className} ${
        hoverEffect ? "transition-transform duration-300 hover:scale-105" : ""
      }`}
      style={{
        backgroundColor: "var(--cardBackground)",
        boxShadow: `0 4px 6px var(--cardShadow)`,
      }}
    >
      {children}
    </div>
  );
}
