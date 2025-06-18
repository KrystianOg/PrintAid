import { medusaSdk } from ".";

const byHandle = async (handle: string) => {
  const res = await medusaSdk.store.collection.list({
    handle,
    fields: "*products",
  });

  const collection = res.collections[0];

  return collection;
};

const byId = async (id: string) => {
  return await medusaSdk.store.collection.retrieve(id);
};

export const collection = {
  byHandle,
  byId,
} as const;
