import type { FC, ReactElement } from "react";
import type { Decorator } from "@storybook/nextjs-vite";

export declare type ImageSrc = {
    height: number;
    url: string;
    width: number;
};

export declare type Globals = {
    overlay: {
        active: boolean;
        visible: boolean;
        isDiffOn: boolean;
        image?: ImageSrc;
        opacity: number;
        isComparisonOn: boolean;
        threshold: number;
        viewport: Viewports;
    };
};

export type Viewports = "desktop" | "mobile";

type CustomRenderer = (Story: FC, context: Parameters<Decorator>[1]) => ReactElement;

export const withOverlayAware =
    (customRenderer?: CustomRenderer): Decorator =>
    (Story, context) => {
        const { overlay } = context.globals as Globals;

        if (overlay?.visible) {
            return Story();
        }

        if (customRenderer) {
            return customRenderer(Story as FC, context);
        }

        return Story();
    };
