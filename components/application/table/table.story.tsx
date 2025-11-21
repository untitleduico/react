"use client";

import { withOverlayAware } from "@/components/internal/decorators";
import * as Tables from "./table.demo";

export default {
    title: "Application/Tables",
    decorators: [
        withOverlayAware((Story) => (
            <div className="min-h-screen bg-primary p-5">
                <Story />
            </div>
        )),
    ],
};

export const Table01DividerLine = () => <Tables.Table01DividerLine />;
Table01DividerLine.storyName = "Table 01 divider line";
Table01DividerLine.parameters = {
    design: {
        desktop: "1227-110480",
        mobile: "1227-110588",
    },
};

export const Table01AlternatingFills = () => <Tables.Table01AlternatingFills />;
Table01AlternatingFills.storyName = "Table 01 alternating fills";
Table01AlternatingFills.parameters = {
    design: {
        desktop: "1229-12388",
        mobile: "1229-15727",
    },
};

export const Table01DividerLineSm = () => <Tables.Table01DividerLineSm />;
Table01DividerLineSm.storyName = "Table 01 divider line sm";
Table01DividerLineSm.parameters = {
    design: {
        desktop: "1227-110480",
    },
};

export const Table02DividerLine = () => <Tables.Table02DividerLine />;
Table02DividerLine.storyName = "Table 02 divider line";
Table02DividerLine.parameters = {
    design: {
        desktop: "1227-115509",
        mobile: "1227-115298",
    },
};

export const Table02AlternatingFills = () => <Tables.Table02AlternatingFills />;
Table02AlternatingFills.storyName = "Table 02 alternating fills";
Table02AlternatingFills.parameters = {
    design: {
        desktop: "1229-11893",
        mobile: "1229-17412",
    },
};

export const Table03DividerLine = () => <Tables.Table03DividerLine />;
Table03DividerLine.storyName = "Table 03 divider line";
Table03DividerLine.parameters = {
    design: {
        desktop: "1227-121348",
        mobile: "1229-543",
    },
};

export const Table03AlternatingFills = () => <Tables.Table03AlternatingFills />;
Table03AlternatingFills.storyName = "Table 03 alternating fills";
Table03AlternatingFills.parameters = {
    design: {
        desktop: "1229-12040",
        mobile: "1229-18422",
    },
};

export const Table04DividerLine = () => <Tables.Table04DividerLine />;
Table04DividerLine.storyName = "Table 04 divider line";
Table04DividerLine.parameters = {
    design: {
        desktop: "1229-2364",
        mobile: "1229-7899",
    },
};

export const Table04AlternatingFills = () => <Tables.Table04AlternatingFills />;
Table04AlternatingFills.storyName = "Table 04 alternating fills";
Table04AlternatingFills.parameters = {
    design: {
        desktop: "1229-12241",
        mobile: "1229-19933",
    },
};

export const TableNoVendorsFound = () => <Tables.TableNoVendorsFound />;
TableNoVendorsFound.storyName = "Table no vendors found";
TableNoVendorsFound.parameters = {
    design: {
        desktop: "2218-469191",
    },
};

export const TableStartByUploadingFile = () => <Tables.TableStartByUploadingFile />;
TableStartByUploadingFile.storyName = "Table start by uploading file";
TableStartByUploadingFile.parameters = {
    design: {
        desktop: "2219-470358",
    },
};

export const TableSomethingWentWrong = () => <Tables.TableSomethingWentWrong />;
TableSomethingWentWrong.storyName = "Table something went wrong";
TableSomethingWentWrong.parameters = {
    design: {
        desktop: "2219-472490",
    },
};
