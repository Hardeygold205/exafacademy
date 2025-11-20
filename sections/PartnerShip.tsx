import React from "react";
import { LogoMarquee } from "@/components/ui/logo-marquee";

const partners = [
  { src: "/africarice.png", name: "Africa Rice Center" },
  { src: "/agra.png", name: "AGRA" },
  { src: "/disignocracy.png", name: "Disignocracy" },
  { src: "/giz.png", name: "GIZ" },
  { src: "/ignitia.png", name: "Ignitia" },
  { src: "/ncx.png", name: "NCX" },
  { src: "/smesabiOrig.png", name: "Smesabi" },
  { src: "/sawbo.png", name: "SAWBO" },
  { src: "/power.png", name: "Power Africa" },
  { src: "/plantvillage.jpeg", name: "Plant Village" },
  { src: "/cosmic sports.png", name: "Cosmic Sports" },
  { src: "/mercy corps.png", name: "Mercy Corps" },
];

const row1 = partners.slice(0, partners.length / 2);
const row2 = partners.slice(partners.length / 2);

function PartnerShip() {
  return (
    <section className="w-full py-20 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-green-50 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <span className="text-green-600 font-bold tracking-wider uppercase text-sm">
          Our Ecosystem
        </span>
        <h2 className="text-3xl md:text-5xl text-primary mt-3 mb-3">
          Trusted by Industry Leaders
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg font-light">
          We collaborate with world-class organizations to deliver impactful
          agricultural solutions across Africa.
        </p>
      </div>

      <div className="relative w-full max-w-screen-2xl mx-auto flex flex-col gap-8 md:gap-12">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 bg-linear-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 bg-linear-to-l from-white to-transparent z-10" />

        <LogoMarquee items={row1} direction="left" speed={30} />

        <LogoMarquee items={row2} direction="right" speed={30} />
      </div>
    </section>
  );
}

export default PartnerShip;
