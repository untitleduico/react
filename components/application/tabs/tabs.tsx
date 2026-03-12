"use client";

import type { ComponentPropsWithRef, FC, ReactNode } from "react";
import { createContext, isValidElement, useContext } from "react";
import type { TabListProps as AriaTabListProps, TabProps as AriaTabProps, TabRenderProps as AriaTabRenderProps } from "react-aria-components";
import { Tab as AriaTab, TabList as AriaTabList, TabPanel as AriaTabPanel, Tabs as AriaTabs, TabsContext, useSlottedContext } from "react-aria-components";
import { Badge } from "@/components/base/badges/badges";
import { cx } from "@/utils/cx";
import { isReactComponent } from "@/utils/is-react-component";

type Orientation = "horizontal" | "vertical";

// Types for different orientations
type HorizontalTypes = "button-brand" | "button-gray" | "button-border" | "button-minimal" | "underline";
type VerticalTypes = "button-brand" | "button-gray" | "button-border" | "button-minimal" | "line";
type TabTypeColors<T> = T extends "horizontal" ? HorizontalTypes : VerticalTypes;

// Styles for different types of tab
const getTabStyles = ({ isFocusVisible, isSelected, isHovered }: AriaTabRenderProps) => ({
    "button-brand": cx(
        "outline-focus-ring *:data-icon:text-fg-quaternary",
        isFocusVisible && "outline-2 -outline-offset-2",
        (isSelected || isHovered) && "bg-brand-primary_alt text-brand-secondary *:data-icon:text-fg-brand-secondary_hover",
    ),
    "button-gray": cx(
        "outline-focus-ring *:data-icon:text-fg-quaternary",
        isHovered && "bg-primary_hover text-secondary *:data-icon:text-fg-secondary_hover",
        isFocusVisible && "outline-2 -outline-offset-2",
        isSelected && "bg-active text-secondary *:data-icon:text-fg-secondary_hover",
    ),
    "button-border": cx(
        "outline-focus-ring *:data-icon:text-fg-quaternary",
        isFocusVisible && "outline-2 -outline-offset-2",
        (isSelected || isHovered) && "bg-primary_alt text-secondary shadow-sm *:data-icon:text-fg-secondary_hover",
    ),
    "button-minimal": cx(
        "rounded-lg outline-focus-ring *:data-icon:text-fg-quaternary",
        isFocusVisible && "outline-2 -outline-offset-2",
        (isSelected || isHovered) && "bg-primary_alt text-secondary shadow-xs ring-1 ring-primary ring-inset *:data-icon:text-fg-secondary_hover",
    ),
    underline: cx(
        "rounded-none border-b-2 border-transparent outline-focus-ring *:data-icon:text-fg-quaternary",
        isFocusVisible && "outline-2 -outline-offset-2",
        (isSelected || isHovered) && "border-fg-brand-primary_alt text-brand-secondary *:data-icon:text-fg-brand-secondary_hover",
    ),
    line: cx(
        "rounded-none border-l-2 border-transparent outline-focus-ring *:data-icon:text-fg-quaternary",
        isFocusVisible && "outline-2 -outline-offset-2",
        (isSelected || isHovered) && "border-fg-brand-primary_alt text-brand-secondary *:data-icon:text-fg-brand-secondary_hover",
    ),
});

const sizes = {
    sm: {
        base: "text-sm font-semibold gap-1 *:data-icon:size-4",
        "button-brand": "py-2 px-2.5",
        "button-gray": "py-2 px-2.5",
        "button-border": "py-2 px-2.5",
        "button-minimal": "py-2 px-2.5",
        underline: "px-0.5 pb-2.5 pt-0",
        line: "pl-2.5 pr-3 py-0.5",
    },
    md: {
        base: "text-md font-semibold gap-1.5 *:data-icon:size-5",
        "button-brand": "py-2.5 px-2.5",
        "button-gray": "py-2.5 px-2.5",
        "button-border": "py-2.5 px-2.5",
        "button-minimal": "py-2.5 px-2.5",
        underline: "px-0.5 pb-2.5 pt-0",
        line: "pr-3.5 pl-3 py-1",
    },
};

// Styles for different types of horizontal tabs
const getHorizontalStyles = ({ size, fullWidth }: { size?: "sm" | "md"; fullWidth?: boolean }) => ({
    "button-brand": "gap-1",
    "button-gray": "gap-1",
    "button-border": cx("gap-1 rounded-[10px] bg-secondary_alt p-1 ring-1 ring-secondary ring-inset", size === "md" && "rounded-xl p-1.5"),
    "button-minimal": "gap-0.5 rounded-lg bg-secondary_alt ring-1 ring-inset ring-secondary",
    underline: cx("gap-3", fullWidth && "w-full gap-4"),
    line: "gap-2",
});

