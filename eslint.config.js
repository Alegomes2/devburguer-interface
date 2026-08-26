import js from "@eslint/js";
import prettierConfig from "eslint-config-prettier";
import importHelpers from "eslint-plugin-import-helpers";
import prettierPlugin from "eslint-plugin-prettier";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";

export default defineConfig([
  globalIgnores(["dist"]),

  {
    files: ["**/*.{js,jsx}"],

    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
      prettierConfig,
    ],

    plugins: {
      prettier: prettierPlugin,
      "import-helpers": importHelpers,
    },

    languageOptions: {
      globals: globals.browser,

      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    rules: {
      "prettier/prettier": "error",

      "react-hooks/rules-of-hooks": "error",

      "react-hooks/exhaustive-deps": "warn",

      "no-unused-vars": "warn",

      "import-helpers/order-imports": [
        "warn",
        {
          newlinesBetween: "always",

          groups: [
            "/^react/",
            "module",
            "/^@shared/",
            ["parent", "sibling", "index"],
          ],

          alphabetize: {
            order: "asc",
            ignoreCase: true,
          },
        },
      ],
    },
  },
]);
