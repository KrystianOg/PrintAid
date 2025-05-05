type Fetch = typeof globalThis.fetch;
type FetchParams = Parameters<Fetch>;

const _fetch = async <T>(input: FetchParams[0], init?: FetchParams[1]) => {
  const _input =
    typeof input === "string" ? new URL(input, process.env.API_URL) : input;

  const result = await globalThis.fetch(_input, init);

  const data = await result.json();

  if (!result.ok) {
    throw new Error(
      `Error ${result.status}: ${data.message || data.error || "Unknown error"}`
    );
  }

  return data as T;
};

export { _fetch as fetch };
