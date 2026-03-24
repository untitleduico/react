"use client";

import { useState } from "react";
import { Container, HelpCircle, LayersTwo01, LogOut01, Moon01, Settings01, User01 } from "@untitledui/icons";
import type { Selection } from "react-aria-components";
import { Button as AriaButton, SubmenuTrigger } from "react-aria-components";
import { Avatar } from "@/components/base/avatar/avatar";
import { Button } from "@/components/base/buttons/button";
import { Dropdown } from "@/components/base/dropdown/dropdown";
import { cx } from "@/utils/cx";
import { AvatarLabelGroup } from "../avatar/avatar-label-group";

export const DropdownAvatar = () => {
    const [selectedTheme, setSelectedTheme] = useState<Selection>(new Set(["light-mode"]));

    return (
        <Dropdown.Root>
            <AriaButton
                className={({ isPressed, isFocusVisible }) =>
                    cx(
                        "group relative inline-flex cursor-pointer rounded-full outline-offset-2 outline-focus-ring",
                        (isPressed || isFocusVisible) && "outline-2",
                    )
                }
            >
                <Avatar alt="Olivia Rhye" src="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80" size="sm" />
            </AriaButton>

            <Dropdown.Popover className="w-60">
                <div className="flex gap-3 border-b border-secondary p-3">
                    <AvatarLabelGroup
                        size="md"
                        src="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80"
                        status="online"
                        title="Olivia Rhye"
                        subtitle="olivia@untitledui.com"
                    />
                </div>
                <Dropdown.Menu>
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

                    <Dropdown.Separator />

                    <Dropdown.Item icon={LayersTwo01} addon="⌘S">
                        Changelog
                    </Dropdown.Item>

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

                    <Dropdown.Item icon={Container}>API</Dropdown.Item>
                </Dropdown.Menu>
                <div className="flex flex-col gap-3 border-t border-secondary p-3">
                    <Button size="xs" color="secondary" iconLeading={LogOut01} className="text-center">
                        Sign out
                    </Button>
                </div>
            </Dropdown.Popover>
        </Dropdown.Root>
    );
};
