import { medusaSdk } from ".";

declare module "@medusajs/types" {
  interface StoreProduct {
    metadata?: {
      license?: string | undefined;
      printables_url?: string | undefined;
    };
  }
}

const list = async () => {
  return await medusaSdk.store.product.list();
};

const retrieve = async (id: string) => {
  return await medusaSdk.store.product.retrieve(id, {
    fields: "*categories,+metadata",
  });
};

export const product = {
  list,
  retrieve,
};
