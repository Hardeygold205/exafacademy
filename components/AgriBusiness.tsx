"use client";

import React from "react";
import { Briefcase } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function AgriBusiness() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-linear-to-b from-green-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] sm:h-[65vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          width={500}
          height={500}
          src="/FIRMEX_IMG1.jpg"
          alt="Agribusiness professionals with farmers"
          className="absolute inset-0 w-full h-full object-cover brightness-75"
        />
        <div className="relative z-10 text-center text-white px-4 sm:px-6 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">
            Agribusiness Professionals
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-light mb-6 sm:mb-8">
            Harvesting Success in the Field
          </p>
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-white/20 backdrop-blur-md px-4 sm:px-6 py-2 sm:py-3 rounded-full">
            <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 text-green-300" />
            <span className="text-base sm:text-lg">Scale Your Operations</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl sm:text-4xl font-bold text-green-800 mb-4 sm:mb-6">
            Bridge the Gap to Last-Mile Farmers!
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
            The{" "}
            <strong>
              Agribusiness Extension Program for Professionals (AEPP)
            </strong>{" "}
            empowers experienced stakeholders to effectively reach, support, and
            deliver impactful solutions to last-mile farmers, scaling operations
            and driving sustainable growth.
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
                    <strong>Understanding Last-Mile Farmers&apos; Needs</strong>{" "}
                    – Insights into challenges & opportunities
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">•</span>{" "}
                  <span>
                    <strong>Effective Business Delivery</strong> – Supply chain
                    & value addition strategies
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">•</span>{" "}
                  <span>
                    <strong>Addressing Behavioral Mindsets</strong> –
                    Influencing rural smallholder adoption
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
                  Agribusiness owners, managers, extension agents, and sector
                  professionals.
                </p>
              </div>
              <div className="bg-green-50 p-5 sm:p-6 rounded-xl">
                <h4 className="font-semibold text-green-800 mb-2 text-base sm:text-lg">
                  Duration
                </h4>
                <p className="text-sm sm:text-base text-gray-700">
                  Modular – 6–12 months (part-time, flexible)
                </p>
              </div>
              <div className="bg-green-50 p-5 sm:p-6 rounded-xl">
                <h4 className="font-semibold text-green-800 mb-2 text-base sm:text-lg">
                  Certification
                </h4>
                <p className="text-sm sm:text-base text-gray-700">
                  Yes – Advanced Certification in Agribusiness Extension
                </p>
              </div>
            </div>
          </div>

          {/* Supporting Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 my-8 sm:my-12">
            <Image
              width={800}
              height={600}
              src="/agr-business.jpg"
              alt="Professionals training farmers"
              className="rounded-xl shadow-lg w-full h-60 sm:h-80 object-cover"
            />
            <Image
              width={800}
              height={600}
              src="/agr-business2.jpg"
              alt="Agribusiness workshop"
              className="rounded-xl shadow-lg w-full h-60 sm:h-80 object-cover"
            />
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <button
              onClick={() => router.push("/register")}
              className="bg-green-600 hover:bg-green-700 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full text-base sm:text-lg font-semibold shadow-lg transition w-full sm:w-auto">
              Apply Now & Harvest Success
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
