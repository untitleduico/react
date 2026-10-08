"use client";

import { useEffect, useState } from "react";
import { Edit01, RefreshCw01, Trash01 } from "@untitledui/icons";
import { commodityColumns, commodityFields } from "@/components/application/data-grid/commodity-columns";
import type { CommodityRow } from "@/components/application/data-grid/commodity-data";
import { generateCommodityRows } from "@/components/application/data-grid/commodity-data";
import type { DataGridColumn } from "@/components/application/data-grid/data-grid";
import { DataGrid } from "@/components/application/data-grid/data-grid";
import { Button } from "@/components/base/buttons/button";
import { ButtonUtility } from "@/components/base/buttons/button-utility";

const commodityRows = generateCommodityRows(1000);

export const DataGridFullFeatured = () => (
    <DataGrid
        aria-label="Commodity trades"
        rows={commodityRows}
        columns={commodityColumns}
        showToolbar
        checkboxSelection
        disableRowSelectionOnClick
        initialState={{ density: "compact", columnVisibility: { brokerId: false } }}
        exportFileName="commodity-trades"
        className="h-130"
    />
);

const people = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 14 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 31 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 31 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 11 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

const personColumns: DataGridColumn<(typeof people)[number]>[] = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "firstName", headerName: "First name", width: 150, editable: true },
    { field: "lastName", headerName: "Last name", width: 150, editable: true },
    { field: "age", headerName: "Age", type: "number", width: 110, editable: true },
    {
        field: "fullName",
        headerName: "Full name",
        description: "This column has a value getter and is not sortable.",
        isRowHeader: true,
        sortable: false,
        width: 160,
        valueGetter: (row) => `${row.firstName || ""} ${row.lastName || ""}`,
    },
];

export const DataGridBasic = () => (
    <DataGrid
        aria-label="People"
        rows={people}
        columns={personColumns}
        checkboxSelection
        disableRowSelectionOnClick
        pageSizeOptions={[5]}
        initialState={{ pageSize: 5 }}
    />
);

const groupedRows = generateCommodityRows(100, 2);

// The columns the smaller examples show.
const visibleFields = [
    "commodity",
    "quantity",
    "filledQuantity",
    "status",
    "isFilled",
    "unitPrice",
    "unitPriceCurrency",
    "subTotal",
    "feeRate",
    "feeAmount",
    "incoTerm",
];

export const DataGridRowGrouping = () => (
    <DataGrid
        aria-label="Commodity trades grouped by commodity"
        rows={groupedRows}
        columns={commodityColumns}
        showToolbar
        disableRowSelectionOnClick
        initialState={{
            rowGrouping: "commodity",
            aggregation: { quantity: "sum" },
            columnVisibility: Object.fromEntries(commodityFields.map((field) => [field, visibleFields.includes(field)])),
        }}
        className="h-130"
    />
);

const actionsColumn: DataGridColumn<CommodityRow> = {
    field: "actions",
    headerName: "Actions",
    type: "actions",
    width: 96,
    hideable: false,
    renderCell: ({ row }) => (
        <div className="flex gap-0.5">
            <ButtonUtility size="xs" color="tertiary" tooltip={`Edit ${row.commodity}`} icon={Edit01} />
            <ButtonUtility size="xs" color="tertiary" tooltip={`Delete ${row.commodity}`} icon={Trash01} />
        </div>
    ),
};

const pinningRows = generateCommodityRows(100);

export const DataGridColumnPinning = () => (
    <DataGrid
        aria-label="Commodity trades with pinned columns"
        rows={pinningRows}
        columns={[...commodityColumns, actionsColumn]}
        checkboxSelection
        disableRowSelectionOnClick
        initialState={{ pinnedColumns: { left: ["commodity"], right: ["actions"] }, columnVisibility: { brokerId: false } }}
        className="h-130"
    />
);

const loadedRows = generateCommodityRows(50);

export const DataGridLoading = () => {
    const [isLoading, setIsLoading] = useState(true);

    // Simulate a request: the rows arrive after a short delay.
    useEffect(() => {
        if (!isLoading) return;
        const timeout = setTimeout(() => setIsLoading(false), 1500);
        return () => clearTimeout(timeout);
    }, [isLoading]);

    return (
        <div className="flex flex-col items-start gap-4">
            <Button size="sm" color="secondary" iconLeading={RefreshCw01} isDisabled={isLoading} onClick={() => setIsLoading(true)}>
                Reload
            </Button>
            <DataGrid
                aria-label="Commodity trades"
                rows={isLoading ? [] : loadedRows}
                columns={commodityColumns}
                loading={isLoading}
                checkboxSelection
                disableRowSelectionOnClick
                initialState={{ columnVisibility: Object.fromEntries(commodityFields.map((field) => [field, visibleFields.includes(field)])) }}
                className="h-130 w-full"
            />
        </div>
    );
};

export const DataGridFullFeaturedVirtualized = () => (
    <DataGrid
        aria-label="Commodity trades"
        rows={commodityRows}
        columns={commodityColumns}
        showToolbar
        checkboxSelection
        disableRowSelectionOnClick
        virtualized
        initialState={{ density: "compact", columnVisibility: { brokerId: false } }}
        exportFileName="commodity-trades"
        className="h-130"
    />
);

const manyRows = generateCommodityRows(10_000, 3);

export const DataGridVirtualized = () => (
    <DataGrid
        aria-label="10,000 commodity trades"
        rows={manyRows}
        columns={[...commodityColumns, actionsColumn]}
        showToolbar
        checkboxSelection
        disableRowSelectionOnClick
        virtualized
        pagination={false}
        initialState={{
            density: "compact",
            pinnedColumns: { left: ["commodity"], right: ["actions"] },
            columnVisibility: { brokerId: false },
            aggregation: { quantity: "sum" },
        }}
        exportFileName="commodity-trades"
        className="h-130"
    />
);
