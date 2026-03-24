"use client";

import { ChevronDown, Copy01, TerminalSquare } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { Dropdown } from "@/components/base/dropdown/dropdown";
import {
    BoltIcon,
    ChatGPTIcon,
    ClaudeIcon,
    CursorIcon,
    FigmaIcon,
    GeminiIcon,
    GitHubIcon,
    LovableIcon,
    PerplexityIcon,
    V0Icon,
} from "@/components/foundations/integration-icons";

export const DropdownIntegration = () => {
    return (
        <Dropdown.Root>
            <Button
                size="sm"
                className="group"
                color="secondary"
                iconTrailing={(props) => <ChevronDown data-icon="trailing" {...props} className="size-4! stroke-[2.25px]!" />}
            >
                Copy
            </Button>

            <Dropdown.Popover className="w-54">
                <Dropdown.Menu selectionMode="none">
                    <Dropdown.Section>
                        <Dropdown.Item icon={TerminalSquare}>View as markdown</Dropdown.Item>
                        <Dropdown.Item icon={Copy01}>Copy as markdown</Dropdown.Item>
                    </Dropdown.Section>

                    <Dropdown.Separator />

                    <Dropdown.Section>
                        <Dropdown.Item icon={() => <V0Icon grayscale className="mr-2 size-4 shrink-0" />}>Open in v0</Dropdown.Item>
                        <Dropdown.Item icon={() => <ClaudeIcon grayscale className="mr-2 size-4 shrink-0" />}>Open in Claude</Dropdown.Item>
                        <Dropdown.Item icon={() => <BoltIcon grayscale className="mr-2 size-4 shrink-0" />}>Open in Bolt</Dropdown.Item>
                        <Dropdown.Item icon={() => <LovableIcon grayscale className="mr-2 size-4 shrink-0" />}>Open in Lovable</Dropdown.Item>
                        <Dropdown.Item icon={() => <CursorIcon grayscale className="mr-2 size-4 shrink-0" />}>Open in Cursor</Dropdown.Item>
                        <Dropdown.Item icon={() => <ChatGPTIcon grayscale className="mr-2 size-4 shrink-0" />}>Open in ChatGPT</Dropdown.Item>
                        <Dropdown.Item icon={() => <PerplexityIcon grayscale className="mr-2 size-4 shrink-0" />}>Open in Perplexity</Dropdown.Item>
                        <Dropdown.Item icon={() => <GeminiIcon grayscale className="mr-2 size-4 shrink-0" />}>Open in Gemini</Dropdown.Item>
                    </Dropdown.Section>

                    <Dropdown.Separator />

                    <Dropdown.Section>
                        <Dropdown.Item icon={() => <FigmaIcon grayscale className="mr-2 size-4 shrink-0" />}>Open in Figma</Dropdown.Item>
                        <Dropdown.Item icon={() => <GitHubIcon grayscale className="mr-2 size-4 shrink-0" />}>Create GitHub Gist</Dropdown.Item>
                    </Dropdown.Section>
                </Dropdown.Menu>
            </Dropdown.Popover>
        </Dropdown.Root>
    );
};
