"use client";

import type { SVGProps } from "react";

const NextjsIcon = ({ grayscale, ...props }: SVGProps<SVGSVGElement> & { grayscale?: boolean }) => {
    if (grayscale) {
        return (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" {...props}>
                <g clipPath="url(#clip0_nextjs_gray)">
                    <path
                        d="M19.2813 20.8035L6.42272 4.2403H4V15.7555H5.93818V6.70167L17.7598 21.9755C18.2933 21.6185 18.8014 21.2267 19.2813 20.8035Z"
                        fill="url(#paint0_nextjs_gray)"
                    />
                    <path d="M15.6798 4.24017H13.7598V15.7602H15.6798V4.24017Z" fill="url(#paint1_nextjs_gray)" />
                </g>
                <defs>
                    <linearGradient id="paint0_nextjs_gray" x1="12.8" y1="14.2403" x2="18.48" y2="21.2803" gradientUnits="userSpaceOnUse">
                        <stop className="[stop-color:var(--color-fg-quaternary)]" />
                        <stop offset="1" className="[stop-color:var(--color-fg-quaternary)]" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="paint1_nextjs_gray" x1="14.7198" y1="4.24017" x2="14.6876" y2="12.7002" gradientUnits="userSpaceOnUse">
                        <stop className="[stop-color:var(--color-fg-quaternary)]" />
                        <stop offset="1" className="[stop-color:var(--color-fg-quaternary)]" stopOpacity="0" />
                    </linearGradient>
                    <clipPath id="clip0_nextjs_gray">
                        <rect width="20" height="20" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        );
    }

    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" {...props}>
            <g clipPath="url(#clip0_nextjs)">
                <path
                    d="M19.2813 20.8035L6.42272 4.2403H4V15.7555H5.93818V6.70167L17.7598 21.9755C18.2933 21.6185 18.8014 21.2267 19.2813 20.8035Z"
                    fill="url(#paint0_nextjs)"
                />
                <path d="M15.6798 4.24017H13.7598V15.7602H15.6798V4.24017Z" fill="url(#paint1_nextjs)" />
            </g>
            <defs>
                <linearGradient id="paint0_nextjs" x1="12.8" y1="14.2403" x2="18.48" y2="21.2803" gradientUnits="userSpaceOnUse">
                    <stop />
                    <stop offset="1" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="paint1_nextjs" x1="14.7198" y1="4.24017" x2="14.6876" y2="12.7002" gradientUnits="userSpaceOnUse">
                    <stop />
                    <stop offset="1" stopOpacity="0" />
                </linearGradient>
                <clipPath id="clip0_nextjs">
                    <rect width="20" height="20" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
};

export default NextjsIcon;
