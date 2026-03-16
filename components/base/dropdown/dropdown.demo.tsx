"use client";

import { useState } from "react";
import {
    ArrowNarrowLeft,
    ArrowNarrowRight,
    ChevronDown,
    ChevronSelectorVertical,
    Code02,
    Container,
    Copy01,
    Cube01,
    Download01,
    Edit04,
    HelpCircle,
    LayersTwo01,
    LogOut01,
    Moon01,
    Plus,
    RefreshCcw02,
    Scissors01,
    SearchLg,
    Settings01,
    Star01,
    TerminalSquare,
    Trash01,
    User01,
} from "@untitledui/icons";
import type { Selection } from "react-aria-components";
import { Button as AriaButton, MenuItem as AriaMenuItem, Autocomplete, SearchField, SubmenuTrigger, useFilter } from "react-aria-components";
import { Avatar } from "@/components/base/avatar/avatar";
import { Button } from "@/components/base/buttons/button";
import { Dropdown } from "@/components/base/dropdown/dropdown";
import {
    BoltIcon,
    ChatGPTIcon,
    ClaudeIcon,
    CursorIcon,
    FigmaIcon,
    GeminiIcon,
    GitHubIcon,
    LovableIcon,
    PerplexityIcon,
    V0Icon,
} from "@/components/foundations/integration-icons";
import { cx } from "@/utils/cx";
import { AvatarLabelGroup } from "../avatar/avatar-label-group";
import { InputBase } from "../input/input";
import { RadioButtonBase } from "../radio-buttons/radio-buttons";

