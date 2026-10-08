"use client";

import { AlertTriangle, Check, InfoCircle, RefreshCw01 } from "@untitledui/icons";
import type { CommodityRow } from "@/components/application/data-grid/commodity-data";
import {
    contractTypeOptions,
    countryOptions,
    currencyOptions,
    incotermOptions,
    rateTypeOptions,
    statusOptions,
    taxCodeOptions,
} from "@/components/application/data-grid/commodity-data";
import type { DataGridColumn } from "@/components/application/data-grid/data-grid";
import { Badge, BadgeWithIcon } from "@/components/base/badges/badges";
import { Tooltip, TooltipTrigger } from "@/components/base/tooltip/tooltip";
import { cx } from "@/utils/cx";

// The demo formats numbers in a fixed locale, so the server and the client render the same text.
const currencyFormatter = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });
const numberFormatter = new Intl.NumberFormat("en-US", { maximumFractionDigits: 2 });

const statusBadges = {
    Open: { color: "blue", icon: InfoCircle },
    "Partially Filled": { color: "warning", icon: RefreshCw01 },
    Filled: { color: "success", icon: Check },
    Rejected: { color: "error", icon: AlertTriangle },
} as const;

const toNumber = (value: unknown) => (typeof value === "number" ? value : null);

const tagList = (values: unknown) => (Array.isArray(values) ? values.map(String) : []);

