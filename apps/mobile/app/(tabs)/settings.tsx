import { Button } from "@/components/Button";
import { useTranslation } from "react-i18next";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Appearance, StyleSheet, Text, useColorScheme } from "react-native";
import { useLightDark } from "@/constants/theme";

export default function Settings() {
  const { t, i18n } = useTranslation("settings");
  const colorScheme = useColorScheme();

  const changeLanguage = () => {
    void i18n.changeLanguage(i18n.language === "en" ? "pl" : "en");
  };

  const toggleTheme = () => {
    // Implement theme toggling logic here
    const currentTheme = Appearance.getColorScheme();
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    Appearance.setColorScheme(newTheme);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={[
          styles.container,
          {
            backgroundColor: useLightDark("background"),
          },
        ]}
      >
        <Button title={t("changeLanguage")} onPress={changeLanguage} />
        <Button title={t("toggleTheme")} onPress={toggleTheme} />
        <Text>theme: {colorScheme}</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});
