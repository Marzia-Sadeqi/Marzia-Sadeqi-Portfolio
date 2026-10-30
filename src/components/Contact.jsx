import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import ContactForm from "./ContactForm";
import { contact } from "../data/portfolio";
import { fadeUp } from "../lib/motion";

export default function Contact() {
  return (
    <section id="contact" className="pb-16 sm:pb-24 md:pb-28">
      <div className="container-page">
        <motion.div
          {...fadeUp}
          className="grid items-center gap-10 rounded-3xl bg-teal px-5 py-12 sm:px-10 sm:py-16 lg:grid-cols-[1fr_1.1fr] lg:gap-14 lg:px-14 lg:py-20"
        >
          {/* Left: heading + direct links */}
          <div className="text-center lg:text-left">
            <p className="eyebrow !text-mint mb-5">07 — Contact</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-soft">Let's Build Something Meaningful</h2>
            <p className="mt-5 max-w-xl mx-auto lg:mx-0 text-lg text-mint">
              I'm open to opportunities to learn, collaborate, and create useful web experiences. Tell me what you need and I'll reply soon.
            </p>
            <div className="mt-8 flex flex-col items-center lg:items-start gap-3 text-sm text-mint">
              <a href={`mailto:${contact.email}`} className="inline-flex items-center gap-2 hover:text-soft break-all">
                <Mail size={16} className="shrink-0" />{contact.email}
              </a>
              <a href={contact.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-soft">
                <Linkedin size={16} />LinkedIn
              </a>
              <a href={contact.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-soft">
                <Github size={16} />GitHub
              </a>
            </div>
          </div>

          {/* Right: the form */}
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
}
