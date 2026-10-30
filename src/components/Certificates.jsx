import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Maximize2 } from "lucide-react";
import Section from "./Section";
import CertificateModal from "./CertificateModal";
import { certificates } from "../data/portfolio";
import { fadeUp } from "../lib/motion";

export default function Certificates() {
  const [active, setActive] = useState(null); // index of the open certificate, or null

  return (
    <Section id="certificates" eyebrow="05 — Recognition" title="Certificates & Achievements" alt>
      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {certificates.map((c, i) => (
          <motion.li key={c.title} {...fadeUp} transition={{ ...fadeUp.transition, delay: (i % 3) * 0.08 }}>
            <button
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Open ${c.title}`}
              className="group block w-full text-left rounded-2xl border bg-soft overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <span className="relative block aspect-[4/3] overflow-hidden border-b bg-mint">
                <img
                  src={c.image}
                  alt=""
                  loading="lazy"
                  className="size-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <span className="absolute inset-0 flex items-end justify-end bg-gradient-to-t from-navy/50 via-transparent to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-soft px-3 py-1.5 text-xs font-medium text-navy">
                    <Maximize2 size={12} /> View certificate
                  </span>
                </span>
              </span>
              <span className="block p-5">
                <span className="block font-semibold leading-snug text-navy">{c.title}</span>
                <span className="mt-1 block text-sm text-teal">{c.issuer}</span>
                <span className="mt-0.5 block text-sm text-teal">{c.date}</span>
              </span>
            </button>
          </motion.li>
        ))}
      </ul>

      <AnimatePresence>
        {active !== null && (
          <CertificateModal items={certificates} index={active} onChange={setActive} onClose={() => setActive(null)} />
        )}
      </AnimatePresence>
    </Section>
  );
}
