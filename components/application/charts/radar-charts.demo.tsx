"use client";

import { Fragment, useEffect, useRef } from "react";
import { Legend, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart as RechartsRadarChart, ResponsiveContainer, Tooltip } from "recharts";
import { ChartLegendContent, ChartTooltipContent } from "@/components/application/charts/charts-base";
import { cx } from "@/utils/cx";

interface CustomRadarChartTickProps {
    payload: { value: string };
    x: number;
    y: number;
    textAnchor: string;
    stroke: string;
    radius: number;
}

export const CustomRadarChartTick = ({ payload, x, y, textAnchor, stroke, radius }: CustomRadarChartTickProps) => {
    const textRef = useRef<SVGTextElement>(null);
    const rectRef = useRef<SVGRectElement>(null);

    useEffect(() => {
        if (textRef.current && rectRef.current) {
            const textBoundingBox = textRef.current.getBBox();

            const EXTRA_WIDTH = 16;
            const EXTRA_HEIGHT = 8;

            rectRef.current.setAttribute("width", (textBoundingBox.width + EXTRA_WIDTH).toString());
            rectRef.current.setAttribute("height", (textBoundingBox.height + EXTRA_HEIGHT).toString());
            rectRef.current.setAttribute("x", (textBoundingBox.x - EXTRA_WIDTH / 2).toString());
            rectRef.current.setAttribute("y", (textBoundingBox.y - EXTRA_HEIGHT / 2).toString());
        }
    }, [x, y, radius]);

    return (
        <Fragment>
            <rect ref={rectRef} x={x} y={y} rx={11} className="fill-utility-gray-50 stroke-utility-gray-200 stroke-1"></rect>
            <text
                ref={textRef}
                x={x}
                y={y + 5}
                radius={radius}
                stroke={stroke}
                textAnchor={textAnchor}
                className="recharts-text recharts-polar-angle-axis-tick-value"
            >
                <tspan x={x} dy="0em" className="fill-utility-gray-700 text-xs font-medium">
                    {payload.value}
                </tspan>
            </text>
        </Fragment>
    );
};

const radarData = [
    // collapse-start
    {
        subject: "Mon",
        A: 800,
        B: 400,
        C: 600,
    },
    {
        subject: "Tue",
        A: 600,
        B: 1000,
        C: 800,
    },
    {
        subject: "Wed",
        A: 600,
        B: 200,
        C: 400,
    },
    {
        subject: "Thu",
        A: 200,
        B: 600,
        C: 800,
    },
    {
        subject: "Fri",
        A: 400,
        B: 200,
        C: 600,
    },
    {
        subject: "Sat",
        A: 1000,
        B: 800,
        C: 600,
    },
    {
        subject: "Sun",
        A: 400,
        B: 1000,
        C: 800,
    },
    // collapse-end
];

export const RadarChart = () => {
    const colors: Record<string, string> = {
        A: "text-utility-brand-600",
        B: "text-utility-pink-500",
        C: "text-utility-blue-light-500",
    };

    return (
        <ResponsiveContainer height={500} width="100%">
            <RechartsRadarChart
                cx="50%"
                cy="50%"
                outerRadius="80%"
                data={radarData}
                className="size-full font-medium text-tertiary [&_.recharts-polar-grid]:text-utility-gray-100 [&_.recharts-text]:text-sm"
                margin={{
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                }}
            >
                <Legend verticalAlign="bottom" align="center" layout="horizontal" content={ChartLegendContent} />

                <PolarGrid stroke="currentColor" className="text-utility-gray-100" />
                <PolarAngleAxis
                    dataKey="subject"
                    stroke="currentColor"
                    tick={({ x, y, textAnchor, index, payload, ...props }) => (
                        <text
                            x={x}
                            y={index === 0 ? Number(y) - 14 : index === 3 || index === 4 ? Number(y) + 10 : Number(y)}
                            textAnchor={textAnchor}
                            {...props}
                            className={cx("recharts-text recharts-polar-angle-axis-tick-value", props.className)}
                        >
                            <tspan dy="0em" className="fill-utility-gray-700 text-xs font-medium">
                                {payload.value}
                            </tspan>
                        </text>
                    )}
                    tickLine={false}
                    axisLine={false}
                />
                <PolarRadiusAxis textAnchor="middle" tick={(props) => <CustomRadarChartTick {...props} />} axisLine={false} angle={90} domain={[0, 1000]} />

                <Tooltip
                    content={<ChartTooltipContent />}
                    cursor={{
                        className: "stroke-utility-brand-600  stroke-2",
                        style: {
                            transform: "translateZ(0)",
                        },
                    }}
                />

                <Radar
                    isAnimationActive={false}
                    className={colors["A"]}
                    dataKey="A"
                    name="Series 1"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinejoin="round"
                    fill="currentColor"
                    fillOpacity={0.2}
                    activeDot={{
                        className: "fill-bg-primary stroke-utility-brand-600 stroke-2",
                    }}
                />
                <Radar
                    isAnimationActive={false}
                    className={colors["B"]}
                    dataKey="B"
                    name="Series 2"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinejoin="round"
                    fill="currentColor"
                    fillOpacity={0.2}
                    activeDot={{
                        className: "fill-bg-primary stroke-utility-brand-600 stroke-2",
                    }}
                />
                <Radar
                    isAnimationActive={false}
                    className={colors["C"]}
                    dataKey="C"
                    name="Series 3"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinejoin="round"
                    fill="currentColor"
                    fillOpacity={0.2}
                    activeDot={{
                        className: "fill-bg-primary stroke-utility-brand-600 stroke-2",
                    }}
                />
            </RechartsRadarChart>
        </ResponsiveContainer>
    );
};
