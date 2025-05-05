import { Link } from "expo-router";
import { View } from "react-native";

//eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface BottomTabsProps {}

export const ButtonTabs = ({}: BottomTabsProps) => {
  const tabs = [
    { name: "Home", icon: "home", href: "/" },
    { name: "Browse", icon: "search", href: "/browse" },
    { name: "Cart", icon: "shopping-cart", href: "/cart" },
    { name: "Settings", icon: "cog", href: "/settings" },
  ];

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {tabs.map((tab) => (
        <View key={tab.name}>
          <Link href="/">{tab.name}</Link>
        </View>
      ))}
    </View>
  );
};
