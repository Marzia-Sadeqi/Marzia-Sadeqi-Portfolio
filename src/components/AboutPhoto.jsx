import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ease } from "../lib/motion";

/** Put your photo at public/marzia.jpg — it appears here automatically. */
const PHOTO_SRC = "./marzia.jpg"; // 👈 FIXED: Added the relative dot

export default function AboutPhoto() {
  const [failed, setFailed] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, []);

  return (
    <motion.div
      className="relative mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-none"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease }}
    >
      <motion.div
        aria-hidden
        className="absolute inset-0 rounded-3xl border border-accent"
        initial={{ x: 0, y: 0 }}
        whileInView={{ x: 12, y: 12 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease, delay: 0.3 }}
      />
      <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border bg-mint">
        {failed ? (
          <div className="flex size-full items-center justify-center text-7xl font-semibold tracking-tight text-teal">MS</div>
        ) : (
          <img
            ref={ref}
            src={PHOTO_SRC}
            alt="Portrait of Marzia Sadeqi"
            className="size-full object-cover object-top"
            onError={() => setFailed(true)}
          />
        )}
      </div>
    </motion.div>
  );
}
