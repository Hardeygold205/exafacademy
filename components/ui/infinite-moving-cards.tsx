"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    src: string;
    name: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  const [start, setStart] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const scroller = scrollerRef.current;

    if (!container || !scroller) {
      return;
    }

    Array.from(scroller.querySelectorAll("[data-clone='true']")).forEach(
      (clone) => {
        scroller.removeChild(clone);
      }
    );

    const originalChildren = Array.from(scroller.children).slice(
      0,
      items.length
    );

    originalChildren.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      if (duplicatedItem instanceof HTMLElement) {
        duplicatedItem.setAttribute("data-clone", "true");
      }
      scroller.appendChild(duplicatedItem);
    });

    if (direction === "left") {
      container.style.setProperty("--animation-direction", "forwards");
    } else {
      container.style.setProperty("--animation-direction", "reverse");
    }

    if (speed === "fast") {
      container.style.setProperty("--animation-duration", "20s");
    } else if (speed === "normal") {
      container.style.setProperty("--animation-duration", "40s");
    } else {
      container.style.setProperty("--animation-duration", "80s");
    }

    const frame = window.requestAnimationFrame(() => setStart(true));

    return () => {
      window.cancelAnimationFrame(frame);
      setStart(false);

      Array.from(scroller.querySelectorAll("[data-clone='true']")).forEach(
        (clone) => {
          scroller.removeChild(clone);
        }
      );
    };
  }, [items, direction, speed]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden mask-[linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}>
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:paused"
        )}>
        {items.map((item) => (
          <li
            className="relative w-24 lg:w-52 max-w-full shrink-0 items-center flex px-2 lg:px-8 py-6 md:w-60 hover:scale-125 transition-transform duration-300 ease-in-out "
            key={item.name}>
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none pointer-events-none absolute -top-0.5 -left-0.5 -z-1 h-[calc(100%+4px)] w-[calc(100%+4px)]"></div>
              <Image
                alt={item.name}
                src={item.src}
                width="100"
                height="100"
                className="object-contain mx-auto "
              />
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
