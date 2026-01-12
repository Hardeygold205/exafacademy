"use client";

import React from "react";
import { GraduationCap } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function RecentGraduate() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-linear-to-b from-green-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] sm:h-[65vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          width={500}
          height={500}
          src="/IMG_9533.jpg"
          alt="Recent graduates in agribusiness bootcamp"
          className="absolute inset-0 w-full h-full object-cover brightness-75"
        />
        <div className="relative z-10 text-center text-white px-4 sm:px-6 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">
            Recent Graduates
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-light mb-6 sm:mb-8">
            Cultivating Growth in Your Agribusiness Career
          </p>
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-white/20 backdrop-blur-md px-4 sm:px-6 py-2 sm:py-3 rounded-full">
            <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 text-green-300" />
            <span className="text-base sm:text-lg">
              Bridge Academia to Industry
            </span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="max-w-none">
          <h2 className="text-3xl sm:text-4xl font-bold text-green-800 mb-4 sm:mb-6">
            Unlock Your Agribusiness Potential!
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
            Do you have a great agribusiness idea but finding it difficult to
            actualize? The{" "}
            <strong>Graduate Agribusiness Extension Program</strong> helps
            recent graduates launch ideas, refine expertise, bridge knowledge
            gaps, and emerge as confident agribusiness leaders through intensive
            bootcamps.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 my-8 sm:my-12">
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-green-100">
              <h3 className="text-xl sm:text-2xl font-semibold text-green-700 mb-4">
                Program Structure
              </h3>
              <ul className="space-y-3 text-sm sm:text-base text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">•</span>
                  <span>
                    <strong>Agripreneurship/Agribusiness Skills</strong> –
                    Business planning, market access & innovation
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">•</span>
                  <span>
                    <strong>Digital Skills</strong> – Tech tools for modern
                    farming & agribusiness
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">•</span>
                  <span>
                    <strong>Extension & Advisory Skills</strong> – Effective
                    farmer engagement
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">•</span>
                  <span>
                    <strong>Soft Skills</strong> – Leadership, communication &
                    networking
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
                  Recent graduates (within 5 years) with degrees in agriculture,
                  business, or related fields.
                </p>
              </div>
              <div className="bg-green-50 p-5 sm:p-6 rounded-xl">
                <h4 className="font-semibold text-green-800 mb-2 text-base sm:text-lg">
                  Duration
                </h4>
                <p className="text-sm sm:text-base text-gray-700">
                  Intensive 3–6 months (full-time bootcamp format)
                </p>
              </div>
              <div className="bg-green-50 p-5 sm:p-6 rounded-xl">
                <h4 className="font-semibold text-green-800 mb-2 text-base sm:text-lg">
                  Certification
                </h4>
                <p className="text-sm sm:text-base text-gray-700">
                  Yes – Professional Certificate + job placement support
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => router.push("/register")}
              className="bg-green-600 hover:bg-green-700 text-white px-10 py-5 rounded-full text-lg font-semibold shadow-lg transition">
              Apply Now & Cultivate Your Growth
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
