"use client";

import { useState } from "react";
import React from "react";
import { Check, Copy01, Mail01 } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { Input, InputBase } from "@/components/base/input/input";
import { InputGroup } from "@/components/base/input/input-group";
import { PaymentInput } from "@/components/base/input/input-payment";
import { NativeSelect } from "@/components/base/select/select-native";
import { useClipboard } from "@/hooks/use-clipboard";

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
                size="md"
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
        <PaymentInput
            isRequired
            label="Card number"
            placeholder="1234 1234 1234 1234"
            hint="This is a hint text to help user."
            size="sm"
            tooltip="This is a tooltip"
        />
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

export const Default = () => {
    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
                <Input isRequired label="Email" hint="This is a hint text to help user." placeholder="olivia@untitledui.com" tooltip="This is a tooltip" />
                <Input
                    isRequired
                    isDisabled
                    label="Email"
                    hint="This is a hint text to help user."
                    placeholder="olivia@untitledui.com"
                    tooltip="This is a tooltip"
                />
                <Input isRequired isInvalid label="Email" hint="This is an error message." placeholder="olivia@untitledui.com" tooltip="This is a tooltip" />
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
        </div>
    );
};

export const LeadingIcon = () => {
    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
                <Input
                    isRequired
                    icon={Mail01}
                    label="Email"
                    hint="This is a hint text to help user."
                    placeholder="olivia@untitledui.com"
                    tooltip="This is a tooltip"
                />
                <Input
                    isRequired
                    isDisabled
                    icon={Mail01}
                    label="Email"
                    hint="This is a hint text to help user."
                    placeholder="olivia@untitledui.com"
                    tooltip="This is a tooltip"
                />
                <Input
                    isRequired
                    isInvalid
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
        </div>
    );
};

export const LeadingDropdown = () => {
    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
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
                <InputGroup
                    isRequired
                    isDisabled
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
        </div>
    );
};

export const TrailingDropdown = () => {
    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
                <InputGroup
                    isRequired
                    prefix="$"
                    label="Phone number"
                    hint="This is a hint text to help user."
                    trailingAddon={
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
                    <InputBase type="tel" placeholder="1,000.00" tooltip="This is a tooltip" />
                </InputGroup>
                <InputGroup
                    isRequired
                    isDisabled
                    prefix="$"
                    label="Phone number"
                    hint="This is a hint text to help user."
                    trailingAddon={
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
                    <InputBase type="tel" placeholder="1,000.00" tooltip="This is a tooltip" />
                </InputGroup>
                <InputGroup
                    isRequired
                    isInvalid
                    prefix="$"
                    label="Phone number"
                    hint="This is a hint text to help user."
                    trailingAddon={
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
                                { value: "US", label: "US" },
                                { value: "CA", label: "CA" },
                                { value: "EU", label: "EU" },
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
                                { value: "US", label: "US" },
                                { value: "CA", label: "CA" },
                                { value: "EU", label: "EU" },
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
                                { value: "US", label: "US" },
                                { value: "CA", label: "CA" },
                                { value: "EU", label: "EU" },
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
                <InputGroup isRequired label="Website" hint="This is a hint text to help user." leadingAddon={<InputGroup.Prefix>https://</InputGroup.Prefix>}>
                    <InputBase placeholder="www.untitledui.com" tooltip="This is a tooltip" />
                </InputGroup>
                <InputGroup
                    isRequired
                    isDisabled
                    label="Website"
                    hint="This is a hint text to help user."
                    leadingAddon={<InputGroup.Prefix>https://</InputGroup.Prefix>}
                >
                    <InputBase placeholder="www.untitledui.com" tooltip="This is a tooltip" />
                </InputGroup>
                <InputGroup
                    isRequired
                    isInvalid
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
        </div>
    );
};

export const PaymentInputs = () => {
    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
                <PaymentInput
                    isRequired
                    label="Card number"
                    placeholder="1234 1234 1234 1234"
                    hint="This is a hint text to help user."
                    size="sm"
                    tooltip="This is a tooltip"
                />
                <PaymentInput
                    isRequired
                    label="Card number"
                    placeholder="1234 1234 1234 1234"
                    hint="This is a hint text to help user."
                    size="sm"
                    isDisabled
                    tooltip="This is a tooltip"
                />
                <PaymentInput
                    isInvalid
                    isRequired
                    label="Card number"
                    placeholder="1234 1234 1234 1234"
                    hint="This is an error message."
                    size="sm"
                    tooltip="This is a tooltip"
                />
            </div>
            <div className="flex flex-col gap-4">
                <PaymentInput
                    isRequired
                    size="md"
                    label="Card number"
                    placeholder="1234 1234 1234 1234"
                    hint="This is a hint text to help user."
                    tooltip="This is a tooltip"
                />
                <PaymentInput
                    isRequired
                    size="md"
                    label="Card number"
                    placeholder="1234 1234 1234 1234"
                    hint="This is a hint text to help user."
                    isDisabled
                    tooltip="This is a tooltip"
                />
                <PaymentInput
                    isRequired
                    size="md"
                    isInvalid
                    label="Card number"
                    placeholder="1234 1234 1234 1234"
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
                    label="Website"
                    hint="This is a hint text to help user."
                    onChange={setInputValue1}
                    trailingAddon={
                        <Button
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
                    label="Website"
                    hint="This is a hint text to help user."
                    onChange={setInputValue2}
                    trailingAddon={
                        <Button
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
                    label="Website"
                    hint="This is a hint text to help user."
                    onChange={setInputValue3}
                    trailingAddon={
                        <Button
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
                    hint="This is a hint text to help user."
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
        </div>
    );
};
