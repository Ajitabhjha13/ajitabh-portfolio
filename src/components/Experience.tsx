"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { experience } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative mx-auto max-w-[1400px] px-6 py-28 md:px-12 md:py-40"
    >
      <SectionHeading index="04" title="Journey" hint="Experience & education" />

      <div className="relative ml-3 border-l border-line pl-8 md:ml-6 md:pl-14">
        {experience.map((item, i) => (
          <motion.div
            key={`${item.role}-${item.org}`}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: i * 0.06, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="group relative pb-16 last:pb-0"
            data-cursor="hover"
          >
            {/* Node */}
            <span className="absolute -left-[41px] top-1 flex h-6 w-6 items-center justify-center rounded-full border border-line bg-bg transition-colors duration-300 group-hover:border-accent md:-left-[65px]">
              <span className="h-1.5 w-1.5 rounded-full bg-muted transition-colors duration-300 group-hover:bg-accent" />
            </span>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs uppercase tracking-widest text-muted">
              <span className="text-accent">{item.period}</span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1 text-[10px]">
                {item.type === "work" ? (
                  <Briefcase className="h-3 w-3" />
                ) : (
                  <GraduationCap className="h-3 w-3" />
                )}
                {item.type === "work" ? "Experience" : "Education"}
              </span>
            </div>

            <h3 className="mt-3 font-display text-2xl font-bold tracking-tight transition-colors duration-300 group-hover:text-accent md:text-4xl">
              {item.role}
            </h3>
            <p className="mt-1 text-lg text-fg/70">{item.org}</p>

            <ul className="mt-4 max-w-2xl space-y-2">
              {item.points.map((point, j) => (
                <li key={j} className="flex gap-3 text-sm leading-relaxed text-muted md:text-base">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
