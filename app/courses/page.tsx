import React from "react";
import { Metadata } from "next";
import CoursePage from "@/components/Courses";

export const metadata: Metadata = {
  title: "Courses",
  description: "Browse different courses",
};

function Courses() {
  return <CoursePage />;
}

export default Courses;
