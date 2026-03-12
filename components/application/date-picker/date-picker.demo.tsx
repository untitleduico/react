"use client";

import { useMemo, useState } from "react";
import { endOfMonth, endOfWeek, getLocalTimeZone, startOfMonth, startOfWeek, toCalendarDateTime, today } from "@internationalized/date";
import { Calendar as CalendarIcon, Clock } from "@untitledui/icons";
import { useDateFormatter } from "react-aria";
import type { DateValue, Key } from "react-aria-components";
import {
    DatePicker as AriaDatePicker,
    DateRangePicker as AriaDateRangePicker,
    Dialog as AriaDialog,
    Group as AriaGroup,
    Popover as AriaPopover,
    DateField,
    useLocale,
} from "react-aria-components";
import { Button } from "@/components/base/buttons/button";
import { InputDateBase } from "@/components/base/input/input-date";
import { Select } from "@/components/base/select/select";
import { cx } from "@/utils/cx";
import { Calendar } from "./calendar";
import { DatePicker } from "./date-picker";
import { DateRangePicker } from "./date-range-picker";
import { RangeCalendar, RangePresetButton } from "./range-calendar";

const now = today(getLocalTimeZone());

/** 27 slots = 9:00 AM to 10:00 PM in 30-min intervals */
const TIME_SLOTS = Array.from({ length: 27 }, (_, i) => {
    const totalMinutes = 9 * 60 + i * 30; // Start at 9:00 AM (540 min), step by 30
    const hour = Math.floor(totalMinutes / 60);
    const minute = totalMinutes % 60;
    const period = hour >= 12 ? "PM" : "AM";
    const h12 = hour % 12 || 12; // Convert 24h to 12h format
    const label = `${h12}:${String(minute).padStart(2, "0")} ${period}`;
    return { id: `${hour}:${String(minute).padStart(2, "0")}`, hour, minute, label };
});

export const CalendarDemo = () => <Calendar aria-label="Calendar" />;

