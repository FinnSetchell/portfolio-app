import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import About from "../components/About";
import Contact from "../components/Contact";
import Modding from "../components/Modding";
import lightTheme from "../styles/themes/lightTheme";

export default function Home() {
  const sections = [
    { component: <Hero backgroundColor={lightTheme.background} />, background: lightTheme.background },
    { component: <Projects backgroundColor={lightTheme.secondary} />, background: lightTheme.secondary },
    { component: <Skills backgroundColor={lightTheme.background} />, background: lightTheme.background },
    { component: <Modding backgroundColor={lightTheme.secondary} />, background: lightTheme.secondary },
    { component: <About backgroundColor={lightTheme.background} />, background: lightTheme.background },
    { component: <Contact backgroundColor={lightTheme.secondary} />, background: lightTheme.secondary },
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
