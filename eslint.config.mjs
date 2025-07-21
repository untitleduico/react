import nextPlugin from "@next/eslint-plugin-next";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import prettierPlugin from "eslint-plugin-prettier";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import storybook from "eslint-plugin-storybook";
import unusedImports from "eslint-plugin-unused-imports";

export default [
    { ignores: ["node_modules/*", "storybook-addon-pixel-perfect/dist"] },
    { files: ["**/*.{js,jsx,ts,tsx}"], ...reactPlugin.configs.flat.recommended },
    {
        settings: {
            react: {
                version: "detect",
            },
        },
        files: ["**/*.{js,jsx,ts,tsx}"],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                ecmaVersion: "latest",
                sourceType: "module",
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        plugins: {
            "@typescript-eslint": tsPlugin,
            prettier: prettierPlugin,
            "unused-imports": unusedImports,
            react: reactPlugin,
            "react-hooks": reactHooksPlugin,
            "jsx-a11y": jsxA11yPlugin,
            "@next/next": nextPlugin,
        },
        rules: {
            "unused-imports/no-unused-imports": "error",
            "@typescript-eslint/no-explicit-any": "warn",

            "@typescript-eslint/consistent-type-imports": [
                "error",
                {
                    prefer: "type-imports",
                    fixStyle: "separate-type-imports",
                    disallowTypeAnnotations: true,
                },
            ],

            // React Hooks rules
            "react-hooks/rules-of-hooks": "error",
            "react-hooks/exhaustive-deps": "warn",

            // Next.js rules (disabled for component library)
            "@next/next/no-img-element": "off",
            "@next/next/no-html-link-for-pages": "off",

            "prettier/prettier": [
                "warn",
                {},
                {
                    usePrettierrc: true,
                },
            ],
            "react/react-in-jsx-scope": "off",
            "react/display-name": "off",
            "react/jsx-key": "warn",
            "react/prop-types": "off",
            "react/no-unescaped-entities": "off",
            "react/no-unknown-property": ["error", { ignore: ["fill"] }],
            "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
            "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }],
            "no-undef": "off",
            "no-redeclare": "warn",
            "max-len": "off",
            "jsx-a11y/alt-text": "error",

            // Added to address the specific error you were getting
            "@typescript-eslint/no-empty-object-type": "off",
        },
    },
    ...storybook.configs["flat/recommended"],
];
