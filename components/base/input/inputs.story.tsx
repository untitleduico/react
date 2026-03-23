import type { FC } from "react";
import * as Inputs from "@/components/base/input/inputs.demo";

export default {
    title: "Base components/Inputs",
    decorators: [
        (Story: FC) => (
            <div className="flex min-h-screen w-full bg-primary p-4">
                <Story />
            </div>
        ),
    ],
};

const DefaultDecorator = (Story: FC) => (
    <div className="w-full max-w-xs">
        <Story />
    </div>
);

const WiderDecorator = (Story: FC) => (
    <div className="w-full max-w-100">
        <Story />
    </div>
);

export const Default = () => <Inputs.Default />;
Default.decorators = [DefaultDecorator];

export const LeadingIcon = () => <Inputs.LeadingIcon />;
LeadingIcon.decorators = [DefaultDecorator];
LeadingIcon.storyName = "Leading icon";

export const LeadingDropdown = () => <Inputs.LeadingDropdown />;
LeadingDropdown.decorators = [DefaultDecorator];
LeadingDropdown.storyName = "Leading dropdown";

export const TrailingDropdown = () => <Inputs.TrailingDropdown />;
TrailingDropdown.decorators = [DefaultDecorator];
TrailingDropdown.storyName = "Trailing dropdown";

export const LeadingText = () => <Inputs.LeadingText />;
LeadingText.decorators = [DefaultDecorator];
LeadingText.storyName = "Leading text";

export const PaymentInputs = () => <Inputs.PaymentInputs />;
PaymentInputs.decorators = [DefaultDecorator];
PaymentInputs.storyName = "Payment inputs";

export const TrailingButton = () => <Inputs.TrailingButton />;
TrailingButton.decorators = [WiderDecorator];
TrailingButton.storyName = "Trailing button";

export const PasswordInputs = () => <Inputs.PasswordInputs />;
PasswordInputs.decorators = [DefaultDecorator];
PasswordInputs.storyName = "Password inputs";

export const DateInputs = () => <Inputs.DateInputs />;
DateInputs.decorators = [DefaultDecorator];
DateInputs.storyName = "Date inputs";

export const NumberInputsHorizontal = () => <Inputs.NumberInputsHorizontal />;
NumberInputsHorizontal.decorators = [DefaultDecorator];
NumberInputsHorizontal.storyName = "Number inputs horizontal";

export const NumberInputsVertical = () => <Inputs.NumberInputsVertical />;
NumberInputsVertical.decorators = [DefaultDecorator];
NumberInputsVertical.storyName = "Number inputs vertical";

export const FileUploadInput = () => <Inputs.FileUploadInputs />;
FileUploadInput.decorators = [WiderDecorator];
FileUploadInput.storyName = "File upload input";

export const Tags = () => <Inputs.TagInputs />;
Tags.decorators = [WiderDecorator];
Tags.storyName = "Tag inputs inner";

export const TagsOuter = () => <Inputs.TagInputsOuter />;
TagsOuter.decorators = [WiderDecorator];
TagsOuter.storyName = "Tag inputs outer";
