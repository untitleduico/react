import type { StorybookConfig } from "@storybook/nextjs-vite";

const config: StorybookConfig = {
    stories: ["../components/**/*.story.tsx"],
    addons: ["@storybook/addon-themes"],
    framework: "@storybook/nextjs-vite",
};

export default config;
