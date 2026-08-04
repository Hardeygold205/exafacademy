"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";
import Image from "next/image";

const MAP_IMAGE_SRC = "/map-background2.png";

type Side = "left" | "right" | "bottom";

interface Country {
  name: string;
  x: number;
  y: number;
  labelX: number;
  labelY: number;
  side: Side;
}

const COUNTRIES: Country[] = [
  {
    name: "Nigeria",
    x: 42.8,
    y: 56.5,
    labelX: 36.2,
    labelY: 89.5,
    side: "left",
  },
  {
    name: "Kenya",
    x: 54.3,
    y: 62.3,
    labelX: 68.7,
    labelY: 62.4,
    side: "right",
  },
  { name: "Ghana", x: 39.5, y: 56.9, labelX: 39.3, labelY: 81.8, side: "left" },
  { name: "Mali", x: 37.9, y: 52.6, labelX: 33.9, labelY: 75.9, side: "left" },
  {
    name: "Ethiopia",
    x: 55.0,
    y: 54.9,
    labelX: 66.3,
    labelY: 55.0,
    side: "right",
  },
  {
    name: "Tanzania",
    x: 53.5,
    y: 69.2,
    labelX: 74.9,
    labelY: 69.5,
    side: "right",
  },
  {
    name: "Uganda",
    x: 52.2,
    y: 61.7,
    labelX: 52.2,
    labelY: 101.9,
    side: "bottom",
  },
  {
    name: "Rwanda",
    x: 51.2,
    y: 64.1,
    labelX: 47.8,
    labelY: 95.3,
    side: "bottom",
  },
  {
    name: "Malawi",
    x: 53.0,
    y: 74.2,
    labelX: 70.7,
    labelY: 78.4,
    side: "right",
  },
  {
    name: "Mozambique",
    x: 53.4,
    y: 74.9,
    labelX: 66.0,
    labelY: 90.2,
    side: "right",
  },
];

const STEP = 1 / COUNTRIES.length;
const WINDOW = STEP * 1.4;

interface MarkerProps {
  country: Country;
  index: number;
  scrollYProgress: MotionValue<number>;
}

function CountryMarker({ country, index, scrollYProgress }: MarkerProps) {
  const start = index * STEP;
  const end = Math.min(start + WINDOW, 1);

  const lineProgress = useTransform(
    scrollYProgress,
    [start, start + (end - start) * 0.6],
    [0, 1],
  );
  const dotScale = useTransform(
    scrollYProgress,
    [start + (end - start) * 0.35, start + (end - start) * 0.6],
    [0, 1],
  );
  const dotOpacity = useTransform(
    scrollYProgress,
    [start + (end - start) * 0.3, start + (end - start) * 0.5],
    [0, 1],
  );
  const dashOffset = useTransform(lineProgress, (v: number) => 1 - v);

  return (
    <g>
      <motion.line
        x1={`${country.x}%`}
        y1={`${country.y}%`}
        x2={`${country.labelX}%`}
        y2={`${country.labelY}%`}
        stroke="#206542"
        strokeWidth="0.1"
        pathLength={1}
        strokeDasharray="1"
        style={{ strokeDashoffset: dashOffset }}
      />

      <motion.circle
        cx={`${country.x}%`}
        cy={`${country.y}%`}
        r="0.2"
        fill="#206542"
        stroke="#c8d94a"
        strokeWidth="0.1"
        style={{ scale: dotScale, opacity: dotOpacity }}
      />
    </g>
  );
}

interface LabelProps {
  country: Country;
  index: number;
  scrollYProgress: MotionValue<number>;
}

function CountryLabel({ country, index, scrollYProgress }: LabelProps) {
  const start = index * STEP;
  const end = Math.min(start + WINDOW, 1);
  const opacity = useTransform(
    scrollYProgress,
    [start + (end - start) * 0.55, end],
    [0, 1],
  );
  const y = useTransform(
    scrollYProgress,
    [start + (end - start) * 0.55, end],
    [10, 0],
  );

  return (
    <motion.div
      style={{
        position: "absolute",
        left: `${country.labelX}%`,
        top: `${country.labelY}%`,
        transform: "translate(-50%, -50%)",
        opacity,
        y,
      }}
      className="pointer-events-none whitespace-nowrap rounded-md border border-neutral-200 bg-white px-2 py-1 text-xs font-medium text-neutral-800 shadow-sm">
      {country.name}
    </motion.div>
  );
}

export default function AfricaFootprintMap() {
  const wrapperRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  const staticProgress = useMotionValue(1);
  const progress = reduceMotion ? staticProgress : scrollYProgress;

  return (
    <section
      ref={wrapperRef}
      style={{ height: reduceMotion ? "auto" : "350vh" }}
      className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-2">
        <h2 className="text-3xl md:text-5xl text-primary mt-3 mb-3">
          Our Vision Board
        </h2>
      </div>
      <div
        className={reduceMotion ? "" : "sticky top-0"}
        style={{ height: "100vh" }}>
        <div className="relative mx-auto flex h-full max-w-6xl items-center justify-center px-6">
          <div
            className="relative w-full"
            style={{ aspectRatio: "1682 / 892" }}>
            <Image
              src={MAP_IMAGE_SRC}
              alt="Map of Africa showing operating countries"
              className="absolute inset-0 h-full w-full select-none object-contain"
              draggable={false}
              fill
            />

            {/* Lines + dots (SVG overlay, same box as the image) */}
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="absolute inset-0 h-full w-full">
              {COUNTRIES.map((country, i) => (
                <CountryMarker
                  key={country.name}
                  country={country}
                  index={i}
                  scrollYProgress={progress}
                />
              ))}
            </svg>

            {/* Labels (HTML, so text renders crisply at any zoom) */}
            {COUNTRIES.map((country, i) => (
              <CountryLabel
                key={country.name}
                country={country}
                index={i}
                scrollYProgress={progress}
              />
            ))}
          </div>
        </div>

        {/* <div className="pointer-events-none absolute bottom-6 left-6 text-xs uppercase tracking-wide text-neutral-400">
          Scroll to reveal our footprint
        </div> */}
      </div>
    </section>
  );
}
