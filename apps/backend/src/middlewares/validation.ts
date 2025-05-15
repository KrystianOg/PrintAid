import { Request, Response, NextFunction } from "express";
import { z, ZodError } from "zod";
import { BadRequestError } from "../utils/errors.js";

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

export const updateUserSchema = z
  .object({
    email: z.string().email().optional(),
    isAdmin: z.boolean().optional(),
  })
  .refine((data) => Object.keys(data).length > 0, {
    message: "At least one field (meail or isAdmin) must be provided",
  });

export function validate(schema: z.ZodSchema<any>) {
  return (req: Request, _res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (err) {
      if (err instanceof ZodError) {
        const message = err.errors.map((e) => e.message).join(", ");
        next(new BadRequestError(message));
      } else {
        next(err);
      }
    }
  };
}
