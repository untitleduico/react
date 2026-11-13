"use client";

import type { FC, ReactNode } from "react";
import { createContext, useContext } from "react";
import type { SelectState as AriaSelectState, Key } from "react-aria-components";
import { SelectStateContext as AriaSelectStateContext } from "react-aria-components";
import { cx } from "@/utils/cx";

export type SelectItemType = {
    /** Unique identifier for the item. */
    id: string | number;
    /** The primary display text. */
    label?: string;
    /** Avatar image URL. */
    avatarUrl?: string;
    /** Whether the item is disabled. */
    isDisabled?: boolean;
    /** Secondary text displayed alongside the label. */
    supportingText?: string;
    /** Leading icon component or element. */
    icon?: FC | ReactNode;
};

export interface CommonProps {
    /** Helper text displayed below the input. */
    hint?: string;
    /** Field label displayed above the input. */
    label?: string;
    /** Tooltip text for the help icon next to the label. */
    tooltip?: string;
    /**
     * The size of the component.
     * @default "md"
     */
    size?: "sm" | "md" | "lg";
    /** Placeholder text when no value is selected. */
    placeholder?: string;
    /** Whether to hide the required indicator from the label. */
    hideRequiredIndicator?: boolean;
}

export const sizes = {
    sm: {
        root: "py-2 pl-3 pr-2.5 gap-2 *:data-icon:size-4 *:data-icon:stroke-[2.25px]",
        withIcon: "",
        text: "text-sm",
        textContainer: "gap-x-1.5",
        shortcut: "pr-2.5",
    },
    md: { root: "py-2 px-3 gap-2 *:data-icon:size-5", withIcon: "", text: "text-md", textContainer: "gap-x-1.5", shortcut: "pr-2.5" },
    lg: { root: "py-2.5 px-3.5 gap-2 *:data-icon:size-5", withIcon: "", text: "text-md", textContainer: "gap-x-1.5", shortcut: "pr-3" },
};

export const SelectContext = createContext<{ size: "sm" | "md" | "lg" }>({ size: "md" });

/** Content for the `footer` prop: a node, or a function that receives the select's React Aria state. */
export type SelectFooterContent<M extends "single" | "multiple"> = ReactNode | ((state: AriaSelectState<SelectItemType, M>) => ReactNode);

/** Renders `footer` content inside the select popover, passing it the select's React Aria state when it is a function. */
export const SelectFooterSlot = <M extends "single" | "multiple">({ footer }: { footer: SelectFooterContent<M> }) => {
    const state = useContext(AriaSelectStateContext) as AriaSelectState<SelectItemType, M> | null;

    if (typeof footer !== "function") return footer;
    if (!state) return null;

    return footer(state);
};

/**
 * Returns the keys of every enabled item in the collection, for "select all" actions.
 * Pass the result to `state.setValue()`: React Aria's Select ignores `selectionManager.selectAll()`
 * (https://github.com/adobe/react-spectrum/issues/10958).
 */
export const getSelectableKeys = (state: AriaSelectState<SelectItemType, "single" | "multiple">): Key[] =>
    [...state.collection.getKeys()].filter((key) => state.collection.getItem(key)?.type === "item" && !state.selectionManager.isDisabled(key));

interface SelectFooterProps {
    /** The footer actions, usually one or more `Button` elements. */
    children?: ReactNode;
    /** Additional class name. */
    className?: string;
}

/** A bordered action row pinned to the bottom of the select popover. */
export const SelectFooter = ({ children, className }: SelectFooterProps) => (
    <div className={cx("flex items-center justify-between gap-3 border-t border-secondary p-3", className)}>{children}</div>
);
