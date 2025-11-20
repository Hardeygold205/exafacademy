import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Course } from "@/lib/api";

interface CourseCardProps {
  course: Course;
}

function CourseCard({ course }: CourseCardProps) {
  const skillLevel =
    course.customfields.find((field) => field.shortname === "edwskilllevel")
      ?.value || "Beginner";

  const duration = course.customfields.find(
    (field) => field.shortname === "edwcourseduration"
  )?.value;

  const getSummaryPreview = (html: string, maxLength: number = 150) => {
    const text = html.replace(/<[^>]*>/g, "");
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  };

  const imageUrl =
    course.overviewfiles.length > 0
      ? course.overviewfiles[0].fileurl
      : course.courseimage;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48 w-full bg-gray-200">
        <Image
          src={imageUrl}
          alt={course.fullname}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium">
          {course.categoryname}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
          {course.fullname}
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {getSummaryPreview(course.summary)}
        </p>

        <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
            <span>{skillLevel}</span>
          </div>
          {duration && (
            <div className="flex items-center gap-1">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{duration}</span>
            </div>
          )}
        </div>

        {course.contacts.length > 0 && (
          <div className="mb-4">
            <p className="text-xs text-gray-500 mb-1">Instructors:</p>
            <div className="flex flex-wrap gap-2">
              {course.contacts.map((contact) => (
                <span
                  key={contact.id}
                  className="text-xs bg-gray-100 px-2 py-1 rounded">
                  {contact.fullname}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-wrap gap-2 mb-4">
          {course.enrollmentmethods.includes("self") && (
            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
              Self Enrollment
            </span>
          )}
          {course.visible === 1 ? (
            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
              Available
            </span>
          ) : (
            <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">
              Not Available
            </span>
          )}
        </div>

        <Link
          href={`/courses/${course.id}`}
          className="block w-full text-center bg-primary text-white py-2 px-4 rounded-md hover:scale-95 ease-in-out transition-colors duration-200 font-medium">
          View Course
        </Link>
      </div>
    </div>
  );
}

export default CourseCard;
