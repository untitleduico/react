import type { FC } from "react";
import * as PinInputs from "@/components/base/pin-input/pin-input.demo";

export default {
    title: "Base components/Inputs/Verification code input",
    decorators: [
        (Story: FC) => (
            <div className="flex min-h-screen w-full bg-primary p-4">
                <Story />
            </div>
        ),
    ],
};

export const VerificationCodeInputSm = () => <PinInputs.VerificationCodeInputSM />;
VerificationCodeInputSm.storyName = "Verification code input sm";

export const VerificationCodeInputMd = () => <PinInputs.VerificationCodeInputMD />;
VerificationCodeInputMd.storyName = "Verification code input md";

export const VerificationCodeInputLg = () => <PinInputs.VerificationCodeInputLG />;
VerificationCodeInputLg.storyName = "Verification code input lg";
