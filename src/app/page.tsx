import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import About from "../components/About";
import Contact from "../components/Contact";
import Modding from "../components/Modding";
import lightTheme from "../styles/themes/lightTheme";

export default function Home() {
  const sections = [
    { component: <Hero />, background: lightTheme.background },
    { component: <Projects />, background: lightTheme.secondary },
    { component: <Skills />, background: lightTheme.background },
    { component: <Modding />, background: lightTheme.secondary },
    { component: <About />, background: lightTheme.background },
    { component: <Contact />, background: lightTheme.secondary },
  ];

  return (
    <div className="min-h-screen">
      {sections.map((section, index) => (
        <div
          key={index}
          style={{ backgroundColor: section.background }}
          className="transition-colors duration-300"
        >
          {section.component}
        </div>
      ))}
    </div>
  );
}
