import { motion } from "framer-motion";
import { FiLayout, FiBriefcase, FiCode, FiTrendingUp } from "react-icons/fi";

const services = [
  {
    icon: FiLayout,
    title: "Landing Page Development",
    desc: "Landing page modern dan conversion-focused untuk meningkatkan leads dan penjualan bisnis Anda.",
  },
  {
    icon: FiBriefcase,
    title: "Company Profile Website",
    desc: "Website profesional untuk membangun kepercayaan dan kredibilitas brand di mata klien dan partner.",
  },
  {
    icon: FiCode,
    title: "Custom Web Application",
    desc: "Pengembangan web app sesuai kebutuhan bisnis dengan performa tinggi dan scalable.",
  },
  {
    icon: FiTrendingUp,
    title: "Website Optimization & Growth",
    desc: "Optimasi kecepatan, struktur UI/UX, dan kesiapan website untuk perkembangan bisnis jangka panjang.",
  },
];

export default function Services() {
  return (
    <section className="py-32 bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-20"
        >
          <span className="text-sm uppercase tracking-widest text-[var(--accent)] font-medium">
            Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-5">
            Solusi Web untuk Bisnis yang Ingin Tumbuh
          </h2>
          <p className="text-lg opacity-80">
            Setiap layanan dirancang dengan pendekatan strategis, bukan sekadar
            tampilan, tapi juga hasil.
          </p>
        </motion.div>

        {/* Service Grid */}
        <div className="grid lg:grid-cols-2 gap-10">
          {services.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="
                  group relative overflow-hidden
                  rounded-3xl p-8
                  bg-[var(--bg)]
                  border border-black/10 dark:border-white/10
                  hover:shadow-2xl transition
                "
              >
                {/* Accent Bar */}
                <div
                  className="
                    absolute left-0 top-0 h-full w-1
                    bg-[var(--accent)]
                    scale-y-0 group-hover:scale-y-100
                    origin-top transition-transform duration-500
                  "
                />

                {/* Number */}
                <span className="absolute top-6 right-6 text-6xl font-bold opacity-5">
                  0{i + 1}
                </span>

                {/* Icon */}
                <div
                  className="
                  w-14 h-14 rounded-2xl
                  flex items-center justify-center
                  bg-[var(--accent)]
                  text-white mb-6
                "
                >
                  <Icon size={26} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>

                <p className="text-base opacity-80 leading-relaxed max-w-md">
                  {item.desc}
                </p>

                {/* Hover CTA */}
                <div
                  className="
                    mt-6 inline-flex items-center gap-2
                    text-sm font-medium
                    text-[var(--accent)]
                    opacity-0 group-hover:opacity-100
                    translate-y-2 group-hover:translate-y-0
                    transition
                  "
                >
                  Learn more →
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
