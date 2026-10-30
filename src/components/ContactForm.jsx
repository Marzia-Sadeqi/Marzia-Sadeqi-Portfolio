import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, ChevronDown, Loader2, Send } from "lucide-react";
import { FORM_ENDPOINT, services, contact } from "../data/portfolio";
import { ease } from "../lib/motion";

const field =
  "w-full rounded-xl border border-input bg-background px-4 text-navy placeholder:text-accent transition-colors focus-visible:outline-none focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-ring";
const label = "mb-2 block text-sm font-medium text-navy";

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (!res.ok) throw new Error("Request failed");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="rounded-2xl bg-soft p-5 sm:p-8 text-left shadow-[0_30px_60px_-35px_var(--navy)]">
      <AnimatePresence mode="wait" initial={false}>
        {status === "success" ? (
          <motion.div
            key="done"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease }}
            className="flex min-h-[22rem] flex-col items-center justify-center text-center"
            role="status"
          >
            <span className="flex size-14 items-center justify-center rounded-full bg-mint text-teal">
              <CheckCircle2 size={28} />
            </span>
            <h3 className="mt-5 text-2xl font-semibold text-navy">Thank you!</h3>
            <p className="mt-2 max-w-xs text-teal">Your message was sent. I'll get back to you soon.</p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-6 inline-flex h-11 items-center rounded-full border border-input px-5 text-sm font-medium text-navy transition-colors hover:bg-mint focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Send another message
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-5"
          >
            <input type="hidden" name="_subject" value="New message from your portfolio" />
            {/* Spam trap: real visitors never see or fill this field */}
            <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className={label}>Full Name</label>
                <input id="name" name="name" type="text" required autoComplete="name" placeholder="Your full name" className={`${field} h-12`} />
              </div>
              <div>
                <label htmlFor="email" className={label}>Email Address</label>
                <input id="email" name="email" type="email" required autoComplete="email" placeholder="you@example.com" className={`${field} h-12`} />
              </div>
            </div>

            <div>
              <label htmlFor="service" className={label}>What do you need?</label>
              <div className="relative">
                <select id="service" name="service" required defaultValue="" className={`${field} h-12 appearance-none pr-11`}>
                  <option value="" disabled>Choose a service</option>
                  {services.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                <ChevronDown size={18} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-teal" />
              </div>
            </div>

            <div>
              <label htmlFor="message" className={label}>Message</label>
              <textarea id="message" name="message" required rows={5} placeholder="Tell me a little about your project..." className={`${field} resize-y py-3`} />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-navy disabled:cursor-not-allowed disabled:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {status === "sending" ? (
                <>
                  <Loader2 size={16} className="animate-spin" /> Sending...
                </>
              ) : (
                <>
                  Send Message <Send size={16} />
                </>
              )}
            </button>

            {status === "error" && (
              <p role="alert" className="text-sm text-navy">
                Something went wrong, your message was not sent. Please try again or email me at{" "}
                <a href={`mailto:${contact.email}`} className="font-medium underline break-all">{contact.email}</a>.
              </p>
            )}
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
