"use client";

import type { HTMLAttributes } from "react";
import { Check, Copy01, DownloadCloud02, Edit01, Edit02, Placeholder, Trash01, Trash02 } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { ButtonUtility } from "@/components/base/buttons/button-utility";
import { CloseButton } from "@/components/base/buttons/close-button";
import { cx } from "@/utils/cx";

const Circle = (props: HTMLAttributes<HTMLSpanElement>) => <span {...props} className={cx("size-5 rounded-[50%] border-2 border-current", props.className)} />;

export const LeadingIcon = () => {
    return (
        <>
            <Button color="primary" iconLeading={Check} size="md">
                Save
            </Button>
            <Button color="secondary" iconLeading={Edit02} size="md">
                Edit
            </Button>
            <Button color="primary-destructive" iconLeading={Trash02} size="md">
                Delete
            </Button>
        </>
    );
};

export const TrailingIcon = () => {
    return (
        <>
            <Button color="primary" iconTrailing={Check} size="md">
                Save
            </Button>
            <Button color="secondary" iconTrailing={Edit02} size="md">
                Edit
            </Button>
            <Button color="primary-destructive" iconTrailing={Trash02} size="md">
                Delete
            </Button>
        </>
    );
};

export const Primary = () => {
    return (
        <div>
            <div className="mb-4 flex gap-8">
                <Button size="sm">Button CTA</Button>
                <Button size="md">Button CTA</Button>
                <Button size="lg">Button CTA</Button>
                <Button size="xl">Button CTA</Button>
            </div>
            <div className="mb-4 flex gap-8">
                <Button isDisabled size="sm">
                    Button CTA
                </Button>
                <Button isDisabled size="md">
                    Button CTA
                </Button>
                <Button isDisabled size="lg">
                    Button CTA
                </Button>
                <Button isDisabled size="xl">
                    Button CTA
                </Button>
            </div>

            <div className="mb-16 flex gap-8">
                <Button isLoading showTextWhileLoading size="sm">
                    Submitting...
                </Button>
                <Button isLoading showTextWhileLoading size="md">
                    Submitting...
                </Button>
                <Button isLoading showTextWhileLoading size="lg">
                    Submitting...
                </Button>
                <Button isLoading showTextWhileLoading size="xl">
                    Submitting...
                </Button>
            </div>

            <div className="mb-4 flex gap-8">
                <Button size="sm" iconLeading={Circle} iconTrailing={Circle}>
                    Button CTA
                </Button>
                <Button size="md" iconLeading={Circle} iconTrailing={Circle}>
                    Button CTA
                </Button>
                <Button size="lg" iconLeading={Circle} iconTrailing={Circle}>
                    Button CTA
                </Button>
                <Button size="xl" iconLeading={Circle} iconTrailing={Circle}>
                    Button CTA
                </Button>
            </div>
            <div className="mb-4 flex gap-8">
                <Button isDisabled iconLeading={Circle} iconTrailing={Circle} size="sm">
                    Button CTA
                </Button>
                <Button isDisabled iconLeading={Circle} iconTrailing={Circle} size="md">
                    Button CTA
                </Button>
                <Button isDisabled iconLeading={Circle} iconTrailing={Circle} size="lg">
                    Button CTA
                </Button>
                <Button isDisabled iconLeading={Circle} iconTrailing={Circle} size="xl">
                    Button CTA
                </Button>
            </div>
            <div className="mb-16 flex gap-8">
                <Button isLoading showTextWhileLoading iconLeading={Circle} iconTrailing={Circle} size="sm">
                    Submitting...
                </Button>
                <Button isLoading showTextWhileLoading iconLeading={Circle} iconTrailing={Circle} size="md">
                    Submitting...
                </Button>
                <Button isLoading showTextWhileLoading iconLeading={Circle} iconTrailing={Circle} size="lg">
                    Submitting...
                </Button>
                <Button isLoading showTextWhileLoading iconLeading={Circle} iconTrailing={Circle} size="xl">
                    Submitting...
                </Button>
            </div>

            <div className="mb-4 flex gap-8">
                <Button size="sm" iconLeading={Circle} />
                <Button size="md" iconLeading={Circle} />
                <Button size="lg" iconLeading={Circle} />
                <Button size="xl" iconLeading={Circle} />
            </div>
            <div className="mb-4 flex gap-8">
                <Button isDisabled size="sm" iconLeading={Circle} />
                <Button isDisabled size="md" iconLeading={Circle} />
                <Button isDisabled size="lg" iconLeading={Circle} />
                <Button isDisabled size="xl" iconLeading={Circle} />
            </div>
            <div className="flex gap-8">
                <Button isLoading aria-label="Loading" size="sm" iconLeading={Circle} />
                <Button isLoading aria-label="Loading" size="md" iconLeading={Circle} />
                <Button isLoading aria-label="Loading" size="lg" iconLeading={Circle} />
                <Button isLoading aria-label="Loading" size="xl" iconLeading={Circle} />
            </div>
        </div>
    );
};

