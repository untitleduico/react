import type { FC } from "react";
import { DropdownAccountBreadcrumb } from "@/components/base/dropdown/dropdown-account-breadcrumb";
import { DropdownAccountButton } from "@/components/base/dropdown/dropdown-account-button";
import { DropdownAccountCardMD } from "@/components/base/dropdown/dropdown-account-card-md";
import { DropdownAccountCardSM } from "@/components/base/dropdown/dropdown-account-card-sm";
import { DropdownAccountCardXS } from "@/components/base/dropdown/dropdown-account-card-xs";
import { DropdownAvatar } from "@/components/base/dropdown/dropdown-avatar";
import { DropdownButtonAdvanced } from "@/components/base/dropdown/dropdown-button-advanced";
import { DropdownButtonLink } from "@/components/base/dropdown/dropdown-button-link";
import { DropdownButtonSimple } from "@/components/base/dropdown/dropdown-button-simple";
import { DropdownIconAdvanced } from "@/components/base/dropdown/dropdown-icon-advanced";
import { DropdownIconSimple } from "@/components/base/dropdown/dropdown-icon-simple";
import { DropdownIntegration } from "@/components/base/dropdown/dropdown-integration";
import { DropdownSearchAdvanced } from "@/components/base/dropdown/dropdown-search-advanced";
import { DropdownSearchSimple } from "@/components/base/dropdown/dropdown-search-simple";

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

export const DropdownButtonSimpleStory = () => <DropdownButtonSimple />;
DropdownButtonSimpleStory.storyName = "Dropdown menu button simple";

export const DropdownButtonAdvancedStory = () => <DropdownButtonAdvanced />;
DropdownButtonAdvancedStory.storyName = "Dropdown menu button advanced";

export const DropdownButtonLinkStory = () => <DropdownButtonLink />;
DropdownButtonLinkStory.storyName = "Dropdown menu button link";

export const DropdownIconSimpleStory = () => <DropdownIconSimple />;
DropdownIconSimpleStory.storyName = "Dropdown menu icon simple";

export const DropdownIconAdvancedStory = () => <DropdownIconAdvanced />;
DropdownIconAdvancedStory.storyName = "Dropdown menu icon advanced";

export const DropdownSearchSimpleStory = () => <DropdownSearchSimple />;
DropdownSearchSimpleStory.storyName = "Dropdown menu search simple";

export const DropdownSearchAdvancedStory = () => <DropdownSearchAdvanced />;
DropdownSearchAdvancedStory.storyName = "Dropdown menu search advanced";

export const DropdownIntegrationStory = () => <DropdownIntegration />;
DropdownIntegrationStory.storyName = "Dropdown menu integration";

export const DropdownAccountButtonStory = () => <DropdownAccountButton />;
DropdownAccountButtonStory.storyName = "Dropdown menu account button";

export const DropdownAvatarStory = () => <DropdownAvatar />;
DropdownAvatarStory.storyName = "Dropdown menu avatar";

export const DropdownAccountCardXSStory = () => <DropdownAccountCardXS />;
DropdownAccountCardXSStory.storyName = "Dropdown menu account card xs";

export const DropdownAccountCardSMStory = () => <DropdownAccountCardSM />;
DropdownAccountCardSMStory.storyName = "Dropdown menu account card sm";

export const DropdownAccountCardMDStory = () => <DropdownAccountCardMD />;
DropdownAccountCardMDStory.storyName = "Dropdown menu account card md";

export const DropdownAccountBreadcrumbStory = () => <DropdownAccountBreadcrumb />;
DropdownAccountBreadcrumbStory.storyName = "Dropdown menu account breadcrumb";
