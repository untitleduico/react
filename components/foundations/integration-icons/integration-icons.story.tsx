import type { FC } from "react";
import {
    BoltIcon,
    ChatGPTIcon,
    ClaudeIcon,
    CursorIcon,
    FigmaIcon,
    GeminiIcon,
    GitHubIcon,
    GrokIcon,
    LovableIcon,
    NextjsIcon,
    PerplexityIcon,
    ReactIcon,
    ReplitIcon,
    TailwindCSSIcon,
    V0Icon,
    ViteIcon,
} from "@/components/foundations/integration-icons";

const icons = [
    { name: "React", icon: ReactIcon },
    { name: "Tailwind CSS", icon: TailwindCSSIcon },
    { name: "Claude", icon: ClaudeIcon },
    { name: "Next.js", icon: NextjsIcon },
    { name: "Vite", icon: ViteIcon },
    { name: "v0", icon: V0Icon },
    { name: "Bolt", icon: BoltIcon },
    { name: "Lovable", icon: LovableIcon },
    { name: "Cursor", icon: CursorIcon },
    { name: "Gemini", icon: GeminiIcon },
    { name: "ChatGPT", icon: ChatGPTIcon },
    { name: "Perplexity", icon: PerplexityIcon },
    { name: "Grok", icon: GrokIcon },
    { name: "GitHub", icon: GitHubIcon },
    { name: "Figma", icon: FigmaIcon },
    { name: "Replit", icon: ReplitIcon },
];

export default {
    title: "Foundations/Integration Icons",
    decorators: [
        (Story: FC) => (
            <div className="flex min-h-screen w-full overflow-auto bg-primary p-8">
                <Story />
            </div>
        ),
    ],
};

export const IntegrationIcons = () => (
    <div className="flex flex-col gap-8">
        <div>
            <h3 className="mb-4 text-sm font-semibold text-primary">Color</h3>
            <div className="flex flex-wrap gap-6">
                {icons.map(({ name, icon: Icon }) => (
                    <div key={name} className="flex w-24 flex-col items-center gap-2">
                        <Icon className="size-5" />
                        <span className="text-center text-xs text-tertiary">{name}</span>
                    </div>
                ))}
            </div>
        </div>
        <div>
            <h3 className="mb-4 text-sm font-semibold text-primary">Grayscale</h3>
            <div className="flex flex-wrap gap-6">
                {icons.map(({ name, icon: Icon }) => (
                    <div key={name} className="flex w-24 flex-col items-center gap-2">
                        <Icon className="size-5" grayscale />
                        <span className="text-center text-xs text-tertiary">{name}</span>
                    </div>
                ))}
            </div>
        </div>
    </div>
);
