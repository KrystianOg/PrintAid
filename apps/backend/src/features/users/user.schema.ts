import { z } from "zod";

export const updateUserSchema = z
  .object({
    email: z.string().email().optional(),
    isAdmin: z.boolean().optional(),
  })
  .refine((data) => Object.keys(data).length > 0, {
    message: "At least one field (meail or isAdmin) must be provided",
  });
