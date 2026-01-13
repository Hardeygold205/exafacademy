import Ecosystem from "@/components/Ecosystem";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shaping the Future",
};

function page() {
  return <Ecosystem />;
}

export default page;
