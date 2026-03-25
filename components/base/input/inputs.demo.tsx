"use client";

import { useState } from "react";
import React from "react";
import { AlertCircle, Calendar, Check, CheckCircle, Copy01, Lock03, Mail01 } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { Input, InputBase, TextField } from "@/components/base/input/input";
import { InputFile } from "@/components/base/input/input-file";
import { InputGroup } from "@/components/base/input/input-group";
import { PaymentInput } from "@/components/base/input/input-payment";
import { InputTags } from "@/components/base/input/input-tags";
import { InputTagsOuter } from "@/components/base/input/input-tags-outer";
import { NativeSelect } from "@/components/base/select/select-native";
import { useClipboard } from "@/hooks/use-clipboard";
import { cx } from "@/utils/cx";
import { HintText } from "./hint-text";
import { InputDate } from "./input-date";
import { InputNumber } from "./input-number";
import { Label } from "./label";

export const DefaultDemo = () => {
    return <Input isRequired label="Email" hint="This is a hint text to help user." placeholder="olivia@untitledui.com" tooltip="This is a tooltip" />;
};

export const DisabledDemo = () => {
    return (
        <Input isRequired isDisabled label="Email" hint="This is a hint text to help user." placeholder="olivia@untitledui.com" tooltip="This is a tooltip" />
    );
};

export const InvalidDemo = () => {
    return <Input isRequired isInvalid label="Email" hint="This is an error message." placeholder="olivia@untitledui.com" tooltip="This is a tooltip" />;
};

export const SizesDemo = () => {
    return (
        <div className="flex flex-col gap-8">
            {/* Small */}
            <Input isRequired label="Email" hint="This is a hint text to help user." placeholder="olivia@untitledui.com" tooltip="This is a tooltip" />

            {/* Medium */}
            <Input
                isRequired
                size="lg"
                label="Email"
                hint="This is a hint text to help user."
                placeholder="olivia@untitledui.com"
                tooltip="This is a tooltip"
            />

            {/* Large */}
            <Input
                isRequired
                size="lg"
                label="Email"
                hint="This is a hint text to help user."
                placeholder="olivia@untitledui.com"
                tooltip="This is a tooltip"
            />
        </div>
    );
};

export const LeadingIconDemo = () => {
    return (
        <Input
            isRequired
            icon={Mail01}
            label="Email"
            hint="This is a hint text to help user."
            placeholder="olivia@untitledui.com"
            tooltip="This is a tooltip"
        />
    );
};

export const LeadingDropdownDemo = () => {
    return (
        <InputGroup
            isRequired
            label="Phone number"
            hint="This is a hint text to help user."
            leadingAddon={
                <NativeSelect
                    aria-label="Country"
                    options={[
                        { value: "US", label: "US" },
                        { value: "CA", label: "CA" },
                        { value: "EU", label: "EU" },
                    ]}
                />
            }
        >
            <InputBase type="tel" placeholder="+1 (555) 000-0000" tooltip="This is a tooltip" />
        </InputGroup>
    );
};

export const TrailingDropdownDemo = () => {
    return (
        <InputGroup
            isRequired
            prefix="$"
            label="Sale amount"
            hint="This is a hint text to help user."
            trailingAddon={
                <NativeSelect
                    aria-label="Sale amount"
                    options={[
                        { value: "USD", label: "USD" },
                        { value: "CAD", label: "CAD" },
                        { value: "EUR", label: "EUR" },
                    ]}
                />
            }
        >
            <InputBase type="tel" placeholder="1,000.00" tooltip="This is a tooltip" />
        </InputGroup>
    );
};

export const LeadingTextDemo = () => {
    return (
        <InputGroup isRequired label="Website" hint="This is a hint text to help user." leadingAddon={<InputGroup.Prefix>https://</InputGroup.Prefix>}>
            <InputBase placeholder="www.untitledui.com" tooltip="This is a tooltip" />
        </InputGroup>
    );
};

export const PaymentInputDemo = () => {
    return (
        <PaymentInput isRequired label="Card number" placeholder="0000 0000 0000 0000" hint="This is a hint text to help user." tooltip="This is a tooltip" />
    );
};

export const TrailingButtonDemo = () => {
    const { copy, copied } = useClipboard();
    const [value, setValue] = useState("");

    return (
        <InputGroup
            isRequired
            label="Website"
            hint="This is a hint text to help user."
            onChange={setValue}
            trailingAddon={
                <Button color="secondary" iconLeading={copied ? Check : Copy01} onClick={() => copy(value || "www.untitledui.com")}>
                    Copy
                </Button>
            }
        >
            <InputBase placeholder="www.untitledui.com" tooltip="This is a tooltip" />
        </InputGroup>
    );
};

export const PasswordInputDemo = () => {
    const [password, setPassword] = useState("");

    return (
        <TextField isRequired minLength={8} name="password" autoComplete="new-password" onChange={setPassword}>
            <Label>Password</Label>
            <InputBase icon={Lock03} type="password" placeholder="••••••••••••" />
            <HintText className="flex items-center gap-1">
                <CheckCircle
                    className={cx(
                        "size-4 stroke-[2.25px] text-fg-quaternary transition duration-100 ease-linear in-invalid:hidden",
                        password.length >= 8 && "text-fg-success-primary",
                    )}
                />
                <AlertCircle className="hidden size-4 stroke-[2.25px] text-fg-error-secondary in-invalid:inline-block" />
                Must be at least 8 characters.
            </HintText>
        </TextField>
    );
};

export const DateInputDemo = () => {
    return (
        <InputDate
            isRequired
            label="Date"
            hint="This is a hint text to help user."
            placeholder="Select a date"
            tooltip="This is a tooltip"
            granularity="minute"
            icon={Calendar}
        />
    );
};

export const NumberInputHorizontalDemo = () => {
    return <InputNumber isRequired orientation="horizontal" label="Number" hint="This is a hint text to help user." placeholder="100" />;
};

export const NumberInputVerticalDemo = () => {
    return <InputNumber isRequired label="Number" hint="This is a hint text to help user." placeholder="100" />;
};

export const TagInputDemo = () => {
    return (
        <InputTags
            isRequired
            label="Tags"
            hint="This is a hint text to help user."
            tooltip="This is a tooltip."
            placeholder="Type and press Enter"
            defaultValue={["Design", "Engineering"]}
        />
    );
};

export const TagInputOuterDemo = () => {
    return (
        <InputTagsOuter
            isRequired
            label="Tags"
            hint="This is a hint text to help user."
            tooltip="This is a tooltip."
            placeholder="Add tag"
            defaultValue={["Design", "Marketing"]}
        />
    );
};

export const Default = () => {
    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
                <Input
                    isRequired
                    size="sm"
                    label="Email"
                    hint="This is a hint text to help user."
                    placeholder="olivia@untitledui.com"
                    tooltip="This is a tooltip"
                />
                <Input
                    isRequired
                    isDisabled
                    size="sm"
                    label="Email"
                    hint="This is a hint text to help user."
                    placeholder="olivia@untitledui.com"
                    tooltip="This is a tooltip"
                />
                <Input
                    isRequired
                    isInvalid
                    size="sm"
                    label="Email"
                    hint="This is an error message."
                    placeholder="olivia@untitledui.com"
                    tooltip="This is a tooltip"
                />
            </div>
            <div className="flex flex-col gap-4">
                <Input
                    isRequired
                    size="md"
                    label="Email"
                    hint="This is a hint text to help user."
                    placeholder="olivia@untitledui.com"
                    tooltip="This is a tooltip"
                />
                <Input
                    isRequired
                    size="md"
                    isDisabled
                    label="Email"
                    hint="This is a hint text to help user."
                    placeholder="olivia@untitledui.com"
                    tooltip="This is a tooltip"
                />
                <Input
                    isRequired
                    size="md"
                    isInvalid
                    label="Email"
                    hint="This is an error message."
                    placeholder="olivia@untitledui.com"
                    tooltip="This is a tooltip"
                />
            </div>
            <div className="flex flex-col gap-4">
                <Input
                    isRequired
                    size="lg"
                    label="Email"
                    hint="This is a hint text to help user."
                    placeholder="olivia@untitledui.com"
                    tooltip="This is a tooltip"
                />
                <Input
                    isRequired
                    size="lg"
                    isDisabled
                    label="Email"
                    hint="This is a hint text to help user."
                    placeholder="olivia@untitledui.com"
                    tooltip="This is a tooltip"
                />
                <Input
                    isRequired
                    size="lg"
                    isInvalid
                    label="Email"
                    hint="This is an error message."
                    placeholder="olivia@untitledui.com"
                    tooltip="This is a tooltip"
                />
            </div>
        </div>
    );
};

