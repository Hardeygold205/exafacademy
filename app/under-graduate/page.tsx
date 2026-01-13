import UnderGraduate from "@/components/UnderGraduate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "UnderGraduate Students",
};

function page() {
  return <UnderGraduate />;
}

export default page;
