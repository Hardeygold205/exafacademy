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
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/IMG_9533.jpg" // Hero image fallback, or use: https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3734494473070165155
          alt="Recent graduates in agribusiness bootcamp"
          className="absolute inset-0 w-full h-full object-cover brightness-75"
        />
        <div className="relative z-10 text-center text-white px-6 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Recent Graduates
          </h1>
          <p className="text-xl md:text-2xl font-light mb-8">
            Cultivating Growth in Your Agribusiness Career
          </p>
          <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-md px-6 py-3 rounded-full">
            <GraduationCap className="w-8 h-8 text-green-300" />
            <span className="text-lg">Bridge Academia to Industry</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-4xl font-bold text-green-800 mb-6">
            Unlock Your Agribusiness Potential!
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            Do you have a great agribusiness idea but finding it difficult to
            actualize? The{" "}
            <strong>Graduate Agribusiness Extension Program</strong> helps
            recent graduates launch ideas, refine expertise, bridge knowledge
            gaps, and emerge as confident agribusiness leaders through intensive
            bootcamps.
          </p>

          <div className="grid md:grid-cols-2 gap-8 my-12">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-green-100">
              <h3 className="text-2xl font-semibold text-green-700 mb-4">
                Program Structure
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">•</span>{" "}
                  <strong>Agripreneurship/Agribusiness Skills</strong> –
                  Business planning, market access & innovation
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">•</span>{" "}
                  <strong>Digital Skills</strong> – Tech tools for modern
                  farming & agribusiness
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">•</span>{" "}
                  <strong>Extension & Advisory Skills</strong> – Effective
                  farmer engagement
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">•</span>{" "}
                  <strong>Soft Skills</strong> – Leadership, communication &
                  networking
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <div className="bg-green-50 p-6 rounded-xl">
                <h4 className="font-semibold text-green-800">
                  Who can participate?
                </h4>
                <p className="text-gray-700">
                  Recent graduates (within 5 years) with degrees in agriculture,
                  business, or related fields.
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-xl">
                <h4 className="font-semibold text-green-800">Duration</h4>
                <p className="text-gray-700">
                  Intensive 3–6 months (full-time bootcamp format)
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-xl">
                <h4 className="font-semibold text-green-800">Certification</h4>
                <p className="text-gray-700">
                  Yes – Professional Certificate + job placement support
                </p>
              </div>
            </div>
          </div>

          {/* Supporting Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
            <Image
              src="https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=2772525213055343"
              alt="Agribusiness training group"
              className="rounded-xl shadow-lg w-full h-80 object-cover"
            />
            <Image
              src="https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3789485815311933456"
              alt="Young professionals in livestock training"
              className="rounded-xl shadow-lg w-full h-80 object-cover"
            />
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
