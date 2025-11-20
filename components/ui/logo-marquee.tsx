"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface Logo {
  src: string;
  name: string;
}

export const LogoMarquee = ({
  items,
  direction = "left",
  speed = 20,
}: {
  items: Logo[];
  direction?: "left" | "right";
  speed?: number;
}) => {
  return (
    <div className="flex overflow-hidden select-none group mask-gradient">
      <motion.div
        initial={{ x: direction === "left" ? "0%" : "-50%" }}
        animate={{ x: direction === "left" ? "-50%" : "0%" }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
        className="flex shrink-0 gap-12 md:gap-24 pr-12 md:pr-24">
        {[...items, ...items].map((item, idx) => (
          <div
            key={`${item.name}-${idx}`}
            className="relative h-12 w-32 md:h-16 md:w-40 flex items-center justify-center opacity-50 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 cursor-pointer">
            <Image
              src={item.src}
              alt={item.name}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};
