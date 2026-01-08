"use client";

import React from "react";
import { Users } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Ecosystem() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-linear-to-b from-green-50 to-white">
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          width={1920}
          height={1080}
          src="/eco1.jpg"
          alt="African extension agents and community"
          className="absolute inset-0 w-full h-full object-cover brightness-75"
        />
        <div className="relative z-10 text-center text-white px-6 max-w-5xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">
            Shaping The Future
          </h1>
          <p className="text-2xl font-light mb-8">Ecosystem Impact</p>
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-white/20 backdrop-blur-md px-4 sm:px-6 py-2 sm:py-3 rounded-full">
            <Users className="w-10 h-10 text-green-300" />
            <span>Join Africas Largest Extension Agents Network</span>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="prose prose-lg max-w-none text-center">
          <h2 className="text-4xl font-bold text-green-800 mb-8">
            Become Part of Something Bigger
          </h2>
          <p className="text-xl text-gray-700 mb-12 leading-relaxed">
            The <strong>Extension Africa Academy Ecosystem</strong> is building
            the continents most reliable, connected, and impactful network of
            Extension Agents, agribusiness professionals, farmers, and
            change-makers.
          </p>

          <div className="grid md:grid-cols-3 gap-8 my-16">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-green-100 hover:shadow-2xl transition">
              <h3 className="text-2xl font-bold text-green-700 mb-4">
                Community Building
              </h3>
              <p className="text-gray-600">
                Connect with thousands of like-minded professionals across
                Africa.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-green-100 hover:shadow-2xl transition">
              <h3 className="text-2xl font-bold text-green-700 mb-4">
                Knowledge Sharing
              </h3>
              <p className="text-gray-600">
                Access best practices, case studies, webinars & peer learning.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-green-100 hover:shadow-2xl transition">
              <h3 className="text-2xl font-bold text-green-700 mb-4">
                Real Impact
              </h3>
              <p className="text-gray-600">
                Contribute to food security, sustainability & rural prosperity.
              </p>
            </div>
          </div>

          {/* Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-16">
            <Image
              width={800}
              height={600}
              src="/eco2.jpg"
              alt="Agroforestry community"
              className="rounded-2xl shadow-lg w-full aspect-4/3 object-cover"
            />
            <Image
              width={800}
              height={600}
              src="/eco3.JPG"
              alt="Extension training group"
              className="rounded-2xl shadow-lg w-full aspect-4/3 object-cover"
            />
            <Image
              width={800}
              height={600}
              src="/eco4.jpg"
              alt="Vibrant farmland community"
              className="rounded-2xl shadow-lg w-full aspect-4/3 object-cover"
            />
          </div>

          <div className="text-center mt-16">
            <button
              onClick={() => router.push("/register")}
              className="bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full text-sm sm:text-base md:text-lg font-semibold shadow-lg transition-colors duration-200 w-full sm:w-auto">
              Join the Ecosystem Today
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
