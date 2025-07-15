"use client";

import type { Placement } from "@react-types/overlays";
import { HelpCircle } from "@untitledui/icons";
import { Tooltip, TooltipTrigger } from "@/components/base/tooltip/tooltip";

const PLACEMENTS: { label: string; value: Placement }[] = [
    {
        label: "Top left",
        value: "top left",
    },
    {
        label: "Top",
        value: "top",
    },
    {
        label: "Top right",
        value: "top right",
    },
    {
        label: "Bottom left",
        value: "bottom left",
    },
    {
        label: "Bottom",
        value: "bottom",
    },
    {
        label: "Bottom right",
        value: "bottom right",
    },

    {
        label: "Left",
        value: "left",
    },

    {
        label: "Right",
        value: "right",
    },
];

export const DefaultDemo = () => {
    return (
        <Tooltip title="This is a tooltip">
            <TooltipTrigger className="group relative flex cursor-pointer flex-col items-center gap-2 text-fg-quaternary transition duration-100 ease-linear hover:text-fg-quaternary_hover focus:text-fg-quaternary_hover">
                <HelpCircle className="size-4" />
            </TooltipTrigger>
        </Tooltip>
    );
};

export const WithArrowDemo = () => {
    return (
        <Tooltip arrow title="This is a tooltip">
            <TooltipTrigger className="group relative flex cursor-pointer flex-col items-center gap-2 text-fg-quaternary transition duration-100 ease-linear hover:text-fg-quaternary_hover focus:text-fg-quaternary_hover">
                <HelpCircle className="size-4" />
            </TooltipTrigger>
        </Tooltip>
    );
};

export const WithSupportingTextDemo = () => {
    return (
        <Tooltip
            title="This is a tooltip"
            description="Tooltips are used to describe or identify an element. In most scenarios, tooltip help the user understand meaning, function or alt-text."
        >
            <TooltipTrigger className="group relative flex cursor-pointer flex-col items-center gap-2 text-fg-quaternary transition duration-100 ease-linear hover:text-fg-quaternary_hover focus:text-fg-quaternary_hover">
                <HelpCircle className="size-4" />
            </TooltipTrigger>
        </Tooltip>
    );
};

export const TooltipDemo = () => (
    <div className="grid grid-cols-3 gap-12">
        {PLACEMENTS.map((side, index) => (
            <div key={index} className="flex flex-col items-center justify-center gap-1 text-center">
                <Tooltip placement={side.value} title="This is a tooltip">
                    <TooltipTrigger className="cursor-pointer text-fg-quaternary transition duration-100 ease-linear hover:text-fg-quaternary_hover focus:text-fg-quaternary_hover">
                        <HelpCircle className="size-4" />
                    </TooltipTrigger>
                </Tooltip>
                <span className="text-xs whitespace-nowrap text-secondary">{side.label}</span>
            </div>
        ))}
    </div>
);

export const TooltipWithArrow = () => (
    <div className="grid grid-cols-3 gap-12">
        {PLACEMENTS.map((side) => (
            <div key={side.value} className="flex flex-col items-center justify-center gap-1 text-center">
                <Tooltip arrow placement={side.value} title="This is a tooltip">
                    <TooltipTrigger className="cursor-pointer text-fg-quaternary transition duration-100 ease-linear hover:text-fg-quaternary_hover focus:text-fg-quaternary_hover">
                        <HelpCircle className="size-4" />
                    </TooltipTrigger>
                </Tooltip>
                <span className="text-xs whitespace-nowrap text-secondary">{side.label}</span>
            </div>
        ))}
    </div>
);

export const TooltipWithArrowSupportingText = () => (
    <div className="grid grid-cols-3 gap-12">
        {PLACEMENTS.map((side) => (
            <div key={side.value} className="flex flex-col items-center justify-center gap-1 text-center">
                <Tooltip
                    arrow
                    placement={side.value}
                    title="This is a tooltip"
                    description="Tooltips are used to describe or identify an element. In most scenarios, tooltip help the user understand meaning, function or alt-text."
                >
                    <TooltipTrigger className="cursor-pointer text-fg-quaternary transition duration-100 ease-linear hover:text-fg-quaternary_hover focus:text-fg-quaternary_hover">
                        <HelpCircle className="size-4" />
                    </TooltipTrigger>
                </Tooltip>
                <span className="text-xs whitespace-nowrap text-secondary">{side.label}</span>
            </div>
        ))}
    </div>
);
