"use client";

import { motion, Variants } from "framer-motion";

interface TextRevealProps {
  text: string;
  className?: string;
  accentClassName?: string;
  delay?: number;
  stagger?: number;
  splitBy?: "char" | "word";
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
  trigger?: "mount" | "view";
}

const container: Variants = {
  hidden: {},
  visible: (stagger: number) => ({
    transition: { staggerChildren: stagger },
  }),
};

const item: Variants = {
  hidden: { opacity: 0, y: "0.5em" },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

function parseAccents(line: string) {
  const regex = /\{\{(.*?)\}\}/g;
  const segments: { text: string; accent: boolean }[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(line)) !== null) {
    if (match.index > lastIndex) {
      segments.push({
        text: line.slice(lastIndex, match.index),
        accent: false,
      });
    }
    segments.push({ text: match[1], accent: true });
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < line.length) {
    segments.push({ text: line.slice(lastIndex), accent: false });
  }
  return segments;
}

export default function TextReveal({
  text,
  className = "",
  accentClassName = "",
  delay = 0,
  stagger = 0.05,
  splitBy = "char",
  as: Tag = "span",
  trigger = "view",
}: TextRevealProps) {
  const lines = text.split("\n");
  const MotionTag = motion[Tag];

  const triggerProps =
    trigger === "mount"
      ? { initial: "hidden", animate: "visible" }
      : {
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true, amount: 0.6 },
        };

  return (
    <MotionTag
      variants={container}
      custom={stagger}
      {...triggerProps}
      transition={{ delayChildren: delay }}
      aria-label={text.replace(/\n/g, " ").replace(/\{\{|\}\}/g, "")}>
      {lines.map((line, lineIndex) => {
        const segments = parseAccents(line);

        return (
          <span key={lineIndex} className="block" aria-hidden="true">
            {segments.map((segment, segIndex) => {
              const colorClass = segment.accent ? accentClassName : className;
              const words = segment.text.split(" ");

              return (
                <span key={segIndex} className="inline">
                  {words.map((word, wordIndex) => (
                    <span key={wordIndex} className="inline">
                      <span
                        className={`inline-block whitespace-nowrap ${colorClass}`}>
                        {splitBy === "char" ? (
                          Array.from(word).map((char, i) => (
                            <motion.span
                              key={i}
                              variants={item}
                              className="inline-block">
                              {char}
                            </motion.span>
                          ))
                        ) : (
                          <motion.span variants={item} className="inline-block">
                            {word}
                          </motion.span>
                        )}
                      </span>

                      {wordIndex < words.length - 1 && "\u00A0"}
                    </span>
                  ))}
                </span>
              );
            })}
          </span>
        );
      })}
    </MotionTag>
  );
}
