"use client";

import { ChevronLeft, ChevronRight } from "@untitledui/icons";
import { Carousel, useCarousel } from "@/components/application/carousel/carousel-base";
import { PaginationDot } from "@/components/application/pagination/pagination-dot";

export const CarouselIndicator = ({
    size = "md",
    isBrand,
    framed,
    className,
}: {
    size?: "md" | "lg";
    isBrand?: boolean;
    framed?: boolean;
    className?: string;
}) => {
    const { selectedIndex, scrollSnaps, api } = useCarousel();

    return (
        <PaginationDot
            size={size}
            framed={framed}
            isBrand={isBrand}
            page={selectedIndex + 1}
            total={scrollSnaps.length}
            className={className}
            onPageChange={(page) => {
                api?.scrollTo(page - 1);
            }}
        />
    );
};

export const CarouselMd = () => {
    return (
        <Carousel.Root className="relative aspect-[1.6] max-w-160">
            <Carousel.PrevTrigger className="absolute top-1/2 left-4 z-10 flex size-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-alpha-white/90 p-2 text-fg-secondary outline-focus-ring backdrop-blur-xs focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:bg-disabled_subtle disabled:text-fg-disabled">
                <ChevronLeft className="size-5" />
            </Carousel.PrevTrigger>
            <Carousel.NextTrigger className="absolute top-1/2 right-4 z-10 flex size-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-alpha-white/90 p-2 text-fg-secondary outline-focus-ring backdrop-blur-xs focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:bg-disabled_subtle disabled:text-fg-disabled">
                <ChevronRight className="size-5" />
            </Carousel.NextTrigger>

            <div className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2">
                <CarouselIndicator framed />
            </div>

            <Carousel.Content className="gap-2">
                <Carousel.Item className="overflow-hidden rounded-xl">
                    <img alt="Image by Unsplash" src="https://www.untitledui.com/application/plants.webp" className="size-full object-cover" />
                </Carousel.Item>
                <Carousel.Item className="overflow-hidden rounded-xl">
                    <img
                        alt="Image by Unsplash"
                        src="https://images.unsplash.com/photo-1484506097116-1bcba4fa7568?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="size-full object-cover"
                    />
                </Carousel.Item>
                <Carousel.Item className="overflow-hidden rounded-xl">
                    <img
                        alt="Image by Unsplash"
                        src="https://images.unsplash.com/photo-1471899236350-e3016bf1e69e?q=80&w=2971&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="size-full object-cover"
                    />
                </Carousel.Item>
            </Carousel.Content>
        </Carousel.Root>
    );
};

export const CarouselLg = () => {
    return (
        <Carousel.Root className="relative aspect-[1.6] max-w-160">
            <Carousel.PrevTrigger className="absolute top-1/2 left-5 z-10 flex size-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-alpha-white/90 p-2 text-fg-secondary outline-focus-ring backdrop-blur-xs focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:bg-disabled_subtle disabled:text-fg-disabled">
                <ChevronLeft className="size-6" />
            </Carousel.PrevTrigger>
            <Carousel.NextTrigger className="absolute top-1/2 right-5 z-10 flex size-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-alpha-white/90 p-2 text-fg-secondary outline-focus-ring backdrop-blur-xs focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:bg-disabled_subtle disabled:text-fg-disabled">
                <ChevronRight className="size-6" />
            </Carousel.NextTrigger>

            <div className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2">
                <CarouselIndicator framed size="lg" />
            </div>

            <Carousel.Content className="gap-2">
                <Carousel.Item className="overflow-hidden rounded-xl">
                    <img alt="Image by Unsplash" src="https://www.untitledui.com/application/plants.webp" className="size-full object-cover" />
                </Carousel.Item>
                <Carousel.Item className="overflow-hidden rounded-xl">
                    <img
                        alt="Image by Unsplash"
                        src="https://images.unsplash.com/photo-1484506097116-1bcba4fa7568?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="size-full object-cover"
                    />
                </Carousel.Item>
                <Carousel.Item className="overflow-hidden rounded-xl">
                    <img
                        alt="Image by Unsplash"
                        src="https://images.unsplash.com/photo-1471899236350-e3016bf1e69e?q=80&w=2971&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="size-full object-cover"
                    />
                </Carousel.Item>
            </Carousel.Content>
        </Carousel.Root>
    );
};
