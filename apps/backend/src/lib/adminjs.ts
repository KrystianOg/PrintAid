import AdminJS from "adminjs";
import { Adapter, Database, Resource } from "@adminjs/sql";
import AdminJSExpress from "@adminjs/express";

AdminJS.registerAdapter({
  Database,
  Resource,
});

export const db = await new Adapter("postgresql", {
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
}).init();

const META = {
  created_at: { isVisible: { edit: false } },
  updated_at: { isVisible: { edit: false } },
  deleted_at: { isVisible: { edit: false } },
};

const licenseTypes = [
  "CC-BY",
  "CC-BY-SA",
  "CC-BY-NC",
  "CC-BY-NC-SA",
  "CC0",
  "Proprietary",
  "Other",
] as const;
export type LicenseType = (typeof licenseTypes)[number];

export const admin = new AdminJS({
  resources: [
    {
      resource: db.table("users"),
      options: {
        properties: {
          ...META,
          email: {
            isTitle: true,
          },
        },
      },
    },
    {
      resource: db.table("products"),
      options: {
        properties: {
          ...META,
          tsv: { isVisible: { edit: false } },
          id: {
            isVisible: { list: true, filter: true, show: true, edit: false },
          },
          license_type: {
            availableValues: licenseTypes.map((v) => ({ value: v, label: v })),
          },
          created_by: {
            isVisible: { edit: false },
            description: "Creator id",
          },
          material: {
            isVisible: { edit: false },
          },
        },
      },
    },
    {
      resource: db.table("product_media"),
      options: {
        properties: {
          ...META,
        },
      },
    },
    {
      resource: db.table("orders"),
      options: {
        properties: {
          ...META,
        },
      },
    },
    {
      resource: db.table("order_items"),
      options: {
        properties: {
          ...META,
        },
      },
    },
  ],
});

const ADMIN = {
  email: "test@example.com",
  password: "password",
};

export const adminRouter = AdminJSExpress.buildAuthenticatedRouter(admin, {
  authenticate: async (email: string, password: string) => {
    if (ADMIN.email === email && ADMIN.password === password) {
      return Promise.resolve(ADMIN);
    }
    return null;
  },
  cookiePassword: "sessionsecret",
  cookieName: "admin",
});

export const _adminRouter = AdminJSExpress.buildRouter(admin);
