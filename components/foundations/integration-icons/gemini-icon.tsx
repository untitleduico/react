"use client";

import type { SVGProps } from "react";

const GeminiIcon = ({ grayscale, ...props }: SVGProps<SVGSVGElement> & { grayscale?: boolean }) => {
    if (grayscale) {
        return (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" {...props}>
                <path
                    d="M9.81623 1.00006C10.005 1.00006 10.1692 1.12898 10.2152 1.3121C10.3564 1.87222 10.5405 2.41856 10.7697 2.95003C11.3666 4.33676 12.1857 5.55055 13.2256 6.59048C14.266 7.63039 15.4794 8.44948 16.8661 9.04643C17.398 9.27557 17.9439 9.45971 18.504 9.60089C18.6871 9.64693 18.816 9.81114 18.816 9.99988C18.816 10.1886 18.6871 10.3528 18.504 10.3988C17.9439 10.54 17.3975 10.7242 16.8661 10.9533C15.4793 11.5503 14.2655 12.3694 13.2256 13.4093C12.1857 14.4497 11.3666 15.663 10.7697 17.0497C10.5405 17.5817 10.3564 18.1276 10.2152 18.6876C10.1692 18.8708 10.005 18.9997 9.81623 18.9997C9.62748 18.9997 9.46328 18.8708 9.41724 18.6876C9.27606 18.1276 9.09191 17.5812 8.86278 17.0497C8.26583 15.663 7.44723 14.4492 6.40683 13.4093C5.36637 12.3694 4.15311 11.5503 2.76637 10.9533C2.23439 10.7242 1.68856 10.54 1.12844 10.3988C0.945322 10.3528 0.816406 10.1886 0.816406 9.99988C0.81643 9.81114 0.945334 9.64693 1.12844 9.60089C1.68857 9.45971 2.2349 9.27559 2.76637 9.04643C4.15314 8.44946 5.3669 7.63042 6.40683 6.59048C7.44676 5.55055 8.2658 4.33679 8.86278 2.95003C9.09194 2.41804 9.27606 1.87222 9.41724 1.3121C9.46328 1.12899 9.62748 1.00009 9.81623 1.00006Z"
                    className="fill-fg-quaternary"
                />
            </svg>
        );
    }

    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" {...props}>
            <mask id="mask0_12464_573808" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="1" width="19" height="18">
                <path
                    d="M9.81623 1.00006C10.005 1.00006 10.1692 1.12898 10.2152 1.3121C10.3564 1.87222 10.5405 2.41856 10.7697 2.95003C11.3666 4.33676 12.1857 5.55055 13.2256 6.59048C14.266 7.63039 15.4794 8.44948 16.8661 9.04643C17.398 9.27557 17.9439 9.45971 18.504 9.60089C18.6871 9.64693 18.816 9.81114 18.816 9.99988C18.816 10.1886 18.6871 10.3528 18.504 10.3988C17.9439 10.54 17.3975 10.7242 16.8661 10.9533C15.4793 11.5503 14.2655 12.3694 13.2256 13.4093C12.1857 14.4497 11.3666 15.663 10.7697 17.0497C10.5405 17.5817 10.3564 18.1276 10.2152 18.6876C10.1692 18.8708 10.005 18.9997 9.81623 18.9997C9.62748 18.9997 9.46328 18.8708 9.41724 18.6876C9.27606 18.1276 9.09191 17.5812 8.86278 17.0497C8.26583 15.663 7.44723 14.4492 6.40683 13.4093C5.36637 12.3694 4.15311 11.5503 2.76637 10.9533C2.23439 10.7242 1.68856 10.54 1.12844 10.3988C0.945322 10.3528 0.816406 10.1886 0.816406 9.99988C0.81643 9.81114 0.945334 9.64693 1.12844 9.60089C1.68857 9.45971 2.2349 9.27559 2.76637 9.04643C4.15314 8.44946 5.3669 7.63042 6.40683 6.59048C7.44676 5.55055 8.2658 4.33679 8.86278 2.95003C9.09194 2.41804 9.27606 1.87222 9.41724 1.3121C9.46328 1.12899 9.62748 1.00009 9.81623 1.00006Z"
                    fill="white"
                />
            </mask>
            <g mask="url(#mask0_12464_573808)">
                <g filter="url(#filter0_f_12464_573808)">
                    <path
                        d="M-0.556829 15.0005C1.5229 15.7391 3.91327 14.3542 4.78221 11.9074C5.65115 9.46054 4.66962 6.87825 2.5899 6.13967C0.51017 5.4011 -1.8802 6.78593 -2.74914 9.23278C-3.61809 11.6796 -2.63655 14.2619 -0.556829 15.0005Z"
                        fill="#FFE432"
                    />
                </g>
                <g filter="url(#filter1_f_12464_573808)">
                    <path
                        d="M8.67823 6.93344C11.5354 6.93344 13.8516 4.56633 13.8516 1.64635C13.8516 -1.27363 11.5354 -3.64075 8.67823 -3.64075C5.82107 -3.64075 3.50488 -1.27363 3.50488 1.64635C3.50488 4.56633 5.82107 6.93344 8.67823 6.93344Z"
                        fill="#FC413D"
                    />
                </g>
                <g filter="url(#filter2_f_12464_573808)">
                    <path
                        d="M6.66738 23.8414C9.64993 23.6956 11.9147 20.4452 11.7258 16.5814C11.5369 12.7176 8.96594 9.70361 5.98339 9.84941C3.00084 9.99521 0.736124 13.2456 0.925003 17.1094C1.11388 20.9732 3.68483 23.9872 6.66738 23.8414Z"
                        fill="#00B95C"
                    />
                </g>
                <g filter="url(#filter3_f_12464_573808)">
                    <path
                        d="M6.66738 23.8414C9.64993 23.6956 11.9147 20.4452 11.7258 16.5814C11.5369 12.7176 8.96594 9.70361 5.98339 9.84941C3.00084 9.99521 0.736124 13.2456 0.925003 17.1094C1.11388 20.9732 3.68483 23.9872 6.66738 23.8414Z"
                        fill="#00B95C"
                    />
                </g>
                <g filter="url(#filter4_f_12464_573808)">
                    <path
                        d="M9.65501 21.5033C12.1554 19.982 12.8246 16.5172 11.1498 13.7645C9.47496 11.0118 6.09026 10.0136 3.58987 11.5349C1.08947 13.0562 0.420228 16.521 2.09507 19.2737C3.76991 22.0264 7.15461 23.0246 9.65501 21.5033Z"
                        fill="#00B95C"
                    />
                </g>
                <g filter="url(#filter5_f_12464_573808)">
                    <path
                        d="M19.7615 12.8537C22.5719 12.8537 24.8502 10.6598 24.8502 7.95354C24.8502 5.24724 22.5719 3.05334 19.7615 3.05334C16.9511 3.05334 14.6729 5.24724 14.6729 7.95354C14.6729 10.6598 16.9511 12.8537 19.7615 12.8537Z"
                        fill="#3186FF"
                    />
                </g>
                <g filter="url(#filter6_f_12464_573808)">
                    <path
                        d="M-2.5546 12.2848C0.0330789 14.2527 3.8134 13.6353 5.88898 10.9059C7.96457 8.17651 7.54944 4.36866 4.96177 2.40083C2.37409 0.433008 -1.40623 1.05038 -3.48181 3.77977C-5.5574 6.50916 -5.14227 10.317 -2.5546 12.2848Z"
                        fill="#FBBC04"
                    />
                </g>
                <g filter="url(#filter7_f_12464_573808)">
                    <path
                        d="M10.7045 15.1936C13.7931 17.3171 17.8873 16.7256 19.849 13.8723C21.8107 11.019 20.8971 6.98443 17.8084 4.86089C14.7197 2.73734 10.6256 3.32893 8.66386 6.18223C6.70216 9.03553 7.61577 13.0701 10.7045 15.1936Z"
                        fill="#3186FF"
                    />
                </g>
                <g filter="url(#filter8_f_12464_573808)">
                    <path
                        d="M16.32 0.2798C17.1058 1.34817 16.0961 3.42543 14.0648 4.91948C12.0335 6.41354 9.74972 6.75862 8.96394 5.69025C8.17813 4.62189 9.18786 2.54463 11.2192 1.05057C13.2505 -0.443482 15.5342 -0.788569 16.32 0.2798Z"
                        fill="#749BFF"
                    />
                </g>
                <g filter="url(#filter9_f_12464_573808)">
                    <path
                        d="M9.86869 5.39516C13.0101 2.48126 14.0884 -1.46398 12.277 -3.41679C10.4656 -5.3696 6.45061 -4.59048 3.30917 -1.67659C0.167732 1.23731 -0.910508 5.18255 0.900853 7.13536C2.71221 9.08817 6.72725 8.30905 9.86869 5.39516Z"
                        fill="#FC413D"
                    />
                </g>
                <g filter="url(#filter10_f_12464_573808)">
                    <path
                        d="M3.42971 15.861C5.29682 17.1973 7.44041 17.4004 8.21755 16.3146C8.99469 15.2288 8.1111 13.2652 6.24399 11.9289C4.37687 10.5926 2.23329 10.3895 1.45615 11.4753C0.679006 12.5611 1.5626 14.5247 3.42971 15.861Z"
                        fill="#FFEE48"
                    />
                </g>
            </g>
            <defs>
                <filter
                    id="filter0_f_12464_573808"
                    x="-4.42988"
                    y="4.57659"
                    width="10.893"
                    height="11.987"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="0.682227" result="effect1_foregroundBlur_12464_573808" />
                </filter>
                <filter
                    id="filter1_f_12464_573808"
                    x="-3.09152"
                    y="-10.2372"
                    width="23.5395"
                    height="23.767"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="3.2982" result="effect1_foregroundBlur_12464_573808" />
                </filter>
                <filter
                    id="filter2_f_12464_573808"
                    x="-4.69353"
                    y="4.23677"
                    width="22.0374"
                    height="25.2173"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="2.8038" result="effect1_foregroundBlur_12464_573808" />
                </filter>
                <filter
                    id="filter3_f_12464_573808"
                    x="-4.69353"
                    y="4.23677"
                    width="22.0374"
                    height="25.2173"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="2.8038" result="effect1_foregroundBlur_12464_573808" />
                </filter>
                <filter
                    id="filter4_f_12464_573808"
                    x="-4.43474"
                    y="5.21571"
                    width="22.1146"
                    height="22.6068"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="2.8038" result="effect1_foregroundBlur_12464_573808" />
                </filter>
                <filter
                    id="filter5_f_12464_573808"
                    x="9.344"
                    y="-2.27551"
                    width="20.8354"
                    height="20.4581"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="2.66443" result="effect1_foregroundBlur_12464_573808" />
                </filter>
                <filter
                    id="filter6_f_12464_573808"
                    x="-9.63221"
                    y="-3.57959"
                    width="21.6716"
                    height="21.8449"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="2.41474" result="effect1_foregroundBlur_12464_573808" />
                </filter>
                <filter
                    id="filter7_f_12464_573808"
                    x="3.31795"
                    y="-0.726182"
                    width="21.8778"
                    height="21.5069"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="2.15646" result="effect1_foregroundBlur_12464_573808" />
                </filter>
                <filter
                    id="filter8_f_12464_573808"
                    x="4.83801"
                    y="-4.2002"
                    width="15.6082"
                    height="14.3704"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="1.92963" result="effect1_foregroundBlur_12464_573808" />
                </filter>
                <filter
                    id="filter9_f_12464_573808"
                    x="-3.23813"
                    y="-7.75229"
                    width="19.654"
                    height="19.2231"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="1.62981" result="effect1_foregroundBlur_12464_573808" />
                </filter>
                <filter
                    id="filter10_f_12464_573808"
                    x="-2.8605"
                    y="6.74284"
                    width="15.3948"
                    height="14.3042"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="2.01716" result="effect1_foregroundBlur_12464_573808" />
                </filter>
            </defs>
        </svg>
    );
};

export default GeminiIcon;
