import React from "react";
import { Metadata } from "next";
import CoursePage from "@/components/Courses";

export const metadata: Metadata = {
  title: "Courses",
  description: "Browse different courses",
};

function Courses() {
  return (
    <div className="relative min-h-screen z-40 bg-zinc-50 mb-120">
      <CoursePage />
    </div>
  );
}

export default Courses;
