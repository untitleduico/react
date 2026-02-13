"use client";

import { isValidElement, useContext } from "react";
import { Check } from "@untitledui/icons";
import type { ListBoxItemProps as AriaListBoxItemProps } from "react-aria-components";
import { ListBoxItem as AriaListBoxItem, Text as AriaText } from "react-aria-components";
import { Avatar } from "@/components/base/avatar/avatar";
import { cx } from "@/utils/cx";
import { isReactComponent } from "@/utils/is-react-component";
import type { SelectItemType } from "./select";
import { SelectContext } from "./select";

const sizes = {
    sm: {
        root: "p-2 pr-2.5 gap-1.5",
        text: "text-sm",
        textContainer: "gap-x-1.5",
        check: "size-4 stroke-[2.25px]",
        icon: "*:data-icon:size-4 *:data-icon:stroke-[2.25px]",
    },
    md: {
        root: "p-2 pr-2.5 gap-2",
        text: "text-md",
        textContainer: "gap-x-2",
        check: "size-5",
        icon: "*:data-icon:size-5",
    },
    lg: {
        root: "p-2.5 pl-2 gap-2",
        text: "text-md",
        textContainer: "gap-x-2",
        check: "size-5",
        icon: "*:data-icon:size-5",
    },
};

interface SelectItemProps extends Omit<AriaListBoxItemProps<SelectItemType>, "id">, SelectItemType {}

export const SelectItem = ({ label, id, value, avatarUrl, supportingText, isDisabled, icon: Icon, className, children, ...props }: SelectItemProps) => {
    const { size } = useContext(SelectContext);

    const labelOrChildren = label || (typeof children === "string" ? children : "");
    const textValue = supportingText ? labelOrChildren + " " + supportingText : labelOrChildren;

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
            className={(state) => cx("w-full px-1.5 py-px outline-hidden", typeof className === "function" ? className(state) : className)}
        >
            {(state) => (
                <div
                    className={cx(
                        "flex cursor-pointer items-center rounded-md outline-hidden select-none",
                        state.isSelected && "bg-active",
                        state.isDisabled && "cursor-not-allowed opacity-50",
                        state.isFocused && "bg-primary_hover",
                        state.isFocusVisible && "ring-2 ring-focus-ring ring-inset",

                        // Icon styles
                        "*:data-icon:size-5 *:data-icon:shrink-0 *:data-icon:text-fg-quaternary",

                        sizes[size].root,
                    )}
                >
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

                    {state.isSelected && <Check aria-hidden="true" className={cx("ml-auto text-fg-brand-primary", sizes[size].check)} />}
                </div>
            )}
        </AriaListBoxItem>
    );
};
