import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
// Add a skill here. Set learning: true for things you're still learning.
export const skills = [
  { name: "HTML5", icon: FaHtml5, note: "Semantic, accessible markup", learning: false },
  { name: "CSS3", icon: FaCss3Alt, note: "Layouts, responsive design", learning: false },
  { name: "Tailwind CSS", icon: SiTailwindcss, note: "Utility-first styling", learning: false },
  { name: "JavaScript", icon: FaJs, note: "Interactive interfaces", learning: false },
  { name: "React.js", icon: FaReact, note: "Currently learning", learning: true },
];
