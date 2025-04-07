import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Projects />
      <Skills />
      <section
        id="about"
        className="min-h-screen flex items-center justify-center bg-gray-100"
      >
        <h2 className="text-3xl font-bold">About</h2>
        {/* Add your about content here */}
      </section>
      <section
        id="contact"
        className="min-h-screen flex items-center justify-center bg-white"
      >
        <h2 className="text-3xl font-bold">Contact</h2>
        {/* Add your contact content here */}
      </section>
    </div>
  );
}
