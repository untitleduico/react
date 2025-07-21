"use client";

import { Area, AreaChart, CartesianGrid, Label, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { ChartLegendContent, ChartTooltipContent } from "@/components/application/charts/charts-base";
import { useBreakpoint } from "@/hooks/use-breakpoint";
import { cx } from "@/utils/cx";

const lineData = [
    // collapse-start
    {
        date: new Date(2025, 0, 1),
        A: 600,
        B: 400,
        C: 100,
    },
    {
        date: new Date(2025, 1, 1),
        A: 620,
        B: 405,
        C: 160,
    },
    {
        date: new Date(2025, 2, 1),
        A: 630,
        B: 400,
        C: 170,
    },
    {
        date: new Date(2025, 3, 1),
        A: 650,
        B: 410,
        C: 190,
    },
    {
        date: new Date(2025, 4, 1),
        A: 600,
        B: 320,
        C: 200,
    },
    {
        date: new Date(2025, 5, 1),
        A: 650,
        B: 430,
        C: 230,
    },
    {
        date: new Date(2025, 6, 1),
        A: 620,
        B: 400,
        C: 200,
    },
    {
        date: new Date(2025, 7, 1),
        A: 750,
        B: 540,
        C: 300,
    },
    {
        date: new Date(2025, 8, 1),
        A: 780,
        B: 490,
        C: 390,
    },
    {
        date: new Date(2025, 9, 1),
        A: 750,
        B: 450,
        C: 300,
    },
    {
        date: new Date(2025, 10, 1),
        A: 780,
        B: 480,
        C: 340,
    },
    {
        date: new Date(2025, 11, 1),
        A: 820,
        B: 500,
        C: 450,
    },
    // collapse-end
];

export const LineChart01 = () => {
    const isDesktop = useBreakpoint("lg");

    const colors: Record<string, string> = {
        A: "text-utility-brand-600",
        B: "text-utility-brand-400",
        C: "text-utility-brand-700",
    };

    return (
        <div className="flex h-60 flex-col gap-2">
            <ResponsiveContainer className="h-full">
                <AreaChart
                    data={lineData}
                    className="text-tertiary [&_.recharts-text]:text-xs"
                    margin={{
                        top: isDesktop ? 12 : 6,
                        bottom: isDesktop ? 16 : 0,
                    }}
                >
                    <defs>
                        <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="currentColor" className="text-utility-brand-700" stopOpacity="0.7" />
                            <stop offset="95%" stopColor="currentColor" className="text-utility-brand-700" stopOpacity="0" />
                        </linearGradient>
                    </defs>

                    <CartesianGrid vertical={false} stroke="currentColor" className="text-utility-gray-100" />

                    <Legend
                        align="right"
                        verticalAlign="top"
                        layout={isDesktop ? "vertical" : "horizontal"}
                        content={<ChartLegendContent className="-translate-y-2" />}
                    />

                    <XAxis
                        fill="currentColor"
                        axisLine={false}
                        tickLine={false}
                        interval="preserveStartEnd"
                        dataKey="date"
                        tickFormatter={(value) => value.toLocaleDateString(undefined, { month: "short" })}
                        padding={{ left: 10, right: 10 }}
                    >
                        {isDesktop && (
                            <Label fill="currentColor" className="!text-xs font-medium max-lg:hidden" position="bottom">
                                Month
                            </Label>
                        )}
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
                            className: "stroke-utility-brand-600 stroke-2",
                        }}
                    />

                    <Area
                        isAnimationActive={false}
                        className={cx(colors["A"], "[&_.recharts-area-area]:translate-y-1.5 [&_.recharts-area-area]:[clip-path:inset(0_0_6px_0)]")}
                        dataKey="A"
                        name="Series 1"
                        type="monotone"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="url(#gradient)"
                        fillOpacity={0.1}
                        activeDot={{
                            className: "fill-bg-primary stroke-utility-brand-600 stroke-2",
                        }}
                    />

                    <Area
                        isAnimationActive={false}
                        className={cx(colors["B"], "[&_.recharts-area-area]:translate-y-1.5 [&_.recharts-area-area]:[clip-path:inset(0_0_6px_0)]")}
                        dataKey="B"
                        name="Series 2"
                        type="monotone"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        activeDot={{
                            className: "fill-bg-primary stroke-utility-brand-600 stroke-2",
                        }}
                    />

                    <Area
                        isAnimationActive={false}
                        className={cx(colors["C"], "[&_.recharts-area-area]:translate-y-1.5 [&_.recharts-area-area]:[clip-path:inset(0_0_6px_0)]")}
                        dataKey="C"
                        name="Series 3"
                        type="monotone"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        activeDot={{
                            className: "fill-bg-primary stroke-utility-brand-600 stroke-2",
                        }}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export const LineChart02 = () => {
    const isDesktop = useBreakpoint("lg");

    const colors: Record<string, string> = {
        A: "text-utility-brand-600",
        B: "text-utility-brand-400",
        C: "text-utility-brand-700",
    };

    return (
        <div className="flex h-60 flex-col gap-2">
            <ResponsiveContainer className="h-full">
                <AreaChart
                    data={lineData}
                    className="text-tertiary [&_.recharts-text]:text-xs"
                    margin={{
                        left: 5,
                        right: 5,
                        top: isDesktop ? 12 : 6,
                        bottom: isDesktop ? 16 : 0,
                    }}
                >
                    <defs>
                        <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="currentColor" className="text-utility-brand-700" stopOpacity="0.7" />
                            <stop offset="95%" stopColor="currentColor" className="text-utility-brand-700" stopOpacity="0" />
                        </linearGradient>
                    </defs>

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
                        interval="preserveStartEnd"
                        dataKey="date"
                        tickFormatter={(value) => value.toLocaleDateString(undefined, { month: "short" })}
                        padding={{ left: 10, right: 10 }}
                    >
                        {isDesktop && (
                            <Label fill="currentColor" className="!text-xs font-medium max-lg:hidden" position="bottom">
                                Month
                            </Label>
                        )}
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
                            className: "stroke-utility-brand-600 stroke-2",
                        }}
                    />

                    <Area
                        isAnimationActive={false}
                        className={cx(colors["A"], "[&_.recharts-area-area]:translate-y-1.5 [&_.recharts-area-area]:[clip-path:inset(0_0_6px_0)]")}
                        dataKey="A"
                        name="Series 1"
                        type="monotone"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="url(#gradient)"
                        fillOpacity={0.1}
                        activeDot={{
                            className: "fill-bg-primary stroke-utility-brand-600 stroke-2",
                        }}
                    />

                    <Area
                        isAnimationActive={false}
                        className={cx(colors["B"], "[&_.recharts-area-area]:translate-y-1.5 [&_.recharts-area-area]:[clip-path:inset(0_0_6px_0)]")}
                        dataKey="B"
                        name="Series 2"
                        type="monotone"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeDasharray="0.1 8"
                        strokeLinecap="round"
                        activeDot={{
                            className: "fill-bg-primary stroke-utility-brand-600 stroke-2",
                        }}
                    />

                    <Area
                        isAnimationActive={false}
                        className={cx(colors["C"], "[&_.recharts-area-area]:translate-y-1.5 [&_.recharts-area-area]:[clip-path:inset(0_0_6px_0)]")}
                        dataKey="C"
                        name="Series 3"
                        type="monotone"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeDasharray="0.1 8"
                        strokeLinecap="round"
                        activeDot={{
                            className: "fill-bg-primary stroke-utility-brand-600 stroke-2",
                        }}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export const LineChart03 = () => {
    const isDesktop = useBreakpoint("lg");

    const colors: Record<string, string> = {
        A: "text-utility-brand-600",
        B: "text-utility-brand-400",
        C: "text-utility-brand-700",
    };

    return (
        <div className="flex h-60 flex-col gap-2">
            <ResponsiveContainer className="h-full">
                <AreaChart
                    data={lineData}
                    className="text-tertiary [&_.recharts-text]:text-xs"
                    margin={{
                        left: 5,
                        right: 5,
                        top: isDesktop ? 12 : 6,
                        bottom: isDesktop ? 16 : 0,
                    }}
                >
                    <defs>
                        <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="currentColor" className="text-utility-gray-500" stopOpacity="0.8" />
                            <stop offset="80%" stopColor="currentColor" className="text-utility-gray-500" stopOpacity="0" />
                        </linearGradient>

                        <pattern id="verticalLines" width="8" height="100%" fill="url(#gradient)" patternUnits="userSpaceOnUse">
                            <line x1="0" y1="0" x2="0" y2="100%" stroke="currentColor" className="text-utility-gray-200" strokeWidth="1.5" />
                            <rect width="100%" height="100%" fill="url(#gradient)" fillOpacity={0.15} />
                        </pattern>
                    </defs>

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
                        tickMargin={10}
                        interval="preserveStartEnd"
                        dataKey="date"
                        padding={{ left: 10, right: 10 }}
                        tickFormatter={(value) => value.toLocaleDateString(undefined, { month: "short" })}
                    >
                        {isDesktop && (
                            <Label fill="currentColor" className="!text-xs font-medium max-lg:hidden" position="bottom">
                                Month
                            </Label>
                        )}
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
                            className: "stroke-utility-brand-600 stroke-2",
                        }}
                    />

                    <Area
                        isAnimationActive={false}
                        className={cx(colors["A"], "[&_.recharts-area-area]:translate-y-1.5 [&_.recharts-area-area]:[clip-path:inset(0_0_6px_0)]")}
                        dataKey="A"
                        name="Series 1"
                        type="monotone"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="url(#verticalLines)"
                        fillOpacity={1}
                        activeDot={{
                            className: "fill-bg-primary stroke-utility-brand-600 stroke-2",
                        }}
                    />

                    <Area
                        isAnimationActive={false}
                        className={cx(colors["B"], "[&_.recharts-area-area]:translate-y-1.5 [&_.recharts-area-area]:[clip-path:inset(0_0_6px_0)]")}
                        dataKey="B"
                        name="Series 2"
                        type="monotone"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        activeDot={{
                            className: "fill-bg-primary stroke-utility-brand-600 stroke-2",
                        }}
                    />

                    <Area
                        isAnimationActive={false}
                        className={cx(colors["C"], "[&_.recharts-area-area]:translate-y-1.5 [&_.recharts-area-area]:[clip-path:inset(0_0_6px_0)]")}
                        dataKey="C"
                        name="Series 3"
                        type="monotone"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        activeDot={{
                            className: "fill-bg-primary stroke-utility-brand-600 stroke-2",
                        }}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export const LineChart04 = () => {
    const isDesktop = useBreakpoint("lg");

    const colors: Record<string, string> = {
        A: "text-utility-brand-600",
        B: "text-utility-gray-500",
        C: "text-utility-gray-400",
    };

    return (
        <div className="flex h-60 flex-col gap-2">
            <ResponsiveContainer className="h-full">
                <AreaChart
                    data={lineData}
                    className="text-tertiary [&_.recharts-text]:text-xs"
                    margin={{
                        left: 5,
                        right: 5,
                        top: isDesktop ? 12 : 6,
                        bottom: isDesktop ? 16 : 0,
                    }}
                >
                    <defs>
                        <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="currentColor" className="text-utility-gray-500" stopOpacity="0.7" />
                            <stop offset="95%" stopColor="currentColor" className="text-utility-gray-500" stopOpacity="0" />
                        </linearGradient>
                    </defs>

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
                        tickMargin={10}
                        interval="preserveStartEnd"
                        dataKey="date"
                        tickFormatter={(value) => value.toLocaleDateString(undefined, { month: "short" })}
                        padding={{ left: 10, right: 10 }}
                    >
                        {isDesktop && (
                            <Label fill="currentColor" className="!text-xs font-medium max-lg:hidden" position="bottom">
                                Month
                            </Label>
                        )}
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
                            className: "stroke-utility-brand-600 stroke-2",
                        }}
                    />

                    <Area
                        isAnimationActive={false}
                        className={cx(colors["A"], "[&_.recharts-area-area]:translate-y-1.5 [&_.recharts-area-area]:[clip-path:inset(0_0_6px_0)]")}
                        dataKey="A"
                        name="Series 1"
                        type="monotone"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="url(#gradient)"
                        fillOpacity={0.1}
                        activeDot={{
                            className: "fill-bg-primary stroke-utility-brand-600 stroke-2",
                        }}
                    />

                    <Area
                        isAnimationActive={false}
                        className={cx(colors["B"], "[&_.recharts-area-area]:translate-y-1.5 [&_.recharts-area-area]:[clip-path:inset(0_0_6px_0)]")}
                        dataKey="B"
                        name="Series 2"
                        type="monotone"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        activeDot={{
                            className: "fill-bg-primary stroke-utility-brand-600 stroke-2",
                        }}
                    />

                    <Area
                        isAnimationActive={false}
                        className={cx(colors["C"], "[&_.recharts-area-area]:translate-y-1.5 [&_.recharts-area-area]:[clip-path:inset(0_0_6px_0)]")}
                        dataKey="C"
                        name="Series 3"
                        type="monotone"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        activeDot={{
                            className: "fill-bg-primary stroke-utility-brand-600 stroke-2",
                        }}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};
