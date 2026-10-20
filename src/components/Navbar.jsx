import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
const links = ["Home", "About", "Skills", "Projects", "Contact"];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" });
    links.forEach((l) => { const el = document.getElementById(l.toLowerCase()); el && io.observe(el); });
    return () => io.disconnect();
  }, []);
  const link = (l) => `rounded-full px-4 py-2 text-sm font-medium transition-colors ${active === l.toLowerCase() ? "bg-soft text-accent" : "text-muted hover:text-ink"}`;
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-cream/90 backdrop-blur">
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#home" className="font-display text-2xl font-extrabold tracking-tight">Dorcas<span className="text-accent">.</span></a>
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => <li key={l}><a href={`#${l.toLowerCase()}`} className={link(l)}>{l}</a></li>)}
        </ul>
        <a href="#contact" className="hidden rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-cream transition hover:bg-accent md:inline-block">Let's Talk</a>
        <button className="rounded-lg p-2 md:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"}>
          {open ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.ul id="mobile-menu" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-line bg-cream px-5 md:hidden">
            {links.map((l) => (
              <li key={l}><a href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} className="block py-3 text-lg font-medium">{l}</a></li>
            ))}
            <li className="pb-4"><a href="#contact" onClick={() => setOpen(false)} className="block rounded-full bg-accent py-3 text-center font-semibold text-white">Let's Talk</a></li>
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
