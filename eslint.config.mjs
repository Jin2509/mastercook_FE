import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettier from "eslint-config-prettier/flat";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  prettier,
  {
    // Icons go through one curated entry point so the set stays consistent.
    ignores: ["src/components/icons/**"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["@phosphor-icons/react", "@phosphor-icons/react/*"],
              message: 'Import icons from "@/components/icons".',
            },
            {
              group: ["simple-icons", "simple-icons/*"],
              message: 'Use <BrandIcon> from "@/components/icons".',
            },
            {
              group: ["lucide-react", "react-icons", "react-icons/*"],
              message: 'Project icons are Phosphor: "@/components/icons".',
            },
          ],
        },
      ],
    },
  },
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "coverage/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
