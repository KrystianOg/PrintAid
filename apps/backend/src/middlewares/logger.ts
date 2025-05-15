import { NextFunction } from "express";
import fs from "fs";
import type { Request, Response } from "express";

export const loggerMiddleware = (
  req: Request,
  _: Response,
  next: NextFunction,
) => {
  const msg = `${new Date().toISOString()} ${req.method} ${req.url}\n`;
  fs.appendFileSync("logs/server.log", msg);
  next();
};
