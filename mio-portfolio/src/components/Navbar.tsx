import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-gray-900 text-white p-4 z-50">
      <div className="container mx-auto flex justify-center space-x-6">
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-gray-400"
        >
          Home
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-gray-400"
        >
          About
        </Link>
        <Link
          to="skills"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-gray-400"
        >
          Skills
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-gray-400"
        >
          Projects
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-gray-400"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
