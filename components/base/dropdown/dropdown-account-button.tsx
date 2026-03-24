"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, LogOut01, Moon01, Plus, Settings01, User01 } from "@untitledui/icons";
import type { Selection } from "react-aria-components";
import { SubmenuTrigger } from "react-aria-components";
import { Button } from "@/components/base/buttons/button";
import { Dropdown } from "@/components/base/dropdown/dropdown";

export const DropdownAccountButton = () => {
    const [selectedAccount, setSelectedAccount] = useState<Selection>(new Set(["olivia"]));
    const [selectedTheme, setSelectedTheme] = useState<Selection>(new Set(["light-mode"]));

    return (
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

                        <Dropdown.Item id="olivia" avatarUrl="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80" selectionIndicator="radio">
                            Olivia Rhye
                        </Dropdown.Item>
                        <Dropdown.Item id="sienna" avatarUrl="https://www.untitledui.com/images/avatars/sienna-hewitt?fm=webp&q=80" selectionIndicator="radio">
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
    );
};
