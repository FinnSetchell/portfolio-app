"use client";

export default function About() {
  return (
    <section
      id="about"
      style={{ backgroundColor: "var(--background)", color: "var(--text)" }}
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-4"
    >
      <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
        <img
          src={"/placeholder.svg"}
          alt="About Me"
          className="rounded-lg shadow-lg max-w-full h-auto md:max-h-[400px]"
        />
      </div>
      <div className="w-full md:w-1/2 flex flex-col items-start text-left px-4">
        <div className="flex flex-col items-start justify-center gap-4 text-left mb-6">
          <h2
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
            style={{ color: "var(--text)" }}
          >
            About Me
          </h2>
          <p className="md:text-xl" style={{ color: "var(--mutedText)" }}>
            Learn more about my background and what drives me.
          </p>
        </div>
        <p className="text-lg mb-4" style={{ color: "var(--text)" }}>
          Hey! I’m a creative developer who loves making things — whether it’s
          building massive Minecraft mods, designing games in Unity, or
          tinkering with custom hardware and 3D-printed projects. I’m always
          chasing new ideas and learning as I go.
        </p>
        <p className="text-lg mb-4" style={{ color: "var(--text)" }}>
          My background is a mix of coding, engineering, and design. I’ve worked
          on everything from game servers with tens of thousands of players to
          small personal tools that solve problems in smart ways. I like working
          in teams, figuring stuff out, and making cool things that actually
          work.
        </p>
        <p className="text-lg mb-6" style={{ color: "var(--text)" }}>
          When I’m not at my desk, I’m usually outdoors — hiking, camping, or
          heading out on longer trips into the mountains. Being outside helps me
          reset, and it’s a big part of how I stay creative and balanced.
        </p>
        <div className="flex gap-4">
          <a
            href="mailto:finn@setchell.org"
            aria-label="Email"
            style={{
              backgroundColor: "var(--whiteButton)",
              color: "var(--whiteButtonText)",
              border: "1px solid var(--whiteButtonBorder)",
            }}
            className="rounded-lg p-3 hover:bg-gray-100 transition"
          >
            <i className="fas fa-envelope"></i>
          </a>
          <a
            href="https://github.com/FinnSetchell"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            style={{
              backgroundColor: "var(--blackButton)",
              color: "var(--blackButtonText)",
              border: "1px solid var(--blackButton)",
            }}
            className="rounded-lg p-3 hover:bg-gray-800 transition"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
