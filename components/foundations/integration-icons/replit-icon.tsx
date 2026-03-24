"use client";

import type { SVGProps } from "react";

const ReplitIcon = ({ grayscale, ...props }: SVGProps<SVGSVGElement> & { grayscale?: boolean }) => {
    const fillClass = grayscale ? "fill-fg-quaternary" : "fill-[#FD5402]";

    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" {...props}>
            <path
                d="M10.0346 7.17324H4.4375C3.88634 7.17324 3.44922 6.73427 3.44922 6.20191V2.97035C3.44922 2.42865 3.89585 1.99902 4.4375 1.99902H9.04631C9.59746 1.99902 10.0346 2.43799 10.0346 2.97035V7.17324Z"
                className={fillClass}
            />
            <path
                d="M16.0376 12.8093H10.0407V7.16475H16.0376C16.618 7.16475 17.0965 7.64276 17.0965 8.22248V11.7517C17.0965 12.3415 16.618 12.8093 16.0376 12.8093Z"
                className={fillClass}
            />
            <path
                d="M9.04631 17.999H4.4375C3.89585 17.999 3.44922 17.5609 3.44922 17.0294V13.7944C3.44922 13.263 3.89585 12.8248 4.4375 12.8248H10.0346V17.0294C10.0346 17.5609 9.58796 17.999 9.04631 17.999Z"
                className={fillClass}
            />
        </svg>
    );
};

export default ReplitIcon;
