import type { ReactNode } from "react";
// Vite `?raw` gives us the token file as a string, so this overview stays in
// sync with styles/theme.css automatically — no hardcoded token lists.
import themeCss from "../../styles/theme.css?raw";

// Parse "--name: value;" declarations from the light-mode @theme block
// (everything before the dark-mode `@layer base` section).
const lightBlock = themeCss.split("@layer base")[0];
const decls = [...lightBlock.matchAll(/(--[a-z0-9-]+)\s*:\s*([^;]+);/gi)].map((m) => ({
    name: m[1],
    value: m[2].trim(),
}));

const colors = decls.filter((d) => d.name.startsWith("--color-"));
const brandRamp = colors.filter((d) => /^--color-brand-\d+$/.test(d.name));
const bgColors = colors.filter((d) => d.name.startsWith("--color-bg-"));
const textColors = colors.filter((d) => d.name.startsWith("--color-text-"));
const fgColors = colors.filter((d) => d.name.startsWith("--color-fg-"));
const borderColors = colors.filter((d) => d.name.startsWith("--color-border-"));
const shadows = decls.filter((d) => d.name.startsWith("--shadow-") && !d.name.includes("mockup"));

// Full literal class names so Tailwind's scanner generates them.
const typeScale = [
    "text-display-2xl",
    "text-display-xl",
    "text-display-lg",
    "text-display-md",
    "text-display-sm",
    "text-display-xs",
    "text-xl",
    "text-lg",
    "text-md",
    "text-sm",
    "text-xs",
];

const weights = [
    { cls: "font-normal", label: "Regular · 400" },
    { cls: "font-medium", label: "Medium · 500" },
    { cls: "font-semibold", label: "Semibold · 600" },
    { cls: "font-bold", label: "Bold · 700" },
];

const Page = ({ children }: { children: ReactNode }) => (
    <div className="min-h-screen w-full bg-primary p-8 text-primary">
        <div className="mx-auto flex max-w-7xl flex-col gap-14">{children}</div>
    </div>
);

const Section = ({ title, hint, children }: { title: string; hint?: string; children: ReactNode }) => (
    <section className="flex flex-col gap-5">
        <div className="flex flex-col gap-1">
            <h2 className="text-xl font-semibold text-primary">{title}</h2>
            {hint && <p className="text-sm text-tertiary">{hint}</p>}
        </div>
        {children}
    </section>
);

const Swatch = ({ name, value }: { name: string; value: string }) => (
    <div className="flex flex-col gap-1.5">
        <div className="h-16 w-full rounded-lg ring-1 ring-black/10 ring-inset" style={{ background: `var(${name})` }} />
        <span className="text-xs font-medium text-secondary">{name.replace("--color-", "")}</span>
        <span className="font-mono text-[11px] text-quaternary">{value}</span>
    </div>
);

const SwatchGrid = ({ items }: { items: { name: string; value: string }[] }) => (
    <div className="grid grid-cols-2 gap-x-5 gap-y-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {items.map((d) => (
            <Swatch key={d.name} {...d} />
        ))}
    </div>
);

export default {
    title: "Foundations",
    parameters: { layout: "fullscreen" },
};

export const Colors = () => (
    <Page>
        <Section title="Brand ramp" hint="FA blue — canonical ramp (25–950) from the Figma “Untitled UI x Fa” variables.">
            <div className="grid grid-cols-3 gap-4 sm:grid-cols-6 md:grid-cols-12">
                {brandRamp.map((d) => (
                    <Swatch key={d.name} {...d} />
                ))}
            </div>
        </Section>
        <Section title="Background" hint="bg-* — every token references the brand/neutral primitives.">
            <SwatchGrid items={bgColors} />
        </Section>
        <Section title="Text" hint="text-* semantic colors.">
            <SwatchGrid items={textColors} />
        </Section>
        <Section title="Foreground / icons" hint="fg-* — icons and non-text foreground.">
            <SwatchGrid items={fgColors} />
        </Section>
        <Section title="Border" hint="border-* — also used for ring-* and outline-*.">
            <SwatchGrid items={borderColors} />
        </Section>
    </Page>
);

export const Typography = () => (
    <Page>
        <Section title="Text styles" hint="Type scale from the --text-* tokens. UI font: Inter.">
            <div className="flex flex-col">
                {typeScale.map((cls) => (
                    <div key={cls} className="flex flex-col gap-1 border-b border-secondary py-4 md:flex-row md:items-baseline md:gap-8">
                        <span className="w-40 shrink-0 font-mono text-xs text-quaternary">{cls}</span>
                        <span className={`${cls} truncate font-semibold text-primary`}>The quick brown fox</span>
                    </div>
                ))}
            </div>
        </Section>
        <Section title="Weights" hint="Inter weights used across the system.">
            <div className="flex flex-col gap-3">
                {weights.map((w) => (
                    <div key={w.cls} className="flex items-baseline gap-8">
                        <span className="w-40 shrink-0 font-mono text-xs text-quaternary">{w.cls}</span>
                        <span className={`${w.cls} text-xl text-primary`}>{w.label}</span>
                    </div>
                ))}
            </div>
        </Section>
    </Page>
);

export const Effects = () => (
    <Page>
        <Section title="Shadows & effects" hint="--shadow-* tokens (elevation + skeuomorphic).">
            <div className="grid grid-cols-2 gap-6 rounded-2xl bg-secondary p-8 sm:grid-cols-3 md:grid-cols-4">
                {shadows.map((d) => (
                    <div key={d.name} className="flex flex-col items-center gap-3">
                        <div className="h-24 w-full rounded-xl bg-primary" style={{ boxShadow: `var(${d.name})` }} />
                        <span className="text-center text-xs font-medium text-secondary">{d.name.replace("--shadow-", "shadow-")}</span>
                    </div>
                ))}
            </div>
        </Section>
    </Page>
);
