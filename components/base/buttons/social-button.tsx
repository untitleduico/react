"use client";

import type { ReactElement, ReactNode, RefAttributes } from "react";
import type { ButtonProps as AriaButtonProps, LinkProps as AriaLinkProps } from "react-aria-components";
import { Button as AriaButton, Link as AriaLink } from "react-aria-components";
import { cx, sortCx } from "@/utils/cx";
import { AppleLogo, DribbleLogo, FacebookLogo, FigmaLogo, FigmaLogoOutlined, GoogleLogo, TwitterLogo } from "./social-logos";

export const styles = sortCx({
    common: {
        root: "group disabled:stroke-fg-disabled disabled:text-fg-disabled disabled:*:text-fg-disabled relative inline-flex h-max cursor-pointer items-center justify-center font-semibold whitespace-nowrap outline-focus-ring transition duration-100 ease-linear before:absolute focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed",
        icon: "pointer-events-none shrink-0 transition-inherit-all",
    },

    sizes: {
        md: {
            root: "gap-2 rounded-lg px-3.5 py-2.5 text-sm before:rounded-[7px] data-icon-only:p-3",
            icon: "size-4",
        },
        lg: {
            root: "gap-2.5 rounded-lg px-4 py-2.5 text-md before:rounded-[7px] data-icon-only:p-3",
            icon: "size-5",
        },
    },

    colors: {
        gray: {
            root: "bg-primary text-secondary shadow-xs-skeuomorphic ring-1 ring-primary ring-inset hover:bg-primary_hover hover:text-secondary_hover",
            icon: "text-fg-quaternary group-hover:text-fg-quaternary_hover",
        },
        black: {
            root: "bg-black text-white shadow-xs-skeuomorphic ring-1 ring-transparent ring-inset before:absolute before:inset-px before:border before:border-white/12 before:mask-b-from-0%",
            icon: "",
        },

        facebook: {
            root: "bg-[#1877F2] text-white shadow-xs-skeuomorphic ring-1 ring-transparent ring-inset before:absolute before:inset-px before:border before:border-white/12 before:mask-b-from-0% hover:bg-[#0C63D4]",
            icon: "",
        },

        dribble: {
            root: "bg-[#EA4C89] text-white shadow-xs-skeuomorphic ring-1 ring-transparent ring-inset before:absolute before:inset-px before:border before:border-white/12 before:mask-b-from-0% hover:bg-[#E62872]",
            icon: "",
        },
    },
});

interface CommonProps {
    social: "google" | "facebook" | "apple" | "twitter" | "figma" | "dribble";
    /** Disables the button and shows a disabled state */
    isDisabled?: boolean;
    /**
     * Disables the button and shows a disabled state.
     * @deprecated Use `isDisabled` instead, for consistency with `Button` and React Aria.
     */
    disabled?: boolean;
    theme?: "brand" | "color" | "gray";
    size?: keyof typeof styles.sizes;

    children?: ReactNode;
    className?: string;
}

interface ButtonProps extends CommonProps, Omit<AriaButtonProps, "children" | "className">, RefAttributes<HTMLButtonElement> {}

interface LinkProps extends CommonProps, Omit<AriaLinkProps, "children" | "className">, RefAttributes<HTMLAnchorElement> {
    /** The link target. Required as a key to select the link variant, but may be `undefined` (e.g. a disabled nav button). */
    href: AriaLinkProps["href"];
}

export type SocialButtonProps = ButtonProps | LinkProps;

export const SocialButton: {
    (props: LinkProps): ReactElement<LinkProps>;
    (props: ButtonProps): ReactElement<ButtonProps>;
} = ({ size = "lg", theme = "brand", social, className, children, isDisabled, disabled, ...props }) => {
    // `disabled` is the deprecated alias of `isDisabled`.
    const isButtonDisabled = isDisabled ?? disabled;

    const isIconOnly = !children;

    const socialToColor = {
        google: "gray",
        facebook: "facebook",
        apple: "black",
        twitter: "black",
        figma: "black",
        dribble: "dribble",
    } as const;

    const colorStyles = theme === "brand" ? styles.colors[socialToColor[social]] : styles.colors.gray;

    const logos = {
        google: GoogleLogo,
        facebook: FacebookLogo,
        apple: AppleLogo,
        twitter: TwitterLogo,
        figma: theme === "gray" ? FigmaLogoOutlined : FigmaLogo,
        dribble: DribbleLogo,
    };

    const Logo = logos[social];

    const commonChildren = (
        <>
            <Logo
                className={cx(
                    styles.common.icon,
                    styles.sizes[size].icon,
                    theme === "gray"
                        ? colorStyles.icon
                        : theme === "brand" && (social === "facebook" || social === "apple" || social === "twitter")
                          ? "text-white"
                          : theme === "color" && (social === "apple" || social === "twitter")
                            ? "text-alpha-black"
                            : "",
                )}
                colorful={
                    (theme === "brand" && (social === "google" || social === "figma")) ||
                    (theme === "color" && (social === "google" || social === "facebook" || social === "figma" || social === "dribble")) ||
                    undefined
                }
            />

            {children}
        </>
    );

    const commonProps = {
        "data-icon-only": isIconOnly ? true : undefined,
        ...props,
        isDisabled: isButtonDisabled,
        className: cx(styles.common.root, styles.sizes[size].root, colorStyles.root, className),
        children: commonChildren,
    };

    if ("href" in commonProps) {
        const { href: linkHref, ...rest } = commonProps;

        // An explicitly `undefined` href renders a real <button> rather than React Aria's
        // link fallback <span>.
        return linkHref ? (
            <AriaLink {...commonProps} href={isButtonDisabled ? undefined : linkHref} />
        ) : (
            <AriaButton {...(rest as AriaButtonProps)} type="button" />
        );
    }

    return <AriaButton {...commonProps} type={commonProps.type || "button"} />;
};
