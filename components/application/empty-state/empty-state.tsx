"use client";

import type { ComponentProps, ComponentPropsWithRef, ReactNode } from "react";
import { Children, createContext, isValidElement, useContext } from "react";
import { FileIcon } from "@untitledui/file-icons";
import { SearchLg } from "@untitledui/icons";
import { FeaturedIcon as FeaturedIconbase } from "@/components/foundations/featured-icon/featured-icon";
import type { BackgroundPatternProps } from "@/components/shared-assets/background-patterns";
import { BackgroundPattern } from "@/components/shared-assets/background-patterns";
import { Illustration as Illustrations } from "@/components/shared-assets/illustrations";
import { cx } from "@/utils/cx";

interface RootContextProps {
    size?: "sm" | "md" | "lg";
}

const RootContext = createContext<RootContextProps>({ size: "lg" });

interface RootProps extends ComponentPropsWithRef<"div">, RootContextProps {}

const Root = ({ size = "lg", ...props }: RootProps) => {
    return (
        <RootContext.Provider value={{ size }}>
            <div {...props} className={cx("mx-auto flex w-full max-w-lg flex-col items-center justify-center", props.className)} />
        </RootContext.Provider>
    );
};

const FeaturedIcon = ({ color = "gray", theme = "modern", icon = SearchLg, size, ...props }: ComponentPropsWithRef<typeof FeaturedIconbase>) => {
    const { size: rootSize } = useContext(RootContext);

    return <FeaturedIconbase {...props} {...{ color, theme, icon }} size={!size && rootSize === "lg" ? "xl" : size || "lg"} />;
};

const Illustration = ({ type = "cloud", color = "gray", size = "lg", ...props }: ComponentPropsWithRef<typeof Illustrations>) => {
    const { size: rootSize } = useContext(RootContext);

    return (
        <Illustrations
            role="img"
            {...props}
            {...{ type, color }}
            size={rootSize === "sm" ? "sm" : rootSize === "md" ? "md" : size}
            className={cx("z-10", props.className)}
        />
    );
};

interface FileTypeIconProps extends ComponentPropsWithRef<"div"> {
    type?: ComponentProps<typeof FileIcon>["type"];
    theme?: ComponentProps<typeof FileIcon>["variant"];
}

const FileTypeIcon = ({ type = "folder", theme = "solid", ...props }: FileTypeIconProps) => {
    return (
        <div {...props} className={cx("relative z-10 flex rounded-full bg-linear-to-b from-neutral-50 to-neutral-200 p-8", props.className)}>
            <FileIcon type={type} variant={theme} className="size-10 drop-shadow-sm" />
        </div>
    );
};

interface HeaderProps extends ComponentPropsWithRef<"div"> {
    pattern?: "none" | BackgroundPatternProps["pattern"];
    patternSize?: "sm" | "md" | "lg";
}

const Header = ({ pattern = "circle", patternSize = "md", ...props }: HeaderProps) => {
    const { size } = useContext(RootContext);
    // Whether we are passing `Illustration` component as children.
    const hasIllustration = Children.toArray(props.children).some((headerChild) => isValidElement(headerChild) && headerChild.type === Illustration);

    return (
        <header
            {...props}
            className={cx("relative mb-4", (size === "md" || size === "lg") && "mb-5", hasIllustration && size === "lg" && "mb-6!", props.className)}
        >
            {pattern !== "none" && (
                <BackgroundPattern size={patternSize} pattern={pattern} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            )}
            {props.children}
        </header>
    );
};

const Content = (props: ComponentPropsWithRef<"div">) => {
    const { size } = useContext(RootContext);

    return (
        <main
            {...props}
            className={cx(
                "z-10 mb-6 flex w-full max-w-88 flex-col items-center justify-center gap-1",
                (size === "md" || size === "lg") && "mb-8 gap-2",
                props.className,
            )}
        />
    );
};

const Footer = (props: ComponentPropsWithRef<"div">) => {
    return <footer {...props} className={cx("z-10 flex gap-3", props.className)} />;
};

const Title = (props: ComponentPropsWithRef<"h1">) => {
    const { size } = useContext(RootContext);

    return (
        <h1
            {...props}
            className={cx(
                "text-md font-semibold text-primary",
                size === "md" && "text-lg font-semibold",
                size === "lg" && "text-xl font-semibold",
                props.className,
            )}
        />
    );
};

const Description = (props: ComponentPropsWithRef<"p">) => {
    const { size } = useContext(RootContext);

    return <p {...props} className={cx("text-center text-sm text-tertiary", size === "lg" && "text-md", props.className)} />;
};

interface AvatarRadiusProps extends ComponentPropsWithRef<"div"> {
    avatars?: Array<{ src: string; alt?: string }>;
}

