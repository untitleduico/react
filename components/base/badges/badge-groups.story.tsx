import type { FC } from "react";
import * as BadgeGroup from "@/components/base/badges/badge-groups.demo";

export default {
    title: "Base components/Badge groups",
    decorators: [
        (Story: FC) => (
            <div className="flex h-screen w-full bg-primary p-4">
                <Story />
            </div>
        ),
    ],
};

export const PillColorLeading = () => <BadgeGroup.PillColorLeading />;
PillColorLeading.storyName = "Pill color leading";

export const PillColorTrailing = () => <BadgeGroup.PillColorTrailing />;
PillColorTrailing.storyName = "Pill color trailing";

export const BadgeModernLeading = () => <BadgeGroup.BadgeModernLeading />;
BadgeModernLeading.storyName = "Badge modern leading";

export const BadgeModernTrailing = () => <BadgeGroup.BadgeModernTrailing />;
BadgeModernTrailing.storyName = "Badge modern trailing";
