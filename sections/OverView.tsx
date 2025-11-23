"use client";

import React, { useState, useEffect, useRef } from "react";
import { Users, CheckCircle2, Rocket, BookOpen, Globe } from "lucide-react";
import Image from "next/image";
import { Highlight } from "@/components/ui/hero-highlight";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { HeroHighlight } from "@/components/ui/hero-highlight";

export default function OverView() {
  const [isVisible, setIsVisible] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null);
  const statsRef = useRef<HTMLDivElement | null>(null);
  const [count, setCount] = useState({ students: 0, courses: 0, country: 0 });

  const stats = [
    { icon: Users, value: 4000, suffix: "+", label: "Active Students" },
    { icon: BookOpen, value: 16, suffix: "+", label: "Expert Courses" },
    { icon: Globe, value: 5, label: "Countries Reach" },
  ];

  const benefits = [
    {
      icon: CheckCircle2,
      text: "Industry Recognized Certification",
      color: "from-green-400 to-emerald-600",
    },
    {
      icon: Rocket,
      text: "Practical Field Experience",
      color: "from-purple-400 to-pink-600",
    },
  ];

  useEffect(() => {
    const currentRef = statsRef.current;
    if (!currentRef || isVisible) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(currentRef);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(currentRef);
    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2500;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setCount({
        students: Math.floor(4000 * progress),
        courses: Math.floor(16 * progress),
        country: Math.floor(5 * progress),
      });

      if (step >= steps) {
        clearInterval(timer);
        setCount({ students: 4000, courses: 16, country: 5 });
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isVisible]);

  return (
    <section className="relative py-8 md:py-12 bg-linear-to-br from-gray-50 via-white overflow-hidden">
      <div className="absolute top-20 right-0 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-20 -z-10" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20 -z-10" />

      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0 opacity-45"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-green-100 to-emerald-100 border border-green-200">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-600" />
              </span>
              <span className="text-sm font-semibold text-green-700">
                Who We Are
              </span>
            </div>

            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Developed for your <br />
                <span className="relative inline-block">
                  <span className="relative z-10 bg-linear-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    personal growth
                  </span>
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-3"
                    viewBox="0 0 200 8"
                    fill="none">
                    <path
                      d="M1 5.5C50 2 100 2 199 5.5"
                      stroke="#16a34a"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h2>

              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Since we started in 2021, we&apos;ve believed that good business
                is about putting humans in positions that allow them to be their
                best. We combine
                <Highlight className="font-semibold text-gray-900 bg-yellow-100 px-1 rounded">
                  hands-on training
                </Highlight>
                with modern technology to reshape agriculture.
              </p>
            </div>

            <div className="space-y-4 pt-4">
              {benefits.map((benefit, i) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={i}
                    onMouseEnter={() => setHoveredBenefit(i)}
                    onMouseLeave={() => setHoveredBenefit(null)}
                    className="flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 cursor-pointer"
                    style={{
                      backgroundColor:
                        hoveredBenefit === i ? "#f0fdf4" : "transparent",
                      transform:
                        hoveredBenefit === i
                          ? "translateX(8px)"
                          : "translateX(0)",
                    }}>
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        hoveredBenefit === i
                          ? `bg-linear-to-br ${benefit.color}`
                          : "bg-gray-100"
                      }`}>
                      <Icon
                        className={`w-6 h-6 ${
                          hoveredBenefit === i ? "text-white" : "text-gray-600"
                        }`}
                      />
                    </div>
                    <span className="text-base md:text-lg font-medium text-gray-700">
                      {benefit.text}
                    </span>
                  </div>
                );
              })}
            </div>

            <div
              ref={statsRef}
              className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-200 md:hidden">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                const displayValue =
                  typeof stat.value === "number"
                    ? index === 0
                      ? count.students
                      : index === 1
                      ? count.courses
                      : count.country
                    : stat.value;
                return (
                  <div key={index} className="text-center space-y-2">
                    <div className="flex justify-center">
                      <div className="w-12 h-12 rounded-xl bg-linear-to-br from-green-100 to-emerald-100 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-green-600" />
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-gray-900">
                      {displayValue}
                      {typeof stat.value === "number" && (
                        <span className="text-green-600">{stat.suffix}</span>
                      )}
                    </div>
                    <div className="text-xs text-gray-600">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            {!isVideoPlaying ? (
              <HeroHighlight
                containerClassName="relative aspect-video cursor-pointer w-full rounded-2xl bg-transparent h-auto"
                className="w-full">
                <CardContainer
                  className="relative aspect-video cursor-pointer w-full"
                  onClick={() => setIsVideoPlaying(true)}>
                  <CardBody className="w-full h-full">
                    <CardItem
                      translateZ={80}
                      className="relative w-full h-full overflow-hidden rounded-2xl">
                      <Image
                        fill
                        src="/afrexa-vd-overlay.png"
                        alt="Watch Our Story"
                        className="object-cover"
                      />

                      <div className="absolute inset-0 flex items-center justify-center">
                        <button className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center transform hover:scale-110 transition-transform">
                          <svg
                            className="w-8 h-8 text-gray-900 ml-1"
                            fill="currentColor"
                            viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                      </div>

                      <div className="absolute bottom-6 left-6 text-white">
                        <h3 className="text-2xl font-bold mb-1">
                          Watch Our Story
                        </h3>
                        <p className="text-sm opacity-90">
                          Learn how we&apos;re transforming agriculture
                        </p>
                      </div>
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </HeroHighlight>
            ) : (
              <iframe
                className="w-full aspect-video"
                src="https://www.youtube.com/embed/U5uspvu_aTs?autoplay=1"
                title="About the Agribusiness Extension Academy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                frameBorder="0"
              />
            )}

            <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-2xl z-50 p-2 border border-gray-100 max-w-[220px] hidden md:block transform hover:scale-105 transition-transform">
              <div className="flex items-center gap-3 mb-1 justify-center">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-linear-to-tl from-primary to-green-200 border-2 border-white bg-cover"
                    />
                  ))}
                </div>
                <div>
                  <div className="font-bold text-gray-900">5.0 ⭐</div>
                  <div className="text-xs text-gray-600">Rating</div>
                </div>
              </div>
              <p className="text-xs text-gray-600 leading-snug text-center">
                The best agricultural training platform in Africa.
              </p>
            </div>

            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-green-200 rounded-full blur-3xl opacity-30 -z-10" />
            <div className="absolute -top-8 -left-8 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-30 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
