import type { JwtPayload } from "jsonwebtoken";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      readonly DB_HOST: string;
      readonly DB_PORT: string;
      readonly DB_USER: string;
      readonly DB_PASS: string;
      readonly DB_NAME: string;
      readonly DATABASE_URL?: string;

      readonly PORT: number;
      readonly NODE_ENV: "development" | "production" | "test" | ({} & string);
      readonly JWT_SECRET: string;
      readonly FRONTEND_URL: string;

      readonly EMAIL_FROM: string;
    }
  }
}

declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string;
        isAdmin: boolean;
        iat: JwtPayload["iat"];
        exp: JwtPayload["exp"];
      };
    }
  }
}

export { };
