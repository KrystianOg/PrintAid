import { medusaSdk } from ".";

// FIXME: typesafe this
export const search = async (searchString: string) => {
  const res = await medusaSdk.client.fetch("/store/search", {
    query: {
      s: searchString,
    },
  });

  return res;
};
