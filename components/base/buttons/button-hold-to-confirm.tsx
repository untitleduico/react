"use client";

import { type CSSProperties, useEffect, useRef, useState } from "react";
import { Button, type ButtonProps } from "@/components/base/buttons/button";
import { cx } from "@/utils/cx";

// The fill uses each color's hover background, and the regular hover background is turned off so only the fill shows progress
// Bordered variants inset the fill by 1px so it doesn't cover the ring
const holdStyles = {
    primary: "hover:bg-brand-solid after:inset-px after:bg-brand-solid_hover",
    secondary: "hover:bg-primary after:inset-px after:bg-primary_hover",
    tertiary: "hover:bg-primary_hover after:inset-0 after:bg-secondary_hover",
    "primary-destructive": "hover:bg-error-solid after:inset-px after:bg-error-solid_hover",
    "secondary-destructive": "hover:bg-primary after:inset-px after:bg-error-primary",
    "tertiary-destructive": "hover:bg-error-primary after:inset-0 after:bg-error-secondary",
};

export interface ButtonHoldToConfirmProps extends Omit<ButtonProps, "color" | "isLoading" | "showTextWhileLoading" | "onPress"> {
    /**
     * The color variant of the button. The hold fill uses the variant's hover color.
     * @default "primary"
     */
    color?: keyof typeof holdStyles;
    /**
     * How long the button must be held before `onConfirm` runs, in milliseconds.
     * @default 1500
     */
    holdDuration?: number;
    /** Called once the button has been held for the full `holdDuration`. Releasing earlier cancels it. */
    onConfirm: () => void;
}

/**
 * A button that confirms an action only after it is pressed and held, for destructive or irreversible actions.
 * Works with pointer, touch and keyboard (hold Space or Enter).
 */
export const ButtonHoldToConfirm = ({
    color = "primary",
    holdDuration = 1500,
    onConfirm,
    onPressStart,
    onPressEnd,
    className,
    style,
    ...props
}: ButtonHoldToConfirmProps) => {
    const [isHolding, setIsHolding] = useState(false);
    const timeout = useRef<ReturnType<typeof setTimeout>>(undefined);

    useEffect(() => () => clearTimeout(timeout.current), []);

    const holdStyle: CSSProperties & Record<"--hold-duration", string> = { "--hold-duration": `${holdDuration}ms` };

    return (
        <Button
            {...props}
            color={color}
            data-holding={isHolding || undefined}
            onPressStart={(event) => {
                onPressStart?.(event);
                setIsHolding(true);
                clearTimeout(timeout.current);
                timeout.current = setTimeout(onConfirm, holdDuration);
            }}
            onPressEnd={(event) => {
                onPressEnd?.(event);
                setIsHolding(false);
                clearTimeout(timeout.current);
            }}
            style={(renderProps) => ({ ...holdStyle, ...(typeof style === "function" ? style(renderProps) : style) })}
            className={cx(
                "isolate select-none",
                // Hold fill: grows from the left while held, rewinds quickly on release
                "after:pointer-events-none after:absolute after:-z-10 after:rounded-[inherit] after:transition-[clip-path] after:duration-200 after:ease-out after:[clip-path:inset(0_100%_0_0)]",
                "data-holding:after:duration-(--hold-duration) data-holding:after:ease-linear data-holding:after:[clip-path:inset(0)]",
                holdStyles[color],
                className,
            )}
        />
    );
};
