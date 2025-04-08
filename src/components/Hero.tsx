"use client";

import { Button } from "./ui/Button";

export default function Hero() {
  return (
    <section
      id="hero"
      style={{ backgroundColor: "var(--background)", color: "var(--text)" }}
      className="min-h-screen flex flex-col items-center justify-center px-4 text-center"
    >
      <h1 className="text-5xl font-bold mb-4" style={{ color: "var(--headerText)" }}>
        Creative Developer at the Intersection of Code & Design
      </h1>
      <p className="text-lg mb-6" style={{ color: "var(--secondaryText)" }}>
        From Minecraft mods to CAD-based builds, I create efficient, engaging
        tools and experiences rooted in problem-solving and engineering.
      </p>
      <div className="flex gap-4">
        <Button
          variant="black"
          className="rounded-full px-6 py-3 flex items-center gap-2"
          icon={<i className="fab fa-discord"></i>}
        >
          Discord
        </Button>
        <Button
          variant="white"
          className="rounded-full px-6 py-3 flex items-center gap-2 border"
          icon={<i className="fab fa-github"></i>}
        >
          GitHub
        </Button>
      </div>
    </section>
  );
}
