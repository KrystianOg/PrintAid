import { NextFunction } from "express";
import fs from "fs";
import type { Request, Response } from "express";

export const loggerMiddleware = (
  req: Request,
  _: Response,
  next: NextFunction,
) => {
  const code = _.statusCode;
  const msg = `${new Date().toISOString()} ${req.method} ${req.url} ${code}\n`;
  fs.appendFileSync("logs/server.log", msg);
  next();
};