export const Secondary = () => {
    return (
        <div>
            <div className="mb-4 flex gap-8">
                <Button color="secondary" size="sm">
                    Button CTA
                </Button>
                <Button color="secondary" size="md">
                    Button CTA
                </Button>
                <Button color="secondary" size="lg">
                    Button CTA
                </Button>
                <Button color="secondary" size="xl">
                    Button CTA
                </Button>
            </div>
            <div className="mb-4 flex gap-8">
                <Button color="secondary" isDisabled size="sm">
                    Button CTA
                </Button>
                <Button color="secondary" isDisabled size="md">
                    Button CTA
                </Button>
                <Button color="secondary" isDisabled size="lg">
                    Button CTA
                </Button>
                <Button color="secondary" isDisabled size="xl">
                    Button CTA
                </Button>
            </div>
            <div className="mb-16 flex gap-8">
                <Button color="secondary" isLoading showTextWhileLoading size="sm">
                    Submitting...
                </Button>
                <Button color="secondary" isLoading showTextWhileLoading size="md">
                    Submitting...
                </Button>
                <Button color="secondary" isLoading showTextWhileLoading size="lg">
                    Submitting...
                </Button>
                <Button color="secondary" isLoading showTextWhileLoading size="xl">
                    Submitting...
                </Button>
            </div>

            <div className="mb-4 flex gap-8">
                <Button color="secondary" size="sm" iconLeading={Circle} iconTrailing={Circle}>
                    Button CTA
                </Button>
                <Button color="secondary" size="md" iconLeading={Circle} iconTrailing={Circle}>
                    Button CTA
                </Button>
                <Button color="secondary" size="lg" iconLeading={Circle} iconTrailing={Circle}>
                    Button CTA
                </Button>
                <Button color="secondary" size="xl" iconLeading={Circle} iconTrailing={Circle}>
                    Button CTA
                </Button>
            </div>
            <div className="mb-4 flex gap-8">
                <Button color="secondary" isDisabled iconLeading={Circle} iconTrailing={Circle} size="sm">
                    Button CTA
                </Button>
                <Button color="secondary" isDisabled iconLeading={Circle} iconTrailing={Circle} size="md">
                    Button CTA
                </Button>
                <Button color="secondary" isDisabled iconLeading={Circle} iconTrailing={Circle} size="lg">
                    Button CTA
                </Button>
                <Button color="secondary" isDisabled iconLeading={Circle} iconTrailing={Circle} size="xl">
                    Button CTA
                </Button>
            </div>
            <div className="mb-16 flex gap-8">
                <Button color="secondary" isLoading showTextWhileLoading iconLeading={Circle} iconTrailing={Circle} size="sm">
                    Submitting...
                </Button>
                <Button color="secondary" isLoading showTextWhileLoading iconLeading={Circle} iconTrailing={Circle} size="md">
                    Submitting...
                </Button>
                <Button color="secondary" isLoading showTextWhileLoading iconLeading={Circle} iconTrailing={Circle} size="lg">
                    Submitting...
                </Button>
                <Button color="secondary" isLoading showTextWhileLoading iconLeading={Circle} iconTrailing={Circle} size="xl">
                    Submitting...
                </Button>
            </div>

            <div className="mb-4 flex gap-8">
                <Button color="secondary" size="sm" iconLeading={Circle} />
                <Button color="secondary" size="md" iconLeading={Circle} />
                <Button color="secondary" size="lg" iconLeading={Circle} />
                <Button color="secondary" size="xl" iconLeading={Circle} />
            </div>
            <div className="mb-4 flex gap-8">
                <Button color="secondary" isDisabled size="sm" iconLeading={Circle} />
                <Button color="secondary" isDisabled size="md" iconLeading={Circle} />
                <Button color="secondary" isDisabled size="lg" iconLeading={Circle} />
                <Button color="secondary" isDisabled size="xl" iconLeading={Circle} />
            </div>
            <div className="flex gap-8">
                <Button color="secondary" isLoading aria-label="Loading" size="sm" iconLeading={Circle} />
                <Button color="secondary" isLoading aria-label="Loading" size="md" iconLeading={Circle} />
                <Button color="secondary" isLoading aria-label="Loading" size="lg" iconLeading={Circle} />
                <Button color="secondary" isLoading aria-label="Loading" size="xl" iconLeading={Circle} />
            </div>
        </div>
    );
};

