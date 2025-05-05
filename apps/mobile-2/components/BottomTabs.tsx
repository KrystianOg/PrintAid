import { Link } from "expo-router";
import { View } from "react-native";
import type { Href } from "expo-router";
import { StyleSheet } from "react-native";

//eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface BottomTabsProps {}

type Tab = {
  name: string;
  icon: string;
  href: Href;
};

export const ButtonTabs = ({}: BottomTabsProps) => {
  const tabs: Tab[] = [
    { name: "Home", icon: "home", href: "/" },
    { name: "Browse", icon: "search", href: "/browse" },
    { name: "Cart", icon: "shopping-cart", href: "/cart" },
    { name: "Settings", icon: "cog", href: "/settings" },
  ];

  return (
    <View style={styles.container}>
      {tabs.map((tab) => (
        <View key={tab.name}>
          <Link href={tab.href}>{tab.name}</Link>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    bottom: 0,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
  },
});
