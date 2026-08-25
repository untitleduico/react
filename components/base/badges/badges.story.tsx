import type { ReactNode } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ArrowRight } from "@untitledui/icons";
import { Badge, BadgeWithButton, BadgeWithDot, BadgeWithFlag, BadgeWithIcon, BadgeWithImage } from "./badges";

/**
 * Canonical interactive story for the Badge.
 *
 * `Playground` drives the base `Badge` from the Controls panel. The curated
 * rows below are hand-picked references: `Colors` (all 12), `Types` (the 3
 * shapes), and `Variants` (the sibling badge components — dot, icon, flag,
 * image, close button).
 *
 * NOTE: `type="modern"` intentionally collapses the color surface to gray —
 * that's by design in `badges.tsx`, not a bug.
 */

const sizes = ["sm", "md", "lg"] as const;
const types = ["pill-color", "color", "modern"] as const;
const colors = ["gray", "brand", "error", "warning", "success", "slate", "sky", "blue", "indigo", "purple", "pink", "orange"] as const;

const IMG_SRC = "https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80";

/** Small captioned cell so it's obvious which badge is which. */
const Labeled = ({ label, children }: { label: string; children: ReactNode }) => (
    <div className="flex flex-col items-start gap-2">
        <span className="text-xs font-medium tracking-wide text-tertiary uppercase">{label}</span>
        {children}
    </div>
);

const meta = {
    title: "Base components/Badges",
    component: Badge,
    tags: ["autodocs"],
    parameters: { layout: "padded" },
    args: {
        type: "pill-color",
        size: "md",
        color: "brand",
        children: "Label",
    },
    argTypes: {
        type: { control: "select", options: types },
        size: { control: "select", options: sizes },
        color: { control: "select", options: colors },
        children: { control: "text" },
    },
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

/** Single interactive badge — edit props live in the Controls panel. */
export const Playground: Story = {};

/** The badge in all 12 colors (pill-color type). */
export const Colors: Story = {
    render: (args) => (
        <div className="flex flex-wrap items-start gap-3">
            {colors.map((color) => (
                <Badge key={color} type="pill-color" size={args.size} color={color}>
                    {color}
                </Badge>
            ))}
        </div>
    ),
};

/** The three badge shapes. */
export const Types: Story = {
    render: (args) => (
        <div className="flex flex-wrap items-start gap-8">
            <Labeled label="pill-color">
                <Badge type="pill-color" size={args.size} color="brand">
                    Label
                </Badge>
            </Labeled>
            <Labeled label="color">
                <Badge type="color" size={args.size} color="brand">
                    Label
                </Badge>
            </Labeled>
            <Labeled label="modern (gray)">
                <Badge type="modern" size={args.size} color="gray">
                    Label
                </Badge>
            </Labeled>
        </div>
    ),
};

/** The sibling badge components sharing the same size/type/color axes. */
export const Variants: Story = {
    render: (args) => (
        <div className="flex flex-wrap items-center gap-4">
            <Labeled label="Dot">
                <BadgeWithDot size={args.size} color="success">
                    Label
                </BadgeWithDot>
            </Labeled>
            <Labeled label="Icon">
                <BadgeWithIcon size={args.size} color="brand" iconTrailing={ArrowRight}>
                    Label
                </BadgeWithIcon>
            </Labeled>
            <Labeled label="Flag">
                <BadgeWithFlag size={args.size} color="gray" flag="AU">
                    Label
                </BadgeWithFlag>
            </Labeled>
            <Labeled label="Image">
                <BadgeWithImage size={args.size} color="gray" imgSrc={IMG_SRC}>
                    Label
                </BadgeWithImage>
            </Labeled>
            <Labeled label="Close button">
                <BadgeWithButton size={args.size} color="gray" buttonLabel="Remove">
                    Label
                </BadgeWithButton>
            </Labeled>
        </div>
    ),
};