export const Tertiary = () => {
    return (
        <div>
            <div className="mb-4 flex gap-8">
                <Button color="tertiary" size="sm">
                    Button CTA
                </Button>
                <Button color="tertiary" size="md">
                    Button CTA
                </Button>
                <Button color="tertiary" size="lg">
                    Button CTA
                </Button>
                <Button color="tertiary" size="xl">
                    Button CTA
                </Button>
            </div>
            <div className="mb-4 flex gap-8">
                <Button color="tertiary" isDisabled size="sm">
                    Button CTA
                </Button>
                <Button color="tertiary" isDisabled size="md">
                    Button CTA
                </Button>
                <Button color="tertiary" isDisabled size="lg">
                    Button CTA
                </Button>
                <Button color="tertiary" isDisabled size="xl">
                    Button CTA
                </Button>
            </div>
            <div className="mb-16 flex gap-8">
                <Button color="tertiary" isLoading showTextWhileLoading size="sm">
                    Submitting...
                </Button>
                <Button color="tertiary" isLoading showTextWhileLoading size="md">
                    Submitting...
                </Button>
                <Button color="tertiary" isLoading showTextWhileLoading size="lg">
                    Submitting...
                </Button>
                <Button color="tertiary" isLoading showTextWhileLoading size="xl">
                    Submitting...
                </Button>
            </div>

            <div className="mb-4 flex gap-8">
                <Button color="tertiary" size="sm" iconLeading={Circle} iconTrailing={Circle}>
                    Button CTA
                </Button>
                <Button color="tertiary" size="md" iconLeading={Circle} iconTrailing={Circle}>
                    Button CTA
                </Button>
                <Button color="tertiary" size="lg" iconLeading={Circle} iconTrailing={Circle}>
                    Button CTA
                </Button>
                <Button color="tertiary" size="xl" iconLeading={Circle} iconTrailing={Circle}>
                    Button CTA
                </Button>
            </div>
            <div className="mb-4 flex gap-8">
                <Button color="tertiary" isDisabled iconLeading={Circle} iconTrailing={Circle} size="sm">
                    Button CTA
                </Button>
                <Button color="tertiary" isDisabled iconLeading={Circle} iconTrailing={Circle} size="md">
                    Button CTA
                </Button>
                <Button color="tertiary" isDisabled iconLeading={Circle} iconTrailing={Circle} size="lg">
                    Button CTA
                </Button>
                <Button color="tertiary" isDisabled iconLeading={Circle} iconTrailing={Circle} size="xl">
                    Button CTA
                </Button>
            </div>
            <div className="mb-16 flex gap-8">
                <Button color="tertiary" isLoading showTextWhileLoading iconLeading={Circle} iconTrailing={Circle} size="sm">
                    Submitting...
                </Button>
                <Button color="tertiary" isLoading showTextWhileLoading iconLeading={Circle} iconTrailing={Circle} size="md">
                    Submitting...
                </Button>
                <Button color="tertiary" isLoading showTextWhileLoading iconLeading={Circle} iconTrailing={Circle} size="lg">
                    Submitting...
                </Button>
                <Button color="tertiary" isLoading showTextWhileLoading iconLeading={Circle} iconTrailing={Circle} size="xl">
                    Submitting...
                </Button>
            </div>

            <div className="mb-4 flex gap-8">
                <Button color="tertiary" size="sm" iconLeading={Circle} />
                <Button color="tertiary" size="md" iconLeading={Circle} />
                <Button color="tertiary" size="lg" iconLeading={Circle} />
                <Button color="tertiary" size="xl" iconLeading={Circle} />
            </div>
            <div className="flex gap-8">
                <Button color="tertiary" isDisabled size="sm" iconLeading={Circle} />
                <Button color="tertiary" isDisabled size="md" iconLeading={Circle} />
                <Button color="tertiary" isDisabled size="lg" iconLeading={Circle} />
                <Button color="tertiary" isDisabled size="xl" iconLeading={Circle} />
            </div>
            <div className="mb-4 flex gap-8">
                <Button color="tertiary" isLoading aria-label="Loading" size="sm" iconLeading={Circle} />
                <Button color="tertiary" isLoading aria-label="Loading" size="md" iconLeading={Circle} />
                <Button color="tertiary" isLoading aria-label="Loading" size="lg" iconLeading={Circle} />
                <Button color="tertiary" isLoading aria-label="Loading" size="xl" iconLeading={Circle} />
            </div>
        </div>
    );
};

export const LinkGray = () => {
    return (
        <div>
            <div className="mb-4 flex gap-8">
                <Button color="link-gray" size="sm">
                    Button CTA
                </Button>
                <Button color="link-gray" size="md">
                    Button CTA
                </Button>
                <Button color="link-gray" size="lg">
                    Button CTA
                </Button>
                <Button color="link-gray" size="xl">
                    Button CTA
                </Button>
            </div>
            <div className="mb-16 flex gap-8">
                <Button color="link-gray" isDisabled size="sm">
                    Button CTA
                </Button>
                <Button color="link-gray" isDisabled size="md">
                    Button CTA
                </Button>
                <Button color="link-gray" isDisabled size="lg">
                    Button CTA
                </Button>
                <Button color="link-gray" isDisabled size="xl">
                    Button CTA
                </Button>
            </div>

            <div className="mb-4 flex gap-8">
                <Button color="link-gray" size="sm" iconLeading={Circle} iconTrailing={Circle}>
                    Button CTA
                </Button>
                <Button color="link-gray" size="md" iconLeading={Circle} iconTrailing={Circle}>
                    Button CTA
                </Button>
                <Button color="link-gray" size="lg" iconLeading={Circle} iconTrailing={Circle}>
                    Button CTA
                </Button>
                <Button color="link-gray" size="xl" iconLeading={Circle} iconTrailing={Circle}>
                    Button CTA
                </Button>
            </div>
            <div className="mb-16 flex gap-8">
                <Button color="link-gray" isDisabled iconLeading={Circle} iconTrailing={Circle} size="sm">
                    Button CTA
                </Button>
                <Button color="link-gray" isDisabled iconLeading={Circle} iconTrailing={Circle} size="md">
                    Button CTA
                </Button>
                <Button color="link-gray" isDisabled iconLeading={Circle} iconTrailing={Circle} size="lg">
                    Button CTA
                </Button>
                <Button color="link-gray" isDisabled iconLeading={Circle} iconTrailing={Circle} size="xl">
                    Button CTA
                </Button>
            </div>
        </div>
    );
};

