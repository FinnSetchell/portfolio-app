export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex justify-between items-center px-8 py-4 border-b border-gray-200 bg-white/70 backdrop-blur-md">
      <a href="#top" className="text-xl font-bold">
        Finn Setchell
      </a>
      <nav className="flex gap-6">
        <a href="#projects" className="text-gray-700 hover:text-black">
          Projects
        </a>
        <a href="#skills" className="text-gray-700 hover:text-black">
          Skills
        </a>
        <a href="#about" className="text-gray-700 hover:text-black">
          About
        </a>
        <a href="#contact" className="text-gray-700 hover:text-black">
          Contact
        </a>
      </nav>
      <a
        href="#contact"
        className="bg-black text-white rounded-full px-4 py-2 hover:bg-gray-800 transition"
      >
        Get in touch
      </a>
    </header>
  );
}