export const DropdownButtonSimple = () => (
    <Dropdown.Root>
        <Button size="sm" color="secondary" iconTrailing={ChevronDown} className="group *:data-icon:size-4 *:data-icon:stroke-[2.25px]!">
            Account
        </Button>

        <Dropdown.Popover className="w-54">
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

const StatusDot = ({ status }: { status: "online" | "offline" }) => (
    <span className="mr-2 inline-flex shrink-0 items-center justify-center p-[5px]">
        <span className={cx("inline-block size-1.5 rounded-full", status === "online" ? "bg-fg-success-secondary" : "bg-utility-neutral-300")} />
    </span>
);

export const DropdownButtonAdvanced = () => {
    const [viewOptions, setViewOptions] = useState<Selection>(new Set(["show-bookmarks"]));

    return (
        <Dropdown.Root>
            <Button
                size="sm"
                className="group"
                color="secondary"
                iconTrailing={(props) => <ChevronDown data-icon="trailing" {...props} className="size-4! stroke-[2.25px]!" />}
            >
                Actions
            </Button>

            <Dropdown.Popover className="w-60">
                <Dropdown.Menu selectionMode="none">
                    <Dropdown.Section>
                        <Dropdown.Item icon={ArrowNarrowLeft}>Back</Dropdown.Item>
                        <Dropdown.Item icon={ArrowNarrowRight}>Forward</Dropdown.Item>
                        <Dropdown.Item addon="⌘R" icon={RefreshCcw02}>
                            Reload
                        </Dropdown.Item>
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

const permissions = [
    { id: "owner", label: "Owner" },
    { id: "can-edit", label: "Can edit" },
    { id: "can-view", label: "Can view" },
];

export const DropdownButtonLink = () => {
    const [selectedPermission, setSelectedPermission] = useState<string>(permissions[1].id);

    return (
        <Dropdown.Root>
            <AriaButton
                className={({ isPressed, isFocusVisible }) =>
                    cx(
                        "flex cursor-pointer items-center gap-1 rounded text-sm font-semibold text-tertiary outline-0 outline-offset-2 outline-focus-ring",
                        (isPressed || isFocusVisible) && "outline-2",
                    )
                }
            >
                {permissions.find((permission) => permission.id === selectedPermission.toString())?.label}
                <ChevronDown className="size-3 shrink-0 stroke-3 text-fg-quaternary" />
            </AriaButton>

            <Dropdown.Popover className="w-40">
                <Dropdown.Menu>
                    <Dropdown.Section
                        selectionMode="single"
                        selectedKeys={[selectedPermission]}
                        onSelectionChange={(keys) => setSelectedPermission(typeof keys === "string" ? keys : (keys.keys().toArray()[0] as string))}
                    >
                        {permissions.map((permission) => (
                            <Dropdown.Item key={permission.id} id={permission.id}>
                                {permission.label}
                            </Dropdown.Item>
                        ))}
                    </Dropdown.Section>
                    <Dropdown.Separator />
                    <Dropdown.Section>
                        <Dropdown.Item icon={Trash01}>Delete</Dropdown.Item>
                    </Dropdown.Section>
                </Dropdown.Menu>
            </Dropdown.Popover>
        </Dropdown.Root>
    );
};

export const DropdownIconSimple = () => (
    <Dropdown.Root>
        <Dropdown.DotsButton />

        <Dropdown.Popover className="w-54">
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

export const DropdownSearchSimple = () => {
    const [selectedUsers, setSelectedUsers] = useState<Selection>(new Set(["olivia", "phoenix"]));
    let { contains } = useFilter({ sensitivity: "base" });

    return (
        <Dropdown.Root>
            <Button
                size="sm"
                className="group"
                color="secondary"
                iconTrailing={(props) => <ChevronDown data-icon="trailing" {...props} className="size-4! stroke-[2.25px]!" />}
            >
                Manage access
            </Button>

            <Dropdown.Popover className="w-60">
                <Autocomplete filter={contains}>
                    <SearchField className="flex gap-3 border-b border-secondary p-3">
                        <InputBase size="md" placeholder="Search" icon={SearchLg} />
                    </SearchField>
                    <Dropdown.Menu selectionMode="multiple" selectedKeys={selectedUsers} onSelectionChange={setSelectedUsers}>
                        <Dropdown.Item id="olivia" textValue="Olivia Rhye" selectionIndicator="checkbox">
                            Olivia Rhye
                        </Dropdown.Item>
                        <Dropdown.Item id="phoenix" textValue="Phoenix Baker" selectionIndicator="checkbox">
                            Phoenix Baker
                        </Dropdown.Item>
                        <Dropdown.Item id="lana" textValue="Lana Steiner" selectionIndicator="checkbox">
                            Lana Steiner
                        </Dropdown.Item>
                        <Dropdown.Item id="demi" textValue="Demi Wilkinson" selectionIndicator="checkbox">
                            Demi Wilkinson
                        </Dropdown.Item>
                        <Dropdown.Item id="candice" textValue="Candice Wu" selectionIndicator="checkbox">
                            Candice Wu
                        </Dropdown.Item>
                        <Dropdown.Item id="natali" textValue="Natali Craig" selectionIndicator="checkbox">
                            Natali Craig
                        </Dropdown.Item>
                        <Dropdown.Item id="drew" textValue="Drew Cano" selectionIndicator="checkbox">
                            Drew Cano
                        </Dropdown.Item>
                        <Dropdown.Item id="orlando" textValue="Orlando Diggs" selectionIndicator="checkbox">
                            Orlando Diggs
                        </Dropdown.Item>
                        <Dropdown.Item id="andi" textValue="Andi Lane" selectionIndicator="checkbox">
                            Andi Lane
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Autocomplete>
            </Dropdown.Popover>
        </Dropdown.Root>
    );
};

export const DropdownSearchAdvanced = () => {
    const [selectedUsers, setSelectedUsers] = useState<Selection>(new Set(["untitledui", "shutterframe"]));
    let { contains } = useFilter({ sensitivity: "base" });

    return (
        <Dropdown.Root>
            <Button
                size="sm"
                className="group"
                color="secondary"
                iconTrailing={(props) => <ChevronDown data-icon="trailing" {...props} className="size-4! stroke-[2.25px]!" />}
            >
                Manage access
            </Button>

            <Dropdown.Popover className="w-60">
                <Autocomplete filter={contains}>
                    <SearchField className="flex gap-3 border-b border-secondary p-3">
                        <InputBase size="md" placeholder="Search" icon={SearchLg} />
                    </SearchField>
                    <Dropdown.Menu selectionMode="multiple" selectedKeys={selectedUsers} onSelectionChange={setSelectedUsers}>
                        <SubmenuTrigger>
                            <Dropdown.Item id="untitledui" textValue="Olivia Rhye" selectionIndicator="checkbox">
                                Untitled UI
                            </Dropdown.Item>
                            <Dropdown.Popover placement="right top" offset={-6} className="w-50">
                                <Dropdown.Menu selectionMode="multiple">
                                    <Dropdown.Item
                                        id="olivia"
                                        selectionIndicator="checkbox"
                                        avatarUrl="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80"
                                    >
                                        Olivia Rhye
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                        id="phoenix"
                                        selectionIndicator="checkbox"
                                        avatarUrl="https://www.untitledui.com/images/avatars/phoenix-baker?fm=webp&q=80"
                                    >
                                        Phoenix Baker
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                        id="lana"
                                        selectionIndicator="checkbox"
                                        avatarUrl="https://www.untitledui.com/images/avatars/lana-steiner?fm=webp&q=80"
                                    >
                                        Lana Steiner
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                        id="demi"
                                        selectionIndicator="checkbox"
                                        avatarUrl="https://www.untitledui.com/images/avatars/demi-wilkinson?fm=webp&q=80"
                                    >
                                        Demi Wilkinson
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown.Popover>
                        </SubmenuTrigger>

                        <Dropdown.Item id="shutterframe" textValue="Phoenix Baker" selectionIndicator="checkbox">
                            Shutterframe
                        </Dropdown.Item>
                        <Dropdown.Item id="warpspeed" textValue="Lana Steiner" selectionIndicator="checkbox">
                            Warpspeed
                        </Dropdown.Item>
                        <Dropdown.Item id="contrastai" textValue="Demi Wilkinson" selectionIndicator="checkbox">
                            ContrastAI
                        </Dropdown.Item>
                        <Dropdown.Item id="launchsimple" textValue="Candice Wu" selectionIndicator="checkbox">
                            LaunchSimple
                        </Dropdown.Item>
                        <Dropdown.Item id="elasticware" textValue="Natali Craig" selectionIndicator="checkbox">
                            Elasticware
                        </Dropdown.Item>
                    </Dropdown.Menu>
                    <div className="flex flex-col gap-3 border-t border-secondary p-3">
                        <Button size="xs" color="secondary" iconLeading={Plus}>
                            Create team
                        </Button>
                    </div>
                </Autocomplete>
            </Dropdown.Popover>
        </Dropdown.Root>
    );
};

export const DropdownIntegration = () => {
    return (
        <Dropdown.Root>
            <Button
                size="sm"
                className="group"
                color="secondary"
                iconTrailing={(props) => <ChevronDown data-icon="trailing" {...props} className="size-4! stroke-[2.25px]!" />}
            >
                Copy
            </Button>

            <Dropdown.Popover className="w-54">
                <Dropdown.Menu selectionMode="none">
                    <Dropdown.Section>
                        <Dropdown.Item icon={TerminalSquare}>View as markdown</Dropdown.Item>
                        <Dropdown.Item icon={Copy01}>Copy as markdown</Dropdown.Item>
                    </Dropdown.Section>

                    <Dropdown.Separator />

                    <Dropdown.Section>
                        <Dropdown.Item icon={() => <V0Icon grayscale className="mr-2 size-4 shrink-0" />}>Open in v0</Dropdown.Item>
                        <Dropdown.Item icon={() => <ClaudeIcon grayscale className="mr-2 size-4 shrink-0" />}>Open in Claude</Dropdown.Item>
                        <Dropdown.Item icon={() => <BoltIcon grayscale className="mr-2 size-4 shrink-0" />}>Open in Bolt</Dropdown.Item>
                        <Dropdown.Item icon={() => <LovableIcon grayscale className="mr-2 size-4 shrink-0" />}>Open in Lovable</Dropdown.Item>
                        <Dropdown.Item icon={() => <CursorIcon grayscale className="mr-2 size-4 shrink-0" />}>Open in Cursor</Dropdown.Item>
                        <Dropdown.Item icon={() => <ChatGPTIcon grayscale className="mr-2 size-4 shrink-0" />}>Open in ChatGPT</Dropdown.Item>
                        <Dropdown.Item icon={() => <PerplexityIcon grayscale className="mr-2 size-4 shrink-0" />}>Open in Perplexity</Dropdown.Item>
                        <Dropdown.Item icon={() => <GeminiIcon grayscale className="mr-2 size-4 shrink-0" />}>Open in Gemini</Dropdown.Item>
                    </Dropdown.Section>

                    <Dropdown.Separator />

                    <Dropdown.Section>
                        <Dropdown.Item icon={() => <FigmaIcon grayscale className="mr-2 size-4 shrink-0" />}>Open in Figma</Dropdown.Item>
                        <Dropdown.Item icon={() => <GitHubIcon grayscale className="mr-2 size-4 shrink-0" />}>Create GitHub Gist</Dropdown.Item>
                    </Dropdown.Section>
                </Dropdown.Menu>
            </Dropdown.Popover>
        </Dropdown.Root>
    );
};

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

export const DropdownAccountCardXS = () => {
    const [selectedAccount, setSelectedAccount] = useState<Selection>(new Set(["olivia"]));
    const [selectedTheme, setSelectedTheme] = useState<Selection>(new Set(["light-mode"]));

    return (
        <Dropdown.Root>
            <AriaButton
                className={({ isPressed, isFocused }) =>
                    cx(
                        "relative flex w-38 cursor-pointer items-center gap-1.5 rounded-lg bg-primary_alt p-2 text-left inset-ring-1 inset-ring-border-secondary outline-offset-2 outline-focus-ring",
                        (isPressed || isFocused) && "outline-2",
                    )
                }
            >
                <Avatar size="xs" src="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80" className="size-5" />

                <p className="text-sm font-semibold text-primary">Olivia Rhye</p>

                <div className="absolute top-1 right-1 flex size-7 items-center justify-center rounded-md">
                    <ChevronDown className="size-4 shrink-0 stroke-[2.25px] text-fg-quaternary" />
                </div>
            </AriaButton>

            <Dropdown.Popover className="w-50">
                <Dropdown.Menu>
                    <Dropdown.Item icon={Settings01} addon="⌘S">
                        Settings
                    </Dropdown.Item>
                    <Dropdown.Section selectionMode="single" selectedKeys={selectedTheme} onSelectionChange={setSelectedTheme}>
                        <Dropdown.Item id="dark-mode" icon={Moon01} selectionIndicator="toggle">
                            Dark mode
                        </Dropdown.Item>
                    </Dropdown.Section>

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

                    <Dropdown.Separator />

                    <SubmenuTrigger>
                        <Dropdown.Item icon={LogOut01}>Sign out</Dropdown.Item>

                        <Dropdown.Popover placement="right top" offset={-6}>
                            <Dropdown.Menu>
                                <Dropdown.Item>Current device</Dropdown.Item>
                                <Dropdown.Item>All devices</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown.Popover>
                    </SubmenuTrigger>
                </Dropdown.Menu>
            </Dropdown.Popover>
        </Dropdown.Root>
    );
};

export const DropdownAccountCardSM = () => {
    const [selectedAccount, setSelectedAccount] = useState<Selection>(new Set(["olivia"]));
    const [selectedTheme, setSelectedTheme] = useState<Selection>(new Set(["light-mode"]));

    return (
        <Dropdown.Root>
            <AriaButton
                className={({ isPressed, isFocused }) =>
                    cx(
                        "relative flex w-42 cursor-pointer items-center gap-2 rounded-lg bg-primary_alt p-1.5 text-left inset-ring-1 inset-ring-border-secondary outline-offset-2 outline-focus-ring",
                        (isPressed || isFocused) && "outline-2",
                    )
                }
            >
                <Avatar border size="sm" src="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80" status="online" />

                <p className="text-sm font-semibold text-primary">Olivia Rhye</p>

                <div className="absolute top-2 right-2 flex size-7 items-center justify-center rounded-md">
                    <ChevronDown className="size-4 shrink-0 stroke-[2.25px] text-fg-quaternary" />
                </div>
            </AriaButton>

            <Dropdown.Popover className="w-60">
                <div className="flex flex-col border-b border-secondary px-4 py-3">
                    <p className="text-sm font-semibold text-primary">PRO account</p>
                    <p className="text-sm text-tertiary">olivia@untitledui.com</p>
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

                    <Dropdown.Separator />

                    <SubmenuTrigger>
                        <Dropdown.Item icon={LogOut01}>Sign out</Dropdown.Item>

                        <Dropdown.Popover placement="right top" offset={-6}>
                            <Dropdown.Menu>
                                <Dropdown.Item>Current device</Dropdown.Item>
                                <Dropdown.Item>All devices</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown.Popover>
                    </SubmenuTrigger>
                </Dropdown.Menu>
                <div className="flex justify-between border-t border-secondary px-4 py-3">
                    <span className="truncate text-sm text-quaternary">© Untitled UI</span>
                    <span className="text-sm text-quaternary">v12.6.8</span>
                </div>
            </Dropdown.Popover>
        </Dropdown.Root>
    );
};

export const DropdownAccountCardMD = () => {
    const [selectedAccount, setSelectedAccount] = useState<Selection>(new Set(["untitledui"]));
    const [selectedTheme, setSelectedTheme] = useState<Selection>(new Set(["light-mode"]));

    return (
        <Dropdown.Root>
            <AriaButton
                className={({ isPressed, isFocusVisible }) =>
                    cx(
                        "relative w-60 cursor-pointer rounded-lg bg-primary_alt p-2 text-left inset-ring-1 inset-ring-border-secondary outline-offset-2 outline-focus-ring",
                        (isPressed || isFocusVisible) && "outline-2",
                    )
                }
            >
                <AvatarLabelGroup
                    size="md"
                    src="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80"
                    status="online"
                    title="Olivia Rhye"
                    subtitle="olivia@untitledui.com"
                />

                <div className="absolute top-2 right-2 flex size-7 items-center justify-center rounded-md">
                    <ChevronSelectorVertical className="size-4 shrink-0 stroke-[2.25px] text-fg-quaternary" />
                </div>
            </AriaButton>

            <Dropdown.Popover className="w-60">
                <div className="flex flex-col border-b border-secondary px-4 py-3">
                    <p className="text-sm font-semibold text-primary">PRO account</p>
                    <p className="text-sm text-tertiary">Renews 10 August 2028</p>
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
                        <Dropdown.SectionHeader className="px-4 pt-1.5 pb-0.5 text-xs font-semibold text-brand-secondary">Company</Dropdown.SectionHeader>

                        <Dropdown.Item id="untitledui">Untitled UI</Dropdown.Item>
                        <Dropdown.Item id="sisyphus">Sisyphus Ventures</Dropdown.Item>
                    </Dropdown.Section>

                    <Dropdown.Item icon={Plus}>New company</Dropdown.Item>

                    <Dropdown.Separator />

                    <SubmenuTrigger>
                        <Dropdown.Item icon={LogOut01}>Sign out</Dropdown.Item>

                        <Dropdown.Popover placement="right top" offset={-6}>
                            <Dropdown.Menu>
                                <Dropdown.Item>Current device</Dropdown.Item>
                                <Dropdown.Item>All devices</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown.Popover>
                    </SubmenuTrigger>
                </Dropdown.Menu>
                <div className="flex justify-between border-t border-secondary px-4 py-3">
                    <span className="truncate text-sm text-quaternary">© Untitled UI</span>
                    <span className="text-sm text-quaternary">v12.6.8</span>
                </div>
            </Dropdown.Popover>
        </Dropdown.Root>
    );
};

const accounts = [
    {
        id: "caitlyn",
        name: "Caitlyn King",
        email: "caitlyn@untitledui.com",
        avatar: "https://www.untitledui.com/images/avatars/caitlyn-king?fm=webp&q=80",
        status: "online",
    },
    {
        id: "sienna",
        name: "Sienna Hewitt",
        email: "sienna@untitledui.com",
        avatar: "https://www.untitledui.com/images/avatars/transparent/sienna-hewitt?bg=%23E0E0E0",
        status: "online",
    },
];

export const DropdownAccountBreadcrumb = () => {
    const [selectedAccountKey, setSelectedAccountKey] = useState<string>("caitlyn");

    const selectedAccount = accounts.find((account) => account.id === selectedAccountKey);

    return (
        <Dropdown.Root>
            <AriaButton
                className={({ isPressed, isFocusVisible }) =>
                    cx(
                        "flex cursor-pointer items-center gap-1.5 rounded-lg outline-0 outline-offset-2 outline-focus-ring",
                        (isPressed || isFocusVisible) && "outline-2",
                    )
                }
            >
                <div className="flex rounded-lg bg-primary p-0.5 ring-[0.5px] ring-secondary ring-inset">
                    <Avatar size="xs" src={selectedAccount?.avatar} className="shadow-md" contentClassName="rounded-md before:hidden" />
                </div>
                <span className="text-sm font-semibold text-primary">{selectedAccount?.name}</span>

                <ChevronSelectorVertical className="size-3 shrink-0 stroke-3 text-fg-quaternary" />
            </AriaButton>

            <Dropdown.Popover className="w-62" placement="bottom left">
                <Dropdown.Menu
                    disallowEmptySelection
                    selectionMode="single"
                    selectedKeys={[selectedAccountKey]}
                    onSelectionChange={(keys) => setSelectedAccountKey(Array.from(keys).join())}
                    className="flex flex-col gap-1 px-1.5 py-1.5"
                >
                    {accounts.map((account) => (
                        <AriaMenuItem
                            id={account.id}
                            key={account.name}
                            textValue={account.name}
                            className={(state) =>
                                cx(
                                    "relative w-full cursor-pointer rounded-md px-2 py-2 text-left outline-focus-ring transition duration-100 ease-linear hover:bg-primary_hover focus:z-10 focus-visible:outline-2 focus-visible:outline-offset-2",
                                    state.isSelected && "bg-primary_hover",
                                )
                            }
                        >
                            {({ isSelected }) => (
                                <>
                                    <figure className="group flex min-w-0 flex-1 items-center gap-1.5">
                                        <div className="flex rounded-[10px] bg-primary p-0.5 ring-[0.5px] ring-secondary ring-inset">
                                            <Avatar size="sm" src={account.avatar} className="shadow-md" contentClassName="rounded-lg before:hidden" />
                                        </div>
                                        <figcaption className="min-w-0 flex-1">
                                            <p className="text-sm font-semibold text-primary">{account.name}</p>
                                            <p className="truncate text-sm text-tertiary">{account.email}</p>
                                        </figcaption>
                                    </figure>
                                    <RadioButtonBase isSelected={isSelected} className="absolute top-2 right-2" />
                                </>
                            )}
                        </AriaMenuItem>
                    ))}
                </Dropdown.Menu>
            </Dropdown.Popover>
        </Dropdown.Root>
    );
};
