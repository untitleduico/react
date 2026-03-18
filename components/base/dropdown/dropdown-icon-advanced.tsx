"use client";

import { useState } from "react";
import { ArrowNarrowLeft, ArrowNarrowRight, Code02, Copy01, Cube01, Download01, Edit04, RefreshCcw02, Scissors01, Star01 } from "@untitledui/icons";
import type { Selection } from "react-aria-components";
import { SubmenuTrigger } from "react-aria-components";
import { Dropdown } from "@/components/base/dropdown/dropdown";
import { cx } from "@/utils/cx";

const StatusDot = ({ status }: { status: "online" | "offline" }) => (
    <span className="mr-2 inline-flex shrink-0 items-center justify-center p-[5px]">
        <span className={cx("inline-block size-1.5 rounded-full", status === "online" ? "bg-fg-success-secondary" : "bg-utility-neutral-300")} />
    </span>
);

export const DropdownIconAdvanced = () => {
    const [viewOptions, setViewOptions] = useState<Selection>(new Set(["show-bookmarks"]));

    return (
        <Dropdown.Root>
            <Dropdown.DotsButton />

            <Dropdown.Popover className="w-60">
                <Dropdown.Menu selectionMode="none">
                    <Dropdown.Section>
                        <Dropdown.Item icon={ArrowNarrowLeft}>Back</Dropdown.Item>
                        <Dropdown.Item icon={ArrowNarrowRight}>Forward</Dropdown.Item>
                        <Dropdown.Item addon="⌘R" icon={RefreshCcw02}>
                            Reload
                        </Dropdown.Item>
                    </Dropdown.Section>
                    <Dropdown.Section>
                        <Dropdown.Item icon={Edit04}>Edit page</Dropdown.Item>
                        <Dropdown.Item icon={Star01}>Add to favorites</Dropdown.Item>
                    </Dropdown.Section>

                    <Dropdown.Separator />

                    <Dropdown.Section selectionMode="multiple" selectedKeys={viewOptions} onSelectionChange={setViewOptions}>
                        <Dropdown.Item id="show-bookmarks">Show bookmarks</Dropdown.Item>
                        <Dropdown.Item id="show-urls">Show full URLs</Dropdown.Item>
                    </Dropdown.Section>

                    <Dropdown.Separator />

                    <Dropdown.Section>
                        <Dropdown.Item id="olivia" icon={() => <StatusDot status="online" />}>
                            Olivia Rhye
                        </Dropdown.Item>
                        <Dropdown.Item id="sienna" icon={() => <StatusDot status="offline" />}>
                            Sienna Hewitt
                        </Dropdown.Item>
                    </Dropdown.Section>
                    <Dropdown.Separator />

                    <Dropdown.Section>
                        <SubmenuTrigger>
                            <Dropdown.Item icon={Cube01}>More tools</Dropdown.Item>
                            <Dropdown.Popover placement="right top" offset={-6} className="w-50">
                                <Dropdown.Menu selectionMode="none">
                                    <SubmenuTrigger>
                                        <Dropdown.Item icon={Download01}>Save as</Dropdown.Item>
                                        <Dropdown.Popover placement="right top" offset={-6} className="w-50">
                                            <Dropdown.Menu selectionMode="none">
                                                <Dropdown.Item>PDF</Dropdown.Item>
                                                <Dropdown.Item>HTML</Dropdown.Item>
                                                <Dropdown.Item>Markdown</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown.Popover>
                                    </SubmenuTrigger>
                                    <Dropdown.Item addon="⌘X" icon={Scissors01}>
                                        Cut
                                    </Dropdown.Item>
                                    <Dropdown.Item addon="⌘C" icon={Copy01}>
                                        Copy
                                    </Dropdown.Item>

                                    <Dropdown.Separator />

                                    <SubmenuTrigger>
                                        <Dropdown.Item icon={Code02}>Developer</Dropdown.Item>
                                        <Dropdown.Popover placement="right top" offset={-6} className="w-50">
                                            <Dropdown.Menu selectionMode="none">
                                                <Dropdown.Item>View source</Dropdown.Item>
                                                <Dropdown.Item>Developer tools</Dropdown.Item>
                                                <Dropdown.Item>Inspect elements</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown.Popover>
                                    </SubmenuTrigger>
                                </Dropdown.Menu>
                            </Dropdown.Popover>
                        </SubmenuTrigger>
                    </Dropdown.Section>
                </Dropdown.Menu>
            </Dropdown.Popover>
        </Dropdown.Root>
    );
};
