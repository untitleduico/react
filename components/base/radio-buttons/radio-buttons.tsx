"use client";

import { type ReactNode, type Ref, createContext, useContext } from "react";
import {
    Radio as AriaRadio,
    RadioGroup as AriaRadioGroup,
    type RadioGroupProps as AriaRadioGroupProps,
    type RadioProps as AriaRadioProps,
} from "react-aria-components";
import { cx } from "@/utils/cx";

export interface RadioGroupContextType {
    /** Size applied to every `RadioButton` inside the group through context, taking precedence over a `size` set on the individual radio. */
    size?: "sm" | "md";
}

const RadioGroupContext = createContext<RadioGroupContextType | null>(null);

export interface RadioButtonBaseProps {
    /** Controls the diameter of the circle and of the dot rendered inside it. */
    size?: "sm" | "md";
    /** Additional classes merged onto the circle element. */
    className?: string;
    /** Whether to draw the keyboard focus ring around the circle. Normally passed down by `RadioButton` from React Aria's render state rather than set by hand. */
    isFocusVisible?: boolean;
    /** Whether to render the checked appearance: brand-filled circle with the inner dot faded in. Normally passed down by `RadioButton` rather than set by hand. */
    isSelected?: boolean;
    /** Whether to render the dimmed, not-allowed appearance. Normally passed down by `RadioButton` rather than set by hand. */
    isDisabled?: boolean;
}

export const RadioButtonBase = ({ className, isFocusVisible, isSelected, isDisabled, size = "sm" }: RadioButtonBaseProps) => {
    return (
        <div
            className={cx(
                "flex size-4 shrink-0 cursor-pointer appearance-none items-center justify-center rounded-full bg-primary ring-1 ring-primary ring-inset",
                size === "md" && "size-5",
                isSelected && "bg-brand-solid ring-brand-solid",
                isDisabled && "cursor-not-allowed opacity-50",
                isDisabled && !isSelected && "bg-tertiary",
                isFocusVisible && "outline-2 outline-offset-2 outline-focus-ring",
                className,
            )}
        >
            <div className={cx("size-1.5 rounded-full bg-fg-white opacity-0 transition-inherit-all", size === "md" && "size-2", isSelected && "opacity-100")} />
        </div>
    );
};
RadioButtonBase.displayName = "RadioButtonBase";

interface RadioButtonProps extends AriaRadioProps {
    /** Controls the circle size, the gap between it and the text, and the label and hint typography. Ignored when a surrounding `RadioGroup` sets a size. */
    size?: "sm" | "md";
    /** Content rendered beside the circle. It sits inside the radio's label element, so it also acts as the accessible name and selects the radio when clicked. */
    label?: ReactNode;
    /** Supporting text rendered under the label. Clicks on it are stopped so reading the hint does not select the radio. */
    hint?: ReactNode;
    /** Ref to the underlying label element that wraps the circle and the text. */
    ref?: Ref<HTMLLabelElement>;
}

export const RadioButton = ({ label, hint, className, size = "sm", ...ariaRadioProps }: RadioButtonProps) => {
    const context = useContext(RadioGroupContext);

    size = context?.size ?? size;

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
        <AriaRadio
            {...ariaRadioProps}
            className={(state) =>
                cx(
                    "relative flex items-start",
                    state.isDisabled && "cursor-not-allowed",
                    sizes[size].root,
                    typeof className === "function" ? className(state) : className,
                )
            }
        >
            {({ isSelected, isDisabled, isFocusVisible }) => (
                <>
                    <RadioButtonBase
                        size={size}
                        isSelected={isSelected}
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
        </AriaRadio>
    );
};
RadioButton.displayName = "RadioButton";

interface RadioGroupProps extends RadioGroupContextType, AriaRadioGroupProps {
    /** The `RadioButton` elements belonging to the group, stacked in a vertical column. */
    children: ReactNode;
    /** Additional classes merged onto the group wrapper that lays the radios out. */
    className?: string;
}

export const RadioGroup = ({ children, className, size = "sm", ...props }: RadioGroupProps) => {
    return (
        <RadioGroupContext.Provider value={{ size }}>
            <AriaRadioGroup {...props} className={cx("flex flex-col gap-4", className)}>
                {children}
            </AriaRadioGroup>
        </RadioGroupContext.Provider>
    );
};
