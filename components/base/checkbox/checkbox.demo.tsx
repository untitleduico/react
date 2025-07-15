"use client";

import { Checkbox } from "@/components/base/checkbox/checkbox";

export const DefaultDemo = () => <Checkbox label="Remember me" hint="Save my login details for next time." size="sm" />;

export const BaseDemo = () => <Checkbox size="sm" />;

export const WithLabelDemo = () => <Checkbox label="Remember me" size="sm" />;

export const WithLabelAndHintDemo = () => <Checkbox label="Remember me" hint="Save my login details for next time." size="sm" />;

export const DisabledDemo = () => <Checkbox isDisabled label="Remember me" hint="Save my login details for next time." size="sm" />;

export const SizesDemo = () => (
    <div className="flex flex-col gap-8">
        <Checkbox label="Remember me" hint="Save my login details for next time." size="sm" />
        <Checkbox label="Remember me" hint="Save my login details for next time." size="md" />
    </div>
);

export const Checkboxes = () => {
    return (
        <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col gap-4">
                <Checkbox label="Remember me" hint="Save my login details for next time." />
                <Checkbox isSelected label="Remember me" hint="Save my login details for next time." />
                <Checkbox isSelected isDisabled label="Remember me" hint="Save my login details for next time." />
                <Checkbox isIndeterminate label="Remember me" hint="Save my login details for next time." />
                <Checkbox isIndeterminate isDisabled label="Remember me" hint="Save my login details for next time." />
            </div>
            <div className="flex flex-col gap-4">
                <Checkbox size="md" label="Remember me" hint="Save my login details for next time." />
                <Checkbox isSelected size="md" label="Remember me" hint="Save my login details for next time." />
                <Checkbox isSelected isDisabled size="md" label="Remember me" hint="Save my login details for next time." />
                <Checkbox isIndeterminate size="md" label="Remember me" hint="Save my login details for next time." />
                <Checkbox isIndeterminate isDisabled size="md" label="Remember me" hint="Save my login details for next time." />
            </div>
        </div>
    );
};

export const CheckboxBase = () => {
    return (
        <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col gap-2">
                <Checkbox />
                <Checkbox isSelected />
                <Checkbox isSelected isDisabled />
                <Checkbox isIndeterminate />
                <Checkbox isIndeterminate isDisabled />
            </div>
            <div className="flex flex-col gap-2">
                <Checkbox size="md" />
                <Checkbox isSelected size="md" />
                <Checkbox isSelected isDisabled size="md" />
                <Checkbox isIndeterminate size="md" />
                <Checkbox isIndeterminate isDisabled size="md" />
            </div>
        </div>
    );
};
