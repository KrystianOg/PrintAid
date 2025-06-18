import { medusaSdk } from ".";

const list = async () => {
  return await medusaSdk.store.product.list();
};

const retrieve = async (id: string) => {
  return await medusaSdk.store.product.retrieve(id);
};

export const product = {
  list,
  retrieve,
};
