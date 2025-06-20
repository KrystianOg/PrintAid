import { z } from "zod";

export const registerSchema = z.object({
  email: z.string().email({ message: "Invalid email addrss" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
});

export const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(1, { message: "Password is required" }),
});

type RegisterDTO = z.infer<typeof registerSchema>;
