"use client";

import React from "react";
import { Sprout } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function UnderGraduate() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-linear-to-b from-green-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] sm:h-[65vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          width={500}
          height={500}
          src="/IMG_1.jpg"
          alt="Young students learning agriculture"
          className="absolute inset-0 w-full h-full object-cover brightness-75"
        />
        <div className="relative z-10 text-center text-white px-4 sm:px-6 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">
            Undergraduate Students
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-light mb-6 sm:mb-8">
            Planting the Seeds of Your Agribusiness Future
          </p>
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-white/20 backdrop-blur-md px-4 sm:px-6 py-2 sm:py-3 rounded-full">
            <Sprout className="w-6 h-6 sm:w-8 sm:h-8 text-green-300" />
            <span className="text-base sm:text-lg">
              Start Your Journey Today
            </span>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl sm:text-4xl font-bold text-green-800 mb-4 sm:mb-6">
            Pursue a Career in Agribusiness!
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
            The <strong>Student Agribusiness Extension Program (SAEP)</strong>{" "}
            equips undergraduate students with foundational knowledge, practical
            exposure, and essential skills to confidently pursue rewarding
            careers in agribusiness while still studying.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 my-8 sm:my-12">
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-green-100">
              <h3 className="text-xl sm:text-2xl font-semibold text-green-700 mb-4">
                Program Structure
              </h3>
              <ul className="space-y-3 text-sm sm:text-base text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">•</span>{" "}
                  <span>
                    <strong>Theory Phase</strong> – Core agribusiness &
                    agricultural science fundamentals
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">•</span>{" "}
                  <span>
                    <strong>Practical Phase</strong> – Hands-on farm experience
                    & internships
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">•</span>{" "}
                  <span>
                    <strong>Entrepreneurship Phase</strong> – Idea development &
                    business basics
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">•</span>{" "}
                  <span>
                    <strong>Online Phase</strong> – Flexible e-learning modules
                  </span>
                </li>
              </ul>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className="bg-green-50 p-5 sm:p-6 rounded-xl">
                <h4 className="font-semibold text-green-800 mb-2 text-base sm:text-lg">
                  Who can participate?
                </h4>
                <p className="text-sm sm:text-base text-gray-700">
                  Current undergraduate students passionate about agriculture &
                  business.
                </p>
              </div>
              <div className="bg-green-50 p-5 sm:p-6 rounded-xl">
                <h4 className="font-semibold text-green-800 mb-2 text-base sm:text-lg">
                  Duration
                </h4>
                <p className="text-sm sm:text-base text-gray-700">
                  Flexible – typically 12–24 months (integrated with studies)
                </p>
              </div>
              <div className="bg-green-50 p-5 sm:p-6 rounded-xl">
                <h4 className="font-semibold text-green-800 mb-2 text-base sm:text-lg">
                  Certification
                </h4>
                <p className="text-sm sm:text-base text-gray-700">
                  Yes – Certificate of Completion + digital badge
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <button
              onClick={() => router.push("/register")}
              className="bg-green-600 hover:bg-green-700 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full text-base sm:text-lg font-semibold shadow-lg transition w-full sm:w-auto">
              Apply Now & Plant Your Future
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
