export default function SectionHead({ title, intro }) {
  return (<div className="mb-12 max-w-2xl"><h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">{title}</h2>{intro && <p className="mt-4 text-lg leading-relaxed text-muted">{intro}</p>}</div>);
}
