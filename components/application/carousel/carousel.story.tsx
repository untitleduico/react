import type { FC } from "react";
import * as Carousels from "./carousel.demo";

export default {
    title: "Application/Carousels",
    decorators: [
        (Story: FC) => (
            <div className="flex min-h-screen items-center justify-center bg-primary p-8">
                <div>
                    <Story />
                </div>
            </div>
        ),
    ],
};

export const CarouselMd = () => <Carousels.CarouselMd />;
CarouselMd.storyName = "Carousel md";

export const CarouselLg = () => <Carousels.CarouselLg />;
CarouselLg.storyName = "Carousel lg";
