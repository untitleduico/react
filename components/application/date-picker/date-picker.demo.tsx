"use client";

import { useMemo, useState } from "react";
import { endOfMonth, endOfWeek, getLocalTimeZone, startOfMonth, startOfWeek, today } from "@internationalized/date";
import type { DateValue } from "react-aria-components";
import { DatePicker as AriaDatePicker, DateRangePicker as AriaDateRangePicker, Dialog as AriaDialog, useLocale } from "react-aria-components";
import { Button } from "@/components/base/buttons/button";
import { Calendar } from "./calendar";
import { DateInput } from "./date-input";
import { DatePicker } from "./date-picker";
import { DateRangePicker } from "./date-range-picker";
import { RangeCalendar } from "./range-calendar";
import { RangePresetButton } from "./range-preset";

const now = today(getLocalTimeZone());

export const CalendarDemo = () => <Calendar aria-label="Calendar" />;

export const CalendarCardDemo = () => (
    <AriaDatePicker aria-label="Calendar card" defaultValue={now}>
        <AriaDialog className="rounded-2xl bg-primary shadow-xl ring ring-secondary_alt">
            <div className="flex px-6 py-5">
                <Calendar />
            </div>
            <div className="grid grid-cols-2 gap-3 border-t border-secondary p-4">
                <Button size="md" color="secondary">
                    Cancel
                </Button>
                <Button size="md" color="primary">
                    Apply
                </Button>
            </div>
        </AriaDialog>
    </AriaDatePicker>
);

export const DatePickerDemo = () => <DatePicker aria-label="Date picker" defaultValue={now} />;

export const DatePickerControlledDemo = () => {
    const [value, setValue] = useState<DateValue | null>(now);

    return <DatePicker aria-label="Date picker" value={value} onChange={setValue} />;
};

export const RangeCalendarDemo = () => <RangeCalendar aria-label="Range calendar" />;

export const RangeCalendarCardDemo = () => {
    const { locale } = useLocale();
    const [focusedValue, setFocusedValue] = useState<DateValue | null>(null);
    const [value, setValue] = useState<{ start: DateValue; end: DateValue } | null>({
        start: now.subtract({ days: 7 }),
        end: now,
    });

    const presets = useMemo(
        () => ({
            today: { label: "Today", value: { start: now, end: now } },
            yesterday: { label: "Yesterday", value: { start: now.subtract({ days: 1 }), end: now.subtract({ days: 1 }) } },
            thisWeek: { label: "This week", value: { start: startOfWeek(now, locale), end: endOfWeek(now, locale) } },
            lastWeek: {
                label: "Last week",
                value: {
                    start: startOfWeek(now, locale).subtract({ weeks: 1 }),
                    end: endOfWeek(now, locale).subtract({ weeks: 1 }),
                },
            },
            thisMonth: { label: "This month", value: { start: startOfMonth(now), end: endOfMonth(now) } },
            lastMonth: {
                label: "Last month",
                value: {
                    start: startOfMonth(now).subtract({ months: 1 }),
                    end: endOfMonth(now).subtract({ months: 1 }),
                },
            },
            thisYear: { label: "This year", value: { start: startOfMonth(now.set({ month: 1 })), end: endOfMonth(now.set({ month: 12 })) } },
            lastYear: {
                label: "Last year",
                value: {
                    start: startOfMonth(now.set({ month: 1 }).subtract({ years: 1 })),
                    end: endOfMonth(now.set({ month: 12 }).subtract({ years: 1 })),
                },
            },
            allTime: {
                label: "All time",
                value: {
                    start: now.set({ year: 2000, month: 1, day: 1 }),
                    end: now,
                },
            },
        }),
        [locale],
    );

    return (
        <AriaDateRangePicker aria-label="Range calendar" value={value} onChange={setValue}>
            <AriaDialog className="flex rounded-2xl bg-primary shadow-xl ring ring-secondary_alt focus:outline-hidden">
                <div className="hidden w-38 flex-col gap-0.5 border-r border-solid border-secondary p-3 lg:flex">
                    {Object.values(presets).map((preset) => (
                        <RangePresetButton
                            key={preset.label}
                            value={preset.value}
                            onClick={() => {
                                setFocusedValue(preset.value.start);
                                setValue(preset.value);
                            }}
                        >
                            {preset.label}
                        </RangePresetButton>
                    ))}
                </div>
                <div className="flex flex-col">
                    <RangeCalendar
                        focusedValue={focusedValue}
                        onFocusChange={setFocusedValue}
                        presets={{
                            lastWeek: presets.lastWeek,
                            lastMonth: presets.lastMonth,
                            lastYear: presets.lastYear,
                        }}
                    />
                    <div className="flex justify-between gap-3 border-t border-secondary p-4">
                        <div className="hidden items-center gap-3 md:flex">
                            <DateInput slot="start" className="w-36" />
                            <div className="text-md text-quaternary">–</div>
                            <DateInput slot="end" className="w-36" />
                        </div>
                        <div className="grid w-full grid-cols-2 gap-3 md:flex md:w-auto">
                            <Button size="md" color="secondary">
                                Cancel
                            </Button>
                            <Button size="md" color="primary">
                                Apply
                            </Button>
                        </div>
                    </div>
                </div>
            </AriaDialog>
        </AriaDateRangePicker>
    );
};

