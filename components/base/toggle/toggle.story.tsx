import type { ReactNode } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Toggle } from "./toggle";

/**
 * Canonical interactive story for the Toggle.
 *
 * `Playground` renders one Toggle driven entirely by the Controls panel; the
 * curated rows below (`Sizes`, `States`) are hand-picked references for
 * at-a-glance review. Selection is interactive — click the toggle, or set
 * `defaultSelected` for its initial value.
 */

const sizes = ["sm", "md"] as const;

/** Small captioned cell so it's obvious which toggle is which. */
const Labeled = ({ label, children }: { label: string; children: ReactNode }) => (
    <div className="flex flex-col items-start gap-2">
        <span className="text-xs font-medium tracking-wide text-tertiary uppercase">{label}</span>
        {children}
    </div>
);

const meta = {
    title: "Base components/Toggles",
    component: Toggle,
    tags: ["autodocs"],
    parameters: { layout: "centered" },
    args: {
        size: "sm",
        label: "Remember me",
        hint: "Save my login details for next time.",
        slim: false,
        isDisabled: false,
        defaultSelected: false,
    },
    argTypes: {
        size: { control: "select", options: sizes },
        label: { control: "text" },
        hint: { control: "text" },
        slim: { control: "boolean" },
        isDisabled: { control: "boolean" },
        defaultSelected: { control: "boolean" },
    },
} satisfies Meta<typeof Toggle>;

export default meta;

type Story = StoryObj<typeof meta>;

/** Single interactive toggle — edit props live in the Controls panel. */
export const Playground: Story = {};

/** The toggle across every size. */
export const Sizes: Story = {
    render: (args) => (
        <div className="flex flex-wrap items-start gap-8">
            {sizes.map((size) => (
                <Labeled key={size} label={size}>
                    <Toggle {...args} size={size} defaultSelected />
                </Labeled>
            ))}
        </div>
    ),
};

/** The toggle in each interactive state. */
export const States: Story = {
    render: (args) => (
        <div className="flex flex-wrap items-start gap-8">
            <Labeled label="Off">
                <Toggle {...args} defaultSelected={false} />
            </Labeled>
            <Labeled label="On">
                <Toggle {...args} defaultSelected />
            </Labeled>
            <Labeled label="Disabled">
                <Toggle {...args} isDisabled />
            </Labeled>
            <Labeled label="Disabled on">
                <Toggle {...args} isDisabled defaultSelected />
            </Labeled>
            <Labeled label="Slim">
                <Toggle {...args} slim defaultSelected />
            </Labeled>
        </div>
    ),
};
