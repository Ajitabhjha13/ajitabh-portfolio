"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, MapPin } from "lucide-react";
import { profile, socials } from "@/data/portfolio";

// lucide-react no longer ships brand/logo icons, so these are small inline SVGs
function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.833.092-.647.35-1.088.636-1.338-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.31.678.921.678 1.856 0 1.34-.012 2.421-.012 2.751 0 .268.18.58.688.482A10.02 10.02 0 0022 12.017C22 6.484 17.523 2 12 2z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.446-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
    </svg>
  );
}

const DELAY = 2.5; // starts right after the preloader curtain lifts

const rise = {
  hidden: { y: "110%" },
  show: (i: number) => ({
    y: "0%",
    transition: { delay: DELAY + i * 0.12, duration: 1, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yBig = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-svh flex-col justify-end overflow-hidden pt-28"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -top-40 right-[-15%] h-[560px] w-[560px] rounded-full bg-accent/10 blur-[160px]" />
      <div className="pointer-events-none absolute bottom-0 left-[-10%] h-[420px] w-[420px] rounded-full bg-accent/5 blur-[140px]" />

      {/* Grid backdrop */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.13]"
        style={{
          backgroundImage:
            "linear-gradient(#232326 1px, transparent 1px), linear-gradient(90deg, #232326 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black, transparent)",
        }}
      />

      <motion.div style={{ y: yBig, opacity }} className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12">
        {/* Meta row */}
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6 sm:mb-18 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: DELAY, duration: 0.8 }}
            className="font-mono text-xs uppercase tracking-[0.25em] text-muted"
          >
            <p className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 text-accent" /> {profile.location}
            </p>
            <p className="mt-2 text-fg/70">{profile.tagline}</p>
          </motion.div>
        </div>

        {/* Giant display type, with portrait centered/overlapping.
            This block breaks out to full viewport width (like the reference site) so vw-based
            text always has full room to breathe and can never wrap/cut, and the photo uses vh
            (viewport height) so it scales at the same continuous rate as the text at any zoom level. */}
        <div className="relative ml-[calc(50%-50vw)] mr-[calc(50%-50vw)] w-screen">
          <h1 className="pointer-events-none relative z-0 flex flex-col items-center text-center font-display font-extrabold uppercase leading-[0.88] tracking-tight">
            <span className="overflow-hidden">
              <motion.span
                custom={0}
                variants={rise}
                initial="hidden"
                animate="show"
                className="block text-[15vw] sm:text-[13vw] lg:text-[10.5vw]"
              >
                Software
              </motion.span>
            </span>
            <span className="overflow-hidden">
              <motion.span
                custom={1}
                variants={rise}
                initial="hidden"
                animate="show"
                className="text-stroke block text-[15vw] sm:text-[13vw] lg:text-[10.5vw]"
              >
                Developer
              </motion.span>
            </span>
          </h1>

          {/* Portrait — centered, overlapping between the two lines, vh-based like the reference */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: DELAY + 0.3, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex justify-center"
          >
            <div
              className="relative h-[40vh] sm:h-[47vh] lg:h-[54vh] w-auto"
              style={{
                maskImage: "linear-gradient(to bottom, black 55%, transparent 97%)",
                WebkitMaskImage: "linear-gradient(to bottom, black 55%, transparent 97%)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={profile.portrait}
                alt={profile.name}
                className="h-full w-auto max-w-none object-contain grayscale contrast-125"
              />
            </div>
          </motion.div>
        </div>

        {/* Sub row */}
        <div className="mt-3 flex flex-wrap items-center justify-between gap-6 border-t border-line pt-8 sm:mt-4 lg:mt-5">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: DELAY + 0.4, duration: 0.8 }}
            className="max-w-md text-base leading-relaxed text-muted md:text-lg"
          >
            Hi, I&apos;m{" "}
            <span className="font-semibold text-fg">{profile.name}</span> —
            passionate about Java, hooked on building for the web, and
            endlessly curious about AI/ML.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: DELAY + 0.55, duration: 0.8 }}
            className="flex flex-wrap items-center gap-4"
          >
            {socials
              .filter((s) => s.label === "GitHub" || s.label === "LinkedIn")
              .map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="hover"
                  className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-accent"
                >
                  {s.label === "GitHub" ? (
                    <GithubIcon className="h-4 w-4" />
                  ) : (
                    <LinkedinIcon className="h-4 w-4" />
                  )}
                  {s.label}
                </a>
              ))}

            <a
              href="#work"
              className="group inline-flex items-center gap-3 rounded-full border border-line px-6 py-3 font-mono text-xs uppercase tracking-widest transition-colors hover:border-accent hover:bg-accent hover:text-bg"
            >
              See my work
              <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
