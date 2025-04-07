import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <section
        id="projects"
        className="min-h-screen flex items-center justify-center bg-gray-100"
      >
        <h2 className="text-3xl font-bold">Projects</h2>
        {/* Add your projects content here */}
      </section>
      <section
        id="skills"
        className="min-h-screen flex items-center justify-center bg-white"
      >
        <h2 className="text-3xl font-bold">Skills</h2>
        {/* Add your skills content here */}
      </section>
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
