"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Loader2, ArrowRight, Eye, EyeOff } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { registerUser } from "@/lib/api";
import type { RegisterUserPayload } from "@/types/register-login";
import { registerSchema, loginSchema } from "@/types/validation";
import type { RegisterValues, LoginValues } from "@/types/validation";
import { countries } from "@/types/country";

const options = ["Student", "Extension Agent"];

function AuthLayout() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();
  const isLogin = pathname === "/login";

  const registerForm = useForm<RegisterValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "",
      password: "",
      email: "",
      emailConfirm: "",
      firstName: "",
      lastName: "",
      city: "",
      country: "",
      school: "",
      gender: "",
      occupation: "",
    },
  });

  const loginForm = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const selectedCountry = registerForm.watch("country");

  const selectedOccupation = registerForm.watch("occupation");

  async function onRegisterSubmit(values: RegisterValues) {
    setIsLoading(true);

    try {
      const payload: RegisterUserPayload = { ...values };
      const response = await registerUser(payload);

      if (response.success === false && response.warnings) {
        response.warnings.forEach((warning) => {
          const fieldName = warning.item as keyof RegisterValues;
          let displayMessage = warning.message.replace(/<[^>]*>?/gm, "");

          if (fieldName === "email") {
            displayMessage = "This email address is already registered.";
          } else if (fieldName === "username") {
            displayMessage = "This username already exists. choose another";
          } else {
            displayMessage = displayMessage.substring(0, 50);
          }

          registerForm.setError(fieldName, {
            type: "manual",
            message: displayMessage,
          });
        });
        setIsLoading(false);
        return;
      }

      if (response.success === true) {
        router.push(`/verify-email?email=${encodeURIComponent(values.email)}`);
      } else {
        throw new Error("Registration failed. Please check your details.");
      }
    } catch (error) {
      setIsLoading(false);
      const errorMessage =
        error instanceof Error
          ? error.message
          : "An unexpected error occurred.";

      registerForm.setError("root", {
        message: errorMessage,
      });
    }
  }

  async function onLoginSubmit(values: LoginValues) {
    setIsLoading(true);
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        body: JSON.stringify(values),
        headers: { "Content-Type": "application/json" },
      });

      const result = await response.json();

      if (!response.ok) {
        if (result.error === "email_not_confirmed") {
          const emailForRedirect =
            result.email ||
            (values.username.includes("@") ? values.username : "");
          router.push(
            `/pending-confirm${emailForRedirect ? `?email=${encodeURIComponent(emailForRedirect)}` : ""}`,
          );
          return;
        }
        throw new Error(result.error || "Invalid credentials");
      }

      const email =
        result.email ??
        (values.username.includes("@") ? values.username : null);
      if (!email) {
        throw new Error(
          "Could not determine email for redirect. Please try logging in with your email.",
        );
      }

      const loginUrlRes = await fetch("/api/moodle-login-url", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const loginUrlData = await loginUrlRes.json();

      if (!loginUrlRes.ok) {
        throw new Error(
          loginUrlData.error || "Could not get login URL from Moodle",
        );
      }

      const loginUrl = loginUrlData.loginurl;
      if (!loginUrl) {
        throw new Error("No login URL returned from Moodle");
      }

      window.location.href = loginUrl;
    } catch (error) {
      setIsLoading(false);
      const errorMessage =
        error instanceof Error ? error.message : "Invalid username or password";

      loginForm.setError("root", {
        type: "manual",
        message: errorMessage,
      });
    }
  }

  return (
    <div className="min-h-screen w-full flex bg-[#FDFCF8] text-stone-800 font-sans selection:bg-green-100">
      <div className="hidden lg:flex lg:w-1/2 bg-primary flex-col justify-between p-12 overflow-hidden h-screen sticky top-0">
        <div className="absolute inset-0 z-0">
          <Image
            src="/bisi&musa.png"
            alt="Agriculture background"
            fill
            className="object-cover opacity-60 mix-blend-overlay"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-primary/20 to-primary/50" />
        </div>

        <div className="z-10 max-w-lg absolute right-0 left-0 flex-col mx-auto justify-center h-auto bottom-2 ">
          <div className="space-y-6">
            {/* Headline */}
            <h1 className="text-4xl font-bold text-white leading-tight">
              Grow your knowledge. <br />
              <span className="text-emerald-200">Transform agriculture.</span>
            </h1>

            {/* Subtext */}
            <p className="text-emerald-100/90 text-lg leading-relaxed">
              Join a new generation of farmers, students, and extension agents
              building smarter, more sustainable agricultural systems across
              Africa.
            </p>

            <div className="flex items-center gap-3 pt-4">
              <div className="flex -space-x-3">
                {["/IMG_1.jpg", "/IMG_2.jpg", "/IMG_3.jpg"].map((img, i) => (
                  <Image
                    key={i}
                    src={img}
                    alt=""
                    width={40}
                    height={40}
                    className="rounded-full border-2 border-white"
                  />
                ))}
                <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-white text-xs font-bold text-white">
                  +4K
                </div>
              </div>
              <p className="text-emerald-200 text-sm">Learners across Africa</p>
            </div>

          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-6 md:p-12 lg:p-20 overflow-y-auto">
        <div className="w-full max-w-[500px] space-y-8">
          <div
            className={`text-center ${
              isLogin ? "mt-14 lg:mt-0" : "mt-16 lg:mt-0"
            } lg:text-left space-y-2`}>
            <h2 className="text-3xl font-bold tracking-tight text-stone-900">
              {isLogin ? "Welcome back," : "Plant your roots"}
            </h2>
            <p className="text-stone-500">
              {isLogin
                ? "Enter your details to access your dashboard."
                : "Create an account to start your journey with us."}
            </p>
          </div>

          <div className="grid grid-cols-2 p-1 bg-stone-100 rounded-xl sticky top-18 shadow-md z-40">
            <Link
              href="/login"
              className={`flex items-center justify-center py-2.5 text-sm font-medium rounded-lg transition-all ${
                isLogin
                  ? "bg-primary text-white shadow-sm"
                  : "text-stone-500 hover:text-stone-900"
              }`}>
              Sign In
            </Link>
            <Link
              href="/register"
              className={`flex items-center justify-center py-2.5 text-sm font-medium rounded-lg transition-all ${
                !isLogin
                  ? "bg-primary text-white shadow-sm"
                  : "text-stone-500 hover:text-stone-900"
              }`}>
              Register
            </Link>
          </div>

          {isLogin ? (
            <Form {...loginForm}>
              <form
                onSubmit={loginForm.handleSubmit(onLoginSubmit)}
                className="space-y-6">
                <FormField
                  control={loginForm.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-stone-700 font-medium">
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your email"
                          {...field}
                          className="h-12 border-stone-300 focus:border-green-500 focus:ring-green-500 rounded-xl"
                          disabled={isLoading}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={loginForm.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center justify-between">
                        <FormLabel className="text-stone-700 font-medium">
                          Password
                        </FormLabel>
                        <Link
                          href="https://lms.extensionafrica.com/login/forgot_password.php"
                          className="text-sm text-green-600 hover:text-green-700 hover:underline">
                          Forgot Password?
                        </Link>
                      </div>
                      <FormControl>
                        <div className="relative">
                          <Input
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            {...field}
                            className="h-12 border-stone-300 focus:border-green-500 focus:ring-green-500 rounded-xl pr-12"
                            disabled={isLoading}
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 transition-colors">
                            {showPassword ? (
                              <EyeOff className="h-5 w-5" />
                            ) : (
                              <Eye className="h-5 w-5" />
                            )}
                          </button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full h-12 bg-primary hover:bg-emerald-800 group text-white rounded-xl font-semibold text-base shadow-sm hover:shadow transition-all">
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Signing in...
                    </>
                  ) : (
                    <>
                      Sign In{" "}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>

                {loginForm.formState.errors.root && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-sm text-red-600">
                      {loginForm.formState.errors.root.message}
                    </p>
                  </div>
                )}
              </form>
            </Form>
          ) : (
            <Form {...registerForm}>
              <form
                onSubmit={registerForm.handleSubmit(onRegisterSubmit)}
                className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={registerForm.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
                          First Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="John"
                            {...field}
                            className="bg-white border-stone-200 focus:border-emerald-500 focus:ring-emerald-500/20 rounded-lg"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={registerForm.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
                          Last Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Doe"
                            {...field}
                            className="bg-white border-stone-200 focus:border-emerald-500 focus:ring-emerald-500/20 rounded-lg"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={registerForm.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
                        Username
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="farmer_john"
                          {...field}
                          className="bg-white border-stone-200 focus:border-emerald-500 focus:ring-emerald-500/20 rounded-lg"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={registerForm.control}
                  name="gender"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
                        Gender
                      </FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={(value) => {
                            field.onChange(value);
                          }}
                          defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-white border-stone-200 focus:ring-emerald-500/20 rounded-lg w-full">
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="max-h-60 ">
                            {["Male", "Female", "Other"].map((c) => (
                              <SelectItem key={c} value={c}>
                                {c}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={registerForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="john@farm.com"
                          {...field}
                          className="bg-white border-stone-200 focus:border-emerald-500 focus:ring-emerald-500/20 rounded-lg"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={registerForm.control}
                  name="emailConfirm"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Confirm email"
                          {...field}
                          className="bg-white border-stone-200 focus:border-emerald-500 focus:ring-emerald-500/20 rounded-lg"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={registerForm.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
                        Password
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            type={showPassword ? "text" : "password"}
                            placeholder="••••••••"
                            {...field}
                            className="bg-white border-stone-200 focus:border-emerald-500 focus:ring-emerald-500/20 rounded-lg pr-10"
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 transition-colors">
                            {showPassword ? (
                              <EyeOff className="h-5 w-5" />
                            ) : (
                              <Eye className="h-5 w-5" />
                            )}
                          </button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={registerForm.control}
                    name="occupation"
                    render={({ field }) => (
                      <FormItem className="col-span-1">
                        <FormLabel className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
                          Occupation
                        </FormLabel>
                        <Select
                          onValueChange={(value) => {
                            field.onChange(value);
                            if (value === "Extension Agent") {
                              registerForm.setValue("school", "");
                            }
                          }}
                          value={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-white border-stone-200 focus:ring-emerald-500/20 rounded-lg w-full">
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="max-h-60 ">
                            {options.map((c) => (
                              <SelectItem key={c} value={c}>
                                {c}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={registerForm.control}
                    name="school"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
                          Institution
                          {selectedOccupation === "Student" && (
                            <span className="text-red-500 ml-0.5">*</span>
                          )}
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="University of Ibadan"
                            {...field}
                            disabled={selectedOccupation !== "Student"}
                            className="bg-white border-stone-200 focus:border-emerald-500 focus:ring-emerald-500/20 rounded-lg"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={registerForm.control}
                    name="country"
                    render={({ field }) => (
                      <FormItem className="col-span-1">
                        <FormLabel className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
                          Country
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-white border-stone-200 focus:ring-emerald-500/20 rounded-lg w-full">
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="max-h-60">
                            {countries.map((c) => (
                              <SelectItem key={c} value={c}>
                                {c}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={registerForm.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
                          City
                          {selectedCountry && (
                            <span className="text-red-500 ml-0.5">*</span>
                          )}
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Kano"
                            {...field}
                            disabled={!selectedCountry}
                            className="bg-white border-stone-200 focus:border-emerald-500 focus:ring-emerald-500/20 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="pt-4 flex gap-3">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => registerForm.reset()}
                    disabled={isLoading}
                    className="flex-1 border-stone-300 text-stone-600 hover:bg-stone-50 hover:text-stone-900 rounded-xl h-12">
                    Reset
                  </Button>
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="flex-1 h-12 bg-primary hover:bg-emerald-800 text-white rounded-xl font-semibold shadow-lg shadow-emerald-700/20 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed">
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Creating...</span>
                      </>
                    ) : (
                      <>
                        Create Account{" "}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
              {registerForm.formState.errors.root && (
                <p className="text-red-500 text-sm mb-4 font-medium">
                  {registerForm.formState.errors.root.message}
                </p>
              )}
            </Form>
          )}

          <div className="mt-8 pt-6 border-t border-stone-100 text-center">
            <p className="text-stone-500 text-sm">
              By clicking submit, you agree to our{" "}
              <Link
                href="#"
                className="underline decoration-stone-300 hover:text-emerald-700">
                Terms of Use
              </Link>{" "}
              and{" "}
              <Link
                href="#"
                className="underline decoration-stone-300 hover:text-emerald-700">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
