import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import About from "../components/About";
import Contact from "../components/Contact";
import Modding from "../components/Modding";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Projects />
      <Skills />
      <Modding />
      <About />
      <Contact />
    </div>
  );
}
