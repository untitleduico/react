"use client";

import type { FC } from "react";
import {
    Archive,
    BarChartSquare02,
    Calendar,
    CheckDone01,
    ChevronRight,
    ClockFastForward,
    CurrencyDollarCircle,
    File05,
    Folder,
    Grid03,
    HomeLine,
    Inbox01,
    LayoutAlt01,
    LifeBuoy01,
    LineChartUp03,
    MessageChatCircle,
    NotificationBox,
    Package,
    PieChart03,
    Rows01,
    Settings01,
    Settings03,
    Star01,
    Stars01,
    User01,
    UserSquare,
    Users01,
    UsersPlus,
} from "@untitledui/icons";
import { FeaturedCardProgressBar, FeaturedCardProgressCircle } from "@/components/application/app-navigation/base-components/featured-cards.demo";
import type { NavItemDividerType, NavItemType } from "@/components/application/app-navigation/config";
import { SidebarNavigationDualTier } from "@/components/application/app-navigation/sidebar-navigation/sidebar-dual-tier";
import { SidebarNavigationSectionDividers } from "@/components/application/app-navigation/sidebar-navigation/sidebar-section-dividers";
import { SidebarNavigationSectionsSubheadings } from "@/components/application/app-navigation/sidebar-navigation/sidebar-sections-subheadings";
import { SidebarNavigationSimple } from "@/components/application/app-navigation/sidebar-navigation/sidebar-simple";
import { SidebarNavigationSlim } from "@/components/application/app-navigation/sidebar-navigation/sidebar-slim";
import { Avatar } from "@/components/base/avatar/avatar";
import { Badge, BadgeWithDot } from "@/components/base/badges/badges";

const navItemsSimple: NavItemType[] = [
    {
        label: "Home",
        href: "/",
        icon: HomeLine,
        items: [
            { label: "Overview", href: "/overview", icon: Grid03 },
            { label: "Products", href: "/products", icon: Package },
            { label: "Orders", href: "/orders", icon: CurrencyDollarCircle },
            { label: "Customers", href: "/customers", icon: Users01 },
        ],
    },
    {
        label: "Dashboard",
        href: "/dashboard",
        icon: BarChartSquare02,
        items: [
            { label: "Overview", href: "/dashboard/overview", icon: Grid03 },
            { label: "Notifications", href: "/dashboard/notifications", icon: NotificationBox, badge: 10 },
            { label: "Analytics", href: "/dashboard/analytics", icon: LineChartUp03 },
            { label: "Saved reports", href: "/dashboard/saved-reports", icon: Star01 },
        ],
    },
    {
        label: "Projects",
        href: "/projects",
        icon: Rows01,
        items: [
            { label: "View all", href: "/projects/all", icon: Rows01 },
            { label: "Personal", href: "/projects/personal", icon: User01 },
            { label: "Team", href: "/projects/team", icon: Users01 },
            { label: "Shared with me", href: "/projects/shared-with-me", icon: UsersPlus },
            { label: "Archive", href: "/projects/archive", icon: Archive },
        ],
    },
    {
        label: "Tasks",
        href: "/tasks",
        icon: CheckDone01,
        badge: 10,
    },
    {
        label: "Reporting",
        href: "/reporting",
        icon: PieChart03,
    },
    {
        label: "Users",
        href: "/users",
        icon: Users01,
    },
];

