"use client";

import type { ReactNode } from "react";
import { useRef, useState } from "react";
import { Button } from "@/components/base/buttons/button";
import { InputBase } from "@/components/base/input/input";
import { InputGroup } from "@/components/base/input/input-group";
import { cx } from "@/utils/cx";

interface InputFileProps {
    /**
     * The size of the input.
     * @default "sm"
     */
    size?: "sm" | "md" | "lg";
    /** Label text for the input. */
    label?: string;
    /** Helper text displayed below the input. */
    hint?: ReactNode;
    /** Placeholder text displayed when no file is selected. */
    placeholder?: string;
    /** Whether the input is disabled. */
    isDisabled?: boolean;
    /** Whether the input is invalid. */
    isInvalid?: boolean;
    /** Whether the input is required. */
    isRequired?: boolean;
    /** Whether to hide the required indicator from the label. */
    hideRequiredIndicator?: boolean;
    /** Specifies what mime type of files are allowed. */
    acceptedFileTypes?: string[];
    /** Whether multiple files can be selected. */
    allowsMultiple?: boolean;
    /** Whether the file is currently uploading. */
    isLoading?: boolean;
    /** Handler when a user selects files. */
    onChange?: (files: FileList | null) => void;
    /** The class name for the root element. */
    className?: string;
    /**
     * The text of the upload button.
     * @default "Upload"
     */
    buttonText?: string;
}

export const InputFile = ({
    size = "sm",
    label,
    hint,
    placeholder = "Choose a file",
    isDisabled,
    isInvalid,
    isRequired,
    hideRequiredIndicator,
    isLoading,
    acceptedFileTypes,
    allowsMultiple,
    onChange,
    className,
    buttonText = "Upload",
}: InputFileProps) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [fileNames, setFileNames] = useState("");

    const handleClick = () => {
        if (inputRef.current?.value) {
            inputRef.current.value = "";
        }
        inputRef.current?.click();
    };

    const handleChange = () => {
        const files = inputRef.current?.files ?? null;
        if (files && files.length > 0) {
            setFileNames(
                Array.from(files)
                    .map((f) => f.name)
                    .join(", "),
            );
        } else {
            setFileNames("");
        }
        onChange?.(files);
    };

    return (
        <>
            <InputGroup
                size={size}
                label={label}
                hint={hint}
                isDisabled={isDisabled}
                isInvalid={isInvalid}
                isRequired={isRequired}
                hideRequiredIndicator={hideRequiredIndicator}
                className={className}
                trailingAddon={
                    <Button size={size} color="secondary" onClick={handleClick} isDisabled={isDisabled}>
                        {buttonText}
                    </Button>
                }
            >
                <div className="relative flex min-w-0 flex-1">
                    <InputBase
                        placeholder={placeholder}
                        value={fileNames}
                        readOnly
                        inputClassName={cx("cursor-pointer", isLoading && "pr-9")}
                        wrapperClassName="cursor-pointer"
                        onClick={handleClick}
                    />
                    {isLoading && (
                        <svg fill="none" viewBox="0 0 16 16" className="pointer-events-none absolute top-1/2 right-3 z-20 size-4 -translate-y-1/2 text-fg-quaternary">
                            <circle className="stroke-current opacity-30" cx="8" cy="8" r="6.5" strokeWidth="1.5" />
                            <circle
                                className="origin-center animate-spin stroke-current"
                                cx="8"
                                cy="8"
                                r="6.5"
                                strokeWidth="1.5"
                                strokeDasharray="10 40"
                                strokeLinecap="round"
                            />
                        </svg>
                    )}
                </div>
            </InputGroup>

            <input
                ref={inputRef}
                type="file"
                className="hidden"
                disabled={isDisabled}
                accept={acceptedFileTypes?.toString()}
                multiple={allowsMultiple}
                onChange={handleChange}
            />
        </>
    );
};

InputFile.displayName = "InputFile";
