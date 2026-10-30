import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { contact } from "../data/portfolio";
import { ease } from "../lib/motion";
import { btnPrimary, btnGhost, iconLink } from "../lib/styles";

export default function Hero() {
  const items = [
    <p key="a" className="text-base sm:text-lg text-accent-dark">Hello, I'm</p>,
    <h1 key="b" className="mt-3 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-navy">
      Marzia Sadeqi
    </h1>,
    <p key="c" className="mt-4 text-2xl sm:text-3xl text-teal">Front-End Developer</p>,
    <p key="d" className="mx-auto mt-6 max-w-xl text-base sm:text-lg text-teal leading-relaxed">
      I build clean, thoughtful and user-friendly web experiences. Based in Kabul, Afghanistan, and open to remote work.
    </p>,
    <div key="e" className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 max-w-xs sm:max-w-none mx-auto">
      <a href="#contact" className={btnPrimary}>Get in Touch</a>
      <a href="#projects" className={btnGhost}>View My Work</a>
    </div>,
    <div key="f" className="mt-10 flex items-center justify-center gap-3">
      <a href={contact.github} target="_blank" rel="noreferrer" aria-label="GitHub" className={iconLink}><Github size={18} /></a>
      <a href={contact.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className={iconLink}><Linkedin size={18} /></a>
      <a href={`mailto:${contact.email}`} aria-label="Email" className={iconLink}><Mail size={18} /></a>
    </div>,
    <a key="g" href="#about" aria-label="Scroll to About" className="mt-8 inline-flex text-teal hover:text-navy transition-colors">
      <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
        <ArrowDown size={20} />
      </motion.span>
    </a>,
  ];

  return (
    <section id="home" className="relative isolate overflow-hidden min-h-[calc(100svh-4rem)] flex items-center py-20 sm:py-28">
    
      <div className="container-page">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } } }}
        >
          {items.map((el) => (
            <motion.div
              key={el.key}
              variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } } }}
            >
              {el}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
