export const colors = {
  primary: "#6200EE",
  secondary: "#03DAC6",
  background: "#F6F6F6",
  surface: "#FFFFFF",
  error: "#B00020",
  text: "#000000",
  disabled: "rgba(0, 0, 0, 0.38)",
  placeholder: "rgba(0, 0, 0, 0.54)",
};

export const spacing = (factor: number): number => factor * 8;

export const typography = {
  h1: { fontSize: 96, fontWeight: "300" as "300", letterSpacing: -1.5 },
  h2: { fontSize: 60, fontWeight: "300" as "300", letterSpacing: -0.5 },
  h3: { fontSize: 48, fontWeight: "400" as "400" },
  h4: { fontSize: 34, fontWeight: "400" as "400", letterSpacing: 0.25 },
  h5: { fontSize: 24, fontWeight: "400" as "400" },
  h6: { fontSize: 20, fontWeight: "500" as "500", letterSpacing: 0.15 },
  subtitle1: { fontSize: 16, fontWeight: "400" as "400", letterSpacing: 0.15 },
  subtitle2: { fontSize: 14, fontWeight: "500" as "500", letterSpacing: 0.1 },
  body1: { fontSize: 16, fontWeight: "400" as "400", letterSpacing: 0.5 },
  body2: { fontSize: 14, fontWeight: "400" as "400", letterSpacing: 0.25 },
  button: { fontSize: 14, fontWeight: "500" as "500", letterSpacing: 1.25 },
  caption: { fontSize: 12, fontWeight: "400" as "400", letterSpacing: 0.4 },
  overline: { fontSize: 10, fontWeight: "400" as "400", letterSpacing: 1.5 },
};
