import React from "react";
import ProgramLayout from "@/components/ProgramLayout";

function Program() {
  return (
    <div className="w-full">
      <div className="mx-auto max-w-7xl justify-center flex flex-col items-center text-center py-8 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl md:text-4xl lg:text-5xl text-primary my-3 sm:my-4 lg:my-5 px-2">
          Our Academy Programs
        </h1>
      </div>
      <ProgramLayout />
    </div>
  );
}

export default Program;
