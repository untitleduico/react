"use client";

import { cx } from "@/utils/cx";
import { type AvatarBadgeSize, badgePositions, badgeSizes, useAvatarBadgeSize } from "./avatar-badge";

interface AvatarCompanyIconProps {
    /** The size of the avatar the icon belongs to. Inherited from the avatar when omitted. */
    size?: AvatarBadgeSize;
    src: string;
    alt?: string;
}

export const AvatarCompanyIcon = ({ src, alt, ...props }: AvatarCompanyIconProps) => {
    const size = useAvatarBadgeSize(props.size);

    return (
        <img
            src={src}
            alt={alt}
            className={cx("absolute rounded-full bg-brand-50 object-cover ring-[1.5px] ring-bg-primary", badgePositions.company, badgeSizes.company[size])}
        />
    );
};