export const LinkColor = () => {
    return (
        <div>
            <div className="mb-4 flex gap-8">
                <Button color="link-color" size="sm">
                    Button CTA
                </Button>
                <Button color="link-color" size="md">
                    Button CTA
                </Button>
                <Button color="link-color" size="lg">
                    Button CTA
                </Button>
                <Button color="link-color" size="xl">
                    Button CTA
                </Button>
            </div>
            <div className="mb-16 flex gap-8">
                <Button color="link-color" isDisabled size="sm">
                    Button CTA
                </Button>
                <Button color="link-color" isDisabled size="md">
                    Button CTA
                </Button>
                <Button color="link-color" isDisabled size="lg">
                    Button CTA
                </Button>
                <Button color="link-color" isDisabled size="xl">
                    Button CTA
                </Button>
            </div>

            <div className="mb-4 flex gap-8">
                <Button color="link-color" size="sm" iconLeading={Circle} iconTrailing={Circle}>
                    Button CTA
                </Button>
                <Button color="link-color" size="md" iconLeading={Circle} iconTrailing={Circle}>
                    Button CTA
                </Button>
                <Button color="link-color" size="lg" iconLeading={Circle} iconTrailing={Circle}>
                    Button CTA
                </Button>
                <Button color="link-color" size="xl" iconLeading={Circle} iconTrailing={Circle}>
                    Button CTA
                </Button>
            </div>
            <div className="mb-16 flex gap-8">
                <Button color="link-color" isDisabled iconLeading={Circle} iconTrailing={Circle} size="sm">
                    Button CTA
                </Button>
                <Button color="link-color" isDisabled iconLeading={Circle} iconTrailing={Circle} size="md">
                    Button CTA
                </Button>
                <Button color="link-color" isDisabled iconLeading={Circle} iconTrailing={Circle} size="lg">
                    Button CTA
                </Button>
                <Button color="link-color" isDisabled iconLeading={Circle} iconTrailing={Circle} size="xl">
                    Button CTA
                </Button>
            </div>
        </div>
    );
};

