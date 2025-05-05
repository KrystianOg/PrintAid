import { useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { View, Text } from "react-native";

interface ProductDetailProps {
  id: string[];
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: number;
  stock: number;
  discount: number;
  availability: string;
  similar: string[];
  related: string[];
  tags: string[];
  meta: unknown;
}

export default function ProductDetail({
  name,
  price,
  description,
  category,
  similar,
  related,
  availability,
}: ProductDetailProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id } = useLocalSearchParams();
  const { t } = useTranslation("product");

  useEffect(() => {
    // TODO: load some images etc
  }, []);

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
        {t("name")} {name}
      </Text>
      <Text style={{ fontSize: 16 }}>
        {t("price")}: {price}
      </Text>
      <Text style={{ fontSize: 16 }}>
        {t("description")} {description}
      </Text>
      <Text style={{ fontSize: 16 }}>
        {t("category")} {category}
      </Text>
      <Text style={{ fontSize: 16 }}>
        {t("similar")} {similar}
      </Text>
      <Text style={{ fontSize: 16 }}>
        {t("related")} {related}
      </Text>
      <Text style={{ fontSize: 16 }}>
        {t("realizationTime")} {availability}
      </Text>
    </View>
  );
}
