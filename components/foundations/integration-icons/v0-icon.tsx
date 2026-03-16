"use client";

import type { SVGProps } from "react";

const V0Icon = ({ grayscale, ...props }: SVGProps<SVGSVGElement> & { grayscale?: boolean }) => {
    const fillClass = grayscale ? "fill-fg-quaternary" : "fill-[#000]";

    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" {...props}>
            <path
                d="M11.7213 5.02356H16.4951C18.4308 5.02356 20 6.59277 20 8.52849V13.0812H18.0393V8.52849C18.0393 8.48185 18.0375 8.43554 18.0339 8.38965L13.2601 13.0804C13.2762 13.0809 13.2923 13.0812 13.3085 13.0812H18.0393V14.933H13.3085C11.3728 14.933 9.76054 13.3485 9.76054 11.4127V6.87216H11.7213V11.4127C11.7213 11.5002 11.7281 11.5866 11.7412 11.6713L16.6201 6.87731C16.5789 6.8739 16.5373 6.87216 16.4951 6.87216H11.7213V5.02356Z"
                className={fillClass}
            />
            <path
                d="M6.89927 14.5917L0 6.87101H2.77565L6.82628 11.4038V6.87101H8.8959V13.8295C8.8959 14.8797 7.59905 15.3747 6.89927 14.5917Z"
                className={fillClass}
            />
        </svg>
    );
};

export default V0Icon;
