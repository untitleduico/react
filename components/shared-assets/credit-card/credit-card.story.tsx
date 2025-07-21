import type { FC } from "react";
import { CreditCard } from "./credit-card";

export default {
    title: "Shared Assets/Miscellaneous assets/Credit Card",
    decorators: [
        (Story: FC) => (
            <div className="min-h-screen bg-secondary p-8">
                <Story />
            </div>
        ),
    ],
};

export const CreditCardStory = () => (
    <div className="flex gap-8">
        <div className="flex flex-col gap-8">
            <CreditCard type="transparent" />
            <CreditCard type="transparent-gradient" />
            <CreditCard type="brand-dark" />
            <CreditCard type="brand-light" />
            <CreditCard type="gray-dark" />
            <CreditCard type="gray-light" />
        </div>

        <div className="flex flex-col gap-8">
            <CreditCard type="transparent-strip" />
            <CreditCard type="gray-strip" />
            <CreditCard type="gradient-strip" />
            <CreditCard type="salmon-strip" />
        </div>

        <div className="flex flex-col gap-8">
            <CreditCard type="gray-strip-vertical" />
            <CreditCard type="gradient-strip-vertical" />
            <CreditCard type="salmon-strip-vertical" />
        </div>
    </div>
);

CreditCardStory.storyName = "Credit card";
