import { useEffect, useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { dark, setDark } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`
          fixed top-0 w-full z-50 transition-all duration-300
          ${
            scrolled
              ? "backdrop-blur bg-[var(--bg)]/70 shadow-sm"
              : "bg-[var(--bg)]"
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="font-bold text-lg tracking-tight">
            syam<span className="text-[var(--accent)]">dev</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/projects">Projects</NavLink>

            {/* Theme Toggle */}
            <button
              onClick={() => setDark(!dark)}
              className="p-2 rounded-full bg-black/5 dark:bg-white/10 hover:scale-110 transition cursor-pointer"
              aria-label="Toggle Theme"
            >
              {!dark ? <FiSun size={16} /> : <FiMoon size={16} />}
            </button>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden p-2 rounded-lg bg-black/5 dark:bg-white/10"
          >
            <FiMenu size={20} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/50 md:hidden">
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute right-0 top-0 h-full w-3/4 bg-[var(--bg)] p-6"
          >
            <div className="flex justify-between items-center mb-10">
              <span className="font-bold text-lg">syamdev</span>
              <button onClick={() => setOpen(false)}>
                <FiX size={22} />
              </button>
            </div>

            <div className="flex flex-col gap-6 text-base font-medium">
              <Link onClick={() => setOpen(false)} to="/">
                Home
              </Link>
              <Link onClick={() => setOpen(false)} to="/projects">
                Projects
              </Link>
            </div>

            <button
              onClick={() => setDark(!dark)}
              className="mt-10 flex items-center gap-2 px-4 py-2 rounded-xl bg-black/5 dark:bg-white/10 cursor-pointer"
            >
              {!dark ? <FiSun /> : <FiMoon />}
              <span>Toggle Theme</span>
            </button>
          </motion.div>
        </div>
      )}
    </>
  );
}

/* =====================
   Reusable NavLink
===================== */
function NavLink({ to, children }) {
  return (
    <Link
      to={to}
      className="
        relative after:absolute after:left-0 after:-bottom-1
        after:w-0 after:h-[2px] after:bg-[var(--accent)]
        after:transition-all hover:after:w-full
      "
    >
      {children}
    </Link>
  );
}