/**
 * Predefined avatar slots positioned on concentric circle rings.
 * Each slot defines: ring radius, CSS angle (0°=top, clockwise), and avatar size class.
 */
const avatarSlots = [
    { ring: 80, angle: 330, size: "size-8" },
    { ring: 80, angle: 56, size: "size-8" },
    { ring: 144, angle: 82, size: "size-7" },
    { ring: 144, angle: 299, size: "size-7" },
    { ring: 144, angle: 241, size: "size-7" },
    { ring: 176, angle: 64, size: "size-6" },
    { ring: 176, angle: 270, size: "size-6" },
    { ring: 144, angle: 112, size: "size-7" },
    { ring: 80, angle: 249, size: "size-8" },
] as const;

const RING_RADII = [48, 80, 112, 144, 176];

const AvatarRadius = ({ avatars = [], ...props }: AvatarRadiusProps) => {
    return (
        <div
            aria-hidden="true"
            {...props}
            className={cx("pointer-events-none absolute top-1/2 left-1/2 size-120 -translate-x-1/2 -translate-y-1/2", props.className)}
            style={{
                maskImage: "radial-gradient(circle, black 10%, transparent 70%)",
                WebkitMaskImage: "radial-gradient(circle, black 10%, transparent 70%)",
                ...props.style,
            }}
        >
            {RING_RADII.map((radius) => (
                <div
                    key={radius}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-secondary"
                    style={{ width: radius * 2, height: radius * 2 }}
                />
            ))}

            {avatars.slice(0, avatarSlots.length).map((avatar, i) => {
                const slot = avatarSlots[i];
                const rad = (slot.angle * Math.PI) / 180;
                const x = Math.sin(rad) * slot.ring;
                const y = -Math.cos(rad) * slot.ring;

                return (
                    <div
                        key={i}
                        className={cx("absolute top-1/2 left-1/2 rounded-full bg-primary p-px shadow-xs ring-[0.5px] ring-black/10", slot.size)}
                        style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}
                    >
                        <img src={avatar.src} alt="" className="size-full rounded-full object-cover outline-[0.5px] -outline-offset-[0.5px] outline-black/16" />
                    </div>
                );
            })}
        </div>
    );
};

interface AvatarRowProps extends ComponentPropsWithRef<"div"> {
    avatars?: Array<{ src: string; alt?: string }>;
    children?: ReactNode;
}

/** Avatar sizes per root size — ordered smallest to largest (left edge → center). */
const rowStyles = {
    sm: ["size-8 rounded-md", "size-9 rounded-[7px]", "size-10 rounded-lg", "size-11 rounded-[9px]"],
    md: ["size-10 rounded-lg", "size-11 rounded-[9px]", "size-12 rounded-[10px]"],
    lg: ["size-10 rounded-lg", "size-11 rounded-[9px]", "size-12 rounded-[10px]"],
} as const;

const AvatarRow = ({ avatars = [], children, ...props }: AvatarRowProps) => {
    const { size: rootSize } = useContext(RootContext);
    const sizeKey = rootSize || "md";
    const sizes = rowStyles[sizeKey];
    const count = sizes.length;
    const leftAvatars = avatars.slice(0, count);
    const rightAvatars = avatars.slice(count, count * 2);

    const renderAvatar = (avatar: { src: string; alt?: string }, sizeClass: string, key: number) => (
        <div
            key={key}
            className={cx(
                "relative shrink-0 overflow-hidden outline-[0.5px] -outline-offset-[0.5px] outline-black/16 before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-white/32 before:mask-[linear-gradient(to_bottom,black_0%,transparent_25%,transparent_75%,black_100%)]",
                sizeClass,
            )}
        >
            <img src={avatar.src} alt={avatar.alt || ""} className="size-full object-cover" />
        </div>
    );

    return (
        <div
            aria-hidden="true"
            {...props}
            className={cx("flex items-center justify-center p-1", sizeKey === "sm" ? "gap-4" : sizeKey === "md" ? "gap-5" : "gap-6", props.className)}
            style={{
                maskImage: "radial-gradient(circle, black 5%, transparent 105%)",
                WebkitMaskImage: "radial-gradient(circle, black 5%, transparent 105%)",
                ...props.style,
            }}
        >
            <div className={cx("flex items-center", sizeKey === "sm" ? "gap-3" : "gap-4")}>
                {leftAvatars.map((avatar, i) => renderAvatar(avatar, sizes[i], i))}
            </div>

            {children}

            <div className={cx("flex items-center", sizeKey === "sm" ? "gap-3" : "gap-4")}>
                {rightAvatars.map((avatar, i) => renderAvatar(avatar, sizes[count - 1 - i], i + count))}
            </div>
        </div>
    );
};

