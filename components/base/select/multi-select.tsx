"use client";

import type { ReactNode, RefAttributes } from "react";
import { useCallback, useRef, useState } from "react";
import { ChevronDown, SearchLg } from "@untitledui/icons";
import { useFilter } from "react-aria";
import type { Selection } from "react-aria-components";
import {
    Autocomplete as AriaAutocomplete,
    Button as AriaButton,
    Dialog as AriaDialog,
    DialogTrigger as AriaDialogTrigger,
    Input as AriaInput,
    ListBox as AriaListBox,
    Popover as AriaPopover,
    SearchField as AriaSearchField,
} from "react-aria-components";
import { Button } from "@/components/base/buttons/button";
import { HintText } from "@/components/base/input/hint-text";
import { Label } from "@/components/base/input/label";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { cx } from "@/utils/cx";
import { SelectItem } from "./select-item";
import { type CommonProps, SelectContext, type SelectItemType, sizes } from "./select-shared";

const searchSizes = {
    sm: { wrapper: "py-1", root: "px-3 py-2 gap-2 *:data-icon:size-4 *:data-icon:stroke-[2.25px]", text: "text-sm" },
    md: { wrapper: "py-0.5", root: "px-3 py-2 gap-2 *:data-icon:size-5", text: "text-md" },
    lg: { wrapper: "py-0.5", root: "px-3.5 py-2.5 gap-2 *:data-icon:size-5", text: "text-md" },
};

const footerButtonSize = {
    sm: "xs" as const,
    md: "sm" as const,
    lg: "sm" as const,
};

const popoverMaxHeights = {
    sm: "max-h-68",
    md: "max-h-76",
    lg: "max-h-92",
};

interface MultiSelectFooterProps {
    /**
     * The size of the footer buttons.
     * @default "sm"
     */
    size?: "sm" | "md" | "lg";
    /** Handler that is called when the reset button is clicked. */
    onReset?: () => void;
    /** Handler that is called when the select all button is clicked. */
    onSelectAll?: () => void;
    /** Additional class name. */
    className?: string;
}

const MultiSelectFooter = ({ size = "sm", onReset, onSelectAll, className }: MultiSelectFooterProps) => {
    const btnSize = footerButtonSize[size];

    return (
        <div className={cx("flex items-center justify-between border-t border-secondary p-3", className)}>
            <Button size={btnSize} color="secondary" onClick={onReset}>
                Reset
            </Button>
            <Button size={btnSize} color="secondary" onClick={onSelectAll}>
                Select all
            </Button>
        </div>
    );
};

interface MultiSelectEmptyStateProps {
    /**
     * The title to display.
     * @default "No results found"
     */
    title?: string;
    /**
     * The description to display.
     * @default "Please try a different search term."
     */
    description?: string;
    /** Handler that is called when the clear search button is clicked. */
    onClearSearch?: () => void;
    /** Additional class name. */
    className?: string;
}

const MultiSelectEmptyState = ({
    title = "No results found",
    description = "Please try a different search term.",
    onClearSearch,
    className,
}: MultiSelectEmptyStateProps) => (
    <div className={cx("flex flex-col items-center gap-3 px-4 py-4", className)}>
        <div className="flex flex-col items-center gap-3">
            <FeaturedIcon icon={SearchLg} size="sm" color="gray" theme="modern" />
            <div className="flex flex-col items-center gap-0.5 text-center text-sm">
                <p className="font-semibold text-primary">{title}</p>
                <p className="text-tertiary">{description}</p>
            </div>
        </div>
        {onClearSearch && (
            <Button size="sm" color="link-color" onClick={onClearSearch}>
                Clear search
            </Button>
        )}
    </div>
);

