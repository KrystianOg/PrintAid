import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { View, Text } from "react-native";
import type { Product } from "@/types/products";

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
        rating: 4.5,
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
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 24 }}>{t("loading", { ns: "common" })}</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <View
        style={{ width: "100%", height: 200, backgroundColor: "lightblue" }}
      >
        <Text
          style={{
            fontSize: 24,
            textAlign: "center",
            marginTop: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* FIXME: replace with real image */}
          Placeholder for image
        </Text>
      </View>
      <Text style={{ fontSize: 16 }}>
        {t("name")} {product.name}
      </Text>
      <Text style={{ fontSize: 16 }}>
        {t("price")}: {product.price}
      </Text>
      <Text style={{ fontSize: 16 }}>
        {t("description")} {product.description}
      </Text>
      <Text style={{ fontSize: 16 }}>
        {t("category")} {product.category}
      </Text>
      <Text style={{ fontSize: 16 }}>
        {t("similar")} {product.similar.join(", ")}
      </Text>
      <Text style={{ fontSize: 16 }}>
        {t("related")} {product.related.join(", ")}
      </Text>
      {!!product.realizationTime && (
        <Text style={{ fontSize: 16 }}>
          {t("realizationTime")} {product.realizationTime}
        </Text>
      )}
    </View>
  );
}
