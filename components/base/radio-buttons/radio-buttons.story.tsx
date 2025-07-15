import * as Radio from "@/components/base/radio-buttons/radio-buttons.demo";

export default {
    title: "Base components/Radio buttons",
    decorators: [
        (Story: any) => (
            <div className="flex min-h-screen w-full bg-primary p-4">
                <Story />
            </div>
        ),
    ],
};

export const RadioButtons = () => <Radio.RadioButtons />;
RadioButtons.storyName = "Radio buttons";

export const RadioButtonsBase = () => <Radio.RadioButtonsBase />;
RadioButtonsBase.storyName = "Radio buttons base";
