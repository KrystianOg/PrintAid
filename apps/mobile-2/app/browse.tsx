import { Button } from "@/components/Button";
import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  RefreshControl,
  ScrollView,
  View,
  Text,
  Pressable,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Browse() {
  const { t } = useTranslation("browse");
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const categories = ["Category 1", "Category 2", "Category 3"];

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ScrollView
          style={{ flex: 1 }}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <View style={{ height: 50 }}>
            <Text style={{ fontSize: 24, textAlign: "center", marginTop: 50 }}>
              {t("search")}
            </Text>
          </View>

          <ScrollView horizontal>
            {categories.map((category, i) => (
              <Pressable
                key={i}
                style={{
                  width: 100,
                  height: 100,
                  backgroundColor: "lightgray",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: 5,
                }}
              >
                <Text>{category}</Text>
              </Pressable>
            ))}
          </ScrollView>
          <Button title={t("filter")} kind="cta" />
          <Button title={t("sort")} kind="cta" />

          {/* 2 column grid */}
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {Array.from({ length: 10 }).map((item, i) => (
              <Pressable
                key={i}
                style={{
                  width: "50%",
                  height: 100,
                  backgroundColor: "lightgray",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>{i}</Text>
              </Pressable>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
