"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Users,
  BookOpen,
  Globe,
} from "lucide-react";
import CountUp from "react-countup";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const router = useRouter();

  const slides = [
    {
      image: "/hero-1.jpg",
      title: "Africa Extension Academy",
      subtitle: "PURSUE A CAREER IN AGRIBUSINESS",
      description:
        "Building the largest network of reliable Extension Agents across Africa. Join the revolution in modern farming.",
      cta: "Register Now",
      link: "/register",
      color: "bg-primary",
    },
    {
      image: "/hero-2.png",
      title: "Agripreneurship Training",
      subtitle: "UNLOCK YOUR POTENTIAL",
      description:
        "Empowering Farmers, Transforming Lives. Master the business side of agriculture with expert-led modules.",
      cta: "Explore Courses",
      link: "/courses",
      color: "bg-yellow-600",
    },
    {
      image: "/hero-3.jpg",
      title: "Collaborative Solutions",
      subtitle: "BUILDING TOMORROW TOGETHER",
      description:
        "Join a community of forward-thinkers creating meaningful impact in the food security sector.",
      cta: "Join Community",
      link: "/register",
      color: "bg-green-600",
    },
  ];

  const stats = [
    { icon: Users, label: "Active Students", value: "6000+" },
    { icon: BookOpen, label: "Expert Courses", value: "50+" },
    { icon: Globe, label: "Countries Reach", value: "2" },
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setIsAutoPlaying(false);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, nextSlide]);

  return (
    <div className="relative w-full min-h-screen h-[70vh] lg:min-h-80 lg:h-[92vh] overflow-hidden bg-gray-900 text-white">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}>
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              className={`object-cover transition-transform duration-10000 ease-linear ${
                index === currentSlide ? "scale-110" : "scale-100"
              }`}
            />
          </div>

          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/50 to-black/20" />

          <div className="relative h-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 text-center pt-5 sm:pt-0 pb-20">
            <div className="max-w-5xl mx-auto space-y-6">
              <div
                className={`inline-block overflow-hidden ${
                  index === currentSlide ? "animate-fade-in-down" : "opacity-0"
                }`}>
                <span
                  className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-xs md:text-sm font-bold tracking-wider uppercase text-white`}>
                  <span
                    className={`w-2 h-2 rounded-full ${slide.color}`}></span>
                  {slide.subtitle}
                </span>
              </div>

              <h1
                className={`text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight
                ${
                  index === currentSlide
                    ? "animate-fade-in-up delay-200"
                    : "opacity-0"
                }`}>
                {slide.title}
              </h1>

              <p
                className={`text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed
                ${
                  index === currentSlide
                    ? "animate-fade-in-up delay-300"
                    : "opacity-0"
                }`}>
                {slide.description}
              </p>

              <div
                className={`flex flex-col sm:flex-row gap-4 justify-center pt-4
                ${
                  index === currentSlide
                    ? "animate-fade-in-up delay-500"
                    : "opacity-0"
                }`}>
                <button
                  onClick={() => router.push(slide.link)}
                  className={`${slide.color} group relative px-8 py-4 rounded-full font-bold text-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden`}>
                  <span className="relative z-10">{slide.cta}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </button>

                <button
                  onClick={() => router.push("/about")}
                  className="px-8 py-4 rounded-full font-bold text-white border border-white/30 hover:bg-white/10 backdrop-blur-sm transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 text-white transition-all hidden md:block group">
        <ChevronLeft className="w-8 h-8 group-hover:-translate-x-0.5 transition-transform" />
      </button>
      <button
        onClick={() => {
          nextSlide();
          setIsAutoPlaying(false);
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 text-white transition-all hidden md:block group">
        <ChevronRight className="w-8 h-8 group-hover:translate-x-0.5 transition-transform" />
      </button>

      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="flex justify-center gap-3 mb-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentSlide(index);
                setIsAutoPlaying(false);
              }}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                index === currentSlide
                  ? "w-12 bg-white"
                  : "w-3 bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="hidden md:grid grid-cols-3 border-t border-white/10 bg-transparent backdrop-blur-md">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`py-6 flex flex-col items-center justify-center border-white/10 ${
                idx !== stats.length - 1 ? "border-r" : ""
              }`}>
              <div className="flex items-center gap-3 text-white/80">
                <stat.icon className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
              <span className="text-2xl font-bold text-white mt-1">
                <CountUp
                  end={parseInt(stat.value)}
                  duration={2.5}
                  delay={2}
                  suffix={stat.value.includes("+") ? "+" : ""}
                />
              </span>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-fade-in-down {
          animation: fade-in-down 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
        .delay-500 {
          animation-delay: 0.5s;
        }
      `}</style>
    </div>
  );
}
