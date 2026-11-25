"use client";

import type { ReactNode } from "react";
import { useContext } from "react";
import type { SelectState as AriaSelectState } from "react-aria-components";
import { SelectStateContext as AriaSelectStateContext } from "react-aria-components";
import { cx } from "@/utils/cx";
import type { SelectFooterContent, SelectItemType } from "./select-shared";

/** Renders `footer` content inside the select popover, passing it the select's React Aria state when it is a function. */
export const SelectFooterSlot = <M extends "single" | "multiple">({ footer }: { footer: SelectFooterContent<M> }) => {
    const state = useContext(AriaSelectStateContext) as AriaSelectState<SelectItemType, M> | null;

    if (typeof footer !== "function") return footer;
    if (!state) return null;

    return footer(state);
};

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
