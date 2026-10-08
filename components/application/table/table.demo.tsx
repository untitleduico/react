"use client";

import { useEffect, useMemo, useState } from "react";
import { FileIcon } from "@untitledui/file-icons";
import {
    AlertCircle,
    ArrowDown,
    ArrowUp,
    Check,
    ChevronDown,
    Columns03,
    CurrencyDollar,
    Download01,
    DownloadCloud02,
    Edit01,
    Eye,
    EyeOff,
    FilterLines,
    Link03,
    PauseCircle,
    PlayCircle,
    Plus,
    RefreshCw05,
    ReverseLeft,
    SearchLg,
    SwitchHorizontal01,
    Trash01,
    UploadCloud02,
    UsersPlus,
    X,
} from "@untitledui/icons";
import type { Key, Selection, SortDescriptor } from "react-aria-components";
import { Button as AriaButton, Collection as AriaCollection, useAsyncList, useDragAndDrop, useListData } from "react-aria-components";
import { DateRangePicker } from "@/components/application/date-picker/date-range-picker";
import { EmptyState } from "@/components/application/empty-state/empty-state";
import { PaginationCardMinimal, PaginationPageMinimalCenter } from "@/components/application/pagination/pagination";
import { SlideoutMenu } from "@/components/application/slideout-menus/slideout-menu";
import customers from "@/components/application/table/customers.json";
import invoices from "@/components/application/table/invoices.json";
import { Table, TableCard } from "@/components/application/table/table";
import teamMembers from "@/components/application/table/team-members.json";
import uploadedFiles from "@/components/application/table/uploaded-files.json";
import { TabList, Tabs } from "@/components/application/tabs/tabs";
import { Avatar } from "@/components/base/avatar/avatar";
import type { BadgeTypes } from "@/components/base/badges/badge-types";
import { Badge, type BadgeColor, BadgeWithDot, BadgeWithIcon } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { ButtonUtility } from "@/components/base/buttons/button-utility";
import { Dropdown } from "@/components/base/dropdown/dropdown";
import { DropdownIconSimple } from "@/components/base/dropdown/dropdown-icon-simple";
import { Input } from "@/components/base/input/input";
import { ProgressBar } from "@/components/base/progress-indicators/progress-indicators";
import { cx } from "@/utils/cx";

export const Table01DividerLine = () => {
    const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
        column: "status",
        direction: "ascending",
    });

    const sortedItems = useMemo(() => {
        return teamMembers.items.sort((a, b) => {
            const first = a[sortDescriptor.column as keyof typeof a];
            const second = b[sortDescriptor.column as keyof typeof b];

            // Compare numbers or booleans
            if ((typeof first === "number" && typeof second === "number") || (typeof first === "boolean" && typeof second === "boolean")) {
                return sortDescriptor.direction === "descending" ? second - first : first - second;
            }

            // Compare strings
            if (typeof first === "string" && typeof second === "string") {
                let cmp = first.localeCompare(second);
                if (sortDescriptor.direction === "descending") {
                    cmp *= -1;
                }
                return cmp;
            }

            return 0;
        });
    }, [sortDescriptor]);

    return (
        <TableCard.Root>
            <TableCard.Header
                title="Team members"
                badge="100 users"
                contentTrailing={
                    <div className="absolute top-5 right-4 md:right-6">
                        <DropdownIconSimple />
                    </div>
                }
            />
            <Table aria-label="Team members" selectionMode="multiple" sortDescriptor={sortDescriptor} onSortChange={setSortDescriptor}>
                <Table.Header>
                    <Table.Head id="name" label="Name" isRowHeader allowsSorting className="w-full max-w-1/4" />
                    <Table.Head id="status" label="Status" allowsSorting />
                    <Table.Head id="role" label="Role" allowsSorting tooltip="This is a tooltip" />
                    <Table.Head id="email" label="Email address" allowsSorting className="md:hidden xl:table-cell" />
                    <Table.Head id="teams" label="Teams" />
                    <Table.Head id="actions" />
                </Table.Header>

                <Table.Body items={sortedItems}>
                    {(item) => (
                        <Table.Row id={item.username}>
                            <Table.Cell>
                                <div className="flex items-center gap-3">
                                    <Avatar src={item.avatarUrl} alt={item.name} size="md" />
                                    <div className="whitespace-nowrap">
                                        <p className="text-sm font-medium text-primary">{item.name}</p>
                                        <p className="text-sm text-tertiary">{item.username}</p>
                                    </div>
                                </div>
                            </Table.Cell>
                            <Table.Cell>
                                <BadgeWithDot size="sm" color={item.status === "active" ? "success" : "gray"} type="modern">
                                    {item.status === "active" ? "Active" : "Inactive"}
                                </BadgeWithDot>
                            </Table.Cell>
                            <Table.Cell className="whitespace-nowrap">{item.role}</Table.Cell>
                            <Table.Cell className="whitespace-nowrap md:hidden xl:table-cell">{item.email}</Table.Cell>
                            <Table.Cell>
                                <div className="flex gap-1">
                                    {item.teams.slice(0, 3).map((team) => (
                                        <Badge key={team.name} color={team.color as BadgeColor<BadgeTypes>} size="sm">
                                            {team.name}
                                        </Badge>
                                    ))}

                                    {item.teams.length > 3 && (
                                        <Badge color="gray" size="sm">
                                            +{item.teams.length - 3}
                                        </Badge>
                                    )}
                                </div>
                            </Table.Cell>
                            <Table.Cell className="px-4">
                                <div className="flex justify-end gap-0.5">
                                    <ButtonUtility size="xs" color="tertiary" tooltip="Delete" icon={Trash01} />
                                    <ButtonUtility size="xs" color="tertiary" tooltip="Edit" icon={Edit01} />
                                </div>
                            </Table.Cell>
                        </Table.Row>
                    )}
                </Table.Body>
            </Table>

            <PaginationPageMinimalCenter page={1} total={10} className="px-4 py-3 md:px-6 md:pt-3 md:pb-4" />
        </TableCard.Root>
    );
};

export const Table01AlternatingFills = () => {
    const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
        column: "status",
        direction: "ascending",
    });

    const sortedItems = useMemo(() => {
        return teamMembers.items.sort((a, b) => {
            const first = a[sortDescriptor.column as keyof typeof a];
            const second = b[sortDescriptor.column as keyof typeof b];

            // Compare numbers or booleans
            if ((typeof first === "number" && typeof second === "number") || (typeof first === "boolean" && typeof second === "boolean")) {
                return sortDescriptor.direction === "descending" ? second - first : first - second;
            }

            // Compare strings
            if (typeof first === "string" && typeof second === "string") {
                let cmp = first.localeCompare(second);
                if (sortDescriptor.direction === "descending") {
                    cmp *= -1;
                }
                return cmp;
            }

            return 0;
        });
    }, [sortDescriptor]);

    return (
        <TableCard.Root>
            <TableCard.Header
                title="Team members"
                badge="100 users"
                contentTrailing={
                    <div className="absolute top-5 right-4 md:right-6">
                        <DropdownIconSimple />
                    </div>
                }
            />
            <Table aria-label="Team members" selectionMode="multiple" sortDescriptor={sortDescriptor} onSortChange={setSortDescriptor}>
                <Table.Header className="bg-primary">
                    <Table.Head id="name" label="Name" isRowHeader allowsSorting className="w-full max-w-1/4" />
                    <Table.Head id="status" label="Status" allowsSorting />
                    <Table.Head id="role" label="Role" allowsSorting tooltip="This is a tooltip" />
                    <Table.Head id="email" label="Email address" allowsSorting className="md:hidden xl:table-cell" />
                    <Table.Head id="teams" label="Teams" />
                    <Table.Head id="actions" />
                </Table.Header>
                <Table.Body items={sortedItems}>
                    {(item) => (
                        <Table.Row id={item.username} className="odd:bg-secondary">
                            <Table.Cell>
                                <div className="flex items-center gap-3">
                                    <Avatar src={item.avatarUrl} alt={item.name} size="md" />
                                    <div className="whitespace-nowrap">
                                        <p className="text-sm font-medium text-primary">{item.name}</p>
                                        <p className="text-sm text-tertiary">{item.username}</p>
                                    </div>
                                </div>
                            </Table.Cell>
                            <Table.Cell>
                                <BadgeWithDot size="sm" color={item.status === "active" ? "success" : "gray"} type="modern">
                                    {item.status === "active" ? "Active" : "Inactive"}
                                </BadgeWithDot>
                            </Table.Cell>
                            <Table.Cell className="whitespace-nowrap">{item.role}</Table.Cell>
                            <Table.Cell className="whitespace-nowrap md:hidden xl:table-cell">{item.email}</Table.Cell>
                            <Table.Cell>
                                <div className="flex gap-1">
                                    {item.teams.slice(0, 3).map((team) => (
                                        <Badge key={team.name} color={team.color as BadgeColor<BadgeTypes>} size="sm">
                                            {team.name}
                                        </Badge>
                                    ))}

                                    {item.teams.length > 3 && (
                                        <Badge color="gray" size="sm">
                                            +{item.teams.length - 3}
                                        </Badge>
                                    )}
                                </div>
                            </Table.Cell>
                            <Table.Cell className="px-4">
                                <div className="flex justify-end gap-0.5">
                                    <ButtonUtility size="xs" color="tertiary" tooltip="Delete" icon={Trash01} />
                                    <ButtonUtility size="xs" color="tertiary" tooltip="Edit" icon={Edit01} />
                                </div>
                            </Table.Cell>
                        </Table.Row>
                    )}
                </Table.Body>
            </Table>

            <PaginationPageMinimalCenter page={1} total={10} className="px-4 py-3 md:px-6 md:pt-3 md:pb-4" />
        </TableCard.Root>
    );
};

