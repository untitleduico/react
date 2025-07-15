"use client";

import { Zap } from "@untitledui/icons";
import { HeaderNavigationBase } from "@/components/application/app-navigation/header-navigation";
import { Button } from "@/components/base/buttons/button";

export const HeaderNavigationSimpleDemo = () => (
    <HeaderNavigationBase
        items={[
            { label: "Home", href: "/" },
            {
                label: "Dashboard",
                href: "/dashboard",
                items: [
                    { label: "Overview", href: "#", current: true },
                    { label: "Notifications", href: "#" },
                    { label: "Analytics", href: "#" },
                    { label: "Saved reports", href: "#" },
                    { label: "Scheduled reports", href: "#" },
                    { label: "User reports", href: "#" },
                ],
            },
            { label: "Projects", href: "/projects" },
            { label: "Tasks", href: "/tasks" },
            { label: "Reporting", href: "/reporting" },
            { label: "Users", href: "/users" },
        ]}
    />
);

export const HeaderNavigationDualTierDemo = () => (
    <HeaderNavigationBase
        items={[
            { label: "Home", href: "/" },
            {
                label: "Dashboard",
                href: "/dashboard",
                current: true,
                items: [
                    { label: "Overview", href: "#", current: true },
                    { label: "Notifications", href: "#" },
                    { label: "Analytics", href: "#" },
                    { label: "Saved reports", href: "#" },
                    { label: "Scheduled reports", href: "#" },
                    { label: "User reports", href: "#" },
                ],
            },
            { label: "Projects", href: "/projects" },
            { label: "Tasks", href: "/tasks" },
            { label: "Reporting", href: "/reporting" },
            { label: "Users", href: "/users" },
        ]}
        trailingContent={
            <Button iconLeading={Zap} color="secondary" size="sm">
                Upgrade now
            </Button>
        }
    />
);
