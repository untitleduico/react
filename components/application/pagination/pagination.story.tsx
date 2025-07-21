"use client";

import type { FC } from "react";
import * as Demos from "./pagination.demo";

export default {
    title: "Application/Pagination",
    decorators: [
        (Story: FC) => (
            <div className="min-h-screen bg-secondary p-8">
                <Story />
            </div>
        ),
    ],
};

export const PaginationPageDefault = () => <Demos.PaginationPageDefault />;
PaginationPageDefault.storyName = "Pagination page default";

export const PaginationPageMinimalCenter = () => <Demos.PaginationPageMinimalCenter />;
PaginationPageMinimalCenter.storyName = "Pagination page minimal center";

export const PaginationCardDefault = () => <Demos.PaginationCardDefault />;
PaginationCardDefault.storyName = "Pagination card default";

export const PaginationCardMinimalRightAligned = () => <Demos.PaginationCardMinimalRightAligned />;
PaginationCardMinimalRightAligned.storyName = "Pagination card minimal right aligned";

export const PaginationCardMinimalCenterAligned = () => <Demos.PaginationCardMinimalCenterAligned />;
PaginationCardMinimalCenterAligned.storyName = "Pagination card minimal center aligned";

export const PaginationCardMinimalLeftAligned = () => <Demos.PaginationCardMinimalLeftAligned />;
PaginationCardMinimalLeftAligned.storyName = "Pagination card minimal left aligned";

export const PaginationButtonGroupRightAligned = () => <Demos.PaginationButtonGroupRightAligned />;
PaginationButtonGroupRightAligned.storyName = "Pagination button group right aligned";

export const PaginationButtonGroupCenterAligned = () => <Demos.PaginationButtonGroupCenterAligned />;
PaginationButtonGroupCenterAligned.storyName = "Pagination button group center aligned";

export const PaginationButtonGroupLeftAligned = () => <Demos.PaginationButtonGroupLeftAligned />;
PaginationButtonGroupLeftAligned.storyName = "Pagination button group left aligned";

export const PaginationDotMd = () => <Demos.PaginationDotMd />;
PaginationDotMd.storyName = "Pagination dot md";

export const PaginationDotLg = () => <Demos.PaginationDotLg />;
PaginationDotLg.storyName = "Pagination dot lg";

export const PaginationLineMd = () => <Demos.PaginationLineMd />;
PaginationLineMd.storyName = "Pagination line md";

export const PaginationLineLg = () => <Demos.PaginationLineLg />;
PaginationLineLg.storyName = "Pagination line lg";
