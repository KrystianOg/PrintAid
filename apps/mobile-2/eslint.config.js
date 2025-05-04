import pluginReact from "@eslint-community/eslint-plugin-react";
import pluginReactHooks from "@eslint-community/eslint-plugin-react-hooks";
import pluginReactNative from "@react-native-community/eslint-plugin";

export default {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react-native/all",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react", "react-hooks", "react-native", "@typescript-eslint"],
  rules: {
    "react/prop-types": "off",
    "react-native/no-inline-styles": "warn",
    "react-native/sort-styles": "warn",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
