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
      <section className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          width={1920}
          height={1080}
          src="/IMG_9533.jpg"
          alt="Recent graduates in agribusiness bootcamp"
          className="absolute inset-0 w-full h-full object-cover brightness-75"
        />
        <div className="relative z-10 text-center text-white px-4 sm:px-6 max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">
            Recent Graduates
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light mb-6 sm:mb-8">
            Cultivating Growth in Your Agribusiness Career
          </p>
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-white/20 backdrop-blur-md px-4 sm:px-6 py-2 sm:py-3 rounded-full">
            <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 text-green-300" />
            <span className="text-sm sm:text-base md:text-lg">
              Bridge Academia to Industry
            </span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-800 mb-4 sm:mb-6">
            Unlock Your Agribusiness Potential!
          </h2>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6 sm:mb-8">
            Do you have a great agribusiness idea but finding it difficult to
            actualize? The{" "}
            <strong>Graduate Agribusiness Extension Program</strong> helps
            recent graduates launch ideas, refine expertise, bridge knowledge
            gaps, and emerge as confident agribusiness leaders through intensive
            bootcamps.
          </p>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 my-8 md:my-12">
            <div className="bg-white p-5 sm:p-6 md:p-8 rounded-xl shadow-lg border border-green-100">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-green-700 mb-3 sm:mb-4">
                Program Structure
              </h3>
              <ul className="space-y-2.5 sm:space-y-3 text-gray-700 text-sm sm:text-base">
                <li className="flex items-start gap-2 md:gap-3">
                  <span className="text-green-600 font-bold shrink-0 mt-0.5">
                    •
                  </span>
                  <div>
                    <strong>Agripreneurship/Agribusiness Skills</strong> –
                    Business planning, market access & innovation
                  </div>
                </li>
                <li className="flex items-start gap-2 md:gap-3">
                  <span className="text-green-600 font-bold shrink-0 mt-0.5">
                    •
                  </span>
                  <div>
                    <strong>Digital Skills</strong> – Tech tools for modern
                    farming & agribusiness
                  </div>
                </li>
                <li className="flex items-start gap-2 md:gap-3">
                  <span className="text-green-600 font-bold shrink-0 mt-0.5">
                    •
                  </span>
                  <div>
                    <strong>Extension & Advisory Skills</strong> – Effective
                    farmer engagement
                  </div>
                </li>
                <li className="flex items-start gap-2 md:gap-3">
                  <span className="text-green-600 font-bold shrink-0 mt-0.5">
                    •
                  </span>
                  <div>
                    <strong>Soft Skills</strong> – Leadership, communication &
                    networking
                  </div>
                </li>
              </ul>
            </div>

            <div className="space-y-4 md:space-y-6">
              <div className="bg-green-50 p-4 sm:p-5 md:p-6 rounded-xl">
                <h4 className="font-semibold text-green-800 text-sm sm:text-base md:text-lg mb-1.5 sm:mb-2">
                  Who can participate?
                </h4>
                <p className="text-gray-700 text-xs sm:text-sm md:text-base">
                  Recent graduates (within 5 years) with degrees in agriculture,
                  business, or related fields.
                </p>
              </div>
              <div className="bg-green-50 p-4 sm:p-5 md:p-6 rounded-xl">
                <h4 className="font-semibold text-green-800 text-sm sm:text-base md:text-lg mb-1.5 sm:mb-2">
                  Duration
                </h4>
                <p className="text-gray-700 text-xs sm:text-sm md:text-base">
                  Intensive 3–6 months (full-time bootcamp format)
                </p>
              </div>
              <div className="bg-green-50 p-4 sm:p-5 md:p-6 rounded-xl">
                <h4 className="font-semibold text-green-800 text-sm sm:text-base md:text-lg mb-1.5 sm:mb-2">
                  Certification
                </h4>
                <p className="text-gray-700 text-xs sm:text-sm md:text-base">
                  Yes – Professional Certificate + job placement support
                </p>
              </div>
            </div>
          </div>

          {/* Supporting Images */}
          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 my-8 sm:my-12">
            <Image
              width={800}
              height={600}
              src="https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=2772525213055343"
              alt="Agribusiness training group"
              className="rounded-xl shadow-lg w-full h-60 sm:h-72 md:h-80 object-cover"
            />
            <Image
              width={800}
              height={600}
              src="https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3789485815311933456"
              alt="Young professionals in livestock training"
              className="rounded-xl shadow-lg w-full h-60 sm:h-72 md:h-80 object-cover"
            />
          </div> */}

          <div className="text-center mt-8 sm:mt-12">
            <button
              onClick={() => router.push("/register")}
              className="bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full text-sm sm:text-base md:text-lg font-semibold shadow-lg transition-colors duration-200 w-full sm:w-auto">
              Apply Now & Cultivate Your Growth
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
