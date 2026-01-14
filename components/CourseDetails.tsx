"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Clock,
  Calendar,
  Users,
  Award,
  BookOpen,
  CheckCircle2,
  ArrowLeft,
  Loader2,
  AlertCircle,
} from "lucide-react";

import { getCoursesByField, type Course } from "@/lib/api";
import CourseCard from "@/components/CourseCard";

const getCustomValue = (
  course: Course,
  fieldShortName: string
): string | null => {
  if (!course.customfields) return null;
  const field = course.customfields.find((f) => f.shortname === fieldShortName);
  return field ? field.value : null;
};

const formatDate = (timestamp: number) => {
  if (!timestamp) return "Flexible Start";
  return new Date(timestamp * 1000).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const defaultImage = "/agra-default.png";

const isValidImageUrl = (url: string) => {
  if (!url) return false;
  if (url.includes("/generated")) return false;
  const imagePattern = /\.(png|jpe?g|gif|webp|svg|avif)$/i;
  if (imagePattern.test(url)) return true;

  try {
    const parsed = new URL(url);
    return imagePattern.test(parsed.pathname);
  } catch {
    return false;
  }
};

export default function CourseDetail() {
  const { courseId } = useParams();
  const router = useRouter();

  const [course, setCourse] = useState<Course | null>(null);
  const [relatedCourses, setRelatedCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [imageUrl, setImageUrl] = useState(defaultImage);

  useEffect(() => {
    async function fetchData() {
      if (!courseId) return;

      try {
        setLoading(true);
        const response = await getCoursesByField({
          field: "id",
          value: Array.isArray(courseId) ? courseId[0] : courseId,
        });

        if (!response.courses || response.courses.length === 0) {
          throw new Error("Course not found");
        }

        const currentCourse = response.courses[0];
        setCourse(currentCourse);
        const nextRawImage =
          currentCourse.courseimage ||
          currentCourse.overviewfiles?.[0]?.fileurl ||
          "";
        setImageUrl(
          isValidImageUrl(nextRawImage) ? nextRawImage : defaultImage
        );

        if (currentCourse.categoryid) {
          const relatedResponse = await getCoursesByField({
            field: "category",
            value: currentCourse.categoryid.toString(),
          });

          const filtered = relatedResponse.courses
            .filter((c) => c.id !== currentCourse.id)
            .slice(0, 4);

          setRelatedCourses(filtered);
        }
      } catch (err) {
        console.error("Error fetching course details:", err);
        setError(err instanceof Error ? err.message : "Failed to load course");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [courseId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center">
        <Loader2 className="w-12 h-12 text-green-500 animate-spin mb-4" />
        <p className="text-green-400 font-medium">Loading course details...</p>
      </div>
    );
  }

  if (error || !course) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
        <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-8 text-center max-w-md">
          <AlertCircle className="w-12 h-12 text-red-400 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-primary mb-2">Error</h3>
          <p className="text-gray-400 mb-6">{error || "Course not found"}</p>
          <button
            onClick={() => router.back()}
            className="px-6 py-2 bg-white/10 text-primary rounded-full hover:bg-white/20 transition-colors">
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const skillLevel = getCustomValue(course, "edwskilllevel") || "All Levels";
  const duration = getCustomValue(course, "edwcourseduration") || "Self-paced";

  return (
    <div className="min-h-screen bg-white text-primary selection:bg-green-500/30">
      <div className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={imageUrl}
            alt={course.fullname}
            fill
            className="object-cover opacity-80 blur-out"
            priority
            onError={() => setImageUrl(defaultImage)}
          />
          <div className="absolute inset-0 bg-linear-to-t from-neutral-250 via-neutral-550/80 to-neutral-350/30" />
          <div className="absolute inset-0 bg-linear-to-r from-neutral-950 via-neutral-950/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-5">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => router.back()}
            className="group flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
            <div className="p-2 rounded-full bg-white/5 group-hover:bg-green-500/20 transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </div>
            <span>Back to Courses</span>
          </motion.button>

          <div className="grid md:grid-cols-3 gap-12 items-end">
            <div className="md:col-span-2 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-green-500/20 border border-green-500/30 text-green-400 rounded-full text-xs font-bold uppercase tracking-wider">
                  {course.categoryname}
                </span>
                {course.visible === 1 ? (
                  <span className="px-3 py-1 bg-green-500/20 border border-green-500/30 text-green-400 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Open for Enrollment
                  </span>
                ) : (
                  <span className="px-3 py-1 bg-red-500/20 border border-red-500/30 text-red-400 rounded-full text-xs font-bold uppercase tracking-wider">
                    Closed
                  </span>
                )}
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                {course.fullname}
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap items-center gap-6 text-gray-300">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-green-500" />
                  <span>{duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-green-500" />
                  <span>{skillLevel}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-green-500" />
                  <span>Updated {formatDate(course.timemodified)}</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2 space-y-12">
            <section className="bg-white/5 border border-white/10 rounded-3xl backdrop-blur-sm ">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 sticky top-18 shadow-md p-5 z-40 bg-white">
                <BookOpen className="w-6 h-6 text-green-500" />
                About this Course
              </h3>
              <div
                className="prose prose-invert prose-lg max-w-none text-primary prose-headings:text-white prose-a:text-green-400 hover:prose-a:text-green-300 prose-strong:text-white z-30 leading-7"
                dangerouslySetInnerHTML={{ __html: course.summary }}
              />
            </section>

            <section>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 sticky top-18 shadow-md p-5 z-40 bg-white">
                <Users className="w-6 h-6 text-green-500" />
                Instructors
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {course.contacts && course.contacts.length > 0 ? (
                  course.contacts.map((contact) => (
                    <div
                      key={contact.id}
                      className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
                      <div className="w-12 h-12 rounded-full bg-linear-to-br from-green-500 to-primary flex items-center justify-center text-xl font-bold text-white shadow-lg">
                        {contact.fullname.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-primary">
                          {contact.fullname}
                        </p>
                        <p className="text-sm text-green-400">
                          Course Instructor
                        </p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500 italic">
                    Instructor information not available.
                  </p>
                )}
              </div>
            </section>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="lg:col-span-1">
            <div className="sticky top-20 space-y-6">
              <div className="bg-white backdrop-blur-2xl border border-white/10 rounded-3xl p-6 shadow-2xl shadow-green-900/10">
                <div className="mb-6 pb-6 border-b border-white/10">
                  <p className="text-sm font-bold text-black mb-1">
                    Start Date
                  </p>
                  <p className="text-xl font-bold text-primary">
                    {formatDate(course.startdate)}
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-700 flex items-center gap-2">
                      <Users className="w-4 h-4" /> Enrollment
                    </span>
                    <span className="text-primary font-medium">
                      {course.enrollmentmethods.includes("self")
                        ? "Self Enroll"
                        : "Manual"}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-700 flex items-center gap-2">
                      <Clock className="w-4 h-4" /> Duration
                    </span>
                    <span className="text-primary font-medium">{duration}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-700 flex items-center gap-2">
                      <Award className="w-4 h-4" /> Certificate
                    </span>
                    <span className="text-primary font-medium">Yes</span>
                  </div>
                </div>

                <button
                  onClick={() => router.push("/login")}
                  className="sticky top-40 w-full py-4 bg-linear-to-r from-primary to-green-500 hover:opacity-80 text-white font-bold rounded-xl shadow-lg shadow-green-500/25 transition-all duration-300 transform hover:-translate-y-1">
                  Login to Enroll Now
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {relatedCourses.length > 0 && (
        <div className="relative border-t border-white/10 bg-white">
          <div className="max-w-7xl mx-auto px-6 py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10 flex items-center justify-between sticky top-20 shadow-sm p-5 border-b-2 z-50 bg-white">
              <h2 className="text-3xl font-bold text-primary">
                Related Courses
              </h2>
              <Link
                href="/courses"
                className="text-green-400 hover:text-green-300 text-sm font-semibold flex items-center gap-1 transition-colors">
                View all <span aria-hidden="true">&rarr;</span>
              </Link>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedCourses.map((relatedCourse, index) => (
                <motion.div
                  key={relatedCourse.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="h-full">
                  <CourseCard course={relatedCourse} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
