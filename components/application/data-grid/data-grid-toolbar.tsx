"use client";

import { useState } from "react";
import { ChevronDown, Columns03, Download01, FilterLines, Plus, Printer, Rows02, Rows03, SearchLg, Trash01, XClose } from "@untitledui/icons";
import type { Key } from "react-aria-components";
import { Dialog as AriaDialog, DialogTrigger as AriaDialogTrigger } from "react-aria-components";
import { Badge } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { ButtonUtility } from "@/components/base/buttons/button-utility";
import { Checkbox } from "@/components/base/checkbox/checkbox";
import { Dropdown } from "@/components/base/dropdown/dropdown";
import { Input } from "@/components/base/input/input";
import { MultiSelect } from "@/components/base/select/multi-select";
import { Select } from "@/components/base/select/select";
import { cx } from "@/utils/cx";
import type { DataGridColumn, DataGridDensity, DataGridFilterItem, DataGridFilterModel } from "./data-grid-utils";
import { createFilterItem, getDefaultOperator, getFilterOperators, getOptionLabel, getOptionValue, isFilterActive } from "./data-grid-utils";

export type DataGridPanel = "columns" | "filters";

/** Columns panel */

interface ColumnsPanelProps<T> {
    columns: DataGridColumn<T>[];
    columnVisibility: Record<string, boolean>;
    onColumnVisibilityChange: (model: Record<string, boolean>) => void;
    onReset: () => void;
    /** Whether the visibility differs from the initial one, which enables the reset button. */
    canReset: boolean;
}

const ColumnsPanel = <T,>({ columns, columnVisibility, onColumnVisibilityChange, onReset, canReset }: ColumnsPanelProps<T>) => {
    const [search, setSearch] = useState("");

    const hideableColumns = columns.filter((column) => column.hideable !== false);
    const visibleCount = hideableColumns.filter((column) => columnVisibility[column.field] !== false).length;
    const matchingColumns = columns.filter((column) => (column.headerName ?? column.field).toLowerCase().includes(search.trim().toLowerCase()));

    const setAllVisible = (isVisible: boolean) =>
        onColumnVisibilityChange({ ...columnVisibility, ...Object.fromEntries(hideableColumns.map((column) => [column.field, isVisible])) });

    return (
        <AriaDialog aria-label="Manage columns" className="flex w-72 flex-col outline-hidden">
            <div className="border-b border-secondary p-3">
                <Input size="sm" icon={SearchLg} placeholder="Search" aria-label="Search columns" value={search} onChange={setSearch} autoFocus />
            </div>

            <div className="flex max-h-72 flex-col gap-0.5 overflow-y-auto p-1.5">
                {matchingColumns.map((column) => (
                    <Checkbox
                        key={column.field}
                        label={column.headerName ?? column.field}
                        isSelected={columnVisibility[column.field] !== false}
                        isDisabled={column.hideable === false}
                        onChange={(isSelected) => onColumnVisibilityChange({ ...columnVisibility, [column.field]: isSelected })}
                        className="rounded-md px-2.5 py-2 hover:bg-primary_hover"
                    />
                ))}
                {matchingColumns.length === 0 && <p className="px-2.5 py-2 text-sm text-tertiary">No columns</p>}
            </div>

            <div className="flex items-center justify-between gap-3 border-t border-secondary px-4 py-3">
                <Checkbox
                    label="Show/Hide all"
                    isSelected={visibleCount === hideableColumns.length}
                    isIndeterminate={visibleCount > 0 && visibleCount < hideableColumns.length}
                    onChange={() => setAllVisible(visibleCount < hideableColumns.length)}
                />
                <Button size="sm" color="link-gray" isDisabled={!canReset} onClick={onReset}>
                    Reset
                </Button>
            </div>
        </AriaDialog>
    );
};

/** Filter panel */

interface FilterRowProps<T> {
    item: DataGridFilterItem;
    index: number;
    columns: DataGridColumn<T>[];
    model: DataGridFilterModel;
    onChange: (model: DataGridFilterModel) => void;
    onClose: () => void;
}

