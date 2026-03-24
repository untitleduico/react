import type { FC, ReactElement } from "react";
import type { StoryContext, StoryFn } from "@storybook/nextjs";

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

type CustomRenderer = (Story: FC, context: StoryContext) => ReactElement;

export const withOverlayAware = (customRenderer?: CustomRenderer) => (Story: StoryFn, context: StoryContext) => {
    const { overlay } = context.globals as Globals;

    if (overlay?.visible) {
        return Story(context.args, context) as ReactElement;
    }

    if (customRenderer) {
        return customRenderer(Story as FC, context);
    }

    return Story(context.args, context) as ReactElement;
};
