import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { skills } from "../data/skills";
export default function Skills() {
  return (
    <section id="skills" className="border-y border-line bg-paper py-20">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal><SectionHead title="Tools I work with" intro="The technologies I use to build, plus the one I'm actively learning." /></Reveal>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {skills.map(({ name, icon: Icon, note, learning }, i) => (
            <li key={name}>
              <Reveal delay={i * 0.07} className="h-full">
                <div className={`h-full rounded-2xl p-5 transition hover:-translate-y-1 ${learning ? "border-2 border-dashed border-accent bg-soft" : "border border-line bg-cream"}`}>
                  <Icon size={34} className="mb-4 text-accent" aria-hidden />
                  <h3 className="font-display text-lg font-bold">{name}</h3>
                  <p className="text-sm text-muted">{note}</p>
                  {learning && <span className="mt-3 inline-block rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white">Currently learning</span>}
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
