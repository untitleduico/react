"use client";

import type { FC, ReactNode, RefAttributes } from "react";
import { isValidElement, useCallback, useContext, useMemo, useState } from "react";
import { ChevronDown, SearchLg } from "@untitledui/icons";
import { useFilter } from "react-aria";
import type { SelectProps as AriaSelectProps, SelectState as AriaSelectState, Key, Selection } from "react-aria-components";
import {
    Autocomplete as AriaAutocomplete,
    Button as AriaButton,
    Input as AriaInput,
    ListBox as AriaListBox,
    Popover as AriaPopover,
    SearchField as AriaSearchField,
    Select as AriaSelect,
    SelectStateContext as AriaSelectStateContext,
    SelectValue as AriaSelectValue,
} from "react-aria-components";
import { Button } from "@/components/base/buttons/button";
import { HintText } from "@/components/base/input/hint-text";
import { Label } from "@/components/base/input/label";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { cx } from "@/utils/cx";
import { isReactComponent } from "@/utils/is-react-component";
import { SelectItem } from "./select-item";
import {
    type CommonProps,
    SelectContext,
    SelectFooter,
    type SelectFooterContent,
    SelectFooterSlot,
    type SelectItemType,
    getSelectableKeys,
    sizes,
} from "./select-shared";

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
     * The size of the default footer buttons. Defaults to the size of the parent `MultiSelect`.
     * @default "md"
     */
    size?: "sm" | "md" | "lg";
    /** Handler that is called when the reset button is clicked. When omitted, the button clears the selection. */
    onReset?: () => void;
    /** Handler that is called when the select all button is clicked. When omitted, the button selects every enabled item. */
    onSelectAll?: () => void;
    /** Custom footer actions. When provided, they replace the default "Reset" and "Select all" buttons. */
    children?: ReactNode;
    /** Additional class name. */
    className?: string;
}

