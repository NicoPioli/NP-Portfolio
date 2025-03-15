import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { FaReact, FaAngular, FaJava, FaPhp, FaGitAlt } from "react-icons/fa";
import {
  SiSpringboot,
  SiMysql,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";

const skills = [
  {
    name: "React",
    icon: <FaReact className="text-blue-400" />,
    description: "Libreria per interfacce utente dinamiche e component-based.",
  },
  {
    name: "Angular",
    icon: <FaAngular className="text-red-600" />,
    description: "Framework completo per applicazioni web scalabili.",
  },
  {
    name: "Java",
    icon: <FaJava className="text-orange-500" />,
    description: "Linguaggio OOP per applicazioni enterprise.",
  },
  {
    name: "Spring Boot",
    icon: <SiSpringboot className="text-green-500" />,
    description: "Framework per microservizi in Java.",
  },
  {
    name: "PHP",
    icon: <FaPhp className="text-indigo-500" />,
    description: "Linguaggio di scripting lato server per il web.",
  },
  {
    name: "MySQL",
    icon: <SiMysql className="text-blue-600" />,
    description: "Database relazionale per gestione dati strutturati.",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-yellow-400" />,
    description: "Linguaggio principale per il web frontend dinamico.",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-500" />,
    description: "JavaScript tipizzato per codice più robusto.",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-teal-400" />,
    description: "Framework utility-first per lo styling.",
  },
  {
    name: "Git",
    icon: <FaGitAlt className="text-orange-600" />,
    description: "Sistema di controllo versione distribuito.",
  },
];

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState<any>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [showCentralText, setShowCentralText] = useState(true);
  const [showSkillDescription, setShowSkillDescription] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex flex-col items-center justify-center bg-primary text-white relative overflow-hidden"
    >
      <div className="relative w-[800px] h-[800px] flex items-center justify-center">
        {/* Testo centrale */}
        {showCentralText && !selectedSkill && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={hasAnimated ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1 }}
            className="absolute text-center max-w-md z-10"
          >
            <h2 className="text-4xl font-bold mb-4 text-accent">
              Skills & Tools
            </h2>
            <p className="text-lg text-white/80">
              Ecco le tecnologie con cui lavoro quotidianamente, suddivise tra
              sviluppo frontend, backend e strumenti essenziali.
            </p>
          </motion.div>
        )}

        {/* Icone in cerchio animate */}
        <div className="absolute w-full h-full flex items-center justify-center">
          {skills.map((skill, index) => {
            const angle = (index / skills.length) * (2 * Math.PI);
            const x = Math.cos(angle) * 300;
            const y = Math.sin(angle) * 300;

            const isSelected = selectedSkill?.name === skill.name;

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: 0, y: 0 }}
                animate={
                  hasAnimated
                    ? isSelected
                      ? { x: 0, y: -100, scale: 1.1, opacity: 1 }
                      : { opacity: 1, x, y, scale: 1 }
                    : {}
                }
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="absolute flex flex-col items-center cursor-pointer"
                onClick={() => {
                  if (isSelected) {
                    setSelectedSkill(null);
                    setShowCentralText(false);
                    setShowSkillDescription(false);
                    setTimeout(() => {
                      setShowCentralText(true);
                    }, 600);
                  } else {
                    setSelectedSkill(skill);
                    setShowCentralText(false);
                    setShowSkillDescription(false);
                    setTimeout(() => {
                      setShowSkillDescription(true);
                    }, 800);
                  }
                }}
                whileHover={{ scale: isSelected ? 1.2 : 1.1 }}
              >
                <Tilt
                  glareEnable={true}
                  glareMaxOpacity={0.2}
                  scale={1.05}
                  tiltMaxAngleX={15}
                  tiltMaxAngleY={15}
                  className="rounded-xl"
                >
                  <div className="text-6xl p-6 rounded-2xl bg-gradient-skill  border-secondary">
                    {skill.icon}
                  </div>
                </Tilt>
                <p className="mt-2 text-sm">{skill.name}</p>

                {isSelected && showSkillDescription && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 20 }}
                    transition={{ duration: 0.5 }}
                    className="mt-4 text-center w-64"
                  >
                    <p className="text-base text-muted">{skill.description}</p>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
