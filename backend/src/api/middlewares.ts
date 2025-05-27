import { defineMiddlewares } from "@medusajs/framework";
import { z } from "zod";

export default defineMiddlewares({
  routes: [
    {
      method: "POST",
      matcher: "/admin/products",
      additionalDataValidator: {
        custom_name: z.string().optional(),
      },
    },
    {
      method: "POST",
      matcher: "/admin/products/:id",
      additionalDataValidator: {
        custom_name: z.string().nullish(),
      },
    },
  ],
});
