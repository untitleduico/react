"use client";

import type { FC } from "react";
import * as Demos from "./date-picker.demo";

export default {
    title: "Application/Date pickers",
    decorators: [
        (Story: FC) => (
            <div className="flex min-h-screen items-start justify-center bg-tertiary p-8">
                <div className="flex w-75 justify-end">
                    <Story />
                </div>
            </div>
        ),
    ],
};

export const CalendarDemo = () => <Demos.CalendarDemo />;
CalendarDemo.storyName = "Calendar";

export const CalendarCardDemo = () => <Demos.CalendarCardDemo />;
CalendarCardDemo.storyName = "Calendar card";

export const DatePickerDemo = () => <Demos.DatePickerDemo />;
DatePickerDemo.storyName = "Date picker";

export const DatePickerControlledDemo = () => <Demos.DatePickerControlledDemo />;
DatePickerControlledDemo.storyName = "Date picker controlled";

export const RangeCalendarDemo = () => <Demos.RangeCalendarDemo />;
RangeCalendarDemo.storyName = "Range calendar";

export const RangeCalendarCardDemo = () => <Demos.RangeCalendarCardDemo />;
RangeCalendarCardDemo.storyName = "Range calendar card";

export const DateRangePickerDemo = () => <Demos.DateRangePickerDemo />;
DateRangePickerDemo.storyName = "Date range picker";

export const DateRangePickerControlledDemo = () => <Demos.DateRangePickerControlledDemo />;
DateRangePickerControlledDemo.storyName = "Date range picker controlled";

export const DarkModeDemo = () => <Demos.DarkModeDemo />;
DarkModeDemo.storyName = "Dark mode demo";
