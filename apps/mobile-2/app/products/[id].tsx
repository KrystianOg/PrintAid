import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { View, Text, StyleSheet } from "react-native";
import type { Product } from "@/types/products";
import { colors, globalStyles, typography } from "@/constants/theme";

export default function ProductDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { t } = useTranslation("product");

  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    setTimeout(() => {
      const product: Product = {
        id,
        name: "Product Name",
        price: 100,
        description: "Product Description",
        category: "Category",
        image: "https://via.placeholder.com/150",
        stock: 10,
        discount: 0,
        availability: "In Stock",
        similar: ["Similar Product 1", "Similar Product 2"],
        related: ["Related Product 1", "Related Product 2"],
        realizationTime: "2 days",
        tags: ["tag1", "tag2"],
        meta: {},
      };

      setProduct(product);
    }, 700);
  }, [id]);

  if (!product) {
    return (
      <View style={[styles.container, globalStyles.center]}>
        <Text style={typography.h5}>{t("loading", { ns: "common" })}</Text>
      </View>
    );
  }

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
      <Text style={styles.typo}>
        {t("price")}: {product.price}
      </Text>
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
    backgroundColor: colors.backgroundBlue,
    height: 200,
    width: "100%",
  },
  typo: {
    ...typography.h5,
    color: colors.primary,
  },
});