export const LeadingIcon = () => {
    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
                <Input
                    isRequired
                    size="sm"
                    icon={Mail01}
                    label="Email"
                    hint="This is a hint text to help user."
                    placeholder="olivia@untitledui.com"
                    tooltip="This is a tooltip"
                />
                <Input
                    isRequired
                    isDisabled
                    size="sm"
                    icon={Mail01}
                    label="Email"
                    hint="This is a hint text to help user."
                    placeholder="olivia@untitledui.com"
                    tooltip="This is a tooltip"
                />
                <Input
                    isRequired
                    isInvalid
                    size="sm"
                    icon={Mail01}
                    label="Email"
                    hint="This is an error message."
                    placeholder="olivia@untitledui.com"
                    tooltip="This is a tooltip"
                />
            </div>
            <div className="flex flex-col gap-4">
                <Input
                    isRequired
                    size="md"
                    icon={Mail01}
                    label="Email"
                    hint="This is a hint text to help user."
                    placeholder="olivia@untitledui.com"
                    tooltip="This is a tooltip"
                />
                <Input
                    isRequired
                    isDisabled
                    size="md"
                    icon={Mail01}
                    label="Email"
                    hint="This is a hint text to help user."
                    placeholder="olivia@untitledui.com"
                    tooltip="This is a tooltip"
                />
                <Input
                    isRequired
                    isInvalid
                    size="md"
                    icon={Mail01}
                    label="Email"
                    hint="This is an error message."
                    placeholder="olivia@untitledui.com"
                    tooltip="This is a tooltip"
                />
            </div>
            <div className="flex flex-col gap-4">
                <Input
                    isRequired
                    size="lg"
                    icon={Mail01}
                    label="Email"
                    hint="This is a hint text to help user."
                    placeholder="olivia@untitledui.com"
                    tooltip="This is a tooltip"
                />
                <Input
                    isRequired
                    isDisabled
                    size="lg"
                    icon={Mail01}
                    label="Email"
                    hint="This is a hint text to help user."
                    placeholder="olivia@untitledui.com"
                    tooltip="This is a tooltip"
                />
                <Input
                    isRequired
                    isInvalid
                    size="lg"
                    icon={Mail01}
                    label="Email"
                    hint="This is an error message."
                    placeholder="olivia@untitledui.com"
                    tooltip="This is a tooltip"
                />
            </div>
        </div>
    );
};

