import type { ReactNode } from "react";
import type { Key } from "react-aria-components";

/** Types */

export type DataGridColumnType = "string" | "number" | "date" | "dateTime" | "boolean" | "singleSelect" | "actions";

export type DataGridValueOption = string | { value: string; label: string };

/** The row density, which uses the sizes of `Table`: compact is its `sm` size and standard its `md` size. */
export type DataGridDensity = "compact" | "standard";

export type DataGridAggregationFunction = "sum" | "avg" | "min" | "max" | "size";

export type DataGridLogicOperator = "and" | "or";

export type DataGridRowType = "row" | "group" | "aggregation";

export interface DataGridRenderCellParams<T> {
    /** The row the cell belongs to. For group and aggregation rows, the first row of the group. */
    row: T;
    /** The id of the row. */
    rowId: Key;
    /** The field of the column. */
    field: string;
    /** The value of the cell, after `valueGetter`. For group and aggregation rows, the aggregated value. */
    value: unknown;
    /** The value of the cell, after `valueFormatter`. */
    formattedValue: string;
    /** Whether the cell belongs to a data row, a group row (row grouping) or the aggregation footer. */
    rowType: DataGridRowType;
}

export interface DataGridColumn<T> {
    /** The key of the value in the row. Also the unique id of the column. */
    field: string;
    /** The text displayed in the column header. Defaults to `field`. */
    headerName?: string;
    /** A description shown in a tooltip next to the header name. */
    description?: string;
    /**
     * The type of the values. It sets the default alignment, formatting, sorting, filter operators and edit input.
     * @default "string"
     */
    type?: DataGridColumnType;
    /**
     * The initial width of the column in pixels.
     * @default 150
     */
    width?: number;
    /**
     * The minimum width of the column when resizing.
     * @default 60
     */
    minWidth?: number;
    /** The maximum width of the column when resizing. */
    maxWidth?: number;
    /** Makes the column fill the remaining space, in proportion to other flex columns. Overrides `width`. */
    flex?: number;
    /** The alignment of the cell content. Number columns are right aligned and boolean columns centered by default. */
    align?: "left" | "center" | "right";
    /** The options of a `singleSelect` column. */
    valueOptions?: DataGridValueOption[];
    /** Returns the value of the cell. Use it for computed columns. */
    valueGetter?: (row: T) => unknown;
    /** Returns the text of the cell. It's also used by the quick filter and the CSV export. */
    valueFormatter?: (value: unknown, row: T) => string;
    /** Converts the text typed in the edit input to a value. */
    valueParser?: (text: string, row: T) => unknown;
    /** Returns the row with the edited value. Required to edit a column that has a `valueGetter`. */
    valueSetter?: (value: unknown, row: T) => T;
    /** Renders the content of the cell. */
    renderCell?: (params: DataGridRenderCellParams<T>) => ReactNode;
    /** Compares two values when sorting. */
    sortComparator?: (a: unknown, b: unknown) => number;
    /** Whether this column labels its row for assistive technology. The first column is used when no column sets it. */
    isRowHeader?: boolean;
    /**
     * Whether the column can be sorted.
     * @default true
     */
    sortable?: boolean;
    /**
     * Whether the column can be filtered.
     * @default true
     */
    filterable?: boolean;
    /**
     * Whether the column can be hidden.
     * @default true
     */
    hideable?: boolean;
    /**
     * Whether the column can be resized.
     * @default true
     */
    resizable?: boolean;
    /**
     * Whether the column can be pinned.
     * @default true
     */
    pinnable?: boolean;
    /** Whether the rows can be grouped by this column. */
    groupable?: boolean;
    /** Whether the column menu offers aggregation functions, such as sum and average. */
    aggregable?: boolean;
    /** Whether the cells can be edited. */
    editable?: boolean;
    /** Additional class name of the cells. */
    cellClassName?: string;
}

export interface DataGridFilterItem {
    /** The unique id of the filter. */
    id: number;
    /** The field of the filtered column. */
    field: string;
    /** The operator, such as "contains" or ">". */
    operator: string;
    /** The value to compare with. A list of values for the "isAnyOf" operator. */
    value?: string | string[];
}

export interface DataGridFilterModel {
    /** The filters of the filter panel. */
    items: DataGridFilterItem[];
    /** Whether rows must match all filters ("and") or any filter ("or"). */
    logicOperator: DataGridLogicOperator;
    /** The text of the quick filter. Each word must match a visible column. */
    quickFilter: string;
}

