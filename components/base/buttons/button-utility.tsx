"use client";

import type { FC, ReactElement, ReactNode, RefAttributes } from "react";
import { isValidElement } from "react";
import type { Placement } from "react-aria";
import type { ButtonProps as AriaButtonProps, LinkProps as AriaLinkProps } from "react-aria-components";
import { Button as AriaButton, Link as AriaLink } from "react-aria-components";
import { Tooltip } from "@/components/base/tooltip/tooltip";
import { cx } from "@/utils/cx";
import { isReactComponent } from "@/utils/is-react-component";

export const styles = {
    secondary:
        "bg-primary text-fg-quaternary shadow-xs-skeuomorphic ring-1 ring-primary ring-inset hover:bg-primary_hover hover:text-fg-quaternary_hover disabled:shadow-xs",
    tertiary: "text-fg-quaternary hover:bg-primary_hover hover:text-fg-quaternary_hover",
};

/**
 * Common props shared between button and anchor variants
 */
export interface CommonProps {
    /** Disables the button and shows a disabled state */
    isDisabled?: boolean;
    /** The size variant of the button */
    size?: "xs" | "sm";
    /** The color variant of the button */
    color?: "secondary" | "tertiary";
    /** The icon to display in the button */
    icon?: FC<{ className?: string }> | ReactNode;
    /** The tooltip to display when hovering over the button */
    tooltip?: string;
    /** The placement of the tooltip */
    tooltipPlacement?: Placement;

    className?: string;
}

/**
 * Props for the button variant (non-link)
 */
export interface ButtonProps extends CommonProps, Omit<AriaButtonProps, "children" | "className">, RefAttributes<HTMLButtonElement> {}

/**
 * Props for the link variant (anchor tag)
 */
interface LinkProps extends CommonProps, Omit<AriaLinkProps, "children" | "className">, RefAttributes<HTMLAnchorElement> {
    /** The link target. Required as a key to select the link variant, but may be `undefined` (e.g. a disabled nav button). */
    href: AriaLinkProps["href"];
}

/** Union type of button and link props */
export type Props = ButtonProps | LinkProps;

export const ButtonUtility: {
    (props: LinkProps): ReactElement<LinkProps>;
    (props: ButtonProps): ReactElement<ButtonProps>;
} = ({ tooltip, className, isDisabled, icon: Icon, size = "sm", color = "secondary", tooltipPlacement = "top", ...props }) => {
    const commonProps = {
        "aria-label": tooltip,
        ...props,
        isDisabled,
        className: cx(
            "group relative inline-flex h-max cursor-pointer items-center justify-center rounded-md p-1.5 outline-focus-ring transition duration-100 ease-linear focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            styles[color],

            // Icon styles
            "*:data-icon:pointer-events-none *:data-icon:shrink-0 *:data-icon:text-current *:data-icon:transition-inherit-all",
            size === "xs" ? "*:data-icon:size-4" : "*:data-icon:size-5",

            className,
        ),
        children: (
            <>
                {isReactComponent(Icon) && <Icon data-icon />}
                {isValidElement(Icon) && Icon}
            </>
        ),
    };

    let content: ReactElement;

    if ("href" in commonProps) {
        const { href: linkHref, ...rest } = commonProps;

        // An explicitly `undefined` href (e.g. a disabled prev/next control) renders a
        // real <button> rather than React Aria's link fallback <span>.
        content = linkHref ? (
            <AriaLink {...commonProps} href={isDisabled ? undefined : linkHref} />
        ) : (
            <AriaButton {...(rest as AriaButtonProps)} type="button" />
        );
    } else {
        content = <AriaButton {...commonProps} type={commonProps.type || "button"} />;
    }

    if (tooltip) {
        return (
            <Tooltip title={tooltip} placement={tooltipPlacement} isDisabled={isDisabled} offset={size === "xs" ? 4 : 6}>
                {content}
            </Tooltip>
        );
    }

    return content;
};
