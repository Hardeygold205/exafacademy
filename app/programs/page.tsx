import React from "react";
import { Metadata } from "next";
import Programs from "@/components/Programs";

export const metadata: Metadata = {
  title: "Our Program",
};

function Program() {
  return <Programs />;
}

export default Program;