export const PrimaryDestructive = () => {
    return (
        <div>
            <div className="mb-4 flex gap-8">
                <Button color="primary-destructive" size="sm">
                    Button CTA
                </Button>
                <Button color="primary-destructive" size="md">
                    Button CTA
                </Button>
                <Button color="primary-destructive" size="lg">
                    Button CTA
                </Button>
                <Button color="primary-destructive" size="xl">
                    Button CTA
                </Button>
            </div>
            <div className="mb-4 flex gap-8">
                <Button color="primary-destructive" isDisabled size="sm">
                    Button CTA
                </Button>
                <Button color="primary-destructive" isDisabled size="md">
                    Button CTA
                </Button>
                <Button color="primary-destructive" isDisabled size="lg">
                    Button CTA
                </Button>
                <Button color="primary-destructive" isDisabled size="xl">
                    Button CTA
                </Button>
            </div>
            <div className="mb-16 flex gap-8">
                <Button color="primary-destructive" isLoading showTextWhileLoading size="sm">
                    Submitting...
                </Button>
                <Button color="primary-destructive" isLoading showTextWhileLoading size="md">
                    Submitting...
                </Button>
                <Button color="primary-destructive" isLoading showTextWhileLoading size="lg">
                    Submitting...
                </Button>
                <Button color="primary-destructive" isLoading showTextWhileLoading size="xl">
                    Submitting...
                </Button>
            </div>

            <div className="mb-4 flex gap-8">
                <Button color="primary-destructive" size="sm" iconLeading={Circle} iconTrailing={Circle}>
                    Button CTA
                </Button>
                <Button color="primary-destructive" size="md" iconLeading={Circle} iconTrailing={Circle}>
                    Button CTA
                </Button>
                <Button color="primary-destructive" size="lg" iconLeading={Circle} iconTrailing={Circle}>
                    Button CTA
                </Button>
                <Button color="primary-destructive" size="xl" iconLeading={Circle} iconTrailing={Circle}>
                    Button CTA
                </Button>
            </div>
            <div className="mb-4 flex gap-8">
                <Button color="primary-destructive" isDisabled iconLeading={Circle} iconTrailing={Circle} size="sm">
                    Button CTA
                </Button>
                <Button color="primary-destructive" isDisabled iconLeading={Circle} iconTrailing={Circle} size="md">
                    Button CTA
                </Button>
                <Button color="primary-destructive" isDisabled iconLeading={Circle} iconTrailing={Circle} size="lg">
                    Button CTA
                </Button>
                <Button color="primary-destructive" isDisabled iconLeading={Circle} iconTrailing={Circle} size="xl">
                    Button CTA
                </Button>
            </div>
            <div className="mb-16 flex gap-8">
                <Button color="primary-destructive" isLoading showTextWhileLoading iconLeading={Circle} iconTrailing={Circle} size="sm">
                    Submitting...
                </Button>
                <Button color="primary-destructive" isLoading showTextWhileLoading iconLeading={Circle} iconTrailing={Circle} size="md">
                    Submitting...
                </Button>
                <Button color="primary-destructive" isLoading showTextWhileLoading iconLeading={Circle} iconTrailing={Circle} size="lg">
                    Submitting...
                </Button>
                <Button color="primary-destructive" isLoading showTextWhileLoading iconLeading={Circle} iconTrailing={Circle} size="xl">
                    Submitting...
                </Button>
            </div>

            <div className="mb-4 flex gap-8">
                <Button color="primary-destructive" size="sm" iconLeading={Circle} />
                <Button color="primary-destructive" size="md" iconLeading={Circle} />
                <Button color="primary-destructive" size="lg" iconLeading={Circle} />
                <Button color="primary-destructive" size="xl" iconLeading={Circle} />
            </div>
            <div className="mb-4 flex gap-8">
                <Button color="primary-destructive" isDisabled size="sm" iconLeading={Circle} />
                <Button color="primary-destructive" isDisabled size="md" iconLeading={Circle} />
                <Button color="primary-destructive" isDisabled size="lg" iconLeading={Circle} />
                <Button color="primary-destructive" isDisabled size="xl" iconLeading={Circle} />
            </div>
            <div className="flex gap-8">
                <Button color="primary-destructive" isLoading aria-label="Loading" size="sm" iconLeading={Circle} />
                <Button color="primary-destructive" isLoading aria-label="Loading" size="md" iconLeading={Circle} />
                <Button color="primary-destructive" isLoading aria-label="Loading" size="lg" iconLeading={Circle} />
                <Button color="primary-destructive" isLoading aria-label="Loading" size="xl" iconLeading={Circle} />
            </div>
        </div>
    );
};

export const SecondaryDestructive = () => {
    return (
        <div>
            <div className="mb-4 flex gap-8">
                <Button color="secondary-destructive" size="sm">
                    Button CTA
                </Button>
                <Button color="secondary-destructive" size="md">
                    Button CTA
                </Button>
                <Button color="secondary-destructive" size="lg">
                    Button CTA
                </Button>
                <Button color="secondary-destructive" size="xl">
                    Button CTA
                </Button>
            </div>
            <div className="mb-4 flex gap-8">
                <Button color="secondary-destructive" isDisabled size="sm">
                    Button CTA
                </Button>
                <Button color="secondary-destructive" isDisabled size="md">
                    Button CTA
                </Button>
                <Button color="secondary-destructive" isDisabled size="lg">
                    Button CTA
                </Button>
                <Button color="secondary-destructive" isDisabled size="xl">
                    Button CTA
                </Button>
            </div>
            <div className="mb-16 flex gap-8">
                <Button color="secondary-destructive" isLoading showTextWhileLoading size="sm">
                    Submitting...
                </Button>
                <Button color="secondary-destructive" isLoading showTextWhileLoading size="md">
                    Submitting...
                </Button>
                <Button color="secondary-destructive" isLoading showTextWhileLoading size="lg">
                    Submitting...
                </Button>
                <Button color="secondary-destructive" isLoading showTextWhileLoading size="xl">
                    Submitting...
                </Button>
            </div>

            <div className="mb-4 flex gap-8">
                <Button color="secondary-destructive" size="sm" iconLeading={Circle} iconTrailing={Circle}>
                    Button CTA
                </Button>
                <Button color="secondary-destructive" size="md" iconLeading={Circle} iconTrailing={Circle}>
                    Button CTA
                </Button>
                <Button color="secondary-destructive" size="lg" iconLeading={Circle} iconTrailing={Circle}>
                    Button CTA
                </Button>
                <Button color="secondary-destructive" size="xl" iconLeading={Circle} iconTrailing={Circle}>
                    Button CTA
                </Button>
            </div>
            <div className="mb-4 flex gap-8">
                <Button color="secondary-destructive" isDisabled iconLeading={Circle} iconTrailing={Circle} size="sm">
                    Button CTA
                </Button>
                <Button color="secondary-destructive" isDisabled iconLeading={Circle} iconTrailing={Circle} size="md">
                    Button CTA
                </Button>
                <Button color="secondary-destructive" isDisabled iconLeading={Circle} iconTrailing={Circle} size="lg">
                    Button CTA
                </Button>
                <Button color="secondary-destructive" isDisabled iconLeading={Circle} iconTrailing={Circle} size="xl">
                    Button CTA
                </Button>
            </div>
            <div className="mb-16 flex gap-8">
                <Button color="secondary-destructive" isLoading showTextWhileLoading iconLeading={Circle} iconTrailing={Circle} size="sm">
                    Submitting...
                </Button>
                <Button color="secondary-destructive" isLoading showTextWhileLoading iconLeading={Circle} iconTrailing={Circle} size="md">
                    Submitting...
                </Button>
                <Button color="secondary-destructive" isLoading showTextWhileLoading iconLeading={Circle} iconTrailing={Circle} size="lg">
                    Submitting...
                </Button>
                <Button color="secondary-destructive" isLoading showTextWhileLoading iconLeading={Circle} iconTrailing={Circle} size="xl">
                    Submitting...
                </Button>
            </div>

            <div className="mb-4 flex gap-8">
                <Button color="secondary-destructive" size="sm" iconLeading={Circle} />
                <Button color="secondary-destructive" size="md" iconLeading={Circle} />
                <Button color="secondary-destructive" size="lg" iconLeading={Circle} />
                <Button color="secondary-destructive" size="xl" iconLeading={Circle} />
            </div>
            <div className="mb-4 flex gap-8">
                <Button color="secondary-destructive" isDisabled size="sm" iconLeading={Circle} />
                <Button color="secondary-destructive" isDisabled size="md" iconLeading={Circle} />
                <Button color="secondary-destructive" isDisabled size="lg" iconLeading={Circle} />
                <Button color="secondary-destructive" isDisabled size="xl" iconLeading={Circle} />
            </div>
            <div className="flex gap-8">
                <Button color="secondary-destructive" isLoading aria-label="Loading" size="sm" iconLeading={Circle} />
                <Button color="secondary-destructive" isLoading aria-label="Loading" size="md" iconLeading={Circle} />
                <Button color="secondary-destructive" isLoading aria-label="Loading" size="lg" iconLeading={Circle} />
                <Button color="secondary-destructive" isLoading aria-label="Loading" size="xl" iconLeading={Circle} />
            </div>
        </div>
    );
};

