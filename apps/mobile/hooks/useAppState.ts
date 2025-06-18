import { useEffect } from "react";
import { AppState, AppStateStatus } from "react-native";

export const useAppState = (listener?: (state: AppStateStatus) => void) => {
  useEffect(() => {
    const subscription = AppState.addEventListener("change", (nextAppState) => {
      if (listener) {
        listener(nextAppState);
      }
    });

    return () => {
      subscription.remove();
    };
  }, [listener]);
};
