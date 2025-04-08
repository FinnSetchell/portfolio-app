import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import About from "../components/About";
import Contact from "../components/Contact";
import Modding from "../components/Modding";

export default function Home() {
  const sections = [
    { component: <Hero />, cssVariable: "var(--background)" },
    { component: <Projects />, cssVariable: "var(--secondary)" },
    { component: <Skills />, cssVariable: "var(--background)" },
    { component: <Modding />, cssVariable: "var(--secondary)" },
    { component: <About />, cssVariable: "var(--background)" },
    { component: <Contact />, cssVariable: "var(--secondary)" },
  ];

  return (
    <div className="min-h-screen">
      {sections.map((section, index) => (
        <div
          key={index}
          style={{ backgroundColor: section.cssVariable }}
          className="transition-colors duration-300"
        >
          {section.component}
        </div>
      ))}
    </div>
  );
}
