"use client";

import React, { useEffect, useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CourseCard from "@/components/CourseCard";
import { getCoursesByField } from "@/lib/api";
import type { Course } from "@/lib/api";
import {
  Cpu,
  Sprout,
  Users,
  LayoutGrid,
  Loader2,
  AlertCircle,
} from "lucide-react";

const CATEGORIES = {
  TECHNICAL_SKILLS: "23",
  AGRIBUSINESS: "24",
  SOFT_SKILLS: "22",
};

type SectionHeaderProps = {
  title: string;
  icon: ReactNode;
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function CoursePage() {
  const [activeTab, setActiveTab] = useState("all");
  const [technicalCourses, setTechnicalCourses] = useState<Course[]>([]);
  const [agribusinessCourses, setAgribusinessCourses] = useState<Course[]>([]);
  const [softSkillsCourses, setSoftSkillsCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCourses() {
      try {
        setLoading(true);
        const [technical, agribusiness, softSkills] = await Promise.all([
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
            value: CATEGORIES.SOFT_SKILLS,
          }),
        ]);

        setTechnicalCourses(technical?.courses || []);
        setAgribusinessCourses(agribusiness?.courses || []);
        setSoftSkillsCourses(softSkills?.courses || []);
      } catch (err) {
        console.error("Error fetching courses:", err);
        setError(
          err instanceof Error ? err.message : "Failed to fetch courses"
        );
      } finally {
        setLoading(false);
      }
    }

    fetchCourses();
  }, []);

  const tabs = [
    {
      id: "all",
      label: "All Courses",
      icon: <LayoutGrid className="w-5 h-5" />,
    },
    { id: "technical", label: "Technical", icon: <Cpu className="w-5 h-5" /> },
    {
      id: "agribusiness",
      label: "Agribusiness",
      icon: <Sprout className="w-5 h-5" />,
    },
    {
      id: "soft_skills",
      label: "Soft Skills",
      icon: <Users className="w-5 h-5" />,
    },
  ];

  const SectionHeader = ({ title, icon }: SectionHeaderProps) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex items-center gap-4 mb-8 mt-12 first:mt-0">
      <h3 className="text-2xl md:text-3xl font-bold text-primary flex items-center gap-3">
        <span className="p-2 bg-white/5 rounded-lg text-primary">{icon}</span>
        {title}
      </h3>
      <div
        className={`flex-1 h-px bg-linear-to-r from-primary to-transparent opacity-50`}
      />
    </motion.div>
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center">
        <Loader2 className="w-12 h-12 text-green-500 animate-spin mb-4" />
        <p className="text-green-400 font-medium">Loading courses...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
        <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-8 text-center max-w-md">
          <AlertCircle className="w-12 h-12 text-red-400 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">
            Unable to Load Courses
          </h3>
          <p className="text-gray-400 mb-6">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors">
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative py-20 bg-white min-h-screen overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-6">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block mb-4">
            <span className="px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-primary text-sm font-semibold">
              📚 Knowledge Hub
            </span>
          </motion.div>

          <h1 className="text-5xl my-5 md:text-6xl font-bold mb-6 bg-linear-to-r from-green-400 to-white via-green-700 bg-clip-text text-transparent">
            Explore Our Courses
          </h1>

          <p className="text-black/60 text-md md:text-lg max-w-4xl mx-auto leading-relaxed">
            Welcome to Afrexa, below are courses designed for agricultural and
            agribusiness professionals, and extension agents. Each course equips
            you with practical knowledge and skills for sustainable and
            excellent agricultural practices and business, helping you stay
            ahead in agribusiness, extension services, and modern farming.
            Browse the courses below and start your journey toward making a
            lasting impact in agriculture.
          </p>
        </motion.div>

        {/* Tabs Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 md:px-6 md:py-3 text-sm md:text-base rounded-lg md:rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 border ${
                activeTab === tab.id
                  ? "bg-linear-to-r from-green-500 to-primary text-white shadow-lg shadow-green-500/50 border-transparent"
                  : "bg-black/5 text-black/60 border-black/60 hover:border-green-500/50 hover:opacity-80"
              }`}>
              {tab.icon}
              {tab.label}
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          {activeTab === "all" ? (
            <motion.div
              key="all-courses"
              initial="hidden"
              animate="show"
              exit={{ opacity: 0, y: 20 }}
              variants={containerVariants}
              className="space-y-16">
              {/* Technical Section */}
              <motion.div variants={sectionVariants}>
                <SectionHeader
                  title="Technical Skills"
                  icon={<Cpu className="w-6 h-6" />}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {technicalCourses.length > 0 ? (
                    technicalCourses.map((course) => (
                      <motion.div
                        key={course.id}
                        variants={itemVariants}
                        className="h-full">
                        <CourseCard course={course} />
                      </motion.div>
                    ))
                  ) : (
                    <p className="text-gray-500 col-span-full text-center py-4">
                      No technical courses available.
                    </p>
                  )}
                </div>
              </motion.div>

              {/* Agribusiness Section */}
              <motion.div variants={sectionVariants}>
                <SectionHeader
                  title="Agribusiness & Extension"
                  icon={<Sprout className="w-6 h-6" />}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {agribusinessCourses.length > 0 ? (
                    agribusinessCourses.map((course) => (
                      <motion.div
                        key={course.id}
                        variants={itemVariants}
                        className="h-full">
                        <CourseCard course={course} />
                      </motion.div>
                    ))
                  ) : (
                    <p className="text-gray-500 col-span-full text-center py-4">
                      No agribusiness courses available.
                    </p>
                  )}
                </div>
              </motion.div>

              {/* Soft Skills Section */}
              <motion.div variants={sectionVariants}>
                <SectionHeader
                  title="Soft Skills"
                  icon={<Users className="w-6 h-6" />}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {softSkillsCourses.length > 0 ? (
                    softSkillsCourses.map((course) => (
                      <motion.div
                        key={course.id}
                        variants={itemVariants}
                        className="h-full">
                        <CourseCard course={course} />
                      </motion.div>
                    ))
                  ) : (
                    <p className="text-gray-500 col-span-full text-center py-4">
                      No soft skills courses available.
                    </p>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key={activeTab}
              variants={containerVariants}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0, y: 20 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {(activeTab === "technical"
                ? technicalCourses
                : activeTab === "agribusiness"
                ? agribusinessCourses
                : softSkillsCourses
              ).length > 0 ? (
                (activeTab === "technical"
                  ? technicalCourses
                  : activeTab === "agribusiness"
                  ? agribusinessCourses
                  : softSkillsCourses
                ).map((course) => (
                  <motion.div
                    key={course.id}
                    variants={itemVariants}
                    className="h-full">
                    <CourseCard course={course} />
                  </motion.div>
                ))
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="col-span-full py-20 text-center bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                  <p className="text-gray-400 text-lg">
                    No courses found in this category at the moment.
                  </p>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
