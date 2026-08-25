import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import type { Selection } from "react-aria-components";
import { Tag, TagGroup, TagList } from "./tags";

/**
 * Canonical interactive story for Tags.
 *
 * Tags are a compound React Aria API — a `Tag` can't render alone, it must
 * live inside `TagGroup > TagList`. The `TagsPreview` wrapper below assembles
 * that structure and exposes the meaningful axes as flat Controls: group-level
 * `size` / `selectionMode`, plus a per-tag `variant` (label / dot / count /
 * avatar) and a `closable` toggle. Selection is interactive when
 * `selectionMode` is single or multiple.
 */

const sizes = ["sm", "md", "lg"] as const;
const selectionModes = ["none", "single", "multiple"] as const;
const variants = ["label", "dot", "count", "avatar"] as const;

const AVATAR_SRC = "https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80";

const ITEMS = [
    { id: "tag-01", label: "Design" },
    { id: "tag-02", label: "Product" },
    { id: "tag-03", label: "Engineering" },
    { id: "tag-04", label: "Marketing" },
];

interface TagsPreviewProps {
    size: (typeof sizes)[number];
    selectionMode: (typeof selectionModes)[number];
    variant: (typeof variants)[number];
    closable: boolean;
}

/** Assembles the compound TagGroup > TagList > Tag structure from flat args. */
const TagsPreview = ({ size, selectionMode, variant, closable }: TagsPreviewProps) => {
    const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set(["tag-01"]));

    return (
        <TagGroup
            label="Tags"
            size={size}
            selectionMode={selectionMode}
            {...(selectionMode !== "none" ? { selectedKeys, onSelectionChange: setSelectedKeys } : {})}
        >
            <TagList className="flex flex-wrap gap-2">
                {ITEMS.map((item, index) => (
                    <Tag
                        key={item.id}
                        id={item.id}
                        dot={variant === "dot"}
                        count={variant === "count" ? (index + 1) * 3 : undefined}
                        avatarSrc={variant === "avatar" ? AVATAR_SRC : undefined}
                        onClose={closable ? () => {} : undefined}
                    >
                        {item.label}
                    </Tag>
                ))}
            </TagList>
        </TagGroup>
    );
};

const meta = {
    title: "Base components/Tags",
    component: TagsPreview,
    tags: ["autodocs"],
    parameters: { layout: "padded" },
    args: { size: "md", selectionMode: "none", variant: "label", closable: false },
    argTypes: {
        size: { control: "select", options: sizes },
        selectionMode: { control: "select", options: selectionModes },
        variant: { control: "select", options: variants },
        closable: { control: "boolean" },
    },
} satisfies Meta<typeof TagsPreview>;

export default meta;

type Story = StoryObj<typeof meta>;

/** Single interactive tag group — edit props live in the Controls panel. */
export const Playground: Story = {};

/** The tag group across every size. */
export const Sizes: Story = {
    render: (args) => (
        <div className="flex flex-col gap-6">
            {sizes.map((size) => (
                <TagsPreview key={size} {...args} size={size} />
            ))}
        </div>
    ),
};

/** Selectable tags (checkbox appears when selection is enabled). */
export const WithSelection: Story = {
    name: "With selection",
    args: { selectionMode: "multiple" },
};

/** Tags with leading avatars. */
export const WithAvatar: Story = {
    name: "With avatar",
    args: { variant: "avatar" },
};
