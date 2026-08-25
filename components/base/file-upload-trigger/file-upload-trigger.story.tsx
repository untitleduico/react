import { useState } from "react";
import type { FC } from "react";
import { UploadCloud02 } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { FileTrigger } from "@/components/base/file-upload-trigger/file-upload-trigger";

export default {
    title: "Base components/File upload trigger",
    decorators: [
        (Story: FC) => (
            <div className="flex min-h-screen w-full items-start bg-primary p-4">
                <Story />
            </div>
        ),
    ],
};

export const Default = () => {
    const [files, setFiles] = useState<string[]>([]);

    return (
        <div className="flex flex-col items-start gap-4">
            <FileTrigger onSelect={(list) => setFiles(list ? Array.from(list).map((f) => f.name) : [])}>
                <Button color="secondary" iconLeading={UploadCloud02}>
                    Select a file
                </Button>
            </FileTrigger>

            {files.length > 0 && (
                <ul className="flex flex-col gap-1 text-sm text-tertiary">
                    {files.map((name) => (
                        <li key={name}>{name}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export const Multiple = () => {
    const [files, setFiles] = useState<string[]>([]);

    return (
        <div className="flex flex-col items-start gap-4">
            <FileTrigger allowsMultiple onSelect={(list) => setFiles(list ? Array.from(list).map((f) => f.name) : [])}>
                <Button color="secondary" iconLeading={UploadCloud02}>
                    Select multiple files
                </Button>
            </FileTrigger>

            {files.length > 0 && (
                <ul className="flex flex-col gap-1 text-sm text-tertiary">
                    {files.map((name) => (
                        <li key={name}>{name}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export const ImagesOnly = () => (
    <FileTrigger acceptedFileTypes={["image/png", "image/jpeg"]}>
        <Button color="secondary">Select an image (PNG / JPEG)</Button>
    </FileTrigger>
);
ImagesOnly.storyName = "Images only";
