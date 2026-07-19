"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "@/data/portfolio";

const greetings = ["Hello", "नमस्ते", "Bonjour", "Hola", "こんにちは", "Hallo"];

export default function Preloader() {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const start = performance.now();
    const duration = 1800;
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      // easeOutExpo for a satisfying deceleration
      const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      setCount(Math.round(eased * 100));
      if (t < 1) raf = requestAnimationFrame(tick);
      else setTimeout(() => setDone(true), 350);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[250] flex flex-col justify-between bg-bg px-6 py-8 md:px-12"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Top row */}
          <div className="flex items-center justify-between font-mono text-xs uppercase tracking-widest text-muted">
            <span>{profile.name}</span>
            <span className="hidden sm:block">{profile.role}</span>
            <span>© 2026</span>
          </div>

          {/* Cycling greeting */}
          <div className="flex items-center gap-4">
            <motion.span
              key={Math.floor(count / 20)}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-4xl font-bold md:text-6xl"
            >
              {greetings[Math.min(Math.floor(count / 20), greetings.length - 1)]}
            </motion.span>
            <span className="h-3 w-3 rounded-full bg-accent animate-pulse-dot" />
          </div>

          {/* Counter + progress */}
          <div>
            <div className="flex items-end justify-between">
              <span className="font-mono text-xs uppercase tracking-widest text-muted">
                Loading experience
              </span>
              <span className="font-display text-7xl font-extrabold leading-none tabular-nums md:text-9xl">
                {count}
              </span>
            </div>
            <div className="mt-4 h-px w-full bg-line">
              <div
                className="h-px bg-accent transition-[width] duration-100 ease-linear"
                style={{ width: `${count}%` }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
