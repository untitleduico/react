"use client";

import { User01 } from "@untitledui/icons";
import { useListData } from "react-stately";
import { MultiSelect } from "@/components/base/select/multi-select";
import { Select, type SelectItemType } from "@/components/base/select/select";
import { NativeSelect } from "@/components/base/select/select-native";
import { Dot } from "@/components/foundations/dot-icon";

const items = [
    {
        label: "Phoenix Baker",
        id: "@phoenix",
        supportingText: "@phoenix",
        avatarUrl: "https://www.untitledui.com/images/avatars/phoenix-baker?fm=webp&q=80",
    },
    { label: "Olivia Rhye", id: "@olivia", supportingText: "@olivia", avatarUrl: "https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80" },
    {
        label: "Lana Steiner",
        id: "@lana",
        supportingText: "@lana",

        avatarUrl: "https://www.untitledui.com/images/avatars/lana-steiner?fm=webp&q=80",
    },
    {
        label: "Demi Wilkinson",
        id: "@demi",
        supportingText: "@demi",
        avatarUrl: "https://www.untitledui.com/images/avatars/demi-wilkinson?fm=webp&q=80",
    },
    { label: "Candice Wu", id: "@candice", supportingText: "@candice", avatarUrl: "https://www.untitledui.com/images/avatars/candice-wu?fm=webp&q=80" },
    { label: "Natali Craig", id: "@natali", supportingText: "@natali", avatarUrl: "https://www.untitledui.com/images/avatars/natali-craig?fm=webp&q=80" },
    { label: "Abraham Baker", id: "@abraham", supportingText: "@abraham", avatarUrl: "https://www.untitledui.com/images/avatars/abraham-baker?fm=webp&q=80" },
    { label: "Adem Lane", id: "@adem", supportingText: "@adem", avatarUrl: "https://www.untitledui.com/images/avatars/adem-lane?fm=webp&q=80" },
    {
        label: "Jackson Reed",
        id: "@jackson",
        supportingText: "@jackson",
        avatarUrl: "https://www.untitledui.com/images/avatars/jackson-reed?fm=webp&q=80",
    },
    {
        label: "Jessie Meyton",
        id: "@jessie",
        supportingText: "@jessie",
        avatarUrl: "https://www.untitledui.com/images/avatars/jessie-meyton?fm=webp&q=80",
    },
];

export const DefaultDemo = () => {
    const items = [
        { label: "Phoenix Baker", id: "@phoenix", supportingText: "@phoenix" },
        { label: "Olivia Rhye", id: "@olivia", supportingText: "@olivia" },
        { label: "Lana Steiner", id: "@lana", supportingText: "@lana", disabled: true },
        { label: "Demi Wilkinson", id: "@demi", supportingText: "@demi" },
        { label: "Candice Wu", id: "@candice", supportingText: "@candice" },
        { label: "Natali Craig", id: "@natali", supportingText: "@natali" },
        { label: "Abraham Baker", id: "@abraham", supportingText: "@abraham" },
        { label: "Adem Lane", id: "@adem", supportingText: "@adem" },
        { label: "Jackson Reed", id: "@jackson", supportingText: "@jackson" },
        { label: "Jessie Meyton", id: "@jessie", supportingText: "@jessie" },
    ];

    return (
        <Select
            isRequired
            label="Team member"
            tooltip="This is a tooltip"
            hint="This is a hint text to help user."
            placeholder="Select team member"
            items={items}
        >
            {(item) => (
                <Select.Item id={item.id} supportingText={item.supportingText} isDisabled={item.isDisabled} icon={item.icon} avatarUrl={item.avatarUrl}>
                    {item.label}
                </Select.Item>
            )}
        </Select>
    );
};