export interface DataGridSort {
    /** The field of the sorted column. */
    field: string;
    /** The sort direction. */
    direction: "ascending" | "descending";
}

export interface DataGridFormatters {
    number: Intl.NumberFormat;
    date: Intl.DateTimeFormat;
    dateTime: Intl.DateTimeFormat;
}

/** Values */

export const getOptionValue = (option: DataGridValueOption) => (typeof option === "string" ? option : option.value);

export const getOptionLabel = (option: DataGridValueOption) => (typeof option === "string" ? option : option.label);

export const getCellValue = <T>(row: T, column: DataGridColumn<T>): unknown =>
    column.valueGetter ? column.valueGetter(row) : (row as Record<string, unknown>)[column.field];

export const toDate = (value: unknown): Date | null => {
    if (value instanceof Date) return Number.isNaN(value.getTime()) ? null : value;
    if (typeof value === "string" || typeof value === "number") {
        const date = new Date(value);
        return Number.isNaN(date.getTime()) ? null : date;
    }
    return null;
};

const isEmptyValue = (value: unknown) => value == null || value === "" || (Array.isArray(value) && value.length === 0);

export const formatCellValue = <T>(value: unknown, row: T, column: DataGridColumn<T>, formatters: DataGridFormatters): string => {
    if (column.valueFormatter) return column.valueFormatter(value, row);
    if (isEmptyValue(value)) return "";

    switch (column.type) {
        case "number":
            return typeof value === "number" ? formatters.number.format(value) : String(value);
        case "date":
        case "dateTime": {
            const date = toDate(value);
            if (!date) return "";
            return column.type === "date" ? formatters.date.format(date) : formatters.dateTime.format(date);
        }
        case "boolean":
            return value ? "Yes" : "No";
        case "singleSelect": {
            const option = column.valueOptions?.find((item) => getOptionValue(item) === value);
            return option ? getOptionLabel(option) : String(value);
        }
        default:
            return Array.isArray(value) ? value.join(", ") : String(value);
    }
};

/** Converts a date to the value of a native date input, "YYYY-MM-DD", in local time. */
export const toDateInputValue = (value: unknown) => {
    const date = toDate(value);
    if (!date) return "";
    return [date.getFullYear(), String(date.getMonth() + 1).padStart(2, "0"), String(date.getDate()).padStart(2, "0")].join("-");
};

/** Converts the value of a native date input, "YYYY-MM-DD", to a local date. */
export const fromDateInputValue = (value: string) => {
    const [year, month, day] = value.split("-").map(Number);
    if (!year || !month || !day) return null;
    return new Date(year, month - 1, day);
};

/** Filtering */

export interface DataGridFilterOperator {
    /** The id of the operator. */
    value: string;
    /** The label shown in the filter panel. */
    label: string;
    /** Whether the operator needs a value, unlike "is empty". */
    requiresValue: boolean;
    /** Whether the value is a list of values. */
    multiple?: boolean;
    /** Returns whether a cell value matches the filter value. */
    test: (cellValue: unknown, filterValue: string | string[]) => boolean;
}

const normalize = (value: unknown) => (value == null ? "" : String(value)).trim().toLowerCase();

// "is any of" filters on text and number columns take a comma-separated list.
const toList = (value: string | string[]) => (Array.isArray(value) ? value : value.split(",")).map(normalize).filter(Boolean);

const toDayNumber = (value: unknown) => {
    const date = toDate(value);
    return date ? date.getFullYear() * 10000 + (date.getMonth() + 1) * 100 + date.getDate() : null;
};

const emptyOperators: DataGridFilterOperator[] = [
    { value: "isEmpty", label: "is empty", requiresValue: false, test: (value) => isEmptyValue(value) },
    { value: "isNotEmpty", label: "is not empty", requiresValue: false, test: (value) => !isEmptyValue(value) },
];

