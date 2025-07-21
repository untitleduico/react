import type { FC } from "react";
import * as Buttons from "./social-buttons.demo";

export default {
    title: "Base components/Buttons",
    excludeStories: ["GoogleLogo", "GoogleButton", "FacebookButton", "AppleButton"],
    decorators: [
        (Story: FC) => (
            <div className="flex min-h-screen w-full bg-primary p-4">
                <Story />
            </div>
        ),
    ],
};

export const SocialButtons = () => <Buttons.SocialButtons />;
SocialButtons.storyName = "Social buttons";

export const SocialButtonGroups = () => <Buttons.SocialButtonGroups />;
SocialButtonGroups.storyName = "Social button groups";