interface AvatarGridProps extends ComponentPropsWithRef<"div"> {
    avatars?: Array<{ src: string; alt?: string }>;
}

const gridStyles = {
    sm: { avatar: "size-8 rounded-md", inner: "rounded-[5px]", gap: "gap-2 pl-2", rowGap: "gap-2" },
    md: { avatar: "size-10 rounded-lg", inner: "rounded-[7px]", gap: "gap-3 pl-3", rowGap: "gap-3" },
    lg: { avatar: "size-12 rounded-[10px]", inner: "rounded-[9px]", gap: "gap-3 pl-3", rowGap: "gap-3" },
} as const;

const AvatarGrid = ({ avatars = [], ...props }: AvatarGridProps) => {
    const { size: rootSize } = useContext(RootContext);
    const sizeKey = rootSize || "md";
    const config = gridStyles[sizeKey];
    const mid = Math.ceil(avatars.length / 2);
    const row1Base = avatars.slice(0, mid);
    const row2Base = avatars.slice(mid);

    const row1 = [...row1Base, ...row1Base, ...row1Base];
    const row2 = [...row2Base, ...row2Base, ...row2Base];

    const renderGridAvatar = (avatar: { src: string; alt?: string }, key: number) => (
        <div key={key} className={cx("shrink-0 bg-primary p-px shadow-xs ring-[0.75px] ring-black/10", config.avatar)}>
            <div
                className={cx(
                    "relative size-full overflow-hidden outline-[0.5px] -outline-offset-[0.5px] outline-black/16 before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-white/32 before:mask-[linear-gradient(to_bottom,black_0%,transparent_25%,transparent_75%,black_100%)]",
                    config.inner,
                )}
            >
                <img src={avatar.src} alt={avatar.alt || ""} className="size-full object-cover" />
            </div>
        </div>
    );

    return (
        <div
            aria-hidden="true"
            {...props}
            className={cx("-m-1 flex max-w-lg flex-col items-center overflow-x-clip p-1", config.rowGap, props.className)}
            style={{
                maskImage: "radial-gradient(circle, black 10%, transparent 100%)",
                WebkitMaskImage: "radial-gradient(circle, black 10%, transparent 100%)",
                ...props.style,
            }}
        >
            <div className="flex">
                <div className={cx("flex w-auto max-w-none shrink-0 animate-marquee [animation-duration:240s] motion-reduce:animate-none", config.gap)}>
                    {row1.map((avatar, i) => renderGridAvatar(avatar, i))}
                </div>
                <div className={cx("flex w-auto max-w-none shrink-0 animate-marquee [animation-duration:240s] motion-reduce:animate-none", config.gap)}>
                    {row1.map((avatar, i) => renderGridAvatar(avatar, i))}
                </div>
            </div>
            <div className="flex">
                <div
                    className={cx(
                        "flex w-auto max-w-none shrink-0 animate-marquee [animation-delay:-120s] [animation-duration:240s] direction-reverse motion-reduce:-translate-x-1/2 motion-reduce:animate-none",
                        config.gap,
                    )}
                >
                    {row2.map((avatar, i) => renderGridAvatar(avatar, i + mid))}
                </div>
                <div
                    className={cx(
                        "flex w-auto max-w-none shrink-0 animate-marquee [animation-delay:-120s] [animation-duration:240s] direction-reverse motion-reduce:-translate-x-1/2 motion-reduce:animate-none",
                        config.gap,
                    )}
                >
                    {row2.map((avatar, i) => renderGridAvatar(avatar, i + mid))}
                </div>
            </div>
        </div>
    );
};

const EmptyState = Root as typeof Root & {
    Title: typeof Title;
    Header: typeof Header;
    Footer: typeof Footer;
    Content: typeof Content;
    Description: typeof Description;
    Illustration: typeof Illustration;
    FeaturedIcon: typeof FeaturedIcon;
    FileTypeIcon: typeof FileTypeIcon;
    AvatarRadius: typeof AvatarRadius;
    AvatarRow: typeof AvatarRow;
    AvatarGrid: typeof AvatarGrid;
};

EmptyState.Title = Title;
EmptyState.Header = Header;
EmptyState.Footer = Footer;
EmptyState.Content = Content;
EmptyState.Description = Description;
EmptyState.Illustration = Illustration;
EmptyState.FeaturedIcon = FeaturedIcon;
EmptyState.FileTypeIcon = FileTypeIcon;
EmptyState.AvatarRadius = AvatarRadius;
EmptyState.AvatarRow = AvatarRow;
EmptyState.AvatarGrid = AvatarGrid;

export { EmptyState };
