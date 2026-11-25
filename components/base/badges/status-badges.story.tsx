import type { FC } from "react";
import * as StatusBadges from "@/components/base/badges/status-badges.demo";

export default {
    title: "Base components/Status badges",
    decorators: [
        (Story: FC) => (
            <div className="flex h-screen w-full bg-primary p-4">
                <Story />
            </div>
        ),
    ],
};

export const Default = () => <StatusBadges.Default />;

export const PillColor = () => <StatusBadges.PillColor />;
PillColor.storyName = "Pill color";

export const BadgeModern = () => <StatusBadges.BadgeModern />;
BadgeModern.storyName = "Badge modern";

export const IconOnly = () => <StatusBadges.IconOnly />;
IconOnly.storyName = "Icon only";

export const IconOnlyBadgeModern = () => <StatusBadges.IconOnlyBadgeModern />;
IconOnlyBadgeModern.storyName = "Icon only badge modern";

export const StatusIcons = () => <StatusBadges.StatusIcons />;
StatusIcons.storyName = "Status icons";
