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
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/FIRMEX_IMG1.jpg"
          alt="Agribusiness professionals with farmers"
          className="absolute inset-0 w-full h-full object-cover brightness-75"
        />
        <div className="relative z-10 text-center text-white px-6 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Agribusiness Professionals
          </h1>
          <p className="text-xl md:text-2xl font-light mb-8">
            Harvesting Success in the Field
          </p>
          <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-md px-6 py-3 rounded-full">
            <Briefcase className="w-8 h-8 text-green-300" />
            <span className="text-lg">Scale Your Operations</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-4xl font-bold text-green-800 mb-6">
            Bridge the Gap to Last-Mile Farmers!
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            The{" "}
            <strong>
              Agribusiness Extension Program for Professionals (AEPP)
            </strong>{" "}
            empowers experienced stakeholders to effectively reach, support, and
            deliver impactful solutions to last-mile farmers, scaling operations
            and driving sustainable growth.
          </p>

          <div className="grid md:grid-cols-2 gap-8 my-12">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-green-100">
              <h3 className="text-2xl font-semibold text-green-700 mb-4">
                Program Structure
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">•</span>{" "}
                  <strong>Understanding Last-Mile Farmers&apos; Needs</strong> –
                  Insights into challenges & opportunities
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">•</span>{" "}
                  <strong>Effective Business Delivery</strong> – Supply chain &
                  value addition strategies
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">•</span>{" "}
                  <strong>Addressing Behavioral Mindsets</strong> – Influencing
                  rural smallholder adoption
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <div className="bg-green-50 p-6 rounded-xl">
                <h4 className="font-semibold text-green-800">
                  Who can participate?
                </h4>
                <p className="text-gray-700">
                  Agribusiness owners, managers, extension agents, and sector
                  professionals.
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-xl">
                <h4 className="font-semibold text-green-800">Duration</h4>
                <p className="text-gray-700">
                  Modular – 6–12 months (part-time, flexible)
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-xl">
                <h4 className="font-semibold text-green-800">Certification</h4>
                <p className="text-gray-700">
                  Yes – Advanced Certification in Agribusiness Extension
                </p>
              </div>
            </div>
          </div>

          {/* Supporting Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
            <Image
              src="https://farmingfirst.org/wp-content/uploads/2023/08/HM85529.jpg"
              alt="Professionals training farmers"
              className="rounded-xl shadow-lg w-full h-80 object-cover"
            />
            <Image
              src="https://static.wixstatic.com/media/aff899_cbf722d466e94127bb9c3762db7e4dc4~mv2.jpg/v1/fill/w_914,h_554,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/PHOTO-2024-07-27-07-42-56.jpg"
              alt="Agribusiness workshop"
              className="rounded-xl shadow-lg w-full h-80 object-cover"
            />
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => router.push("/register")}
              className="bg-green-600 hover:bg-green-700 text-white px-10 py-5 rounded-full text-lg font-semibold shadow-lg transition">
              Apply Now & Harvest Success
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
