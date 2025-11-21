"use client";

import React, { useState } from "react";
import {
  Users,
  MessageCircle,
  TrendingUp,
  Award,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: Users,
    title: "6000+ Members",
    description: "Connect with professionals across Africa",
  },
  {
    icon: MessageCircle,
    title: "Live Discussions",
    description: "Get instant answers to your questions",
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    description: "Access exclusive opportunities",
  },
  {
    icon: Award,
    title: "Expert Mentorship",
    description: "Learn from industry leaders",
  },
];

export default function JoinCommunity() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  return (
    <div className="w-full bg-linear-to-tb from-green-50 via-white to-green-10 py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="bg-green-100 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                  🌍 Africa&apos;s Largest Network
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-linear-to-r from-primary via-green-600 to-green-500 bg-clip-text text-transparent leading-tight">
                Join the largest community of Extension Professionals
              </h2>

              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Afrexa offers many ways to get instant answers, spark
                discussions, and find the support you need to truly thrive. Dive
                in and discover a whole new dimension to your learning
                experience!
              </p>
            </div>
          </div>
          <div className="order-2 lg:order-1 space-y-8">
            <div className="grid grid-cols-2 gap-4 oo">
              {features.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={i}
                    onMouseEnter={() => setHoveredFeature(i)}
                    onMouseLeave={() => setHoveredFeature(null)}
                    className="bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100"
                    style={{
                      transform:
                        hoveredFeature === i
                          ? "translateY(-4px)"
                          : "translateY(0)",
                    }}>
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-all duration-300 ${
                        hoveredFeature === i
                          ? "bg-linear-to-br from-primary to-green-500"
                          : "bg-gray-100"
                      }`}>
                      <Icon
                        className={`w-6 h-6 ${
                          hoveredFeature === i ? "text-white" : "text-gray-600"
                        }`}
                      />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="/register"
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-linear-to-r from-primary to-green-600 text-white rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  Join Community
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-linear-to-r from-green-600 to-green-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>

              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-full text-lg font-semibold hover:border-primary hover:text-primary transition-all duration-300">
                Learn More
              </a>
            </div>

            <div className="flex sm:flex-row flex-col gap-3 items-center sm:gap-6 pt-4 border-t border-gray-200">
              <div className="flex -space-x-3">
                {[
                  { image: "/IMG_1.jpg" },
                  { image: "/IMG_2.jpg" },
                  { image: "/IMG_3.jpg" },
                  { image: "/IMG_4.jpg" },
                ].map(({ image }, index) => (
                  <Image
                    key={image}
                    src={image}
                    alt={`Community member ${index + 1}`}
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full object-cover border-2 border-white"
                  />
                ))}
                <div className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-bold text-gray-600">
                  +1K
                </div>
              </div>
              <p className="text-sm text-gray-600">
                <span className="font-bold text-gray-900">1,000+ </span>
                professionals joined this month
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Trusted by professionals across Africa
            </h3>
            <p className="text-gray-600">
              Join thousands of extension agents transforming agriculture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Sarah M.",
                role: "Extension Officer",
                quote: "This community transformed my career path!",
              },
              {
                name: "John K.",
                role: "Agribusiness Professional",
                quote: "Best decision I made for my growth.",
              },
              {
                name: "Amina T.",
                role: "Agricultural Consultant",
                quote: "The support here is unmatched!",
              },
            ].map((testimonial, i) => (
              <div
                key={i}
                className="bg-linear-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-linear-to-br from-primary to-green-400" />
                  <div>
                    <div className="font-bold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 italic">{testimonial.quote}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
