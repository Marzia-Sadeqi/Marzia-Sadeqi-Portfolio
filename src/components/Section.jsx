import { motion } from "framer-motion";
import { fadeUp } from "../lib/motion";

/** Shared wrapper: numbered eyebrow, title, optional intro, then the section content. */
export default function Section({ id, eyebrow, title, intro, alt = false, children }) {
  return (
    <section id={id} className={`py-16 sm:py-20 md:py-28 ${alt ? "bg-mint/60 border-y" : ""}`}>
      <div className="container-page">
        <motion.div {...fadeUp} className="max-w-2xl mb-10 md:mb-14">
          <p className="eyebrow mb-4">{eyebrow}</p>
          <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-semibold tracking-tight leading-[1.1] text-navy">{title}</h2>
          {intro && <p className="mt-5 text-lg text-muted-foreground leading-relaxed">{intro}</p>}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
