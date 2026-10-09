"use client";

import { withOverlayAware } from "@/components/internal/decorators";
import * as DataGrids from "./data-grid.demo";

export default {
    title: "Application/Data grid",
    decorators: [
        withOverlayAware((Story) => (
            <div className="min-h-screen bg-primary p-5">
                <Story />
            </div>
        )),
    ],
};

export const DataGridFullFeatured = () => <DataGrids.DataGridFullFeatured />;
DataGridFullFeatured.storyName = "Data grid full featured";

export const DataGridBasic = () => <DataGrids.DataGridBasic />;
DataGridBasic.storyName = "Data grid basic";

export const DataGridEditing = () => <DataGrids.DataGridEditing />;
DataGridEditing.storyName = "Data grid editing";

export const DataGridRowGrouping = () => <DataGrids.DataGridRowGrouping />;
DataGridRowGrouping.storyName = "Data grid row grouping";

export const DataGridColumnPinning = () => <DataGrids.DataGridColumnPinning />;
DataGridColumnPinning.storyName = "Data grid column pinning";

export const DataGridLoading = () => <DataGrids.DataGridLoading />;
DataGridLoading.storyName = "Data grid loading";

export const DataGridLiveData = () => <DataGrids.DataGridLiveData />;
DataGridLiveData.storyName = "Data grid live data";

export const DataGridFullFeaturedVirtualized = () => <DataGrids.DataGridFullFeaturedVirtualized />;
DataGridFullFeaturedVirtualized.storyName = "Data grid full featured (virtualized)";

export const DataGridVirtualized = () => <DataGrids.DataGridVirtualized />;
DataGridVirtualized.storyName = "Data grid 10,000 rows (virtualized)";
