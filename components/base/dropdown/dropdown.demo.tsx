"use client";

import { ChevronDown, Container, HelpCircle, LayersTwo01, LogOut01, Settings01, User01 } from "@untitledui/icons";
import { Button as AriaButton } from "react-aria-components";
import { Avatar } from "@/components/base/avatar/avatar";
import { AvatarLabelGroup } from "@/components/base/avatar/avatar-label-group";
import { Button } from "@/components/base/buttons/button";
import { Dropdown } from "@/components/base/dropdown/dropdown";
import { cx } from "@/utils/cx";

export const DropdownButton = () => (
    <Dropdown.Root>
        <Button className="group" color="secondary" iconTrailing={ChevronDown}>
            Account
        </Button>

        <Dropdown.Popover>
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
                <Dropdown.Section>
                    <Dropdown.Item addon="⌘K->P" icon={User01}>
                        View profile
                    </Dropdown.Item>
                    <Dropdown.Item addon="⌘S" icon={Settings01}>
                        Settings
                    </Dropdown.Item>
                </Dropdown.Section>
                <Dropdown.Separator />
                <Dropdown.Section>
                    <Dropdown.Item icon={LayersTwo01}>Changelog</Dropdown.Item>
                    <Dropdown.Item icon={HelpCircle}>Support</Dropdown.Item>
                    <Dropdown.Item icon={Container}>API</Dropdown.Item>
                </Dropdown.Section>
                <Dropdown.Separator />
                <Dropdown.Section>
                    <Dropdown.Item addon="⌥⇧Q" icon={LogOut01}>
                        Log out
                    </Dropdown.Item>
                </Dropdown.Section>
            </Dropdown.Menu>
        </Dropdown.Popover>
    </Dropdown.Root>
);

export const DropdownIcon = () => (
    <Dropdown.Root>
        <Dropdown.DotsButton />

        <Dropdown.Popover>
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
                <Dropdown.Section>
                    <Dropdown.Item addon="⌘K->P" icon={User01}>
                        View profile
                    </Dropdown.Item>
                    <Dropdown.Item addon="⌘S" icon={Settings01}>
                        Settings
                    </Dropdown.Item>
                </Dropdown.Section>
                <Dropdown.Separator />
                <Dropdown.Section>
                    <Dropdown.Item icon={LayersTwo01}>Changelog</Dropdown.Item>
                    <Dropdown.Item icon={HelpCircle}>Support</Dropdown.Item>
                    <Dropdown.Item icon={Container}>API</Dropdown.Item>
                </Dropdown.Section>
                <Dropdown.Separator />
                <Dropdown.Section>
                    <Dropdown.Item addon="⌥⇧Q" icon={LogOut01}>
                        Log out
                    </Dropdown.Item>
                </Dropdown.Section>
            </Dropdown.Menu>
        </Dropdown.Popover>
    </Dropdown.Root>
);

export const DropdownAvatar = () => (
    <Dropdown.Root>
        <AriaButton
            className={({ isPressed, isFocusVisible }) =>
                cx("group relative inline-flex cursor-pointer rounded-full outline-focus-ring", (isPressed || isFocusVisible) && "outline-2 outline-offset-2")
            }
        >
            <Avatar alt="Olivia Rhye" src="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80" size="md" />
        </AriaButton>

        <Dropdown.Popover>
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
                <Dropdown.Section>
                    <Dropdown.Item addon="⌘K->P" icon={User01}>
                        View profile
                    </Dropdown.Item>
                    <Dropdown.Item addon="⌘S" icon={Settings01}>
                        Settings
                    </Dropdown.Item>
                </Dropdown.Section>
                <Dropdown.Separator />
                <Dropdown.Section>
                    <Dropdown.Item icon={LayersTwo01}>Changelog</Dropdown.Item>
                    <Dropdown.Item icon={HelpCircle}>Support</Dropdown.Item>
                    <Dropdown.Item icon={Container}>API</Dropdown.Item>
                </Dropdown.Section>
                <Dropdown.Separator />
                <Dropdown.Section>
                    <Dropdown.Item addon="⌥⇧Q" icon={LogOut01}>
                        Log out
                    </Dropdown.Item>
                </Dropdown.Section>
            </Dropdown.Menu>
        </Dropdown.Popover>
    </Dropdown.Root>
);
