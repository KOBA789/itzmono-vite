import eslint from "@eslint/js";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";

export default defineConfig(
  {
    ignores: ["dist/"],
  },
  eslint.configs.recommended,
  tseslint.configs.recommended,
  eslintPluginReactHooks.configs.flat.recommended,
  eslintConfigPrettier,
);
