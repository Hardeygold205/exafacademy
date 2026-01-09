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
          src="https://www.ifpri.org/wp-content/uploads/2025/04/44317977882-scaled.jpg" // vibrant community/extension agents
          alt="African extension agents and community"
          className="absolute inset-0 w-full h-full object-cover brightness-75"
        />
        <div className="relative z-10 text-center text-white px-6 max-w-5xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Shaping The Future
          </h1>
          <p className="text-2xl font-light mb-8">Ecosystem Impact</p>
          <div className="inline-flex items-center gap-4 bg-white/20 backdrop-blur-md px-8 py-4 rounded-full text-xl">
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
            The <strong>Africa Extension Academy Ecosystem</strong> is building
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
              src="https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=768237499547354"
              alt="Agroforestry community"
              className="rounded-2xl shadow-lg w-full aspect-4/3 object-cover"
            />
            <Image
              src="https://growingafrica.pub/wp-content/uploads/2022/04/Chikowo-GA.png"
              alt="Extension training group"
              className="rounded-2xl shadow-lg w-full aspect-4/3 object-cover"
            />
            <Image
              src="https://media.istockphoto.com/id/543185364/photo/young-african-male-and-adult-african-woman-working-in-garden.jpg?s=612x612&w=0&k=20&c=guwG7IudOUwIDYypM3-ivbcg8jfGVHwhNQByhA22raY="
              alt="Vibrant farmland community"
              className="rounded-2xl shadow-lg w-full aspect-4/3 object-cover"
            />
          </div>

          <div className="text-center mt-16">
            <button
              onClick={() => router.push("/register")}
              className="bg-green-600 hover:bg-green-700 text-white px-12 py-6 rounded-full text-xl font-bold shadow-xl transition transform hover:scale-105">
              Join the Ecosystem Today
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
