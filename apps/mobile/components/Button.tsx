import { StyleSheet } from "react-native";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Text } from "./Text";

interface ButtonProps extends TouchableOpacityProps {
  kind?: "cta";
  title?: string;
}

export function Button({ children, title, style, ...props }: ButtonProps) {
  return (
    <TouchableOpacity style={[styles.base, style]} {...props}>
      {title ? <Text>{title}</Text> : children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  base: {
    backgroundColor: "",
  },
});
