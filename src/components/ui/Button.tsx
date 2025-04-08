"use client";

import { ReactNode } from "react";
import lightTheme from "../../styles/themes/lightTheme";

interface ButtonProps {
  children: ReactNode;
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
        backgroundColor: isWhite ? lightTheme.whiteButton : lightTheme.blackButton,
        color: isWhite ? lightTheme.whiteButtonText : lightTheme.blackButtonText,
        border: outline
          ? `1px solid ${isWhite ? lightTheme.whiteButtonBorder : lightTheme.blackButton}`
          : "none",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.6 : 1,
      }}
      onMouseOver={(e) => {
        if (!disabled) {
          (e.target as HTMLButtonElement).style.backgroundColor = isWhite
            ? lightTheme.whiteButtonHover
            : lightTheme.blackButtonHover;
        }
      }}
      onMouseOut={(e) => {
        if (!disabled) {
          (e.target as HTMLButtonElement).style.backgroundColor = isWhite
            ? lightTheme.whiteButton
            : lightTheme.blackButton;
        }
      }}
    >
      {icon && iconPosition === "left" && <span>{icon}</span>}
      {children}
      {icon && iconPosition === "right" && <span>{icon}</span>}
    </button>
  );
}