export const Table01DividerLineSm = () => {
    const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
        column: "status",
        direction: "ascending",
    });

    const sortedItems = useMemo(() => {
        return teamMembers.items.sort((a, b) => {
            const first = a[sortDescriptor.column as keyof typeof a];
            const second = b[sortDescriptor.column as keyof typeof b];

            // Compare numbers or booleans
            if ((typeof first === "number" && typeof second === "number") || (typeof first === "boolean" && typeof second === "boolean")) {
                return sortDescriptor.direction === "descending" ? second - first : first - second;
            }

            // Compare strings
            if (typeof first === "string" && typeof second === "string") {
                let cmp = first.localeCompare(second);
                if (sortDescriptor.direction === "descending") {
                    cmp *= -1;
                }
                return cmp;
            }

            return 0;
        });
    }, [sortDescriptor]);

    return (
        <TableCard.Root size="sm">
            <TableCard.Header
                title="Team members"
                badge="100 users"
                contentTrailing={
                    <div className="absolute top-5 right-4 md:right-6">
                        <DropdownIconSimple />
                    </div>
                }
            />
            <Table aria-label="Team members" selectionMode="multiple" sortDescriptor={sortDescriptor} onSortChange={setSortDescriptor}>
                <Table.Header>
                    <Table.Head id="name" label="Name" isRowHeader allowsSorting className="w-full max-w-1/4" />
                    <Table.Head id="status" label="Status" allowsSorting />
                    <Table.Head id="role" label="Role" allowsSorting tooltip="This is a tooltip" />
                    <Table.Head id="email" label="Email address" allowsSorting className="md:hidden xl:table-cell" />
                    <Table.Head id="teams" label="Teams" />
                    <Table.Head id="actions" />
                </Table.Header>

                <Table.Body items={sortedItems}>
                    {(item) => (
                        <Table.Row id={item.username}>
                            <Table.Cell>
                                <div className="flex items-center gap-2">
                                    <Avatar src={item.avatarUrl} alt={item.name} size="sm" />
                                    <p className="text-sm font-medium whitespace-nowrap text-primary">{item.name}</p>
                                </div>
                            </Table.Cell>
                            <Table.Cell>
                                <BadgeWithDot size="sm" color={item.status === "active" ? "success" : "gray"} type="modern">
                                    {item.status === "active" ? "Active" : "Inactive"}
                                </BadgeWithDot>
                            </Table.Cell>
                            <Table.Cell className="whitespace-nowrap">{item.role}</Table.Cell>
                            <Table.Cell className="whitespace-nowrap md:hidden xl:table-cell">{item.email}</Table.Cell>
                            <Table.Cell>
                                <div className="flex gap-1">
                                    {item.teams.slice(0, 3).map((team) => (
                                        <Badge key={team.name} color={team.color as BadgeColor<BadgeTypes>} size="sm">
                                            {team.name}
                                        </Badge>
                                    ))}

                                    {item.teams.length > 3 && (
                                        <Badge color="gray" size="sm">
                                            +{item.teams.length - 3}
                                        </Badge>
                                    )}
                                </div>
                            </Table.Cell>
                            <Table.Cell className="px-3">
                                <div className="flex justify-end gap-0.5">
                                    <ButtonUtility size="xs" color="tertiary" tooltip="Delete" icon={Trash01} />
                                    <ButtonUtility size="xs" color="tertiary" tooltip="Edit" icon={Edit01} />
                                </div>
                            </Table.Cell>
                        </Table.Row>
                    )}
                </Table.Body>
            </Table>

            <PaginationCardMinimal align="right" page={1} total={10} className="px-4 py-3 md:px-5 md:pt-3 md:pb-4" />
        </TableCard.Root>
    );
};

export const Table02DividerLine = () => {
    const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
        column: "status",
        direction: "ascending",
    });

    const sortedItems = useMemo(() => {
        return customers.items.sort((a, b) => {
            const first = a[sortDescriptor.column as keyof typeof a];
            const second = b[sortDescriptor.column as keyof typeof b];

            // Compare numbers or booleans
            if ((typeof first === "number" && typeof second === "number") || (typeof first === "boolean" && typeof second === "boolean")) {
                return sortDescriptor.direction === "descending" ? second - first : first - second;
            }

            // Compare strings
            if (typeof first === "string" && typeof second === "string") {
                let cmp = first.localeCompare(second);
                if (sortDescriptor.direction === "descending") {
                    cmp *= -1;
                }
                return cmp;
            }

            return 0;
        });
    }, [sortDescriptor]);

    return (
        <TableCard.Root>
            <TableCard.Header
                title="Customers"
                description="These companies have purchased in the last 12 months."
                contentTrailing={
                    <div className="absolute top-5 right-4 md:right-6">
                        <DropdownIconSimple />
                    </div>
                }
            />

            <Table aria-label="Team members" selectionMode="none" sortDescriptor={sortDescriptor} onSortChange={setSortDescriptor}>
                <Table.Header>
                    <Table.Head id="name" label="Company" isRowHeader allowsSorting />
                    <Table.Head id="status" label="Status" allowsSorting />
                    <Table.Head id="aboutTitle" label="About" allowsSorting />
                    <Table.Head id="users" label="Users" className="md:hidden xl:table-cell" />
                    <Table.Head id="licenseUse" label="License use" allowsSorting className="min-w-55" />
                    <Table.Head id="actions" />
                </Table.Header>
                <Table.Body items={sortedItems}>
                    {(item) => (
                        <Table.Row id={item.name}>
                            <Table.Cell>
                                <div className="flex items-center gap-3">
                                    <Avatar src={item.logoUrl} alt={item.name} size="md" />
                                    <div className="whitespace-nowrap">
                                        <p className="text-sm font-medium text-primary">{item.name}</p>
                                        <p className="text-sm text-tertiary">{item.website}</p>
                                    </div>
                                </div>
                            </Table.Cell>
                            <Table.Cell>
                                <BadgeWithDot size="sm" color={item.status === "Customer" ? "success" : "gray"}>
                                    {item.status}
                                </BadgeWithDot>
                            </Table.Cell>
                            <Table.Cell className="whitespace-nowrap">
                                <p className="text-sm font-medium text-primary">{item.aboutTitle}</p>
                                <p className="text-sm text-tertiary">{item.aboutDescription}</p>
                            </Table.Cell>
                            <Table.Cell className="pr-0 md:hidden xl:table-cell">
                                <div className="flex -space-x-1">
                                    <Avatar
                                        className="ring-[1.5px] ring-bg-primary"
                                        size="xs"
                                        src="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80"
                                        alt="Olivia Rhye"
                                    />
                                    <Avatar
                                        className="ring-[1.5px] ring-bg-primary"
                                        size="xs"
                                        src="https://www.untitledui.com/images/avatars/phoenix-baker?fm=webp&q=80"
                                        alt="Phoenix Baker"
                                    />
                                    <Avatar
                                        className="ring-[1.5px] ring-bg-primary"
                                        size="xs"
                                        src="https://www.untitledui.com/images/avatars/lana-steiner?fm=webp&q=80"
                                        alt="Lana Steiner"
                                    />
                                    <Avatar
                                        className="ring-[1.5px] ring-bg-primary"
                                        size="xs"
                                        src="https://www.untitledui.com/images/avatars/demi-wilkinson?fm=webp&q=80"
                                        alt="Demi Wilkinson"
                                    />
                                    <Avatar
                                        className="ring-[1.5px] ring-bg-primary"
                                        size="xs"
                                        src="https://www.untitledui.com/images/avatars/candice-wu?fm=webp&q=80"
                                        alt="Candice Wu"
                                    />
                                    <Avatar
                                        size="xs"
                                        className="ring-[1.5px] ring-bg-primary"
                                        placeholder={<span className="text-xs font-semibold text-quaternary">+5</span>}
                                    />
                                </div>
                            </Table.Cell>
                            <Table.Cell>
                                <ProgressBar labelPosition="right" value={item.licenseUse} />
                            </Table.Cell>
                            <Table.Cell className="px-4">
                                <div className="flex items-center justify-end">
                                    <DropdownIconSimple />
                                </div>
                            </Table.Cell>
                        </Table.Row>
                    )}
                </Table.Body>
            </Table>
        </TableCard.Root>
    );
};

export const Table02AlternatingFills = () => {
    const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
        column: "status",
        direction: "ascending",
    });

    const sortedItems = useMemo(() => {
        return customers.items.sort((a, b) => {
            const first = a[sortDescriptor.column as keyof typeof a];
            const second = b[sortDescriptor.column as keyof typeof b];

            // Compare numbers or booleans
            if ((typeof first === "number" && typeof second === "number") || (typeof first === "boolean" && typeof second === "boolean")) {
                return sortDescriptor.direction === "descending" ? second - first : first - second;
            }

            // Compare strings
            if (typeof first === "string" && typeof second === "string") {
                let cmp = first.localeCompare(second);
                if (sortDescriptor.direction === "descending") {
                    cmp *= -1;
                }
                return cmp;
            }

            return 0;
        });
    }, [sortDescriptor]);

    return (
        <TableCard.Root>
            <TableCard.Header
                title="Customers"
                description="These companies have purchased in the last 12 months."
                contentTrailing={
                    <div className="absolute top-5 right-4 md:right-6">
                        <DropdownIconSimple />
                    </div>
                }
            />
            <Table aria-label="Team members" selectionMode="none" sortDescriptor={sortDescriptor} onSortChange={setSortDescriptor}>
                <Table.Header className="bg-primary">
                    <Table.Head id="name" label="Company" isRowHeader allowsSorting />
                    <Table.Head id="status" label="Status" allowsSorting />
                    <Table.Head id="aboutTitle" label="About" allowsSorting />
                    <Table.Head id="users" label="Users" className="md:hidden xl:table-cell" />
                    <Table.Head id="licenseUse" label="License use" allowsSorting className="min-w-55" />
                    <Table.Head id="actions" />
                </Table.Header>
                <Table.Body items={sortedItems}>
                    {(item) => (
                        <Table.Row id={item.name} className="odd:bg-secondary">
                            <Table.Cell>
                                <div className="flex items-center gap-3">
                                    <Avatar src={item.logoUrl} alt={item.name} size="md" />
                                    <div className="whitespace-nowrap">
                                        <p className="text-sm font-medium text-primary">{item.name}</p>
                                        <p className="text-sm text-tertiary">{item.website}</p>
                                    </div>
                                </div>
                            </Table.Cell>
                            <Table.Cell>
                                <BadgeWithDot size="sm" color={item.status === "Customer" ? "success" : "gray"} type="modern">
                                    {item.status}
                                </BadgeWithDot>
                            </Table.Cell>
                            <Table.Cell className="whitespace-nowrap">
                                <p className="text-sm font-medium text-primary">{item.aboutTitle}</p>
                                <p className="text-sm text-tertiary">{item.aboutDescription}</p>
                            </Table.Cell>
                            <Table.Cell className="pr-0 md:hidden xl:table-cell">
                                <div className="flex -space-x-1">
                                    <Avatar
                                        className="ring-[1.5px] ring-bg-primary"
                                        size="xs"
                                        src="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80&w=100"
                                        alt="Olivia Rhye"
                                    />
                                    <Avatar
                                        className="ring-[1.5px] ring-bg-primary"
                                        size="xs"
                                        src="https://www.untitledui.com/images/avatars/phoenix-baker?fm=webp&q=80&w=100"
                                        alt="Phoenix Baker"
                                    />
                                    <Avatar
                                        className="ring-[1.5px] ring-bg-primary"
                                        size="xs"
                                        src="https://www.untitledui.com/images/avatars/lana-steiner?fm=webp&q=80&w=100"
                                        alt="Lana Steiner"
                                    />
                                    <Avatar
                                        className="ring-[1.5px] ring-bg-primary"
                                        size="xs"
                                        src="https://www.untitledui.com/images/avatars/demi-wilkinson?fm=webp&q=80&w=100"
                                        alt="Demi Wilkinson"
                                    />
                                    <Avatar
                                        className="ring-[1.5px] ring-bg-primary"
                                        size="xs"
                                        src="https://www.untitledui.com/images/avatars/candice-wu?fm=webp&q=80&w=100"
                                        alt="Candice Wu"
                                    />
                                    <Avatar
                                        size="xs"
                                        className="ring-[1.5px] ring-bg-primary"
                                        placeholder={<span className="text-xs font-semibold text-quaternary">+5</span>}
                                    />
                                </div>
                            </Table.Cell>
                            <Table.Cell>
                                <ProgressBar labelPosition="right" value={item.licenseUse} />
                            </Table.Cell>
                            <Table.Cell className="px-4">
                                <div className="flex items-center justify-end">
                                    <DropdownIconSimple />
                                </div>
                            </Table.Cell>
                        </Table.Row>
                    )}
                </Table.Body>
            </Table>
        </TableCard.Root>
    );
};

