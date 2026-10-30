import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { ease } from "../lib/motion";

export default function ProjectCard({ project, delay = 0, animateOnScroll = true }) {
  const { title, image, description, tech, link } = project;

  // First cards animate when scrolled into view; extra cards animate when "View More" is clicked.
  const animation = animateOnScroll
    ? {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-60px" },
        transition: { duration: 0.6, ease, delay },
      }
    : {
        initial: { opacity: 0, y: 24 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease, delay } },
        exit: { opacity: 0, y: 12, transition: { duration: 0.2 } },
      };

  return (
    <motion.article
      className="group rounded-2xl border bg-soft overflow-hidden transition-colors hover:border-accent"
      whileHover={{ y: -4 }}
      {...animation}
    >
      <a href={link} target="_blank" rel="noreferrer" className="block aspect-[16/10] overflow-hidden border-b bg-mint">
        <img
          src={image}
          alt={`${title} preview`}
          loading="lazy"
          className="size-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </a>
      <div className="p-5 sm:p-6">
        <h3 className="text-lg font-semibold text-navy">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{description}</p>
        <div className="mt-5 flex flex-wrap items-center justify-between gap-x-4 gap-y-3">
          <ul className="flex flex-wrap gap-2">
            {tech.map((t) => (
              <li key={t} className="font-mono text-[11px] rounded-md border px-2 py-1 text-teal">{t}</li>
            ))}
          </ul>
          <a href={link} target="_blank" rel="noreferrer" className="shrink-0 inline-flex items-center gap-1 text-sm font-medium text-teal hover:text-accent">
            Live Demo <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </motion.article>
  );
}
