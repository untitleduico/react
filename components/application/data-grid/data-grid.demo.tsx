"use client";

import { useEffect, useState } from "react";
import { ArrowDown, ArrowUp, Edit01, PauseCircle, PlayCircle, RefreshCw01, Trash01 } from "@untitledui/icons";
import { commodityColumns, commodityFields } from "@/components/application/data-grid/commodity-columns";
import type { CommodityRow } from "@/components/application/data-grid/commodity-data";
import { generateCommodityRows } from "@/components/application/data-grid/commodity-data";
import type { DataGridColumn } from "@/components/application/data-grid/data-grid";
import { DataGrid } from "@/components/application/data-grid/data-grid";
import { BadgeWithDot, BadgeWithIcon } from "@/components/base/badges/badges";
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
    { id: 10, lastName: "Tyrell", firstName: "Margaery", age: 22 },
];

const personColumns: DataGridColumn<(typeof people)[number]>[] = [
    { field: "id", headerName: "ID", width: 120 },
    { field: "firstName", headerName: "First name", width: 150, editable: true },
    { field: "lastName", headerName: "Last name", width: 150, editable: true },
    { field: "age", headerName: "Age", type: "number", width: 120, editable: true },
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

const teamMembers = [
    {
        id: 1,
        name: "Olivia Rhye",
        role: "Product designer",
        department: "Design",
        startDate: new Date(Date.UTC(2021, 2, 15, 12)),
        salary: 118000,
        isRemote: true,
    },
    {
        id: 2,
        name: "Phoenix Baker",
        role: "Product manager",
        department: "Product",
        startDate: new Date(Date.UTC(2020, 8, 1, 12)),
        salary: 132000,
        isRemote: false,
    },
    {
        id: 3,
        name: "Lana Steiner",
        role: "Frontend developer",
        department: "Engineering",
        startDate: new Date(Date.UTC(2022, 0, 10, 12)),
        salary: 124000,
        isRemote: true,
    },
    {
        id: 4,
        name: "Demi Wilkinson",
        role: "Backend developer",
        department: "Engineering",
        startDate: new Date(Date.UTC(2019, 4, 20, 12)),
        salary: 136000,
        isRemote: false,
    },
    {
        id: 5,
        name: "Candice Wu",
        role: "Fullstack developer",
        department: "Engineering",
        startDate: new Date(Date.UTC(2023, 6, 3, 12)),
        salary: 121000,
        isRemote: true,
    },
    {
        id: 6,
        name: "Natali Craig",
        role: "UX researcher",
        department: "Design",
        startDate: new Date(Date.UTC(2021, 10, 8, 12)),
        salary: 104000,
        isRemote: false,
    },
];

const salaryFormatter = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

const teamMemberColumns: DataGridColumn<(typeof teamMembers)[number]>[] = [
    { field: "name", headerName: "Name", width: 180, isRowHeader: true, editable: true },
    { field: "role", headerName: "Role", flex: 1, minWidth: 200, editable: true },
    {
        field: "department",
        headerName: "Department",
        type: "singleSelect",
        valueOptions: ["Design", "Engineering", "Marketing", "Product", "Sales"],
        width: 170,
        editable: true,
    },
    { field: "startDate", headerName: "Start date", type: "date", width: 160, editable: true },
    {
        field: "salary",
        headerName: "Salary",
        type: "number",
        width: 150,
        editable: true,
        valueFormatter: (value) => (typeof value === "number" ? salaryFormatter.format(value) : ""),
    },
    { field: "isRemote", headerName: "Remote", type: "boolean", width: 140, editable: true },
];

export const DataGridEditing = () => (
    <DataGrid
        aria-label="Team members"
        rows={teamMembers}
        columns={teamMemberColumns}
        pagination={false}
        onRowUpdate={async (newRow) => {
            // Stands in for a request to your server, which rejects an empty name. Throwing reverts the edit.
            await new Promise((resolve) => setTimeout(resolve, 300));
            if (newRow.name.trim() === "") throw new Error("A name is required.");
            return newRow;
        }}
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
            expandedGroups: ["Adzuki bean"],
            aggregation: { quantity: "sum" },
            columnVisibility: Object.fromEntries(commodityFields.map((field) => [field, visibleFields.includes(field)])),
        }}
        className="h-160"
    />
);

