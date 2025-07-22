"use client";

import { ArrowRight, ArrowUp, Plus } from "@untitledui/icons";
import type { BadgeColors } from "@/components/base/badges/badge-types";
import { Badge, BadgeIcon, BadgeWithButton, BadgeWithDot, BadgeWithFlag, BadgeWithIcon, BadgeWithImage, filledColors } from "@/components/base/badges/badges";

export const Default = () => {
    return (
        <div className="flex flex-col items-start gap-4">
            <div className="flex items-start gap-4">
                <BadgeWithDot type="pill-color" color="brand">
                    Label
                </BadgeWithDot>
                <BadgeWithDot type="color" color="brand">
                    Label
                </BadgeWithDot>
                <BadgeWithDot type="modern" color="brand">
                    Label
                </BadgeWithDot>
            </div>
        </div>
    );
};

export const PillColor = () => {
    return (
        <div className="flex flex-col items-start gap-4">
            {(Object.keys(filledColors) as BadgeColors[]).map((color) => (
                <div key={color} className="flex items-start gap-4">
                    <Badge color={color} size="sm" type="pill-color">
                        Label
                    </Badge>
                    <Badge color={color} size="md" type="pill-color">
                        Label
                    </Badge>
                    <Badge color={color} size="lg" type="pill-color">
                        Label
                    </Badge>
                </div>
            ))}
        </div>
    );
};

export const BadgeColor = () => {
    return (
        <div className="flex flex-col items-start gap-4">
            {(Object.keys(filledColors) as BadgeColors[]).map((color) => (
                <div key={color} className="flex items-start gap-4">
                    <Badge color={color} size="sm" type="color">
                        Label
                    </Badge>
                    <Badge color={color} size="md" type="color">
                        Label
                    </Badge>
                    <Badge color={color} size="lg" type="color">
                        Label
                    </Badge>
                </div>
            ))}
        </div>
    );
};

export const BadgeModern = () => {
    return (
        <div className="flex flex-col items-start gap-4">
            <div className="flex items-start gap-4">
                <Badge color="gray" size="sm" type="modern">
                    Label
                </Badge>
                <Badge color="gray" size="md" type="modern">
                    Label
                </Badge>
                <Badge color="gray" size="lg" type="modern">
                    Label
                </Badge>
            </div>
        </div>
    );
};

export const WithDot = () => {
    return (
        <div className="flex flex-col items-start gap-4">
            {(Object.keys(filledColors) as BadgeColors[]).map((color) => (
                <div key={color} className="flex items-start gap-4">
                    <BadgeWithDot color={color} size="sm" type="pill-color">
                        Label
                    </BadgeWithDot>
                    <BadgeWithDot color={color} size="md" type="pill-color">
                        Label
                    </BadgeWithDot>
                    <BadgeWithDot color={color} size="lg" type="pill-color">
                        Label
                    </BadgeWithDot>
                </div>
            ))}
        </div>
    );
};

export const WithDotBadgeColor = () => {
    return (
        <div className="flex flex-col items-start gap-4">
            {(Object.keys(filledColors) as BadgeColors[]).map((color) => (
                <div key={color} className="flex items-start gap-4">
                    <BadgeWithDot color={color} size="sm" type="color">
                        Label
                    </BadgeWithDot>
                    <BadgeWithDot color={color} size="md" type="color">
                        Label
                    </BadgeWithDot>
                    <BadgeWithDot color={color} size="lg" type="color">
                        Label
                    </BadgeWithDot>
                </div>
            ))}
        </div>
    );
};

export const WithDotBadgeModern = () => {
    return (
        <div className="flex flex-col items-start gap-4">
            {(Object.keys(filledColors) as BadgeColors[]).map((color) => (
                <div key={color} className="flex items-start gap-4">
                    <BadgeWithDot color={color} size="sm" type="modern">
                        Label
                    </BadgeWithDot>
                    <BadgeWithDot color={color} size="md" type="modern">
                        Label
                    </BadgeWithDot>
                    <BadgeWithDot color={color} size="lg" type="modern">
                        Label
                    </BadgeWithDot>
                </div>
            ))}
        </div>
    );
};

