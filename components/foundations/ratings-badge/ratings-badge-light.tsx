"use client";

import type { HTMLAttributes } from "react";
import { RatingStars } from "@/components/foundations/rating-stars";
import { cx } from "@/utils/cx";
import { Wreath } from "./ratings-badge";

interface RatingsBadgeLightProps extends HTMLAttributes<HTMLDivElement> {
    title?: string;
    subtitle?: string;
    rating?: number;
}

export const RatingsBadgeLight = ({ title = "Best Design Tool", subtitle = "2,000+ reviews", rating, ...props }: RatingsBadgeLightProps) => {
    return (
        <div {...props} className={cx("flex items-center -space-x-0.5", props.className)}>
            <Wreath className="shrink-0 text-fg-white" />

            <div className="flex flex-col items-center gap-1">
                <RatingStars rating={rating} className="gap-0.5" starClassName="size-4" />

                <div className="text-center">
                    <p className="text-sm font-semibold text-primary_on-brand">{title}</p>
                    <p className="text-xs font-medium text-secondary_on-brand">{subtitle}</p>
                </div>
            </div>

            <Wreath className="shrink-0 -scale-x-100 text-fg-white" />
        </div>
    );
};