export const DisabledDemo = () => {
    const items = [
        { label: "Phoenix Baker", id: "@phoenix", supportingText: "@phoenix" },
        { label: "Olivia Rhye", id: "@olivia", supportingText: "@olivia" },
        { label: "Lana Steiner", id: "@lana", supportingText: "@lana", disabled: true },
        { label: "Demi Wilkinson", id: "@demi", supportingText: "@demi" },
        { label: "Candice Wu", id: "@candice", supportingText: "@candice" },
        { label: "Natali Craig", id: "@natali", supportingText: "@natali" },
        { label: "Abraham Baker", id: "@abraham", supportingText: "@abraham" },
        { label: "Adem Lane", id: "@adem", supportingText: "@adem" },
        { label: "Jackson Reed", id: "@jackson", supportingText: "@jackson" },
        { label: "Jessie Meyton", id: "@jessie", supportingText: "@jessie" },
    ];

    return (
        <Select
            isRequired
            isDisabled
            label="Team member"
            tooltip="This is a tooltip"
            hint="This is a hint text to help user."
            placeholder="Select team member"
            items={items}
        >
            {(item) => (
                <Select.Item id={item.id} supportingText={item.supportingText} isDisabled={item.isDisabled} icon={item.icon} avatarUrl={item.avatarUrl}>
                    {item.label}
                </Select.Item>
            )}
        </Select>
    );
};

export const SizesDemo = () => {
    const items = [
        { label: "Phoenix Baker", id: "@phoenix", supportingText: "@phoenix" },
        { label: "Olivia Rhye", id: "@olivia", supportingText: "@olivia" },
        { label: "Lana Steiner", id: "@lana", supportingText: "@lana", disabled: true },
        { label: "Demi Wilkinson", id: "@demi", supportingText: "@demi" },
        { label: "Candice Wu", id: "@candice", supportingText: "@candice" },
        { label: "Natali Craig", id: "@natali", supportingText: "@natali" },
        { label: "Abraham Baker", id: "@abraham", supportingText: "@abraham" },
        { label: "Adem Lane", id: "@adem", supportingText: "@adem" },
        { label: "Jackson Reed", id: "@jackson", supportingText: "@jackson" },
        { label: "Jessie Meyton", id: "@jessie", supportingText: "@jessie" },
    ];

    return (
        <div className="flex flex-col gap-8">
            {/* Small */}
            <Select
                isRequired
                size="sm"
                label="Team member"
                tooltip="This is a tooltip"
                hint="This is a hint text to help user."
                placeholder="Select team member"
                items={items}
            >
                {(item) => (
                    <Select.Item id={item.id} supportingText={item.supportingText} isDisabled={item.isDisabled} icon={item.icon} avatarUrl={item.avatarUrl}>
                        {item.label}
                    </Select.Item>
                )}
            </Select>

            {/* Medium */}
            <Select
                isRequired
                size="md"
                label="Team member"
                tooltip="This is a tooltip"
                hint="This is a hint text to help user."
                placeholder="Select team member"
                items={items}
            >
                {(item) => (
                    <Select.Item id={item.id} supportingText={item.supportingText} isDisabled={item.isDisabled} icon={item.icon} avatarUrl={item.avatarUrl}>
                        {item.label}
                    </Select.Item>
                )}
            </Select>
        </div>
    );
};

export const IconLeadingDemo = () => {
    const items = [
        { label: "Phoenix Baker", id: "@phoenix", supportingText: "@phoenix", icon: User01 },
        { label: "Olivia Rhye", id: "@olivia", supportingText: "@olivia", icon: User01 },
        { label: "Lana Steiner", id: "@lana", supportingText: "@lana", icon: User01, disabled: true },
        { label: "Demi Wilkinson", id: "@demi", supportingText: "@demi", icon: User01 },
        { label: "Candice Wu", id: "@candice", supportingText: "@candice", icon: User01 },
        { label: "Natali Craig", id: "@natali", supportingText: "@natali", icon: User01 },
        { label: "Abraham Baker", id: "@abraham", supportingText: "@abraham", icon: User01 },
        { label: "Adem Lane", id: "@adem", supportingText: "@adem", icon: User01 },
        { label: "Jackson Reed", id: "@jackson", supportingText: "@jackson", icon: User01 },
        { label: "Jessie Meyton", id: "@jessie", supportingText: "@jessie", icon: User01 },
    ];

    return (
        <Select
            isRequired
            label="Team member"
            tooltip="This is a tooltip"
            hint="This is a hint text to help user."
            placeholder="Select team member"
            placeholderIcon={User01}
            items={items}
        >
            {(item) => (
                <Select.Item id={item.id} supportingText={item.supportingText} isDisabled={item.isDisabled} icon={item.icon} avatarUrl={item.avatarUrl}>
                    {item.label}
                </Select.Item>
            )}
        </Select>
    );
};

