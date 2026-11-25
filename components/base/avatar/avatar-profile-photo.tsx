"use client";

import { useState } from "react";
import { User01 } from "@untitledui/icons";
import { cx } from "@/utils/cx";
import { type AvatarProps } from "./avatar";
import { AvatarBadgeSizeContext, AvatarOnlineIndicator, VerifiedTick, badgePositions } from "./base-components";

const styles = {
    sm: {
        root: "size-18 p-0.75",
        rootWithPlaceholder: "p-1",
        content: "shadow-lg outline-[0.5px] -outline-offset-[0.5px] before:border",
        icon: "size-9",
        initials: "text-display-sm font-semibold",
        squareRoot: "rounded-2xl",
        squareContent: "rounded-[13px]",
        squareTick: "size-6 -right-0.5 -bottom-0.5",
    },
    md: {
        root: "size-24 p-1",
        rootWithPlaceholder: "p-1.25",
        content: "shadow-xl outline-[0.75px] -outline-offset-[0.75px] before:border-[1.5px]",
        icon: "size-12",
        initials: "text-display-md font-semibold",
        squareRoot: "rounded-[20px]",
        squareContent: "rounded-2xl",
        squareTick: "size-7 -right-0.5 -bottom-0.5",
    },
    lg: {
        root: "size-40 p-1.5",
        rootWithPlaceholder: "p-1.75",
        content: "shadow-2xl outline-[0.75px] -outline-offset-[0.75px] before:border-[1.5px]",
        icon: "size-20",
        initials: "text-display-xl font-semibold",
        squareRoot: "rounded-[32px]",
        squareContent: "rounded-[26px]",
        squareTick: "size-10 -right-0.5 -bottom-0.5",
    },
};

const badgeSizeMap = {
    sm: "2xl",
    md: "3xl",
    lg: "4xl",
} as const;

interface AvatarProfilePhotoProps extends AvatarProps {
    /** The dimensions of the photo, which also scale the surrounding ring, initials and status indicator. */
    size: "sm" | "md" | "lg";
    /**
     * Whether the photo is a circle. Set to `false` for a rounded square.
     * @default true
     */
    rounded?: boolean;
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
    rounded = true,
    className,
}: AvatarProfilePhotoProps) => {
    const [isFailed, setIsFailed] = useState(false);

    const contentShape = rounded ? "rounded-full" : styles[size].squareContent;

    const renderMainContent = () => {
        if (src && !isFailed) {
            return (
                <div
                    className={cx(
                        "relative size-full overflow-hidden outline-black/16 before:absolute before:inset-0 before:rounded-[inherit] before:border-white/32 before:mask-[linear-gradient(to_bottom,black_0%,transparent_25%,transparent_75%,black_100%)]",
                        styles[size].content,
                        contentShape,
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
                        "flex size-full items-center justify-center bg-tertiary ring-1 ring-secondary outline-transparent before:hidden",
                        styles[size].content,
                        contentShape,
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
                        "flex size-full items-center justify-center bg-tertiary ring-1 ring-secondary outline-transparent before:hidden",
                        styles[size].content,
                        contentShape,
                    )}
                >
                    <PlaceholderIcon className={cx("text-fg-quaternary", styles[size].icon)} />
                </div>
            );
        }

        return (
            <div
                className={cx(
                    "flex size-full items-center justify-center bg-tertiary ring-1 ring-secondary outline-transparent before:hidden",
                    styles[size].content,
                    contentShape,
                )}
            >
                {placeholder || <User01 className={cx("text-fg-quaternary", styles[size].icon)} />}
            </div>
        );
    };

    const renderBadgeContent = () => {
        if (status) {
            return <AvatarOnlineIndicator status={status} className={badgePositions.profilePhoto[size]} />;
        }

        if (verified) {
            return (
                <VerifiedTick
                    variant={verified === "gold" ? "gold" : "default"}
                    className={cx("absolute", rounded ? badgePositions.profilePhoto[size] : styles[size].squareTick)}
                />
            );
        }

        return badge;
    };

    return (
        <div
            className={cx(
                "relative flex shrink-0 items-center justify-center bg-primary ring-1 ring-secondary",
                rounded ? "rounded-full" : styles[size].squareRoot,
                styles[size].root,
                (!src || isFailed) && styles[size].rootWithPlaceholder,
                className,
            )}
        >
            {renderMainContent()}
            <AvatarBadgeSizeContext.Provider value={badgeSizeMap[size]}>{renderBadgeContent()}</AvatarBadgeSizeContext.Provider>
        </div>
    );
};
