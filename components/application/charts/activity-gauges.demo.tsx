"use client";

import { Legend, PolarAngleAxis, RadialBar, RadialBarChart, ResponsiveContainer, Tooltip } from "recharts";
import { ChartLegendContent, ChartTooltipContent } from "@/components/application/charts/charts-base";
import { cx } from "@/utils/cx";

const radialData = [
    {
        name: "Series 3",
        value: 660,
        className: "text-utility-brand-400",
    },
    {
        name: "Series 2",
        value: 774,
        className: "text-utility-brand-600",
    },
    {
        name: "Series 1",
        value: 866,
        className: "text-utility-brand-700",
    },
];

const sizes = {
    // collapse-start
    xs: {
        innerRadius: 52,
        outerRadius: 86,

        titleDY: "1.25em",
        subtitleDY: "-1.175em",

        title: "text-xl font-semibold",
        subtitle: "text-xs font-medium",
    },
    sm: {
        innerRadius: 61,
        outerRadius: 110,

        titleDY: "1.15em",
        subtitleDY: "-1.35em",

        title: "text-display-xs font-semibold",
        subtitle: "text-xs font-medium",
    },
    md: {
        innerRadius: 74,
        outerRadius: 132,

        titleDY: "1.075em",
        subtitleDY: "-1.45em",

        title: "text-display-sm font-semibold",
        subtitle: "text-sm font-medium",
    },
    lg: {
        innerRadius: 84,
        outerRadius: 154,

        titleDY: "1em",
        subtitleDY: "-1.4em",

        title: "text-display-md font-semibold",
        subtitle: "text-sm font-medium",
    },
    // collapse-end
};

interface ActivityGaugeProps {
    size?: "xs" | "sm" | "md" | "lg";
    title?: string;
    subtitle?: string;
    data?: {
        name: string;
        value: number;
        className?: string;
    }[];
}

export const ActivityGauge = ({ size = "sm", title = "1,000", subtitle = "Active users", data = radialData }: ActivityGaugeProps) => {
    return (
        <ResponsiveContainer height={sizes[size].outerRadius * 2 + 48} className="w-full">
            <RadialBarChart
                data={data}
                accessibilityLayer
                innerRadius={sizes[size].innerRadius}
                outerRadius={sizes[size].outerRadius}
                // This is needed to start the chart at the top and go clockwise
                startAngle={90}
                endAngle={360 + 90}
                className="font-medium text-tertiary [&_.recharts-polar-grid]:text-utility-gray-100 [&_.recharts-text]:text-sm"
                margin={{
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                }}
            >
                <PolarAngleAxis
                    tick={false}
                    domain={[0, 1000]}
                    type="number"
                    // @ts-expect-error this prop works but isn't correct in TS types at the moment
                    reversed
                />

                <Legend verticalAlign="bottom" align="center" layout="horizontal" content={<ChartLegendContent reversed />} />

                <Tooltip content={<ChartTooltipContent isRadialChart />} />

                <RadialBar
                    isAnimationActive={false}
                    dataKey="value"
                    cornerRadius={99}
                    fill="currentColor"
                    background={{
                        className: "fill-utility-gray-100",
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
    );
};

export const ActivityGaugeXs = () => <ActivityGauge size="xs" />;
export const ActivityGaugeSm = () => <ActivityGauge size="sm" />;
export const ActivityGaugeMd = () => <ActivityGauge size="md" />;
export const ActivityGaugeLg = () => <ActivityGauge size="lg" />;