export const AvatarLeadingDemo = () => {
    const items = [
        {
            label: "Phoenix Baker",
            id: "@phoenix",
            supportingText: "@phoenix",
            avatarUrl: "https://www.untitledui.com/images/avatars/phoenix-baker?fm=webp&q=80",
        },
        {
            label: "Olivia Rhye",
            id: "@olivia",
            supportingText: "@olivia",
            avatarUrl: "https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80",
        },
        {
            label: "Lana Steiner",
            id: "@lana",
            supportingText: "@lana",

            avatarUrl: "https://www.untitledui.com/images/avatars/lana-steiner?fm=webp&q=80",
        },
        {
            label: "Demi Wilkinson",
            id: "@demi",
            supportingText: "@demi",
            avatarUrl: "https://www.untitledui.com/images/avatars/demi-wilkinson?fm=webp&q=80",
        },
        {
            label: "Candice Wu",
            id: "@candice",
            supportingText: "@candice",
            avatarUrl: "https://www.untitledui.com/images/avatars/candice-wu?fm=webp&q=80",
        },
        {
            label: "Natali Craig",
            id: "@natali",
            supportingText: "@natali",
            avatarUrl: "https://www.untitledui.com/images/avatars/natali-craig?fm=webp&q=80",
        },
        {
            label: "Abraham Baker",
            id: "@abraham",
            supportingText: "@abraham",
            avatarUrl: "https://www.untitledui.com/images/avatars/abraham-baker?fm=webp&q=80",
        },
        { label: "Adem Lane", id: "@adem", supportingText: "@adem", avatarUrl: "https://www.untitledui.com/images/avatars/adem-lane?fm=webp&q=80" },
        {
            label: "Jackson Reed",
            id: "@jackson",
            supportingText: "@jackson",
            avatarUrl: "https://www.untitledui.com/images/avatars/jackson-reed?fm=webp&q=80",
        },
        {
            label: "Jessie Meyton",
            id: "@jessie",
            supportingText: "@jessie",
            avatarUrl: "https://www.untitledui.com/images/avatars/jessie-meyton?fm=webp&q=80",
        },
    ];

    return (
        <Select
            isRequired
            label="Team member"
            tooltip="This is a tooltip"
            hint="This is a hint text to help user."
            placeholder="Select team member"
            placeholderIcon={User01}
            items={items}
        >
            {(item) => (
                <Select.Item id={item.id} supportingText={item.supportingText} isDisabled={item.isDisabled} icon={item.icon} avatarUrl={item.avatarUrl}>
                    {item.label}
                </Select.Item>
            )}
        </Select>
    );
};

export const DotLeadingDemo = () => {
    const items: SelectItemType[] = [
        {
            label: "Phoenix Baker",
            id: "@phoenix",
            supportingText: "@phoenix",
            icon: <Dot className="size-2.5 text-fg-success-secondary in-disabled:text-fg-disabled_subtle" />,
        },
        {
            label: "Olivia Rhye",
            id: "@olivia",
            supportingText: "@olivia",
            icon: <Dot className="size-2.5 text-fg-success-secondary in-disabled:text-fg-disabled_subtle" />,
        },
        {
            label: "Lana Steiner",
            id: "@lana",
            supportingText: "@lana",
            icon: <Dot className="size-2.5 text-fg-success-secondary in-disabled:text-fg-disabled_subtle" />,
        },
        {
            label: "Demi Wilkinson",
            id: "@demi",
            supportingText: "@demi",
            icon: <Dot className="size-2.5 text-fg-success-secondary in-disabled:text-fg-disabled_subtle" />,
        },
        {
            label: "Candice Wu",
            id: "@candice",
            supportingText: "@candice",
            icon: <Dot className="size-2.5 text-fg-success-secondary in-disabled:text-fg-disabled_subtle" />,
        },
        {
            label: "Natali Craig",
            id: "@natali",
            supportingText: "@natali",
            icon: <Dot className="size-2.5 text-fg-success-secondary in-disabled:text-fg-disabled_subtle" />,
        },
        {
            label: "Abraham Baker",
            id: "@abraham",
            supportingText: "@abraham",
            icon: <Dot className="size-2.5 text-fg-success-secondary in-disabled:text-fg-disabled_subtle" />,
        },
        {
            label: "Adem Lane",
            id: "@adem",
            supportingText: "@adem",
            icon: <Dot className="size-2.5 text-fg-success-secondary in-disabled:text-fg-disabled_subtle" />,
        },
        {
            label: "Jackson Reed",
            id: "@jackson",
            supportingText: "@jackson",
            icon: <Dot className="size-2.5 text-fg-success-secondary in-disabled:text-fg-disabled_subtle" />,
        },
        {
            label: "Jessie Meyton",
            id: "@jessie",
            supportingText: "@jessie",
            icon: <Dot className="size-2.5 text-fg-success-secondary in-disabled:text-fg-disabled_subtle" />,
        },
    ];

    return (
        <Select
            isRequired
            label="Team member"
            tooltip="This is a tooltip"
            hint="This is a hint text to help user."
            placeholder="Select team member"
            placeholderIcon={<Dot className="size-2.5 text-fg-success-secondary in-disabled:text-fg-disabled_subtle" />}
            items={items}
        >
            {(item) => (
                <Select.Item id={item.id} supportingText={item.supportingText} isDisabled={item.isDisabled} icon={item.icon} avatarUrl={item.avatarUrl}>
                    {item.label}
                </Select.Item>
            )}
        </Select>
    );
};

