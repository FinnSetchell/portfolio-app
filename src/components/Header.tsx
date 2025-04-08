"use client";

import { Button } from "./ui/Button";
import ThemeToggleButton from "./ThemeToggleButton";

export default function Header() {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      style={{
        backgroundColor: "var(--background)",
        color: "var(--text)",
        borderBottom: "1px solid var(--border)",
      }}
      className="sticky top-0 z-50 flex justify-between items-center px-8 py-4 backdrop-blur-md"
    >
      <button
        onClick={() => handleScroll("hero")}
        className="text-xl font-bold hover:text-opacity-80"
        style={{ color: "var(--text)" }}
      >
        Finn Setchell
      </button>
      <nav className="flex gap-6">
        <Button
          onClick={() => handleScroll("projects")}
          variant="white"
          outline={false}
          className="px-4 py-2 rounded-md"
          style={{
            backgroundColor: "var(--background)",
            color: "var(--text)",
            border: "none",
          }}
        >
          Projects
        </Button>
        <Button
          onClick={() => handleScroll("skills")}
          variant="white"
          outline={false}
          className="px-4 py-2 rounded-md"
          style={{
            backgroundColor: "var(--background)",
            color: "var(--text)",
            border: "none",
          }}
        >
          Skills
        </Button>
        <Button
          onClick={() => handleScroll("about")}
          variant="white"
          outline={false}
          className="px-4 py-2 rounded-md"
          style={{
            backgroundColor: "var(--background)",
            color: "var(--text)",
            border: "none",
          }}
        >
          About
        </Button>
        <Button
          onClick={() => handleScroll("contact")}
          variant="white"
          outline={false}
          className="px-4 py-2 rounded-md"
          style={{
            backgroundColor: "var(--background)",
            color: "var(--text)",
            border: "none",
          }}
        >
          Contact
        </Button>
      </nav>
      <Button
        onClick={() => handleScroll("contact")}
        variant="black"
        className="rounded-full px-4 py-2"
      >
        Get in touch
      </Button>
    </header>
  );
}
