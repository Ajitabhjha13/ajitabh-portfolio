"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Blend-mode custom cursor: a small dot with a trailing ring.
 * Swells over any element marked with data-cursor="hover".
 */
export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [pressed, setPressed] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 240, damping: 26, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 240, damping: 26, mass: 0.6 });

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);
    document.documentElement.classList.add("custom-cursor-active");

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHovering(
        !!t.closest('a, button, [data-cursor="hover"], input, textarea, label')
      );
    };
    const down = () => setPressed(true);
    const up = () => setPressed(false);

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", over, { passive: true });
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      document.documentElement.classList.remove("custom-cursor-active");
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      {/* Center dot */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[300] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent mix-blend-difference"
        style={{ x, y }}
      />
      {/* Trailing ring */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[299] -translate-x-1/2 -translate-y-1/2 rounded-full border border-fg mix-blend-difference"
        style={{ x: ringX, y: ringY }}
        animate={{
          width: hovering ? 56 : 32,
          height: hovering ? 56 : 32,
          scale: pressed ? 0.8 : 1,
          opacity: 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 22 }}
      />
    </>
  );
}
