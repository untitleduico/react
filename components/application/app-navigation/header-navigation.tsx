"use client";

import { type FC, type ReactNode } from "react";
import { Bell01, LifeBuoy01, SearchLg, Settings01 } from "@untitledui/icons";
import { TabList, Tabs } from "@/components/application/tabs/tabs";
import { BadgeWithDot } from "@/components/base/badges/badges";
import { DropdownAccountButton } from "@/components/base/dropdown/dropdown-account-button";
import { Input } from "@/components/base/input/input";
import { UntitledLogo } from "@/components/foundations/logo/untitledui-logo";
import { cx } from "@/utils/cx";
import { MobileNavigationHeader } from "./base-components/mobile-header";
import { NavAccountCard } from "./base-components/nav-account-card";
import { NavButton } from "./base-components/nav-button";
import { NavItemBase } from "./base-components/nav-item";
import { NavList } from "./base-components/nav-list";

type NavItem = {
    /** Label text for the nav item. */
    label: string;
    /** URL to navigate to when the nav item is clicked. */
    href: string;
    /** Override the auto-detected active state. When omitted, derived from `activeUrl`. */
    current?: boolean;
    /** Icon component to display. */
    icon?: FC<{ className?: string }>;
    /** Badge to display. */
    badge?: ReactNode;
    /** List of sub-items to display. */
    items?: NavItem[];
};

/** Returns true if `href` matches `activeUrl` (exact or prefix for nested routes). */
const isItemActive = (href: string, activeUrl?: string) => {
    if (!activeUrl || !href) return false;
    if (href === activeUrl) return true;
    if (href !== "/" && activeUrl.startsWith(href + "/")) return true;
    return false;
};

interface HeaderNavigationBaseProps {
    /** URL of the currently active item. */
    activeUrl?: string;
    /** List of items to display. */
    items: NavItem[];
    /** List of sub-items to display. */
    subItems?: NavItem[];
    /** Whether to hide the bottom border. */
    hideBorder?: boolean;

    /**
     * Replaces the entire right-side actions (icon buttons + account dropdown).
     * When provided, the default actions are ignored.
     */
    actions?: ReactNode;

    /**
     * Centers the primary nav items between the logo and actions.
     * @default false
     */
    centered?: boolean;

    /**
     * Controls how the secondary header renders sub-items.
     * - "buttons" — NavButton pills (default)
     * - "tabs" — Underline tabs
     * @default "buttons"
     */
    secondaryType?: "buttons" | "tabs";
}

const DefaultActions = ({ activeUrl }: { activeUrl?: string }) => {
    return (
        <>
            <div className="flex gap-0.5">
                <NavButton current={activeUrl === "/search"} icon={SearchLg} label="Search" href="/search" tooltipPlacement="bottom" />
                <NavButton current={activeUrl === "/settings-01"} icon={Settings01} label="Settings" href="/settings-01" tooltipPlacement="bottom" />
                <div className="relative">
                    <NavButton
                        current={activeUrl === "/notifications-01"}
                        icon={Bell01}
                        label="Notifications"
                        href="/notifications-01"
                        tooltipPlacement="bottom"
                    />

                    <div className="absolute -top-0.25 -right-0.25 flex size-3.5 items-center justify-center rounded-full bg-fg-error-primary text-[10px] font-bold text-white">
                        2
                    </div>
                </div>
            </div>

            <DropdownAccountButton />
        </>
    );
};

export const HeaderNavigationBase = ({
    activeUrl,
    items,
    subItems,
    hideBorder = false,
    actions,
    centered = false,
    secondaryType = "buttons",
}: HeaderNavigationBaseProps) => {
    const isActive = (item: NavItem) => item.current ?? isItemActive(item.href, activeUrl);

    const activeParent = items.find((item) => isActive(item) || item.items?.some((sub) => isItemActive(sub.href, activeUrl)));
    const activeSubNavItems = subItems || activeParent?.items;

    const showSecondaryNav = activeSubNavItems && activeSubNavItems.length > 0;

    const hasCustomActions = actions !== undefined;

    const tabItems = showSecondaryNav
        ? activeSubNavItems.map((item) => ({
              id: item.label,
              children: item.label,
          }))
        : [];

    const activeTabKey = activeSubNavItems?.find((item) => isActive(item))?.label;

    return (
        <>
            <MobileNavigationHeader>
                <aside className="flex h-full max-w-full flex-col justify-between overflow-auto bg-primary pt-4">
                    <div className="flex flex-col gap-5 px-4">
                        <UntitledLogo className="h-6" />

                        <Input size="md" aria-label="Search" placeholder="Search" icon={SearchLg} />
                    </div>

                    <NavList items={items} />

                    <div className="mt-auto flex flex-col gap-3 p-4">
                        <div className="flex flex-col">
                            <NavItemBase type="link" href="#" icon={LifeBuoy01}>
                                Support
                            </NavItemBase>
                            <NavItemBase
                                type="link"
                                href="#"
                                icon={Settings01}
                                badge={
                                    <BadgeWithDot color="success" type="modern" size="sm">
                                        Online
                                    </BadgeWithDot>
                                }
                            >
                                Settings
                            </NavItemBase>
                            <NavItemBase type="link" href="https://www.untitledui.com/" icon={Settings01}>
                                Open in browser
                            </NavItemBase>
                        </div>

                        <NavAccountCard />
                    </div>
                </aside>
            </MobileNavigationHeader>

            <header className="max-lg:hidden">
                <section
                    className={cx("flex h-16 w-full items-center justify-center bg-primary", (!hideBorder || showSecondaryNav) && "border-b border-secondary")}
                >
                    <div className={cx("flex w-full max-w-container items-center pr-3 pl-4 md:px-8", centered && "gap-8")}>
                        <div className={cx("flex items-center", centered ? "flex-1" : "mr-4")}>
                            <a
                                aria-label="Go to homepage"
                                href="/"
                                className="rounded-xs outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2"
                            >
                                <UntitledLogo className="h-6" />
                            </a>
                        </div>

                        <nav>
                            <ul className="flex items-center gap-0.5">
                                {items.map((item) => (
                                    <li key={item.label}>
                                        <NavButton current={isActive(item)} href={item.href}>
                                            {item.label}
                                        </NavButton>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        <div className={cx("flex items-center gap-3", centered ? "flex-1 justify-end" : "ml-auto")}>
                            {hasCustomActions ? actions : <DefaultActions activeUrl={activeUrl} />}
                        </div>
                    </div>
                </section>

                {showSecondaryNav && (
                    <section className={cx("flex w-full items-center justify-center bg-primary", !hideBorder && "border-b border-secondary")}>
                        {secondaryType === "tabs" ? (
                            <div className="w-full max-w-container px-8 pt-3">
                                <Tabs selectedKey={activeTabKey}>
                                    <TabList size="sm" type="underline" items={tabItems} className="-mb-px before:hidden" />
                                </Tabs>
                            </div>
                        ) : (
                            <div className={cx("flex h-16 w-full max-w-container items-center gap-8 px-8", centered ? "justify-center" : "justify-between")}>
                                <nav>
                                    <ul className={cx("flex items-center gap-0.5", centered && "justify-center")}>
                                        {activeSubNavItems.map((item) => (
                                            <li key={item.label}>
                                                <NavButton href={item.href} current={isActive(item)}>
                                                    {item.label}
                                                </NavButton>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>

                                {!centered && <Input shortcut aria-label="Search" placeholder="Search" icon={SearchLg} size="sm" className="max-w-70" />}
                            </div>
                        )}
                    </section>
                )}
            </header>
        </>
    );
};