export const CalendarCardDemo = () => (
    <AriaDatePicker aria-label="Calendar card" defaultValue={now}>
        <AriaDialog className="rounded-2xl bg-primary shadow-xl ring ring-secondary_alt">
            <div className="flex px-6 py-5">
                <Calendar />
            </div>
            <div className="grid grid-cols-2 gap-3 border-t border-secondary p-4">
                <Button size="sm" color="secondary">
                    Cancel
                </Button>
                <Button size="sm" color="primary">
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

export const DateTimePickerDemo = () => {
    const [value, setValue] = useState<DateValue | null>(() => toCalendarDateTime(today(getLocalTimeZone())));
    const [focusedValue, setFocusedValue] = useState<DateValue | null>(() => toCalendarDateTime(today(getLocalTimeZone())));
    const dateFormatter = useDateFormatter({ month: "short", day: "numeric", year: "numeric" });
    const timeFormatter = useDateFormatter({ hour: "numeric", minute: "numeric" });

    const handleTodayClick = () => {
        const t = today(getLocalTimeZone());

        // Preserve the existing time when jumping to today
        const date = value && "hour" in value ? toCalendarDateTime(t).set({ hour: value.hour, minute: value.minute }) : toCalendarDateTime(t);

        setValue(date);
        setFocusedValue(date);
    };

    const handleTimeClick = (key: Key | null) => {
        const slot = TIME_SLOTS.find((s) => s.id === key);
        if (!slot) return;

        const date = value ?? toCalendarDateTime(today(getLocalTimeZone()));
        setValue(date.set({ hour: slot.hour, minute: slot.minute }));
    };

    return (
        <AriaDatePicker shouldCloseOnSelect={false} aria-label="Calendar card" value={value} onChange={setValue}>
            <AriaGroup>
                <Button size="sm" color="secondary" iconLeading={CalendarIcon}>
                    {value ? (
                        <>
                            {dateFormatter.format(value.toDate(getLocalTimeZone()))}{" "}
                            <span className="text-quaternary">{timeFormatter.format(value.toDate(getLocalTimeZone()))}</span>
                        </>
                    ) : (
                        "Select date"
                    )}
                </Button>
            </AriaGroup>
            <AriaPopover
                offset={8}
                placement="bottom right"
                className={({ isEntering, isExiting }) =>
                    cx(
                        "origin-(--trigger-anchor-point) will-change-transform",
                        isEntering &&
                            "duration-150 ease-out animate-in fade-in placement-right:slide-in-from-left-0.5 placement-top:slide-in-from-bottom-0.5 placement-bottom:slide-in-from-top-0.5",
                        isExiting &&
                            "duration-100 ease-in animate-out fade-out placement-right:slide-out-to-left-0.5 placement-top:slide-out-to-bottom-0.5 placement-bottom:slide-out-to-top-0.5",
                    )
                }
            >
                <AriaDialog className="rounded-2xl bg-primary shadow-xl ring ring-secondary_alt">
                    <div className="flex">
                        <div className="flex px-6 py-5">
                            <Calendar focusedValue={focusedValue} onFocusChange={setFocusedValue}>
                                <div className="flex flex-wrap gap-3 md:hidden">
                                    <div className="flex flex-1 gap-3">
                                        <DateField granularity="day" className="flex-1">
                                            <InputDateBase size="sm" className="flex-1" />
                                        </DateField>
                                        <Button slot={null} size="sm" color="secondary" onClick={handleTodayClick}>
                                            Today
                                        </Button>
                                    </div>
                                    <Select
                                        aria-label="Time"
                                        size="sm"
                                        placeholder="Time"
                                        placeholderIcon={Clock}
                                        items={TIME_SLOTS}
                                        value={value && "hour" in value ? `${value.hour}:${String(value.minute).padStart(2, "0")}` : null}
                                        onChange={handleTimeClick}
                                        className="flex-1"
                                    >
                                        {(slot) => (
                                            <Select.Item id={slot.id} icon={Clock}>
                                                {slot.label}
                                            </Select.Item>
                                        )}
                                    </Select>
                                </div>
                            </Calendar>
                        </div>
                        <div className="relative hidden min-h-0 w-50 flex-col gap-4 md:flex">
                            <div className="px-5 pt-6.5 text-center text-sm font-semibold text-fg-secondary">Available times</div>
                            <div className="relative h-full w-full">
                                <ul className="absolute inset-0 flex min-h-0 flex-col gap-1.5 overflow-y-auto mask-b-from-80% mask-b-to-98% px-5 pb-5">
                                    {TIME_SLOTS.map((slot) => {
                                        const isSelected = value && "hour" in value && value.hour === slot.hour && value.minute === slot.minute;
                                        return (
                                            <li key={slot.id} className="flex-1">
                                                <Button
                                                    size="xs"
                                                    color="secondary"
                                                    className={cx("w-full", isSelected && "bg-primary_hover")}
                                                    onClick={() => handleTimeClick(slot.id)}
                                                >
                                                    {slot.label}
                                                </Button>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-3 border-t border-secondary p-4">
                        <div className="mr-auto hidden gap-3 md:flex">
                            <DateField granularity="day" className="flex-1">
                                <InputDateBase size="sm" />
                            </DateField>
                            <Button size="sm" color="secondary" onClick={handleTodayClick}>
                                Today
                            </Button>
                        </div>

                        <Button size="sm" color="secondary" className="max-md:flex-1">
                            Cancel
                        </Button>
                        <Button size="sm" color="primary" className="max-md:flex-1">
                            Apply
                        </Button>
                    </div>
                </AriaDialog>
            </AriaPopover>
        </AriaDatePicker>
    );
};

export const RangeCalendarDemo = () => <RangeCalendar aria-label="Range calendar" />;

export const RangeCalendarCardDemo = () => {
    const { locale } = useLocale();
    const [focusedValue, setFocusedValue] = useState<DateValue | null>(null);
    const now = useMemo(() => toCalendarDateTime(today(getLocalTimeZone())), []);
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
        [locale, now],
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
                        <div className="hidden items-center gap-2 md:flex">
                            <InputDateBase slot="start" size="sm" />
                            <div className="text-md text-quaternary">–</div>
                            <InputDateBase slot="end" size="sm" />
                        </div>
                        <div className="grid w-full grid-cols-2 gap-3 md:flex md:w-auto">
                            <Button size="sm" color="secondary">
                                Cancel
                            </Button>
                            <Button size="sm" color="primary">
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
    const now = useMemo(() => toCalendarDateTime(today(getLocalTimeZone())), []);

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
                            <Button size="sm" color="secondary">
                                Cancel
                            </Button>
                            <Button size="sm" color="primary">
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
                            <Button size="sm" color="secondary">
                                Cancel
                            </Button>
                            <Button size="sm" color="primary">
                                Apply
                            </Button>
                        </div>
                    </AriaDialog>
                </AriaDatePicker>
            </div>
        </div>
    );
};
