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
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          width={500}
          height={500}
          src="/IMG_1.jpg" // or use image:5 - https://trees.org.za/wp-content/uploads/2019/10/World-Food-Day-final.jpg
          alt="Young students learning agriculture"
          className="absolute inset-0 w-full h-full object-cover brightness-75"
        />
        <div className="relative z-10 text-center text-white px-6 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Undergraduate Students
          </h1>
          <p className="text-xl md:text-2xl font-light mb-8">
            Planting the Seeds of Your Agribusiness Future
          </p>
          <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-md px-6 py-3 rounded-full">
            <Sprout className="w-8 h-8 text-green-300" />
            <span className="text-lg">Start Your Journey Today</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-4xl font-bold text-green-800 mb-6">
            Pursue a Career in Agribusiness!
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            The <strong>Student Agribusiness Extension Program (SAEP)</strong>{" "}
            equips undergraduate students with foundational knowledge, practical
            exposure, and essential skills to confidently pursue rewarding
            careers in agribusiness while still studying.
          </p>

          <div className="grid md:grid-cols-2 gap-8 my-12">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-green-100">
              <h3 className="text-2xl font-semibold text-green-700 mb-4">
                Program Structure
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">•</span>{" "}
                  <strong>Theory Phase</strong> – Core agribusiness &
                  agricultural science fundamentals
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">•</span>{" "}
                  <strong>Practical Phase</strong> – Hands-on farm experience &
                  internships
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">•</span>{" "}
                  <strong>Entrepreneurship Phase</strong> – Idea development &
                  business basics
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">•</span>{" "}
                  <strong>Online Phase</strong> – Flexible e-learning modules
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <div className="bg-green-50 p-6 rounded-xl">
                <h4 className="font-semibold text-green-800">
                  Who can participate?
                </h4>
                <p className="text-gray-700">
                  Current undergraduate students passionate about agriculture &
                  business.
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-xl">
                <h4 className="font-semibold text-green-800">Duration</h4>
                <p className="text-gray-700">
                  Flexible – typically 12–24 months (integrated with studies)
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-xl">
                <h4 className="font-semibold text-green-800">Certification</h4>
                <p className="text-gray-700">
                  Yes – Certificate of Completion + digital badge
                </p>
              </div>
            </div>
          </div>

          {/* Supporting Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
            <Image
              src="https://blog.plantwise.org/wp-content/uploads/sites/7/2022/08/Youth-dicussing-in-a-group-diagnosis-of-plant-health-problems-of-beans-1-scaled.jpg"
              alt="Students in group discussion"
              className="rounded-xl shadow-lg w-full h-80 object-cover"
            />
            <Image
              src="https://www.umnews.org/-/media/umc-media/2025/06/23/21/47/zimbabwe-hanwa-farmer-1-tafadz-chingosho-1200x800px-2.jpg?h=319&iar=0&mw=478&w=478&hash=2284D9E625AA28C84EFD23C4B0A8D960"
              alt="Young farmer training"
              className="rounded-xl shadow-lg w-full h-80 object-cover"
            />
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => router.push("/register")}
              className="bg-green-600 hover:bg-green-700 text-white px-10 py-5 rounded-full text-lg font-semibold shadow-lg transition">
              Apply Now & Plant Your Future
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
