"use client";

import type { FC, ReactElement, ReactNode } from "react";
import React, { isValidElement } from "react";
import type { ButtonProps as AriaButtonProps, LinkProps as AriaLinkProps } from "react-aria-components";
import { Button as AriaButton, Link as AriaLink } from "react-aria-components";
import { cx, sortCx } from "@/utils/cx";
import { isReactComponent } from "@/utils/is-react-component";

export const styles = sortCx({
    common: {
        root: [
            "group relative inline-flex h-max cursor-pointer items-center justify-center whitespace-nowrap outline-brand transition duration-100 ease-linear before:absolute focus-visible:outline-2 focus-visible:outline-offset-2",
            // When button is used within `InputGroup`
            "in-data-input-wrapper:shadow-xs in-data-input-wrapper:focus:!z-50 in-data-input-wrapper:in-data-leading:-mr-px in-data-input-wrapper:in-data-leading:rounded-r-none in-data-input-wrapper:in-data-leading:before:rounded-r-none in-data-input-wrapper:in-data-trailing:-ml-px in-data-input-wrapper:in-data-trailing:rounded-l-none in-data-input-wrapper:in-data-trailing:before:rounded-l-none",
            // Disabled styles
            "disabled:cursor-not-allowed disabled:opacity-50 in-data-input-wrapper:disabled:opacity-100",
            // Same as `icon` but for SSR icons that cannot be passed to the client as functions.
            // STROKE PROTOTYPE (Button-only): trialing 1.5px default icon stroke (was 2). Remove `*:data-icon:stroke-[1.5px]` to revert.
            "*:data-icon:pointer-events-none *:data-icon:size-5 *:data-icon:shrink-0 *:data-icon:stroke-[1.5px] *:data-icon:transition-inherit-all",
        ].join(" "),
        icon: "pointer-events-none size-5 shrink-0 transition-inherit-all",
    },
    sizes: {
        sm: {
            root: [
                "gap-1 rounded-full px-3 py-2 text-xs font-medium before:rounded-full data-icon-only:p-2",
                "in-data-input-wrapper:px-3.5 in-data-input-wrapper:py-2.5 in-data-input-wrapper:data-icon-only:p-2.5",
                // STROKE PROTOTYPE: was `*:data-icon:stroke-[2.25px]` — dropped so sm inherits the 1.5px default. Restore for the compensated small-icon weight.
                "*:data-icon:size-4",
            ].join(" "),
            linkRoot: "gap-1 *:data-text:underline-offset-3",
        },
        md: {
            root: [
                "gap-1 rounded-full px-3.5 py-2.5 text-sm font-medium before:rounded-full data-icon-only:p-2.5",
                "in-data-input-wrapper:gap-1.5 in-data-input-wrapper:px-4 in-data-input-wrapper:text-md in-data-input-wrapper:data-icon-only:p-3",
            ].join(" "),
            linkRoot: "gap-1 *:data-text:underline-offset-4",
        },
        lg: {
            root: "gap-1.5 rounded-full px-4 py-2.5 text-md font-medium before:rounded-full data-icon-only:p-3",
            linkRoot: "gap-1.5 *:data-text:underline-offset-4",
        },
        xl: {
            root: "gap-1.5 rounded-full px-4.5 py-3 text-md font-medium before:rounded-full data-icon-only:p-3.5",
            linkRoot: "gap-1.5 *:data-text:underline-offset-4",
        },
    },

    colors: {
        primary: {
            root: [
                "bg-brand-solid text-white hover:bg-brand-solid_hover data-loading:bg-brand-solid_hover",
                // Icon styles
                "*:data-icon:text-white hover:*:data-icon:text-white",
            ].join(" "),
        },
        secondary: {
            root: [
                "bg-primary text-secondary ring-1 ring-primary ring-inset hover:bg-primary_hover hover:text-secondary_hover data-loading:bg-primary_hover",
                // Icon styles
                "*:data-icon:text-fg-quaternary hover:*:data-icon:text-fg-quaternary_hover",
            ].join(" "),
        },
        tertiary: {
            root: [
                "text-tertiary hover:bg-primary_hover hover:text-tertiary_hover data-loading:bg-primary_hover",
                // Icon styles
                "*:data-icon:text-fg-quaternary hover:*:data-icon:text-fg-quaternary_hover",
            ].join(" "),
        },
        "link-color": {
            root: [
                "justify-normal rounded p-0! text-brand-secondary hover:text-brand-secondary_hover",
                // Inner text underline
                "*:data-text:underline *:data-text:decoration-transparent hover:*:data-text:decoration-fg-brand-secondary_alt",
                // Icon styles
                "*:data-icon:text-fg-brand-secondary_alt hover:*:data-icon:text-fg-brand-secondary_hover",
            ].join(" "),
        },
        "link-gray": {
            root: [
                "justify-normal rounded p-0! text-tertiary hover:text-tertiary_hover",
                // Inner text underline
                "*:data-text:underline *:data-text:decoration-transparent hover:*:data-text:decoration-fg-quaternary",
                // Icon styles
                "*:data-icon:text-fg-quaternary hover:*:data-icon:text-fg-quaternary_hover",
            ].join(" "),
        },
        "primary-destructive": {
            root: [
                "bg-error-solid text-white outline-error hover:bg-error-solid_hover data-loading:bg-error-solid_hover",
                // Icon styles
                "*:data-icon:text-white hover:*:data-icon:text-white",
            ].join(" "),
        },
        "secondary-destructive": {
            root: [
                "bg-primary text-error-primary ring-1 ring-error_subtle outline-error ring-inset hover:bg-error-primary hover:text-error-primary_hover data-loading:bg-error-primary",
                // Icon styles
                "*:data-icon:text-fg-error-secondary hover:*:data-icon:text-fg-error-primary",
            ].join(" "),
        },
        "tertiary-destructive": {
            root: [
                "text-error-primary outline-error hover:bg-error-primary hover:text-error-primary_hover data-loading:bg-error-primary",
                // Icon styles
                "*:data-icon:text-fg-error-secondary hover:*:data-icon:text-fg-error-primary",
            ].join(" "),
        },
        "link-destructive": {
            root: [
                "justify-normal rounded p-0! text-error-primary outline-error hover:text-error-primary_hover",
                // Inner text underline
                "*:data-text:underline *:data-text:decoration-transparent *:data-text:underline-offset-2 hover:*:data-text:decoration-current",
                // Icon styles
                "*:data-icon:text-fg-error-secondary hover:*:data-icon:text-fg-error-primary",
            ].join(" "),
        },
    },
});

