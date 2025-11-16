import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Available Courses",
  description: "Explore our course offerings at Africa Extension Academy",
};

function Course() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-center">
        Explore Our Courses
      </h1>
      <p className="text-center mt-8 text-gray-600 text-lg md:text-xl lg:text-2xl md:max-w-full max-w-72 mx-auto">
        Welcome to Afrexa, below are courses designed for agricultural and
        agribusiness professionals, and extension agents. Each course equips you
        with practical knowledge and skills for sustainable and excellent
        agricultural practices and business, helping you stay ahead in
        agribusiness, extension services, and modern farming. Browse the courses
        below and start your journey toward making a lasting impact in
        agriculture.
      </p>
      <div className="flex flex-col gap-10 space-y-10 mt-10">
        <h1 className="text-2xl md:text-2xl lg:text-3xl xl:text-4xl text-left mt-10">
          Technical Skills
        </h1>
        <h1 className="text-2xl md:text-2xl lg:text-3xl xl:text-4xl text-left mt-10">
          Agribusiness and Extension Skills
        </h1>
        <h1 className="text-2xl md:text-2xl lg:text-3xl xl:text-4xl text-left mt-10">
          Soft Skills
        </h1>
      </div>
    </div>
  );
}

export default Course;
