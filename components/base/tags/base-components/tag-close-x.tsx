"use client";

import type { RefAttributes } from "react";
import { XClose } from "@untitledui/icons";
import { Button as AriaButton, type ButtonProps as AriaButtonProps } from "react-aria-components";
import { cx } from "@/utils/cx";

interface TagCloseXProps extends AriaButtonProps, RefAttributes<HTMLButtonElement> {
    size?: "sm" | "md" | "lg";
    className?: string;
}

const styles = {
    sm: { root: "p-0.5", icon: "size-2.5 stroke-[3.6px]" },
    md: { root: "p-0.5", icon: "size-3 stroke-[2.86px]" },
    lg: { root: "p-0.75", icon: "size-3.5 stroke-3" },
};

export const TagCloseX = ({ size = "md", className, ...otherProps }: TagCloseXProps) => {
    return (
        <AriaButton
            slot="remove"
            aria-label="Remove this tag"
            className={cx(
                "flex cursor-pointer rounded-[3px] text-fg-quaternary outline-transparent transition duration-100 ease-linear hover:bg-primary_hover hover:text-fg-quaternary_hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring disabled:cursor-not-allowed",
                styles[size].root,
                className,
            )}
            {...otherProps}
        >
            <XClose className={cx("transition-inherit-all", styles[size].icon)} />
        </AriaButton>
    );
};
