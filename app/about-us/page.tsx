"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Users, Globe } from "lucide-react";
import Image from "next/image";

const stats = [
  {
    value: "60%",
    label: "of Africa's population are smallholder farmers",
    icon: <Users className="text-green-500" size={24} />,
  },
  {
    value: "2x",
    label: "potential increase in agricultural productivity",
    icon: <TrendingUp className="text-green-500" size={24} />,
  },
  {
    value: "$1T",
    label: "potential African food market by 2030",
    icon: <Globe className="text-green-500" size={24} />,
  },
];

const AboutUs = () => {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden pt-20 pb-16 px-6 lg:px-24">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-green-50 rounded-full blur-3xl opacity-50 -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-30 -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="flex items-center space-x-4 mb-12">
          <div className="h-1 w-12 bg-green-600 rounded-full" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our <span className="italic text-green-600">&quot;Why&quot;</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8">
            <div className="border-l-4 border-green-500 pl-6">
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium">
                &quot;Africa is uniquely positioned to meet the challenge of
                feeding itself and the world, and spur economic growth.&quot;
              </p>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed">
              However, this potential is still met by a declining efficiency in
              production by rural farmers. The link to these farmers is still
              weak and innovations are barely adopted. This creates an urgency
              for an efficient system to deliver life-saving innovations to the
              last mile.
            </p>

            <div className="bg-orange-50/50 backdrop-blur-sm border border-orange-100 p-8 rounded-2xl shadow-sm italic">
              <p className="text-xl text-orange-900 font-semibold leading-snug">
                We are creating reliable and efficient channels to connect rural
                farmers to Global Supply Chains.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative">
            <div className="relative z-10 p-1 md:p-2 border-2 border-dashed border-green-400 rounded-4xl">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  width={800}
                  height={600}
                  src="/9377.jpg"
                  alt="Farmer"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute bottom-0.5 md:bottom-6 left-0.5 md:left-6 bg-green-600 text-white px-2 md:px-6 md:py-3 py-1  rounded-xl font-bold shadow-lg flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse text-sm md:text-md lg:text-xl" />
                  Empowering Farmers
                </div>
              </div>
            </div>

            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="mb-4 p-3 bg-green-50 w-fit rounded-2xl group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                {stat.icon}
              </div>
              <h2 className="text-5xl font-black text-green-600 mb-2">
                {stat.value}
              </h2>
              <p className="text-gray-500 font-medium leading-tight">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
