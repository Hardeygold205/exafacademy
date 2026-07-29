import React from "react";
import { Metadata } from "next";
import OurTeam from "@/components/OurTeam";

export const metadata: Metadata = {
  title: "Our Program",
};

function Programs() {
  return <OurTeam />;
}

export default Programs;
