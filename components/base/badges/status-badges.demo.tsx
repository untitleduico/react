"use client";

import type { BadgeColors, Sizes } from "@/components/base/badges/badge-types";
import type { StatusBadgeType } from "@/components/base/badges/status-badge";
import { StatusBadge } from "@/components/base/badges/status-badge";
import type { StatusIconName } from "@/components/base/badges/status-icons";
import { StatusIcon, statusIconNames } from "@/components/base/badges/status-icons";

const sizes: Sizes[] = ["sm", "md", "lg"];

const examples: { icon: StatusIconName; label: string; color: BadgeColors }[] = [
    { icon: "thinking", label: "Thinking", color: "brand" },
    { icon: "generating", label: "Generating", color: "purple" },
    { icon: "typing", label: "Typing", color: "gray" },
    { icon: "listening", label: "Listening", color: "blue" },
    { icon: "uploading", label: "Uploading", color: "sky" },
    { icon: "progress-50", label: "In progress", color: "warning" },
    { icon: "check-circle", label: "Done", color: "success" },
    { icon: "check-x", label: "Failed", color: "error" },
];

export const Default = () => {
    return (
        <div className="flex flex-col items-start gap-4">
            <div className="flex flex-wrap items-start gap-4">
                {examples.map((example) => (
                    <StatusBadge key={example.icon} icon={example.icon} color={example.color} type="pill-color">
                        {example.label}
                    </StatusBadge>
                ))}
            </div>
            <div className="flex flex-wrap items-start gap-4">
                {examples.map((example) => (
                    <StatusBadge key={example.icon} icon={example.icon} color={example.color} type="modern">
                        {example.label}
                    </StatusBadge>
                ))}
            </div>
        </div>
    );
};

/** The label and icon each color shows in the Figma variants. */
const variants: Record<StatusBadgeType, { color: BadgeColors; label: string; icon: StatusIconName }[]> = {
    "pill-color": [
        { color: "gray", label: "Thinking", icon: "pending" },
        { color: "brand", label: "In progress", icon: "progress-50" },
        { color: "error", label: "Failed", icon: "check-x-dash" },
        { color: "warning", label: "Pending", icon: "processing-02" },
        { color: "success", label: "Complete", icon: "check-circle" },
        { color: "slate", label: "Working", icon: "processing-03" },
        { color: "sky", label: "Working", icon: "loading-0" },
        { color: "blue", label: "Working", icon: "loading-25" },
        { color: "indigo", label: "Working", icon: "loading-50" },
        { color: "purple", label: "Working", icon: "loading-75" },
        { color: "pink", label: "Working", icon: "loading-100" },
        { color: "orange", label: "Working", icon: "in-progress" },
    ],
    modern: [
        { color: "gray", label: "Thinking", icon: "grid-center-out" },
        { color: "brand", label: "In progress", icon: "progress-50" },
        { color: "error", label: "Failed", icon: "check-x" },
        { color: "warning", label: "Pending", icon: "processing-02" },
        { color: "success", label: "Complete", icon: "loading-100" },
        { color: "slate", label: "Working", icon: "grid-diagonal" },
        { color: "sky", label: "Working", icon: "grid-random" },
        { color: "blue", label: "Working", icon: "ring-pulse" },
        { color: "indigo", label: "Working", icon: "ring-alternate" },
        { color: "purple", label: "Working", icon: "morph-shape" },
        { color: "pink", label: "Working", icon: "morph-transform" },
        { color: "orange", label: "Working", icon: "lens-focus" },
    ],
};

const BadgeGrid = ({ type, iconOnly }: { type: StatusBadgeType; iconOnly?: boolean }) => {
    return (
        <div className="flex flex-col items-start gap-4">
            {variants[type].map(({ color, label, icon }) => (
                <div key={color} className="flex items-start gap-4">
                    {sizes.map((size) =>
                        iconOnly ? (
                            <StatusBadge key={size} color={color} size={size} type={type} icon={icon} aria-label={label} />
                        ) : (
                            <StatusBadge key={size} color={color} size={size} type={type} icon={icon}>
                                {label}
                            </StatusBadge>
                        ),
                    )}
                </div>
            ))}
        </div>
    );
};

export const PillColor = () => <BadgeGrid type="pill-color" />;

export const BadgeModern = () => <BadgeGrid type="modern" />;

export const IconOnly = () => <BadgeGrid type="pill-color" iconOnly />;

export const IconOnlyBadgeModern = () => <BadgeGrid type="modern" iconOnly />;

export const StatusIcons = () => {
    return (
        <div className="grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-3 md:grid-cols-5">
            {statusIconNames.map((name) => (
                <div key={name} className="flex items-center gap-2">
                    <StatusIcon name={name} className="text-fg-brand-primary" />
                    <span className="text-xs font-medium text-tertiary">{name}</span>
                </div>
            ))}
        </div>
    );
};
