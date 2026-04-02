import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const LOGO = "/logo.png";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Artists", href: "/artists", isRoute: true },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const renderLink = (link, mobile = false) => {
    const cls = `text-xs font-semibold uppercase tracking-[0.18em] transition-colors duration-300 ${mobile ? "py-1" : ""} ${
      location.pathname === link.href ? "text-[#00d4e8]" : "text-white/50 hover:text-white"
    }`;
    if (link.isRoute) {
      return (
        <Link key={link.label} to={link.href} className={cls} onClick={() => setOpen(false)}>
          {link.label}
        </Link>
      );
    }
    return (
      <a
        key={link.label}
        href={location.pathname !== "/" ? `/${link.href}` : link.href}
        className={cls}
        onClick={() => setOpen(false)}
      >
        {link.label}
      </a>
    );
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl"
      style={{
        background: "rgba(2,13,31,0.7)",
        borderBottom: "1px solid rgba(0,212,232,0.08)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={LOGO}
            alt="Trident Studios"
            className="h-9 w-9 object-contain rounded-full transition-all duration-300 group-hover:drop-shadow-[0_0_14px_rgba(0,212,232,0.9)]"
          />
          <span className="font-heading font-black text-sm tracking-[0.15em] text-white uppercase">
            Trident Studios
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => renderLink(link))}
        </nav>

        <button onClick={() => setOpen(!open)} className="md:hidden text-white/70">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden"
            style={{ background: "rgba(2,13,31,0.95)", borderBottom: "1px solid rgba(0,212,232,0.1)" }}
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {navLinks.map((link) => renderLink(link, true))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}