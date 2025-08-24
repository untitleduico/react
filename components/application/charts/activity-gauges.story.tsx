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

export const ActivityGaugeXs = () => <Charts.ActivityGaugeXs />;
ActivityGaugeXs.storyName = "Activity gauge xs";

export const ActivityGaugeSm = () => <Charts.ActivityGaugeSm />;
ActivityGaugeSm.storyName = "Activity gauge sm";

export const ActivityGaugeMd = () => <Charts.ActivityGaugeMd />;
ActivityGaugeMd.storyName = "Activity gauge md";

export const ActivityGaugeLg = () => <Charts.ActivityGaugeLg />;
ActivityGaugeLg.storyName = "Activity gauge lg";
