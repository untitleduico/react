"use client";

import type { ReactNode, Ref } from "react";
import React from "react";
import type { TextAreaProps as AriaTextAreaProps, TextFieldProps as AriaTextFieldProps } from "react-aria-components";
import { TextArea as AriaTextArea } from "react-aria-components";
import { HintText } from "@/components/base/input/hint-text";
import { TextField } from "@/components/base/input/input";
import { Label } from "@/components/base/input/label";
import { cx } from "@/utils/cx";

// Creates a data URL for an SVG resize handle with a given color.
const getResizeHandleBg = (color: string) => {
    return `url(data:image/svg+xml;base64,${btoa(`<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 2L2 10" stroke="${color}" stroke-linecap="round"/><path d="M11 7L7 11" stroke="${color}" stroke-linecap="round"/></svg>`)})`;
};

interface TextAreaBaseProps extends AriaTextAreaProps {
    ref?: Ref<HTMLTextAreaElement>;
}

export const TextAreaBase = ({ className, ...props }: TextAreaBaseProps) => {
    return (
        <AriaTextArea
            {...props}
            style={
                {
                    "--resize-handle-bg": getResizeHandleBg("#D5D7DA"),
                    "--resize-handle-bg-dark": getResizeHandleBg("#373A41"),
                } as React.CSSProperties
            }
            className={(state) =>
                cx(
                    "w-full scroll-py-3 rounded-lg bg-primary px-3.5 py-3 text-md text-primary shadow-xs ring-1 ring-primary transition duration-100 ease-linear ring-inset placeholder:text-placeholder autofill:rounded-lg autofill:text-primary focus:outline-hidden",

                    // Resize handle
                    "[&::-webkit-resizer]:bg-(image:--resize-handle-bg) [&::-webkit-resizer]:bg-contain dark:[&::-webkit-resizer]:bg-(image:--resize-handle-bg-dark)",

                    state.isFocused && !state.isDisabled && "ring-2 ring-brand",
                    state.isDisabled && "cursor-not-allowed bg-disabled_subtle text-disabled ring-disabled",
                    state.isInvalid && "ring-error_subtle",
                    state.isInvalid && state.isFocused && "ring-2 ring-error",

                    typeof className === "function" ? className(state) : className,
                )
            }
        />
    );
};

TextAreaBase.displayName = "TextAreaBase";

interface TextFieldProps extends AriaTextAreaProps {
    label?: string;
    hint?: ReactNode;
    tooltip?: string;
    ref?: Ref<HTMLDivElement>;
    isInvalid?: AriaTextFieldProps["isInvalid"];
    isDisabled?: AriaTextFieldProps["isDisabled"];
    isRequired?: AriaTextFieldProps["isRequired"];
    isReadOnly?: AriaTextFieldProps["isReadOnly"];
    wrapperClassName?: AriaTextFieldProps["className"];
}

export const TextArea = ({
    label,
    hint,
    wrapperClassName,
    isDisabled,
    isInvalid,
    isRequired,
    isReadOnly,
    tooltip,
    value,
    defaultValue,
    ref,
    ...textAreaProps
}: TextFieldProps) => {
    return (
        <TextField
            {...{ ref, isDisabled, isInvalid, isReadOnly, isRequired, className: wrapperClassName, "aria-label": textAreaProps["aria-label"] }}
            value={value as string}
            defaultValue={defaultValue as string}
        >
            {({ isInvalid, isRequired }) => (
                <>
                    {label && (
                        <Label isRequired={isRequired} tooltip={tooltip}>
                            {label}
                        </Label>
                    )}

                    <TextAreaBase {...textAreaProps} />

                    {hint && <HintText isInvalid={isInvalid}>{hint}</HintText>}
                </>
            )}
        </TextField>
    );
};

TextArea.displayName = "TextArea";
