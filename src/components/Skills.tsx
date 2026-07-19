"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-[1400px] px-6 py-28 md:px-12 md:py-40">
      <SectionHeading index="02" title="Arsenal" hint="Tools I reach for daily" />

      <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2">
        {skillGroups.map((group, gi) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: gi * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="group relative bg-bg p-8 transition-colors duration-500 hover:bg-surface md:p-10"
            data-cursor="hover"
          >
            <div className="mb-8 flex items-start justify-between">
              <div>
                <span className="font-mono text-xs text-accent">
                  0{gi + 1}
                </span>
                <h3 className="mt-1 font-display text-2xl font-bold tracking-tight md:text-3xl">
                  {group.title}
                </h3>
                <p className="mt-1 text-sm text-muted">{group.blurb}</p>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-line font-mono text-xs text-muted transition-colors duration-300 group-hover:border-accent group-hover:text-accent">
                {group.skills.length}
              </div>
            </div>

            <ul className="space-y-5">
              {group.skills.map((skill, si) => (
                <li key={skill.name}>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="font-medium text-fg/90">{skill.name}</span>
                    <span className="font-mono text-xs text-muted">{skill.level}%</span>
                  </div>
                  <div className="h-[3px] w-full overflow-hidden rounded-full bg-line">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{
                        delay: 0.2 + si * 0.1,
                        duration: 1.2,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="h-full rounded-full bg-accent"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <p className="mt-8 text-center font-mono text-xs uppercase tracking-widest text-muted">
        …and always learning whatever the next problem demands
      </p>
    </section>
  );
}
