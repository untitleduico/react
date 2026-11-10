"use client";

import { Toggle } from "@/components/base/toggle/toggle";

export const DefaultDemo = () => <Toggle label="Remember me" hint="Save my login details for next time." size="sm" />;

export const BaseDemo = () => <Toggle size="sm" />;

export const WithLabelDemo = () => <Toggle label="Remember me" size="sm" />;

export const WithLabelAndHintDemo = () => <Toggle label="Remember me" hint="Save my login details for next time." size="sm" />;

export const DisabledDemo = () => <Toggle isDisabled label="Remember me" hint="Save my login details for next time." size="sm" />;

export const SizesDemo = () => (
    <div className="flex flex-col gap-8">
        <Toggle label="Remember me" hint="Save my login details for next time." size="sm" />
        <Toggle label="Remember me" hint="Save my login details for next time." size="md" />
    </div>
);

export const SlimBaseDemo = () => <Toggle slim size="sm" />;

export const SlimWithLabelAndHintDemo = () => <Toggle slim label="Remember me" hint="Save my login details for next time." size="sm" />;

export const Toggles = () => (
    <div className="grid grid-cols-2 gap-8">
        <div className="flex flex-col gap-4">
            <Toggle label="Remember me" hint="Save my login details for next time." size="sm" />
            <Toggle isDisabled label="Remember me" hint="Save my login details for next time." size="sm" />
        </div>
        <div className="flex flex-col gap-4">
            <Toggle label="Remember me" hint="Save my login details for next time." size="md" />
            <Toggle isDisabled label="Remember me" hint="Save my login details for next time." size="md" />
        </div>
    </div>
);

export const ToggleBase = () => (
    <div className="grid grid-cols-2 gap-8">
        <div className="flex flex-col gap-4">
            <Toggle size="sm" />
            <Toggle isDisabled size="sm" />
        </div>
        <div className="flex flex-col gap-4">
            <Toggle size="md" />
            <Toggle isDisabled size="md" />
        </div>
    </div>
);

export const TogglesSlim = () => (
    <div className="grid grid-cols-2 gap-8">
        <div className="flex flex-col gap-4">
            <Toggle slim label="Remember me" hint="Save my login details for next time." size="sm" />
            <Toggle slim isDisabled label="Remember me" hint="Save my login details for next time." size="sm" />
        </div>
        <div className="flex flex-col gap-4">
            <Toggle slim label="Remember me" hint="Save my login details for next time." size="md" />
            <Toggle slim isDisabled label="Remember me" hint="Save my login details for next time." size="md" />
        </div>
    </div>
);

export const ToggleSlimBase = () => (
    <div className="grid grid-cols-2 gap-8">
        <div className="flex flex-col gap-4">
            <Toggle slim size="sm" />
            <Toggle slim isDisabled size="sm" />
        </div>
        <div className="flex flex-col gap-4">
            <Toggle slim size="md" />
            <Toggle slim isDisabled size="md" />
        </div>
    </div>
);
