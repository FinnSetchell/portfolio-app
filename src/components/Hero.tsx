export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center bg-white text-center px-4"
    >
      <h1 className="text-5xl font-bold mb-4">
        Creative Developer at the Intersection of Code & Design
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        From Minecraft mods to CAD-based builds, I create efficient, engaging
        tools and experiences rooted in problem-solving and engineering.
      </p>
      <div className="flex gap-4">
        <a
          href="https://discord.gg/S5nffJbuvA"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white rounded-full px-6 py-3 flex items-center gap-2 hover:bg-gray-800 transition"
        >
          <i className="fab fa-discord"></i> Discord
        </a>
        <a
          href="https://github.com/FinnSetchell"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-black border border-black rounded-full px-6 py-3 flex items-center gap-2 hover:bg-gray-800 hover:text-white transition"
        >
          <i className="fab fa-github"></i> GitHub
        </a>
      </div>
    </section>
  );
}
