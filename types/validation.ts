import { z } from "zod";

export const registerSchema = z
  .object({
    username: z
      .string()
      .nonempty({
        message: "Username is required",
      })
      .min(3, "Username must be at least 3 characters and lowercase")
      .max(15)
      .regex(
        /^[a-z0-9._@-]+$/,
        "Username must be lowercase, can only contain letters, numbers, and symbols: (.) (_) (@) (-)"
      )
      .refine((val) => !/\s/.test(val), {
        message: "Username cannot contain spaces",
      }),
    password: z
      .string()
      .nonempty({
        message: "Password is required",
      })
      .min(6, "Password must be at least 6 characters"),
    email: z
      .string()
      .nonempty({
        message: "Email is required",
      })
      .email("Invalid email address")
      .refine((val) => !/\s/.test(val), {
        message: "Email cannot contain spaces",
      }),
    emailConfirm: z
      .string()
      .nonempty({
        message: "Email is required",
      })
      .email("Invalid email address")
      .refine((val) => !/\s/.test(val), {
        message: "Email cannot contain spaces",
      }),
    firstName: z
      .string()
      .nonempty({
        message: "Firstname is required",
      })
      .min(3, "First name must be at least 2 characters")
      .refine((val) => !/\s/.test(val), {
        message: "First name cannot contain spaces",
      }),
    lastName: z
      .string()
      .nonempty({
        message: "lastname is required",
      })
      .min(3, "Last name must be at least 2 characters")
      .refine((val) => !/\s/.test(val), {
        message: "Last name cannot contain spaces",
      }),
    city: z.string().optional(),
    country: z.string().min(1, "Please select a country"),
    gender: z.string().min(1, "Please select a gender"),
    school: z.string().optional(),
    occupation: z.string().nonempty({
      message: "Occupation is required",
    }),
  })
  .refine(
    (data) => {
      if (data.country) {
        return !!data.city && data.city.trim().length > 0;
      }
      return true;
    },
    { message: "Enter your city name", path: ["city"] }
  )
  .refine(
    (data) => {
      if (data.occupation === "Student") {
        return !!data.school && data.school.trim().length > 0;
      }
      return true;
    },
    { message: "Institution is required for students", path: ["school"] }
  )
  .refine((data) => data.email === data.emailConfirm, {
    message: "Emails do not match",
    path: ["emailConfirm"],
  });

export const loginSchema = z.object({
  username: z
    .string()
    .nonempty({
      message: "Email is required",
    })
    .email("Invalid email address")
    .refine((val) => !/\s/.test(val), {
      message: "Email cannot contain spaces",
    }),
  password: z
    .string()
    .nonempty({
      message: "Password is required",
    })
    .min(6, "Password must be at least 6 characters"),
});

export type RegisterValues = z.infer<typeof registerSchema>;
export type LoginValues = z.infer<typeof loginSchema>;