const MultiSelectFooter = ({ size, onReset, onSelectAll, children, className }: MultiSelectFooterProps) => {
    const context = useContext(SelectContext);
    const state = useContext(AriaSelectStateContext) as AriaSelectState<SelectItemType, "multiple"> | null;

    if (children) return <SelectFooter className={className}>{children}</SelectFooter>;

    const btnSize = footerButtonSize[size ?? context.size];

    return (
        <SelectFooter className={className}>
            <Button size={btnSize} color="secondary" onClick={onReset ?? (() => state?.setValue([]))}>
                Reset
            </Button>
            <Button size={btnSize} color="secondary" onClick={onSelectAll ?? (() => state && state.setValue(getSelectableKeys(state)))}>
                Select all
            </Button>
        </SelectFooter>
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

interface MultiSelectProps
    extends
        Omit<
            AriaSelectProps<SelectItemType, "multiple">,
            | "children"
            | "items"
            | "className"
            | "selectionMode"
            | "value"
            | "defaultValue"
            | "onChange"
            | "selectedKey"
            | "defaultSelectedKey"
            | "onSelectionChange"
            | "placeholder"
        >,
        RefAttributes<HTMLDivElement>,
        CommonProps {
    /** The items to display in the listbox. */
    items?: SelectItemType[];
    /** The children to render for each item. */
    children: ReactNode | ((item: SelectItemType) => ReactNode);
    /** The currently selected keys (controlled). `"all"` selects every enabled entry of `items`. */
    selectedKeys?: Selection;
    /** The initial selected keys (uncontrolled). `"all"` selects every enabled entry of `items`. */
    defaultSelectedKeys?: Selection;
    /** Handler that is called when the selection changes. */
    onSelectionChange?: (keys: Selection) => void;
    /** Additional class name for the popover. */
    popoverClassName?: string;
    /** Additional class name for the root element. */
    className?: string;
    /** Handler that is called when the default footer's reset button is clicked. When omitted, the button clears the selection. */
    onReset?: () => void;
    /** Handler that is called when the default footer's select all button is clicked. When omitted, the button selects every enabled item. */
    onSelectAll?: () => void;
    /**
     * Whether to show the footer.
     * @default true
     */
    showFooter?: boolean;
    /** Replaces the default "Reset" and "Select all" footer. Pass a function to receive the select's React Aria state, e.g. to change the selection or close the dropdown. */
    footer?: SelectFooterContent<"multiple">;
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
    /** Leading icon rendered in the trigger, before the placeholder / selected count. Matches `Select`'s `icon`. */
    icon?: FC | ReactNode;
}

/** Converts a `Selection` to the key array React Aria's multiple-selection `Select` expects. */
const toKeyArray = (keys: Selection | undefined, items: SelectItemType[] | undefined): Key[] | undefined => {
    if (keys === undefined) return undefined;
    if (keys === "all") return (items ?? []).filter((item) => !item.isDisabled).map((item) => item.id);

    return [...keys];
};

const MultiSelectRoot = ({
    items,
    children,
    size = "md",
    selectedKeys,
    defaultSelectedKeys,
    onSelectionChange,
    isInvalid,
    isRequired,
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
    footer,
    showSearch = true,
    emptyStateTitle,
    emptyStateDescription,
    selectedCountFormatter,
    supportingText,
    icon,
    ...rest
}: MultiSelectProps) => {
    const { contains } = useFilter({ sensitivity: "base" });
    const [searchValue, setSearchValue] = useState("");

    const value = useMemo(() => toKeyArray(selectedKeys, items), [selectedKeys, items]);
    // Uncontrolled default is only read on mount, so it doesn't need to track `items`.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const defaultValue = useMemo(() => toKeyArray(defaultSelectedKeys, items), []);

    // Capitalized alias so a function-component icon can be rendered as JSX (mirrors Select).
    const Icon = icon;

    const handleClearSearch = useCallback(() => {
        setSearchValue("");
    }, []);

    return (
        <SelectContext.Provider value={{ size }}>
            <AriaSelect<SelectItemType, "multiple">
                {...rest}
                selectionMode="multiple"
                value={value}
                defaultValue={defaultValue}
                onChange={(keys) => onSelectionChange?.(new Set(keys))}
                isInvalid={isInvalid}
                isRequired={isRequired}
                allowsEmptyCollection
                className={cx("flex flex-col gap-1.5", className)}
            >
                {label && (
                    <Label isRequired={hideRequiredIndicator ? false : isRequired} isInvalid={isInvalid} tooltip={tooltip}>
                        {label}
                    </Label>
                )}

                <AriaButton
                    className={(state) =>
                        cx(
                            "relative flex w-full cursor-pointer items-center rounded-lg bg-primary shadow-xs ring-1 ring-primary outline-hidden transition duration-100 ease-linear ring-inset",
                            (state.isFocusVisible || state.isPressed) && "ring-2 ring-brand",
                            state.isDisabled && "cursor-not-allowed opacity-50",
                        )
                    }
                >
                    <span
                        className={cx("flex w-full items-center truncate text-left", sizes[size].root, "*:data-icon:shrink-0 *:data-icon:text-fg-quaternary")}
                    >
                        {isReactComponent(Icon) ? <Icon data-icon aria-hidden="true" /> : isValidElement(Icon) ? Icon : null}

                        <AriaSelectValue<SelectItemType> className="flex min-w-0 items-center truncate">
                            {({ selectedItems }) => {
                                const selectedCount = selectedItems.length;

                                return selectedCount > 0 ? (
                                    <span className={cx("flex items-center", sizes[size].textContainer)}>
                                        <span className={cx("font-medium text-primary", sizes[size].text)}>
                                            {selectedCountFormatter ? selectedCountFormatter(selectedCount) : `${selectedCount} selected`}
                                        </span>
                                        {supportingText && <span className={cx("text-tertiary", sizes[size].text)}>{supportingText}</span>}
                                    </span>
                                ) : (
                                    <span className={cx("text-placeholder", sizes[size].text)}>{placeholder}</span>
                                );
                            }}
                        </AriaSelectValue>

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
                    className={(state) =>
                        cx(
                            "flex w-(--trigger-width) origin-(--trigger-anchor-point) flex-col overflow-hidden rounded-lg bg-primary shadow-lg ring-1 ring-secondary_alt outline-hidden will-change-transform",
                            state.isEntering &&
                                "duration-150 ease-out animate-in fade-in placement-top:slide-in-from-bottom-0.5 placement-bottom:slide-in-from-top-0.5",
                            state.isExiting &&
                                "duration-100 ease-in animate-out fade-out placement-top:slide-out-to-bottom-0.5 placement-bottom:slide-out-to-top-0.5",
                            popoverClassName,
                        )
                    }
                >
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
                            items={items}
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

                    {showFooter &&
                        (footer === undefined ? <MultiSelectFooter onReset={onReset} onSelectAll={onSelectAll} /> : <SelectFooterSlot footer={footer} />)}
                </AriaPopover>

                {hint && (
                    <HintText isInvalid={isInvalid} className={cx(size === "sm" && "text-xs")}>
                        {hint}
                    </HintText>
                )}
            </AriaSelect>
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