export const Table03DividerLine = () => {
    const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
        column: "invoice",
        direction: "ascending",
    });

    const sortedItems = useMemo(() => {
        return invoices.items.sort((a, b) => {
            const first = a[sortDescriptor.column as keyof typeof a];
            const second = b[sortDescriptor.column as keyof typeof b];

            // Compare numbers or booleans
            if ((typeof first === "number" && typeof second === "number") || (typeof first === "boolean" && typeof second === "boolean")) {
                return sortDescriptor.direction === "descending" ? second - first : first - second;
            }

            // Compare strings
            if (typeof first === "string" && typeof second === "string") {
                let cmp = first.localeCompare(second);
                if (sortDescriptor.direction === "descending") {
                    cmp *= -1;
                }
                return cmp;
            }

            return 0;
        });
    }, [sortDescriptor]);

    const getInitials = (name: string) => {
        return name
            .split(" ")
            .map((n) => n[0])
            .join("");
    };

    return (
        <TableCard.Root>
            <Table aria-label="Team members" selectionMode="multiple" sortDescriptor={sortDescriptor} onSortChange={setSortDescriptor}>
                <Table.Header>
                    <Table.Head id="id" label="Invoice" isRowHeader allowsSorting />
                    <Table.Head id="date" label="Date" allowsSorting />
                    <Table.Head id="status" label="Status" allowsSorting />
                    <Table.Head id="customer" label="Customer" />
                    <Table.Head id="purchase" label="Purchase" className="md:hidden xl:table-cell" />
                    <Table.Head id="actions" />
                </Table.Header>
                <Table.Body items={sortedItems}>
                    {(item) => (
                        <Table.Row id={item.id}>
                            <Table.Cell className="font-medium text-primary">#{item.id}</Table.Cell>
                            <Table.Cell className="whitespace-nowrap">
                                {new Date(item.date).toLocaleString(undefined, { year: "numeric", month: "short", day: "numeric" })}
                            </Table.Cell>
                            <Table.Cell>
                                {item.status === "paid" ? (
                                    <BadgeWithIcon size="sm" color="success" iconLeading={Check} className="capitalize">
                                        {item.status}
                                    </BadgeWithIcon>
                                ) : item.status === "refunded" ? (
                                    <BadgeWithIcon size="sm" color="gray" iconLeading={ReverseLeft} className="capitalize">
                                        {item.status}
                                    </BadgeWithIcon>
                                ) : (
                                    <BadgeWithIcon size="sm" color="error" iconLeading={X} className="capitalize">
                                        {item.status}
                                    </BadgeWithIcon>
                                )}
                            </Table.Cell>
                            <Table.Cell>
                                <div className="flex items-center gap-3">
                                    <Avatar initials={getInitials(item.customer.name)} src={item.customer.avatarUrl} alt={item.customer.name} size="md" />
                                    <div className="whitespace-nowrap">
                                        <p className="text-sm font-medium text-primary">{item.customer.name}</p>
                                        <p className="text-sm text-tertiary">{item.customer.email}</p>
                                    </div>
                                </div>
                            </Table.Cell>
                            <Table.Cell className="whitespace-nowrap md:hidden xl:table-cell">{item.purchase}</Table.Cell>
                            <Table.Cell>
                                <div className="flex items-center justify-end gap-3">
                                    <Button size="sm" color="link-gray">
                                        Delete
                                    </Button>
                                    <Button size="sm" color="link-color">
                                        Edit
                                    </Button>
                                </div>
                            </Table.Cell>
                        </Table.Row>
                    )}
                </Table.Body>
            </Table>
            <PaginationPageMinimalCenter page={1} total={10} className="px-4 py-3 md:px-6 md:pt-3 md:pb-4" />
        </TableCard.Root>
    );
};

export const Table03AlternatingFills = () => {
    const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
        column: "invoice",
        direction: "ascending",
    });

    const sortedItems = useMemo(() => {
        return invoices.items.sort((a, b) => {
            const first = a[sortDescriptor.column as keyof typeof a];
            const second = b[sortDescriptor.column as keyof typeof b];

            // Compare numbers or booleans
            if ((typeof first === "number" && typeof second === "number") || (typeof first === "boolean" && typeof second === "boolean")) {
                return sortDescriptor.direction === "descending" ? second - first : first - second;
            }

            // Compare strings
            if (typeof first === "string" && typeof second === "string") {
                let cmp = first.localeCompare(second);
                if (sortDescriptor.direction === "descending") {
                    cmp *= -1;
                }
                return cmp;
            }

            return 0;
        });
    }, [sortDescriptor]);

    const getInitials = (name: string) => {
        return name
            .split(" ")
            .map((n) => n[0])
            .join("");
    };

    return (
        <TableCard.Root>
            <Table aria-label="Team members" selectionMode="multiple" sortDescriptor={sortDescriptor} onSortChange={setSortDescriptor}>
                <Table.Header className="bg-primary">
                    <Table.Head id="id" label="Invoice" isRowHeader allowsSorting />
                    <Table.Head id="date" label="Date" allowsSorting />
                    <Table.Head id="status" label="Status" allowsSorting />
                    <Table.Head id="customer" label="Customer" />
                    <Table.Head id="purchase" label="Purchase" className="md:hidden xl:table-cell" />
                    <Table.Head id="actions" />
                </Table.Header>
                <Table.Body items={sortedItems}>
                    {(item) => (
                        <Table.Row id={item.id} className="odd:bg-secondary">
                            <Table.Cell className="font-medium text-primary">#{item.id}</Table.Cell>
                            <Table.Cell className="whitespace-nowrap">{item.date}</Table.Cell>
                            <Table.Cell>
                                {item.status === "paid" ? (
                                    <BadgeWithIcon size="sm" color="success" iconLeading={Check} className="capitalize">
                                        {item.status}
                                    </BadgeWithIcon>
                                ) : item.status === "refunded" ? (
                                    <BadgeWithIcon size="sm" color="gray" iconLeading={ReverseLeft} className="capitalize">
                                        {item.status}
                                    </BadgeWithIcon>
                                ) : (
                                    <BadgeWithIcon size="sm" color="error" iconLeading={X} className="capitalize">
                                        {item.status}
                                    </BadgeWithIcon>
                                )}
                            </Table.Cell>
                            <Table.Cell>
                                <div className="flex items-center gap-3">
                                    <Avatar initials={getInitials(item.customer.name)} src={item.customer.avatarUrl} alt={item.customer.name} size="md" />
                                    <div className="whitespace-nowrap">
                                        <p className="text-sm font-medium text-primary">{item.customer.name}</p>
                                        <p className="text-sm text-tertiary">{item.customer.email}</p>
                                    </div>
                                </div>
                            </Table.Cell>
                            <Table.Cell className="whitespace-nowrap md:hidden xl:table-cell">{item.purchase}</Table.Cell>
                            <Table.Cell>
                                <div className="flex items-center justify-end gap-3">
                                    <Button size="sm" color="link-gray">
                                        Delete
                                    </Button>
                                    <Button size="sm" color="link-color">
                                        Edit
                                    </Button>
                                </div>
                            </Table.Cell>
                        </Table.Row>
                    )}
                </Table.Body>
            </Table>
            <PaginationPageMinimalCenter page={1} total={10} className="px-4 py-3 md:px-6 md:pt-3 md:pb-4" />
        </TableCard.Root>
    );
};

export const Table04DividerLine = () => {
    return (
        <TableCard.Root>
            <TableCard.Header
                title="Files uploaded"
                className="pb-5"
                contentTrailing={
                    <div className="flex items-center gap-3">
                        <Button size="sm" color="secondary">
                            Download all
                        </Button>
                        <Button size="sm" iconLeading={UploadCloud02}>
                            Upload
                        </Button>
                    </div>
                }
            />
            <Table aria-label="Team members" selectionMode="multiple">
                <Table.Header>
                    <Table.Head id="name" label="File name" isRowHeader />
                    <Table.Head id="size" label="File size" />
                    <Table.Head id="uploadedAt" label="Date uploaded" />
                    <Table.Head id="updatedAt" label="Last updated" className="md:hidden xl:table-cell" />
                    <Table.Head id="uploadedBy" label="Uploaded by" />
                    <Table.Head id="actions" />
                </Table.Header>
                <Table.Body items={uploadedFiles.items}>
                    {(item) => (
                        <Table.Row id={item.name}>
                            <Table.Cell>
                                <div className="flex items-center gap-3">
                                    <FileIcon type={item.name.split(".")[1] ?? ""} theme="light" className="size-10 dark:hidden" />
                                    <FileIcon type={item.name.split(".")[1] ?? ""} theme="dark" className="size-10 not-dark:hidden" />

                                    <div className="whitespace-nowrap">
                                        <p className="text-sm font-medium text-primary">{item.name}</p>
                                        <p className="text-sm text-tertiary">{item.size}</p>
                                    </div>
                                </div>
                            </Table.Cell>
                            <Table.Cell className="whitespace-nowrap">{item.size}</Table.Cell>
                            <Table.Cell className="whitespace-nowrap">{item.uploadedAt}</Table.Cell>
                            <Table.Cell className="whitespace-nowrap md:hidden xl:table-cell">{item.updatedAt}</Table.Cell>
                            <Table.Cell className="whitespace-nowrap">{item.uploadedBy}</Table.Cell>
                            <Table.Cell className="px-4">
                                <div className="flex items-center justify-end">
                                    <DropdownIconSimple />
                                </div>
                            </Table.Cell>
                        </Table.Row>
                    )}
                </Table.Body>
            </Table>
        </TableCard.Root>
    );
};

export const Table04AlternatingFills = () => {
    return (
        <TableCard.Root>
            <TableCard.Header
                title="Files uploaded"
                contentTrailing={
                    <div className="flex items-center gap-3">
                        <Button size="sm" color="secondary">
                            Download all
                        </Button>
                        <Button size="sm" iconLeading={UploadCloud02}>
                            Upload
                        </Button>
                    </div>
                }
            />
            <Table aria-label="Team members" selectionMode="multiple">
                <Table.Header className="bg-primary">
                    <Table.Head id="name" label="File name" isRowHeader />
                    <Table.Head id="size" label="File size" />
                    <Table.Head id="uploadedAt" label="Date uploaded" />
                    <Table.Head id="updatedAt" label="Last updated" className="md:hidden xl:table-cell" />
                    <Table.Head id="uploadedBy" label="Uploaded by" />
                    <Table.Head id="actions" />
                </Table.Header>
                <Table.Body items={uploadedFiles.items}>
                    {(item) => (
                        <Table.Row id={item.name} className="odd:bg-secondary">
                            <Table.Cell>
                                <div className="flex items-center gap-3">
                                    <FileIcon type={item.name.split(".")[1] ?? ""} theme="light" className="size-10 dark:hidden" />
                                    <FileIcon type={item.name.split(".")[1] ?? ""} theme="dark" className="size-10 not-dark:hidden" />

                                    <div className="whitespace-nowrap">
                                        <p className="text-sm font-medium text-primary">{item.name}</p>
                                        <p className="text-sm text-tertiary">{item.size}</p>
                                    </div>
                                </div>
                            </Table.Cell>
                            <Table.Cell className="whitespace-nowrap">{item.size}</Table.Cell>
                            <Table.Cell className="whitespace-nowrap">{item.uploadedAt}</Table.Cell>
                            <Table.Cell className="whitespace-nowrap md:hidden xl:table-cell">{item.updatedAt}</Table.Cell>
                            <Table.Cell className="whitespace-nowrap">{item.uploadedBy}</Table.Cell>
                            <Table.Cell className="px-4">
                                <div className="flex items-center justify-end">
                                    <DropdownIconSimple />
                                </div>
                            </Table.Cell>
                        </Table.Row>
                    )}
                </Table.Body>
            </Table>
        </TableCard.Root>
    );
};