export const WithFlag = () => {
    return (
        <div className="flex flex-col items-start gap-4">
            {(Object.keys(filledColors) as BadgeColors[]).map((color) => (
                <div key={color} className="flex items-start gap-4">
                    <BadgeWithFlag color={color} size="sm" flag="AU" type="pill-color">
                        Label
                    </BadgeWithFlag>
                    <BadgeWithFlag color={color} size="md" flag="AU" type="pill-color">
                        Label
                    </BadgeWithFlag>
                    <BadgeWithFlag color={color} size="lg" flag="AU" type="pill-color">
                        Label
                    </BadgeWithFlag>
                </div>
            ))}
        </div>
    );
};

export const WithFlagBadgeColor = () => {
    return (
        <div className="flex flex-col items-start gap-4">
            {(Object.keys(filledColors) as BadgeColors[]).map((color) => (
                <div key={color} className="flex items-start gap-4">
                    <BadgeWithFlag color={color} size="sm" flag="AU" type="color">
                        Label
                    </BadgeWithFlag>
                    <BadgeWithFlag color={color} size="md" flag="AU" type="color">
                        Label
                    </BadgeWithFlag>
                    <BadgeWithFlag color={color} size="lg" flag="AU" type="color">
                        Label
                    </BadgeWithFlag>
                </div>
            ))}
        </div>
    );
};

export const WithFlagBadgeModern = () => {
    return (
        <div className="flex flex-col items-start gap-4">
            <div className="flex items-start gap-4">
                <BadgeWithFlag color="gray" size="sm" flag="AU" type="modern">
                    Label
                </BadgeWithFlag>
                <BadgeWithFlag color="gray" size="md" flag="AU" type="modern">
                    Label
                </BadgeWithFlag>
                <BadgeWithFlag color="gray" size="lg" flag="AU" type="modern">
                    Label
                </BadgeWithFlag>
            </div>
        </div>
    );
};

export const WithAvatar = () => {
    return (
        <div className="flex flex-col items-start gap-4">
            {(Object.keys(filledColors) as BadgeColors[]).map((color) => (
                <div key={color} className="flex items-start gap-4">
                    <BadgeWithImage color={color} size="sm" imgSrc="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80">
                        Label
                    </BadgeWithImage>
                    <BadgeWithImage color={color} size="md" imgSrc="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80">
                        Label
                    </BadgeWithImage>
                    <BadgeWithImage color={color} size="lg" imgSrc="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80">
                        Label
                    </BadgeWithImage>
                </div>
            ))}
        </div>
    );
};

export const WithAvatarBadgeColor = () => {
    return (
        <div className="flex flex-col items-start gap-4">
            {(Object.keys(filledColors) as BadgeColors[]).map((color) => (
                <div key={color} className="flex items-start gap-4">
                    <BadgeWithImage color={color} size="sm" imgSrc="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80" type="color">
                        Label
                    </BadgeWithImage>
                    <BadgeWithImage color={color} size="md" imgSrc="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80" type="color">
                        Label
                    </BadgeWithImage>
                    <BadgeWithImage color={color} size="lg" imgSrc="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80" type="color">
                        Label
                    </BadgeWithImage>
                </div>
            ))}
        </div>
    );
};

export const WithAvatarBadgeModern = () => {
    return (
        <div className="flex flex-col items-start gap-4">
            <div className="flex items-start gap-4">
                <BadgeWithImage color="gray" size="sm" imgSrc="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80" type="modern">
                    Label
                </BadgeWithImage>
                <BadgeWithImage color="gray" size="md" imgSrc="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80" type="modern">
                    Label
                </BadgeWithImage>
                <BadgeWithImage color="gray" size="lg" imgSrc="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80" type="modern">
                    Label
                </BadgeWithImage>
            </div>
        </div>
    );
};

export const WithCloseX = () => {
    return (
        <div className="flex flex-col items-start gap-4">
            {(Object.keys(filledColors) as BadgeColors[]).map((color) => (
                <div key={color} className="flex items-start gap-4">
                    <BadgeWithButton color={color} size="sm" buttonLabel="Clear" onButtonClick={() => {}}>
                        Label
                    </BadgeWithButton>
                    <BadgeWithButton color={color} size="md" buttonLabel="Clear" onButtonClick={() => {}}>
                        Label
                    </BadgeWithButton>
                    <BadgeWithButton color={color} size="lg" buttonLabel="Clear" onButtonClick={() => {}}>
                        Label
                    </BadgeWithButton>
                </div>
            ))}
        </div>
    );
};

