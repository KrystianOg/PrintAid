import {
  Pressable,
  RefreshControl,
  ScrollView,
  View,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
} from "react-native";
import { Text, Link } from "@/components";
// import { Alert, LogBox, Platform } from "react-native";
// import { StatusBar } from "expo-status-bar";
// import * as Device from "expo-device";
// import * as QuickActions from 'expo-quick-actions'
// import { loadAsync } from "expo-font";
import { useTranslation } from "react-i18next";

import { colors, globalStyles, typography } from "@/constants/theme";
import { useQuery } from "@tanstack/react-query";
import { sdk } from "@/lib/medusa";
import { useRouter } from "expo-router";

const { width: screenWidth } = Dimensions.get("screen");

export default function Index() {
  const { t } = useTranslation("home");
  const router = useRouter();

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
      contentContainerStyle={[globalStyles.flex]}
      refreshControl={
        <RefreshControl refreshing={isFetching} onRefresh={onRefresh} />
      }
    >
      <View style={styles.banner}>
        <Text style={styles.bannerText}>{t("banner")}</Text>
      </View>

      <Link href="/browse" style={typography.h6}>
        {t("browseProducts")}
      </Link>

      {/* FIXME: this is repeated */}
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
              style={styles.listItem}
              href={{
                pathname: "/categories/[id]",
                params: { id: category.id },
              }}
            >
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
            <Pressable
              style={styles.listItem}
              onPress={() => {
                router.navigate(`/products/${product.id}`);
              }}
            >
              <Image
                source={{ uri: product.thumbnail ?? undefined }}
                width={screenWidth / 2 - 32}
                height={screenWidth / 2 - 32}
              />
            </Pressable>
          )}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  banner: {
    height: 200,
    width: "100%",
  },
  bannerText: {
    ...typography.h5,
    marginTop: 50,
    textAlign: "center",
  },
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
  sectionText: {
    ...typography.h5,
    marginBottom: 10,
    marginTop: 20,
  },
});
