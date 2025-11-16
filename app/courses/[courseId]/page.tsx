"use client";

import { useParams } from "next/navigation";

function CoursePage() {
  const { courseId } = useParams();
  console.log(courseId);

  return (
    <div>
      <h1>Course {courseId}</h1>
    </div>
  );
}

export default CoursePage;
