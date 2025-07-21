import type { FC } from "react";
import * as Charts from "./line-charts.demo";

export default {
    title: "Application/Charts",
    decorators: [
        (Story: FC) => (
            <div className="flex min-h-screen items-center justify-center bg-primary py-8">
                <div className="flex w-full items-center justify-center">
                    <Story />
                </div>
            </div>
        ),
    ],
};

export const LineChart01 = () => (
    <div className="w-full max-w-5xl">
        <Charts.LineChart01 />
    </div>
);
LineChart01.storyName = "Line chart 01";

export const LineChart02 = () => (
    <div className="w-full max-w-5xl">
        <Charts.LineChart02 />
    </div>
);
LineChart02.storyName = "Line chart 02";

export const LineChart03 = () => (
    <div className="w-full max-w-5xl">
        <Charts.LineChart03 />
    </div>
);
LineChart03.storyName = "Line chart 03";

export const LineChart04 = () => (
    <div className="w-full max-w-5xl">
        <Charts.LineChart04 />
    </div>
);
LineChart04.storyName = "Line chart 04";
