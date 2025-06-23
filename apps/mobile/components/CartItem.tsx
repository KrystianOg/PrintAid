import { View, StyleSheet, Pressable } from "react-native";
import { Text } from "@/components/Text";
import { typography, spacing, useLightDark, colors } from "@/constants/theme";

import PlusIcon from "@/assets/icons/lucide--plus.svg";
import MinusIcon from "@/assets/icons/lucide--minus.svg";
import { CartItem as CCartItem } from "@/contexts/CartContext";
import { useCart } from "@/hooks/useCart";
import * as Haptics from "expo-haptics";
import { useTranslation } from "react-i18next";

interface CartItemProps {
  item: CCartItem;
}

export const CartItem = ({ item }: CartItemProps) => {
  const { t } = useTranslation("cart");
  const { updateQuantity } = useCart();

  const handleUpdateQuantity = (diff: number) => {
    updateQuantity(item.id, item.quantity + diff);
    void Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  };
  return (
    <View style={styles.container}>
      <View style={styles.name}>
        <Text style={typography.h6}>{item.name}</Text>
        {item.price > 0 && <Text style={typography.h6}>{item.price}</Text>}
      </View>
      <View style={styles.quantityContainer}>
        <Text style={typography.h6}>
          {t("quantity")} {item.quantity}
        </Text>
      </View>
      <View style={styles.buttonGroup}>
        <Pressable
          style={styles.button}
          onPress={() => {
            handleUpdateQuantity(1);
          }}
        >
          <PlusIcon width={32} color={useLightDark("white")} />
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => {
            handleUpdateQuantity(-1);
          }}
        >
          <MinusIcon width={32} color={useLightDark("white")} />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: colors.text,
    borderRadius: spacing.sm,
    height: spacing.lg,
    justifyContent: "center",
    marginTop: spacing.sm,
    padding: spacing.md,
    width: spacing.lg,
  },
  buttonGroup: {
    display: "flex",
    flexDirection: "row",
    gap: spacing.sm,
    paddingHorizontal: spacing.md,
  },
  container: {
    borderBottomColor: colors.gray,
    borderBottomWidth: 1,
    flex: 1,
    flexDirection: "row",
  },
  name: {
    flex: 1,
    padding: spacing.sm,
  },
  quantityContainer: {
    padding: spacing.sm,
  },
});
