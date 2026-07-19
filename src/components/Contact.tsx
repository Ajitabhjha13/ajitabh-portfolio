"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Loader2, CheckCircle2, AlertCircle, Mail, Phone } from "lucide-react";
import { profile } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Failed");
      setStatus("sent");
      setFeedback(json.message);
      form.reset();
    } catch (err) {
      setStatus("error");
      setFeedback(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <section id="contact" className="relative mx-auto max-w-[1400px] px-6 py-28 md:px-12 md:py-40">
      <SectionHeading index="05" title="Let's talk" hint="Recruiters & collaborators welcome" />

      <div className="grid gap-16 lg:grid-cols-2">
        {/* Left — pitch */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-md text-xl leading-relaxed text-muted"
          >
            I&apos;m graduating in{" "}
            <span className="text-fg">mid-2027</span> and looking for a team
            where I can ship meaningful work, learn fast, and grow into an
            exceptional engineer. If that sounds like your team —{" "}
            <span className="text-accent">my inbox is open</span>.
          </motion.p>

          <div className="mt-10 space-y-4">
            <a
              href={`mailto:${profile.email}`}
              className="group flex items-center gap-4 text-lg text-fg/80 transition-colors hover:text-accent"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-line transition-colors group-hover:border-accent">
                <Mail className="h-4 w-4" />
              </span>
              {profile.email}
            </a>
            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="group flex items-center gap-4 text-lg text-fg/80 transition-colors hover:text-accent"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-line transition-colors group-hover:border-accent">
                <Phone className="h-4 w-4" />
              </span>
              {profile.phone}
            </a>
          </div>
        </div>

        {/* Right — form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="space-y-6"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block font-mono text-xs uppercase tracking-widest text-muted">
                Your name
              </span>
              <input
                required
                name="name"
                type="text"
                placeholder="Ada Lovelace"
                className="w-full border-b border-line bg-transparent py-3 outline-none transition-colors placeholder:text-muted/50 focus:border-accent"
              />
            </label>
            <label className="block">
              <span className="mb-2 block font-mono text-xs uppercase tracking-widest text-muted">
                Your email
              </span>
              <input
                required
                name="email"
                type="email"
                placeholder="ada@company.com"
                className="w-full border-b border-line bg-transparent py-3 outline-none transition-colors placeholder:text-muted/50 focus:border-accent"
              />
            </label>
          </div>
          <label className="block">
            <span className="mb-2 block font-mono text-xs uppercase tracking-widest text-muted">
              Message
            </span>
            <textarea
              required
              name="message"
              rows={5}
              placeholder="Hi Ajitabh, we have an SDE role that looks perfect for you…"
              className="w-full resize-none border-b border-line bg-transparent py-3 outline-none transition-colors placeholder:text-muted/50 focus:border-accent"
            />
          </label>

          <div className="flex flex-wrap items-center gap-5">
            <button
              type="submit"
              disabled={status === "sending"}
              className="group inline-flex items-center gap-3 rounded-full bg-accent px-8 py-4 font-mono text-xs font-medium uppercase tracking-widest text-bg transition-all duration-300 hover:scale-105 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "sending" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                </>
              ) : status === "sent" ? (
                <>
                  <CheckCircle2 className="h-4 w-4" /> Sent!
                </>
              ) : (
                <>
                  Send message
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                </>
              )}
            </button>

            <AnimatePresence mode="wait">
              {feedback && (
                <motion.p
                  key={status + feedback}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className={`flex items-center gap-2 text-sm ${
                    status === "error" ? "text-red-400" : "text-accent"
                  }`}
                >
                  {status === "error" && <AlertCircle className="h-4 w-4" />}
                  {feedback}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
