import { useFocusEffect, useLocalSearchParams } from "expo-router";
import { useTranslation } from "react-i18next";
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  Pressable,
  Linking,
  RefreshControl,
} from "react-native";
import { Text } from "@/components";
import { colors, globalStyles, spacing, typography } from "@/constants/theme";
// import { formatCurrency } from "@/utils/currency";
import { useQuery } from "@tanstack/react-query";
import { sdk } from "@/lib/medusa";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useCallback, useRef, useState } from "react";
import { Button } from "@/components/Button";

import * as Haptics from "expo-haptics";
import { useCart } from "@/hooks/useCart";

const { width: screenWidth } = Dimensions.get("screen");

export default function ProductDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { t } = useTranslation(["product", "common"]);

  const { data, isFetching, refetch } = useQuery({
    queryFn: () => sdk.product.retrieve(id),
    queryKey: ["product", id],
  });

  const [currentPreview, setCurrentPreview] = useState<string | undefined>();
  const ref = useRef<ScrollView>(null);
  useFocusEffect(
    useCallback(() => {
      ref.current?.scrollTo({ y: 0, animated: true });
    }, [])
  );

  const product = data?.product;
  const { addItem } = useCart();

  const handleAddToCart = () => {
    if (!product) return;

    void Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);

    addItem({
      id: product.id,
      name: product.title,
      price: product.variants?.at(0)?.calculated_price?.original_amount ?? 0,
      variant: product.variants?.at(0)?.id,
      quantity: 1,
    });
  };

  if (!product) {
    return (
      <View style={[styles.container, globalStyles.center]}>
        <Text style={typography.h5}>{t("loading", { ns: "common" })}</Text>
      </View>
    );
  }

  const imageSize = 120;

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ScrollView
          ref={ref}
          contentContainerStyle={styles.scrollContainer}
          refreshControl={
            <RefreshControl
              refreshing={isFetching}
              onRefresh={() => {
                void refetch();
              }}
            />
          }
        >
          <View style={styles.container}>
            <Image
              source={{ uri: currentPreview ?? product.thumbnail ?? undefined }}
              style={{ borderRadius: spacing.md }}
              width={screenWidth - spacing.md}
              height={300}
            />
            <ScrollView
              horizontal
              contentContainerStyle={{
                gap: spacing.sm,
                paddingVertical: spacing.md,
              }}
            >
              {product.images?.map((image) => (
                <Pressable
                  onPress={() => {
                    setCurrentPreview(image.url);
                  }}
                  key={image.id}
                >
                  <Image
                    source={{ uri: image.url }}
                    style={{ borderRadius: spacing.md }}
                    width={imageSize}
                    height={imageSize}
                  />
                </Pressable>
              ))}
            </ScrollView>
            <Text style={typography.h5}>{product.title}</Text>
            <Text style={typography.h6}>{product.subtitle}</Text>

            {product.tags?.length && (
              <ScrollView
                horizontal
                contentContainerStyle={{
                  gap: spacing.xs,
                  paddingVertical: spacing.md,
                }}
              >
                {product.tags.map((tag) => (
                  <View key={tag.id} style={styles.chipContainer}>
                    <Text style={styles.chip}>{tag.value}</Text>
                  </View>
                ))}
              </ScrollView>
            )}

            <Text style={typography.h5}>{t("description")}</Text>
            <Text style={typography.body1}>{product.description}</Text>
            {product.categories && product.categories.length > 0 && (
              <View style={{ paddingVertical: spacing.sm }}>
                <Text style={typography.h5}>{t("category")} </Text>
                <ScrollView horizontal>
                  {product.categories.map((category) => (
                    <View key={category.id} style={styles.chipContainer}>
                      <Text style={styles.chip}>{category.name}</Text>
                    </View>
                  ))}
                </ScrollView>
              </View>
            )}

            {product.metadata?.license && (
              <View style={{ paddingVertical: spacing.sm }}>
                <Text style={typography.h5}>{t("license")}</Text>
                <Pressable
                  onPress={() => {
                    if (!product.metadata?.license) return;
                    void Linking.openURL(product.metadata.license);
                  }}
                >
                  <Text style={styles.webLink}>{product.metadata.license}</Text>
                </Pressable>
              </View>
            )}
          </View>
        </ScrollView>
        {/* <View style={styles.floatingButton}></View> */}

        <Button
          style={styles.floatingButton}
          title={t("addToCart")}
          onPress={() => {
            handleAddToCart();
          }}
        ></Button>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  chip: {
    backgroundColor: colors.primary,
    borderRadius: spacing.md,
    color: colors.white,
    padding: spacing.sm,
  },
  chipContainer: {
    alignItems: "center",
    alignSelf: "flex-start",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    padding: 10,
  },
  floatingButton: {
    bottom: spacing.sm,
    left: spacing.lg,
    padding: spacing.sm,
    position: "absolute",
    width: screenWidth - spacing.lg * 2,
  },
  scrollContainer: {
    paddingBottom: 80,
  },
  webLink: {
    color: colors.primary,
    textDecorationLine: "underline",
  },
});
