import { Request, Response, NextFunction } from "express";
import { z, ZodError } from "zod";
import { BadRequestError } from "../utils/errors.js";

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
