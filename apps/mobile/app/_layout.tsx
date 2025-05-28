import { Stack } from "expo-router";
import "@/lang/i18n";
import { QueryClientProvider } from "@tanstack/react-query";
import { useColorScheme, View } from "react-native";
import { queryClient } from "@/lib/react-query";
import { StyleSheet } from "react-native";

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const backgroundColor = colorScheme === "dark" ? "#000" : "#fff";
  return (
    <QueryClientProvider client={queryClient}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
