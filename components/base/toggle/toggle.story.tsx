import type { FC } from "react";
import * as ToggleComponents from "@/components/base/toggle/toggle.demo";

export default {
    title: "Base components/Toggles",
    decorators: [
        (Story: FC) => (
            <div className="flex min-h-screen w-full bg-primary p-4">
                <Story />
            </div>
        ),
    ],
};

export const Toggles = () => <ToggleComponents.Toggles />;

export const ToggleBase = () => <ToggleComponents.ToggleBase />;
ToggleBase.storyName = "Toggle base";
export const TogglesSlim = () => <ToggleComponents.TogglesSlim />;
TogglesSlim.storyName = "Toggles slim";

export const ToggleSlimBase = () => <ToggleComponents.ToggleSlimBase />;
ToggleSlimBase.storyName = "Toggle slim base";