const navItemsDualTier: (NavItemType & { icon: FC<{ className?: string }> })[] = [
    {
        label: "Home",
        href: "/",
        icon: HomeLine,
        items: [
            { label: "Overview", href: "/overview", icon: Grid03 },
            { label: "Products", href: "/products", icon: Package },
            { label: "Orders", href: "/orders", icon: CurrencyDollarCircle },
            { label: "Customers", href: "/customers", icon: Users01 },
            { label: "Inbox", href: "/inbox", icon: Inbox01, badge: 4 },
            { label: "What's new?", href: "/whats-new", icon: Stars01 },
        ],
    },
    {
        label: "Dashboard",
        href: "/dashboard",
        icon: BarChartSquare02,
        items: [
            { label: "Overview", href: "/dashboard/overview", icon: Grid03 },
            { label: "Notifications", href: "/dashboard/notifications", icon: NotificationBox, badge: 10 },
            { label: "Analytics", href: "/dashboard/analytics", icon: LineChartUp03 },
            { label: "Saved reports", href: "/dashboard/saved-reports", icon: Star01 },
            { label: "Scheduled reports", href: "/dashboard/scheduled-reports", icon: ClockFastForward },
            { label: "User reports", href: "/dashboard/user-reports", icon: UserSquare },
            { label: "Manage notifications", href: "/dashboard/manage-notifications", icon: Settings03 },
        ],
    },
    {
        label: "Projects",
        href: "/projects",
        icon: Rows01,
        items: [
            { label: "View all", href: "/projects/all", icon: Rows01 },
            { label: "Personal", href: "/projects/personal", icon: User01 },
            { label: "Team", href: "/projects/team", icon: Users01 },
            { label: "Shared with me", href: "/projects/shared-with-me", icon: UsersPlus },
            { label: "Archive", href: "/projects/archive", icon: Archive },
        ],
    },
    {
        label: "Tasks",
        href: "/tasks",
        icon: CheckDone01,
        badge: 10,
    },
    {
        label: "Reporting",
        href: "/reporting",
        icon: PieChart03,
    },
    {
        label: "Users",
        href: "/users",
        icon: Users01,
    },
];

const navItemsWithDividers: (NavItemType | NavItemDividerType)[] = [
    {
        label: "Home",
        href: "/",
        icon: HomeLine,
    },
    {
        label: "Dashboard",
        href: "/dashboard",
        icon: BarChartSquare02,
    },
    {
        label: "Projects",
        href: "/projects",
        icon: Rows01,
    },
    { divider: true },
    {
        label: "Folders",
        icon: Folder,
        href: "/folders",
        items: [
            { label: "View all", badge: 18, href: "/folders/view-all" },
            { label: "Recent", badge: 8, href: "/folders/recent" },
            { label: "Favorites", badge: 6, href: "/folders/favorites" },
            { label: "Shared", badge: 4, href: "/folders/shared" },
        ],
    },
    { divider: true },
    {
        label: "Reporting",
        href: "/reporting",
        icon: PieChart03,
    },
    {
        label: "Settings",
        href: "/settings",
        icon: Settings01,
    },
    {
        label: "Support",
        href: "/support",
        icon: MessageChatCircle,
        badge: (
            <BadgeWithDot color="success" type="modern" size="sm">
                Online
            </BadgeWithDot>
        ),
    },
    {
        label: "Open in browser",
        href: "https://www.untitledui.com/",
        icon: LayoutAlt01,
    },
];

