import { motion } from "framer-motion";
import { Search, Hammer, RefreshCw } from "lucide-react";
import Section from "./Section";
import { fadeUp } from "../lib/motion";

const steps = [
  { Icon: Search, title: "Understand", text: "I start by understanding the purpose of the website and the needs of its users." },
  { Icon: Hammer, title: "Build", text: "I focus on clear structure, responsive layouts, reusable components, and readable code." },
  { Icon: RefreshCw, title: "Improve", text: "I test my work, fix problems, and continuously improve my skills." },
];

export default function Approach() {
  return (
    <Section id="approach" eyebrow="06 — Process" title="How I Approach My Work">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-8">
        {steps.map(({ Icon, title, text }, i) => (
          <motion.div key={title} {...fadeUp}>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-sm text-accent">0{i + 1}</span>
              <span className="h-px flex-1 bg-border" />
              <Icon size={18} className="text-teal" />
            </div>
            <h3 className="text-xl font-semibold text-navy">{title}</h3>
            <p className="mt-2 text-muted-foreground leading-relaxed">{text}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
