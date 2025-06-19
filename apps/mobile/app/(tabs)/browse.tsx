import { Button } from "@/components/Button";
import { Image, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  RefreshControl,
  ScrollView,
  View,
  Pressable,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { Text } from "@/components/Text";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { spacing, typography, colors, useLightDark } from "@/constants/theme";
import { useQuery } from "@tanstack/react-query";
import { sdk } from "@/lib/medusa";
import { SearchBar } from "@/components/Search";

export default function Browse() {
  const { t } = useTranslation("browse");
  const [refreshing, setRefreshing] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const backgroundColor = useLightDark("background");
  const surfaceColor = useLightDark("surface");
  const textColor = useLightDark("text");

  const { data: products, isLoading: productsLoading } = useQuery({
    queryFn: sdk.product.list,
    queryKey: ["products"],
  });

  const { data: searchResults, isLoading: searchLoading } = useQuery({
    queryFn: () => sdk.search(searchQuery),
    queryKey: ["search", searchQuery],
    enabled: searchQuery.length > 0,
  });

  const onSearch = (q: string) => {
    setSearchQuery(q);
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const categories = ["Electronics", "Clothing", "Home & Garden", "Sports", "Books"];

  const displayData = searchQuery.length > 0 ? searchResults : products;
  const isLoading = searchQuery.length > 0 ? searchLoading : productsLoading;

  return (
    <SafeAreaProvider>
      <SafeAreaView style={[styles.container, { backgroundColor }]}>
        <View style={styles.header}>
          <Text style={[typography.h5, { color: textColor, marginBottom: spacing.md }]}>
            {t("search")}
          </Text>
          <SearchBar 
            onSearch={onSearch} 
            style={[styles.searchBar, { backgroundColor: surfaceColor }]}
          />
        </View>
        
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoriesContainer}
          style={styles.categoriesScrollView}
        >
          {categories.map((category, i) => (
            <Pressable 
              key={i} 
              style={[styles.categoryItem, { backgroundColor: surfaceColor }]}
            >
              <Text style={[typography.caption, { color: textColor }]}>
                {category}
              </Text>
            </Pressable>
          ))}
        </ScrollView>
        
        <View style={styles.ctaGroup}>
          <Button title={t("filter")} kind="cta" />
          <Button title={t("sort")} kind="cta" />
        </View>

        {isLoading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color={colors.primary} />
            <Text style={[typography.body2, { color: textColor, marginTop: spacing.sm }]}>
              Loading products...
            </Text>
          </View>
        ) : (
          <FlatList
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            numColumns={2}
            data={displayData}
            renderItem={({ item: product }) => (
              <Link
                href={{
                  pathname: "/products/[id]",
                  params: { id: product.id },
                }}
                style={[styles.gridItem, { backgroundColor: surfaceColor }]}
              >
                <Image
                  source={{ uri: product.images?.[0]?.url }}
                  style={styles.productImage}
                />
                <View style={styles.productInfo}>
                  <Text style={[typography.subtitle2, { color: textColor }]} numberOfLines={2}>
                    {product.title}
                  </Text>
                  <Text style={[typography.caption, { color: useLightDark("textSecondary") }]}>
                    {product.handle}
                  </Text>
                </View>
              </Link>
            )}
            keyExtractor={(item, index) => item.id || index.toString()}
            contentContainerStyle={styles.productsList}
            columnWrapperStyle={styles.productRow}
            showsVerticalScrollIndicator={false}
          />
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: spacing.md,
  },
  header: {
    paddingTop: spacing.sm,
    paddingBottom: spacing.md,
  },
  searchBar: {
    borderWidth: 1,
    borderColor: colors.grayLight,
    shadowColor: colors.gray,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  categoriesScrollView: {
    maxHeight: 50,
    marginBottom: spacing.md,
  },
  categoriesContainer: {
    paddingHorizontal: spacing.xs,
    gap: spacing.sm,
  },
  categoryItem: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: 20,
    minWidth: 80,
    borderWidth: 1,
    borderColor: colors.grayLight,
    shadowColor: colors.gray,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  ctaGroup: {
    flexDirection: "row",
    gap: spacing.sm,
    marginBottom: spacing.md,
    paddingHorizontal: spacing.xs,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: spacing.xl,
  },
  productsList: {
    paddingBottom: spacing.xl,
    paddingHorizontal: spacing.xs,
  },
  productRow: {
    justifyContent: "space-between",
    marginBottom: spacing.md,
  },
  gridItem: {
    width: "48%",
    borderRadius: 12,
    padding: spacing.sm,
    shadowColor: colors.gray,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  productImage: {
    width: "100%",
    height: 150,
    borderRadius: 8,
    marginBottom: spacing.sm,
  },
  productInfo: {
    paddingHorizontal: spacing.xs,
    gap: spacing.xs,
  },
});
