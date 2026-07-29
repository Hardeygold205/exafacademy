"use client";

import React, { useState, useEffect, useRef } from "react";
import { Quote } from "lucide-react";

const stories = [
  {
    name: "Hafsa Yusha'u Yusuf",
    role: "AFREXA Intern",
    entry: "01",
    quote:
      "Agriculture was not just about crops but about people — that realization changed me.",
    body: "When I joined the AFREXA internship at Extension Africa, I didn't know what to expect. From day one, I was immersed in conversations about climate-smart agriculture, watching technology used practically, not just in theory, to reach farmers in remote communities. The most powerful part of my experience was the people, and how willing everyone was to collaborate. In the process, I found my calling: to serve, to educate, and to influence agricultural policies that reach the people who need them most.",
  },
  {
    name: "Abdul Rahman Ibrahim",
    role: "AFREXA Intern",
    entry: "02",
    quote:
      "For the first time, I saw myself not just as a student, but as someone ready to serve the community.",
    body: "Before AFREXA, tools like KoboToolbox and the Microsoft suite were just names to me. During my internship at Extension Africa they became part of my toolkit — I learned to design surveys, collect and analyze data, and saw how platforms like FARMEX are transforming agribusiness from the ground up. I gained real knowledge in financial literacy, business models, and how to write a proper business plan.",
  },
  {
    name: "Khalid Mustapha",
    role: "AFREXA Intern",
    entry: "03",
    quote:
      "I've always believed in asking 'why?' — at AFREXA, I learned how to find the answers through research.",
    body: "We explored how data collection can guide farming decisions, how evidence can shape policy, and how listening to farmers is where all good research begins.",
  },
  {
    name: "Tahir Tijani",
    role: "AFREXA Intern",
    entry: "04",
    quote:
      "Data tells stories about land — and that story can save water, improve yield, and prevent crop loss.",
    body: "My journey began with a question: how can we grow more with less? The answer came through smart farming. At AFREXA I explored how sensors, drones, and IoT devices are reshaping agriculture.",
  },
];

export default function Stories() {
  const [activeStory, setActiveStory] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isClickScrolling = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      // Don't update during click-scroll animation
      if (isClickScrolling.current || !sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const totalHeight = rect.height - window.innerHeight;

      // Calculate how far down the section we've scrolled (0.0 to 1.0)
      if (rect.top <= 0 && totalHeight > 0) {
        const scrolledPercentage = Math.abs(rect.top) / totalHeight;

        // Calculate story index based on scroll depth
        const newIndex = Math.min(
          stories.length - 1,
          Math.floor(scrolledPercentage * stories.length),
        );

        setActiveStory(newIndex);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleTabClick = (index: number) => {
    if (!sectionRef.current) return;
    setActiveStory(index);
    isClickScrolling.current = true;

    const rect = sectionRef.current.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Calculate position for target tab index
    const totalHeight = rect.height - window.innerHeight;
    const segmentHeight = totalHeight / stories.length;
    const targetY = scrollTop + rect.top + segmentHeight * index;

    window.scrollTo({
      top: targetY,
      behavior: "smooth",
    });

    // Re-enable scroll listener after smooth scroll finishes
    setTimeout(() => {
      isClickScrolling.current = false;
    }, 600);
  };

  return (
    /* The outer container height establishes scroll length (e.g., 300vh for 4 steps) */
    <div
      ref={sectionRef}
      className="relative w-full bg-linear-to-tb from-green-50 via-white to-green-10 h-[320vh]">
      {/* Sticky container stays pinned to the screen while user scrolls through height */}
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden py-4 md:py-8">
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div id="testimonials" className="relative">
            <div className="text-center mb-6 md:mb-10">
              <h1
                style={{
                  animationDelay: "0.6s",
                  animationFillMode: "forwards",
                }}
                className="text-2xl md:text-4xl lg:text-5xl text-primary my-3 sm:my-4 lg:my-5 px-2 animate-fade-in-up">
                AFREXA Stories
              </h1>
              <p className="text-base md:text-lg lg:text-xl font-light px-2 text-black">
                Real entries from the interns living the work
              </p>
            </div>

            <div className="rounded-sm bg-primary p-3 md:p-4 shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-3">
                {/* Entry tabs */}
                <div className="flex md:flex-col overflow-x-auto md:overflow-visible gap-2 pb-1 md:pb-0">
                  {stories.map((s, i) => (
                    <button
                      key={s.name}
                      onClick={() => handleTabClick(i)}
                      className={`shrink-0 text-left px-4 py-3 rounded-xs border transition-all duration-300 ${
                        activeStory === i
                          ? "bg-white border-black text-[#132A1D]"
                          : "bg-transparent border-white/10 text-white/60 hover:text-white/90 hover:border-white/30"
                      }`}>
                      <div className="text-[10px] tracking-widest font-semibold opacity-70">
                        {s.entry}
                      </div>
                      <div className="font-semibold text-sm mt-0.5 whitespace-nowrap md:whitespace-normal">
                        {s.name}
                      </div>
                    </button>
                  ))}
                </div>

                {/* Active entry card */}
                <div className="relative bg-white rounded-xs p-8 md:p-12 overflow-hidden min-h-90">
                  <Quote
                    className="absolute -top-4 -left-2 w-28 h-28 text-[#132A1D]/5"
                    strokeWidth={1}
                  />
                  <div key={activeStory} className="relative fade-in">
                    <p className="italic text-xl md:text-2xl leading-snug text-[#132A1D] mb-6">
                      &ldquo;{stories[activeStory].quote}&rdquo;
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {stories[activeStory].body}
                    </p>
                    <div className="flex items-center gap-3 pt-4 border-t border-[#132A1D]/10">
                      <div className="w-10 h-10 rounded-full bg-[#132A1D] flex items-center justify-center text-white font-bold text-sm">
                        {stories[activeStory].name
                          .split(" ")
                          .map((w) => w[0])
                          .slice(0, 2)
                          .join("")}
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 text-sm">
                          {stories[activeStory].name}
                        </div>
                        <div className="text-xs text-gray-500">
                          {stories[activeStory].role}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .fade-in {
          animation: fadeIn 0.35s ease;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
