import { Link } from "react-scroll";

interface NavbarProps {
  setCurrentSection: (index: number) => void;
}

export default function Navbar({ setCurrentSection }: NavbarProps) {
  const navItems = [
    { label: "Home", target: "home" },
    { label: "About", target: "about" },
    { label: "Skills", target: "skills" },
    { label: "Projects", target: "projects" },
    { label: "Contact", target: "contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-primary/95 text-white p-4 z-50  backdrop-blur-md">
      <div className="container mx-auto flex justify-center space-x-6">
        {navItems.map((item, index) => (
          <Link
            key={item.target}
            to={item.target}
            smooth={true}
            duration={800}
            spy={true}
            activeClass="text-accent"
            onClick={() => setCurrentSection(index)}
            className="cursor-pointer hover-accent transition-colors duration-200"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
