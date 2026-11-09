"use client";

import type { ReactNode } from "react";
import type { SwitchProps as AriaSwitchProps } from "react-aria-components";
import { Switch as AriaSwitch } from "react-aria-components";
import { cx } from "@/utils/cx";

interface ToggleBaseProps {
    /** Controls the track and knob dimensions, and how far the knob slides when selected. */
    size?: "sm" | "md";
    /** Renders the compact variant: an unpadded track with a bordered knob that overlaps its edges instead of sitting inside them. */
    slim?: boolean;
    /** Additional classes merged onto the track element. */
    className?: string;
    /** Whether to darken the track while selected, for the hover appearance. Normally passed down by `Toggle` from React Aria's render state rather than set by hand. */
    isHovered?: boolean;
    /** Whether to draw the keyboard focus ring around the track. Normally passed down by `Toggle` rather than set by hand. */
    isFocusVisible?: boolean;
    /** Whether to render the on appearance: brand-filled track with the knob slid to the right. Normally passed down by `Toggle` rather than set by hand. */
    isSelected?: boolean;
    /** Whether to render the dimmed, not-allowed appearance. Normally passed down by `Toggle` rather than set by hand. */
    isDisabled?: boolean;
}

export const ToggleBase = ({ className, isHovered, isDisabled, isFocusVisible, isSelected, slim, size = "sm" }: ToggleBaseProps) => {
    const styles = {
        default: {
            sm: {
                root: "h-5 w-9 p-0.5",
                switch: cx("size-4", isSelected && "translate-x-4"),
            },
            md: {
                root: "h-6 w-11 p-0.5",
                switch: cx("size-5", isSelected && "translate-x-5"),
            },
        },
        slim: {
            sm: {
                root: "h-4 w-8",
                switch: cx("size-4", isSelected && "translate-x-4"),
            },
            md: {
                root: "h-5 w-10",
                switch: cx("size-5", isSelected && "translate-x-5"),
            },
        },
    };

    const classes = slim ? styles.slim[size] : styles.default[size];

    return (
        <div
            className={cx(
                "cursor-pointer rounded-full bg-tertiary ring-[0.5px] ring-secondary outline-focus-ring transition duration-150 ease-linear ring-inset",
                isSelected && "bg-brand-solid",
                isSelected && isHovered && "bg-brand-solid_hover",
                isDisabled && "cursor-not-allowed opacity-50",
                isFocusVisible && "outline-2 outline-offset-2",

                slim && "ring-1",
                slim && isSelected && "ring-transparent",
                classes.root,
                className,
            )}
        >
            <div
                style={{
                    transition: "transform 0.15s ease-in-out, translate 0.15s ease-in-out, border-color 0.1s linear, background-color 0.1s linear",
                }}
                className={cx(
                    "rounded-full bg-fg-white shadow-sm",

                    slim && "shadow-xs",
                    slim && "border border-toggle-border",
                    slim && isSelected && "border-toggle-slim-border_pressed",
                    slim && isSelected && isHovered && "border-toggle-slim-border_pressed-hover",

                    classes.switch,
                )}
            />
        </div>
    );
};

const styles = {
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

interface ToggleProps extends AriaSwitchProps {
    /** Controls the toggle dimensions, the gap between it and the text, and the label and hint typography. */
    size?: "sm" | "md";
    /** Text rendered beside the toggle. It sits inside the switch's label element, so it also acts as the accessible name and flips the toggle when clicked. */
    label?: string;
    /** Supporting text rendered under the label. Clicks on it are stopped so reading the hint does not flip the toggle. */
    hint?: ReactNode;
    /** Renders the compact toggle variant, with a shorter track and a bordered knob that overlaps its edges. */
    slim?: boolean;
}

export const Toggle = ({ label, hint, className, size = "sm", slim, ...ariaSwitchProps }: ToggleProps) => {
    return (
        <AriaSwitch
            {...ariaSwitchProps}
            className={(state) =>
                cx(
                    "relative flex w-max items-start",
                    state.isDisabled && "cursor-not-allowed",
                    styles[size].root,
                    typeof className === "function" ? className(state) : className,
                )
            }
        >
            {({ isSelected, isDisabled, isFocusVisible, isHovered }) => (
                <>
                    <ToggleBase
                        slim={slim}
                        size={size}
                        isHovered={isHovered}
                        isDisabled={isDisabled}
                        isFocusVisible={isFocusVisible}
                        isSelected={isSelected}
                        className={slim ? "mt-0.5" : ""}
                    />

                    {(label || hint) && (
                        <div className={cx("flex flex-col", styles[size].textWrapper)}>
                            {label && <p className={cx("text-secondary select-none", styles[size].label)}>{label}</p>}
                            {hint && (
                                <span className={cx("text-tertiary", styles[size].hint)} onClick={(event) => event.stopPropagation()}>
                                    {hint}
                                </span>
                            )}
                        </div>
                    )}
                </>
            )}
        </AriaSwitch>
    );
};
