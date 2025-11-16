import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const testimonials = [
  {
    src: "/africarice.png",
    name: "Africa Rice Center",
  },
  {
    src: "/agra.png",
    name: "AGRA",
  },
  {
    src: "/disignocracy.png",
    name: "Disignocracy",
  },
  {
    src: "/giz.png",
    name: "GIZ",
  },
  {
    src: "/ignitia.png",
    name: "Ignitia",
  },
  {
    src: "/ncx.png",
    name: "NCX",
  },
  {
    src: "/smesabiOrig.png",
    name: "Smesabi",
  },
  {
    src: "/sawbo.png",
    name: "SAWBO",
  },
  {
    src: "/power.png",
    name: "Power Africa",
  },
  {
    src: "/plantvillage.jpeg",
    name: "Plant Village",
  },
  {
    src: "/cosmic sports.png",
    name: "Cosmic Sports",
  },
  {
    src: "/mercy corps.png",
    name: "Mercy Corps",
  },
];

function PartnerShip() {
  return (
    <div className="w-full">
      <div className="mx-auto max-w-7xl justify-center flex flex-col items-center text-center py-8 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl md:text-4xl lg:text-5xl text-primary my-3 sm:my-4 lg:my-5 px-2">
          Working together professionally
        </h1>
        <p></p>
        <div className="w-full">
          <div className="h-32 md:h-36 rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
              items={testimonials}
              direction="left"
              speed="slow"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PartnerShip;
