import { useCallback, useState } from "react";
import {
  Pressable,
  RefreshControl,
  ScrollView,
  Text,
  View,
  StyleSheet,
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
          style={{ flex: 1 }}
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

          <Link href="/browse">{t("browseProducts")}</Link>

          <View>
            <Text style={{ fontSize: 16, marginTop: 20, marginBottom: 10 }}>
              {t("shopByCategory")}
            </Text>
            <ScrollView style={{ flexDirection: "row", gap: 10 }} horizontal>
              {Array.from({ length: 10 }).map((item, i) => (
                <Pressable
                  key={i}
                  style={{
                    width: 100,
                    height: 100,
                    backgroundColor: "lightgray",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Link
                    href={{
                      pathname: "/products/[id]",
                      params: { id: i.toString() },
                    }}
                  >
                    {i}
                  </Link>
                </Pressable>
              ))}
            </ScrollView>
          </View>
          <View>
            <Text style={{ fontSize: 16, marginTop: 20, marginBottom: 10 }}>
              {t("popular")}
            </Text>
            <ScrollView style={{ flexDirection: "row", gap: 10 }} horizontal>
              {Array.from({ length: 10 }).map((item, i) => (
                <Pressable
                  key={i}
                  style={{
                    width: 100,
                    height: 100,
                    backgroundColor: "lightgray",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text>{i}</Text>
                </Pressable>
              ))}
            </ScrollView>
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
