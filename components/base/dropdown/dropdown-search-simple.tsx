"use client";

import { useState } from "react";
import { ChevronDown, SearchLg } from "@untitledui/icons";
import type { Selection } from "react-aria-components";
import { Autocomplete, SearchField, useFilter } from "react-aria-components";
import { Button } from "@/components/base/buttons/button";
import { Dropdown } from "@/components/base/dropdown/dropdown";
import { InputBase } from "../input/input";

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