export const LeadingDropdown = () => {
    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
                <InputGroup
                    isRequired
                    size="sm"
                    label="Phone number"
                    hint="This is a hint text to help user."
                    leadingAddon={
                        <NativeSelect
                            aria-label="Country"
                            options={[
                                { value: "US", label: "US" },
                                { value: "CA", label: "CA" },
                                { value: "EU", label: "EU" },
                            ]}
                        />
                    }
                >
                    <InputBase type="tel" placeholder="+1 (555) 000-0000" tooltip="This is a tooltip" />
                </InputGroup>
                <InputGroup
                    isRequired
                    isDisabled
                    size="sm"
                    label="Phone number"
                    hint="This is a hint text to help user."
                    leadingAddon={
                        <NativeSelect
                            aria-label="Country"
                            options={[
                                { value: "US", label: "US" },
                                { value: "CA", label: "CA" },
                                { value: "EU", label: "EU" },
                            ]}
                        />
                    }
                >
                    <InputBase type="tel" placeholder="+1 (555) 000-0000" tooltip="This is a tooltip" />
                </InputGroup>
                <InputGroup
                    isRequired
                    isInvalid
                    size="sm"
                    label="Phone number"
                    hint="This is a hint text to help user."
                    leadingAddon={
                        <NativeSelect
                            aria-label="Country"
                            options={[
                                { value: "US", label: "US" },
                                { value: "CA", label: "CA" },
                                { value: "EU", label: "EU" },
                            ]}
                        />
                    }
                >
                    <InputBase type="tel" placeholder="+1 (555) 000-0000" tooltip="This is a tooltip" />
                </InputGroup>
            </div>
            <div className="flex flex-col gap-4">
                <InputGroup
                    isRequired
                    size="md"
                    label="Phone number"
                    hint="This is a hint text to help user."
                    leadingAddon={
                        <NativeSelect
                            aria-label="Country"
                            options={[
                                { value: "US", label: "US" },
                                { value: "CA", label: "CA" },
                                { value: "EU", label: "EU" },
                            ]}
                        />
                    }
                >
                    <InputBase type="tel" placeholder="+1 (555) 000-0000" tooltip="This is a tooltip" />
                </InputGroup>
                <InputGroup
                    isRequired
                    isDisabled
                    size="md"
                    label="Phone number"
                    hint="This is a hint text to help user."
                    leadingAddon={
                        <NativeSelect
                            aria-label="Country"
                            options={[
                                { value: "US", label: "US" },
                                { value: "CA", label: "CA" },
                                { value: "EU", label: "EU" },
                            ]}
                        />
                    }
                >
                    <InputBase type="tel" placeholder="+1 (555) 000-0000" tooltip="This is a tooltip" />
                </InputGroup>
                <InputGroup
                    isRequired
                    isInvalid
                    size="md"
                    label="Phone number"
                    hint="This is a hint text to help user."
                    leadingAddon={
                        <NativeSelect
                            aria-label="Country"
                            options={[
                                { value: "US", label: "US" },
                                { value: "CA", label: "CA" },
                                { value: "EU", label: "EU" },
                            ]}
                        />
                    }
                >
                    <InputBase type="tel" placeholder="+1 (555) 000-0000" tooltip="This is a tooltip" />
                </InputGroup>
            </div>
            <div className="flex flex-col gap-4">
                <InputGroup
                    isRequired
                    size="lg"
                    label="Phone number"
                    hint="This is a hint text to help user."
                    leadingAddon={
                        <NativeSelect
                            aria-label="Country"
                            options={[
                                { value: "US", label: "US" },
                                { value: "CA", label: "CA" },
                                { value: "EU", label: "EU" },
                            ]}
                        />
                    }
                >
                    <InputBase type="tel" placeholder="+1 (555) 000-0000" tooltip="This is a tooltip" />
                </InputGroup>
                <InputGroup
                    isRequired
                    isDisabled
                    size="lg"
                    label="Phone number"
                    hint="This is a hint text to help user."
                    leadingAddon={
                        <NativeSelect
                            aria-label="Country"
                            options={[
                                { value: "US", label: "US" },
                                { value: "CA", label: "CA" },
                                { value: "EU", label: "EU" },
                            ]}
                        />
                    }
                >
                    <InputBase type="tel" placeholder="+1 (555) 000-0000" tooltip="This is a tooltip" />
                </InputGroup>
                <InputGroup
                    isRequired
                    isInvalid
                    size="lg"
                    label="Phone number"
                    hint="This is a hint text to help user."
                    leadingAddon={
                        <NativeSelect
                            aria-label="Country"
                            options={[
                                { value: "US", label: "US" },
                                { value: "CA", label: "CA" },
                                { value: "EU", label: "EU" },
                            ]}
                        />
                    }
                >
                    <InputBase type="tel" placeholder="+1 (555) 000-0000" tooltip="This is a tooltip" />
                </InputGroup>
            </div>
        </div>
    );
};

export const TrailingDropdown = () => {
    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
                <InputGroup
                    isRequired
                    size="sm"
                    prefix="$"
                    label="Phone number"
                    hint="This is a hint text to help user."
                    trailingAddon={
                        <NativeSelect
                            aria-label="Country"
                            options={[
                                { value: "USD", label: "USD" },
                                { value: "CAD", label: "CAD" },
                                { value: "EUR", label: "EUR" },
                            ]}
                        />
                    }
                >
                    <InputBase type="tel" placeholder="1,000.00" tooltip="This is a tooltip" />
                </InputGroup>
                <InputGroup
                    isRequired
                    isDisabled
                    size="sm"
                    prefix="$"
                    label="Phone number"
                    hint="This is a hint text to help user."
                    trailingAddon={
                        <NativeSelect
                            aria-label="Country"
                            options={[
                                { value: "USD", label: "USD" },
                                { value: "CAD", label: "CAD" },
                                { value: "EUR", label: "EUR" },
                            ]}
                        />
                    }
                >
                    <InputBase type="tel" placeholder="1,000.00" tooltip="This is a tooltip" />
                </InputGroup>
                <InputGroup
                    isRequired
                    isInvalid
                    size="sm"
                    prefix="$"
                    label="Phone number"
                    hint="This is a hint text to help user."
                    trailingAddon={
                        <NativeSelect
                            aria-label="Country"
                            options={[
                                { value: "USD", label: "USD" },
                                { value: "CAD", label: "CAD" },
                                { value: "EUR", label: "EUR" },
                            ]}
                        />
                    }
                >
                    <InputBase type="tel" placeholder="1,000.00" tooltip="This is a tooltip" />
                </InputGroup>
            </div>
            <div className="flex flex-col gap-4">
                <InputGroup
                    isRequired
                    size="md"
                    prefix="$"
                    label="Phone number"
                    hint="This is a hint text to help user."
                    trailingAddon={
                        <NativeSelect
                            options={[
                                { value: "USD", label: "USD" },
                                { value: "CAD", label: "CAD" },
                                { value: "EUR", label: "EUR" },
                            ]}
                        />
                    }
                >
                    <InputBase type="tel" placeholder="1,000.00" tooltip="This is a tooltip" />
                </InputGroup>
                <InputGroup
                    isRequired
                    isDisabled
                    size="md"
                    prefix="$"
                    label="Phone number"
                    hint="This is a hint text to help user."
                    trailingAddon={
                        <NativeSelect
                            aria-label="Country"
                            options={[
                                { value: "USD", label: "USD" },
                                { value: "CAD", label: "CAD" },
                                { value: "EUR", label: "EUR" },
                            ]}
                        />
                    }
                >
                    <InputBase type="tel" placeholder="1,000.00" tooltip="This is a tooltip" />
                </InputGroup>
                <InputGroup
                    isRequired
                    isInvalid
                    size="md"
                    prefix="$"
                    label="Phone number"
                    hint="This is a hint text to help user."
                    trailingAddon={
                        <NativeSelect
                            aria-label="Country"
                            options={[
                                { value: "USD", label: "USD" },
                                { value: "CAD", label: "CAD" },
                                { value: "EUR", label: "EUR" },
                            ]}
                        />
                    }
                >
                    <InputBase type="tel" placeholder="1,000.00" tooltip="This is a tooltip" />
                </InputGroup>
            </div>
            <div className="flex flex-col gap-4">
                <InputGroup
                    isRequired
                    size="lg"
                    prefix="$"
                    label="Phone number"
                    hint="This is a hint text to help user."
                    trailingAddon={
                        <NativeSelect
                            options={[
                                { value: "USD", label: "USD" },
                                { value: "CAD", label: "CAD" },
                                { value: "EUR", label: "EUR" },
                            ]}
                        />
                    }
                >
                    <InputBase type="tel" placeholder="1,000.00" tooltip="This is a tooltip" />
                </InputGroup>
                <InputGroup
                    isRequired
                    isDisabled
                    size="lg"
                    prefix="$"
                    label="Phone number"
                    hint="This is a hint text to help user."
                    trailingAddon={
                        <NativeSelect
                            aria-label="Country"
                            options={[
                                { value: "USD", label: "USD" },
                                { value: "CAD", label: "CAD" },
                                { value: "EUR", label: "EUR" },
                            ]}
                        />
                    }
                >
                    <InputBase type="tel" placeholder="1,000.00" tooltip="This is a tooltip" />
                </InputGroup>
                <InputGroup
                    isRequired
                    isInvalid
                    size="lg"
                    prefix="$"
                    label="Phone number"
                    hint="This is a hint text to help user."
                    trailingAddon={
                        <NativeSelect
                            aria-label="Country"
                            options={[
                                { value: "USD", label: "USD" },
                                { value: "CAD", label: "CAD" },
                                { value: "EUR", label: "EUR" },
                            ]}
                        />
                    }
                >
                    <InputBase type="tel" placeholder="1,000.00" tooltip="This is a tooltip" />
                </InputGroup>
            </div>
        </div>
    );
};

