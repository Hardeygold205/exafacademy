import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Clock,
  ChevronRight,
  CheckCircle2,
  AlertCircle,
  Award,
} from "lucide-react";
import { stripHtml, getCustomField } from "@/lib/utils";
import type { Course } from "@/lib/api";

interface CoursePageProps {
  course: Course;
}

const CoursePage: React.FC<CoursePageProps> = ({ course }) => {
  const skillLevel = getCustomField(course, "edwskilllevel", "All Levels");
  const duration = getCustomField(course, "edwcourseduration");

  const rawImage =
    course.overviewfiles.length > 0
      ? course.overviewfiles[0].fileurl
      : course.courseimage;

  const imageUrl = rawImage;

  const isAvailable = course.visible === 1;
  const isSelfEnroll = course.enrollmentmethods.includes("self");

  return (
    <div className="group flex flex-col bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
      <div className="relative h-52 w-full overflow-hidden bg-gray-100">
        <Image
          src={imageUrl}
          alt={course.fullname}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-60" />

        <div className="absolute top-3 left-3 z-10">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/95 text-green-700 shadow-sm backdrop-blur-md">
            {course.categoryname}
          </span>
        </div>

        {course.contacts.length > 0 && (
          <div className="absolute bottom-3 left-3 z-10 flex items-center gap-2">
            <div className="flex -space-x-2">
              {course.contacts.slice(0, 3).map((contact) => (
                <div
                  key={contact.id}
                  className="w-8 h-8 rounded-full bg-white border-2 border-white overflow-hidden flex items-center justify-center"
                  title={contact.fullname}>
                  <span className="text-[10px] font-bold text-indigo-600">
                    {contact.fullname.charAt(0)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-col grow p-5">
        <div className="flex items-center gap-3 mb-3 text-xs text-gray-500 font-medium">
          <div className="flex items-center gap-1">
            <Award className="w-3.5 h-3.5 text-amber-500" />
            {skillLevel}
          </div>
          {duration && (
            <>
              <div className="w-1 h-1 rounded-full bg-gray-300" />
              <div className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-blue-500" />
                {duration}
              </div>
            </>
          )}
        </div>

        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 leading-tight group-hover:text-green-600 transition-colors">
          {course.fullname}
        </h3>

        <p className="text-sm text-gray-600 line-clamp-3 mb-4 grow leading-relaxed">
          {stripHtml(course.summary)}
        </p>

        <div className="pt-4 mt-auto border-t border-gray-100 flex items-center justify-between">
          <div className="flex flex-col">
            {isAvailable ? (
              <span className="text-xs font-medium text-green-600 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Available
              </span>
            ) : (
              <span className="text-xs font-medium text-red-500 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" /> Closed
              </span>
            )}
            <span className="text-[10px] text-gray-400 mt-0.5">
              {isSelfEnroll ? "Self Enrollment" : "Manual Enrollment"}
            </span>
          </div>

          <Link
            href={`/courses/${course.id}`}
            className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-50 text-green-600 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
