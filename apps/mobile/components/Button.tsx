import { Pressable, StyleSheet } from "react-native";
import { TouchableOpacityProps } from "react-native";
import { Text } from "./Text";
import { spacing, typography, useLightDark } from "@/constants/theme";

interface ButtonProps extends TouchableOpacityProps {
  kind?: "cta";
  title?: string;
}

export function Button({ children, title, style, ...props }: ButtonProps) {
  const backgroundColor = useLightDark("background", true);
  const color = useLightDark("text", true);
  return (
    <Pressable style={[{ backgroundColor }, styles.base, style]} {...props}>
      {title ? (
        <Text
          style={[
            { color, textAlign: "center", fontWeight: "600" },
            typography.h4,
          ]}
        >
          {title}
        </Text>
      ) : (
        children
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    borderRadius: spacing.md,
  },
});
