"use client";

import type { ReactNode, Ref } from "react";
import { Checkbox as AriaCheckbox, type CheckboxProps as AriaCheckboxProps } from "react-aria-components";
import { cx } from "@/utils/cx";

export interface CheckboxBaseProps {
    /** Controls the size and corner radius of the box, and the size of the tick and dash icons inside it. */
    size?: "sm" | "md";
    /** Additional classes merged onto the box element. */
    className?: string;
    /** Whether to draw the keyboard focus ring around the box. Normally passed down by `Checkbox` from React Aria's render state rather than set by hand. */
    isFocusVisible?: boolean;
    /** Whether to render the checked appearance: brand-filled box with the tick faded in. Normally passed down by `Checkbox` rather than set by hand. */
    isSelected?: boolean;
    /** Whether to render the dimmed, not-allowed appearance. Normally passed down by `Checkbox` rather than set by hand. */
    isDisabled?: boolean;
    /** Whether to render the mixed appearance: brand-filled box showing a dash, which is drawn instead of the tick even when `isSelected` is set. Normally passed down by `Checkbox` rather than set by hand. */
    isIndeterminate?: boolean;
}

export const CheckboxBase = ({ className, isSelected, isDisabled, isIndeterminate, size = "sm", isFocusVisible = false }: CheckboxBaseProps) => {
    return (
        <div
            className={cx(
                "relative flex size-4 shrink-0 cursor-pointer appearance-none items-center justify-center rounded bg-primary ring-1 ring-primary ring-inset",
                size === "md" && "size-5 rounded-md",
                (isSelected || isIndeterminate) && "bg-brand-solid ring-brand-solid",
                isDisabled && "cursor-not-allowed opacity-50",
                isDisabled && !(isSelected || isIndeterminate) && "bg-tertiary",
                isFocusVisible && "outline-2 outline-offset-2 outline-focus-ring",
                className,
            )}
        >
            <svg
                aria-hidden="true"
                viewBox="0 0 14 14"
                fill="none"
                className={cx(
                    "pointer-events-none absolute h-3 w-2.5 text-fg-white opacity-0 transition-inherit-all",
                    size === "md" && "size-3.5",
                    isIndeterminate && "opacity-100",
                )}
            >
                <path d="M2.91675 7H11.0834" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

            <svg
                aria-hidden="true"
                viewBox="0 0 14 14"
                fill="none"
                className={cx(
                    "pointer-events-none absolute size-3 text-fg-white opacity-0 transition-inherit-all",
                    size === "md" && "size-3.5",
                    isSelected && !isIndeterminate && "opacity-100",
                )}
            >
                <path d="M11.6666 3.5L5.24992 9.91667L2.33325 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>
    );
};
CheckboxBase.displayName = "CheckboxBase";

interface CheckboxProps extends AriaCheckboxProps {
    /** Ref to the underlying label element that wraps the box and the text. */
    ref?: Ref<HTMLLabelElement>;
    /** Controls the box size, the gap between it and the text, and the label and hint typography. */
    size?: "sm" | "md";
    /** Content rendered beside the box. It sits inside the checkbox's label element, so it also acts as the accessible name and toggles the checkbox when clicked. */
    label?: ReactNode;
    /** Supporting text rendered under the label. Clicks on it are stopped so reading the hint does not toggle the checkbox. */
    hint?: ReactNode;
}

export const Checkbox = ({ label, hint, size = "sm", className, ...ariaCheckboxProps }: CheckboxProps) => {
    const sizes = {
        sm: {
            root: "gap-2",
            textWrapper: "",
            label: "text-sm font-medium",
            hint: "text-sm",
        },
        md: {
            root: "gap-3",
            textWrapper: "gap-0.5",
            label: "text-md font-medium",
            hint: "text-md",
        },
    };

    return (
        <AriaCheckbox
            {...ariaCheckboxProps}
            className={(state) =>
                cx(
                    "relative flex items-start",
                    state.isDisabled && "cursor-not-allowed",
                    sizes[size].root,
                    typeof className === "function" ? className(state) : className,
                )
            }
        >
            {({ isSelected, isIndeterminate, isDisabled, isFocusVisible }) => (
                <>
                    <CheckboxBase
                        size={size}
                        isSelected={isSelected}
                        isIndeterminate={isIndeterminate}
                        isDisabled={isDisabled}
                        isFocusVisible={isFocusVisible}
                        className={label || hint ? "mt-0.5" : ""}
                    />
                    {(label || hint) && (
                        <div className={cx("inline-flex flex-col", sizes[size].textWrapper)}>
                            {label && <p className={cx("text-secondary select-none", sizes[size].label)}>{label}</p>}
                            {hint && (
                                <span className={cx("text-tertiary", sizes[size].hint)} onClick={(event) => event.stopPropagation()}>
                                    {hint}
                                </span>
                            )}
                        </div>
                    )}
                </>
            )}
        </AriaCheckbox>
    );
};
Checkbox.displayName = "Checkbox";
