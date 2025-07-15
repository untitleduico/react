"use client";

import { withOverlayAware } from "@/components/internal/decorators";
import * as FeatureCard from "./featured-cards.demo";

export default {
    title: "Application/Application navigation/Base components",
    decorators: [
        withOverlayAware((Story: any) => (
            <div className="min-h-screen w-full bg-primary p-8">
                <div className="w-68">
                    <Story />
                </div>
            </div>
        )),
    ],
};

export const FeaturedCardProgressBar = () => (
    <FeatureCard.FeaturedCardProgressBar
        title="Used space"
        description="Your team has used 80% of your available space. Need more?"
        confirmLabel="Upgrade plan"
        onConfirm={() => {}}
        onDismiss={() => {}}
        progress={85}
    />
);
FeaturedCardProgressBar.parameters = {
    design: {
        desktop: "1157-99074",
    },
};

export const FeaturedCardProgressCircle = () => (
    <FeatureCard.FeaturedCardProgressCircle
        title="Used space"
        description="Your team has used 80% of your available space. Need more?"
        confirmLabel="Upgrade plan"
        onConfirm={() => {}}
        onDismiss={() => {}}
        progress={80}
    />
);
FeaturedCardProgressCircle.parameters = {
    design: {
        desktop: "1157-99042",
    },
};
