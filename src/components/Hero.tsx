import { Button } from "./ui/Button";

export default function Hero({ backgroundColor }: { backgroundColor: string }) {
  return (
    <section
      id="hero"
      style={{ backgroundColor }}
      className="min-h-screen flex flex-col items-center justify-center px-4 text-center text-gray-900"
    >
      <h1 className="text-5xl font-bold mb-4">
        Creative Developer at the Intersection of Code & Design
      </h1>
      <p className="text-lg text-gray-700 mb-6">
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
          className="rounded-full px-6 py-3 flex items-center gap-2 border border-black"
          icon={<i className="fab fa-github"></i>}
        >
          GitHub
        </Button>
      </div>
    </section>
  );
}
