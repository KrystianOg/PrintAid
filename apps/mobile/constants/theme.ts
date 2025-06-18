import { StyleProp, TextStyle, useColorScheme, ViewStyle } from "react-native";

// ============================================================================
// COLORS
// ============================================================================

export const colors = {
  // Brand Colors
  primary: "#005A9C",
  secondary: "#03DAC6",
  
  // Backgrounds
  background: "#FFFFFF",
  surface: "#FFFFFF",
  
  // Text Colors
  text: "#000000",
  textSecondary: "rgba(0, 0, 0, 0.54)",
  
  // State Colors
  error: "#B00020",
  disabled: "rgba(0, 0, 0, 0.38)",
  placeholder: "rgba(0, 0, 0, 0.54)",
  
  // Utility Colors
  white: "#ffffff",
  gray: "#888888",
  grayLight: "#cccccc",
};

export const darkColors: typeof colors = {
  ...colors,
  // Backgrounds
  background: "#121212",
  surface: "#1E1E1E",
  
  // Text Colors
  text: "#ffffff",
  textSecondary: "rgba(255, 255, 255, 0.60)",
  
  // State Colors
  disabled: "rgba(255, 255, 255, 0.38)",
  placeholder: "rgba(255, 255, 255, 0.54)",
  
  // Utility Colors
  gray: "#888888",
  grayLight: "#555555",
};

// ============================================================================
// SPACING
// ============================================================================

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
  xxxl: 64,
};

export const spacingFn = (factor: number): number => factor * 8;

// ============================================================================
// TYPOGRAPHY
// ============================================================================

export const typography = {
  // Display Styles
  h1: { fontSize: 96, fontWeight: "300" as const, letterSpacing: -1.5 },
  h2: { fontSize: 60, fontWeight: "300" as const, letterSpacing: -0.5 },
  h3: { fontSize: 48, fontWeight: "400" as const, letterSpacing: 0 },
  h4: { fontSize: 34, fontWeight: "400" as const, letterSpacing: 0.25 },
  h5: { fontSize: 24, fontWeight: "400" as const, letterSpacing: 0 },
  h6: { fontSize: 20, fontWeight: "500" as const, letterSpacing: 0.15 },
  
  // Content Styles
  subtitle1: { fontSize: 16, fontWeight: "400" as const, letterSpacing: 0.15 },
  subtitle2: { fontSize: 14, fontWeight: "500" as const, letterSpacing: 0.1 },
  body1: { fontSize: 16, fontWeight: "400" as const, letterSpacing: 0.5 },
  body2: { fontSize: 14, fontWeight: "400" as const, letterSpacing: 0.25 },
  
  // UI Styles
  button: { fontSize: 14, fontWeight: "500" as const, letterSpacing: 1.25 },
  caption: { fontSize: 12, fontWeight: "400" as const, letterSpacing: 0.4 },
  overline: { fontSize: 10, fontWeight: "400" as const, letterSpacing: 1.5 },
} satisfies Record<string, StyleProp<TextStyle>>;

// ============================================================================
// LAYOUT
// ============================================================================

export const layout = {
  flex: { flex: 1 },
  flexRow: { flex: 1, flexDirection: "row" as const },
  center: { flex: 1, justifyContent: "center" as const, alignItems: "center" as const },
  row: { flexDirection: "row" as const },
  column: { flexDirection: "column" as const },
  alignCenter: { alignItems: "center" as const },
  justifyCenter: { justifyContent: "center" as const },
  spaceBetween: { justifyContent: "space-between" as const },
  spaceAround: { justifyContent: "space-around" as const },
} satisfies Record<string, StyleProp<ViewStyle>>;

// ============================================================================
// THEME UTILITIES
// ============================================================================

export function useLightDark<Key extends keyof typeof colors>(
  key: Key,
): (typeof colors)[Key] {
  const colorScheme = useColorScheme();
  return colorScheme === "dark" ? darkColors[key] : colors[key];
}

// For use in StyleSheet.create() - returns both light and dark values
export function getLightDarkColors<Key extends keyof typeof colors>(
  key: Key,
): { light: (typeof colors)[Key], dark: (typeof colors)[Key] } {
  return {
    light: colors[key],
    dark: darkColors[key],
  };
}

// Get color based on scheme string (useful for StyleSheet)
export function getColorByScheme<Key extends keyof typeof colors>(
  key: Key,
  scheme: 'light' | 'dark',
): (typeof colors)[Key] {
  return scheme === 'dark' ? darkColors[key] : colors[key];
}

// Theme-aware StyleSheet creator
export function createThemedStyles<T extends Record<string, any>>(
  stylesCreator: (colors: typeof colors) => T,
): { light: T, dark: T } {
  return {
    light: stylesCreator(colors),
    dark: stylesCreator(darkColors),
  };
}

// Hook to get themed styles
export function useThemedStyles<T extends Record<string, any>>(
  themedStyles: { light: T, dark: T },
): T {
  const colorScheme = useColorScheme();
  return colorScheme === 'dark' ? themedStyles.dark : themedStyles.light;
}

// Legacy export for backward compatibility
export const globalStyles = layout;
