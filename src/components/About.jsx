import { FiCode, FiBookOpen, FiBriefcase } from "react-icons/fi";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
const cards = [
  { icon: FiCode, title: "What I Do", text: "Build responsive and user-friendly web interfaces." },
  { icon: FiBookOpen, title: "What I'm Learning", text: "React.js and modern frontend development." },
  { icon: FiBriefcase, title: "What I'm Looking For", text: "Junior frontend opportunities and internships." },
];
export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-20">
      <Reveal><SectionHead title="A bit about me" /></Reveal>
      <div className="grid gap-10 lg:grid-cols-2">
        <Reveal className="space-y-5 text-lg leading-relaxed text-muted">
          <p>I'm an aspiring frontend developer who enjoys transforming ideas into clean, responsive, and engaging websites. I work with HTML, CSS, Tailwind CSS, and JavaScript, and I'm currently expanding my skills with React.js.</p>
          <p>I enjoy learning by building real projects, solving layout and functionality challenges, and discovering better ways to create intuitive user experiences. I'm looking for an opportunity to learn from experienced developers, contribute to a team, and grow into a confident frontend engineer.</p>
        </Reveal>
        <div className="grid gap-4">
          {cards.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 0.1}>
              <div className="flex gap-4 rounded-2xl border border-line bg-paper p-5">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-soft text-accent"><Icon size={22} /></span>
                <div><h3 className="font-display text-lg font-bold">{title}</h3><p className="text-muted">{text}</p></div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