export const SearchDemo = () => {
    const items = [
        { label: "Phoenix Baker", id: "@phoenix", supportingText: "@phoenix" },
        { label: "Olivia Rhye", id: "@olivia", supportingText: "@olivia" },
        { label: "Lana Steiner", id: "@lana", supportingText: "@lana", disabled: true },
        { label: "Demi Wilkinson", id: "@demi", supportingText: "@demi" },
        { label: "Candice Wu", id: "@candice", supportingText: "@candice" },
        { label: "Natali Craig", id: "@natali", supportingText: "@natali" },
        { label: "Abraham Baker", id: "@abraham", supportingText: "@abraham" },
        { label: "Adem Lane", id: "@adem", supportingText: "@adem" },
        { label: "Jackson Reed", id: "@jackson", supportingText: "@jackson" },
        { label: "Jessie Meyton", id: "@jessie", supportingText: "@jessie" },
    ];

    return (
        <Select.ComboBox isRequired label="Search" tooltip="This is a tooltip" hint="This is a hint text to help user." placeholder="Search" items={items}>
            {(item) => (
                <Select.Item id={item.id} supportingText={item.supportingText} isDisabled={item.isDisabled} icon={item.icon} avatarUrl={item.avatarUrl}>
                    {item.label}
                </Select.Item>
            )}
        </Select.ComboBox>
    );
};

export const TagsDemo = () => {
    const selectedItems = useListData({
        initialItems: [],
    });

    const items = [
        {
            label: "Phoenix Baker",
            id: "@phoenix",
            supportingText: "@phoenix",
            avatarUrl: "https://www.untitledui.com/images/avatars/phoenix-baker?fm=webp&q=80",
        },
        { label: "Olivia Rhye", id: "@olivia", supportingText: "@olivia", avatarUrl: "https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80" },
        {
            label: "Lana Steiner",
            id: "@lana",
            supportingText: "@lana",
            disabled: true,
            avatarUrl: "https://www.untitledui.com/images/avatars/lana-steiner?fm=webp&q=80",
        },
        { label: "Demi Wilkinson", id: "@demi", supportingText: "@demi", avatarUrl: "https://www.untitledui.com/images/avatars/demi-wilkinson?fm=webp&q=80" },
        { label: "Candice Wu", id: "@candice", supportingText: "@candice", avatarUrl: "https://www.untitledui.com/images/avatars/candice-wu?fm=webp&q=80" },
        { label: "Natali Craig", id: "@natali", supportingText: "@natali", avatarUrl: "https://www.untitledui.com/images/avatars/natali-craig?fm=webp&q=80" },
        {
            label: "Abraham Baker",
            id: "@abraham",
            supportingText: "@abraham",
            avatarUrl: "https://www.untitledui.com/images/avatars/abraham-baker?fm=webp&q=80",
        },
        { label: "Adem Lane", id: "@adem", supportingText: "@adem", avatarUrl: "https://www.untitledui.com/images/avatars/adem-lane?fm=webp&q=80" },
        { label: "Jackson Reed", id: "@jackson", supportingText: "@jackson", avatarUrl: "https://www.untitledui.com/images/avatars/jackson-reed?fm=webp&q=80" },
        { label: "Jessie Meyton", id: "@jessie", supportingText: "@jessie", avatarUrl: "https://www.untitledui.com/images/avatars/jessie-meyton?fm=webp&q=80" },
    ];

    return (
        <MultiSelect
            isRequired
            selectedItems={selectedItems}
            label="Search"
            tooltip="This is a tooltip"
            hint="This is a hint text to help user."
            placeholder="Search"
            items={items}
        >
            {(item) => (
                <MultiSelect.Item id={item.id} supportingText={item.supportingText} isDisabled={item.isDisabled} icon={item.icon} avatarUrl={item.avatarUrl}>
                    {item.label}
                </MultiSelect.Item>
            )}
        </MultiSelect>
    );
};

