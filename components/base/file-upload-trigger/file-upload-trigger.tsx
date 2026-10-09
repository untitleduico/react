"use client";

import type { DetailedReactHTMLElement, HTMLAttributes, ReactNode } from "react";
import React, { cloneElement, useState } from "react";
import { filterDOMProps } from "@react-aria/utils";

interface FileTriggerProps {
    /**
     * Specifies what mime type of files are allowed.
     */
    acceptedFileTypes?: Array<string>;
    /**
     * Whether multiple files can be selected.
     */
    allowsMultiple?: boolean;
    /**
     * Specifies the use of a media capture mechanism to capture the media on the spot.
     */
    defaultCamera?: "user" | "environment";
    /**
     * Handler when a user selects a file.
     */
    onSelect?: (files: FileList | null) => void;
    /**
     * The children of the component.
     */
    children: ReactNode;
    /**
     * Enables the selection of directories instead of individual files.
     */
    acceptDirectory?: boolean;
}

/**
 * A FileTrigger allows a user to access the file system with any pressable React Aria or React Spectrum component, or custom components built with usePress.
 */
export const FileTrigger = (props: FileTriggerProps) => {
    const { children, onSelect, acceptedFileTypes, allowsMultiple, defaultCamera, acceptDirectory, ...rest } = props;

    // A callback ref into state (not useRef): the click handler below is handed to cloneElement,
    // and reading a ref there is flagged because the compiler can't prove it only runs on click.
    const [input, setInput] = useState<HTMLInputElement | null>(null);
    const domProps = filterDOMProps(rest);

    const openFileDialog = () => input?.click();

    // Make sure that only one child is passed to the component.
    const clonableElement = React.Children.only(children);

    // Clone the child element and add an `onClick` handler to open the file dialog.
    const mainElement = cloneElement(clonableElement as DetailedReactHTMLElement<HTMLAttributes<HTMLElement>, HTMLElement>, {
        onClick: openFileDialog,
    });

    return (
        <>
            {mainElement}
            <input
                {...domProps}
                type="file"
                ref={setInput}
                // Clear the previous selection as the dialog opens, so picking the same file again still fires onChange.
                onClick={(e) => {
                    e.currentTarget.value = "";
                }}
                style={{ display: "none" }}
                accept={acceptedFileTypes?.toString()}
                onChange={(e) => onSelect?.(e.target.files)}
                capture={defaultCamera}
                multiple={allowsMultiple}
                // Spread rather than a JSX attribute: whether @types/react knows `webkitdirectory`
                // depends on its version, and a spread type-checks either way.
                {...(acceptDirectory ? { webkitdirectory: "" } : {})}
            />
        </>
    );
};
