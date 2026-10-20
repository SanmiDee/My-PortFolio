import { motion } from "framer-motion";
import { FiArrowDown, FiSend } from "react-icons/fi";
const item = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };
const lines = [["HTML", "text-orange-600", "structure"], ["CSS", "text-sky-600", "style"], ["JavaScript", "text-amber-600", "behaviour"], ["React.js", "text-violet-600", "learning now"]];
export default function Hero() {
  return (
    <section id="home" className="relative mx-auto grid min-h-screen max-w-6xl items-center gap-12 px-5 pb-16 pt-28 lg:grid-cols-[1.15fr_1fr]">
      <motion.div initial="hidden" animate="show" transition={{ staggerChildren: 0.12 }}>
        <motion.p variants={item} className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-paper px-4 py-2 text-sm font-medium">
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" /> Open to Junior Frontend Roles &amp; Internships
        </motion.p>
        <motion.p variants={item} className="mb-3 text-sm font-semibold tracking-widest text-accent">HELLO, I'M DORCAS</motion.p>
        <motion.h1 variants={item} className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
          Building beautiful digital experiences, one line of code at a time.
        </motion.h1>
        <motion.p variants={item} className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          I'm Oluwasanmi Dorcas, an aspiring frontend developer passionate about creating clean, responsive, and user-friendly websites. I'm currently learning React.js and turning ideas into interactive web experiences.
        </motion.p>
        <motion.div variants={item} className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href="#projects" className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-accent-dark">Explore My Projects <FiArrowDown /></a>
          <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-ink px-7 py-3.5 font-semibold transition hover:-translate-y-0.5 hover:bg-ink hover:text-cream">Let's Connect <FiSend /></a>
        </motion.div>
      </motion.div>
      <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4, duration: 0.7 }} className="relative mx-auto w-full max-w-md">
        <motion.div aria-hidden animate={{ y: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute -right-4 -top-6 h-24 w-24 rounded-3xl bg-accent/90" />
        <div aria-hidden className="absolute -bottom-6 -left-4 h-28 w-28 rounded-full bg-soft" />
        <div className="relative rounded-3xl border border-line bg-ink p-6 text-cream shadow-xl">
          <div className="mb-5 flex gap-2" aria-hidden><i className="h-3 w-3 rounded-full bg-red-400" /><i className="h-3 w-3 rounded-full bg-amber-300" /><i className="h-3 w-3 rounded-full bg-emerald-400" /></div>
          <p className="font-mono text-sm text-stone-400">const dorcas = &#123;</p>
          <ul className="my-2 space-y-3 pl-5 font-mono text-sm sm:text-base">
            {lines.map(([n, c, d]) => (<li key={n}><span className="rounded bg-paper px-2 py-0.5 font-semibold"><span className={c}>{n}</span></span> <span className="text-stone-400">// {d}</span></li>))}
          </ul>
          <p className="font-mono text-sm text-stone-400">&#125;;</p>
        </div>
      </motion.div>
    </section>
  );
}