const stringOperators: DataGridFilterOperator[] = [
    { value: "contains", label: "contains", requiresValue: true, test: (value, filter) => normalize(value).includes(normalize(filter)) },
    { value: "doesNotContain", label: "does not contain", requiresValue: true, test: (value, filter) => !normalize(value).includes(normalize(filter)) },
    { value: "equals", label: "equals", requiresValue: true, test: (value, filter) => normalize(value) === normalize(filter) },
    { value: "doesNotEqual", label: "does not equal", requiresValue: true, test: (value, filter) => normalize(value) !== normalize(filter) },
    { value: "startsWith", label: "starts with", requiresValue: true, test: (value, filter) => normalize(value).startsWith(normalize(filter)) },
    { value: "endsWith", label: "ends with", requiresValue: true, test: (value, filter) => normalize(value).endsWith(normalize(filter)) },
    ...emptyOperators,
    { value: "isAnyOf", label: "is any of", requiresValue: true, multiple: true, test: (value, filter) => toList(filter).includes(normalize(value)) },
];

const compareNumbers = (test: (value: number, filter: number) => boolean) => (value: unknown, filter: string | string[]) => {
    const filterNumber = Number(filter);
    return typeof value === "number" && !Number.isNaN(filterNumber) && test(value, filterNumber);
};

const numberOperators: DataGridFilterOperator[] = [
    { value: "=", label: "=", requiresValue: true, test: compareNumbers((value, filter) => value === filter) },
    { value: "!=", label: "!=", requiresValue: true, test: compareNumbers((value, filter) => value !== filter) },
    { value: ">", label: ">", requiresValue: true, test: compareNumbers((value, filter) => value > filter) },
    { value: ">=", label: ">=", requiresValue: true, test: compareNumbers((value, filter) => value >= filter) },
    { value: "<", label: "<", requiresValue: true, test: compareNumbers((value, filter) => value < filter) },
    { value: "<=", label: "<=", requiresValue: true, test: compareNumbers((value, filter) => value <= filter) },
    ...emptyOperators,
    {
        value: "isAnyOf",
        label: "is any of",
        requiresValue: true,
        multiple: true,
        test: (value, filter) => typeof value === "number" && toList(filter).map(Number).includes(value),
    },
];

const compareDays = (test: (value: number, filter: number) => boolean) => (value: unknown, filter: string | string[]) => {
    const day = toDayNumber(value);
    const filterDay = toDayNumber(fromDateInputValue(String(filter)));
    return day !== null && filterDay !== null && test(day, filterDay);
};

const dateOperators: DataGridFilterOperator[] = [
    { value: "is", label: "is", requiresValue: true, test: compareDays((value, filter) => value === filter) },
    { value: "not", label: "is not", requiresValue: true, test: compareDays((value, filter) => value !== filter) },
    { value: "after", label: "is after", requiresValue: true, test: compareDays((value, filter) => value > filter) },
    { value: "onOrAfter", label: "is on or after", requiresValue: true, test: compareDays((value, filter) => value >= filter) },
    { value: "before", label: "is before", requiresValue: true, test: compareDays((value, filter) => value < filter) },
    { value: "onOrBefore", label: "is on or before", requiresValue: true, test: compareDays((value, filter) => value <= filter) },
    ...emptyOperators,
];

// The boolean filter value is "any", "true" or "false". "any" matches every row.
const booleanOperators: DataGridFilterOperator[] = [
    { value: "is", label: "is", requiresValue: true, test: (value, filter) => filter === "any" || String(Boolean(value)) === filter },
];

const singleSelectOperators: DataGridFilterOperator[] = [
    { value: "is", label: "is", requiresValue: true, test: (value, filter) => String(value ?? "") === filter },
    { value: "not", label: "is not", requiresValue: true, test: (value, filter) => String(value ?? "") !== filter },
    { value: "isAnyOf", label: "is any of", requiresValue: true, multiple: true, test: (value, filter) => toList(filter).includes(normalize(value)) },
];

export const getFilterOperators = (type: DataGridColumnType = "string") => {
    switch (type) {
        case "number":
            return numberOperators;
        case "date":
        case "dateTime":
            return dateOperators;
        case "boolean":
            return booleanOperators;
        case "singleSelect":
            return singleSelectOperators;
        default:
            return stringOperators;
    }
};

/** The first operator of the column's type, used for new filters. */
export const getDefaultOperator = <T>(column: DataGridColumn<T>) => getFilterOperators(column.type)[0]?.value ?? "";

let nextFilterId = 1;

/** A new, empty filter for a column. */
export const createFilterItem = <T>(column: DataGridColumn<T>): DataGridFilterItem => ({
    id: nextFilterId++,
    field: column.field,
    operator: getDefaultOperator(column),
    value: "",
});

