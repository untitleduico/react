"use client";

import type { SVGProps } from "react";

const LovableIcon = ({ grayscale, ...props }: SVGProps<SVGSVGElement> & { grayscale?: boolean }) => {
    if (grayscale) {
        return (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" {...props}>
                <g clipPath="url(#clip0_12464_573798)">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.63094 2.5C9.91191 2.5 11.7619 4.35417 11.7619 6.64214V8.21643H13.1367C15.4178 8.21643 17.2677 10.0706 17.2677 12.3585C17.2677 14.6452 15.4185 16.5 13.1367 16.5H3.5V6.64144C3.5 4.35417 5.34927 2.5 7.63094 2.5Z"
                        className="fill-fg-quaternary"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_12464_573798">
                        <rect width="14" height="14" fill="white" transform="translate(3.5 2.5)" />
                    </clipPath>
                </defs>
            </svg>
        );
    }

    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" {...props}>
            <g clipPath="url(#clip0_12464_573784)">
                <mask id="mask0_12464_573784" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="3" y="2" width="15" height="15">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.63094 2.5C9.91191 2.5 11.7619 4.35417 11.7619 6.64214V8.21643H13.1367C15.4178 8.21643 17.2677 10.0706 17.2677 12.3585C17.2677 14.6452 15.4185 16.5 13.1367 16.5H3.5V6.64144C3.5 4.35417 5.34927 2.5 7.63094 2.5Z"
                        fill="black"
                    />
                </mask>
                <g mask="url(#mask0_12464_573784)">
                    <g filter="url(#filter0_f_12464_573784)">
                        <path
                            d="M9.54051 19.2936C14.6877 19.2936 18.8603 15.121 18.8603 9.9738C18.8603 4.82661 14.6877 0.653992 9.54051 0.653992C4.39332 0.653992 0.220703 4.82661 0.220703 9.9738C0.220703 15.121 4.39332 19.2936 9.54051 19.2936Z"
                            fill="#4B73FF"
                        />
                    </g>
                    <g filter="url(#filter1_f_12464_573784)">
                        <path
                            d="M10.5639 14.1778C17.1559 14.1778 22.4998 10.0051 22.4998 4.85795C22.4998 -0.289241 17.1559 -4.46185 10.5639 -4.46185C3.97183 -4.46185 -1.37207 -0.289241 -1.37207 4.85795C-1.37207 10.0051 3.97183 14.1778 10.5639 14.1778Z"
                            fill="#FF66F4"
                        />
                    </g>
                    <g filter="url(#filter2_f_12464_573784)">
                        <path
                            d="M12.5102 11.2888C17.6574 11.2888 21.83 7.62426 21.83 3.10386C21.83 -1.41655 17.6574 -5.08105 12.5102 -5.08105C7.36305 -5.08105 3.19043 -1.41655 3.19043 3.10386C3.19043 7.62426 7.36305 11.2888 12.5102 11.2888Z"
                            fill="#FF0105"
                        />
                    </g>
                    <g filter="url(#filter3_f_12464_573784)">
                        <path
                            d="M10.7302 10.4605C13.8259 10.4605 16.3354 7.95102 16.3354 4.85536C16.3354 1.75971 13.8259 -0.749817 10.7302 -0.749817C7.63452 -0.749817 5.125 1.75971 5.125 4.85536C5.125 7.95102 7.63452 10.4605 10.7302 10.4605Z"
                            fill="#FE7B02"
                        />
                    </g>
                </g>
            </g>
            <defs>
                <filter
                    id="filter0_f_12464_573784"
                    x="-3.01305"
                    y="-2.57976"
                    width="25.1072"
                    height="25.1072"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="1.61688" result="effect1_foregroundBlur_12464_573784" />
                </filter>
                <filter
                    id="filter1_f_12464_573784"
                    x="-4.60583"
                    y="-7.69561"
                    width="30.3396"
                    height="25.1072"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="1.61688" result="effect1_foregroundBlur_12464_573784" />
                </filter>
                <filter
                    id="filter2_f_12464_573784"
                    x="-0.0433259"
                    y="-8.31481"
                    width="25.1072"
                    height="22.8373"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="1.61688" result="effect1_foregroundBlur_12464_573784" />
                </filter>
                <filter
                    id="filter3_f_12464_573784"
                    x="1.89124"
                    y="-3.98357"
                    width="17.6775"
                    height="17.6779"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="1.61688" result="effect1_foregroundBlur_12464_573784" />
                </filter>
                <clipPath id="clip0_12464_573784">
                    <rect width="14" height="14" fill="white" transform="translate(3.5 2.5)" />
                </clipPath>
            </defs>
        </svg>
    );
};

export default LovableIcon;
