import type { FC } from "react";
import * as ButtonGroup from "@/components/base/button-group/button-group.demo";

export default {
    title: "Base components/Button groups",
    decorators: [
        (Story: FC) => (
            <div className="flex min-h-screen w-full bg-primary p-4">
                <Story />
            </div>
        ),
    ],
};

export const ButtonGroups = () => <ButtonGroup.All />;
ButtonGroups.storyName = "Button groups";
