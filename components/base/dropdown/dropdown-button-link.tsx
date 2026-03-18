"use client";

import { useState } from "react";
import { ChevronDown, Trash01 } from "@untitledui/icons";
import { Button as AriaButton } from "react-aria-components";
import { Dropdown } from "@/components/base/dropdown/dropdown";
import { cx } from "@/utils/cx";

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