export const WithCloseXBadgeColor = () => {
    return (
        <div className="flex flex-col items-start gap-4">
            {(Object.keys(filledColors) as BadgeColors[]).map((color) => (
                <div key={color} className="flex items-start gap-4">
                    <BadgeWithButton color={color} size="sm" type="color" buttonLabel="Clear" onButtonClick={() => {}}>
                        Label
                    </BadgeWithButton>
                    <BadgeWithButton color={color} size="md" type="color" buttonLabel="Clear" onButtonClick={() => {}}>
                        Label
                    </BadgeWithButton>
                    <BadgeWithButton color={color} size="lg" type="color" buttonLabel="Clear" onButtonClick={() => {}}>
                        Label
                    </BadgeWithButton>
                </div>
            ))}
        </div>
    );
};

export const WithCloseXBadgeModern = () => {
    return (
        <div className="flex flex-col items-start gap-4">
            <div className="flex items-start gap-4">
                <BadgeWithButton color="gray" size="sm" type="modern" buttonLabel="Clear" onButtonClick={() => {}}>
                    Label
                </BadgeWithButton>
                <BadgeWithButton color="gray" size="md" type="modern" buttonLabel="Clear" onButtonClick={() => {}}>
                    Label
                </BadgeWithButton>
                <BadgeWithButton color="gray" size="lg" type="modern" buttonLabel="Clear" onButtonClick={() => {}}>
                    Label
                </BadgeWithButton>
            </div>
        </div>
    );
};

export const WithIconTrailing = () => {
    return (
        <div className="flex flex-col items-start gap-4">
            {(Object.keys(filledColors) as BadgeColors[]).map((color) => (
                <div key={color} className="flex items-start gap-4">
                    <BadgeWithIcon color={color} size="sm" iconTrailing={ArrowRight}>
                        Label
                    </BadgeWithIcon>
                    <BadgeWithIcon color={color} size="md" iconTrailing={ArrowRight}>
                        Label
                    </BadgeWithIcon>
                    <BadgeWithIcon color={color} size="lg" iconTrailing={ArrowRight}>
                        Label
                    </BadgeWithIcon>
                </div>
            ))}
        </div>
    );
};

export const WithIconTrailingBadgeColor = () => {
    return (
        <div className="flex flex-col items-start gap-4">
            {(Object.keys(filledColors) as BadgeColors[]).map((color) => (
                <div key={color} className="flex items-start gap-4">
                    <BadgeWithIcon color={color} size="sm" iconTrailing={ArrowRight} type="color">
                        Label
                    </BadgeWithIcon>
                    <BadgeWithIcon color={color} size="md" iconTrailing={ArrowRight} type="color">
                        Label
                    </BadgeWithIcon>
                    <BadgeWithIcon color={color} size="lg" iconTrailing={ArrowRight} type="color">
                        Label
                    </BadgeWithIcon>
                </div>
            ))}
        </div>
    );
};

export const WithIconTrailingBadgeModern = () => {
    return (
        <div className="flex flex-col items-start gap-4">
            <div className="flex items-start gap-4">
                <BadgeWithIcon color="gray" size="sm" iconTrailing={ArrowRight} type="modern">
                    Label
                </BadgeWithIcon>
                <BadgeWithIcon color="gray" size="md" iconTrailing={ArrowRight} type="modern">
                    Label
                </BadgeWithIcon>
                <BadgeWithIcon color="gray" size="lg" iconTrailing={ArrowRight} type="modern">
                    Label
                </BadgeWithIcon>
            </div>
        </div>
    );
};

