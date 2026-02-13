"use client";

import type { Key, KeyboardEvent, ReactNode } from "react";
import { useCallback, useRef, useState } from "react";
import { HintText } from "@/components/base/input/hint-text";
import { InputBase } from "@/components/base/input/input";
import { Label } from "@/components/base/input/label";
import { Tag, TagGroup, TagList } from "@/components/base/tags/tags";
import { cx } from "@/utils/cx";

interface TagEntry {
    id: string;
    label: string;
}

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
    size = "sm",
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
    const idCounter = useRef(0);
    const nextId = () => `tag-${idCounter.current++}`;

    const [inputValue, setInputValue] = useState("");

    const [internalEntries, setInternalEntries] = useState<TagEntry[]>(() => (defaultValue ?? []).map((label) => ({ id: nextId(), label })));

    const prevControlledValue = useRef<string[]>([]);
    const controlledEntries = useRef<TagEntry[]>([]);

    const entries = (() => {
        if (!isControlled) return internalEntries;

        const prev = prevControlledValue.current;
        if (prev === value) return controlledEntries.current;

        const oldEntries = controlledEntries.current;
        const newEntries: TagEntry[] = [];
        const usedOldIndices = new Set<number>();

        for (const label of value) {
            const oldIndex = oldEntries.findIndex((e, i) => e.label === label && !usedOldIndices.has(i));
            if (oldIndex !== -1) {
                usedOldIndices.add(oldIndex);
                newEntries.push(oldEntries[oldIndex]);
            } else {
                newEntries.push({ id: nextId(), label });
            }
        }

        prevControlledValue.current = value;
        controlledEntries.current = newEntries;
        return newEntries;
    })();

    const tags = entries.map((e) => e.label);

    const addTag = useCallback(
        (text: string) => {
            const trimmed = text.trim();
            if (!trimmed) return false;
            if (!allowDuplicates && tags.includes(trimmed)) return false;
            if (maxTags && tags.length >= maxTags) return false;
            if (validate && !validate(trimmed)) return false;

            const newEntry: TagEntry = { id: nextId(), label: trimmed };
            const newEntries = [...entries, newEntry];

            if (!isControlled) {
                setInternalEntries(newEntries);
            }
            onChange?.(newEntries.map((e) => e.label));
            onTagAdded?.(trimmed);
            return true;
        },
        [tags, entries, isControlled, allowDuplicates, maxTags, validate, onChange, onTagAdded],
    );

    const removeTag = useCallback(
        (id: string) => {
            const entry = entries.find((e) => e.id === id);
            if (!entry) return;

            const newEntries = entries.filter((e) => e.id !== id);

            if (!isControlled) {
                setInternalEntries(newEntries);
            }
            onChange?.(newEntries.map((e) => e.label));
            onTagRemoved?.(entry.label);
        },
        [entries, isControlled, onChange, onTagRemoved],
    );

    const handleRemove = useCallback(
        (keys: Set<Key>) => {
            for (const key of keys) {
                removeTag(key.toString());
            }
        },
        [removeTag],
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
