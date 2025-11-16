import React from "react";
import { Metadata } from "next";
import AuthLayout from "@/components/AuthLayout";

export const metadata: Metadata = {
  title: "New Account",
  description: "Create an account at Africa Extension Academy",
};

function Register() {
  return <AuthLayout />;
}

export default Register;
