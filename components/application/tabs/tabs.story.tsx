import type { FC } from "react";
import * as Demos from "./tabs.demo";

export default {
    title: "Application/Tabs",
    decorators: [
        (Story: FC) => (
            <div className="flex min-h-screen items-center justify-center bg-primary p-8">
                <Story />
            </div>
        ),
    ],
};

export const ButtonBrandHorizontal = () => <Demos.ButtonBrandHorizontal />;
ButtonBrandHorizontal.storyName = "Button brand horizontal";

export const ButtonBrandVertical = () => <Demos.ButtonBrandVertical />;
ButtonBrandVertical.storyName = "Button brand vertical";

export const ButtonGrayHorizontal = () => <Demos.ButtonGrayHorizontal />;
ButtonGrayHorizontal.storyName = "Button gray horizontal";

export const ButtonGrayVertical = () => <Demos.ButtonGrayVertical />;
ButtonGrayVertical.storyName = "Button gray vertical";

export const UnderlineHorizontal = () => <Demos.UnderlineHorizontal />;
UnderlineHorizontal.storyName = "Underline horizontal";

export const UnderlineVertical = () => <Demos.UnderlineVertical />;
UnderlineVertical.storyName = "Underline vertical";

export const ButtonBorderHorizontal = () => <Demos.ButtonBorderHorizontal />;
ButtonBorderHorizontal.storyName = "Button border horizontal";

export const ButtonBorderVertical = () => <Demos.ButtonBorderVertical />;
ButtonBorderVertical.storyName = "Button border vertical";

export const ButtonMinimalHorizontal = () => <Demos.ButtonMinimalHorizontal />;
ButtonMinimalHorizontal.storyName = "Button minimal horizontal";

export const ButtonMinimalVertical = () => <Demos.ButtonMinimalVertical />;
ButtonMinimalVertical.storyName = "Button minimal vertical";
