"use client";

import { createContext, useContext } from "react";
import { sortCx } from "@/utils/cx";

/**
 * The sizes a badge comes in. `xs` to `2xl` match the `Avatar` sizes, while `AvatarProfilePhoto`
 * uses `2xl`, `3xl` and `4xl` for its `sm`, `md` and `lg` sizes.
 */
export type AvatarBadgeSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";

/** The badge size of the surrounding avatar, which lets a badge match its avatar without a `size` of its own. */
export const AvatarBadgeSizeContext = createContext<AvatarBadgeSize | null>(null);

/** Resolves the size of a badge from its own `size`, then the avatar it is rendered in, then `md`. */
export const useAvatarBadgeSize = (size?: AvatarBadgeSize): AvatarBadgeSize => {
    const avatarSize = useContext(AvatarBadgeSizeContext);

    return size ?? avatarSize ?? "md";
};

/**
 * The size of each badge for every avatar size.
 *
 * The badges are not meant to share one size. The online indicator is smaller than the other badges,
 * and the count never gets smaller than 14px so that it always fits a digit. There is no company icon
 * larger than `2xl`, so profile photos reuse that one.
 */
export const badgeSizes = sortCx({
    online: {
        xs: "size-1.5",
        sm: "size-2",
        md: "size-2.5",
        lg: "size-3",
        xl: "size-3.5",
        "2xl": "size-4",
        "3xl": "size-4.5",
        "4xl": "size-5",
    },
    verified: {
        xs: "size-2.5",
        sm: "size-3",
        md: "size-3.5",
        lg: "size-4",
        xl: "size-4.5",
        "2xl": "size-5",
        "3xl": "size-6",
        "4xl": "size-8",
    },
    company: {
        xs: "size-2",
        sm: "size-3",
        md: "size-3.5",
        lg: "size-4",
        xl: "size-4.5",
        "2xl": "size-5 ring-[1.67px]",
        "3xl": "size-5 ring-[1.67px]",
        "4xl": "size-5 ring-[1.67px]",
    },
    count: {
        xs: "h-3.5 min-w-3.5 px-[3px] text-[10px] leading-[13px]",
        sm: "h-3.5 min-w-3.5 px-[3px] text-[10px] leading-[13px]",
        md: "h-3.5 min-w-3.5 px-[3px] text-[10px] leading-[13px]",
        lg: "h-4 min-w-4 px-[3px] text-[11px] leading-[15px]",
        xl: "h-4.5 min-w-4.5 px-1 text-xs leading-[17px]",
        "2xl": "h-5 min-w-5 px-1 text-[13px] leading-[19px]",
        "3xl": "h-5 min-w-5 px-1 text-[13px] leading-[19px]",
        "4xl": "h-5 min-w-5 px-1 text-[13px] leading-[19px]",
    },
});

/**
 * Where each badge sits on its avatar.
 *
 * These offsets are intentional and differ between badges on purpose, so keep them as they are
 * when changing a badge. The count moves outwards on `xs` and `sm`, where it would otherwise sit
 * further inside the avatar than it does on the larger sizes.
 */
export const badgePositions = sortCx({
    online: "right-0 bottom-0",
    verified: "right-0 bottom-0",
    verifiedXs: "-right-px -bottom-px",
    count: {
        xs: "-right-0.75 -bottom-0.75",
        sm: "-right-px -bottom-px",
        md: "right-0 bottom-0",
        lg: "right-0 bottom-0",
        xl: "right-0 bottom-0",
        "2xl": "right-0 bottom-0",
        "3xl": "right-0 bottom-0",
        "4xl": "right-0 bottom-0",
    },
    company: "-right-0.5 -bottom-0.5",
    profilePhoto: {
        sm: "right-0.5 bottom-0.5",
        md: "right-1 bottom-1",
        lg: "right-2 bottom-2",
    },
});
