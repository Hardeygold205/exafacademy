"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();

  const slides = [
    {
      image: "/hero-1.jpg",
      title: "Africa Extension Academy",
      subtitle: "Pursue a career in Agribusiness",
      description:
        "Building the largest network of reliable Extension Agents across Africa!",
      cta: "Register Now!",
      link: "/register",
    },
    {
      image: "/hero-2.png",
      title: "Agripreneurship Training",
      subtitle: "Unlock Your Agribusiness Potential",
      description: "Empowering Farmers, Transforming Lives",
      cta: "Learn More",
      link: "/about",
    },
    {
      image: "/hero-3.jpg",
      title: "Collaborative Solutions",
      subtitle: "Building Tomorrow Together",
      description:
        "Join a community of forward-thinkers creating meaningful impact.",
      cta: "Get Started",
      link: "/register",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6500);

    return () => clearInterval(timer);
  });

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full min-h-screen h-[70vh] lg:min-h-80 lg:h-[92vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}>
          <div className="absolute inset-0">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/90 opacity-40"></div>
          </div>

          <div className="relative h-full flex items-center justify-center px-4 ">
            <div className="text-center text-white max-w-4xl">
              <div
                className="mb-4 opacity-0 animate-fade-in-up"
                style={{
                  animationDelay: "0.2s",
                  animationFillMode: "forwards",
                }}>
                <span className="text-md md:text-lg font-semibold tracking-wider uppercase text-gray-300">
                  {slide.subtitle}
                </span>
              </div>
              <h1
                className="text-3xl md:text-5xl lg:text-7xl font-bold mb-6 opacity-0 animate-fade-in-up"
                style={{
                  animationDelay: "0.4s",
                  animationFillMode: "forwards",
                }}>
                {slide.title}
              </h1>
              <p
                className="text-md md:text-xl lg:text-2xl mb-8 animate-fade-in-up opacity-0"
                style={{
                  animationDelay: "0.6s",
                  animationFillMode: "forwards",
                }}>
                {slide.description}
              </p>
              <button
                onClick={() => router.push(slide.link)}
                className="bg-primary hover:opacity-80 hover:-translate-y-0.5 cursor-pointer ease-in-out duration-300 text-white font-semibold px-12 md:px-20 py-2 md:py-4 rounded-full transition hover:scale-105 animate-fade-in-up opacity-0"
                style={{
                  animationDelay: "0.8s",
                  animationFillMode: "forwards",
                }}>
                {slide.cta}
              </button>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all rounded-full ${
              index === currentSlide
                ? "bg-white md:w-12 w-8 h-2 md:h-3"
                : "bg-white bg-opacity-50 md:w-3 w-2 md:h-3 h-2 hover:bg-opacity-75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
      `}</style>
    </div>
  );
}
