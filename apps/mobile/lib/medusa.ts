import Medusa from "@medusajs/js-sdk";

const POPULAR_COLLECTION_ID = "pcol_01JWBMCT5XX0EZD5BKYBYVA12J";

export const sdk = new Medusa({
  baseUrl: process.env.EXPO_PUBLIC_API_URL,
  debug: process.env.NODE_ENV === "development",
  publishableKey: process.env.EXPO_PUBLIC_API_KEY,
});

export const getPopularProducts = async () => {
  const res = await sdk.store.product.list({
    collection_id: POPULAR_COLLECTION_ID,
  });

  return res.products;
};

export const getProducts = async () => {
  const res = await sdk.store.product.list();

  return res.products;
};

export const getProduct = async (id: string) => {
  const res = await sdk.store.product.retrieve(id);

  return res.product;
};

export const getCategories = async () => {
  const res = await sdk.store.category.list();

  return res.product_categories;
};

export const search = async (searchString: string) => {
  const res = await sdk.client.fetch("/store/search", {
    query: {
      s: searchString,
    },
  });

  return res;
};
