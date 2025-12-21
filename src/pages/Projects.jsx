import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import projects from "../data/projects.json";
import { FiExternalLink, FiX } from "react-icons/fi";

const FILTERS = [
  { label: "All Projects", value: "all" },
  { label: "Landing Page", value: "landing-page" },
  { label: "Company Profile", value: "company-profile" },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return projects;
    return projects.filter((p) => p.type === activeFilter);
  }, [activeFilter]);

  return (
    <>
      {/* SECTION */}
      <section className="py-28 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 max-w-2xl"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Selected Projects
          </h1>
          <p className="opacity-80 text-lg">
            Beberapa project yang telah saya kerjakan untuk membantu bisnis
            membangun website yang profesional dan efektif.
          </p>
        </motion.div>

        {/* FILTER */}
        <div className="flex flex-wrap gap-3 mb-14">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`
                px-5 py-2 rounded-full text-sm font-medium transition
                border
                ${
                  activeFilter === f.value
                    ? "bg-[var(--accent)] text-white border-[var(--accent)]"
                    : "border-white/15 hover:bg-white/10"
                }
              `}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* GRID */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((p, i) => (
              <motion.button
                key={p.id}
                layout
                onClick={() => setActiveProject(p)}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                className="
                  text-left
                  group
                  rounded-2xl
                  overflow-hidden
                  border border-white/10
                  bg-white/5 backdrop-blur
                  hover:border-[var(--accent)]
                  hover:-translate-y-2
                  transition-all
                "
              >
                {/* Thumbnail */}
                <div className="relative h-52 overflow-hidden group">
                  <img
                    src={p.thumbnail}
                    alt={p.title}
                    className="
      absolute top-0 left-0 w-full
      will-change-transform
      transition-transform duration-7000 ease-in-out
      group-hover:-translate-y-[calc(100%-13rem)]
    "
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  <span className="text-xs uppercase tracking-wide opacity-70">
                    {p.category}
                  </span>
                  <h3 className="mt-1 font-semibold text-lg">{p.title}</h3>
                  <p className="mt-2 text-sm opacity-80 line-clamp-2">
                    {p.description}
                  </p>
                </div>
              </motion.button>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* MODAL */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-black/70 backdrop-blur flex items-center justify-center px-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="
                relative
                w-full max-w-3xl
                bg-[var(--bg)]
                rounded-2xl
                p-6 sm:p-8
                border border-white/10
                max-h-[90vh]
                overflow-y-auto
              "
            >
              {/* Close */}
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 p-2 rounded-lg hover:bg-white/10"
              >
                <FiX size={20} />
              </button>

              {/* Header */}
              <img
                src={activeProject.thumbnail}
                alt={activeProject.title}
                className="rounded-xl mb-6"
              />

              <h2 className="text-3xl font-bold mb-1">{activeProject.title}</h2>
              <p className="opacity-70 mb-6">
                {activeProject.industry} • {activeProject.category}
              </p>

              <div className="mb-5">
                <h4 className="font-semibold mb-1">Problem</h4>
                <p className="opacity-80">{activeProject.problem}</p>
              </div>

              <div className="mb-5">
                <h4 className="font-semibold mb-1">Solution</h4>
                <p className="opacity-80">{activeProject.solution}</p>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-2">Key Features</h4>
                <ul className="grid sm:grid-cols-2 gap-2 text-sm opacity-85">
                  {activeProject.features.map((f, i) => (
                    <li key={i}>• {f}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h4 className="font-semibold mb-2">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {activeProject.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full text-xs bg-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={activeProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center gap-2
                  px-6 py-3
                  rounded-xl
                  bg-[var(--accent)]
                  text-white font-medium
                  hover:scale-105 transition
                "
              >
                Visit Website <FiExternalLink />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
