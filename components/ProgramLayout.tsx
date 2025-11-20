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

const timelineData = [
  {
    id: 1,
    title: "Undergraduate Students",
    subtitle: "Planting the Seeds",
    description:
      "Are you unsure about your career path in agricultural business? We provide the foundational knowledge to kickstart your journey while you study.",
    image: "/hero-1.jpg",
    link: "/undergrad",
    icon: Sprout,
    tags: ["Mentorship", "Internships"],
    color: "bg-green-100 text-green-600",
  },
  {
    id: 2,
    title: "Recent Graduates",
    subtitle: "Cultivating Growth",
    description:
      "Unlock your potential. Bridge the gap between academic theory and practical industry requirements with our intensive bootcamps.",
    image: "/hero-2.png",
    link: "/graduates",
    icon: GraduationCap,
    tags: ["Job Placement", "Skill Building"],
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: 3,
    title: "Agribusiness Professionals",
    subtitle: "Harvesting Success",
    description:
      "Already in the field? Sharpen your management skills and expand your network to scale your agribusiness operations.",
    image: "/hero-3.jpg",
    link: "/pros",
    icon: Briefcase,
    tags: ["Networking", "Advanced Certs"],
    color: "bg-amber-100 text-amber-600",
  },
  {
    id: 4,
    title: "Shaping The Future",
    subtitle: "Ecosystem Impact",
    description:
      "Join the Africa Extension Academy network. We are building the largest community of reliable Extension Agents across the continent.",
    image: "/hero-1.jpg",
    link: "/community",
    icon: Users,
    tags: ["Community", "Impact"],
    color: "bg-purple-100 text-purple-600",
  },
];

const Card = ({
  data,
  index,
}: {
  data: (typeof timelineData)[0];
  index: number;
}) => {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`relative flex items-center mb-16 md:mb-24 ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      }`}>
      <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-10 h-10 md:w-14 md:h-14 z-20 bg-white rounded-full border-4 border-gray-50 shadow-lg">
        <data.icon
          className={`w-5 h-5 md:w-6 md:h-6 ${data.color.split(" ")[1]}`}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50, x: 0 }}
        whileInView={{
          opacity: 1,
          y: 0,
          x: 0,
          transition: { duration: 0.6, type: "spring" },
        }}
        viewport={{ once: true, margin: "-50px" }}
        className={`w-full md:w-5/12 pl-10 md:pl-0`}>
        <div className="bg-white p-0 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden border border-gray-100 group">
          
          <div className="relative h-40 md:h-48 overflow-hidden">
            <Image
              src={data.image}
              alt={data.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-80" />
            <div className="absolute bottom-4 left-4 text-white">
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider opacity-90 mb-1 block">
                {data.subtitle}
              </span>
              <h3 className="text-lg md:text-xl font-bold">{data.title}</h3>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-5 md:p-6">
            <div className="flex flex-wrap gap-2 mb-4">
              {data.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-[10px] font-bold uppercase tracking-wide bg-gray-100 text-gray-600 px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
              {data.description}
            </p>

            <Link
              href={data.link}
              className="inline-flex items-center text-primary font-semibold hover:underline group/link text-sm md:text-base">
              Learn More{" "}
              <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover/link:translate-x-1" />
            </Link>
          </div>
        </div>
      </motion.div>
      <div className="hidden md:block w-5/12" />
    </div>
  );
};

export default function ProgramLayout() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const height = useSpring(
    useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
    {
      stiffness: 50,
      damping: 30,
      restDelta: 0.001,
    }
  );

  return (
    <section
      className="py-12 md:py-24 bg-gray-50 overflow-hidden"
      ref={containerRef}>
      <div className="text-center max-w-3xl mx-auto px-4 mb-16 md:mb-24">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-primary font-bold tracking-wider uppercase text-sm">
          Your Journey Starts Here
        </motion.span>
        <h2 className="text-3xl md:text-5xl text-primary mt-3 mb-3">
          Our Academy Programs
        </h2>
        <p className="text-gray-600 text-lg font-light">
          We have a path tailored for your growth in agribusiness.
        </p>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gray-200 -translate-x-1/2 rounded-full" />

        {/* 2. Progress Line (Green) */}
        <motion.div
          style={{ height }}
          className="absolute left-8 md:left-1/2 top-0 w-1 bg-primary -translate-x-1/2 rounded-full origin-top z-10"
        />

        {/* Timeline Items */}
        <div className="relative z-20">
          {timelineData.map((item, index) => (
            <Card key={item.id} data={item} index={index} />
          ))}
        </div>

        {/* Final CTA Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative z-30 bg-white rounded-2xl shadow-2xl p-4 text-center max-w-4xl mx-auto border-t-4 border-primary mt-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
            Not sure where you fit in?
          </h3>
          <p className="text-gray-600 mb-3 text-lg max-w-2xl mx-auto">
            Don&apos;t belong to any of the above categories? Register now to
            explore our library of Self-study courses.
          </p>
          <Link
            href="/register"
            className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-primary/90 hover:-translate-y-1 transition-all duration-300">
            Get Started Today
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
