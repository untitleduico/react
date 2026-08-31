"use client";

import type { FocusEventHandler, KeyboardEvent, PointerEventHandler, RefAttributes, RefObject } from "react";
import React, { createContext, useCallback, useContext, useRef, useState } from "react";
import { SearchLg } from "@untitledui/icons";
import { FocusScope, useFilter, useFocusManager } from "react-aria";
import type { ComboBoxProps as AriaComboBoxProps, GroupProps as AriaGroupProps, ListBoxProps as AriaListBoxProps, Key } from "react-aria-components";
import { ComboBox as AriaComboBox, Group as AriaGroup, Input as AriaInput, ListBox as AriaListBox, ComboBoxStateContext } from "react-aria-components";
import type { ListData } from "react-stately";
import { useListData } from "react-stately";
import { Avatar } from "@/components/base/avatar/avatar";
import type { IconComponentType } from "@/components/base/badges/badge-types";
import { HintText } from "@/components/base/input/hint-text";
import { Label } from "@/components/base/input/label";
import { Popover } from "@/components/base/select/popover";
import { SelectContext, type SelectItemType, sizes } from "@/components/base/select/select-shared";
import { TagCloseX } from "@/components/base/tags/base-components/tag-close-x";
import { useResizeObserver } from "@/hooks/use-resize-observer";
import { cx } from "@/utils/cx";
import { SelectItem } from "./select-item";

interface TagSelectValueProps extends AriaGroupProps {
    /** Controls the height, padding, and text size of the input group, as well as how compact the selected tags are. */
    size: "sm" | "md" | "lg";
    /** Whether to show the ⌘K hint at the end of the input on medium screens and up. It also reserves a minimum width for the text input. */
    shortcut?: boolean;
    /** Whether the tags are disabled. This value is not forwarded to the DOM — the group's own disabled styling comes from the enclosing combo box state. */
    isDisabled?: boolean;
    /** The placeholder text shown in the search input. */
    placeholder?: string;
    /** Additional CSS classes merged onto the container of the ⌘K hint. */
    shortcutClassName?: string;
    /** The icon component rendered at the start of the input group. Pass `null` to render no icon. */
    icon?: IconComponentType | null;
    /** A ref to the group element. `TagSelect` uses it to measure the trigger so the popover can match its width. */
    ref?: RefObject<HTMLDivElement | null>;
    /** Fires when focus enters the group. `TagSelect` uses it to re-measure the trigger width before the popover opens. */
    onFocus?: FocusEventHandler;
    /** Fires when the pointer enters the group. `TagSelect` uses it to re-measure the trigger width before the popover opens. */
    onPointerEnter?: PointerEventHandler;
}

const TagSelectContext = createContext<{
    selectedKeys: Key[];
    selectedItems: ListData<SelectItemType>;
    onRemove: (keys: Set<Key>) => void;
    onInputChange: (value: string) => void;
    valueFormatter?: (item: SelectItemType) => string;
}>({
    selectedKeys: [],
    selectedItems: {} as ListData<SelectItemType>,
    onRemove: () => {},
    onInputChange: () => {},
});