const actionsColumn: DataGridColumn<CommodityRow> = {
    field: "actions",
    headerName: "Actions",
    type: "actions",
    width: 120,
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

// Prices as the futures are quoted, such as cents per bushel for corn.
const livePrices = [
    { id: "cocoa", commodity: "Cocoa", open: 8350, price: 8350, volume: 12480 },
    { id: "coffee", commodity: "Coffee C", open: 328.5, price: 328.5, volume: 18320 },
    { id: "corn", commodity: "Corn", open: 446.25, price: 446.25, volume: 96150 },
    { id: "cotton", commodity: "Cotton No.2", open: 68.4, price: 68.4, volume: 21740 },
    { id: "oats", commodity: "Oats", open: 361, price: 361, volume: 2310 },
    { id: "rice", commodity: "Rough rice", open: 14.2, price: 14.2, volume: 1640 },
    { id: "soybeans", commodity: "Soybeans", open: 1042.25, price: 1042.25, volume: 64870 },
    { id: "sugar", commodity: "Sugar No.11", open: 19.12, price: 19.12, volume: 48230 },
    { id: "wheat", commodity: "Wheat", open: 551.5, price: 551.5, volume: 53390 },
];

const priceFormatter = new Intl.NumberFormat("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const changeFormatter = new Intl.NumberFormat("en-US", { style: "percent", minimumFractionDigits: 2, signDisplay: "exceptZero" });

const livePriceColumns: DataGridColumn<(typeof livePrices)[number]>[] = [
    { field: "commodity", headerName: "Commodity", flex: 1, minWidth: 200, isRowHeader: true },
    {
        field: "price",
        headerName: "Price",
        type: "number",
        width: 160,
        valueFormatter: (value) => (typeof value === "number" ? priceFormatter.format(value) : ""),
    },
    {
        field: "change",
        headerName: "Change",
        type: "number",
        width: 150,
        // The change since the open, computed from the row.
        valueGetter: (row) => (row.price - row.open) / row.open,
        valueFormatter: (value) => (typeof value === "number" ? changeFormatter.format(value) : ""),
        renderCell: ({ value, formattedValue }) =>
            typeof value === "number" && value !== 0 ? (
                <BadgeWithIcon size="sm" type="pill-color" color={value > 0 ? "success" : "error"} iconLeading={value > 0 ? ArrowUp : ArrowDown}>
                    {formattedValue}
                </BadgeWithIcon>
            ) : (
                formattedValue
            ),
    },
    { field: "volume", headerName: "Volume", type: "number", width: 150 },
];

export const DataGridLiveData = () => {
    const [rows, setRows] = useState(livePrices);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return;

        // Simulate a price feed: every second, a few prices move. The other rows keep their objects, so only the rows that
        // changed render again.
        const interval = setInterval(() => {
            const changed = new Set(Array.from({ length: 3 }, () => Math.floor(Math.random() * livePrices.length)));
            setRows((current) =>
                current.map((row, index) => {
                    if (!changed.has(index)) return row;
                    const price = Math.max(0.01, Math.round(row.price * (1 + (Math.random() - 0.5) * 0.01) * 100) / 100);
                    return { ...row, price, volume: row.volume + Math.floor(Math.random() * 200) };
                }),
            );
        }, 1000);

        return () => clearInterval(interval);
    }, [isPaused]);

    return (
        <div className="flex flex-col items-start gap-4">
            <div className="flex items-center gap-3">
                <Button color="secondary" size="sm" iconLeading={isPaused ? PlayCircle : PauseCircle} onClick={() => setIsPaused(!isPaused)}>
                    {isPaused ? "Continue" : "Pause"}
                </Button>
                <BadgeWithDot size="sm" type="modern" color={isPaused ? "gray" : "success"}>
                    {isPaused ? "Paused" : "Live"}
                </BadgeWithDot>
            </div>
            <DataGrid
                aria-label="Live commodity prices"
                rows={rows}
                columns={livePriceColumns}
                pagination={false}
                initialState={{ density: "compact" }}
                className="w-full"
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
        className="h-160"
    />
);
