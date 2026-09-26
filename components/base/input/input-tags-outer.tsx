"use client";

import type { Key, KeyboardEvent, ReactNode } from "react";
import { useCallback, useMemo, useState } from "react";
import { HintText } from "@/components/base/input/hint-text";
import { InputBase } from "@/components/base/input/input";
import { Label } from "@/components/base/input/label";
import { Tag, TagGroup, TagList } from "@/components/base/tags/tags";
import { cx } from "@/utils/cx";

interface TagEntry {
    id: string;
    label: string;
}

/**
 * Keys come from the tags themselves (occurrence and label), so they stay stable across
 * renders without mutable bookkeeping: the second "react" tag is always "1:react".
 */
const toEntries = (labels: string[]): TagEntry[] => {
    const seen = new Map<string, number>();
    return labels.map((label) => {
        const n = seen.get(label) ?? 0;
        seen.set(label, n + 1);
        return { id: `${n}:${label}`, label };
    });
};

export interface InputTagsOuterProps {
    /** Label text displayed above the input. */
    label?: string;
    /** Helper text displayed below the tags. */
    hint?: ReactNode;
    /** Tooltip message displayed via a help icon inside the input. */
    tooltip?: string;
    /**
     * Input size variant.
     * @default "sm"
     */
    size?: "sm" | "md" | "lg";
    /** Placeholder text for the input field. */
    placeholder?: string;
    /** Whether the field is required. */
    isRequired?: boolean;
    /** Whether the field is disabled. */
    isDisabled?: boolean;
    /** Whether the field is in an invalid/error state. */
    isInvalid?: boolean;
    /**
     * Whether to allow duplicate tag values.
     * @default false
     */
    allowDuplicates?: boolean;
    /** Maximum number of tags allowed. */
    maxTags?: number;
    /** Controlled value: array of tag strings. */
    value?: string[];
    /** Default tags for uncontrolled mode. */
    defaultValue?: string[];
    /** Called when the tags array changes. */
    onChange?: (tags: string[]) => void;
    /** Called when a tag is added. */
    onTagAdded?: (tag: string) => void;
    /** Called when a tag is removed. */
    onTagRemoved?: (tag: string) => void;
    /**
     * Validation function for new tags.
     * Return `true` to accept, `false` to reject.
     */
    validate?: (value: string) => boolean;
    /** Optional className for the outer container. */
    className?: string;
    /** Whether to hide the required indicator from the label. */
    hideRequiredIndicator?: boolean;
}

export const InputTagsOuter = ({
    size = "md",
    label,
    hint,
    tooltip,
    placeholder,
    isRequired,
    isDisabled,
    isInvalid,
    allowDuplicates = false,
    maxTags,
    value,
    defaultValue,
    onChange,
    onTagAdded,
    onTagRemoved,
    validate,
    className,
    hideRequiredIndicator,
}: InputTagsOuterProps) => {
    const isControlled = value !== undefined;
    const [inputValue, setInputValue] = useState("");
    const [internalTags, setInternalTags] = useState<string[]>(() => defaultValue ?? []);

    const tags = isControlled ? value : internalTags;
    const entries = useMemo(() => toEntries(tags), [tags]);

    const commit = useCallback(
        (next: string[]) => {
            if (!isControlled) setInternalTags(next);
            onChange?.(next);
        },
        [isControlled, onChange],
    );

    const addTag = useCallback(
        (text: string) => {
            const trimmed = text.trim();
            if (!trimmed) return false;
            if (!allowDuplicates && tags.includes(trimmed)) return false;
            if (maxTags && tags.length >= maxTags) return false;
            if (validate && !validate(trimmed)) return false;

            commit([...tags, trimmed]);
            onTagAdded?.(trimmed);
            return true;
        },
        [tags, allowDuplicates, maxTags, validate, commit, onTagAdded],
    );

    // Removes every selected tag in one update, so removing several at once keeps all the removals.
    const handleRemove = useCallback(
        (keys: Set<Key>) => {
            const ids = new Set([...keys].map(String));
            const removed = entries.filter((e) => ids.has(e.id));
            if (!removed.length) return;

            const remaining = entries.filter((e) => !ids.has(e.id));
            commit(remaining.map((e) => e.label));
            removed.forEach((e) => onTagRemoved?.(e.label));
        },
        [entries, commit, onTagRemoved],
    );

    const handleInputKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            event.preventDefault();
            if (addTag(inputValue)) {
                setInputValue("");
            }
        }
    };

    return (
        <div className={cx("flex flex-col", size === "sm" ? "gap-1.5" : "gap-2", className)}>
            <div className="flex flex-col gap-1.5">
                {label && <Label isRequired={hideRequiredIndicator ? false : isRequired}>{label}</Label>}

                <InputBase
                    size={size}
                    tooltip={tooltip}
                    placeholder={placeholder}
                    isInvalid={isInvalid}
                    isDisabled={isDisabled}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.currentTarget.value)}
                    onKeyDown={handleInputKeyDown}
                />
            </div>

            {entries.length > 0 && (
                <TagGroup label={label || "Tags"} size={size === "lg" ? "md" : size} onRemove={handleRemove}>
                    <TagList className="flex flex-wrap gap-1.5 focus:outline-hidden" items={entries}>
                        {(item) => (
                            <Tag id={item.id} isDisabled={isDisabled}>
                                {item.label}
                            </Tag>
                        )}
                    </TagList>
                </TagGroup>
            )}

            {hint && tags.length === 0 && (
                <HintText isInvalid={isInvalid} className={cx(size === "sm" && "text-xs")}>
                    {hint}
                </HintText>
            )}
        </div>
    );
};
