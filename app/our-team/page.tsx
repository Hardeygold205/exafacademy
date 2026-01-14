import React from "react";
import { Metadata } from "next";
import OurTeam from "@/components/OurTeam";

export const metadata: Metadata = {
  title: "Our Team",
};

function OurTeams() {
  return <OurTeam />;
}

export default OurTeams;