interface MultiSelectProps extends RefAttributes<HTMLDivElement>, CommonProps {
    /** The items to display in the listbox. */
    items?: SelectItemType[];
    /** The children to render for each item. */
    children: ReactNode | ((item: SelectItemType) => ReactNode);
    /** The currently selected keys (controlled). */
    selectedKeys?: Selection;
    /** The initial selected keys (uncontrolled). */
    defaultSelectedKeys?: Selection;
    /** Handler that is called when the selection changes. */
    onSelectionChange?: (keys: Selection) => void;
    /** Whether the select is disabled. */
    isDisabled?: boolean;
    /** Whether the select is required. */
    isRequired?: boolean;
    /** Whether the select is in an invalid state. */
    isInvalid?: boolean;
    /** Additional class name for the popover. */
    popoverClassName?: string;
    /** Additional class name for the root element. */
    className?: string;
    /** Handler that is called when the reset button is clicked. */
    onReset?: () => void;
    /** Handler that is called when the select all button is clicked. */
    onSelectAll?: () => void;
    /**
     * Whether to show the footer with reset and select all buttons.
     * @default true
     */
    showFooter?: boolean;
    /**
     * Whether to show the search input in the popover.
     * @default true
     */
    showSearch?: boolean;
    /** The title to display when no items match the search. */
    emptyStateTitle?: string;
    /** The description to display when no items match the search. */
    emptyStateDescription?: string;
    /** Custom formatter for the selected count text in the trigger. */
    selectedCountFormatter?: (count: number) => ReactNode;
    /** Supporting text displayed next to the selected count in the trigger. */
    supportingText?: ReactNode;
}

