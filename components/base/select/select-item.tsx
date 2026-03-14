"use client";

import { isValidElement, useContext } from "react";
import { Check } from "@untitledui/icons";
import type { ListBoxItemProps as AriaListBoxItemProps } from "react-aria-components";
import { ListBoxItem as AriaListBoxItem, Text as AriaText } from "react-aria-components";
import { Avatar } from "@/components/base/avatar/avatar";
import { CheckboxBase } from "@/components/base/checkbox/checkbox";
import { cx } from "@/utils/cx";
import { isReactComponent } from "@/utils/is-react-component";
import type { SelectItemType } from "./select-shared";
import { SelectContext } from "./select-shared";

const sizes = {
    sm: {
        root: "p-2 pr-2.5 gap-2 *:data-icon:size-4 *:data-icon:stroke-[2.25px]",
        text: "text-sm",
        textContainer: "gap-x-1.5",
        check: "size-4 stroke-[2.25px]",
        checkbox: "sm" as const,
    },
    md: {
        root: "p-2 pr-2.5 gap-2 *:data-icon:size-5",
        text: "text-md",
        textContainer: "gap-x-2",
        check: "size-5",
        checkbox: "sm" as const,
    },
    lg: {
        root: "p-2.5 pl-2 gap-2 *:data-icon:size-5",
        text: "text-md",
        textContainer: "gap-x-2",
        check: "size-5",
        checkbox: "md" as const,
    },
};

interface SelectItemProps extends Omit<AriaListBoxItemProps<SelectItemType>, "id">, SelectItemType {
    /** The selection indicator to be displayed on the item. */
    selectionIndicator?: "checkmark" | "checkbox" | "none";
    /** The alignment of the selection indicator. */
    selectionIndicatorAlign?: "left" | "right";
}

export const SelectItem = ({
    label,
    id,
    value,
    avatarUrl,
    supportingText,
    isDisabled,
    icon: Icon,
    className,
    children,
    selectionIndicator = "checkmark",
    selectionIndicatorAlign = "right",
    ...props
}: SelectItemProps) => {
    const { size } = useContext(SelectContext);

    const labelOrChildren = label || (typeof children === "string" ? children : "");
    const textValue = supportingText ? labelOrChildren + " " + supportingText : labelOrChildren;

    const isLeft = selectionIndicatorAlign === "left";

    return (
        <AriaListBoxItem
            id={id}
            value={
                value ?? {
                    id,
                    label: labelOrChildren,
                    avatarUrl,
                    supportingText,
                    isDisabled,
                    icon: Icon,
                }
            }
            textValue={textValue}
            isDisabled={isDisabled}
            {...props}
            className={(state) =>
                cx("w-full py-px outline-hidden", size === "sm" ? "px-1" : "px-1.5", typeof className === "function" ? className(state) : className)
            }
        >
            {(state) => (
                <div
                    className={cx(
                        "flex cursor-pointer items-center rounded-md outline-hidden select-none",
                        (state.isFocused || state.isHovered || (state.isSelected && selectionIndicator !== "checkbox")) && "bg-primary_hover",
                        state.isDisabled && "cursor-not-allowed opacity-50",
                        state.isFocusVisible && "ring-2 ring-focus-ring ring-inset",

                        // Icon styles
                        "*:data-icon:shrink-0 *:data-icon:text-fg-quaternary",

                        sizes[size].root,
                    )}
                >
                    {isLeft && selectionIndicator === "checkbox" && (
                        <CheckboxBase size={sizes[size].checkbox} isSelected={state.isSelected} isDisabled={state.isDisabled} />
                    )}

                    {avatarUrl ? (
                        <Avatar aria-hidden="true" size="xs" src={avatarUrl} alt={label} className={cx(size === "sm" && "size-5")} />
                    ) : isReactComponent(Icon) ? (
                        <Icon data-icon aria-hidden="true" />
                    ) : isValidElement(Icon) ? (
                        Icon
                    ) : null}

                    <div className={cx("flex w-full min-w-0 flex-1 flex-wrap", sizes[size].textContainer)}>
                        <AriaText slot="label" className={cx("truncate font-medium whitespace-nowrap text-primary", sizes[size].text)}>
                            {label || (typeof children === "function" ? children(state) : children)}
                        </AriaText>

                        {supportingText && (
                            <AriaText slot="description" className={cx("whitespace-nowrap text-tertiary", sizes[size].text)}>
                                {supportingText}
                            </AriaText>
                        )}
                    </div>

                    {state.isSelected && selectionIndicator === "checkmark" && (
                        <Check aria-hidden="true" className={cx("ml-auto text-fg-brand-primary", sizes[size].check)} />
                    )}

                    {!isLeft && selectionIndicator === "checkbox" && (
                        <CheckboxBase size={sizes[size].checkbox} isSelected={state.isSelected} isDisabled={state.isDisabled} className="ml-auto" />
                    )}
                </div>
            )}
        </AriaListBoxItem>
    );
};
