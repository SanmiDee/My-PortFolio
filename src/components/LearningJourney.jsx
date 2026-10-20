import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
const steps = [
  "Building strong foundations with HTML, CSS, and JavaScript.",
  "Developing interactive interfaces and practising responsive design.",
  "Learning React.js and working towards more structured, component-based applications.",
];
export default function LearningJourney() {
  return (
    <section id="journey" className="bg-ink py-20 text-cream">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal><SectionHead title="Learning, Building, Improving." intro="Every project is an opportunity to learn something new. I'm strengthening my JavaScript foundation, learning React.js, and improving my ability to build reusable components and responsive user interfaces." /></Reveal>
        <ol className="grid gap-5 md:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s}><Reveal delay={i * 0.1} className="h-full"><div className="h-full rounded-2xl border border-white/15 p-6"><span className="font-display text-3xl font-extrabold text-violet-300">{i + 1}</span><p className="mt-3 leading-relaxed text-stone-200">{s}</p></div></Reveal></li>
          ))}
        </ol>
      </div>
    </section>
  );
}
