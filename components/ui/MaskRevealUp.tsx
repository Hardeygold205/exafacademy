"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";

export interface MaskRevealUpProps {
  children?: string;
  className?: string;
  delay?: number;
  lines?: string[];
  stagger?: number;
  triggerOnView?: boolean;
}

const DURATION_S = 0.76;
const MS = 1000;
const EASE = [0.22, 1, 0.36, 1] as const;

export default function MaskRevealUp({
  children,
  lines: linesProp,
  className = "",
  delay = 0,
  stagger = 90,
  triggerOnView = false,
}: MaskRevealUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const shouldReduceMotion = useReducedMotion();
  const play = (!triggerOnView || inView) && !shouldReduceMotion;

  const lines = linesProp ?? (children ? children.split("\n") : []);
  const label = lines.join(" ");

  return (
    <span
      aria-label={label}
      className={className}
      ref={ref}
      style={{ display: "block" }}>
      {lines.map((line, index) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: lines have no stable id
        <span key={index} style={{ display: "block", overflow: "hidden" }}>
          <motion.span
            animate={
              play ? { opacity: 1, y: 0, filter: "blur(0px)" } : undefined
            }
            aria-hidden="true"
            initial={
              shouldReduceMotion
                ? { opacity: 1 }
                : { opacity: 0, y: 30, filter: "blur(6px)" }
            }
            style={{ display: "block" }}
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : {
                    duration: DURATION_S,
                    delay: delay / MS + (index * stagger) / MS,
                    ease: EASE,
                  }
            }>
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
