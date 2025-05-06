import { useLocalSearchParams } from "expo-router";
import { useTranslation } from "react-i18next";
import { View, Text, StyleSheet } from "react-native";
import type { Product } from "@/types/products";
import { colors, globalStyles, typography } from "@/constants/theme";
import { formatCurrency, supportedLocalesCurrencyMap } from "@/utils/currency";
import { useFetch } from "@/hooks/useFetch";

export default function ProductDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { t, i18n } = useTranslation("product");

  const { data: product } = useFetch<Product>(`/products/${id}`);

  if (!product) {
    return (
      <View style={[styles.container, globalStyles.center]}>
        <Text style={typography.h5}>{t("loading", { ns: "common" })}</Text>
      </View>
    );
  }

  const amount = product.prices.find(
    (p) => p.currency === supportedLocalesCurrencyMap[i18n.language]
  )?.amount;

  const formattedPrice = amount
    ? formatCurrency(i18n.language).format(amount)
    : undefined;

  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Text style={styles.image}>
          {/* FIXME: replace with real image */}
          Placeholder for image
        </Text>
      </View>
      <Text style={styles.typo}>
        {t("name")} {product.name}
      </Text>
      {!!formattedPrice && (
        <Text style={styles.typo}>
          {t("price")}: {formattedPrice}
        </Text>
      )}
      <Text style={styles.typo}>
        {t("description")} {product.description}
      </Text>
      <Text style={styles.typo}>
        {t("category")} {product.category}
      </Text>
      <Text style={styles.typo}>
        {t("similar")} {product.similar.join(", ")}
      </Text>
      <Text style={styles.typo}>
        {t("related")} {product.related.join(", ")}
      </Text>
      {!!product.realizationTime && (
        <Text style={styles.typo}>
          {t("realizationTime")} {product.realizationTime}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  image: {
    height: 200,
    width: "100%",
  },
  typo: {
    ...typography.h5,
    color: colors.primary,
  },
});
