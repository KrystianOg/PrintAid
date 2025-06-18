import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

export default function CategoryDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View>
      <Text>Category {id}</Text>
    </View>
  );
}
