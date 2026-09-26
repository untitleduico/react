"use client";

import { BadgeGroup } from "@/components/base/badges/badge-groups";

const variants = [
    {
        color: "gray",
        text: "We've just released a new feature",
        addonText: "New feature",
    },
    {
        color: "brand",
        text: "We've just released a new feature",
        addonText: "New feature",
    },
    {
        color: "error",
        text: "There was a problem with that action",
        addonText: "Error",
    },
    {
        color: "warning",
        text: "Just to let you know this might be a problem",
        addonText: "Warning",
    },
    {
        color: "success",
        text: "You've updated your profile and details",
        addonText: "New feature",
    },
] as const;

const sizes = ["md", "lg"] as const;

export const PillColorLeadingGray = () => {
    return (
        <div className="flex flex-col items-start gap-4">
            <BadgeGroup addonText="New feature" color="gray" theme="light" align="leading" size="md">
                We've just released a new feature
            </BadgeGroup>
            <BadgeGroup addonText="New feature" color="gray" theme="light" align="leading" size="lg">
                We've just released a new feature
            </BadgeGroup>
        </div>
    );
};

export const PillColorLeadingBrand = () => {
    return (
        <div className="flex flex-col items-start gap-4">
            <BadgeGroup addonText="New feature" color="brand" theme="light" align="leading" size="md">
                We've just released a new feature
            </BadgeGroup>
            <BadgeGroup addonText="New feature" color="brand" theme="light" align="leading" size="lg">
                We've just released a new feature
            </BadgeGroup>
        </div>
    );
};

export const PillColorLeadingError = () => {
    return (
        <div className="flex flex-col items-start gap-4">
            <BadgeGroup addonText="Error" color="error" theme="light" align="leading" size="md">
                There was a problem with that action
            </BadgeGroup>
            <BadgeGroup addonText="Error" color="error" theme="light" align="leading" size="lg">
                There was a problem with that action
            </BadgeGroup>
        </div>
    );
};

export const PillColorLeadingWarning = () => {
    return (
        <div className="flex flex-col items-start gap-4">
            <BadgeGroup addonText="Warning" color="warning" theme="light" align="leading" size="md">
                Just to let you know this might be a problem
            </BadgeGroup>
            <BadgeGroup addonText="Warning" color="warning" theme="light" align="leading" size="lg">
                Just to let you know this might be a problem
            </BadgeGroup>
        </div>
    );
};

export const PillColorLeadingSuccess = () => {
    return (
        <div className="flex flex-col items-start gap-4">
            <BadgeGroup addonText="Success" color="success" theme="light" align="leading" size="md">
                You've updated your profile and details
            </BadgeGroup>
            <BadgeGroup addonText="Success" color="success" theme="light" align="leading" size="lg">
                You've updated your profile and details
            </BadgeGroup>
        </div>
    );
};

export const PillColorTrailingGray = () => {
    return (
        <div className="flex flex-col items-start gap-4">
            <BadgeGroup addonText="New feature" color="gray" theme="light" align="trailing" size="md">
                We've just released a new feature
            </BadgeGroup>
            <BadgeGroup addonText="New feature" color="gray" theme="light" align="trailing" size="lg">
                We've just released a new feature
            </BadgeGroup>
        </div>
    );
};

export const PillColorTrailingBrand = () => {
    return (
        <div className="flex flex-col items-start gap-4">
            <BadgeGroup addonText="New feature" color="brand" theme="light" align="trailing" size="md">
                We've just released a new feature
            </BadgeGroup>
            <BadgeGroup addonText="New feature" color="brand" theme="light" align="trailing" size="lg">
                We've just released a new feature
            </BadgeGroup>
        </div>
    );
};

export const PillColorTrailingError = () => {
    return (
        <div className="flex flex-col items-start gap-4">
            <BadgeGroup addonText="Error" color="error" theme="light" align="trailing" size="md">
                There was a problem with that action
            </BadgeGroup>
            <BadgeGroup addonText="Error" color="error" theme="light" align="trailing" size="lg">
                There was a problem with that action
            </BadgeGroup>
        </div>
    );
};

export const PillColorTrailingWarning = () => {
    return (
        <div className="flex flex-col items-start gap-4">
            <BadgeGroup addonText="Warning" color="warning" theme="light" align="trailing" size="md">
                Just to let you know this might be a problem
            </BadgeGroup>
            <BadgeGroup addonText="Warning" color="warning" theme="light" align="trailing" size="lg">
                Just to let you know this might be a problem
            </BadgeGroup>
        </div>
    );
};

export const PillColorTrailingSuccess = () => {
    return (
        <div className="flex flex-col items-start gap-4">
            <BadgeGroup addonText="Success" color="success" theme="light" align="trailing" size="md">
                You've updated your profile and details
            </BadgeGroup>
            <BadgeGroup addonText="Success" color="success" theme="light" align="trailing" size="lg">
                You've updated your profile and details
            </BadgeGroup>
        </div>
    );
};

export const BadgeModernLeadingGray = () => {
    return (
        <div className="flex flex-col items-start gap-4">
            <BadgeGroup addonText="New feature" color="gray" theme="modern" align="leading" size="md">
                We've just released a new feature
            </BadgeGroup>
            <BadgeGroup addonText="New feature" color="gray" theme="modern" align="leading" size="lg">
                We've just released a new feature
            </BadgeGroup>
        </div>
    );
};

export const BadgeModernLeadingBrand = () => {
    return (
        <div className="flex flex-col items-start gap-4">
            <BadgeGroup addonText="New feature" color="brand" theme="modern" align="leading" size="md">
                We've just released a new feature
            </BadgeGroup>
            <BadgeGroup addonText="New feature" color="brand" theme="modern" align="leading" size="lg">
                We've just released a new feature
            </BadgeGroup>
        </div>
    );
};

