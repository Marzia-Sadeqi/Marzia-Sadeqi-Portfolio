import { ArrowUp, Github, Linkedin } from "lucide-react";
import { contact } from "../data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy text-mint">
      <div className="container-page py-10 flex flex-col sm:flex-row gap-6 sm:items-center justify-between">
        <div>
          <p className="font-semibold text-soft">Marzia Sadeqi</p>
          <p className="text-sm">Front-End Web Developer · © {year}</p>
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
          <a href={contact.linkedin} target="_blank" rel="noreferrer" className="hover:text-soft" aria-label="LinkedIn"><Linkedin size={18} /></a>
          <a href={contact.github} target="_blank" rel="noreferrer" className="hover:text-soft" aria-label="GitHub"><Github size={18} /></a>
          <a href="#home" className="inline-flex items-center gap-1 hover:text-soft">Back to top <ArrowUp size={14} /></a>
        </div>
      </div>
    </footer>
  );
}
