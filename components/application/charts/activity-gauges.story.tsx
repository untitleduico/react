import type { FC } from "react";
import * as Charts from "./activity-gauges.demo";

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

export const ActivityGaugeXs = () => <Charts.ActivityGauge size="xs" />;
ActivityGaugeXs.storyName = "Activity gauge xs";

export const ActivityGaugeSm = () => <Charts.ActivityGauge />;
ActivityGaugeSm.storyName = "Activity gauge sm";

export const ActivityGaugeMd = () => <Charts.ActivityGauge size="md" />;
ActivityGaugeMd.storyName = "Activity gauge md";

export const ActivityGaugeLg = () => <Charts.ActivityGauge size="lg" />;
ActivityGaugeLg.storyName = "Activity gauge lg";
