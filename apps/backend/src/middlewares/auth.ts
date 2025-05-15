import jwt from "jsonwebtoken";
import type { Request, Response, NextFunction } from "express";

declare module "jsonwebtoken" {
  interface JwtPayload {
    userId: string;
  }
}

export const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  const authHeader = req.header("Authorization");
  const token = authHeader?.split(" ")[1];

  if (!token) {
    res.sendStatus(401);
    return;
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET) as jwt.JwtPayload;

    req.user = {
      id: payload.userId,
      isAdmin: payload.isAdmin,
      iat: payload.iat,
      exp: payload.exp,
    };

    next();
  } catch {
    res.sendStatus(403);
  }
};

// FIXME: use real data
export const authorizeAdmin = (
  _req: Request,
  _res: Response,
  next: NextFunction,
) => {
  next();
};
