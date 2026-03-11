"use client";

import { type FC, type ReactNode, useState } from "react";
import { Bell01, ChevronDown, HelpCircle, LifeBuoy01, LogOut01, Moon01, Plus, SearchLg, Settings01, User01 } from "@untitledui/icons";
import { type Selection, SubmenuTrigger } from "react-aria-components";
import { BadgeWithDot } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { Dropdown } from "@/components/base/dropdown/dropdown";
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
    /** Whether the nav item is currently active. */
    current?: boolean;
    /** Icon component to display. */
    icon?: FC<{ className?: string }>;
    /** Badge to display. */
    badge?: ReactNode;
    /** List of sub-items to display. */
    items?: NavItem[];
};

interface HeaderNavigationBaseProps {
    /** URL of the currently active item. */
    activeUrl?: string;
    /** List of items to display. */
    items: NavItem[];
    /** List of sub-items to display. */
    subItems?: NavItem[];
    /** Content to display in the trailing position. */
    trailingContent?: ReactNode;
    /** Whether to show the avatar dropdown. */
    showAvatarDropdown?: boolean;
    /** Whether to hide the bottom border. */
    hideBorder?: boolean;
}

export const HeaderNavigationBase = ({
    activeUrl,
    items,
    subItems,
    trailingContent,
    showAvatarDropdown = true,
    hideBorder = false,
}: HeaderNavigationBaseProps) => {
    const [selectedAccount, setSelectedAccount] = useState<Selection>(new Set(["olivia"]));
    const [selectedTheme, setSelectedTheme] = useState<Selection>(new Set(["light-mode"]));

    const activeSubNavItems = subItems || items.find((item) => item.current && item.items && item.items.length > 0)?.items;

    const showSecondaryNav = activeSubNavItems && activeSubNavItems.length > 0;

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
                    <div className="flex w-full max-w-container justify-between pr-3 pl-4 md:px-8">
                        <div className="flex flex-1 items-center gap-4">
                            <a
                                aria-label="Go to homepage"
                                href="/"
                                className="rounded-xs outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2"
                            >
                                <UntitledLogo className="h-6" />
                            </a>

                            <nav>
                                <ul className="flex items-center gap-0.5">
                                    {items.map((item) => (
                                        <li key={item.label}>
                                            <NavButton current={item.current} href={item.href}>
                                                {item.label}
                                            </NavButton>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>

                        <div className="flex items-center gap-3">
                            {trailingContent}

                            <div className="flex gap-0.5">
                                <NavButton current={activeUrl === "/search"} icon={SearchLg} label="Search" href="/search" tooltipPlacement="bottom" />
                                <NavButton
                                    current={activeUrl === "/settings-01"}
                                    icon={Settings01}
                                    label="Settings"
                                    href="/settings-01"
                                    tooltipPlacement="bottom"
                                />
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

                            {showAvatarDropdown && (
                                <Dropdown.Root>
                                    <Button
                                        size="sm"
                                        className="group"
                                        color="secondary"
                                        iconTrailing={(props) => <ChevronDown data-icon="trailing" {...props} className="size-4! stroke-[2.25px]!" />}
                                    >
                                        Account
                                    </Button>

                                    <Dropdown.Popover className="w-60 rounded-b-xl bg-secondary_alt">
                                        <Dropdown.Menu className="rounded-b-xl bg-primary ring-1 ring-secondary">
                                            <Dropdown.Item icon={User01} addon="⌘K->P">
                                                View profile
                                            </Dropdown.Item>
                                            <Dropdown.Item icon={Settings01} addon="⌘S">
                                                Settings
                                            </Dropdown.Item>
                                            <Dropdown.Section selectionMode="single" selectedKeys={selectedTheme} onSelectionChange={setSelectedTheme}>
                                                <Dropdown.Item id="dark-mode" icon={Moon01} selectionIndicator="toggle">
                                                    Dark mode
                                                </Dropdown.Item>
                                            </Dropdown.Section>
                                            <SubmenuTrigger>
                                                <Dropdown.Item icon={HelpCircle}>Support</Dropdown.Item>

                                                <Dropdown.Popover placement="right top" offset={-6}>
                                                    <Dropdown.Menu>
                                                        <Dropdown.Item>Help center</Dropdown.Item>
                                                        <Dropdown.Item>Contact support</Dropdown.Item>
                                                        <Dropdown.Item>Send feedback</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown.Popover>
                                            </SubmenuTrigger>

                                            <Dropdown.Separator />

                                            <Dropdown.Section selectionMode="single" selectedKeys={selectedAccount} onSelectionChange={setSelectedAccount}>
                                                <Dropdown.SectionHeader className="px-4 pt-1.5 pb-0.5 text-xs font-semibold text-brand-secondary">
                                                    Switch Account
                                                </Dropdown.SectionHeader>

                                                <Dropdown.Item
                                                    id="olivia"
                                                    avatarUrl="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80"
                                                    selectionIndicator="radio"
                                                >
                                                    Olivia Rhye
                                                </Dropdown.Item>
                                                <Dropdown.Item
                                                    id="sienna"
                                                    avatarUrl="https://www.untitledui.com/images/avatars/sienna-hewitt?fm=webp&q=80"
                                                    selectionIndicator="radio"
                                                >
                                                    Sienna Hewitt
                                                </Dropdown.Item>
                                            </Dropdown.Section>
                                            <Dropdown.Item icon={Plus}>Add account</Dropdown.Item>
                                        </Dropdown.Menu>
                                        <div className="flex flex-col gap-3 p-3">
                                            <Button size="xs" color="secondary" iconLeading={LogOut01} className="text-center">
                                                Sign out
                                            </Button>
                                        </div>
                                    </Dropdown.Popover>
                                </Dropdown.Root>
                            )}
                        </div>
                    </div>
                </section>

                {showSecondaryNav && (
                    <section className={cx("flex h-16 w-full items-center justify-center bg-primary", !hideBorder && "border-b border-secondary")}>
                        <div className="flex w-full max-w-container items-center justify-between gap-8 px-8">
                            <nav>
                                <ul className="flex items-center gap-0.5">
                                    {activeSubNavItems.map((item) => (
                                        <li key={item.label}>
                                            <NavButton href={item.href} current={item.current}>
                                                {item.label}
                                            </NavButton>
                                        </li>
                                    ))}
                                </ul>
                            </nav>

                            <Input shortcut aria-label="Search" placeholder="Search" icon={SearchLg} size="sm" className="max-w-70" />
                        </div>
                    </section>
                )}
            </header>
        </>
    );
};
