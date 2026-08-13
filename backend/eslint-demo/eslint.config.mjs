import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser },
    rules: {
      // 级别 2=error 1=warn 0=off
      "no-var": 2,
      "no-console": 1,// 开发时用，上线不用
      "quotes": ["error", "double"],
      "semi": ["error", "always"],
      "indent": ["error", 2]
    }
  },

]);
