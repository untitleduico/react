import type { FC } from "react";
import * as Tooltips from "@/components/base/tooltip/tooltip.demo";

export default {
    title: "Base components/Tooltips",
    decorators: [
        (Story: FC) => (
            <div className="flex min-h-screen items-center justify-center bg-primary p-16">
                <Story />
            </div>
        ),
    ],
};

export const Tooltip = () => <Tooltips.TooltipDemo />;

export const TooltipWithArrow = () => <Tooltips.TooltipWithArrow />;
TooltipWithArrow.storyName = "Tooltip with arrow";

export const TooltipWithArrowSupportingText = () => <Tooltips.TooltipWithArrowSupportingText />;
TooltipWithArrowSupportingText.storyName = "Tooltip with arrow supporting text";
