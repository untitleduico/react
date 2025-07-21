import type { FC } from "react";
import * as Sliders from "@/components/base/slider/slider.demo";

export default {
    title: "Base components/Sliders",
    decorators: [
        (Story: FC) => (
            <div className="bg-primary p-16">
                <div className="max-w-xs">
                    <Story />
                </div>
            </div>
        ),
    ],
};

export const Default = () => <Sliders.Default />;

export const BottomLabel = () => <Sliders.BottomLabel />;
BottomLabel.storyName = "Bottom label";

export const TopFloating = () => <Sliders.TopFloating />;
TopFloating.storyName = "Top floating";

export const SingleThumb = () => <Sliders.SingleThumb />;
SingleThumb.storyName = "Single thumb";
