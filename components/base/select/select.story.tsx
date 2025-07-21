import type { FC } from "react";
import * as Selects from "@/components/base/select/select.demo";

export default {
    title: "Base components/Select",
};

const DefaultDecorator = (Story: FC) => (
    <div className="flex min-h-screen w-full bg-primary p-4">
        <div className="w-80">
            <Story />
        </div>
    </div>
);

const WiderDecorator = (Story: FC) => (
    <div className="flex min-h-screen w-full bg-primary p-4">
        <div className="w-100">
            <Story />
        </div>
    </div>
);

export const Default = () => <Selects.Default />;
Default.decorators = [DefaultDecorator];

export const IconLeading = () => <Selects.IconLeading />;
IconLeading.decorators = [DefaultDecorator];
IconLeading.storyName = "Icon leading";

export const AvatarLeading = () => <Selects.AvatarLeading />;
AvatarLeading.decorators = [DefaultDecorator];
AvatarLeading.storyName = "Avatar leading";

export const DotLeading = () => <Selects.DotLeading />;
DotLeading.decorators = [DefaultDecorator];
DotLeading.storyName = "Dot leading";

export const Search = () => <Selects.Search />;
Search.decorators = [DefaultDecorator];

export const Tags = () => <Selects.Tags />;
Tags.decorators = [WiderDecorator];
