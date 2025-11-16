import React from "react";
import { Metadata } from "next";
import AuthLayout from "@/components/AuthLayout";

export const metadata: Metadata = {
  title: "Login",
  description: "Login your account at Africa Extension Academy",
};

function Login() {
  return <AuthLayout />;
}

export default Login;
