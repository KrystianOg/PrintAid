import type { JwtPayload } from "jsonwebtoken";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      readonly DATABASE_URL: string;
      readonly DATABASE_NAME: string;
      readonly JWT_SECRET: string;
      readonly FRONTEND_URL: string;
      readonly PORT: number;
      readonly NODE_ENV: "development" | "production" | "test" | ({} & string);
    }
  }
}

declare module "express" {
  interface Request {
    user?: {
      id: string;
      isAdmin: boolean;
      iat: JwtPayload["iat"];
      exp: JwtPayload["exp"];
    };
  }
}

export { };
