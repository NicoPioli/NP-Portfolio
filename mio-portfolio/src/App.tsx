import "./App.css";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { Element as ScrollElement, scroller } from "react-scroll";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

const sections = ["home", "about", "skills", "projects", "contact"];

export default function App() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollDelay = 850; // Tempo minimo tra due scroll (1s)

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      if (isScrolling) {
        event.preventDefault();
        return;
      }

      let nextSection = currentSection;

      if (event.deltaY > 0 && currentSection < sections.length - 1) {
        nextSection = currentSection + 1;
      } else if (event.deltaY < 0 && currentSection > 0) {
        nextSection = currentSection - 1;
      } else {
        return;
      }

      setIsScrolling(true); // Blocca nuovi scroll
      setCurrentSection(nextSection); // Aggiorna subito la sezione

      scroller.scrollTo(sections[nextSection], {
        duration: 800, // Animazione fluida
        smooth: "easeInOutQuart",
        offset: 0, // Nessun offset per posizionare esattamente la sezione
      });

      setTimeout(() => {
        setIsScrolling(false); // Riabilita lo scroll dopo il ritardo
      }, scrollDelay);

      event.preventDefault();
    };

    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [currentSection, isScrolling]);

  return (
    <div className="bg-gray-900 text-white">
      <Navbar />
      <ScrollElement name="home">
        <Home />
      </ScrollElement>
      <ScrollElement name="about">
        <About />
      </ScrollElement>
      <ScrollElement name="skills">
        <Skills />
      </ScrollElement>
      <ScrollElement name="projects">
        <Projects />
      </ScrollElement>
      <ScrollElement name="contact">
        <Contact />
      </ScrollElement>
    </div>
  );
}
