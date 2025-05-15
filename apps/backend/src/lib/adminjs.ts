import AdminJS from "adminjs";
import { Adapter, Database, Resource } from "@adminjs/sql";
import AdminJSExpress from "@adminjs/express";

AdminJS.registerAdapter({
  Database,
  Resource,
});

export const db = await new Adapter("postgresql", {
  connectionString: process.env.DATABASE_URL,
  database: process.env.DATABASE_NAME,
}).init();

export const admin = new AdminJS({
  resources: [{ resource: db.table("users"), options: {} }],
});

export const adminRouter = AdminJSExpress.buildAuthenticatedRouter(admin, {
  authenticate: async (email: string, password: string) => {
    if (email && password) {
      return true;
    }
    return false;
  },
  cookiePassword: "",
  cookieName: "admin",
});
