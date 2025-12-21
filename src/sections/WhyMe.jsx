import { motion } from "framer-motion";
import { FiCheckCircle, FiZap, FiLayout, FiTrendingUp } from "react-icons/fi";

const reasons = [
  {
    icon: FiZap,
    title: "Fast & Optimized Development",
    desc: "Website dibangun dengan performa tinggi, loading cepat, dan struktur kode yang rapi sehingga mudah dikembangkan di masa depan.",
  },
  {
    icon: FiLayout,
    title: "Modern UI & UX Design",
    desc: "Tampilan modern, clean, dan user-friendly dengan pendekatan desain yang fokus pada pengalaman pengguna dan konversi.",
  },
  {
    icon: FiTrendingUp,
    title: "Business-Oriented Approach",
    desc: "Saya tidak hanya membuat website, tapi membantu bisnis Anda terlihat profesional dan lebih dipercaya oleh calon klien.",
  },
  {
    icon: FiCheckCircle,
    title: "Reliable & Scalable Code",
    desc: "Menggunakan teknologi terbaru dan best practice agar website stabil, aman, dan siap berkembang seiring bisnis Anda.",
  },
];

export default function WhyMe() {
  return (
    <section className="py-24 bg-[var(--bg)]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Me as Your Web Developer?
          </h2>
          <p className="text-lg opacity-80">
            Saya membantu individu, UMKM, hingga brand premium membangun website
            yang tidak hanya terlihat bagus, tapi juga bekerja untuk bisnis.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="
                  bg-white/5 backdrop-blur 
                  border border-white/10
                  rounded-2xl p-6
                  hover:-translate-y-2
                  hover:border-[var(--accent)]
                  transition-all duration-300
                "
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[var(--accent)]/10 mb-4">
                  <Icon size={22} className="text-[var(--accent)]" />
                </div>

                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>

                <p className="text-sm opacity-80 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Trust Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 text-center max-w-3xl mx-auto"
        >
          <p className="text-lg font-medium">✨ Fokus saya sederhana:</p>
          <p className="mt-2 opacity-80">
            Membantu Anda memiliki website yang terlihat profesional, dipercaya
            pengunjung, dan mendukung pertumbuhan bisnis.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
