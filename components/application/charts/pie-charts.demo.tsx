"use client";

import { Legend, Pie, PieChart as RechartsPieChart, ResponsiveContainer, Tooltip } from "recharts";
import { ChartLegendContent, ChartTooltipContent } from "@/components/application/charts/charts-base";

const pieChartData = [
    // collapse-start
    {
        name: "Series 1",
        value: 200,
        className: "text-utility-brand-600",
    },
    {
        name: "Series 2",
        value: 350,
        className: "text-utility-brand-500",
    },
    {
        name: "Series 3",
        value: 100,
        className: "text-utility-brand-400",
    },
    {
        name: "Series 4",
        value: 120,
        className: "text-utility-brand-300",
    },
    {
        name: "Series 5",
        value: 230,
        className: "text-utility-gray-200",
    },
    // collapse-end
];

const sizes = {
    // collapse-start
    xxs: {
        innerRadius: 30,
        outerRadius: 60,
    },
    xs: {
        innerRadius: 40,
        outerRadius: 80,
    },
    sm: {
        innerRadius: 50,
        outerRadius: 100,
    },
    md: {
        innerRadius: 60,
        outerRadius: 120,
    },
    lg: {
        innerRadius: 70,
        outerRadius: 140,
    },
    // collapse-end
};

export const PieChart = ({
    size = "sm",
    data = pieChartData,
}: {
    size?: "xxs" | "xs" | "sm" | "md" | "lg";
    data?: { name: string; value: number; className?: string }[];
}) => {
    return (
        <ResponsiveContainer>
            <RechartsPieChart
                margin={{
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                }}
            >
                <Legend verticalAlign="top" align="right" layout="vertical" content={ChartLegendContent} />
                <Tooltip content={<ChartTooltipContent isPieChart />} />

                <Pie
                    isAnimationActive={false}
                    startAngle={-270}
                    endAngle={-630}
                    stroke="none"
                    data={data}
                    dataKey="value"
                    nameKey="name"
                    fill="currentColor"
                    innerRadius={sizes[size].innerRadius}
                    outerRadius={sizes[size].outerRadius}
                />
            </RechartsPieChart>
        </ResponsiveContainer>
    );
};

export const PieChartXxs = () => <PieChart size="xxs" />;
export const PieChartXs = () => <PieChart size="xs" />;
export const PieChartSm = () => <PieChart />;
export const PieChartMd = () => <PieChart size="md" />;
export const PieChartLg = () => <PieChart size="lg" />;
