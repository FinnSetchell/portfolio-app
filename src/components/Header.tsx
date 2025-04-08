"use client";

import { Button } from "./ui/Button";

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
    <header className="sticky top-0 z-50 flex justify-between items-center px-8 py-4 border-b border-gray-200 bg-white/70 backdrop-blur-md">
      <button
        onClick={() => handleScroll("hero")}
        className="text-xl font-bold text-gray-700 hover:text-black"
      >
        Finn Setchell
      </button>
      <nav className="flex gap-6">
        <Button
          onClick={() => handleScroll("projects")}
          variant="white"
          outline={false}
          className="text-gray-700"
        >
          Projects
        </Button>
        <Button
          onClick={() => handleScroll("skills")}
          variant="white"
          outline={false}
          className="text-gray-700"
        >
          Skills
        </Button>
        <Button
          onClick={() => handleScroll("about")}
          variant="white"
          outline={false}
          className="text-gray-700"
        >
          About
        </Button>
        <Button
          onClick={() => handleScroll("contact")}
          variant="white"
          outline={false}
          className="text-gray-700"
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
