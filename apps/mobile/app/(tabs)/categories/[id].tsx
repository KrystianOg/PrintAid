import { useLocalSearchParams } from "expo-router";
import { useTranslation } from "react-i18next";
import {
  RefreshControl,
  View,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Link } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useQuery } from "@tanstack/react-query";

import { Text } from "@/components/Text";
import { Button } from "@/components/Button";
import { SearchBar } from "@/components/Search";
import { sdk } from "@/lib/medusa";
import { spacing } from "@/constants/theme";

// const { width: screenWidth } = Dimensions.get("screen");

export default function CategoryDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { t } = useTranslation("browse");

  const {
    data: category,
    refetch,
    isLoading,
  } = useQuery({
    queryFn: () => sdk.category.byId(id),
    queryKey: ["category", id],
  });

  const onSearch = (q: string) => {};

  const products = category?.product_category.products;

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        {/* <View>
          <Text style={typography.h5}>Category {id}</Text>
        </View> */}
        <SearchBar onSearch={onSearch} />

        <View style={styles.ctaGroup}>
          <Button title={t("filter")} kind="cta" />
          <Button title={t("sort")} kind="cta" />
        </View>

        <FlatList
          refreshControl={
            <RefreshControl
              refreshing={isLoading}
              onRefresh={() => void refetch()}
            />
          }
          numColumns={2}
          data={products}
          renderItem={({ item: product }) => (
            <Link
              href={{
                pathname: "/products/[id]",
                params: { id: product.id },
              }}
              style={styles.gridItem}
            >
              <Image
                source={{ uri: product.images?.[0]?.url }}
                width={180}
                height={180}
                style={{ borderRadius: 16 }}
              />
              <Text>{product.title}</Text>
              <Text>{product.handle}</Text>
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
  ctaGroup: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 10,
  },
  gridGap: {
    gap: spacing.xs,
  },
  gridItem: {
    alignItems: "center",
    height: 250,
    justifyContent: "center",
    width: "49%",
  },
});
