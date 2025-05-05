import { globalIgnores } from "eslint/config";
import pluginReactNative from "eslint-plugin-react-native";
import reactPlugin from "eslint-plugin-react";
import hooksPlugin from "eslint-plugin-react-hooks";
import prettierConfig from "eslint-config-prettier";
import tsPlugin from "typescript-eslint";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.strict,
  tseslint.configs.stylistic,
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
  globalIgnores([".expo", "node_modules"])
);