/** Whether a filter has everything it needs to apply. An incomplete filter, like "contains" without a value, is ignored. */
export const isFilterActive = <T>(item: DataGridFilterItem, column: DataGridColumn<T> | undefined) => {
    const operator = column && getFilterOperators(column.type).find((option) => option.value === item.operator);
    if (!operator) return false;
    if (column?.type === "boolean") return item.value === "true" || item.value === "false";
    return !operator.requiresValue || !isEmptyValue(Array.isArray(item.value) ? item.value : item.value?.trim());
};

export const filterRows = <T>(
    rows: T[],
    model: DataGridFilterModel,
    columns: Map<string, DataGridColumn<T>>,
    quickFilterColumns: DataGridColumn<T>[],
    getFormattedValue: (row: T, column: DataGridColumn<T>) => string,
) => {
    const filters = model.items.flatMap((item) => {
        const column = columns.get(item.field);
        if (!column || !isFilterActive(item, column)) return [];
        const operator = getFilterOperators(column.type).find((option) => option.value === item.operator);
        return operator ? [{ item, column, operator }] : [];
    });
    const words = model.quickFilter.trim().toLowerCase().split(/\s+/).filter(Boolean);

    if (filters.length === 0 && words.length === 0) return rows;

    return rows.filter((row) => {
        if (filters.length > 0) {
            const matches = (filter: (typeof filters)[number]) => filter.operator.test(getCellValue(row, filter.column), filter.item.value ?? "");
            const passes = model.logicOperator === "and" ? filters.every(matches) : filters.some(matches);
            if (!passes) return false;
        }

        // Like MUI, every word of the quick filter must match at least one visible column: number columns by equality, other
        // columns when their formatted text contains the word. Boolean columns are skipped.
        return words.every((word) =>
            quickFilterColumns.some((column) => {
                if (column.type === "boolean") return false;
                if (column.type === "number") return Number(word) === getCellValue(row, column);
                return getFormattedValue(row, column).toLowerCase().includes(word);
            }),
        );
    });
};

/** Sorting */

export const compareCellValues = <T>(a: unknown, b: unknown, column: DataGridColumn<T>, collator: Intl.Collator) => {
    if (column.sortComparator) return column.sortComparator(a, b);

    // Empty values come first in ascending order.
    const aEmpty = isEmptyValue(a);
    const bEmpty = isEmptyValue(b);
    if (aEmpty || bEmpty) return aEmpty && bEmpty ? 0 : aEmpty ? -1 : 1;

    switch (column.type) {
        case "number":
            return Number(a) - Number(b);
        case "date":
        case "dateTime":
            return (toDate(a)?.getTime() ?? 0) - (toDate(b)?.getTime() ?? 0);
        case "boolean":
            return Number(Boolean(a)) - Number(Boolean(b));
        case "singleSelect": {
            const label = (value: unknown) => {
                const option = column.valueOptions?.find((item) => getOptionValue(item) === value);
                return option ? getOptionLabel(option) : String(value);
            };
            return collator.compare(label(a), label(b));
        }
        default:
            return collator.compare(String(a), String(b));
    }
};

export const sortRows = <T>(rows: T[], sort: DataGridSort | null, column: DataGridColumn<T> | undefined, collator: Intl.Collator) => {
    if (!sort || !column) return rows;

    const direction = sort.direction === "ascending" ? 1 : -1;
    return [...rows].sort((a, b) => direction * compareCellValues(getCellValue(a, column), getCellValue(b, column), column, collator));
};

/** Aggregation */

const numbersOf = (values: unknown[]) => values.filter((value): value is number => typeof value === "number" && !Number.isNaN(value));

const extremeOf = (values: unknown[], pick: (a: number, b: number) => boolean) => {
    let result: unknown = null;
    let resultValue = 0;
    for (const value of values) {
        const comparable = typeof value === "number" ? value : toDate(value)?.getTime();
        if (comparable == null || Number.isNaN(comparable)) continue;
        if (result === null || pick(comparable, resultValue)) {
            result = value;
            resultValue = comparable;
        }
    }
    return result;
};

