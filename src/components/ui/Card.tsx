import { ReactNode } from "react";
import lightTheme from "../../styles/themes/lightTheme";

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
        backgroundColor: lightTheme.cardBackground,
        boxShadow: `0 4px 6px ${lightTheme.cardShadow}`,
      }}
    >
      {children}
    </div>
  );
}