const viewTabs = [
    { id: "all", label: "View all" },
    { id: "active", label: "Active" },
    { id: "archived", label: "Archived" },
];

export const TableNoVendorsFound = () => {
    const [selectedTab, setSelectedTab] = useState<Key>("all");

    return (
        <TableCard.Root>
            <TableCard.Header
                title="Vendor movements"
                badge="240 vendors"
                description="Keep track of vendor and their security ratings."
                contentTrailing={
                    <>
                        <div className="flex gap-3 md:pr-9">
                            <Button color="secondary" size="sm" iconLeading={UploadCloud02}>
                                Import
                            </Button>
                            <Button size="sm" iconLeading={Plus}>
                                Add vendor
                            </Button>
                        </div>
                        <div className="absolute top-5 right-4 md:right-6">
                            <DropdownIconSimple />
                        </div>
                    </>
                }
            />

            <div className="flex flex-wrap gap-3 border-b border-secondary px-4 py-3 max-md:flex-col md:px-6">
                <div className="flex min-w-0 flex-1 flex-wrap gap-3">
                    <Tabs selectedKey={selectedTab} onSelectionChange={setSelectedTab} className="w-auto">
                        <TabList size="sm" type="button-minimal" items={viewTabs} />
                    </Tabs>
                </div>
                <div className="flex shrink-0 items-center gap-3 max-md:w-full">
                    <Input shortcut className="min-w-0 max-md:flex-1 md:w-70" size="sm" aria-label="Search" placeholder="Search" icon={SearchLg} />
                    <Button color="secondary" size="sm" iconLeading={FilterLines} className="max-md:hidden">
                        Filters
                    </Button>
                    <Button aria-label="Filters" color="secondary" size="sm" iconLeading={FilterLines} className="md:hidden" />
                </div>
            </div>

            <div className="flex items-center justify-center overflow-hidden px-8 py-20">
                <EmptyState size="sm">
                    <EmptyState.Header pattern="none">
                        <EmptyState.FeaturedIcon color="gray" theme="modern-neue" />
                    </EmptyState.Header>

                    <EmptyState.Content>
                        <EmptyState.Title>No vendors found</EmptyState.Title>
                        <EmptyState.Description>
                            Your search “Stripe” did not match any vendors. Please try again or create add a new vendor.
                        </EmptyState.Description>
                    </EmptyState.Content>

                    <EmptyState.Footer>
                        <Button size="sm" color="secondary">
                            Clear search
                        </Button>
                        <Button size="sm" iconLeading={Plus}>
                            New project
                        </Button>
                    </EmptyState.Footer>
                </EmptyState>
            </div>

            <PaginationCardMinimal align="right" />
        </TableCard.Root>
    );
};

export const TableSomethingWentWrong = () => {
    return (
        <TableCard.Root>
            <TableCard.Header
                title="Team members"
                badge="100 users"
                contentTrailing={
                    <div className="absolute top-5 right-4 md:right-6">
                        <DropdownIconSimple />
                    </div>
                }
            />

            <div className="flex items-center justify-center overflow-hidden px-8 py-20">
                <EmptyState size="sm">
                    <EmptyState.Header pattern="none">
                        <EmptyState.FeaturedIcon color="error" theme="light" icon={AlertCircle} />
                    </EmptyState.Header>

                    <EmptyState.Content>
                        <EmptyState.Title>Something went wrong...</EmptyState.Title>
                        <EmptyState.Description>
                            We had some trouble loading this page. Please refresh the page or{" "}
                            <a
                                href="#"
                                className="rounded-xs underline underline-offset-2 outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2"
                            >
                                get in touch
                            </a>{" "}
                            for support.
                        </EmptyState.Description>
                    </EmptyState.Content>

                    <EmptyState.Footer>
                        <Button size="sm">Try again</Button>
                    </EmptyState.Footer>
                </EmptyState>
            </div>
        </TableCard.Root>
    );
};

const avatarRadiusData = [
    { src: "https://www.untitledui.com/images/avatars/sienna-hewitt?fm=webp&q=80" },
    { src: "https://www.untitledui.com/images/avatars/ammar-foley?fm=webp&q=80" },
    { src: "https://www.untitledui.com/images/avatars/mathilde-lewis?fm=webp&q=80" },
    { src: "https://www.untitledui.com/images/avatars/caitlyn-king?fm=webp&q=80" },
    { src: "https://www.untitledui.com/images/avatars/lily-rose-chedjou?fm=webp&q=80" },
    { src: "https://www.untitledui.com/images/avatars/olly-schroeder?fm=webp&q=80" },
    { src: "https://www.untitledui.com/images/avatars/fleur-cook?fm=webp&q=80" },
    { src: "https://www.untitledui.com/images/avatars/julius-vaughan?fm=webp&q=80" },
    { src: "https://www.untitledui.com/images/avatars/amelie-laurent?fm=webp&q=80" },
];

export const TableNoUsersFound = () => {
    return (
        <TableCard.Root>
            <TableCard.Header
                title="Users"
                badge="128 online"
                description="Keep track of vendor and their security ratings."
                contentTrailing={
                    <>
                        <div className="flex gap-3 md:pr-9">
                            <Button color="secondary" size="sm" iconLeading={UploadCloud02}>
                                Import
                            </Button>
                            <Button size="sm" iconLeading={Plus}>
                                Add vendor
                            </Button>
                        </div>
                        <div className="absolute top-5 right-4 md:right-6">
                            <DropdownIconSimple />
                        </div>
                    </>
                }
            />

            <div className="flex flex-wrap gap-3 border-b border-secondary px-4 py-3 md:px-6">
                <div className="flex min-w-0 flex-1 flex-wrap gap-3">
                    <Input shortcut className="min-w-0 flex-1 sm:max-w-70" size="sm" aria-label="Search" placeholder="Search" icon={SearchLg} />
                </div>
                <div className="flex shrink-0 items-center gap-3">
                    <DateRangePicker aria-label="Select dates" size="sm" className="max-md:hidden" />
                    <Button color="secondary" size="sm" iconLeading={FilterLines} iconTrailing={ChevronDown}>
                        Filters
                    </Button>
                </div>
            </div>

            <div className="flex items-center justify-center overflow-hidden px-8 py-20">
                <EmptyState size="sm">
                    <EmptyState.Header pattern="none" className="my-16">
                        <EmptyState.AvatarRadius avatars={avatarRadiusData} />
                        <EmptyState.FeaturedIcon icon={SearchLg} color="gray" theme="modern" size="md" className="text-fg-quaternary" />
                    </EmptyState.Header>

                    <EmptyState.Content>
                        <EmptyState.Title>No users found</EmptyState.Title>
                        <EmptyState.Description>Your search did not match any users.</EmptyState.Description>
                    </EmptyState.Content>

                    <EmptyState.Footer>
                        <Button size="sm" color="secondary">
                            Clear search
                        </Button>
                        <Button size="sm" iconLeading={Plus}>
                            Add user
                        </Button>
                    </EmptyState.Footer>
                </EmptyState>
            </div>

            <PaginationCardMinimal />
        </TableCard.Root>
    );
};

const avatarGridData = [
    { src: "https://www.untitledui.com/logos/images/Boltshift.jpg" },
    { src: "https://www.untitledui.com/logos/images/Catalog.jpg" },
    { src: "https://www.untitledui.com/logos/images/Layers.jpg" },
    { src: "https://www.untitledui.com/logos/images/Sisyphus.jpg" },
    { src: "https://www.untitledui.com/logos/images/Ephemeral.jpg" },
    { src: "https://www.untitledui.com/logos/images/Watchtower.jpg" },
    { src: "https://www.untitledui.com/logos/images/Leapyear.jpg" },
    { src: "https://www.untitledui.com/logos/images/Warpspeed.jpg" },
    { src: "https://www.untitledui.com/logos/images/Boltshift.jpg" },
    { src: "https://www.untitledui.com/logos/images/Catalog.jpg" },
    { src: "https://www.untitledui.com/logos/images/Layers.jpg" },
    { src: "https://www.untitledui.com/logos/images/Sisyphus.jpg" },
    { src: "https://www.untitledui.com/logos/images/Ephemeral.jpg" },
    { src: "https://www.untitledui.com/logos/images/Watchtower.jpg" },
    { src: "https://www.untitledui.com/logos/images/Leapyear.jpg" },
    { src: "https://www.untitledui.com/logos/images/Warpspeed.jpg" },
    { src: "https://www.untitledui.com/logos/images/Boltshift.jpg" },
    { src: "https://www.untitledui.com/logos/images/Catalog.jpg" },
    { src: "https://www.untitledui.com/logos/images/Layers.jpg" },
    { src: "https://www.untitledui.com/logos/images/Sisyphus.jpg" },
    { src: "https://www.untitledui.com/logos/images/Ephemeral.jpg" },
    { src: "https://www.untitledui.com/logos/images/Watchtower.jpg" },
    { src: "https://www.untitledui.com/logos/images/Leapyear.jpg" },
    { src: "https://www.untitledui.com/logos/images/Warpspeed.jpg" },
];

export const TableAddFirstIntegration = () => {
    return (
        <TableCard.Root>
            <TableCard.Header
                title="Integrations"
                description="Manage custom integrations and workflows."
                contentTrailing={
                    <div className="flex items-center">
                        <Button color="secondary" size="sm" iconLeading={Plus}>
                            New integration
                        </Button>
                    </div>
                }
            />

            <div className="flex items-center justify-center overflow-hidden px-8 py-20">
                <EmptyState size="sm">
                    <EmptyState.Header pattern="none" className="mb-6">
                        <EmptyState.AvatarGrid avatars={avatarGridData} />
                    </EmptyState.Header>

                    <EmptyState.Content>
                        <EmptyState.Title>Add your first integration</EmptyState.Title>
                        <EmptyState.Description>Connect the tools you use every day to automate workflows and keep your data in sync.</EmptyState.Description>
                    </EmptyState.Content>

                    <EmptyState.Footer>
                        <Button size="sm" color="secondary" iconLeading={Plus}>
                            New integration
                        </Button>
                    </EmptyState.Footer>
                </EmptyState>
            </div>
        </TableCard.Root>
    );
};

const avatarRowData = [
    { src: "https://www.untitledui.com/images/avatars/marco-kelly?fm=webp&q=80" },
    { src: "https://www.untitledui.com/images/avatars/lily-rose-chedjou?fm=webp&q=80" },
    { src: "https://www.untitledui.com/images/avatars/ammar-foley?fm=webp&q=80" },
    { src: "https://www.untitledui.com/images/avatars/sienna-hewitt?fm=webp&q=80" },
    { src: "https://www.untitledui.com/images/avatars/caitlyn-king?fm=webp&q=80" },
    { src: "https://www.untitledui.com/images/avatars/mathilde-lewis?fm=webp&q=80" },
    { src: "https://www.untitledui.com/images/avatars/zahra-christensen?fm=webp&q=80" },
    { src: "https://www.untitledui.com/images/avatars/olly-schroeder?fm=webp&q=80" },
];

