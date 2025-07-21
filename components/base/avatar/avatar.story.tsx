import type { FC } from "react";
import * as Avatar from "@/components/base/avatar/avatar.demo";

export default {
    title: "Base components/Avatars",
    decorators: [
        (Story: FC) => (
            <div className="flex min-h-screen w-full bg-primary p-4">
                <Story />
            </div>
        ),
    ],
};

export const Group = () => <Avatar.Group />;

export const Default = () => <Avatar.Default />;

export const Placeholder = () => <Avatar.Placeholder />;

export const Initials = () => <Avatar.Initials />;

export const LabelGroup = () => <Avatar.LabelGroup />;
LabelGroup.storyName = "Label group";

export const ProfilePhoto = () => <Avatar.ProfilePhoto />;
ProfilePhoto.storyName = "Profile photo";
