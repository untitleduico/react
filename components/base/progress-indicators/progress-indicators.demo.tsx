"use client";

import { ProgressBarCircle, ProgressBarHalfCircle } from "@/components/base/progress-indicators/progress-circles";
import { ProgressBar } from "@/components/base/progress-indicators/progress-indicators";

export const ProgressBarDefault = () => <ProgressBar min={0} max={100} value={40} />;

export const ProgressBarTextRight = () => <ProgressBar labelPosition="right" min={0} max={100} value={40} />;

export const ProgressBarTextBottom = () => <ProgressBar labelPosition="bottom" min={0} max={100} value={40} />;

export const ProgressBarTextTopFloating = () => <ProgressBar labelPosition="top-floating" min={0} max={100} value={40} />;

export const ProgressBarTextBottomFloating = () => <ProgressBar labelPosition="bottom-floating" min={0} max={100} value={40} />;

export const CircleProgressBar = () => (
    <div className="flex flex-col items-start gap-10 md:flex-row">
        <ProgressBarCircle size="xxs" min={0} max={100} value={40} />
        <ProgressBarCircle size="xs" min={0} max={100} value={40} />
        <ProgressBarCircle size="sm" min={0} max={100} value={40} />
        {/* <ProgressBarCircle size="md" min={0} max={100} value={40} /> */}
        {/* <ProgressBarCircle size="lg" min={0} max={100} value={40} /> */}
    </div>
);

export const CircleProgressBarLabel = () => (
    <div className="flex flex-col items-start gap-10 md:flex-row">
        <ProgressBarCircle size="xxs" label="Users" min={0} max={100} value={40} />
        <ProgressBarCircle size="xs" label="Active users" min={0} max={100} value={40} />
        <ProgressBarCircle size="sm" label="Active users" min={0} max={100} value={40} />
        {/* <ProgressBarCircle size="md" label="Active users" min={0} max={100} value={40} /> */}
        {/* <ProgressBarCircle size="lg" label="Active users" min={0} max={100} value={40} /> */}
    </div>
);

export const HalfCircleProgressBar = () => (
    <div className="flex flex-col items-start gap-10 md:flex-row">
        <ProgressBarHalfCircle size="xxs" min={0} max={100} value={40} />
        <ProgressBarHalfCircle size="xs" min={0} max={100} value={40} />
        <ProgressBarHalfCircle size="sm" min={0} max={100} value={40} />
        {/* <ProgressBarHalfCircle size="md" min={0} max={100} value={40} /> */}
        {/* <ProgressBarHalfCircle size="lg" min={0} max={100} value={40} /> */}
    </div>
);

export const HalfCircleProgressBarLabel = () => (
    <div className="flex flex-col items-start gap-10 md:flex-row">
        <ProgressBarHalfCircle size="xxs" label="Users" min={0} max={100} value={40} />
        <ProgressBarHalfCircle size="xs" label="Active users" min={0} max={100} value={40} />
        <ProgressBarHalfCircle size="sm" label="Active users" min={0} max={100} value={40} />
        {/* <ProgressBarHalfCircle size="md" label="Active users" min={0} max={100} value={40} /> */}
        {/* <ProgressBarHalfCircle size="lg" label="Active users" min={0} max={100} value={40} /> */}
    </div>
);
