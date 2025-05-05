import type { CartItem as CartItemType } from "@/stores/cart";
import { View, Text, StyleSheet } from "react-native";
import { colors, typography, spacing } from "@/constants/theme";

interface CartItemProps {
  item: CartItemType;
}

export const CartItem = ({ item }: CartItemProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.name}>
        <Text style={typography.h6}>{item.name}</Text>
        <Text style={typography.h6}>{item.price}</Text>
      </View>
      <View style={styles.quantityContainer}>
        <Text style={typography.h6}>Quantity: {item.quantity}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomColor: colors.gray,
    borderBottomWidth: 1,
    flex: 1,
    flexDirection: "row",
  },
  name: {
    flex: 1,
    padding: spacing(2.5),
  },
  quantityContainer: {
    padding: spacing(2.5),
  },
});
