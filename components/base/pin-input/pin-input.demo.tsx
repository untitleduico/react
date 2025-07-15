"use client";

import { PinInput } from "@/components/base/pin-input/pin-input";

export const FourDigitsDemo = () => {
    return (
        <PinInput digits={4}>
            <PinInput.Label>Secure code</PinInput.Label>
            <PinInput.Group>
                <PinInput.Slot index={0} />
                <PinInput.Slot index={1} />
                <PinInput.Slot index={2} />
                <PinInput.Slot index={3} />
            </PinInput.Group>
            <PinInput.Description>This is a hint text to help user.</PinInput.Description>
        </PinInput>
    );
};

export const DisabledDemo = () => {
    return (
        <PinInput digits={4} disabled>
            <PinInput.Label>Secure code</PinInput.Label>
            <PinInput.Group>
                <PinInput.Slot index={0} />
                <PinInput.Slot index={1} />
                <PinInput.Slot index={2} />
                <PinInput.Slot index={3} />
            </PinInput.Group>
            <PinInput.Description>This is a hint text to help user.</PinInput.Description>
        </PinInput>
    );
};

export const SizesDemo = () => {
    return (
        <div className="flex flex-col gap-8">
            <PinInput digits={4} size="sm">
                <PinInput.Label>Secure code</PinInput.Label>
                <PinInput.Group>
                    <PinInput.Slot index={0} />
                    <PinInput.Slot index={1} />
                    <PinInput.Slot index={2} />
                    <PinInput.Slot index={3} />
                </PinInput.Group>
                <PinInput.Description>This is a hint text to help user.</PinInput.Description>
            </PinInput>

            <PinInput digits={4} size="md">
                <PinInput.Label>Secure code</PinInput.Label>
                <PinInput.Group>
                    <PinInput.Slot index={0} />
                    <PinInput.Slot index={1} />
                    <PinInput.Slot index={2} />
                    <PinInput.Slot index={3} />
                </PinInput.Group>
                <PinInput.Description>This is a hint text to help user.</PinInput.Description>
            </PinInput>

            <PinInput digits={4} size="lg">
                <PinInput.Label>Secure code</PinInput.Label>
                <PinInput.Group>
                    <PinInput.Slot index={0} />
                    <PinInput.Slot index={1} />
                    <PinInput.Slot index={2} />
                    <PinInput.Slot index={3} />
                </PinInput.Group>
                <PinInput.Description>This is a hint text to help user.</PinInput.Description>
            </PinInput>
        </div>
    );
};

export const VerificationCodeInputSM = () => {
    return (
        <PinInput digits={6} size="sm">
            <PinInput.Label>Secure code</PinInput.Label>
            <PinInput.Group>
                <PinInput.Slot index={0} />
                <PinInput.Slot index={1} />
                <PinInput.Slot index={2} />
                <PinInput.Separator />
                <PinInput.Slot index={3} />
                <PinInput.Slot index={4} />
                <PinInput.Slot index={5} />
            </PinInput.Group>
            <PinInput.Description>This is a hint text to help user.</PinInput.Description>
        </PinInput>
    );
};

export const VerificationCodeInputMD = () => {
    return (
        <PinInput digits={6} size="md">
            <PinInput.Label>Secure code</PinInput.Label>
            <PinInput.Group>
                <PinInput.Slot index={0} />
                <PinInput.Slot index={1} />
                <PinInput.Slot index={2} />
                <PinInput.Separator />
                <PinInput.Slot index={3} />
                <PinInput.Slot index={4} />
                <PinInput.Slot index={5} />
            </PinInput.Group>
            <PinInput.Description>This is a hint text to help user.</PinInput.Description>
        </PinInput>
    );
};

export const VerificationCodeInputLG = () => {
    return (
        <PinInput digits={6} size="lg">
            <PinInput.Label>Secure code</PinInput.Label>
            <PinInput.Group>
                <PinInput.Slot index={0} />
                <PinInput.Slot index={1} />
                <PinInput.Slot index={2} />
                <PinInput.Separator />
                <PinInput.Slot index={3} />
                <PinInput.Slot index={4} />
                <PinInput.Slot index={5} />
            </PinInput.Group>
            <PinInput.Description>This is a hint text to help user.</PinInput.Description>
        </PinInput>
    );
};
