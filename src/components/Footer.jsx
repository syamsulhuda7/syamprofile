import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiGithub,
  FiLinkedin,
  FiInstagram,
} from "react-icons/fi";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-[var(--bg)] border-t border-black/10 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* TOP */}
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-xl mb-4">syamdev</h3>
            <p className="text-sm opacity-80 leading-relaxed">
              Professional Web Developer yang fokus membangun website modern,
              cepat, dan siap mendukung pertumbuhan bisnis.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <Link to="/" className="hover:text-[var(--accent)]">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-[var(--accent)]">
                  Projects
                </Link>
              </li>
              {/* <li>
                <Link to="/services" className="hover:text-[var(--accent)]">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[var(--accent)]">
                  Contact
                </Link>
              </li> */}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>Landing Page Development</li>
              <li>Company Profile Website</li>
              <li>Custom Web Application</li>
              <li>Website Optimization & Growth</li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li className="flex items-center gap-2">
                <FiMail /> syamdev@gmail.com
              </li>
              <li className="flex items-center gap-2">
                <FiPhone /> +62 8xx xxxx xxxx
              </li>
            </ul>

            {/* Social */}
            <div className="flex gap-4 mt-5">
              <a href="#" className="hover:text-[var(--accent)]">
                <FiGithub size={18} />
              </a>
              <a href="#" className="hover:text-[var(--accent)]">
                <FiLinkedin size={18} />
              </a>
              <a href="#" className="hover:text-[var(--accent)]">
                <FiInstagram size={18} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-6 border-t border-black/10 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-70"
        >
          <span>
            © {new Date().getFullYear()} syamdev. All rights reserved.
          </span>
          <span>Built with React, Tailwind CSS & Framer Motion</span>
        </motion.div>
      </div>
    </footer>
  );
}