export const BadgeModernLeadingError = () => {
    return (
        <div className="flex flex-col items-start gap-4">
            <BadgeGroup addonText="Error" color="error" theme="modern" align="leading" size="md">
                There was a problem with that action
            </BadgeGroup>
            <BadgeGroup addonText="Error" color="error" theme="modern" align="leading" size="lg">
                There was a problem with that action
            </BadgeGroup>
        </div>
    );
};

export const BadgeModernLeadingWarning = () => {
    return (
        <div className="flex flex-col items-start gap-4">
            <BadgeGroup addonText="Warning" color="warning" theme="modern" align="leading" size="md">
                Just to let you know this might be a problem
            </BadgeGroup>
            <BadgeGroup addonText="Warning" color="warning" theme="modern" align="leading" size="lg">
                Just to let you know this might be a problem
            </BadgeGroup>
        </div>
    );
};

export const BadgeModernLeadingSuccess = () => {
    return (
        <div className="flex flex-col items-start gap-4">
            <BadgeGroup addonText="Success" color="success" theme="modern" align="leading" size="md">
                You've updated your profile and details
            </BadgeGroup>
            <BadgeGroup addonText="Success" color="success" theme="modern" align="leading" size="lg">
                You've updated your profile and details
            </BadgeGroup>
        </div>
    );
};

export const BadgeModernTrailingGray = () => {
    return (
        <div className="flex flex-col items-start gap-4">
            <BadgeGroup addonText="New feature" color="gray" theme="modern" align="trailing" size="md">
                We've just released a new feature
            </BadgeGroup>
            <BadgeGroup addonText="New feature" color="gray" theme="modern" align="trailing" size="lg">
                We've just released a new feature
            </BadgeGroup>
        </div>
    );
};

export const BadgeModernTrailingBrand = () => {
    return (
        <div className="flex flex-col items-start gap-4">
            <BadgeGroup addonText="New feature" color="brand" theme="modern" align="trailing" size="md">
                We've just released a new feature
            </BadgeGroup>
            <BadgeGroup addonText="New feature" color="brand" theme="modern" align="trailing" size="lg">
                We've just released a new feature
            </BadgeGroup>
        </div>
    );
};

export const BadgeModernTrailingError = () => {
    return (
        <div className="flex flex-col items-start gap-4">
            <BadgeGroup addonText="Error" color="error" theme="modern" align="trailing" size="md">
                There was a problem with that action
            </BadgeGroup>
            <BadgeGroup addonText="Error" color="error" theme="modern" align="trailing" size="lg">
                There was a problem with that action
            </BadgeGroup>
        </div>
    );
};

export const BadgeModernTrailingWarning = () => {
    return (
        <div className="flex flex-col items-start gap-4">
            <BadgeGroup addonText="Warning" color="warning" theme="modern" align="trailing" size="md">
                Just to let you know this might be a problem
            </BadgeGroup>
            <BadgeGroup addonText="Warning" color="warning" theme="modern" align="trailing" size="lg">
                Just to let you know this might be a problem
            </BadgeGroup>
        </div>
    );
};

export const BadgeModernTrailingSuccess = () => {
    return (
        <div className="flex flex-col items-start gap-4">
            <BadgeGroup addonText="Success" color="success" theme="modern" align="trailing" size="md">
                You've updated your profile and details
            </BadgeGroup>
            <BadgeGroup addonText="Success" color="success" theme="modern" align="trailing" size="lg">
                You've updated your profile and details
            </BadgeGroup>
        </div>
    );
};

export const PillColorLeading = () => {
    return (
        <div className="grid grid-cols-2 content-start gap-x-8 gap-y-4">
            {variants.map((variant) =>
                sizes.map((size) => (
                    <div key={`${variant.color}-${size}`} className="flex flex-col gap-3.5">
                        <BadgeGroup {...variant} theme="light" align="leading" size={size}>
                            {variant.text}
                        </BadgeGroup>
                    </div>
                )),
            )}
        </div>
    );
};

export const PillColorTrailing = () => {
    return (
        <div className="grid grid-cols-2 content-start gap-x-8 gap-y-4">
            {variants.map((variant) =>
                sizes.map((size) => (
                    <div key={`${variant.color}-${size}`} className="flex flex-col gap-3.5">
                        <BadgeGroup {...variant} theme="light" align="trailing" size={size}>
                            {variant.text}
                        </BadgeGroup>
                    </div>
                )),
            )}
        </div>
    );
};

export const BadgeModernLeading = () => {
    return (
        <div className="grid grid-cols-2 content-start gap-x-8 gap-y-4">
            {variants.map((variant) =>
                sizes.map((size) => (
                    <div key={`${variant.color}-${size}`} className="flex flex-col gap-3.5">
                        <BadgeGroup {...variant} theme="modern" align="leading" size={size}>
                            {variant.text}
                        </BadgeGroup>
                    </div>
                )),
            )}
        </div>
    );
};

export const BadgeModernTrailing = () => {
    return (
        <div className="grid grid-cols-2 content-start gap-x-8 gap-y-4">
            {variants.map((variant) =>
                sizes.map((size) => (
                    <div key={`${variant.color}-${size}`} className="flex flex-col gap-3.5">
                        <BadgeGroup {...variant} theme="modern" align="trailing" size={size}>
                            {variant.text}
                        </BadgeGroup>
                    </div>
                )),
            )}
        </div>
    );
};
