import { defineConfig, globalIgnores } from "eslint/config";
// import js from "@eslint/js";
import pluginReactNative from "eslint-plugin-react-native";
import reactPlugin from "eslint-plugin-react";
import hooksPlugin from "eslint-plugin-react-hooks";
import prettierConfig from "eslint-config-prettier";
import tsPlugin from "typescript-eslint";

export default defineConfig([
  reactPlugin.configs.flat?.recommended,
  reactPlugin.configs.flat?.["jsx-runtime"],
  tsPlugin.configs.recommended,
  {
    plugins: {
      react: reactPlugin,
      "react-hooks": hooksPlugin,
      "react-native": pluginReactNative,
    },
    rules: {
      ...reactPlugin.configs["jsx-runtime"].rules,
      ...hooksPlugin.configs.recommended.rules,
      ...prettierConfig.rules,
      ...pluginReactNative.configs.all.rules,
      "react-native/no-inline-styles": "warn",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  globalIgnores([".expo", "node_modules"]),
]);
