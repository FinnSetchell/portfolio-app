export default function Footer() {
  return (
    <footer className="bg-gray-100 py-6 border-t border-gray-200">
      <div className="container mx-auto flex flex-col items-center justify-center text-center">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} Finn Setchell. All rights reserved.
        </p>
        <div className="flex gap-4 mt-4">
          <a
            href="https://github.com/FinnSetchell"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black transition"
            aria-label="GitHub"
          >
            <i className="fab fa-github text-xl"></i>
          </a>
          <a
            href="mailto:finn@setchell.org"
            className="text-gray-600 hover:text-black transition"
            aria-label="Email"
          >
            <i className="fas fa-envelope text-xl"></i>
          </a>
          <a
            href="https://discord.gg/S5nffJbuvA"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black transition"
            aria-label="Discord"
          >
            <i className="fab fa-discord text-xl"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
