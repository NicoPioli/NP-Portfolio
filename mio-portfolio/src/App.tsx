import "./App.css";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { Element as ScrollElement, scroller } from "react-scroll";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import SectionIndicator from "./components/SectionIndicator";

const sections = ["home", "about", "skills", "projects", "contact"];
const sectionBackgrounds: ("dark" | "light")[] = [
  "dark",
  "light",
  "dark",
  "light",
  "dark",
];

export default function App() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollDelay = 850;

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

      setIsScrolling(true);
      setCurrentSection(nextSection);

      scroller.scrollTo(sections[nextSection], {
        duration: 800,
        smooth: "easeInOutQuart",
        offset: 0,
      });

      setTimeout(() => {
        setIsScrolling(false);
      }, scrollDelay);

      event.preventDefault();
    };

    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [currentSection, isScrolling]);

  // ✅ NEW: aggiorna currentSection dinamicamente con IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection && visibleSection.target instanceof HTMLElement) {
          const index = sections.findIndex(
            (section) => section === visibleSection.target.getAttribute("name")
          );
          if (index !== -1 && index !== currentSection) {
            setCurrentSection(index);
          }
        }
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => {
      const element = document.querySelector(`[name="${section}"]`);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-gray-900 text-white relative">
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

      <SectionIndicator
        currentSection={currentSection}
        totalSections={sections.length}
        sectionBackgrounds={sectionBackgrounds}
        sections={sections}
        onSectionSelect={(index) => setCurrentSection(index)}
      />
    </div>
  );
}
