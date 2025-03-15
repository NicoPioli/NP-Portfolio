export default function Contact() {
  return (
    <section className="h-screen flex flex-col items-center justify-center bg-primary text-white">
      <h2 className="text-4xl font-bold text-accent">Contattami</h2>
      <p className="mt-4 text-white/80">Email: nico.pioli@hotmail.it</p>
      <p className="mt-2">
        GitHub:{" "}
        <a
          href="https://github.com/NicoPioli"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:opacity-80 transition"
        >
          NicoPioli
        </a>
      </p>
    </section>
  );
}
