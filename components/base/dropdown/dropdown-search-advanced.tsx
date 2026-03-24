"use client";

import { useState } from "react";
import { ChevronDown, Plus, SearchLg } from "@untitledui/icons";
import type { Selection } from "react-aria-components";
import { Autocomplete, SearchField, SubmenuTrigger, useFilter } from "react-aria-components";
import { Button } from "@/components/base/buttons/button";
import { Dropdown } from "@/components/base/dropdown/dropdown";
import { InputBase } from "../input/input";

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
