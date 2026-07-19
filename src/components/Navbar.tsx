"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { profile, links } from "@/data/portfolio";
import Magnetic from "./Magnetic";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-[100] transition-colors duration-500 ${
          scrolled
            ? "border-b border-line bg-bg/80 backdrop-blur-xl"
            : "border-b border-transparent"
        }`}
      >
        {/* scroll progress */}
        <motion.div
          className="absolute inset-x-0 top-0 h-[2px] origin-left bg-accent"
          style={{ scaleX: progress }}
        />
        <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 md:px-12">
          <a href="#top" className="font-display text-lg font-bold tracking-tight">
            {profile.firstName.toLowerCase()}
            <span className="text-accent">.</span>dev
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {links.nav.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="group relative font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-fg"
                >
                  {l.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line md:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </nav>
      </motion.header>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[150] flex flex-col bg-surface px-6 py-6"
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-lg font-bold">
                {profile.firstName.toLowerCase()}
                <span className="text-accent">.</span>dev
              </span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-line"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="mt-16 flex flex-col gap-2">
              {links.nav.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.07 }}
                  className="group flex items-center justify-between border-b border-line py-5"
                >
                  <span className="font-display text-4xl font-bold uppercase tracking-tight group-hover:text-accent">
                    {l.label}
                  </span>
                  <ArrowUpRight className="h-6 w-6 text-muted group-hover:text-accent" />
                </motion.a>
              ))}
            </nav>
            <div className="mt-auto flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse-dot" />
              <span className="font-mono text-xs uppercase tracking-widest text-muted">
                {profile.availability}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating "back to top" magnetic button */}
      <Magnetic className="fixed bottom-6 right-6 z-[90] hidden md:inline-block">
        <motion.a
          href="#top"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: scrolled ? 1 : 0, scale: scrolled ? 1 : 0 }}
          aria-label="Back to top"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-line bg-surface/80 backdrop-blur-md transition-colors hover:bg-accent hover:text-bg"
        >
          <ArrowUpRight className="h-5 w-5 -rotate-45" />
        </motion.a>
      </Magnetic>
    </>
  );
}
