"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Seconds. Use small steps (0.08–0.12) to stagger siblings. */
  delay?: number;
  /** Slide in from a side instead of rising. */
  from?: "up" | "left" | "right";
}

const ease = [0.22, 1, 0.36, 1] as const;

/** Fades content in once, the first time it scrolls into view. */
export function Reveal({
  children,
  className,
  delay = 0,
  from = "up",
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const offset = {
    up: { y: 24 },
    left: { x: -32 },
    right: { x: 32 },
  }[from];

  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default Reveal;