const FilterRow = <T,>({ item, index, columns, model, onChange, onClose }: FilterRowProps<T>) => {
    const column = columns.find((option) => option.field === item.field) ?? columns[0];
    const operators = getFilterOperators(column?.type);
    const operator = operators.find((option) => option.value === item.operator) ?? operators[0];
    if (!column || !operator) return null;

    const label = column.headerName ?? column.field;

    const update = (changes: Partial<DataGridFilterItem>) =>
        onChange({ ...model, items: model.items.map((filter) => (filter.id === item.id ? { ...filter, ...changes } : filter)) });

    const options = (column.valueOptions ?? []).map((option) => ({ id: getOptionValue(option), label: getOptionLabel(option) }));

    const renderValueInput = () => {
        if (!operator.requiresValue) return <div />;

        if (column.type === "boolean") {
            return (
                <Select
                    size="sm"
                    aria-label="Value"
                    selectedKey={item.value === "true" || item.value === "false" ? item.value : "any"}
                    onSelectionChange={(key) => update({ value: String(key) })}
                    items={[
                        { id: "any", label: "any" },
                        { id: "true", label: "true" },
                        { id: "false", label: "false" },
                    ]}
                >
                    {(option) => <Select.Item id={option.id}>{option.label}</Select.Item>}
                </Select>
            );
        }

        if (column.type === "singleSelect" && operator.multiple) {
            return (
                <MultiSelect
                    size="sm"
                    placeholder="Select values"
                    items={options}
                    selectedKeys={new Set(Array.isArray(item.value) ? item.value : [])}
                    onSelectionChange={(keys) => update({ value: keys === "all" ? options.map((option) => String(option.id)) : [...keys].map(String) })}
                    showFooter={false}
                >
                    {(option) => <MultiSelect.Item id={option.id}>{option.label}</MultiSelect.Item>}
                </MultiSelect>
            );
        }

        if (column.type === "singleSelect") {
            return (
                <Select
                    size="sm"
                    aria-label="Value"
                    placeholder="Select a value"
                    selectedKey={typeof item.value === "string" && item.value ? item.value : null}
                    onSelectionChange={(key) => update({ value: String(key) })}
                    items={options}
                >
                    {(option) => <Select.Item id={option.id}>{option.label}</Select.Item>}
                </Select>
            );
        }

        const isDate = column.type === "date" || column.type === "dateTime";

        return (
            <Input
                size="sm"
                aria-label="Value"
                type={isDate ? "date" : "text"}
                inputMode={column.type === "number" && !operator.multiple ? "decimal" : undefined}
                placeholder={operator.multiple ? "Values, separated by commas" : "Filter value"}
                value={typeof item.value === "string" ? item.value : ""}
                onChange={(value) => update({ value })}
            />
        );
    };

    return (
        <div className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-2 md:grid-cols-[auto_5rem_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.25fr)]">
            <ButtonUtility
                size="xs"
                color="tertiary"
                tooltip="Delete filter"
                icon={XClose}
                onClick={() => {
                    const items = model.items.filter((filter) => filter.id !== item.id);
                    onChange({ ...model, items });
                    // Like MUI, deleting the last filter closes the panel.
                    if (items.length === 0) onClose();
                }}
            />

            {index === 0 ? (
                <span className="text-sm text-tertiary max-md:hidden">Where</span>
            ) : (
                <Select
                    size="sm"
                    aria-label="Logic operator"
                    isDisabled={index > 1}
                    selectedKey={model.logicOperator}
                    onSelectionChange={(key) => onChange({ ...model, logicOperator: key === "or" ? "or" : "and" })}
                    items={[
                        { id: "and", label: "And" },
                        { id: "or", label: "Or" },
                    ]}
                >
                    {(option) => <Select.Item id={option.id}>{option.label}</Select.Item>}
                </Select>
            )}

            <Select
                size="sm"
                aria-label="Column"
                selectedKey={column.field}
                onSelectionChange={(key) => {
                    const nextColumn = columns.find((option) => option.field === key);
                    if (nextColumn) update({ field: nextColumn.field, operator: getDefaultOperator(nextColumn), value: "" });
                }}
                items={columns.map((option) => ({ id: option.field, label: option.headerName ?? option.field }))}
                className="max-md:col-start-2"
            >
                {(option) => <Select.Item id={option.id}>{option.label}</Select.Item>}
            </Select>

            <Select
                size="sm"
                aria-label={`Operator for ${label}`}
                selectedKey={operator.value}
                onSelectionChange={(key) => {
                    const nextOperator = operators.find((option) => option.value === key);
                    // Switching between a single value and a list of values clears the value.
                    if (nextOperator)
                        update({ operator: nextOperator.value, value: Boolean(nextOperator.multiple) === Boolean(operator.multiple) ? item.value : "" });
                }}
                items={operators.map((option) => ({ id: option.value, label: option.label }))}
                className="max-md:col-start-2"
            >
                {(option) => <Select.Item id={option.id}>{option.label}</Select.Item>}
            </Select>

            <div className="min-w-0 max-md:col-start-2">{renderValueInput()}</div>
        </div>
    );
};

