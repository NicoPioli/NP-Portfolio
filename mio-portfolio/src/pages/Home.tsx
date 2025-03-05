import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-bold">Ciao, sono Nicolò Pioli</h1>
        <p className="text-xl mt-2">
          Full-Stack Developer specializzato in React & Spring Boot
        </p>
      </motion.div>
    </section>
  );
}
