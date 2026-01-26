"use client";

import { useState } from "react";
import { User01 } from "@untitledui/icons";
import { cx } from "@/utils/cx";
import { type AvatarProps } from "./avatar";
import { AvatarOnlineIndicator, VerifiedTick } from "./base-components";

const styles = {
    sm: {
        root: "size-18 p-0.75",
        rootWithPlaceholder: "p-1",
        content: "outline-[0.5px] -outline-offset-[0.5px] before:border",
        icon: "size-9",
        initials: "text-display-sm font-semibold",
        badge: "bottom-0.5 right-0.5",
    },
    md: {
        root: "size-24 p-1",
        rootWithPlaceholder: "p-1.25",
        content: "shadow-xl outline-[0.75px] -outline-offset-[0.75px] before:border-[1.5px]",
        icon: "size-12",
        initials: "text-display-md font-semibold",
        badge: "bottom-1 right-1",
    },
    lg: {
        root: "size-40 p-1.5",
        rootWithPlaceholder: "p-1.75",
        content: "shadow-2xl outline-[0.75px] -outline-offset-[0.75px] before:border-[1.5px]",
        icon: "size-20",
        initials: "text-display-xl font-semibold",
        badge: "bottom-2 right-2",
    },
};

const tickSizeMap = {
    sm: "2xl",
    md: "3xl",
    lg: "4xl",
} as const;

interface AvatarProfilePhotoProps extends AvatarProps {
    size: "sm" | "md" | "lg";
}

export const AvatarProfilePhoto = ({
    size = "md",
    src,
    alt,
    initials,
    placeholder,
    placeholderIcon: PlaceholderIcon,
    verified,
    badge,
    status,
    className,
}: AvatarProfilePhotoProps) => {
    const [isFailed, setIsFailed] = useState(false);

    const renderMainContent = () => {
        if (src && !isFailed) {
            return (
                <div
                    className={cx(
                        "relative size-full overflow-hidden rounded-full outline-black/16 before:absolute before:inset-[0.5px] before:rounded-full before:border-white/32 before:mask-[linear-gradient(to_bottom,black_0%,transparent_25%,transparent_75%,black_100%)]",
                        styles[size].content,
                    )}
                >
                    <img src={src} alt={alt} onError={() => setIsFailed(true)} className="size-full object-cover" />
                </div>
            );
        }

        if (initials) {
            return (
                <div
                    className={cx(
                        "flex size-full items-center justify-center rounded-full bg-tertiary ring-1 ring-secondary_alt outline-transparent before:hidden",
                        styles[size].content,
                    )}
                >
                    <span className={cx("text-quaternary", styles[size].initials)}>{initials}</span>
                </div>
            );
        }

        if (PlaceholderIcon) {
            return (
                <div
                    className={cx(
                        "flex size-full items-center justify-center rounded-full bg-tertiary ring-1 ring-secondary_alt outline-transparent before:hidden",
                        styles[size].content,
                    )}
                >
                    <PlaceholderIcon className={cx("text-fg-quaternary", styles[size].icon)} />
                </div>
            );
        }

        return (
            <div
                className={cx(
                    "flex size-full items-center justify-center rounded-full bg-tertiary ring-1 ring-secondary_alt outline-transparent before:hidden",
                    styles[size].content,
                )}
            >
                {placeholder || <User01 className={cx("text-fg-quaternary", styles[size].icon)} />}
            </div>
        );
    };

    const renderBadgeContent = () => {
        if (status) {
            return <AvatarOnlineIndicator status={status} size={tickSizeMap[size]} className={styles[size].badge} />;
        }

        if (verified) {
            return <VerifiedTick size={tickSizeMap[size]} className={cx("absolute", styles[size].badge)} />;
        }

        return badge;
    };

    return (
        <div
            className={cx(
                "relative flex shrink-0 items-center justify-center rounded-full bg-primary ring-1 ring-secondary_alt",
                styles[size].root,
                (!src || isFailed) && styles[size].rootWithPlaceholder,
                className,
            )}
        >
            {renderMainContent()}
            {renderBadgeContent()}
        </div>
    );
};
