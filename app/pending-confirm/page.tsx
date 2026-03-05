import PendingConfirmation from "@/components/PendingConfirmation";
import { Loader2 } from "lucide-react";
import { Metadata } from "next";
import React, { Suspense } from "react";

export const metadata: Metadata = {
  title: "Pending Confirmation",
};

export default function PendingConfirmationScreen() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[80vh] flex items-center justify-center px-4">
          <Loader2 className="w-10 h-10 animate-spin" /> Pending Confirmation...
        </div>
      }>
      <PendingConfirmation />
    </Suspense>
  );
}