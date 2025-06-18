// import { useCart } from "@/stores/cart";
import { View, FlatList, StyleSheet } from "react-native";
import { Text } from "@/components";
import { CartItem } from "@/components/CartItem";
import { useTranslation } from "react-i18next";
import { formatCurrency } from "@/utils/currency";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ProductCartItem } from "@/types/products";
import { typography } from "@/constants/theme";

export default function Cart() {
  const { t, i18n } = useTranslation("cart");
  // const { items } = useCart();
  const items: ProductCartItem[] = [
    {
      id: "1",
      name: "Product 1",
      prices: [
        {
          amount: 10.99,
          currency: "PLN",
        },
        {
          amount: 2.99,
          currency: "EUR",
        },
      ],
      quantity: 1,
      description: "Description 1",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View>
          {items.length ? (
            <FlatList
              data={items}
              renderItem={({ item }) => <CartItem item={item} />}
            />
          ) : (
            <Text style={typography.h5}>{t("noItems")}</Text>
          )}
        </View>
        <View>
          <View>
            <Text>{t("subtotal")}</Text>
            <Text>{formatCurrency(i18n.language).format(10.99)}</Text>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const styles = StyleSheet.create({});
