import React, { Suspense } from "react";
import { Metadata } from "next";
import VerifyEmail from "@/components/VerifyEmail";
import { Loader2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Verify Your Email",
};

export default function VerifyEmailScreen() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[80vh] flex items-center justify-center px-4">
          <Loader2 className="w-10 h-10 animate-spin" /> Verify Your Email...
        </div>
      }>
      <VerifyEmail />
    </Suspense>
  );
}
