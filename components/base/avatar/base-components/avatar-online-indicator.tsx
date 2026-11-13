"use client";

import { cx } from "@/utils/cx";
import { type AvatarBadgeSize, badgePositions, badgeSizes, useAvatarBadgeSize } from "./avatar-badge";

interface AvatarOnlineIndicatorProps {
    /** The size of the avatar the indicator belongs to. Inherited from the avatar when omitted. */
    size?: AvatarBadgeSize;
    status: "online" | "offline";
    className?: string;
}

export const AvatarOnlineIndicator = ({ status, className, ...props }: AvatarOnlineIndicatorProps) => {
    const size = useAvatarBadgeSize(props.size);

    return (
        <span
            className={cx(
                "absolute flex justify-center rounded-full ring-[1.5px] ring-bg-primary",
                badgePositions.online,
                status === "online" ? "bg-fg-success-secondary" : "bg-utility-neutral-300",
                badgeSizes.online[size],
                className,
            )}
            style={{
                backgroundImage:
                    "radial-gradient(43.75% 43.75% at 50% 28.75%, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.00) 100%), radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.00) 74.66%, rgba(255, 255, 255, 0.18) 100%), radial-gradient(75% 75% at 50% 0%, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.00) 50%, rgba(255, 255, 255, 0.08) 99%, rgba(255, 255, 255, 0.00) 100%)",
            }}
        >
            {/* Reflection */}
            <svg viewBox="0 0 7.2 2.85" fill="none" className="mt-[10%] h-[20%] w-[60%]">
                <path
                    d="M7.2 1.83107C7.2 2.84235 5.58823 2.19729 3.6 2.19729C1.61177 2.19729 0 2.84235 0 1.83107C0 0.8198 1.61177 0 3.6 0C5.58823 0 7.2 0.8198 7.2 1.83107Z"
                    fill="url(#reflection-gradient)"
                    fillOpacity="0.4"
                />
                <defs>
                    <linearGradient id="reflection-gradient" x1="3.6" y1="0" x2="3.6" y2="2.4" gradientUnits="userSpaceOnUse">
                        <stop stopColor="white" />
                        <stop offset="1" stopColor="white" stopOpacity="0.1" />
                    </linearGradient>
                </defs>
            </svg>
        </span>
    );
};