const getColorStyles = ({ isSelected, isHovered }: Partial<AriaTabRenderProps>) => ({
    "button-brand": isSelected || isHovered ? "brand" : "gray",
    "button-gray": "gray",
    "button-border": "gray",
    "button-minimal": "gray",
    underline: isSelected || isHovered ? "brand" : "gray",
    line: isSelected || isHovered ? "brand" : "gray",
});

interface TabListComponentProps<T extends object, K extends Orientation> extends Omit<AriaTabListProps<T>, "items"> {
    /** The size of the tab list. */
    size?: keyof typeof sizes;
    /** The type of the tab list. */
    type?: TabTypeColors<K>;
    /** The orientation of the tab list. */
    orientation?: K;
    /** The items of the tab list. When provided, tabs are rendered automatically via the render function in children. */
    items?: T[];
    /** Whether the tab list is full width. */
    fullWidth?: boolean;
}

const TabListContext = createContext<Omit<TabListComponentProps<TabComponentProps, Orientation>, "items">>({
    size: "sm",
    type: "button-brand",
});

export const TabList = <T extends Orientation>({
    size = "sm",
    type = "button-brand",
    orientation: orientationProp,
    fullWidth,
    className,
    children,
    ...otherProps
}: TabListComponentProps<TabComponentProps, T>) => {
    const context = useSlottedContext(TabsContext);

    const orientation = orientationProp ?? context?.orientation ?? "horizontal";

    return (
        <TabListContext.Provider value={{ size, type, orientation, fullWidth }}>
            <AriaTabList
                {...otherProps}
                className={(state) =>
                    cx(
                        "group flex",

                        getHorizontalStyles({
                            size,
                            fullWidth,
                        })[type as HorizontalTypes],

                        orientation === "vertical" && "w-max flex-col",

                        // Only horizontal tabs with underline type have bottom border
                        orientation === "horizontal" &&
                            type === "underline" &&
                            "relative before:absolute before:inset-x-0 before:bottom-0 before:h-px before:bg-border-secondary",

                        typeof className === "function" ? className(state) : className,
                    )
                }
            >
                {children ?? (otherProps.items ? (item) => <Tab {...item}>{item.children}</Tab> : undefined)}
            </AriaTabList>
        </TabListContext.Provider>
    );
};

export const TabPanel = (props: ComponentPropsWithRef<typeof AriaTabPanel>) => {
    return (
        <AriaTabPanel
            {...props}
            className={(state) =>
                cx(
                    "outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2",
                    typeof props.className === "function" ? props.className(state) : props.className,
                )
            }
        />
    );
};

interface TabComponentProps extends AriaTabProps {
    /** The label of the tab. */
    label?: ReactNode;
    /** The children of the tab. */
    children?: ReactNode | ((props: AriaTabRenderProps) => ReactNode);
    /** Icon component or element to show before the text */
    icon?: FC<{ className?: string }> | ReactNode;
    /** The badge displayed next to the label. */
    badge?: number | string;
}

export const Tab = ({ label, children, badge, icon: Icon, className, ...otherProps }: TabComponentProps) => {
    const { size = "sm", type = "button-brand", fullWidth } = useContext(TabListContext);

    const showPillColorBadge = type === "underline" || type === "line" || type === "button-brand";

    return (
        <AriaTab
            {...otherProps}
            className={(prop) =>
                cx(
                    "z-10 flex h-max cursor-pointer items-center justify-center gap-2 rounded-md whitespace-nowrap text-quaternary transition duration-100 ease-linear",
                    "group-orientation-vertical:justify-start",
                    fullWidth && "w-full flex-1",
                    sizes[size].base,
                    sizes[size][type],
                    getTabStyles(prop)[type],
                    typeof className === "function" ? className(prop) : className,
                )
            }
        >
            {(state) => (
                <>
                    {/* Icon */}
                    {isValidElement(Icon) && Icon}
                    {isReactComponent(Icon) && <Icon data-icon className="transition-inherit-all" />}

                    <span className={cx("flex items-center gap-1.5", type !== "line" && "px-0.5")}>
                        {typeof children === "function" ? children(state) : children || label}

                        {/* Badge */}
                        {badge && (
                            <Badge
                                size="sm"
                                type={showPillColorBadge ? "pill-color" : "modern"}
                                color={showPillColorBadge && (state.isHovered || state.isSelected) ? "brand" : "gray"}
                                className={cx("hidden transition-inherit-all md:flex", size === "sm" && "-my-px")}
                            >
                                {badge}
                            </Badge>
                        )}
                    </span>
                </>
            )}
        </AriaTab>
    );
};

export const Tabs = ({ className, ...props }: ComponentPropsWithRef<typeof AriaTabs>) => {
    return (
        <AriaTabs
            keyboardActivation="manual"
            {...props}
            className={(state) => cx("flex w-full flex-col", typeof className === "function" ? className(state) : className)}
        />
    );
};

Tabs.Panel = TabPanel;
Tabs.List = TabList;
Tabs.Item = Tab;
