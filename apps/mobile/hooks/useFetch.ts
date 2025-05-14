import { fetch } from "@/lib/fetch";
import { useCallback, useEffect, useReducer, useRef } from "react";

interface State<T> {
  status: "loading" | "success" | "error";
  data?: T;
  error?: string;
  // TODO: add refetch function
  // refetch: () => T;
}

type Cache<T> = Map<string, T>;

type Action<T> =
  | { type: "loading" }
  | { type: "success"; payload: T }
  | { type: "error"; payload: string };

export const useFetch = <T = unknown>(
  url?: string,
  options?: RequestInit
): State<T> => {
  const cache = useRef<Cache<T>>(new Map());

  const initialState: State<T> = {
    status: "loading",
  };

  const fetchReducer = (state: State<T>, action: Action<T>): State<T> => {
    switch (action.type) {
      case "loading":
        return {
          ...initialState,
          status: "loading",
        };
      case "success":
        return {
          ...initialState,
          status: "success",
          data: action.payload,
        };
      case "error":
        return {
          ...initialState,
          status: "error",
          error: action.payload,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(fetchReducer, initialState);

  const fetchData = useCallback(async (url?: string, options?: RequestInit) => {
    if (!url) {
      return;
    }

    try {
      const response = await fetch<T>(url, options);
      cache.current.set(url, response);
      dispatch({ type: "success", payload: response });
    } catch (error: unknown) {
      if (error instanceof Error) {
        dispatch({ type: "error", payload: error.message });
      } else {
        dispatch({ type: "error", payload: String(error) });
      }
    }
  }, []);

  useEffect(() => {
    if (!url) {
      return;
    }

    const controller = new AbortController();
    const signal = controller.signal;

    dispatch({ type: "loading" });

    if (cache.current.has(url)) {
      dispatch({ type: "success", payload: cache.current.get(url) as T });
      return;
    }

    void fetchData(url, {
      ...options,
      signal,
    });

    return () => {
      controller.abort();
    };
  }, [url, options, fetchData]);

  return state;
};
