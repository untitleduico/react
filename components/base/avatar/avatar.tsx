"use client";

import { type FC, type ReactNode, useState } from "react";
import { User01 } from "@untitledui/icons";
import { cx } from "@/utils/cx";
import { AvatarOnlineIndicator, VerifiedTick } from "./base-components";
import { AvatarCount } from "./base-components/avatar-count";

export interface AvatarProps {
    size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
    className?: string;
    /**
     * The class name for the main child of the avatar.
     */
    contentClassName?: string;
    src?: string | null;
    alt?: string;
    /**
     * Display an inner contrast border around the avatar image.
     */
    contrastBorder?: boolean;
    /**
     * Whether the avatar should be rounded.
     * @default true
     */
    rounded?: boolean;
    /**
     * Display an outer border around the avatar.
     */
    border?: boolean;
    /**
     * Display a badge (i.e. company logo).
     */
    badge?: ReactNode;
    /**
     * Display a status indicator.
     */
    status?: "online" | "offline";
    /**
     * Display a verified tick icon.
     *
     * @default false
     */
    verified?: boolean;
    /**
     * Display a count badge.
     */
    count?: number;
    /**
     * The initials of the user to display if no image is available.
     */
    initials?: string;
    /**
     * An icon to display if no image is available.
     */
    placeholderIcon?: FC<{ className?: string }>;
    /**
     * A placeholder to display if no image is available.
     */
    placeholder?: ReactNode;

    /**
     * Whether the avatar should show a focus ring when the parent group is in focus.
     * For example, when the avatar is wrapped inside a link.
     *
     * @default false
     */
    focusable?: boolean;
}

const styles = {
    xs: { root: "size-6", rootWithBorder: "p-px", initials: "text-xs font-semibold", icon: "size-4" },
    sm: { root: "size-8", rootWithBorder: "p-px", initials: "text-sm font-semibold", icon: "size-5" },
    md: { root: "size-10", rootWithBorder: "p-px", initials: "text-md font-semibold", icon: "size-6" },
    lg: { root: "size-12", rootWithBorder: "p-[1.5px]", initials: "text-lg font-semibold", icon: "size-7" },
    xl: { root: "size-14", rootWithBorder: "p-0.5", initials: "text-xl font-semibold", icon: "size-8" },
    "2xl": { root: "size-16", rootWithBorder: "p-0.5", initials: "text-display-xs font-semibold", icon: "size-8" },
};

export const Avatar = ({
    size = "md",
    src,
    alt,
    initials,
    placeholder,
    placeholderIcon: PlaceholderIcon,
    border,
    badge,
    status,
    verified,
    count,
    focusable = false,
    rounded = true,
    className,
    contentClassName,
}: AvatarProps) => {
    const [isFailed, setIsFailed] = useState(false);

    const canShowImage = src && !isFailed;

    const renderMainContent = () => {
        if (canShowImage) {
            return <img data-avatar-img className="size-full object-cover" src={src} alt={alt} onError={() => setIsFailed(true)} />;
        }

        if (initials) {
            return <span className={cx("text-quaternary", styles[size].initials)}>{initials}</span>;
        }

        if (PlaceholderIcon) {
            return <PlaceholderIcon className={cx("text-fg-quaternary", styles[size].icon)} />;
        }

        return placeholder || <User01 className={cx("text-fg-quaternary", styles[size].icon)} />;
    };

    const renderBadgeContent = () => {
        if (status) {
            return <AvatarOnlineIndicator status={status} size={size} />;
        }

        if (verified) {
            return <VerifiedTick size={size} className={cx("absolute right-0 bottom-0", size === "xs" && "-right-px -bottom-px")} />;
        }

        if (count) {
            return <AvatarCount count={count} />;
        }

        return badge;
    };

    return (
        <div
            data-avatar
            className={cx(
                "relative inline-flex shrink-0 rounded-[7px]",
                rounded && "rounded-full",
                // Focus styles
                focusable && "outline-transparent group-focus-visible:outline-2 group-focus-visible:outline-offset-2 group-focus-visible:outline-focus-ring",
                border && "ring-1 ring-secondary_alt",
                border && styles[size].rootWithBorder,
                styles[size].root,
                className,
            )}
        >
            <div
                className={cx(
                    "relative inline-flex size-full shrink-0 items-center justify-center overflow-hidden rounded-md bg-tertiary outline-[0.5px] -outline-offset-[0.5px] outline-black/16 before:inset-[0.5px]",
                    rounded && "rounded-full",
                    canShowImage &&
                        size !== "xs" &&
                        "before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-white/32 before:mask-[linear-gradient(to_bottom,black_0%,transparent_25%,transparent_75%,black_100%)]",
                    contentClassName,
                )}
            >
                {renderMainContent()}
            </div>
            {renderBadgeContent()}
        </div>
    );
};