export const TableInviteFirstUser = () => {
    return (
        <TableCard.Root>
            <TableCard.Header
                title="Users"
                description="Manage team members, external users, and their access."
                contentTrailing={
                    <div className="flex gap-3">
                        <Button color="secondary" size="sm" iconLeading={DownloadCloud02}>
                            Export CSV
                        </Button>
                        <Button size="sm" iconLeading={Plus}>
                            Add user
                        </Button>
                    </div>
                }
            />

            <div className="flex items-center justify-center overflow-hidden px-8 py-20">
                <EmptyState size="sm">
                    <EmptyState.Header pattern="none" className="mb-6">
                        <EmptyState.AvatarRow avatars={avatarRowData}>
                            <EmptyState.FeaturedIcon icon={UsersPlus} color="gray" theme="modern-neue" size="lg" className="text-fg-quaternary" />
                        </EmptyState.AvatarRow>
                    </EmptyState.Header>

                    <EmptyState.Content>
                        <EmptyState.Title>Invite your first user</EmptyState.Title>
                        <EmptyState.Description>Add your team members and external users.</EmptyState.Description>
                    </EmptyState.Content>

                    <EmptyState.Footer>
                        <Button size="sm" color="secondary" iconLeading={Link03}>
                            Create link
                        </Button>
                        <Button size="sm" iconLeading={Plus}>
                            Add user
                        </Button>
                    </EmptyState.Footer>
                </EmptyState>
            </div>
        </TableCard.Root>
    );
};

export const TableOffline = () => {
    return (
        <TableCard.Root>
            <TableCard.Header title="My orders" />

            <div className="flex items-center justify-center overflow-hidden px-8 py-20">
                <EmptyState size="sm">
                    <EmptyState.Header pattern="none">
                        <EmptyState.Illustration type="cloud">
                            <UploadCloud02 />
                        </EmptyState.Illustration>
                    </EmptyState.Header>

                    <EmptyState.Content>
                        <EmptyState.Title>You're offline</EmptyState.Title>
                        <EmptyState.Description>
                            Please check your internet connection and try again. If the issue continues, contact support.
                        </EmptyState.Description>
                    </EmptyState.Content>

                    <EmptyState.Footer>
                        <Button size="sm" color="secondary" iconLeading={RefreshCw05}>
                            Refresh page
                        </Button>
                    </EmptyState.Footer>
                </EmptyState>
            </div>
        </TableCard.Root>
    );
};

export const TableResizableColumns = () => {
    return (
        <TableCard.Root>
            <TableCard.Header title="Team members" badge="100 users" description="Drag the dividers between column headers to resize columns." />

            <Table.ResizableContainer>
                <Table aria-label="Team members">
                    <Table.Header>
                        <Table.Head id="name" label="Name" isRowHeader allowsResizing defaultWidth={280} minWidth={160} />
                        <Table.Head id="role" label="Role" allowsResizing defaultWidth={200} minWidth={120} />
                        <Table.Head id="email" label="Email address" allowsResizing defaultWidth={260} minWidth={160} />
                        <Table.Head id="status" label="Status" minWidth={120} />
                    </Table.Header>

                    <Table.Body items={teamMembers.items}>
                        {(item) => (
                            <Table.Row id={item.username}>
                                <Table.Cell>
                                    <div className="flex min-w-0 items-center gap-3">
                                        <Avatar src={item.avatarUrl} alt={item.name} size="md" />
                                        <div className="min-w-0">
                                            <p className="truncate text-sm font-medium text-primary">{item.name}</p>
                                            <p className="truncate text-sm text-tertiary">{item.username}</p>
                                        </div>
                                    </div>
                                </Table.Cell>
                                <Table.Cell>
                                    <p className="truncate">{item.role}</p>
                                </Table.Cell>
                                <Table.Cell>
                                    <p className="truncate">{item.email}</p>
                                </Table.Cell>
                                <Table.Cell>
                                    <BadgeWithDot size="sm" color={item.status === "active" ? "success" : "gray"} type="modern">
                                        {item.status === "active" ? "Active" : "Inactive"}
                                    </BadgeWithDot>
                                </Table.Cell>
                            </Table.Row>
                        )}
                    </Table.Body>
                </Table>
            </Table.ResizableContainer>
        </TableCard.Root>
    );
};

const teamMemberColumns = [
    { id: "name", label: "Name", isRowHeader: true },
    { id: "status", label: "Status" },
    { id: "role", label: "Role" },
    { id: "email", label: "Email address" },
    { id: "teams", label: "Teams" },
];

export const TableColumnVisibility = () => {
    const [visibleColumns, setVisibleColumns] = useState<Selection>(new Set(["name", "status", "role", "teams"]));

    const columns = teamMemberColumns.filter((column) => visibleColumns === "all" || visibleColumns.has(column.id));

    return (
        <TableCard.Root>
            <TableCard.Header
                title="Team members"
                badge="100 users"
                description="Choose which columns are shown from the columns menu."
                contentTrailing={
                    <Dropdown.Root>
                        <Button color="secondary" size="sm" iconLeading={Columns03} iconTrailing={ChevronDown}>
                            Columns
                        </Button>
                        <Dropdown.Popover className="w-52">
                            <Dropdown.Menu
                                aria-label="Visible columns"
                                selectionMode="multiple"
                                disallowEmptySelection
                                selectedKeys={visibleColumns}
                                onSelectionChange={setVisibleColumns}
                                disabledKeys={["name"]}
                                items={teamMemberColumns}
                            >
                                {(column) => <Dropdown.Item id={column.id} label={column.label} selectionIndicator="checkbox" />}
                            </Dropdown.Menu>
                        </Dropdown.Popover>
                    </Dropdown.Root>
                }
            />

            <Table aria-label="Team members" selectionMode="multiple">
                <Table.Header columns={columns}>{(column) => <Table.Head id={column.id} label={column.label} isRowHeader={column.isRowHeader} />}</Table.Header>

                <Table.Body items={teamMembers.items} dependencies={[columns]}>
                    {(item) => (
                        <Table.Row id={item.username} columns={columns}>
                            {(column) => (
                                <Table.Cell>
                                    {column.id === "name" ? (
                                        <div className="flex items-center gap-3">
                                            <Avatar src={item.avatarUrl} alt={item.name} size="md" />
                                            <div className="whitespace-nowrap">
                                                <p className="text-sm font-medium text-primary">{item.name}</p>
                                                <p className="text-sm text-tertiary">{item.username}</p>
                                            </div>
                                        </div>
                                    ) : column.id === "status" ? (
                                        <BadgeWithDot size="sm" color={item.status === "active" ? "success" : "gray"} type="modern">
                                            {item.status === "active" ? "Active" : "Inactive"}
                                        </BadgeWithDot>
                                    ) : column.id === "teams" ? (
                                        <div className="flex gap-1">
                                            {item.teams.slice(0, 3).map((team) => (
                                                <Badge key={team.name} color={team.color as BadgeColor<BadgeTypes>} size="sm">
                                                    {team.name}
                                                </Badge>
                                            ))}
                                            {item.teams.length > 3 && (
                                                <Badge color="gray" size="sm">
                                                    +{item.teams.length - 3}
                                                </Badge>
                                            )}
                                        </div>
                                    ) : (
                                        <span className="whitespace-nowrap">{item[column.id as "role" | "email"]}</span>
                                    )}
                                </Table.Cell>
                            )}
                        </Table.Row>
                    )}
                </Table.Body>
            </Table>

            <PaginationPageMinimalCenter page={1} total={10} className="px-4 py-3 md:px-6 md:pt-3 md:pb-4" />
        </TableCard.Root>
    );
};

const teamMemberMenuColumns = [
    { id: "name", label: "Name", isRowHeader: true, defaultWidth: 260 },
    { id: "role", label: "Role", isRowHeader: false, defaultWidth: 200 },
    { id: "email", label: "Email address", isRowHeader: false, defaultWidth: 260 },
    { id: "status", label: "Status", isRowHeader: false, defaultWidth: undefined },
];

export const TableColumnMenu = () => {
    const [hiddenColumns, setHiddenColumns] = useState<Set<Key>>(new Set());
    const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({ column: "name", direction: "ascending" });

    const columns = teamMemberMenuColumns.filter((column) => !hiddenColumns.has(column.id));

    const sortedItems = useMemo(() => {
        const column = sortDescriptor.column as "name" | "role" | "email" | "status";

        return [...teamMembers.items].sort((a, b) => {
            const cmp = a[column].localeCompare(b[column]);
            return sortDescriptor.direction === "descending" ? -cmp : cmp;
        });
    }, [sortDescriptor]);

    return (
        <TableCard.Root>
            <TableCard.Header
                title="Team members"
                badge="100 users"
                description="Open a column's menu to sort, resize or hide it."
                contentTrailing={
                    hiddenColumns.size > 0 && (
                        <Button color="secondary" size="sm" iconLeading={Eye} onClick={() => setHiddenColumns(new Set())}>
                            Show all columns
                        </Button>
                    )
                }
            />

            <Table.ResizableContainer>
                <Table aria-label="Team members" sortDescriptor={sortDescriptor} onSortChange={setSortDescriptor}>
                    <Table.Header columns={columns}>
                        {(column) => (
                            <Table.Head
                                id={column.id}
                                label={column.label}
                                isRowHeader={column.isRowHeader}
                                allowsResizing
                                defaultWidth={column.defaultWidth}
                                minWidth={120}
                            >
                                {({ sortDirection, sort, startResize }) => (
                                    <>
                                        {sortDirection && (
                                            <ArrowDown
                                                className={cx("size-3 shrink-0 stroke-[3px] text-fg-quaternary", sortDirection === "ascending" && "rotate-180")}
                                            />
                                        )}
                                        <Dropdown.Root>
                                            <AriaButton
                                                aria-label={`${column.label} column options`}
                                                className="flex shrink-0 cursor-pointer rounded-xs p-0.5 text-fg-quaternary outline-focus-ring transition duration-100 ease-linear hover:bg-primary_hover hover:text-fg-quaternary_hover focus-visible:outline-2"
                                            >
                                                <ChevronDown className="size-4" />
                                            </AriaButton>
                                            <Dropdown.Popover placement="bottom start" className="w-52">
                                                <Dropdown.Menu
                                                    aria-label={`${column.label} column options`}
                                                    disabledKeys={column.isRowHeader ? ["hide"] : []}
                                                    onAction={(key) => {
                                                        if (key === "ascending" || key === "descending") sort(key);
                                                        if (key === "resize") startResize();
                                                        if (key === "hide") setHiddenColumns((prev) => new Set(prev).add(column.id));
                                                    }}
                                                >
                                                    <Dropdown.Item id="ascending" icon={ArrowUp} label="Sort ascending" />
                                                    <Dropdown.Item id="descending" icon={ArrowDown} label="Sort descending" />
                                                    <Dropdown.Separator />
                                                    <Dropdown.Item id="resize" icon={SwitchHorizontal01} label="Resize column" />
                                                    <Dropdown.Item id="hide" icon={EyeOff} label="Hide column" />
                                                </Dropdown.Menu>
                                            </Dropdown.Popover>
                                        </Dropdown.Root>
                                    </>
                                )}
                            </Table.Head>
                        )}
                    </Table.Header>

                    <Table.Body items={sortedItems} dependencies={[columns]}>
                        {(item) => (
                            <Table.Row id={item.username} columns={columns}>
                                {(column) => (
                                    <Table.Cell>
                                        {column.id === "name" ? (
                                            <div className="flex min-w-0 items-center gap-3">
                                                <Avatar src={item.avatarUrl} alt={item.name} size="md" />
                                                <div className="min-w-0">
                                                    <p className="truncate text-sm font-medium text-primary">{item.name}</p>
                                                    <p className="truncate text-sm text-tertiary">{item.username}</p>
                                                </div>
                                            </div>
                                        ) : column.id === "status" ? (
                                            <BadgeWithDot size="sm" color={item.status === "active" ? "success" : "gray"} type="modern">
                                                {item.status === "active" ? "Active" : "Inactive"}
                                            </BadgeWithDot>
                                        ) : (
                                            <p className="truncate">{item[column.id as "role" | "email"]}</p>
                                        )}
                                    </Table.Cell>
                                )}
                            </Table.Row>
                        )}
                    </Table.Body>
                </Table>
            </Table.ResizableContainer>
        </TableCard.Root>
    );
};

