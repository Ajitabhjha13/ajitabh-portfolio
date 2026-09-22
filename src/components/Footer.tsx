"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Eye } from "lucide-react";
import { profile, socials } from "@/data/portfolio";
import Marquee from "./Marquee";

export default function Footer() {
  const [views, setViews] = useState<number | null>(null);
  const [time, setTime] = useState("");

  // Count this visit once per session, then display the total
  useEffect(() => {
    const run = async () => {
      try {
        const counted = sessionStorage.getItem("visit-counted");
        const res = await fetch("/api/views", { method: counted ? "GET" : "POST" });
        const json = await res.json();
        sessionStorage.setItem("visit-counted", "1");
        setViews(json.count);
      } catch {
        /* non-critical */
      }
    };
    run();
  }, []);

  // Local time ticker
  useEffect(() => {
    const tick = () =>
      setTime(
        new Date().toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
          timeZone: "Asia/Kolkata",
        })
      );
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="relative border-t border-line">
      {/* Big CTA marquee */}
      <a href={`mailto:${profile.email}`} className="group block py-10" data-cursor="hover">
        <Marquee
          items={["Let's build", "Let's build", "Let's build", "Let's build"]}
          duration={22}
          itemClassName="transition-colors duration-300 group-hover:text-accent"
        />
      </a>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-8 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-12">
          <div>
            <p className="font-display text-lg font-bold">
              {profile.firstName.toLowerCase()}
              <span className="text-accent">.</span>dev
            </p>
            <p className="mt-1 font-mono text-xs text-muted">
              © 2026 {profile.name} · Designed & built from scratch
            </p>
            <p className="mt-1 flex items-center gap-2 font-mono text-xs text-muted">
              <Eye className="h-3.5 w-3.5 text-accent" />
              {views !== null ? `${views.toLocaleString()} visits` : "counting visits…"}
            </p>
          </div>

          <ul className="flex flex-wrap gap-2">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-2 font-mono text-[11px] uppercase tracking-widest text-muted transition-colors hover:border-accent hover:text-accent"
                >
                  {s.label}
                  <ArrowUpRight className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </li>
            ))}
          </ul>

          <div className="font-mono text-xs uppercase tracking-widest text-muted">
            <p>{profile.location}</p>
            <p className="mt-1 text-fg/70 tabular-nums">
              {time} <span className="text-accent">IST</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
