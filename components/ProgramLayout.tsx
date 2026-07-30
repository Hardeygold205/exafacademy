"use client";

import React, { useRef, useState, useEffect } from "react";
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

const timelineData = [
  {
    id: 1,
    title: "Undergraduate Students",
    subtitle: "Planting the Seeds",
    description:
      "Are you unsure about your career path in agricultural business? We provide the foundational knowledge to kickstart your journey while you study.",
    image: "/IMG_1.jpg",
    link: "/under-graduate",
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
    image: "/IMG_9533.jpg",
    link: "/recent-graduate",
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
    image: "/FIRMEX_IMG1.jpg",
    link: "/agribusiness",
    icon: Briefcase,
    tags: ["Networking", "Advanced Certs"],
    color: "bg-green-100 text-green-600",
  },
  {
    id: 4,
    title: "Shaping The Future",
    subtitle: "Ecosystem Impact",
    description:
      "Join the Extension Africa Academy network. We are building the largest community of reliable Extension Agents across the continent.",
    image: "/IMG_8382.jpg",
    link: "/ecosystem",
    icon: Users,
    tags: ["Community", "Impact"],
    color: "bg-purple-100 text-purple-600",
  },
];

const Card = ({ data }: { data: (typeof timelineData)[0] }) => {
  return (
    <div className="bg-white p-0 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden border border-gray-100 group w-[300px] md:w-[360px]">
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
  );
};

export default function ProgramLayout() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const [maxScroll, setMaxScroll] = useState(0);
  const [containerHeight, setContainerHeight] = useState("400vh");

  useEffect(() => {
    function updateMeasurements() {
      if (!trackRef.current) return;
      const trackWidth = trackRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;
      const scrollNeeded = Math.max(trackWidth - viewportWidth, 0);
      setMaxScroll(scrollNeeded);
      // extra multiplier gives finer scroll control over the horizontal shift
      setContainerHeight(`${window.innerHeight + scrollNeeded * 1.4}px`);
    }
    updateMeasurements();
    window.addEventListener("resize", updateMeasurements);
    return () => window.removeEventListener("resize", updateMeasurements);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -maxScroll]);
  const xSpring = useSpring(x, { stiffness: 60, damping: 22, restDelta: 0.5 });

  const lineFill = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <section
        ref={containerRef}
        style={{ height: containerHeight }}
        className="relative bg-gray-50">
        <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
          <div className="text-center max-w-3xl mx-auto px-4 mb-10 md:mb-14 shrink-0">
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

          <div className="overflow-hidden">
            <motion.div
              ref={trackRef}
              style={{ x: xSpring }}
              className="flex items-center gap-10 md:gap-16 relative h-[440px] md:h-[480px] px-6 md:px-16 w-max">
              {/* baseline track */}
              <div className="absolute left-0 right-0 top-1/2 h-1 bg-gray-200 -translate-y-1/2 rounded-full" />
              <motion.div
                style={{ scaleX: lineFill }}
                className="absolute left-0 right-0 top-1/2 h-1 bg-primary -translate-y-1/2 rounded-full origin-left"
              />

              {timelineData.map((item, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div
                    key={item.id}
                    className="relative flex flex-col items-center w-[300px] md:w-[360px] shrink-0 h-full">
                    <motion.div
                      initial={{ opacity: 0, y: isEven ? 30 : -30 }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.6, type: "spring" },
                      }}
                      viewport={{ once: true, margin: "0px 200px 0px 200px" }}
                      className={isEven ? "mb-auto" : "mt-auto"}>
                      <Card data={item} />
                    </motion.div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-gray-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative z-30">
          <CardContainer className="inter-var">
            <CardBody className="w-full">
              <CardItem
                translateZ={80}
                className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-4 text-center border-t-4 border-primary">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                  Not sure where you fit in?
                </h3>
                <p className="text-gray-600 mb-3 text-lg max-w-2xl mx-auto">
                  Don&apos;t belong to any of the above categories? Register now
                  to explore our library of Self-study courses.
                </p>
                <Link
                  href="/register"
                  className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-primary/90 hover:-translate-y-1 transition-all duration-300">
                  Get Started Today
                </Link>
              </CardItem>
            </CardBody>
          </CardContainer>
        </motion.div>
      </div>
    </>
  );
}
