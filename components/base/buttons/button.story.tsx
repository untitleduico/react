import type { ReactNode } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Plus, UploadCloud02 } from "@untitledui/icons";
import { Button } from "./button";

/**
 * Canonical interactive story for the Button.
 *
 * The `Playground` renders a single Button driven entirely by the Controls
 * panel — switch color, size, text, and toggle disabled/loading live. The
 * curated stories below (`Sizes`, `States`, `IconStroke`) are hand-picked
 * reference rows for at-a-glance review.
 *
 * Everything renders straight from the shipped design tokens in
 * `styles/theme.css` — e.g. the primary fill is `bg-brand-solid` →
 * `--color-bg-brand-solid` → `--color-brand-600`. Change that token and
 * every button here updates automatically.
 */

const sizes = ["sm", "md", "lg", "xl"] as const;

const colors = [
    "primary",
    "secondary",
    "tertiary",
    "link-gray",
    "link-color",
    "primary-destructive",
    "secondary-destructive",
    "tertiary-destructive",
    "link-destructive",
] as const;

/** Small captioned cell so it's obvious which button is which. */
const Labeled = ({ label, children }: { label: string; children: ReactNode }) => (
    <div className="flex flex-col items-center gap-2">
        <span className="text-xs font-medium tracking-wide text-tertiary uppercase">{label}</span>
        {children}
    </div>
);

const meta = {
    title: "Base components/Buttons/Button",
    component: Button,
    tags: ["autodocs"],
    parameters: { layout: "centered" },
    args: { color: "primary", size: "md", children: "Button CTA" },
    argTypes: {
        color: { control: "select", options: colors },
        size: { control: "select", options: sizes },
        children: { control: "text" },
        isDisabled: { control: "boolean" },
        isLoading: { control: "boolean" },
        showTextWhileLoading: { control: "boolean" },
    },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

/** Single interactive button — edit props live in the Controls panel. */
export const Playground: Story = {};

/** The primary button across every size. */
export const Sizes: Story = {
    render: (args) => (
        <div className="flex flex-wrap items-end gap-8">
            {sizes.map((size) => (
                <Labeled key={size} label={size}>
                    <Button {...args} size={size} />
                </Labeled>
            ))}
        </div>
    ),
};

/**
 * STROKE PROTOTYPE — trialing a 1.5px default icon stroke (was 2px).
 * Stroke is in the icon's 24-unit viewBox, so on-screen thickness scales with size:
 *   sm icon = 16px → ~1.0px stroke · md/lg/xl icon = 20px → ~1.25px stroke.
 * Compare against how these read before committing the default across the system.
 */
export const IconStroke: Story = {
    render: (args) => (
        <div className="flex flex-col gap-8">
            <div className="flex flex-wrap items-end gap-8">
                {sizes.map((size) => (
                    <Labeled key={size} label={`${size} · ${size === "sm" ? "16px icon" : "20px icon"}`}>
                        <Button {...args} size={size} iconLeading={UploadCloud02}>
                            Button CTA
                        </Button>
                    </Labeled>
                ))}
            </div>
            <div className="flex flex-wrap items-end gap-8">
                {sizes.map((size) => (
                    <Labeled key={size} label={`${size} · icon only`}>
                        <Button {...args} size={size} iconLeading={Plus} aria-label="Add" />
                    </Labeled>
                ))}
            </div>
        </div>
    ),
};
IconStroke.storyName = "Icon stroke (1.5px prototype)";

/** The primary button in each interactive state. */
export const States: Story = {
    render: (args) => (
        <div className="flex flex-wrap items-end gap-8">
            <Labeled label="Default">
                <Button {...args} />
            </Labeled>
            <Labeled label="Disabled">
                <Button {...args} isDisabled />
            </Labeled>
            <Labeled label="Loading">
                <Button {...args} isLoading />
            </Labeled>
            <Labeled label="Loading + text">
                <Button {...args} isLoading showTextWhileLoading />
            </Labeled>
        </div>
    ),
};