export const aggregationFunctions: Record<DataGridAggregationFunction, { label: string; types: DataGridColumnType[]; apply: (values: unknown[]) => unknown }> =
    {
        sum: { label: "Sum", types: ["number"], apply: (values) => numbersOf(values).reduce((sum, value) => sum + value, 0) },
        avg: {
            label: "Average",
            types: ["number"],
            apply: (values) => {
                const numbers = numbersOf(values);
                return numbers.length ? numbers.reduce((sum, value) => sum + value, 0) / numbers.length : null;
            },
        },
        min: { label: "Min", types: ["number", "date", "dateTime"], apply: (values) => extremeOf(values, (a, b) => a < b) },
        max: { label: "Max", types: ["number", "date", "dateTime"], apply: (values) => extremeOf(values, (a, b) => a > b) },
        size: { label: "Size", types: ["string", "number", "date", "dateTime", "boolean", "singleSelect"], apply: (values) => values.length },
    };

export const getAggregationFunctions = (type: DataGridColumnType = "string") =>
    (Object.keys(aggregationFunctions) as DataGridAggregationFunction[]).filter((name) => aggregationFunctions[name].types.includes(type));

export const aggregateRows = <T>(rows: T[], model: Record<string, DataGridAggregationFunction>, columns: Map<string, DataGridColumn<T>>) => {
    const result: Record<string, unknown> = {};
    for (const [field, name] of Object.entries(model)) {
        const column = columns.get(field);
        if (!column) continue;
        result[field] = aggregationFunctions[name].apply(rows.map((row) => getCellValue(row, column)));
    }
    return result;
};

/** Grouping */

export interface DataGridGroup<T> {
    /** The id of the group row. */
    id: string;
    /** The formatted value shared by the rows of the group. */
    label: string;
    /** The rows of the group. */
    rows: T[];
    /** The aggregated values of the group, by field. */
    aggregates: Record<string, unknown>;
}

export const groupRows = <T>(
    rows: T[],
    column: DataGridColumn<T>,
    getFormattedValue: (row: T, column: DataGridColumn<T>) => string,
    aggregation: Record<string, DataGridAggregationFunction>,
    columns: Map<string, DataGridColumn<T>>,
    direction: "ascending" | "descending",
    collator: Intl.Collator,
) => {
    const groups = new Map<string, T[]>();
    for (const row of rows) {
        const label = getFormattedValue(row, column) || "(empty)";
        const group = groups.get(label);
        if (group) group.push(row);
        else groups.set(label, [row]);
    }

    return [...groups.entries()]
        .sort(([a], [b]) => (direction === "ascending" ? 1 : -1) * collator.compare(a, b))
        .map(([label, groupRows]): DataGridGroup<T> => ({
            id: `group:${column.field}:${label}`,
            label,
            rows: groupRows,
            aggregates: aggregateRows(groupRows, aggregation, columns),
        }));
};

/** Export */

const escapeCsv = (value: string) => (/[",\n\r]/.test(value) ? `"${value.replace(/"/g, '""')}"` : value);

export const toCsv = <T>(rows: T[], columns: DataGridColumn<T>[], getFormattedValue: (row: T, column: DataGridColumn<T>) => string) =>
    [
        columns.map((column) => escapeCsv(column.headerName ?? column.field)).join(","),
        ...rows.map((row) => columns.map((column) => escapeCsv(getFormattedValue(row, column))).join(",")),
    ].join("\r\n");

export const downloadFile = (content: string, fileName: string, type: string) => {
    // The byte order mark makes Excel read the file as UTF-8.
    const url = URL.createObjectURL(new Blob(["﻿", content], { type }));
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 0);
};

const escapeHtml = (value: string) => value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export const printRows = <T>(rows: T[], columns: DataGridColumn<T>[], getFormattedValue: (row: T, column: DataGridColumn<T>) => string, title: string) => {
    const printWindow = window.open("", "_blank");
    if (!printWindow) return;

    const header = columns.map((column) => `<th>${escapeHtml(column.headerName ?? column.field)}</th>`).join("");
    const body = rows.map((row) => `<tr>${columns.map((column) => `<td>${escapeHtml(getFormattedValue(row, column))}</td>`).join("")}</tr>`).join("");

    printWindow.document.write(
        `<!doctype html><html><head><title>${escapeHtml(title)}</title><style>
            body { font: 12px system-ui, sans-serif; margin: 24px; }
            table { border-collapse: collapse; width: 100%; }
            th, td { border-bottom: 1px solid #e9eaeb; padding: 6px 8px; text-align: left; }
            th { background: #fafafa; }
        </style></head><body><table><thead><tr>${header}</tr></thead><tbody>${body}</tbody></table></body></html>`,
    );
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
};
