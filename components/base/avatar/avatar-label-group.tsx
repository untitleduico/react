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
    /** The dimensions of the avatar, which also set the text size of the title and subtitle. */
    size: "sm" | "md" | "lg";
    /** Whether the avatar is a circle rather than a rounded square. */
    rounded?: boolean;
    /** The primary line of text shown next to the avatar, such as a person's name. */
    title: string | ReactNode;
    /** The secondary line of text shown below the title. Truncates when it overflows. */
    subtitle: string | ReactNode;
    /** The class name applied to the avatar, while `className` styles the whole group. */
    avatarClassName?: string;
}

export const AvatarLabelGroup = ({ title, subtitle, className, rounded, avatarClassName, ...props }: AvatarLabelGroupProps) => {
    return (
        <figure className={cx("group flex min-w-0 flex-1 items-center gap-2", className)}>
            <Avatar border rounded={rounded} className={avatarClassName} {...props} />
            <figcaption className="min-w-0 flex-1">
                <p className={cx("font-semibold text-primary", styles[props.size].title)}>{title}</p>
                <p className={cx("truncate text-tertiary", styles[props.size].subtitle)}>{subtitle}</p>
            </figcaption>
        </figure>
    );
};
