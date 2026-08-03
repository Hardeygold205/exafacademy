import FAQ from "@/sections/FAQ";
import AfricaFootprintMap from "@/sections/FootPrintMap";
import HeroSection from "@/sections/HeroSection";
import JoinCommunity from "@/sections/JoinCommunity";
import OverView from "@/sections/OverView";
import PartnerShip from "@/sections/PartnerShip";
import Program from "@/sections/Program";
import Stories from "@/sections/Stories";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Afrexa",
  description: "Extension Africa Academy",
};

export default function Home() {
  return (
    <div className="relative min-h-screen bg-zinc-50">
      <HeroSection />
      <OverView />
      <Program />
      <FAQ />
      <JoinCommunity />
      <Stories />
      <AfricaFootprintMap />
      <PartnerShip />
    </div>
  );
}
