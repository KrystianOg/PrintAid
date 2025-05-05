import { useCart } from "@/stores/cart";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { CartItem } from "@/components/CartItem";
import { globalStyles } from "@/constants/theme";

export default function Cart() {
  const { items } = useCart();

  return (
    <View style={styles.container}>
      {!!items.length ? (
        <FlatList
          data={items}
          renderItem={({ item }) => <CartItem item={item} />}
        />
      ) : (
        <Text style={styles.noItems}>No items in cart</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: globalStyles.flex,
  noItems: {
    fontSize: 18,
  },
});