const projectFiles = [
    {
        id: "design",
        name: "Design",
        type: "folder",
        size: "62.4 MB",
        updatedAt: "Jan 6, 2025",
        owner: { name: "Olivia Rhye", avatarUrl: "https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80" },
        children: [
            {
                id: "design-system",
                name: "Design system",
                type: "folder",
                size: "28.1 MB",
                updatedAt: "Jan 6, 2025",
                owner: { name: "Olivia Rhye", avatarUrl: "https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80" },
                children: [
                    {
                        id: "components-fig",
                        name: "Components.fig",
                        type: "fig",
                        size: "18.7 MB",
                        updatedAt: "Jan 6, 2025",
                        owner: { name: "Olivia Rhye", avatarUrl: "https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80" },
                    },
                    {
                        id: "tokens-json",
                        name: "Design tokens.json",
                        type: "json",
                        size: "48 KB",
                        updatedAt: "Jan 5, 2025",
                        owner: { name: "Phoenix Baker", avatarUrl: "https://www.untitledui.com/images/avatars/phoenix-baker?fm=webp&q=80" },
                    },
                    {
                        id: "icons-svg",
                        name: "Icon set.svg",
                        type: "svg",
                        size: "9.3 MB",
                        updatedAt: "Jan 3, 2025",
                        owner: { name: "Lana Steiner", avatarUrl: "https://www.untitledui.com/images/avatars/lana-steiner?fm=webp&q=80" },
                    },
                ],
            },
            {
                id: "dashboard-fig",
                name: "Dashboard prototype.fig",
                type: "fig",
                size: "22.4 MB",
                updatedAt: "Jan 4, 2025",
                owner: { name: "Demi Wilkinson", avatarUrl: "https://www.untitledui.com/images/avatars/demi-wilkinson?fm=webp&q=80" },
            },
            {
                id: "screenshot-png",
                name: "Dashboard screenshot.png",
                type: "png",
                size: "720 KB",
                updatedAt: "Jan 4, 2025",
                owner: { name: "Phoenix Baker", avatarUrl: "https://www.untitledui.com/images/avatars/phoenix-baker?fm=webp&q=80" },
            },
        ],
    },
    {
        id: "research",
        name: "Research",
        type: "folder",
        size: "16.2 MB",
        updatedAt: "Jan 2, 2025",
        owner: { name: "Lana Steiner", avatarUrl: "https://www.untitledui.com/images/avatars/lana-steiner?fm=webp&q=80" },
        children: [
            {
                id: "interviews-mp4",
                name: "User interviews.mp4",
                type: "mp4",
                size: "14.8 MB",
                updatedAt: "Jan 2, 2025",
                owner: { name: "Lana Steiner", avatarUrl: "https://www.untitledui.com/images/avatars/lana-steiner?fm=webp&q=80" },
            },
            {
                id: "survey-csv",
                name: "Survey results.csv",
                type: "csv",
                size: "1.2 MB",
                updatedAt: "Dec 28, 2024",
                owner: { name: "Demi Wilkinson", avatarUrl: "https://www.untitledui.com/images/avatars/demi-wilkinson?fm=webp&q=80" },
            },
            {
                id: "findings-docx",
                name: "Key findings.docx",
                type: "docx",
                size: "240 KB",
                updatedAt: "Dec 20, 2024",
                owner: { name: "Lana Steiner", avatarUrl: "https://www.untitledui.com/images/avatars/lana-steiner?fm=webp&q=80" },
            },
        ],
    },
    {
        id: "requirements-pdf",
        name: "Tech requirements.pdf",
        type: "pdf",
        size: "200 KB",
        updatedAt: "Jan 4, 2025",
        owner: { name: "Olivia Rhye", avatarUrl: "https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80" },
    },
];

const projectFolderIds = ["design", "design-system", "research"];

export const TableExpandableRows = () => {
    type ProjectFile = {
        id: string;
        name: string;
        type: string;
        size: string;
        updatedAt: string;
        owner: { name: string; avatarUrl: string };
        children?: ProjectFile[];
    };

    const files: ProjectFile[] = projectFiles;
    const [expandedKeys, setExpandedKeys] = useState<Set<Key>>(new Set(["design"]));

    const isAllExpanded = projectFolderIds.every((id) => expandedKeys.has(id));

    return (
        <TableCard.Root>
            <TableCard.Header
                title="Project files"
                badge="10 files"
                description="Expand folders with the chevron, or with the arrow keys."
                contentTrailing={
                    <Button color="secondary" size="sm" onClick={() => setExpandedKeys(isAllExpanded ? new Set() : new Set(projectFolderIds))}>
                        {isAllExpanded ? "Collapse all" : "Expand all"}
                    </Button>
                }
            />

            <Table aria-label="Project files" selectionMode="multiple" treeColumn="name" expandedKeys={expandedKeys} onExpandedChange={setExpandedKeys}>
                <Table.Header>
                    <Table.Head id="name" label="File name" isRowHeader className="w-full" />
                    <Table.Head id="size" label="File size" />
                    <Table.Head id="updatedAt" label="Last updated" />
                    <Table.Head id="owner" label="Owner" />
                </Table.Header>

                <Table.Body items={files}>
                    {function renderProjectFile(item: ProjectFile) {
                        return (
                            <Table.Row id={item.id}>
                                <Table.Cell>
                                    <div className="flex items-center gap-3">
                                        <FileIcon type={item.type} theme="light" className="size-10 shrink-0 dark:hidden" />
                                        <FileIcon type={item.type} theme="dark" className="size-10 shrink-0 not-dark:hidden" />
                                        <p className="text-sm font-medium whitespace-nowrap text-primary">{item.name}</p>
                                    </div>
                                </Table.Cell>
                                <Table.Cell className="whitespace-nowrap">{item.size}</Table.Cell>
                                <Table.Cell className="whitespace-nowrap">{item.updatedAt}</Table.Cell>
                                <Table.Cell>
                                    <div className="flex items-center gap-2">
                                        <Avatar src={item.owner.avatarUrl} alt={item.owner.name} size="xs" />
                                        <span className="whitespace-nowrap">{item.owner.name}</span>
                                    </div>
                                </Table.Cell>
                                {item.children && <AriaCollection items={item.children}>{renderProjectFile}</AriaCollection>}
                            </Table.Row>
                        );
                    }}
                </Table.Body>
            </Table>
        </TableCard.Root>
    );
};

export const TableDragAndDrop = () => {
    const list = useListData({
        initialItems: teamMembers.items.slice(0, 6),
        getKey: (item) => item.username,
    });

    const { dragAndDropHooks } = useDragAndDrop({
        getItems: (keys) => [...keys].map((key) => ({ "text/plain": list.getItem(key)?.name ?? "", "text/x-username": String(key) })),
        onReorder: (event) => {
            if (event.target.dropPosition === "before") {
                list.moveBefore(event.target.key, event.keys);
            } else if (event.target.dropPosition === "after") {
                list.moveAfter(event.target.key, event.keys);
            }
        },
        renderDropIndicator: (target) => <Table.DropIndicator target={target} />,
        // A compact, rounded version of the dragged row. With several rows, a badge shows how many more are moving.
        renderDragPreview: (items) => {
            const member = list.getItem(items[0]?.["text/x-username"] ?? "");

            return (
                <div className="flex w-80 items-center gap-3 rounded-xl border border-secondary bg-primary px-4 py-3">
                    <Avatar src={member?.avatarUrl} alt={member?.name} size="md" />
                    <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium text-primary">{member?.name}</p>
                        <p className="truncate text-sm text-tertiary">{member?.role}</p>
                    </div>
                    {items.length > 1 && (
                        <Badge color="brand" size="sm">
                            +{items.length - 1}
                        </Badge>
                    )}
                </div>
            );
        },
    });

    return (
        <TableCard.Root>
            <TableCard.Header title="Onboarding order" badge="6 users" description="Drag rows to reorder them. Select several rows to move them together." />

            <Table aria-label="Onboarding order" selectionMode="multiple" dragAndDropHooks={dragAndDropHooks}>
                <Table.Header>
                    <Table.Head id="name" label="Name" isRowHeader className="w-full" />
                    <Table.Head id="role" label="Role" />
                    <Table.Head id="email" label="Email address" className="md:hidden xl:table-cell" />
                </Table.Header>

                <Table.Body items={list.items}>
                    {(item) => (
                        <Table.Row id={item.username} textValue={item.name}>
                            <Table.Cell>
                                <div className="flex items-center gap-3">
                                    <Avatar src={item.avatarUrl} alt={item.name} size="md" />
                                    <div className="whitespace-nowrap">
                                        <p className="text-sm font-medium text-primary">{item.name}</p>
                                        <p className="text-sm text-tertiary">{item.username}</p>
                                    </div>
                                </div>
                            </Table.Cell>
                            <Table.Cell className="whitespace-nowrap">{item.role}</Table.Cell>
                            <Table.Cell className="whitespace-nowrap md:hidden xl:table-cell">{item.email}</Table.Cell>
                        </Table.Row>
                    )}
                </Table.Body>
            </Table>
        </TableCard.Root>
    );
};

export const TableInfiniteScroll = () => {
    const list = useAsyncList<(typeof invoices.items)[number]>({
        load: async ({ cursor }) => {
            const page = cursor ? Number(cursor) : 0;

            // Simulate a network request.
            await new Promise((resolve) => setTimeout(resolve, 800));

            const items = invoices.items.map((invoice) => ({ ...invoice, id: String(Number(invoice.id) - page * invoices.items.length) }));

            return { items, cursor: page < 4 ? String(page + 1) : undefined };
        },
    });

    return (
        <TableCard.Root>
            <TableCard.Header title="Invoices" badge="50 invoices" description="More invoices load as you scroll. The header stays pinned to the top." />

            <Table aria-label="Invoices" wrapperClassName="h-120">
                <Table.Header className="sticky top-0 z-10">
                    <Table.Head id="id" label="Invoice" isRowHeader />
                    <Table.Head id="date" label="Date" />
                    <Table.Head id="status" label="Status" />
                    <Table.Head id="customer" label="Customer" className="w-full" />
                </Table.Header>

                <Table.Body>
                    <AriaCollection items={list.items}>
                        {(item) => (
                            <Table.Row id={item.id}>
                                <Table.Cell className="font-medium text-primary">#{item.id}</Table.Cell>
                                <Table.Cell className="whitespace-nowrap">
                                    {new Date(item.date).toLocaleString(undefined, { year: "numeric", month: "short", day: "numeric" })}
                                </Table.Cell>
                                <Table.Cell>
                                    {item.status === "paid" ? (
                                        <BadgeWithIcon size="sm" color="success" iconLeading={Check} className="capitalize">
                                            {item.status}
                                        </BadgeWithIcon>
                                    ) : item.status === "refunded" ? (
                                        <BadgeWithIcon size="sm" color="gray" iconLeading={ReverseLeft} className="capitalize">
                                            {item.status}
                                        </BadgeWithIcon>
                                    ) : (
                                        <BadgeWithIcon size="sm" color="error" iconLeading={X} className="capitalize">
                                            {item.status}
                                        </BadgeWithIcon>
                                    )}
                                </Table.Cell>
                                <Table.Cell>
                                    <div className="flex items-center gap-3">
                                        <Avatar src={item.customer.avatarUrl} alt={item.customer.name} size="sm" />
                                        <div className="whitespace-nowrap">
                                            <p className="text-sm font-medium text-primary">{item.customer.name}</p>
                                            <p className="text-sm text-tertiary">{item.customer.email}</p>
                                        </div>
                                    </div>
                                </Table.Cell>
                            </Table.Row>
                        )}
                    </AriaCollection>
                    <Table.LoadMoreItem isLoading={list.isLoading} onLoadMore={list.loadMore} />
                </Table.Body>
            </Table>
        </TableCard.Root>
    );
};

