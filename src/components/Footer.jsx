const links = ["Home", "About", "Skills", "Projects", "Contact"];
export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 md:flex-row md:items-center md:justify-between">
        <div><p className="font-medium">Designed and built by Oluwasanmi Dorcas.</p><a href="mailto:oluwasanmidorcas@gmail.com" className="text-muted hover:text-accent">oluwasanmidorcas@gmail.com</a></div>
        <nav aria-label="Footer"><ul className="flex flex-wrap gap-x-5 gap-y-2">{links.map((l) => <li key={l}><a href={`#${l.toLowerCase()}`} className="text-muted hover:text-accent">{l}</a></li>)}</ul></nav>
        <p className="text-sm text-muted">&copy; {new Date().getFullYear()} Oluwasanmi Dorcas</p>
      </div>
    </footer>
  );
}
