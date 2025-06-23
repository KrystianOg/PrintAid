// import { useCart } from "@/stores/cart";
import { View, FlatList, StyleSheet } from "react-native";
import { Text } from "@/components";
import { CartItem } from "@/components/CartItem";
import { useTranslation } from "react-i18next";
import { formatCurrency } from "@/utils/currency";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { typography } from "@/constants/theme";
import { useCart } from "@/hooks/useCart";
import { useQuery } from "@tanstack/react-query";
import { sdk } from "@/lib/medusa";

export default function Cart() {
  const { t, i18n } = useTranslation("cart");

  const { state } = useCart();

  const q = useQuery({
    queryFn: () => sdk.product.list(),
    queryKey: ["product"],
  });

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View>
          {state.items.length ? (
            <FlatList
              data={state.items}
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
