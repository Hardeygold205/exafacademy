"use client";

import React, { useEffect, useState } from "react";
import CourseCard from "@/components/CourseCard";
import { getCoursesByField } from "@/lib/api";
import type { Course } from "@/lib/api";

const CATEGORIES = {
  TECHNICAL_SKILLS: "23",
  AGRIBUSINESS: "24",
  SOFT_SKILLS: "22",
  AFREXA_PROGRAM: "6",
};

function CoursePage() {
  const [technicalCourses, setTechnicalCourses] = useState<Course[]>([]);
  const [agribusinessCourses, setAgribusinessCourses] = useState<Course[]>([]);
  const [afrexaprogram, setAfrexaprogram] = useState<Course[]>([]);
  const [softSkillsCourses, setSoftSkillsCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCourses() {
      try {
        setLoading(true);
        const [technical, agribusiness, afrexaProgram, softSkills] =
          await Promise.all([
            getCoursesByField({
              field: "category",
              value: CATEGORIES.TECHNICAL_SKILLS,
            }),
            getCoursesByField({
              field: "category",
              value: CATEGORIES.AGRIBUSINESS,
            }),
            getCoursesByField({
              field: "category",
              value: CATEGORIES.AFREXA_PROGRAM,
            }),
            getCoursesByField({
              field: "category",
              value: CATEGORIES.SOFT_SKILLS,
            }),
          ]);

        setTechnicalCourses(technical?.courses || []);
        setAgribusinessCourses(agribusiness?.courses || []);
        setAfrexaprogram(afrexaProgram?.courses || []);
        setSoftSkillsCourses(softSkills?.courses || []);
      } catch (err) {
        console.error("Error fetching courses:", err);
        setError(
          err instanceof Error ? err.message : "Failed to fetch courses"
        );
        setTechnicalCourses([]);
        setAgribusinessCourses([]);
        setSoftSkillsCourses([]);
      } finally {
        setLoading(false);
      }
    }

    fetchCourses();
  }, []);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading courses...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
          <p className="text-red-800 font-semibold">Error loading courses</p>
          <p className="text-red-600 mt-2">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-center">
        Explore Our Courses
      </h1>
      <p className="text-center mt-8 text-primary/90 text-lg md:text-xl lg:text-2xl md:max-w-full max-w-72 mx-auto">
        Welcome to Afrexa, below are courses designed for agricultural and
        agribusiness professionals, and extension agents. Each course equips you
        with practical knowledge and skills for sustainable and excellent
        agricultural practices and business, helping you stay ahead in
        agribusiness, extension services, and modern farming. Browse the courses
        below and start your journey toward making a lasting impact in
        agriculture.
      </p>

      <div className="flex flex-col gap-10 space-y-10 mt-10">
        <div>
          <h2 className="text-2xl md:text-2xl lg:text-3xl xl:text-4xl text-left mt-10">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {technicalCourses.length > 0 ? (
              technicalCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))
            ) : (
              <p className="text-gray-500 col-span-full text-center py-8">
                No technical skills courses available at the moment.
              </p>
            )}
          </div>
        </div>

        {/* Agribusiness Section */}
        <div>
          <h2 className="text-2xl md:text-2xl lg:text-3xl xl:text-4xl text-left mt-10">
            Agribusiness and Extension Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {agribusinessCourses.length > 0 ? (
              agribusinessCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))
            ) : (
              <p className="text-gray-500 col-span-full text-center py-8">
                No agribusiness courses available at the moment.
              </p>
            )}
          </div>
        </div>

        {/* AFREXA Program Section */}
        <div>
          <h2 className="text-2xl md:text-2xl lg:text-3xl xl:text-4xl text-left mt-10">
            AFREXA Program
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {afrexaprogram.length > 0 ? (
              afrexaprogram.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))
            ) : (
              <p className="text-gray-500 col-span-full text-center py-8">
                No soft skills courses available at the moment.
              </p>
            )}
          </div>
        </div>

        {/* Soft Skills Section */}
        <div>
          <h2 className="text-2xl md:text-2xl lg:text-3xl xl:text-4xl text-left mt-10">
            Soft Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {softSkillsCourses.length > 0 ? (
              softSkillsCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))
            ) : (
              <p className="text-gray-500 col-span-full text-center py-8">
                No soft skills courses available at the moment.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoursePage;