const navItemsWithSectionsSubheadings: Array<{ label: string; items: NavItemType[] }> = [
    {
        label: "General",
        items: [
            {
                label: "Dashboard",
                href: "/",
                icon: BarChartSquare02,
            },
            {
                label: "Projects",
                href: "/projects",
                icon: Rows01,
            },
            {
                label: "Documents",
                href: "/documents",
                icon: File05,
            },
            {
                label: "Calendar",
                href: "/calendar",
                icon: Calendar,
            },
        ],
    },
    {
        label: "Untitled UI",
        items: [
            {
                label: "Reporting",
                href: "#",
                icon: PieChart03,
            },
            {
                label: "Tasks",
                href: "#",
                icon: CheckDone01,
                badge: (
                    <Badge size="sm" type="modern">
                        8
                    </Badge>
                ),
            },
            {
                label: "Users",
                href: "#",
                icon: Users01,
            },
        ],
    },
    {
        label: "Your teams",
        items: [
            {
                label: "Catalog",
                href: "#",
                icon: () => <Avatar src="https://www.untitledui.com/logos/images/Catalog.jpg" className="mr-2 size-5" />,
                badge: (
                    <div className="flex items-center gap-3">
                        <Badge size="sm" type="modern">
                            ⌘1
                        </Badge>
                        <ChevronRight size={16} className="text-fg-quaternary" />
                    </div>
                ),
            },
            {
                label: "Warpspeed",
                href: "#",
                icon: () => <Avatar src="https://www.untitledui.com/logos/images/Warpspeed.jpg" className="mr-2 size-5" />,
                badge: (
                    <div className="flex items-center gap-3">
                        <Badge size="sm" type="modern">
                            ⌘2
                        </Badge>
                        <ChevronRight size={16} className="text-fg-quaternary" />
                    </div>
                ),
            },
            {
                label: "Boltshift",
                href: "#",
                icon: () => <Avatar src="https://www.untitledui.com/logos/images/Boltshift.jpg" className="mr-2 size-5" />,
                badge: (
                    <div className="flex items-center gap-3">
                        <Badge size="sm" type="modern">
                            ⌘3
                        </Badge>
                        <ChevronRight size={16} className="text-fg-quaternary" />
                    </div>
                ),
            },
            {
                label: "Sisyphus",
                href: "#",
                icon: () => <Avatar src="https://www.untitledui.com/logos/images/Sisyphus.jpg" className="mr-2 size-5" />,
                badge: (
                    <div className="flex items-center gap-3">
                        <Badge size="sm" type="modern">
                            ⌘4
                        </Badge>
                        <ChevronRight size={16} className="text-fg-quaternary" />
                    </div>
                ),
            },
        ],
    },
];

export const SidebarNavigationSimpleDemo = () => (
    <SidebarNavigationSimple
        items={navItemsSimple}
        footerItems={[
            {
                label: "Settings",
                href: "/settings",
                icon: Settings01,
            },
            {
                label: "Support",
                href: "/support",
                icon: MessageChatCircle,
                badge: (
                    <BadgeWithDot color="success" type="modern" size="sm">
                        Online
                    </BadgeWithDot>
                ),
            },
            {
                label: "Open in browser",
                href: "https://www.untitledui.com/",
                icon: LayoutAlt01,
            },
        ]}
        featureCard={
            <FeaturedCardProgressBar
                title="Used space"
                description="Your team has used 80% of your available space. Need more?"
                confirmLabel="Upgrade plan"
                progress={80}
                className="hidden md:flex"
                onDismiss={() => {}}
                onConfirm={() => {}}
            />
        }
    />
);

export const SidebarNavigationDualTierDemo = () => (
    <SidebarNavigationDualTier
        items={navItemsDualTier}
        footerItems={[
            {
                label: "Support",
                href: "/support",
                icon: LifeBuoy01,
            },
            {
                label: "Settings",
                href: "/settings",
                icon: Settings01,
            },
        ]}
        featureCard={
            <FeaturedCardProgressCircle
                title="Used space"
                description="Your team has used 80% of your available space. Need more?"
                confirmLabel="Upgrade plan"
                progress={80}
                className="hidden lg:flex"
                onDismiss={() => {}}
                onConfirm={() => {}}
            />
        }
    />
);

export const SidebarNavigationSlimDemo = () => (
    <SidebarNavigationSlim
        items={navItemsDualTier}
        footerItems={[
            {
                label: "Support",
                href: "/support",
                icon: LifeBuoy01,
            },
            {
                label: "Settings",
                href: "/settings",
                icon: Settings01,
            },
        ]}
    />
);

export const SidebarSectionDividersDemo = () => <SidebarNavigationSectionDividers activeUrl="/" items={navItemsWithDividers} />;

export const SidebarNavigationSectionsSubheadingsDemo = () => <SidebarNavigationSectionsSubheadings activeUrl="/" items={navItemsWithSectionsSubheadings} />;
