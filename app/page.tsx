import FAQ from "@/sections/FAQ";
import HeroSection from "@/sections/HeroSection";
import JoinCommunity from "@/sections/JoinCommunity";
import OverView from "@/sections/OverView";
import PartnerShip from "@/sections/PartnerShip";
import Program from "@/sections/Program";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Afrexa",
  description: "Africa Extension Academy",
};

export default function Home() {
  return (
    <div className="relative min-h-screen bg-zinc-50">
      <HeroSection />
      <OverView />
      <Program />
      <FAQ />
      <JoinCommunity />
      <PartnerShip />
    </div>
  );
}