export const TertiaryDestructive = () => {
    return (
        <div>
            <div className="mb-4 flex gap-8">
                <Button color="tertiary-destructive" size="sm">
                    Button CTA
                </Button>
                <Button color="tertiary-destructive" size="md">
                    Button CTA
                </Button>
                <Button color="tertiary-destructive" size="lg">
                    Button CTA
                </Button>
                <Button color="tertiary-destructive" size="xl">
                    Button CTA
                </Button>
            </div>
            <div className="mb-4 flex gap-8">
                <Button color="tertiary-destructive" isDisabled size="sm">
                    Button CTA
                </Button>
                <Button color="tertiary-destructive" isDisabled size="md">
                    Button CTA
                </Button>
                <Button color="tertiary-destructive" isDisabled size="lg">
                    Button CTA
                </Button>
                <Button color="tertiary-destructive" isDisabled size="xl">
                    Button CTA
                </Button>
            </div>
            <div className="mb-16 flex gap-8">
                <Button color="tertiary-destructive" isLoading showTextWhileLoading size="sm">
                    Submitting...
                </Button>
                <Button color="tertiary-destructive" isLoading showTextWhileLoading size="md">
                    Submitting...
                </Button>
                <Button color="tertiary-destructive" isLoading showTextWhileLoading size="lg">
                    Submitting...
                </Button>
                <Button color="tertiary-destructive" isLoading showTextWhileLoading size="xl">
                    Submitting...
                </Button>
            </div>

            <div className="mb-4 flex gap-8">
                <Button color="tertiary-destructive" size="sm" iconLeading={Circle} iconTrailing={Circle}>
                    Button CTA
                </Button>
                <Button color="tertiary-destructive" size="md" iconLeading={Circle} iconTrailing={Circle}>
                    Button CTA
                </Button>
                <Button color="tertiary-destructive" size="lg" iconLeading={Circle} iconTrailing={Circle}>
                    Button CTA
                </Button>
                <Button color="tertiary-destructive" size="xl" iconLeading={Circle} iconTrailing={Circle}>
                    Button CTA
                </Button>
            </div>
            <div className="mb-4 flex gap-8">
                <Button color="tertiary-destructive" isDisabled iconLeading={Circle} iconTrailing={Circle} size="sm">
                    Button CTA
                </Button>
                <Button color="tertiary-destructive" isDisabled iconLeading={Circle} iconTrailing={Circle} size="md">
                    Button CTA
                </Button>
                <Button color="tertiary-destructive" isDisabled iconLeading={Circle} iconTrailing={Circle} size="lg">
                    Button CTA
                </Button>
                <Button color="tertiary-destructive" isDisabled iconLeading={Circle} iconTrailing={Circle} size="xl">
                    Button CTA
                </Button>
            </div>
            <div className="mb-16 flex gap-8">
                <Button color="tertiary-destructive" isLoading showTextWhileLoading iconLeading={Circle} iconTrailing={Circle} size="sm">
                    Submitting...
                </Button>
                <Button color="tertiary-destructive" isLoading showTextWhileLoading iconLeading={Circle} iconTrailing={Circle} size="md">
                    Submitting...
                </Button>
                <Button color="tertiary-destructive" isLoading showTextWhileLoading iconLeading={Circle} iconTrailing={Circle} size="lg">
                    Submitting...
                </Button>
                <Button color="tertiary-destructive" isLoading showTextWhileLoading iconLeading={Circle} iconTrailing={Circle} size="xl">
                    Submitting...
                </Button>
            </div>

            <div className="mb-4 flex gap-8">
                <Button color="tertiary-destructive" size="sm" iconLeading={Circle} />
                <Button color="tertiary-destructive" size="md" iconLeading={Circle} />
                <Button color="tertiary-destructive" size="lg" iconLeading={Circle} />
                <Button color="tertiary-destructive" size="xl" iconLeading={Circle} />
            </div>
            <div className="mb-4 flex gap-8">
                <Button color="tertiary-destructive" isDisabled size="sm" iconLeading={Circle} />
                <Button color="tertiary-destructive" isDisabled size="md" iconLeading={Circle} />
                <Button color="tertiary-destructive" isDisabled size="lg" iconLeading={Circle} />
                <Button color="tertiary-destructive" isDisabled size="xl" iconLeading={Circle} />
            </div>
            <div className="flex gap-8">
                <Button color="tertiary-destructive" isLoading aria-label="Loading" size="sm" iconLeading={Circle} />
                <Button color="tertiary-destructive" isLoading aria-label="Loading" size="md" iconLeading={Circle} />
                <Button color="tertiary-destructive" isLoading aria-label="Loading" size="lg" iconLeading={Circle} />
                <Button color="tertiary-destructive" isLoading aria-label="Loading" size="xl" iconLeading={Circle} />
            </div>
        </div>
    );
};