export const Native = () => (
    <NativeSelect
        label="Team members"
        options={[
            { label: "Wade Cooper", value: "@wadecooper" },
            { label: "Arlene Mccoy", value: "@arlenemccoy" },
            { label: "Devon Webb", value: "@devonwebb", disabled: true },
            { label: "Tom Cook", value: "@tomcook" },
            { label: "Tanya Fox", value: "@tanyafox" },
            { label: "Hellen Schmidt", value: "@hellenschmidt" },
            { label: "Caroline Schultz", value: "@carolineschultz" },
            { label: "Mason Heaney", value: "@masonheaney" },
            { label: "Claudie Smitham", value: "@claudiesmitham" },
            { label: "Emil Schaefer", value: "@emilschaefer" },
        ]}
        hint="This is a hint text to help user."
    />
);

export const Default = () => {
    return (
        <div className="flex flex-col gap-16">
            <div className="flex flex-col gap-4">
                <Select
                    isRequired
                    label="Team member"
                    tooltip="This is a tooltip"
                    hint="This is a hint text to help user."
                    placeholder="Select team member"
                    items={items.map(({ avatarUrl: _, ...item }) => item)}
                >
                    {(item) => (
                        <Select.Item id={item.id} supportingText={item.supportingText} isDisabled={item.isDisabled} icon={item.icon} avatarUrl={item.avatarUrl}>
                            {item.label}
                        </Select.Item>
                    )}
                </Select>
                <Select
                    isDisabled
                    isRequired
                    label="Team member"
                    tooltip="This is a tooltip"
                    hint="This is a hint text to help user."
                    placeholder="Select team member"
                    items={items.map(({ avatarUrl: _, ...item }) => item)}
                >
                    {(item) => (
                        <Select.Item id={item.id} supportingText={item.supportingText} isDisabled={item.isDisabled} icon={item.icon} avatarUrl={item.avatarUrl}>
                            {item.label}
                        </Select.Item>
                    )}
                </Select>
            </div>
            <div className="flex flex-col gap-4">
                <Select
                    isRequired
                    size="md"
                    label="Team member"
                    tooltip="This is a tooltip"
                    hint="This is a hint text to help user."
                    placeholder="Select team member"
                    items={items.map(({ avatarUrl: _, ...item }) => item)}
                >
                    {(item) => (
                        <Select.Item id={item.id} supportingText={item.supportingText} isDisabled={item.isDisabled} icon={item.icon} avatarUrl={item.avatarUrl}>
                            {item.label}
                        </Select.Item>
                    )}
                </Select>
                <Select
                    isDisabled
                    isRequired
                    size="md"
                    label="Team member"
                    tooltip="This is a tooltip"
                    hint="This is a hint text to help user."
                    placeholder="Select team member"
                    items={items.map(({ avatarUrl: _, ...item }) => item)}
                >
                    {(item) => (
                        <Select.Item id={item.id} supportingText={item.supportingText} isDisabled={item.isDisabled} icon={item.icon} avatarUrl={item.avatarUrl}>
                            {item.label}
                        </Select.Item>
                    )}
                </Select>
            </div>
        </div>
    );
};

