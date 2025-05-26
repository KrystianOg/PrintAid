import type { SubscriberArgs, SubscriberConfig } from "@medusajs/framework";
import { Modules } from "@medusajs/framework/utils";
import {
  INotificationModuleService,
  ProductDTO,
} from "@medusajs/framework/types";

export default async function productCreateHandler({
  event: { data },
  container,
}: SubscriberArgs<{ id: string }>) {
  const notificationModuleService: INotificationModuleService =
    container.resolve(Modules.NOTIFICATION);

  const product = await container.resolve("product").retrieveProduct(data.id);

  const res = await notificationModuleService.createNotifications({
    to: "krystian@ogonowski.it",
    channel: "email",
    template: "product-created",
    data: {
      product,
    },
  });
}

export const config: SubscriberConfig = {
  event: "product.created",
};
