import type { FC } from "react";
import * as Demos from "./progress-indicators.demo";

export default {
    title: "Base components/Progress indicators",
};

const DefaultDecorator = (Story: FC) => (
    <div className="flex min-h-screen w-screen bg-primary p-16">
        <div className="w-full max-w-xs">
            <Story />
        </div>
    </div>
);

const WiderDecorator = (Story: FC) => (
    <div className="flex min-h-screen w-full bg-primary p-16">
        <div className="w-100">
            <Story />
        </div>
    </div>
);

export const Default = () => <Demos.ProgressBarDefault />;
Default.decorators = [DefaultDecorator];

export const TextRight = () => <Demos.ProgressBarTextRight />;
TextRight.decorators = [DefaultDecorator];
TextRight.storyName = "Text right";

export const TextBottom = () => <Demos.ProgressBarTextBottom />;
TextBottom.decorators = [DefaultDecorator];
TextBottom.storyName = "Text bottom";

export const TextTopFloating = () => <Demos.ProgressBarTextTopFloating />;
TextTopFloating.decorators = [DefaultDecorator];
TextTopFloating.storyName = "Text top floating";

export const TextBottomFloating = () => <Demos.ProgressBarTextBottomFloating />;
TextBottomFloating.decorators = [DefaultDecorator];
TextBottomFloating.storyName = "Text bottom floating";

export const CircleProgressBar = () => <Demos.CircleProgressBar />;
CircleProgressBar.decorators = [WiderDecorator];
CircleProgressBar.storyName = "Circle progress bar";

export const CircleProgressBarLabel = () => <Demos.CircleProgressBarLabel />;
CircleProgressBarLabel.decorators = [WiderDecorator];
CircleProgressBarLabel.storyName = "Circle progress bar label";

export const HalfCircleProgressBar = () => <Demos.HalfCircleProgressBar />;
HalfCircleProgressBar.decorators = [WiderDecorator];
HalfCircleProgressBar.storyName = "Half circle progress bar";

export const HalfCircleProgressBarLabel = () => <Demos.HalfCircleProgressBarLabel />;
HalfCircleProgressBarLabel.decorators = [WiderDecorator];
HalfCircleProgressBarLabel.storyName = "Half circle progress bar label";
