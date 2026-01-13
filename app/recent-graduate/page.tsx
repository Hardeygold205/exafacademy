import RecentGraduate from "@/components/RecentGraduate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recent Graduates",
};

function page() {
  return <RecentGraduate />;
}

export default page;
