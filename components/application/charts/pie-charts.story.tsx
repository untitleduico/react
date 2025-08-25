import type { FC } from "react";
import * as Charts from "./pie-charts.demo";

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

export const PieChartXxs = () => <Charts.PieChartXxs />;
PieChartXxs.storyName = "Pie chart xxs";

export const PieChartXs = () => <Charts.PieChartXs />;
PieChartXs.storyName = "Pie chart xs";

export const PieChartSm = () => <Charts.PieChartSm />;
PieChartSm.storyName = "Pie chart sm";

export const PieChartMd = () => <Charts.PieChartMd />;
PieChartMd.storyName = "Pie chart md";

export const PieChartLg = () => <Charts.PieChartLg />;
PieChartLg.storyName = "Pie chart lg";
