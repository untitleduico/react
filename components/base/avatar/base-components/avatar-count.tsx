"use client";

import { cx } from "@/utils/cx";
import { type AvatarBadgeSize, badgePositions, badgeSizes, useAvatarBadgeSize } from "./avatar-badge";

interface AvatarCountProps {
    /** The number shown in the badge. */
    count: number;
    /** The size of the avatar the count belongs to. Inherited from the avatar when omitted. */
    size?: AvatarBadgeSize;
    className?: string;
}

export const AvatarCount = ({ count, className, ...props }: AvatarCountProps) => {
    const size = useAvatarBadgeSize(props.size);

    return (
        <div className={cx("absolute p-px", badgePositions.count[size], className)}>
            <div className={cx("flex items-center justify-center rounded-full bg-fg-error-primary text-center font-bold text-white", badgeSizes.count[size])}>
                {count}
            </div>
        </div>
    );
};
