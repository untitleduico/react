"use client";

import type { SVGProps } from "react";

const EtheriumIcon = (props: SVGProps<SVGSVGElement>) => {
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
            <ellipse cx="16.935" cy="11.935" rx="7.935" ry="7.93499" fill="#6481E7" />
            <path fillRule="evenodd" clipRule="evenodd" d="M13.4688 12.2578L17.0281 14.362V6.35181L13.4688 12.2578Z" fill="white" />
            <path fillRule="evenodd" clipRule="evenodd" d="M17.0273 6.35181V14.362L20.5867 12.2578L17.0273 6.35181Z" fill="#C1CCF5" />
            <path fillRule="evenodd" clipRule="evenodd" d="M17.0283 10.6401L13.4688 12.2577L17.0281 14.3619L20.5877 12.258L17.0283 10.6401Z" fill="#8299EC" />
            <path fillRule="evenodd" clipRule="evenodd" d="M17.0283 10.6401L13.4688 12.2577L17.0281 14.3619L17.0283 10.6401Z" fill="#C1CCF5" />
            <path fillRule="evenodd" clipRule="evenodd" d="M13.4688 12.9329L17.0281 17.9489V15.0359L13.4688 12.9329Z" fill="white" />
            <path fillRule="evenodd" clipRule="evenodd" d="M17.0273 15.0359V17.9491L20.589 12.9329L17.0273 15.0359Z" fill="#C1CCF5" />
        </svg>
    );
};

export default EtheriumIcon;
