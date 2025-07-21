import type { FC } from "react";
import * as TextAreas from "@/components/base/textarea/textarea.demo";

export default {
    title: "Base components/Inputs/Textarea",
    decorators: [
        (Story: FC) => (
            <div className="flex min-h-screen w-full bg-primary p-4">
                <Story />
            </div>
        ),
    ],
};

export const Textarea = () => <TextAreas.Textarea />;
