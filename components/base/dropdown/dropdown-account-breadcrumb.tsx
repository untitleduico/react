"use client";

import { useState } from "react";
import { ChevronSelectorVertical } from "@untitledui/icons";
import { Button as AriaButton, MenuItem as AriaMenuItem } from "react-aria-components";
import { Avatar } from "@/components/base/avatar/avatar";
import { Dropdown } from "@/components/base/dropdown/dropdown";
import { cx } from "@/utils/cx";
import { RadioButtonBase } from "../radio-buttons/radio-buttons";

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