export const DateRangePickerDemo = () => {
    return (
        <DateRangePicker
            aria-label="Date range picker"
            defaultValue={{
                start: now.subtract({ days: 7 }),
                end: now,
            }}
        />
    );
};

export const DateRangePickerControlledDemo = () => {
    const [value, setValue] = useState<{ start: DateValue; end: DateValue } | null>({
        start: now.subtract({ days: 7 }),
        end: now,
    });

    return <DateRangePicker aria-label="Date range picker" shouldCloseOnSelect={false} value={value} onChange={setValue} />;
};

export const DarkModeDemo = () => {
    const [value, setValue] = useState<DateValue | null>(now);
    const [focusedValue, setFocusedValue] = useState<DateValue | null>(now);

    return (
        <div className="relative h-180 w-full max-w-180 [--clip-boundary:50%]">
            <div
                style={{
                    clipPath: "polygon(0 0, var(--clip-boundary) 0, var(--clip-boundary) 100%, 0 100%)",
                    transitionTimingFunction: "cubic-bezier(0.25, 0.1, 0.25, 1)",
                }}
                className="peer/light absolute inset-0 flex items-center justify-center overflow-hidden rounded-2xl bg-tertiary outline-1 -outline-offset-1 outline-secondary_alt transition-all duration-200 peer-hover/dark:[--clip-boundary:10%] hover:z-10 hover:[--clip-boundary:90%]"
            >
                <AriaDatePicker aria-label="Calendar card" value={value} onChange={setValue}>
                    <AriaDialog className="rounded-2xl bg-primary shadow-xl ring ring-secondary_alt">
                        <div className="flex px-6 py-5">
                            <Calendar focusedValue={focusedValue} onFocusChange={setFocusedValue} />
                        </div>
                        <div className="grid grid-cols-2 gap-3 border-t border-secondary p-4">
                            <Button size="md" color="secondary">
                                Cancel
                            </Button>
                            <Button size="md" color="primary">
                                Apply
                            </Button>
                        </div>
                    </AriaDialog>
                </AriaDatePicker>
            </div>
            <div
                style={{
                    clipPath: "polygon(var(--clip-boundary) 0, 100% 0, 100% 100%, var(--clip-boundary) 100%)",
                    transitionTimingFunction: "cubic-bezier(0.25, 0.1, 0.25, 1)",
                }}
                className="peer/dark dark-mode absolute inset-0 flex items-center justify-center overflow-hidden rounded-2xl bg-tertiary outline-1 -outline-offset-1 outline-secondary_alt transition-all duration-200 peer-hover/light:[--clip-boundary:90%] hover:z-10 hover:[--clip-boundary:10%]"
            >
                <AriaDatePicker aria-label="Calendar card" value={value} onChange={setValue}>
                    <AriaDialog className="rounded-2xl bg-primary shadow-xl ring ring-secondary_alt">
                        <div className="flex px-6 py-5">
                            <Calendar focusedValue={focusedValue} onFocusChange={setFocusedValue} />
                        </div>
                        <div className="grid grid-cols-2 gap-3 border-t border-secondary p-4">
                            <Button size="md" color="secondary">
                                Cancel
                            </Button>
                            <Button size="md" color="primary">
                                Apply
                            </Button>
                        </div>
                    </AriaDialog>
                </AriaDatePicker>
            </div>
        </div>
    );
};
