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
      <SafeAreaView style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollView}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <View
            style={{ width: "100%", height: 200, backgroundColor: "lightblue" }}
          >
            <Text style={{ fontSize: 24, textAlign: "center", marginTop: 50 }}>
              {t("banner")}
            </Text>
          </View>

          <Link
            href="/browse"
            style={{
              fontSize: 20,
            }}
          >
            {t("browseProducts")}
          </Link>

          <View>
            <Text style={{ fontSize: 16, marginTop: 20, marginBottom: 10 }}>
              {t("shopByCategory")}
            </Text>
            <FlatList
              data={categories}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                gap: 10,
              }}
              keyExtractor={(item) => item}
              renderItem={(item) => (
                <Pressable
                  style={{
                    width: 100,
                    height: 100,
                    backgroundColor: "lightgray",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text>{item.item}</Text>
                </Pressable>
              )}
            />
          </View>
          <View>
            <Text style={{ fontSize: 16, marginTop: 20, marginBottom: 10 }}>
              {t("popular")}
            </Text>
            <FlatList
              data={popular}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                gap: 10,
              }}
              keyExtractor={(item) => item}
              renderItem={(item) => (
                <Pressable
                  style={{
                    width: 100,
                    height: 100,
                    backgroundColor: "lightgray",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
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
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
});
