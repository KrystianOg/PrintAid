import { Tabs } from "expo-router";
import { useTranslation } from "react-i18next";
import { colors } from "@/constants/colors";
import { Image } from "react-native";

import icon from "@/assets/images/react-logo.png";

// TODO: test if all images are properly loading
export default function Layout() {
  const { t } = useTranslation("tabs");
  const tabs = (["index", "browse", "cart", "settings"] as const).map(
    (tab) => ({
      name: tab,
      title: t(tab),
    })
  );

  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: colors.primary }}>
      {tabs.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: tab.title,
            tabBarIcon: ({ color }) => (
              <Image
                source={icon}
                style={{ width: 24, height: 24, tintColor: color }}
              />
            ),
          }}
        />
      ))}
    </Tabs>
  );
}
