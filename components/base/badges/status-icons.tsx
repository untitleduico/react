import type { CSSProperties } from "react";
import { cx } from "@/utils/cx";
import type { AnimatedStatusIcon, StatusIconShape } from "./status-icon-animations";
import { animatedStatusIcons } from "./status-icon-animations";

/** Static status icons */

const RING = "M11 6C11 8.76142 8.76142 11 6 11C3.23858 11 1 8.76142 1 6C1 3.23858 3.23858 1 6 1C8.76142 1 11 3.23858 11 6Z";
const DASHED_RING =
    "M10.9763 5.50972C10.992 5.67103 11 5.83458 11 6C11 6.16542 10.992 6.32897 10.9763 6.49027M9.8652 2.82798C9.6573 2.57495 9.42505 2.3427 9.17202 2.1348M6.49027 1.02373C6.32897 1.00803 6.16542 1 6 1C5.83458 1 5.67103 1.00803 5.50972 1.02373M2.82798 2.1348C2.57495 2.3427 2.3427 2.57495 2.1348 2.82798M1.02373 5.50973C1.00803 5.67103 1 5.83458 1 6C1 6.16542 1.00803 6.32897 1.02373 6.49028M2.1348 9.17202C2.3427 9.42505 2.57495 9.6573 2.82798 9.8652M5.50973 10.9763C5.67103 10.992 5.83458 11 6 11C6.16542 11 6.32897 10.992 6.49028 10.9763M9.17202 9.8652C9.42505 9.6573 9.6573 9.42505 9.8652 9.17202";
const HALF_DASHED_RING =
    "M6 11C6.16542 11 6.32897 10.992 6.49027 10.9763M6 1C6.16542 1 6.32897 1.00803 6.49028 1.02373M9.17202 2.1348C9.42505 2.3427 9.6573 2.57495 9.8652 2.82798M10.9763 5.50973C10.992 5.67103 11 5.83458 11 6C11 6.16542 10.992 6.32897 10.9763 6.49028M9.8652 9.17202C9.6573 9.42505 9.42505 9.6573 9.17202 9.8652";
const LEFT_HALF_RING = "M6 11C3.23858 11 1 8.76142 1 6C1 3.23858 3.23858 1 6 1";
const CHECK = "M4.25 6.25L5.5 7.5L7.75 4.5";
const CROSS = "M7.25 4.75L4.75 7.25M4.75 4.75L7.25 7.25";

interface StaticPath {
    d: string;
    /** Draws a 30% filled area instead of a 1.5px stroke. */
    fill?: boolean;
    opacity?: number;
    strokeWidth?: number;
}

const loading = (arc: string): StaticPath[] => [{ d: RING, opacity: 0.2 }, { d: arc }];

const staticStatusIcons = {
    pending: [{ d: DASHED_RING }],
    "in-progress": [{ d: HALF_DASHED_RING }, { d: LEFT_HALF_RING }],
    "processing-01": [{ d: HALF_DASHED_RING }, { d: "M4 6H8M6.5 8L8 6L6.5 4" }, { d: LEFT_HALF_RING }],
    "processing-02": [{ d: HALF_DASHED_RING }, { d: LEFT_HALF_RING }, { d: "M6 3.5V6L7.5 7.5" }],
    "processing-03": [
        { d: HALF_DASHED_RING },
        { d: LEFT_HALF_RING },
        {
            d: "M5 6C5 6.27614 4.77614 6.5 4.5 6.5C4.22386 6.5 4 6.27614 4 6C4 5.72386 4.22386 5.5 4.5 5.5C4.77614 5.5 5 5.72386 5 6ZM8 6C8 6.27614 7.77614 6.5 7.5 6.5C7.22386 6.5 7 6.27614 7 6C7 5.72386 7.22386 5.5 7.5 5.5C7.77614 5.5 8 5.72386 8 6Z",
            strokeWidth: 1,
        },
    ],
    "progress-0": [{ d: RING }],
    "progress-25": [
        {
            d: "M6 1C6.65661 1 7.30679 1.12933 7.91342 1.3806C8.52005 1.63188 9.07124 2.00017 9.53553 2.46447C9.99983 2.92876 10.3681 3.47996 10.6194 4.08658C10.8707 4.69321 11 5.34339 11 6L6 6V1Z",
            fill: true,
        },
        { d: RING },
    ],
    "progress-50": [
        { d: RING },
        {
            d: "M6 1C7.32608 1 8.59785 1.52678 9.53553 2.46447C10.4732 3.40215 11 4.67392 11 6C11 7.32608 10.4732 8.59785 9.53553 9.53553C8.59785 10.4732 7.32608 11 6 11L6 6V1Z",
            fill: true,
        },
    ],
    "progress-75": [
        { d: RING },
        {
            d: "M6 1C6.98891 1 7.95561 1.29324 8.77785 1.84265C9.6001 2.39206 10.241 3.17295 10.6194 4.08658C10.9978 5.00021 11.0969 6.00555 10.9039 6.97545C10.711 7.94536 10.2348 8.83627 9.53553 9.53553C8.83627 10.2348 7.94536 10.711 6.97545 10.9039C6.00555 11.0969 5.00021 10.9978 4.08658 10.6194C3.17295 10.241 2.39206 9.6001 1.84265 8.77785C1.29324 7.95561 1 6.98891 1 6H6V1Z",
            fill: true,
        },
    ],
    "progress-100": [{ d: RING }, { d: "M11 6A5 5 0 1 1 1 6A5 5 0 1 1 11 6Z", fill: true }],
    "loading-0": loading("M6 1C6.00652 1 6.00349 1.00001 6.01 1.00004"),
    "loading-25": loading("M11 6C11 3.23858 8.76142 1 6 1"),
    "loading-50": loading("M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1"),
    "loading-75": loading("M1 6C1 8.76142 3.23858 11 6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1"),
    "loading-100": loading(`${CHECK}${RING}`),
    blocked: [{ d: `M9.53358 2.46251L2.46447 9.53553${RING}` }],
    "check-circle": [{ d: `${CHECK}${RING}` }],
    "check-circle-dash": [{ d: DASHED_RING }, { d: CHECK }],
    "check-x": [{ d: `${CROSS}${RING}` }],
    "check-x-dash": [{ d: DASHED_RING }, { d: CROSS }],
} satisfies Record<string, StaticPath[]>;

