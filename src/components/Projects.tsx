"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Code2, Trophy } from "lucide-react";
import { projects, type Project } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

function ProjectCard({ project, flip }: { project: Project; flip: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={`group grid items-center gap-8 border-t border-line py-14 md:py-20 lg:grid-cols-12 lg:gap-14 ${
        flip ? "" : ""
      }`}
    >
      {/* Image */}
      {(() => {
        const ImageBlock = (
          <div className="relative aspect-[16/10] overflow-hidden bg-surface">
            {project.image ? (
              <motion.img
                src={project.image}
                alt={`${project.title} preview`}
                style={{ y: imgY, scale: 1.22 }}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.28]"
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-surface to-bg">
                <Code2 className="h-8 w-8 text-muted" />
                <span className="font-mono text-[11px] uppercase tracking-widest text-muted">
                  Screenshot coming soon
                </span>
              </div>
            )}
            {project.live && (
              <>
                <div className="absolute inset-0 bg-bg/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-500 group-hover:opacity-100">
                  <span className="flex h-20 w-20 scale-50 items-center justify-center rounded-full bg-accent font-mono text-[10px] font-medium uppercase tracking-widest text-bg transition-transform duration-500 group-hover:scale-100">
                    Visit
                    <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
                  </span>
                </div>
              </>
            )}
          </div>
        );
        return project.live ? (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            data-cursor="hover"
            className={`relative block overflow-hidden rounded-2xl border border-line lg:col-span-7 ${
              flip ? "lg:order-2" : ""
            }`}
          >
            {ImageBlock}
          </a>
        ) : (
          <div
            className={`relative block overflow-hidden rounded-2xl border border-line lg:col-span-7 ${
              flip ? "lg:order-2" : ""
            }`}
          >
            {ImageBlock}
          </div>
        );
      })()}

      {/* Details */}
      <div className={`lg:col-span-5 ${flip ? "lg:order-1" : ""}`}>
        <div className="flex items-center gap-4 font-mono text-xs text-muted">
          <span className="text-accent">{project.index}</span>
          <span className="h-px w-8 bg-line" />
          <span>{project.year}</span>
        </div>

        <h3 className="mt-4 font-display text-4xl font-extrabold tracking-tight transition-colors duration-300 group-hover:text-accent md:text-5xl">
          {project.title}
        </h3>

        {project.highlight && (
          <p className="mt-3 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 font-mono text-[11px] uppercase tracking-widest text-accent">
            <Trophy className="h-3 w-3" />
            {project.highlight}
          </p>
        )}

        <p className="mt-5 leading-relaxed text-muted">{project.description}</p>

        <ul className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((t) => (
            <li
              key={t}
              className="rounded-full border border-line px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-wider text-fg/70 transition-colors hover:border-accent/50 hover:text-accent"
            >
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex items-center gap-3">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="group/btn inline-flex items-center gap-2 rounded-full bg-fg px-6 py-3 font-mono text-xs font-medium uppercase tracking-widest text-bg transition-colors hover:bg-accent"
            >
              Live demo
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} source code`}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line transition-colors hover:border-accent hover:text-accent"
            >
              <Code2 className="h-4.5 w-4.5" />
            </a>
          )}
          {!project.live && !project.github && (
            <span className="font-mono text-xs uppercase tracking-widest text-muted">
              Not public yet
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="work" className="relative mx-auto max-w-[1400px] px-6 py-28 md:px-12 md:py-40">
      <SectionHeading index="03" title="Selected work" hint="Things I've built & shipped" />

      <div>
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} flip={i % 2 === 1} />
        ))}
      </div>

      <div className="border-t border-line pt-10 text-center">
        <a
          href="https://github.com/Ajitabhjha13?tab=repositories"
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-accent"
        >
          View all experiments on GitHub
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  );
}
