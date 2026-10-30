import { motion } from "framer-motion";
import Section from "./Section";
import { skills } from "../data/portfolio";
import { fadeUp } from "../lib/motion";

export default function Skills() {
  return (
    <Section id="skills" eyebrow="02 — Skills" title="Skills & Technologies">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-8">
        {skills.map((group) => (
          <motion.div key={group.group} {...fadeUp} className="border-t-2 border-navy pt-6">
            <h3 className="font-semibold text-navy mb-5">{group.group}</h3>
            <ul className="space-y-3">
              {group.items.map(([name, tag]) => (
                <li key={name} className="flex items-center justify-between gap-3 border-b pb-3 text-teal">
                  {name}
                  {tag && (
                    <span className="font-mono text-[10px] uppercase tracking-wider rounded-full bg-mint px-2 py-0.5 text-teal">{tag}</span>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
