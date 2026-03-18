"use client";

import { Bell01, SearchLg, Settings01, Zap } from "@untitledui/icons";
import { NavButton } from "@/components/application/app-navigation/base-components/nav-button";
import { HeaderNavigationBase } from "@/components/application/app-navigation/header-navigation";
import { Button } from "@/components/base/buttons/button";
import { DropdownAccountCardSM } from "@/components/base/dropdown/dropdown-account-card-sm";
import { DropdownAvatar } from "@/components/base/dropdown/dropdown-avatar";

const subItems = [
    { label: "Overview", href: "/dashboard/overview" },
    { label: "Notifications", href: "/dashboard/notifications" },
    { label: "Analytics", href: "/dashboard/analytics" },
    { label: "Saved reports", href: "/dashboard/saved-reports" },
    { label: "Scheduled reports", href: "/dashboard/scheduled-reports" },
    { label: "User reports", href: "/dashboard/user-reports" },
];

const items = [
    { label: "Home", href: "/" },
    { label: "Dashboard", href: "/dashboard", items: subItems },
    { label: "Projects", href: "/projects" },
    { label: "Tasks", href: "/tasks" },
    { label: "Reporting", href: "/reporting" },
    { label: "Users", href: "/users" },
];

const simpleItems = [
    { label: "Home", href: "/" },
    { label: "Dashboard", href: "/dashboard" },
    { label: "Projects", href: "/projects" },
    { label: "Tasks", href: "/tasks" },
    { label: "Reporting", href: "/reporting" },
    { label: "Users", href: "/users" },
];

export const HeaderNavigationSimpleDemo = () => <HeaderNavigationBase activeUrl="/dashboard" items={simpleItems} />;

export const HeaderNavigationDualTierDemo = () => (
    <HeaderNavigationBase
        activeUrl="/dashboard"
        items={items}
        actions={
            <>
                <Button iconLeading={Zap} color="secondary" size="sm">
                    Upgrade now
                </Button>
                <div className="flex gap-0.5">
                    <NavButton icon={Settings01} label="Settings" href="/settings-01" tooltipPlacement="bottom" />
                    <div className="relative">
                        <NavButton icon={Bell01} label="Notifications" href="/notifications-01" tooltipPlacement="bottom" />
                        <div className="absolute -top-0.25 -right-0.25 flex size-3.5 items-center justify-center rounded-full bg-fg-error-primary text-[10px] font-bold text-white">
                            2
                        </div>
                    </div>
                </div>
                <DropdownAvatar />
            </>
        }
    />
);

export const HeaderNavigationTabsDemo = () => (
    <HeaderNavigationBase
        activeUrl="/dashboard"
        items={items}
        secondaryType="tabs"
        actions={
            <>
                <div className="flex gap-0.5">
                    <NavButton icon={SearchLg} label="Search" href="/search" tooltipPlacement="bottom" />
                    <div className="relative">
                        <NavButton icon={Bell01} label="Notifications" href="/notifications-01" tooltipPlacement="bottom" />
                        <div className="absolute -top-0.25 -right-0.25 flex size-3.5 items-center justify-center rounded-full bg-fg-error-primary text-[10px] font-bold text-white">
                            2
                        </div>
                    </div>
                </div>
                <DropdownAccountCardSM />
            </>
        }
    />
);

export const HeaderNavigationCenteredDemo = () => (
    <HeaderNavigationBase
        activeUrl="/dashboard"
        items={items}
        subItems={subItems}
        centered
        actions={
            <div className="flex items-center gap-3">
                <Button color="secondary" size="sm">
                    Sign in
                </Button>
                <Button size="sm">Get PRO</Button>
            </div>
        }
    />
);
