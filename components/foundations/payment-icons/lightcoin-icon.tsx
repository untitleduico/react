"use client";

import type { SVGProps } from "react";

const LightcoinIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg width="34" height="24" viewBox="0 0 34 24" fill="none" {...props}>
            <path
                d="M4 0.5H30C31.933 0.5 33.5 2.067 33.5 4V20C33.5 21.933 31.933 23.5 30 23.5H4C2.067 23.5 0.5 21.933 0.5 20V4C0.5 2.067 2.067 0.5 4 0.5Z"
                fill="white"
            />
            <path
                d="M4 0.5H30C31.933 0.5 33.5 2.067 33.5 4V20C33.5 21.933 31.933 23.5 30 23.5H4C2.067 23.5 0.5 21.933 0.5 20V4C0.5 2.067 2.067 0.5 4 0.5Z"
                className="stroke-border-secondary"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M25 12C25 16.4183 21.4183 20 17 20C12.5817 20 9 16.4183 9 12C9 7.58172 12.5817 4 17 4C21.4183 4 25 7.58172 25 12ZM14.8284 12.594L15.9562 8.3638H18.4004L17.5543 11.6541L18.6825 11.1841L18.4004 12.2179L17.2722 12.594L16.7083 14.6622H20.7507L20.3746 16.166H13.888L14.5462 13.6279L13.6063 14.0039L13.888 12.9701L14.8284 12.594Z"
                fill="#A5A8A9"
            />
        </svg>
    );
};

export default LightcoinIcon;
