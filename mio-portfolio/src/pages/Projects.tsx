export default function Projects() {
  const projects = [
    {
      name: "E-commerce App",
      tech: "React, Spring Boot",
      link: "https://github.com/NicoPioli/e-commerce",
    },
    {
      name: "Dashboard Aziendale",
      tech: "Vue.js, Laravel",
      link: "https://github.com/NicoPioli/dashboard",
    },
  ];

  return (
    <section className="h-screen flex flex-col items-center justify-center bg-secondary text-white">
      <h2 className="text-4xl font-bold text-accent">Progetti</h2>
      <div className="mt-6 w-full max-w-xl px-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-4 mb-4 rounded-lg bg-primary text-white border border-secondary"
          >
            <h3 className="text-xl font-semibold text-accent">
              {project.name}
            </h3>
            <p className="text-sm text-muted">{project.tech}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline hover:opacity-80 transition"
            >
              GitHub Repo
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
