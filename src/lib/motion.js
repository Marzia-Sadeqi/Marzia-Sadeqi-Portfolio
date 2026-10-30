export const ease = [0.2, 0.7, 0.2, 1];

/** Soft fade-and-rise used when an element scrolls into view. */
export const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, ease },
};
