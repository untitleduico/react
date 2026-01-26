"use client";

import { type ReactNode } from "react";
import { cx } from "@/utils/cx";
import { Avatar, type AvatarProps } from "./avatar";

const styles = {
    sm: { title: "text-sm ", subtitle: "text-xs" },
    md: { title: "text-sm ", subtitle: "text-sm" },
    lg: { title: "text-md ", subtitle: "text-md" },
};

interface AvatarLabelGroupProps extends AvatarProps {
    size: "sm" | "md" | "lg";
    title: string | ReactNode;
    subtitle: string | ReactNode;
}

export const AvatarLabelGroup = ({ title, subtitle, className, ...props }: AvatarLabelGroupProps) => {
    return (
        <figure className={cx("group flex min-w-0 flex-1 items-center gap-2", className)}>
            <Avatar border {...props} />
            <figcaption className="min-w-0 flex-1">
                <p className={cx("font-semibold text-primary", styles[props.size].title)}>{title}</p>
                <p className={cx("truncate text-tertiary", styles[props.size].subtitle)}>{subtitle}</p>
            </figcaption>
        </figure>
    );
};
