// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import prettierPlugin from "eslint-plugin-prettier";
import reactPlugin from "eslint-plugin-react";
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
        },
        rules: {
            "unused-imports/no-unused-imports": "error",

            "@typescript-eslint/consistent-type-imports": [
                "error",
                {
                    prefer: "type-imports",
                    fixStyle: "separate-type-imports",
                    disallowTypeAnnotations: true,
                },
            ],
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
            "no-unused-vars": "off",
            "no-undef": "off",
            "no-redeclare": "warn",
            "max-len": "off",
            "jsx-a11y/alt-text": "off",
        },
    },
    ...storybook.configs["flat/recommended"],
];
