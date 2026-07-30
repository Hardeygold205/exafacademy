"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  GraduationCap,
  Briefcase,
  Sprout,
  Users,
  ArrowRight,
} from "lucide-react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

const stages = [
  {
    id: 1,
    stage: "01",
    title: "Undergraduate Students",
    subtitle: "Planting the Seeds",
    description:
      "Unsure about your career path in agricultural business? We provide the foundational knowledge to kickstart your journey while you study.",
    image: "/IMG_1.jpg",
    link: "/under-graduate",
    icon: Sprout,
    tags: ["Mentorship", "Internships"],
    stemHeight: "h-20 md:h-24",
  },
  {
    id: 2,
    stage: "02",
    title: "Recent Graduates",
    subtitle: "Cultivating Growth",
    description:
      "Bridge the gap between academic theory and practical industry requirements with our intensive bootcamps.",
    image: "/IMG_9533.jpg",
    link: "/recent-graduate",
    icon: GraduationCap,
    tags: ["Job Placement", "Skill Building"],
    stemHeight: "h-32 md:h-40",
  },
  {
    id: 3,
    stage: "03",
    title: "Agribusiness Professionals",
    subtitle: "Harvesting Success",
    description:
      "Already in the field? Sharpen your management skills and expand your network to scale your operations.",
    image: "/FIRMEX_IMG1.jpg",
    link: "/agribusiness",
    icon: Briefcase,
    tags: ["Networking", "Advanced Certs"],
    stemHeight: "h-44 md:h-56",
  },
  {
    id: 4,
    stage: "04",
    title: "Shaping The Future",
    subtitle: "Ecosystem Impact",
    description:
      "Join the network. We're building the largest community of reliable Extension Agents across the continent.",
    image: "/IMG_8382.jpg",
    link: "/ecosystem",
    icon: Users,
    tags: ["Community", "Impact"],
    stemHeight: "h-56 md:h-72",
  },
];

function Stem({
  data,
  index,
  scrollYProgress,
}: {
  data: (typeof stages)[0];
  index: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const start = index * 0.22;
  const end = start + 0.22;
  const rawGrowth = useTransform(scrollYProgress, [start, end], [0, 1], {
    clamp: true,
  });
  const growth = useSpring(rawGrowth, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  });
  const Icon = data.icon;

  return (
    <div className="flex flex-col items-center shrink-0 w-[220px] md:w-auto">
      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, delay: index * 0.05 }}
        className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden border border-black/5 w-full mb-3">
        <div className="relative h-28 overflow-hidden">
          <Image
            src={data.image}
            alt={data.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />
          <span className="absolute top-2 left-3 text-[10px] font-bold tracking-widest text-white/70">
            STAGE {data.stage}
          </span>
        </div>
        <div className="p-4">
          <span className="text-[10px] font-bold uppercase tracking-wider text-white">
            {data.subtitle}
          </span>
          <h3 className="text-base font-bold text-gray-900 mt-0.5 mb-2 leading-snug">
            {data.title}
          </h3>
          <p className="text-xs text-gray-600 leading-relaxed mb-3 line-clamp-3">
            {data.description}
          </p>
          <div className="flex flex-wrap gap-1.5 mb-3">
            {data.tags.map((tag, i) => (
              <span
                key={i}
                className="text-[9px] font-semibold uppercase tracking-wide bg-[#132A1D]/5 text-[#132A1D]/70 px-2 py-0.5 rounded">
                {tag}
              </span>
            ))}
          </div>
          <Link
            href={data.link}
            className="inline-flex items-center text-[#132A1D] font-semibold hover:underline group/link text-xs">
            Learn More{" "}
            <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover/link:translate-x-1" />
          </Link>
        </div>
      </motion.div>

      {/* Stem */}
      <div
        className={`relative w-1 ${data.stemHeight} rounded-full bg-[#132A1D]/10 overflow-hidden`}>
        <motion.div
          style={{ scaleY: growth, transformOrigin: "bottom" }}
          className="absolute inset-0 bg-linear-to-t from-[#132A1D] to-white rounded-full"
        />
      </div>

      {/* Icon badge at soil line */}
      <div className="relative -mt-4 flex items-center justify-center w-10 h-10 bg-white rounded-full border-4 border-[#F3EDE0] shadow-md z-10">
        <Icon className="w-4 h-4 text-[#132A1D]" />
      </div>
    </div>
  );
}

export default function Programs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"],
  });

  return (
    <section
      className="py-24 md:py-28 overflow-hidden"
      ref={containerRef}>
      <div className="text-center max-w-3xl mx-auto px-4 mb-16 md:mb-20">
        <h2 className="text-3xl md:text-5xl text-[#132A1D] font-bold mt-3 mb-3">
          Our Academy Programs
        </h2>
        <p className="text-gray-600 text-lg font-light">
          A path tailored for your growth in agribusiness.
        </p>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="absolute left-0 right-0 bottom-0 h-px bg-[#132A1D]/15 hidden md:block" />

        <div className="flex md:grid md:grid-cols-4 gap-6 md:gap-4 items-end overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">
          {stages.map((item, index) => (
            <div key={item.id} className="snap-center">
              <Stem
                data={item}
                index={index}
                scrollYProgress={scrollYProgress}
              />
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative z-30 mt-16 md:mt-20">
          <CardContainer className="inter-var">
            <CardBody className="w-full">
              <CardItem
                translateZ={80}
                className="w-full max-w-4xl mx-auto bg-[#132A1D] rounded-2xl shadow-2xl p-8 md:p-10 text-center">
                <span className="text-white text-xs font-bold tracking-[0.25em] uppercase">
                  Open Ground
                </span>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 mt-2 text-white">
                  Not sure where you fit in?
                </h3>
                <p className="text-white/70 mb-6 text-lg max-w-2xl mx-auto">
                  Don&apos;t belong to any of the above categories? Register now
                  to explore our library of self-study courses.
                </p>
                <Link
                  href="/register"
                  className="inline-block bg-white text-[#132A1D] font-bold py-3 px-8 rounded-full shadow-lg hover:-translate-y-1 transition-all duration-300">
                  Get Started Today
                </Link>
              </CardItem>
            </CardBody>
          </CardContainer>
        </motion.div>
      </div>
    </section>
  );
}
