"use client";

import { Button as AriaButton, SubmenuTrigger } from "react-aria-components";
import { Dropdown } from "@/components/base/dropdown/dropdown";

export const DropdownContextMenuSimple = () => (
    <Dropdown.Root trigger="contextMenu">
        <AriaButton
            aria-label="Open context menu"
            className="flex h-40 w-full max-w-xs cursor-default items-center justify-center rounded-xl border border-dashed border-secondary bg-primary px-6 text-center text-sm text-tertiary outline-focus-ring select-none focus-visible:outline-2 focus-visible:outline-offset-2"
        >
            Right-click anywhere in this area
        </AriaButton>

        <Dropdown.Popover placement="bottom left" className="w-54">
            <Dropdown.Menu>
                <Dropdown.Section>
                    <Dropdown.Item addon="⌘X">Cut</Dropdown.Item>
                    <Dropdown.Item addon="⌘C">Copy</Dropdown.Item>
                    <Dropdown.Item addon="⌘V">Paste</Dropdown.Item>
                </Dropdown.Section>
                <Dropdown.Separator />
                <Dropdown.Section>
                    <Dropdown.Item>Edit</Dropdown.Item>
                    <Dropdown.Item>Duplicate</Dropdown.Item>
                    <Dropdown.Item>Delete</Dropdown.Item>
                </Dropdown.Section>
                <Dropdown.Separator />
                <Dropdown.Section>
                    <SubmenuTrigger>
                        <Dropdown.Item>View details</Dropdown.Item>
                        <Dropdown.Popover placement="right top" offset={-6} className="w-50">
                            <Dropdown.Menu>
                                <Dropdown.Item>Share</Dropdown.Item>
                                <Dropdown.Item>Save as</Dropdown.Item>
                                <Dropdown.Item>Archive</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown.Popover>
                    </SubmenuTrigger>
                </Dropdown.Section>
            </Dropdown.Menu>
        </Dropdown.Popover>
    </Dropdown.Root>
);
