import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettier from "eslint-config-prettier/flat";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  prettier,
  {
    // The UI uses the project's own hairline icons only (prototype section 2.5).
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: [
                "@phosphor-icons/*",
                "simple-icons",
                "simple-icons/*",
                "lucide-react",
                "react-icons",
                "react-icons/*",
                "@heroicons/*",
              ],
              message: 'Project icons are custom: "@/components/icons".',
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
