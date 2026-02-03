import React from "react";
import { Metadata } from "next";
import { getCoursesByField } from "@/lib/api";
import CourseDetail from "@/components/CourseDetails";

type CoursePageParams = { courseId: string | string[] };

export async function generateMetadata({
  params,
}: {
  params: Promise<CoursePageParams>;
}): Promise<Metadata> {
  const fallbackTitle = "Course Information";

  try {
    const resolvedParams = await params;
    const courseIdValue = Array.isArray(resolvedParams.courseId)
      ? resolvedParams.courseId[0]
      : resolvedParams.courseId;

    const response = await getCoursesByField({
      field: "id",
      value: courseIdValue,
    });

    if (!response.courses || response.courses.length === 0) {
      console.warn("⚠️ [Metadata] No courses found for ID:", courseIdValue);
      return {
        title: fallbackTitle,
        description: "Browse course Info",
      };
    }

    const course = response.courses[0];

    const courseName =
      course?.shortname || course?.displayname || course?.fullname || null;

    if (!courseName) {
      console.warn(
        "⚠️ [Metadata] Course name is null/undefined, using fallback"
      );
      return {
        title: fallbackTitle,
        description: "Browse course Info",
      };
    }

    return {
      title: courseName,
      description:
        course?.summary?.replace(/<[^>]*>/g, "").substring(0, 160) ||
        "Browse course Info",
    };
  } catch (error) {
    console.error("❌ [Metadata] Failed to build course metadata:", error);
    return {
      title: fallbackTitle,
      description: "Browse course Info",
    };
  }
}

function CourseInfo() {
  return <CourseDetail />;
}

export default CourseInfo;
