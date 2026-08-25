import type { FC } from "react";
import { Plus, SearchLg, UploadCloud02 } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { EmptyState } from "@/components/application/empty-state/empty-state";

export default {
    title: "Application/Empty state",
    decorators: [
        (Story: FC) => (
            <div className="flex min-h-screen w-full items-center justify-center bg-primary p-8">
                <Story />
            </div>
        ),
    ],
};

export const Default = () => (
    <EmptyState size="md">
        <EmptyState.Header>
            <EmptyState.FeaturedIcon icon={SearchLg} color="gray" />
        </EmptyState.Header>
        <EmptyState.Content>
            <EmptyState.Title>No projects found</EmptyState.Title>
            <EmptyState.Description>Your search “landing page” did not match any projects. Please try again or create a new project.</EmptyState.Description>
        </EmptyState.Content>
        <EmptyState.Footer>
            <Button color="secondary">Clear search</Button>
            <Button iconLeading={Plus}>New project</Button>
        </EmptyState.Footer>
    </EmptyState>
);

export const UploadPrompt = () => (
    <EmptyState size="md">
        <EmptyState.Header>
            <EmptyState.FeaturedIcon icon={UploadCloud02} color="brand" theme="light" />
        </EmptyState.Header>
        <EmptyState.Content>
            <EmptyState.Title>No files uploaded</EmptyState.Title>
            <EmptyState.Description>Upload your first file to get started. We support PNG, JPG and PDF up to 10MB.</EmptyState.Description>
        </EmptyState.Content>
        <EmptyState.Footer>
            <Button iconLeading={UploadCloud02}>Upload file</Button>
        </EmptyState.Footer>
    </EmptyState>
);
UploadPrompt.storyName = "Upload prompt";

export const Sizes = () => (
    <div className="flex flex-col gap-16">
        {(["sm", "md", "lg"] as const).map((size) => (
            <div key={size} className="flex flex-col items-center gap-4">
                <span className="font-mono text-xs text-quaternary">size = {size}</span>
                <EmptyState size={size}>
                    <EmptyState.Header>
                        <EmptyState.FeaturedIcon icon={SearchLg} color="gray" />
                    </EmptyState.Header>
                    <EmptyState.Content>
                        <EmptyState.Title>No results</EmptyState.Title>
                        <EmptyState.Description>Try adjusting your filters or search terms.</EmptyState.Description>
                    </EmptyState.Content>
                    <EmptyState.Footer>
                        <Button color="secondary">Clear filters</Button>
                    </EmptyState.Footer>
                </EmptyState>
            </div>
        ))}
    </div>
);
