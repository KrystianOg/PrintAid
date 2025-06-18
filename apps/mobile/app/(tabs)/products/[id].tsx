import { useLocalSearchParams } from "expo-router";
import { useTranslation } from "react-i18next";
import { View, StyleSheet, Image, ScrollView, Alert } from "react-native";
import { Text } from "@/components";
import { globalStyles, typography } from "@/constants/theme";
// import { formatCurrency } from "@/utils/currency";
import { useQuery } from "@tanstack/react-query";
import { sdk } from "@/lib/medusa";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function ProductDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { t } = useTranslation(["product", "common"]);

  const { data } = useQuery({
    queryFn: () => sdk.product.retrieve(id),
    queryKey: ["product", id],
  });

  const product = data?.product;

  const handleAddToCart = () => {
    Alert.alert(
      t("addToCart"),
      t("productAddedToCart"),
      [{ text: t("ok"), style: "default" }],
      { cancelable: true }
    );
  };

  if (!product) {
    return (
      <View style={[styles.container, globalStyles.center]}>
        <Text style={typography.h5}>{t("loading", { ns: "common" })}</Text>
      </View>
    );
  }

  // const formattedPrice = amount
  //   ? formatCurrency(i18n.language).format(amount)
  //   : undefined;
  //

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.typo}>{product.title}</Text>
            <Image
              source={{ uri: product.thumbnail ?? undefined }}
              width={300}
              height={300}
            />
            {/* 
        {!!formattedPrice && (
          <Text style={styles.typo}>
            {t("price")}: {formattedPrice}
          </Text>
        )}
      */}
            <Text style={styles.content}>
              {t("description")} {product.description}
            </Text>
            {product.categories && product.categories.length > 0 && (
              <Text style={styles.typo}>
                {t("category")}{" "}
                {product.categories.map((v) => v.name).join(", ")}
              </Text>
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  content: {
    ...typography.body1,
  },
  typo: {
    ...typography.h5,
  },
});
