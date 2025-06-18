import { useLocalSearchParams } from "expo-router";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  Alert,
} from "react-native";
import {
  colors,
  globalStyles,
  typography,
  useLightDark,
} from "@/constants/theme";
// import { formatCurrency } from "@/utils/currency";
import { useQuery } from "@tanstack/react-query";
import { getProduct } from "@/lib/medusa";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const { width: screenWidth } = Dimensions.get("window");

export default function ProductDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { t } = useTranslation(["product", "common"]);
  // const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  // theme
  const backgroundColor = useLightDark("background");
  const surfaceColor = useLightDark("surface");
  const textColor = useLightDark("text");
  const primaryColor = useLightDark("primary");

  const {
    data: product,
    // isLoading,
    // error,
  } = useQuery({
    queryFn: () => getProduct(id),
    queryKey: ["product", id],
  });

  const handleAddToCart = () => {
    Alert.alert(
      t("addToCart", { ns: "common" }),
      t("productAddedToCart", { ns: common }),
      [{ text: t("ok", { ns: "common" }), style: "default" }],
      { cancelable: true },
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
  const image = product.images?.[0].url;

  console.info("image", image);

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.typo}>{product.title}</Text>
            <Image source={{ uri: image }} width={300} height={300} />
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
