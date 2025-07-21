import type { FC } from "react";
import * as Charts from "./radar-charts.demo";

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

export const RadarChart = () => <Charts.RadarChart />;
RadarChart.storyName = "Radar chart";
