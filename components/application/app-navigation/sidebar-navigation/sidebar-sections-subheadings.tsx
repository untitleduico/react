"use client";

import { SearchLg } from "@untitledui/icons";
import { ButtonUtility } from "@/components/base/buttons/button-utility";
import { UntitledLogo } from "@/components/foundations/logo/untitledui-logo";
import { MobileNavigationHeader } from "../base-components/mobile-header";
import { NavAccountCard } from "../base-components/nav-account-card";
import { NavItemBase } from "../base-components/nav-item";
import type { NavItemType } from "../config";

interface SidebarNavigationSectionsSubheadingsProps {
    /** URL of the currently active item. */
    activeUrl?: string;
    /** List of items to display. */
    items: Array<{ label: string; items: NavItemType[] }>;
}

export const SidebarNavigationSectionsSubheadings = ({ activeUrl = "/", items }: SidebarNavigationSectionsSubheadingsProps) => {
    const MAIN_SIDEBAR_WIDTH = 276;

    const content = (
        <aside
            style={
                {
                    "--width": `${MAIN_SIDEBAR_WIDTH}px`,
                } as React.CSSProperties
            }
            className="flex h-full w-full max-w-full flex-col justify-between overflow-auto bg-primary pt-4 shadow-xs ring-secondary ring-inset lg:w-(--width) lg:rounded-xl lg:ring-1"
        >
            <div className="flex items-center justify-between gap-5 px-4 lg:pl-5">
                <UntitledLogo className="h-6" />
                <ButtonUtility size="xs" color="tertiary" tooltip="Search" icon={SearchLg} />
            </div>

            <ul className="mt-6 md:mt-5">
                {items.map((group) => (
                    <li key={group.label}>
                        <div className="px-5 pb-1">
                            <p className="text-xs font-bold text-quaternary uppercase">{group.label}</p>
                        </div>
                        <ul className="px-4 pb-5">
                            {group.items.map((item) => (
                                <li key={item.label} className="py-0.25">
                                    <NavItemBase icon={item.icon} href={item.href} badge={item.badge} type="link" current={item.href === activeUrl}>
                                        {item.label}
                                    </NavItemBase>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>

            <div className="mt-auto flex flex-col gap-5 px-2 py-4 lg:gap-6 lg:px-4 lg:py-4">
                <NavAccountCard />
            </div>
        </aside>
    );

    return (
        <>
            {/* Mobile header navigation */}
            <MobileNavigationHeader>{content}</MobileNavigationHeader>

            {/* Desktop sidebar navigation */}
            <div className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:flex lg:py-1 lg:pl-1">{content}</div>

            {/* Placeholder to take up physical space because the real sidebar has `fixed` position. */}
            <div
                style={{
                    paddingLeft: MAIN_SIDEBAR_WIDTH + 4,
                }}
                className="invisible hidden lg:sticky lg:top-0 lg:bottom-0 lg:left-0 lg:block"
            />
        </>
    );
};
