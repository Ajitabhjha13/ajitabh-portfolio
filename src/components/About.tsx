"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  animate,
} from "framer-motion";
import { Download } from "lucide-react";
import { profile, stats, aboutTags, currentFocus, techStack } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

function Counter({
  value,
  suffix,
  decimals = 0,
}: {
  value: number;
  suffix: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const controls = animate(0, value, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = v.toFixed(decimals) + suffix;
      },
    });
    return () => controls.stop();
  }, [inView, value, suffix, decimals]);

  return (
    <span ref={ref} className="tabular-nums">
      0{suffix}
    </span>
  );
}

export default function About() {
  const imgWrap = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: imgWrap,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section id="about" className="relative mx-auto max-w-[1400px] px-6 py-28 md:px-12 md:py-40">
      <SectionHeading index="01" title="About me" hint="The human behind the code" />

      <div className="grid gap-14 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
        {/* Portrait */}
        <div ref={imgWrap} className="relative" data-cursor="hover">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-line bg-surface">
            <motion.img
              src={profile.aboutPortrait}
              alt={`Portrait of ${profile.name}`}
              style={{ y: imgY, scale: 1.16 }}
              className="h-full w-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent" />

            {/* Floating caption card — nested inside the image box so it always sits pinned to its corner */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="absolute bottom-4 right-4 rounded-xl border border-line bg-bg/90 px-5 py-4 backdrop-blur-md"
            >
              <p className="font-mono text-[11px] uppercase tracking-widest text-muted">Currently</p>
              <p className="mt-1 font-display text-lg font-bold">
                B.Tech CSE <span className="text-accent">· Final Year</span>
              </p>
            </motion.div>
          </div>
        </div>

        {/* Bio + stats */}
        <div>
          {profile.bio.map((para, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.12, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mb-6 text-lg leading-relaxed text-muted md:text-xl"
            >
              {para}
            </motion.p>
          ))}

          {/* Tech I'm building with — compact chip cloud, keeps the copy crisp while still surfacing keywords */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mb-8 flex flex-wrap gap-2"
          >
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-line px-3.5 py-1.5 font-mono text-[11px] text-muted"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          <div className="flex flex-wrap gap-4">
            <a
              href={profile.resumeUrl}
              className="group inline-flex items-center gap-3 rounded-full bg-accent px-7 py-3.5 font-mono text-xs font-medium uppercase tracking-widest text-bg transition-transform duration-300 hover:scale-105"
            >
              <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              Download resume
            </a>
          </div>

          {/* Quick tags */}
          <div className="mt-6 grid grid-cols-2 gap-3">
            {aboutTags.map((tag, i) => (
              <motion.div
                key={tag}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                className="rounded-xl border border-line bg-surface px-5 py-4"
              >
                <span className="font-mono text-[11px] uppercase tracking-widest text-muted">
                  {tag}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-6 inline-flex items-center gap-5 rounded-2xl border border-line bg-surface px-7 py-6">
            {stats.map((s) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className="font-display text-4xl font-extrabold text-accent md:text-5xl">
                  <Counter value={s.value} suffix={s.suffix} decimals={s.decimals ?? 0} />
                </p>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-widest text-muted">
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Current Focus panel */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7 }}
        className="mt-16 rounded-2xl border border-line bg-surface p-6 sm:p-8"
      >
        <div className="grid gap-6 lg:grid-cols-[0.4fr_1fr] lg:items-center">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">
            Current Focus
          </p>
          <p className="text-lg leading-relaxed text-muted md:text-xl">
            {currentFocus}
          </p>
        </div>
      </motion.div>
    </section>
  );
}
