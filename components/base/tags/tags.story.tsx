import type { FC } from "react";
import * as Tags from "@/components/base/tags/tags.demo";

export default {
    title: "Base components/Tags",
    decorators: [
        (Story: FC) => (
            <div className="flex min-h-screen w-full overflow-auto bg-primary p-4">
                <Story />
            </div>
        ),
    ],
};

export const Default = () => <Tags.Default />;

export const CloseX = () => <Tags.CloseX />;

export const Count = () => <Tags.Count />;

export const CheckboxDefault = () => <Tags.CheckboxDefault />;
CheckboxDefault.storyName = "Checkbox default";

export const CheckboxCloseX = () => <Tags.CheckboxCloseX />;
CheckboxCloseX.storyName = "Checkbox close X";

export const CheckboxCount = () => <Tags.CheckboxCount />;
CheckboxCount.storyName = "Checkbox count";