const MultiSelectRoot = ({
    items,
    children,
    size = "md",
    selectedKeys,
    defaultSelectedKeys,
    onSelectionChange,
    isDisabled,
    isRequired,
    isInvalid,
    placeholder = "Select",
    label,
    hint,
    tooltip,
    hideRequiredIndicator,
    popoverClassName,
    className,
    onReset,
    onSelectAll,
    showFooter = true,
    showSearch = true,
    emptyStateTitle,
    emptyStateDescription,
    selectedCountFormatter,
    supportingText,
}: MultiSelectProps) => {
    const { contains } = useFilter({ sensitivity: "base" });
    const [searchValue, setSearchValue] = useState("");

    const triggerRef = useRef<HTMLButtonElement>(null);
    const [popoverWidth, setPopoverWidth] = useState("");

    const onResize = useCallback(() => {
        if (!triggerRef.current) return;
        const rect = triggerRef.current.getBoundingClientRect();
        setPopoverWidth(rect.width + "px");
    }, []);

    const selectedCount = selectedKeys instanceof Set ? selectedKeys.size : selectedKeys === "all" ? (items?.length ?? 0) : 0;
    const hasSelection = selectedCount > 0;

    const handleClearSearch = useCallback(() => {
        setSearchValue("");
    }, []);

    return (
        <SelectContext.Provider value={{ size }}>
            <div className={cx("flex flex-col gap-1.5", className)}>
                {label && (
                    <Label isRequired={hideRequiredIndicator ? false : isRequired} isInvalid={isInvalid} tooltip={tooltip}>
                        {label}
                    </Label>
                )}

                <AriaDialogTrigger>
                    <AriaButton
                        ref={triggerRef}
                        isDisabled={isDisabled}
                        onClick={onResize}
                        className={(state) =>
                            cx(
                                "relative flex w-full cursor-pointer items-center rounded-lg bg-primary shadow-xs ring-1 ring-primary outline-hidden transition duration-100 ease-linear ring-inset",
                                (state.isFocusVisible || state.isPressed) && "ring-2 ring-brand",
                                state.isDisabled && "cursor-not-allowed opacity-50",
                            )
                        }
                    >
                        <span
                            className={cx(
                                "flex w-full items-center truncate text-left",
                                sizes[size].root,
                                "*:data-icon:shrink-0 *:data-icon:text-fg-quaternary",
                            )}
                        >
                            {hasSelection ? (
                                <span className={cx("flex items-center", sizes[size].textContainer)}>
                                    <span className={cx("font-medium text-primary", sizes[size].text)}>
                                        {selectedCountFormatter ? selectedCountFormatter(selectedCount) : `${selectedCount} selected`}
                                    </span>
                                    {supportingText && <span className={cx("text-tertiary", sizes[size].text)}>{supportingText}</span>}
                                </span>
                            ) : (
                                <span className={cx("text-placeholder", sizes[size].text)}>{placeholder}</span>
                            )}

                            <ChevronDown
                                aria-hidden="true"
                                className={cx("ml-auto shrink-0 text-fg-quaternary", size === "lg" ? "size-5" : "size-4 stroke-[2.25px]")}
                            />
                        </span>
                    </AriaButton>

                    <AriaPopover
                        placement="bottom"
                        offset={4}
                        containerPadding={0}
                        style={{ width: popoverWidth || undefined }}
                        className={(state) =>
                            cx(
                                "w-(--trigger-width) origin-(--trigger-anchor-point) overflow-hidden rounded-lg bg-primary shadow-lg ring-1 ring-secondary_alt outline-hidden will-change-transform",
                                state.isEntering &&
                                    "duration-150 ease-out animate-in fade-in placement-top:slide-in-from-bottom-0.5 placement-bottom:slide-in-from-top-0.5",
                                state.isExiting &&
                                    "duration-100 ease-in animate-out fade-out placement-top:slide-out-to-bottom-0.5 placement-bottom:slide-out-to-top-0.5",
                                popoverClassName,
                            )
                        }
                    >
                        <AriaDialog className="outline-hidden">
                            <AriaAutocomplete filter={contains} inputValue={searchValue} onInputChange={setSearchValue}>
                                {showSearch && (
                                    <div className={cx("border-b border-secondary", searchSizes[size].wrapper)}>
                                        <AriaSearchField aria-label="Search" value={searchValue} onChange={setSearchValue} autoFocus>
                                            <div className={cx("flex items-center", searchSizes[size].root)}>
                                                <SearchLg data-icon aria-hidden="true" className="shrink-0 text-fg-quaternary" />
                                                <AriaInput
                                                    placeholder="Search"
                                                    className={cx(
                                                        "w-full appearance-none bg-transparent text-primary caret-alpha-black/90 outline-hidden placeholder:text-placeholder",
                                                        searchSizes[size].text,
                                                    )}
                                                />
                                            </div>
                                        </AriaSearchField>
                                    </div>
                                )}

                                <AriaListBox
                                    aria-label={label || "Options"}
                                    items={items}
                                    selectionMode="multiple"
                                    selectedKeys={selectedKeys}
                                    defaultSelectedKeys={defaultSelectedKeys}
                                    onSelectionChange={onSelectionChange}
                                    renderEmptyState={() => (
                                        <MultiSelectEmptyState
                                            title={emptyStateTitle}
                                            description={emptyStateDescription}
                                            onClearSearch={searchValue ? handleClearSearch : undefined}
                                        />
                                    )}
                                    className={cx("overflow-y-auto py-1 outline-hidden", popoverMaxHeights[size])}
                                >
                                    {children}
                                </AriaListBox>
                            </AriaAutocomplete>

                            {showFooter && <MultiSelectFooter size={size} onReset={onReset} onSelectAll={onSelectAll} />}
                        </AriaDialog>
                    </AriaPopover>
                </AriaDialogTrigger>

                {hint && (
                    <HintText isInvalid={isInvalid} className={cx(size === "sm" && "text-xs")}>
                        {hint}
                    </HintText>
                )}
            </div>
        </SelectContext.Provider>
    );
};

const MultiSelect = MultiSelectRoot as typeof MultiSelectRoot & {
    Item: typeof SelectItem;
    Footer: typeof MultiSelectFooter;
    EmptyState: typeof MultiSelectEmptyState;
};

MultiSelect.Item = SelectItem;
MultiSelect.Footer = MultiSelectFooter;
MultiSelect.EmptyState = MultiSelectEmptyState;

export { MultiSelect };