type StaticStatusIconName = keyof typeof staticStatusIcons;
type AnimatedStatusIconName = keyof typeof animatedStatusIcons;

export type StatusIconName = StaticStatusIconName | AnimatedStatusIconName;

/** All status icon names in the order of the Figma "Status icon" frame. */
export const statusIconNames = [...Object.keys(staticStatusIcons), ...Object.keys(animatedStatusIcons)] as StatusIconName[];

const isAnimated = (name: StatusIconName): name is AnimatedStatusIconName => name in animatedStatusIcons;

/** Animated status icons */

const animationStyle = (names: string[] | undefined, duration: number) =>
    ({
        "--status-icon-animation": names?.map((name) => `${name} ${duration}s linear infinite`).join(", "),
    }) as CSSProperties;

const animationClass = (names: string[] | undefined) => names && "animate-(--status-icon-animation) motion-reduce:animate-none";

const SvgShape = ({ shape, duration }: { shape: StatusIconShape; duration: number }) => {
    const [x, y, width, height] = shape.box;
    const style = { ...animationStyle(shape.animations, duration), opacity: shape.opacity };

    if (shape.children) {
        return (
            <g style={style} className={cx("origin-center", animationClass(shape.animations))}>
                {shape.children.map((child, index) => (
                    <SvgShape key={index} shape={child} duration={duration} />
                ))}
            </g>
        );
    }

    const className = cx("origin-center transform-fill", animationClass(shape.animations));

    if (shape.bar) {
        return <rect x={x} y={y} width={width} height={height} rx={width / 2} fill="currentColor" style={style} className={className} />;
    }

    if (shape.ring) {
        return (
            <circle
                cx={x + width / 2}
                cy={y + height / 2}
                r={(width - shape.ring) / 2}
                fill="none"
                stroke="currentColor"
                strokeWidth={shape.ring}
                style={style}
                className={className}
            />
        );
    }

    return <circle cx={x + width / 2} cy={y + height / 2} r={width / 2} fill="currentColor" style={style} className={className} />;
};

/** A shape on its own full-size layer, so the layer can be blurred (Safari ignores CSS filters on SVG child elements). */
const BlurLayer = ({ shape, duration }: { shape: StatusIconShape; duration: number }) => (
    <svg
        viewBox="0 0 12 12"
        style={{ ...animationStyle(shape.blurAnimations, duration), filter: shape.blur ? `blur(${shape.blur}px)` : undefined }}
        className={cx("absolute inset-0 size-full overflow-visible", animationClass(shape.blurAnimations))}
    >
        <SvgShape shape={shape} duration={duration} />
    </svg>
);

interface StatusIconProps {
    /** The status icon to render. Static icons are drawn as SVG; the grid, ring, morph, lens and activity icons loop a CSS animation. */
    name: StatusIconName;
    /** Additional CSS classes merged onto the icon. Set the color with a `text-*` class; the icon is drawn in `currentColor`. */
    className?: string;
}

/**
 * A 12px status indicator for badges, chat messages and other compact status UI.
 * Animated icons stop on their first frame when the user prefers reduced motion.
 */
export const StatusIcon = ({ name, className }: StatusIconProps) => {
    if (isAnimated(name)) {
        const icon: AnimatedStatusIcon = animatedStatusIcons[name];
        const keyframes = (
            <style href={`uui-status-icon-${name}`} precedence="default">
                {icon.keyframes}
            </style>
        );

        if (icon.shapes.some((shape) => shape.blur || shape.blurAnimations)) {
            return (
                <span aria-hidden="true" data-status-icon={name} className={cx("relative inline-block size-3 shrink-0 overflow-hidden", className)}>
                    {keyframes}
                    {icon.shapes.map((shape, index) => (
                        <BlurLayer key={index} shape={shape} duration={icon.duration} />
                    ))}
                </span>
            );
        }

        return (
            <>
                {keyframes}
                <svg aria-hidden="true" data-status-icon={name} viewBox="0 0 12 12" className={cx("size-3 shrink-0 overflow-hidden", className)}>
                    {icon.shapes.map((shape, index) => (
                        <SvgShape key={index} shape={shape} duration={icon.duration} />
                    ))}
                </svg>
            </>
        );
    }

    return (
        <svg aria-hidden="true" data-status-icon={name} viewBox="0 0 12 12" fill="none" className={cx("size-3 shrink-0", className)}>
            {staticStatusIcons[name].map((path: StaticPath, index) =>
                path.fill ? (
                    <path key={index} d={path.d} fill="currentColor" opacity={0.3} />
                ) : (
                    <path
                        key={index}
                        d={path.d}
                        stroke="currentColor"
                        strokeWidth={path.strokeWidth ?? 1.5}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        opacity={path.opacity}
                    />
                ),
            )}
        </svg>
    );
};
