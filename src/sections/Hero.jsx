import { motion } from "framer-motion";
import bg from "../assets/images/bg.webp";
import ps from "../assets/images/syam.webp";
import { PiHandWavingBold } from "react-icons/pi";
import { Link } from "react-router";

export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/90" />

      {/* Accent glow */}
      <div className="absolute -top-48 -left-48 w-[420px] h-[420px] bg-[var(--accent)]/20 blur-[140px]" />

      <div
        className="
          relative z-10
          max-w-7xl mx-auto
          px-6
          pt-32 pb-24
          grid gap-16
          lg:grid-cols-2
          items-center
        "
      >
        {/* LEFT – TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="
            max-w-xl
            bg-white/10 backdrop-blur-lg
            border border-white/15
            rounded-2xl
            p-6 sm:p-8 md:p-10
            shadow-xl
          "
        >
          {/* Badge */}
          <span
            className="
    inline-flex items-center gap-2 mb-5
    px-4 py-1.5 rounded-full
    text-xs font-semibold
    bg-[var(--accent)]/15
    text-[var(--accent)]
  "
          >
            Web Developer & Digital Builder
          </span>

          {/* Intro */}
          <p className="text-sm tracking-widest opacity-70 mb-1 flex items-center">
            Hello <PiHandWavingBold className="mx-1 scale-x-[-1] -rotate-12" />,
            I am
          </p>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Syamsul Huda
          </h1>

          {/* Role intro */}
          <p className="mt-2 text-sm tracking-widest opacity-60">as</p>

          {/* Role */}
          <p className="text-xl sm:text-2xl pl-4 font-semibold text-[var(--accent)]">
            Professional Web Developer
          </p>

          {/* Value */}
          <p className="my-6 text-base sm:text-lg opacity-80 max-w-md">
            Website profesional dengan performa tinggi, desain modern, dan siap
            berkembang.
          </p>

          <div className="flex flex-wrap gap-3">
            <button className="px-6 py-3 rounded-xl bg-[var(--accent)] text-white font-medium hover:scale-105 transition">
              <Link to="/projects">Lihat Project</Link>
            </button>

            <a
              href="https://wa.me/6281229670740"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl border border-white/30 hover:bg-white/10 transition inline-flex items-center cursor-pointer"
            >
              Konsultasi Gratis
            </a>
          </div>
        </motion.div>

        {/* RIGHT – PHOTO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex justify-center lg:justify-end"
        >
          {/* Glow */}
          <div className="absolute w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] bg-[var(--accent)]/30 blur-[100px] rounded-full" />

          {/* Image */}
          <div
            className="
              relative
              w-48 h-48
              sm:w-64 sm:h-64
              md:w-72 md:h-72
              rounded-3xl
              overflow-hidden
              border border-white/20
              shadow-xl
            "
          >
            <img
              src={ps}
              alt="Syamsul Huda"
              className="w-full h-full -scale-x-100 object-cover object-top"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