export const LeadingText = () => {
    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
                <InputGroup
                    isRequired
                    size="sm"
                    label="Website"
                    hint="This is a hint text to help user."
                    leadingAddon={<InputGroup.Prefix>https://</InputGroup.Prefix>}
                >
                    <InputBase placeholder="www.untitledui.com" tooltip="This is a tooltip" />
                </InputGroup>
                <InputGroup
                    isRequired
                    isDisabled
                    size="sm"
                    label="Website"
                    hint="This is a hint text to help user."
                    leadingAddon={<InputGroup.Prefix>https://</InputGroup.Prefix>}
                >
                    <InputBase placeholder="www.untitledui.com" tooltip="This is a tooltip" />
                </InputGroup>
                <InputGroup
                    isRequired
                    isInvalid
                    size="sm"
                    label="Website"
                    hint="This is a hint text to help user."
                    leadingAddon={<InputGroup.Prefix>https://</InputGroup.Prefix>}
                >
                    <InputBase placeholder="www.untitledui.com" tooltip="This is a tooltip" />
                </InputGroup>
            </div>
            <div className="flex flex-col gap-4">
                <InputGroup
                    isRequired
                    size="md"
                    label="Website"
                    hint="This is a hint text to help user."
                    leadingAddon={<InputGroup.Prefix>https://</InputGroup.Prefix>}
                >
                    <InputBase placeholder="www.untitledui.com" tooltip="This is a tooltip" />
                </InputGroup>
                <InputGroup
                    isRequired
                    isDisabled
                    size="md"
                    label="Website"
                    hint="This is a hint text to help user."
                    leadingAddon={<InputGroup.Prefix>https://</InputGroup.Prefix>}
                >
                    <InputBase placeholder="www.untitledui.com" tooltip="This is a tooltip" />
                </InputGroup>
                <InputGroup
                    isRequired
                    isInvalid
                    size="md"
                    label="Website"
                    hint="This is a hint text to help user."
                    leadingAddon={<InputGroup.Prefix>https://</InputGroup.Prefix>}
                >
                    <InputBase placeholder="www.untitledui.com" tooltip="This is a tooltip" />
                </InputGroup>
            </div>
            <div className="flex flex-col gap-4">
                <InputGroup
                    isRequired
                    size="lg"
                    label="Website"
                    hint="This is a hint text to help user."
                    leadingAddon={<InputGroup.Prefix>https://</InputGroup.Prefix>}
                >
                    <InputBase placeholder="www.untitledui.com" tooltip="This is a tooltip" />
                </InputGroup>
                <InputGroup
                    isRequired
                    isDisabled
                    size="lg"
                    label="Website"
                    hint="This is a hint text to help user."
                    leadingAddon={<InputGroup.Prefix>https://</InputGroup.Prefix>}
                >
                    <InputBase placeholder="www.untitledui.com" tooltip="This is a tooltip" />
                </InputGroup>
                <InputGroup
                    isRequired
                    isInvalid
                    size="lg"
                    label="Website"
                    hint="This is a hint text to help user."
                    leadingAddon={<InputGroup.Prefix>https://</InputGroup.Prefix>}
                >
                    <InputBase placeholder="www.untitledui.com" tooltip="This is a tooltip" />
                </InputGroup>
            </div>
        </div>
    );
};

export const PaymentInputs = () => {
    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
                <PaymentInput
                    isRequired
                    size="sm"
                    label="Card number"
                    placeholder="0000 0000 0000 0000"
                    hint="This is a hint text to help user."
                    tooltip="This is a tooltip"
                />
                <PaymentInput
                    isRequired
                    isDisabled
                    size="sm"
                    label="Card number"
                    placeholder="0000 0000 0000 0000"
                    hint="This is a hint text to help user."
                    tooltip="This is a tooltip"
                />
                <PaymentInput
                    isInvalid
                    isRequired
                    size="sm"
                    label="Card number"
                    placeholder="0000 0000 0000 0000"
                    hint="This is an error message."
                    tooltip="This is a tooltip"
                />
            </div>
            <div className="flex flex-col gap-4">
                <PaymentInput
                    isRequired
                    size="md"
                    label="Card number"
                    placeholder="0000 0000 0000 0000"
                    hint="This is a hint text to help user."
                    tooltip="This is a tooltip"
                />
                <PaymentInput
                    isRequired
                    isDisabled
                    size="md"
                    label="Card number"
                    placeholder="0000 0000 0000 0000"
                    hint="This is a hint text to help user."
                    tooltip="This is a tooltip"
                />
                <PaymentInput
                    isRequired
                    size="md"
                    isInvalid
                    label="Card number"
                    placeholder="0000 0000 0000 0000"
                    hint="This is an error message."
                    tooltip="This is a tooltip"
                />
            </div>
            <div className="flex flex-col gap-4">
                <PaymentInput
                    isRequired
                    size="lg"
                    label="Card number"
                    placeholder="0000 0000 0000 0000"
                    hint="This is a hint text to help user."
                    tooltip="This is a tooltip"
                />
                <PaymentInput
                    isRequired
                    isDisabled
                    size="lg"
                    label="Card number"
                    placeholder="0000 0000 0000 0000"
                    hint="This is a hint text to help user."
                    tooltip="This is a tooltip"
                />
                <PaymentInput
                    isRequired
                    isInvalid
                    size="lg"
                    label="Card number"
                    placeholder="0000 0000 0000 0000"
                    hint="This is an error message."
                    tooltip="This is a tooltip"
                />
            </div>
        </div>
    );
};

export const TrailingButton = () => {
    const { copy, copied } = useClipboard();
    const [inputValue1, setInputValue1] = useState("");
    const [inputValue2, setInputValue2] = useState("");
    const [inputValue3, setInputValue3] = useState("");
    const [inputValue4, setInputValue4] = useState("");
    const [inputValue5, setInputValue5] = useState("");
    const [inputValue6, setInputValue6] = useState("");

    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
                <InputGroup
                    isRequired
                    size="sm"
                    label="Website"
                    hint="This is a hint text to help user."
                    onChange={setInputValue1}
                    trailingAddon={
                        <Button
                            size="sm"
                            color="secondary"
                            iconLeading={copied === "input-1" ? Check : Copy01}
                            onClick={() => copy(inputValue1 || "www.untitledui.com", "input-1")}
                        >
                            Copy
                        </Button>
                    }
                >
                    <InputBase placeholder="www.untitledui.com" tooltip="This is a tooltip" />
                </InputGroup>

                <InputGroup
                    isRequired
                    isDisabled
                    size="sm"
                    label="Website"
                    hint="This is a hint text to help user."
                    onChange={setInputValue2}
                    trailingAddon={
                        <Button
                            isDisabled
                            size="sm"
                            color="secondary"
                            iconLeading={copied === "input-2" ? Check : Copy01}
                            onClick={() => copy(inputValue2 || "www.untitledui.com", "input-2")}
                        >
                            Copy
                        </Button>
                    }
                >
                    <InputBase placeholder="www.untitledui.com" tooltip="This is a tooltip" />
                </InputGroup>
                <InputGroup
                    isRequired
                    isInvalid
                    size="sm"
                    label="Website"
                    hint="This is an error message."
                    onChange={setInputValue3}
                    trailingAddon={
                        <Button
                            size="sm"
                            color="secondary"
                            iconLeading={copied === "input-3" ? Check : Copy01}
                            onClick={() => copy(inputValue3 || "www.untitledui.com", "input-3")}
                        >
                            Copy
                        </Button>
                    }
                >
                    <InputBase placeholder="www.untitledui.com" tooltip="This is a tooltip" />
                </InputGroup>
            </div>
            <div className="flex flex-col gap-4">
                <InputGroup
                    isRequired
                    label="Website"
                    size="md"
                    hint="This is a hint text to help user."
                    onChange={setInputValue4}
                    trailingAddon={
                        <Button
                            color="secondary"
                            size="md"
                            iconLeading={copied === "input-4" ? Check : Copy01}
                            onClick={() => copy(inputValue4 || "www.untitledui.com", "input-4")}
                        >
                            Copy
                        </Button>
                    }
                >
                    <InputBase placeholder="www.untitledui.com" tooltip="This is a tooltip" />
                </InputGroup>
                <InputGroup
                    isRequired
                    isDisabled
                    label="Website"
                    size="md"
                    hint="This is a hint text to help user."
                    onChange={setInputValue5}
                    trailingAddon={
                        <Button
                            isDisabled
                            color="secondary"
                            size="md"
                            iconLeading={copied === "input-5" ? Check : Copy01}
                            onClick={() => copy(inputValue5 || "www.untitledui.com", "input-5")}
                        >
                            Copy
                        </Button>
                    }
                >
                    <InputBase placeholder="www.untitledui.com" tooltip="This is a tooltip" />
                </InputGroup>
                <InputGroup
                    isRequired
                    isInvalid
                    label="Website"
                    size="md"
                    hint="This is an error message."
                    onChange={setInputValue6}
                    trailingAddon={
                        <Button
                            color="secondary"
                            size="md"
                            iconLeading={copied === "input-6" ? Check : Copy01}
                            onClick={() => copy(inputValue6 || "www.untitledui.com", "input-6")}
                        >
                            Copy
                        </Button>
                    }
                >
                    <InputBase placeholder="www.untitledui.com" tooltip="This is a tooltip" />
                </InputGroup>
            </div>
            <div className="flex flex-col gap-4">
                <InputGroup
                    isRequired
                    label="Website"
                    size="lg"
                    hint="This is a hint text to help user."
                    onChange={setInputValue4}
                    trailingAddon={
                        <Button
                            color="secondary"
                            size="lg"
                            iconLeading={copied === "input-4" ? Check : Copy01}
                            onClick={() => copy(inputValue4 || "www.untitledui.com", "input-4")}
                        >
                            Copy
                        </Button>
                    }
                >
                    <InputBase placeholder="www.untitledui.com" tooltip="This is a tooltip" />
                </InputGroup>
                <InputGroup
                    isRequired
                    isDisabled
                    label="Website"
                    size="lg"
                    hint="This is a hint text to help user."
                    onChange={setInputValue5}
                    trailingAddon={
                        <Button
                            isDisabled
                            color="secondary"
                            size="lg"
                            iconLeading={copied === "input-5" ? Check : Copy01}
                            onClick={() => copy(inputValue5 || "www.untitledui.com", "input-5")}
                        >
                            Copy
                        </Button>
                    }
                >
                    <InputBase placeholder="www.untitledui.com" tooltip="This is a tooltip" />
                </InputGroup>
                <InputGroup
                    isRequired
                    isInvalid
                    label="Website"
                    size="lg"
                    hint="This is an error message."
                    onChange={setInputValue6}
                    trailingAddon={
                        <Button
                            color="secondary"
                            size="lg"
                            iconLeading={copied === "input-6" ? Check : Copy01}
                            onClick={() => copy(inputValue6 || "www.untitledui.com", "input-6")}
                        >
                            Copy
                        </Button>
                    }
                >
                    <InputBase placeholder="www.untitledui.com" tooltip="This is a tooltip" />
                </InputGroup>
            </div>
        </div>
    );
};

export const PasswordInputs = () => {
    const [password, setPassword] = useState("");

    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
                <TextField isRequired size="sm" minLength={8} name="password" autoComplete="new-password" onChange={setPassword}>
                    <Label>Password</Label>
                    <InputBase icon={Lock03} type="password" placeholder="••••••••••••" />
                    <HintText className="flex items-center gap-1">
                        <CheckCircle
                            className={cx(
                                "size-4 stroke-[2.25px] text-fg-quaternary transition duration-100 ease-linear in-invalid:hidden",
                                password.length >= 8 && "text-fg-success-primary",
                            )}
                        />
                        <AlertCircle className="hidden size-4 stroke-[2.25px] text-fg-error-secondary in-invalid:inline-block" />
                        Must be at least 8 characters.
                    </HintText>
                </TextField>
                <TextField isRequired isDisabled size="sm" minLength={8} name="password" autoComplete="new-password" onChange={setPassword}>
                    <Label>Password</Label>
                    <InputBase icon={Lock03} type="password" placeholder="••••••••••••" />
                    <HintText className="flex items-center gap-1">
                        <CheckCircle
                            className={cx(
                                "size-4 stroke-[2.25px] text-fg-quaternary transition duration-100 ease-linear in-invalid:hidden",
                                password.length >= 8 && "text-fg-success-primary",
                            )}
                        />
                        <AlertCircle className="hidden size-4 stroke-[2.25px] text-fg-error-secondary in-invalid:inline-block" />
                        Must be at least 8 characters.
                    </HintText>
                </TextField>
                <TextField isRequired isInvalid size="sm" minLength={8} name="password" autoComplete="new-password" onChange={setPassword}>
                    <Label>Password</Label>
                    <InputBase icon={Lock03} type="password" placeholder="••••••••••••" />
                    <HintText className="flex items-center gap-1">
                        <CheckCircle
                            className={cx(
                                "size-4 stroke-[2.25px] text-fg-quaternary transition duration-100 ease-linear in-invalid:hidden",
                                password.length >= 8 && "text-fg-success-primary",
                            )}
                        />
                        <AlertCircle className="hidden size-4 stroke-[2.25px] text-fg-error-secondary in-invalid:inline-block" />
                        Must be at least 8 characters.
                    </HintText>
                </TextField>
            </div>
            <div className="flex flex-col gap-4">
                <TextField isRequired size="md" minLength={8} name="password" autoComplete="new-password" onChange={setPassword}>
                    <Label>Password</Label>
                    <InputBase icon={Lock03} type="password" placeholder="••••••••••••" />
                    <HintText className="flex items-center gap-1">
                        <CheckCircle
                            className={cx(
                                "size-4 stroke-[2.25px] text-fg-quaternary transition duration-100 ease-linear in-invalid:hidden",
                                password.length >= 8 && "text-fg-success-primary",
                            )}
                        />
                        <AlertCircle className="hidden size-4 stroke-[2.25px] text-fg-error-secondary in-invalid:inline-block" />
                        Must be at least 8 characters.
                    </HintText>
                </TextField>
                <TextField isRequired isDisabled size="md" minLength={8} name="password" autoComplete="new-password" onChange={setPassword}>
                    <Label>Password</Label>
                    <InputBase icon={Lock03} type="password" placeholder="••••••••••••" />
                    <HintText className="flex items-center gap-1">
                        <CheckCircle
                            className={cx(
                                "size-4 stroke-[2.25px] text-fg-quaternary transition duration-100 ease-linear in-invalid:hidden",
                                password.length >= 8 && "text-fg-success-primary",
                            )}
                        />
                        <AlertCircle className="hidden size-4 stroke-[2.25px] text-fg-error-secondary in-invalid:inline-block" />
                        Must be at least 8 characters.
                    </HintText>
                </TextField>
                <TextField isRequired isInvalid size="md" minLength={8} name="password" autoComplete="new-password" onChange={setPassword}>
                    <Label>Password</Label>
                    <InputBase icon={Lock03} type="password" placeholder="••••••••••••" />
                    <HintText className="flex items-center gap-1">
                        <CheckCircle
                            className={cx(
                                "size-4 stroke-[2.25px] text-fg-quaternary transition duration-100 ease-linear in-invalid:hidden",
                                password.length >= 8 && "text-fg-success-primary",
                            )}
                        />
                        <AlertCircle className="hidden size-4 stroke-[2.25px] text-fg-error-secondary in-invalid:inline-block" />
                        Must be at least 8 characters.
                    </HintText>
                </TextField>
            </div>
            <div className="flex flex-col gap-4">
                <TextField isRequired size="lg" minLength={8} name="password" autoComplete="new-password" onChange={setPassword}>
                    <Label>Password</Label>
                    <InputBase icon={Lock03} type="password" placeholder="••••••••••••" />
                    <HintText className="flex items-center gap-1">
                        <CheckCircle
                            className={cx(
                                "size-4 stroke-[2.25px] text-fg-quaternary transition duration-100 ease-linear in-invalid:hidden",
                                password.length >= 8 && "text-fg-success-primary",
                            )}
                        />
                        <AlertCircle className="hidden size-4 stroke-[2.25px] text-fg-error-secondary in-invalid:inline-block" />
                        Must be at least 8 characters.
                    </HintText>
                </TextField>
                <TextField isRequired isDisabled size="lg" minLength={8} name="password" autoComplete="new-password" onChange={setPassword}>
                    <Label>Password</Label>
                    <InputBase icon={Lock03} type="password" placeholder="••••••••••••" />
                    <HintText className="flex items-center gap-1">
                        <CheckCircle
                            className={cx(
                                "size-4 stroke-[2.25px] text-fg-quaternary transition duration-100 ease-linear in-invalid:hidden",
                                password.length >= 8 && "text-fg-success-primary",
                            )}
                        />
                        <AlertCircle className="hidden size-4 stroke-[2.25px] text-fg-error-secondary in-invalid:inline-block" />
                        Must be at least 8 characters.
                    </HintText>
                </TextField>
                <TextField isRequired isInvalid size="lg" minLength={8} name="password" autoComplete="new-password" onChange={setPassword}>
                    <Label>Password</Label>
                    <InputBase icon={Lock03} type="password" placeholder="••••••••••••" />
                    <HintText className="flex items-center gap-1">
                        <CheckCircle
                            className={cx(
                                "size-4 stroke-[2.25px] text-fg-quaternary transition duration-100 ease-linear in-invalid:hidden",
                                password.length >= 8 && "text-fg-success-primary",
                            )}
                        />
                        <AlertCircle className="hidden size-4 stroke-[2.25px] text-fg-error-secondary in-invalid:inline-block" />
                        Must be at least 8 characters.
                    </HintText>
                </TextField>
            </div>
        </div>
    );
};

export const DateInputs = () => {
    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
                <InputDate
                    isRequired
                    label="Date"
                    hint="This is a hint text to help user."
                    placeholder="Select a date"
                    tooltip="This is a tooltip"
                    size="sm"
                    granularity="minute"
                    icon={Calendar}
                />
                <InputDate
                    isRequired
                    isDisabled
                    label="Date"
                    hint="This is a hint text to help user."
                    placeholder="Select a date"
                    tooltip="This is a tooltip"
                    size="sm"
                    granularity="minute"
                    icon={Calendar}
                />
                <InputDate
                    isRequired
                    isInvalid
                    label="Date"
                    hint="This is an error message."
                    placeholder="Select a date"
                    tooltip="This is a tooltip"
                    size="sm"
                    granularity="minute"
                    icon={Calendar}
                />
            </div>
            <div className="flex flex-col gap-4">
                <InputDate
                    isRequired
                    label="Date"
                    hint="This is a hint text to help user."
                    placeholder="Select a date"
                    tooltip="This is a tooltip"
                    size="md"
                    granularity="minute"
                    icon={Calendar}
                />
                <InputDate
                    isRequired
                    isDisabled
                    label="Date"
                    hint="This is a hint text to help user."
                    placeholder="Select a date"
                    tooltip="This is a tooltip"
                    size="md"
                    granularity="minute"
                    icon={Calendar}
                />
                <InputDate
                    isRequired
                    isInvalid
                    label="Date"
                    hint="This is an error message."
                    placeholder="Select a date"
                    tooltip="This is a tooltip"
                    size="md"
                    granularity="minute"
                    icon={Calendar}
                />
            </div>
            <div className="flex flex-col gap-4">
                <InputDate
                    isRequired
                    label="Date"
                    hint="This is a hint text to help user."
                    placeholder="Select a date"
                    tooltip="This is a tooltip"
                    size="lg"
                    granularity="minute"
                    icon={Calendar}
                />
                <InputDate
                    isRequired
                    isDisabled
                    label="Date"
                    hint="This is a hint text to help user."
                    placeholder="Select a date"
                    tooltip="This is a tooltip"
                    size="lg"
                    granularity="minute"
                    icon={Calendar}
                />
                <InputDate
                    isRequired
                    isInvalid
                    label="Date"
                    hint="This is an error message."
                    placeholder="Select a date"
                    tooltip="This is a tooltip"
                    size="lg"
                    granularity="minute"
                    icon={Calendar}
                />
            </div>
        </div>
    );
};

export const NumberInputsHorizontal = () => {
    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
                <InputNumber isRequired orientation="horizontal" label="Number" hint="This is a hint text to help user." placeholder="100" size="sm" />
                <InputNumber
                    isRequired
                    orientation="horizontal"
                    isDisabled
                    label="Number"
                    hint="This is a hint text to help user."
                    placeholder="100"
                    size="sm"
                />
                <InputNumber isRequired orientation="horizontal" isInvalid label="Number" hint="This is an error message." placeholder="100" size="sm" />
            </div>
            <div className="flex flex-col gap-4">
                <InputNumber isRequired orientation="horizontal" label="Number" hint="This is a hint text to help user." placeholder="100" size="md" />
                <InputNumber
                    isRequired
                    orientation="horizontal"
                    isDisabled
                    label="Number"
                    hint="This is a hint text to help user."
                    placeholder="100"
                    size="md"
                />
                <InputNumber isRequired orientation="horizontal" isInvalid label="Number" hint="This is an error message." placeholder="100" size="md" />
            </div>
            <div className="flex flex-col gap-4">
                <InputNumber isRequired orientation="horizontal" label="Number" hint="This is a hint text to help user." placeholder="100" size="lg" />
                <InputNumber
                    isRequired
                    orientation="horizontal"
                    isDisabled
                    label="Number"
                    hint="This is a hint text to help user."
                    placeholder="100"
                    size="lg"
                />
                <InputNumber isRequired orientation="horizontal" isInvalid label="Number" hint="This is an error message." placeholder="100" size="lg" />
            </div>
        </div>
    );
};

export const NumberInputsVertical = () => {
    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
                <InputNumber isRequired label="Number" hint="This is a hint text to help user." placeholder="100" size="sm" />
                <InputNumber isRequired isDisabled label="Number" hint="This is a hint text to help user." placeholder="100" size="sm" />
                <InputNumber isRequired isInvalid label="Number" hint="This is an error message." placeholder="100" size="sm" />
            </div>
            <div className="flex flex-col gap-4">
                <InputNumber isRequired label="Number" hint="This is a hint text to help user." placeholder="100" size="md" />
                <InputNumber isRequired isDisabled label="Number" hint="This is a hint text to help user." placeholder="100" size="md" />
                <InputNumber isRequired isInvalid label="Number" hint="This is an error message." placeholder="100" size="md" />
            </div>
            <div className="flex flex-col gap-4">
                <InputNumber isRequired label="Number" hint="This is a hint text to help user." placeholder="100" size="lg" />
                <InputNumber isRequired isDisabled label="Number" hint="This is a hint text to help user." placeholder="100" size="lg" />
                <InputNumber isRequired isInvalid label="Number" hint="This is an error message." placeholder="100" size="lg" />
            </div>
        </div>
    );
};

export const TagInputs = () => {
    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
                <InputTags
                    isRequired
                    label="Tags"
                    hint="This is a hint text to help user."
                    tooltip="This is a tooltip."
                    placeholder="Type and press Enter"
                    defaultValue={["Design", "Engineering"]}
                    size="sm"
                />
                <InputTags
                    isRequired
                    isDisabled
                    label="Tags"
                    hint="This is a hint text to help user."
                    tooltip="This is a tooltip."
                    placeholder="Type and press Enter"
                    defaultValue={["Design", "Engineering"]}
                    size="sm"
                />
                <InputTags
                    isRequired
                    isInvalid
                    label="Tags"
                    tooltip="This is a tooltip."
                    hint="This is an error message."
                    placeholder="Type and press Enter"
                    defaultValue={["Design", "Engineering"]}
                    size="sm"
                />
            </div>
            <div className="flex flex-col gap-4">
                <InputTags
                    isRequired
                    label="Tags"
                    hint="This is a hint text to help user."
                    tooltip="This is a tooltip."
                    placeholder="Type and press Enter"
                    defaultValue={["Design", "Engineering"]}
                    size="md"
                />
                <InputTags
                    isRequired
                    isDisabled
                    label="Tags"
                    hint="This is a hint text to help user."
                    tooltip="This is a tooltip."
                    placeholder="Type and press Enter"
                    defaultValue={["Design", "Engineering"]}
                    size="md"
                />
                <InputTags
                    isRequired
                    isInvalid
                    label="Tags"
                    hint="This is an error message."
                    tooltip="This is a tooltip."
                    placeholder="Type and press Enter"
                    defaultValue={["Design", "Engineering"]}
                    size="md"
                />
            </div>
            <div className="flex flex-col gap-4">
                <InputTags
                    isRequired
                    label="Tags"
                    hint="This is a hint text to help user."
                    tooltip="This is a tooltip."
                    placeholder="Type and press Enter"
                    defaultValue={["Design", "Engineering"]}
                    size="lg"
                />
                <InputTags
                    isRequired
                    isDisabled
                    label="Tags"
                    hint="This is a hint text to help user."
                    tooltip="This is a tooltip."
                    placeholder="Type and press Enter"
                    defaultValue={["Design", "Engineering"]}
                    size="lg"
                />
                <InputTags
                    isRequired
                    isInvalid
                    label="Tags"
                    hint="This is an error message."
                    tooltip="This is a tooltip."
                    placeholder="Type and press Enter"
                    defaultValue={["Design", "Engineering"]}
                    size="lg"
                />
            </div>
        </div>
    );
};

export const FileUploadInputDemo = ({ size = "sm" as "sm" | "md" | "lg" }) => {
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (files: FileList | null) => {
        if (!files || files.length === 0) return;
        setIsLoading(true);
        setTimeout(() => setIsLoading(false), 3000);
    };

    return <InputFile isRequired size={size} label="Upload file" hint="SVG, PNG, JPG or GIF (max. 800x400px)." onChange={handleChange} isLoading={isLoading} />;
};

export const FileUploadInputs = () => {
    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
                <FileUploadInputDemo size="sm" />
                <InputFile isRequired isDisabled size="sm" label="Upload file" hint="This is a hint text to help user." />
                <InputFile isRequired isInvalid size="sm" label="Upload file" hint="This is an error message." />
            </div>
            <div className="flex flex-col gap-4">
                <FileUploadInputDemo size="md" />
                <InputFile isRequired isDisabled size="md" label="Upload file" hint="This is a hint text to help user." />
                <InputFile isRequired isInvalid size="md" label="Upload file" hint="This is an error message." />
            </div>
            <div className="flex flex-col gap-4">
                <FileUploadInputDemo size="lg" />
                <InputFile isRequired isDisabled size="lg" label="Upload file" hint="This is a hint text to help user." />
                <InputFile isRequired isInvalid size="lg" label="Upload file" hint="This is an error message." />
            </div>
        </div>
    );
};