interface FilterPanelProps<T> {
    columns: DataGridColumn<T>[];
    model: DataGridFilterModel;
    onChange: (model: DataGridFilterModel) => void;
    onClose: () => void;
}

const FilterPanel = <T,>({ columns, model, onChange, onClose }: FilterPanelProps<T>) => {
    return (
        <AriaDialog aria-label="Filters" className="flex w-[min(46rem,calc(100vw-2rem))] flex-col outline-hidden">
            <div className="flex flex-col gap-3 p-4">
                {model.items.map((item, index) => (
                    <FilterRow key={item.id} item={item} index={index} columns={columns} model={model} onChange={onChange} onClose={onClose} />
                ))}
                {model.items.length === 0 && <p className="text-sm text-tertiary">No filters applied.</p>}
            </div>

            <div className="flex items-center justify-between gap-3 border-t border-secondary px-4 py-3">
                <Button
                    size="sm"
                    color="link-color"
                    iconLeading={Plus}
                    isDisabled={columns.length === 0}
                    onClick={() => columns[0] && onChange({ ...model, items: [...model.items, createFilterItem(columns[0])] })}
                >
                    Add filter
                </Button>
                <Button
                    size="sm"
                    color="link-gray"
                    iconLeading={Trash01}
                    isDisabled={model.items.length === 0}
                    onClick={() => onChange({ ...model, items: [] })}
                >
                    Remove all
                </Button>
            </div>
        </AriaDialog>
    );
};

/** Toolbar */

const densityOptions: { id: DataGridDensity; label: string; icon: typeof Rows02 }[] = [
    { id: "compact", label: "Compact", icon: Rows03 },
    { id: "standard", label: "Standard", icon: Rows02 },
];

interface DataGridToolbarProps<T> {
    /** The columns users can show, hide and filter. */
    columns: DataGridColumn<T>[];
    columnVisibility: Record<string, boolean>;
    onColumnVisibilityChange: (model: Record<string, boolean>) => void;
    /** The initial column visibility, restored by the reset button of the columns panel. */
    initialColumnVisibility: Record<string, boolean>;
    filterModel: DataGridFilterModel;
    onFilterModelChange: (model: DataGridFilterModel) => void;
    density: DataGridDensity;
    onDensityChange: (density: DataGridDensity) => void;
    onExport: (format: "csv" | "print") => void;
    openPanel: DataGridPanel | null;
    onOpenPanelChange: (panel: DataGridPanel | null) => void;
    /** The class name of the toolbar, such as a padding that lines up with the cells. */
    className?: string;
}

