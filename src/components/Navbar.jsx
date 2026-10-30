import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "../data/portfolio";
import { btnPrimary } from "../lib/styles";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-background/85 backdrop-blur-xl">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <a href="#home" className="text-lg font-semibold tracking-tight text-navy">Marzia Sadeqi</a>

        {/* Desktop links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm" aria-label="Main">
          {navLinks.filter((l) => l.id !== "home").map((l) => (
            <a key={l.id} href={`#${l.id}`} className="text-teal hover:text-navy transition-colors">{l.label}</a>
          ))}
          <a href="#contact" className={`${btnPrimary} h-9 px-4`}>Let's Talk</a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="lg:hidden inline-flex size-11 items-center justify-center rounded-full text-navy hover:bg-mint transition-colors"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="lg:hidden border-t bg-background max-h-[calc(100dvh-4rem)] overflow-y-auto" aria-label="Mobile">
          <div className="container-page flex flex-col py-3">
            {navLinks.map((l) => (
              <a key={l.id} href={`#${l.id}`} onClick={() => setOpen(false)} className="py-3.5 text-navy border-b last:border-0">{l.label}</a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className={`${btnPrimary} my-4`}>Let's Talk</a>
          </div>
        </nav>
      )}
    </header>
  );
}
