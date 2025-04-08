"use client";

import React, { useEffect, useState } from "react";
import { FaSun, FaMoon, FaGlassCheers } from "react-icons/fa";
import lightTheme from "../styles/themes/lightTheme";
import darkTheme from "../styles/themes/darkTheme";
import partyTheme from "../styles/themes/partyTheme";
import PartyAnimation from "./PartyAnimation";

const ThemeToggleButton: React.FC = () => {
  const [theme, setTheme] = useState<"light" | "dark" | "party">("light");
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    const themeStyles =
      theme === "light" ? lightTheme : theme === "dark" ? darkTheme : partyTheme;

    Object.entries(themeStyles).forEach(([key, value]) => {
      root.style.setProperty(`--${key}`, value);
    });
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === "party" ? "light" : prevTheme === "light" ? "dark" : "light"
    );
  };

  const handleMouseEnter = () => {
    const timeout = setTimeout(() => {
      setTheme("party");
    }, 2000); // Activate party theme after 2 seconds of hovering
    setHoverTimeout(timeout);
  };

  const handleMouseLeave = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
  };

  return (
    <>
      <button
        onClick={toggleTheme}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 1000,
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          backgroundColor:
            theme === "light"
              ? lightTheme.cardBackground
              : theme === "dark"
              ? darkTheme.cardBackground
              : partyTheme.cardBackground,
          color:
            theme === "light"
              ? lightTheme.text
              : theme === "dark"
              ? darkTheme.text
              : partyTheme.text,
          border: "none",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        {theme === "light" ? <FaSun /> : theme === "dark" ? <FaMoon /> : <FaGlassCheers />}
      </button>
      {theme === "party" && <PartyAnimation isActive={theme === "party"} />}
    </>
  );
};

export default ThemeToggleButton;
