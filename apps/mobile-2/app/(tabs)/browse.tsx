import { Button } from "@/components/Button";
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

const GAP = 8;

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
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ height: 50 }}>
          <Text style={{ fontSize: 24 }}>{t("search")}</Text>
        </View>
        <ScrollView
          horizontal
          contentContainerStyle={{
            gap: 10,
          }}
        >
          {categories.map((category, i) => (
            <Pressable
              key={i}
              style={{
                width: 100,
                height: 20,
                backgroundColor: "lightgray",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text>{category}</Text>
            </Pressable>
          ))}
        </ScrollView>
        <View style={{ flex: 1, flexDirection: "row" }}>
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
            <Link
              href={{
                pathname: "/products/[id]",
                params: { id: product.id },
              }}
              style={{
                width: "49%",
                height: 250,
                backgroundColor: "lightgray",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text>{product.name}</Text>
              <Text>{product.price}</Text>
              <Text>{product.description}</Text>
              <Text>{product.name}</Text>
            </Link>
          )}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{
            gap: GAP,
          }}
          columnWrapperStyle={{ gap: GAP }}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
