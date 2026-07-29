"use client";

import { useState, useEffect, useRef } from "react";
import {
  Users,
  CheckCircle2,
  Rocket,
  BookOpen,
  Globe,
  Play,
} from "lucide-react";
import { Highlight } from "@/components/ui/hero-highlight";
import Link from "next/link";

const stats = [
  { icon: Users, value: 4000, suffix: "+", label: "Active Students" },
  { icon: BookOpen, value: 16, suffix: "+", label: "Expert Courses" },
  { icon: Globe, value: 5, suffix: "", label: "Countries Reach" },
];

const benefits = [
  { icon: CheckCircle2, text: "Industry Recognized Certification" },
  { icon: Rocket, text: "Practical Field Experience" },
];

const CHAPTERS = 3;

export default function OverView() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [count, setCount] = useState({ students: 0, courses: 0, country: 0 });

  const chapter = Math.min(Math.floor(progress * CHAPTERS), CHAPTERS - 1);

  useEffect(() => {
    const handleScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      const scrolled = -rect.top;
      const p = total > 0 ? Math.min(Math.max(scrolled / total, 0), 1) : 0;
      setProgress(p);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (chapter < 2) return;
    const duration = 1500;
    const steps = 40;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const p = step / steps;
      setCount({
        students: Math.floor(4000 * Math.min(p, 1)),
        courses: Math.floor(16 * Math.min(p, 1)),
        country: Math.floor(5 * Math.min(p, 1)),
      });
      if (step >= steps) clearInterval(timer);
    }, duration / steps);
    return () => clearInterval(timer);
  }, [chapter]);

  const scrollToChapter = (i: number) => {
    const el = sectionRef.current;
    if (!el) return;
    const total = el.offsetHeight - window.innerHeight;
    const targetTop = el.offsetTop + (total * (i + 0.5)) / CHAPTERS;
    window.scrollTo({ top: targetTop, behavior: "smooth" });
  };

  return (
    <section ref={sectionRef} className="relative" style={{ height: "280vh" }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Background video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          poster="/afrexa-video-poster.webp"
          autoPlay
          muted
          loop
          playsInline>
          <source src="/afrexa-video22.webm" type="video/webm" />
          <source src="/afrexa-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/50 to-black/30" />

        <div className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-20">
          {Array.from({ length: CHAPTERS }).map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToChapter(i)}
              aria-label={`Go to chapter ${i + 1}`}
              className={`w-2.5 h-2.5 rounded-full border border-white/60 transition-all duration-300 ${
                chapter === i
                  ? "bg-white scale-125"
                  : "bg-transparent hover:bg-white/40"
              }`}
            />
          ))}
        </div>

        {/* Chapter content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl">
              <span className="text-white/50 text-xs tracking-[0.3em] font-semibold uppercase mb-4 block">
                {String(chapter + 1).padStart(2, "0")} /{" "}
                {String(CHAPTERS).padStart(2, "0")}
              </span>

              {chapter === 0 && (
                <div className="fade-in">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                    Developed for your <br />
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-green-300 to-emerald-400">
                      personal growth
                    </span>
                  </h2>
                  <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                    Since we started in 2021, we&apos;ve believed that good
                    business is about putting humans in positions that allow
                    them to be their best. We combine{" "}
                    <Highlight className="font-semibold text-white bg-white/10 px-1 rounded">
                      hands-on training
                    </Highlight>{" "}
                    with modern technology to reshape agriculture.
                  </p>
                </div>
              )}

              {chapter === 1 && (
                <div className="fade-in space-y-4">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Built on real fieldwork
                  </h3>
                  {benefits.map((b, i) => {
                    const Icon = b.icon;
                    return (
                      <div
                        key={i}
                        className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                        <div className="w-11 h-11 rounded-xl bg-linear-to-br from-green-400 to-emerald-600 flex items-center justify-center shrink-0">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-white/90 font-medium">
                          {b.text}
                        </span>
                      </div>
                    );
                  })}
                </div>
              )}

              {chapter === 2 && (
                <div className="fade-in">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    The reach so far
                  </h3>
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {stats.map((s, i) => {
                      const Icon = s.icon;
                      const val =
                        i === 0
                          ? count.students
                          : i === 1
                            ? count.courses
                            : count.country;
                      return (
                        <div
                          key={i}
                          className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10 text-center">
                          <Icon className="w-6 h-6 text-green-300 mx-auto mb-2" />
                          <div className="text-2xl font-bold text-white">
                            {val}
                            <span className="text-green-300">{s.suffix}</span>
                          </div>
                          <div className="text-xs text-white/60">{s.label}</div>
                        </div>
                      );
                    })}
                  </div>
                  <Link
                    target="_blank"
                    href="https://www.youtube.com/watch?v=U5uspvu_aTs"
                    className="inline-flex items-center gap-3 px-6 py-3 bg-white text-gray-900 rounded-full font-semibold hover:scale-105 transition-transform">
                    <Play className="w-4 h-4" fill="currentColor" />
                    Watch our full story
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .fade-in {
          animation: fadeIn 0.5s ease;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
