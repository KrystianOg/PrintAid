import { useCallback, useEffect, useState } from "react";
import {
  Pressable,
  RefreshControl,
  ScrollView,
  Text,
  View,
  StyleSheet,
  FlatList,
} from "react-native";
// import { Alert, LogBox, Platform } from "react-native";
// import { StatusBar } from "expo-status-bar";
// import * as Device from "expo-device";
// import * as QuickActions from 'expo-quick-actions'
// import { loadAsync } from "expo-font";
import { useTranslation } from "react-i18next";

import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { Link } from "expo-router";
import { colors, globalStyles, typography } from "@/constants/theme";

export default function Index() {
  const { t } = useTranslation("home");
  const [refreshing, setRefreshing] = useState(false);
  const [categories, setCategories] = useState<string[]>([]);

  const [popular, setPopular] = useState<string[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setCategories([
        "Category 1",
        "Category 2",
        "Category 3",
        "Category 4",
        "Category 5",
      ]);
      setPopular([
        "Popular 1",
        "Popular 2",
        "Popular 3",
        "Popular 4",
        "Popular 5",
      ]);
    }, 800);
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ScrollView
          contentContainerStyle={globalStyles.flex}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
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
              data={categories}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.listContainer}
              keyExtractor={(item) => item}
              renderItem={(item) => (
                <Pressable style={styles.listItem}>
                  <Text>{item.item}</Text>
                </Pressable>
              )}
            />
          </View>
          <View>
            <Text style={styles.sectionText}>{t("popular")}</Text>
            <FlatList
              data={popular}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.listContainer}
              keyExtractor={(item) => item}
              renderItem={(item) => (
                <Pressable style={styles.listItem}>
                  <Text>{item.item}</Text>
                </Pressable>
              )}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
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
    height: 100,
    justifyContent: "center",
    width: 100,
  },
  sectionText: {
    ...typography.h5,
    marginBottom: 10,
    marginTop: 20,
  },
});
