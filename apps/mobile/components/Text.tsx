import { useLightDark } from "@/constants/theme";
import { Text as RNText, TextProps as RNTextProps } from "react-native";

export function Text({ children, style, ...props }: RNTextProps) {
  const color = useLightDark("text");
  return (
    <RNText {...props} style={[{ color }, style]}>
      {children}
    </RNText>
  );
}