interface TagSelectProps extends Omit<AriaComboBoxProps<SelectItemType>, "children" | "items">, RefAttributes<HTMLDivElement> {
    /** Helper text rendered below the input. It switches to the error style when the field is invalid. */
    hint?: string;
    /** The label rendered above the input. Nothing is rendered when it is omitted. */
    label?: string;
    /** Text for the help tooltip shown next to the label. Only rendered when `label` is set. */
    tooltip?: string;
    /** Controls the height, padding, and text size of the input, the selected tags, and the popover. */
    size?: "sm" | "md" | "lg";
    /** The placeholder text shown in the search input. */
    placeholder?: string;
    /** Whether to show the ⌘K hint at the end of the input on medium screens and up. */
    shortcut?: boolean;
    /** The full set of options offered in the dropdown. They are filtered as the user types, and already selected items are hidden from the list. */
    items?: SelectItemType[];
    /** Additional CSS classes merged onto the dropdown popover. */
    popoverClassName?: string;
    /** Additional CSS classes merged onto the container of the ⌘K hint. */
    shortcutClassName?: string;
    /** The list state holding the selected items, typically created with `useListData`. The component appends to it on selection and removes from it when a tag is dismissed. */
    selectedItems: ListData<SelectItemType>;
    /**
     * The icon component rendered at the start of the input. Pass `null` to render no icon.
     * @default SearchLg
     */
    icon?: IconComponentType | null;
    /** The listbox content: either the options themselves or a render function called with each filtered item. */
    children: AriaListBoxProps<SelectItemType>["children"];
    /** Fires with the key of an item after its tag has been removed from the selection. */
    onItemCleared?: (key: Key) => void;
    /** Fires with the key of an item after it has been added to the selection. */
    onItemInserted?: (key: Key) => void;
    /** Returns the text to display on the tag for a selected item. Without it the item's `label` is used. */
    valueFormatter?: (item: SelectItemType) => string;
}

export const TagSelectBase = ({
    items,
    children,
    size = "sm",
    selectedItems,
    onItemCleared,
    onItemInserted,
    valueFormatter,
    shortcut,
    placeholder = "Search",
    icon,
    // Omit name to avoid conflicts with the `Select` component
    name: _name,
    className,
    ...props
}: TagSelectProps) => {
    const { contains } = useFilter({ sensitivity: "base" });
    const selectedKeys = selectedItems.items.map((item) => item.id);

    const filter = useCallback(
        (item: SelectItemType, filterText: string) => {
            return !selectedKeys.includes(item.id) && contains(item.label || item.supportingText || "", filterText);
        },
        [contains, selectedKeys],
    );

    const accessibleList = useListData({
        initialItems: items,
        filter,
    });

    const onRemove = useCallback(
        (keys: Set<Key>) => {
            const key = keys.values().next().value;

            if (!key) return;

            selectedItems.remove(key);
            onItemCleared?.(key);
        },
        [selectedItems, onItemCleared],
    );

    const onSelectionChange = (id: Key | null) => {
        if (!id) {
            return;
        }

        const item = accessibleList.getItem(id);

        if (!item) {
            return;
        }

        if (!selectedKeys.includes(id as string)) {
            selectedItems.append(item);
            onItemInserted?.(id);
        }

        accessibleList.setFilterText("");
    };

    const onInputChange = (value: string) => {
        accessibleList.setFilterText(value);
    };

    const placeholderRef = useRef<HTMLDivElement>(null);
    const [popoverWidth, setPopoverWidth] = useState("");

    // Resize observer for popover width
    const onResize = useCallback(() => {
        if (!placeholderRef.current) return;
        let divRect = placeholderRef.current?.getBoundingClientRect();
        setPopoverWidth(divRect.width + "px");
    }, [placeholderRef, setPopoverWidth]);

    useResizeObserver({
        ref: placeholderRef,
        onResize: onResize,
        box: "border-box",
    });

    return (
        <TagSelectContext.Provider
            value={{
                selectedKeys,
                selectedItems,
                onInputChange,
                onRemove,
                valueFormatter,
            }}
        >
            <SelectContext.Provider value={{ size }}>
                <AriaComboBox
                    allowsEmptyCollection
                    menuTrigger="focus"
                    items={accessibleList.items}
                    onInputChange={onInputChange}
                    inputValue={accessibleList.filterText}
                    // This keeps the combobox popover open and the input value unchanged when an item is selected.
                    value={null}
                    onChange={onSelectionChange}
                    className={(state) => cx("flex flex-col gap-1.5", typeof className === "function" ? className(state) : className)}
                    {...props}
                >
                    {(state) => (
                        <>
                            {props.label && (
                                <Label isRequired={state.isRequired} tooltip={props.tooltip}>
                                    {props.label}
                                </Label>
                            )}

                            <TagSelectTagsValue
                                size={size}
                                shortcut={shortcut}
                                ref={placeholderRef}
                                placeholder={placeholder}
                                icon={icon}
                                // This is a workaround to correctly calculating the trigger width
                                // while using ResizeObserver wasn't 100% reliable.
                                onFocus={onResize}
                                onPointerEnter={onResize}
                            />

                            <Popover size={size} triggerRef={placeholderRef} style={{ width: popoverWidth }} className={props?.popoverClassName}>
                                <AriaListBox selectionMode="multiple" className="size-full outline-hidden">
                                    {children}
                                </AriaListBox>
                            </Popover>

                            {props.hint && (
                                <HintText isInvalid={state.isInvalid} className={cx(size === "sm" && "text-xs")}>
                                    {props.hint}
                                </HintText>
                            )}
                        </>
                    )}
                </AriaComboBox>
            </SelectContext.Provider>
        </TagSelectContext.Provider>
    );
};