export const DataGridToolbar = <T,>({
    columns,
    columnVisibility,
    onColumnVisibilityChange,
    initialColumnVisibility,
    filterModel,
    onFilterModelChange,
    density,
    onDensityChange,
    onExport,
    openPanel,
    onOpenPanelChange,
    className,
}: DataGridToolbarProps<T>) => {
    const filterableColumns = columns.filter((column) => column.filterable !== false && column.type !== "actions");
    const activeFilterCount = filterModel.items.filter((item) =>
        isFilterActive(
            item,
            columns.find((column) => column.field === item.field),
        ),
    ).length;
    const DensityIcon = densityOptions.find((option) => option.id === density)?.icon ?? Rows02;
    const isVisible = (model: Record<string, boolean>, field: string) => model[field] !== false;
    const canResetVisibility = columns.some((column) => isVisible(columnVisibility, column.field) !== isVisible(initialColumnVisibility, column.field));

    // Laid out like the search and filters bar of `Table`'s examples.
    return (
        <div className={cx("flex flex-wrap gap-3 border-b border-secondary px-4 py-3", className)}>
            <div className="flex min-w-0 flex-1 flex-wrap gap-3">
                <Input
                    size="sm"
                    icon={SearchLg}
                    aria-label="Search"
                    placeholder="Search"
                    value={filterModel.quickFilter}
                    onChange={(quickFilter) => onFilterModelChange({ ...filterModel, quickFilter })}
                    className="min-w-0 flex-1 sm:max-w-70"
                />
            </div>

            <div className="flex flex-wrap items-center gap-3">
                <AriaDialogTrigger isOpen={openPanel === "columns"} onOpenChange={(isOpen) => onOpenPanelChange(isOpen ? "columns" : null)}>
                    <Button size="sm" color="secondary" iconLeading={Columns03} iconTrailing={ChevronDown}>
                        Columns
                    </Button>
                    <Dropdown.Popover placement="bottom start" className="w-auto">
                        <ColumnsPanel
                            columns={columns}
                            columnVisibility={columnVisibility}
                            onColumnVisibilityChange={onColumnVisibilityChange}
                            onReset={() => onColumnVisibilityChange(initialColumnVisibility)}
                            canReset={canResetVisibility}
                        />
                    </Dropdown.Popover>
                </AriaDialogTrigger>

                <AriaDialogTrigger
                    isOpen={openPanel === "filters"}
                    onOpenChange={(isOpen) => {
                        // Like MUI, opening an empty filter panel starts a filter on the first column.
                        if (isOpen && filterModel.items.length === 0 && filterableColumns[0]) {
                            onFilterModelChange({ ...filterModel, items: [createFilterItem(filterableColumns[0])] });
                        }
                        onOpenPanelChange(isOpen ? "filters" : null);
                    }}
                >
                    <Button size="sm" color="secondary" iconLeading={FilterLines} iconTrailing={ChevronDown}>
                        <span className="flex items-center gap-1.5">
                            Filters
                            {activeFilterCount > 0 && (
                                <Badge size="sm" color="gray" type="modern">
                                    {activeFilterCount}
                                </Badge>
                            )}
                        </span>
                    </Button>
                    <Dropdown.Popover placement="bottom start" className="w-auto">
                        <FilterPanel columns={filterableColumns} model={filterModel} onChange={onFilterModelChange} onClose={() => onOpenPanelChange(null)} />
                    </Dropdown.Popover>
                </AriaDialogTrigger>

                <Dropdown.Root>
                    <Button size="sm" color="secondary" iconLeading={DensityIcon} iconTrailing={ChevronDown}>
                        Density
                    </Button>
                    <Dropdown.Popover placement="bottom start" className="w-48">
                        <Dropdown.Menu
                            aria-label="Density"
                            selectionMode="single"
                            disallowEmptySelection
                            selectedKeys={new Set<Key>([density])}
                            onSelectionChange={(keys) => {
                                const [key] = keys === "all" ? [] : [...keys];
                                const option = densityOptions.find((item) => item.id === key);
                                if (option) onDensityChange(option.id);
                            }}
                            items={densityOptions}
                        >
                            {(option) => <Dropdown.Item id={option.id} label={option.label} icon={option.icon} />}
                        </Dropdown.Menu>
                    </Dropdown.Popover>
                </Dropdown.Root>

                <Dropdown.Root>
                    <Button size="sm" color="secondary" iconLeading={Download01} iconTrailing={ChevronDown}>
                        Export
                    </Button>
                    <Dropdown.Popover placement="bottom start" className="w-52">
                        <Dropdown.Menu aria-label="Export" onAction={(key) => onExport(key === "print" ? "print" : "csv")}>
                            <Dropdown.Item id="csv" label="Download as CSV" icon={Download01} />
                            <Dropdown.Item id="print" label="Print" icon={Printer} />
                        </Dropdown.Menu>
                    </Dropdown.Popover>
                </Dropdown.Root>
            </div>
        </div>
    );
};
