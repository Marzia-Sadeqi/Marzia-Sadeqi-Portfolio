import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Section from "./Section";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/portfolio";
import { ease } from "../lib/motion";

const INITIAL = 4; // how many projects show before "View More"

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const top = useRef(null);
  const first = projects.slice(0, INITIAL);
  const more = projects.slice(INITIAL);

  const toggle = () => {
    const next = !showAll;
    setShowAll(next);
    if (!next) top.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Section
      id="projects"
      eyebrow="03 — Work"
      title="Selected Projects"
      intro="A selection of projects that reflect my development skills, design approach, and continuous learning."
      alt
    >
      <div ref={top} className="scroll-mt-24">
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {first.map((p, i) => (
            <ProjectCard key={p.title} project={p} delay={(i % 2) * 0.08} />
          ))}
          <AnimatePresence initial={false}>
            {showAll &&
              more.map((p, i) => <ProjectCard key={p.title} project={p} delay={i * 0.08} animateOnScroll={false} />)}
          </AnimatePresence>
        </div>

        {more.length > 0 && (
          <div className="mt-12 flex justify-center">
            <motion.button
              type="button"
              onClick={toggle}
              aria-expanded={showAll}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 rounded-full px-6 h-12 text-sm font-medium border border-input text-navy transition-colors hover:bg-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {showAll ? "View Less" : `View More (${more.length})`}
              <motion.span animate={{ rotate: showAll ? 180 : 0 }} transition={{ duration: 0.3, ease }} className="inline-flex">
                <ChevronDown size={16} />
              </motion.span>
            </motion.button>
          </div>
        )}
      </div>
    </Section>
  );
}
