type Fetch = typeof globalThis.fetch;
type FetchParams = Parameters<Fetch>;

const _fetch = async <T>(input: FetchParams[0], init?: FetchParams[1]) => {
  const _input =
    typeof input === "string"
      ? new URL(input, process.env.EXPO_PUBLIC_API_URL)
      : input;

  const result = await globalThis.fetch(_input, init);

  const data = (await result.json()) as T;

  if (!result.ok) {
    throw new Error(`Error ${result.status}: ${result.statusText}`);
  }

  return data;
};

export { _fetch as fetch };
