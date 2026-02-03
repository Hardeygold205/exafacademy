"use client";

import React from "react";
import { Mail, ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";

function VerifyEmail() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-8 p-8 rounded-2xl border border-stone-100 shadow-xl shadow-stone-200/50">
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-emerald-100 rounded-full blur-2xl opacity-50 animate-pulse" />
            <div className="relative bg-emerald-50 p-6 rounded-full border border-emerald-100">
              <Mail className="w-12 h-12 text-primary" />
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <h1 className="text-2xl font-bold text-stone-900 tracking-tight">
            Check your inbox
          </h1>
          <p className="text-stone-500 leading-relaxed">
            We&apos;ve sent a verification link to
            {email ? (
              <span className="font-semibold text-stone-700"> {email}</span>
            ) : (
              " your email address"
            )}
            . Please click the link to activate your account.
          </p>
        </div>

        <div className="space-y-4 pt-4">
          <Button
            asChild
            className="w-full h-12 bg-primary hover:bg-emerald-700 text-white rounded-xl font-semibold shadow-lg shadow-emerald-700/20 transition-all">
            <a
              href="https://mail.google.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2">
              Open Mail <ExternalLink className="w-4 h-4" />
            </a>
          </Button>

          <div className="pt-2">
            <Link
              href="/login"
              className="text-sm font-medium text-stone-400 hover:text-emerald-600 flex items-center justify-center gap-2 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to login
            </Link>
          </div>
        </div>

        <div className="pt-8 border-t border-stone-50">
          <p className="text-xs text-stone-400">
            Didn&apos;t receive the email? Check your spam folder or
            <button
              onClick={() => router.push("/register")}
              className="ml-1 text-primary hover:underline font-medium">
              signup again
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default VerifyEmail;
