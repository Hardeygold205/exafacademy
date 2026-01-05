"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
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
import { Loader2, ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { toast } from "react-toastify";
import { RegisterUserPayload, registerUser } from "@/lib/api";

const countries = [
  "Nigeria",
  "Ghana",
  "Kenya",
  "South Africa",
  "Egypt",
  "Ethiopia",
  "Tanzania",
  "Uganda",
  "Algeria",
  "Morocco",
  "Angola",
  "Mozambique",
  "Madagascar",
  "Cameroon",
  "Ivory Coast",
  "Niger",
  "Burkina Faso",
  "Mali",
  "Malawi",
  "Zambia",
  "Somalia",
  "Senegal",
  "Chad",
  "Zimbabwe",
  "Guinea",
  "Rwanda",
  "Benin",
  "Tunisia",
  "Burundi",
  "South Sudan",
  "Togo",
  "Sierra Leone",
  "Libya",
  "Liberia",
  "Mauritania",
  "Central African Republic",
  "Eritrea",
  "Gambia",
  "Botswana",
  "Namibia",
  "Gabon",
  "Lesotho",
  "Guinea-Bissau",
  "Equatorial Guinea",
  "Mauritius",
  "Comoros",
  "Cape Verde",
  "Seychelles",
];

const registerSchema = z
  .object({
    username: z.string().min(3).max(50),
    password: z.string().min(6),
    email: z.email(),
    emailConfirm: z.email(),
    firstName: z.string().min(2),
    lastName: z.string().min(2),
    city: z.string().optional(),
    country: z.string({ message: "Select a country" }),
  })
  .refine((data) => data.email === data.emailConfirm, {
    message: "Emails do not match",
    path: ["emailConfirm"],
  });

type RegisterValues = z.infer<typeof registerSchema>;

const DASHBOARD_URL = "https://academy.extensionafrica.com/my";
const LOGIN_ENDPOINT = "https://academy.extensionafrica.com/login/index.php";

function AuthLayout() {
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
    },
  });

  const selectedCountry = registerForm.watch("country");

  async function onRegisterSubmit(values: RegisterValues) {
    setIsLoading(true);
    try {
      const payload: RegisterUserPayload = { ...values };
      const response = await registerUser(payload);
      if (response.userid) {
        toast.success("Registration successful! Redirecting...");
        window.location.href = DASHBOARD_URL;
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Registration Failed";
      toast.error(errorMessage);
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen w-full flex bg-[#FDFCF8] text-stone-800 font-sans selection:bg-green-100">
      <div className="hidden lg:flex lg:w-1/2  bg-emerald-900 flex-col justify-between p-12 overflow-hidden h-screen sticky top-0">
        <div className="absolute inset-0 z-0">
          <Image
            src="/loginpage.jpg"
            alt="Agriculture background"
            fill
            className="object-cover opacity-60 mix-blend-overlay"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-t from-emerald-950 via-emerald-900/80 to-emerald-900/40" />
        </div>

        <div></div>

        <div className="relative z-10 max-w-lg justify-center flex flex-col items-center">
          <div className="space-y-6">
            <h1 className="text-4xl/tight font-bold text-white">
              Cultivating Knowledge, <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-200 to-yellow-200">
                Growing the Future.
              </span>
            </h1>
            <p className="text-emerald-100/80 text-lg leading-relaxed">
              Join the largest network of agricultural professionals. Access
              resources, connect with experts, and drive sustainable growth
              across the continent.
            </p>

            <div className="flex gap-4 pt-4">
              <div className="flex -space-x-3">
                {[
                  { image: "/IMG_1.jpg" },
                  { image: "/IMG_2.jpg" },
                  { image: "/IMG_3.jpg" },
                  { image: "/IMG_4.jpg" },
                ].map(({ image }, index) => (
                  <Image
                    key={image}
                    src={image}
                    alt={`Community member ${index + 1}`}
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full object-cover border-2 border-white"
                  />
                ))}
                <div className="w-10 h-10 rounded-full bg-transparent border-2 border-white flex items-center justify-center text-xs font-bold text-white">
                  +1K
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-emerald-200 text-sm">
                  Joined this month
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 flex justify-between text-emerald-200/60 text-sm">
          <p>© {new Date().getFullYear()} Extension Africa Academy</p>
          <p>Privacy Policy</p>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-6 md:p-12 lg:p-20 overflow-y-auto">
        <div className="w-full max-w-[500px] space-y-8">
          <div
            className={`text-center ${
              isLogin ? "mt-14 lg:mt-0" : "mt-16 lg:mt-0"
            }  lg:text-left space-y-2`}>
            <h2 className="text-3xl font-bold tracking-tight text-stone-900">
              {isLogin ? "Welcome back," : "Plant your roots"}
            </h2>
            <p className="text-stone-500">
              {isLogin
                ? "Enter your details to access your dashboard."
                : "Create an account to start your journey with us."}
            </p>
          </div>

          <div className="grid grid-cols-2 p-1 bg-stone-100 rounded-xl">
            <Link
              href="/login"
              className={`flex items-center justify-center py-2.5 text-sm font-medium rounded-lg transition-all ${
                isLogin
                  ? "bg-white text-stone-900 shadow-sm"
                  : "text-stone-500 hover:text-stone-900"
              }`}>
              Sign In
            </Link>
            <Link
              href="/register"
              className={`flex items-center justify-center py-2.5 text-sm font-medium rounded-lg transition-all ${
                !isLogin
                  ? "bg-white text-stone-900 shadow-sm"
                  : "text-stone-500 hover:text-stone-900"
              }`}>
              Register
            </Link>
          </div>

          {isLogin ? (
            <form action={LOGIN_ENDPOINT} method="POST" className="space-y-5">
              <div className="space-y-2">
                <label
                  htmlFor="username"
                  className="text-stone-700 font-medium block">
                  Username or Email
                </label>
                <Input
                  id="username"
                  name="username"
                  type="text"
                  placeholder="name@example.com"
                  required
                  className="h-12 pl-4 bg-white border-stone-200 focus:border-emerald-500 focus:ring-emerald-500/20 rounded-xl"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-stone-700 font-medium">
                    Password
                  </label>
                  <Link
                    href="https://academy.extensionafrica.com/login/forgot_password.php"
                    target="_blank"
                    className="text-xs font-medium text-primary hover:text-emerald-700 hover:underline">
                    Forgot Password?
                  </Link>
                </div>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="password"
                  required
                  className="h-12 pl-4 bg-white border-stone-200 focus:border-emerald-500 focus:ring-emerald-500/20 rounded-xl"
                />
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-primary hover:bg-emerald-800 text-white rounded-xl font-semibold shadow-lg shadow-emerald-700/20 transition-all">
                Sign In
              </Button>
            </form>
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
                        <Input
                          type="password"
                          placeholder="••••••••"
                          {...field}
                          className="bg-white border-stone-200 focus:border-emerald-500 focus:ring-emerald-500/20 rounded-lg"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

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
                          onValueChange={(value) => {
                            field.onChange(value);
                            registerForm.setValue("city", "");
                          }}
                          defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-white border-stone-200 focus:ring-emerald-500/20 rounded-lg w-full">
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="max-h-60 ">
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
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Lagos"
                            {...field}
                            disabled={!selectedCountry}
                            className="bg-white border-stone-200 focus:border-emerald-500 focus:ring-emerald-500/20 rounded-lg"
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
                    className="flex-1 border-stone-300 text-stone-600 hover:bg-stone-50 hover:text-stone-900 rounded-xl h-12">
                    Reset
                  </Button>
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="flex-2 h-12 bg-primary hover:bg-emerald-800 text-white rounded-xl font-semibold shadow-lg shadow-emerald-700/20 flex items-center justify-center gap-2 group">
                    {isLoading ? (
                      <Loader2 className="animate-spin" />
                    ) : (
                      <>
                        Create Account{" "}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
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
