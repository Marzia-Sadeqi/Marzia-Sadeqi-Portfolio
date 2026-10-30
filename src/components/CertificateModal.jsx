import { useCallback, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, X } from "lucide-react";
import { ease } from "../lib/motion";

const iconBtn =
  "inline-flex size-11 items-center justify-center rounded-full border border-input text-navy transition-colors hover:bg-mint focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

/** Full-screen viewer for one certificate. Esc closes it, arrow keys go previous / next. */
export default function CertificateModal({ items, index, onChange, onClose }) {
  const total = items.length;
  const current = items[index];
  const closeRef = useRef(null);

  const go = useCallback((dir) => onChange((index + dir + total) % total), [index, total, onChange]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, onClose]);

  // Lock page scroll while open, and focus the close button.
  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = previous;
    };
  }, []);

  return createPortal(
    <motion.div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-navy/80 p-3 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={current.title}
        className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto rounded-3xl border bg-soft shadow-[0_40px_80px_-30px_var(--navy)]"
        initial={{ opacity: 0, scale: 0.96, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 16 }}
        transition={{ duration: 0.3, ease }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="grid md:grid-cols-[1.45fr_1fr]">
          <div className="flex items-center justify-center bg-mint p-4 md:p-8 md:min-h-[34rem]">
            <motion.img
              key={current.image}
              src={current.image}
              alt={`${current.title} certificate`}
              className="max-h-[52vh] w-auto max-w-full rounded-lg border bg-soft object-contain shadow-[0_20px_40px_-24px_var(--navy)] md:max-h-[74vh]"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            />
          </div>

          <div className="flex flex-col p-6 md:p-10">
            <motion.div key={current.title} initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
              <p className="text-sm text-teal">{index + 1} of {total}</p>
              <h3 className="mt-4 text-2xl font-semibold leading-tight tracking-tight text-navy md:text-3xl">{current.title}</h3>
              <div className="mt-6 space-y-4 text-base">
                <div>
                  <p className="text-sm text-teal">Issued by</p>
                  <p className="font-medium text-navy">{current.issuer}</p>
                </div>
                <div>
                  <p className="text-sm text-teal">Date</p>
                  <p className="font-medium text-navy">{current.date}</p>
                </div>
              </div>
            </motion.div>

            <div className="mt-8 flex flex-wrap items-center gap-3 md:mt-auto md:pt-10">
              <button type="button" onClick={() => go(-1)} className={iconBtn} aria-label="Previous certificate"><ArrowLeft size={18} /></button>
              <button type="button" onClick={() => go(1)} className={iconBtn} aria-label="Next certificate"><ArrowRight size={18} /></button>
              <a
                href={current.image}
                target="_blank"
                rel="noreferrer"
                className="ml-auto inline-flex h-11 items-center gap-2 rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Open full size <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>

        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 z-10 inline-flex size-10 items-center justify-center rounded-full bg-soft/90 text-navy backdrop-blur transition-colors hover:bg-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <X size={18} />
        </button>
      </motion.div>
    </motion.div>,
    document.body,
  );
}
