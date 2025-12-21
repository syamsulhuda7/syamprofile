import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import projects from "../data/projects.json";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ProjectSwiper() {
  const [open, setOpen] = useState(false);

  return (
    <section className="py-28 bg-[var(--bg)]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-lg opacity-80">
            Beberapa project pilihan yang menunjukkan kualitas, detail, dan
            pendekatan saya dalam membangun website profesional.
          </p>
        </motion.div>

        {/* Swiper */}
        <Swiper
          spaceBetween={24}
          slidesPerView={1.1}
          autoplay={{ delay: 3000 }}
          loop
          breakpoints={{
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {projects.map((p, i) => (
            <SwiperSlide key={p.id}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="
                  group relative overflow-hidden rounded-2xl
                  border border-black/10 dark:border-white/10
                  bg-black/5 dark:bg-white/5
                "
              >
                {/* Thumbnail */}
                <div
                  className="relative h-52 overflow-hidden group cursor-pointer"
                  onClick={() => setOpen(!open)}
                >
                  <img
                    src={p.thumbnail}
                    alt={p.title}
                    className={`
          absolute top-0 left-0 w-full
          transition-transform duration-5000 ease-in-out
          will-change-transform

          group-hover:-translate-y-[calc(100%-13rem)]
          ${open ? "-translate-y-[calc(100%-13rem)]" : "translate-y-0"}
        `}
                  />

                  <div className="absolute inset-0 bg-black/20 pointer-events-none" />
                </div>

                {/* Overlay */}
                <div
                  className="
                  absolute inset-0
                  bg-gradient-to-t from-black/70 via-black/30 to-transparent
                  opacity-0 group-hover:opacity-100
                  transition
                "
                />

                {/* Content */}
                <div
                  className="
                  absolute bottom-0 left-0 right-0 p-5
                  translate-y-6 group-hover:translate-y-0
                  opacity-0 group-hover:opacity-100
                  transition-all duration-300
                "
                >
                  <span className="text-xs uppercase tracking-wider text-white/70">
                    {p.category}
                  </span>

                  <h3 className="text-lg font-semibold text-white mt-1">
                    {p.title}
                  </h3>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Link
            to="/projects"
            className="
              inline-flex items-center gap-2
              px-8 py-4 rounded-2xl
              bg-[var(--accent)] text-white
              font-medium
              hover:scale-105 transition
            "
          >
            View All Projects →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
