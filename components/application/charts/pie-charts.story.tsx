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

export const PieChartXxs = () => (
    <div className="h-30 w-full max-w-52.5">
        <Charts.PieChart size="xxs" />
    </div>
);
PieChartXxs.storyName = "Pie chart xxs";

export const PieChartXs = () => (
    <div className="h-40 w-full max-w-62.5">
        <Charts.PieChart size="xs" />
    </div>
);
PieChartXs.storyName = "Pie chart xs";

export const PieChartSm = () => (
    <div className="h-50 w-full max-w-72.5">
        <Charts.PieChart />
    </div>
);
PieChartSm.storyName = "Pie chart sm";

export const PieChartMd = () => (
    <div className="h-60 w-full max-w-96">
        <Charts.PieChart size="md" />
    </div>
);
PieChartMd.storyName = "Pie chart md";

export const PieChartLg = () => (
    <div className="h-70 w-full max-w-96">
        <Charts.PieChart size="lg" />
    </div>
);
PieChartLg.storyName = "Pie chart lg";
