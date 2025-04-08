"use client";

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
        <button onClick={() => handleScroll("projects")} className="text-gray-700 hover:text-black">
          Projects
        </button>
        <button onClick={() => handleScroll("skills")} className="text-gray-700 hover:text-black">
          Skills
        </button>
        <button onClick={() => handleScroll("about")} className="text-gray-700 hover:text-black">
          About
        </button>
        <button onClick={() => handleScroll("contact")} className="text-gray-700 hover:text-black">
          Contact
        </button>
      </nav>
      <button
        onClick={() => handleScroll("contact")}
        className="bg-black text-white rounded-full px-4 py-2 hover:bg-gray-800 transition"
      >
        Get in touch
      </button>
    </header>
  );
}
