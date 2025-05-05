import { StyleProp, TextStyle } from "react-native";

export const colors = {
  primary: "#005A9C",
  secondary: "#03DAC6",
  background: "#F6F6F6",
  surface: "#FFFFFF",
  error: "#B00020",
  text: "#000000",
  disabled: "rgba(0, 0, 0, 0.38)",
  placeholder: "rgba(0, 0, 0, 0.54)",
  gray: "#ccc", // TODO: change this
};

export const spacing = (factor: number): number => factor * 8;

export const typography = {
  h1: { fontSize: 96, fontWeight: "300" as const, letterSpacing: -1.5 },
  h2: { fontSize: 60, fontWeight: "300" as const, letterSpacing: -0.5 },
  h3: { fontSize: 48, fontWeight: "400" as const },
  h4: { fontSize: 34, fontWeight: "400" as const, letterSpacing: 0.25 },
  h5: { fontSize: 24, fontWeight: "400" as const },
  h6: { fontSize: 20, fontWeight: "500" as const, letterSpacing: 0.15 },
  subtitle1: { fontSize: 16, fontWeight: "400" as const, letterSpacing: 0.15 },
  subtitle2: { fontSize: 14, fontWeight: "500" as const, letterSpacing: 0.1 },
  body1: { fontSize: 16, fontWeight: "400" as const, letterSpacing: 0.5 },
  body2: { fontSize: 14, fontWeight: "400" as const, letterSpacing: 0.25 },
  button: { fontSize: 14, fontWeight: "500" as const, letterSpacing: 1.25 },
  caption: { fontSize: 12, fontWeight: "400" as const, letterSpacing: 0.4 },
  overline: { fontSize: 10, fontWeight: "400" as const, letterSpacing: 1.5 },
} satisfies Record<string, StyleProp<TextStyle>>;
