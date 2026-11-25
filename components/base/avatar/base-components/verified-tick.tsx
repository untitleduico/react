"use client";

import { useId } from "react";
import { cx } from "@/utils/cx";
import { type AvatarBadgeSize, badgeSizes, useAvatarBadgeSize } from "./avatar-badge";

interface VerifiedTickProps {
    /** The size of the avatar the tick belongs to. Inherited from the avatar when omitted. */
    size?: AvatarBadgeSize;
    /**
     * The style of the tick: the blue `default` badge or the `gold` badge.
     * @default "default"
     */
    variant?: "default" | "gold";
    className?: string;
}

export const VerifiedTick = ({ variant = "default", className, ...props }: VerifiedTickProps) => {
    const size = useAvatarBadgeSize(props.size);

    if (variant === "gold") {
        return <GoldTick className={cx("z-10", badgeSizes.verified[size], className)} />;
    }

    return (
        <svg className={cx("z-10 text-utility-blue-500", badgeSizes.verified[size], className)} viewBox="0 0 10 10" fill="none">
            <path
                d="M7.72237 1.77098C7.81734 2.00068 7.99965 2.18326 8.2292 2.27858L9.03413 2.61199C9.26384 2.70714 9.44635 2.88965 9.5415 3.11936C9.63665 3.34908 9.63665 3.60718 9.5415 3.83689L9.20833 4.64125C9.11313 4.87106 9.113 5.12943 9.20863 5.35913L9.54122 6.16325C9.58839 6.27702 9.61268 6.39897 9.6127 6.52214C9.61272 6.6453 9.58847 6.76726 9.54134 6.88105C9.4942 6.99484 9.42511 7.09823 9.33801 7.18531C9.2509 7.27238 9.14749 7.34144 9.03369 7.38854L8.22934 7.72171C7.99964 7.81669 7.81706 7.99899 7.72174 8.22855L7.38833 9.03348C7.29318 9.26319 7.11067 9.4457 6.88096 9.54085C6.65124 9.636 6.39314 9.636 6.16343 9.54085L5.35907 9.20767C5.12935 9.11276 4.87134 9.11295 4.64177 9.20821L3.83684 9.54115C3.60725 9.63608 3.34937 9.636 3.11984 9.54092C2.89032 9.44585 2.70791 9.26356 2.6127 9.03409L2.27918 8.22892C2.18421 7.99923 2.0019 7.81665 1.77235 7.72133L0.967421 7.38792C0.737807 7.29281 0.555355 7.11041 0.460169 6.88083C0.364983 6.65125 0.364854 6.39327 0.45981 6.16359L0.792984 5.35924C0.8879 5.12952 0.887707 4.87151 0.792445 4.64193L0.459749 3.83642C0.41258 3.72265 0.388291 3.60069 0.388272 3.47753C0.388252 3.35436 0.412501 3.2324 0.459634 3.11861C0.506767 3.00482 0.57586 2.90144 0.662965 2.81436C0.75007 2.72728 0.853479 2.65822 0.967283 2.61113L1.77164 2.27795C2.00113 2.18306 2.1836 2.00099 2.27899 1.7717L2.6124 0.966768C2.70755 0.737054 2.89006 0.554547 3.11978 0.459397C3.34949 0.364246 3.60759 0.364246 3.83731 0.459397L4.64166 0.792571C4.87138 0.887487 5.12939 0.887293 5.35897 0.792031L6.16424 0.459913C6.39392 0.364816 6.65197 0.364836 6.88164 0.459968C7.11131 0.555099 7.29379 0.737554 7.38895 0.967208L7.72247 1.77238L7.72237 1.77098Z"
                className="fill-current"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.95829 3.68932C7.02509 3.58439 7.04747 3.45723 7.02051 3.3358C6.99356 3.21437 6.91946 3.10862 6.81454 3.04182C6.70961 2.97502 6.58245 2.95264 6.46102 2.97959C6.33959 3.00655 6.23384 3.08064 6.16704 3.18557L4.33141 6.06995L3.49141 5.01995C3.41375 4.92281 3.30069 4.8605 3.17709 4.84673C3.05349 4.83296 2.92949 4.86885 2.83235 4.94651C2.73522 5.02417 2.67291 5.13723 2.65914 5.26083C2.64536 5.38443 2.68125 5.50843 2.75891 5.60557L4.00891 7.16807C4.0555 7.22638 4.11533 7.27271 4.18344 7.30323C4.25154 7.33375 4.32595 7.34757 4.40047 7.34353C4.47499 7.3395 4.54747 7.31773 4.61188 7.28004C4.67629 7.24234 4.73077 7.18981 4.77079 7.12682L6.95829 3.68932Z"
                fill="white"
            />
        </svg>
    );
};

const GOLD_SHAPE =
    "M8 0L9.97771 1.91324L12.7023 1.52786L13.1777 4.23817L15.6085 5.52786L14.4 8L15.6085 10.4721L13.1777 11.7618L12.7023 14.4721L9.97771 14.0868L8 16L6.02229 14.0868L3.29772 14.4721L2.82229 11.7618L0.391548 10.4721L1.6 8L0.391548 5.52786L2.82229 4.23817L3.29772 1.52786L6.02229 1.91324L8 0Z";

const GoldTick = ({ className }: { className?: string }) => {
    // Gradient and mask ids must be unique per instance so several ticks on one page don't clash
    const id = useId().replace(/:/g, "");

    return (
        <svg className={className} viewBox="0 0 16 16" fill="none">
            <defs>
                <linearGradient id={`${id}-fill`} x1="2.94838" y1="1.52635" x2="12.1453" y2="15.3539" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FDE047" />
                    <stop offset="0.406" stopColor="#EAB308" />
                    <stop offset="0.989" stopColor="#FACC15" />
                </linearGradient>
                <linearGradient id={`${id}-stroke`} x1="2.1038" y1="0.761702" x2="13.5424" y2="17.4873" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FACC15" />
                    <stop offset="0.5" stopColor="#CA8A04" />
                    <stop offset="1" stopColor="#FACC15" />
                </linearGradient>
                <mask id={`${id}-mask`} fill="white">
                    <path d={GOLD_SHAPE} />
                </mask>
            </defs>
            <path d={GOLD_SHAPE} fill={`url(#${id}-fill)`} />
            <path d={GOLD_SHAPE} strokeWidth="1.5" stroke={`url(#${id}-stroke)`} mask={`url(#${id}-mask)`} />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.00263 8.02991L7.01053 11.0369L11.9667 5.62465L12 5.5957L11.9956 6.82202L7.01053 12.2659L4.00263 9.25798L4 8.02553L4.00439 8.02816L4.00263 8.02991Z"
                fill="#CA8A04"
            />
            <path d="M11.9948 5.59306L7.01102 11.0367L4.00415 8.02984L5.13679 6.88872L6.95448 8.70641L10.8141 4.5L11.9948 5.59306Z" fill="white" />
        </svg>
    );
};