export const IconLeading = () => (
    <div className="flex flex-col gap-16">
        <div className="flex flex-col gap-4">
            <Select
                isRequired
                label="Team member"
                tooltip="This is a tooltip"
                hint="This is a hint text to help user."
                placeholder="Select team member"
                placeholderIcon={User01}
                items={items.map(({ avatarUrl: _, ...item }) => ({ ...item, icon: User01 }))}
            >
                {(item) => (
                    <Select.Item id={item.id} supportingText={item.supportingText} isDisabled={item.isDisabled} icon={item.icon} avatarUrl={item.avatarUrl}>
                        {item.label}
                    </Select.Item>
                )}
            </Select>
            <Select
                isRequired
                label="Team member"
                tooltip="This is a tooltip"
                hint="This is a hint text to help user."
                placeholder="Select team member"
                placeholderIcon={User01}
                isDisabled
                items={items.map(({ avatarUrl: _, ...item }) => ({ ...item, icon: User01 }))}
            >
                {(item) => (
                    <Select.Item id={item.id} supportingText={item.supportingText} isDisabled={item.isDisabled} icon={item.icon} avatarUrl={item.avatarUrl}>
                        {item.label}
                    </Select.Item>
                )}
            </Select>
        </div>
        <div className="flex flex-col gap-4">
            <Select
                size="md"
                isRequired
                label="Team member"
                tooltip="This is a tooltip"
                hint="This is a hint text to help user."
                placeholder="Select team member"
                placeholderIcon={User01}
                items={items.map(({ avatarUrl: _, ...item }) => ({ ...item, icon: User01 }))}
            >
                {(item) => (
                    <Select.Item id={item.id} supportingText={item.supportingText} isDisabled={item.isDisabled} icon={item.icon} avatarUrl={item.avatarUrl}>
                        {item.label}
                    </Select.Item>
                )}
            </Select>
            <Select
                size="md"
                isRequired
                label="Team member"
                tooltip="This is a tooltip"
                hint="This is a hint text to help user."
                placeholder="Select team member"
                placeholderIcon={User01}
                isDisabled
                items={items.map(({ avatarUrl: _, ...item }) => ({ ...item, icon: User01 }))}
            >
                {(item) => (
                    <Select.Item id={item.id} supportingText={item.supportingText} isDisabled={item.isDisabled} icon={item.icon} avatarUrl={item.avatarUrl}>
                        {item.label}
                    </Select.Item>
                )}
            </Select>
        </div>
    </div>
);

export const AvatarLeading = () => (
    <div className="flex flex-col gap-16">
        <div className="flex flex-col gap-4">
            <Select
                isRequired
                label="Team member"
                tooltip="This is a tooltip"
                hint="This is a hint text to help user."
                placeholder="Select team member"
                placeholderIcon={User01}
                items={items}
            >
                {(item) => (
                    <Select.Item id={item.id} supportingText={item.supportingText} isDisabled={item.isDisabled} icon={item.icon} avatarUrl={item.avatarUrl}>
                        {item.label}
                    </Select.Item>
                )}
            </Select>
            <Select
                isRequired
                label="Team member"
                tooltip="This is a tooltip"
                hint="This is a hint text to help user."
                placeholder="Select team member"
                placeholderIcon={User01}
                isDisabled
                items={items}
            >
                {(item) => (
                    <Select.Item id={item.id} supportingText={item.supportingText} isDisabled={item.isDisabled} icon={item.icon} avatarUrl={item.avatarUrl}>
                        {item.label}
                    </Select.Item>
                )}
            </Select>
        </div>
        <div className="flex flex-col gap-4">
            <Select
                size="md"
                isRequired
                label="Team member"
                tooltip="This is a tooltip"
                hint="This is a hint text to help user."
                placeholder="Select team member"
                placeholderIcon={User01}
                items={items}
            >
                {(item) => (
                    <Select.Item id={item.id} supportingText={item.supportingText} isDisabled={item.isDisabled} icon={item.icon} avatarUrl={item.avatarUrl}>
                        {item.label}
                    </Select.Item>
                )}
            </Select>
            <Select
                size="md"
                isRequired
                label="Team member"
                tooltip="This is a tooltip"
                hint="This is a hint text to help user."
                placeholder="Select team member"
                placeholderIcon={User01}
                isDisabled
                items={items}
            >
                {(item) => (
                    <Select.Item id={item.id} supportingText={item.supportingText} isDisabled={item.isDisabled} icon={item.icon} avatarUrl={item.avatarUrl}>
                        {item.label}
                    </Select.Item>
                )}
            </Select>
        </div>
    </div>
);

