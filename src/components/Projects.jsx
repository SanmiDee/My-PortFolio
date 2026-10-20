import { FiExternalLink, FiGithub } from "react-icons/fi";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { projects } from "../data/projects";
const tints = ["from-violet-200 to-fuchsia-100", "from-amber-200 to-orange-100", "from-sky-200 to-indigo-100"];
export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-20">
      <Reveal><SectionHead title="A Few Things I've Built" intro="These projects show my practical learning and frontend development journey so far." /></Reveal>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.1} className="h-full">
            <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-paper transition hover:-translate-y-1 hover:shadow-lg">
              <div className={`bg-gradient-to-br ${tints[i % 3]} p-5`} role="img" aria-label={`Preview placeholder for ${p.title}`}>
                <div className="overflow-hidden rounded-xl bg-paper shadow-sm">
                  <div className="flex gap-1.5 border-b border-line px-3 py-2"><i className="h-2 w-2 rounded-full bg-stone-300" /><i className="h-2 w-2 rounded-full bg-stone-300" /><i className="h-2 w-2 rounded-full bg-stone-300" /></div>
                  <div className="grid h-32 place-items-center px-4 text-center font-display text-xl font-extrabold">{p.title}</div>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-bold">{p.title}</h3>
                <p className="mt-2 flex-1 leading-relaxed text-muted">{p.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2">{p.tags.map((t) => <li key={t} className="rounded-full bg-soft px-3 py-1 text-xs font-semibold text-accent-dark">{t}</li>)}</ul>
                <div className="mt-5 flex gap-3">
                  <a href={p.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-cream transition hover:bg-accent">Live Demo <FiExternalLink aria-hidden /><span className="sr-only"> of {p.title} (opens in new tab)</span></a>
                  {p.github && <a href={p.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-ink px-5 py-2.5 text-sm font-semibold transition hover:bg-ink hover:text-cream"><FiGithub aria-hidden /> View Code<span className="sr-only"> for {p.title}</span></a>}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
