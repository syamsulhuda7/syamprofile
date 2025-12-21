import { motion } from "framer-motion";

export default function Trust() {
  return (
    <section className="py-20 bg-slate-100 dark:bg-slate-900">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8"
      >
        <div>
          <h3 className="text-4xl font-bold">5+</h3>
          <p>Project Selesai</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold">100%</h3>
          <p>Client Satisfaction</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold">Modern</h3>
          <p>Tech Stack</p>
        </div>
      </motion.div>
    </section>
  );
}
