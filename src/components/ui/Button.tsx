"use client";

import { ReactNode, CSSProperties } from "react";

interface ButtonProps {
  children?: ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  variant?: "white" | "black";
  disabled?: boolean; // Option to disable the button
  fullWidth?: boolean; // Option to make the button take full width
  ariaLabel?: string; // Accessibility label for screen readers
  icon?: ReactNode; // Icon to display inside the button
  iconPosition?: "left" | "right"; // Position of the icon
  outline?: boolean; // Option to remove the outline
  style?: CSSProperties; // Inline styles for the button
}

export function Button({
  children,
  onClick,
  className = "",
  type = "button",
  variant = "black",
  disabled = false,
  fullWidth = false,
  ariaLabel,
  icon,
  iconPosition = "left",
  outline = true,
  style,
}: ButtonProps) {
  const isWhite = variant === "white";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={`flex items-center justify-center gap-2 px-4 py-2 rounded-md font-medium transition-colors duration-300 ${
        fullWidth ? "w-full" : ""
      } ${className}`}
      style={{
        backgroundColor: isWhite ? "var(--whiteButton)" : "var(--blackButton)",
        color: isWhite ? "var(--whiteButtonText)" : "var(--blackButtonText)",
        border: outline
          ? `1px solid ${isWhite ? "var(--whiteButtonBorder)" : "var(--blackButton)"}`
          : "none",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.6 : 1,
        ...style, // Merge inline styles
      }}
      onMouseOver={(e) => {
        if (!disabled) {
          (e.target as HTMLButtonElement).style.backgroundColor = isWhite
            ? "var(--whiteButtonHover)"
            : "var(--blackButtonHover)";
        }
      }}
      onMouseOut={(e) => {
        if (!disabled) {
          (e.target as HTMLButtonElement).style.backgroundColor = isWhite
            ? "var(--whiteButton)"
            : "var(--blackButton)";
        }
      }}
    >
      {icon && iconPosition === "left" && <span>{icon}</span>}
      {children}
      {icon && iconPosition === "right" && <span>{icon}</span>}
    </button>
  );
}