const InnerTagSelect = ({ isDisabled, shortcut, shortcutClassName, placeholder, size = "sm" }: Omit<TagSelectProps, "selectedItems" | "children">) => {
    const focusManager = useFocusManager();
    const tagSelectContext = useContext(TagSelectContext);
    const comboBoxStateContext = useContext(ComboBoxStateContext);

    const handleInputKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        const isCaretAtStart = event.currentTarget.selectionStart === 0 && event.currentTarget.selectionEnd === 0;

        if (!isCaretAtStart && event.currentTarget.value !== "") {
            return;
        }

        switch (event.key) {
            case "Backspace":
            case "ArrowLeft":
                focusManager?.focusPrevious({ wrap: false, tabbable: false });
                break;
            case "ArrowRight":
                focusManager?.focusNext({ wrap: false, tabbable: false });
                break;
        }
    };

    // Ensure dropdown opens on click even if input is already focused
    const handleInputMouseDown = (_event: React.MouseEvent<HTMLInputElement>) => {
        if (comboBoxStateContext && !comboBoxStateContext.isOpen) {
            comboBoxStateContext.open();
        }
    };

    const handleTagKeyDown = (event: KeyboardEvent<HTMLButtonElement>, value: Key) => {
        // Do nothing when tab is clicked to move focus from the tag to the input element.
        if (event.key === "Tab") {
            return;
        }

        event.preventDefault();

        const isFirstTag = tagSelectContext?.selectedItems?.items?.[0]?.id === value;

        switch (event.key) {
            case " ":
            case "Enter":
            case "Backspace":
                if (isFirstTag) {
                    focusManager?.focusNext({ wrap: false, tabbable: false });
                } else {
                    focusManager?.focusPrevious({ wrap: false, tabbable: false });
                }

                tagSelectContext.onRemove(new Set([value]));
                break;

            case "ArrowLeft":
                focusManager?.focusPrevious({ wrap: false, tabbable: false });
                break;
            case "ArrowRight":
                focusManager?.focusNext({ wrap: false, tabbable: false });
                break;
            case "Escape":
                comboBoxStateContext?.close();
                break;
        }
    };

    const isSelectionEmpty = tagSelectContext?.selectedItems?.items?.length === 0;

    return (
        <div className="relative flex w-full min-w-0 flex-1 flex-row flex-wrap items-center justify-start gap-1.5">
            {!isSelectionEmpty &&
                tagSelectContext?.selectedItems?.items?.map((value) => (
                    <span
                        key={value.id}
                        className={cx(
                            "flex min-w-0 items-center rounded-md bg-primary ring-1 ring-primary ring-inset",
                            size === "sm" ? "px-1 py-0.75" : "py-0.5 pr-1 pl-1.25",
                        )}
                    >
                        <Avatar size="xs" alt={value?.label} src={value?.avatarUrl} className="size-4" />

                        <p
                            className={cx(
                                "truncate font-medium whitespace-nowrap text-secondary select-none",
                                size === "sm" ? "ml-1 text-xs" : "ml-1.25 text-sm",
                            )}
                        >
                            {tagSelectContext.valueFormatter ? tagSelectContext.valueFormatter(value) : value?.label}
                        </p>

                        <TagCloseX
                            size={size === "sm" ? "sm" : "md"}
                            isDisabled={isDisabled}
                            className="ml-0.75"
                            // For workaround, onKeyDown is added to the button
                            onKeyDown={(event) => handleTagKeyDown(event, value.id)}
                            onPress={() => tagSelectContext.onRemove(new Set([value.id]))}
                        />
                    </span>
                ))}

            <div className={cx("relative flex min-w-12 flex-1 flex-row items-center", !isSelectionEmpty && "ml-0.5", shortcut && "min-w-[30%]")}>
                <AriaInput
                    placeholder={placeholder}
                    onKeyDown={handleInputKeyDown}
                    onMouseDown={handleInputMouseDown}
                    className={cx(
                        "w-full flex-[1_0_0] appearance-none bg-transparent text-ellipsis text-primary caret-alpha-black/90 outline-hidden placeholder:text-placeholder focus:outline-hidden disabled:cursor-not-allowed",
                        sizes[size].text,
                    )}
                />

                {shortcut && (
                    <div
                        aria-hidden="true"
                        className={cx(
                            "absolute inset-y-0.5 right-0.5 z-10 hidden items-center rounded-r-[inherit] bg-linear-to-r from-transparent to-bg-primary to-40% pl-8 md:flex",
                            shortcutClassName,
                            sizes[size].shortcut,
                        )}
                    >
                        <span
                            className={cx(
                                "pointer-events-none rounded px-1 py-px text-xs font-medium text-quaternary ring-1 ring-secondary select-none ring-inset",
                                isDisabled && "bg-transparent",
                            )}
                        >
                            ⌘K
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
};

export const TagSelectTagsValue = ({
    size = "sm",
    shortcut,
    placeholder,
    shortcutClassName,
    icon: Icon = SearchLg,
    // Omit this prop to avoid invalid HTML attribute warning
    isDisabled: _isDisabled,
    ...otherProps
}: TagSelectValueProps) => {
    const tagSelectContext = useContext(TagSelectContext);

    const selectedItemsCount = tagSelectContext.selectedKeys.length;

    return (
        <AriaGroup
            {...otherProps}
            className={({ isFocusWithin, isDisabled }) =>
                cx(
                    "relative flex w-full items-center rounded-lg bg-primary shadow-xs ring-1 ring-primary outline-hidden transition duration-100 ease-linear ring-inset",
                    isDisabled && "cursor-not-allowed opacity-50",
                    isFocusWithin && "ring-2 ring-brand",

                    // Icon styles
                    "*:data-icon:shrink-0 *:data-icon:text-fg-quaternary",

                    sizes[size].root,

                    // Overwrite vertical padding for small size when there are selected items
                    // to prevent height jump because the tags are taller than the input text.
                    size === "sm" && selectedItemsCount > 0 && "py-1.5",
                )
            }
        >
            {({ isDisabled }) => (
                <>
                    {Icon && <Icon data-icon className="pointer-events-none" />}
                    <FocusScope contain={false} autoFocus={false} restoreFocus={false}>
                        <InnerTagSelect
                            isDisabled={isDisabled}
                            size={size}
                            shortcut={shortcut}
                            shortcutClassName={shortcutClassName}
                            placeholder={placeholder}
                        />
                    </FocusScope>
                </>
            )}
        </AriaGroup>
    );
};

const TagSelect = TagSelectBase as typeof TagSelectBase & {
    Item: typeof SelectItem;
};

TagSelect.Item = SelectItem;

export { TagSelect };
