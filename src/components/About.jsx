import { motion } from "framer-motion";
import { Code2, Users, Sprout } from "lucide-react";
import Section from "./Section";
import AboutPhoto from "./AboutPhoto";
import { fadeUp } from "../lib/motion";

const highlights = [
  { Icon: Code2, title: "Clean and maintainable code", text: "Readable structure that's easy to grow and hand over." },
  { Icon: Users, title: "User-focused design", text: "Clear hierarchy, comfortable spacing and accessible defaults." },
  { Icon: Sprout, title: "Continuous learning", text: "Currently in front-end training at Netlinks, always improving." },
];

export default function About() {
  return (
    <Section id="about" eyebrow="01 — About" title="About Me" alt>
      <div className="grid gap-12 lg:grid-cols-[20rem_1fr] lg:gap-16 items-center">
        <AboutPhoto />
        <div>
          <motion.p {...fadeUp} className="max-w-2xl text-lg sm:text-xl md:text-2xl leading-relaxed text-navy">
            I'm Marzia, a front-end web developer who enjoys turning ideas into clean, responsive, and user-friendly websites.
          </motion.p>
          <motion.p {...fadeUp} className="mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-muted-foreground">
            I focus on organized code, thoughtful layouts, and continuous improvement. I'm based in Kabul, Afghanistan, and open to remote work.
          </motion.p>
          <ul className="mt-10 divide-y border-y">
            {highlights.map(({ Icon, title, text }) => (
              <motion.li key={title} {...fadeUp} className="flex items-start gap-5 py-5">
                <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-full bg-soft border text-accent">
                  <Icon size={18} />
                </span>
                <div>
                  <h3 className="font-semibold text-navy">{title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{text}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
