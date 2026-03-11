import type { FC } from "react";
import * as Dropdowns from "@/components/base/dropdown/dropdown.demo";

export default {
    title: "Base components/Dropdown menus",
    decorators: [
        (Story: FC) => (
            <div className="flex min-h-screen w-full items-start justify-center bg-primary p-8">
                <Story />
            </div>
        ),
    ],
};

export const DropdownButtonSimple = () => <Dropdowns.DropdownButtonSimple />;
DropdownButtonSimple.storyName = "Dropdown menu button simple";

export const DropdownButtonAdvanced = () => <Dropdowns.DropdownButtonAdvanced />;
DropdownButtonAdvanced.storyName = "Dropdown menu button advanced";

export const DropdownIconSimple = () => <Dropdowns.DropdownIconSimple />;
DropdownIconSimple.storyName = "Dropdown menu icon simple";

export const DropdownIconAdvanced = () => <Dropdowns.DropdownIconAdvanced />;
DropdownIconAdvanced.storyName = "Dropdown menu icon advanced";

export const DropdownSearchSimple = () => <Dropdowns.DropdownSearchSimple />;
DropdownSearchSimple.storyName = "Dropdown menu search simple";

export const DropdownSearchAdvanced = () => <Dropdowns.DropdownSearchAdvanced />;
DropdownSearchAdvanced.storyName = "Dropdown menu search advanced";

export const DropdownAccountButton = () => <Dropdowns.DropdownAccountButton />;
DropdownAccountButton.storyName = "Dropdown menu account button";

export const DropdownAvatar = () => <Dropdowns.DropdownAvatar />;
DropdownAvatar.storyName = "Dropdown menu avatar";

export const DropdownAccountCardXS = () => <Dropdowns.DropdownAccountCardXS />;
DropdownAccountCardXS.storyName = "Dropdown menu account card xs";

export const DropdownAccountCardSM = () => <Dropdowns.DropdownAccountCardSM />;
DropdownAccountCardSM.storyName = "Dropdown menu account card sm";

export const DropdownAccountCardMD = () => <Dropdowns.DropdownAccountCardMD />;
DropdownAccountCardMD.storyName = "Dropdown menu account card md";

export const DropdownAccountBreadcrumb = () => <Dropdowns.DropdownAccountBreadcrumb />;
DropdownAccountBreadcrumb.storyName = "Dropdown menu account breadcrumb";
