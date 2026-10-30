import { motion } from "framer-motion";
import Section from "./Section";
import { education } from "../data/portfolio";
import { fadeUp } from "../lib/motion";

export default function Education() {
  return (
    <Section id="education" eyebrow="04 — Education" title="Education & Learning">
      <ol className="border-t">
        {education.map((e) => (
          <motion.li key={e.title} {...fadeUp} className="grid lg:grid-cols-[12rem_1fr_1.3fr] gap-2 lg:gap-8 py-6 lg:py-7 border-b">
            <span className="font-mono text-sm text-teal flex items-center gap-2">
              {e.current && <span className="size-2 rounded-full bg-accent" />}
              {e.period}
            </span>
            <div>
              <h3 className="font-semibold text-navy">{e.title}</h3>
              <p className="text-sm text-teal">{e.place}</p>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{e.text}</p>
          </motion.li>
        ))}
      </ol>
    </Section>
  );
}
