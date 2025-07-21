import type { FC } from "react";
import * as Dropdowns from "@/components/base/dropdown/dropdown.demo";

export default {
    title: "Base components/Dropdowns",
    decorators: [
        (Story: FC) => (
            <div className="flex min-h-screen w-full items-start justify-center bg-primary p-8">
                <Story />
            </div>
        ),
    ],
};

export const DropdownButton = () => <Dropdowns.DropdownButton />;
DropdownButton.storyName = "Dropdown button";

export const DropdownIcon = () => <Dropdowns.DropdownIcon />;
DropdownIcon.storyName = "Dropdown icon";

export const DropdownAvatar = () => <Dropdowns.DropdownAvatar />;
DropdownAvatar.storyName = "Dropdown avatar";
