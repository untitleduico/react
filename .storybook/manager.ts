import { addons } from "storybook/manager-api";
import { create } from "storybook/theming/create";

/**
 * Manager (chrome) theme for the "❖ Untitled UI x Fa" Storybook.
 * This themes the sidebar / toolbar / branding only — the preview canvas
 * theme is handled separately by `@storybook/addon-themes` (see preview.ts).
 * Colors come from the FA brand ramp in `styles/theme.css`.
 */
const faTheme = create({
    base: "light",

    // Branding
    brandTitle: "Untitled UI × Fa",
    brandTarget: "_self",

    // Brand accent (selected nav item, links, active toolbar item)
    colorPrimary: "#0373E3", // brand-500
    colorSecondary: "#0373E3", // brand-500

    // App chrome
    appBg: "#f5fafe", // brand-25 — subtle tinted sidebar
    appContentBg: "#ffffff",
    appPreviewBg: "#ffffff",
    appBorderColor: "#e7f2fd", // brand-50
    appBorderRadius: 8,

    // Typography (matches the component library)
    fontBase: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    fontCode: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace',

    // Text
    textColor: "#02264b", // brand-900
    textInverseColor: "#ffffff",
    textMutedColor: "#535862", // neutral-600

    // Toolbar
    barTextColor: "#535862", // neutral-600
    barSelectedColor: "#0373E3", // brand-500
    barHoverColor: "#0373E3",
    barBg: "#ffffff",

    // Form inputs (in the toolbar / addons)
    inputBg: "#ffffff",
    inputBorder: "#d5d7da", // neutral-300
    inputTextColor: "#02264b",
    inputBorderRadius: 8,
});

addons.setConfig({
    theme: faTheme,
});
