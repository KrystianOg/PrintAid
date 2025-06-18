import { medusaSdk } from ".";

const byHandle = async (handle: string) => {
  const res = await medusaSdk.store.category.list({
    handle,
  });

  const category = res.product_categories[0];

  return category;
};

const byId = async (id: string) => {
  return await medusaSdk.store.category.retrieve(id);
};

export const list = async () => {
  return await medusaSdk.store.category.list();
};

export const category = {
  byHandle,
  byId,
  list,
} as const;
