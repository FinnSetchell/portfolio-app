"use client";

import { Button } from "./ui/Button";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "var(--background)",
        color: "var(--text)",
        borderTop: "1px solid var(--border)",
      }}
      className="py-6 text-center"
    >
      <div className="container mx-auto flex flex-col items-center justify-center text-center">
        <p className="text-sm" style={{ color: "var(--secondaryText)" }}>
          © {new Date().getFullYear()} Finn Setchell. All rights reserved.
        </p>
        <div className="flex gap-4 mt-4">
          <a
            href="https://github.com/FinnSetchell"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Button
              variant="white"
              className="p-3"
              icon={<i className="fab fa-github text-xl"></i>}
            />
          </a>
          <a
            href="mailto:finn@setchell.org"
            aria-label="Email"
          >
            <Button
              variant="white"
              className="p-3"
              icon={<i className="fas fa-envelope text-xl"></i>}
            />
          </a>
          <a
            href="https://discord.gg/S5nffJbuvA"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Discord"
          >
            <Button
              variant="white"
              className="p-3"
              icon={<i className="fab fa-discord text-xl"></i>}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