// Sorted copy, so the customers don't depend on demos that sort the shared data in place.
const liveTransactionCustomers = [...teamMembers.items].sort((a, b) => a.username.localeCompare(b.username));

// Builds a transaction from its index alone, so the server and the client render the same rows.
const createLiveTransaction = (index: number) => {
    const seconds = 9 * 3600 + 41 * 60 + index * 3 + ((index * 7) % 4);
    const customer = liveTransactionCustomers[(index * 3) % liveTransactionCustomers.length];

    return {
        index,
        id: `TX-${1000 + index}`,
        customer: { name: customer?.name ?? "", email: customer?.email ?? "", avatarUrl: customer?.avatarUrl ?? "" },
        amount: 12 + ((index * 7919) % 48000) / 100,
        status: index % 7 === 3 ? "Failed" : index % 5 === 1 ? "Pending" : "Completed",
        time: [Math.floor(seconds / 3600), Math.floor(seconds / 60) % 60, seconds % 60].map((part) => String(part).padStart(2, "0")).join(":"),
    };
};

// Each cell's content sits in a grid row that animates between 0fr and 1fr. A new row grows from 0fr (`starting:` is
// `@starting-style`) while the oldest row collapses, so the rows in between slide down and the table height stays constant.
// The content clips only vertically: hiding horizontal overflow would let the table shrink the columns and crop their content.
// The strong ease-out moves rows quickly at first and lets them settle gently. Keep the duration in sync with the removal delay.
const liveCellClassName =
    "grid grid-rows-[1fr] transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] starting:grid-rows-[0fr] starting:opacity-0 motion-reduce:transition-none";

export const TableRealTime = () => {
    const [transactions, setTransactions] = useState(() =>
        // Start with a full table (8 rows), so its height never changes and nothing below it shifts.
        [8, 7, 6, 5, 4, 3, 2, 1].map((index) => ({ ...createLiveTransaction(index), isExiting: false })),
    );
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return;

        let removeTimeout: ReturnType<typeof setTimeout> | undefined;

        // Simulate a stream of new transactions. Keep the 8 most recent: older rows collapse, then get removed.
        const interval = setInterval(() => {
            // Usually one transaction arrives at a time, sometimes two or three at once.
            const count = Math.random() < 0.5 ? 1 : 2 + Math.floor(Math.random() * 2);

            setTransactions((prev) => {
                const current = prev.filter((transaction) => !transaction.isExiting);
                const latestIndex = current[0]?.index ?? 0;
                const incoming = Array.from({ length: count }, (_, i) => ({ ...createLiveTransaction(latestIndex + count - i), isExiting: false }));

                return [...incoming, ...current].map((transaction, index) => (index >= 8 ? { ...transaction, isExiting: true } : transaction));
            });

            removeTimeout = setTimeout(() => setTransactions((prev) => prev.filter((transaction) => !transaction.isExiting)), 500);
        }, 2000);

        return () => {
            clearInterval(interval);
            clearTimeout(removeTimeout);
        };
    }, [isPaused]);

    return (
        <TableCard.Root>
            <TableCard.Header
                title="Live transactions"
                badge={
                    <BadgeWithDot size="sm" type="modern" color={isPaused ? "gray" : "success"}>
                        {isPaused ? "Paused" : "Live"}
                    </BadgeWithDot>
                }
                description="New transactions appear at the top as they come in."
                contentTrailing={
                    <Button color="secondary" size="sm" iconLeading={isPaused ? PlayCircle : PauseCircle} onClick={() => setIsPaused(!isPaused)}>
                        {isPaused ? "Continue" : "Pause"}
                    </Button>
                }
            />

            <Table aria-label="Live transactions">
                <Table.Header>
                    <Table.Head id="id" label="Transaction" isRowHeader />
                    <Table.Head id="customer" label="Customer" className="w-full" />
                    <Table.Head id="amount" label="Amount" className="text-right [&>div]:justify-end" />
                    <Table.Head id="status" label="Status" />
                    <Table.Head id="time" label="Time" />
                </Table.Header>

                <Table.Body items={transactions} dependencies={[transactions]}>
                    {(item) => (
                        // The row height comes from the animated cell content, and the cell padding moves inside it.
                        <Table.Row id={item.id} className="h-auto [&>td]:p-0">
                            <Table.Cell>
                                <div className={cx(liveCellClassName, item.isExiting && "grid-rows-[0fr] opacity-0")}>
                                    <div className="min-h-0 overflow-y-clip">
                                        <p className="px-6 py-4 font-medium whitespace-nowrap text-primary">{item.id}</p>
                                    </div>
                                </div>
                            </Table.Cell>
                            <Table.Cell>
                                <div className={cx(liveCellClassName, item.isExiting && "grid-rows-[0fr] opacity-0")}>
                                    <div className="min-h-0 overflow-y-clip">
                                        <div className="flex items-center gap-3 px-6 py-4">
                                            <Avatar src={item.customer.avatarUrl} alt={item.customer.name} size="sm" />
                                            <div className="whitespace-nowrap">
                                                <p className="text-sm font-medium text-primary">{item.customer.name}</p>
                                                <p className="text-sm text-tertiary">{item.customer.email}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Table.Cell>
                            <Table.Cell>
                                <div className={cx(liveCellClassName, item.isExiting && "grid-rows-[0fr] opacity-0")}>
                                    <div className="min-h-0 overflow-y-clip">
                                        <p className="px-6 py-4 text-right font-medium whitespace-nowrap text-primary tabular-nums">
                                            {item.amount.toLocaleString("en-US", { style: "currency", currency: "USD" })}
                                        </p>
                                    </div>
                                </div>
                            </Table.Cell>
                            <Table.Cell>
                                <div className={cx(liveCellClassName, item.isExiting && "grid-rows-[0fr] opacity-0")}>
                                    <div className="min-h-0 overflow-y-clip">
                                        <div className="px-6 py-4">
                                            <BadgeWithDot
                                                size="sm"
                                                type="modern"
                                                color={item.status === "Completed" ? "success" : item.status === "Pending" ? "warning" : "error"}
                                            >
                                                {item.status}
                                            </BadgeWithDot>
                                        </div>
                                    </div>
                                </div>
                            </Table.Cell>
                            <Table.Cell>
                                <div className={cx(liveCellClassName, item.isExiting && "grid-rows-[0fr] opacity-0")}>
                                    <div className="min-h-0 overflow-y-clip">
                                        <p className="px-6 py-4 whitespace-nowrap tabular-nums">{item.time}</p>
                                    </div>
                                </div>
                            </Table.Cell>
                        </Table.Row>
                    )}
                </Table.Body>
            </Table>
        </TableCard.Root>
    );
};

export const TableBulkActions = () => {
    const list = useListData({
        initialItems: invoices.items,
        getKey: (item) => item.id,
    });

    const selectedCount = list.selectedKeys === "all" ? list.items.length : list.selectedKeys.size;

    return (
        <TableCard.Root>
            <TableCard.Header
                title="Invoices"
                badge={selectedCount > 0 ? `${selectedCount} selected` : `${list.items.length} invoices`}
                description="Select invoices to download or delete them in bulk."
                contentTrailing={
                    // The actions stay rendered, so selecting rows doesn't shift the layout.
                    <div className="flex gap-3">
                        <Button color="secondary" size="sm" iconLeading={Download01} isDisabled={selectedCount === 0}>
                            Download
                        </Button>
                        <Button
                            color="secondary-destructive"
                            size="sm"
                            iconLeading={Trash01}
                            isDisabled={selectedCount === 0}
                            onClick={() => list.removeSelectedItems()}
                        >
                            Delete
                        </Button>
                    </div>
                }
            />

            <Table aria-label="Invoices" selectionMode="multiple" selectedKeys={list.selectedKeys} onSelectionChange={list.setSelectedKeys}>
                <Table.Header>
                    <Table.Head id="id" label="Invoice" isRowHeader />
                    <Table.Head id="date" label="Date" />
                    <Table.Head id="customer" label="Customer" className="w-full" />
                    <Table.Head id="purchase" label="Purchase" className="md:hidden xl:table-cell" />
                </Table.Header>

                <Table.Body
                    items={list.items}
                    renderEmptyState={() => (
                        <div className="flex items-center justify-center px-8 py-16">
                            <EmptyState size="sm">
                                <EmptyState.Header pattern="none">
                                    <EmptyState.FeaturedIcon color="gray" theme="modern-neue" />
                                </EmptyState.Header>
                                <EmptyState.Content>
                                    <EmptyState.Title>No invoices left</EmptyState.Title>
                                    <EmptyState.Description>You deleted every invoice. Refresh the page to bring them back.</EmptyState.Description>
                                </EmptyState.Content>
                            </EmptyState>
                        </div>
                    )}
                >
                    {(item) => (
                        <Table.Row id={item.id}>
                            <Table.Cell className="font-medium text-primary">#{item.id}</Table.Cell>
                            <Table.Cell className="whitespace-nowrap">
                                {new Date(item.date).toLocaleString(undefined, { year: "numeric", month: "short", day: "numeric" })}
                            </Table.Cell>
                            <Table.Cell>
                                <div className="flex items-center gap-3">
                                    <Avatar src={item.customer.avatarUrl} alt={item.customer.name} size="sm" />
                                    <div className="whitespace-nowrap">
                                        <p className="text-sm font-medium text-primary">{item.customer.name}</p>
                                        <p className="text-sm text-tertiary">{item.customer.email}</p>
                                    </div>
                                </div>
                            </Table.Cell>
                            <Table.Cell className="whitespace-nowrap md:hidden xl:table-cell">{item.purchase}</Table.Cell>
                        </Table.Row>
                    )}
                </Table.Body>
            </Table>
        </TableCard.Root>
    );
};

