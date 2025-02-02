import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintReactPlugin from "eslint-plugin-react";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";
import { Linter } from "eslint";

export default tseslint.config(
  {
    ignores: ["dist/", "crates/*/pkg/"],
  },
  eslint.configs.recommended,
  tseslint.configs.recommended,
  eslintReactPlugin.configs.flat.recommended,
  eslintConfigPrettier as Linter.Config,
  {
    plugins: {
      "react-hooks": eslintPluginReactHooks,
    },
    rules: {
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
    },
  } as Linter.Config,
  {
    rules: {
      "no-unused-vars": "off",
      "react/prop-types": "off",
    },
  },
);
