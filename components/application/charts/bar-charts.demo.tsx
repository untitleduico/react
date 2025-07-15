"use client";

import { Bar, CartesianGrid, ComposedChart, Label, Legend, Line, BarChart as RechartsBarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { ChartLegendContent, ChartTooltipContent, selectEvenlySpacedItems } from "@/components/application/charts/charts-base";
import { useBreakpoint } from "@/hooks/use-breakpoint";

const barData = [
    // collapse-start
    {
        month: new Date(2025, 0, 1),
        A: 300,
        B: 200,
        C: 350,
    },
    {
        month: new Date(2025, 1, 1),
        A: 320,
        B: 300,
        C: 300,
    },
    {
        month: new Date(2025, 2, 1),
        A: 300,
        B: 200,
        C: 240,
    },
    {
        month: new Date(2025, 3, 1),
        A: 240,
        B: 300,
        C: 280,
    },
    {
        month: new Date(2025, 4, 1),
        A: 320,
        B: 280,
        C: 100,
    },
    {
        month: new Date(2025, 5, 1),
        A: 330,
        B: 300,
        C: 130,
    },
    {
        month: new Date(2025, 6, 1),
        A: 300,
        B: 200,
        C: 100,
    },
    {
        month: new Date(2025, 7, 1),
        A: 350,
        B: 300,
        C: 200,
    },
    {
        month: new Date(2025, 8, 1),
        A: 300,
        B: 200,
        C: 100,
    },
    {
        month: new Date(2025, 9, 1),
        A: 200,
        B: 300,
        C: 280,
    },
    {
        month: new Date(2025, 10, 1),
        A: 240,
        B: 300,
        C: 300,
    },
    {
        month: new Date(2025, 11, 1),
        A: 200,
        B: 400,
        C: 350,
    },
    // collapse-end
];

export const BarChart = () => {
    const isDesktop = useBreakpoint("lg");

    const colors: Record<string, string> = {
        A: "text-utility-brand-700",
        B: "text-utility-brand-500",
        C: "text-utility-gray-200",
    };

    return (
        <ResponsiveContainer className="h-60!">
            <RechartsBarChart
                data={barData}
                className="text-tertiary [&_.recharts-text]:text-xs"
                margin={{
                    left: 4,
                    right: 0,
                    top: isDesktop ? 12 : 6,
                    bottom: 18,
                }}
            >
                <CartesianGrid vertical={false} stroke="currentColor" className="text-utility-gray-100" />

                <Legend
                    verticalAlign="top"
                    align="right"
                    layout={isDesktop ? "vertical" : "horizontal"}
                    content={<ChartLegendContent className="-translate-y-2" />}
                />

                <XAxis
                    fill="currentColor"
                    axisLine={false}
                    tickLine={false}
                    tickMargin={11}
                    interval="preserveStartEnd"
                    dataKey="month"
                    tickFormatter={(value) => value.toLocaleDateString(undefined, { month: "short" })}
                >
                    <Label value="Month" fill="currentColor" className="!text-xs font-medium" position="bottom" />
                </XAxis>

                <YAxis
                    fill="currentColor"
                    axisLine={false}
                    tickLine={false}
                    interval="preserveStartEnd"
                    tickFormatter={(value) => Number(value).toLocaleString()}
                >
                    <Label
                        value="Active users"
                        fill="currentColor"
                        className="!text-xs font-medium"
                        style={{ textAnchor: "middle" }}
                        angle={-90}
                        position="insideLeft"
                    />
                </YAxis>

                <Tooltip
                    content={<ChartTooltipContent />}
                    formatter={(value) => Number(value).toLocaleString()}
                    labelFormatter={(value) => value.toLocaleDateString(undefined, { month: "short", year: "numeric" })}
                    cursor={{
                        className: "fill-utility-gray-200/20",
                    }}
                />

                <Bar
                    isAnimationActive={false}
                    className={colors["A"]}
                    dataKey="A"
                    name="Series 1"
                    type="monotone"
                    stackId="a"
                    fill="currentColor"
                    maxBarSize={isDesktop ? 32 : 16}
                />
                <Bar
                    isAnimationActive={false}
                    className={colors["B"]}
                    dataKey="B"
                    name="Series 2"
                    type="monotone"
                    stackId="a"
                    fill="currentColor"
                    maxBarSize={isDesktop ? 32 : 16}
                />
                <Bar
                    isAnimationActive={false}
                    className={colors["C"]}
                    dataKey="C"
                    name="Series 3"
                    type="monotone"
                    stackId="a"
                    fill="currentColor"
                    maxBarSize={isDesktop ? 32 : 16}
                    radius={[6, 6, 0, 0]}
                />
            </RechartsBarChart>
        </ResponsiveContainer>
    );
};

export const BarChart02 = () => {
    const colors: Record<string, string> = {
        A: "text-utility-brand-600",
        B: "text-utility-brand-400",
    };

    const data = [
        // collapse-start
        { A: 633, B: 190, date: "2025-01-01" },
        { A: 443, B: 228, date: "2025-01-08" },
        { A: 506, B: 225, date: "2025-01-15" },
        { A: 316, B: 227, date: "2025-01-22" },
        { A: 760, B: 209, date: "2025-01-29" },
        { A: 950, B: 220, date: "2025-02-05" },
        { A: 760, B: 224, date: "2025-02-12" },
        { A: 570, B: 279, date: "2025-02-19" },
        { A: 253, B: 296, date: "2025-02-26" },
        { A: 380, B: 263, date: "2025-03-05" },
        { A: 443, B: 333, date: "2025-03-12" },
        { A: 443, B: 306, date: "2025-03-19" },
        { A: 316, B: 315, date: "2025-03-26" },
        { A: 190, B: 325, date: "2025-04-02" },
        { A: 380, B: 367, date: "2025-04-09" },
        { A: 506, B: 372, date: "2025-04-16" },
        { A: 443, B: 374, date: "2025-04-23" },
        { A: 696, B: 278, date: "2025-04-30" },
        { A: 950, B: 258, date: "2025-05-07" },
        { A: 633, B: 357, date: "2025-05-14" },
        { A: 570, B: 372, date: "2025-05-21" },
        { A: 253, B: 404, date: "2025-05-28" },
        { A: 316, B: 314, date: "2025-06-04" },
        { A: 380, B: 359, date: "2025-06-11" },
        { A: 253, B: 400, date: "2025-06-18" },
        { A: 190, B: 381, date: "2025-06-25" },
        { A: 316, B: 427, date: "2025-07-02" },
        { A: 633, B: 371, date: "2025-07-09" },
        { A: 570, B: 382, date: "2025-07-16" },
        { A: 760, B: 383, date: "2025-07-23" },
        { A: 950, B: 361, date: "2025-07-30" },
        { A: 696, B: 405, date: "2025-08-06" },
        { A: 570, B: 400, date: "2025-08-13" },
        { A: 443, B: 391, date: "2025-08-20" },
        { A: 316, B: 425, date: "2025-08-27" },
        { A: 253, B: 406, date: "2025-09-03" },
        { A: 380, B: 472, date: "2025-09-10" },
        { A: 633, B: 477, date: "2025-09-17" },
        { A: 570, B: 465, date: "2025-09-24" },
        { A: 443, B: 488, date: "2025-10-01" },
        { A: 380, B: 501, date: "2025-10-08" },
        { A: 316, B: 615, date: "2025-10-15" },
        { A: 570, B: 612, date: "2025-10-22" },
        { A: 506, B: 673, date: "2025-10-29" },
        { A: 443, B: 630, date: "2025-11-05" },
        { A: 760, B: 630, date: "2025-11-12" },
        { A: 443, B: 597, date: "2025-11-19" },
        { A: 506, B: 572, date: "2025-11-26" },
        { A: 316, B: 636, date: "2025-12-03" },
        { A: 633, B: 664, date: "2025-12-10" },
        { A: 380, B: 742, date: "2025-12-17" },
        { A: 633, B: 808, date: "2025-12-24" },
        // collapse-end
    ];

    return (
        <div className="flex h-60 flex-col gap-2">
            <ResponsiveContainer className="h-full">
                <ComposedChart
                    data={data}
                    margin={{
                        left: 4,
                        right: 0,
                        top: 12,
                        bottom: 18,
                    }}
                    className="text-tertiary [&_.recharts-text]:text-xs"
                >
                    <CartesianGrid vertical={false} stroke="currentColor" className="text-utility-gray-100" />

                    <XAxis
                        fill="currentColor"
                        axisLine={false}
                        tickLine={false}
                        tickMargin={12}
                        interval="preserveStartEnd"
                        dataKey="date"
                        tickFormatter={(value) => new Date(value).toLocaleDateString(undefined, { month: "short" })}
                        ticks={selectEvenlySpacedItems(data, 12).map((item) => item.date)}
                    >
                        <Label value="Month" fill="currentColor" className="!text-xs font-medium" position="bottom" />
                    </XAxis>

                    <YAxis
                        fill="currentColor"
                        axisLine={false}
                        tickLine={false}
                        interval="preserveStartEnd"
                        tickFormatter={(value) => Number(value).toLocaleString()}
                    >
                        <Label
                            value="Active users"
                            fill="currentColor"
                            className="!text-xs font-medium"
                            style={{ textAnchor: "middle" }}
                            angle={-90}
                            position="insideLeft"
                        />
                    </YAxis>

                    <Tooltip
                        content={<ChartTooltipContent />}
                        formatter={(value) => Number(value).toLocaleString()}
                        // Custom label formatter to show the week range
                        labelFormatter={(value) => {
                            const date = new Date(value);
                            const endDate = new Date(date);
                            endDate.setDate(date.getDate() + 6); // Set end date to 7 days after start date

                            // If the start and end dates are in the same month, shorten the label (Jun 1-7, 2025)
                            if (date.getMonth() === endDate.getMonth()) {
                                return `${date.toLocaleDateString(undefined, { month: "long" })} ${date.getDate()}-${endDate.getDate()}, ${endDate.getFullYear()}`;
                            }

                            // Otherwise, show the full month range (May 30 - Jun 5, 2025)
                            return `${date.toLocaleDateString(undefined, { month: "short", day: "numeric" })} - ${endDate.toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" })}`;
                        }}
                        cursor={{
                            className: "fill-utility-gray-200/20",
                        }}
                    />

                    <Bar
                        isAnimationActive={false}
                        className={colors["A"]}
                        name="Mobile"
                        dataKey="A"
                        type="monotone"
                        stackId="a"
                        fill="currentColor"
                        maxBarSize={12}
                        radius={[4, 4, 0, 0]}
                    />
                    <Line
                        isAnimationActive={false}
                        className={colors["B"]}
                        dataKey="B"
                        name="Desktop"
                        type="monotone"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeDasharray="0.1 8"
                        strokeLinecap="round"
                        activeDot={false}
                        dot={false}
                    />
                </ComposedChart>
            </ResponsiveContainer>
        </div>
    );
};

export const BarChart03 = () => {
    const colors: Record<string, string> = {
        A: "text-utility-brand-600",
        B: "text-utility-brand-400",
    };

    const data = [
        // collapse-start
        { A: 633, B: 190, date: "2025-01-01" },
        { A: 443, B: 228, date: "2025-01-08" },
        { A: 506, B: 225, date: "2025-01-15" },
        { A: 316, B: 227, date: "2025-01-22" },
        { A: 760, B: 209, date: "2025-01-29" },
        { A: 950, B: 220, date: "2025-02-05" },
        { A: 760, B: 224, date: "2025-02-12" },
        { A: 570, B: 279, date: "2025-02-19" },
        { A: 253, B: 296, date: "2025-02-26" },
        { A: 380, B: 263, date: "2025-03-05" },
        { A: 443, B: 333, date: "2025-03-12" },
        { A: 443, B: 306, date: "2025-03-19" },
        { A: 316, B: 315, date: "2025-03-26" },
        { A: 190, B: 325, date: "2025-04-02" },
        { A: 380, B: 367, date: "2025-04-09" },
        { A: 506, B: 372, date: "2025-04-16" },
        { A: 443, B: 374, date: "2025-04-23" },
        { A: 696, B: 278, date: "2025-04-30" },
        { A: 950, B: 258, date: "2025-05-07" },
        { A: 633, B: 357, date: "2025-05-14" },
        { A: 570, B: 372, date: "2025-05-21" },
        { A: 253, B: 404, date: "2025-05-28" },
        { A: 316, B: 314, date: "2025-06-04" },
        { A: 380, B: 359, date: "2025-06-11" },
        { A: 253, B: 400, date: "2025-06-18" },
        { A: 190, B: 381, date: "2025-06-25" },
        { A: 316, B: 427, date: "2025-07-02" },
        { A: 633, B: 371, date: "2025-07-09" },
        { A: 570, B: 382, date: "2025-07-16" },
        { A: 760, B: 383, date: "2025-07-23" },
        { A: 950, B: 361, date: "2025-07-30" },
        { A: 696, B: 405, date: "2025-08-06" },
        { A: 570, B: 400, date: "2025-08-13" },
        { A: 443, B: 391, date: "2025-08-20" },
        { A: 316, B: 425, date: "2025-08-27" },
        { A: 253, B: 406, date: "2025-09-03" },
        { A: 380, B: 472, date: "2025-09-10" },
        { A: 633, B: 477, date: "2025-09-17" },
        { A: 570, B: 465, date: "2025-09-24" },
        { A: 443, B: 488, date: "2025-10-01" },
        { A: 380, B: 501, date: "2025-10-08" },
        { A: 316, B: 615, date: "2025-10-15" },
        { A: 570, B: 612, date: "2025-10-22" },
        { A: 506, B: 673, date: "2025-10-29" },
        { A: 443, B: 630, date: "2025-11-05" },
        { A: 760, B: 630, date: "2025-11-12" },
        { A: 443, B: 597, date: "2025-11-19" },
        { A: 506, B: 572, date: "2025-11-26" },
        { A: 316, B: 636, date: "2025-12-03" },
        { A: 633, B: 664, date: "2025-12-10" },
        { A: 380, B: 742, date: "2025-12-17" },
        { A: 633, B: 808, date: "2025-12-24" },
        // collapse-end
    ];

    return (
        <div className="flex h-60 flex-col gap-2">
            <ResponsiveContainer className="h-full">
                <ComposedChart
                    data={data}
                    margin={{
                        left: 4,
                        right: 0,
                        top: 12,
                        bottom: 18,
                    }}
                    className="text-tertiary [&_.recharts-text]:text-xs"
                >
                    <CartesianGrid vertical={false} stroke="currentColor" className="text-utility-gray-100" />

                    <XAxis
                        fill="currentColor"
                        axisLine={false}
                        tickLine={false}
                        tickMargin={12}
                        interval="preserveStartEnd"
                        dataKey="date"
                        tickFormatter={(value) => new Date(value).toLocaleDateString(undefined, { month: "short" })}
                        ticks={selectEvenlySpacedItems(data, 12).map((item) => item.date)}
                    >
                        <Label value="Month" fill="currentColor" className="!text-xs font-medium" position="bottom" />
                    </XAxis>

                    <YAxis
                        fill="currentColor"
                        axisLine={false}
                        tickLine={false}
                        interval="preserveStartEnd"
                        tickFormatter={(value) => Number(value).toLocaleString()}
                    >
                        <Label
                            value="Active users"
                            fill="currentColor"
                            className="!text-xs font-medium"
                            style={{ textAnchor: "middle" }}
                            angle={-90}
                            position="insideLeft"
                        />
                    </YAxis>

                    <Tooltip
                        content={<ChartTooltipContent />}
                        formatter={(value) => Number(value).toLocaleString()}
                        // Custom label formatter to show the week range
                        labelFormatter={(value) => {
                            const date = new Date(value);
                            const endDate = new Date(date);
                            endDate.setDate(date.getDate() + 6); // Set end date to 7 days after start date

                            // If the start and end dates are in the same month, shorten the label (Jun 1-7, 2025)
                            if (date.getMonth() === endDate.getMonth()) {
                                return `${date.toLocaleDateString(undefined, { month: "long" })} ${date.getDate()}-${endDate.getDate()}, ${endDate.getFullYear()}`;
                            }

                            // Otherwise, show the full month range (May 30 - Jun 5, 2025)
                            return `${date.toLocaleDateString(undefined, { month: "short", day: "numeric" })} - ${endDate.toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" })}`;
                        }}
                        cursor={{
                            className: "fill-utility-gray-200/20",
                        }}
                    />

                    <Bar
                        isAnimationActive={false}
                        className={colors["A"]}
                        name="Mobile"
                        dataKey="A"
                        type="monotone"
                        stackId="a"
                        fill="currentColor"
                        maxBarSize={8}
                        radius={[4, 4, 0, 0]}
                    />
                    <Line
                        isAnimationActive={false}
                        className={colors["B"]}
                        dataKey="B"
                        name="Desktop"
                        type="monotone"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeDasharray="0.1 8"
                        strokeLinecap="round"
                        activeDot={false}
                        dot={false}
                    />
                </ComposedChart>
            </ResponsiveContainer>
        </div>
    );
};
