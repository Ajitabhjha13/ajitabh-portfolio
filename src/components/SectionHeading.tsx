"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  index,
  title,
  hint,
}: {
  index: string;
  title: string;
  hint?: string;
}) {
  return (
    <div className="mb-14 md:mb-20">
      <div className="flex items-center gap-4 font-mono text-xs uppercase tracking-[0.25em] text-muted">
        <span className="text-accent">({index})</span>
        <span className="h-px w-12 bg-line" />
        {hint && <span>{hint}</span>}
      </div>
      <div className="mt-4 overflow-hidden">
        <motion.h2
          initial={{ y: "100%" }}
          whileInView={{ y: "0%" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl font-extrabold uppercase leading-none tracking-tight md:text-8xl"
        >
          {title}
        </motion.h2>
      </div>
    </div>
  );
}
