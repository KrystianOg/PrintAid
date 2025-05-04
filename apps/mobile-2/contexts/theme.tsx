import React, { createContext, useContext } from "react";
import { colors, spacing, typography } from "@/theme/color";

type Theme = {
  colors: typeof colors;
  spacing: (factor: number) => number;
  typography: typeof typography;
};

const defaultTheme: Theme = { colors, spacing, typography };
export const ThemeContext = createContext<Theme>(defaultTheme);

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => (
  <ThemeContext.Provider value={defaultTheme}>{children}</ThemeContext.Provider>
);
