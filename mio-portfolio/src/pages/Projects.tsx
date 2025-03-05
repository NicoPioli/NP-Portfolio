export default function Projects() {
  const projects = [
    { name: "E-commerce App", tech: "React, Spring Boot", link: "https://github.com/NicoPioli/e-commerce" },
    { name: "Dashboard Aziendale", tech: "Vue.js, Laravel", link: "https://github.com/NicoPioli/dashboard" },
  ];

  return (
    <section className="h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-900">
      <h2 className="text-4xl font-bold">Progetti</h2>
      <div className="mt-4">
        {projects.map((project, index) => (
          <div key={index} className="p-4 bg-gray-300 rounded-md my-2">
            <h3 className="text-xl font-semibold">{project.name}</h3>
            <p className="text-sm text-gray-600">{project.tech}</p>
            <a href={project.link} target="_blank" className="text-blue-500 hover:underline">GitHub Repo</a>
          </div>
        ))}
      </div>
    </section>
  );
}
