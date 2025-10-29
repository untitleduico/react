import { withThemeByClassName } from "@storybook/addon-themes";
import "../styles/globals.css";
import "./colors.css";
import themes from "./themes";
import Wrapper from "./wrapper";

const customViewports = {
    mobile: {
        name: "Mobile",
        styles: {
            width: "375px",
            height: "100vh",
        },
    },
    desktop: {
        name: "Desktop",
        styles: {
            width: "1440px",
            height: "100vh",
        },
    },
};

export const parameters = {
    layout: "fullscreen",
    options: {
        storySort: {
            method: "alphabetical",
            order: [
                "Base components",
                [
                    "Buttons",
                    // This is not working
                    [
                        "Primary",
                        "Secondary Gray",
                        "Secondary Color",
                        "Tertiary Gray",
                        "Tertiary Color",
                        "Link Gray",
                        "Link Color",
                        "Primary Destructive",
                        "Secondary Destructive",
                        "Tertiary Destructive",
                        "Link Destructive",
                        "Close X",
                        "Utility Button",
                        "Social Buttons",
                        "Social Buttons Groups",
                        "Mobile App Store Buttons",
                    ],
                    "Button groups",
                    "Badges",
                    "Badge groups",
                    "Tags",
                    "Dropdowns",
                    "Select",
                    "Inputs",
                    "Textarea",
                    "Verification Code Input",
                    "Toggles",
                    "Checkboxes",
                    "Radio buttons",
                    "Avatars",
                    "Tooltips",
                    "Progress indicators",
                    "Sliders",
                ],
                "Shared Assets",
                ["Miscellaneous assets"],
                "Application",
                [
                    "Application navigation",
                    "Modals",
                    "Command menus",
                    "Charts",
                    "Slideout menus",
                    "Pagination",
                    "Carousels",
                    "Tabs",
                    "Tables",
                    "Date pickers",
                    "File upload",
                    "Loading indicators",
                    "Empty states",
                ],
            ],
        },
    },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    viewport: {
        options: {
            ...customViewports,
        },
    },

    themes: {
        default: "untitled-primary",
        list: themes,
    },
};

export const decorators = [
    withThemeByClassName({
        themes: {
            light: "light-mode",
            dark: "dark-mode",
        },
        defaultTheme: "light",
    }),
    Wrapper,
];
