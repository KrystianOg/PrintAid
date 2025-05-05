import { Button } from "@/components/Button";
import { StyleSheet } from "react-native";
import { Link } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  RefreshControl,
  ScrollView,
  View,
  Text,
  Pressable,
  FlatList,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import type { ProductListItem } from "@/types/products";
import { fetch } from "@/lib/fetch";
import { colors, globalStyles, spacing, typography } from "@/constants/theme";

export default function Browse() {
  const { t } = useTranslation("browse");
  const [refreshing, setRefreshing] = useState(false);

  const [products, setProducts] = useState<ProductListItem[]>([]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const loadProducts = useCallback(async (): Promise<ProductListItem[]> => {
    return fetch<ProductListItem[]>("/products");
  }, []);

  useEffect(() => {
    loadProducts().then((products) => {
      setProducts(products);
    });
  }, [loadProducts]);

  const categories = ["Category 1", "Category 2", "Category 3"];

  return (
    <SafeAreaProvider>
      <SafeAreaView style={globalStyles.flex}>
        <View>
          <Text style={typography.h5}>{t("search")}</Text>
        </View>
        <ScrollView
          horizontal
          contentContainerStyle={styles.categoriesContainer}
        >
          {categories.map((category, i) => (
            <Pressable key={i} style={styles.categoryItem}>
              <Text>{category}</Text>
            </Pressable>
          ))}
        </ScrollView>
        <View style={styles.ctaGroup}>
          <Button title={t("filter")} kind="cta" />
          <Button title={t("sort")} kind="cta" />
        </View>

        <FlatList
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          numColumns={2}
          data={products}
          renderItem={({ item: product }) => (
            // TODO: extract this to a component
            <Link
              href={{
                pathname: "/products/[id]",
                params: { id: product.id },
              }}
              style={styles.gridItem}
            >
              <Text>{product.name}</Text>
              <Text>{product.price}</Text>
              <Text>{product.description}</Text>
              <Text>{product.name}</Text>
            </Link>
          )}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.gridGap}
          columnWrapperStyle={styles.gridGap}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  categoriesContainer: {
    gap: 10,
  },
  categoryItem: {
    alignItems: "center",
    backgroundColor: colors.backgroundBlue,
    height: 20,
    justifyContent: "center",
    width: 100,
  },
  ctaGroup: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 10,
  },
  gridGap: {
    gap: spacing(1),
  },
  gridItem: {
    // FIXME: extract this and this part to component
    alignItems: "center",
    backgroundColor: colors.backgroundBlue,
    height: 250,
    justifyContent: "center",
    width: "49%",
  },
});
