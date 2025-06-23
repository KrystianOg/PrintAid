import {
  RefreshControl,
  ScrollView,
  View,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  Pressable,
} from "react-native";
import { Text, Link } from "@/components";
// import { Alert, LogBox, Platform } from "react-native";
// import { StatusBar } from "expo-status-bar";
// import * as Device from "expo-device";
// import * as QuickActions from 'expo-quick-actions'
// import { loadAsync } from "expo-font";
import { useTranslation } from "react-i18next";

import { colors, globalStyles, spacing, typography } from "@/constants/theme";
import { useQuery } from "@tanstack/react-query";
import { sdk } from "@/lib/medusa";

const { width: screenWidth } = Dimensions.get("screen");

export default function Index() {
  const { t } = useTranslation("home");

  const categories = useQuery({
    queryKey: ["categories"],
    queryFn: () => sdk.category.list(),
  });

  const featured = useQuery({
    queryKey: ["featured"],
    queryFn: () => sdk.collection.byHandle("featured"),
  });

  const isFetching = categories.isFetching || featured.isFetching;

  const onRefresh = () => {
    void categories.refetch();
    void featured.refetch();
  };

  return (
    <ScrollView
      contentContainerStyle={[globalStyles.flex, styles.screen]}
      refreshControl={
        <RefreshControl refreshing={isFetching} onRefresh={onRefresh} />
      }
    >
      {/* <Image source={{uri: }}/> */}
      <View>
        <Text style={styles.sectionText}>{t("shopByCategory")}</Text>
        <FlatList
          data={categories.data?.product_categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
          keyExtractor={(category) => category.id}
          renderItem={({ item: category }) => (
            <Link
              style={{ width: 100, height: 100 }}
              href={{
                pathname: "/categories/[id]",
                params: { id: category.id },
              }}
            >
              <Image
                style={{ borderRadius: spacing.md }}
                source={{
                  uri: category.metadata?.thumbnail ?? undefined,
                }}
                width={screenWidth / 2 - 32}
                height={screenWidth / 2 - 32}
              />
              <Text>{category.name}</Text>
            </Link>
          )}
        />
      </View>
      <View>
        <Text style={styles.sectionText}>{t("popular")}</Text>
        <FlatList
          data={featured.data?.products}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
          keyExtractor={(item) => item.id}
          renderItem={({ item: product }) => (
            <Link
              href={{
                pathname: "/products/[id]",
                params: { id: product.id },
              }}
              asChild
            >
              <Pressable style={styles.productCard}>
                <Image
                  source={{
                    uri: product.thumbnail ?? undefined,
                  }}
                  style={styles.productImage}
                />
                <Text style={styles.productTitle} numberOfLines={2}>
                  {product.title}
                </Text>
              </Pressable>
            </Link>
          )}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    gap: 10,
  },
  listItem: {
    alignItems: "center",
    backgroundColor: colors.gray,
    height: screenWidth / 2 - 32,
    justifyContent: "center",
    width: screenWidth / 2 - 32,
  },
  productCard: {
    marginRight: 16,
    width: screenWidth / 2 - 32,
  },
  productImage: {
    backgroundColor: colors.white,
    borderRadius: spacing.sm,
    height: screenWidth / 2 - 32,
    width: screenWidth / 2 - 32,
  },
  productTitle: {
    color: colors.grayLight,
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 18,
    marginTop: 8,
  },
  screen: {
    padding: spacing.md,
  },
  sectionText: {
    ...typography.h5,
    marginBottom: 10,
    marginTop: 20,
  },
});
