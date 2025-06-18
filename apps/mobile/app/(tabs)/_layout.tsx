import { Tabs } from "expo-router";
import { useTranslation } from "react-i18next";

import HomeIcon from "@/assets/icons/lucide--home.svg";
import CartIcon from "@/assets/icons/lucide--shopping-cart.svg";
import SettingsIcon from "@/assets/icons/lucide--settings.svg";
import BrowseIcon from "@/assets/icons/lucide--search.svg";
import { useLightDark } from "@/constants/theme";

// TODO: test if all images are properly loading
export default function Layout() {
  const { t } = useTranslation("tabs");

  const tabs = [
    {
      name: "index",
      title: t("index"),
      Icon: HomeIcon,
    },
    {
      name: "browse",
      title: t("browse"),
      Icon: BrowseIcon,
    },
    {
      name: "cart",
      title: t("cart"),
      Icon: CartIcon,
    },
    {
      name: "settings",
      title: t("settings"),
      Icon: SettingsIcon,
    },
  ];

  return (
    <Tabs
      screenOptions={{
        sceneStyle: {
          backgroundColor: useLightDark("background"),
        },
        tabBarActiveTintColor: useLightDark("primary"),
        headerShown: false,
        tabBarStyle: {
          backgroundColor: useLightDark("background"),
          borderTopWidth: 0,
        },
        tabBarLabelStyle: {
          color: useLightDark("text"),
        },
      }}
    >
      {tabs.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: tab.title,
            tabBarIcon: ({ color }) => <tab.Icon height={24} color={color} />,
          }}
        />
      ))}
      <Tabs.Screen name="products/[id]" options={{ href: null }} />
      <Tabs.Screen name="categories/[id]" options={{ href: null }} />
    </Tabs>
  );
}
