"use client";

import { Clock } from "@untitledui/icons";
import type { SelectItemType } from "@/components/base/select/select";

/**
 * List of timezones with their timezone value, code and name.
 */
const timezones = [
    { value: "UTC−12:00", name: "IDLW", longName: "International Date Line West" },
    { value: "UTC−11:00", name: "UTC−11", longName: "Coordinated Universal Time-11" },
    { value: "UTC−10:00", name: "HST", longName: "Hawaii-Aleutian Standard Time" },
    { value: "UTC−09:00", name: "AKST", longName: "Alaska Standard Time" },
    { value: "UTC−08:00", name: "PST", longName: "Pacific Standard Time" },
    { value: "UTC−07:00", name: "MST", longName: "Mountain Standard Time" },
    { value: "UTC−06:00", name: "CST", longName: "Central Standard Time" },
    { value: "UTC−05:00", name: "EST", longName: "Eastern Standard Time" },
    { value: "UTC−04:00", name: "AST", longName: "Atlantic Standard Time" },
    { value: "UTC−03:00", name: "ART", longName: "Argentina Time" },
    { value: "UTC−02:00", name: "GST", longName: "South Georgia Time" },
    { value: "UTC−01:00", name: "AZOT", longName: "Azores Standard Time" },
    { value: "UTC+00:00", name: "GMT", longName: "Greenwich Mean Time" },
    { value: "UTC+01:00", name: "CET", longName: "Central European Time" },
    { value: "UTC+02:00", name: "EET", longName: "Eastern European Time" },
    { value: "UTC+03:00", name: "MSK", longName: "Moscow Standard Time" },
    { value: "UTC+03:30", name: "IRST", longName: "Iran Standard Time" },
    { value: "UTC+04:00", name: "GST", longName: "Gulf Standard Time" },
    { value: "UTC+05:00", name: "PKT", longName: "Pakistan Standard Time" },
    { value: "UTC+05:30", name: "IST", longName: "Indian Standard Time" },
    { value: "UTC+06:00", name: "BST", longName: "Bangladesh Standard Time" },
    { value: "UTC+07:00", name: "ICT", longName: "Indochina Time" },
    { value: "UTC+08:00", name: "CST", longName: "China Standard Time" },
    { value: "UTC+09:00", name: "JST", longName: "Japan Standard Time" },
    { value: "UTC+10:00", name: "AEST", longName: "Australian Eastern Standard Time" },
    { value: "UTC+11:00", name: "SBT", longName: "Solomon Islands Time" },
    { value: "UTC+12:00", name: "NZST", longName: "New Zealand Standard Time" },
];

/**
 * Timezones options with timezone code as the label for the select component.
 */
export const timezonesOptions: SelectItemType[] = timezones.map((timezone) => ({
    id: timezone.value,
    label: timezone.name,
    supportingText: timezone.value,
    icon: Clock,
}));

/**
 * Timezones options with full timezone name for the select component.
 */
export const timezonesOptionsWithLongName: SelectItemType[] = timezones.map((timezone) => ({
    id: timezone.value,
    label: `${timezone.longName} (${timezone.name})`,
    supportingText: timezone.value,
    icon: Clock,
}));

export default timezones;
