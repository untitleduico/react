"use client";

import { PolarAngleAxis, RadialBar, RadialBarChart, ResponsiveContainer } from "recharts";
import { cx } from "@/utils/cx";

const progressCircleData = [
    {
        value: 400,
        className: "text-utility-brand-600",
    },
];

export const ProgressCircle = ({ size = "sm", title, subtitle }: { size?: "xs" | "sm" | "md" | "lg"; title?: string; subtitle?: string }) => {
    const sizes = {
        // collapse-start
        xs: {
            size: 16,
            innerRadius: 80 - 8,

            titleDY: "1.05em",
            subtitleDY: "-1.3em",

            title: "text-display-xs font-semibold",
            subtitle: "text-xs font-medium",
        },
        sm: {
            size: 20,
            innerRadius: 100 - 10,

            titleDY: "1em",
            subtitleDY: "-1.4em",

            title: "text-display-sm font-semibold",
            subtitle: "text-xs font-medium",
        },
        md: {
            size: 24,
            innerRadius: 120 - 12,

            titleDY: "1em",
            subtitleDY: "-1.5em",

            title: "text-display-md font-semibold",
            subtitle: "text-sm font-medium",
        },
        lg: {
            size: 28,
            innerRadius: 140 - 14,

            titleDY: "1em",
            subtitleDY: "-2.1em",

            title: "text-display-lg font-semibold",
            subtitle: "text-sm font-medium",
        },
        // collapse-end
    };

    return (
        <div className="h-100 w-full">
            <ResponsiveContainer>
                <RadialBarChart
                    data={progressCircleData}
                    accessibilityLayer
                    innerRadius={sizes[size].innerRadius}
                    barSize={sizes[size].size}
                    // This is needed to start the chart at the top and go clockwise
                    startAngle={90}
                    endAngle={360 + 90}
                >
                    <PolarAngleAxis tick={false} type="number" domain={[0, 1000]} reversed />

                    <RadialBar
                        isAnimationActive={false}
                        dataKey="value"
                        fill="currentColor"
                        cornerRadius={99}
                        background={{
                            className: "fill-utility-gray-200",
                        }}
                    />

                    {(title || subtitle) && (
                        <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle">
                            {subtitle && (
                                <tspan x="50%" dy={title ? sizes[size].subtitleDY : "1%"} className={cx("fill-current text-tertiary", sizes[size].subtitle)}>
                                    {subtitle}
                                </tspan>
                            )}
                            {title && (
                                <tspan x="50%" dy={subtitle ? sizes[size].titleDY : "1%"} className={cx("fill-current text-primary", sizes[size].title)}>
                                    {title}
                                </tspan>
                            )}
                        </text>
                    )}
                </RadialBarChart>
            </ResponsiveContainer>
        </div>
    );
};

export const ProgressCircleXs = () => <ProgressCircle size="xs" title="40%" subtitle="Active users" />;
export const ProgressCircleSm = () => <ProgressCircle title="40%" subtitle="Active users" />;
export const ProgressCircleMd = () => <ProgressCircle size="md" title="40%" subtitle="Active users" />;
export const ProgressCircleLg = () => <ProgressCircle size="lg" title="40%" subtitle="Active users" />;
export const ProgressCircleXsOnlyTitle = () => <ProgressCircle size="xs" title="40%" />;
export const ProgressCircleSmOnlyTitle = () => <ProgressCircle size="sm" title="40%" />;
export const ProgressCircleMdOnlyTitle = () => <ProgressCircle size="md" title="40%" />;
export const ProgressCircleLgOnlyTitle = () => <ProgressCircle size="lg" title="40%" />;
