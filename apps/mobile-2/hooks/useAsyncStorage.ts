import AsyncStorage from "@react-native-async-storage/async-storage";
import { SetStateAction, useCallback, useEffect, useState } from "react";

export const useAsyncStorage = <T>(key: string, defaultValue: T) => {
  const [state, _setState] = useState<T>(defaultValue);

  const getItem = useCallback(async (): Promise<T | undefined> => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        const parsedValue = JSON.parse(value);
        return parsedValue;
      }
    } catch (err) {
      console.error(err);
      return undefined;
    }
  }, [key]);

  useEffect(() => {
    getItem().then((value) => {
      _setState(value ?? defaultValue);
    });
  }, [getItem, defaultValue]);

  const setState = useCallback(
    async (value: SetStateAction<T>) => {
      _setState(value);
      try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(key, jsonValue);
      } catch (e) {
        console.error(e);
      }
    },
    [key]
  );

  return [state, setState] as const;
};