export const WithIconLeading = () => {
    return (
        <div className="flex flex-col items-start gap-4">
            {(Object.keys(filledColors) as BadgeColors[]).map((color) => (
                <div key={color} className="flex items-start gap-4">
                    <BadgeWithIcon color={color} size="sm" iconLeading={ArrowUp}>
                        Label
                    </BadgeWithIcon>
                    <BadgeWithIcon color={color} size="md" iconLeading={ArrowUp}>
                        Label
                    </BadgeWithIcon>
                    <BadgeWithIcon color={color} size="lg" iconLeading={ArrowUp}>
                        Label
                    </BadgeWithIcon>
                </div>
            ))}
        </div>
    );
};

export const WithIconLeadingBadgeColor = () => {
    return (
        <div className="flex flex-col items-start gap-4">
            {(Object.keys(filledColors) as BadgeColors[]).map((color) => (
                <div key={color} className="flex items-start gap-4">
                    <BadgeWithIcon color={color} size="sm" iconLeading={ArrowUp} type="color">
                        Label
                    </BadgeWithIcon>
                    <BadgeWithIcon color={color} size="md" iconLeading={ArrowUp} type="color">
                        Label
                    </BadgeWithIcon>
                    <BadgeWithIcon color={color} size="lg" iconLeading={ArrowUp} type="color">
                        Label
                    </BadgeWithIcon>
                </div>
            ))}
        </div>
    );
};

export const WithIconLeadingBadgeModern = () => {
    return (
        <div className="flex flex-col items-start gap-4">
            {(Object.keys(filledColors) as BadgeColors[]).map((color) => (
                <div key={color} className="flex items-start gap-4">
                    <BadgeWithIcon color={color} size="sm" iconLeading={ArrowUp} type="modern">
                        Label
                    </BadgeWithIcon>
                    <BadgeWithIcon color={color} size="md" iconLeading={ArrowUp} type="modern">
                        Label
                    </BadgeWithIcon>
                    <BadgeWithIcon color={color} size="lg" iconLeading={ArrowUp} type="modern">
                        Label
                    </BadgeWithIcon>
                </div>
            ))}
        </div>
    );
};

export const WithIconOnly = () => {
    return (
        <div className="flex flex-col items-start gap-4">
            {(Object.keys(filledColors) as BadgeColors[]).map((color) => (
                <div key={color} className="flex items-start gap-4">
                    <button aria-label="Add" className="cursor-pointer rounded-full outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2">
                        <BadgeIcon color={color} size="sm" icon={Plus} />
                    </button>

                    <button aria-label="Add" className="cursor-pointer rounded-full outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2">
                        <BadgeIcon color={color} size="md" icon={Plus} />
                    </button>

                    <button aria-label="Add" className="cursor-pointer rounded-full outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2">
                        <BadgeIcon color={color} size="lg" icon={Plus} />
                    </button>
                </div>
            ))}
        </div>
    );
};

export const WithIconOnlyBadgeColor = () => {
    return (
        <div className="flex flex-col items-start gap-4">
            {(Object.keys(filledColors) as BadgeColors[]).map((color) => (
                <div key={color} className="flex items-start gap-4">
                    <button aria-label="Add" className="cursor-pointer rounded-md outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2">
                        <BadgeIcon color={color} size="sm" icon={Plus} type="color" />
                    </button>

                    <button aria-label="Add" className="cursor-pointer rounded-md outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2">
                        <BadgeIcon color={color} size="md" icon={Plus} type="color" />
                    </button>

                    <button aria-label="Add" className="cursor-pointer rounded-md outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2">
                        <BadgeIcon color={color} size="lg" icon={Plus} type="color" />
                    </button>
                </div>
            ))}
        </div>
    );
};

export const WithIconOnlyBadgeModern = () => {
    return (
        <div className="flex flex-col items-start gap-4">
            <div className="flex items-start gap-4">
                <button aria-label="Add" className="cursor-pointer rounded-md outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2">
                    <BadgeIcon color="gray" size="sm" icon={Plus} type="modern" />
                </button>

                <button aria-label="Add" className="cursor-pointer rounded-md outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2">
                    <BadgeIcon color="gray" size="md" icon={Plus} type="modern" />
                </button>

                <button aria-label="Add" className="cursor-pointer rounded-md outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2">
                    <BadgeIcon color="gray" size="lg" icon={Plus} type="modern" />
                </button>
            </div>
        </div>
    );
};