/**
 * Common props shared between button and anchor variants
 */
export interface CommonProps {
    /** Disables the button and shows a disabled state */
    isDisabled?: boolean;
    /** Shows a loading spinner and disables the button */
    isLoading?: boolean;
    /** The size variant of the button */
    size?: keyof typeof styles.sizes;
    /** The color variant of the button */
    color?: keyof typeof styles.colors;
    /** Icon component or element to show before the text */
    iconLeading?: FC<{ className?: string }> | ReactNode;
    /** Icon component or element to show after the text */
    iconTrailing?: FC<{ className?: string }> | ReactNode;
    /** Removes horizontal padding from the text content */
    noTextPadding?: boolean;
    /** When true, keeps the text visible during loading state */
    showTextWhileLoading?: boolean;

    children?: ReactNode;
    className?: string;
}

/**
 * Props for the button variant (non-link)
 */
export interface ButtonProps extends CommonProps, Omit<AriaButtonProps, "children" | "className"> {}
/**
 * Props for the link variant (anchor tag)
 */
interface LinkProps extends CommonProps, Omit<AriaLinkProps, "children" | "className"> {
    href: NonNullable<AriaLinkProps["href"]>;
}

/** Union type of button and link props */
export type Props = ButtonProps | LinkProps;

export const Button: {
    (props: LinkProps): ReactElement<LinkProps>;
    (props: ButtonProps): ReactElement<ButtonProps>;
} = ({
    size = "sm",
    color = "primary",
    children,
    className,
    noTextPadding,
    iconLeading: IconLeading,
    iconTrailing: IconTrailing,
    isDisabled: disabled,
    isLoading: loading,
    showTextWhileLoading,
    ...props
}) => {
    const href = "href" in props ? props.href : undefined;

    const isIcon = (IconLeading || IconTrailing) && !children;
    const isLinkType = ["link-gray", "link-color", "link-destructive"].includes(color);

    noTextPadding = isLinkType || noTextPadding;

    const commonChildren = (
        <>
            {/* Leading icon */}
            {isValidElement(IconLeading) && IconLeading}
            {isReactComponent(IconLeading) && <IconLeading data-icon="leading" className={styles.common.icon} />}

            {loading && (
                <svg
                    fill="none"
                    data-icon="loading"
                    viewBox="0 0 20 20"
                    className={cx(styles.common.icon, !showTextWhileLoading && "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2")}
                >
                    {/* Background circle */}
                    <circle className="stroke-current opacity-30" cx="10" cy="10" r="8" fill="none" strokeWidth="2" />
                    {/* Spinning circle */}
                    <circle
                        className="origin-center animate-spin stroke-current"
                        cx="10"
                        cy="10"
                        r="8"
                        fill="none"
                        strokeWidth="2"
                        strokeDasharray="12.5 50"
                        strokeLinecap="round"
                    />
                </svg>
            )}

            {children && (
                <span data-text className={cx("transition-inherit-all", !noTextPadding && "px-0.5")}>
                    {children}
                </span>
            )}

            {/* Trailing icon */}
            {isValidElement(IconTrailing) && IconTrailing}
            {isReactComponent(IconTrailing) && <IconTrailing data-icon="trailing" className={styles.common.icon} />}
        </>
    );

    const commonProps = {
        "data-loading": loading ? true : undefined,
        "data-icon-only": isIcon ? true : undefined,
        ...props,
        isDisabled: disabled,
        className: cx(
            styles.common.root,
            styles.sizes[size].root,
            styles.colors[color].root,
            isLinkType && styles.sizes[size].linkRoot,
            (loading || (href && (disabled || loading))) && "pointer-events-none",
            // If in `loading` state, hide everything except the loading icon (and text if `showTextWhileLoading` is true).
            loading && (showTextWhileLoading ? "[&>*:not([data-icon=loading]):not([data-text])]:hidden" : "[&>*:not([data-icon=loading])]:invisible"),
            className,
        ),
        children: commonChildren,
    };

    if ("href" in commonProps) {
        return <AriaLink {...commonProps} href={disabled ? undefined : href} />;
    }

    return <AriaButton {...commonProps} type={commonProps.type || "button"} isPending={loading} />;
};
