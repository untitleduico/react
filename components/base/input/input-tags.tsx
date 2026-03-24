"use client";

import type { Key, KeyboardEvent, ReactNode } from "react";
import { useCallback, useRef, useState } from "react";
import { HelpCircle, InfoCircle } from "@untitledui/icons";
import { Group as AriaGroup, Input as AriaInput } from "react-aria-components";
import { HintText } from "@/components/base/input/hint-text";
import { Label } from "@/components/base/input/label";
import { Tag, TagGroup, TagList } from "@/components/base/tags/tags";
import { Tooltip, TooltipTrigger } from "@/components/base/tooltip/tooltip";
import { cx, sortCx } from "@/utils/cx";

interface TagEntry {
    id: number;
    label: string;
}

export interface InputTagsProps {
    /** Label text displayed above the input. */
    label?: string;
    /** Helper text displayed below the input. */
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

export const InputTags = ({
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
}: InputTagsProps) => {
    const isControlled = value !== undefined;
    const idCounter = useRef(0);
    const nextId = () => idCounter.current++;

    const inputRef = useRef<HTMLInputElement>(null);
    const tagGroupRef = useRef<HTMLDivElement>(null);
    const [inputValue, setInputValue] = useState("");

    const [internalEntries, setInternalEntries] = useState<TagEntry[]>(() => (defaultValue ?? []).map((label) => ({ id: nextId(), label })));

    // For controlled mode, maintain stable IDs across renders so React keys don't shift
    const prevControlledValue = useRef<string[]>([]);
    const controlledEntries = useRef<TagEntry[]>([]);

    const entries = (() => {
        if (!isControlled) return internalEntries;

        const prev = prevControlledValue.current;
        if (prev === value) return controlledEntries.current;

        // Reconcile: reuse existing IDs for tags that haven't changed position,
        // assign new IDs only for genuinely new entries
        const oldEntries = controlledEntries.current;
        const newEntries: TagEntry[] = [];
        const usedOldIndices = new Set<number>();

        for (const label of value) {
            // Try to find a matching old entry (same label, not yet used)
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
        (id: number) => {
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
                removeTag(key as number);
            }
            if (entries.length - keys.size <= 0) {
                setTimeout(() => inputRef.current?.focus(), 0);
            }
        },
        [removeTag, entries.length],
    );

    const focusLastTag = useCallback(() => {
        const tagEls = tagGroupRef.current?.querySelectorAll<HTMLElement>('[role="row"]');
        if (tagEls && tagEls.length > 0) {
            tagEls[tagEls.length - 1].focus();
        }
    }, []);

    const handleInputKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        const input = event.currentTarget;
        const isCaretAtStart = input.selectionStart === 0 && input.selectionEnd === 0;

        switch (event.key) {
            case "Enter":
                event.preventDefault();
                if (addTag(inputValue)) {
                    setInputValue("");
                }
                break;
            case "Backspace":
                if (isCaretAtStart && inputValue === "") {
                    focusLastTag();
                }
                break;
            case "ArrowLeft":
                if (isCaretAtStart) {
                    focusLastTag();
                }
                break;
        }
    };

    const handleTagGroupKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "ArrowRight") {
            const tagEls = tagGroupRef.current?.querySelectorAll<HTMLElement>('[role="row"]');
            if (tagEls && tagEls.length > 0) {
                const lastTag = tagEls[tagEls.length - 1];
                if (document.activeElement === lastTag || lastTag.contains(document.activeElement)) {
                    inputRef.current?.focus();
                }
            }
        }
    };

    const isEmpty = entries.length === 0;
    const hasTrailingIcon = tooltip || isInvalid;

    const sizes = sortCx({
        sm: {
            root: cx("gap-2 px-3 py-2 text-sm", !isEmpty && "py-1.5 pl-2", hasTrailingIcon && "pr-9"),
            iconTrailing: "right-3",
        },
        md: {
            root: cx("gap-2 px-3 py-2 text-md", !isEmpty && "pl-2", hasTrailingIcon && "pr-9"),
            iconTrailing: "right-3",
        },
        lg: {
            root: cx("gap-2 px-3.5 py-2.5 text-md", !isEmpty && "pl-2.5", hasTrailingIcon && "pr-9.5"),
            iconTrailing: "right-3.5",
        },
    });

    return (
        <div className={cx("flex flex-col gap-1.5", className)}>
            {label && <Label isRequired={hideRequiredIndicator ? false : isRequired}>{label}</Label>}

            <AriaGroup
                isDisabled={isDisabled}
                isInvalid={isInvalid}
                className={({ isFocusWithin, isDisabled, isInvalid }) =>
                    cx(
                        "group/input relative flex w-full items-center rounded-lg bg-primary shadow-xs ring-1 ring-primary outline-hidden transition duration-100 ease-linear ring-inset",
                        isDisabled && "cursor-not-allowed opacity-50",
                        isFocusWithin && !isDisabled && "ring-2 ring-brand",
                        isInvalid && !isFocusWithin && "ring-error_subtle",
                        isInvalid && isFocusWithin && "ring-2 ring-error",
                        sizes[size].root,
                    )
                }
            >
                {({ isDisabled }) => (
                    <>
                        <div className={cx("relative flex w-full flex-1 flex-row flex-wrap items-center justify-start", size === "sm" ? "gap-1.5" : "gap-2")}>
                            {!isEmpty && (
                                <div ref={tagGroupRef} onKeyDown={handleTagGroupKeyDown} className="contents">
                                    <TagGroup label={label || "Tags"} size={size === "lg" ? "md" : size} onRemove={handleRemove} className="contents">
                                        <TagList className="flex flex-wrap gap-1.5 focus:outline-hidden" items={entries}>
                                            {(item) => (
                                                <Tag
                                                    id={item.id}
                                                    isDisabled={isDisabled}
                                                    className="focus-visible:-ring-offset-2 focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:outline-hidden"
                                                >
                                                    {item.label}
                                                </Tag>
                                            )}
                                        </TagList>
                                    </TagGroup>
                                </div>
                            )}

                            <div className="relative flex min-w-[20%] flex-1 flex-row items-center">
                                <AriaInput
                                    ref={inputRef}
                                    type="text"
                                    value={inputValue}
                                    disabled={isDisabled}
                                    placeholder={isEmpty ? placeholder : undefined}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyDown={handleInputKeyDown}
                                    className="w-full flex-[1_0_0] appearance-none bg-transparent text-ellipsis text-primary caret-alpha-black/90 outline-hidden placeholder:text-placeholder focus:outline-hidden disabled:cursor-not-allowed"
                                />
                            </div>
                        </div>

                        {tooltip && (
                            <Tooltip title={tooltip} placement="top">
                                <TooltipTrigger
                                    className={cx(
                                        "absolute cursor-pointer text-fg-quaternary transition duration-100 ease-linear group-invalid/input:hidden hover:text-fg-quaternary_hover focus:text-fg-quaternary_hover",
                                        sizes[size].iconTrailing,
                                    )}
                                >
                                    <HelpCircle className="size-4 stroke-[2.25px]" />
                                </TooltipTrigger>
                            </Tooltip>
                        )}

                        <InfoCircle
                            className={cx(
                                "pointer-events-none absolute hidden size-4 stroke-[2.25px] text-fg-error-secondary group-invalid/input:block",
                                sizes[size].iconTrailing,
                            )}
                        />
                    </>
                )}
            </AriaGroup>

            {hint && (
                <HintText isInvalid={isInvalid} className={cx(size === "sm" && "text-xs")}>
                    {hint}
                </HintText>
            )}
        </div>
    );
};
