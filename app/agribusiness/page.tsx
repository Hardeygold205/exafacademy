import AgriBusiness from "@/components/AgriBusiness";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agribusiness Professionals",
};

function page() {
  return <AgriBusiness />;
}

export default page;
