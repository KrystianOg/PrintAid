import { View, StyleSheet, Pressable } from "react-native";
import { Text } from "@/components/Text";
import { typography, spacing, useLightDark, colors } from "@/constants/theme";
import { ProductCartItem } from "@/types/products";

import PlusIcon from "@/assets/icons/lucide--plus.svg";
import MinusIcon from "@/assets/icons/lucide--minus.svg";

interface CartItemProps {
  item: ProductCartItem;
}

export const CartItem = ({ item }: CartItemProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.name}>
        <Text style={typography.h6}>{item.name}</Text>
        {/* <Text style={typography.h6}>{item.price}</Text> */}
      </View>
      <View style={styles.quantityContainer}>
        <Text style={typography.h6}>Quantity: {item.quantity}</Text>
      </View>
      <View style={styles.buttonGroup}>
        <Pressable style={styles.button}>
          <PlusIcon width={32} color={useLightDark("white")} />
        </Pressable>
        <Pressable style={styles.button}>
          <MinusIcon width={32} color={useLightDark("white")} />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: colors.primary,
    borderRadius: 8,
    height: spacing(5.5),
    justifyContent: "center",
    marginTop: spacing(2),
    width: spacing(5.5),
  },
  buttonGroup: {
    display: "flex",
    flexDirection: "row",
    gap: spacing(1),
    paddingHorizontal: spacing(2.5),
  },
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
