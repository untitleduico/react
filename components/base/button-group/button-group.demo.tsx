"use client";

import { useState } from "react";
import { Archive, ArrowLeft, ArrowRight, Edit03, Placeholder, Plus, Trash01 } from "@untitledui/icons";
import type { Key } from "react-aria";
import { ButtonGroup, ButtonGroupItem } from "@/components/base/button-group/button-group";
import { Dot } from "@/components/foundations/dot-icon";

export const Default = () => (
    <ButtonGroup selectedKeys={[]}>
        <ButtonGroupItem id="archive">Archive</ButtonGroupItem>
        <ButtonGroupItem id="edit">Edit</ButtonGroupItem>
        <ButtonGroupItem id="delete">Delete</ButtonGroupItem>
    </ButtonGroup>
);

export const LeadingIcon = () => (
    <ButtonGroup selectedKeys={[]}>
        <ButtonGroupItem id="archive" iconLeading={Archive}>
            Archive
        </ButtonGroupItem>
        <ButtonGroupItem id="edit" iconLeading={Edit03}>
            Edit
        </ButtonGroupItem>
        <ButtonGroupItem id="delete" iconLeading={Trash01}>
            Delete
        </ButtonGroupItem>
    </ButtonGroup>
);

export const ButtonGroupDot = () => (
    <ButtonGroup selectedKeys={["archive"]}>
        <ButtonGroupItem id="archive" iconLeading={<Dot className="mx-0.75 size-2 text-fg-success-secondary in-disabled:text-fg-disabled_subtle" />}>
            Text
        </ButtonGroupItem>
        <ButtonGroupItem id="edit" iconLeading={<Dot className="mx-0.75 size-2 text-fg-success-secondary in-disabled:text-fg-disabled_subtle" />}>
            Text
        </ButtonGroupItem>
        <ButtonGroupItem id="delete" isDisabled iconLeading={<Dot className="mx-0.75 size-2 text-fg-success-secondary in-disabled:text-fg-disabled_subtle" />}>
            Text
        </ButtonGroupItem>
    </ButtonGroup>
);

export const DisabledIndividualButton = () => (
    <ButtonGroup selectedKeys={[]}>
        <ButtonGroupItem id="archive">Archive</ButtonGroupItem>
        <ButtonGroupItem id="edit">Edit</ButtonGroupItem>
        <ButtonGroupItem isDisabled id="delete">
            Delete
        </ButtonGroupItem>
    </ButtonGroup>
);

export const DisabledAll = () => (
    <ButtonGroup isDisabled>
        <ButtonGroupItem id="archive">Archive</ButtonGroupItem>
        <ButtonGroupItem id="edit">Edit</ButtonGroupItem>
        <ButtonGroupItem id="delete">Delete</ButtonGroupItem>
    </ButtonGroup>
);

export const SelectedItem = () => {
    const [selectedKeys, setSelectedKeys] = useState<Set<Key>>(new Set(["today"]));

    return (
        <ButtonGroup selectedKeys={selectedKeys} onSelectionChange={setSelectedKeys}>
            <ButtonGroupItem id="today">Today</ButtonGroupItem>
            <ButtonGroupItem id="tomorrow">Tomorrow</ButtonGroupItem>
            <ButtonGroupItem id="thisweek">This week</ButtonGroupItem>
        </ButtonGroup>
    );
};

export const MultipleSelectedItems = () => {
    const [selectedKeys, setSelectedKeys] = useState<Set<Key>>(new Set(["today"]));

    return (
        <ButtonGroup selectionMode="multiple" selectedKeys={selectedKeys} onSelectionChange={setSelectedKeys}>
            <ButtonGroupItem id="today">Today</ButtonGroupItem>
            <ButtonGroupItem id="tomorrow">Tomorrow</ButtonGroupItem>
            <ButtonGroupItem id="thisweek">This week</ButtonGroupItem>
        </ButtonGroup>
    );
};

export const All = () => (
    <div className="flex flex-col gap-4">
        <ButtonGroup selectedKeys={["archive"]}>
            <ButtonGroupItem id="archive">Archive</ButtonGroupItem>
            <ButtonGroupItem id="edit">Edit</ButtonGroupItem>
            <ButtonGroupItem id="delete" isDisabled>
                Delete
            </ButtonGroupItem>
        </ButtonGroup>

        <ButtonGroup selectedKeys={["archive"]}>
            <ButtonGroupItem id="archive" iconLeading={Placeholder}>
                Archive
            </ButtonGroupItem>
            <ButtonGroupItem id="edit" iconLeading={Placeholder}>
                Edit
            </ButtonGroupItem>
            <ButtonGroupItem id="delete" isDisabled iconLeading={Placeholder}>
                Delete
            </ButtonGroupItem>
        </ButtonGroup>

        <ButtonGroup selectedKeys={["archive"]}>
            <ButtonGroupItem id="archive" iconLeading={<Dot className="mx-0.75 size-2 text-fg-success-secondary in-disabled:text-fg-disabled_subtle" />}>
                Archive
            </ButtonGroupItem>
            <ButtonGroupItem id="edit" iconLeading={<Dot className="mx-0.75 size-2 text-fg-success-secondary in-disabled:text-fg-disabled_subtle" />}>
                Edit
            </ButtonGroupItem>
            <ButtonGroupItem
                id="delete"
                isDisabled
                iconLeading={<Dot className="mx-0.75 size-2 text-fg-success-secondary in-disabled:text-fg-disabled_subtle" />}
            >
                Delete
            </ButtonGroupItem>
        </ButtonGroup>

        <ButtonGroup selectedKeys={["archive"]}>
            <ButtonGroupItem id="archive" iconLeading={ArrowLeft} aria-label="Previous" />
            <ButtonGroupItem id="edit" iconLeading={Plus} aria-label="Add" />
            <ButtonGroupItem id="delete" isDisabled iconLeading={ArrowRight} aria-label="Next" />
        </ButtonGroup>
    </div>
);