export const TableRowActions = () => {
    const [activeMember, setActiveMember] = useState<(typeof teamMembers.items)[number] | null>(null);

    return (
        <TableCard.Root>
            <TableCard.Header title="Team members" badge="100 users" description="Click a row to open the member's details. Use the checkboxes to select." />

            <Table
                aria-label="Team members"
                selectionMode="multiple"
                onRowAction={(key) => setActiveMember(teamMembers.items.find((member) => member.username === key) ?? null)}
            >
                <Table.Header>
                    <Table.Head id="name" label="Name" isRowHeader className="w-full" />
                    <Table.Head id="status" label="Status" />
                    <Table.Head id="role" label="Role" />
                    <Table.Head id="email" label="Email address" className="md:hidden xl:table-cell" />
                </Table.Header>

                <Table.Body items={teamMembers.items}>
                    {(item) => (
                        <Table.Row id={item.username} className="cursor-pointer">
                            <Table.Cell>
                                <div className="flex items-center gap-3">
                                    <Avatar src={item.avatarUrl} alt={item.name} size="md" />
                                    <div className="whitespace-nowrap">
                                        <p className="text-sm font-medium text-primary">{item.name}</p>
                                        <p className="text-sm text-tertiary">{item.username}</p>
                                    </div>
                                </div>
                            </Table.Cell>
                            <Table.Cell>
                                <BadgeWithDot size="sm" color={item.status === "active" ? "success" : "gray"} type="modern">
                                    {item.status === "active" ? "Active" : "Inactive"}
                                </BadgeWithDot>
                            </Table.Cell>
                            <Table.Cell className="whitespace-nowrap">{item.role}</Table.Cell>
                            <Table.Cell className="whitespace-nowrap md:hidden xl:table-cell">{item.email}</Table.Cell>
                        </Table.Row>
                    )}
                </Table.Body>
            </Table>

            <SlideoutMenu isOpen={activeMember !== null} onOpenChange={(isOpen) => !isOpen && setActiveMember(null)} isDismissable>
                {({ close }) =>
                    activeMember && (
                        <>
                            <SlideoutMenu.Header onClose={close} className="flex flex-col items-start gap-4">
                                <Avatar src={activeMember.avatarUrl} alt={activeMember.name} size="2xl" />
                                <div>
                                    <h2 className="text-lg font-semibold text-primary">{activeMember.name}</h2>
                                    <p className="text-sm text-tertiary">{activeMember.role}</p>
                                </div>
                            </SlideoutMenu.Header>
                            <SlideoutMenu.Content>
                                <dl className="flex flex-col gap-5">
                                    <div className="flex flex-col gap-1">
                                        <dt className="text-sm font-medium text-secondary">Email address</dt>
                                        <dd className="text-sm text-tertiary">{activeMember.email}</dd>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <dt className="text-sm font-medium text-secondary">Status</dt>
                                        <dd>
                                            <BadgeWithDot size="sm" color={activeMember.status === "active" ? "success" : "gray"} type="modern">
                                                {activeMember.status === "active" ? "Active" : "Inactive"}
                                            </BadgeWithDot>
                                        </dd>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <dt className="text-sm font-medium text-secondary">Teams</dt>
                                        <dd className="flex flex-wrap gap-1">
                                            {activeMember.teams.map((team) => (
                                                <Badge key={team.name} color={team.color as BadgeColor<BadgeTypes>} size="sm">
                                                    {team.name}
                                                </Badge>
                                            ))}
                                        </dd>
                                    </div>
                                </dl>
                            </SlideoutMenu.Content>
                            <SlideoutMenu.Footer className="flex justify-end gap-3">
                                <Button color="secondary" size="md" onClick={close}>
                                    Close
                                </Button>
                                <Button size="md" iconLeading={Edit01}>
                                    Edit member
                                </Button>
                            </SlideoutMenu.Footer>
                        </>
                    )
                }
            </SlideoutMenu>
        </TableCard.Root>
    );
};

export const TableDisabledRows = () => {
    const disabledKeys = customers.items.filter((customer) => customer.status === "Churned").map((customer) => customer.name);

    return (
        <TableCard.Root>
            <TableCard.Header title="Customers" badge="7 companies" description="Churned companies are disabled and can't be selected or focused." />

            <Table aria-label="Customers" selectionMode="multiple" disabledKeys={disabledKeys} disabledBehavior="all">
                <Table.Header>
                    <Table.Head id="name" label="Company" isRowHeader className="w-full" />
                    <Table.Head id="status" label="Status" />
                    <Table.Head id="about" label="About" className="md:hidden xl:table-cell" />
                    <Table.Head id="licenseUse" label="License use" className="min-w-55" />
                </Table.Header>

                <Table.Body items={customers.items}>
                    {(item) => (
                        <Table.Row id={item.name}>
                            <Table.Cell>
                                <div className="flex items-center gap-3">
                                    <Avatar src={item.logoUrl} alt={item.name} size="md" />
                                    <div className="whitespace-nowrap">
                                        <p className="text-sm font-medium text-primary">{item.name}</p>
                                        <p className="text-sm text-tertiary">{item.website}</p>
                                    </div>
                                </div>
                            </Table.Cell>
                            <Table.Cell>
                                <BadgeWithDot size="sm" color={item.status === "Customer" ? "success" : "gray"} type="modern">
                                    {item.status}
                                </BadgeWithDot>
                            </Table.Cell>
                            <Table.Cell className="whitespace-nowrap md:hidden xl:table-cell">
                                <p className="text-sm font-medium text-primary">{item.aboutTitle}</p>
                                <p className="text-sm text-tertiary">{item.aboutDescription}</p>
                            </Table.Cell>
                            <Table.Cell>
                                <ProgressBar labelPosition="right" value={item.licenseUse} />
                            </Table.Cell>
                        </Table.Row>
                    )}
                </Table.Body>
            </Table>
        </TableCard.Root>
    );
};

const inventoryProducts = [
    { id: "1", name: "Wireless headphones", sku: "WH-1000", price: "249.00", stock: "84" },
    { id: "2", name: "Mechanical keyboard", sku: "MK-2400", price: "129.00", stock: "152" },
    { id: "3", name: "Ergonomic mouse", sku: "EM-0350", price: "79.00", stock: "0" },
    { id: "4", name: "4K monitor", sku: "MN-2715", price: "449.00", stock: "23" },
    { id: "5", name: "USB-C dock", sku: "UD-0900", price: "189.00", stock: "61" },
];

export const TableEditableCells = () => {
    const [products, setProducts] = useState(inventoryProducts);

    const updateProduct = (id: string, field: "name" | "price" | "stock", value: string) => {
        setProducts((prev) => prev.map((product) => (product.id === id ? { ...product, [field]: value } : product)));
    };

    return (
        <TableCard.Root>
            <TableCard.Header
                title="Inventory"
                badge="5 products"
                description="Move between cells with the arrow keys. Press Tab to edit a cell and Shift+Tab to leave it."
            />

            <Table aria-label="Inventory" keyboardNavigationBehavior="tab">
                <Table.Header>
                    <Table.Head id="name" label="Product" isRowHeader className="w-full min-w-60" />
                    <Table.Head id="sku" label="SKU" />
                    <Table.Head id="price" label="Price" className="min-w-36" />
                    <Table.Head id="stock" label="Stock" className="min-w-28" />
                    <Table.Head id="status" label="Status" />
                </Table.Header>

                <Table.Body items={products} dependencies={[products]}>
                    {(item) => (
                        <Table.Row id={item.id}>
                            <Table.Cell textValue={item.name}>
                                <Input size="sm" aria-label="Product name" value={item.name} onChange={(value) => updateProduct(item.id, "name", value)} />
                            </Table.Cell>
                            <Table.Cell className="font-medium whitespace-nowrap text-primary">{item.sku}</Table.Cell>
                            <Table.Cell textValue={item.price}>
                                <Input
                                    size="sm"
                                    aria-label="Price"
                                    icon={CurrencyDollar}
                                    inputMode="decimal"
                                    value={item.price}
                                    onChange={(value) => updateProduct(item.id, "price", value)}
                                />
                            </Table.Cell>
                            <Table.Cell textValue={item.stock}>
                                <Input
                                    size="sm"
                                    aria-label="Stock"
                                    inputMode="numeric"
                                    value={item.stock}
                                    onChange={(value) => updateProduct(item.id, "stock", value)}
                                />
                            </Table.Cell>
                            <Table.Cell>
                                {Number(item.stock) > 0 ? (
                                    <BadgeWithDot size="sm" color="success" type="modern">
                                        In stock
                                    </BadgeWithDot>
                                ) : (
                                    <BadgeWithDot size="sm" color="error" type="modern">
                                        Out of stock
                                    </BadgeWithDot>
                                )}
                            </Table.Cell>
                        </Table.Row>
                    )}
                </Table.Body>
            </Table>
        </TableCard.Root>
    );
};

const orderLineItems = [
    { id: "1", product: "Team plan", description: "Annual subscription, 12 seats", quantity: 12, unitPrice: 192 },
    { id: "2", product: "Priority support", description: "24/7 support with 1 hour response time", quantity: 1, unitPrice: 1200 },
    { id: "3", product: "Onboarding workshop", description: "Two half-day sessions with our team", quantity: 2, unitPrice: 750 },
    { id: "4", product: "Extra storage", description: "500 GB additional storage", quantity: 3, unitPrice: 60 },
];

export const TableWithFooter = () => {
    const formatCurrency = (value: number) => value.toLocaleString("en-US", { style: "currency", currency: "USD" });

    const subtotal = orderLineItems.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0);
    const tax = subtotal * 0.1;

    return (
        <TableCard.Root>
            <TableCard.Header title="Order summary" description="Invoice #3066 · Due Jan 31, 2025" />

            <Table aria-label="Order summary">
                <Table.Header>
                    <Table.Head id="product" label="Product" isRowHeader className="w-full" />
                    <Table.Head id="quantity" label="Qty" className="text-right [&>div]:justify-end" />
                    <Table.Head id="unitPrice" label="Unit price" className="text-right [&>div]:justify-end" />
                    <Table.Head id="amount" label="Amount" className="text-right [&>div]:justify-end" />
                </Table.Header>

                <Table.Body items={orderLineItems}>
                    {(item) => (
                        <Table.Row id={item.id}>
                            <Table.Cell>
                                <p className="text-sm font-medium whitespace-nowrap text-primary">{item.product}</p>
                                <p className="text-sm whitespace-nowrap text-tertiary">{item.description}</p>
                            </Table.Cell>
                            <Table.Cell className="text-right tabular-nums">{item.quantity}</Table.Cell>
                            <Table.Cell className="text-right whitespace-nowrap tabular-nums">{formatCurrency(item.unitPrice)}</Table.Cell>
                            <Table.Cell className="text-right font-medium whitespace-nowrap text-primary tabular-nums">
                                {formatCurrency(item.quantity * item.unitPrice)}
                            </Table.Cell>
                        </Table.Row>
                    )}
                </Table.Body>

                <Table.Footer>
                    <Table.Row id="subtotal" size="sm">
                        <Table.Cell colSpan={3} className="text-right">
                            Subtotal
                        </Table.Cell>
                        <Table.Cell className="text-right whitespace-nowrap tabular-nums">{formatCurrency(subtotal)}</Table.Cell>
                    </Table.Row>
                    <Table.Row id="tax" size="sm">
                        <Table.Cell colSpan={3} className="text-right">
                            Tax (10%)
                        </Table.Cell>
                        <Table.Cell className="text-right whitespace-nowrap tabular-nums">{formatCurrency(tax)}</Table.Cell>
                    </Table.Row>
                    <Table.Row id="total" size="sm">
                        <Table.Cell colSpan={3} className="text-right font-semibold text-primary">
                            Total
                        </Table.Cell>
                        <Table.Cell className="text-right font-semibold whitespace-nowrap text-primary tabular-nums">
                            {formatCurrency(subtotal + tax)}
                        </Table.Cell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </TableCard.Root>
    );
};