export const LinkDestructive = () => {
    return (
        <div>
            <div className="mb-4 flex gap-8">
                <Button color="link-destructive" size="sm">
                    Button CTA
                </Button>
                <Button color="link-destructive" size="md">
                    Button CTA
                </Button>
                <Button color="link-destructive" size="lg">
                    Button CTA
                </Button>
                <Button color="link-destructive" size="xl">
                    Button CTA
                </Button>
            </div>
            <div className="mb-16 flex gap-8">
                <Button color="link-destructive" isDisabled size="sm">
                    Button CTA
                </Button>
                <Button color="link-destructive" isDisabled size="md">
                    Button CTA
                </Button>
                <Button color="link-destructive" isDisabled size="lg">
                    Button CTA
                </Button>
                <Button color="link-destructive" isDisabled size="xl">
                    Button CTA
                </Button>
            </div>

            <div className="mb-4 flex gap-8">
                <Button color="link-destructive" size="sm" iconLeading={Circle} iconTrailing={Circle}>
                    Button CTA
                </Button>
                <Button color="link-destructive" size="md" iconLeading={Circle} iconTrailing={Circle}>
                    Button CTA
                </Button>
                <Button color="link-destructive" size="lg" iconLeading={Circle} iconTrailing={Circle}>
                    Button CTA
                </Button>
                <Button color="link-destructive" size="xl" iconLeading={Circle} iconTrailing={Circle}>
                    Button CTA
                </Button>
            </div>
            <div className="mb-16 flex gap-8">
                <Button color="link-destructive" isDisabled iconLeading={Circle} iconTrailing={Circle} size="sm">
                    Button CTA
                </Button>
                <Button color="link-destructive" isDisabled iconLeading={Circle} iconTrailing={Circle} size="md">
                    Button CTA
                </Button>
                <Button color="link-destructive" isDisabled iconLeading={Circle} iconTrailing={Circle} size="lg">
                    Button CTA
                </Button>
                <Button color="link-destructive" isDisabled iconLeading={Circle} iconTrailing={Circle} size="xl">
                    Button CTA
                </Button>
            </div>
        </div>
    );
};

export const CloseXLightDemo = () => {
    return (
        <div className="flex items-start gap-3">
            <CloseButton size="sm" theme="light" />
            <CloseButton size="md" theme="light" />
            <CloseButton size="lg" theme="light" />
        </div>
    );
};

export const CloseXDarkDemo = () => {
    return (
        <div className="flex items-start gap-3">
            <CloseButton size="sm" theme="dark" />
            <CloseButton size="md" theme="dark" />
            <CloseButton size="lg" theme="dark" />
        </div>
    );
};

