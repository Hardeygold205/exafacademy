import React, { Suspense } from "react";
import { Metadata } from "next";
import VerifyEmail from "@/components/VerifyEmail";

export const metadata: Metadata = {
  title: "Verify Your Email",
};

function Verify() {
  return (
    <Suspense>
      <VerifyEmail />
    </Suspense>
  );
}

export default Verify;