export const TagInputsOuter = () => {
    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
                <InputTagsOuter
                    isRequired
                    label="Tags"
                    hint="This is a hint text to help user."
                    tooltip="This is a tooltip."
                    placeholder="Add tag"
                    defaultValue={["Design", "Marketing"]}
                    size="sm"
                />
                <InputTagsOuter
                    isRequired
                    isDisabled
                    label="Tags"
                    hint="This is a hint text to help user."
                    tooltip="This is a tooltip."
                    placeholder="Add tag"
                    defaultValue={["Design", "Marketing"]}
                    size="sm"
                />
                <InputTagsOuter
                    isRequired
                    isInvalid
                    label="Tags"
                    tooltip="This is a tooltip."
                    placeholder="Add tag"
                    defaultValue={["Design", "Marketing"]}
                    size="sm"
                />
            </div>
            <div className="flex flex-col gap-4">
                <InputTagsOuter
                    isRequired
                    label="Tags"
                    hint="This is a hint text to help user."
                    tooltip="This is a tooltip."
                    placeholder="Add tag"
                    defaultValue={["Design", "Marketing"]}
                    size="md"
                />
                <InputTagsOuter
                    isRequired
                    isDisabled
                    label="Tags"
                    hint="This is a hint text to help user."
                    tooltip="This is a tooltip."
                    placeholder="Add tag"
                    defaultValue={["Design", "Marketing"]}
                    size="md"
                />
                <InputTagsOuter
                    isRequired
                    isInvalid
                    label="Tags"
                    tooltip="This is a tooltip."
                    placeholder="Add tag"
                    defaultValue={["Design", "Marketing"]}
                    size="md"
                />
            </div>
            <div className="flex flex-col gap-4">
                <InputTagsOuter
                    isRequired
                    label="Tags"
                    hint="This is a hint text to help user."
                    tooltip="This is a tooltip."
                    placeholder="Add tag"
                    defaultValue={["Design", "Marketing"]}
                    size="lg"
                />
                <InputTagsOuter
                    isRequired
                    isDisabled
                    label="Tags"
                    hint="This is a hint text to help user."
                    tooltip="This is a tooltip."
                    placeholder="Add tag"
                    defaultValue={["Design", "Marketing"]}
                    size="lg"
                />
                <InputTagsOuter
                    isRequired
                    isInvalid
                    label="Tags"
                    tooltip="This is a tooltip."
                    placeholder="Add tag"
                    defaultValue={["Design", "Marketing"]}
                    size="lg"
                />
            </div>
        </div>
    );
};
