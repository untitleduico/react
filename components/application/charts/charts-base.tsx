"use client";

import type { TooltipProps } from "recharts";
import type { Props as LegendContentProps } from "recharts/types/component/DefaultLegendContent";
import type { NameType, ValueType } from "recharts/types/component/DefaultTooltipContent";
import type { Props as DotProps } from "recharts/types/shape/Dot";
import { cx } from "@/utils/cx";

/**
 * Selects evenly spaced items from an array. Used for rendering
 * certain number of x-axis labels.
 * @param dataArray - The array of items to select from.
 * @param count - The number of items to select.
 * @returns The selected items.
 */
export const selectEvenlySpacedItems = <T extends readonly unknown[]>(dataArray: T, count: number): Array<T[number]> => {
    if (!dataArray || dataArray.length === 0) {
        return [];
    }

    const selectedItems: Array<T[number]> = [];

    if (dataArray.length === 1) {
        for (let i = 0; i < count; i++) {
            selectedItems.push(dataArray[0]);
        }
        return selectedItems;
    }

    for (let i = 0; i < count; i++) {
        const targetIndex = Math.round((i * (dataArray.length - 1)) / (count - 1));
        const boundedIndex = Math.max(0, Math.min(targetIndex, dataArray.length - 1));
        selectedItems.push(dataArray[boundedIndex]);
    }

    return selectedItems;
};

/**
 * Renders the legend content for a chart.
 * @param reversed - Whether to reverse the payload.
 * @param payload - The payload of the legend.
 * @param align - The alignment of the legend.
 * @param layout - The layout of the legend.
 * @param className - The class name of the legend.
 * @returns The legend content.
 */
export const ChartLegendContent = ({ reversed, payload, align, layout, className }: LegendContentProps & { reversed?: boolean; className?: string }) => {
    payload = reversed ? payload?.toReversed() : payload;

    return (
        <ul
            className={cx(
                "flex",
                layout === "vertical"
                    ? `flex-col gap-1 pl-4 ${align === "center" ? "items-center" : align === "right" ? "items-start" : "items-start"}`
                    : `flex-row gap-3 ${align === "center" ? "justify-center" : align === "right" ? "justify-end" : "justify-start"}`,
                className,
            )}
        >
            {payload?.map((entry, index) => (
                <li className="flex items-center gap-2 text-sm text-tertiary" key={index}>
                    <span className={cx("h-2 w-2 rounded-full bg-current", (entry.payload as { className?: string })?.className)} />
                    {entry.value}
                </li>
            ))}
        </ul>
    );
};

interface ChartTooltipContentProps extends TooltipProps<ValueType, NameType> {
    isRadialChart?: boolean;
    isPieChart?: boolean;
    label?: string;
    // We have to use `any` here because the `payload` prop is not typed correctly in the `recharts` library.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    payload?: any;
}

export const ChartTooltipContent = ({ active, payload, label, isRadialChart, isPieChart, formatter, labelFormatter }: ChartTooltipContentProps) => {
    const canRender = active && payload && payload.length;

    if (!canRender) {
        return null;
    }

    const isSingleDataPoint = payload.length === 1;

    // If it's a single data point, we use the value as the title and
    // the name as the secondary title.
    let title = isSingleDataPoint ? (isRadialChart ? payload[0].value : isPieChart ? payload[0].value : payload[0].value) : label;
    let secondaryTitle = isSingleDataPoint ? (isRadialChart ? payload[0].payload.name : isPieChart ? payload[0].name : label) : payload;

    title =
        isSingleDataPoint && formatter
            ? formatter(title, payload?.[0].name || label, payload[0], 0, payload)
            : labelFormatter
              ? labelFormatter(title, payload)
              : title;
    secondaryTitle = isSingleDataPoint && labelFormatter ? labelFormatter(secondaryTitle, payload) : secondaryTitle;

    return (
        <div className="flex flex-col gap-0.5 rounded-lg bg-primary-solid px-3 py-2 shadow-lg">
            <p className="text-xs font-semibold text-white">{title}</p>

            {!secondaryTitle ? null : Array.isArray(secondaryTitle) ? (
                <div>
                    {secondaryTitle.map((entry, index) => (
                        <p key={index} className={cx("text-xs text-tooltip-supporting-text")}>
                            {`${entry.name}: ${formatter ? formatter(entry.value, entry.name, entry, index, entry.payload) : entry.value}`}
                        </p>
                    ))}
                </div>
            ) : (
                <p className="text-xs text-tooltip-supporting-text">{secondaryTitle}</p>
            )}
        </div>
    );
};

interface ChartActiveDotProps extends DotProps {
    // We have to use `any` here because the `payload` prop is not typed correctly in the `recharts` library.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    payload?: any;
}

export const ChartActiveDot = ({ cx = 0, cy = 0 }: ChartActiveDotProps) => {
    const size = 12;

    return (
        <svg x={cx - size / 2} y={cy - size / 2} width={size} height={size} viewBox="0 0 12 12" fill="none">
            <rect x="2" y="2" width="8" height="8" rx="6" className="fill-bg-primary stroke-utility-brand-600" strokeWidth="2" />
        </svg>
    );
};
