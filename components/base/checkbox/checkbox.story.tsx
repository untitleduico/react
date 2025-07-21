import type { FC } from "react";
import * as Checkbox from "@/components/base/checkbox/checkbox.demo";

export default {
    title: "Base components/Checkboxes",
    decorators: [
        (Story: FC) => (
            <div className="flex min-h-screen w-full bg-primary p-4">
                <Story />
            </div>
        ),
    ],
};

export const Checkboxes = () => <Checkbox.Checkboxes />;

export const CheckboxBase = () => <Checkbox.CheckboxBase />;
CheckboxBase.storyName = "Checkbox base";
