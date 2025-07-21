"use client";

import type { HTMLAttributes } from "react";
import { useEffect, useRef, useState } from "react";
import QRCodeStyling, { type Options as QRCodeStylingOptions } from "qr-code-styling";
import { cx } from "@/utils/cx";

const QRCodeFrameHandle = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
    <div {...props} className={cx("size-3 rounded-tl border-t-2 border-l-2 border-brand_alt", className)} />
);

export const GradientScan = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
    <div
        {...props}
        className={cx("absolute bottom-0 h-1/2 w-full border-t border-brand bg-brand-solid/10", className)}
        style={{
            maskImage: "radial-gradient(52.19% 100% at 50% 0%, #000 0%, rgba(0,0,0,0) 95.31%)",
            WebkitMaskImage: "radial-gradient(52.19% 100% at 50% 0%, #000 0%, rgba(0,0,0,0) 95.31%)",
            ...props.style,
        }}
    />
);

const styles = {
    md: { root: "p-2", qr: { width: 96, height: 96 } },
    lg: { root: "p-3", qr: { width: 128, height: 128 } },
};

interface QRCodeProps {
    /**
     * The value to encode in the QR code.
     */
    value: string;
    /**
     * Additional options to customize the QR code.
     */
    options?: QRCodeStylingOptions;
    /**
     * The size of the QR code.
     *
     * @default "md"
     */
    size?: "md" | "lg";
    /**
     * The class name to apply to the QR code.
     */
    className?: string;
}

export const QRCode = ({ size = "md", value, options, className }: QRCodeProps) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const [qrCode, setQrCode] = useState<QRCodeStyling | null>(null);

    useEffect(() => {
        if (!ref.current) return;

        const qrCode = new QRCodeStyling({
            width: styles[size].qr.width,
            height: styles[size].qr.height,
            data: value,
            type: "svg",
            ...options,
        });

        setQrCode(qrCode);
        qrCode.append(ref.current);
    }, [options, size, value]);

    useEffect(() => {
        if (!qrCode) return;

        qrCode.update(options);
    }, [qrCode, value, options]);

    return (
        <div className={cx("relative flex items-center justify-center", styles[size].root, className)}>
            <div ref={ref} />

            <QRCodeFrameHandle className="absolute top-0 left-0" />
            <QRCodeFrameHandle className="absolute top-0 right-0 rotate-90" />
            <QRCodeFrameHandle className="absolute right-0 bottom-0 rotate-180" />
            <QRCodeFrameHandle className="absolute bottom-0 left-0 -rotate-90" />
        </div>
    );
};