export const commodityColumns: DataGridColumn<CommodityRow>[] = [
    { field: "desk", headerName: "Desk", width: 110, groupable: true },
    { field: "commodity", headerName: "Commodity", width: 200, isRowHeader: true, editable: true, groupable: true },
    {
        field: "tags",
        headerName: "Tags",
        width: 220,
        sortable: false,
        renderCell: ({ value }) => (
            <div className="flex min-w-0 gap-1">
                {tagList(value)
                    .slice(0, 2)
                    .map((tag) => (
                        <Badge key={tag} size="sm" color="gray" type="modern">
                            {tag}
                        </Badge>
                    ))}
                {tagList(value).length > 2 && (
                    <Badge size="sm" color="gray" type="modern">
                        +{tagList(value).length - 2}
                    </Badge>
                )}
            </div>
        ),
    },
    { field: "traderName", headerName: "Trader name", width: 150, editable: true, groupable: true },
    {
        field: "traderEmail",
        headerName: "Trader email",
        width: 220,
        editable: true,
        renderCell: ({ value }) => (
            <a
                href={`mailto:${String(value)}`}
                className="truncate rounded-xs text-brand-secondary underline-offset-2 outline-focus-ring hover:underline focus-visible:outline-2"
            >
                {String(value)}
            </a>
        ),
    },
    { field: "quantity", headerName: "Quantity", type: "number", width: 120, editable: true, aggregable: true },
    {
        field: "filledQuantity",
        headerName: "Filled quantity",
        type: "number",
        width: 150,
        aggregable: true,
        valueFormatter: (value) => (typeof value === "number" ? `${numberFormatter.format(value * 100)} %` : ""),
        renderCell: ({ value, formattedValue }) =>
            typeof value === "number" ? (
                <div className="relative flex h-6 w-full items-center justify-center overflow-hidden rounded-md bg-primary ring-1 ring-secondary ring-inset">
                    <div
                        className={cx(
                            "absolute inset-y-0 left-0",
                            value < 0.3 ? "bg-error-secondary" : value <= 0.7 ? "bg-warning-secondary" : "bg-success-secondary",
                        )}
                        style={{ width: `${value * 100}%` }}
                    />
                    <span className="relative text-xs font-medium text-secondary tabular-nums">{formattedValue}</span>
                </div>
            ) : null,
    },
    { field: "isFilled", headerName: "Is filled", type: "boolean", width: 110, editable: true },
    {
        field: "status",
        headerName: "Status",
        type: "singleSelect",
        width: 170,
        valueOptions: statusOptions,
        editable: true,
        groupable: true,
        renderCell: ({ value }) => {
            const badge = statusBadges[value as keyof typeof statusBadges];
            return badge ? (
                <BadgeWithIcon size="sm" type="pill-color" color={badge.color} iconLeading={badge.icon}>
                    {String(value)}
                </BadgeWithIcon>
            ) : null;
        },
    },
    { field: "unitPrice", headerName: "Unit price", type: "number", width: 120, editable: true, aggregable: true },
    {
        field: "unitPriceCurrency",
        headerName: "Unit price currency",
        type: "singleSelect",
        width: 170,
        valueOptions: currencyOptions,
        editable: true,
        groupable: true,
    },
    {
        field: "subTotal",
        headerName: "Sub total",
        type: "number",
        width: 140,
        aggregable: true,
        valueGetter: (row) => row.quantity * row.unitPrice,
        valueFormatter: (value) => (typeof value === "number" ? numberFormatter.format(value) : ""),
    },
    { field: "feeRate", headerName: "Fee rate", type: "number", width: 110, editable: true, aggregable: true },
    {
        field: "feeAmount",
        headerName: "Fee amount",
        type: "number",
        width: 140,
        aggregable: true,
        valueGetter: (row) => row.feeRate * row.quantity * row.unitPrice,
        valueFormatter: (value) => (typeof value === "number" ? numberFormatter.format(value) : ""),
    },
    {
        field: "incoTerm",
        headerName: "Incoterm",
        type: "singleSelect",
        width: 130,
        valueOptions: incotermOptions,
        editable: true,
        groupable: true,
        renderCell: ({ value }) => {
            const text = String(value ?? "");
            const code = text.slice(0, text.indexOf("(")).trim();
            const name = text.slice(text.indexOf("(") + 1, text.indexOf(")"));
            return (
                <span className="flex min-w-0 items-center gap-1.5">
                    <span className="truncate">{code}</span>
                    <Tooltip title={name}>
                        <TooltipTrigger className="flex shrink-0 cursor-pointer rounded-xs text-fg-quaternary outline-focus-ring hover:text-fg-quaternary_hover focus-visible:outline-2">
                            <InfoCircle className="size-4" />
                        </TooltipTrigger>
                    </Tooltip>
                </span>
            );
        },
    },
    {
        field: "totalPrice",
        headerName: "Total in USD",
        type: "number",
        width: 170,
        aggregable: true,
        valueGetter: (row) => row.feeRate + row.quantity * row.unitPrice,
        valueFormatter: (value) => (typeof value === "number" ? currencyFormatter.format(value) : ""),
        renderCell: ({ value, formattedValue }) => (
            <span
                className={cx(
                    "rounded-md px-1.5 py-0.5 font-medium tabular-nums",
                    (toNumber(value) ?? 0) > 1_000_000 ? "bg-success-primary text-success-primary" : "bg-error-primary text-error-primary",
                )}
            >
                {formattedValue}
            </span>
        ),
    },
    {
        field: "pnl",
        headerName: "PnL",
        type: "number",
        width: 160,
        aggregable: true,
        valueFormatter: (value) => {
            const number = toNumber(value);
            if (number === null) return "";
            return number < 0 ? `(${numberFormatter.format(Math.abs(number))})` : numberFormatter.format(number);
        },
        renderCell: ({ value, formattedValue }) => (
            <span className={cx("tabular-nums", (toNumber(value) ?? 0) < 0 ? "text-error-primary" : "text-success-primary")}>{formattedValue}</span>
        ),
    },
    { field: "maturityDate", headerName: "Maturity date", type: "date", width: 150, editable: true },
    { field: "tradeDate", headerName: "Trade date", type: "date", width: 140, editable: true },
    { field: "brokerId", headerName: "Broker ID", width: 300 },
    { field: "brokerName", headerName: "Broker name", width: 180, editable: true, groupable: true },
    { field: "counterPartyName", headerName: "Counterparty", width: 180, editable: true, groupable: true },
    {
        field: "counterPartyCountry",
        headerName: "Counterparty country",
        type: "singleSelect",
        width: 200,
        valueOptions: countryOptions,
        editable: true,
        groupable: true,
        renderCell: ({ value, formattedValue }) => (
            <span className="flex min-w-0 items-center gap-2">
                <img src={`https://images.untitledui.xyz/flags/${String(value)}.svg`} alt="" className="size-4 shrink-0" />
                <span className="truncate">{formattedValue}</span>
            </span>
        ),
    },
    {
        field: "counterPartyCurrency",
        headerName: "Counterparty currency",
        type: "singleSelect",
        width: 190,
        valueOptions: currencyOptions,
        editable: true,
        groupable: true,
    },
    { field: "counterPartyAddress", headerName: "Counterparty address", width: 220, editable: true },
    { field: "counterPartyCity", headerName: "Counterparty city", width: 170, editable: true, groupable: true },
    { field: "taxCode", headerName: "Tax code", type: "singleSelect", width: 120, valueOptions: taxCodeOptions, editable: true, groupable: true },
    {
        field: "contractType",
        headerName: "Contract type",
        type: "singleSelect",
        width: 140,
        valueOptions: contractTypeOptions,
        editable: true,
        groupable: true,
    },
    { field: "rateType", headerName: "Rate type", type: "singleSelect", width: 120, valueOptions: rateTypeOptions, editable: true, groupable: true },
    { field: "lastUpdated", headerName: "Updated on", type: "dateTime", width: 200, editable: true },
    { field: "dateCreated", headerName: "Created on", type: "date", width: 150, editable: true },
    {
        field: "certifications",
        headerName: "Certifications",
        width: 220,
        sortable: false,
        renderCell: ({ value }) => (
            <div className="flex min-w-0 gap-1">
                {tagList(value).map((certification) => (
                    <Badge key={certification} size="sm" color="success" type="pill-color">
                        {certification}
                    </Badge>
                ))}
            </div>
        ),
    },
];

/** Every field, for building column visibility models. */
export const commodityFields = commodityColumns.map((column) => column.field);