export const CloseX = () => {
    return (
        <div className="flex items-start gap-8">
            <div className="gap36 flex items-start p-12">
                <CloseButton size="sm" theme="light" />
                <CloseButton size="md" theme="light" />
                <CloseButton size="lg" theme="light" />
            </div>

            <div className="flex items-start gap-3 rounded-2xl bg-gray-950 p-12">
                <CloseButton size="sm" theme="dark" />
                <CloseButton size="md" theme="dark" />
                <CloseButton size="lg" theme="dark" />
            </div>
        </div>
    );
};

export const UtilityButtonDefaultDemo = () => {
    return (
        <div className="flex items-start gap-1">
            <ButtonUtility size="sm" color="tertiary" tooltip="Copy" icon={Copy01} />
            <ButtonUtility size="sm" color="tertiary" tooltip="Download" icon={DownloadCloud02} />
            <ButtonUtility size="sm" color="tertiary" tooltip="Delete" icon={Trash01} />
            <ButtonUtility size="sm" color="tertiary" tooltip="Edit" icon={Edit01} />
        </div>
    );
};

export const UtilityButtonSecondaryDemo = () => {
    return (
        <div className="flex items-start gap-3">
            <ButtonUtility size="sm" color="secondary" tooltip="Copy" icon={Copy01} />
            <ButtonUtility size="sm" color="secondary" tooltip="Download" icon={DownloadCloud02} />
            <ButtonUtility size="sm" color="secondary" tooltip="Delete" icon={Trash01} />
            <ButtonUtility size="sm" color="secondary" tooltip="Edit" icon={Edit01} />
        </div>
    );
};

export const UtilityButtonTertiaryDemo = () => {
    return (
        <div className="flex items-start gap-1">
            <ButtonUtility size="sm" color="tertiary" tooltip="Copy" icon={Copy01} />
            <ButtonUtility size="sm" color="tertiary" tooltip="Download" icon={DownloadCloud02} />
            <ButtonUtility size="sm" color="tertiary" tooltip="Delete" icon={Trash01} />
            <ButtonUtility size="sm" color="tertiary" tooltip="Edit" icon={Edit01} />
        </div>
    );
};

export const UtilityButtonDisabledDemo = () => {
    return (
        <div className="flex items-start gap-3">
            <ButtonUtility isDisabled size="sm" color="secondary" tooltip="Copy" icon={Copy01} />
            <ButtonUtility isDisabled size="sm" color="secondary" tooltip="Download" icon={DownloadCloud02} />
            <ButtonUtility isDisabled size="sm" color="secondary" tooltip="Delete" icon={Trash01} />
            <ButtonUtility isDisabled size="sm" color="secondary" tooltip="Edit" icon={Edit01} />
        </div>
    );
};

export const UtilityButtonSizesDemo = () => {
    return (
        <div className="flex flex-col gap-8">
            <div className="flex items-start gap-3">
                <ButtonUtility size="xs" color="secondary" tooltip="Copy" icon={Copy01} />
                <ButtonUtility size="xs" color="secondary" tooltip="Download" icon={DownloadCloud02} />
                <ButtonUtility size="xs" color="secondary" tooltip="Delete" icon={Trash01} />
                <ButtonUtility size="xs" color="secondary" tooltip="Edit" icon={Edit01} />
            </div>
            <div className="flex items-start gap-3">
                <ButtonUtility size="sm" color="secondary" tooltip="Copy" icon={Copy01} />
                <ButtonUtility size="sm" color="secondary" tooltip="Download" icon={DownloadCloud02} />
                <ButtonUtility size="sm" color="secondary" tooltip="Delete" icon={Trash01} />
                <ButtonUtility size="sm" color="secondary" tooltip="Edit" icon={Edit01} />
            </div>
        </div>
    );
};

export const UtilityButton = () => {
    return (
        <div className="flex items-start gap-8">
            <div className="flex items-start gap-8">
                <div className="flex flex-col items-start gap-6 p-12">
                    <ButtonUtility size="xs" color="secondary" tooltip="Tooltip" icon={Placeholder} />
                    <ButtonUtility isDisabled size="xs" color="secondary" tooltip="Tooltip" icon={Placeholder} />
                </div>
                <div className="flex flex-col items-start gap-6 p-12">
                    <ButtonUtility size="sm" color="secondary" tooltip="Tooltip" icon={Placeholder} />
                    <ButtonUtility isDisabled size="sm" color="secondary" tooltip="Tooltip" icon={Placeholder} />
                </div>
            </div>

            <div className="flex items-start gap-8">
                <div className="flex flex-col items-start gap-6 p-12">
                    <ButtonUtility size="xs" color="tertiary" tooltip="Tooltip" icon={Placeholder} />
                    <ButtonUtility isDisabled size="xs" color="tertiary" tooltip="Tooltip" icon={Placeholder} />
                </div>
                <div className="flex flex-col items-start gap-6 p-12">
                    <ButtonUtility size="sm" color="tertiary" tooltip="Tooltip" icon={Placeholder} />
                    <ButtonUtility isDisabled size="sm" color="tertiary" tooltip="Tooltip" icon={Placeholder} />
                </div>
            </div>
        </div>
    );
};