export const DotLeading = () => (
    <div className="flex flex-col gap-16">
        <div className="flex flex-col gap-4">
            <Select
                isRequired
                label="Team member"
                tooltip="This is a tooltip"
                hint="This is a hint text to help user."
                placeholder="Select team member"
                placeholderIcon={<Dot className="size-2.5 text-fg-success-secondary in-disabled:text-fg-disabled_subtle" />}
                items={items.map(({ avatarUrl: _, ...item }) => ({
                    ...item,
                    icon: <Dot className="size-2.5 text-fg-success-secondary in-disabled:text-fg-disabled_subtle" />,
                }))}
            >
                {(item) => (
                    <Select.Item id={item.id} supportingText={item.supportingText} isDisabled={item.isDisabled} icon={item.icon} avatarUrl={item.avatarUrl}>
                        {item.label}
                    </Select.Item>
                )}
            </Select>
            <Select
                isDisabled
                isRequired
                label="Team member"
                tooltip="This is a tooltip"
                hint="This is a hint text to help user."
                placeholder="Select team member"
                placeholderIcon={<Dot className="size-2.5 text-fg-success-secondary in-disabled:text-fg-disabled_subtle" />}
                items={items.map(({ avatarUrl: _, ...item }) => ({
                    ...item,
                    icon: <Dot className="size-2.5 text-fg-success-secondary in-disabled:text-fg-disabled_subtle" />,
                }))}
            >
                {(item) => (
                    <Select.Item id={item.id} supportingText={item.supportingText} isDisabled={item.isDisabled} icon={item.icon} avatarUrl={item.avatarUrl}>
                        {item.label}
                    </Select.Item>
                )}
            </Select>
        </div>
        <div className="flex flex-col gap-4">
            <Select
                size="md"
                isRequired
                label="Team member"
                tooltip="This is a tooltip"
                hint="This is a hint text to help user."
                placeholder="Select team member"
                placeholderIcon={<Dot className="size-2.5 text-fg-success-secondary in-disabled:text-fg-disabled_subtle" />}
                items={items.map(({ avatarUrl: _, ...item }) => ({
                    ...item,
                    icon: <Dot className="size-2.5 text-fg-success-secondary in-disabled:text-fg-disabled_subtle" />,
                }))}
            >
                {(item) => (
                    <Select.Item id={item.id} supportingText={item.supportingText} isDisabled={item.isDisabled} icon={item.icon} avatarUrl={item.avatarUrl}>
                        {item.label}
                    </Select.Item>
                )}
            </Select>
            <Select
                isDisabled
                isRequired
                size="md"
                label="Team member"
                tooltip="This is a tooltip"
                hint="This is a hint text to help user."
                placeholder="Select team member"
                placeholderIcon={<Dot className="size-2.5 text-fg-success-secondary in-disabled:text-fg-disabled_subtle" />}
                items={items.map(({ avatarUrl: _, ...item }) => ({
                    ...item,
                    icon: <Dot className="size-2.5 text-fg-success-secondary in-disabled:text-fg-disabled_subtle" />,
                }))}
            >
                {(item) => (
                    <Select.Item id={item.id} supportingText={item.supportingText} isDisabled={item.isDisabled} icon={item.icon} avatarUrl={item.avatarUrl}>
                        {item.label}
                    </Select.Item>
                )}
            </Select>
        </div>
    </div>
);

