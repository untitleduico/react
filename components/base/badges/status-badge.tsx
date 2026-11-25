import type { ReactNode } from "react";
import { cx, sortCx } from "@/utils/cx";
import type { BadgeColors, Sizes } from "./badge-types";
import { filledColors } from "./badges";
import type { StatusIconName } from "./status-icons";
import { StatusIcon } from "./status-icons";

export type StatusBadgeType = "pill-color" | "modern";

export const styles = sortCx({
    common: {
        root: "flex size-max items-center rounded-full font-medium whitespace-nowrap ring-1 ring-inset",
    },
    types: {
        "pill-color": "",
        modern: "bg-primary text-secondary shadow-xs ring-primary",
    },
    sizes: {
        "pill-color": {
            sm: "gap-1 py-0.5 pr-2 pl-1.5 text-xs",
            md: "gap-1 py-0.5 pr-2.5 pl-2 text-sm",
            lg: "gap-1 py-1 pr-3 pl-2.5 text-sm",
        },
        modern: {
            sm: "gap-1 py-0.5 pr-2 pl-1.5 text-xs",
            md: "gap-1 py-0.5 pr-2 pl-1.5 text-sm",
            lg: "gap-1 py-1 pr-2.5 pl-2 text-sm",
        },
        iconOnly: {
            sm: "p-1.25",
            md: "p-1.5",
            lg: "p-2",
        },
    },
});

interface StatusBadgeProps {
    /**
     * The badge treatment: `pill-color` is tinted with the badge color, `modern` is a white pill with a border and a subtle shadow where only the icon is colored.
     * @default "pill-color"
     */
    type?: StatusBadgeType;
    /**
     * Controls the padding and font size of the badge.
     * @default "md"
     */
    size?: Sizes;
    /**
     * The color palette for the background, text and ring (`pill-color`) and for the status icon (both types).
     * @default "gray"
     */
    color?: BadgeColors;
    /**
     * The status icon shown before the label, or on its own when there is no label. Animated icons loop and stop when the user prefers reduced motion.
     * @default "progress-50"
     */
    icon?: StatusIconName;
    /** The status label. Leave it out for an icon-only badge, and give that badge an `aria-label`. */
    children?: ReactNode;
    /** The accessible name of an icon-only badge. */
    "aria-label"?: string;
    /** Additional CSS classes merged onto the badge element. */
    className?: string;
}

/** A badge with a status icon, used for LLM and task states such as thinking, generating or uploading. */
export const StatusBadge = ({ type = "pill-color", size = "md", color = "gray", icon = "progress-50", children, className, ...props }: StatusBadgeProps) => {
    const colors = filledColors[color];
    const isIconOnly = children === undefined || children === null || children === false;

    return (
        <span
            role={isIconOnly && props["aria-label"] ? "img" : undefined}
            aria-label={props["aria-label"]}
            className={cx(
                styles.common.root,
                type === "pill-color" ? colors.root : styles.types.modern,
                styles.sizes[isIconOnly ? "iconOnly" : type][size],
                className,
            )}
        >
            <StatusIcon name={icon} className={colors.addon} />
            {!isIconOnly && children}
        </span>
    );
};
