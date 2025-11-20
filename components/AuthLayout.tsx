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
import { Loader2 } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "sonner";
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
  "Eswatini",
  "Djibouti",
  "Comoros",
  "Cape Verde",
  "Sao Tome and Principe",
  "Seychelles",
];

// Login Schema
const loginSchema = z.object({
  usernameOrEmail: z
    .string()
    .min(3, { message: "Username or email must be at least 3 characters" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

// Register Schema
const registerSchema = z
  .object({
    username: z
      .string()
      .min(3, { message: "Username must be at least 3 characters" })
      .max(50, { message: "Username must not exceed 50 characters" }),
    password: z
      .string()
      .min(6, { message: "The password must have at least 6 characters" }),
    email: z.email({ message: "Please enter a valid email address" }),
    emailConfirm: z.email({ message: "Please enter a valid email address" }),
    firstName: z
      .string()
      .min(2, { message: "First name must be at least 2 characters" }),
    lastName: z
      .string()
      .min(2, { message: "Last name must be at least 2 characters" }),
    city: z.string().optional(),
    country: z.string({ message: "Please select a country" }),
  })
  .refine((data) => data.email === data.emailConfirm, {
    message: "Email addresses don't match",
    path: ["emailConfirm"],
  });

type LoginValues = z.infer<typeof loginSchema>;
type RegisterValues = z.infer<typeof registerSchema>;

function AuthLayout() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();
  const isLogin = pathname === "/login";

  const loginForm = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      usernameOrEmail: "",
      password: "",
    },
  });

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

  async function onLoginSubmit(values: LoginValues) {
    setIsLoading(true);
    try {
      console.log("Login:", values);
      await new Promise((resolve) => setTimeout(resolve, 2000));
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function onRegisterSubmit(values: RegisterValues) {
    setIsLoading(true);
    try {
      const payload: RegisterUserPayload = {
        username: values.username,
        password: values.password,
        email: values.email,
        firstName: values.firstName,
        lastName: values.lastName,
        city: values.city,
        country: values.country,
      };

      const response = await registerUser(payload);
      console.log(response);

      if (response.userid) {
        toast.success("Registration successful!", {
          description: `Welcome ${values.username}!`,
        });
        router.push("/login");
      }
      console.log("registeration successful");
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Registration failed. Please try again.";

      toast.error("Registration Failed", {
        description: errorMessage,
      });

      console.error("Registration error:", error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="w-full min-h-screen h-screen overflow-hidden pt-16 lg:pt-0">
      <div className="grid grid-cols-1 lg:grid-cols-3 h-full">
        <div className="relative hidden lg:block h-full col-span-2">
          <Image
            src="/loginpage.jpg"
            alt={isLogin ? "Login page" : "Registration page"}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="fixed inset-0 lg:hidden w-full h-full z-0">
          <Image
            src="/loginpage.jpg"
            alt={isLogin ? "Login page" : "Registration page"}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="relative lg:static flex items-center justify-center h-full col-span-1 z-10 px-4 py-6 lg:py-0 lg:px-0 overflow-hidden">
          <div className="w-full max-w-md lg:max-w-lg h-full flex items-center">
            <div className="w-full bg-white rounded-lg shadow-2xl lg:shadow-none overflow-hidden flex flex-col max-h-[calc(100vh-140px)] lg:max-h-[calc(100vh-140px)]">
              <div
                className={`px-6 pb-4 shrink-0 bg-white ${
                  isLogin ? "pt-6" : "pt-6 lg:pt-12"
                }`}>
                <div className="text-center">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900">
                    {isLogin ? "Welcome Back" : "Create Your Account"}
                  </h2>
                  <p className="mt-2 text-xs sm:text-sm lg:text-base text-gray-600">
                    {isLogin
                      ? "Enter your credentials to access your account"
                      : "Join Africa Extension Academy today"}
                  </p>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto px-6 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 pb-16 lg:pb-0">
                {isLogin ? (
                  <Form {...loginForm}>
                    <form
                      action="https://academy.extensionafrica.com/login/index.php"
                      method="POST"
                      onSubmit={loginForm.handleSubmit(onLoginSubmit)}
                      className="space-y-5">
                      <FormField
                        control={loginForm.control}
                        name="usernameOrEmail"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-900 font-semibold text-sm">
                              Username or Email{" "}
                              <span className="text-red-500">*</span>
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter your username or email"
                                {...field}
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                              />
                            </FormControl>
                            <FormMessage className="text-xs" />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={loginForm.control}
                        name="password"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-900 font-semibold text-sm">
                              Password <span className="text-red-500">*</span>
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="password"
                                placeholder="Enter your password"
                                {...field}
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                              />
                            </FormControl>
                            <FormMessage className="text-xs" />
                          </FormItem>
                        )}
                      />

                      <div className="flex items-center justify-end">
                        <div className="text-sm">
                          <Link
                            href="/https://academy.extensionafrica.com/login/forgot_password.php"
                            className="text-primary font-semibold hover:underline">
                            Forgot password?
                          </Link>
                        </div>
                      </div>

                      <Button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-2.5 px-4 rounded-md transition duration-300 text-sm">
                        {isLoading ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Logging in...
                          </>
                        ) : (
                          "Login"
                        )}
                      </Button>

                      <p className="text-center text-xs sm:text-sm text-gray-600 mt-4">
                        Don&apos;t have an account?{" "}
                        <Link
                          href="/register"
                          className="text-primary font-semibold hover:underline">
                          Register here
                        </Link>
                      </p>
                    </form>
                  </Form>
                ) : (
                  /* Register Form */
                  <Form {...registerForm}>
                    <form
                      onSubmit={registerForm.handleSubmit(onRegisterSubmit)}
                      className="space-y-3">
                      <FormField
                        control={registerForm.control}
                        name="username"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-900 font-semibold text-xs">
                              Username <span className="text-red-500">*</span>
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter your username"
                                {...field}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                              />
                            </FormControl>
                            <FormMessage className="text-xs" />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={registerForm.control}
                        name="password"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-900 font-semibold text-xs">
                              Password <span className="text-red-500">*</span>
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="password"
                                placeholder="Enter your password"
                                {...field}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                              />
                            </FormControl>
                            <FormMessage className="text-xs" />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={registerForm.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-900 font-semibold text-xs">
                              Email address{" "}
                              <span className="text-red-500">*</span>
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="Enter your email"
                                {...field}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                              />
                            </FormControl>
                            <FormMessage className="text-xs" />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={registerForm.control}
                        name="emailConfirm"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-900 font-semibold text-xs">
                              Email (again){" "}
                              <span className="text-red-500">*</span>
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="Confirm your email"
                                {...field}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                              />
                            </FormControl>
                            <FormMessage className="text-xs" />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={registerForm.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-900 font-semibold text-xs">
                              First name <span className="text-red-500">*</span>
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter your first name"
                                {...field}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                              />
                            </FormControl>
                            <FormMessage className="text-xs" />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={registerForm.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-900 font-semibold text-xs">
                              Last name <span className="text-red-500">*</span>
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter your last name"
                                {...field}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                              />
                            </FormControl>
                            <FormMessage className="text-xs" />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={registerForm.control}
                        name="city"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-900 font-semibold text-xs">
                              City/town
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter your city"
                                {...field}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                              />
                            </FormControl>
                            <FormMessage className="text-xs" />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={registerForm.control}
                        name="country"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-900 font-semibold text-xs">
                              Country <span className="text-red-500">*</span>
                            </FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm">
                                  <SelectValue placeholder="Select a country" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className="max-h-60">
                                {countries.map((country) => (
                                  <SelectItem key={country} value={country}>
                                    {country}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage className="text-xs" />
                          </FormItem>
                        )}
                      />

                      <div className="flex flex-col sm:flex-row gap-2 pt-3">
                        <Button
                          type="submit"
                          disabled={isLoading}
                          className="flex-1 bg-green-700 hover:bg-green-800 text-white font-semibold py-2.5 px-4 rounded-md transition duration-300 text-sm">
                          {isLoading ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              Creating account...
                            </>
                          ) : (
                            "Create my new account"
                          )}
                        </Button>
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => registerForm.reset()}
                          className="flex-1 border-2 border-gray-300 bg-white text-gray-700 font-semibold py-2.5 px-4 rounded-md hover:bg-gray-50 transition duration-300 text-sm">
                          Cancel
                        </Button>
                      </div>

                      <p className="text-center text-xs text-gray-600 mt-3">
                        Already have an account?{" "}
                        <Link
                          href="/login"
                          className="text-primary font-semibold hover:underline">
                          Login here
                        </Link>
                      </p>
                    </form>
                  </Form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
