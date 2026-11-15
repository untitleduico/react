"use client";

import type { HTMLAttributes } from "react";
import { BoxIllustration } from "./box";
import { CloudIllustration } from "./cloud";
import { CreditCardIllustration } from "./credit-card";
import { DocumentsIllustration } from "./documents";

const types = {
    box: BoxIllustration,
    cloud: CloudIllustration,
    documents: DocumentsIllustration,
    "credit-card": CreditCardIllustration,
};

export interface IllustrationProps extends HTMLAttributes<HTMLDivElement> {
    /** The overall scale of the illustration, which also selects the background pattern drawn behind it. */
    size?: "sm" | "md" | "lg";
    /** Classes applied to the inline `svg` itself, for overriding its stroke or fill. */
    svgClassName?: string;
    /** Classes applied to the badge that holds `children`, the icon floating over the illustration. */
    childrenClassName?: string;
}

export const Illustration = (
    props: IllustrationProps & {
        /** Which illustration to draw. */
        type: keyof typeof types;
    },
) => {
    const { type } = props;

    const Component = types[type];

    return <Component {...props} />;
};