export const Search = () => (
    <div className="flex flex-col gap-16">
        <div className="flex flex-col gap-4">
            <Select.ComboBox
                isRequired
                label="Search"
                tooltip="This is a tooltip"
                hint="This is a hint text to help user."
                placeholder="Search"
                items={items.map(({ avatarUrl: _, ...item }) => item)}
            >
                {(item) => (
                    <Select.Item id={item.id} supportingText={item.supportingText} isDisabled={item.isDisabled} icon={item.icon} avatarUrl={item.avatarUrl}>
                        {item.label}
                    </Select.Item>
                )}
            </Select.ComboBox>
            <Select.ComboBox
                isRequired
                label="Search"
                tooltip="This is a tooltip"
                hint="This is a hint text to help user."
                placeholder="Search"
                isDisabled
                items={items.map(({ avatarUrl: _, ...item }) => item)}
            >
                {(item) => (
                    <Select.Item id={item.id} supportingText={item.supportingText} isDisabled={item.isDisabled} icon={item.icon} avatarUrl={item.avatarUrl}>
                        {item.label}
                    </Select.Item>
                )}
            </Select.ComboBox>
        </div>
        <div className="flex flex-col gap-4">
            <Select.ComboBox
                size="md"
                isRequired
                label="Search"
                tooltip="This is a tooltip"
                hint="This is a hint text to help user."
                placeholder="Search"
                items={items.map(({ avatarUrl: _, ...item }) => item)}
            >
                {(item) => (
                    <Select.Item id={item.id} supportingText={item.supportingText} isDisabled={item.isDisabled} icon={item.icon} avatarUrl={item.avatarUrl}>
                        {item.label}
                    </Select.Item>
                )}
            </Select.ComboBox>
            <Select.ComboBox
                size="md"
                isRequired
                label="Search"
                tooltip="This is a tooltip"
                hint="This is a hint text to help user."
                placeholder="Search"
                isDisabled
                items={items.map(({ avatarUrl: _, ...item }) => item)}
            >
                {(item) => (
                    <Select.Item id={item.id} supportingText={item.supportingText} isDisabled={item.isDisabled} icon={item.icon} avatarUrl={item.avatarUrl}>
                        {item.label}
                    </Select.Item>
                )}
            </Select.ComboBox>
        </div>
    </div>
);

export const Tags = () => {
    const selectedItems = useListData({
        initialItems: [],
    });

    return (
        <div className="flex flex-col gap-16">
            <div className="flex flex-col gap-4">
                <MultiSelect
                    shortcut
                    selectedItems={selectedItems}
                    isRequired
                    label="Search"
                    tooltip="This is a tooltip"
                    hint="This is a hint text to help user."
                    placeholder="Search"
                    items={items}
                >
                    {(item) => (
                        <MultiSelect.Item
                            id={item.id}
                            supportingText={item.supportingText}
                            isDisabled={item.isDisabled}
                            icon={item.icon}
                            avatarUrl={item.avatarUrl}
                        >
                            {item.label}
                        </MultiSelect.Item>
                    )}
                </MultiSelect>

                <MultiSelect
                    shortcut
                    selectedItems={selectedItems}
                    isRequired
                    label="Search"
                    tooltip="This is a tooltip"
                    hint="This is a hint text to help user."
                    placeholder="Search"
                    items={items}
                    isDisabled
                >
                    {(item) => (
                        <MultiSelect.Item
                            id={item.id}
                            supportingText={item.supportingText}
                            isDisabled={item.isDisabled}
                            icon={item.icon}
                            avatarUrl={item.avatarUrl}
                        >
                            {item.label}
                        </MultiSelect.Item>
                    )}
                </MultiSelect>
            </div>
            <div className="flex flex-col gap-4">
                <MultiSelect
                    shortcut
                    selectedItems={selectedItems}
                    size="md"
                    isRequired
                    label="Search"
                    tooltip="This is a tooltip"
                    hint="This is a hint text to help user."
                    items={items}
                    placeholder="Search"
                >
                    {(item) => (
                        <MultiSelect.Item
                            id={item.id}
                            supportingText={item.supportingText}
                            isDisabled={item.isDisabled}
                            icon={item.icon}
                            avatarUrl={item.avatarUrl}
                        >
                            {item.label}
                        </MultiSelect.Item>
                    )}
                </MultiSelect>
                <MultiSelect
                    shortcut
                    selectedItems={selectedItems}
                    size="md"
                    isRequired
                    label="Search"
                    tooltip="This is a tooltip"
                    hint="This is a hint text to help user."
                    placeholder="Search"
                    items={items}
                    isDisabled
                >
                    {(item) => (
                        <MultiSelect.Item
                            id={item.id}
                            supportingText={item.supportingText}
                            isDisabled={item.isDisabled}
                            icon={item.icon}
                            avatarUrl={item.avatarUrl}
                        >
                            {item.label}
                        </MultiSelect.Item>
                    )}
                </MultiSelect>
            </div>
        </div>
    );
};
